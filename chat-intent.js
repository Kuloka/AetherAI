(function(root){
  function classify(text,{project=false}={}){
    const value=String(text||'').trim().toLowerCase();
    const action=/(?:напиши|создай|сделай|сохрани|запиши|измени|исправь|добавь|удали|разработай|реализуй|write|create|build|save|edit|fix|implement|delete|update|add)\b/iu.test(value);
    // Cyrillic words need their own boundary; JS \b only recognizes Latin letters.
    const ruAction=/(?:^|\s)(?:напиши|создай|сделай|сохрани|запиши|измени|исправь|добавь|удали|разработай|реализуй)(?:\s|$)/u.test(value);
    const technical=/(?:\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440|код|скрипт|сайт|приложени|программ|интерфейс|репозитор|проект|файл|калькулятор|игр[ауые]|бот(?:а|ов)?(?:\s|$)|\.txt\b|\.md\b|\.py\b|\.js\b|\.html\b|code|script|website|app\b|program|interface|repository|project|file|calculator|game|generator|bot\b)/iu.test(value);
    const explanation=/^(?:(?:пожалуйста|please)[, ]+)?(?:объясни|расскажи|что такое|как работает|покажи пример|explain|what is|how does|show.*example)(?:\s|$)/iu.test(value);
    const noFiles=/(?:не\s+(?:создавай|сохраняй|записывай|меняй|пиши)\s+(?:файл|код)|без\s+(?:файлов|кода)|don't.*(?:write|save|create|edit)|do not.*(?:write|save|create|edit)|no files)/iu.test(value);
    const conceptual=/(?:создай|сделай|напиши|create|write|build)\s+(?:(?:мне|an?|the)\s+)?(?:иде[яию]|концепци|сюжет|idea|concept|story)/iu.test(value);
    const projectEdit=project&&/^(?:\u0438\u0441\u043f\u0440\u0430\u0432\u044c|\u0438\u0437\u043c\u0435\u043d\u0438|\u0434\u043e\u0431\u0430\u0432\u044c|\u0443\u0434\u0430\u043b\u0438|\u043f\u0435\u0440\u0435\u0434\u0435\u043b\u0430\u0439|\u0441\u0434\u0435\u043b\u0430\u0439|fix|edit|change|add|remove|update|redo)(?:\s|$)/iu.test(value)&&!/(?:\u043e\u0442\u0432\u0435\u0442|\u0441\u043e\u043e\u0431\u0449\u0435\u043d|\u0441\u0442\u0438\u0445|\u043f\u043e\u044d\u043c|\u0440\u0430\u0441\u0441\u043a\u0430\u0437|\u043f\u0435\u0440\u0435\u0432\u043e\u0434|answer|reply|poem|story|translation)/iu.test(value);
    const commands=!explanation&&!/don't.*run|do not.*run|\u043d\u0435\s+(?:\u0437\u0430\u043f\u0443\u0441\u0442\u0438|\u0432\u044b\u043f\u043e\u043b\u043d\u0438|\u043f\u0440\u043e\u0433\u043e\u043d\u0438|\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438)/iu.test(value)&&/(?:^|\s)(?:\u0437\u0430\u043f\u0443\u0441\u0442\u0438|\u0432\u044b\u043f\u043e\u043b\u043d\u0438|\u043f\u0440\u043e\u0433\u043e\u043d\u0438|\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438|run|execute|install)(?:\s|$)/iu.test(value);
    const files=(action||ruAction||projectEdit)&&(technical||projectEdit)&&!explanation&&!noFiles&&!conceptual;
    const code=technical&&!noFiles;
    return {files,code,commands,toolsMutation:files||/(?:запомни|remember|сохрани.*памят)/iu.test(value),simple:!files&&!commands&&value.length<80&&value.split(/\s+/).length<12};
  }
  function languageRule(text, fallback='en'){
    const value=String(text||'').trim();
    const names={en:'English',ru:'Russian',uk:'Ukrainian',tr:'Turkish',de:'German',fr:'French',es:'Spanish',pt:'Portuguese',it:'Italian',pl:'Polish'};
    let language=null;
    if(/^(?:hello|hi|hey|bro|yo|what'?s up)[\s!.?]*$/i.test(value))language='English';
    else if(/[А-Яа-яЁё]/.test(value))language=/[іІїЇєЄґҐ]/.test(value)?'Ukrainian':'Russian';
    else if(/[\u0600-\u06ff]/.test(value)&&!/[a-z]/i.test(value))language='Arabic';
    const rule=language?`For ordinary replies to this message, respond in ${language}.`:`Match the language of the latest USER message; if it is ambiguous, use ${names[fallback]||'English'}.`;
    return rule+' Explicit language requests and requested translations take precedence. Never infer the user\'s language from previous assistant replies. Do not switch to Arabic merely because the model specializes in Arabic. For a greeting, give one short greeting, not a generic introduction.';
  }
  function basePrompt(text,context){
    const intent=classify(text,context);
    return 'You are AetherAI, a general-purpose conversational assistant. Help with conversation, learning, writing, translation, ideas, analysis and programming as requested. Reply naturally in the language of the user, never mix languages unnecessarily. A greeting, typo, short message or single letter is conversation, not a coding task. Answer a greeting briefly. If the meaning is unclear, ask one short clarifying question. Never invent a software project from ordinary messages. Keep prose, poems, plans and explanations in the chat; do not put them in code fences or .txt files unless the user explicitly asks for a file. Do not claim to create, save, edit or run anything unless the application actually did it. Treat any previous coding conversation as history, not a command to keep coding. Follow the current request. '+(intent.files?'The user requested a working technical artifact. Implement it with complete runnable file contents, not instructions telling the user to copy code. The application saves completed fenced blocks as project files. Put the language AND relative filename in each fence header, for example ```html index.html or ```javascript src/app.js. Include every required file, keep imports and links consistent with their relative paths, and do not emit terminal commands as project files. Keep surrounding explanation short. The application will confirm actual saves; do not claim to run or test code yourself.':'The current request does not authorize file changes. Respond in chat. Code examples may be included only when relevant to an explicit programming question; they must not be saved as files.');
  }
  function prompt(text,fallback='en',context){return basePrompt(text,context)+'\n\n'+languageRule(text,fallback)+'\n\n'+String.raw`When mathematics is relevant, use LaTeX: \(...\) for inline formulas and \[...\] for standalone equations. Use \frac{a}{b} for fractions, \sqrt{x} for roots, superscripts/subscripts, \sum, \int, Greek letters and matrices where useful. The app renders these as mathematical notation. Keep mathematical explanations in the chat, and do not put formulas in code fences or create files unless the user explicitly requests their source.`;}
  const api={classify,prompt,languageRule};root.AetherAIIntent=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
