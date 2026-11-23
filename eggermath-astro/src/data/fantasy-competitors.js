// Fantasy character generator competitor data.
// Source of truth for /character-generators/*, /fantasy-character-maker and /ai-character-generator.
// Limits and pricing change often: every page tells readers to check the official site.

export const CHAT_URL = 'https://perchance.org/unlimited-ai-character-chat';

export const fantasyCompetitors = [
  {
    slug: 'char-gen',
    name: 'CharGen',
    domain: 'char-gen.com',
    url: 'https://char-gen.com',
    category: 'Character art + tabletop toolkit',
    tagline: 'AI character art built around tabletop roleplay',
    bestFor: 'D&D and VTT players who need portraits, full-body art and tokens for the same character.',
    notFor: 'Chatting in character, or carrying a story across many sessions.',
    pricing: 'Free tier with a paid Gold credit plan.',
    facts: [
      ['Output', 'Portraits, full-body art and VTT tokens'],
      ['Input', 'A one-sentence prompt or an existing character sheet'],
      ['Extras', 'Roleplay notes and stats kept beside the art'],
      ['Mobile', 'Companion app for use during a session'],
    ],
    intro: [
      'CharGen is the most explicitly tabletop-oriented tool in this list. Instead of stopping at a picture, it keeps the picture next to the notes and stats you need at the table, and it can produce a matching token for a virtual tabletop.',
      'That makes it a good fit for a Dungeon Master preparing a session. It is a weaker fit for someone who wants to talk to the character afterwards, because the product is organised around the art and the sheet rather than around a conversation.',
    ],
    strengths: [
      ['Token-ready art', 'Portraits are framed for VTT use, which saves a cropping step before a session.'],
      ['Sheet-aware input', 'You can start from a character you already built instead of retyping a description.'],
      ['Everything in one place', 'Art, notes and stats sit together, so the character does not live in three different apps.'],
    ],
    limits: [
      ['No chat', 'There is no in-character conversation layer: you get the character, not the voice.'],
      ['Credit-based', 'Art generation runs on a credit system, so a large cast costs more than a single hero.'],
      ['Art-first framing', 'Story, memory and continuity are outside what the product is designed for.'],
    ],
    steps: [
      'Describe the character in one sentence, or bring an existing sheet.',
      'Generate a portrait, then a token if the table needs one.',
      'Save the notes and stats next to the art for session day.',
    ],
    verdict:
      'Pick CharGen when the deliverable is a character sheet and a token. If the next step after creation is a conversation, plan for a separate chat tool.',
    faq: [
      {
        q: 'Is CharGen free?',
        a: 'There is a free tier and a paid Gold credit plan. Free credits are limited, so check the current allowance on the site before relying on it for a whole campaign.',
      },
      {
        q: 'Can CharGen write a character personality?',
        a: 'It can generate character ideas and art. The product is built around tabletop art and sheets, not around long-form roleplay writing or chat.',
      },
      {
        q: 'Does it export VTT tokens?',
        a: 'Token-ready output is one of its main selling points, alongside portraits and full-body art. Confirm the exact export options on the site.',
      },
      {
        q: 'What is the closest alternative for chatting with the character?',
        a: 'A text-first character chat such as the one on this site. Create the same character there, paste the description, and the conversation keeps the memory instead of the sheet.',
      },
    ],
  },
  {
    slug: 'hotpot-ai',
    name: 'Hotpot.ai',
    domain: 'hotpot.ai',
    url: 'https://hotpot.ai/fantasy-character-generator',
    category: 'AI image generator suite',
    tagline: 'One fantasy generator inside a large AI image toolbox',
    bestFor: 'Quick fantasy portraits using ready-made presets, with no account needed to try.',
    notFor: 'Roleplay, dialogue or characters that need to remember earlier scenes.',
    pricing: 'Free previews with paid credit packs for full-resolution output.',
    facts: [
      ['Output', 'Fantasy portraits and character art'],
      ['Presets', 'Style templates for heroes, villains and creatures'],
      ['Extras', 'Background removal, upscaling, headshots'],
      ['Breadth', 'The same suite covers logos, product photos and game assets'],
    ],
    intro: [
      'Hotpot.ai is a general AI image suite, and the fantasy character generator is one entry in a long menu. The advantage is convenience: you get a prompt box, a handful of presets and adjacent tools like background removal without leaving the site.',
      'The trade-off is depth. There is no character sheet, no memory and no conversation. You get an image, and then you take it somewhere else if the character is going to do anything.',
    ],
    strengths: [
      ['Low friction', 'The generator is easy to try, and presets cover the common fantasy archetypes.'],
      ['Useful neighbours', 'Upscaling and background removal are one click away when an image is nearly right.'],
      ['Predictable output', 'Presets keep the style consistent across a set of characters.'],
    ],
    limits: [
      ['Image only', 'No personality text, no greeting, no chat.'],
      ['Credits', 'Full-resolution output is credit-based, and free previews are watermarked or limited.'],
      ['Generic presets', 'Style templates help consistency but push every character toward the same look.'],
    ],
    steps: [
      'Choose the fantasy character preset.',
      'Describe species, class and equipment in the prompt.',
      'Generate, upscale, and remove the background if you need a token.',
    ],
    verdict:
      'A sensible first stop when the only goal is a picture. It is not a character maker in the story sense, so the art will need a second home.',
    faq: [
      {
        q: 'Is Hotpot.ai free for fantasy characters?',
        a: 'You can usually preview the generator for free, while full-resolution downloads use a credit system. Limits are shown on the site and can change.',
      },
      {
        q: 'Can I use the art commercially?',
        a: 'Commercial terms depend on your plan, so read the licence on the site before publishing. This applies to every image tool in this list.',
      },
      {
        q: 'Does Hotpot store my characters?',
        a: 'It stores generated images in your account or browser session. It does not build a personality, backstory or memory for the character.',
      },
      {
        q: 'What should I use after generating the portrait?',
        a: 'A character chat if you want the character to speak and remember scenes. Paste the same description there so the look and the voice match.',
      },
    ],
  },
  {
    slug: 'imagine-art',
    name: 'ImagineArt',
    domain: 'imagine.art',
    url: 'https://imagine.art/features/ai-fantasy-character-generator',
    category: 'AI image and design platform',
    tagline: 'Style-heavy fantasy art with a design workspace attached',
    bestFor: 'Artists iterating on a look across several models and styles.',
    notFor: 'Anyone who wants a ready personality and an opening line.',
    pricing: 'Free credits with subscription tiers for higher volume.',
    facts: [
      ['Output', 'Character portraits, concept art, illustrated scenes'],
      ['Control', 'Style presets, aspect ratios, model choice'],
      ['Extras', 'Editing tools and template-based layouts'],
      ['Scale', 'Batches for building a whole cast'],
    ],
    intro: [
      'ImagineArt leans toward visual exploration. The fantasy character generator sits beside multiple models and editing tools, so the workflow is generate, compare, refine, then compose the result into a layout.',
      'It is a strong choice for a writer who already knows what the character looks like and wants to see several interpretations. It does not produce the part that talks.',
    ],
    strengths: [
      ['Style range', 'Several models and presets make it easy to move from painterly to anime-adjacent looks.'],
      ['Batch thinking', 'Generating variations is quick, which suits building a cast.'],
      ['Editing nearby', 'Small fixes do not require exporting to another editor.'],
    ],
    limits: [
      ['Credit fatigue', 'Exploring styles burns credits faster than generating one final image.'],
      ['No text layer', 'Personality, greeting and memory are not part of the product.'],
      ['Choice overload', 'The number of models and settings slows down anyone who just wants one portrait.'],
    ],
    steps: [
      'Open the fantasy character generator and pick a style.',
      'Describe the character, then generate several variations.',
      'Refine the best result and export it for your story or sheet.',
    ],
    verdict:
      'Best for the visual half of character creation. Pair it with a text tool if the character needs to speak.',
    faq: [
      {
        q: 'Is ImagineArt good for fantasy character design?',
        a: 'It is strongest at style exploration and concept art. For a finished, chat-ready character you still need to write the personality and greeting somewhere else.',
      },
      {
        q: 'Does ImagineArt have a free plan?',
        a: 'There is a free credit allowance and paid subscription tiers. The allowance and watermark rules change, so check the pricing page.',
      },
      {
        q: 'Can it generate a whole party?',
        a: 'Yes, in the sense that you can generate many images. It will not keep those characters consistent in a story or remember their relationships.',
      },
      {
        q: 'What is the text-first alternative?',
        a: 'A character-chat product where creation is writing, not rendering. You describe the character in plain language and it answers in character immediately.',
      },
    ],
  },
  {
    slug: 'phot-ai',
    name: 'Phot.AI',
    domain: 'phot.ai',
    url: 'https://phot.ai/ai-fantasy-character-creator',
    category: 'AI photo and portrait editing',
    tagline: 'Turn a photo into a fantasy portrait',
    bestFor: 'Cosplay, profile pictures and photo-to-fantasy transformations.',
    notFor: 'Original characters with no source photo.',
    pricing: 'Free tools plus paid plans for higher resolution and volume.',
    facts: [
      ['Output', 'Fantasy portraits derived from a photo'],
      ['Input', 'A selfie or reference photo plus a prompt'],
      ['Extras', 'Retouching, background changes, upscaling'],
      ['Strength', 'Keeping a likeness while changing the setting'],
    ],
    intro: [
      'Phot.AI is a photo tool first. Its fantasy character creator is aimed at turning a real face into an elf, a knight or a sorcerer while keeping the person recognisable.',
      'If you already have a reference photo, that is genuinely useful. If the character only exists in your head, a text-to-image generator is a better starting point.',
    ],
    strengths: [
      ['Likeness', 'It preserves facial features better than a pure prompt-to-image tool.'],
      ['Fast transformations', 'One photo plus a style is often enough for a usable result.'],
      ['Editing chain', 'Retouching and background swaps live in the same product.'],
    ],
    limits: [
      ['Photo dependency', 'Results are weakest when there is no good source photo.'],
      ['Portrait-shaped', 'Full-body character design is not the focus.'],
      ['No roleplay layer', 'There is no personality, greeting or chat built on top.'],
    ],
    steps: [
      'Upload a clear, well-lit photo.',
      'Choose the fantasy style and describe the costume or setting.',
      'Generate, then retouch the result before export.',
    ],
    verdict:
      'The right tool when the character is you in a costume. For an invented character, start with a prompt-based generator instead.',
    faq: [
      {
        q: 'Can Phot.AI create a character without a photo?',
        a: 'The fantasy tool is built around photo input. Without a photo you lose its main advantage, and a text-to-image generator will give you more freedom.',
      },
      {
        q: 'Is the output good enough for a profile picture?',
        a: 'Usually yes at the resolutions on the paid plans. Check the free-tier resolution and watermark before relying on it.',
      },
      {
        q: 'Can I choose the fantasy race or class?',
        a: 'Style and prompt controls cover common fantasy looks. Exact options are listed on the product page and change over time.',
      },
      {
        q: 'How do I add a personality to the portrait?',
        a: 'Write it separately, or create the character in a chat tool where the description and greeting are part of the same record.',
      },
    ],
  },
  {
    slug: 'nightcafe',
    name: 'NightCafe',
    domain: 'nightcafe.studio',
    url: 'https://creator.nightcafe.studio/tools/fantasy-character-generator',
    category: 'AI art community',
    tagline: 'A fantasy character template inside a social art platform',
    bestFor: 'People who enjoy daily challenges, galleries and sharing art with a community.',
    notFor: 'Private story work or chat.',
    pricing: 'Free daily credits with paid credit bundles.',
    facts: [
      ['Output', 'Fantasy character art in several models'],
      ['Community', 'Public gallery, challenges, likes and comments'],
      ['Extras', 'Print options and style templates'],
      ['Model choice', 'Multiple art models with different aesthetics'],
    ],
    intro: [
      'NightCafe is as much a community as a generator. The fantasy character template is a shortcut into that ecosystem: you fill in the template, pick a model and publish the result to a gallery.',
      'That social layer is the product. If you want a private character for a story, the public gallery model is the wrong shape, and the tool stops at the image in any case.',
    ],
    strengths: [
      ['Daily free credits', 'A small allowance resets daily, which keeps casual use free.'],
      ['Style variety', 'Different models produce noticeably different fantasy looks.'],
      ['Feedback loop', 'Public challenges are a quick way to improve prompts.'],
    ],
    limits: [
      ['Public by default', 'The social layer is the point, which is awkward for private story characters.'],
      ['Credits run out', 'Serious iteration needs purchased credits.'],
      ['No character record', 'Nothing stores the personality, relationships or history.'],
    ],
    steps: [
      'Open the fantasy character generator template.',
      'Pick a model and fill in the subject, costume and mood.',
      'Generate, then publish or download depending on your plan.',
    ],
    verdict:
      'A fun place to make fantasy art with other people. Not a private character workspace and not a chat product.',
    faq: [
      {
        q: 'Is NightCafe free?',
        a: 'You get free credits on a schedule, and paid bundles add more. The daily amount changes, so check the site.',
      },
      {
        q: 'Are NightCafe images public?',
        a: 'The platform is built around a public gallery. You can control some visibility settings, but check them before generating anything private.',
      },
      {
        q: 'Can NightCafe write a backstory?',
        a: 'The templates help with visual prompts. Backstory and dialogue are outside the product.',
      },
      {
        q: 'What is a better fit for a private story character?',
        a: 'A text-first chat tool with local storage, where the character stays on your device and the memory belongs to you.',
      },
    ],
  },
  {
    slug: 'pixelcut',
    name: 'Pixelcut',
    domain: 'pixelcut.ai',
    url: 'https://pixelcut.ai/create/fantasy-character-generator',
    category: 'Design and photo utility',
    tagline: 'Fantasy art generation inside a product-photo editor',
    bestFor: 'Making clean character cards, banners and social images from a generated portrait.',
    notFor: 'Writing or roleplaying the character.',
    pricing: 'Free tools with a paid Pro plan.',
    facts: [
      ['Output', 'Character images plus edited composites'],
      ['Input', 'Text prompt or an uploaded image'],
      ['Extras', 'Background removal, templates, text overlays'],
      ['Orientation', 'Social and product design rather than tabletop sheets'],
    ],
    intro: [
      'Pixelcut approaches fantasy characters from the design side. The generator produces an image, and the rest of the editor is there to put that image on a background, add text and export something ready to post.',
      'That is useful for a character card or a story banner. It is not useful for the character itself.',
    ],
    strengths: [
      ['Compositing', 'Background removal and text overlays are the reason to use it.'],
      ['Templates', 'Ready-made layouts speed up character cards and thumbnails.'],
      ['Simple editor', 'No design experience required for a clean result.'],
    ],
    limits: [
      ['Shallow generator', 'Fewer character-specific controls than a dedicated art tool.'],
      ['Design-first', 'The product optimises for posts, not for narrative.'],
      ['No continuity', 'Nothing records who the character is across sessions.'],
    ],
    steps: [
      'Generate or upload the character image.',
      'Remove the background and drop it into a template.',
      'Add the name and stats, then export.',
    ],
    verdict:
      'A good finishing tool for a character card. Pair it with a stronger generator and a separate chat product.',
    faq: [
      {
        q: 'Is Pixelcut a fantasy character generator?',
        a: 'It has a fantasy character generator, but the core product is a design and photo editor. Think of the generator as one input among several.',
      },
      {
        q: 'Does Pixelcut have a free plan?',
        a: 'Yes, with limits on premium tools and exports. Check the current plan details before committing.',
      },
      {
        q: 'Can I make a D&D character sheet with it?',
        a: 'You can build the visual layout. Stats, rules text and the sheet itself still come from your ruleset or a dedicated sheet tool.',
      },
      {
        q: 'What should I use for the character voice?',
        a: 'A text-first character chat, where the personality and greeting are written rather than drawn.',
      },
    ],
  },
  {
    slug: 'canva',
    name: 'Canva',
    domain: 'canva.com',
    url: 'https://canva.com/fantasy-character-creator',
    category: 'Design platform',
    tagline: 'Fantasy character art inside the most familiar design app',
    bestFor: 'People already using Canva for covers, layouts and social posts.',
    notFor: 'Chat, memory or anything that happens after the image.',
    pricing: 'Free plan with a Pro subscription.',
    facts: [
      ['Output', 'Character art plus finished designs'],
      ['Input', 'Text prompt or Magic Media inside the editor'],
      ['Extras', 'Templates, fonts, layouts, brand kits'],
      ['Reach', 'Everything stays inside an existing Canva workspace'],
    ],
    intro: [
      'Canva is the least surprising option in this list, and that is its advantage. If your book cover, character sheet or social banner already lives in Canva, generating the character there saves a round trip.',
      'The fantasy generator itself is a thin layer over Magic Media. It is not a specialised character tool, and there is no roleplay layer at all.',
    ],
    strengths: [
      ['One workspace', 'Art and layout are in the same file.'],
      ['Beginner friendly', 'Templates make a presentable result even without design skill.'],
      ['Easy reuse', 'Character art drops straight into covers and posts.'],
    ],
    limits: [
      ['Generic fantasy output', 'Less control over character-specific details than a dedicated generator.'],
      ['Credit limits', 'Magic Media uses an allowance even on paid plans.'],
      ['No personality', 'Canva produces art and documents, not characters that answer.'],
    ],
    steps: [
      'Create a design and open Magic Media.',
      'Describe the fantasy character in the prompt field.',
      'Place the best result on a cover, sheet or banner.',
    ],
    verdict:
      'Convenient if Canva is already your workspace. Skip it if you need a character rather than a document.',
    faq: [
      {
        q: 'Can Canva generate fantasy characters for free?',
        a: 'Magic Media has a free allowance that changes by plan and region. Check the current limit in your account.',
      },
      {
        q: 'Is Canva art original?',
        a: 'AI output is generated, but licensing and commercial-use rules depend on Canva’s terms and your plan. Read them before publishing.',
      },
      {
        q: 'Can Canva write the character personality?',
        a: 'There are writing tools in Canva, but there is no character chat, no greeting and no memory tied to the character.',
      },
      {
        q: 'What is the best Canva alternative for chatting?',
        a: 'A dedicated character chat. Canva remains useful for the cover art afterwards.',
      },
    ],
  },
  {
    slug: 'mew-design',
    name: 'Mew Design',
    domain: 'mew.design',
    url: 'https://mew.design/create/ai-fantasy-character-generator',
    category: 'AI design tool',
    tagline: 'Prompt-to-portrait with pose, costume and weapon controls',
    bestFor: 'Detailed visual control over a single character reference.',
    notFor: 'Casts of characters, story continuity or chat.',
    pricing: 'Free trial credits with paid plans.',
    facts: [
      ['Output', 'Portrait and full-body character art'],
      ['Controls', 'Species, class, costume, weapons, pose, mood'],
      ['Input', 'Text or a reference image'],
      ['Orientation', 'Design-tool workflow rather than roleplay'],
    ],
    intro: [
      'Mew Design exposes more knobs than most fantasy generators: species, class, costume, weapon, pose and mood are separate controls rather than one blob of prompt text.',
      'That makes it good at getting one reference exactly right. It is not built for a story, and it does not remember anything about the character between visits.',
    ],
    strengths: [
      ['Granular controls', 'Separate fields reduce prompt guessing.'],
      ['Consistent style', 'The same settings can be reused for related characters.'],
      ['Reference input', 'An existing image can anchor the result.'],
    ],
    limits: [
      ['One character at a time', 'No cast management, relationships or history.'],
      ['Trial limits', 'Free credits are small; larger sets need a plan.'],
      ['No narrative layer', 'Personality and dialogue are not part of the output.'],
    ],
    steps: [
      'Set species, class and costume in the controls.',
      'Describe the character and generate variations.',
      'Save the settings so a related character can reuse the style.',
    ],
    verdict:
      'A strong visual reference tool. The output still needs a home where the character can speak.',
    faq: [
      {
        q: 'What makes Mew Design different from other generators?',
        a: 'The separate controls for species, costume, weapons, pose and mood. They give more repeatable results than a single free-text prompt.',
      },
      {
        q: 'Does Mew Design have a free tier?',
        a: 'There is a trial allowance and paid plans. The allowance is small if you plan to iterate a lot.',
      },
      {
        q: 'Can it create a D&D character sheet?',
        a: 'It creates the art and reference. The sheet itself comes from your ruleset or a dedicated character-sheet tool.',
      },
      {
        q: 'How do I keep the personality attached to the art?',
        a: 'Use a chat tool that stores the description, greeting and memory together, so a portrait and a voice are never separated.',
      },
    ],
  },
  {
    slug: 'summonworlds',
    name: 'Summon Worlds',
    domain: 'summonworlds.com',
    url: 'https://www.summonworlds.com/best-ai-fantasy-art-character/',
    category: 'Editorial guide',
    tagline: 'A round-up article rather than a generator',
    bestFor: 'Reading a model-by-model comparison before choosing an art tool.',
    notFor: 'Making a character right now.',
    pricing: 'Free to read.',
    facts: [
      ['Type', 'Comparison article'],
      ['Covers', 'AI art models and character-creation workflows'],
      ['Useful for', 'Understanding the 2025 model landscape'],
      ['Limitation', 'It describes tools; it does not run one'],
    ],
    intro: [
      'Summon Worlds is included here because its guide ranks for the same searches as the generators. It is a useful read if you are still deciding which art model suits a fantasy campaign.',
      'It is not a tool, so it cannot create anything. This page exists so the comparison is complete rather than because it competes on features.',
    ],
    strengths: [
      ['Model comparison', 'The article explains how different art models behave before you spend credits.'],
      ['Use-case framing', 'It separates character art from scene art, which many tool pages blur.'],
      ['Free to read', 'No account or credits needed.'],
    ],
    limits: [
      ['No hands-on output', 'Reading it will not produce a character.'],
      ['Changes with the market', 'Model recommendations age quickly.'],
      ['No chat layer', 'It covers art, not conversation or memory.'],
    ],
    steps: [
      'Read the comparison to shortlist an art model.',
      'Open the official page of the tool you chose.',
      'Generate the character, then move to a text tool for the voice.',
    ],
    verdict:
      'Worth reading before you pay for credits. Then choose a generator and, if the character needs to talk, a separate chat product.',
    faq: [
      {
        q: 'Is Summon Worlds a character generator?',
        a: 'No. It publishes guides and comparisons about AI art and character creation. The actual generation happens on the tools it discusses.',
      },
      {
        q: 'Should I read a round-up before choosing a generator?',
        a: 'Yes if you are new to AI art. Model names and strengths change quickly, so treat any round-up as a starting point, not a final answer.',
      },
      {
        q: 'What does a round-up not tell me?',
        a: 'How the free tier feels in practice, and what happens after the image is made. Both matter more than the model list.',
      },
      {
        q: 'Where do I go after reading?',
        a: 'Pick the art tool that fits your style, then choose a chat tool if the character has to speak and remember.',
      },
    ],
  },
];

