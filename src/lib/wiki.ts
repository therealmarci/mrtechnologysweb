// Wiki: Seitenbaum pro Projekt ("Buch") aus docs/wiki/index.yml des Repos, plus die gemeinsamen Seiten
// unter wiki/ in diesem Repo. Fehlt die index.yml, wird das Projekt wie früher gezeigt (README + Doku-Tabs
// aus config.ts) - so muss nicht jedes Repo gleichzeitig umziehen.
// Zwei Stände: "stable" = Standard-Branch (main, veröffentlicht), "preview" = beta (unveröffentlicht).
import { readFile } from 'node:fs/promises';
import { parse } from 'yaml';
import { PROJECTS, SITE, repoUrl, type Lang, type Project } from '../config';
import { autoSources } from './autotables';
import { getFile } from './github';

export type Channel = 'stable' | 'preview';
export type Audience = 'player' | 'admin' | 'dev';
type Text = Record<Lang, string>;

export interface WikiPage {
  id: string; // URL-Teil, "" = Einstieg des Buchs
  file: string; // Pfad im Repo
  fileEn?: string;
  title: Text;
}

export interface WikiSection {
  title: Text;
  audience?: Audience;
  pages: WikiPage[];
}

export interface WikiBook {
  slug: string;
  name: string;
  icon: string;
  project?: Project; // undefined = gemeinsame Seiten
  channel: Channel;
  legacy: boolean; // keine index.yml - alte README-Ansicht
  sections: WikiSection[];
  pages: WikiPage[];
  read(path: string): Promise<string | undefined>;
  /** Link zur Datei auf GitHub (Bearbeiten immer auf dem Entwicklungs-Branch) */
  sourceUrl(file: string): string;
  editUrl(file: string): string;
}

export const GENERAL = { slug: 'allgemein', name: 'Allgemein', icon: 'grass', repo: 'mrtechnologysweb' };
const BRANCH: Record<Channel, string> = { stable: 'HEAD', preview: 'beta' };
const WIKI_DIR = 'docs/wiki/';
const strict = !!process.env.CI;

const text = (v: unknown, fallback = ''): Text => {
  if (typeof v === 'string') return { de: v, en: v };
  const o = (v ?? {}) as Partial<Text>;
  return { de: o.de ?? o.en ?? fallback, en: o.en ?? o.de ?? fallback };
};

function problem(msg: string) {
  if (strict) throw new Error(`[wiki] ${msg}`);
  console.warn(`[wiki] ${msg}`);
}

/** Pfad in der index.yml: relativ zu docs/wiki/ (bzw. wiki/), mit "/" am Anfang relativ zum Repo. */
const resolve = (dir: string, f: string) => (f.startsWith('/') ? f.slice(1) : dir + f);

async function fromIndex(src: string, dir: string, where: string, exists: (f: string) => Promise<boolean>) {
  const data = (parse(src) ?? {}) as { sections?: any[] };
  const sections: WikiSection[] = [];
  const seen = new Set<string>();
  for (const s of data.sections ?? []) {
    const pages: WikiPage[] = [];
    for (const raw of s.pages ?? []) {
      const id = String(raw.id ?? '').replace(/^\/|\/$/g, '');
      if (!raw.file || seen.has(id) || !/^[a-z0-9-]*$/.test(id)) {
        problem(`${where}: Seite "${id}" fehlerhaft oder doppelt`);
        continue;
      }
      const file = resolve(dir, raw.file);
      if (!(await exists(file))) {
        problem(`${where}: ${file} fehlt`);
        continue;
      }
      seen.add(id);
      const fileEn = raw.fileEn ? resolve(dir, raw.fileEn) : undefined;
      pages.push({ id, file, fileEn, title: text(raw.title, id) });
    }
    if (pages.length) sections.push({ title: text(s.title), audience: s.audience, pages });
  }
  if (!seen.has('') && sections[0]) sections[0].pages[0].id = '';
  return sections;
}

const CHANGELOGS: [string, Text][] = [
  ['CHANGELOG.md', { de: 'Changelog', en: 'Changelog' }],
  ['plugin/CHANGELOG.md', { de: 'Changelog Plugin', en: 'Changelog plugin' }],
  ['mod/CHANGELOG.md', { de: 'Changelog Mod', en: 'Changelog mod' }],
];

