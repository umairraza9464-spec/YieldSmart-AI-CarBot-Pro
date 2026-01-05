# 🔐 YieldSmart AI CarBot - Login & OTP Setup Guide

## ⚡ Quick Start (For Testing/Development)

Yes, you can login directly in the app UI and OTP will work! Here's how:

---

## 🎯 Method 1: UI-Based Login (RECOMMENDED)

This is the **easiest way** to handle OTP authentication:

### Step 1: Open App Settings
1. Run: `npm run dev`
2. Open the app
3. Go to **Settings** tab
4. Click **"Account Configuration"**

### Step 2: Add Accounts for Each City

For each city (Delhi, Mumbai, etc.), add accounts:

```
📱 OLX Delhi
Email: your-olx-email@gmail.com
Password: (will be stored securely)
[Login Button]

📱 Facebook Delhi  
Email: your-fb-email@gmail.com
Password: (will be stored securely)
[Login Button]
```

### Step 3: OTP Handling

When you click **[Login Button]**:

1. **OLX**: 
   - App opens OLX login page in embedded browser
   - You enter credentials
   - OTP comes to your registered phone
   - **Enter OTP in the popup** that app shows
   - Session cookies are automatically saved
   - You can close the popup - app remembers login

2. **Facebook**:
   - Same process
   - Facebook sends OTP to your phone/email
   - Enter in popup
   - Cookies saved automatically

### Step 4: Persistent Sessions

✅ **Cookies are saved automatically** in:
```
~/AppData/Local/YieldSmart-AI-CarBot-Pro/Cookies
~/AppData/Local/YieldSmart-AI-CarBot-Pro/Sessions
```

✅ **Next time you run the app:**
- No login needed
- Sessions are restored
- Campaigns start immediately

---

## 🛠️ Method 2: Manual Configuration (Advanced)

If UI login fails, use manual config:

### Edit `.env` file:

```env
# OLX Accounts (8 Cities)
OLX_DELHI_EMAIL=your-email@gmail.com
OLX_DELHI_PASS=your-password
OLX_DELHI_2FA_ENABLED=true
OLX_DELHI_SESSION_ID=auto-generated-on-login

OLX_MUMBAI_EMAIL=your-email@gmail.com
OLX_MUMBAI_PASS=your-password
OLX_MUMBAI_2FA_ENABLED=true

# Facebook Accounts
FB_DELHI_EMAIL=your-fb@facebook.com
FB_DELHI_PASS=your-password
FB_DELHI_2FA_ENABLED=true

# Session Storage
SESSION_STORAGE_PATH=./sessions
COOKIE_PERSISTENCE=true
```

---

## 🔒 Security Notes

✅ **Password Storage**:
- Passwords are **encrypted** using Node.js crypto
- Not stored in plain text
- Encrypted in local config file

✅ **Session Cookies**:
- Stored in app's private directory
- Not accessible by other apps
- Cleared on logout

✅ **OTP Handling**:
- OTP is **never** stored
- Only used during login
- Session token saved instead

---

## ❌ Troubleshooting

### "OTP didn't arrive"
- Wait 2-3 minutes
- Check spam folder
- Try logging in directly on OLX/Facebook

### "Login failed - Invalid credentials"
- Verify email/password are correct
- Try OLX/Facebook login directly
- Check if 2FA is enabled

### "Session expired"
- Click "Re-login" button
- App will refresh session
- Cookies will be updated

---

## 📋 Complete Login Flow (Diagram)

```
┌─────────────────────────────────────┐
│ 1. Open YieldSmart App              │
│    npm run dev                      │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 2. Go to Settings → Accounts        │
│    Select City (Delhi/Mumbai/etc)   │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 3. Enter Email & Password           │
│    Click "Login" Button             │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 4. Browser opens (in app window)    │
│    Login to OLX/Facebook            │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 5. OTP Received on Phone            │
│    Enter OTP in Popup               │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 6. ✅ Login Successful              │
│    Cookies Saved Automatically      │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 7. Ready to Run Campaigns!          │
│    No re-login needed next time     │
└─────────────────────────────────────┘
```

---

## 🚀 Next Steps

1. **Download & Extract**:
   ```bash
   unzip YieldSmart-AI-CarBot-Pro-main.zip
   cd YieldSmart-AI-CarBot-Pro-main
   ```

2. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run App**:
   ```bash
   npm run dev
   ```

4. **Go to Settings** and add accounts with UI login

5. **Start Campaign** and let it run!

---

## 💡 Pro Tips

✅ Add all 8 city accounts at once  
✅ Use same email for all OLX accounts (Puppeteer handles it)  
✅ Keep app running - it auto-refreshes sessions  
✅ Check notifications when login expires  
✅ Logout from accounts when you want to stop campaigns  

---

**Questions? Open an Issue on GitHub!**
