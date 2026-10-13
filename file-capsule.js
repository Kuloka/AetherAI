(function (root) {
  'use strict';
  const views = new WeakMap();
  const groups = new WeakMap();
  const split = text => String(text ?? '').replace(/\r\n/g, '\n').split('\n');
  function lines(text) { return text === '' ? [] : split(text); }
  function diff(before, after) {
    const old = lines(String(before ?? '')), next = lines(String(after ?? ''));
    let head = 0, tail = 0;
    while (head < old.length && head < next.length && old[head] === next[head]) head++;
    while (tail < old.length - head && tail < next.length - head && old[old.length - 1 - tail] === next[next.length - 1 - tail]) tail++;
    const rows = []; let oi = 1, ni = 1, added = 0, removed = 0;
    const emit = (type, text) => {
      const row = { type, text };
      if (type !== 'add') row.oldLine = oi++;
      if (type !== 'remove') row.newLine = ni++;
      if (type === 'add') added++;
      if (type === 'remove') removed++;
      rows.push(row);
    };
    for (let i = 0; i < head; i++) emit('context', old[i]);
    const a = old.slice(head, old.length - tail), b = next.slice(head, next.length - tail);
    // Bound work and allocation for large files. A replacement remains a truthful,
    // if less granular, diff rather than silently inventing unchanged lines.
    if ((a.length + 1) * (b.length + 1) > 250000) {
      a.forEach(line => emit('remove', line)); b.forEach(line => emit('add', line));
    } else {
      const width = b.length + 1;
      const table = new Uint32Array((a.length + 1) * width);
      for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) {
        table[i * width + j] = a[i] === b[j] ? table[(i + 1) * width + j + 1] + 1 : Math.max(table[(i + 1) * width + j], table[i * width + j + 1]);
      }
      let i = 0, j = 0;
      while (i < a.length || j < b.length) {
        if (i < a.length && j < b.length && a[i] === b[j]) { emit('context', a[i]); i++; j++; }
        else if (i < a.length && (j === b.length || table[(i + 1) * width + j] >= table[i * width + j + 1])) emit('remove', a[i++]);
        else emit('add', b[j++]);
      }
    }
    for (let i = old.length - tail; i < old.length; i++) emit('context', old[i]);
    return { rows, added, removed };
  }
  function node(doc, tag, cls, text) {
    const item = doc.createElement(tag); item.className = cls;
    if (text !== undefined) item.textContent = text;
    return item;
  }
  const languageNames = {html:'HTML',css:'CSS',javascript:'JavaScript',typescript:'TypeScript',jsx:'JSX',tsx:'TSX',python:'Python',json:'JSON',xml:'XML',java:'Java',go:'Go',rust:'Rust',php:'PHP',ruby:'Ruby',c:'C',cpp:'C++',csharp:'C#',bash:'Shell',sql:'SQL'};
  const languageAliases = {htm:'html',html5:'html',css3:'css',js:'javascript',mjs:'javascript',cjs:'javascript',ts:'typescript',mts:'typescript',cts:'typescript',py:'python',rs:'rust',rb:'ruby',cc:'cpp',cxx:'cpp','c++':'cpp',h:'c',hpp:'cpp',cs:'csharp','c#':'csharp',sh:'bash',shell:'bash',svg:'xml'};
  function languageFor(file) {
    const filename = String(file.path || '') + String(file.file || '');
    const extension = filename.split(/[\\/]/).pop().split('.').slice(1).pop()?.toLowerCase() || '';
    const label = String(file.label || '').trim().toLowerCase();
    const key = languageAliases[extension] || extension;
    const fallback = languageAliases[label] || label;
    const language = languageNames[key] ? key : languageNames[fallback] ? fallback : '';
    return { key: language, name: languageNames[language] || 'File' };
  }
  function create(file, options = {}) {
    const doc = options.document || root.document;
    const el = node(doc, 'details', 'file-capsule');
    const summary = node(doc, 'summary', 'file-capsule-summary');
    const indicator = node(doc, 'span', 'file-capsule-indicator'); indicator.setAttribute('role', 'img');
    const state = node(doc, 'span', 'file-capsule-state');
    const name = node(doc, 'span', 'file-capsule-name');
    const counts = node(doc, 'span', 'file-capsule-counts');
    const arrow = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttribute('viewBox', '0 0 24 24'); arrow.setAttribute('class', 'file-capsule-arrow'); arrow.setAttribute('aria-hidden', 'true');
    const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', 'M5 12h14m-5-5 5 5-5 5'); arrow.append(path);
    summary.append(indicator, state, name, counts, arrow);
    const code = node(doc, 'div', 'file-capsule-code'); code.tabIndex = 0; code.setAttribute('role', 'region');
    el.append(summary, code);
    views.set(el, { summary, indicator, state, name, counts, code, rows: [] });
    update(el, file, options);
    return el;
  }
  const same = (a, b) => a && b && a.type === b.type && a.text === b.text && a.oldLine === b.oldLine && a.newLine === b.newLine;
  function renderRow(doc, row) {
    const el = node(doc, 'div', `file-capsule-line file-capsule-${row.type}`);
    el.append(node(doc, 'span', 'file-capsule-old-line', row.oldLine ?? ''), node(doc, 'span', 'file-capsule-new-line', row.newLine ?? ''), node(doc, 'span', 'file-capsule-sign', row.type === 'add' ? '+' : row.type === 'remove' ? '-' : ''), node(doc, 'span', 'file-capsule-source', row.text));
    return el;
  }
  function update(el, file, options = {}) {
    const view = views.get(el); if (!view) throw new TypeError('Expected a file capsule created by create()');
    const labels = options.labels || {};
    const codeText = String(file.code ?? '');
    const known = options.baselineKnown === true;
    const result = known ? diff(options.before ?? '', codeText) : { rows: lines(codeText).map((text, i) => ({ type: 'context', text, newLine: i + 1 })), added: 0, removed: 0 };
    const filename = String(file.path || '') + String(file.file || '');
    const language = languageFor(file);
    if (view.indicator.dataset.language !== language.key) {
      view.indicator.dataset.language = language.key;
      view.indicator.innerHTML = language.key ? root.AetherAICode.icon(language.key) : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M14 3H6v18h12V7l-4-4Zm0 0v5h4M9 12h6m-6 4h6"/></svg>';
    }
    view.indicator.title = language.name;
    view.indicator.setAttribute('aria-label', language.name);
    const phase = options.phase || (options.writing === true ? 'writing' : 'done');
    const writing = phase === 'writing';
    el.dataset.phase = phase;
    el.classList.toggle('is-writing', writing);
    el.classList.toggle('is-checking', phase === 'checking');
    el.classList.toggle('has-diff', known);
    view.state.textContent = phase === 'checking' ? (labels.checking || 'Checking') : writing ? (labels.writing || 'Writing') : (options.phase === 'done' ? (labels.done || labels.edited || 'Edited') : (labels.edited || 'Edited'));
    view.name.textContent = filename; view.name.title = filename;
    view.summary.title = `${filename} - ${labels.expand || 'Show code'}`;
    view.code.setAttribute('aria-label', filename);
    const count = lines(codeText).length;
    view.counts.title = count+' '+(labels.lines || 'lines');
    view.counts.textContent = known && options.compact ? '+'+result.added+' / -'+result.removed : known ? `+${result.added} / -${result.removed}  \u00b7  ${count} ${labels.lines || 'lines'}` : `${count} ${labels.lines || 'lines'}`;
    const scrollTop = view.code.scrollTop, scrollLeft = view.code.scrollLeft;
    const follow = view.code.scrollHeight - view.code.clientHeight - scrollTop < 24;
    let prefix = 0, suffix = 0;
    while (prefix < view.rows.length && prefix < result.rows.length && same(view.rows[prefix], result.rows[prefix])) prefix++;
    while (suffix < view.rows.length - prefix && suffix < result.rows.length - prefix && same(view.rows[view.rows.length - suffix - 1], result.rows[result.rows.length - suffix - 1])) suffix++;
    const children = Array.from(view.code.children);
    for (let i = prefix; i < children.length - suffix; i++) children[i].remove();
    const fragment = el.ownerDocument.createDocumentFragment();
    for (let i = prefix; i < result.rows.length - suffix; i++) fragment.append(renderRow(el.ownerDocument, result.rows[i]));
    view.code.insertBefore(fragment, suffix ? children[children.length - suffix] : null);
    view.rows = result.rows;
    view.result = result;
    view.code.scrollTop = follow && el.open ? view.code.scrollHeight : scrollTop;
    view.code.scrollLeft = scrollLeft;
    return el;
  }
  function groupFileOptions(file, options) {
    const resolved = typeof options.fileOptions === 'function' ? options.fileOptions(file) : {};
    return {
      document: options.document, labels: options.labels, phase: options.phase,
      before: file.beforeContent,
      baselineKnown: file.baselineKnown === true && typeof file.beforeContent === 'string' && (file.beforeContent === '' || file.complete === true || (!file.unsaved && options.writing !== true && options.phase !== 'writing')),
      writing: options.writing, ...resolved
    };
  }
  function createGroup(files, options = {}) {
    const doc = options.document || root.document;
    const el = node(doc, 'details', 'file-capsule-group');
    const summary = node(doc, 'summary', 'file-capsule-group-summary');
    const state = node(doc, 'span', 'file-capsule-group-state');
    const name = node(doc, 'span', 'file-capsule-group-name');
    const counts = node(doc, 'span', 'file-capsule-group-counts');
    const arrow = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttribute('viewBox', '0 0 24 24'); arrow.setAttribute('class', 'file-capsule-group-arrow'); arrow.setAttribute('aria-hidden', 'true');
    const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', 'M5 12h14m-5-5 5 5-5 5'); arrow.append(path);
    summary.append(state, name, counts, arrow);
    const list = node(doc, 'div', 'file-capsule-group-list');
    el.append(summary, list);
    groups.set(el, { summary, state, name, counts, list, files: new Map() });
    updateGroup(el, files, options);
    return el;
  }
  function updateGroup(el, files, options = {}) {
    const view = groups.get(el); if (!view) throw new TypeError('Expected a group created by createGroup()');
    const entries = new Map();
    for (const file of files || []) entries.set(String(file.path || '') + String(file.file || ''), file);
    let added = 0, removed = 0, known = true, knownCount = 0;
    const phases = [];
    const labels = options.labels || {};
    for (const [name, file] of entries) {
      const opts = groupFileOptions(file, options);
      let capsule = view.files.get(name);
      if (!capsule) { capsule = create(file, opts); view.files.set(name, capsule); }
      else update(capsule, file, opts);
      capsule.currentFile = file;
      phases.push(opts.phase || (opts.writing === true ? 'writing' : file.unsaved || file.stopped ? '' : 'done'));
      if (opts.baselineKnown === true) { knownCount++; const changes = views.get(capsule).result; added += changes.added; removed += changes.removed; }
      else known = false;
    }
    for (const [name, capsule] of view.files) if (!entries.has(name)) { capsule.remove(); view.files.delete(name); }
    // Avoid moving unchanged disclosure nodes: their focus and scroll remain intact.
    let position = view.list.firstElementChild;
    for (const name of entries.keys()) {
      const capsule = view.files.get(name);
      if (capsule !== position) view.list.insertBefore(capsule, position);
      position = capsule.nextElementSibling;
    }
    const phase = phases.includes('checking') ? 'checking' : phases.includes('writing') ? 'writing' : phases.length && phases.every(item => item === 'done') ? 'done' : '';
    el.dataset.phase = phase;
    view.state.textContent = phase === 'checking' ? (labels.checking || 'Checking') : phase === 'writing' ? (labels.writing || 'Writing') : phase === 'done' ? (labels.done || labels.edited || 'Edited') : '';
    view.state.hidden = !phase;
    view.name.textContent = labels.groupFiles?.includes('{count}') ? labels.groupFiles.replace('{count}', entries.size) : entries.size + ' ' + (labels.groupFiles || 'files');
    view.counts.textContent = known ? '+' + added + ' / -' + removed : knownCount ? '+' + added + ' / -' + removed + ' \u00b7 ' + (labels.partial || 'partial') : '';
    view.counts.title = labels.groupChanges || 'Changes';
    view.summary.title = labels.expand || 'Show code';
    el.dataset.baselineKnown = String(known);
    el.dataset.fileCount = String(entries.size);
    return el;
  }
  function getCapsules(el) {
    const view = groups.get(el); if (!view) throw new TypeError('Expected a group created by createGroup()');
    return view.files;
  }
  const api = { create, update, diff, createGroup, updateGroup, getCapsules, languageFor };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) root.AetherAIFileCapsule = api;
})(typeof window !== 'undefined' ? window : globalThis);
