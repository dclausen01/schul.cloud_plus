const {app, BrowserWindow} = require('electron');

let mainWindow;
let toolWindow;
const btn = []; // die Button zu TaskCards usw.

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow(
    {
      width: 1024,
      height: 768,
      show: false,
      webPreferences:
      {
        nodeIntegration: false,
        webviewTag: true
      }
    });
   toolWindow = new BrowserWindow(
     {
       width: 1024,
       height: 768,
       show: false,
       webPreferences:
       {
         nodeIntegration: false,
         webviewTag: true
       }
     });
  mainWindow.loadURL('https://app.schul.cloud');
  mainWindow.openDevTools();
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    setTimeout(() => {
      mainWindow.webContents.once("dom-ready", ()=>{
        const navbar = document.getElementsByClassName('navigation-bar')[0];
        btn[1] = navbar.appendChild(document.createElement('button'));
        btn[1].innerHTML = 'Moodle';
        btn[1].onclick = function(){
          toolWindow.loadURL('https://portal.bbz-rd-eck.com/?');
          toolWindow.show();
        };
        btn[2] = navbar.appendChild(document.createElement('button'));
        btn[2].innerHTML = 'TaskCards';
        btn[2].onclick = function(){
          toolWindow.loadURL('https://bbzrdeck.taskcards.app');
          toolWindow.show();
        };
        navbar.appendChild(btn[1]);
        navbar.appendChild(btn[2]);
      })
    }, 4000);
  });
  
});
