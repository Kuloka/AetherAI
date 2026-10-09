const fs=require('node:fs'),path=require('node:path');
const source=process.argv[2]?path.resolve(process.argv[2]):path.dirname(require.resolve('katex/package.json'));
const target=path.resolve(__dirname,'../resources/katex');fs.mkdirSync(path.join(target,'fonts'),{recursive:true});
for(const file of ['katex.min.js','katex.min.css'])fs.copyFileSync(path.join(source,'dist',file),path.join(target,file));
for(const file of fs.readdirSync(path.join(source,'dist/fonts')))if(/\.(woff2?|ttf)$/.test(file))fs.copyFileSync(path.join(source,'dist/fonts',file),path.join(target,'fonts',file));
fs.copyFileSync(path.join(source,'LICENSE'),path.join(target,'LICENSE.txt'));
console.log('Copied the pinned KaTeX browser bundle, stylesheet, fonts and license for offline rendering.');
