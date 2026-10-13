(function(root){
 const defaults={python:'main.py',py:'main.py',javascript:'main.js',js:'main.js',jsx:'App.jsx',typescript:'main.ts',ts:'main.ts',tsx:'App.tsx',html:'index.html',css:'styles.css',json:'package.json',java:'Main.java',c:'main.c',cpp:'main.cpp','c++':'main.cpp',cs:'Program.cs',go:'main.go',rust:'main.rs',rs:'main.rs',php:'index.php',ruby:'main.rb',rb:'main.rb',sql:'query.sql',text:'notes.txt',markdown:'README.md',md:'README.md'};
 function validPath(value){return typeof value==='string'&&value.length<200&&!/^(?:[a-z]:|\/)|[\x00-\x1f<>:"|?*]/i.test(value)&&!value.split(/[\/]/).some(part=>!part||part==='.'||part==='..');}
 const schema={type:'object',additionalProperties:false,properties:{summary:{type:'string'},files:{type:'array',minItems:1,items:{type:'object',additionalProperties:false,properties:{path:{type:'string'},content:{type:'string'}},required:['path','content']}}},required:['summary','files']};
 function supportsStructured(model){return model?.provider==='openrouter'&&model.supportedParameters?.includes('structured_outputs');}
 function structured(text){try{const value=JSON.parse(String(text).trim());if(!value||typeof value.summary!=='string'||!Array.isArray(value.files)||!value.files.length||value.files.length>100)return null;const seen=new Set();for(const file of value.files){if(!file||!validPath(file.path.replace(/\\/g,'/'))||typeof file.content!=='string'||!file.content.trim()||seen.has(file.path))return null;file.path=file.path.replace(/\\/g,'/');if(seen.has(file.path))return null;seen.add(file.path);}return value;}catch{return null;}}
 function parse(text){
  const object=structured(text);if(object)return object.files.map(({path:name,content:code})=>{const slash=name.lastIndexOf('/');return {file:name.slice(slash+1),path:name.slice(0,slash+1),label:name.split('.').at(-1).toUpperCase(),code,added:code.split(/\r?\n/).filter(line=>line.trim()).length,removed:0,state:'editing'};});
  const files=new Map(),re=/^[ \t]*(`{3,}|~{3,})([^\n]*)\r?\n([\s\S]*?)^[ \t]*\1[ \t]*$/gm;let match;
  while((match=re.exec(String(text||'')))){
   const info=match[2].trim(),tokens=info.split(/\s+/),language=tokens[0].toLowerCase();
   let name=info.match(/(?:file(?:name)?|path)\s*=\s*["']?([^\s"'}]+)/i)?.[1]||tokens.map(token=>token.replace(/^["']|["']$/g,'')).find(token=>/\.[a-z0-9]+$/i.test(token));
   if(!name){const before=String(text).slice(0,match.index).split('\n').filter(line=>line.trim()).at(-1)||'';name=before.match(/(?:^|[\s`*#])([\w./-]+\.[a-z0-9]+)(?:[\s`*:]*$)/i)?.[1];}
   if(!name&&['bash','sh','shell','console','powershell','cmd','bat'].includes(language))continue;
   name=(name||defaults[language]||'').replace(/\\/g,'/');if(!validPath(name)||!name||!match[3].trim())continue;
   const slash=name.lastIndexOf('/'),file=name.slice(slash+1),path=name.slice(0,slash+1),ext=file.split('.').at(-1);
   files.set(name,{file,path,label:(language&& !language.includes('.')?language:ext).toUpperCase(),code:match[3].replace(/\r?\n$/,''),added:match[3].split(/\r?\n/).filter(line=>line.trim()).length,removed:0,state:'editing'});
  }
  return [...files.values()];
 }

 // Read-only preview of an unfinished JSON manifest. Completion is still validated by structured().
 function prefixManifest(text){
  let i=0;const completed=new WeakMap();const skip=()=>{while(/\s/.test(text[i]||'')&&i<text.length)i++;};
  function string(){i++;let value='';while(i<text.length){const ch=text[i++];if(ch==='"')return {value,complete:true};if(ch!=='\\'){value+=ch;continue;}if(i>=text.length)break;const escaped=text[i++];if(escaped==='u'){const hex=text.slice(i,i+4);if(!/^[0-9a-f]{4}$/i.test(hex))break;value+=String.fromCharCode(parseInt(hex,16));i+=4;}else{const escapes={'"':'"','\\':'\\','/':'/',n:'\n',r:'\r',t:'\t',b:'\b',f:'\f'};if(!(escaped in escapes))break;value+=escapes[escaped];}}return {value,complete:false};}
  function read(depth=0){skip();if(depth>12)return {complete:false};const ch=text[i];if(ch==='"')return string();if(ch==='{'||ch==='['){i++;const object=ch==='{',value=object?{}:[],keys=new Set();if(object)completed.set(value,keys);while(i<text.length){skip();if(text[i]===(object?'}':']')){i++;return {value,complete:true};}let key;if(object){if(text[i]!=='"')break;const token=string();if(!token.complete)break;key=token.value;skip();if(text[i++]!==':')break;}const token=read(depth+1);if(token.value!==undefined){if(object){Object.defineProperty(value,key,{value:token.value,enumerable:true,configurable:true,writable:true});if(token.complete)keys.add(key);}else value.push(token.value);}if(!token.complete)return {value,complete:false};skip();if(text[i]===','){i++;continue;}if(text[i]!== (object?'}':']'))break;}return {value,complete:false};}const start=i;while(i<text.length&&!/[\s,}\]]/.test(text[i]))i++;try{return {value:JSON.parse(text.slice(start,i)),complete:true};}catch{return {complete:false};}}
  const {value}=read();if(!value||typeof value!=='object'||Array.isArray(value))return {summary:'',files:[]};
  const files=(Array.isArray(value.files)?value.files:[]).slice(0,100).filter(file=>file&&completed.get(file)?.has('path')&&typeof file.path==='string'&&validPath(file.path.replace(/\\/g,'/'))&&typeof file.content==='string').map(file=>{const name=file.path.replace(/\\/g,'/'),slash=name.lastIndexOf('/');return {file:name.slice(slash+1),path:name.slice(0,slash+1),label:name.split('.').at(-1).toUpperCase(),code:file.content,complete:completed.get(file)?.has('content')===true,added:file.content.split(/\r?\n/).filter(line=>line.trim()).length,removed:0,state:'editing'};});
  return {summary:typeof value.summary==='string'?value.summary:'',files};
 }
 function preview(text){text=String(text||'');if(text.trimStart().startsWith('{'))return prefixManifest(text.trimStart());let open=null;for(const line of text.split(/\r?\n/)){const match=line.match(/^[ \t]*(\x60{3,}|~{3,})(.*)$/);if(!match)continue;if(open){if(match[1][0]===open[0]&&match[1].length>=open.length&&!match[2].trim())open=null;}else open=match[1];}const finished=parse(text);return {summary:'',files:parse(open?text+'\n'+open:text).map(file=>({...file,complete:finished.some(done=>done.file===file.file&&done.path===file.path&&done.code===file.code)}))};}
 function previewMarkdown(value){const tick=String.fromCharCode(96);return [value.summary,...value.files.map(file=>{const runs=file.code.match(/\x60+/g)||[],fence=tick.repeat(Math.max(3,...runs.map(run=>run.length+1)));return fence+file.label.toLowerCase()+' '+file.path+file.file+'\n'+file.code+'\n'+fence;})].filter(Boolean).join('\n\n');}

 const api={parse,validPath,schema,structured,supportsStructured,preview,previewMarkdown};root.AetherAIArtifacts=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
