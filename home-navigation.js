(function(){
  const app=document.querySelector('.app'),main=document.querySelector('.main-area'),home=document.getElementById('sidebar'),homeButton=document.getElementById('homeBtn');
  if(!app||!main||!home)return;
  home.classList.add('home-library');home.setAttribute('aria-label','Home');home.inert=true;main.append(home);
  const copy=key=>window.AetherAIInterface.t(key);
  const content=document.createElement('div');content.className='home-content';
  content.innerHTML='<aside class="home-projects"><div class="home-project-heading"><span data-home-label="projects"></span></div><div class="home-project-list"></div><div class="home-links"></div></aside><section class="home-sessions"><div class="home-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg><input type="search" autocomplete="off"></div><div class="home-session-heading"><span data-home-label="recent"></span></div></section>';
  home.prepend(content);
  const projects=content.querySelector('.home-project-list'),sessions=content.querySelector('.home-sessions'),search=content.querySelector('input'),list=document.getElementById('chatHistoryList');sessions.append(list);
  content.querySelector('.home-project-heading').append(document.getElementById('newGroupBtn'));
  content.querySelector('.home-session-heading').append(document.getElementById('newChatBtn'));
  const profile=document.getElementById('profileBtn');content.querySelector('.home-links').append(profile);
  const newGroup=document.getElementById('newGroupBtn');newGroup.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18V5h7l2 2h9v5M18 14v7M14.5 17.5h7"/></svg>';newGroup.setAttribute('aria-label',copy('newProject'));
  let state=null,actions=null,selected=null;
  function paint(){
    if(!state||!actions)return;
    if(selected&&!state.groups.some(g=>g.id===selected))selected=null;
    const scroll=home.scrollTop;projects.replaceChildren();
    function project(id,name){const row=document.createElement('div');row.className='home-project-row';const button=document.createElement('button');button.type='button';button.className='home-project-name';button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+(id?'M3 7V5h7l2 2h9v13H3Z':'M4 4h16v12H9l-5 4Z')+'"/></svg>';const title=document.createElement('span');title.textContent=name;button.append(title);button.setAttribute('aria-pressed',String(selected===id));button.onclick=()=>{selected=selected===id?null:id;paint();};row.append(button);if(id){for(const [key,run]of [['renameProject',()=>actions.rename(id)],['deleteProject',()=>actions.remove(id)]]){const action=document.createElement('button');action.type='button';action.className='home-project-action';action.setAttribute('aria-label',copy(key));action.title=copy(key);action.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+(key==='renameProject'?'m16 3 5 5-12 12-6 1 1-6ZM13 6l5 5':'M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15')+'"/></svg>';action.onclick=run;row.append(action);}}projects.append(row);}
    project(null,copy('allChats'));state.groups.forEach(g=>project(g.id,g.name));
    const query=search.value.trim().toLocaleLowerCase();list.replaceChildren();
    const chats=state.chats.filter(c=>(c.messages||[]).length&&(!selected||c.groupId===selected)&&(!query||[c.title,...(c.messages||[]).map(m=>m.content)].join(' ').toLocaleLowerCase().includes(query))).sort((a,b)=>(b.updatedAt||b.createdAt)-(a.updatedAt||a.createdAt));
    const locale=document.documentElement.lang||navigator.language;
    const dateFormat=new Intl.DateTimeFormat(locale,{month:'short',day:'numeric'});
    const fullDateFormat=new Intl.DateTimeFormat(locale,{dateStyle:'long',timeStyle:'short'});
    for(const chat of chats){
      const row=actions.item(chat),title=row.querySelector('.history-item-title');
      row.classList.remove('active');
      const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');icon.classList.add('home-session-icon');icon.setAttribute('viewBox','0 0 24 24');icon.setAttribute('aria-hidden','true');
      icon.innerHTML='<path d="M6 3h9l4 4v14H6Z"/><path d="M14 3v5h5M9 12h7M9 16h5"/>';row.prepend(icon);
      title.title=title.textContent;
      const group=state.groups.find(g=>g.id===chat.groupId),label=document.createElement('span');label.className='home-chat-project';label.textContent=group?.name||'';label.title=label.textContent;title.after(label);
      const date=document.createElement('time');date.className='home-chat-date';
      const timestamp=chat.updatedAt||chat.createdAt,value=timestamp?new Date(timestamp):null;
      if(value&&Number.isFinite(value.getTime())){date.dateTime=value.toISOString();date.textContent=dateFormat.format(value);date.title=fullDateFormat.format(value);}label.after(date);
      const buttons=row.querySelectorAll('.history-item-del');
      buttons.forEach((button,index)=>{button.type='button';button.setAttribute('aria-label',copy(index===0?'moveToProject':'deleteChat'));button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+(index===0?'M3 7V5h7l2 2h9v13H3Z':'M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15')+'"/></svg>';});
      list.append(row);
    }
    if(!chats.length){const empty=document.createElement('p');empty.className='home-empty';empty.textContent=copy(query?'noResults':selected?'emptyProjectChats':'emptyRecent');list.append(empty);}
    home.scrollTop=scroll;
  }
  search.addEventListener('input',paint);
  let transition=null;
  function animate(frames,complete){transition?.cancel();const duration=matchMedia('(prefers-reduced-motion:reduce)').matches?0:220;transition=home.animate(frames,{duration,easing:'cubic-bezier(.22,1,.36,1)'});transition.onfinish=()=>{transition=null;complete?.();};}
  function close(restoreTab=true){if(!app.classList.contains('home-open'))return;app.classList.remove('home-open');app.classList.add('home-leaving');home.inert=true;homeButton.setAttribute('aria-pressed','false');main.querySelector('.workspace').inert=false;animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-4px)'}],()=>app.classList.remove('home-leaving'));document.getElementById('profileMenu').hidden=true;profile.setAttribute('aria-expanded','false');if(restoreTab)window.AetherAIChatTabs?.restore();window.AetherAIChatTabs?.refresh();}
  function open(){app.classList.remove('home-leaving');app.classList.add('home-open');home.inert=false;homeButton.setAttribute('aria-pressed','true');main.querySelector('.workspace').inert=true;document.querySelector('#modelDropdown')?.classList.remove('show');animate([{opacity:0,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}]);window.AetherAIChatTabs?.refresh();}
  homeButton.addEventListener('click',()=>app.classList.contains('home-open')?close():open());
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&app.classList.contains('home-open')&&!document.querySelector('.modal-overlay.show')){close();homeButton.focus();}});
  window.AetherAIHome={open,close,refresh(data,callbacks){state=data;actions=callbacks;paint();}};
  document.getElementById('newChatBtn').addEventListener('click',()=>{if(selected&&!document.body.classList.contains('is-generating'))actions?.assign(selected);});
  const menuButton=document.getElementById('appMenuBtn'),menu=document.getElementById('appMenu');
  function groups(){return [...menu.querySelectorAll('.app-menu-group')];}
  function shutGroups(){groups().forEach(group=>{group.classList.remove('open');group.querySelector(':scope>button').setAttribute('aria-expanded','false');});}
  function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');shutGroups();}
  function showGroup(group){shutGroups();group.classList.add('open');const button=group.querySelector(':scope>button');button.setAttribute('aria-expanded','true');group.dataset.side=group.getBoundingClientRect().right+190>innerWidth?'left':'right';}
  menuButton.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));if(open)menu.querySelector('button')?.focus();else shutGroups();});
  document.addEventListener('click',event=>{if(!event.target.closest('#appMenu,#appMenuBtn'))closeMenu();});
  document.addEventListener('keydown',event=>{
    if(menu.hidden)return;const group=event.target.closest('.app-menu-group');
    if(event.key==='Escape'){event.preventDefault();if(group?.classList.contains('open')){shutGroups();group.querySelector(':scope>button').focus();}else{closeMenu();menuButton.focus();}return;}
    if(event.key==='ArrowRight'&&group&&!event.target.closest('.app-submenu')){event.preventDefault();showGroup(group);group.querySelector('.app-submenu button')?.focus();return;}
    if(event.key==='ArrowLeft'&&event.target.closest('.app-submenu')){event.preventDefault();shutGroups();group.querySelector(':scope>button').focus();return;}
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;event.preventDefault();const submenu=event.target.closest('.app-submenu'),buttons=submenu?[...submenu.querySelectorAll('button')]:groups().map(g=>g.querySelector(':scope>button'));let i=buttons.indexOf(document.activeElement);i=event.key==='Home'?0:event.key==='End'?buttons.length-1:(i+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;buttons[i]?.focus();
  });
  function category(key,entries){const group=document.createElement('div');group.className='app-menu-group';const trigger=document.createElement('button');trigger.type='button';trigger.setAttribute('aria-haspopup','menu');trigger.setAttribute('aria-expanded','false');trigger.innerHTML='<span data-menu-label="'+key+'"></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';group.append(trigger);const submenu=document.createElement('div');submenu.className='app-submenu';submenu.setAttribute('role','menu');group.append(submenu);entries.forEach(([label,run])=>{const button=document.createElement('button');button.type='button';button.dataset.menuLabel=label;button.onclick=()=>{closeMenu();run();};submenu.append(button);});trigger.onclick=()=>group.classList.contains('open')?shutGroups():showGroup(group);group.onpointerenter=()=>showGroup(group);menu.append(group);}
  function settings(tab){document.getElementById('settingsBtn').click();if(tab)document.querySelector('[data-settings-tab="'+tab+'"]').click();}
  const settingsLink=document.createElement('button');settingsLink.type='button';settingsLink.className='home-settings-link';settingsLink.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z"/><circle cx="12" cy="12" r="3"/></svg><span data-home-label="settings"></span>';settingsLink.onclick=()=>settings();content.querySelector('.home-links').prepend(settingsLink);
  const profileMenu=document.getElementById('profileMenu');
  function positionProfile(){if(profileMenu.hidden)return;const r=profile.getBoundingClientRect();profileMenu.style.left=Math.min(r.left,innerWidth-profileMenu.offsetWidth-12)+'px';profileMenu.style.top=Math.min(r.bottom+6,innerHeight-profileMenu.offsetHeight-12)+'px';profileMenu.style.right='auto';profileMenu.style.bottom='auto';}
  new MutationObserver(positionProfile).observe(profileMenu,{attributes:true,attributeFilter:['hidden']});home.addEventListener('scroll',positionProfile);window.addEventListener('resize',positionProfile);
  const click=id=>()=>document.getElementById(id).click();
  category('fileMenu',[['newChat',click('newChatBtn')],['newProject',click('newGroupBtn')],['projects',click('openProjectsBtn')],['settings',()=>settings()]]);
  category('viewMenu',[['appearance',()=>settings('customization')],['explorer',click('toolbarExplorerBtn')],['togglePanel',click('toolbarPanelBtn')]]);
  category('windowMenu',[['minimizeWindow',()=>window.api?.windowAction('minimize')],['maximizeWindow',()=>window.api?.windowAction('maximize')],['closeWindow',()=>window.api?.windowAction('close')]]);
  category('tools',[['commandPalette',()=>window.AetherAICommandPalette?.open()],['manageModels',()=>settings('cloud')],['mcpTools',()=>settings('plugins')]]);
  function lockNavigation(){document.querySelector('.window-navigation').inert=document.body.classList.contains('auth-visible');if(document.body.classList.contains('auth-visible'))closeMenu();}
  new MutationObserver(lockNavigation).observe(document.body,{attributes:true,attributeFilter:['class']});lockNavigation();
  function labels(){homeButton.setAttribute('aria-label',copy('home'));homeButton.title=copy('home');home.setAttribute('aria-label',copy('home'));menuButton.setAttribute('aria-label',copy('menu'));newGroup.setAttribute('aria-label',copy('newProject'));newGroup.title=copy('newProject');search.placeholder=copy('searchChats');search.setAttribute('aria-label',copy('searchChats'));content.querySelectorAll('[data-home-label]').forEach(el=>el.textContent=copy(el.dataset.homeLabel));menu.querySelectorAll('[data-menu-label]').forEach(button=>button.textContent=copy(button.dataset.menuLabel));paint();}
  new MutationObserver(labels).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});labels();
})();
