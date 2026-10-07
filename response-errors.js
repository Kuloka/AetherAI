(function(root){
  function describe(input, status=0) {
    let value=input instanceof Error ? input.message : input;
    let raw=typeof value==='string'?value:JSON.stringify(value||{});
    status=Number(status)||Number(/HTTP\s+(\d{3})/.exec(raw)?.[1])||0;
    for(let i=0;i<4;i++){
      if(typeof value==='string'){
        try{value=JSON.parse(value.slice(value.indexOf('{')>=0?value.indexOf('{'):0));}catch{break;}
      }
      if(value&&typeof value==='object'){
        status=Number(value.code||value.status)||status;
        if(value.error){value=value.error;continue;}
        if(value.kind&&value.messages)return value;
        raw=JSON.stringify(value);break;
      }
    }
    const text=String(raw).toLowerCase();
    let kind='error';
    if(/openrouter_in_flight_budget|in_flight_budget_exhausted|resourceexhausted|provider_unavailable|provider_overloaded|upstream|worker.*limit|temporarily rate-limited/.test(text)||[502,503,529].includes(status))kind='overloaded';
    else if(status===401||/invalid.*(?:key|token)|unauthorized|connect.*settings/.test(text))kind='auth';
    else if(status===402||/insufficient.*(?:credit|balance)|negative.*balance/.test(text))kind='billing';
    else if(status===429||/rate.?limit|too many requests/.test(text))kind='rate';
    else if(/context.*(?:length|window)|too many tokens|maximum.*tokens/.test(text))kind='context';
    else if(status===403)kind='access';
    else if(status===404||/model.*(?:not found|no longer available)/.test(text))kind='missing';
    else if(status===408||status===504||/timeout|timed out/.test(text))kind='timeout';
    else if(/failed to fetch|fetch failed|econn|enotfound|network|socket/.test(text))kind='network';
    else if(status===400||status===422)kind='request';
    else if(status>=500)kind='server';
    const messages={
      overloaded:['Сервер модели перегружен. Попробуйте позже или выберите другую модель.','The model server is busy. Try again later or choose another model.'],
      auth:['API-ключ недействителен или не подключён. Проверьте подключение в настройках.','The API key is invalid or missing. Check the connection in Settings.'],
      billing:['Недостаточно средств или исчерпан денежный лимит API-ключа. Проверьте баланс у провайдера.','Insufficient credits or the API key spending limit was reached. Check your provider balance.'],
      rate:['Достигнут лимит запросов. Подождите перед повторной попыткой.','The request limit was reached. Wait before trying again.'],
      context:['Диалог слишком длинный для этой модели. Начните новый чат или сократите сообщение.','The conversation is too long for this model. Start a new chat or shorten the message.'],
      access:['Провайдер запретил доступ к модели. Проверьте права API-ключа и настройки аккаунта.','The provider denied access to this model. Check your API key permissions and account settings.'],
      missing:['Модель больше недоступна. Обновите список и выберите другую.','The model is no longer available. Refresh the list and choose another.'],
      timeout:['Модель не ответила вовремя. Попробуйте ещё раз.','The model did not respond in time. Try again.'],
      network:['Не удалось соединиться с моделью. Проверьте интернет или запуск локального движка.','Could not connect to the model. Check your connection or local engine.'],
      request:['Модель не поддерживает параметры этого запроса. Попробуйте другую модель или отключите дополнительные режимы.','This model does not support the request parameters. Choose another model or disable extra modes.'],
      server:['Ошибка сервера модели. Попробуйте позже.','The model server failed. Try again later.'],
      error:['Не удалось получить ответ модели. Попробуйте ещё раз или выберите другую модель.','Could not get a model response. Try again or choose another model.']
    };
    return {kind,status,upstream:kind==='overloaded',message:messages[kind][1],messages:{ru:messages[kind][0],en:messages[kind][1]}};
  }
  const api={describe,format:(input,language='en',status=0)=>{const error=describe(input,status);return error.messages[language]||error.messages.en;}};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  root.MultiMindErrors=api;
})(typeof globalThis!=='undefined'?globalThis:window);
