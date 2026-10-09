const {secureStorageAvailable}=require('./security');
const fs=require('fs'),path=require('path'),crypto=require('crypto'),http=require('http');
const {authResultPage}=require('./auth-result-page');
const {profile}=require('../avatar-profile');
function createAccountAuth(directory,storage,config={},request=fetch){
  const configured=/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(config.url||'')&&typeof config.publishableKey==='string'&&config.publishableKey.length>20;
  if(config.publishableKey?.startsWith('sb_secret_'))throw Error('Only a public Supabase key may be shipped');
  if(config.publishableKey?.split('.').length===3){try{if(JSON.parse(Buffer.from(config.publishableKey.split('.')[1],'base64url')).role==='service_role')throw Error('Privileged Supabase keys must not be shipped');}catch(e){if(e.message.includes('Privileged'))throw e;}}
  const file=path.join(directory,'account-session.enc');let session=null,pending=null,refreshing=null,revision=0;const cooldown=new Map();
  function load(){if(!session&&configured&&fs.existsSync(file)){try{session=JSON.parse(storage.decryptString(fs.readFileSync(file)));}catch{session=null;}}}
  function save(data){if(!secureStorageAvailable(storage))throw Error('Secure account storage is unavailable');if(!data?.access_token||!data.refresh_token||!data.user?.id)throw Error('Invalid sign-in response');
    session={access_token:data.access_token,refresh_token:data.refresh_token,expires_at:data.expires_at||Math.floor(Date.now()/1000)+(data.expires_in||3600),profileVersion:1,user:profile(data.user)};
    fs.mkdirSync(directory,{recursive:true});const temp=file+'.tmp';fs.writeFileSync(temp,storage.encryptString(JSON.stringify(session)),{mode:0o600});fs.renameSync(temp,file);
  }
  async function call(endpoint,method='POST',body,token){if(!configured)throw Error('Account sign-in has not been configured yet');
    const response=await request(config.url+endpoint,{method,headers:{apikey:config.publishableKey,'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.timeout(15000),redirect:'error'});
    if(!response.ok){const error=await response.json().catch(()=>({}));const messages={invalid_credentials:'Incorrect email or password.',email_not_confirmed:'Confirm your email first. Check the confirmation message.',weak_password:'Choose a stronger password with at least eight characters.',user_already_exists:'This account already exists. Sign in instead.',signup_disabled:'Account registration is currently unavailable.',otp_expired:'The code is invalid or expired.',over_email_send_rate_limit:'The email sending limit has been reached. Wait before resending; the app owner can check Supabase Auth rate limits.',email_address_not_authorized:'The email service is restricted to project team addresses. The app owner needs to configure custom SMTP.',email_provider_disabled:'Email sign-in is not enabled in this project.',email_address_invalid:'Enter a valid email address.'};const failure=Error(messages[error.code||error.error_code]||(response.status===429?'Too many attempts. Wait before trying again.':response.status===401||response.status===403?'Sign-in was rejected. Check your credentials or account setup.':response.status===400||response.status===422?'Check your credentials or verification code and try again.':'The account service is unavailable. Try again later.'));failure.code=typeof (error.code||error.error_code)==='string'?(error.code||error.error_code):'';throw failure;}
    if(response.status===204)return null;return response.json();
  }
  async function credentials(){load();if(!session)throw Error('Sign in first');
    if(session.expires_at*1000<Date.now()+60000){if(!refreshing){const previous=session,version=revision;refreshing=call('/auth/v1/token?grant_type=refresh_token','POST',{refresh_token:session.refresh_token}).then(data=>{if(session!==previous||revision!==version)throw Error('The account changed during refresh');save(data);}).finally(()=>{refreshing=null;});}await refreshing;}
    return session;
  }
  let profileLookup=null;
  async function status(){load();if(session&&!session.profileVersion){if(!profileLookup){const owner=session,version=revision;profileLookup=(async()=>{try{const current=await credentials();const user=await call('/auth/v1/user','GET',undefined,current.access_token);if(revision===version&&session?.user.id===owner.user.id)save({...current,user});}catch{/* Keep the cached profile when offline. */}})().finally(()=>{profileLookup=null;});}await profileLookup;}return {configured:!!configured,user:session?{...session.user}:null};}
  function email(value){if(typeof value!=='string'||value.length>254||!/^\S+@\S+\.\S+$/.test(value))throw Error('Enter a valid email address');return value.trim().toLowerCase();}
  async function sendCode(value){const address=email(value);if(!secureStorageAvailable(storage))throw Error('Secure account storage is unavailable');if(Date.now()<(cooldown.get(address)||0))throw Error('Wait 60 seconds before requesting another code');
    cooldown.set(address,Date.now()+60000);try{await call('/auth/v1/otp','POST',{email:address,create_user:true});}catch(e){cooldown.delete(address);throw e;}return {sent:true,retryAfter:60};
  }
  async function verify(value,code){const token=String(code).trim();if(!/^\d{6}$/.test(token))throw Error('Enter the six-digit code from your email');const version=++revision;const result=await call('/auth/v1/verify','POST',{email:email(value),token,type:'email'});if(version!==revision)throw Error('Sign-in was canceled');save(result);return status();}
  function password(value,signup=false){if(typeof value!=='string'||!value.length||value.length>1024)throw Error('Enter your password');if(signup&&value.length<8)throw Error('Use at least eight characters for your password');return value;}
  async function signIn(value,secret){if(!secureStorageAvailable(storage))throw Error('Secure account storage is unavailable');const version=++revision;try{const result=await call('/auth/v1/token?grant_type=password','POST',{email:email(value),password:password(secret)});if(version!==revision)throw Error('Sign-in was canceled');save(result);return status();}catch(error){if(error.code==='email_not_confirmed')return {configured:!!configured,user:null,confirmationRequired:true,confirmationPending:true};throw error;}}
  async function signUp(value,secret){if(!secureStorageAvailable(storage))throw Error('Secure account storage is unavailable');const address=email(value);const data=await call('/auth/v1/signup','POST',{email:address,password:password(secret,true)});if(data?.access_token){save(data);return status();}if(Array.isArray(data?.user?.identities)&&data.user.identities.length===0)return {configured:!!configured,user:null,existingAccountPossible:true};cooldown.set(address,Date.now()+60000);return {configured:!!configured,user:null,confirmationRequired:true};}
  async function resendConfirmation(value){const address=email(value);if(Date.now()<(cooldown.get(address)||0))throw Error('Wait 60 seconds before requesting another code');cooldown.set(address,Date.now()+60000);try{await call('/auth/v1/resend','POST',{email:address,type:'signup'});}catch(e){cooldown.delete(address);throw e;}return {sent:true,retryAfter:60};}
  function cancelGoogle(){if(pending){revision++;clearTimeout(pending.timer);pending.server.close();pending=null;}}
  async function google(open,onChange=()=>{}){if(!configured)throw Error('Account sign-in has not been configured yet');if(!secureStorageAvailable(storage))throw Error('Secure account storage is unavailable');if(pending)throw Error('Google sign-in is already waiting in your browser');
    const settings=await call('/auth/v1/settings','GET');if(settings?.external?.google!==true)throw Error('Google sign-in is not enabled yet. The app owner needs to enable Google in Supabase → Authentication → Sign In / Providers. You can sign in with email and password.');
    const callbackPort=config.callbackPort??43871;if(!Number.isInteger(callbackPort)||callbackPort<0||callbackPort>65535)throw Error('Invalid callback port');let callbackOrigin='http://127.0.0.1:'+callbackPort;
    const version=++revision;const verifier=crypto.randomBytes(32).toString('base64url'),challenge=crypto.createHash('sha256').update(verifier).digest('base64url');
    const server=http.createServer(async(req,res)=>{
      if(req.method!=='GET'||req.headers.host!==new URL(callbackOrigin).host){res.writeHead(400);return res.end('Invalid callback');}
      const url=new URL(req.url,callbackOrigin);if(url.pathname!=='/callback'){res.writeHead(404);return res.end();}
      if(!pending||pending.server!==server||pending.busy){res.writeHead(409);return res.end('No pending sign-in');}pending.busy=true;
      try{const code=url.searchParams.get('code');if(!code||code.length>2048)throw Error('No authorization code');const result=await call('/auth/v1/token?grant_type=pkce','POST',{auth_code:code,code_verifier:verifier});if(revision!==version||pending?.server!==server)throw Error('Sign-in was canceled');save(result);const page=authResultPage(true);res.writeHead(200,page.headers);res.end(page.html);onChange(await status());}
      catch{const page=authResultPage(false);res.writeHead(400,page.headers);res.end(page.html);if(revision===version)onChange({error:'Google sign-in failed. Please try again.'});}finally{if(pending?.server===server)cancelGoogle();}
    });
    await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(callbackPort,'127.0.0.1',resolve);});callbackOrigin='http://127.0.0.1:'+server.address().port;
    pending={server,timer:setTimeout(()=>{cancelGoogle();onChange({error:'Google sign-in timed out. Try again.'});},300000)};
    const url=new URL(config.url+'/auth/v1/authorize');url.searchParams.set('provider','google');url.searchParams.set('redirect_to',callbackOrigin+'/callback');url.searchParams.set('code_challenge',challenge);url.searchParams.set('code_challenge_method','s256');
    try{await open(url.href);}catch(e){cancelGoogle();throw e;}return {waiting:true};
  }
  async function logout(){revision++;cancelGoogle();load();const old=session;session=null;if(fs.existsSync(file))fs.unlinkSync(file);if(old)await call('/auth/v1/logout?scope=local','POST',undefined,old.access_token).catch(()=>{});return status();}
  async function dataCall(endpoint,method,body,headers={},expectedOwner){
    const active=await credentials();
    if(expectedOwner&&active.user.id!==expectedOwner)throw Error('The account changed. Open memory again before syncing.');
    const response=await request(config.url+'/rest/v1/'+endpoint,{method,headers:{apikey:config.publishableKey,Authorization:'Bearer '+active.access_token,'Content-Type':'application/json',...headers},body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.timeout(15000),redirect:'error'});
    if(!response.ok)throw Error('Memory sync failed. Check connection and server setup.');return response.status===204?null:response.json();
  }
  return {status,sendCode,verify,signIn,signUp,resendConfirmation,google,logout,cancelGoogle,credentials,dataCall};
}
module.exports={createAccountAuth};
