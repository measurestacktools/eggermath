/**
 * HTML5 game catalog — the ONLY file needed to add a new authorized game.
 *
 * Rules (hard):
 * - Only games whose publisher embedding rights are confirmed go here.
 * - embedUrl must come from the provider's official generator — never invented.
 * - Every game needs a unique hand-written desc (<=155 chars), controls, and FAQs on its page.
 *
 * Providers:
 * - 'embed-games'  : Embed.Games / MadKidGames. No account needed; domain
 *   (eggermath.com) activated via their "Get Embed Code" generator.
 *   Pattern: https://www.madkidgames.com/full/{providerSlug}
 *   Thumbs : https://www.madkidgames.com/games/{providerSlug}/thumb_2.jpg
 * - 'playgama'     : Playgama Partners (reserved). Requires partner account +
 *   clid; per-game iframe https://playgama.com/export/game/{providerSlug}.
 *   No games wired until clid + picks are supplied — see Html5Game.astro.
 */
export const html5Providers = {
  'embed-games': {
    name: 'Embed.Games',
    site: 'https://embed.games/',
    embedPattern: 'https://www.madkidgames.com/full/{providerSlug}',
    accountRequired: false,
    notes: 'Domain eggermath.com activated via official generator. Reporting account optional.',
  },
  playgama: {
    name: 'Playgama Partners',
    site: 'https://playgama.com/partners',
    embedPattern: 'https://playgama.com/export/game/{providerSlug}',
    accountRequired: true,
    notes: 'Requires partner clid. Set PLAYGAMA_CLID / per-game tracking before wiring games.',
  },
};

export const html5Games = [
  {
    slug: 'johnny-trigger',
    title: 'Johnny Trigger',
    type: 'html5',
    provider: 'embed-games',
    providerSlug: 'johnny-trigger-action-shooter',
    embedUrl: 'https://www.madkidgames.com/full/johnny-trigger-action-shooter',
    category: 'action',
    thumbnail: 'https://www.madkidgames.com/games/johnny-trigger-action-shooter/thumb_2.jpg',
    description:
      'Play Johnny Trigger online free — stylish slow-mo stunt assassin across hundreds of levels. No download, mobile-friendly shooter.',
    controls:
      'Aim with mouse or touch, release to shoot. Time your shots while Johnny flips through the air. R restarts the level.',
    mobileSupport: true,
    year: 2020,
    developer: 'MadKidGames',
  },
  {
    slug: 'bowmasters',
    title: 'Bowmasters',
    type: 'html5',
    provider: 'embed-games',
    providerSlug: 'bowmasters-archery-shooting',
    embedUrl: 'https://www.madkidgames.com/full/bowmasters-archery-shooting',
    category: 'action',
    thumbnail: 'https://www.madkidgames.com/games/bowmasters-archery-shooting/thumb_2.jpg',
    description:
      'Play Bowmasters online free — archery duels with unlockable fighters and wild weapons. No download, works on mobile.',
    controls:
      'Drag to aim, release to fire. Judge angle and power to outshoot your rival. Touch and mouse supported.',
    mobileSupport: true,
    year: 2021,
    developer: 'MadKidGames',
  },
  {
    slug: 'crush-the-castle',
    title: 'Crush the Castle: Siege Master',
    type: 'html5',
    provider: 'embed-games',
    providerSlug: 'crush-the-castle-siege-master',
    embedUrl: 'https://www.madkidgames.com/full/crush-the-castle-siege-master',
    category: 'action',
    thumbnail: 'https://www.madkidgames.com/games/crush-the-castle-siege-master/thumb_2.jpg',
    description:
      'Play Crush the Castle Siege Master online free — trebuchet physics sieges, topple castles. No download, mobile-ready.',
    controls:
      'Drag the trebuchet arm to set angle and power, release to launch. Destroy every castle defender. Mouse and touch supported.',
    mobileSupport: true,
    year: 2021,
    developer: 'MadKidGames',
  },
];

export const html5Categories = [
  {
    slug: 'action',
    title: 'Action',
    description:
      'Play free HTML5 action and shooter games online — stunt assassins, archery duels, and castle sieges. No download, mobile-friendly.',
  },
];

export function getHtml5Game(slug) {
  return html5Games.find(g => g.slug === slug);
}

export function getHtml5ByCategory(category) {
  return html5Games.filter(g => g.category === category);
}
