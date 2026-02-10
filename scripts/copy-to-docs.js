const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const docsDir = path.join(__dirname, '..', 'docs');

if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}
fs.cpSync(buildDir, docsDir, { recursive: true });
console.log('Copied build to docs/');
