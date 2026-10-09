(function(){
  const input=document.getElementById('userInput'),slot=document.getElementById('composerInputSlot'),prompt=document.getElementById('composerPrompt'),text=document.getElementById('composerPromptText');if(!input||!prompt||!text)return;
  let storage;try{storage=localStorage;}catch{}
  const choices=window.AetherAIPrompts.create(storage),reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let language='',question='',length=0,deleting=false,due=0,paused=true,composing=false,editing=false,keyboardNavigation=false,wasReduced=reduced.matches;
  function show(value,visible){if(text.textContent!==value)text.textContent=value;if(prompt.hidden===visible)prompt.hidden=!visible;if(slot.dataset.prompt!==String(visible))slot.dataset.prompt=String(visible);}
  function tick(){
    if(editing&&!composing&&document.activeElement!==input)editing=false;
    const lang=document.documentElement.lang||'en',now=performance.now();if(input.placeholder)input.placeholder='';
    if(lang!==language){language=lang;paused=true;question='';}
    const blocked=document.hidden||document.documentElement.classList.contains('ui-loading')||document.body.classList.contains('auth-visible')||input.value.length>0||composing||editing;
    if(blocked){show('',false);paused=true;return;}
    if(paused){paused=false;question=choices.next(language);length=reduced.matches?question.length:1;deleting=false;due=now+(reduced.matches?5000:65);show(question.slice(0,length),true);wasReduced=reduced.matches;return;}
    if(reduced.matches){length=question.length;show(question,true);wasReduced=true;return;}
    if(wasReduced){wasReduced=false;deleting=true;due=now+5000;}
    if(now<due)return;
    length+=deleting?-1:1;show(question.slice(0,length),true);
    if(!deleting&&length===question.length){deleting=true;due=now+5000;}
    else if(deleting&&length===0){question=choices.next(language);deleting=false;due=now+150;}
    else due=now+(deleting?28:65);
  }
  input.addEventListener('compositionstart',()=>{composing=true;tick();});input.addEventListener('compositionend',()=>{composing=false;tick();});
  const beginEditing=()=>{input.focus?.();editing=true;tick();};
  input.addEventListener('pointerdown',beginEditing);input.addEventListener('click',beginEditing);
  document.addEventListener('keydown',event=>{if(event.key==='Tab')keyboardNavigation=true;},true);
  document.addEventListener('pointerdown',()=>{keyboardNavigation=false;},true);
  input.addEventListener('focus',()=>{if(keyboardNavigation)editing=true;tick();});
  input.addEventListener('blur',()=>{editing=false;tick();});
  input.addEventListener('input',()=>{if(document.activeElement===input)editing=true;tick();});
  document.getElementById('newChatBtn')?.addEventListener('click',()=>{editing=false;paused=true;queueMicrotask(tick);});
  document.addEventListener('visibilitychange',tick);reduced.addEventListener('change',tick);
  const observer=new MutationObserver(tick);observer.observe(document.documentElement,{attributes:true,attributeFilter:['class','lang']});observer.observe(document.body,{attributes:true,attributeFilter:['class']});
  setInterval(tick,35);tick();
})();
