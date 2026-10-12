(function(root){
  function visibleText(value){const source=String(value||''),parts=[];let text='',cursor=0;const protect=part=>'\uE210'+(parts.push(part)-1)+'\uE211',fences=/^[ \t]*(\x60{3,}|~{3,})[^\n]*(?:\n|$)/gm;let match;while((match=fences.exec(source))){const close=new RegExp('^[ \\t]*'+match[1][0]+'{'+match[1].length+',}[ \\t]*(?=\\r?$)','gm');close.lastIndex=fences.lastIndex;const ending=close.exec(source),end=ending?ending.index+ending[0].length:source.length;text+=source.slice(cursor,match.index)+protect(source.slice(match.index,end));cursor=end;fences.lastIndex=end;}text+=source.slice(cursor);text=text.replace(/\x60[^\x60\n]*\x60/g,protect).replace(/<think>[\s\S]*?(?:<\/think>|$)|<\/?think>/gi,'').replace(/<\/?(?:t|th|thi|thin|think)$/i,'');return text.replace(/\uE210(\d+)\uE211/g,(part,index)=>parts[Number(index)]??part);}
  function create(render,{schedule=root.requestAnimationFrame,cancel=root.cancelAnimationFrame,reduced=()=>false}={}){
    let target='',shown='',request=null,closed=false;
    function emit(){render(shown);}
    function tick(){request=null;if(closed)return;shown=target;emit();}
    return {update(value){if(closed)return;target=visibleText(value);if(!target.startsWith(shown))shown='';if(reduced()){if(request!==null)cancel(request);request=null;shown=target;emit();}else if(request===null&&shown!==target)request=schedule(tick);},finish(){if(request!==null)cancel(request);request=null;shown=target;emit();closed=true;},stop(){if(request!==null)cancel(request);request=null;closed=true;return target;},get text(){return target;}};
  }
  const api={visibleText,create};root.AetherAIStreaming=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
