// Automatische Tabellen in Wiki-Seiten: Platzhalter im Markdown werden beim Build durch Tabellen ersetzt,
// die aus den Dateien des Plugins entstehen - so veralten sie nie.
//   <!-- auto:config -->             alle Einstellungen (web-config.yml: Name + Hilfe DE/EN, Standard aus config.yml)
//   <!-- auto:permission-groups -->  Pakete <plugin>.player und <plugin>.groups.* aus plugin.yml
//   <!-- auto:permissions -->        alle übrigen Permissions aus plugin.yml
// Texte der Permissions: docs/wiki/permissions.yml ({<permission>: {de, en}}), sonst die description aus plugin.yml.
import { parse } from 'yaml';
import type { Lang } from '../config';
import type { WikiBook } from './wiki';

const RESOURCE_DIRS = ['src/main/resources/', 'plugin/src/main/resources/'];
const MARKER = /^<!--\s*auto:([a-z-]+)\s*-->\s*$/gm;
const strict = !!process.env.CI;

type Text = Partial<Record<Lang, string>>;
const L = {
  key: { de: 'Einstellung', en: 'Setting' },
  def: { de: 'Standard', en: 'Default' },
  what: { de: 'Bedeutung', en: 'Meaning' },
  perm: { de: 'Permission', en: 'Permission' },
  in: { de: 'Enthalten in', en: 'Included in' },
  for: { de: 'Wofür', en: 'What for' },
  on: { de: 'an', en: 'on' },
  off: { de: 'aus', en: 'off' },
  empty: { de: 'leer', en: 'empty' },
  restart: { de: 'Neustart nötig', en: 'needs a restart' },
  op: { de: 'OP', en: 'OP' },
  all: { de: 'alle', en: 'everyone' },
  none: { de: 'niemand', en: 'nobody' },
  notop: { de: 'Nicht-OPs', en: 'non-OPs' },
  groups: { de: ['Spieler', 'Support', 'Staff', 'Admin'], en: ['Player', 'Support', 'Staff', 'Admin'] },
  source: {
    de: 'Automatisch erzeugt aus',
    en: 'Generated automatically from',
  },
} as const;

