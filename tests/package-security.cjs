const assert=require('node:assert/strict'),path=require('node:path'),asar=require('@electron/asar');
const unpacked=process.platform==='win32'?'win-unpacked/resources':process.platform==='linux'?'linux-unpacked/resources':`mac${process.arch==='arm64'?'-arm64':''}/AetherAI.app/Contents/Resources`;
const file=path.resolve(__dirname,'../dist',unpacked,'app.asar'),files=asar.listPackage(file).map(file=>file.replaceAll('\\','/'));
const privatePath=/(?:^|\/)(?:auth-config\.json|\.env(?:\..*)?|credentials[^/]*\.json|[^/]*email-template[^/]*\.html)|\.(?:key|pem|pfx|p12|enc|sqlite3?|db|dump)$/i;
assert.deepEqual(files.filter(f=>privatePath.test(f)),[],'Private files in package');assert.ok(files.includes('/electron/security.js'));assert.ok(files.includes('/model-capabilities.js'));assert.ok(files.includes('/models-catalog.json'));assert.ok(files.includes('/electron/account-config.js'));assert.ok(!files.includes('/docs/auth-email-template.html'));
const config=asar.extractFile(file,'electron/account-config.js').toString();assert.ok(config.includes('sb_publishable_'));assert.ok(!config.includes('sb_secret_'));
assert.ok(files.includes('/math-renderer.js'));assert.ok(files.includes('/logo-motion.js'));assert.ok(files.includes('/resources/katex/katex.min.js'));assert.ok(files.includes('/resources/katex/katex.min.css'));assert.ok(files.some(file=>file.startsWith('/resources/katex/fonts/')&&file.endsWith('.woff2')));
console.log('PASS: packaged application contains runtime assets and no matching private configs, templates, databases or credentials');
