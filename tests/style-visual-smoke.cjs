const {app,BrowserWindow,ipcMain}=require('electron'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
app.disableHardwareAcceleration();const output=path.resolve(__dirname,'../artifacts/style-visual');app.setPath('userData',path.join(output,'profile'));
let settings={appLanguage:'en',theme:'light',aetherGlassApplied:true,teamEnabled:false,selectedModel:'cloud:openrouter/test/free',localAi:false,chatStyle:'claude'},data={groups:[],chats:[{id:'visual-chat',title:'Explain black holes simply',messages:[{role:'user',content:'Explain black holes simply'},{role:'assistant',content:'A black hole is a region where gravity is so strong that light cannot escape.\n\nThink of a very deep well: getting out requires more energy than light can provide.\n\n```python\nprint("Hello, AetherAI")\n```\n\nThe density formula is \\( \\rho = \\frac{m}{V} \\).'}]}]};
for(const [channel,handler] of Object.entries({'mode:settings':()=>settings,'mode:save':(_e,value)=>{settings=value;return {};},'mode:data-get':()=>data,'mode:data-save':(_e,value)=>{data=value;return {};},'mode:account-status':()=>({configured:false,user:null}),'mode:memory-list':()=>[],'mode:memory-context':()=>''}))ipcMain.handle(channel,handler);
app.whenReady().then(async()=>{
 fs.mkdirSync(output,{recursive:true});const win=new BrowserWindow({width:1200,height:850,show:false,webPreferences:{offscreen:true,preload:path.join(__dirname,'chat-preview-preload.cjs')}}),errors=[],findings=[];
 win.webContents.on('console-message',(_e,level,message)=>{if(level===3)errors.push(message);});const evaluate=code=>win.webContents.executeJavaScript(code),wait=ms=>new Promise(r=>setTimeout(r,ms));
 let attached=false;const motion=reduce=>win.webContents.debugger.sendCommand('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:reduce?'reduce':'no-preference'}]});
 async function load(){console.log('Loading '+settings.chatStyle+' '+settings.theme+' '+settings.appLanguage);await win.loadFile(path.resolve(__dirname,'../index.html'));if(!attached){win.webContents.debugger.attach('1.3');attached=true;}await motion(false);await wait(320);await evaluate("document.querySelector('#accountClose').click()");await wait(40);}
 async function capture(name){fs.writeFileSync(path.join(output,name+'.png'),(await win.webContents.capturePage()).toPNG());}
 for(const lang of ['en','ru'])for(const theme of ['light','dark'])for(const id of ['aetherai','claude','chatgpt','deepseek']){
  settings={...settings,appLanguage:lang,theme,chatStyle:id};win.setSize(1200,850);await load();
  assert.equal(await evaluate('document.body.dataset.chatStyle'),id);assert.equal(await evaluate("document.querySelector('.aetherai-wordmark').textContent"),{aetherai:'AetherAI',claude:'Claude',chatgpt:'ChatGPT',deepseek:'DeepSeek'}[id]);
  const greeting=await evaluate("document.querySelector('#welcomeTitle').textContent");
  const palette=await evaluate("JSON.stringify(['.main-area','.sidebar','.composer-inner'].map(s=>getComputedStyle(document.querySelector(s)).backgroundColor))");if(id==='aetherai')globalThis.basePalette=palette;else assert.equal(palette,globalThis.basePalette,'Logo selection must preserve colors');
  await capture(id+'-'+theme+'-'+lang+'-home');
  await evaluate("document.querySelector('#settingsBtn').click();document.querySelector('[data-settings-tab=customization]').click();document.querySelector('#chatStyleToggle').click()");await wait(320);
  assert.equal(await evaluate("document.querySelector('#chatStyleToggle').getAttribute('aria-expanded')"),'true');
  const rows=await evaluate("[...document.querySelectorAll('#chatStyleOptions button')].map(e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,loaded:e.querySelector('img').naturalWidth>0}})");
  assert.equal(rows.length,4);assert.ok(rows.every(r=>r.loaded&&r.width>150&&r.height>=60));assert.ok(rows.every((r,i)=>i===0||r.y>=rows[i-1].y+rows[i-1].height-1));
  await capture(id+'-'+theme+'-'+lang+'-list');
  await evaluate("document.querySelector('#chatStylePicker').dispatchEvent(new KeyboardEvent('keydown',{key:'End',bubbles:true}))");assert.equal(await evaluate('document.activeElement.dataset.chatStyle'),'deepseek');
  await evaluate("document.querySelector('#chatStylePicker').dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))");assert.equal(await evaluate('document.activeElement.id'),'chatStyleToggle');assert.ok(await evaluate("document.querySelector('#settingsModal').classList.contains('show')"));
  await evaluate("document.querySelector('#closeSettingsBtn').click();document.querySelector('.history-item').click()");await wait(300);
  assert.ok(await evaluate("document.querySelector('.message.assistant .message-text').textContent.includes('black hole')"));
  assert.doesNotMatch(await evaluate("getComputedStyle(document.querySelector('.message.assistant .message-text')).fontFamily"),/Georgia/);
  const contrast=await evaluate(`(()=>{const lum=color=>{const v=color.match(/\\d+/g).slice(0,3).map(Number).map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4});return v[0]*.2126+v[1]*.7152+v[2]*.0722},ratio=(a,b)=>(Math.max(a,b)+.05)/(Math.min(a,b)+.05),text=document.querySelector('.message.assistant .message-text'),main=document.querySelector('.main-area'),code=text.querySelector('pre'),inline=text.querySelector('pre code');return {body:ratio(lum(getComputedStyle(text).color),lum(getComputedStyle(main).backgroundColor)),code:ratio(lum(getComputedStyle(inline).color),lum(getComputedStyle(code).backgroundColor))}})()`);
  assert.ok(contrast.body>=4.5&&contrast.code>=4.5,'Text and code contrast '+id+' '+theme+' '+JSON.stringify(contrast));
  await evaluate("(()=>{const host=document.createElement('span');host.className='thinking-logo style-test-thinking';host.innerHTML=AetherAIChatStyle.thinkingMarkup(document.body.dataset.chatStyle);document.querySelector('#messages').append(host)})()");await wait(80);
  const animationSelector=id==='claude'?'.claude-spark-ray':id==='chatgpt'?'.chatgpt-thinking-dot':id==='deepseek'?'.thinking-dots i':'.logo-fragment';
  const readAnimation=()=>evaluate(`(()=>{const e=document.querySelector('.style-test-thinking ${animationSelector}');return '${id}'==='aetherai'?e.getAttribute('transform'):getComputedStyle(e).transform})()`);
  const clip=await evaluate("(()=>{const r=document.querySelector('.style-test-thinking').getBoundingClientRect();return {x:Math.floor(r.x),y:Math.floor(r.y),width:Math.ceil(r.width),height:Math.ceil(r.height)}})()");
  const first=await readAnimation(),imageA=(await win.webContents.capturePage(clip)).toPNG();await wait(240);assert.notEqual(await readAnimation(),first,id+' animation must visibly move');
  const imageB=(await win.webContents.capturePage(clip)).toPNG(),sharp=require('sharp'),pixelsA=await sharp(imageA).raw().toBuffer(),pixelsB=await sharp(imageB).raw().toBuffer();assert.notDeepEqual(pixelsA,pixelsB,id+' must actually change rendered pixels');
  if(id==='claude'){fs.writeFileSync(path.join(output,'claude-'+theme+'-frame-a.png'),imageA);fs.writeFileSync(path.join(output,'claude-'+theme+'-frame-b.png'),imageB);}
  await capture(id+'-'+theme+'-'+lang+'-chat');
  await motion(true);await wait(50);const reduced=await readAnimation();await wait(150);assert.equal(await readAnimation(),reduced,id+' must respect reduced motion');await motion(false);
  for(const width of [760,520]){win.setSize(width,850);await wait(150);await capture(id+'-'+theme+'-'+lang+'-'+width+'-chat');const layout=await evaluate("(()=>{const c=document.querySelector('.composer-inner').getBoundingClientRect();return {width:innerWidth,composer:{left:c.left,right:c.right},buttons:[...document.querySelectorAll('.composer-right button')].map(e=>{const r=e.getBoundingClientRect();return {left:r.left,right:r.right}})}})()");assert.ok(layout.composer.left>=0&&layout.composer.right<=layout.width+1&&layout.buttons.every(r=>r.left>=layout.composer.left-1&&r.right<=layout.composer.right+1),'Composer must fit '+id+' '+width+' '+JSON.stringify(layout));}
  findings.push({id,theme,language:lang,listRows:rows.length,animated:true,reducedMotion:true,widths:[1200,760,520],greeting,contrast});
 }
 win.setSize(1200,850);
 for(const language of ['ru','en'])for(const theme of ['light','dark']){
   settings={...settings,chatStyle:'claude',appLanguage:language,theme};await load();await evaluate("document.querySelector('#settingsBtn').click()");
   for(const tab of ['general','models','skills','plugins','cloud','ollama-cloud','discord']){await evaluate(`document.querySelector('[data-settings-tab="${tab}"]').click()`);await wait(300);await capture('settings-'+language+'-'+theme+'-'+tab);}
   assert.equal(await evaluate("document.querySelector('[data-settings-panel=cloud] h3').textContent"),language==='ru'?'Провайдеры':'Providers');
   assert.equal(await evaluate("document.querySelector('#profileName').textContent"),language==='ru'?'Локальный профиль':'Local profile');
 }
 await evaluate("document.querySelector('[data-settings-tab=customization]').click();document.querySelector('#chatStyleToggle').click();document.querySelector('#chatStyleOptions [data-chat-style=deepseek]').click()");await wait(80);assert.equal(settings.chatStyle,'deepseek');await load();assert.equal(await evaluate('document.body.dataset.chatStyle'),'deepseek');
 assert.deepEqual(errors,[]);fs.writeFileSync(path.join(output,'verification.json'),JSON.stringify({viewport:{width:1200,height:850},findings,settingsPanels:7,settingsCombinations:28,persistentSelection:true,consoleErrors:errors},null,2));console.log('PASS: 16 style/theme/language combinations, logo list, keyboard, live animations, reduced motion, 3 widths, 28 settings states and persistent selection.');win.destroy();app.quit();
}).catch(e=>{console.error(e);app.exit(1);});
