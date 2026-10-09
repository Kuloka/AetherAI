const fs=require('node:fs'),path=require('node:path'),sharp=require('sharp');
const root=path.resolve(__dirname,'..'),resources=path.join(root,'resources'),branding=path.join(resources,'branding');
const motion=require('../logo-motion');
const logo=fs.readFileSync(path.join(resources,'aetherai-logo.svg'),'utf8').trim();
const content=logo.match(/<g[\s\S]*<\/g>/)[0];
const wrap=(body,size=256)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 256 256">${body}</svg>`;
async function main(){
 fs.mkdirSync(branding,{recursive:true});
 const tile=wrap(`<rect x="8" y="8" width="240" height="240" rx="54" fill="#101010"/><g transform="translate(34 28) scale(.73)">${content}</g>`);
 await sharp(Buffer.from(tile)).resize(512,512).png().toFile(path.join(resources,'aetherai-logo.png'));
 await sharp(Buffer.from(tile)).resize(1024,1024).png().toFile(path.join(resources,'aetherai-logo-mac.png'));
 const png=await sharp(Buffer.from(tile)).resize(256,256).png().toBuffer();
 const header=Buffer.alloc(22);header.writeUInt16LE(1,2);header.writeUInt16LE(1,4);header.writeUInt16LE(32,12);header.writeUInt32LE(png.length,14);header.writeUInt32LE(22,18);
 fs.writeFileSync(path.join(resources,'aetherai-logo.ico'),Buffer.concat([header,png]));
 const animated=wrap(`<style>.still{display:none}@media(prefers-reduced-motion:reduce){.flow{display:none}.still{display:inline}}</style><g class="flow" fill="#ededed">${motion.A.map((value,i)=>`<path d="${value}"><animate attributeName="d" values="${value};${value};${motion.waves[i]};${motion.waves[i]};${value};${value}" keyTimes="0;.1;.4;.6;.9;1" keySplines="0 0 1 1;.4 0 .6 1;0 0 1 1;.4 0 .6 1;0 0 1 1" calcMode="spline" dur="3.2s" repeatCount="indefinite"/></path>`).join('')}</g><g class="still">${content}</g>`);
 fs.writeFileSync(path.join(resources,'aetherai-logo-animated.svg'),animated+'\n');
 const frames=[];
 for(let i=0;i<64;i++){
  const moving='<g fill="#ededed">'+motion.frame(i/64).map(value=>`<path d="${value}"/>`).join('')+'</g>';
  frames.push(await sharp(Buffer.from(wrap('<rect width="256" height="256" fill="#101010"/>'+moving))).ensureAlpha().raw().toBuffer());
 }
 await sharp(Buffer.concat(frames),{raw:{width:256,height:256*64,channels:4,pageHeight:256}}).gif({loop:0,delay:Array(64).fill(50),colours:128}).toFile(path.join(resources,'aetherai-logo-animated.gif'));
 fs.copyFileSync(path.join(resources,'aetherai-logo-animated.gif'),path.join(resources,'aetherai-logo-flow-v1.gif'));
 await sharp(Buffer.from(logo)).resize(1024,1024).png().toFile(path.join(branding,'aetherai-icon.png'));
 const curves=Array.from({length:12},(_,i)=>`<path d="M-100 ${880+i*22}C440 ${600+i*22} 800 ${1220+i*22} 1300 ${820+i*22}S2100 ${730+i*22} 2660 ${940+i*22}"/>`).join('');
 const banner=`<svg xmlns="http://www.w3.org/2000/svg" width="2560" height="1280" viewBox="0 0 2560 1280"><rect width="2560" height="1280" fill="#101010"/><g fill="none" stroke="#292929" stroke-width="1.3" opacity=".55">${curves}</g><g transform="translate(1152 210)">${content}</g><text x="1280" y="610" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="108" font-weight="600" letter-spacing="-4" fill="#ededed">AetherAI</text><text x="1280" y="694" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="29" letter-spacing="3" fill="#999">YOUR IDEAS. YOUR MODELS. YOUR SPACE.</text><text x="1280" y="1150" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="22" letter-spacing="5" fill="#777">LOCAL + CLOUD AI WORKSPACE</text></svg>`;
 fs.writeFileSync(path.join(branding,'aetherai-banner.svg'),banner+'\n');
 await sharp(Buffer.from(banner)).png().toFile(path.join(branding,'aetherai-banner.png'));
 await sharp(Buffer.from(banner)).resize(1280,640).png().toFile(path.join(branding,'aetherai-github.png'));
 await sharp(Buffer.from(banner)).resize(1200,600).png().toFile(path.join(root,'docs/assets/social.png'));
 console.log('Created AetherAI SVG, PNG, ICO, macOS icon, 64-frame GIF and brand banners.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
