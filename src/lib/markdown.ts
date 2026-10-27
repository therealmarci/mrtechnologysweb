// Rendert die README/Doku aus GitHub: Überschriften mit GitHub-kompatiblen Ankern (damit
// bestehende #links funktionieren), Inhaltsverzeichnis für die Sidebar, relative Links -> GitHub.
import { Marked, type Tokens } from 'marked';
import GithubSlugger from 'github-slugger';

export interface TocEntry {
  depth: number;
  text: string;
  id: string;
}

export interface Rendered {
  title?: string;
  html: string;
  toc: TocEntry[];
}

const TOC_HEADINGS = /^(inhalt|inhaltsverzeichnis|contents|table of contents)$/i;
const ALERTS: Record<string, string> = {
  NOTE: 'note',
  TIP: 'tip',
  IMPORTANT: 'important',
  WARNING: 'warning',
  CAUTION: 'caution',
};

const decode = (s: string) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

export interface LinkContext {
  owner: string;
  repo: string;
  file: string; // Pfad der gerenderten Datei im Repo, für relative Links
  /** Repo-Pfad -> interne URL (z.B. README.md -> /de/docs/mrsleep/) */
  internal: Record<string, string>;
  /** absolute URL -> interne URL oder undefined (z.B. GitHub-Releases -> Downloads der Website) */
  external?: (url: string) => string | undefined;
}

function resolveRepoPath(from: string, rel: string) {
  const parts = from.split('/').slice(0, -1);
  for (const seg of rel.split('/')) {
    if (seg === '..') parts.pop();
    else if (seg !== '.' && seg !== '') parts.push(seg);
  }
  return parts.join('/');
}

function rewriteHref(href: string, ctx: LinkContext, image: boolean) {
  if (/^https?:/i.test(href)) return (!image && ctx.external?.(href)) || href;
  if (/^([a-z]+:|#|\/\/)/i.test(href)) return href;
  const [path, hash] = href.split('#');
  const full = resolveRepoPath(ctx.file, decodeURIComponent(path));
  if (!image && ctx.internal[full]) return ctx.internal[full] + (hash ? `#${hash}` : '');
  const base = image
    ? `https://raw.githubusercontent.com/${ctx.owner}/${ctx.repo}/HEAD/`
    : `https://github.com/${ctx.owner}/${ctx.repo}/blob/HEAD/`;
  return base + full + (hash ? `#${hash}` : '');
}

/** Entfernt die erste H1 (steht im Seitenkopf) und ein händisches Inhaltsverzeichnis. */
function stripIntro(tokens: Tokens.Generic[]) {
  const out: Tokens.Generic[] = [];
  let title: string | undefined;
  let skipDepth = 0;
  for (const tok of tokens) {
    if (tok.type === 'heading') {
      if (skipDepth && tok.depth <= skipDepth) skipDepth = 0;
      if (!title && tok.depth === 1) {
        title = tok.text;
        continue;
      }
      if (TOC_HEADINGS.test(tok.text.trim())) {
        skipDepth = tok.depth;
        continue;
      }
    }
    // "**Inhalt:** [1. ...](#..) · ..." als Absatz (Stil der DOKUMENTATION.md)
    if (tok.type === 'paragraph' && /^\*\*(Inhalt|Contents):?\*\*:?/i.test(tok.raw.trim())) continue;
    if (skipDepth) continue;
    out.push(tok);
  }
  // führende Trennlinie nach der Einleitung bleibt stehen, eine doppelte nicht
  return { title, tokens: out.filter((t, i) => !(t.type === 'hr' && out[i - 1]?.type === 'hr')) };
}

export function renderDoc(src: string, ctx: LinkContext): Rendered {
  const slugger = new GithubSlugger();
  const toc: TocEntry[] = [];
  const md = new Marked({ gfm: true });

  md.use({
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        const text = decode(inner).trim();
        const id = slugger.slug(text);
        if (depth >= 2 && depth <= 3) toc.push({ depth, text, id });
        return `<h${depth} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true">#</a>${inner}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const url = rewriteHref(href, ctx, false);
        const ext = /^https?:/.test(url);
        const inner = this.parser.parseInline(tokens);
        return `<a href="${url}"${title ? ` title="${title}"` : ''}${ext ? ' target="_blank" rel="noopener"' : ''}>${inner}</a>`;
      },
      image({ href, title, text }) {
        return `<img src="${rewriteHref(href, ctx, true)}" alt="${text}"${title ? ` title="${title}"` : ''} loading="lazy">`;
      },
    },
  });

  const tokens = md.lexer(src);
  const { title, tokens: body } = stripIntro(tokens as Tokens.Generic[]);
  let html = md.parser(body as any);

  // Tabellen scrollen auf dem Handy horizontal, statt die Seite zu sprengen
  html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');

  // GitHub-Hinweisboxen: > [!NOTE] ...
  html = html.replace(
    /<blockquote>\s*<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/g,
    (_, kind) => `<blockquote class="callout callout-${ALERTS[kind]}"><p>`,
  );

  return { title, html, toc };
}

/** Kurzer Markdown-Text ohne Anker/Inhaltsverzeichnis, z.B. Release-Notizen. */
export function renderSimple(src: string) {
  return new Marked({ gfm: true, breaks: true }).parse(src, { async: false }) as string;
}
