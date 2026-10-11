(function(){
 const main=document.querySelector('.main-area'),welcome=document.getElementById('welcomeScreen')||document.querySelector('.welcome-screen'),composer=document.querySelector('footer.composer'),inner=document.getElementById('composerInner'),input=document.getElementById('userInput'),controls=document.querySelector('.composer-controls');if(!main||!welcome||!composer||!inner||!input)return;
 const origin=document.createComment('composer dock');composer.before(origin);let home=false;
 function expand(){controls.inert=false;if(home)inner.classList.add('home-composer-open');}
 function sync(value){const next=!!value;document.getElementById('modelBtn').dataset.composerPosition=next?'raised':'lowered';if(next!==home){home=next;document.getElementById('modelBtn').dataset.side=home?'down':'up';if(home){document.getElementById('welcomeTitle').after(composer);inner.classList.add('home-composer-open');}else{origin.after(composer);inner.classList.remove('home-composer-open');}}controls.inert=false;}
 const observer=new MutationObserver(()=>sync(main.classList.contains('home-mode')));observer.observe(main,{attributes:true,attributeFilter:['class']});sync(main.classList.contains('home-mode'));window.AetherAIComposer={sync,expand};
})();
