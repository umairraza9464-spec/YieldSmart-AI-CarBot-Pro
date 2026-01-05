# 🚗 YieldSmart AI CarBot Pro

**Advanced AI-Powered Car Lead Extraction Bot** | Multi-City OLX & Facebook Automation | Anti-Ban | Real-time Webhook Sync | Full Automation

## ✨ Features

### 🎯 Core Functionality
- **Multi-City Campaigns**: 8 Cities (Delhi, Mumbai, Pune, Surat, Patna, Indore, Punjab, Lucknow) with separate account management
- **Real-Time Lead Extraction**: Automatic detection of fresh car listings from OLX & Facebook Marketplace
- **Direct Owner Contact**: Automated extraction of owner phone numbers and messaging
- **OCR Technology**: Number plate recognition and car detail extraction from images
- **Google Sheets Integration**: Real-time webhook-based data sync
- **Anti-Ban System**: IP rotation, header randomization, human-like browsing behavior

### 🤖 AI & Automation
- **Free AI Models**: Google Gemini API, Groq AI, LLaMA 2 (offline)
- **Smart Messaging**: AI-powered WhatsApp/SMS automation to car owners
- **Data Enrichment**: Automatic data parsing and validation
- **Campaign Scheduling**: Date-range based extraction mode

### 📊 Dashboard & Management
- **Live Analytics Dashboard**: Real-time stats (leads, messages, response rate)
- **Extension Manager**: Chrome Web Store integration + manual upload
- **Notification System**: Desktop alerts & webhook updates
- **Follow-up Tracking**: 24-hour owner tracking and follow-up management

## 📋 Data Schema (Auto-Filled)

```
DATE | NAME | MOBILE | REG_NO | CAR_MODEL | VARIANT | YEAR | KM | ADDRESS | FOLLOW_UP | SOURCE | CONTEXT | LICENSE | REMARK
```

## 🚀 Quick Start

### Installation
```bash
# Clone repository
git clone https://github.com/umairraza9464-spec/YieldSmart-AI-CarBot-Pro.git
cd YieldSmart-AI-CarBot-Pro

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Fill in your API keys

# Run development mode
npm run dev

# Build for Windows
npm run build:win
```

## 🔧 Configuration

### Required API Keys
1. **Google Sheets API** - [Get API Key](https://developers.google.com/sheets/api)
2. **Google Gemini API** - [Free Tier](https://ai.google.dev)
3. **Groq API** - [Signup](https://console.groq.com)
4. **OLX Account Credentials** - For each city campaign
5. **Facebook Account Credentials** - For Marketplace scraping

### Free Resources
- **LLaMA 2**: [Install Ollama](https://ollama.ai)
- **Tesseract.js**: Built-in (no setup needed)
- **Puppeteer**: Automated headless browser

## 📱 Supported Platforms
- **Windows**: .exe standalone (1-click installation)
- **Mac**: Coming soon
- **Linux**: Electron support available

## 🎮 Usage

1. **Select Cities**: Choose which cities to run campaigns in
2. **Configure Accounts**: Add separate OLX/FB accounts per city
3. **Set Date Range**: Select dates for lead extraction
4. **Enable Scrapers**: Toggle OLX, Facebook, and auto-message
5. **Monitor Dashboard**: Watch real-time lead feed
6. **Auto-Sync Sheets**: All leads export to Google Sheets automatically

## 🛡️ Anti-Ban Features
- IP Rotation (residential proxies)
- Random browser headers
- Human-like click delays
- Request rate limiting
- User-agent randomization
- Cookie management
- Session rotation

## 📊 Tech Stack
- **Frontend**: Electron.js + HTML/CSS/JavaScript
- **Backend**: Node.js + Express.js
- **Browser Automation**: Puppeteer
- **Database**: SQLite3
- **AI Models**: Gemini API, Groq, LLaMA 2
- **OCR**: Tesseract.js
- **APIs**: Google Sheets, Webhooks

## 🤝 Contributing
Fork → Create Feature Branch → Commit → Push → PR

## 📄 License
MIT License - Feel free to use and modify

## ⚠️ Legal Notice
- Use responsibly and ethically
- Comply with platform terms of service
- Respect user privacy
- Do not use for spam or harassment

## 💬 Support
For issues, feature requests, or questions:
- Open GitHub Issue
- Email: umairraza9464@gmail.com

---

**Made with ❤️ for Car Lead Generation Professionals**
