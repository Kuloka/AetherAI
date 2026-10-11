const test=require('node:test'),assert=require('node:assert/strict'),{parse}=require('../code-artifacts'),intent=require('../chat-intent');
test('Build requests include calculators/games while examples, ideas and conversation remain in chat',()=>{
 for(const text of ['сделай калькулятор','создай игру','напиши бота','build a calculator'])assert.equal(intent.classify(text).files,true,text);
 for(const text of ['создай идею для игры','покажи пример калькулятора','как работает игра','привет'])assert.equal(intent.classify(text).files,false,text);
 assert.equal(intent.classify('добавь синюю кнопку',{project:true}).files,true);assert.equal(intent.classify('добавь синюю кнопку').files,false);assert.equal(intent.classify('напиши стих',{project:true}).files,false);
 assert.equal(intent.classify('создай программу для генерации сюжета').files,true);assert.equal(intent.classify('создай сайт и объясни как запустить').files,true);
});
test('Complete artifacts preserve all relative paths, skip command blocks and do not save truncated code',()=>{
 const text='```html index.html\n<script src="src/app.js"></script>\n```\n```javascript src/app.js\nconsole.log(1);\n```\n```bash\nnpm install\n```\n```css styles.css\nbody {';
 const files=parse(text);assert.deepEqual(files.map(file=>file.path+file.file),['index.html','src/app.js']);assert.equal(files[1].code,'console.log(1);');
 for(const name of ['../x.py','/tmp/x.py','C:/x.py','a/../../x.py'])assert.equal(parse('```python '+name+'\nprint(1)\n```').length,0,name);
 assert.equal(parse('### `src/main.py`\n```python\nprint(1)\n```')[0].path,'src/');
});
