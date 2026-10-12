(function(){
  const host=document.getElementById('chatTabs'),add=document.getElementById('newChatTabBtn');if(!host||!add)return;
  const copy=key=>window.AetherAIInterface.t(key),key='aetherai-open-chat-tabs';
  let ids=[],data=null,actions=null,active=null,lastActive=null,initialized=false,generating=false;
  const elements=new Map();
  try{const saved=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(saved))ids=[...new Set(saved.filter(id=>typeof id==='string'))];}catch{}
  function persist(){try{localStorage.setItem(key,JSON.stringify(ids));}catch{}}
  function paint(){
    if(!data)return;const home=document.querySelector('.app').classList.contains('home-open');
    for(const [id,element]of elements)if(!ids.includes(id)){element.remove();elements.delete(id);}
    for(const id of ids){const chat=data.chats.find(c=>c.id===id);if(!chat)continue;let element=elements.get(id);
      if(!element){element=document.createElement('div');element.className='chat-tab';element.dataset.chatTab=id;
        const tab=document.createElement('button');tab.type='button';tab.className='chat-tab-select';tab.setAttribute('role','tab');const label=document.createElement('span');label.className='chat-tab-title';tab.append(label);tab.onclick=()=>{if(!generating||active===id)actions?.load(id);};
        const close=document.createElement('button');close.type='button';close.className='chat-tab-close';close.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"/></svg>';close.onclick=()=>remove(id);element.append(tab,close);host.append(element);elements.set(id,element);
      }
      const label=element.querySelector('.chat-tab-title'),title=chat.title||copy('newChat');if(label.textContent!==title)label.textContent=title;
      const selected=active===id&&!home,tab=element.querySelector('.chat-tab-select');element.classList.toggle('active',selected);tab.setAttribute('aria-selected',String(selected));tab.title=title;tab.disabled=generating&&active!==id;tab.tabIndex=active===id?0:-1;
      const close=element.querySelector('.chat-tab-close');close.setAttribute('aria-label',copy('close')+': '+title);close.title=copy('close');close.disabled=generating&&active===id;
    }
    add.disabled=false;add.setAttribute('aria-label',copy('newChat'));add.title=copy('newChat');host.setAttribute('aria-label',copy('recent'));
  }
  function revealActive(){const tab=elements.get(active);if(!tab)return;const r=tab.getBoundingClientRect(),view=host.getBoundingClientRect();const delta=r.right>view.right?r.right-view.right:r.left<view.left?r.left-view.left:0;if(delta)host.scrollLeft+=delta;}
  function open(id){if(!ids.includes(id)){ids.push(id);persist();}active=id;lastActive=id;paint();requestAnimationFrame(()=>{if(active===id)revealActive();});}
  function remove(id){if(generating&&id===active)return;const index=ids.indexOf(id);if(index<0)return;ids.splice(index,1);persist();
    if(id===active){const next=ids[Math.min(index,ids.length-1)];if(next){const home=document.querySelector('.app').classList.contains('home-open');actions?.load(next);if(home)window.AetherAIHome?.open();}else window.AetherAIHome?.open();}
    paint();
  }
  add.onclick=()=>{if(actions)actions.create({background:generating});else document.getElementById('newChatBtn').click();};
  function cycle(delta){if(generating||!ids.length)return;const index=ids.indexOf(active);actions?.load(ids[(index+delta+ids.length)%ids.length]);}
  host.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)&&event.target.matches('.chat-tab-select')){event.preventDefault();cycle(event.key==='ArrowRight'?1:-1);elements.get(active)?.querySelector('.chat-tab-select').focus();}});
  document.addEventListener('keydown',event=>{if(event.isComposing||document.body.classList.contains('auth-visible')||document.querySelector('.modal-overlay.show'))return;if(!(event.ctrlKey||event.metaKey))return;const letter=event.key.toLowerCase();if(letter==='t'){event.preventDefault();if(!generating)actions?.create();}else if(letter==='w'){event.preventDefault();if(active)remove(active);}else if(event.key==='Tab'){event.preventDefault();cycle(event.shiftKey?-1:1);}});
  window.AetherAIChatTabs={add(id){if(!ids.includes(id)){ids.push(id);persist();}paint();},open,restore(){if(active)open(active);},refresh:paint,busy(value){generating=value;paint();},sync(next,current,callbacks){data=next;actions=callbacks;generating=callbacks.busy;ids=ids.filter(id=>data.chats.some(chat=>chat.id===id));active=current;if(!initialized||lastActive!==current){initialized=true;lastActive=current;if(current&&!ids.includes(current))ids.push(current);}persist();paint();}};
  document.dispatchEvent(new Event('aetherai:navigation-ready'));
  new MutationObserver(paint).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
