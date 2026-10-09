const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),{secureStorageAvailable}=require('./security');
function createImageProvider(directory,storage,request=fetch){
 const file=path.join(directory,'image-provider.key'),outputs=path.join(directory,'image-output');
 const status=()=>({configured:fs.existsSync(file)});
 function save(value){if(typeof value!=='string'||value.trim().length<16||value.length>4096||/[\r\n]/.test(value))throw Error('Enter a valid image API key.');if(!secureStorageAvailable(storage))throw Error('Secure credential storage is unavailable.');fs.mkdirSync(directory,{recursive:true});fs.writeFileSync(file,storage.encryptString(value.trim()),{mode:0o600});return status();}
 function disconnect(){if(fs.existsSync(file))fs.unlinkSync(file);return status();}
 async function generate(value){if(!status().configured)return {ok:false,unconfigured:true};const prompt=String(value||'').trim();if(!prompt||prompt.length>1200)throw Error('Enter an image description under 1200 characters.');const key=storage.decryptString(fs.readFileSync(file));
  const url=new URL('https://gen.pollinations.ai/image/'+encodeURIComponent(prompt));for(const [name,value] of Object.entries({model:'flux',width:'768',height:'768',seed:String(crypto.randomInt(0,2147483647)),nologo:'true'}))url.searchParams.set(name,value);
  const response=await request(url.href,{headers:{Authorization:'Bearer '+key,'User-Agent':'AetherAI'},signal:AbortSignal.timeout(90000),redirect:'error'});
  if(!response.ok)throw Error(({401:'The image API key is invalid. Reconnect your image provider.',402:'Your image provider balance or key budget is exhausted.',429:'The image service rate limit was reached. Try again later.'})[response.status]||'The image service is unavailable. Try again later.');
  if(!/^image\/(?:png|jpeg|webp)(?:;|$)/i.test(response.headers.get('content-type')||''))throw Error('The image service did not return an image.');
  if(Number(response.headers.get('content-length'))>20*1024*1024)throw Error('The image service returned an oversized image.');
  const reader=response.body.getReader(),parts=[];let length=0;try{while(true){const part=await reader.read();if(part.done)break;length+=part.value.length;if(length>20*1024*1024)throw Error('The image service returned an oversized image.');parts.push(Buffer.from(part.value));}}finally{await reader.cancel().catch(()=>{});}
  if(!length)throw Error('The image service returned an empty image.');const image=await require('sharp')(Buffer.concat(parts),{limitInputPixels:40000000}).rotate().jpeg({quality:92}).toBuffer();fs.mkdirSync(outputs,{recursive:true});const output=path.join(outputs,'image-'+crypto.randomUUID()+'.jpg');fs.writeFileSync(output,image);return {ok:true,path:output};
 }
 return {status,save,disconnect,generate};
}
module.exports={createImageProvider};
