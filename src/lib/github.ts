// Holt Releases und Doku beim Build von GitHub. Ergebnisse werden pro Build zwischengespeichert.
// GITHUB_TOKEN (optional, im Workflow automatisch gesetzt) hebt das API-Limit von 60 auf 5000/h.
import { SITE, type Project, type Variant } from '../config';

export interface Release {
  tag: string;
  variant: string;
  mc: string;
  version: string;
  prerelease: boolean;
  date: string;
  url: string;
  body: string;
  asset?: { name: string; url: string; size: number; downloads: number };
}

const TAG = /^(?:([a-z]+)-)?mc([\d.]+)-v(.+)$/;
const token = process.env.GITHUB_TOKEN;
const strict = !!process.env.CI; // im CI lieber abbrechen als eine leere Seite deployen

const cache = new Map<string, Promise<unknown>>();

function cached<T>(key: string, load: () => Promise<T>): Promise<T> {
  if (!cache.has(key)) cache.set(key, load());
  return cache.get(key) as Promise<T>;
}

function fail(msg: string) {
  if (strict) throw new Error(msg);
  console.warn(`[github] ${msg}`);
}

export function getReleases(p: Project): Promise<Release[]> {
  return cached(`rel:${p.repo}`, async () => {
    const res = await fetch(`https://api.github.com/repos/${SITE.owner}/${p.repo}/releases?per_page=100`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) {
      fail(`Releases von ${p.repo}: HTTP ${res.status}`);
      return [];
    }
    const list = (await res.json()) as any[];
    return list
      .filter((r) => !r.draft)
      .map((r): Release | null => {
        const m = TAG.exec(r.tag_name);
        if (!m) return null;
        const jar = r.assets.find((a: any) => a.name.endsWith('.jar')) ?? r.assets[0];
        return {
          tag: r.tag_name,
          variant: m[1] ?? '',
          mc: m[2],
          version: m[3],
          prerelease: r.prerelease,
          date: r.published_at,
          url: r.html_url,
          body: r.body ?? '',
          asset: jar && {
            name: jar.name,
            url: jar.browser_download_url,
            size: jar.size,
            downloads: jar.download_count,
          },
        };
      })
      .filter((r): r is Release => r !== null)
      .sort((a, b) => b.date.localeCompare(a.date));
  });
}

/** Neueste stabile Version + neuere Vorabversion (falls es eine gibt) für eine Variante. */
export async function latest(p: Project, v: Variant) {
  const rel = (await getReleases(p)).filter((r) => r.variant === v.id);
  const stable = rel.find((r) => !r.prerelease);
  const pre = rel.find((r) => r.prerelease && (!stable || r.date > stable.date));
  return { stable, pre };
}

export async function totalDownloads(p: Project) {
  return (await getReleases(p)).reduce((n, r) => n + (r.asset?.downloads ?? 0), 0);
}

/** Rohtext einer Datei auf dem Standard-Branch, undefined wenn es sie nicht gibt. */
export function getFile(p: Project, path: string): Promise<string | undefined> {
  return cached(`file:${p.repo}:${path}`, async () => {
    // Vorschau unveröffentlichter Doku: LOCAL_REPOS=.. liest aus den lokalen Repos statt von GitHub
    if (process.env.LOCAL_REPOS) {
      const { readFile } = await import('node:fs/promises');
      return readFile(`${process.env.LOCAL_REPOS}/${p.repo}/${path}`, 'utf8').catch(() => undefined);
    }
    const res = await fetch(`https://raw.githubusercontent.com/${SITE.owner}/${p.repo}/HEAD/${path}`);
    if (res.status === 404) return undefined;
    if (!res.ok) {
      fail(`${p.repo}/${path}: HTTP ${res.status}`);
      return undefined;
    }
    return res.text();
  });
}

export const formatSize = (bytes: number) =>
  bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
