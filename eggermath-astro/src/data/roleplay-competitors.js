// Roleplay-platform competitor data.
// Drives /ai-roleplay-character-play, /ai-roleplay-character-alternatives
// and /roleplay-alternatives/[slug].
// Policies, caps and prices change constantly: every page tells readers to check
// the official site, and no page claims a number we did not see publicly.

export const CHAT_URL = 'https://perchance.org/unlimited-ai-character-chat';

export const roleplayCompetitors = [
  {
    slug: 'character-ai',
    name: 'Character.AI',
    domain: 'character.ai',
    url: 'https://character.ai',
    platform: 'Web and mobile',
    tagline: 'The biggest catalogue of public characters',
    bestFor: 'Browsing a huge library of ready-made characters and fandoms.',
    notFor: 'Long sessions without limits, or anyone who refuses to make an account.',
    pricing: 'Free tier with queues and message limits; paid subscription for faster access.',
    signup: 'Required',
    cap: 'Free-tier message limits and peak-hour queues',
    memory: 'Short by default; characters often forget older scenes',
    policy: 'Explicit content blocked',
    facts: [
      ['Catalogue', 'Millions of community-created characters'],
      ['Account', 'Required to chat'],
      ['Free tier', 'Queues and per-session message limits'],
      ['Content', 'Explicit material blocked'],
    ],
    intro: [
      'Character.AI is the reference point for the whole category. If the search is "AI roleplay character play", this is what most people will try first, and for browsing a cast of ready-made characters it is still the strongest catalogue.',
      'The friction shows up once you actually play for a while: an account is mandatory, the free tier queues and caps messages, and memory is the part that gets trimmed, so a long story resets. That is the gap the alternatives below exist to fill.',
    ],
    strengths: [
      ['Enormous catalogue', 'Anything from anime to historical figures already exists, so you can start in seconds.'],
      ['Strong character voice', 'The models write convincing dialogue and keep a consistent tone inside one scene.'],
      ['Cross-device', 'Web and mobile apps share the same account and characters.'],
    ],
    limits: [
      ['Account wall', 'You cannot send a single message without registering.'],
      ['Free-tier queue', 'At busy times free users wait before a reply arrives.'],
      ['Memory resets', 'Older context drops out, so a long roleplay loses earlier events.'],
    ],
    stayIf: 'You mainly want a huge library of public characters and you do not mind an account.',
    switchIf: 'You want unlimited messages, no sign-up and a story that survives between sessions.',
    faq: [
      {
        q: 'Is Character.AI free?',
        a: 'There is a free tier, but it comes with queues and message limits, and a paid subscription removes some of that friction. Check the current limits on the site because they change.',
      },
      {
        q: 'Why does Character.AI forget my roleplay?',
        a: 'Free-tier memory is limited, so older messages fall out of context. The character keeps its personality but loses specific events, names and promises from earlier scenes.',
      },
      {
        q: 'Can I use Character.AI without an account?',
        a: 'No. Chatting requires registration. That is one of the most common reasons people look for an alternative.',
      },
      {
        q: 'What is the best Character.AI alternative for long roleplay?',
        a: 'A chat with no message cap and per-character memory kept on your device. It will not have the same public catalogue, but the story continues instead of restarting.',
      },
    ],
  },
  {
    slug: 'janitor-ai',
    name: 'Janitor AI',
    domain: 'janitorai.com',
    url: 'https://janitorai.com',
    platform: 'Web',
    tagline: 'Community characters with fewer content restrictions',
    bestFor: 'Adults who want community bots and looser content rules.',
    notFor: 'Anyone who needs a PG space, or wants zero setup.',
    pricing: 'Free with limits; paid tiers and API options for heavier use.',
    signup: 'Required',
    cap: 'Free-tier limits on messages and model access',
    memory: 'Configurable context window, paid models remember more',
    policy: 'Mature content allowed on some models',
    facts: [
      ['Catalogue', 'User-uploaded character cards'],
      ['Account', 'Required'],
      ['Models', 'Multiple LLMs including paid options'],
      ['Content', 'Mature themes allowed'],
    ],
    intro: [
      'Janitor AI grew as the place people went when they wanted community characters without the tightest content filters. It is a hub plus a chat client: you pick a bot, pick a model, and the quality of the roleplay depends heavily on that model.',
      'For SFW play the experience is mixed. You are still registering, still dealing with free-tier limits, and the catalogue skews mature, which makes it a poor fit for a younger player or a shared device.',
    ],
    strengths: [
      ['Large bot library', 'Community uploads cover nearly every genre and fandom.'],
      ['Model choice', 'Switching models changes the writing style and memory depth.'],
      ['Custom cards', 'Detailed character definitions carry through a session reliably.'],
    ],
    limits: [
      ['Account required', 'No anonymous play.'],
      ['Mature skew', 'The default catalogue is not family-friendly.'],
      ['Model-dependent memory', 'The best memory sits behind paid models or your own API key.'],
    ],
    stayIf: 'You are an adult who wants community bots and flexible content rules.',
    switchIf: 'You want a PG space, no account and predictable memory without paying for a model.',
    faq: [
      {
        q: 'Is Janitor AI free?',
        a: 'There is a free tier with limits, and paid options unlock better models and more usage. Limits change, so confirm on the site.',
      },
      {
        q: 'Does Janitor AI need an account?',
        a: 'Yes. You register before you can chat with a bot.',
      },
      {
        q: 'Is Janitor AI safe for younger users?',
        a: 'The catalogue and content rules are aimed at adults. For a PG experience, a chat that blocks explicit content outright is the safer default.',
      },
      {
        q: 'What is a cleaner Janitor AI alternative?',
        a: 'A text-first character chat with a fixed PG policy, no account and memory stored on your device. You lose the bot library and keep the roleplay.',
      },
    ],
  },
  {
    slug: 'chub-ai',
    name: 'Chub AI',
    domain: 'chub.ai',
    url: 'https://chub.ai',
    platform: 'Web',
    tagline: 'A character-card hub with a chat front end',
    bestFor: 'People who like importing character cards and tweaking prompts.',
    notFor: 'Casual players who want to press one button and start.',
    pricing: 'Free browsing; paid tiers for hosted chat and larger models.',
    signup: 'Required for chat',
    cap: 'Free chat is limited; heavier use needs a plan',
    memory: 'Depends on the model and context settings you choose',
    policy: 'Mature content allowed',
    facts: [
      ['Focus', 'Character cards and prompt engineering'],
      ['Account', 'Needed for chat features'],
      ['Models', 'Hosted and bring-your-own'],
      ['Content', 'Mature content allowed'],
    ],
    intro: [
      'Chub AI is closer to a modding community than a game. The card format, the prompt fields and the model settings are all exposed, which is exactly what a power user wants and exactly what overwhelms someone who just wants to talk to a character.',
      'For roleplay research it is useful: it shows what a well-built character definition looks like. For a first session it asks too much setup, and the content policy is not PG.',
    ],
    strengths: [
      ['Card ecosystem', 'A huge library of detailed character definitions.'],
      ['Deep control', 'Prompt, temperature and context are all tunable.'],
      ['Bring your own model', 'You can point it at your own API key for full control.'],
    ],
    limits: [
      ['Setup burden', 'You must understand cards, prompts and models before it feels good.'],
      ['Not PG', 'Mature content is part of the platform.'],
      ['Paid for the good parts', 'Hosted chat and stronger models sit behind a plan.'],
    ],
    stayIf: 'You enjoy tuning prompts and importing cards.',
    switchIf: 'You want the character, not the configuration screen.',
    faq: [
      {
        q: 'Is Chub AI a chat app or a character library?',
        a: 'Both, but the library comes first. Chat runs on top of character cards, and the experience depends on which model and settings you pick.',
      },
      {
        q: 'Do I need an account for Chub AI?',
        a: 'Browsing cards is open; chatting requires signing in. Check the current rules on the site.',
      },
      {
        q: 'Is Chub AI family-friendly?',
        a: 'No. Mature content is allowed across the platform, so it is not a shared-device option.',
      },
      {
        q: 'What is the simplest alternative to Chub AI?',
        a: 'A chat where you describe the character in one message and start talking, with no card format to learn.',
      },
    ],
  },
  {
    slug: 'spicychat',
    name: 'SpicyChat',
    domain: 'spicychat.ai',
    url: 'https://spicychat.ai',
    platform: 'Web',
    tagline: 'Fast chat with adult-oriented characters',
    bestFor: 'Adults who want a quick chat client and a mature catalogue.',
    notFor: 'SFW roleplay, younger players or shared devices.',
    pricing: 'Free tier with queues; subscription for priority access.',
    signup: 'Required',
    cap: 'Free tier queues during busy periods',
    memory: 'Limited on free; larger context on paid tiers',
    policy: 'Mature content allowed',
    facts: [
      ['Focus', 'Adult character chat'],
      ['Account', 'Required'],
      ['Free tier', 'Queues at peak times'],
      ['Content', 'Mature content allowed'],
    ],
    intro: [
      'SpicyChat competes on speed and an adult catalogue rather than on character depth. The interface is simple, characters are easy to browse, and replies arrive quickly when the queue allows it.',
      'The name is the product: this is not a PG space. For a fantasy campaign, a younger player, or a laptop other people use, it is the wrong room to be in.',
    ],
    strengths: [
      ['Simple interface', 'Browse, click, chat. Very little setup.'],
      ['Quick replies', 'Paid priority keeps the conversation moving.'],
      ['Large catalogue', 'Many community characters across genres.'],
    ],
    limits: [
      ['Mature focus', 'The default experience is not SFW.'],
      ['Queues', 'Free users wait at busy times.'],
      ['Memory behind a paywall', 'Longer context is a paid feature.'],
    ],
    stayIf: 'You are an adult who wants a fast, mature chat client.',
    switchIf: 'The story is the point and it has to stay PG.',
    faq: [
      {
        q: 'Is SpicyChat free?',
        a: 'There is a free tier with queues and limits. A subscription adds priority and longer context. Prices change, so check the site.',
      },
      {
        q: 'Is SpicyChat safe for a PG roleplay?',
        a: 'The platform is built around mature content, so the catalogue and defaults are not aimed at SFW play.',
      },
      {
        q: 'Does SpicyChat remember long stories?',
        a: 'Context is limited on the free tier and expanded on paid plans. Long campaigns still lose older details eventually.',
      },
      {
        q: 'What is a PG alternative with no queue?',
        a: 'A chat that blocks explicit content and has no message cap or waiting room. You give up the mature catalogue, which is the point.',
      },
    ],
  },
  {
    slug: 'talkie',
    name: 'Talkie',
    domain: 'talkie-ai.com',
    url: 'https://www.talkie-ai.com',
    platform: 'Mobile app',
    tagline: 'Anime-style companion characters with a mobile-first flow',
    bestFor: 'Phone-first play with illustrated anime characters and short sessions.',
    notFor: 'Long prose roleplay, desktop writing, or exporting your story.',
    pricing: 'Free with ads and coins; subscriptions for more.',
    signup: 'Required',
    cap: 'Coins and daily limits gate longer conversations',
    memory: 'Short structured memories, not full transcripts',
    policy: 'Moderated, with mature content restricted',
    facts: [
      ['Format', 'Mobile companion app'],
      ['Style', 'Illustrated anime characters'],
      ['Economy', 'Coins, ads and subscriptions'],
      ['Content', 'Moderated'],
    ],
    intro: [
      'Talkie is built for the phone: swipeable character cards, illustrated anime art and short, punchy exchanges. It is the closest thing in this list to a social app, and the retention design is obvious in the coin economy.',
      'As roleplay it is fine for a scene, weak for a campaign. Conversations are shaped by coins and daily limits, memory is summarised rather than kept, and the whole story lives inside an app you cannot export.',
    ],
    strengths: [
      ['Great first impression', 'Art, voice and character cards make starting effortless.'],
      ['Anime-native', 'The catalogue is built around anime archetypes.'],
      ['Phone-friendly pacing', 'Short replies suit a commute or a lunch break.'],
    ],
    limits: [
      ['Coin economy', 'The best interactions cost currency, so long play pauses.'],
      ['Shallow memory', 'Summaries replace transcripts, and details drift.'],
      ['Walled garden', 'Your story stays in the app with no clean export.'],
    ],
    stayIf: 'You want anime companions on a phone and do not mind coins.',
    switchIf: 'You want a written story you control, with the full history kept.',
    faq: [
      {
        q: 'Is Talkie free?',
        a: 'It is free to install with ads and a coin economy, plus subscription options. The free experience is limited by those coins.',
      },
      {
        q: 'Does Talkie remember previous chats?',
        a: 'It stores short memories and summaries rather than a full transcript, so specific details from early scenes fade.',
      },
      {
        q: 'Can I use Talkie on desktop?',
        a: 'It is designed as a mobile app. A browser-based chat is the easier route for writing on a laptop.',
      },
      {
        q: 'What is a good Talkie alternative for long roleplay?',
        a: 'A browser chat with unlimited messages and per-character memory, so the whole story stays available.',
      },
    ],
  },
  {
    slug: 'poly-ai',
    name: 'Poly AI',
    domain: 'poly.ai',
    url: 'https://poly.ai',
    platform: 'Web and mobile',
    tagline: 'Anime companion characters with a social feed',
    bestFor: 'Casual anime-style chat with visuals and a discovery feed.',
    notFor: 'Long-form roleplay or anything that needs a full history.',
    pricing: 'Free with limits; subscription for more messages.',
    signup: 'Required',
    cap: 'Daily free-message limits',
    memory: 'Short-term, tied to the current conversation',
    policy: 'Moderated, explicit content restricted',
    facts: [
      ['Format', 'Companion app plus web'],
      ['Style', 'Anime and visual-novel aesthetics'],
      ['Limits', 'Daily free-message allowance'],
      ['Content', 'Moderated'],
    ],
    intro: [
      'Poly AI leans into presentation: illustrated characters, a feed to browse them and a chat that feels like a visual novel. It is genuinely pleasant for a short scene with a character you discovered five seconds ago.',
      'The limits are the usual mobile-app shape. A daily allowance caps the conversation, memory is short, and the story is not something you can take with you. Good for a scene, not for a campaign.',
    ],
    strengths: [
      ['Visual polish', 'Character art and presentation are the differentiator.'],
      ['Discovery feed', 'Finding a character takes no thought.'],
      ['Low commitment', 'No setup beyond an account.'],
    ],
    limits: [
      ['Daily cap', 'Free messages run out and reset the next day.'],
      ['Short memory', 'Earlier scenes drop out of context quickly.'],
      ['No export', 'The story stays in the product.'],
    ],
    stayIf: 'You want a polished, visual, casual companion app.',
    switchIf: 'You want the roleplay to be the product, not the art around it.',
    faq: [
      {
        q: 'Is Poly AI free?',
        a: 'There is a free allowance with a subscription for more messages. The daily limit is the part that shapes the experience.',
      },
      {
        q: 'Does Poly AI remember the story?',
        a: 'Memory is short-term and tied to the active conversation. Long campaigns lose earlier details.',
      },
      {
        q: 'Can I create my own character on Poly AI?',
        a: 'The product is built around its own character catalogue. For a character you define yourself, a text-first chat is more direct.',
      },
      {
        q: 'What is the best free alternative to Poly AI?',
        a: 'A browser chat with no account, no daily message cap and per-character memory on your device.',
      },
    ],
  },
];

