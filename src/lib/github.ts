// Holt Releases und Doku beim Build von GitHub. Ergebnisse werden pro Build zwischengespeichert.
// GITHUB_TOKEN (optional, im Workflow automatisch gesetzt) hebt das API-Limit von 60 auf 5000/h.
import { SITE, type Project, type Variant } from '../config';

export interface Release {
  tag: string;
  variant: string;
  mc: string;
  /** Anzeige: alte Tags "v1.3.1", neues Schema "STA-1.4.0-bu030" / "BET-1.4.1-bu001". */
  version: string;
  prerelease: boolean;
  date: string;
  url: string;
  body: string;
  asset?: { name: string; url: string; size: number; downloads: number };
}

// Tags: alt "[plugin-|mod-]mc26.3-v1.3.1", neu "[plugin-|mod-]mc26.3-STA-1.4.0-bu030" bzw. "...-BET-...".
const TAG = /^(?:([a-z]+)-)?mc([\d.]+)-(?:v(.+)|((?:STA|BET)-\d.*))$/i;
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

/** Die Releases eines Repos so, wie die GitHub-API sie liefert (einmal pro Build). */
export function getRawReleases(repo: string): Promise<any[]> {
  return cached(`raw:${repo}`, async () => {
    const res = await fetch(`https://api.github.com/repos/${SITE.owner}/${repo}/releases?per_page=100`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) {
      fail(`Releases von ${repo}: HTTP ${res.status}`);
      return [];
    }
    return (await res.json()) as any[];
  });
}

export function getReleases(p: Project): Promise<Release[]> {
  return cached(`rel:${p.repo}`, async () => {
    const list = await getRawReleases(p.repo);
    return list
      .filter((r) => !r.draft)
      .map((r): Release | null => {
        const m = TAG.exec(r.tag_name);
        if (!m) return null;
        const jar = r.assets.find((a: any) => a.name.endsWith('.jar')) ?? r.assets[0];
        return {
          tag: r.tag_name,
          variant: (m[1] ?? '').toLowerCase(),
          mc: m[2],
          version: m[3] !== undefined ? `v${m[3]}` : m[4].replace(/^(sta|bet)/i, (c) => c.toUpperCase()),
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

/** "STA-1.4.0-bu030" -> {number: "1.4.0", build: 30}; alte "v1.3.1" -> {number: "1.3.1"}. */
export function versionParts(version: string): { number: string; build?: number } {
  const m = /^(?:STA|BET)-(.+)-bu0*(\d+)$/i.exec(version);
  if (m) return { number: m[1], build: Number(m[2]) };
  return { number: version.replace(/^v/, '') };
}

export interface ChannelPick {
  /** neueste stabile Version, sonst (Plugin hat noch keine) die neueste Beta */
  stable?: Release;
  /** Kanal Beta: die neueste Version überhaupt (Beta bekommt auch Stables) */
  beta?: Release;
  /** alle Releases dieser Minecraft-Version und Variante, neueste zuerst */
  all: Release[];
}

/** Was die Download-Seite für eine Minecraft-Version und Variante je Kanal anbietet. Beta = GitHub-Vorabversion. */
export function pickChannels(releases: Release[], mc: string, variant: string): ChannelPick {
  const all = releases.filter((r) => r.mc === mc && r.variant === variant);
  return { stable: all.find((r) => !r.prerelease) ?? all[0], beta: all[0], all };
}

/** Kurzfassung eines Release-Textes: die fetten Titel der Einträge ("- **Titel:** …") mit ihrem Abschnitt ("### Neu"). */
export function releaseHighlights(body: string): { group: string; title: string }[] {
  const out: { group: string; title: string }[] = [];
  let group = '';
  for (const line of body.split(/\r?\n/)) {
    const h = /^#{2,4}\s+(.+?)\s*$/.exec(line);
    if (h) {
      group = h[1];
      continue;
    }
    const m = /^\s*[-*]\s+\*\*(.+?)\*\*/.exec(line);
    if (m) out.push({ group, title: m[1].replace(/:\s*$/, '').replace(/`/g, '') });
  }
  return out;
}

export async function totalDownloads(p: Project) {
  return (await getReleases(p)).reduce((n, r) => n + (r.asset?.downloads ?? 0), 0);
}

/**
 * Rohtext einer Datei, undefined wenn es sie nicht gibt. `ref` = Branch (Standard: Standard-Branch = main).
 * Vorschau unveröffentlichter Doku: LOCAL_REPOS=.. liest aus den lokalen Repos (Arbeitsstand, für jeden Branch).
 */
export function getFile(p: Project, path: string, ref = 'HEAD'): Promise<string | undefined> {
  return cached(`file:${p.repo}:${ref}:${path}`, async () => {
    if (process.env.LOCAL_REPOS) {
      const { readFile } = await import('node:fs/promises');
      return readFile(`${process.env.LOCAL_REPOS}/${p.repo}/${path}`, 'utf8').catch(() => undefined);
    }
    const res = await fetch(`https://raw.githubusercontent.com/${SITE.owner}/${p.repo}/${ref}/${path}`);
    if (res.status === 404) return undefined;
    if (!res.ok) {
      fail(`${p.repo}@${ref}/${path}: HTTP ${res.status}`);
      return undefined;
    }
    return res.text();
  });
}

export const formatSize = (bytes: number) =>
  bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
