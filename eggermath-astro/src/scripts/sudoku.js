/**
 * Sudoku page controller.
 * All state is local to this browser (localStorage) — no account, no server.
 */
import {
  DIFFICULTIES,
  generatePuzzle,
  formatTime,
  isSolved,
} from '../lib/sudoku.js';

const STORAGE_KEY = 'eggermath.sudoku.v1';

const els = {
  board: document.getElementById('sk-board'),
  pad: document.getElementById('sk-pad'),
  time: document.getElementById('sk-time'),
  mistakes: document.getElementById('sk-mistakes'),
  hints: document.getElementById('sk-hints'),
  notes: document.getElementById('sk-notes'),
  erase: document.getElementById('sk-erase'),
  hint: document.getElementById('sk-hint'),
  newGame: document.getElementById('sk-new'),
  difficulty: document.getElementById('sk-difficulty'),
  status: document.getElementById('sk-status'),
  win: document.getElementById('sk-win'),
  winTime: document.getElementById('sk-win-time'),
  winMistakes: document.getElementById('sk-win-mistakes'),
  winAgain: document.getElementById('sk-win-again'),
};

const state = {
  difficulty: 'easy',
  puzzle: new Array(81).fill(0),
  solution: new Array(81).fill(0),
  values: new Array(81).fill(0),
  notes: new Array(81).fill(0),
  selected: null,
  notesMode: false,
  mistakes: 0,
  hints: 3,
  elapsed: 0,
  solved: false,
};

let cells = [];
let timerId = null;

/* ------------------------------------------------------------------ */
/* Rendering                                                           */
/* ------------------------------------------------------------------ */

function buildBoard() {
  const frag = document.createDocumentFragment();
  for (let pos = 0; pos < 81; pos++) {
    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'sk-cell';
    if (pos % 3 === 2 && pos % 9 !== 8) cell.classList.add('br');
    if (((pos / 9) | 0) % 3 === 2 && pos < 72) cell.classList.add('bb');
    cell.setAttribute('role', 'gridcell');
    cell.dataset.pos = String(pos);
    cell.tabIndex = -1;

    const value = document.createElement('span');
    value.className = 'sk-value';
    cell.appendChild(value);

    const notes = document.createElement('span');
    notes.className = 'sk-notes';
    notes.setAttribute('aria-hidden', 'true');
    for (let n = 1; n <= 9; n++) {
      const note = document.createElement('span');
      note.className = 'sk-note';
      note.dataset.n = String(n);
      note.textContent = String(n);
      notes.appendChild(note);
    }
    cell.appendChild(notes);

    frag.appendChild(cell);
    cells.push(cell);
  }
  els.board.appendChild(frag);
}

function render() {
  const selected = state.selected;
  const selRow = selected === null ? -1 : (selected / 9) | 0;
  const selCol = selected === null ? -1 : selected % 9;
  const selBox =
    selected === null
      ? -1
      : ((selRow / 3) | 0) * 3 + ((selCol / 3) | 0);
  const selValue = selected === null ? 0 : state.values[selected];

  for (let pos = 0; pos < 81; pos++) {
    const cell = cells[pos];
    const value = state.values[pos];
    const given = state.puzzle[pos] !== 0;
    const row = (pos / 9) | 0;
    const col = pos % 9;
    const box = ((row / 3) | 0) * 3 + ((col / 3) | 0);

    cell.classList.toggle('is-given', given);
    cell.classList.toggle('is-selected', pos === selected);
    cell.classList.toggle(
      'is-peer',
      selected !== null && pos !== selected && (row === selRow || col === selCol || box === selBox)
    );
    cell.classList.toggle('is-same', !!selValue && value === selValue && pos !== selected);
    cell.classList.toggle('is-wrong', value !== 0 && value !== state.solution[pos]);
    cell.classList.toggle('is-hinted', !given && value !== 0 && value === state.solution[pos] && state.notes[pos] === 0 && cell.dataset.hinted === '1');
    cell.classList.toggle('is-empty', value === 0);

    const valueEl = cell.querySelector('.sk-value');
    valueEl.textContent = value ? String(value) : '';

    const notesEl = cell.querySelector('.sk-notes');
    const showNotes = value === 0 && state.notes[pos] !== 0;
    notesEl.style.visibility = showNotes ? 'visible' : 'hidden';
    if (showNotes) {
      for (const note of notesEl.children) {
        const n = Number(note.dataset.n);
        note.classList.toggle('on', (state.notes[pos] & (1 << n)) !== 0);
      }
    }

    cell.tabIndex = pos === selected ? 0 : -1;
    cell.setAttribute(
      'aria-label',
      describeCell(row, col, value, given)
    );
    cell.setAttribute('aria-readonly', given ? 'true' : 'false');
  }

  els.mistakes.textContent = String(state.mistakes);
  els.hints.textContent = String(state.hints);
  els.time.textContent = formatTime(state.elapsed);
  els.notes.textContent = state.notesMode ? 'Notes: on' : 'Notes: off';
  els.notes.setAttribute('aria-pressed', state.notesMode ? 'true' : 'false');
  els.hint.disabled = state.hints <= 0 || state.solved;

  for (const btn of els.pad.querySelectorAll('button[data-digit]')) {
    const digit = Number(btn.dataset.digit);
    btn.classList.toggle('is-done', countDigit(digit) >= 9);
    btn.disabled = state.solved;
  }

  els.erase.disabled = state.solved;
  els.notes.disabled = state.solved;
}

