(function(root){
  function googleAvatar(value){
    if(typeof value!=='string'||value.length>2048)return null;
    try{const url=new URL(value);return url.protocol==='https:'&&!url.username&&!url.password&&!url.port&&!url.hash&&/^(?:[a-z0-9-]+\.)*googleusercontent\.com$/i.test(url.hostname)?url.href:null;}catch{return null;}
  }
  function profile(user){
    const result={id:user.id,email:user.email||''};
    const identity=user.identities?.find(item=>item.provider==='google')?.identity_data;
    const google=identity||user.app_metadata?.provider==='google'||user.app_metadata?.providers?.includes('google');
    if(google){const metadata=identity||user.user_metadata||{};const avatar=googleAvatar(metadata.avatar_url||metadata.picture);if(avatar)result.avatarUrl=avatar;const name=metadata.full_name||metadata.name;if(typeof name==='string'&&name.trim())result.name=name.trim().slice(0,120);}
    return result;
  }
  root.AetherAIAvatar={googleAvatar,profile};if(typeof module!=='undefined')module.exports={googleAvatar,profile};
})(typeof globalThis!=='undefined'?globalThis:window);
