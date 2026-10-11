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
 const api={parse,validPath,schema,structured,supportsStructured};root.AetherAIArtifacts=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
