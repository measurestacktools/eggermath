const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'data', 'translations.js');
let src = fs.readFileSync(file, 'utf8');
// Remove desc from English entries only
// Pattern: 'en': { title: '...', desc: '...' }  →  'en': { title: '...' }
src = src.replace(/('en':\s*\{[^}]*?),\s*desc:\s*'[^']*'/g, '$1');
fs.writeFileSync(file, src);
console.log('Done — removed English desc overrides');
