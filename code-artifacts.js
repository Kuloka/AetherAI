(function(root){
 const defaults={python:'main.py',py:'main.py',javascript:'main.js',js:'main.js',jsx:'App.jsx',typescript:'main.ts',ts:'main.ts',tsx:'App.tsx',html:'index.html',css:'styles.css',json:'package.json',java:'Main.java',c:'main.c',cpp:'main.cpp','c++':'main.cpp',cs:'Program.cs',go:'main.go',rust:'main.rs',rs:'main.rs',php:'index.php',ruby:'main.rb',rb:'main.rb',sql:'query.sql',text:'notes.txt',markdown:'README.md',md:'README.md'};
 function validPath(value){return typeof value==='string'&&value.length<200&&!/^(?:[a-z]:|\/)|[\x00-\x1f<>:"|?*]/i.test(value)&&!value.split(/[\/]/).some(part=>!part||part==='.'||part==='..');}
 function parse(text){
  const files=new Map(),re=/^```([^\n`]*)\r?\n([\s\S]*?)^```\s*$/gm;let match;
  while((match=re.exec(String(text||'')))){
   const info=match[1].trim(),tokens=info.split(/\s+/),language=tokens[0].toLowerCase();
   let name=tokens.find(token=>/\.[a-z0-9]+$/i.test(token));
   if(!name){const before=String(text).slice(0,match.index).split('\n').filter(line=>line.trim()).at(-1)||'';name=before.match(/(?:^|[\s`*#])([\w./-]+\.[a-z0-9]+)(?:[\s`*:]*$)/i)?.[1];}
   if(!name&&['bash','sh','shell','console','powershell','cmd','bat'].includes(language))continue;
   name=(name||defaults[language]||'').replace(/\\/g,'/');if(!validPath(name)||!name||!match[2].trim())continue;
   const slash=name.lastIndexOf('/'),file=name.slice(slash+1),path=name.slice(0,slash+1),ext=file.split('.').at(-1);
   files.set(name,{file,path,label:(language&& !language.includes('.')?language:ext).toUpperCase(),code:match[2].replace(/\r?\n$/,''),added:match[2].split(/\r?\n/).filter(line=>line.trim()).length,removed:0,state:'editing'});
  }
  return [...files.values()];
 }
 const api={parse,validPath};root.AetherAIArtifacts=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
