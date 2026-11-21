/**
 * Sudoku engine — pure functions, no DOM.
 *
 * Boards are flat arrays of 81 numbers: 0 = empty, 1..9 = value.
 * Row-major order, index = row * 9 + col.
 *
 * Everything here is deterministic except the shuffle helpers, which accept
 * an optional RNG so tests can run reproducibly.
 */

export const DIFFICULTIES = {
  easy: { label: 'Easy', givens: 42, minGivens: 36 },
  medium: { label: 'Medium', givens: 34, minGivens: 30 },
  hard: { label: 'Hard', givens: 27, minGivens: 24 },
};

const ALL_DIGITS = 0x3fe; // bits 1..9
const BIT_VALUE = new Uint8Array(1024);
for (let v = 1; v <= 9; v++) BIT_VALUE[1 << v] = v;

function boxIndex(pos) {
  const row = (pos / 9) | 0;
  const col = pos % 9;
  return ((row / 3) | 0) * 3 + ((col / 3) | 0);
}

/** Returns true when placing `value` at `pos` is legal on `board`. */
export function isLegal(board, pos, value) {
  if (!value || value < 1 || value > 9) return false;
  const row = (pos / 9) | 0;
  const col = pos % 9;
  for (let i = 0; i < 9; i++) {
    if (board[row * 9 + i] === value) return false;
    if (board[i * 9 + col] === value) return false;
  }
  const br = ((row / 3) | 0) * 3;
  const bc = ((col / 3) | 0) * 3;
  for (let r = br; r < br + 3; r++) {
    for (let c = bc; c < bc + 3; c++) {
      if (board[r * 9 + c] === value) return false;
    }
  }
  return true;
}

/**
 * Counts solutions, stopping at `limit`.
 * Returns { count, solution } where solution is the first one found.
 */
export function solve(board, limit = 1) {
  const grid = Array.from(board, (v) => (v >= 1 && v <= 9 ? v : 0));
  const rows = new Uint16Array(9);
  const cols = new Uint16Array(9);
  const boxes = new Uint16Array(9);

  for (let pos = 0; pos < 81; pos++) {
    const value = grid[pos];
    if (!value) continue;
    const r = (pos / 9) | 0;
    const c = pos % 9;
    const b = boxIndex(pos);
    const bit = 1 << value;
    if (rows[r] & bit || cols[c] & bit || boxes[b] & bit) {
      return { count: 0, solution: null };
    }
    rows[r] |= bit;
    cols[c] |= bit;
    boxes[b] |= bit;
  }

  let count = 0;
  let solution = null;

  const search = (pos) => {
    if (pos === 81) {
      count++;
      if (!solution) solution = Array.from(grid);
      return count >= limit;
    }
    if (grid[pos]) return search(pos + 1);

    const r = (pos / 9) | 0;
    const c = pos % 9;
    const b = boxIndex(pos);
    let mask = ALL_DIGITS & ~(rows[r] | cols[c] | boxes[b]);

    while (mask) {
      const bit = mask & -mask;
      mask ^= bit;
      const value = BIT_VALUE[bit];
      grid[pos] = value;
      rows[r] |= bit;
      cols[c] |= bit;
      boxes[b] |= bit;

      if (search(pos + 1)) {
        grid[pos] = 0;
        rows[r] &= ~bit;
        cols[c] &= ~bit;
        boxes[b] &= ~bit;
        return true;
      }

      grid[pos] = 0;
      rows[r] &= ~bit;
      cols[c] &= ~bit;
      boxes[b] &= ~bit;
    }
    return false;
  };

  search(0);
  return { count, solution };
}

export function countSolutions(board, limit = 2) {
  return solve(board, limit).count;
}

/** Fills an empty board with a random valid complete grid. */
export function generateSolution(random = Math.random) {
  const grid = new Array(81).fill(0);
  const rows = new Uint16Array(9);
  const cols = new Uint16Array(9);
  const boxes = new Uint16Array(9);

  const fill = (pos) => {
    if (pos === 81) return true;
    const r = (pos / 9) | 0;
    const c = pos % 9;
    const b = boxIndex(pos);
    const candidates = [];

    let mask = ALL_DIGITS & ~(rows[r] | cols[c] | boxes[b]);
    while (mask) {
      const bit = mask & -mask;
      mask ^= bit;
      candidates.push(bit);
    }
    // Fisher-Yates with the injected RNG.
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    for (const bit of candidates) {
      const value = BIT_VALUE[bit];
      grid[pos] = value;
      rows[r] |= bit;
      cols[c] |= bit;
      boxes[b] |= bit;
      if (fill(pos + 1)) return true;
      grid[pos] = 0;
      rows[r] &= ~bit;
      cols[c] &= ~bit;
      boxes[b] &= ~bit;
    }
    return false;
  };

  fill(0);
  return grid;
}

function shuffle(list, random) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Builds a puzzle with a unique solution.
 * Returns { puzzle, solution, givens, difficulty }.
 */
export function generatePuzzle(difficulty = 'easy', random = Math.random) {
  const config = DIFFICULTIES[difficulty];
  if (!config) throw new Error(`Unknown difficulty: ${difficulty}`);

  const solution = generateSolution(random);
  const puzzle = solution.slice();
  const order = shuffle(
    Array.from({ length: 81 }, (_, i) => i),
    random
  );

  let givens = 81;
  for (const pos of order) {
    if (givens <= config.givens) break;
    const backup = puzzle[pos];
    puzzle[pos] = 0;
    if (countSolutions(puzzle, 2) === 1) {
      givens--;
    } else {
      puzzle[pos] = backup;
    }
  }

  return { puzzle, solution, givens, difficulty };
}

/** True when the board is complete and matches a valid sudoku solution. */
export function isSolved(board) {
  if (board.length !== 81) return false;
  for (let pos = 0; pos < 81; pos++) {
    const value = board[pos];
    if (!value) return false;
    const r = (pos / 9) | 0;
    const c = pos % 9;
    for (let i = 0; i < 9; i++) {
      if (i !== c && board[r * 9 + i] === value) return false;
      if (i !== r && board[i * 9 + c] === value) return false;
    }
    const br = ((r / 3) | 0) * 3;
    const bc = ((c / 3) | 0) * 3;
    for (let rr = br; rr < br + 3; rr++) {
      for (let cc = bc; cc < bc + 3; cc++) {
        if ((rr !== r || cc !== c) && board[rr * 9 + cc] === value) return false;
      }
    }
  }
  return true;
}

/** Counts how many filled cells conflict with at least one peer. */
export function countConflicts(board) {
  let conflicts = 0;
  for (let pos = 0; pos < 81; pos++) {
    const value = board[pos];
    if (!value) continue;
    const r = (pos / 9) | 0;
    const c = pos % 9;
    let bad = false;
    for (let i = 0; i < 9 && !bad; i++) {
      if (i !== c && board[r * 9 + i] === value) bad = true;
      if (i !== r && board[i * 9 + c] === value) bad = true;
    }
    const br = ((r / 3) | 0) * 3;
    const bc = ((c / 3) | 0) * 3;
    for (let rr = br; rr < br + 3 && !bad; rr++) {
      for (let cc = bc; cc < bc + 3 && !bad; cc++) {
        if ((rr !== r || cc !== c) && board[rr * 9 + cc] === value) bad = true;
      }
    }
    if (bad) conflicts++;
  }
  return conflicts;
}

/** Formats seconds as mm:ss (or h:mm:ss when over an hour). */
export function formatTime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
}
