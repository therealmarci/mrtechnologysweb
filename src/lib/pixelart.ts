// 16x16-Pixel-Icons als SVG. Gerade Formen als Zeichen-Raster, diagonale über Linien-Helfer.

const PALETTE: Record<string, string> = {
  k: '#17171c',
  w: '#f2f2f2',
  r: '#d23c3c',
  R: '#8e2323',
  b: '#9a6534',
  B: '#5e3b1b',
  g: '#6cc24a',
  G: '#3f8a2e',
  s: '#6e6e76',
  S: '#4a4a52',
  y: '#f5c542',
  Y: '#b8860b',
  c: '#5ee7df',
  C: '#2a9d96',
  i: '#e6e6ec',
  I: '#9a9aa6',
  l: '#9fd8ff',
};

type Grid = string[][];

const empty = (): Grid => Array.from({ length: 16 }, () => Array(16).fill('.'));
const fromRows = (rows: string[]): Grid => rows.map((r) => r.split(''));

function set(g: Grid, x: number, y: number, c: string) {
  if (x >= 0 && x < 16 && y >= 0 && y < 16) g[y][x] = c;
}

function line(g: Grid, x0: number, y0: number, x1: number, y1: number, c: string) {
  const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
  for (let i = 0; i <= n; i++) {
    set(g, Math.round(x0 + ((x1 - x0) * i) / n), Math.round(y0 + ((y1 - y0) * i) / n), c);
  }
}

const mirrorX = (g: Grid): Grid => g.map((row) => [...row].reverse());

function overlay(base: Grid, top: Grid): Grid {
  return base.map((row, y) => row.map((c, x) => (top[y][x] !== '.' ? top[y][x] : c)));
}

function sword(): Grid {
  const g = empty();
  line(g, 1, 1, 10, 10, 'i'); // Klinge
  line(g, 2, 1, 11, 10, 'I');
  line(g, 1, 2, 10, 11, 'I');
  line(g, 8, 13, 13, 8, 'y'); // Parierstange
  line(g, 12, 12, 13, 13, 'b'); // Griff
  set(g, 14, 14, 'Y');
  return g;
}

function pickaxe(): Grid {
  const g = empty();
  line(g, 2, 13, 10, 5, 'b'); // Stiel entlang y = 15 - x
  line(g, 3, 13, 10, 6, 'B');
  // Kopf: obere Hälfte, gespiegelt an der Stiel-Achse (x, y) -> (15 - y, 15 - x)
  const head: [number, number, string][] = [
    [12, 3, 'c'], [11, 4, 'c'], [11, 3, 'c'], [10, 2, 'c'], [9, 2, 'c'], [8, 1, 'c'],
    [7, 1, 'c'], [6, 1, 'C'], [5, 2, 'C'], [10, 3, 'C'], [9, 3, 'C'], [8, 2, 'C'], [7, 2, 'C'],
  ];
  for (const [x, y, c] of head) {
    set(g, x, y, c);
    set(g, 15 - y, 15 - x, c);
  }
  return g;
}

const ICONS: Record<string, () => Grid> = {
  grass: () =>
    fromRows([
      'gggGgggggggGgggg',
      'ggggggGgggggggGg',
      'gGgggggggGgggggg',
      'ggGbgggbggGbgggb',
      'gbbbbgbbbgbbbgbb',
      'bbBbbbbbBbbbbbbb',
      'bbbbbBbbbbbbBbbb',
      'bBbbbbbbbbBbbbbb',
      'bbbbbbbBbbbbbbBb',
      'bbbBbbbbbbbbbbbb',
      'bbbbbbbbbBbbBbbb',
      'bBbbbbBbbbbbbbbb',
      'bbbbbbbbbbbbbbBb',
      'bbbbBbbbbBbbbbbb',
      'bBbbbbbbbbbbbBbb',
      'bbbbbbbBbbbbbbbb',
    ]),
  bed: () =>
    fromRows([
      '................',
      '...........llll.',
      '.............l..',
      '............l...',
      '.......lll.llll.',
      '........l.......',
      '.......lll......',
      '................',
      '.kkkkkkkkkkkkkk.',
      '.kwwwkrrrrrrrrk.',
      '.kwwwkrrrrrrrrk.',
      '.kkkkkRRRRRRRRk.',
      '.kbbbbbbbbbbbbk.',
      '.kBkkkkkkkkkkBk.',
      '.kBk........kBk.',
      '.kkk........kkk.',
    ]),
  chunks: () =>
    fromRows([
      'kkkkkkkkkkkkkkkk',
      'kssssksssskssssk',
      'ksSssksssskssSsk',
      'kssssksSsskssssk',
      'kssssksssskssssk',
      'kkkkkkkkkkkkkkkk',
      'ksssskggggkssssk',
      'kssSskgyygksssSk',
      'ksssskgyygkssssk',
      'ksssskGGGGkssssk',
      'kkkkkkkkkkkkkkkk',
      'kssssksssskssssk',
      'ksssskssSskssssk',
      'kSssskssssksSssk',
      'kssssksssskssssk',
      'kkkkkkkkkkkkkkkk',
    ]),
  crown: () =>
    fromRows([
      '................',
      '................',
      '................',
      '..y....yy....y..',
      '..y...yyyy...y..',
      '..yy..yyyy..yy..',
      '..yyy.yyyy.yyy..',
      '..yyyyyyyyyyyy..',
      '..yyyyyyyyyyyy..',
      '..yyrryccyrryy..',
      '..yyrryccyrryy..',
      '..yyyyyyyyyyyy..',
      '..YYYYYYYYYYYY..',
      '..YYYYYYYYYYYY..',
      '................',
      '................',
    ]),
  swords: () => overlay(mirrorX(sword()), sword()),
  pickaxe,
};

/** SVG-Markup; gleiche Farben in einer Zeile werden zu einem Rechteck zusammengefasst. */
export function pixelIcon(name: string): string {
  const grid = (ICONS[name] ?? ICONS.chunks)();
  let rects = '';
  grid.forEach((row, y) => {
    let x = 0;
    while (x < 16) {
      const c = row[x];
      let w = 1;
      while (x + w < 16 && row[x + w] === c) w++;
      if (c !== '.') rects += `<rect x="${x}" y="${y}" width="${w}" height="1" fill="${PALETTE[c]}"/>`;
      x += w;
    }
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
}
