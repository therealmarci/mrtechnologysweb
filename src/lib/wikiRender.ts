// Rendert eine Wiki-Seite: Markdown -> HTML mit Links auf die Wiki-Seiten statt auf GitHub.
import { PROJECTS, SITE, type Lang } from '../config';
import { expandAuto } from './autotables';
import { renderDoc, type Rendered } from './markdown';
import { href } from './url';
import { GENERAL, pagePath, tidyChangelog, type WikiBook, type WikiPage } from './wiki';

export interface RenderedPage extends Rendered {
  file: string; // tatsächlich gerenderte Datei (englisch, falls vorhanden)
  translated: boolean; // englische Seite ohne englische Fassung
}

// Links auf GitHub-Releases/-Issues und Kurzlinks der Website führen auf die Seiten der Website
const GITHUB_LINK = new RegExp(`^https://github\\.com/${SITE.owner}/([\\w.-]+)/(releases|issues)\\b`, 'i');
const SITE_LINK = new RegExp(`^${SITE.url}/(?:(?:de|en)/)?(download|report|docs|wiki)/([\\w-]+)/?([\\w-]+)?/?(#.*)?$`);

function external(lang: Lang, url: string) {
  const gh = GITHUB_LINK.exec(url);
  if (gh) {
    const target = PROJECTS.find((x) => x.repo === gh[1]);
    if (!target) return undefined;
    return gh[2].toLowerCase() === 'releases'
      ? `${href(lang, 'downloads')}#${target.slug}`
      : `${href(lang, 'report')}?p=${target.slug}`;
  }
  const site = SITE_LINK.exec(url);
  if (!site) return undefined;
  const [, kind, slug, page, hash = ''] = site;
  if (slug !== GENERAL.slug && !PROJECTS.some((x) => x.slug === slug)) return undefined;
  if (kind === 'download') return `${href(lang, 'downloads')}#${slug}`;
  if (kind === 'report') return `${href(lang, 'report')}?p=${slug}`;
  return href(lang, `wiki/${slug}${kind === 'wiki' && page ? `/${page}` : ''}`) + hash;
}

const cache = new Map<string, Promise<RenderedPage>>();

export function renderPage(book: WikiBook, page: WikiPage, lang: Lang): Promise<RenderedPage> {
  const key = `${book.slug}:${book.channel}:${page.id}:${lang}`;
  if (!cache.has(key)) cache.set(key, render(book, page, lang));
  return cache.get(key)!;
}

async function render(book: WikiBook, page: WikiPage, lang: Lang): Promise<RenderedPage> {
  const en = lang === 'en' && page.fileEn ? await book.read(page.fileEn) : undefined;
  const file = en !== undefined ? page.fileEn! : page.file;
  let src = en ?? (await book.read(page.file)) ?? '';
  if (/CHANGELOG\.md$/.test(file)) src = tidyChangelog(src);
  src = await expandAuto(src, book, lang, file);

  const internal: Record<string, string> = {};
  for (const pg of book.pages) {
    for (const f of [pg.file, pg.fileEn]) if (f) internal[f] = href(lang, pagePath(book, pg.id));
  }
  internal['README.md'] ??= href(lang, pagePath(book));

  const rendered = renderDoc(src, {
    owner: SITE.owner,
    repo: book.project?.repo ?? GENERAL.repo,
    ref: book.project ? (book.channel === 'preview' ? 'beta' : 'HEAD') : 'main',
    file,
    internal,
    external: (url) => external(lang, url),
  });
  return { ...rendered, file, translated: lang === 'en' && en === undefined };
}
