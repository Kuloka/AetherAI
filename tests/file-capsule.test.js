'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { diff, languageFor } = require('../file-capsule');
function reconstruct(rows, side) { return rows.filter(row => row.type !== (side === 'old' ? 'add' : 'remove')).map(row => row.text).join('\n'); }
function verify(before, after) {
  const result = diff(before, after);
  assert.equal(reconstruct(result.rows, 'old'), before);
  assert.equal(reconstruct(result.rows, 'new'), after);
  assert.equal(result.added, result.rows.filter(row => row.type === 'add').length);
  assert.equal(result.removed, result.rows.filter(row => row.type === 'remove').length);
  let oldLine = 0, newLine = 0;
  for (const row of result.rows) {
    if (row.type !== 'add') assert.equal(row.oldLine, ++oldLine);
    else assert.equal(row.oldLine, undefined);
    if (row.type !== 'remove') assert.equal(row.newLine, ++newLine);
    else assert.equal(row.newLine, undefined);
  }
  return result;
}
test('file diff keeps unchanged context and records real edits with line numbers', () => {
  const result = verify('first\nold\nlast', 'first\nnew\nlast');
  assert.deepEqual(result.rows.map(row => row.type), ['context', 'remove', 'add', 'context']);
  assert.equal(result.added, 1); assert.equal(result.removed, 1);
});
test('new and deleted files do not invent context', () => {
  assert.equal(verify('', 'one\ntwo').added, 2);
  assert.equal(verify('one\ntwo', '').removed, 2);
  assert.deepEqual(diff('', '').rows, []);
});
test('insertion preserves later genuine context including repeated lines', () => {
  const result = verify('a\nx\nb\nx\nc', 'a\nx\ninserted\nb\nx\nc');
  assert.equal(result.added, 1); assert.equal(result.removed, 0);
});
test('trailing newline is retained and CRLF normalizes consistently', () => {
  verify('one\n', 'one\ntwo\n');
  assert.deepEqual(diff('a\r\nb', 'a\nb').rows.map(row => row.type), ['context', 'context']);
});
test('bounded large replacement remains reconstructable and preserves prefix/suffix', () => {
  const before = ['shared', ...Array.from({length:700}, (_, i) => `old ${i}`), 'end'].join('\n');
  const after = ['shared', ...Array.from({length:700}, (_, i) => `new ${i}`), 'end'].join('\n');
  const result = verify(before, after);
  assert.equal(result.added, 700); assert.equal(result.removed, 700);
  assert.equal(result.rows[0].type, 'context'); assert.equal(result.rows.at(-1).type, 'context');
});
test('mixed edits reconstruct both original and new text over deterministic cases', () => {
  let seed = 17;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed; };
  for (let i = 0; i < 100; i++) {
    const before = Array.from({length:random() % 24}, () => String(random() % 6)).join('\n');
    const after = Array.from({length:random() % 24}, () => String(random() % 6)).join('\n');
    verify(before, after);
  }
});

test('file language follows extension, aliases, label fallback and neutral unknown files', () => {
  for (const [file,key,name] of [['index.html','html','HTML'],['theme.css','css','CSS'],['app.mjs','javascript','JavaScript'],['app.ts','typescript','TypeScript'],['view.tsx','tsx','TSX'],['app.py','python','Python'],['config.json','json','JSON'],['lib.rs','rust','Rust']]) {
    assert.deepEqual(languageFor({path:'src/',file,label:'CODE'}),{key,name});
  }
  assert.deepEqual(languageFor({file:'index.HTML',label:'Python'}),{key:'html',name:'HTML'});
  assert.deepEqual(languageFor({file:'script',label:'Python'}),{key:'python',name:'Python'});
  assert.deepEqual(languageFor({path:'src.py/',file:'unknown.bin',label:'CODE'}),{key:'',name:'File'});
});
