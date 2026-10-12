(function(root){
 function create({api,onFile,onChat,language}){
  const overlay=document.createElement('div');overlay.className='modal-overlay';overlay.id='projectsBrowser';
  overlay.innerHTML='<section class="modal" role="dialog" aria-modal="true" aria-labelledby="projectsBrowserTitle"><header class="modal-header"><h2 id="projectsBrowserTitle">Projects</h2><button type="button" class="modal-close" aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></header><div class="modal-body"><div class="project-browser-actions"><button type="button" class="catalog-btn" data-back aria-label="Back"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H4m7-7-7 7 7 7"/></svg></button><span data-path></span><button type="button" class="catalog-btn" data-chat></button><button type="button" class="catalog-btn" data-folder></button></div><div class="project-browser-list"></div><p role="status" data-status></p></div></section>';
  document.body.append(overlay);let current='',previousFocus,serial=0;
  const status=overlay.querySelector('[data-status]'),list=overlay.querySelector('.project-browser-list'),close=()=>{serial++;overlay.classList.remove('show');previousFocus?.focus();};
  overlay.querySelector('.modal-close').onclick=close;overlay.onclick=event=>{if(event.target===overlay)close();};overlay.onkeydown=event=>{if(event.key==='Escape')close();if(event.key==='Tab'){const controls=[...overlay.querySelectorAll('button')].filter(button=>!button.hidden&&!button.disabled&&button.getClientRects().length),first=controls[0],last=controls.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}};
  async function show(relative=''){
   current=relative;const id=++serial,t=key=>root.AetherAIInterface.t(key,language());list.replaceChildren();status.textContent=t('loadingFiles');
   overlay.querySelector('h2').textContent=t('projects');
   overlay.querySelector('[data-path]').textContent=relative||t('allProjects');overlay.querySelector('[data-back]').disabled=!relative;overlay.querySelector('[data-back]').setAttribute('aria-label',root.AetherAIInterface.t('back',language()));
   const chat=overlay.querySelector('[data-chat]');chat.hidden=!relative;chat.textContent=t('projectChat');overlay.querySelector('[data-folder]').textContent=t('openFolder');
   try{const result=await api.projectsList(relative);if(id!==serial)return;if(!result.ok)throw Error(result.error);status.textContent=result.entries.length?'':t('emptyFolder');for(const entry of result.entries){const button=document.createElement('button');button.type='button';button.className='project-browser-item';const icon=document.createElement('span');icon.innerHTML=entry.directory?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h7l2 2h9v12H3z"/></svg>':root.AetherAICode.icon(entry.name.split('.').at(-1));const name=document.createElement('span');name.className='project-entry-name';name.textContent=entry.name;button.append(icon,name);button.onclick=async()=>{if(entry.directory)return show(entry.path);try{const file=await api.projectRead(entry.path);if(!file.ok)throw Error(file.error);onFile(entry.path,file.content);close();}catch(error){status.textContent=error.message;}};list.append(button);}}
   catch(error){if(id===serial)status.textContent=error.message;}
  }
  overlay.querySelector('[data-back]').onclick=()=>show(current.includes('/')?current.slice(0,current.lastIndexOf('/')):'');
  overlay.querySelector('[data-chat]').onclick=()=>{onChat(current.split('/')[0]);close();};
  overlay.querySelector('[data-folder]').onclick=async()=>{const result=await api.openProjectsFolder(current);if(result&&!result.ok)status.textContent=result.error;};
  return {open(){previousFocus=document.activeElement;overlay.classList.add('show');overlay.querySelector('.modal-close').focus();show();}};
 }
 root.AetherAIProjects={create};
})(window);
