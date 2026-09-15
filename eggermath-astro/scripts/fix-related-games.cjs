// One-off: populate empty relatedGames in blog-posts.js
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'data', 'blog-posts.js');
let content = fs.readFileSync(file, 'utf8');

const gameMap = {
  'gba-emulator-mac': ['pokemon-emerald', 'zelda-minish-cap', 'metroid-fusion'],
  'gba-emulator-chromebook': ['pokemon-emerald', 'super-mario-advance', 'tetris'],
  'gba-emulator-no-download': ['pokemon-emerald', 'zelda-minish-cap', 'castlevania-aria-of-sorrow'],
  'how-to-play-gba-games-browser': ['pokemon-emerald', 'zelda-minish-cap', 'metroid-fusion'],
  'mgba-vs-visualboyadvance': ['pokemon-emerald', 'zelda-minish-cap', 'golden-sun'],
  'why-browser-emulation-is-the-future': ['pokemon-emerald', 'zelda-minish-cap', 'metroid-fusion'],
  'play-zelda-online-free': ['zelda-minish-cap', 'zelda-a-link-to-the-past'],
  'play-pokemon-emerald-online-free': ['pokemon-emerald', 'pokemon-ruby', 'pokemon-sapphire'],
  'top-10-gba-rpg-games': ['pokemon-emerald', 'golden-sun', 'castlevania-aria-of-sorrow'],
  'how-to-save-gba-progress': ['pokemon-emerald', 'zelda-minish-cap', 'metroid-fusion'],
  'best-gba-games-for-kids': ['pokemon-emerald', 'super-mario-advance', 'kirby-amazing-mirror'],
  'best-gba-games-2026': ['pokemon-emerald', 'zelda-minish-cap', 'metroid-fusion'],
  'retro-gaming-beginners-guide': ['pokemon-emerald', 'super-mario-advance', 'tetris-dx'],
  'gba-emulator-unblocked': ['pokemon-emerald', 'zelda-minish-cap', 'castlevania-aria-of-sorrow'],
  'gba-vs-gbc-which-is-better': ['pokemon-emerald', 'pokemon-crystal', 'zelda-minish-cap'],
  'pokemon-games-online': ['pokemon-emerald', 'pokemon-firered', 'pokemon-crystal'],
  'pokemon-emerald-nuzlocke-guide': ['pokemon-emerald', 'pokemon-ruby', 'pokemon-sapphire'],
  'best-gba-games-online': ['pokemon-emerald', 'zelda-minish-cap', 'metroid-fusion'],
  'best-game-boy-color-games': ['pokemon-crystal', 'wario-land-3', 'tetris-dx'],
};

// Game title lookup
const titleMap = {
  'pokemon-emerald': 'Pokemon Emerald',
  'zelda-minish-cap': 'Zelda: Minish Cap',
  'metroid-fusion': 'Metroid Fusion',
  'super-mario-advance': 'Super Mario Advance',
  'tetris': 'Tetris',
  'castlevania-aria-of-sorrow': 'Castlevania: Aria of Sorrow',
  'golden-sun': 'Golden Sun',
  'pokemon-ruby': 'Pokemon Ruby',
  'pokemon-sapphire': 'Pokemon Sapphire',
  'kirby-amazing-mirror': 'Kirby: Amazing Mirror',
  'zelda-a-link-to-the-past': 'Zelda: A Link to the Past',
  'pokemon-firered': 'Pokemon FireRed',
  'pokemon-crystal': 'Pokemon Crystal',
  'wario-land-3': 'Wario Land 3',
  'tetris-dx': 'Tetris DX',
  'mario-kart-super-circuit': 'Mario Kart: Super Circuit',
};

let fixCount = 0;
// Find each post with empty relatedGames and fill it
for (const [slug, games] of Object.entries(gameMap)) {
  // Match the specific post's relatedGames: []
  const pattern = new RegExp(
    `("slug": "${slug}"[\\s\\S]*?"relatedGames": \\[)[\\]]`,
    'm'
  );
  const match = content.match(pattern);
  if (match) {
    const gameEntries = games.map(g => `      {"slug":"${g}","title":"${titleMap[g] || g}"}`).join(',\n');
    const replacement = `$1\n${gameEntries}\n    ]`;
    content = content.replace(pattern, replacement);
    fixCount++;
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log(`Populated relatedGames for ${fixCount} posts`);
