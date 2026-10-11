(function(root){
 function create({api,onFile,onChat,language}){
  const overlay=document.createElement('div');overlay.className='modal-overlay';overlay.id='projectsBrowser';
  overlay.innerHTML='<section class="modal" role="dialog" aria-modal="true" aria-labelledby="projectsBrowserTitle"><header class="modal-header"><h2 id="projectsBrowserTitle">Projects</h2><button type="button" class="modal-close" aria-label="Close">×</button></header><div class="modal-body"><div class="project-browser-actions"><button type="button" class="catalog-btn" data-back>←</button><span data-path></span><button type="button" class="catalog-btn" data-chat></button><button type="button" class="catalog-btn" data-folder></button></div><div class="project-browser-list"></div><p role="status" data-status></p></div></section>';
  document.body.append(overlay);let current='',previousFocus,serial=0;
  const status=overlay.querySelector('[data-status]'),list=overlay.querySelector('.project-browser-list'),close=()=>{serial++;overlay.classList.remove('show');previousFocus?.focus();};
  overlay.querySelector('.modal-close').onclick=close;overlay.onclick=event=>{if(event.target===overlay)close();};overlay.onkeydown=event=>{if(event.key==='Escape')close();if(event.key==='Tab'){const controls=[...overlay.querySelectorAll('button')].filter(button=>!button.hidden&&!button.disabled),first=controls[0],last=controls.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}};
  async function show(relative=''){
   current=relative;const id=++serial,ru=language()==='ru';list.replaceChildren();status.textContent=ru?'Загрузка…':'Loading…';
   overlay.querySelector('h2').textContent=ru?'Проекты':'Projects';
   overlay.querySelector('[data-path]').textContent=relative|| (ru?'Все проекты':'All projects');overlay.querySelector('[data-back]').disabled=!relative;
   const chat=overlay.querySelector('[data-chat]');chat.hidden=!relative;chat.textContent=ru?'Чат проекта':'Project chat';overlay.querySelector('[data-folder]').textContent=ru?'Открыть папку':'Open folder';
   try{const result=await api.projectsList(relative);if(id!==serial)return;if(!result.ok)throw Error(result.error);status.textContent=result.entries.length?'':ru?'Папка пуста':'Folder is empty';for(const entry of result.entries){const button=document.createElement('button');button.type='button';button.className='project-browser-item';const icon=document.createElement('span');icon.innerHTML=entry.directory?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h7l2 2h9v12H3z"/></svg>':root.AetherAICode.icon(entry.name.split('.').at(-1));const name=document.createElement('span');name.textContent=entry.name;button.append(icon,name);button.onclick=async()=>{if(entry.directory)return show(entry.path);try{const file=await api.projectRead(entry.path);if(!file.ok)throw Error(file.error);onFile(entry.path,file.content);close();}catch(error){status.textContent=error.message;}};list.append(button);}}
   catch(error){if(id===serial)status.textContent=error.message;}
  }
  overlay.querySelector('[data-back]').onclick=()=>show(current.includes('/')?current.slice(0,current.lastIndexOf('/')):'');
  overlay.querySelector('[data-chat]').onclick=()=>{onChat(current.split('/')[0]);close();};
  overlay.querySelector('[data-folder]').onclick=async()=>{const result=await api.openProjectsFolder(current);if(result&&!result.ok)status.textContent=result.error;};
  return {open(){previousFocus=document.activeElement;overlay.classList.add('show');overlay.querySelector('.modal-close').focus();show();}};
 }
 root.AetherAIProjects={create};
})(window);
