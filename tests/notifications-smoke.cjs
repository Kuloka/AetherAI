const {app,BrowserWindow,ipcMain}=require('electron'),assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs'),{EventEmitter}=require('node:events');
const root=path.resolve(__dirname,'..'),out=path.join(root,'artifacts/notifications');fs.mkdirSync(out,{recursive:true});app.setPath('userData',path.join(out,'profile'));app.commandLine.appendSwitch('disable-gpu');
const {createUpdateService}=require('../electron/app-updates');
let w,checks=0,downloads=0,installs=0,mode='available';
const updater=new EventEmitter();updater.checkForUpdates=async()=>{checks++;if(mode==='error')throw Error('offline');updater.emit(mode==='current'?'update-not-available':'update-available',{version:'1.25.0'});};
updater.downloadUpdate=async()=>{downloads++;updater.emit('download-progress',{percent:52});updater.emit('update-downloaded',{version:'1.25.0'});};updater.quitAndInstall=()=>{installs++;};
const service=createUpdateService({version:'1.24.6',packaged:true,platform:'win32',updater,emit:state=>w?.webContents.send('updates:state',state)});
for(const [name,fn] of Object.entries({status:()=>service.status(),check:()=>service.check(),download:()=>service.download(),install:()=>service.install(),release:()=>service.openRelease()}))ipcMain.handle('notification:'+name,fn);
app.whenReady().then(async()=>{
 try{
 w=new BrowserWindow({width:1200,height:850,show:false,webPreferences:{offscreen:true,preload:path.join(__dirname,'notifications-preload.cjs')}});
 const errors=[];w.webContents.on('console-message',(_event,level,message)=>{if(level===3&&!/ERR_|Content Security|Failed to load resource/.test(message))errors.push(message);});
 const js=code=>w.webContents.executeJavaScript(code),wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 await w.loadFile(path.join(root,'index.html'));await wait(1200);await js("document.querySelector('#accountClose').click()");
 assert.equal(checks,1);assert.equal(downloads,0);assert.equal(installs,0);
 assert.equal(await js("document.querySelector('[data-notification=app-update] .notification-action').textContent"),'Скачать обновление');
 await js("window.AetherAINotifications.saved('OpenRouter')");await wait(100);
 assert.equal(await js("[...document.querySelectorAll('.notification-card')].find(e=>e.textContent.includes('API-ключ')).getAttribute('role')"),'status');
 assert.ok(await js("parseFloat(getComputedStyle(document.querySelector('.notification-card svg')).width)>=16"));
 fs.writeFileSync(path.join(out,'available-ru.png'),(await w.webContents.capturePage()).toPNG());
 await js("document.querySelector('[data-notification=app-update] .notification-action').click()");await wait(150);assert.equal(downloads,1);assert.equal(installs,0);
 assert.equal(await js("document.querySelector('[data-notification=app-update] .notification-action').textContent"),'Перезапустить и установить');
 await js("document.documentElement.lang='en'");await wait(100);assert.equal(await js("document.querySelector('[data-notification=app-update] .notification-action').textContent"),'Restart and install');
 await js("document.querySelector('[data-notification=app-update] .notification-action').click()");await wait(100);assert.equal(installs,1);
 await js("document.querySelector('[data-notification=app-update] .notification-dismiss').click()");await wait(100);assert.equal(await js("document.querySelector('[data-notification=app-update]')"),null);
 assert.equal(await js("document.querySelector('#checkAppUpdate')"),null,'Updates appear as reminders, not a settings entry');
 await js("document.body.classList.add('theme-light');window.AetherAINotifications.show({variant:'error',title:'Connection failed',body:'Try again.'})");await wait(100);
 assert.equal(await js("getComputedStyle(document.querySelector('.notification-card')).backgroundColor"),'rgb(255, 255, 255)');
 assert.ok(await js("!!document.querySelector('.notification-card[role=alert]')"));
 w.setSize(480,850);await wait(100);assert.ok(await js("document.querySelector('#notificationsRoot').getBoundingClientRect().right<=innerWidth"));
 await js("[...document.querySelectorAll('.notification-dismiss')].forEach(button=>button.click())");await wait(100);assert.equal(await js("document.querySelectorAll('.notification-card').length"),0);
 assert.deepEqual(errors,[]);console.log('PASS: React notifications, real updater event flow, explicit download/install, dismissal, live language, light theme and narrow window');app.quit();
 }catch(error){console.error(error);app.exit(1);}
});
