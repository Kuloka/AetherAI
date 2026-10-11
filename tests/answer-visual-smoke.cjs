const {app,BrowserWindow,ipcMain}=require('electron'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),out=path.join(root,'artifacts/answer-visual');fs.mkdirSync(out,{recursive:true});app.setPath('userData',path.join(out,'profile'));app.disableHardwareAcceleration();app.commandLine.appendSwitch('force-prefers-reduced-motion','reduce');
let settings={appLanguage:'ru',theme:'dark',aetherGlassApplied:true,localAi:true,selectedModel:'llama3.2:1b',teamEnabled:false};
const prose='Это обычный разговорный ответ о повседневных делах. Он не требует формул, кода или пошагового разбора. '.repeat(3);
const content='**Главный вывод:** локальный запрос обрабатывается на компьютере. Для плотности используем формулу:\n\n\\[\\rho=\\frac{m}{V}\\]\n\n1. Определите массу.\n2. Измерьте объём.\n3. Разделите массу на объём.\n\nПодробнее: [документация Ollama](https://docs.ollama.com/) и [OpenRouter](https://openrouter.ai/docs/overview).';
const sources=[{title:'Документация Ollama',url:'https://docs.ollama.com/'},{title:'Документация OpenRouter',url:'https://openrouter.ai/docs/overview'},{title:'Bad source',url:'javascript:alert(1)'}];
const data={groups:[],chats:[{id:'complex',title:'Сложный вопрос',messages:[{role:'user',content:'Объясни формулу плотности и шаги вычисления.'},{role:'assistant',content,sources}]},{id:'ordinary',title:'Обычный вопрос',messages:[{role:'user',content:'Как настроение?'},{role:'assistant',content:prose}]}]};
const skills=require('../electron/app-skills').createSkillsStore(path.join(out,'skills'));skills.installPreset('code-review');for(const entry of skills.list())skills.toggle(entry.name,false);
const opened=[];
for(const [name,fn] of Object.entries({data:()=>data,settings:()=>settings,'save-settings':(_e,value)=>{settings=value;return {};},skills:()=>skills.list(),'skill-presets':()=>skills.presets(),'skill-toggle':(_e,name,enabled)=>skills.toggle(name,enabled),open:(_e,url)=>{opened.push(url);return {};}}))ipcMain.handle('answer:'+name,fn);
app.whenReady().then(async()=>{
 const w=new BrowserWindow({width:1200,height:850,show:false,webPreferences:{offscreen:true,preload:path.join(__dirname,'answer-visual-preload.cjs')}}),errors=[];
 w.webContents.on('console-message',(_e,level,message)=>{if(level===3&&!/ERR_|Content Security|Failed to load resource/.test(message))errors.push(message);});
 // The test serves existing official brand assets for favicon requests; no live services or API keys.
 w.webContents.session.protocol.handle('https',request=>{
   if(!['https://docs.ollama.com/favicon.ico','https://openrouter.ai/favicon.ico'].includes(request.url))return new Response('',{status:404});
   const file=request.url.includes('ollama')?'ollama.svg':'openrouter.svg';return new Response(fs.readFileSync(path.join(root,'resources/model-icons',file)),{headers:{'Content-Type':'image/svg+xml'}});
 });
 const js=code=>w.webContents.executeJavaScript(code),wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 await w.loadFile(path.join(root,'index.html'));await wait(1000);await js("document.querySelector('#accountClose').click();document.querySelector('.history-item[data-chat=complex]')?.click()");
 if(!await js("!!document.querySelector('.answer-followups')"))await js("[...document.querySelectorAll('.history-item')].find(e=>e.textContent.includes('Сложный')).click()");await wait(350);
 assert.equal(await js("document.querySelectorAll('.answer-sources a.answer-source').length"),2,JSON.stringify(await js("({messages:document.querySelector('#messages').textContent.slice(0,500),history:[...document.querySelectorAll('.history-item')].map(e=>e.textContent),errors:document.querySelector('#skillsError').textContent})"))+JSON.stringify(errors));
 assert.equal(await js("document.querySelectorAll('.stream-sources-toggle').length"),1);
 assert.equal(await js("document.querySelector('.answer-sources-label').textContent"),'Источники · 2');
 assert.equal(await js("document.querySelector('.stream-sources-toggle').getAttribute('aria-expanded')==='true'"),false);
 await js("document.querySelector('.stream-sources-toggle').click()");assert.equal(await js("document.querySelector('.stream-sources-toggle').getAttribute('aria-expanded')==='true'"),true);await wait(250);
 assert.equal(await js("document.querySelectorAll('.answer-sources .answer-source-icon img').length"),2);
 assert.ok(await js("[...document.querySelectorAll('.answer-sources .answer-source-icon img')].every(img=>img.complete&&img.naturalWidth>0)"));
 assert.equal(await js("getComputedStyle(document.querySelector('.answer-source')).backgroundColor"),'rgba(0, 0, 0, 0)');
 assert.equal(await js("document.querySelector('.answer-followups button').textContent"),'Объяснить подробнее');
 assert.equal(await js("document.querySelectorAll('.answer-followups button').length"),1);
 assert.ok(await js("!!document.querySelector('.answer-explain-line path')&&!!document.querySelector('.message-text .katex')"));
 assert.equal(await js("document.querySelectorAll('.message-text a').length"),2);
 await js("document.querySelector('.answer-source').click()");await wait(30);assert.equal(opened[0],'https://docs.ollama.com/');
 await js("document.querySelector('.answer-followups button').click()");assert.equal(await js("document.querySelector('#userInput').value"),'Объяснить подробнее');
 fs.writeFileSync(path.join(out,'answer-ru.png'),(await w.webContents.capturePage()).toPNG());
 await js("document.querySelector('#settingsBtn').click();document.querySelector('[data-settings-tab=skills]').click()");await wait(150);
 assert.equal(await js("document.querySelectorAll('#skillsList input[type=checkbox]').length"),0);
 assert.equal(await js("document.querySelector('#skillsList [role=switch]').getAttribute('aria-checked')"),'false');
 await js("document.querySelector('#skillsList [role=switch]').click()");await wait(100);
 assert.equal(skills.list()[0].enabled,true);assert.equal(await js("document.querySelector('#skillsList [role=switch]').getAttribute('aria-checked')"),'true');
 assert.equal(await js("getComputedStyle(document.querySelector('#skillsList [role=switch]')).backgroundColor"),'rgb(181, 243, 109)');
 assert.equal(await js("getComputedStyle(document.querySelector('#skillsList [role=switch]')).borderRadius"),'5px');
 fs.writeFileSync(path.join(out,'skills-ru.png'),(await w.webContents.capturePage()).toPNG());
 for(const lang of ['en','ru','es','pt','fr','de','it','tr','pl','uk']){
   await js(`document.querySelector('[data-settings-tab=general]').click();document.querySelector('#languageToggle').click();document.querySelector('#languagePackList [data-lang="${lang}"]').click()`);await wait(70);
   const localized=await js("({actual:document.querySelector('.answer-followups button').textContent,expected:AetherAIAnswerPresentation.labels(document.documentElement.lang).explain,source:document.querySelector('.answer-sources-label').textContent,sourceExpected:AetherAIAnswerPresentation.labels(document.documentElement.lang).sources})");
   assert.equal(localized.actual,localized.expected);assert.equal(localized.source,localized.sourceExpected+' · 2');
 }
 await js("document.querySelector('#closeSettingsBtn').click();[...document.querySelectorAll('.history-item')].find(e=>e.textContent.includes('Обычный')).click()");
 assert.equal(await js("document.querySelector('.answer-followups')"),null,'Ordinary long answers have no explanation prompt');
 await w.webContents.reload();await wait(900);await js("document.querySelector('#accountClose').click();document.querySelector('#settingsBtn').click();document.querySelector('[data-settings-tab=skills]').click()");await wait(100);
 assert.equal(await js("document.querySelector('#skillsList [role=switch]').getAttribute('aria-checked')"),'true','Skill toggle persists across restart');
 assert.deepEqual(errors,[]);console.log('PASS: source anchors/icons, Markdown links, math, complex-only explanation, 10 languages, persisted square Skills toggle');w.destroy();app.quit();
}).catch(error=>{console.error(error);app.exit(1);});
