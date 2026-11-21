/**
 * Character Stories — deterministic branching story player.
 *
 * Rendered as a chat-style transcript so the format feels familiar, but there
 * is no chatbot: no network call, no model, no free-text input, no send button.
 * The only state is "which scene am I on" plus the trail already shown. It
 * lives in this tab and is gone on refresh.
 */

const dataEl = document.getElementById('cp-data');
const STORIES = dataEl ? JSON.parse(dataEl.textContent || '[]') : [];

const els = {
  app: document.getElementById('cp-app'),
  grid: document.getElementById('cp-grid'),
  search: document.getElementById('cp-search'),
  filters: document.getElementById('cp-filters'),
  empty: document.getElementById('cp-empty'),
  newBtn: document.getElementById('cp-new'),
  menuOpen: document.getElementById('cp-menu-open'),
  menuClose: document.getElementById('cp-menu-close'),

  headAvatar: document.getElementById('cp-head-avatar'),
  headName: document.getElementById('cp-head-name'),
  headMeta: document.getElementById('cp-head-meta'),

  log: document.getElementById('cp-log'),
  placeholder: document.getElementById('cp-placeholder'),

  choices: document.getElementById('cp-choices'),
  composeLabel: document.getElementById('cp-compose-label'),
  progress: document.getElementById('cp-progress'),

  ending: document.getElementById('cp-ending'),
  endingTitle: document.getElementById('cp-ending-title'),
  endingText: document.getElementById('cp-ending-text'),
  again: document.getElementById('cp-again'),
  another: document.getElementById('cp-another'),

  breakCard: document.getElementById('cp-break'),
  breakDismiss: document.getElementById('cp-break-dismiss'),
};

const state = {
  story: null,
  sceneId: null,
  trail: [],
  activeSeconds: 0,
  breakDismissed: false,
  reading: false,
};

let timerId = null;
const BREAK_AFTER_SECONDS = 30 * 60;

/* ------------------------------------------------------------------ */
/* Sidebar: search + category filter                                   */
/* ------------------------------------------------------------------ */

let activeCategory = 'all';
let query = '';

function applyFilters() {
  let visible = 0;
  for (const card of els.grid.querySelectorAll('.cp-card')) {
    const categoryOk = activeCategory === 'all' || card.dataset.category === activeCategory;
    const queryOk = !query || (card.dataset.search || '').includes(query);
    const show = categoryOk && queryOk;
    card.hidden = !show;
    if (show) visible++;
  }
  els.empty.hidden = visible > 0;
}

function bindSidebar() {
  els.search?.addEventListener('input', (event) => {
    query = event.target.value.trim().toLowerCase();
    applyFilters();
  });

  els.filters?.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-category]');
    if (!chip) return;
    activeCategory = chip.dataset.category;
    for (const c of els.filters.querySelectorAll('[data-category]')) {
      const on = c === chip;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    applyFilters();
  });

  els.grid?.addEventListener('click', (event) => {
    const card = event.target.closest('.cp-card');
    if (!card) return;
    startStory(card.dataset.storyId);
  });

  els.newBtn?.addEventListener('click', () => {
    if (state.story) backToGallery();
    else setView('gallery');
  });

  els.menuOpen?.addEventListener('click', () => setView('gallery'));
  els.menuClose?.addEventListener('click', () => setView(state.story ? 'story' : 'gallery'));
}

function setView(view) {
  els.app.dataset.view = view;
  if (view === 'gallery') els.search?.focus({ preventScroll: true });
}

/* ------------------------------------------------------------------ */
/* Transcript                                                          */
/* ------------------------------------------------------------------ */

function findStory(id) {
  return STORIES.find((story) => story.id === id) || null;
}

function clearLog() {
  for (const node of els.log.querySelectorAll('.cp-msg, .cp-divider')) node.remove();
}

function messageNode({ avatar, name, kind, text, narrator, mine }) {
  const row = document.createElement('div');
  row.className = 'cp-msg';
  if (narrator) row.classList.add('cp-msg--narrator');
  if (mine) row.classList.add('cp-msg--me');

  if (!narrator) {
    const avatarEl = document.createElement('span');
    avatarEl.className = 'cp-msg-avatar';
    avatarEl.setAttribute('aria-hidden', 'true');
    avatarEl.textContent = avatar;
    row.appendChild(avatarEl);
  }

  const body = document.createElement('div');
  body.className = 'cp-msg-body';

  const head = document.createElement('div');
  head.className = 'cp-msg-name';
  head.textContent = name;
  if (kind) {
    const kindEl = document.createElement('span');
    kindEl.className = 'cp-msg-kind';
    kindEl.textContent = kind;
    head.appendChild(kindEl);
  }
  body.appendChild(head);

  const textEl = document.createElement('p');
  textEl.className = 'cp-msg-text';
  textEl.textContent = text;
  body.appendChild(textEl);

  row.appendChild(body);
  return row;
}

function scrollLog() {
  els.log.scrollTop = els.log.scrollHeight;
}

