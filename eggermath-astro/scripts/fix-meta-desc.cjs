// One-off: rewrite all 52 game desc fields to <=155 chars, keyword-first.
// Formula: "Play {Title} online free — {hook} No download, saves on mobile."
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'data', 'games.js');
let content = fs.readFileSync(file, 'utf8');

const D = {
  'pokemon-emerald': 'Play Pokemon Emerald online free — Battle Frontier, Rayquaza plot, catch Groudon and Kyogre. No download, saves on mobile.',
  'pokemon-firered': 'Play Pokemon FireRed online free — Kanto remake with Sevii Islands, updated sprites, trading. No download, saves on mobile.',
  'pokemon-leafgreen': 'Play Pokemon LeafGreen online free — Kanto remake, Bulbasaur starter, Sevii Islands quest. No download, saves on mobile.',
  'pokemon-ruby': 'Play Pokemon Ruby online free — Hoenn region, double battles, Groudon vs Team Magma. No download, saves on mobile.',
  'pokemon-sapphire': 'Play Pokemon Sapphire online free — Hoenn region, Kyogre plot, double battles debut. No download, saves on mobile.',
  'pokemon-ultra-violet': 'Play Pokemon Ultra Violet online free — Emerald ROM hack with all 386 Pokemon catchable. No download, saves on mobile.',
  'pokemon-jupiter': 'Play Pokemon Jupiter online free — fan-made Hoenn sequel with new story and Fakemon. No download, saves on mobile.',
  'zelda-minish-cap': 'Play Zelda: Minish Cap online free — shrink to Minish size, kinstone fusions, Ezlo cap. No download, saves on mobile.',
  'zelda-a-link-to-the-past': 'Play Zelda: A Link to the Past online free — Light and Dark World Triforce quest. No download, saves on mobile.',
  'mario-kart-super-circuit': 'Play Mario Kart Super Circuit online free — 40 tracks, cups, fast Mode 7 racing. No download, saves on mobile.',
  'super-mario-world': 'Play Super Mario World online free — 96 exits, Yoshi debut, SNES classic port. No download, saves on mobile.',
  'mario-luigi-superstar-saga': 'Play Mario & Luigi: Superstar Saga online free — Bros. attacks, Beanbean comedy RPG. No download, saves on mobile.',
  'classic-nes-super-mario-bros': 'Play Classic NES Super Mario Bros online free — 32-level original, pixel-perfect port. No download, saves on mobile.',
  'metroid-fusion': 'Play Metroid Fusion online free — SA-X hunt, SAX escape, atmospheric sequel. No download, saves on mobile.',
  'metroid-zero-mission': 'Play Metroid: Zero Mission online free — Zero Suit stealth finale, NES remake. No download, saves on mobile.',
  'kirby-nightmare-in-dream-land': 'Play Kirby: Nightmare in Dream Land online free — copy abilities, Dedede rematch. No download, saves on mobile.',
  'kirby-amazing-mirror': 'Play Kirby & the Amazing Mirror online free — 4-player maze, nonlinear Mirror World. No download, saves on mobile.',
  'castlevania-aria-of-sorrow': 'Play Castlevania: Aria of Sorrow online free — Tactical Souls, 100+ combinable powers. No download, saves on mobile.',
  'donkey-kong-country': 'Play Donkey Kong Country online free — Rare\u2019s pre-rendered jungle platforming. No download, saves on mobile.',
  'fire-emblem-sacred-stones': 'Play Fire Emblem: Sacred Stones online free — permadeath tactics, dual routes. No download, saves on mobile.',
  'sonic-advance-3': 'Play Sonic Advance 3 online free — tag-team dash, 7 zones, Chao Garden. No download, saves on mobile.',
  'dragon-ball-advanced-adventure': 'Play Dragon Ball Advanced Adventure online free — beat-em-up of kid Goku saga. No download, saves on mobile.',
  'harvest-moon-friends-of-mineral-town': 'Play Harvest Moon online free — farm, marry, mine through four seasons. No download, saves on mobile.',
  'crash-bandicoot-huge-adventure': 'Play Crash Bandicoot online free — Cortex minimizer plot, 20+ levels. No download, saves on mobile.',
  'gta-advance': 'Play GTA Advance online free — top-down Liberty City crime spree. No download, saves on mobile.',
  'golden-sun': 'Play Golden Sun online free — Djinn Psynergy puzzles, epic JRPG quest. No download, saves on mobile.',
  'super-mario-advance': 'Play Super Mario Advance online free — SMB2 remake with Yoshi Challenge. No download, saves on mobile.',
  'super-mario-bros-3': 'Play Super Mario Bros. 3 online free — Tanooki Suit, airships, 8 worlds. No download, saves on mobile.',
  'pokemon-crystal': 'Play Pokemon Crystal online free — Suicune plot, animated sprites, Battle Tower. No download, saves on mobile.',
  'pokemon-gold': 'Play Pokemon Gold online free — Johto plus Kanto, 16 badges, day-night. No download, saves on mobile.',
  'pokemon-silver': 'Play Pokemon Silver online free — Lugia quest, 16 badges, Johto starters. No download, saves on mobile.',
  'pokemon-yellow': 'Play Pokemon Yellow online free — Pikachu follows you, Jessie and James appear. No download, saves on mobile.',
  'dbz-legendary-super-warriors': 'Play DBZ Legendary Super Warriors online free — card-battle DBZ sagas. No download, saves on mobile.',
  'shantae': 'Play Shantae online free — hair-whip platforming, dance transformations. No download, saves on mobile.',
  'super-mario-bros-deluxe': 'Play Super Mario Bros. Deluxe online free — SMB1 plus Lost Levels, Challenge mode. No download, saves on mobile.',
  'tetris-dx': 'Play Tetris DX online free — color-matched lines, Ultra and Versus modes. No download, saves on mobile.',
  'wario-land-3': 'Play Wario Land 3 online free — day-night puzzle world, invincible Wario tricks. No download, saves on mobile.',
  'castlevania-legends': 'Play Castlevania Legends online free — Sonia Belmont whip, 1497 origins. No download, saves on mobile.',
  'contra-alien-wars': 'Play Contra: The Alien Wars online free — run-and-gun, spread-shot chaos. No download, saves on mobile.',
  'donkey-kong-gb': 'Play Donkey Kong online free — 94-level Mario vs DK puzzle platformer. No download, saves on mobile.',
  'dr-mario': 'Play Dr. Mario online free — virus-busting pill puzzles, 20 speeds. No download, saves on mobile.',
  'ducktales': 'Play DuckTales online free — pogo-cane treasure hunt to the Moon. No download, saves on mobile.',
  'final-fantasy-adventure': 'Play Final Fantasy Adventure online free — Mana series origin, magic quest. No download, saves on mobile.',
  'kirbys-dream-land-2': 'Play Kirby\u2019s Dream Land 2 online free — Rick, Kine, Coo animal friends join. No download, saves on mobile.',
  'kirbys-pinball-land': 'Play Kirby\u2019s Pinball Land online free — three-table Kirby pinball romp. No download, saves on mobile.',
  'street-fighter-ii-gb': 'Play Street Fighter II online free — 9 fighters, portable World Warrior bouts. No download, saves on mobile.',
  'super-mario-land': 'Play Super Mario Land online free — Sarasaland rescue, shooter stages. No download, saves on mobile.',
  'super-mario-land-2': 'Play Super Mario Land 2 online free — Wario debut, 6 Golden Coins hunt. No download, saves on mobile.',
  'tetris-gb': 'Play Tetris online free — the 1989 classic, endless Type-A stacks. No download, saves on mobile.',
  'wario-land': 'Play Wario Land online free — Wario\u2019s first quest, 10 worlds plus hats. No download, saves on mobile.',
  'kirbys-dream-land': 'Play Kirby\u2019s Dream Land online free — copy-free debut, Dedede showdown. No download, saves on mobile.',
  'mega-man-dr-wilys-revenge': 'Play Mega Man: Dr. Wily\u2019s Revenge online free — 8 Robot Masters, GB debut. No download, saves on mobile.',
};

let count = 0;
for (const [slug, desc] of Object.entries(D)) {
  if (desc.length > 155) throw new Error(`${slug}: ${desc.length} chars — too long`);
  const re = new RegExp("(slug: '" + slug + "',[\\s\\S]*?desc: ')((?:\\\\'|[^'])*)(')");
  if (!re.test(content)) throw new Error(`${slug}: pattern not found`);
  content = content.replace(re, `$1${desc}$3`);
  count++;
}
// Verify uniqueness
const descs = [...content.matchAll(/desc: '([^']*)'/g)].map(m => m[1]);
const uniq = new Set(descs);
console.log(`Rewrote ${count} descriptions, ${uniq.size}/${descs.length} unique, max len ${Math.max(...descs.map(d => d.length))}`);
fs.writeFileSync(file, content, 'utf8');