/** Alte Ansicht: README als Einstieg, Doku-Tabs aus config.ts und der Changelog als eigene Seiten. */
async function legacy(p: Project, read: (f: string) => Promise<string | undefined>) {
  const pages: WikiPage[] = [];
  for (const d of p.docs) {
    if (await read(d.file)) pages.push({ id: d.id === 'guide' ? '' : (d.wikiId ?? d.id), file: d.file, fileEn: d.fileEn, title: d.label });
  }
  for (const [file, title] of CHANGELOGS) {
    if (await read(file)) pages.push({ id: file.includes('/') ? `changelog-${file.split('/')[0]}` : 'changelog', file, title });
  }
  return pages.length ? [{ title: { de: 'Anleitung', en: 'Guide' }, pages }] : [];
}

const books = new Map<string, Promise<WikiBook | undefined>>();

export function getBook(p: Project, channel: Channel): Promise<WikiBook | undefined> {
  const key = `${p.slug}:${channel}`;
  if (!books.has(key)) {
    books.set(
      key,
      (async () => {
        const branch = BRANCH[channel];
        const read = (f: string) => getFile(p, f, branch);
        const index = await read(`${WIKI_DIR}index.yml`);
        const sections = index
          ? await fromIndex(index, WIKI_DIR, `${p.repo}@${branch}`, async (f) => (await read(f)) !== undefined)
          : await legacy(p, read);
        if (!sections.length) return undefined;
        return {
          slug: p.slug,
          name: p.name,
          icon: p.icon,
          project: p,
          channel,
          legacy: !index,
          sections,
          pages: sections.flatMap((s) => s.pages),
          read,
          sourceUrl: (f) => `${repoUrl(p)}/blob/${channel === 'preview' ? 'beta' : 'HEAD'}/${f}`,
          editUrl: (f) => `${repoUrl(p)}/edit/beta/${f}`,
        } satisfies WikiBook;
      })(),
    );
  }
  return books.get(key)!;
}

/** Gemeinsame Seiten (wiki/ in diesem Repo) - gibt es nur einmal, ohne Vorschau. */
export function getGeneral(): Promise<WikiBook | undefined> {
  const key = 'general';
  if (!books.has(key)) {
    books.set(
      key,
      (async () => {
        const read = (f: string) => readFile(f, 'utf8').catch(() => undefined);
        const index = await read('wiki/index.yml');
        if (!index) return undefined;
        const sections = await fromIndex(index, 'wiki/', 'wiki/index.yml', async (f) => (await read(f)) !== undefined);
        const repo = `https://github.com/${SITE.owner}/${GENERAL.repo}`;
        return {
          ...GENERAL,
          channel: 'stable' as Channel,
          legacy: false,
          sections,
          pages: sections.flatMap((s) => s.pages),
          read,
          sourceUrl: (f: string) => `${repo}/blob/main/${f}`,
          editUrl: (f: string) => `${repo}/edit/main/${f}`,
        };
      })(),
    );
  }
  return books.get(key)!;
}

/** Alle Bücher eines Stands: gemeinsame Seiten zuerst, dann die Projekte in der Reihenfolge aus config.ts. */
export async function getBooks(channel: Channel = 'stable'): Promise<WikiBook[]> {
  const list = [channel === 'stable' ? await getGeneral() : undefined];
  for (const p of PROJECTS) list.push(await getBook(p, channel));
  return list.filter((b): b is WikiBook => b !== undefined);
}

/** Hat beta einen anderen Doku-Stand als main? Nur dann gibt es Vorschau-Seiten. */
export async function hasPreview(p: Project): Promise<boolean> {
  const [a, b] = await Promise.all([getBook(p, 'stable'), getBook(p, 'preview')]);
  if (!b) return false;
  if (!a) return true;
  const sig = async (book: WikiBook) =>
    JSON.stringify(book.sections) +
    (await Promise.all(book.pages.flatMap((pg) => [pg.file, pg.fileEn ?? '']).map(book.read))).join('\0') +
    (await autoSources(book)); // automatische Tabellen hängen an plugin.yml/config.yml
  return (await sig(a)) !== (await sig(b));
}

/** URL-Pfad (ohne Sprache) einer Seite. */
export const pagePath = (book: Pick<WikiBook, 'slug' | 'channel'>, id = '') =>
  `wiki/${book.channel === 'preview' ? 'preview/' : ''}${book.slug}${id ? `/${id}` : ''}`;

export const sectionOf = (book: WikiBook, page: WikiPage) => book.sections.find((s) => s.pages.includes(page))!;

/** Leeren Abschnitt "Unveröffentlicht" aus einem Changelog entfernen (auf main immer leer). */
export function tidyChangelog(src: string) {
  return src.replace(/^## \[(Unveröffentlicht|Unreleased)\]\s*\n(?=## |\s*$)/m, '');
}