function appendDivider(label) {
  const divider = document.createElement('div');
  divider.className = 'cp-divider';
  divider.textContent = label;
  els.log.appendChild(divider);
}

/** Appends one scene as a character or narrator message. */
function appendScene(id) {
  const story = state.story;
  const scene = story?.scenes[id];
  if (!scene) return;

  if (scene.speaker === 'Narrator' || !scene.speaker) {
    els.log.appendChild(messageNode({ narrator: true, name: 'Narrator', text: scene.text }));
  } else {
    els.log.appendChild(
      messageNode({
        avatar: story.emoji || '📖',
        name: scene.speaker,
        kind: 'character',
        text: scene.text,
      })
    );
  }
  scrollLog();
}

/** Appends the reader's chosen line as a "You" message. */
function appendChoice(label) {
  els.log.appendChild(messageNode({ avatar: '🙋', name: 'You', mine: true, text: label }));
  scrollLog();
}

function renderChoices(scene) {
  els.choices.textContent = '';
  els.ending.hidden = true;

  if (scene.ending) {
    els.choices.hidden = true;
    els.ending.hidden = false;
    els.endingTitle.textContent = scene.ending.title;
    els.endingText.textContent = scene.ending.text;
    els.composeLabel.textContent = 'Ending reached';
    els.endingTitle.tabIndex = -1;
    els.endingTitle.focus({ preventScroll: true });
    return;
  }

  els.choices.hidden = false;
  els.composeLabel.textContent = 'Choose your reply';

  for (const choice of scene.choices || []) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cp-choice';
    btn.textContent = choice.label;
    btn.addEventListener('click', () => choose(choice.label, choice.next));
    els.choices.appendChild(btn);
  }
}

function updateProgress() {
  const chapters = state.trail.filter((e) => e.type === 'choice').length + 1;
  els.progress.textContent = `Chapter ${chapters} · ${state.story.minutes} min story`;
}

function startStory(id) {
  const story = findStory(id);
  if (!story) return;

  state.story = story;
  state.sceneId = story.start;
  state.trail = [{ type: 'scene', id: story.start }];
  state.activeSeconds = 0;
  state.reading = true;

  els.placeholder.hidden = true;
  els.breakCard.hidden = true;
  els.app.dataset.hasStory = '1';

  els.headAvatar.textContent = story.emoji || '📖';
  els.headAvatar.style.setProperty('--cp-accent', story.accent || '#f59e0b');
  els.headName.textContent = story.name;
  els.headMeta.textContent = `${story.tagline} · ${story.minutes} min`;

  for (const card of els.grid.querySelectorAll('.cp-card')) {
    card.classList.toggle('is-active', card.dataset.storyId === story.id);
  }

  clearLog();
  appendDivider(`Story started · ${story.name}`);

  setView('story');
  appendScene(story.start);
  updateProgress();
  renderChoices(story.scenes[story.start]);
  startTimer();
}

function choose(label, next) {
  const scene = state.story?.scenes[next];
  if (!scene) return;
  state.trail.push({ type: 'choice', label }, { type: 'scene', id: next });
  state.sceneId = next;
  appendChoice(label);
  appendScene(next);
  updateProgress();
  renderChoices(scene);
}

function backToGallery() {
  state.story = null;
  state.sceneId = null;
  state.trail = [];
  state.reading = false;
  stopTimer();
  els.app.dataset.hasStory = '0';

  clearLog();
  els.placeholder.hidden = false;
  els.breakCard.hidden = true;
  els.ending.hidden = true;
  els.choices.hidden = true;
  els.choices.textContent = '';
  els.composeLabel.textContent = 'Choose your reply';
  els.progress.textContent = '—';

  els.headAvatar.textContent = '📖';
  els.headName.textContent = 'Pick a story';
  els.headMeta.textContent = 'Six hand-written stories · no AI';

  for (const card of els.grid.querySelectorAll('.cp-card')) card.classList.remove('is-active');

  setView('gallery');
}

/* ------------------------------------------------------------------ */
/* Session break suggestion (non-blocking)                             */
/* ------------------------------------------------------------------ */

function startTimer() {
  if (timerId) return;
  timerId = setInterval(() => {
    if (!state.reading || document.hidden) return;
    state.activeSeconds++;
    if (state.activeSeconds >= BREAK_AFTER_SECONDS && !state.breakDismissed) {
      els.breakCard.hidden = false;
      state.breakDismissed = true; // show once per visit
    }
  }, 1000);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

function bindReader() {
  els.again?.addEventListener('click', () => {
    if (state.story) startStory(state.story.id);
  });
  els.another?.addEventListener('click', backToGallery);

  els.breakDismiss?.addEventListener('click', () => {
    state.breakDismissed = true;
    els.breakCard.hidden = true;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!state.reading) return;
    const tag = (event.target && event.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    backToGallery();
  });
}

if (STORIES.length && els.grid && els.log) {
  bindSidebar();
  bindReader();
  applyFilters();
  els.choices.hidden = true;
}
