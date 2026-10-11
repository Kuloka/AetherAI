const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),path=require('node:path'),os=require('node:os'),browser=require('../electron/project-browser');
test('Project browser lists real files, previews UTF-8 and rejects traversal, binary and oversized data',async t=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-project-browser-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));await fs.mkdir(path.join(root,'Demo','src'),{recursive:true});await fs.writeFile(path.join(root,'Demo','src','app.js'),'console.log(1);');await fs.writeFile(path.join(root,'Demo','.env'),'secret');
 assert.deepEqual(browser.list(root).map(entry=>entry.name),['Demo']);assert.deepEqual(browser.list(root,'Demo').map(entry=>entry.name),['src']);assert.equal(browser.read(root,'Demo/src/app.js'),'console.log(1);');
 assert.throws(()=>browser.read(root,'../outside'),/Invalid/);assert.throws(()=>browser.list(root,path.resolve(root,'Demo')),/Invalid/);
 await fs.writeFile(path.join(root,'Demo','binary'),Buffer.from([0,1]));assert.throws(()=>browser.read(root,'Demo/binary'),/Binary/);
 await fs.writeFile(path.join(root,'Demo','large'),'x'.repeat(256001));assert.throws(()=>browser.read(root,'Demo/large'),/256/);
});
