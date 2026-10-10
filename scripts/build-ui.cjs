const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const modules=process.env.AETHERAI_BUILD_NODE_MODULES || path.join(root,'node_modules');
const resolve=name=>require.resolve(name,{paths:[path.dirname(modules)]});
async function build(){
  const output=path.join(root,'resources/ui');fs.mkdirSync(output,{recursive:true});
  await require(resolve('esbuild')).build({entryPoints:[path.join(root,'ui/notifications.tsx')],bundle:true,outfile:path.join(output,'notifications.js'),format:'iife',platform:'browser',target:'chrome130',minify:true,legalComments:'eof',nodePaths:[modules],tsconfig:path.join(root,'tsconfig.json'),define:{'process.env.NODE_ENV':'"production"'}});
  const cli=path.join(path.dirname(resolve('@tailwindcss/cli/package.json')),'dist/index.mjs');
  const input=path.join(root,'artifacts/notifications-input.css');fs.mkdirSync(path.dirname(input),{recursive:true});
  const styles=fs.readFileSync(path.join(root,'ui/styles.css'),'utf8').replace(/"tailwindcss\/([^\"]+)"/g,(_match,file)=>JSON.stringify(path.join(modules,'tailwindcss',file).replaceAll('\\','/'))).replace('"../components/ui/notifications-5.tsx"',JSON.stringify(path.join(root,'components/ui/notifications-5.tsx').replaceAll('\\','/')));
  fs.writeFileSync(input,styles);
  const result=spawnSync(process.execPath,[cli,'-i',input,'-o',path.join(output,'notifications.css'),'--minify'],{cwd:root,stdio:'inherit',windowsHide:true,env:{...process.env,NODE_PATH:modules}});
  if(result.error)throw result.error;if(result.status)process.exit(result.status);
}
build().catch(error=>{console.error(error);process.exit(1);});
