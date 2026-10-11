const {app,clipboard}=require('electron'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict');
const folder=fs.mkdtempSync(path.join(os.tmpdir(),'aetherai-clipboard-'));os.homedir=()=>folder;app.setPath('userData',path.join(folder,'profile'));app.disableHardwareAcceleration();
const timeout=setTimeout(()=>{console.error('Clipboard native launch timed out');app.exit(1);},30000);
app.on('web-contents-created',(_event,contents)=>{contents.once('did-finish-load',async()=>{try{
 const text='def add(a, b):\n    return a + b\n\n# точное копирование';
 const copied=await contents.executeJavaScript('api.clipboardWrite('+JSON.stringify(text)+')');const actual=await clipboard.readText();assert.equal(actual,text);assert.equal(copied,true);
 assert.equal(await contents.executeJavaScript("api.clipboardWrite({text:'invalid'}).then(()=>false,()=>true)"),true);
 clearTimeout(timeout);console.log('PASS: actual main-process trusted clipboard IPC and invalid-payload rejection');app.quit();
 }catch(error){console.error(error);app.exit(1);}});});
require('../electron/main.js');