export function getCompetitor(slug) {
  return fantasyCompetitors.find((c) => c.slug === slug);
}

export const fantasyHubFaq = [
  {
    q: 'What is a fantasy character maker?',
    a: 'A fantasy character maker is a tool that turns a short description into a usable character: a portrait, a personality, a backstory, or a chat persona. Some makers only generate art, some only write text, and a few do both.',
  },
  {
    q: 'Which fantasy character maker is free?',
    a: 'Most tools in this list have a free allowance: Canva, Hotpot.ai, NightCafe, Pixelcut and Phot.AI all let you try the generator before paying. The text-first chat linked from this page is free with no message cap.',
  },
  {
    q: 'Can I chat with a fantasy character I create?',
    a: 'Only if the tool has a chat layer. Art generators stop at the image. A character-chat product lets you write the description, set a greeting and then talk to the character while it remembers the scene.',
  },
  {
    q: 'Do I need an account to make a fantasy character?',
    a: 'For image tools, usually yes if you want to download or keep a history. The character chat on this site opens without an account and stores the character in your browser.',
  },
  {
    q: 'Are AI fantasy characters allowed in published fiction?',
    a: 'That depends on the tool licence and your publisher. Check the commercial-use terms of the generator you use, and keep a record of which tool produced which asset.',
  },
  {
    q: 'What is the difference between art-first and text-first character makers?',
    a: 'Art-first tools start from an image prompt and return a picture. Text-first tools start from a description and return a personality, a greeting and a conversation. If the character needs to speak, the text layer is the part that matters.',
  },
];

export const aiGeneratorFaq = [
  {
    q: 'How do I create an AI character for free?',
    a: 'Open the chat, describe the character in the message box, and the generator builds the persona and starts the scene. No account, no download and no message cap.',
  },
  {
    q: 'Can I make an anime character?',
    a: 'Yes. Ask for an anime character and describe the look, personality and setting. The generator creates the character card and opens a chat with it.',
  },
  {
    q: 'Can I make a fantasy character with a detailed backstory?',
    a: 'Yes. The more specific the description, the more detail ends up in the personality and opening scene. You can edit the character afterwards.',
  },
  {
    q: 'Does the character remember earlier scenes?',
    a: 'Each character keeps its own memory on your device. Two characters with the same name never share chats, so separate stories stay separate.',
  },
  {
    q: 'Is the AI character generator safe for younger users?',
    a: 'Explicit content is blocked for every character, and the policy overrides character instructions. Adventure, mystery and non-explicit romance work normally.',
  },
];
