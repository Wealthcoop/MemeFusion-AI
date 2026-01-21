const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*'
}));
app.use(express.json({ limit: '10mb' }));

// Rate limiting - Free tier: 6 requests per minute (10 second cooldown)
const freeTierLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 6, // 6 requests per minute = ~10 second cooldown
  message: { error: 'Rate limit exceeded. Please wait before trying again.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting - Pro tier: 60 requests per minute (no cooldown)
const proTierLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  message: { error: 'Rate limit exceeded. Please wait before trying again.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Helper function to fetch from Gemini API with retry logic
async function fetchWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      
      if (response.ok) return { success: true, data };
      
      const errorMessage = data.error?.message || "Unknown error";
      
      if (response.status === 400) {
        if (errorMessage.toLowerCase().includes("safety") || JSON.stringify(data).includes("SAFETY")) {
          return { success: false, error: "Safety Block: The AI considered this image/text too sensitive." };
        }
        if (errorMessage.toLowerCase().includes("large") || errorMessage.toLowerCase().includes("limit")) {
          return { success: false, error: "File too large. Try taking a screenshot of the photo instead." };
        }
      }
      
      if (response.status === 403 || response.status === 401) {
        return { success: false, error: "API authentication failed. Please contact support." };
      }

      if (response.status === 429) {
        return { success: false, error: "Quota Reached. Please wait 60 seconds." };
      }
      
      return { success: false, error: `API ${response.status}: ${errorMessage}` };
    } catch (err) {
      if (i === maxRetries - 1) {
        return { success: false, error: err.message };
      }
      await new Promise(res => setTimeout(res, 2000));
    }
  }
}

// POST /api/generate-caption - AI Vision caption generation
app.post('/api/generate-caption', freeTierLimiter, async (req, res) => {
  try {
    const { imageData } = req.body;
    
    if (!imageData) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Remove data URL prefix if present
    const base64Data = imageData.includes(',') ? imageData.split(',')[1] : imageData;

    const result = await fetchWithRetry(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: "Suggest a humorous viral meme caption. JSON: {top, bottom}." },
              { inlineData: { mimeType: "image/png", data: base64Data } }
            ]
          }],
          generationConfig: { responseMimeType: "application/json" }
        })
      }
    );

    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    const suggested = JSON.parse(result.data.candidates[0].content.parts[0].text);
    res.json({ top: suggested.top.toUpperCase(), bottom: suggested.bottom.toUpperCase() });

  } catch (error) {
    console.error('Caption generation error:', error);
    res.status(500).json({ error: 'Failed to generate caption' });
  }
});

// POST /api/fuse-image - AI Image Fusion
app.post('/api/fuse-image', freeTierLimiter, async (req, res) => {
  try {
    const { imageData, filterPrompt, topText, bottomText } = req.body;
    
    if (!imageData || !filterPrompt) {
      return res.status(400).json({ error: 'Image data and filter prompt are required' });
    }

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Remove data URL prefix if present
    const base64Data = imageData.includes(',') ? imageData.split(',')[1] : imageData;

    const result = await fetchWithRetry(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                text: `TOTAL ARTISTIC OVERHAUL DIRECTIVE: Completely re-build this image from scratch into the following professional art style: ${filterPrompt}. CORE RULE: You must maintain the exact pose, body orientation, and facial silhouette of the original subject so it is recognizable. Replace all real-world materials with stylistic ones. Subject context: "${topText} ${bottomText}". Studio quality 4k render.`
              },
              { inlineData: { mimeType: "image/png", data: base64Data } }
            ]
          }],
          generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
        })
      }
    );

    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    const candidate = result.data.candidates?.[0];
    if (candidate?.finishReason === "SAFETY") {
      return res.status(400).json({ error: "Safety Block: The AI refused to generate this specific visual." });
    }

    const imagePart = candidate?.content?.parts?.find(p => p.inlineData);
    if (!imagePart) {
      return res.status(400).json({ error: "Fusion Failed: No image returned. Try different text." });
    }

    res.json({ fusedImage: `data:image/png;base64,${imagePart.inlineData.data}` });

  } catch (error) {
    console.error('Image fusion error:', error);
    res.status(500).json({ error: 'Failed to fuse image' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`MemeFusion API Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
