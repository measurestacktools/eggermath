// One-off: append 3 money-keyword guides to blog-posts.js (source of truth — do NOT run extract-blog-data.cjs).
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'data', 'blog-posts.js');
const raw = fs.readFileSync(file, 'utf8');
const arrText = raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1);
const posts = JSON.parse(arrText);

const A = 'style="color:#c4a35a"';
const P = 'style="color:#ccc;margin-bottom:16px"';
const H2 = 'style="font-size:1.3rem;margin:24px 0 12px;color:#c4a35a"';
const UL = 'style="padding-left:20px;color:#ccc;margin-bottom:24px"';
const LI = 'style="margin-bottom:8px"';

const guides = [
  {
    slug: 'gba-cheat-codes-action-replay-gameshark',
    title: 'GBA Cheat Codes: Action Replay & Gameshark Guide (2026)',
    desc: 'GBA cheat codes guide: Action Replay, Gameshark, Pokemon rare candy, walk through walls. How cheats work in browser emulators.',
    date: '2026-09-21',
    category: 'Guides',
    body: `<main style="max-width:800px;margin:0 auto;padding:24px">\n  <a href="/blog" style="color:#c4a35a;text-decoration:none;font-size:14px">← Back to Blog</a>\n  <span style="color:#555;font-size:12px;margin-left:12px">2026-09-21</span>\n\n  <h1 style="font-size:2rem;margin:16px 0 8px">GBA Cheat Codes: Action Replay & Gameshark Guide (2026)</h1>\n  <p style="color:#aaa;margin-bottom:24px">How GBA cheat codes work, the most useful Pokemon codes, and what browser emulators support.</p>\n\n  <p ${P}>Stuck on the Elite Four? Want a level 100 Rayquaza before the first gym? GBA cheat codes — Action Replay and Gameshark — make it possible. Here is how they work and how to use them on <a href="/" ${A}>EggerMath</a>.</p>\n\n  <h2 ${H2}>Action Replay vs Gameshark: What Is the Difference?</h2>\n  <p ${P}>Both devices patch game memory while it runs. Gameshark codes are older raw memory writes (e.g. 030055C4:0064). Action Replay v3+ codes are encrypted and more powerful — walk-through-walls, shiny starters, complete Pokedex in one line. For <a href="/pokemon-emerald" ${A}>Pokemon Emerald</a>, Action Replay codes are the standard everyone shares.</p>\n\n  <h2 ${H2}>The Most Useful Pokemon Emerald Codes</h2>\n  <ul ${UL}>\n    <li ${LI}><strong style="color:#c4a35a">Rare Candy (PC slot 1):</strong> 82005274 0044 — stock up then train anything fast.</li>\n    <li ${LI}><strong style="color:#c4a35a">Master Balls:</strong> 82005274 0001 — never lose a legendary again.</li>\n    <li ${LI}><strong style="color:#c4a35a">Walk through walls:</strong> 7881A409 E2026E0C — explore unfinished maps and reach event islands.</li>\n    <li ${LI}><strong style="color:#c4a35a">Shiny starter:</strong> 1670047D 1501006C — gold, silver and sparkling from the first rival fight.</li>\n  </ul>\n\n  <h2 ${H2}>Do Cheats Work in Browser Emulators?</h2>\n  <p ${P}>mGBA — the core behind EggerMath — supports cheat files natively on desktop, but browser builds vary. The reliable path in-browser: play normally and use <a href="/blog/how-to-save-gba-progress" ${A}>save states (F5/F9)</a> as your safety net instead. Save before a legendary, throw balls freely, reload if it faints — same result, zero codes needed. For full code support, see our <a href="/blog/mgba-vs-visualboyadvance" ${A}>mGBA vs VisualBoyAdvance comparison</a> for the desktop route.</p>\n\n  <h2 ${H2}>Will Cheats Break My Save?</h2>\n  <p ${P}>Bad eggs and corrupted boxes come from stacking conflicting codes (especially walk-through-walls + event triggers). Rule of thumb: enable one code at a time, save with F5 before activating anything, and never save the game with a walk-through-walls code active. See <a href="/blog/best-gba-games-2026" ${A}>the best GBA games of 2026</a> for what to play once you are powered up.</p>\n</main>`,
    relatedPosts: [
      { slug: 'how-to-save-gba-progress', title: 'How to Save GBA Progress' },
      { slug: 'mgba-vs-visualboyadvance', title: 'mGBA vs VisualBoyAdvance' },
      { slug: 'best-gba-games-2026', title: 'Best GBA Games 2026' },
    ],
    relatedGames: [
      { slug: 'pokemon-emerald', title: 'Pokemon Emerald' },
      { slug: 'pokemon-firered', title: 'Pokemon FireRed' },
      { slug: 'metroid-fusion', title: 'Metroid Fusion' },
    ],
  },
  {
    slug: 'play-pokemon-games-online-order',
    title: 'Every Pokemon Game Online: What Order to Play Them In',
    desc: 'All Pokemon GBA, GBC and GB games in order: release vs chronological, where to start, Nuzlocke picks. Play free in your browser.',
    date: '2026-09-21',
    category: 'Guides',
    body: `<main style="max-width:800px;margin:0 auto;padding:24px">\n  <a href="/blog" style="color:#c4a35a;text-decoration:none;font-size:14px">← Back to Blog</a>\n  <span style="color:#555;font-size:12px;margin-left:12px">2026-09-21</span>\n\n  <h1 style="font-size:2rem;margin:16px 0 8px">Every Pokemon Game Online: What Order to Play Them In</h1>\n  <p style="color:#aaa;margin-bottom:24px">All 12 Pokemon games on EggerMath in release and story order — plus the best starting point and Nuzlocke picks.</p>\n\n  <p ${P}><a href="/" ${A}>EggerMath</a> hosts 12 Pokemon games across GB, GBC and GBA. Here is the definitive play order, whether you want history or story.</p>\n\n  <h2 ${H2}>Release Order (Recommended for First-Timers)</h2>\n  <ul ${UL}>\n    <li ${LI}><a href="/pokemon-yellow" ${A}>Pokemon Yellow</a> (GB, 1998) — Pikachu follows you; the anime season as a game.</li>\n    <li ${LI}><a href="/pokemon-gold" ${A}>Pokemon Gold</a> / <a href="/pokemon-silver" ${A}>Silver</a> (GBC, 1999) — Johto plus all of Kanto; 16 badges.</li>\n    <li ${LI}><a href="/pokemon-crystal" ${A}>Pokemon Crystal</a> (GBC, 2000) — the definitive Johto with Suicune plot.</li>\n    <li ${LI}><a href="/pokemon-ruby" ${A}>Pokemon Ruby</a> / <a href="/pokemon-sapphire" ${A}>Sapphire</a> (GBA, 2002) — Hoenn, abilities, double battles.</li>\n    <li ${LI}><a href="/pokemon-firered" ${A}>Pokemon FireRed</a> (GBA, 2004) — the Kanto remake done right.</li>\n    <li ${LI}><a href="/pokemon-emerald" ${A}>Pokemon Emerald</a> (GBA, 2004) — the peak: Battle Frontier, both box legendaries.</li>\n  </ul>\n\n  <h2 ${H2}>Where Should a Beginner Start?</h2>\n  <p ${P}><a href="/pokemon-emerald" ${A}>Pokemon Emerald</a>. Modern mechanics, best post-game, zero friction. Purists start at Yellow; everyone else starts at Emerald. Full breakdown in <a href="/blog/pokemon-games-online" ${A}>all Pokemon games online</a>.</p>\n\n  <h2 ${H2}>Best Nuzlocke Picks</h2>\n  <p ${P}>Emerald for the classic ruleset, Crystal for old-school brutality. Read the full rules in our <a href="/blog/pokemon-emerald-nuzlocke-guide" ${A}>Emerald Nuzlocke guide</a>, and check <a href="/blog/play-pokemon-emerald-online-free" ${A}>how to play Emerald free</a> first.</p>\n</main>`,
    relatedPosts: [
      { slug: 'pokemon-games-online', title: 'All Pokemon Games Online' },
      { slug: 'pokemon-emerald-nuzlocke-guide', title: 'Pokemon Emerald Nuzlocke Guide' },
      { slug: 'play-pokemon-emerald-online-free', title: 'Play Pokemon Emerald Online Free' },
    ],
    relatedGames: [
      { slug: 'pokemon-emerald', title: 'Pokemon Emerald' },
      { slug: 'pokemon-crystal', title: 'Pokemon Crystal' },
      { slug: 'pokemon-yellow', title: 'Pokemon Yellow' },
    ],
  },
  {
    slug: 'gba-link-cable-trading-multiplayer-guide',
    title: 'GBA Link Cable & Trading Guide: Multiplayer on Emulator',
    desc: 'GBA link cable explained: Pokemon trading, Mario Kart multiplayer, what works in browser emulators plus workarounds. Full guide.',
    date: '2026-09-21',
    category: 'Guides',
    body: `<main style="max-width:800px;margin:0 auto;padding:24px">\n  <a href="/blog" style="color:#c4a35a;text-decoration:none;font-size:14px">← Back to Blog</a>\n  <span style="color:#555;font-size:12px;margin-left:12px">2026-09-21</span>\n\n  <h1 style="font-size:2rem;margin:16px 0 8px">GBA Link Cable & Trading Guide: Multiplayer on Emulator</h1>\n  <p style="color:#aaa;margin-bottom:24px">How the GBA link cable worked, which games need it, and what browser players can do instead.</p>\n\n  <p ${P}>The purple link cable was the GBA's social network — trading Kadabra for Alakazam, racing <a href="/mario-kart-super-circuit" ${A}>Mario Kart</a> against the kid next door. Here is what it did and how to handle it on <a href="/" ${A}>EggerMath</a>.</p>\n\n  <h2 ${H2}>What Actually Needed the Link Cable?</h2>\n  <ul ${UL}>\n    <li ${LI}><strong style="color:#c4a35a">Pokemon trading & battling</strong> (<a href="/pokemon-emerald" ${A}>Emerald</a>, <a href="/pokemon-firered" ${A}>FireRed</a>) — version exclusives and trade evolutions.</li>\n    <li ${LI}><strong style="color:#c4a35a">Mario Kart: Super Circuit</strong> — 4-player Grand Prix with one cart per player.</li>\n    <li ${LI}><strong style="color:#c4a35a">Kirby & the Amazing Mirror</strong> — co-op through the Mirror World.</li>\n    <li ${LI}><strong style="color:#c4a35a">Single-cart multiplayer</strong> — one game shared levels to other GBAs wirelessly (no cable needed).</li>\n  </ul>\n\n  <h2 ${H2}>Does Link Cable Work in Browser Emulators?</h2>\n  <p ${P}>Not yet in-browser — link play needs two synced emulator instances, which desktop cores like mGBA and VBA-M support but WASM builds generally do not. Workarounds: trade evolutions can be earned via <a href="/blog/gba-cheat-codes-action-replay-gameshark" ${A}>cheat codes</a>, and version exclusives exist across our full <a href="/blog/pokemon-games-online" ${A}>Pokemon library</a> — play both sides yourself. Learn the basics in <a href="/blog/how-to-play-gba-games-browser" ${A}>how to play GBA games in your browser</a>.</p>\n\n  <h2 ${H2}>Trading With Yourself: The Practical Method</h2>\n  <p ${P}>Open <a href="/pokemon-firered" ${A}>FireRed</a> in one tab and <a href="/pokemon-leafgreen" ${A}>LeafGreen</a> in another — version exclusives are one click apart. Use <a href="/blog/how-to-save-gba-progress" ${A}>save states</a> (F5/F9) to protect both sides before any risky trade-evolution experiment.</p>\n</main>`,
    relatedPosts: [
      { slug: 'how-to-play-gba-games-browser', title: 'How to Play GBA Games in Browser' },
      { slug: 'gba-cheat-codes-action-replay-gameshark', title: 'GBA Cheat Codes Guide' },
      { slug: 'why-browser-emulation-is-the-future', title: 'Why Browser Emulation Is the Future' },
    ],
    relatedGames: [
      { slug: 'pokemon-emerald', title: 'Pokemon Emerald' },
      { slug: 'pokemon-firered', title: 'Pokemon FireRed' },
      { slug: 'mario-kart-super-circuit', title: 'Mario Kart Super Circuit' },
    ],
  },
];

for (const g of guides) {
  if (posts.some(p => p.slug === g.slug)) { console.log('SKIP (exists): ' + g.slug); continue; }
  posts.unshift(g);
  console.log('ADD: ' + g.slug);
}

const out = `// Auto-generated by scripts/extract-blog-data.cjs — do not edit manually
// To add a new blog post, create the .astro file and re-run: node scripts/extract-blog-data.cjs
// NOTE: source .astro files were removed; blog-posts.js is now the source of truth.
// New posts appended by scripts/add-guides.cjs. DO NOT run extract-blog-data.cjs (it aborts on empty source dir).

export const blogPosts = ${JSON.stringify(posts, null, 2)};
`;
fs.writeFileSync(file, out, 'utf8');
console.log('Total posts: ' + posts.length);
