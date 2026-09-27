// One-off: fully remove 3 games (missing ROMs) + all their traces.
// Usage: node scripts/remove-games.cjs
const fs = require('fs');
const path = require('path');
const SRC = path.join(__dirname, '..', 'src');
const PUB = path.join(__dirname, '..', 'public');

const SLUGS = ['zelda-minish-cap', 'kirbys-dream-land', 'mega-man-dr-wilys-revenge'];

function edit(file, fn) {
  const c0 = fs.readFileSync(file, 'utf8');
  const c1 = fn(c0);
  fs.writeFileSync(file, c1, 'utf8');
  console.log(path.relative(path.join(__dirname, '..'), file) + ': ' + c0.length + ' -> ' + c1.length);
}

// ── 1. games.js: drop entries + SITE 52→49 ──
edit(path.join(SRC, 'data', 'games.js'), c => {
  for (const s of SLUGS) {
    const re = new RegExp(`  \\{(?:(?!\\n  \\},)[\\s\\S])*?slug: '${s}'(?:(?!\\n  \\},)[\\s\\S])*?\\n  \\},\\n?`);
    if (!re.test(c)) throw new Error('games.js block missing: ' + s);
    c = c.replace(re, '');
  }
  return c
    .replace('Play 52 Classic Games Free in Browser', 'Play 49 Classic Games Free in Browser')
    .replace('Play 52 classic GBA, GBC, and GB games', 'Play 49 classic GBA, GBC, and GB games');
});

// ── 2. translations.js: drop slug blocks ──
edit(path.join(SRC, 'data', 'translations.js'), c => {
  for (const s of SLUGS) {
    const re = new RegExp(`  '${s}': \\{(?:(?!\\n  \\},)[\\s\\S])*?\\n  \\},\\n?`);
    if (!re.test(c)) throw new Error('translations block missing: ' + s);
    c = c.replace(re, '');
  }
  return c;
});

// ── 3. game-links.js: drop keys ──
edit(path.join(SRC, 'data', 'game-links.js'), c => {
  for (const s of SLUGS) {
    const re = new RegExp(`  '${s}': \\[(?:(?!\\n  \\],)[\\s\\S])*?\\n  \\],\\n?`);
    if (!re.test(c)) throw new Error('game-links block missing: ' + s);
    c = c.replace(re, '');
  }
  return c;
});

// ── 4. blog-posts.js ──
edit(path.join(SRC, 'data', 'blog-posts.js'), c => {
  // 4a. drop relatedGames/relatedPosts objects pointing at removed slugs (both key styles)
  for (const s of SLUGS) {
    const re = new RegExp(`\\{[^{}]*"slug":\\s*"${s}"[^{}]*\\},?\\n?`, 'g');
    c = c.replace(re, '');
  }
  // cleanup stray trailing commas before ] or }
  c = c.replace(/,(\s*\n\s*[\]\}])/g, '$1');
  // 4b. repoint minish-cap hrefs to ALTTP
  c = c.split('/zelda-minish-cap').join('/zelda-a-link-to-the-past');
  c = c.split('>Play Zelda Minish Cap<').join('>Play A Link to the Past<');
  c = c.split('>Zelda: Minish Cap<').join('>Zelda: A Link to the Past<');
  // 4c. rewrite dedicated zelda post (was half about the removed game)
  c = c.split('Play Zelda Online Free: Minish Cap & Link to the Past in Browser').join('Play Zelda: A Link to the Past Online Free in Browser');
  c = c.split('Play Zelda online free in your browser. Minish Cap and A Link to the Past with no download — full adventure, save states included.').join('Play Zelda: A Link to the Past online free in your browser — full adventure, no download, save states included.');
  c = c.split('Want to play Zelda online free? Two of the best Zelda adventures ever made run perfectly in your browser on EggerMath — no download, no emulator setup, no ROM hunting. Just click and explore Hyrule.').join('Want to play Zelda online free? A Link to the Past — the SNES legend ported to GBA — runs perfectly in your browser on EggerMath — no download, no emulator setup, no ROM hunting. Just click and explore Hyrule.');
  // remove the entire Minish Cap h2 section (heading + its paragraph)
  c = c.replace(/<h2[^>]*>Zelda: The Minish Cap<\/h2>[\s\S]*?<\/p>\s*/g, '');
  // 4d. 52→49 in prose
  c = c.split('click any of the 52 games').join('click any of the 49 games');
  c = c.split('All 52 games are built in').join('All 49 games are built in');
  return c;
});

// ── 5. blog-translations.js: repoint + recount ──
edit(path.join(SRC, 'data', 'blog-translations.js'), c => {
  return c
    .split('Zelda Minish Cap, Mario Kart y 49 más').join('Zelda: A Link to the Past, Mario Kart y otros 46')
    .split('Zelda Minish Cap, Mario Kart und 49 weitere').join('Zelda: A Link to the Past, Mario Kart und 46 weitere')
    .split('Zelda Minish Cap, Mario Kart et 49 autres').join('Zelda: A Link to the Past, Mario Kart et 46 autres')
    .split('Zelda Minish Cap, Mario Kart e outros 49').join('Zelda: A Link to the Past, Mario Kart e outros 46')
    .split('Zelda Minish Cap').join('Zelda: A Link to the Past');
});

// ── 6. llms.txt copies (public + .well-known) ──
for (const rel of ['llms.txt', '.well-known/llms.txt']) {
  const f = path.join(PUB, rel);
  try {
    edit(f, c => {
      return c
        .split('\n- [Zelda: Minish Cap](https://www.eggermath.com/zelda-minish-cap/): Shrink to Minish size, fuse Kinstones. Adventure 2004.').join('')
        .split("\n- [Kirby's Dream Land](https://www.eggermath.com/kirbys-dream-land/): Inhale enemies and float. Platformer 1992.").join('')
        .split("\n- [Mega Man: Dr. Wily's Revenge](https://www.eggermath.com/mega-man-dr-wilys-revenge/): Battle robots across 6 stages. Action 1991.").join('')
        .split('& 50+ titles').join('& 45+ titles');
    });
  } catch (e) { console.log(rel + ': SKIP (' + e.message + ')'); }
}

console.log('DONE. Remaining slug refs (should be only redirects/docs):');
