(function(root){
  const copy={
    en:{sources:'Sources',explain:'Explain in more detail',example:'Give me an example'},
    ru:{sources:'Источники',explain:'Объяснить подробнее',example:'Привести пример'},
    es:{sources:'Fuentes',explain:'Explicar con más detalle',example:'Dar un ejemplo'},
    pt:{sources:'Fontes',explain:'Explicar com mais detalhes',example:'Dar um exemplo'},
    fr:{sources:'Sources',explain:'Expliquer plus en détail',example:'Donner un exemple'},
    de:{sources:'Quellen',explain:'Ausführlicher erklären',example:'Ein Beispiel geben'},
    it:{sources:'Fonti',explain:'Spiegare più nel dettaglio',example:'Fare un esempio'},
    tr:{sources:'Kaynaklar',explain:'Daha ayrıntılı açıkla',example:'Bir örnek ver'},
    pl:{sources:'Źródła',explain:'Wyjaśnij dokładniej',example:'Podaj przykład'},
    uk:{sources:'Джерела',explain:'Пояснити докладніше',example:'Навести приклад'}
  };
  function labels(lang){return copy[lang]||copy.en;}
  function safeUrl(value){try{const url=new URL(value);return ['https:','http:'].includes(url.protocol)&&!url.username&&!url.password?url:null;}catch{return null;}}
  function sourceDetails(source){
    const url=safeUrl(source?.url);if(!url)return null;
    const host=url.hostname.replace(/^www\./,'');
    const privateHost=/^(?:localhost|127\.|0\.|10\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.|\[|.*\.local$)/i.test(url.hostname);
    return {href:url.href,host,title:String(source.title||host).slice(0,120),icon:privateHost?null:new URL('/favicon.ico','https://'+url.host).href};
  }
  function shouldExplain({question='',answer='',interrupted=false,images=false}={}){
    if(interrupted||images||String(answer).trim().length<180)return false;
    const text=String(answer),request=String(question);
    const mathOrCode=/```\w*\s|\\(?:frac|sqrt|sum|int|begin|\[|\()|[∫∑√]/.test(text);
    const steps=(text.match(/^\s*(?:\d+[.)]|#{1,3})\s+\S/gm)||[]).length>=3;
    const technical=/реши|докажи|вычисл|уравнен|алгоритм|отлад|программ|solve|prove|calculate|equation|algorithm|debug|resuelve|demuestra|calcula|résous|démontre|berechne|beweise|risolvi|çöz|hesapla|rozwiąż|oblicz|доведи|обчисл/i.test(request);
    return mathOrCode||steps||(technical&&text.length>=350);
  }
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // Input is already HTML-escaped by the Markdown renderer. Protect links/code while styling text.
  function inline(escaped){
    const tokens=[];const stash=html=>`\uE100${tokens.push(html)-1}\uE101`;
    const format=s=>s.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
    let text=escaped.replace(/`([^`]+)`/g,(_,code)=>stash('<code>'+code+'</code>'));
    text=text.replace(/\[([^\]\n]+)\]\((https?:\/\/[^\s<>]+)\)/g,(original,label,href)=>{
      const decoded=href.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
      const url=safeUrl(decoded);if(!url)return original;
      return stash('<a href="'+escape(url.href)+'" target="_blank" rel="noopener noreferrer">'+format(label)+'</a>');
    });
    return format(text).replace(/\uE100(\d+)\uE101/g,(_,i)=>tokens[Number(i)]||'');
  }
  const api={labels,safeUrl,sourceDetails,shouldExplain,inline};root.AetherAIAnswerPresentation=api;
  if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
