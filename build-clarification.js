(function(root){
  function infer(text,history=[]){
    const current=String(text||'').toLowerCase();
    const calculator=/калькулятор|calculator/;
    const website=/\b(?:website|portfolio|dashboard|saas)\b|сайт|портфолио|дашборд|лендинг/;
    const followup=/интерфейс|\b(?:gui|interface)\b/;
    const previous=[...history].reverse().find(message=>message.role==='user');
    const context=calculator.test(current)?current:followup.test(current)&&!website.test(current)&&calculator.test(String(previous?.content||'').toLowerCase())?String(previous.content).toLowerCase()+'\n'+current:'';
    if(!context)return null;
    const language=/python|питон|пайтон/.test(context)?'python':/react/.test(context)?'react':/html/.test(context)?'html/css/js':null;
    const platform=/tkinter|pyqt|pyside|настольн|\bdesktop\b/.test(context)?'desktop':/браузер|веб|\b(?:browser|web|react|html)\b/.test(context)?'browser':null;
    return {application:'calculator',platform,language};
  }
  function usesWebsitePresets(text){
    const value=String(text||'').toLowerCase();
    if(/игр[а-яё]|\bgames?\b|калькулятор|calculator/.test(value))return false;
    return /сайт|лендинг|портфолио|дашборд|\b(?:website|landing page|portfolio|dashboard|saas)\b/.test(value);
  }
  root.AetherAIBuildClarification={infer,usesWebsitePresets};if(typeof module!=='undefined')module.exports={infer,usesWebsitePresets};
})(typeof globalThis!=='undefined'?globalThis:window);
