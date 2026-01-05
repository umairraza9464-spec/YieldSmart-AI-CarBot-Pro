const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
require('dotenv').config();

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, '../../public/icons/app.png')
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../../public/index.html')}`;

  mainWindow.loadURL(startURL);
  if (isDev) mainWindow.webDevTools.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Automation IPC Handlers
ipcMain.handle('start-olx-scraper', async (event, cityName) => {
  // OLX scraping logic
  return { status: 'started', city: cityName };
});

ipcMain.handle('start-fb-scraper', async (event, cityName) => {
  // Facebook scraping logic
  return { status: 'started', city: cityName };
});

ipcMain.handle('sync-sheets', async (event, data) => {
  // Google Sheets sync
  return { status: 'synced', count: data.length };
});

ipcMain.handle('send-message', async (event, { owner, message }) => {
  // WhatsApp/SMS automation
  return { status: 'sent', to: owner };
});
