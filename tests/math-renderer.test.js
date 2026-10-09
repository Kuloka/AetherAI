const test=require('node:test'),assert=require('node:assert/strict');
const {extract}=require('../math-renderer'),katex=require('../resources/katex/katex.min.js');
const escaped=value=>value.replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function render(text){const math=extract(text,katex);return math.restore(escaped(math.text));}
test('display fractions, ceiling signs, roots, sums, integrals and matrices render with accessible mathematical notation',()=>{
 const html=render(String.raw`\[\left\lceil\frac{11}{7}\right\rceil=2\] Inline \(\sqrt{x^2+1}\). $$\sum_{i=1}^{n}i$$ $\int_0^1 x\,dx$ \[\begin{pmatrix}1&2\\3&4\end{pmatrix}\]`);
 assert.equal((html.match(/class="math-(?:block|inline)"/g)||[]).length,5);assert.match(html,/<mfrac>/);assert.match(html,/<msqrt>/);assert.match(html,/<mtable/);assert.match(html,/<math /);assert.ok(!html.includes('math-source'));
});
test('code examples, currency, escaped dollars and unfinished streamed equations remain literal',()=>{
 for(const text of [String.raw`\$10 and $20 and $30`,"Use `\\(x^2\\)`",String.raw`\[\frac{1}{2}`,"```latex\n\\[x^2\\]\n```", "```\n$$x+1$$"]){assert.equal(extract(text,katex).text,text);}
 assert.match(render('$x^2$'),/<msup>/);
});
test('untrusted mathematical commands cannot inject HTML, create links or fetch images',()=>{
 const html=render(String.raw`\[\href{javascript:alert(1)}{click}\] \[\includegraphics{https://example.invalid/private}\] \[\htmlStyle{background:url(https://example.invalid/private)}{x}\] \[\text{<img src=x onerror=alert(1)>}\]`);
 assert.ok(!/<(?:img|script)\b|<[^>]*\shref\s*=|<[^>]*\sonerror\s*=|style="[^"]*url\(/i.test(html));
 assert.match(render(String.raw`\[\frac{1}{\]`),/math-source/);
});
test('macro recursion is bounded and definitions do not leak into another equation',()=>{
 assert.match(render(String.raw`\[\def\a{\a}\a\]`),/math-source/);
 const math=extract(String.raw`\[\gdef\testmacro{123}\testmacro\] \[\testmacro\]`,katex),html=math.restore(math.text);
 assert.equal((html.match(/math-source/g)||[]).length,1);
});
