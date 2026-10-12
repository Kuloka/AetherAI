(function(root){
 const anchor=document.getElementById('composerInner');if(!anchor)return;
 const panel=document.createElement('details');panel.className='composer-goal-panel';panel.hidden=true;const summary=document.createElement('summary'),title=document.createElement('span'),excerpt=document.createElement('span'),time=document.createElement('time'),body=document.createElement('div');title.className='goal-label';excerpt.className='goal-copy goal-excerpt';body.className='goal-copy goal-details';summary.append(title,excerpt,time);panel.append(summary,body);anchor.prepend(panel);
 let chat=null,busy=false,last=performance.now(),identity='';
 function tick(){const now=performance.now();if(chat?.goal&&busy)chat.goalElapsedMs=(Number(chat.goalElapsedMs)||0)+Math.max(0,now-last);last=now;const seconds=Math.floor((Number(chat?.goalElapsedMs)||0)/1000);const stamp=Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0');if(time.textContent!==stamp)time.textContent=stamp;}
 function sync(next,working){tick();const key=next?.goal?next.id+':'+next.goal:'';if(identity!==key){panel.open=false;identity=key;}chat=next;busy=!!working;panel.hidden=!chat?.goal;if(panel.hidden)return;title.textContent=root.AetherAIInterface?.t('goal')||'Goal';excerpt.textContent=body.textContent=String(chat.goal);time.title=root.AetherAIInterface?.t('elapsedTime')||'Time spent';}
 root.AetherAIGoalPanel={sync};setInterval(tick,250);new MutationObserver(()=>{if(chat)sync(chat,busy);}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})(window);
