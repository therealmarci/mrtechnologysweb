# Zusammenarbeit über MRadmin

Jedes MRtechnology-Plugin läuft **allein**. Die Plugins kennen sich gegenseitig nicht - sie sprechen nur über **MRadmin** miteinander. Ist MRadmin installiert, verbinden sie sich automatisch, einrichten musst du nichts.

## Was MRadmin dazubringt
- **Ein Ort für alles:** Dashboard und Spieler-Menü im Spiel zeigen die Infos jedes Plugins.
- **Weboberfläche fürs Team:** eigene Seiten für Chunkloader, Schlaf, Duelle und Wegpunkte, ein gemeinsames **Protokoll** (bis zu 14 Tage) und die **Konfiguration aller Plugins im Browser**.
- **Spielerseite** (`/web`): Spieler sehen ihre Chunkloader, Duelle und Statistiken und nutzen die Karte.
- **Plugins & Updates:** installieren und aktualisieren im Browser.

## Plugins untereinander
| Mit MRadmin | Braucht außerdem |
|---|---|
| Spieler im Duell zählen nicht zur Schlafquote | MRsleep + MRpvp |
| Die Werkzeugleiste pausiert im Duell | MRtoolbar + MRpvp |
| In der Arena-Welt lassen sich keine Chunkloader setzen | MRchunks + MRpvp |
| Chunkloader und Wegpunkte auf der Karte der Spielerseite | MRchunks / MRwaypoints |
| Admin-Modus: zählt nicht zur Schlafquote, Werkzeugleiste pausiert, kein Duell | MRsleep / MRtoolbar / MRpvp |
| Discord-Log über MRadmins Webhook statt eines eigenen (`discord.use-mradmin-webhook`) | das jeweilige Plugin |

Eine Verbindung schaltest du in MRadmin unter `integrations` ab (z.B. `mrsleep: false`). Welche Plugins verbunden sind, steht beim Start in der Konsole.

> [!NOTE]
> Für Entwickler: Die Schnittstelle ist die [Modul-API von MRadmin](https://github.com/therealmarci/mradmin/blob/main/docs/MODULE-API.md).
