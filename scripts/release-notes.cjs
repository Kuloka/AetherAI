const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const base = process.argv[2] || 'v1.20.0';
const git = args => execFileSync('git', args, { encoding: 'utf8', windowsHide: true }).trim();
const changes = git(['diff', '--numstat', base, 'HEAD']).split('\n').filter(Boolean).map(line => {
  const [added, removed, ...name] = line.split('\t');
  return { added, removed, name: name.join('\t') };
});
const sum = key => changes.reduce((total, change) => total + (Number(change[key]) || 0), 0);
const rows = changes.map(change => `| ${change.name.replaceAll('|', '\\|')} | ${change.added} | ${change.removed} |`).join('\n');
process.stdout.write(fs.readFileSync('RELEASE_NOTES.md', 'utf8') +
  `\nChanges relative to ${base}: **${sum('added')} lines added**, **${sum('removed')} lines removed** across ${changes.length} files. Binary files are marked with \`-\`.\n\n` +
  `| File | Added lines | Removed lines |\n| --- | ---: | ---: |\n${rows}\n`);
