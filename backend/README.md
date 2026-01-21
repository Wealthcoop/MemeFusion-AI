# MemeFusion AI Backend Server

Secure API proxy for Google Gemini AI services.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Add your Google Gemini API key to `.env`:
```
GEMINI_API_KEY=your_actual_api_key_here
```

4. Start the server:
```bash
npm start
```

## API Endpoints

### POST /api/generate-caption
Generate AI captions for meme images.

**Request:**
```json
{
  "imageData": "base64_encoded_image_data"
}
```

**Response:**
```json
{
  "top": "TOP TEXT",
  "bottom": "BOTTOM TEXT"
}
```

### POST /api/fuse-image
Apply AI artistic filters to images.

**Request:**
```json
{
  "imageData": "base64_encoded_image_data",
  "filterPrompt": "Anime style transformation...",
  "topText": "OPTIONAL CONTEXT",
  "bottomText": "OPTIONAL CONTEXT"
}
```

**Response:**
```json
{
  "fusedImage": "data:image/png;base64,..."
}
```

### GET /health
Health check endpoint.

## Deployment

### Option 1: Heroku
```bash
heroku create memefusion-api
heroku config:set GEMINI_API_KEY=your_key
git push heroku main
```

### Option 2: Railway
1. Connect your GitHub repository
2. Add environment variable: `GEMINI_API_KEY`
3. Deploy automatically

### Option 3: Google Cloud Run
```bash
gcloud run deploy memefusion-api \
  --source . \
  --set-env-vars GEMINI_API_KEY=your_key \
  --allow-unauthenticated
```

## Rate Limiting

- **Free Tier:** 6 requests per minute (10-second cooldown)
- **Pro Tier:** 60 requests per minute (no cooldown)

## Security

- API keys are stored securely in environment variables
- CORS configured for allowed origins only
- Rate limiting prevents abuse
- Input validation on all endpoints
