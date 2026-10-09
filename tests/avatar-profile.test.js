const test=require('node:test'),assert=require('node:assert/strict'),{profile,googleAvatar}=require('../avatar-profile');
test('Google avatar uses profile metadata and rejects arbitrary or credential-bearing image URLs',()=>{
 const url='https://lh3.googleusercontent.com/a/avatar=s96-c';
 assert.deepEqual(profile({id:'g',email:'g@example.com',app_metadata:{provider:'google'},user_metadata:{avatar_url:url,full_name:' Grace '}}),{id:'g',email:'g@example.com',avatarUrl:url,name:'Grace'});
 assert.equal(profile({id:'e',user_metadata:{avatar_url:url}}).avatarUrl,undefined);
 assert.equal(profile({id:'g',identities:[{provider:'google',identity_data:{picture:url,name:'G'}}]}).avatarUrl,url);
 for(const value of ['javascript:alert(1)','file:///secret','http://lh3.googleusercontent.com/a','https://lh3.googleusercontent.com.evil.test/a','https://user:password@lh3.googleusercontent.com/a','https://lh3.googleusercontent.com:444/a'])assert.equal(googleAvatar(value),null);
});
