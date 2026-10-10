(function(root){
  'use strict';
  const presets={
    aetherai:{name:'AetherAI',en:'AetherAI logo and thinking animation',ru:'Лого и thinking-анимация AetherAI',logo:null},
    claude:{name:'Claude',en:'Claude logo · animated spark',ru:'Логотип Claude · анимированная искра',logo:'resources/model-icons/claude-color.svg'},
    chatgpt:{name:'ChatGPT',en:'ChatGPT logo · pulsing dot',ru:'Логотип ChatGPT · пульсирующая точка',logo:'resources/model-icons/openai.svg'},
    deepseek:{name:'DeepSeek',en:'DeepSeek logo · flowing dots',ru:'Логотип DeepSeek · бегущие точки',logo:'resources/model-icons/deepseek-color.svg'}
  };
  const normalize=value=>Object.hasOwn(presets,value)?value:'aetherai';
  let serial=0;
  function thinkingMarkup(value){
    const id=normalize(value);
    if(id==='aetherai')return root.AetherAIBrand.thinkingMarkup();
    if(id==='chatgpt')return '<span class="chatgpt-thinking-dot" aria-hidden="true"></span>';
    if(id==='deepseek')return '<span class="deepseek-working" aria-hidden="true"><img class="service-thinking-logo" src="'+presets.deepseek.logo+'" alt=""><span class="thinking-dots"><i></i><i></i><i></i></span></span>';
    const prefix='claude-spark-'+(++serial),source=root.AetherAIClaudePath;
    const sectors=Array.from({length:16},(_,i)=>{const a=(i/16)*Math.PI*2,b=((i+1)/16)*Math.PI*2,point=angle=>(12+30*Math.cos(angle)).toFixed(3)+' '+(12+30*Math.sin(angle)).toFixed(3);return '<clipPath id="'+prefix+'-'+i+'"><path d="M12 12L'+point(a)+'L'+point(b)+'Z"/></clipPath>';}).join('');
    const rays=Array.from({length:16},(_,i)=>'<g class="claude-spark-ray" style="--ray-delay:'+(-i*.11)+'s;--ray-duration:'+(1.7+(i%3)*.18)+'s"><g clip-path="url(#'+prefix+'-'+i+')"><use href="#'+prefix+'-shape"/></g></g>').join('');
    return '<svg class="claude-thinking-spark" viewBox="-2 -2 28 28" aria-hidden="true"><defs><path id="'+prefix+'-shape" d="'+source+'" fill="currentColor"/>'+sectors+'</defs>'+rays+'</svg>';
  }
  function apply(value){
    const id=normalize(value),preset=presets[id];
    if(root.document){
      const changed=root.document.body.dataset.chatStyle!==id;
      root.document.body.dataset.chatStyle=id;
      const wordmark=root.document.querySelector('.aetherai-wordmark');
      if(wordmark){wordmark.textContent=preset.name;wordmark.title=id==='aetherai'?'AetherAI':preset.name+' · AetherAI visual preset';}
      for(const [selector,cls] of [['.side-logo','service-sidebar-logo'],['.welcome-screen','service-welcome-logo']]){
        const parent=root.document.querySelector(selector);if(!parent)continue;
        let image=parent.querySelector('.'+cls);
        if(!preset.logo){image?.remove();continue;}
        if(!image){image=root.document.createElement('img');image.className=cls+' service-logo';image.alt='';image.setAttribute('aria-hidden','true');parent.prepend(image);}
        image.src=preset.logo;
      }
      if(changed)root.document.querySelectorAll('.thinking-logo').forEach(element=>{element.innerHTML=thinkingMarkup(id);});
    }
    return id;
  }
  const api={presets,normalize,apply,thinkingMarkup};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AetherAIChatStyle=api;
  if(root.document){const sync=()=>{root.document.body.dataset.motionPaused=String(root.document.hidden);};root.document.addEventListener('visibilitychange',sync);sync();}
})(typeof globalThis!=='undefined'?globalThis:this);