function describeCell(row, col, value, given) {
  const where = `Row ${row + 1}, column ${col + 1}`;
  if (!value) return `${where}, empty`;
  return `${where}, ${value}${given ? ', given' : ''}`;
}

function countDigit(digit) {
  let n = 0;
  for (const v of state.values) if (v === digit) n++;
  return n;
}

/* ------------------------------------------------------------------ */
/* Game flow                                                           */
/* ------------------------------------------------------------------ */

function newGame(difficulty = state.difficulty) {
  state.difficulty = difficulty;
  els.status.textContent = 'Building a puzzle…';

  // Let the browser paint the status before the (brief) synchronous generation.
  requestAnimationFrame(() => {
    const { puzzle, solution } = generatePuzzle(difficulty);
    state.puzzle = puzzle;
    state.solution = solution;
    state.values = puzzle.slice();
    state.notes = new Array(81).fill(0);
    state.selected = null;
    state.notesMode = false;
    state.mistakes = 0;
    state.hints = 3;
    state.elapsed = 0;
    state.solved = false;

    for (const cell of cells) cell.dataset.hinted = '0';
    els.win.hidden = true;
    els.difficulty.value = difficulty;
    els.status.textContent = `${DIFFICULTIES[difficulty].label} puzzle ready. Select a cell, then tap a number.`;
    render();
    save();
    if (cells[0]) {
      state.selected = firstEditable();
      render();
      if (state.selected !== null) cells[state.selected].focus({ preventScroll: true });
    }
  });
}

function firstEditable() {
  for (let i = 0; i < 81; i++) if (!state.puzzle[i]) return i;
  return null;
}

function select(pos, { focus = false } = {}) {
  state.selected = pos;
  render();
  if (focus && cells[pos]) cells[pos].focus({ preventScroll: true });
}

function place(digit) {
  const pos = state.selected;
  if (pos === null || state.solved) return;
  if (state.puzzle[pos] !== 0) return;

  if (state.notesMode) {
    if (state.values[pos] !== 0) return;
    state.notes[pos] ^= 1 << digit;
    render();
    save();
    return;
  }

  if (state.values[pos] === digit) {
    // Tapping the same number clears it, like most mobile sudoku apps.
    state.values[pos] = 0;
    state.notes[pos] = 0;
    render();
    save();
    return;
  }

  state.values[pos] = digit;
  state.notes[pos] = 0;
  cells[pos].dataset.hinted = '0';

  if (digit !== state.solution[pos]) {
    state.mistakes++;
    els.status.textContent = 'That number conflicts with the puzzle. Mistakes are counted, not punished — take your time.';
  } else {
    els.status.textContent = 'Nice. Keep going.';
  }

  render();
  save();
  checkSolved();
}

function erase() {
  const pos = state.selected;
  if (pos === null || state.solved || state.puzzle[pos] !== 0) return;
  state.values[pos] = 0;
  state.notes[pos] = 0;
  cells[pos].dataset.hinted = '0';
  render();
  save();
}

function hint() {
  if (state.solved || state.hints <= 0) return;
  let pos = state.selected;
  if (pos === null || state.puzzle[pos] !== 0 || state.values[pos] !== 0) {
    pos = -1;
    for (let i = 0; i < 81; i++) {
      if (!state.puzzle[i] && state.values[i] !== state.solution[i]) {
        pos = i;
        break;
      }
    }
  }
  if (pos < 0) return;

  state.values[pos] = state.solution[pos];
  state.notes[pos] = 0;
  state.hints--;
  cells[pos].dataset.hinted = '1';
  select(pos);
  els.status.textContent = 'One cell revealed. Hints are limited to three per puzzle.';
  render();
  save();
  checkSolved();
}

