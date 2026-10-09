(function(){
  const $=id=>document.getElementById(id),modal=$('modelInfoModal');
  function close(){modal.classList.remove('show');$('modelBtn')?.focus();}
  $('modelInfoClose').onclick=close;modal.onclick=event=>{if(event.target===modal)close();};modal.addEventListener('keydown',event=>{if(event.key==='Escape'){event.stopPropagation();close();}});
  window.AetherAIModelInfo={show(value){$('modelInfoTitle').textContent=value.cloudName||value.name;const grid=$('modelInfoFacts');grid.replaceChildren();const ru=document.documentElement.lang==='ru',facts=[];
    const add=(english,russian,text)=>{if(text)facts.push([ru?russian:english,text]);};
    add('Provider','Провайдер',({groq:'Groq',openrouter:'OpenRouter',gemini:'Google Gemini',cerebras:'Cerebras',sambanova:'SambaNova'})[value.provider]||value.provider||value.backend||'Local');
    add('Context','Контекст',value.contextLength?value.contextLength.toLocaleString()+(ru?' токенов':' tokens'):null);
    add('Languages','Языки',Array.isArray(value.languages)?value.languages.join(', '):/allam/i.test(value.name)?'Arabic / English':null);
    add('Images','Изображения',Array.isArray(value.capabilities)?value.capabilities.includes('vision')?(ru?'Поддерживаются':'Supported'):(ru?'Только текст':'Text only'):null);
    add('Size','Размер',value.size?(value.size/1e9).toFixed(2)+' GB':null);add('Quantization','Квантизация',value.details?.quantization_level);
    for(const [title,text]of facts){const row=document.createElement('div'),label=document.createElement('span'),content=document.createElement('strong');label.textContent=title;content.textContent=text;row.append(label,content);grid.append(row);}modal.classList.add('show');$('modelInfoClose').focus();}};
})();
