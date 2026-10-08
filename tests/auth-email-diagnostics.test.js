const test=require('node:test'),assert=require('node:assert/strict'),os=require('node:os');
const {createAccountAuth}=require('../electron/account-auth');
const {authResultPage}=require('../electron/auth-result-page');
const storage={isEncryptionAvailable:()=>true};
const config={url:'https://fixture.supabase.co',publishableKey:'sb_publishable_fixture_key'};
test('unconfirmed password sign-in offers verification without claiming to send a message',async()=>{
 let calls=0;const auth=createAccountAuth(os.tmpdir(),storage,config,async(url)=>{calls++;assert.match(url,/grant_type=password/);return Response.json({error_code:'email_not_confirmed'},{status:400});});
 const result=await auth.signIn('test@example.com','fixture-password');assert.equal(result.confirmationPending,true);assert.equal(result.user,null);assert.equal(calls,1);
});
test('email errors explain server limits and restricted default SMTP without exposing raw provider details',async()=>{
 for(const [code,pattern] of [['over_email_send_rate_limit',/email sending limit/],['email_address_not_authorized',/configure custom SMTP/]]){
  const auth=createAccountAuth(os.tmpdir(),storage,config,async()=>Response.json({error_code:code,message:'private provider details'},{status:429}));await assert.rejects(auth.sendCode('test@example.com'),error=>pattern.test(error.message)&&!error.message.includes('private'));
 }
});
test('callback result pages are standalone, remove callback query and use a unique script nonce',()=>{
 const success=authResultPage(true),failure=authResultPage(false);assert.match(success.html,/You're signed in/);assert.match(failure.html,/Let's try that again/);assert.match(success.html,/history.replaceState/);assert.notEqual(success.headers['Content-Security-Policy'],failure.headers['Content-Security-Policy']);assert.equal(success.headers['Referrer-Policy'],'no-referrer');assert.equal(success.headers['Cache-Control'],'no-store');
});
test('obfuscated repeat signup does not claim a verification email was sent',async()=>{
 const auth=createAccountAuth(os.tmpdir(),storage,config,async()=>Response.json({user:{identities:[]}}));const result=await auth.signUp('test@example.com','fixture-password');assert.equal(result.existingAccountPossible,true);assert.equal(result.confirmationRequired,undefined);
});
