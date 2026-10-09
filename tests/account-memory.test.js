const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path');
const {createAccountAuth}=require('../electron/account-auth'),{createMemoryStore}=require('../electron/user-memory');
const storage={isEncryptionAvailable:()=>true,encryptString:value=>Buffer.from(value.split('').reverse().join('')),decryptString:value=>value.toString().split('').reverse().join('')};
const owner='12345678-1234-1234-1234-123456789abc';
test('password registration waits for confirmation, password login persists only tokens and errors are readable',async t=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-password-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));let fail=false;
 const auth=createAccountAuth(directory,storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'},async(url,init)=>{
  const body=JSON.parse(init.body);assert.equal(body.email,'test@example.com');assert.equal(body.password,'fixture-password');
  if(url.endsWith('/signup'))return Response.json({user:{id:owner}});
  assert.match(url,/grant_type=password/);if(fail)return Response.json({error_code:'invalid_credentials',message:'do not expose raw errors'},{status:400});
  return Response.json({access_token:'private-access',refresh_token:'private-refresh',expires_in:3600,user:{id:owner,email:body.email}});
 });
 await assert.rejects(auth.signUp('test@example.com','short'),/eight/);
 assert.equal((await auth.signUp(' TEST@example.com '.trim(),'fixture-password')).confirmationRequired,true);
 assert.equal((await auth.status()).user,null);await assert.rejects(auth.resendConfirmation('test@example.com'),/60 seconds/);
 assert.equal((await auth.signIn('test@example.com','fixture-password')).user.id,owner);
 assert.ok(!storage.decryptString(await fs.readFile(path.join(directory,'account-session.enc'))).includes('fixture-password'));
 fail=true;await assert.rejects(auth.signIn('test@example.com','fixture-password'),/Incorrect email or password/);
});
test('email OTP stores encrypted sessions, hides tokens, rejects repeat sends and signs out',async t=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-account-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));let requests=[];
 const auth=createAccountAuth(directory,storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'},async(url,init)=>{
   requests.push(url);if(url.endsWith('/otp'))return Response.json({});if(url.endsWith('/verify')){assert.equal(JSON.parse(init.body).token,'123456');return Response.json({access_token:'private-access-token',refresh_token:'private-refresh-token',expires_in:3600,user:{id:owner,email:'test@example.com'}});}return new Response(null,{status:204});
 });
 assert.equal((await auth.status()).configured,true);await auth.sendCode('test@example.com');await assert.rejects(auth.sendCode('test@example.com'),/60 seconds/);await assert.rejects(auth.verify('test@example.com','bad'),/six-digit/);
 const status=await auth.verify('test@example.com','123456');assert.equal(status.user.id,owner);assert.ok(!JSON.stringify(status).includes('token'));assert.ok(!(await fs.readFile(path.join(directory,'account-session.enc'),'utf8')).includes('private-access-token'));
 const restarted=createAccountAuth(directory,storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'});assert.equal((await restarted.status()).user.id,owner);
 await assert.rejects(auth.dataCall('multimind_memories','POST',[],{},'87654321-1234-1234-1234-123456789abc'),/account changed/);
 await auth.logout();assert.equal((await auth.status()).user,null);assert.equal(requests.length,3);
});
test('six-digit email codes preserve leading zeroes and reject other lengths before making requests',async t=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-six-digit-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));let requests=0;
 const auth=createAccountAuth(directory,storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'},async(url,init)=>{
  requests++;assert.ok(url.endsWith('/verify'));assert.equal(JSON.parse(init.body).token,'001234');return Response.json({access_token:'private-access',refresh_token:'private-refresh',expires_in:3600,user:{id:owner,email:'test@example.com'}});
 });
 for(const code of ['12345','1234567','00123456','123456789','12abcd'])await assert.rejects(auth.verify('test@example.com',code),/six-digit/);
 assert.equal(requests,0);assert.equal((await auth.verify('test@example.com',' 001234 ')).user.id,owner);assert.equal(requests,1);
});
test('unconfigured auth stays unavailable and privileged keys are rejected',async()=>{
 const auth=createAccountAuth(os.tmpdir(),storage,{});assert.equal((await auth.status()).configured,false);await assert.rejects(auth.sendCode('test@example.com'),/not been configured/);
 assert.throws(()=>createAccountAuth(os.tmpdir(),storage,{publishableKey:'sb_secret_bad'}),/public/);
});
test('Google callback exchanges a PKCE code using a verifier that matches the browser challenge',async t=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-pkce-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));let browserUrl,changed;
 const auth=createAccountAuth(directory,storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key',callbackPort:0},async(url,init)=>{
   if(url.endsWith('/settings'))return Response.json({external:{google:true}});
   assert.match(url,/grant_type=pkce/);const body=JSON.parse(init.body);assert.equal(body.auth_code,'fixture-code');
   const challenge=require('node:crypto').createHash('sha256').update(body.code_verifier).digest('base64url');assert.equal(challenge,new URL(browserUrl).searchParams.get('code_challenge'));
   return Response.json({access_token:'private',refresh_token:'refresh',expires_in:3600,user:{id:owner,email:'fixture@example.com',app_metadata:{provider:'google'},user_metadata:{picture:'https://lh3.googleusercontent.com/a/fixture',full_name:'Fixture User'}}});
 });t.after(()=>auth.cancelGoogle());
 await auth.google(async url=>{browserUrl=url;},status=>{changed=status;});assert.equal(new URL(browserUrl).searchParams.get('provider'),'google');
 const response=await fetch(new URL(browserUrl).searchParams.get('redirect_to')+'?code=fixture-code');assert.equal(response.status,200);assert.match(response.headers.get('content-type'),/text\/html/);const html=await response.text();assert.match(html,/You're signed in/);assert.ok(!html.includes('fixture-code'));assert.match(response.headers.get('content-security-policy'),/default-src 'none'/);assert.equal(changed.user.id,owner);assert.ok(!JSON.stringify(changed).includes('refresh'));
 assert.equal(changed.user.avatarUrl,'https://lh3.googleusercontent.com/a/fixture');assert.equal(changed.user.name,'Fixture User');
 const restored=createAccountAuth(directory,storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'},()=>{throw Error('Restored profile should use its encrypted cache');});assert.equal((await restored.status()).user.avatarUrl,changed.user.avatarUrl);
});
test('disabled Google provider gives a readable error without opening a browser',async()=>{
 let opened=false;const auth=createAccountAuth(os.tmpdir(),storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'},async(url,init)=>{assert.ok(url.endsWith('/settings'));assert.equal(init.method,'GET');return Response.json({external:{google:false}});});
 await assert.rejects(auth.google(async()=>{opened=true;}),/Google sign-in is not enabled yet/);assert.equal(opened,false);
});
test('expired account sessions refresh once for concurrent authenticated calls',async t=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-refresh-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));let refreshed=0;
 const auth=createAccountAuth(directory,storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'},async(url,init)=>{
  if(url.endsWith('/verify'))return Response.json({access_token:'expired',refresh_token:'refresh-first',expires_in:1,user:{id:owner,email:'test@example.com'}});
  assert.match(url,/grant_type=refresh_token/);assert.equal(JSON.parse(init.body).refresh_token,'refresh-first');refreshed++;return Response.json({access_token:'renewed',refresh_token:'rotated',expires_in:3600,user:{id:owner,email:'test@example.com'}});
 });await auth.verify('test@example.com','123456');const result=await Promise.all([auth.credentials(),auth.credentials()]);assert.equal(refreshed,1);assert.equal(result[0].access_token,'renewed');assert.equal(result[1].access_token,'renewed');
});
test('memory is scoped, editable, disableable, removable, persistent, and isolated per account',async t=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-memory-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));const store=createMemoryStore(directory);
 store.save('local',{content:'Prefer short replies',projectId:null});const entry=store.save('local',{content:'Project uses React',projectId:'project-a'})[1];
 assert.match(store.context('local','project-a'),/React/);assert.doesNotMatch(store.context('local','project-b'),/React/);assert.deepEqual(store.list(owner),[]);
 store.save('local',{...entry,enabled:false});assert.doesNotMatch(store.context('local','project-a'),/React/);store.remove('local',entry.id);assert.equal(store.list('local').length,1);
 assert.equal(createMemoryStore(directory).list('local').length,1);assert.throws(()=>store.save('local',{content:'x'.repeat(1501)}),/1,500/);assert.throws(()=>store.list('../outside'),/owner/);
});
test('sign-out while refresh is in flight does not restore old session credentials',async t=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-refresh-cancel-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));let release,started;
 const began=new Promise(resolve=>{started=resolve;});
 const auth=createAccountAuth(directory,storage,{url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'},async url=>{
  if(url.endsWith('/verify'))return Response.json({access_token:'old',refresh_token:'refresh',expires_in:1,user:{id:owner,email:'test@example.com'}});
  if(url.includes('grant_type=refresh_token')){started();return new Promise(resolve=>{release=()=>resolve(Response.json({access_token:'new',refresh_token:'new-refresh',expires_in:3600,user:{id:owner,email:'test@example.com'}}));});}
  return new Response(null,{status:204});
 });await auth.verify('test@example.com','123456');const refresh=auth.credentials();const rejection=assert.rejects(refresh,/account changed/);await began;await auth.logout();release();await rejection;assert.equal((await auth.status()).user,null);assert.equal(await fs.stat(path.join(directory,'account-session.enc')).then(()=>true,()=>false),false);
});
test('memory sync merges newer remote notes, retains deletion and never syncs the guest store',async t=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-memory-sync-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));const store=createMemoryStore(directory),entry=store.save(owner,{content:'Original'})[0];store.remove(owner,entry.id);let sent;
 const auth={dataCall:async(_endpoint,method,body)=>{if(method==='GET')return [{user_id:owner,id:entry.id,content:'Old remote',project_id:null,enabled:true,updated_at:'2020-01-01T00:00:00Z',deleted_at:null}];sent=body;}};
 await store.sync(owner,auth);assert.ok(sent[0].deleted_at);assert.equal(sent[0].content,'');assert.equal(store.list(owner).length,0);await assert.rejects(store.sync('local',auth),/Sign in/);
});