const tx = (t: unknown, lang: Lang): string => {
  if (t == null) return '';
  if (typeof t !== 'object') return String(t);
  const o = t as Text;
  return o[lang] ?? o.de ?? o.en ?? '';
};
const cell = (s: string) => s.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim();
// Texte aus web-config.yml sind kein Markdown: spitze Klammern (mrchunks.budget.<number>) nicht als HTML lesen
const plain = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/([*_[\]])/g, '\\$1');
const code = (s: unknown) => '`' + String(s).replace(/`/g, "'") + '`';

function get(obj: any, path: string) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

function warn(msg: string) {
  // fehlende Texte sind kein Grund, den Build abzubrechen - die Tabelle hat dann den englischen Text
  console.warn(`[wiki] ${msg}`);
}

interface Resources {
  dir: string;
  read(name: string): Promise<string | undefined>;
}

async function resources(book: WikiBook): Promise<Resources | undefined> {
  for (const dir of RESOURCE_DIRS) {
    if ((await book.read(dir + 'plugin.yml')) !== undefined) return { dir, read: (n) => book.read(dir + n) };
  }
  return undefined;
}

/** Dateien, aus denen die Tabellen entstehen (für den Vergleich main/beta). */
export async function autoSources(book: WikiBook): Promise<string> {
  const r = await resources(book);
  if (!r) return '';
  const files = await Promise.all(['plugin.yml', 'config.yml', 'web-config.yml'].map(r.read));
  return files.join('\0') + ((await book.read('docs/wiki/permissions.yml')) ?? '');
}

/* ------------------------------------------------------------------ Konfiguration */

function value(field: any, v: any, lang: Lang): string {
  if (v === undefined || v === null) return '–';
  const unit = field.unit ? ` ${tx(field.unit, lang)}` : '';
  switch (field.type) {
    case 'bool':
      return v ? L.on[lang] : L.off[lang];
    case 'secret':
      return v ? '•••' : `*${L.empty[lang]}*`;
    case 'choice': {
      const o = (field.options ?? []).find((x: any) => String(x.value) === String(v));
      return o ? `${tx(o, lang)} (${code(v)})` : code(v);
    }
    case 'choices':
    case 'strings':
    case 'worlds':
    case 'ints': {
      const list = Array.isArray(v) ? v : [v];
      if (!list.length) return `*${L.empty[lang]}*`;
      return list.map((x) => code(x)).join(', ') + unit;
    }
    case 'table': {
      const rows: [string, any][] = Array.isArray(v) ? v.map((x, i) => [String(i + 1), x]) : Object.entries(v ?? {});
      if (!rows.length) return `*${L.empty[lang]}*`;
      const cols: any[] = field.columns ?? [];
      return rows
        .map(([k, row]) => {
          const name = field.rows?.[k] ? tx(field.rows[k], lang) : code(k);
          const vals =
            row && typeof row === 'object'
              ? cols.filter((c) => row[c.key] !== undefined).map((c) => `${tx(c.name, lang)} ${code(row[c.key])}`)
              : [code(row)];
          return `${name}: ${vals.join(' · ')}`;
        })
        .join('<br>');
    }
    case 'string':
    case 'text':
      return v === '' ? `*${L.empty[lang]}*` : code(v);
    default:
      return code(v) + unit;
  }
}

async function configTable(r: Resources, lang: Lang, where: string): Promise<string> {
  const [formSrc, cfgSrc] = await Promise.all([r.read('web-config.yml'), r.read('config.yml')]);
  if (!formSrc || !cfgSrc) {
    warn(`${where}: web-config.yml oder config.yml fehlt - auto:config bleibt leer`);
    return '';
  }
  const form = parse(formSrc) as { sections?: any[] };
  const cfg = parse(cfgSrc);
  const out: string[] = [];
  for (const s of form.sections ?? []) {
    out.push(`### ${tx(s.name, lang)}`);
    if (s.help) out.push('', plain(tx(s.help, lang)));
    out.push('', `| ${L.key[lang]} | ${L.def[lang]} | ${L.what[lang]} |`, '|---|---|---|');
    for (const f of s.fields ?? []) {
      const name = plain(tx(f.name, lang));
      const help = plain(tx(f.help, lang));
      const extra = f.restart ? ` *(${L.restart[lang]})*` : '';
      out.push(
        `| ${code(f.key)} | ${cell(value(f, get(cfg, f.key), lang))} | ${cell(`**${name}**${help ? ` - ${help}` : ''}${extra}`)} |`,
      );
    }
    out.push('');
  }
  out.push(`<sub>${L.source[lang]} \`${r.dir}web-config.yml\` + \`config.yml\`.</sub>`);
  return out.join('\n');
}

/* ------------------------------------------------------------------ Permissions */

interface Perm {
  name: string;
  description?: string;
  default?: unknown;
  children?: Record<string, boolean>;
}

const isGroup = (name: string) => /\.player$|\.groups\.(support|staff|admin)$/.test(name);
const groupRank = (name: string) => (name.endsWith('.player') ? 0 : ['support', 'staff', 'admin'].indexOf(name.split('.').pop()!) + 1);

function defaultText(d: unknown, lang: Lang) {
  if (d === true || d === 'true') return L.all[lang];
  if (d === false || d === 'false') return L.none[lang];
  if (d === 'not op' || d === '!op' || d === 'notop') return L.notop[lang];
  return L.op[lang]; // Bukkit-Standard ist op
}

async function permissionTable(r: Resources, book: WikiBook, lang: Lang, groups: boolean, where: string) {
  const plugin = parse((await r.read('plugin.yml')) ?? '') ?? {};
  const texts = (parse((await book.read('docs/wiki/permissions.yml')) ?? '') ?? {}) as Record<string, Text>;
  const perms: Perm[] = Object.entries(plugin.permissions ?? {}).map(([name, p]: [string, any]) => ({ name, ...(p ?? {}) }));
  const byName = new Map(perms.map((p) => [p.name, p]));

  // niedrigste Gruppe, die eine Permission (auch über Kinder) enthält
  const lowest = new Map<string, number>();
  const visit = (name: string, rank: number, seen: Set<string>) => {
    if (seen.has(name)) return;
    seen.add(name);
    if (!lowest.has(name) || lowest.get(name)! > rank) lowest.set(name, rank);
    for (const [child, on] of Object.entries(byName.get(name)?.children ?? {})) if (on) visit(child, rank, seen);
  };
  for (const p of perms) if (isGroup(p.name)) visit(p.name, groupRank(p.name), new Set());

  const rows = perms.filter((p) => isGroup(p.name) === groups);
  if (!rows.length) return '';
  const out = groups
    ? [`| ${L.perm[lang]} | ${L.def[lang]} | ${L.for[lang]} |`, '|---|---|---|']
    : [`| ${L.perm[lang]} | ${L.def[lang]} | ${L.in[lang]} | ${L.for[lang]} |`, '|---|---|---|---|'];
  for (const p of rows) {
    // nur die Sprache der Seite - auf englischen Seiten sonst die (englische) description aus plugin.yml
    let text = texts[p.name]?.[lang] ?? '';
    if (!text) {
      text = p.description ?? '';
      if (lang === 'de') warn(`${where}: kein deutscher Text für ${p.name} in docs/wiki/permissions.yml`);
    }
    const def = defaultText(p.default, lang);
    if (groups) out.push(`| ${code(p.name)} | ${def} | ${cell(text)} |`);
    else {
      const rank = p.name.endsWith('.*') ? undefined : lowest.get(p.name);
      out.push(`| ${code(p.name)} | ${def} | ${rank === undefined ? '–' : L.groups[lang][rank]} | ${cell(text)} |`);
    }
  }
  return out.join('\n');
}

/** Ersetzt die Platzhalter einer Seite. Seiten ohne Platzhalter bleiben unverändert. */
export async function expandAuto(src: string, book: WikiBook, lang: Lang, file: string): Promise<string> {
  if (!src.includes('<!-- auto:') && !/<!--\s*auto:/.test(src)) return src;
  const where = `${book.slug}@${book.channel}/${file}`;
  const r = await resources(book);
  if (!r) {
    const msg = `${where}: Platzhalter auto:…, aber keine plugin.yml gefunden`;
    if (strict) throw new Error(`[wiki] ${msg}`);
    warn(msg);
    return src.replace(MARKER, '');
  }
  const parts: Promise<string>[] = [];
  src.replace(MARKER, (_, kind: string) => {
    parts.push(
      kind === 'config'
        ? configTable(r, lang, where)
        : kind === 'permission-groups' || kind === 'permissions'
          ? permissionTable(r, book, lang, kind === 'permission-groups', where)
          : Promise.resolve(`<!-- unbekannt: auto:${kind} -->`),
    );
    return '';
  });
  const done = await Promise.all(parts);
  let i = 0;
  return src.replace(MARKER, () => done[i++]);
}
