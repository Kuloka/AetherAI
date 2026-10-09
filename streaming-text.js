(function(root){
  function visibleText(value){return String(value||'').replace(/```[\s\S]*?(?:```|$)|`[^`\n]*`|<think>[\s\S]*?(?:<\/think>|$)|<\/?think>/gi,part=>part.startsWith('`')?part:'').replace(/<\/?(?:t|th|thi|thin|think)$/i,'');}
  function create(render,{schedule=root.requestAnimationFrame,cancel=root.cancelAnimationFrame,reduced=()=>false}={}){
    let target='',shown='',request=null,closed=false;
    function emit(){render(shown);}
    function tick(){request=null;if(closed)return;const rest=Array.from(target.slice(shown.length)),count=Math.min(rest.length,Math.max(2,Math.ceil(rest.length/8)));shown+=rest.slice(0,count).join('');emit();if(shown!==target)request=schedule(tick);}
    return {update(value){if(closed)return;target=visibleText(value);if(!target.startsWith(shown))shown='';if(reduced()){if(request!==null)cancel(request);request=null;shown=target;emit();}else if(request===null&&shown!==target)request=schedule(tick);},finish(){if(request!==null)cancel(request);request=null;shown=target;emit();closed=true;},stop(){if(request!==null)cancel(request);request=null;closed=true;return target;},get text(){return target;}};
  }
  const api={visibleText,create};root.AetherAIStreaming=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
