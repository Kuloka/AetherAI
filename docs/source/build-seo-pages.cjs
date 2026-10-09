const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
for(const file of ['locales.js','locales-west.js','locales-east.js','seo.js','render.js'])require(path.join(root,file));
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const boot=fs.readFileSync(path.join(__dirname,'boot.js'),'utf8').replace(/\r\n/g,'\n');
const style=['site.css','effects.css'].map(file=>fs.readFileSync(path.join(root,file),'utf8')).join('\n');
const langs=Object.keys(SITE_LANGUAGES),schemas=[];
const alternates=langs.map(lang=>`<link rel="alternate" hreflang="${lang}" href="${SITE_ORIGIN+siteLanguagePath(lang)}">`).join('\n')+`\n<link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/">`;
for(const lang of langs){
 const copy=SITE_COPY[lang],url=SITE_ORIGIN+siteLanguagePath(lang),schema=JSON.stringify(siteStructuredData(lang)).replace(/</g,'\\u003c');schemas.push(schema);
 const folder=lang==='en'?root:path.join(root,lang);fs.mkdirSync(folder,{recursive:true});
 fs.writeFileSync(path.join(folder,'index.html'),`<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(copy.meta[0])}</title><meta name="description" content="${escape(copy.meta[1])}"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#101010">
<meta property="og:site_name" content="AetherAI"><meta property="og:title" content="${escape(copy.meta[0])}"><meta property="og:description" content="${escape(copy.meta[1])}"><meta property="og:type" content="website"><meta property="og:url" content="${url}"><meta property="og:locale" content="${lang==='en'?'en_US':lang==='pt'?'pt_BR':lang+'_'+lang.toUpperCase()}"><meta property="og:image" content="${SITE_ORIGIN}/assets/social.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt" content="AetherAI — local and cloud AI chat">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(copy.meta[0])}"><meta name="twitter:description" content="${escape(copy.meta[1])}"><meta name="twitter:image" content="${SITE_ORIGIN}/assets/social.png">
<link rel="icon" href="/assets/logo.svg" type="image/svg+xml"><link rel="canonical" href="${url}">${alternates}
<style>${style}</style><script id="siteStructuredData" type="application/ld+json">${schema}</script>
</head><body><div id="page">${siteMarkup(lang).replace('class="language-picker"','class="language-picker" hidden')}</div><nav class="static-language-links" aria-label="Language">${langs.map(code=>`<a href="${siteLanguagePath(code)}" lang="${code}" hreflang="${code}">${escape(SITE_LANGUAGES[code])}</a>`).join(' ')}</nav><script>${boot}</script></body></html>\n`);
}
fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`);
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${langs.map(lang=>`  <url><loc>${SITE_ORIGIN+siteLanguagePath(lang)}</loc>${langs.map(other=>`<xhtml:link rel="alternate" hreflang="${other}" href="${SITE_ORIGIN+siteLanguagePath(other)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/"/></url>`).join('\n')}\n</urlset>\n`);
const sources=[boot,...['site-core.js','effects.js'].map(file=>fs.readFileSync(path.join(root,file),'utf8').replace(/\r\n/g,'\n')),...schemas];
const hashes=[...new Set(sources.map(source=>crypto.createHash('sha256').update(source).digest('base64')))];
fs.writeFileSync(path.join(root,'_headers'),`/*\n  Content-Security-Policy: default-src 'self'; script-src 'self' ${hashes.map(hash=>"'sha256-"+hash+"'").join(' ')}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: DENY\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n`);
fs.writeFileSync(path.join(root,'404.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found — AetherAI</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101010;color:#eee;font-family:system-ui;text-align:center}a{color:inherit}p{color:#aaa}</style></head><body><main><img src="/assets/logo.svg" width="64" height="64" alt="AetherAI"><h1>Page not found</h1><p>This page does not exist.</p><a href="/">Return to AetherAI</a></main></body></html>\n`);
console.log('Built 10 indexable language pages, canonical/hreflang metadata, JSON-LD, robots.txt, sitemap and strict CSP.');
