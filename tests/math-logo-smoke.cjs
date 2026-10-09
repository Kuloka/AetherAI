const {app,BrowserWindow,ipcMain}=require('electron'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
app.disableHardwareAcceleration();app.setPath('userData',path.resolve(__dirname,'../artifacts/math-logo-profile'));
const response=String.raw`For 11 players and 7 weekdays:

\[\left\lceil\frac{11}{7}\right\rceil=2\]

Inline \(x^2+\sqrt{y}\), sum $$\sum_{i=1}^{n}i=\frac{n(n+1)}{2}$$ and matrix \[\begin{pmatrix}1&2\\3&4\end{pmatrix}\].`;
ipcMain.handle('mode:data-get',()=>({groups:[],chats:[]}));ipcMain.handle('mode:account-status',()=>({configured:false,user:null}));ipcMain.handle('mode:settings',()=>({appLanguage:'en',localAi:false}));ipcMain.handle('mode:save',()=>({}));ipcMain.handle('mode:memory-list',()=>[]);ipcMain.handle('mode:memory-context',()=> '');ipcMain.handle('mode:chat',()=>response);
ipcMain.handle('mode:write',()=>{throw Error('Math chat must not write a file');});
app.whenReady().then(async()=>{
 console.log('Preparing math preview');
 const win=new BrowserWindow({width:1200,height:850,show:false,frame:false,webPreferences:{offscreen:true,preload:path.join(__dirname,'model-mode-preload.cjs')}}),errors=[];
 win.webContents.on('console-message',(_e,level,message)=>{if(level===3)errors.push(message);});const evaluate=code=>win.webContents.executeJavaScript(code),wait=ms=>new Promise(r=>setTimeout(r,ms));
 await win.loadFile(path.resolve(__dirname,'../index.html'));console.log('Loaded math interface');
 win.webContents.debugger.attach('1.3');await win.webContents.debugger.sendCommand('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
 await wait(700);await evaluate("document.querySelector('#accountClose').click()");
 assert.equal(await evaluate("document.body.classList.contains('theme-light')"),true);
 assert.equal(await evaluate("getComputedStyle(document.querySelector('.welcome-brand-logo')).color"),'rgb(22, 24, 28)');
 const welcomeOriginal=await evaluate("document.querySelector('.welcome-brand-logo .aether-crown').getAttribute('d')");await wait(1700);
 assert.notEqual(await evaluate("document.querySelector('.welcome-brand-logo .aether-crown').getAttribute('d')"),welcomeOriginal);
 let prompt='';for(let i=0;i<50;i++){const before=await evaluate("document.querySelector('#composerPromptText').textContent");await wait(150);const after=await evaluate("document.querySelector('#composerPromptText').textContent");if(before&&before===after){prompt=after;break;}}
 assert.ok(prompt.length>5);assert.equal(await evaluate("document.querySelector('#userInput').placeholder"),'');
 await wait(1500);assert.equal(await evaluate("document.querySelector('#composerPromptText').textContent"),prompt);
 const promptPreview=path.resolve(__dirname,'../artifacts');fs.mkdirSync(promptPreview,{recursive:true});fs.writeFileSync(path.join(promptPreview,'aetherai-terminal-prompt.png'),(await win.webContents.capturePage()).toPNG());
 await evaluate("document.querySelector('#userInput').focus();document.querySelector('#userInput').value='My draft';document.querySelector('#userInput').dispatchEvent(new Event('input'))");await wait(300);
 assert.equal(await evaluate("document.querySelector('#composerPrompt').hidden"),true);assert.equal(await evaluate("document.querySelector('#userInput').value"),'My draft');
 const preview=path.resolve(__dirname,'../artifacts');fs.mkdirSync(preview,{recursive:true});fs.writeFileSync(path.join(preview,'aetherai-white-glass.png'),(await win.webContents.capturePage()).toPNG());
 await evaluate("document.querySelector('#userInput').value='Explain this mathematical result';document.querySelector('#userInput').dispatchEvent(new Event('input'));document.querySelector('#sendBtn').click()");await wait(1000);console.log('Received mathematical reply');
 assert.equal(await evaluate("document.querySelectorAll('#messages .katex').length"),4);
 assert.ok(await evaluate("!!document.querySelector('#messages mfrac') && !!document.querySelector('#messages mtable')"));
 assert.equal(await evaluate("document.querySelectorAll('.katex .blur-text-word').length"),0);
 await evaluate('document.fonts.ready.then(()=>true)');assert.ok(await evaluate("document.fonts.check('16px KaTeX_Main')"));console.log('Local fonts loaded');
 const out=path.resolve(__dirname,'../artifacts');fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(out,'aetherai-math.png'),(await win.webContents.capturePage()).toPNG());
 const original=await evaluate("document.querySelector('.side-logo .aether-crown').getAttribute('d')");
 await evaluate("document.querySelector('.side-logo').dispatchEvent(new PointerEvent('pointerenter'))");await wait(1300);
 assert.notEqual(await evaluate("document.querySelector('.side-logo .aether-crown').getAttribute('d')"),original);assert.equal(await evaluate("document.querySelector('.side-logo').dataset.logoMotion"),'flow');fs.writeFileSync(path.join(out,'aetherai-flow.png'),(await win.webContents.capturePage()).toPNG());
 await wait(1500);assert.equal(await evaluate("document.querySelector('.side-logo .aether-crown').getAttribute('d')"),original);
 await win.webContents.debugger.sendCommand('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await evaluate("document.querySelector('.side-logo').dispatchEvent(new PointerEvent('pointerenter'))");await wait(150);assert.equal(await evaluate("document.querySelector('.side-logo .aether-crown').getAttribute('d')"),original);
 assert.deepEqual(errors,[]);console.log('PASS: actual chat renders fractions/matrices offline; hover morphs A into waves and returns; reduced motion keeps the logo still.');win.destroy();app.quit();
}).catch(error=>{console.error(error);app.exit(1);});
