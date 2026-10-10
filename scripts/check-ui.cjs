const path=require('node:path');
const root=path.resolve(__dirname,'..'),modules=process.env.AETHERAI_BUILD_NODE_MODULES||path.join(root,'node_modules');
const ts=require(require.resolve('typescript',{paths:[path.dirname(modules)]}));
const config=ts.readConfigFile(path.join(root,'tsconfig.json'),ts.sys.readFile);
if(config.error)throw Error(ts.flattenDiagnosticMessageText(config.error.messageText,'\n'));
const parsed=ts.parseJsonConfigFileContent(config.config,ts.sys,root);
if(process.env.AETHERAI_BUILD_NODE_MODULES){
  parsed.options.paths={...parsed.options.paths,react:[path.join(modules,'@types/react/index.d.ts')],'react/*':[path.join(modules,'@types/react/*')],'react-dom/*':[path.join(modules,'@types/react-dom/*')],'lucide-react':[path.join(modules,'lucide-react/dist/lucide-react.d.ts')],clsx:[path.join(modules,'clsx/clsx.d.ts')],'tailwind-merge':[path.join(modules,'tailwind-merge/dist/types.d.ts')]};
  parsed.options.typeRoots=[path.join(modules,'@types')];
}
const program=ts.createProgram(parsed.fileNames,parsed.options),errors=[...parsed.errors,...ts.getPreEmitDiagnostics(program)];
if(errors.length){console.error(ts.formatDiagnosticsWithColorAndContext(errors,{getCurrentDirectory:()=>root,getCanonicalFileName:file=>file,getNewLine:()=> '\n'}));process.exit(1);}
console.log('PASS: React notification component and bridge type checked');
