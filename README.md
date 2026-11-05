# MRtechnology Website

Projektseite für alle MRtechnology-Plugins: Wiki mit Suche, Downloads und Fehler melden.
Statische Seite mit [Astro](https://astro.build), gehostet auf GitHub Pages. Deutsch unter `/de/`, Englisch unter `/en/`.

## Woher kommen die Inhalte?

Alles wird **beim Build direkt von GitHub geholt**. Es gibt nichts doppelt zu pflegen.

| Seite | Quelle |
|---|---|
| Wiki | `docs/wiki/` des Plugin-Repos mit Seitenbaum `docs/wiki/index.yml` (siehe [Wiki](#wiki)). Fehlt die `index.yml`, zeigt das Wiki wie früher die `README.md` als eine Seite, dazu die Doku-Tabs aus `docs` in [src/config.ts](src/config.ts) und den Changelog |
| Wiki „Allgemein“ | [wiki/](wiki/) in diesem Repo (gleiches Format) |
| Wiki-Vorschau | dasselbe vom Branch `beta` unter `/<lang>/wiki/preview/<projekt>/` - nur wenn sich die Doku auf `beta` von `main` unterscheidet; nicht in Suchmaschinen und nicht in der Suche |
| Downloads | GitHub Releases mit Tags `mc<MC>-v<version>` bzw. `<variante>-mc<MC>-v<version>` (MRtoolbar). Pro MC-Version: neueste stabile Version (sonst neueste Vorabversion), der Rest unter „Ältere Versionen“ |
| Fehler melden | öffnet `issues/new` mit der passenden Issue-Form (wird automatisch erkannt: `.github/ISSUE_TEMPLATE/bug_report.yml` auf dem Standard-Branch, sonst ein vorausgefüllter Text) (`bug_report.yml`, `feature_request.yml`, `feature_change.yml`). Vorausgefüllt: Titel, Text (`what` / `idea` / `wanted`), `version`, `server`, `config` |

**Config-Upload:** Die Datei wird nur im Browser gelesen ([src/lib/redact.ts](src/lib/redact.ts)):
- Kommentarzeilen werden entfernt.
- Passwörter, Tokens, Webhook-URLs und Zugangsdaten in URLs werden durch `***` ersetzt.
- Danach landet die Datei im Feld `config` der Issue-Form.

Ist der Link dann länger als etwa 7.500 Zeichen (z.B. die volle MRadmin-Config), wird die Config in die Zwischenablage kopiert und das Issue ohne sie geöffnet.

**Impressum & Datenschutz:** Die Angaben stehen in `LEGAL` in [src/config.ts](src/config.ts). Leere Felder erscheinen auf der Seite rot markiert, und der Build warnt.

Beim Rendern der Wiki-Seiten wird Folgendes angepasst:
- Die erste `# Überschrift` und ein händisches Inhaltsverzeichnis (`## Inhalt`) werden entfernt, weil die Seite einen eigenen Kopf und „Auf dieser Seite“ hat.
- Relative Links zeigen auf GitHub, außer sie zeigen auf eine Wiki-Seite.
- `> [!NOTE]`-Hinweise werden als Box dargestellt.

Fehlt die englische Datei, zeigt `/en/` den deutschen Text mit einem Hinweis.

## Wiki

**Adressen:** `/<lang>/wiki/` (Startseite), `/<lang>/wiki/<projekt>/<seite>/`, gemeinsame Seiten unter `/<lang>/wiki/allgemein/…`. Kurzlinks ohne Sprache: `/wiki/<projekt>/`. Die alten Adressen `/docs/<projekt>/` und `/<lang>/docs/<projekt>/<tab>/` leiten ins Wiki weiter, alte Sprungmarken der README (`#permissions`) landen auf der Seite, auf der die Überschrift jetzt steht.

**Seitenbaum** `docs/wiki/index.yml` im Plugin-Repo:

```yaml
sections:
  - title: {de: Für Spieler, en: For players}
    audience: player          # player | admin | dev - Etikett + Einordnung auf der Wiki-Startseite
    pages:
      - {id: "", file: einstieg.md, title: {de: Überblick, en: Overview}}   # id "" = Einstieg
      - {id: befehle, file: befehle.md, fileEn: befehle.en.md, title: {de: Befehle, en: Commands}}
      - {id: changelog, file: /CHANGELOG.md, title: Changelog}             # "/" = relativ zum Repo
```

- `file` ist relativ zu `docs/wiki/`, mit `/` am Anfang relativ zum Repo. Die erste `# Überschrift` der Datei wird entfernt (der Titel kommt aus der `index.yml`).
- Links zwischen den Seiten als relative Markdown-Links (`[Befehle](befehle.md#abschnitt)`), Links auf andere Projekte als volle Adresse (`https://mrtechnology.marcelr.at/wiki/mradmin/permissions/`) - beide werden zu Wiki-Links.
- Fehlt eine Datei oder ist eine `id` doppelt, bricht der Build im CI ab (lokal nur eine Warnung).

**Suche:** [Pagefind](https://pagefind.app) baut nach `astro build` einen statischen Index nach `dist/pagefind/` (`npm run build` macht beides). Indexiert werden nur veröffentlichte Wiki-Seiten (`data-pagefind-body`), Filter pro Projekt. Öffnen mit `Strg+K`, `/` oder einem Link mit `?q=<suche>`. Im `npm run dev` gibt es keine Suche.

**Vorschau lokal:** `LOCAL_REPOS=.. npm run build` liest alle Projekte aus den lokalen Repos (Arbeitsstand) statt von GitHub - so sieht man unveröffentlichte Wiki-Seiten. Dann gibt es keine Vorschau-Seiten (beide Stände sind gleich).

## Neues Projekt hinzufügen

1. Einen Eintrag in `PROJECTS` in [src/config.ts](src/config.ts) anlegen.
2. Ein 16×16-Icon in [src/lib/pixelart.ts](src/lib/pixelart.ts) ergänzen oder ein vorhandenes nehmen.

## Lokal

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # nach dist/
```

Ohne Token sind 60 GitHub-API-Anfragen pro Stunde erlaubt, das reicht für ein paar Builds. Mehr geht mit einem Token: `GITHUB_TOKEN=$(gh auth token) npm run build`.

## Veröffentlichen (GitHub Pages)

1. Das Repo `therealmarci/mrtechnologysweb` anlegen und pushen.
2. Unter *Settings → Pages → Source* **GitHub Actions** auswählen.
3. Fertig. [deploy.yml](.github/workflows/deploy.yml) baut die Seite in diesen Fällen:
   - bei jedem Push auf `main` und auf Zuruf (*Actions → Deploy → Run workflow*)
   - **alle 15 Minuten, wenn sich bei einem Projekt etwas geändert hat.** Geprüft werden neue oder geänderte Releases und neue Commits auf dem Standard-Branch und auf `beta` (Wiki und Vorschau). Ohne Änderung wird nicht gebaut.
   - jede Nacht, wegen der Downloadzahlen

**Domain:** `mrtechnology.marcelr.at`. Dafür ist ein DNS-Eintrag `mrtechnology CNAME therealmarci.github.io.` nötig, und die Domain steht unter *Settings → Pages → Custom domain*. Den Basis-Pfad stellt der Workflow automatisch um.

### Neue Releases und neue Minecraft-Versionen

In den Plugin-Repos ist dafür nichts nötig. Ein neues Release erscheint nach spätestens etwa 15 Minuten, je nach Auslastung bei GitHub manchmal etwas später.

Eine neue MC-Version (Tag z.B. `mc26.4-v0.1.0`) taucht automatisch oben im Dropdown der Download-Kachel auf und ist vorausgewählt. Solange es für diese MC-Version nur Vorabversionen gibt, steht im Dropdown „(Vorab)“, und der Download-Button ist gelb. Ältere MC-Versionen bleiben im Dropdown wählbar.

Sofort statt nach bis zu 15 Minuten geht es optional mit einem `repository_dispatch` (Typ `release`). Dafür braucht jedes Plugin-Repo ein Token als Secret. Das ist im Moment nicht eingerichtet.
