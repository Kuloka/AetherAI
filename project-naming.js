(function (root) {
  'use strict';
  const LIMIT = 48;
  const reserved = /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i;
  const generic = /^(?:untitled|index|app|application|website|web ?site|project|new project|home|document|title|\u043f\u0440\u043e\u0435\u043a\u0442|\u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442|\u0441\u0430\u0439\u0442|\u0438\u0433\u0440\u0430)$/i;
  function compact(value, limit = LIMIT) {
    const text = String(value || '').normalize('NFC')
      .replace(/<[^>]*>/g, ' ').replace(/[<>:"/\\|?*\x00-\x1f\x7f]/g, ' ')
      .replace(/\s+/g, ' ').trim().replace(/^[. -]+|[. -]+$/g, '');
    if (text.length <= limit) return text;
    const prefix = text.slice(0, limit + 1);
    const space = prefix.lastIndexOf(' ');
    return (space >= Math.min(20, limit / 2) ? prefix.slice(0, space) : text.slice(0, limit)).replace(/[. -]+$/g, '');
  }
  function entities(value) {
    return String(value).replace(/&(?:amp|lt|gt|quot|apos|#39|#\d+|#x[\da-f]+);/gi, entity => {
      const names = {'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&#39;':"'"};
      if (names[entity.toLowerCase()]) return names[entity.toLowerCase()];
      const hex = /^&#x/i.test(entity);
      const number = parseInt(entity.slice(hex ? 3 : 2, -1), hex ? 16 : 10);
      return number > 0 && number <= 0x10ffff && !(number >= 0xd800 && number <= 0xdfff) ? String.fromCodePoint(number) : '';
    });
  }
  function title(value) {
    if (typeof value !== 'string') return '';
    value = entities(value).replace(/<[^>]*>/g, ' ');
    if (value.length > 96 || value.trim().split(/\s+/).length > 12 || /[\\/]|https?:|\.(?:html?|js|json|css)$/i.test(value)) return '';
    const candidate = compact(entities(value));
    return candidate.length >= 2 && !generic.test(candidate) && !reserved.test(candidate) ? candidate : '';
  }
  function artifactTitle(files) {
    for (const file of files || []) {
      if (file.complete !== true || typeof file.code !== 'string') continue;
      const filename = String(file.file || '').toLowerCase();
      if (/\.html?$/.test(filename)) {
        const match = /<title(?:\s[^>]*)?>([\s\S]*?)<\/title\s*>/i.exec(file.code);
        const candidate = match && title(match[1]);
        if (candidate) return candidate;
      }
    }
    for (const file of files || []) {
      if (file.complete !== true || String(file.file || '').toLowerCase() !== 'package.json') continue;
      try {
        const pkg = JSON.parse(file.code);
        const candidate = title(pkg.title) || title(String(pkg.name || '').replace(/^@[^/]+\//, '').replace(/[-_]+/g, ' '));
        if (candidate) return candidate;
      } catch (_) { /* An incomplete manifest cannot name a project. */ }
    }
    return '';
  }
  function promptTitle(value) {
    let text = String(value || '').replace(/https?:\/\/\S+/gi, ' ').split(/\r?\n/)[0].trim();
    const quote = /[\u00ab\u201c"]([^\u00bb\u201d"]{2,48})[\u00bb\u201d"]/.exec(text);
    if (quote && title(quote[1])) return title(quote[1]);
    const leading = /^(?:(?:please|can you|could you|i want you to|i want|build|create|make|write|develop|generate|a|an|the)\b|(?:\u043d\u0430\u043f\u0438\u0448\u0438|\u0441\u043e\u0437\u0434\u0430\u0439|\u0441\u0434\u0435\u043b\u0430\u0439|\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0439|\u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0439|\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430|\u043c\u043d\u0435|\u0445\u043e\u0447\u0443|\u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439|\u043f\u0440\u043e\u0441\u0442\u043e\u0439)(?=\s|$))[\s,:-]*/i;
    for (let i = 0; i < 16 && leading.test(text); i++) text = text.replace(leading, '').trim();
    text = text.split(/\s+(?:using|with|that|which|where|\u043a\u043e\u0442\u043e\u0440\u044b\u0439|\u0433\u0434\u0435|\u043d\u0430 Three|\u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e)\s+/i)[0];
    text = text.replace(/\b3[dD]\b|3\u0434/gi, '3D').replace(/\u0438\u0433\u0440\u0443(?=\s|$)/gi, '\u0438\u0433\u0440\u0430');
    return compact(text.split(/\s+/).slice(0, 6).join(' '));
  }
  function name(options = {}) {
    const fallback = String(options.language || '').toLowerCase().startsWith('ru') ? '\u041d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442' : 'New project';
    let base = artifactTitle(options.files) || promptTitle(options.prompt) || fallback;
    if (reserved.test(base)) base = compact('Project ' + base);
    const used = new Set((options.existingNames || []).map(value => String(value).normalize('NFC').toLocaleLowerCase()));
    let result = base, index = 2;
    while (used.has(result.toLocaleLowerCase())) {
      const suffix = '-' + index++;
      result = compact(base, LIMIT - suffix.length) + suffix;
    }
    return result;
  }
  const api = { name };
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AetherAIProjectNaming = api;
})(typeof window !== 'undefined' ? window : globalThis);
