(function(){
  const overlays=['settingsModal','groupModal','projectsBrowser'].map(id=>document.getElementById(id)).filter(Boolean),records=new Map();
  const visible=element=>element?.isConnected&&element.getClientRects().length&&getComputedStyle(element).visibility!=='hidden'&&!element.closest('[inert]');
  const controls=overlay=>[...overlay.querySelectorAll('button,input,select,textarea,a[href],[tabindex="0"]')].filter(element=>!element.disabled&&element.tabIndex>=0&&visible(element));
  function restore(previous){const fallback=document.querySelector('.app.home-open')?document.getElementById('homeBtn'):document.getElementById('modelBtn');(visible(previous)?previous:visible(fallback)?fallback:document.getElementById('homeBtn'))?.focus({preventScroll:true});}
  overlays.forEach(overlay=>{const dialog=overlay.querySelector('.modal');if(dialog){dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');const heading=dialog.querySelector('h2');if(heading?.id)dialog.setAttribute('aria-labelledby',heading.id);}
    new MutationObserver(()=>{const opened=overlay.classList.contains('show'),record=records.get(overlay);if(opened&&!record){records.set(overlay,{previous:document.activeElement});if(!overlay.contains(document.activeElement)){const first=controls(overlay)[0];first?.focus({preventScroll:true});}}else if(!opened&&record){records.delete(overlay);restore(record.previous);}}).observe(overlay,{attributes:true,attributeFilter:['class']});
  });
  document.addEventListener('keydown',event=>{const overlay=[...document.querySelectorAll('.modal-overlay.show')].at(-1);if(!overlay||!overlays.includes(overlay)||document.body.classList.contains('auth-visible')||document.querySelector('dialog[open]'))return;
    if(event.key==='Escape'&&['groupModal','projectsBrowser'].includes(overlay.id)){event.preventDefault();event.stopImmediatePropagation();overlay.querySelector('.modal-close').click();return;}
    if(event.key!=='Tab')return;const buttons=controls(overlay),first=buttons[0],last=buttons.at(-1);if(!first)return;
    if(!overlay.contains(document.activeElement)||(event.shiftKey&&document.activeElement===first)||(!event.shiftKey&&document.activeElement===last)){event.preventDefault();event.stopImmediatePropagation();(event.shiftKey?last:first).focus();}
  },true);
})();
