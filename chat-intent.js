(function(root){
  function classify(text){
    const value=String(text||'').trim().toLowerCase();
    const action=/(?:напиши|создай|сделай|сохрани|запиши|измени|исправь|добавь|удали|разработай|реализуй|write|create|build|save|edit|fix|implement|delete|update|add)\b/iu.test(value);
    // Cyrillic words need their own boundary; JS \b only recognizes Latin letters.
    const ruAction=/(?:^|\s)(?:напиши|создай|сделай|сохрани|запиши|измени|исправь|добавь|удали|разработай|реализуй)(?:\s|$)/u.test(value);
    const technical=/(?:код|скрипт|сайт|приложени|программ|интерфейс|репозитор|проект|файл|\.txt\b|\.md\b|\.py\b|\.js\b|\.html\b|code|script|website|app\b|program|interface|repository|project|file)/iu.test(value);
    const explanation=/(?:объясни|расскажи|что такое|как работает|покажи пример|explain|what is|how does|show.*example)/iu.test(value);
    const noFiles=/(?:не\s+(?:создавай|сохраняй|записывай|меняй|пиши)\s+(?:файл|код)|без\s+(?:файлов|кода)|don't.*(?:write|save|create|edit)|do not.*(?:write|save|create|edit)|no files)/iu.test(value);
    const files=(action||ruAction)&&technical&&!explanation&&!noFiles;
    const code=technical&&!noFiles;
    return {files,code,toolsMutation:files||/(?:запомни|remember|сохрани.*памят)/iu.test(value),simple:!files&&value.length<80&&value.split(/\s+/).length<12};
  }
  function prompt(text){
    const intent=classify(text);
    return 'You are MultiMind, a general-purpose conversational assistant. Help with conversation, learning, writing, translation, ideas, analysis and programming as requested. Reply naturally in the language of the user, never mix languages unnecessarily. A greeting, typo, short message or single letter is conversation, not a coding task. Answer a greeting briefly. If the meaning is unclear, ask one short clarifying question. Never invent a software project from ordinary messages. Keep prose, poems, plans and explanations in the chat; do not put them in code fences or .txt files unless the user explicitly asks for a file. Do not claim to create, save, edit or run anything unless the application actually did it. Treat any previous coding conversation as history, not a command to keep coding. Follow the current request. '+(intent.files?'The user explicitly requested a technical artifact. Provide complete runnable code where appropriate, using fenced blocks with a language and filename.':'The current request does not authorize file changes. Respond in chat. Code examples may be included only when relevant to an explicit programming question; they must not be saved as files.');
  }
  const api={classify,prompt};root.MultiMindIntent=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
