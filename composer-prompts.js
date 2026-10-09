(function(){
  const input=document.getElementById('userInput'); if(!input)return;
  const examples={
    en:['List 100 cat breeds','Explain black holes simply','Help me plan a weekend trip','Write a story about a tiny robot'],
    ru:['Расскажи о породах кошек','Объясни чёрные дыры простыми словами','Помоги спланировать выходные','Напиши историю о маленьком роботе'],
    de:['Erzähle mir von Katzenrassen','Erkläre schwarze Löcher einfach','Plane mit mir ein Wochenende'],
    fr:['Parle-moi des races de chats','Explique simplement les trous noirs','Aide-moi à organiser mon week-end'],
    es:['Cuéntame sobre razas de gatos','Explica los agujeros negros de forma sencilla','Ayúdame a planear el fin de semana'],
    pt:['Fale sobre raças de gatos','Explique buracos negros de forma simples','Ajude-me a planejar o fim de semana'],
    it:['Parlami delle razze di gatti','Spiega i buchi neri in modo semplice','Aiutami a organizzare il fine settimana'],
    tr:['Kedi ırklarını anlat','Kara delikleri basitçe açıkla','Hafta sonumu planlamama yardım et'],
    pl:['Opowiedz o rasach kotów','Wyjaśnij prosto czarne dziury','Pomóż mi zaplanować weekend'],
    uk:['Розкажи про породи котів','Поясни чорні діри простими словами','Допоможи спланувати вихідні']
  };
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let language='',base=input.placeholder,index=0,length=0,deleting=false,due=0,paused=true,composing=false;
  function tick(){
    const lang=document.documentElement.lang||'en';
    if(lang!==language){language=lang;base=input.placeholder;index=0;length=0;deleting=false;paused=true;input.setAttribute('aria-label',base);}
    const blocked=document.hidden||document.documentElement.classList.contains('ui-loading')||document.body.classList.contains('auth-visible')||document.activeElement===input||input.value.length>0||composing||reduced.matches;
    if(blocked){if(!paused)input.placeholder=base;paused=true;return;}
    const now=performance.now();
    if(paused){paused=false;length=0;deleting=false;due=now+900;input.placeholder=base;}
    if(now<due)return;
    const text=(examples[language]||examples.en)[index];
    length+=deleting?-1:1;input.placeholder=text.slice(0,length);
    if(!deleting&&length===text.length){deleting=true;due=now+5000;}
    else if(deleting&&length===0){deleting=false;index=(index+1)%(examples[language]||examples.en).length;due=now+500;}
    else due=now+(deleting?28:65);
  }
  input.addEventListener('compositionstart',()=>{composing=true;tick();});input.addEventListener('compositionend',()=>{composing=false;});
  input.addEventListener('focus',tick);input.addEventListener('input',tick);
  document.addEventListener('visibilitychange',tick);reduced.addEventListener('change',tick);
  setInterval(tick,35);tick();
})();