function checkSolved() {
  if (!isSolved(state.values)) return;
  state.solved = true;
  stopTimer();
  els.winTime.textContent = formatTime(state.elapsed);
  els.winMistakes.textContent = String(state.mistakes);
  els.win.hidden = false;
  els.status.textContent = 'Puzzle solved.';
  render();
  save();
  els.win.focus?.();
}

/* ------------------------------------------------------------------ */
/* Timer + storage                                                     */
/* ------------------------------------------------------------------ */

function startTimer() {
  if (timerId) return;
  timerId = setInterval(() => {
    if (document.hidden || state.solved) return;
    state.elapsed++;
    els.time.textContent = formatTime(state.elapsed);
    if (state.elapsed % 5 === 0) save();
  }, 1000);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function save() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 1,
        difficulty: state.difficulty,
        puzzle: state.puzzle,
        solution: state.solution,
        values: state.values,
        notes: state.notes,
        mistakes: state.mistakes,
        hints: state.hints,
        elapsed: state.elapsed,
        solved: state.solved,
      })
    );
  } catch {
    /* storage can be unavailable (private mode) — the game still works */
  }
}

function restore() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  } catch {
    saved = null;
  }
  if (
    !saved ||
    saved.version !== 1 ||
    !Array.isArray(saved.values) ||
    saved.values.length !== 81 ||
    !Array.isArray(saved.puzzle) ||
    saved.puzzle.length !== 81
  ) {
    return false;
  }

  state.difficulty = DIFFICULTIES[saved.difficulty] ? saved.difficulty : 'easy';
  state.puzzle = saved.puzzle;
  state.solution = saved.solution;
  state.values = saved.values;
  state.notes = saved.notes;
  state.mistakes = saved.mistakes || 0;
  state.hints = typeof saved.hints === 'number' ? saved.hints : 3;
  state.elapsed = saved.elapsed || 0;
  state.solved = !!saved.solved;

  els.difficulty.value = state.difficulty;
  els.win.hidden = !state.solved;
  if (state.solved) {
    els.winTime.textContent = formatTime(state.elapsed);
    els.winMistakes.textContent = String(state.mistakes);
    els.status.textContent = 'Puzzle solved.';
  } else {
    els.status.textContent = 'Puzzle restored. Select a cell, then tap a number.';
  }
  state.selected = firstEditable();
  render();
  return true;
}

/* ------------------------------------------------------------------ */
/* Events                                                              */
/* ------------------------------------------------------------------ */

function bind() {
  els.board.addEventListener('click', (event) => {
    const cell = event.target.closest('.sk-cell');
    if (!cell) return;
    select(Number(cell.dataset.pos), { focus: true });
  });

  els.board.addEventListener('keydown', (event) => {
    if (state.selected === null) return;
    const pos = state.selected;
    const row = (pos / 9) | 0;
    const col = pos % 9;
    let next = null;

    if (event.key === 'ArrowUp') next = row > 0 ? pos - 9 : pos;
    else if (event.key === 'ArrowDown') next = row < 8 ? pos + 9 : pos;
    else if (event.key === 'ArrowLeft') next = col > 0 ? pos - 1 : pos;
    else if (event.key === 'ArrowRight') next = col < 8 ? pos + 1 : pos;
    else if (/^[1-9]$/.test(event.key)) {
      event.preventDefault();
      place(Number(event.key));
      return;
    } else if (event.key === 'Backspace' || event.key === 'Delete' || event.key === '0') {
      event.preventDefault();
      erase();
      return;
    } else if (event.key.toLowerCase() === 'n') {
      event.preventDefault();
      state.notesMode = !state.notesMode;
      render();
      return;
    } else {
      return;
    }

    event.preventDefault();
    select(next, { focus: true });
  });

  for (const btn of els.pad.querySelectorAll('button[data-digit]')) {
    btn.addEventListener('click', () => place(Number(btn.dataset.digit)));
  }

  els.erase.addEventListener('click', erase);
  els.hint.addEventListener('click', hint);
  els.newGame.addEventListener('click', () => newGame(state.difficulty));
  els.winAgain.addEventListener('click', () => newGame(state.difficulty));

  els.notes.addEventListener('click', () => {
    state.notesMode = !state.notesMode;
    render();
  });

  els.difficulty.addEventListener('change', (event) => {
    newGame(event.target.value);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) save();
  });

  window.addEventListener('beforeunload', save);
}

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

if (els.board && els.pad) {
  buildBoard();
  bind();
  const restored = restore();
  if (!restored) {
    newGame('easy');
  }
  if (!state.solved) startTimer();
}
