// Phase 2 of remove-games.cjs: remaining 52→49 + Minish Cap prose repoints.
const fs = require('fs');
const path = require('path');
const SRC = path.join(__dirname, '..', 'src');

function edit(rel, fn) {
  const f = path.join(SRC, rel);
  const c0 = fs.readFileSync(f, 'utf8');
  const c1 = fn(c0);
  fs.writeFileSync(f, c1, 'utf8');
  console.log(rel + ': ' + c0.length + ' -> ' + c1.length);
}

edit('data/blog-posts.js', c => {
  const before = c;
  c = c.split('Zelda: Minish Cap, Metroid Fusion, Mario Kart, Castlevania: Aria of Sorrow').join('Zelda: A Link to the Past, Metroid Fusion, Mario Kart, Castlevania: Aria of Sorrow');
  // gba-vs-gbc highlights line
  c = c.split('Pokemon Emerald/FireRed/LeafGreen, Zelda: Minish Cap, Metroid Fusion').join('Pokemon Emerald/FireRed/LeafGreen, Zelda: A Link to the Past, Metroid Fusion');
  // any leftover "52 games"/"52 built" prose
  c = c.split('52 games').join('49 games');
  c = c.split('52 built-in').join('49 built-in');
  if (c === before) throw new Error('no changes in blog-posts');
  if (/52 games|52 built-in|Minish Cap/.test(c)) throw new Error('leftover refs in blog-posts.js');
  return c;
});

edit('data/blog-translations.js', c => {
  const before = c;
  c = c.split('52 clásicos').join('49 clásicos')
    .split('52 Klassiker').join('49 Klassiker')
    .split('52 classiques').join('49 classiques')
    .split('52 clássicos').join('49 clássicos');
  if (c === before) throw new Error('no changes in blog-translations');
  return c;
});

console.log('PHASE2 DONE');
