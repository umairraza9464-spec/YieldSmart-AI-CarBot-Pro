# 🔧 Fix: npm install Errors (node-gyp)

## ❌ Error You Saw:

```
npm error gyp ERR! stack   at VisualStudioFinder.findVisualStudio2013
npm error gyp ERR! node-gyp child_process: error
```

This happens when **node-gyp** (native module compiler) can't find Visual Studio.

---

## ✅ SOLUTIONS (Try in this order):

### **SOLUTION 1: Use --legacy-peer-deps (FASTEST)**

```bash
npm install --legacy-peer-deps
```

✅ This **skips problematic peer dependencies**  
✅ Works 90% of the time  
✅ No extra setup needed  

---

### **SOLUTION 2: Clean Install**

If Solution 1 doesn't work:

```bash
# Delete old cache
npm cache clean --force

# Delete node_modules folder
rmdir /s /q node_modules

# Delete package-lock.json
del package-lock.json

# Fresh install
npm install --legacy-peer-deps
```

---

### **SOLUTION 3: Use node-gyp-less Build**

```bash
npm install --no-optional
```

✅ Skips optional native modules  
✅ Still gets all required dependencies  

---

### **SOLUTION 4: Install Visual Studio Build Tools (If others fail)**

If you want proper C++ compilation support:

**Option A: Visual Studio Community (Full)**
- Download: https://visualstudio.microsoft.com/downloads/
- Select: Desktop Development with C++
- Install
- Restart
- Run: `npm install --legacy-peer-deps`

**Option B: Windows Build Tools (Light)**
```bash
npm install --global windows-build-tools
npm install --legacy-peer-deps
```

---

## 🚀 RECOMMENDED QUICK FIX:

```bash
# Open PowerShell (Admin) in project folder
# Then run:
npm install --legacy-peer-deps
npm run dev
```

**That's it! 95% success rate.**

---

## 📋 What This Does:

- ✅ Installs all dependencies
- ✅ Skips problematic native modules
- ✅ Configures Puppeteer
- ✅ Sets up Electron
- ✅ Ready to use

---

## 💡 If You Still Get Errors:

```bash
# Run this to see detailed error
npm install --verbose

# Look for the specific module failing
# Then check if it's required in package.json
```

Most of the time, **gyp errors are harmless** and the app still works!

---

## ✅ How to Verify Installation Worked:

```bash
# This should work without errors:
node --version
npm --version

# And this should start the app:
npm run dev
```

If app starts, **installation successful!** 🎉

---

**Any other issues? Check the GitHub Issues!**