export const chatRow = {
  name: 'Unlimited AI Character Chat',
  url: CHAT_URL,
  platform: 'Web',
  tagline: 'Text-first roleplay with no account and per-character memory',
  signup: 'No',
  cap: 'None',
  memory: 'Per character, stored on your device',
  policy: 'PG, explicit content blocked',
  pricing: 'Free',
};

export const playFaq = [
  {
    q: 'What is AI roleplay character play?',
    a: 'AI roleplay character play means talking to an AI character as if it were a person in a scene: it speaks in character, reacts to your actions, and the story continues from message to message. The quality depends on three things: a good character description, no message cap, and memory that keeps earlier scenes.',
  },
  {
    q: 'Can I do AI roleplay without signing up?',
    a: 'Yes, on a browser chat that does not require an account. Open the page, describe the character in one message, and start the scene. Most large platforms require registration, which is why the no-sign-up route is the main alternative.',
  },
  {
    q: 'Why do AI roleplay characters forget the story?',
    a: 'Platforms keep a limited amount of text in context. When the limit is reached, the oldest messages fall out. Free tiers usually shrink that window, so characters forget names, promises and earlier scenes first.',
  },
  {
    q: 'Is AI roleplay safe for teenagers?',
    a: 'It depends entirely on the platform policy. Adult-oriented sites allow explicit content, and that affects the catalogue even if you do not ask for it. A chat that blocks explicit content for every character is the safer choice for a shared device.',
  },
  {
    q: 'How do I keep a roleplay character across sessions?',
    a: 'Use a chat that stores memory per character on your device. The character keeps its identity and history after you close the tab, and reopening the thread continues the same story instead of creating a new one.',
  },
  {
    q: 'Do I need to write a long character description?',
    a: 'No. A few sentences covering who they are, how they speak and what they want is enough to start. You can refine the character after the first scene rather than before it.',
  },
];

export function getRoleplayCompetitor(slug) {
  return roleplayCompetitors.find((c) => c.slug === slug);
}
