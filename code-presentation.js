(function(root){
  function escape(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  const names={py:'Python',python:'Python',js:'JavaScript',javascript:'JavaScript',jsx:'JSX',ts:'TypeScript',typescript:'TypeScript',tsx:'TSX',json:'JSON',sh:'Shell',bash:'Bash',shell:'Shell',html:'HTML',xml:'XML',css:'CSS',sql:'SQL',cpp:'C++',c:'C',cs:'C#',csharp:'C#',java:'Java',go:'Go',rust:'Rust',text:'Text',plaintext:'Text'};
  const copies={en:['Copy','Copied','Try again'],ru:['Копировать','Скопировано','Повторить'],es:['Copiar','Copiado','Reintentar'],pt:['Copiar','Copiado','Tentar novamente'],fr:['Copier','Copié','Réessayer'],de:['Kopieren','Kopiert','Erneut versuchen'],it:['Copia','Copiato','Riprova'],tr:['Kopyala','Kopyalandı','Tekrar dene'],pl:['Kopiuj','Skopiowano','Spróbuj ponownie'],uk:['Копіювати','Скопійовано','Повторити']};
  function labels(lang){return copies[lang]||copies.en;}
  const icons={py:'python',python:'python',js:'javascript',javascript:'javascript',jsx:'react',tsx:'react',ts:'typescript',typescript:'typescript',html:'html5',css:'css3',java:'java',c:'c',cpp:'cplusplus','c++':'cplusplus',cs:'csharp',csharp:'csharp',go:'go',rs:'rust',rust:'rust',php:'php',rb:'ruby',ruby:'ruby',json:'json',sql:'azuresqldatabase',sh:'bash',bash:'bash',shell:'bash',xml:'xml'};
  function icon(language){const name=icons[String(language||'').toLowerCase()];return name?'<img src="resources/language-icons/'+name+'.svg" alt="" aria-hidden="true">':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M8 8 4 12l4 4m8-8 4 4-4 4m-3-11-2 14"/></svg>';}
  function highlight(code,language){
    const lang=String(language||'').toLowerCase();
    if(!names[lang]||['text','plaintext'].includes(lang))return escape(code);
    // One pass: comments/strings are consumed before keywords; markup is always escaped.
    const tokens=/\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*|--[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:async|await|break|case|catch|class|const|continue|def|delete|do|else|except|export|false|finally|for|from|function|if|import|in|interface|let|new|None|null|pass|private|public|raise|return|static|struct|super|switch|this|throw|true|try|type|undefined|var|void|while|with|yield|True|False|SELECT|FROM|WHERE|INSERT|INTO|UPDATE|CREATE|TABLE|JOIN|AND|OR|AS)\b|\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?)\b/g;
    let result='',cursor=0;
    for(const match of String(code).matchAll(tokens)){
      const token=match[0];let kind=/^["'`]/.test(token)?'string':/^\d/.test(token)?'number':'keyword';
      if(/^(?:\/\*|\/\/|#|--)/.test(token)){
        const allowed=token.startsWith('#')?/^(?:py|python|sh|bash|shell)$/.test(lang):token.startsWith('--')?lang==='sql':!/^(?:py|python|json|sh|bash|shell)$/.test(lang);
        if(!allowed){result+=escape(code.slice(cursor,match.index+token.length));cursor=match.index+token.length;continue;}
        kind='comment';
      }
      result+=escape(code.slice(cursor,match.index))+'<span class="syntax-'+kind+'">'+escape(token)+'</span>';cursor=match.index+token.length;
    }
    return result+escape(code.slice(cursor));
  }
  function block(code,language,lang){const key=String(language||'').toLowerCase(),title=names[key]||(/^[\w+#.-]{1,24}$/.test(key)?key:'Code');return '<div class="answer-code-block"><div class="answer-code-header"><span class="answer-code-language">'+icon(key)+escape(title)+'</span><button type="button" class="code-copy" data-copy-code><span class="code-copy-label">'+escape(labels(lang)[0])+'</span></button></div><pre><code>'+highlight(code,key)+'</code></pre></div>';}
  const api={highlight,block,labels,icon};root.AetherAICode=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
