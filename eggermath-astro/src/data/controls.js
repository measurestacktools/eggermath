export const controls = {
  gba: {
    dpad: { label: 'D-Pad', keys: 'WASD / Arrow Keys' },
    a: { label: 'A Button', key: 'K' },
    b: { label: 'B Button', key: 'J' },
    l: { label: 'L', key: 'Q' },
    r: { label: 'R', key: 'E' },
    start: { label: 'Start', key: 'Enter' },
    select: { label: 'Select', key: 'Right Shift' },
    save: { label: 'Save State', key: 'F5' },
    load: { label: 'Load State', key: 'F9' },
    slot: { label: 'Switch Slot', key: 'F7' },
    fullscreen: { label: 'Fullscreen', key: 'Double-click canvas' },
  },
  gb: {
    dpad: { label: 'D-Pad', keys: 'WASD / Arrow Keys' },
    a: { label: 'A Button', key: 'K' },
    b: { label: 'B Button', key: 'J' },
    start: { label: 'Start', key: 'Enter' },
    select: { label: 'Select', key: 'Right Shift' },
    save: { label: 'Save State', key: 'F5' },
    load: { label: 'Load State', key: 'F9' },
    slot: { label: 'Switch Slot', key: 'F7' },
    fullscreen: { label: 'Fullscreen', key: 'Double-click canvas' },
  },
};

export function getControlsText(system) {
  const c = system === 'GBA' ? controls.gba : controls.gb;
  return `D-Pad: WASD/Arrows, A: ${c.a.key}, B: ${c.b.key}${c.l ? `, L: ${c.l.key}, R: ${c.r.key}` : ''}, Start: ${c.start.key}, Select: ${c.select.key}`;
}

export function getControlsSummary(system) {
  const c = system === 'GBA' ? controls.gba : controls.gb;
  const lines = [];
  lines.push(`D-Pad: ${c.dpad.keys}`);
  lines.push(`A: ${c.a.key}  B: ${c.b.key}`);
  if (c.l) lines.push(`L: ${c.l.key}  R: ${c.r.key}`);
  lines.push(`Start: ${c.start.key}  Select: ${c.select.key}`);
  lines.push(`Save: ${c.save.key}  Load: ${c.load.key}  Slot: ${c.slot.key}`);
  return lines.join('\n');
}
