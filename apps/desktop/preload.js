const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('megajsDesktop', {
  platform: process.platform,
  shell: 'electron',
});
