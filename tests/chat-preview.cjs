const {app,BrowserWindow,ipcMain}=require('electron'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
app.disableHardwareAcceleration();const output=path.resolve(__dirname,'../artifacts/chat-preview');app.setPath('userData',path.join(output,'profile'));
let data={groups:[],chats:[]},settings={appLanguage:'en',teamEnabled:false},imagePrompt='',lastChatPrompt='';
ipcMain.handle('mode:data-get',()=>data);ipcMain.handle('mode:data-save',(_e,value)=>{data=value;return {};});ipcMain.handle('mode:settings',()=>settings);ipcMain.handle('mode:save',(_e,value)=>{settings=value;return {};});ipcMain.handle('mode:account-status',()=>({configured:false,user:null}));ipcMain.handle('mode:memory-list',()=>[]);ipcMain.handle('mode:memory-context',()=> '');
ipcMain.handle('mode:chat',(_e,body)=>{lastChatPrompt=body.messages[0].content;return lastChatPrompt.startsWith('Turn the user request')?JSON.stringify({prompt:'A black banner with the exact white lettering "AetherAI 1337".'}):{chunks:['<think>private reasoning','</think>','Hello! This answer is arriving progressively. ','Here is the next part, with a practical example. ','That is the complete answer.'],delay:400};});
ipcMain.handle('mode:image',(_e,prompt)=>{imagePrompt=prompt;return {ok:true,path:path.join(output,'fixture-image.png')};});
app.whenReady().then(async()=>{
 fs.mkdirSync(output,{recursive:true});await require('sharp')({create:{width:600,height:400,channels:3,background:'#252525'}}).png().toFile(path.join(output,'fixture-image.png'));
 const win=new BrowserWindow({width:1200,height:850,show:false,webPreferences:{offscreen:true,preload:path.join(__dirname,'chat-preview-preload.cjs')}}),errors=[];win.webContents.on('console-message',(_event,level,message)=>{if(level===3)errors.push(message);});const evaluate=code=>win.webContents.executeJavaScript(code),wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 await win.loadFile(path.resolve(__dirname,'../index.html'));await wait(600);await evaluate("document.querySelector('#accountClose').click()");await wait(80);
 win.webContents.debugger.attach('1.3');await win.webContents.debugger.sendCommand('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
 assert.ok(await evaluate("!document.querySelector('#aetherMascot')&&!document.querySelector('#mascotToggle')"));
 assert.equal(await evaluate("document.querySelectorAll('#chatStyleOptions [data-chat-style]').length"),4);
 for(const id of ['deepseek','chatgpt','aetherai','claude']){
   await evaluate(`document.querySelector('#chatStyleOptions [data-chat-style=${id}]').click()`);await wait(100);
   assert.equal(settings.chatStyle,id);assert.equal(await evaluate(`document.querySelector('#chatStyleOptions [data-chat-style=${id}]').getAttribute('aria-pressed')`),'true');
   assert.equal(await evaluate('document.body.dataset.chatStyle'),id);
   assert.equal(await evaluate("document.querySelector('.aetherai-wordmark').textContent"),{aetherai:'AetherAI',claude:'Claude',chatgpt:'ChatGPT',deepseek:'DeepSeek'}[id]);
   assert.equal(await evaluate("document.querySelectorAll('.service-sidebar-logo').length"),id==='aetherai'?0:1);
   if(id!=='aetherai')assert.ok(await evaluate("document.querySelector('.service-sidebar-logo').naturalWidth>0"));
 }
 await evaluate("document.querySelector('#chatStyleOptions [data-chat-style=aetherai]').click()");await wait(50);
 const codeContrast=await evaluate(`(()=>{
   const light=document.body.classList.contains('theme-light'),fixture=document.createElement('div');fixture.className='message-text';fixture.innerHTML='<pre><code>print("Hello")</code></pre><p><code>operator.add</code></p>';document.body.append(fixture);
   const luminance=color=>{const channels=color.match(/\\d+/g).slice(0,3).map(Number).map(value=>{value/=255;return value<=.04045?value/12.92:((value+.055)/1.055)**2.4;});return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722;};
   const ratios=[];for(const theme of [true,false]){document.body.classList.toggle('theme-light',theme);for(const selector of ['pre','p > code']){const surface=fixture.querySelector(selector),style=getComputedStyle(surface),text=selector==='pre'?getComputedStyle(surface.querySelector('code')).color:style.color,a=luminance(style.backgroundColor),b=luminance(text);ratios.push((Math.max(a,b)+.05)/(Math.min(a,b)+.05));}}
   fixture.remove();document.body.classList.toggle('theme-light',light);return ratios;
 })()`);
 assert.ok(codeContrast.every(ratio=>ratio>=4.5),'Code and inline code must be readable in both themes');
 assert.equal(await evaluate("document.querySelector('#composerPrompt').hidden"),false);
 await evaluate("document.querySelector('#userInput').dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));document.querySelector('#userInput').focus()");await wait(180);
 assert.equal(await evaluate("document.querySelector('#composerPrompt').hidden"),true);assert.equal(await evaluate("document.activeElement.id"),'userInput');assert.notEqual(await evaluate("getComputedStyle(document.querySelector('#userInput')).caretColor"),'rgba(0, 0, 0, 0)');assert.equal(await evaluate("document.querySelector('#userInput').selectionStart"),0);
 await evaluate("document.querySelector('#userInput').blur()");await wait(80);assert.equal(await evaluate("document.querySelector('#composerPrompt').hidden"),false);
 for(const width of [1200,760,520]) {
   win.setSize(width,850);await wait(120);
   assert.ok(await evaluate("(()=>{const buttons=[...document.querySelectorAll('.composer-right button')],rects=buttons.map(button=>button.getBoundingClientRect());return rects.length===4&&rects.every(rect=>Math.abs(rect.top-document.querySelector('#modelBtn').getBoundingClientRect().top)<1&&rect.height===30)})()"),'All actions share the model row and have consistent height');
   assert.ok(await evaluate("(()=>{const row=document.querySelector('.composer-right'),parent=row.getBoundingClientRect();return [...row.querySelectorAll('button')].every(button=>{const rect=button.getBoundingClientRect();return rect.left>=parent.left-1&&rect.right<=parent.right+1})&&getComputedStyle(row).overflowX==='visible'})()"),'Buttons fit the row without horizontal overflow or a scrollbar');
   for(const [trigger,menu] of [['thinkBtn','thinkDropdown'],['accessBtn','accessDropdown']]) {
     await evaluate(`document.querySelector('#${trigger}').click()`);await wait(200);
     assert.ok(await evaluate(`(()=>{const button=document.querySelector('#${trigger}'),menu=document.querySelector('#${menu}'),a=button.getBoundingClientRect(),b=menu.getBoundingClientRect();return menu.parentElement===document.body&&button.getAttribute('aria-expanded')==='true'&&Math.abs(a.top-b.bottom-8)<2&&b.left>=0&&b.right<=innerWidth&&!button.hasAttribute('title')&&getComputedStyle(button,'::after').display==='none'})()`),'Menu attaches to its actual button without duplicate tooltips, even on wrapped controls');
     await evaluate(`document.querySelector('#${menu} button.active').focus();document.querySelector('#${menu}').dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))`);
     assert.equal(await evaluate('document.activeElement.id'),trigger);
   }
 }
 win.setSize(1200,850);await wait(120);
 assert.ok(await evaluate("!document.querySelector('#teamToggle')&&!document.querySelector('#discordRenameApp')&&!document.querySelector('#discordNameHelp')"));
 assert.equal(await evaluate("getComputedStyle(document.querySelector('[data-window=close]')).borderRadius"),'0px');
 assert.ok(await evaluate("(()=>{const quota=document.querySelector('#composerQuota');return quota.hidden||quota.getBoundingClientRect().top>=document.querySelector('.composer-action-row').getBoundingClientRect().bottom})()"),'Quota sits below the model and action row');
 await evaluate("document.querySelector('#thinkBtn').click();document.querySelector('#thinkDropdown [data-think=high]').click()");await wait(80);
 assert.equal(settings.thinkLevel,'high');assert.equal(await evaluate("document.querySelector('#thinkDropdown [data-think=high]').getAttribute('aria-checked')"),'true');
 await evaluate("document.querySelector('#thinkBtn').click()");await wait(200);fs.writeFileSync(path.join(output,'thinking-menu.png'),(await win.webContents.capturePage()).toPNG());
 await evaluate("document.querySelector('#thinkDropdown [data-think=medium]').click();document.querySelector('#accessBtn').click();document.querySelector('#accessDropdown [data-access=plan]').click()");await wait(80);assert.equal(settings.accessMode,'plan');
 await evaluate("document.querySelector('#accessBtn').click();document.querySelector('#accessDropdown [data-access=full]').click()");await wait(80);
 await evaluate("document.querySelector('#modelBtn').click();document.querySelector('#modelSearchInput').click();document.querySelector('#modelSearchInput').value='apodex';document.querySelector('#modelSearchInput').dispatchEvent(new Event('input'))");
 await wait(250);assert.equal(await evaluate("document.querySelectorAll('.model-item').length"),1);assert.match(await evaluate("document.querySelector('.model-item').textContent"),/Apodex/);await evaluate("document.querySelector('#modelSearchInput').focus();document.querySelector('#modelSearchInput').dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}))");assert.equal(await evaluate("document.activeElement.classList.contains('model-select-button')"),true);fs.writeFileSync(path.join(output,'model-selector.png'),(await win.webContents.capturePage()).toPNG());
 await evaluate("document.querySelector('#modelBtn').click();document.querySelector('#userInput').value='hello';document.querySelector('#userInput').dispatchEvent(new Event('input'));document.querySelector('#sendBtn').click()");await wait(200);
 assert.equal(await evaluate("document.querySelectorAll('.thinking-logo .logo-fragment').length"),6);
 assert.doesNotMatch(lastChatPrompt,/presentation preference|Use calm, natural prose/);assert.equal(await evaluate('document.body.dataset.chatStyle'),'aetherai');
 for(const id of ['claude','chatgpt','deepseek']){
   await evaluate(`document.querySelector('#chatStyleOptions [data-chat-style=${id}]').click()`);await wait(60);
   assert.ok(await evaluate(`!!document.querySelector('.thinking-logo ${id==='claude'?'.claude-thinking-spark':id==='chatgpt'?'.chatgpt-thinking-dot':'.deepseek-working'}')`));
   assert.equal(await evaluate("document.querySelectorAll('.thinking-logo .logo-fragment').length"),0);
 }
 await evaluate("document.querySelector('#chatStyleOptions [data-chat-style=aetherai]').click()");await wait(50);
 const waveOffset=await evaluate("document.querySelector('.logo-fragment').getAttribute('transform')");await wait(250);
 assert.notEqual(await evaluate("document.querySelector('.logo-fragment').getAttribute('transform')"),waveOffset);
 fs.writeFileSync(path.join(output,'thinking-wave.png'),(await win.webContents.capturePage()).toPNG());await wait(700);
 assert.ok(await evaluate("!!document.querySelector('.streaming-answer')"));assert.match(await evaluate("document.querySelector('.streaming-answer .message-text').textContent"),/Hello/);assert.doesNotMatch(await evaluate("document.querySelector('.streaming-answer .message-text').textContent"),/private reasoning/);fs.writeFileSync(path.join(output,'streaming-answer.png'),(await win.webContents.capturePage()).toPNG());
 await evaluate("document.querySelector('#stopBtn').click()");await wait(150);assert.equal(data.chats[0].messages.at(-1).interrupted,true);assert.match(data.chats[0].messages.at(-1).content,/Hello/);assert.doesNotMatch(data.chats[0].messages.at(-1).content,/private reasoning/);
 await evaluate("document.querySelector('#userInput').value='Create a banner with the text \"AetherAI 1337\" on a black background';document.querySelector('#userInput').dispatchEvent(new Event('input'));document.querySelector('#sendBtn').click()");await wait(700);
 assert.equal(imagePrompt,'A black banner with the exact white lettering "AetherAI 1337".');const image=data.chats[0].messages.at(-1);assert.equal(image.content,'');assert.match(image.imageGeneration.prompt,/1337/);assert.ok(image.images.length===1);assert.ok(await evaluate("[...document.querySelectorAll('.message.assistant img')].some(image=>image.naturalWidth===600)"));assert.doesNotMatch(await evaluate("document.querySelector('.message.assistant:last-child .message-text').textContent"),/Prompt|A black banner/);
 fs.writeFileSync(path.join(output,'image-result.png'),(await win.webContents.capturePage()).toPNG());
 data.chats[0].messages.push({role:'user',content:'напиши калькулятор'});await win.webContents.reload();await wait(600);await evaluate("document.querySelector('#accountClose').click();document.querySelector('.history-item').click();document.querySelector('#userInput').value='я с интерфейсом хочу';document.querySelector('#userInput').dispatchEvent(new Event('input'));document.querySelector('#sendBtn').click()");await wait(150);
 assert.match(await evaluate("document.querySelector('#setupQuestion').textContent"),/calculator/i);
 assert.match(await evaluate("document.querySelector('#setupOptions').textContent"),/Tkinter/);
 assert.doesNotMatch(await evaluate("document.querySelector('#setupOptions').textContent"),/Dashboard|Portfolio|SaaS/);
 await evaluate("document.querySelectorAll('#setupOptions > button')[1].click()");await wait(150);
 assert.equal(await evaluate("document.querySelector('#setupSheet').classList.contains('show')"),false,'Choosing browser must finish the calculator clarification instead of asking unrelated style questions');
 await evaluate("document.querySelector('#stopBtn').click()");await wait(100);
 await evaluate("document.querySelector('#userInput').value='сделай игру с интерфейсом';document.querySelector('#userInput').dispatchEvent(new Event('input'));document.querySelector('#sendBtn').click()");await wait(200);
 assert.equal(await evaluate("document.querySelector('#setupSheet').classList.contains('show')"),false,'Game interface requests must never open the website wizard');
 await evaluate("document.querySelector('#stopBtn').click()");await wait(100);
 assert.deepEqual(errors,[]);console.log('PASS: composer menus, code contrast, streaming, images and task-specific calculator clarification.');win.destroy();app.quit();
}).catch(error=>{console.error(error);app.exit(1);});
