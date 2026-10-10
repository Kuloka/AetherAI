const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),directory=path.resolve(process.argv[2]||path.join(root,'dist'));
const yaml=require('js-yaml');
async function check(){
 const metadata=yaml.load(fs.readFileSync(path.join(directory,'latest.yml'),'utf8'));
 assert.equal(metadata.version,require('../package.json').version);
 assert.ok(Array.isArray(metadata.files)&&metadata.files.length);
 for(const file of metadata.files){
  assert.ok(/^AetherAI\.Setup\.\d+\.\d+\.\d+\.exe$/.test(file.url),'Unexpected installer asset name');
  const filename=path.join(directory,file.url),hash=crypto.createHash('sha512');
  assert.equal(fs.statSync(filename).size,file.size,'Installer size does not match update metadata');
  for await(const chunk of fs.createReadStream(filename))hash.update(chunk);
  assert.equal(hash.digest('base64'),file.sha512,'Installer digest does not match update metadata');
  assert.ok(fs.existsSync(filename+'.blockmap'),'Missing differential update block map');
 }
 console.log('PASS: latest.yml references the actual installer name, version, size, SHA512 and block map');
}
check().catch(error=>{console.error(error);process.exit(1);});
