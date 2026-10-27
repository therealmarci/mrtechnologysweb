// Zentrale Konfiguration: Projekte, GitHub-Account, Texte pro Projekt.
// Neues Projekt = neuer Eintrag in PROJECTS (Icon in src/lib/pixelart.ts ergänzen).

export const SITE = {
  name: 'MRtechnology',
  url: 'https://mrtechnology.marcelr.at',
  owner: 'therealmarci',
};

// Angaben für Impressum und Datenschutz. Leere Werte erscheinen auf der Seite als markierter Platzhalter.
export const LEGAL = {
  name: 'Marcel Reiter', // Vor- und Nachname
  street: '', // optional - für eine private, nicht kommerzielle Seite reicht der Ort
  city: '', // z.B. "1010 Wien" - leer: stattdessen addressNote
  addressNote: { de: 'Adresse auf Anfrage', en: 'Address available on request' },
  country: { de: 'Österreich', en: 'Austria' },
  email: 'contact@cl.marcelr.at',
  updated: '2026-10-27', // Stand der Datenschutzerklärung
};

export type Lang = 'de' | 'en';
export const LANGS: Lang[] = ['de', 'en'];

export interface DocPage {
  id: string; // URL-Teil: /docs/<slug>/<id>/ ("guide" = Hauptseite)
  file: string; // Datei im Repo (Deutsch)
  fileEn?: string; // englische Fassung, falls vorhanden - sonst Hinweis + deutscher Text
  label: Record<Lang, string>;
}

export interface Variant {
  id: string; // Tag-Präfix, z.B. "plugin" für plugin-mc26.3-v0.2.0 ("" = kein Präfix)
  label: Record<Lang, string>;
}

export interface Project {
  slug: string;
  name: string;
  repo: string;
  icon: string;
  kind: Record<Lang, string>;
  tagline: Record<Lang, string>;
  docs: DocPage[];
  variants: Variant[];
  issueForms: boolean; // hat das Repo .github/ISSUE_TEMPLATE (bug_report.yml usw.)?
}

const GUIDE: DocPage = {
  id: 'guide',
  file: 'README.md',
  fileEn: 'README.en.md',
  label: { de: 'Anleitung', en: 'Guide' },
};
const DEV: DocPage = {
  id: 'dev',
  file: 'docs/DOKUMENTATION.md',
  fileEn: 'docs/DOCUMENTATION.en.md',
  label: { de: 'Für Entwickler', en: 'For developers' },
};
const SINGLE: Variant[] = [{ id: '', label: { de: 'Plugin', en: 'Plugin' } }];
const PAPER = { de: 'Paper-Plugin', en: 'Paper plugin' };

export const PROJECTS: Project[] = [
  {
    slug: 'mrsleep',
    name: 'MRsleep',
    repo: 'mrsleep',
    icon: 'bed',
    kind: PAPER,
    tagline: {
      de: 'Schlafquote mit Ausnahmen, /nosleep für Farmbauer und ein Admin-Menü mit Live-Status.',
      en: 'Sleep quota with exemptions, /nosleep for farm builders and an admin menu with live status.',
    },
    docs: [GUIDE, DEV],
    variants: SINGLE,
    issueForms: true,
  },
  {
    slug: 'mrchunks',
    name: 'MRchunks',
    repo: 'mrchunks',
    icon: 'chunks',
    kind: PAPER,
    tagline: {
      de: 'Chunkloader mit Einladungen, Kartenansicht in squaremap und fairen Limits.',
      en: 'Chunk loader with invites, squaremap integration and fair limits.',
    },
    docs: [GUIDE, DEV],
    variants: SINGLE,
    issueForms: true,
  },
  {
    slug: 'mradmin',
    name: 'MRadmin',
    repo: 'mradmin',
    icon: 'crown',
    kind: PAPER,
    tagline: {
      de: 'Admin-Werkzeugkasten: Wartung, Tickets, Staff-Chat, Ankündigungen und Weboberfläche.',
      en: 'Admin toolkit: maintenance, tickets, staff chat, announcements and a web interface.',
    },
    docs: [GUIDE],
    variants: SINGLE,
    issueForms: true,
  },
  {
    slug: 'mrpvp',
    name: 'MRpvp',
    repo: 'mrpvp',
    icon: 'swords',
    kind: PAPER,
    tagline: {
      de: 'Duelle in eigenen Arenen: Einladung, Kits, eigene Statistik und sichere Rückgabe.',
      en: 'Duels in dedicated arenas: invites, kits, separate stats and safe item return.',
    },
    docs: [GUIDE],
    variants: SINGLE,
    issueForms: true,
  },
  {
    slug: 'mrtoolbar',
    name: 'MRtoolbar',
    repo: 'mrtoolbar',
    icon: 'pickaxe',
    kind: { de: 'Plugin + Fabric-Mod', en: 'Plugin + Fabric mod' },
    tagline: {
      de: 'Werkzeuggürtel: Werkzeuge per Tastendruck wechseln - Plugin für den Server, Mod für den Client.',
      en: 'Tool belt: swap tools with a key press - plugin for the server, mod for the client.',
    },
    docs: [GUIDE],
    variants: [
      { id: 'plugin', label: { de: 'Plugin (Server)', en: 'Plugin (server)' } },
      { id: 'mod', label: { de: 'Fabric-Mod (Client)', en: 'Fabric mod (client)' } },
    ],
    issueForms: false,
  },
];

export const repoUrl = (p: Project) => `https://github.com/${SITE.owner}/${p.repo}`;
