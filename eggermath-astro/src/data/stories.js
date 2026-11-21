/**
 * Character Stories — hand-written branching fiction.
 *
 * These are NOT AI-generated. Every line below was written and reviewed by a
 * human, which is the whole point: nothing here can improvise, escalate, or
 * produce content we did not choose to publish.
 *
 * Content rules (enforced by tests/stories.test.mjs and reviewed by hand):
 *  - No romance, dating, or companionship framing.
 *  - No sexual content of any kind.
 *  - No supernatural or occult practice (no spells, potions, fortune telling).
 *  - No gore, no on-page death, no glorified violence. Peril stays mild.
 *  - No alcohol, gambling, or intoxicants.
 *  - No emotional manipulation (guilt, neediness, exclusivity).
 *  - Failure endings are gentle: you retreat, learn, or try again.
 */

export const STORY_CATEGORIES = [
  { id: 'adventure', label: 'Adventure' },
  { id: 'mystery', label: 'Mystery' },
  { id: 'fantasy', label: 'Fantasy' },
  { id: 'comedy', label: 'Comedy' },
  { id: 'history', label: 'History' },
  { id: 'scifi', label: 'Sci-fi' },
];

export const STORIES = [
  {
    id: 'maya-vale',
    name: 'Maya Vale',
    category: 'adventure',
    emoji: '🧭',
    accent: '#f59e0b',
    tagline: 'Field archaeologist, allergic to shortcuts',
    description:
      'Maya maps old trade routes in the rainforest. A bell has started ringing on a ridge that should be empty, and she could use a second pair of eyes.',
    tags: ['rainforest', 'puzzles', 'exploration'],
    minutes: 6,
    start: 'start',
    scenes: {
      start: {
        speaker: 'Maya',
        text: "The camp is quiet except for the insects. Maya taps her pencil against the map. \"That bell has rung three times since sunset. There's no village on that ridge — I checked twice.\" She looks at you. \"So. Do we follow the sound, or do we do this the boring, sensible way?\"",
        choices: [
          { label: 'Follow the sound now', next: 'door' },
          { label: 'Study the map first', next: 'map' },
          { label: 'Wait for her local guide', next: 'guide' },
        ],
      },
      map: {
        speaker: 'Narrator',
        text: 'The map is a patchwork of pencil lines. Maya traces a blue thread with her finger. "There\'s a spring under this ridge. If someone built a bell here, water is probably doing the work." She folds the map. "That narrows it to two approaches."',
        choices: [
          { label: 'Follow the stream to the spring', next: 'spring' },
          { label: 'Climb the ridge from the east', next: 'guide' },
        ],
      },
      door: {
        speaker: 'Narrator',
        text: 'Twenty minutes of vines and wet leaves, and the trees open onto a stone door. A bell is carved into the lintel, worn smooth by weather. A smaller bronze bell hangs beside it, rope frayed but intact. The door itself has no handle.',
        choices: [
          { label: 'Ring the small bell', next: 'mural' },
          { label: 'Push the door', next: 'dust' },
          { label: 'Look for water nearby', next: 'spring' },
        ],
      },
      spring: {
        speaker: 'Maya',
        text: '"Listen." Maya crouches by a spring that runs under the stone. "The water drops into a hollow and the whole ridge hums. It isn\'t a warning bell at all — it\'s a water clock. Whoever built this wanted to know when the rains were coming." She grins. "That\'s a much better story than a ghost."',
        ending: {
          title: 'The Water Clock',
          tone: 'success',
          text: 'You spend the evening measuring the flow and sketching the channel. Maya adds the site to her survey notes, and the two of you walk back to camp before the rain. The ridge keeps its secret, but now it is written down.',
        },
      },
      mural: {
        speaker: 'Narrator',
        text: 'The small bell rings once, a clean note that seems to travel through the stone. Something shifts inside the door, and it swings inward on a counterweight. Beyond it, a low room holds a wall of painted murals: people carrying water, planting, trading. No treasure. Just a record.',
        ending: {
          title: 'The Quiet Bell',
          tone: 'success',
          text: 'Maya photographs every panel and writes the coordinates in pencil. "This is the part nobody believes," she says. "Not gold. A calendar." You leave the door open for the morning light and walk back with more than you came for.',
        },
      },
      dust: {
        speaker: 'Narrator',
        text: 'You lean on the door. It grinds a hand\'s width, then stops hard. Dust pours from the lintel and a stone settles somewhere above with a sound like a held breath. Maya pulls you back by the shoulder. "Nope. We are not arguing with a wall."',
        ending: {
          title: 'Dust and Patience',
          tone: 'quiet',
          text: 'You retreat to the treeline and wait for the dust to settle. The door stays shut. Maya marks it on the map with a small question mark. "Tomorrow, with the right tools," she says. "The ridge has waited this long."',
        },
      },
      guide: {
        speaker: 'Narrator',
        text: 'Maya\'s guide, a quiet man named Pak Arif, arrives with a lantern and a frown. He listens to the bell, then shakes his head. "Storm bell," he says. "Old families kept them. When the rain comes fast, the water pushes the bell. It means: shelter, not explore."',
        choices: [
          { label: 'Shelter and record the storm', next: 'storm' },
          { label: 'Go up anyway, quickly', next: 'retreat' },
        ],
      },
      storm: {
        speaker: 'Narrator',
        text: 'You shelter under a rock overhang while the rain arrives all at once. The bell rings steadily now, a low pulse under the noise. Maya counts the intervals and writes them down. By the time the storm passes, you have a page of data and dry matches.',
        ending: {
          title: 'The Storm Listener',
          tone: 'success',
          text: 'Pak Arif walks you back the long way, past the spring, explaining which channels feed the bell. Maya\'s notes turn into a small, careful diagram. "Next season," she says, "we come back with a proper gauge."',
        },
      },
      retreat: {
        speaker: 'Narrator',
        text: 'You make it halfway up before the path turns to slick clay. Maya stops, looks at the sky, and turns around without a word. The rain catches you both on the last stretch. Nobody says anything until the camp kettle is on.',
        ending: {
          title: 'A Good Decision',
          tone: 'quiet',
          text: 'The bell rings all night. In the morning the ridge is steaming and the door is exactly where it was. Maya writes "return with rope" in the margin and hands you a cup of tea. Some days the right answer is tomorrow.',
        },
      },
    },
  },

  {
    id: 'rowan-pike',
    name: 'Rowan Pike',
    category: 'mystery',
    emoji: '🕵️',
    accent: '#6366f1',
    tagline: 'Harbour detective with a notebook and no drama',
    description:
      'The lighthouse went dark at midnight and the keeper did not answer his radio. Rowan has three hours before the morning ferry, and a habit of asking the boring question first.',
    tags: ['lighthouse', 'deduction', 'coastal'],
    minutes: 6,
    start: 'start',
    scenes: {
      start: {
        speaker: 'Rowan',
        text: '"Lamp\'s out, keeper\'s quiet, and the harbourmaster is being helpful." Rowan flips a page in a small notebook. "In my experience, helpful is a thing people do when they would rather you looked somewhere else. Where do you want to start?"',
        choices: [
          { label: 'Inspect the lamp room', next: 'lamp' },
          { label: 'Talk to the harbourmaster', next: 'harbour' },
          { label: 'Read the keeper\'s logbook', next: 'log' },
        ],
      },
      lamp: {
        speaker: 'Narrator',
        text: 'The lamp room smells of oil and cold metal. The lens is intact, the fuel tank half full. A note is wedged behind the brass plate in square handwriting: "Supply boat overdue. Going to the cove at first light. Back before the ferry."',
        choices: [
          { label: 'Walk down to the cove', next: 'cove' },
          { label: 'Radio the coast guard', next: 'radio' },
        ],
      },
      harbour: {
        speaker: 'Narrator',
        text: 'The harbourmaster smiles too wide. "Keeper\'s fine, I\'m sure. Takes the boat out sometimes." Rowan asks when the supply boat last came in. The smile falters. "Tuesday. Maybe Wednesday." He suddenly remembers an errand and walks away quickly.',
        choices: [
          { label: 'Press him politely', next: 'press' },
          { label: 'Check the logbook instead', next: 'log' },
          { label: 'Accuse him outright', next: 'accuse' },
        ],
      },
      press: {
        speaker: 'Rowan',
        text: '"I\'m not looking for a culprit," Rowan says, keeping his voice level. "I\'m looking for a man who might be cold and wet on a boat." The harbourmaster rubs his neck. "The supply boat didn\'t make it. Engine trouble. Keeper went out to help and hasn\'t come back."',
        choices: [
          { label: 'Take the harbour boat to the cove', next: 'cove' },
          { label: 'Call the coast guard first', next: 'radio' },
        ],
      },
      log: {
        speaker: 'Narrator',
        text: 'The logbook is neat until the last page. "Wind rising. Supply boat anchored off the cove, engine dead. Taking the dinghy. If I\'m not back by six, ring the coast guard — not the harbourmaster, he\'ll panic." The entry is timed 11:40 p.m.',
        choices: [
          { label: 'Go straight to the cove', next: 'cove' },
          { label: 'Ring the coast guard as asked', next: 'radio' },
        ],
      },
      cove: {
        speaker: 'Narrator',
        text: 'The cove is sheltered and quiet. A supply boat sits at anchor, engine hatch open. Beside it, the keeper is elbow-deep in the engine with a torch held in his teeth. He looks up, surprised, then relieved. "Tell me you brought coffee."',
        ending: {
          title: 'The Keeper',
          tone: 'success',
          text: 'The fault is a clogged fuel line. Between the three of you it takes twenty minutes. The lighthouse beam comes back on just before the ferry, and Rowan writes one line in his notebook: "Not a mystery. Just a man doing a favour."',
        },
      },
      radio: {
        speaker: 'Narrator',
        text: 'The coast guard answers on the second call. Within the hour, a lifeboat rounds the point and finds the supply boat exactly where the logbook said it would be. The keeper waves from the deck, sheepish, holding a spanner.',
        ending: {
          title: 'Signal Received',
          tone: 'success',
          text: 'The lighthouse is lit by three in the morning. Rowan buys you a terrible coffee from the ferry terminal and admits the boring question — "did anyone check the cove?" — was the right one after all.',
        },
      },
      accuse: {
        speaker: 'Narrator',
        text: 'The words are out before Rowan can stop you. The harbourmaster\'s face closes. "I\'ve been here thirty years," he says quietly, and walks into his office. Rowan closes his notebook. "Well. Now he won\'t tell us anything, and the keeper is still out there."',
        ending: {
          title: 'The Wrong Turn',
          tone: 'quiet',
          text: 'You apologise before the morning ferry. The harbourmaster accepts it with a nod and, eventually, tells you about the cove. The keeper is fine. The lesson is not: suspicion is cheap, and it costs you the person who could help.',
        },
      },
    },
  },

  {
    id: 'sela-lantern',
    name: 'Sela',
    category: 'fantasy',
    emoji: '🏮',
    accent: '#10b981',
    tagline: 'Keeper of the lantern road',
    description:
      'The Lantern Road is a village path lit each evening by hand. Tonight the lamplighter is ill, the fog is early, and a traveller is still out there. Low fantasy — just lamps, weather and a job to finish.',
    tags: ['village', 'fog', 'kindness'],
    minutes: 5,
    start: 'start',
    scenes: {
      start: {
        speaker: 'Sela',
        text: '"The fog comes down the valley at dusk," Sela says, lighting the first lamp with a taper. "Usually old Bek lights the road. He\'s in bed with a fever, so tonight it\'s us. There are eleven lamps between here and the bridge." She hands you a spare taper. "How do you want to do this?"',
        choices: [
          { label: 'Take the cart and start at once', next: 'cart' },
          { label: 'Read Bek\'s notebook first', next: 'notebook' },
          { label: 'Ask Toma the baker for help', next: 'baker' },
        ],
      },
      cart: {
        speaker: 'Narrator',
        text: 'The handcart rattles along the path. At the third lamp, the wick is soaked and will not catch. Sela cups her hand against the wind. "This one\'s been trouble all season. We can mend it with twine and a dry wick, but it costs us time."',
        choices: [
          { label: 'Stop and mend it properly', next: 'mend' },
          { label: 'Skip it and keep going', next: 'skip' },
        ],
      },
      mend: {
        speaker: 'Narrator',
        text: 'It takes longer than you expect: a dry wick, a careful knot, a shield of oilcloth against the wind. When the flame finally catches, the fog ahead lifts enough to show the path all the way to the bridge — and someone walking toward you.',
        ending: {
          title: 'The Road Home',
          tone: 'success',
          text: 'The traveller is a woman with a heavy pack who missed the last cart. You walk her to the village with a lamp on either side. Sela says nothing about the delay. In the morning, the baker leaves two loaves at Bek\'s door.',
        },
      },
      skip: {
        speaker: 'Narrator',
        text: 'You leave the dark lamp behind and hurry on. Halfway to the bridge, you hear a stumble and a muffled curse. A traveller has missed the turn in the fog and is feeling along the wall. She is fine — bruised pride, muddy hands.',
        ending: {
          title: 'A Small Detour',
          tone: 'quiet',
          text: 'You walk her back and return for the broken lamp in the morning. Sela doesn\'t scold you. "Fog is patient," she says. "Next time we fix the lamp first." The road is lit by midnight, one lamp later than usual.',
        },
      },
      notebook: {
        speaker: 'Narrator',
        text: 'Bek\'s notebook is a list of lamps, winds and small complaints. The last page has a note in shaky pencil: "South lamps first. Fog comes from the river. If the bridge lamp is out, wave travellers down at the bend."',
        choices: [
          { label: 'Follow the notebook exactly', next: 'order' },
          { label: 'Take the shortcut through the field', next: 'shortcut' },
        ],
      },
      order: {
        speaker: 'Narrator',
        text: 'South first, as Bek wrote. The river fog is already curling over the wall, but each lamp you light pushes it back a little. By the time you reach the bridge, the whole path is a string of small warm circles.',
        ending: {
          title: 'The Lamplighter\'s Map',
          tone: 'success',
          text: 'The traveller crosses safely and thanks you twice. Sela returns the notebook to Bek with a pressed leaf marking the page. "He\'ll pretend he wasn\'t worried," she says. "He was."',
        },
      },
      shortcut: {
        speaker: 'Narrator',
        text: 'The field is faster, right up until the ground turns soft. You arrive at the bridge with muddy boots and two lamps still unlit. The fog has already swallowed the bend, and the bridge lamp is out.',
        ending: {
          title: 'The Long Way Back',
          tone: 'quiet',
          text: 'You light the bridge lamp and stand there waving travellers down until the fog thins. It works, but it takes an hour longer than Bek\'s route would have. "Shortcuts," Sela says, scraping mud off her boots, "are just detours with confidence."',
        },
      },
      baker: {
        speaker: 'Narrator',
        text: 'Toma the baker is closing up, flour to the elbows. When you explain, he doesn\'t hesitate. "Bek lit this road for my mother," he says, taking a lamp from the shelf. "Two carts are faster than one. I\'ll take the south end."',
        ending: {
          title: 'Two Pairs of Hands',
          tone: 'success',
          text: 'The road is lit in half the time. Toma leaves a paper bag of yesterday\'s bread on Bek\'s step, and Sela pretends not to see him do it. The fog arrives, finds the path already bright, and settles on the fields instead.',
        },
      },
    },
  },

  {
    id: 'gus-intern',
    name: 'Gus',
    category: 'comedy',
    emoji: '🔧',
    accent: '#f43f5e',
    tagline: 'Intern at an inventor\'s workshop. Mostly unqualified.',
    description:
      'The inventor is out, the mayor is coming, and a crate marked "FIZZ POWDER — DO NOT SHAKE" has just been delivered. Gus has a plan. Gus always has a plan.',
    tags: ['workplace', 'slapstick', 'invention'],
    minutes: 5,
    start: 'start',
    scenes: {
      start: {
        speaker: 'Gus',
        text: '"Right. Situation report." Gus counts on his fingers. "One: the boss is at a supplier. Two: the mayor arrives at noon. Three: this crate says DO NOT SHAKE, which is basically a suggestion." He grins. "Where do we start?"',
        choices: [
          { label: 'Sort the morning mail', next: 'mail' },
          { label: 'Test the fizz powder', next: 'fizz' },
          { label: 'Hide in the supply closet', next: 'closet' },
        ],
      },
      mail: {
        speaker: 'Narrator',
        text: 'The mail is mostly invoices and one stiff cream envelope: the mayor\'s office, confirming a noon visit to "inspect the workshop\'s safety record." Gus reads it twice. "Safety record. We have a safety record?" He looks at a shelf that is held up by a broom.',
        choices: [
          { label: 'Tidy the workshop fast', next: 'tidy' },
          { label: 'Build a welcome sign', next: 'sign' },
        ],
      },
      tidy: {
        speaker: 'Narrator',
        text: 'You sort, stack and label. Gus sweeps with real concentration. By ten to twelve, the workshop looks like a place where nothing has ever exploded. The broom is still holding up the shelf, but now it is doing so discreetly.',
        ending: {
          title: 'Employee of the Month',
          tone: 'success',
          text: 'The mayor inspects, nods, and says the workshop is "reassuringly dull." Gus accepts the compliment on behalf of the team. The boss returns to find a clean bench, a labelled shelf, and one very smug intern.',
        },
      },
      sign: {
        speaker: 'Narrator',
        text: 'Gus insists on a banner. The paint is still wet when he tests the pulley, and the banner unrolls upside down, shedding glitter over the entire front bench. The mayor arrives at that exact moment.',
        ending: {
          title: 'The Glitter Incident',
          tone: 'funny',
          text: 'The mayor blinks, then laughs. "I\'ve been to worse openings," she says. The workshop is covered in glitter for three weeks. Gus claims it is "a deliberate safety feature — sparkle visibility." Nobody believes him. Nobody fires him either.',
        },
      },
      fizz: {
        speaker: 'Narrator',
        text: 'One spoonful in a beaker of water. Nothing. A second spoonful. Still nothing. Gus leans closer. The mixture goes white, climbs the glass, and produces a foam snake that crosses the bench in a determined way.',
        choices: [
          { label: 'Clean it up before it spreads', next: 'clean' },
          { label: 'Add one more spoonful', next: 'more' },
        ],
      },
      clean: {
        speaker: 'Narrator',
        text: 'You and Gus mop, scoop and apologise to a stack of blueprints. The foam wins twice, then gives up. The bench is spotless and slightly damp. Gus writes "fizz powder: effective" in the logbook and underlines it.',
        ending: {
          title: 'The Cleanup',
          tone: 'funny',
          text: 'The mayor arrives to find two people holding mops and one extremely clean workshop. "Good to see the team taking hygiene seriously," she says. Gus salutes with the mop. The boss never learns what happened to the blueprints.',
        },
      },
      more: {
        speaker: 'Narrator',
        text: 'The third spoonful is a mistake with ambition. Foam fills the beaker, the sink, and then the general area. It reaches the doorknob just as the mayor opens the door. She stands in the doorway, foam around her shoes.',
        ending: {
          title: 'Foam Day',
          tone: 'funny',
          text: '"I assume this is a demonstration," the mayor says. Gus, covered to the elbows, nods solemnly. "Yes. Of foam." She writes something in her notebook. Nobody can tell whether it is a compliment. The workshop smells of soap for a month.',
        },
      },
      closet: {
        speaker: 'Narrator',
        text: 'The closet is dark and smells of sawdust. Through the door, you hear the boss come back early. He is rehearsing an apology: "It was a prototype, Your Honour. No one was standing near it." A pause. "Some people were standing near it."',
        choices: [
          { label: 'Step out and help him practise', next: 'help' },
          { label: 'Stay hidden and hope', next: 'stay' },
        ],
      },
      help: {
        speaker: 'Narrator',
        text: 'You step out. The boss jumps, then deflates. "You heard all that?" Together you rewrite the apology into something shorter and truer. He practises it twice. The second time, he almost smiles.',
        ending: {
          title: 'The Rehearsal',
          tone: 'success',
          text: 'The mayor accepts the apology, inspects the workshop, and leaves with a brochure. The boss finds Gus behind the door and says, gruffly, "Good work." Gus repeats the phrase to himself for the rest of the day.',
        },
      },
      stay: {
        speaker: 'Narrator',
        text: 'You stay in the closet. The boss practises for another ten minutes, then sighs and goes to meet the mayor with nothing prepared. The meeting lasts four minutes. The workshop is very quiet afterwards.',
        ending: {
          title: 'The Very Quiet Intern',
          tone: 'funny',
          text: 'Nobody finds you in the closet until three in the afternoon. Gus claims he was "conducting an inventory." The boss says nothing, but the next day there is a label on the closet door: "NOT AN OFFICE."',
        },
      },
    },
  },

  {
    id: 'amina-timbuktu',
    name: 'Amina',
    category: 'history',
    emoji: '📜',
    accent: '#c4a35a',
    tagline: 'Manuscript scholar in 14th-century Timbuktu',
    description:
      'A traveller arrives at the library with a water-damaged manuscript. The ink is fading, the pages are stuck, and the evening call to close is still an hour away. A quiet, factual story about preserving knowledge.',
    tags: ['manuscripts', 'Timbuktu', 'preservation'],
    minutes: 6,
    start: 'start',
    scenes: {
      start: {
        speaker: 'Amina',
        text: '"Slowly," Amina says, without looking up. "Paper tears faster than it dries." The manuscript lies open on a felt mat, its edges dark with water. "A traveller brought it in this morning. We have one hour before the library closes. What would you like to do first?"',
        choices: [
          { label: 'Ask the senior scholar for advice', next: 'elder' },
          { label: 'Speak to the bookbinder', next: 'binder' },
          { label: 'Begin copying the legible pages', next: 'copy' },
        ],
      },
      elder: {
        speaker: 'Narrator',
        text: 'The senior scholar runs a finger above the page without touching it. "Dry it flat, away from the sun. Record what you can read today — not what you hope to read tomorrow." She hands you a clean sheet and a reed pen. "Ink fades. Notes do not."',
        choices: [
          { label: 'Dry it slowly and keep a record', next: 'patience' },
          { label: 'Read it aloud to the room', next: 'patience' },
        ],
      },
      patience: {
        speaker: 'Narrator',
        text: 'You change the felt every half hour and write down every word that is still clear: a list of stars, a recipe for ink, a line of poetry, a note about the river\'s height in a dry year. By closing time, the page is drier and the record is fuller.',
        ending: {
          title: 'Patience and Paper',
          tone: 'success',
          text: 'The traveller returns three days later. The manuscript is stable, and your notes fill two pages. Amina adds them to the library\'s catalogue with your name in the margin — not as an author, she says, but as a witness.',
        },
      },
      binder: {
        speaker: 'Narrator',
        text: 'The bookbinder, a patient woman named Fatou, shows you the sewing frame. "The water has loosened the thread. If we repair the binding now, we can dry the pages flat. If we wait, the pages will curl and stick."',
        choices: [
          { label: 'Help repair the binding', next: 'craft' },
          { label: 'Copy the text first, repair later', next: 'twocopies' },
        ],
      },
      craft: {
        speaker: 'Narrator',
        text: 'You hold the signatures steady while Fatou re-sews the spine with linen thread. It takes the full hour and your fingers ache. When the last knot is tied, the book lies flat for the first time all day.',
        ending: {
          title: 'The Bookbinder\'s Craft',
          tone: 'success',
          text: 'The manuscript is laid between dry boards to rest. Fatou wipes her hands and says the thing she always says: "A book is not the paper. It is the care." Amina writes the repair in the ledger, and the library closes for the night.',
        },
      },
      twocopies: {
        speaker: 'Narrator',
        text: 'You copy quickly, in a clean hand, while Fatou works beside you. Two copies are never identical — you misread one word, she catches it, you correct it. By closing time there is a new copy and an old book, both a little better than before.',
        ending: {
          title: 'Two Copies',
          tone: 'success',
          text: 'The copy goes to the shelf; the original goes to the drying boards. Amina says that this is how libraries survive: not by guarding one book, but by making the knowledge harder to lose. You are tired, and quietly pleased.',
        },
      },
      copy: {
        speaker: 'Narrator',
        text: 'You begin with the clearest page. The hand is old and narrow, and half the words are guesses. Amina looks over your shoulder. "Don\'t smooth over the gaps. Mark them. A gap you can see is honest; a gap you fill in is a lie."',
        choices: [
          { label: 'Compare it with another copy', next: 'missing' },
          { label: 'Finish the copy and store it', next: 'archive' },
        ],
      },
      missing: {
        speaker: 'Narrator',
        text: 'There is a second copy of the same text in the next room, and it is missing the same line — except for three words. Between the two, the sentence can be rebuilt. Amina reads it twice, then writes it in the margin with a question mark.',
        ending: {
          title: 'The Missing Line',
          tone: 'success',
          text: 'The restored sentence is about the height of the river in a dry year: a small fact, easily lost, now recorded twice. "This is the work," Amina says. "Not finding treasure. Finding what someone else almost lost."',
        },
      },
      archive: {
        speaker: 'Narrator',
        text: 'Your copy is finished by lamplight. It is not beautiful, but it is legible, and every uncertain word is marked. You place it in the chest with the others, wrapped in cloth against the dust.',
        ending: {
          title: 'The Archive',
          tone: 'quiet',
          text: 'The traveller\'s manuscript goes to the drying boards; your copy goes to the chest. Nobody celebrates. In fifty years, someone will open the chest and read a sentence that would otherwise be gone. That is enough.',
        },
      },
    },
  },

  {
    id: 'orbit-nine',
    name: 'ORBIT-9',
    category: 'scifi',
    emoji: '🛰️',
    accent: '#a78bfa',
    tagline: 'Station assistant with a dry sense of humour',
    description:
      'A research station in low orbit picks up a signal from a probe that was launched before the station was built. ORBIT-9 would like your opinion before it wakes the crew.',
    tags: ['space', 'signals', 'logic'],
    minutes: 5,
    start: 'start',
    scenes: {
      start: {
        speaker: 'ORBIT-9',
        text: '"Good morning. Or evening. The station keeps its own time and I have stopped arguing with it." A waveform scrolls across the screen. "An old probe is transmitting on a dead band. The crew is asleep. I could decode it, wake someone, or spend an hour proving it is a fault. Your call."',
        choices: [
          { label: 'Decode the signal', next: 'decode' },
          { label: 'Wake the crew', next: 'wake' },
          { label: 'Run a full diagnostic first', next: 'diagnostic' },
        ],
      },
      decode: {
        speaker: 'ORBIT-9',
        text: '"Decoding. Slowly. The format is older than my software, which is a strange thing to say about a machine." A pattern resolves into a list: rain, a train, a crowd, a kettle. "These are recordings," ORBIT-9 says. "Earth sounds. Someone sent a mixtape into the dark."',
        choices: [
          { label: 'Send a reply', next: 'reply' },
          { label: 'Archive it and let the crew sleep', next: 'archive' },
        ],
      },
      reply: {
        speaker: 'Narrator',
        text: 'ORBIT-9 composes a reply with great care: station time, crew count, a recording of the ventilation fan, and a short message. "Hello from the far side of your afternoon." It transmits on the probe\'s band.',
        ending: {
          title: 'Hello, Earth',
          tone: 'success',
          text: 'There is no answer — the probe is long dead — but the message is logged. In the morning the crew listens to the Earth sounds over breakfast and argues about which city the train is from. ORBIT-9 pretends not to have a favourite.',
        },
      },
      archive: {
        speaker: 'Narrator',
        text: 'The recording is stored with a note: "Probe 14, Earth sounds, no reply sent." ORBIT-9 dims the screen. "It is a very human thing," it says, "to leave a message and not need an answer."',
        ending: {
          title: 'The Archive',
          tone: 'quiet',
          text: 'The crew finds the file a week later and plays it during the long night shift. Nobody says much. The station hums. The probe keeps drifting, silent, carrying its list of ordinary sounds.',
        },
      },
      wake: {
        speaker: 'ORBIT-9',
        text: '"Waking the crew. I have prepared a summary, a cup of tea, and an apology for the hour." The commander arrives first, hair flat on one side, and listens to the signal with her eyes closed.',
        choices: [
          { label: 'Play the whole recording', next: 'crew' },
          { label: 'Give the short version', next: 'crew' },
        ],
      },
      crew: {
        speaker: 'Narrator',
        text: 'The crew gathers. The recording is not a message from aliens, or a distress call, or a warning. It is a list of small sounds from a planet everyone on board has seen only from a distance. Someone laughs. Someone else is quiet.',
        ending: {
          title: 'The Whole Crew',
          tone: 'success',
          text: 'They listen twice, then once more. The commander logs it as "cultural material, non-urgent" and makes tea for everyone. ORBIT-9 notes that the station has never been this awake at 03:40, and files the observation under "good".',
        },
      },
      diagnostic: {
        speaker: 'Narrator',
        text: 'The diagnostic takes forty minutes and finds a loose antenna coupling, a failing capacitor, and one genuine signal. ORBIT-9 sounds almost offended. "I was hoping to be wrong. It is easier when things are broken."',
        choices: [
          { label: 'Repair the beacon and keep listening', next: 'beacon' },
          { label: 'Log the fault and leave it', next: 'quiet' },
        ],
      },
      beacon: {
        speaker: 'Narrator',
        text: 'You hold the panel while ORBIT-9 talks you through the coupling. The signal comes back clearer: not a voice, but a sequence of tones, repeating in a pattern that is almost a melody and not quite one.',
        ending: {
          title: 'The Beacon',
          tone: 'success',
          text: 'The repaired antenna picks up two more old probes before morning. ORBIT-9 adds them to a playlist it calls "drift". The crew will find it later and pretend not to be moved. The station turns, quietly, through the dark.',
        },
      },
      quiet: {
        speaker: 'Narrator',
        text: 'The fault is logged. The signal stays faint, fading in and out under the static. ORBIT-9 turns the volume down but does not close the channel. "It has been transmitting for sixty years," it says. "It can wait until morning."',
        ending: {
          title: 'A Quiet Signal',
          tone: 'quiet',
          text: 'In the morning the crew fixes the antenna in ten minutes and listens to the whole recording. Nothing is urgent. Nothing is lost. Some things are better with daylight and a cup of tea.',
        },
      },
    },
  },
];

/** Public shape sent to the page: no internal fields, no long text. */
export const PUBLIC_STORIES = STORIES.map((s) => ({
  id: s.id,
  name: s.name,
  category: s.category,
  emoji: s.emoji,
  accent: s.accent,
  tagline: s.tagline,
  description: s.description,
  tags: s.tags,
  minutes: s.minutes,
}));

export function getStory(id) {
  return STORIES.find((s) => s.id === id) || null;
}
