(function(root){
  'use strict';
  const presets={
    aetherai:{name:'AetherAI',en:'AetherAI logo · soft Working shimmer',ru:'Логотип AetherAI · мягкое свечение Working',logo:null},
    claude:{name:'Claude',en:'Claude logo · soft Working shimmer',ru:'Логотип Claude · мягкое свечение Working',logo:'resources/model-icons/claude-color.svg'},
    chatgpt:{name:'ChatGPT',en:'ChatGPT logo · soft Working shimmer',ru:'Логотип ChatGPT · мягкое свечение Working',logo:'resources/model-icons/openai.svg'},
    deepseek:{name:'DeepSeek',en:'DeepSeek logo · soft Working shimmer',ru:'Логотип DeepSeek · мягкое свечение Working',logo:'resources/model-icons/deepseek-color.svg'}
  };
  const normalize=value=>Object.hasOwn(presets,value)?value:'aetherai';
  function thinkingMarkup(){return "";}
  function apply(value){
    const id=normalize(value),preset=presets[id];
    if(root.document){
      const changed=root.document.body.dataset.chatStyle!==id;
      root.document.body.dataset.chatStyle=id;
      const wordmark=root.document.querySelector('.aetherai-wordmark');
      if(wordmark){wordmark.textContent=preset.name;wordmark.style.setProperty('--brand-wordmark','url("resources/'+id+'-pixel-wordmark.svg")');wordmark.title=id==='aetherai'?'AetherAI':preset.name+' · AetherAI visual preset';}
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
