const { app, BrowserWindow, session } = require('electron');
const path = require('node:path');

const LOCAL_APP = path.join(__dirname, 'app', 'index.html');

function createWindow() {
  const win = new BrowserWindow({
    title: 'LabGraph Pro 3.0.0',
    width: 1440,
    height: 900,
    minWidth: 920,
    minHeight: 680,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#0b1224',
    icon: path.join(__dirname, 'assets', 'app.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      webviewTag: false
    }
  });

  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (event) => event.preventDefault());
  win.once('ready-to-show', () => win.show());
  win.loadFile(LOCAL_APP);
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((_wc, _permission, callback) => callback(false));
  session.defaultSession.on('will-download', (_event, item) => {
    item.setSaveDialogOptions({
      title: 'Save LabGraph Pro output',
      defaultPath: item.getFilename()
    });
  });
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
