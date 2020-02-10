const {app, BrowserWindow} = require('electron');
const fs = require("file-system");

//const {app, BrowserWindow1} = require('electron');
const url = require('url');
var path = require("path");
let win = null;
function boot() {
  //lage et nytt vindu
  win = new BrowserWindow({
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    },
    width: 1920,
    height: 1080,
    icon: path.join(__dirname, "icon.png"),
    minWidth: 640,
    minHeight: 360,
    frame: true,
    backgroundColor: '#212121',
  }
  //  win = new BrowserWindow1({
    //    width: 1920,
    //    height: 1080,
    //    frame: false
    //  }
    )
    //Laste inn html koden til vinduet
    
    //win.setMenu(null);
  win.loadURL(url.format({
    pathname: 'main.html',
    slashes: true
  }))
}
//Fyr av funksjon 'boot' når loading er ferdigstilt.
app.on('ready', boot);
