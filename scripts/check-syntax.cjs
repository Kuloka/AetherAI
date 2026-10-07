const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const files = [root, path.join(root, 'electron')].flatMap(directory =>
  fs.readdirSync(directory, { withFileTypes: true })
    .filter(entry => entry.isFile() && /\.(js|cjs)$/.test(entry.name))
    .map(entry => path.join(directory, entry.name)));
for (const file of files) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit', windowsHide: true });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
console.log(`Syntax checked: ${files.length} runtime files`);
