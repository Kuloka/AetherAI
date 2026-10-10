const test=require('node:test'),assert=require('node:assert/strict');
const ui=require('../answer-presentation');
test('explanation is offered for math, programming and multi-step answers, not ordinary long prose or interrupted/image answers',()=>{
 const prose='A calm, friendly message about everyday things. '.repeat(10);
 assert.equal(ui.shouldExplain({question:'How are you?',answer:prose}),false);
 assert.equal(ui.shouldExplain({answer:'Hi!'}),false);
 const math=prose+'\\[\\frac{m}{V}\\]';assert.equal(ui.shouldExplain({question:'Explain density',answer:math}),true);
 const code=prose+'```python\nprint(1)\n```';assert.equal(ui.shouldExplain({question:'Write a calculator',answer:code}),true);
 const steps=prose+'\n1. Analyse input\n2. Apply constraints\n3. Verify the result';assert.equal(ui.shouldExplain({answer:steps}),true);
 assert.equal(ui.shouldExplain({answer:math,interrupted:true}),false);assert.equal(ui.shouldExplain({answer:math,images:true}),false);
});
test('source links retain exact destination, reject executable/credential URLs and do not load icons from private hosts',()=>{
 const source=ui.sourceDetails({url:'https://en.wikipedia.org/wiki/Angle_bisector',title:'Angle bisector'});
 assert.equal(source.href,'https://en.wikipedia.org/wiki/Angle_bisector');assert.equal(source.icon,'https://en.wikipedia.org/favicon.ico');
 for(const url of ['javascript:alert(1)','file:///secret','https://user:password@example.com'])assert.equal(ui.sourceDetails({url}),null);
 assert.equal(ui.sourceDetails({url:'https://127.0.0.1/secret'}).icon,null);
});
test('Markdown references become safe anchors, inline code stays literal and math/code formatting stays intact',()=>{
 assert.match(ui.inline('[Wikipedia](https://en.wikipedia.org/wiki/Angle_bisector)'),/<a href="https:\/\/en.wikipedia.org\/wiki\/Angle_bisector"/);
 assert.equal(ui.inline('`[example](https://example.com)`'),'<code>[example](https://example.com)</code>');
 assert.equal(ui.inline('**Key point**'),'<strong>Key point</strong>');
 assert.ok(!ui.inline('[bad](javascript:alert(1))').includes('<a'));
 assert.ok(!ui.inline('[bad](https://user:pass@example.com)').includes('<a'));
 const html=ui.inline('[safe](https://example.com/?q=&quot;onmouseover=&quot;bad)');assert.ok(!html.includes('href="https://example.com/?q="'));assert.match(html,/%22/);
});
test('source and explanation labels cover all ten application languages',()=>{
 for(const lang of ['en','ru','es','pt','fr','de','it','tr','pl','uk']){const copy=ui.labels(lang);assert.ok(copy.sources&&copy.explain);if(lang!=='en')assert.notEqual(copy.explain,ui.labels('en').explain);}
 assert.equal(ui.labels('ru').explain,'Объяснить подробнее');assert.equal(ui.labels('uk').sources,'Джерела');
});
