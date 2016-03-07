'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.commandLine.appendSwitch('ppapi-flash-path', './plugins/PepperFlashPlayer.plugin');
app.commandLine.appendSwitch('ppapi-flash-version', '20.0.0.306');

function createWindow () {
  mainWindow = new BrowserWindow({
    minWidth: 714,
    width: 714,
    height: 420,
    y: 0,
    x: 0,
    fullscreen: false,
    fullscreenable: false,
    alwaysOnTop: true,
    darkTheme: true,
    webPreferences: {
      plugins: true,
      nodeIntegration: false,
      zoomFactor: .7,
    },
  });

  mainWindow.loadURL('http://www.dessinpose.com/poseviewer/');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
