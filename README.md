# 🐾 MemeFusion AI - Synth-Beast Edition

**Unleash the Beast. Forge the Future.**

<div align="center">

![Version](https://img.shields.io/badge/version-2.0-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Android-green)
![AI](https://img.shields.io/badge/AI-Gemini%202.5-red)

</div>

---

## 🎯 Overview

MemeFusion AI is a next-generation meme creation platform powered by the **Synth-Beast** - a cybernetic AI forge-master. Transform ordinary images into viral masterpieces using cutting-edge AI technology.

### ✨ Key Features

- **🧠 AI Vision Captions:** Automatic meme caption generation using Gemini 2.5 AI
- **⚡ Cinematic Image Fusion:** 8 artistic filters including the exclusive Synth-Beast cyberpunk transformation
- **🎨 Professional Editor:** Full customization suite with text scaling, colors, and layouts
- **🔥 Tiered System:** Free and Pro tiers with different capabilities
- **🛡️ Secure Architecture:** Backend API proxy protects sensitive API keys
- **📱 Mobile-First:** Optimized for Android with Capacitor framework

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Android Studio (for mobile app)
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Wealthcoop/MemeFusion-AI.git
   cd MemeFusion-AI
   ```

2. **Set up backend:**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   npm start
   ```

3. **Open frontend:**
   ```bash
   # Open index.html in a browser or serve with a local server
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

4. **Build Android app:**
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

---

## 📁 Project Structure

```
MemeFusion-AI/
├── index.html              # Main web application
├── backend/                # Secure API proxy server
│   ├── server.js          # Express server with rate limiting
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
├── android/               # Android app (Capacitor)
│   ├── app/              # Android app module
│   └── build.gradle      # Build configuration
├── PRIVACY_POLICY.md     # Privacy policy for app stores
├── TERMS_OF_SERVICE.md   # Terms of service
├── DEPLOYMENT_GUIDE.md   # Complete deployment instructions
├── AI_PROMPTS_GUIDE.md   # AI prompt engineering guide
└── README.md             # This file
```

---

## 🎨 The Synth-Beast Brand

### Visual Identity

**The Mascot:** A hyper-realistic black panther/lynx hybrid with one natural emerald eye and one cybernetic apex eye glowing with blood-orange (#ff2200) radiance.

**Signature Color:** `#ff2200` (Blood-Orange) - pulses when AI is processing

**Personality:** "The Silent Forge-Master" - represents high-speed, aggressive creativity

### Tier System

#### 🐾 Tier 1: "The Cub" (Free)
- Basic captions and standard layouts
- 10-second recharge cooldown
- Standard watermark

#### ⚡ Tier 2: "Synth-Beast Mode" (Pro)
- Blood-orange UI theme
- Zero cooldown (Beast Unleashed)
- Exclusive Synth-Beast filter
- 4K watermark-free exports

#### 🔥 Tier 3: "The Forge Master" (Future)
- Mascot video assets
- Community governance
- Early access to new features

---

## 🛠️ Technology Stack

- **Frontend:** React 18, Tailwind CSS, Lucide Icons
- **Backend:** Node.js, Express, CORS, Rate Limiting
- **AI:** Google Gemini 2.5 Flash (Vision & Image Generation)
- **Mobile:** Capacitor, Android SDK 36
- **Deployment:** Railway/Heroku/Google Cloud Run

---

## 🔒 Security Features

✅ **Backend API Proxy** - API keys never exposed to client  
✅ **Rate Limiting** - Prevents abuse (6 req/min free, 60 req/min pro)  
✅ **CORS Protection** - Restricts API access to allowed domains  
✅ **Code Obfuscation** - ProGuard enabled for Android release  
✅ **Input Validation** - Sanitizes all user inputs  
✅ **Safety Filters** - AI content moderation built-in  

---

## 🎯 AI Filters

1. **Synth-Beast** ⚡ - Signature cyberpunk transformation with blood-orange cybernetic eye
2. **Anime** - High-definition Shonen anime illustration
3. **Sketch** - Masterful graphite pencil drawing
4. **Cyberpunk** - Gritty tech-noir with neon lighting
5. **3D Render** - Disney-Pixar style CGI
6. **Retro VHS** - 80s synthwave with glitch effects
7. **Oil Painting** - Classical museum masterpiece
8. **Original** - No filter applied

---

## 📱 Deployment

### Backend Deployment

**Recommended: Railway**
```bash
cd backend
railway login
railway init
railway up
```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete instructions.

### Android Release

1. Generate keystore (see [SIGNING_GUIDE.md](./android/SIGNING_GUIDE.md))
2. Build release: `./gradlew bundleRelease`
3. Upload to Google Play Console

---

## 📊 Roadmap

### Phase 1: Launch ✅
- [x] Secure backend API
- [x] Synth-Beast branding
- [x] 8 AI filters
- [x] Android app configuration
- [x] Legal documents

### Phase 2: Growth 🚧
- [ ] Pro subscription system
- [ ] User accounts and authentication
- [ ] Community meme gallery
- [ ] Social sharing integration
- [ ] Voice synthesis feature

### Phase 3: Expansion 📋
- [ ] iOS app
- [ ] Additional Synth-Beast filter variants
- [ ] Video meme support
- [ ] Collaboration features
- [ ] API for third-party developers

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini AI** - Powers our image transformation and caption generation
- **Unsplash** - Provides high-quality stock images for templates
- **Lucide Icons** - Beautiful icon set
- **Tailwind CSS** - Utility-first CSS framework

---

## 📞 Contact & Support

- **Website:** https://memefusion.aeye.monster
- **GitHub:** https://github.com/Wealthcoop/MemeFusion-AI
- **Issues:** https://github.com/Wealthcoop/MemeFusion-AI/issues

---

## ⚠️ Important Notes

### Security
- **NEVER commit API keys** to the repository
- Always use environment variables for sensitive data
- Review the security audit report before deployment

### API Usage
- Monitor your Google Cloud billing
- Set up billing alerts
- Implement rate limiting in production

### Legal
- Host privacy policy and terms of service publicly
- Complete Google Play content rating questionnaire
- Ensure compliance with GDPR/CCPA if applicable

---

<div align="center">

**🐾 Unleash the Beast. Forge the Future. ⚡**

*The Silent Forge-Master™*

Made with ❤️ and AI by Wealthcoop

</div>
