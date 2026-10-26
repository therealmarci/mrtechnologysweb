// Bereitet hochgeladene Configs für ein öffentliches Issue vor: Kommentarzeilen raus (kürzerer Link,
// die Defaults kennt das Team) und geheime Werte unkenntlich machen.
// Läuft nur im Browser - die Datei verlässt den Rechner erst, wenn der Nutzer das Issue abschickt.

// Schlüsselnamen mit Geheimnissen. "pass" nur als eigenes Wort, damit z.B. "bypass" nicht trifft.
const SECRET_KEY = /(^|[-_.])pass$|passwor[dt]|token|secret|webhook|api[-_]?key|credential|private[-_]?key/i;
const HARMLESS = /^(["']{2}|~|null|true|false|-?\d+(\.\d+)?|\[\]|\{\})$/i;
const KEY_VALUE = /^(\s*(?:-\s*)?["']?([\w.-]+)["']?\s*[:=]\s*)(.*)$/;
const COMMENT = /^\s*(#|\/\/|;)/;
const WEBHOOK = /https:\/\/(?:\w+\.)?discord(?:app)?\.com\/api\/webhooks\/[^\s"']+/g;
const URL_LOGIN = /(\w+:\/\/[^\s:/@"']+:)[^\s@"']+@/g;

export function redact(src: string) {
  let count = 0;
  const out: string[] = [];
  for (const raw of src.split(/\r?\n/)) {
    if (COMMENT.test(raw)) continue;
    if (!raw.trim() && !out.at(-1)?.trim()) continue; // keine doppelten Leerzeilen
    let line = raw;
    const m = KEY_VALUE.exec(line);
    const value = m?.[3].replace(/\s+#.*$/, '').trim();
    if (m && value && SECRET_KEY.test(m[2]) && !HARMLESS.test(value)) {
      line = `${m[1]}"***"`;
      count++;
    }
    // Discord-Webhooks und Zugangsdaten in URLs (user:pass@host), egal unter welchem Schlüssel
    line = line
      .replace(WEBHOOK, () => (count++, 'https://discord.com/api/webhooks/***'))
      .replace(URL_LOGIN, (_, head) => (count++, `${head}***@`));
    out.push(line);
  }
  return { text: out.join('\n').trim(), count };
}
