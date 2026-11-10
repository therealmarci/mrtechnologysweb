// Alle Releases aller MRtechnology-Repos als eine statische Datei: https://mrtechnology.marcelr.at/api/releases.json
// Die Plugins, MRadmin und der Starter fragen zuerst diese Datei statt der GitHub-API - GitHub erlaubt ohne Anmeldung
// nur 60 API-Anfragen pro Stunde und IP, und mehrere Server hinter einer Adresse waren schnell darüber. Die Datei
// entsteht bei jedem Build der Website (sie prüft regelmäßig auf neue Releases) im Format der GitHub-API, nur mit den
// Feldern, die die Plugins brauchen.
import { PROJECTS, SITE } from '../../config';
import { getRawReleases } from '../../lib/github';

export async function GET() {
  const repos: Record<string, unknown[]> = {};
  for (const p of PROJECTS) {
    const list = await getRawReleases(p.repo);
    repos[`${SITE.owner}/${p.repo}`.toLowerCase()] = list
      .filter((r) => !r.draft)
      .map((r) => ({
        tag_name: r.tag_name,
        name: r.name,
        draft: false,
        prerelease: r.prerelease,
        published_at: r.published_at,
        html_url: r.html_url,
        body: r.body ?? '',
        assets: (r.assets ?? []).map((a: any) => ({
          name: a.name,
          browser_download_url: a.browser_download_url,
          size: a.size,
          ...(a.digest ? { digest: a.digest } : {}),
        })),
      }));
  }
  return new Response(JSON.stringify({ generated: new Date().toISOString(), repos }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
