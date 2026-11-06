# Rechte mit LuckPerms

**Alle Plugins sind gleich aufgebaut:** ein Paket für Spieler und drei Gruppen fürs Team. Jede Gruppe enthält die darunter - Staff kann alles, was Support kann, Admin alles von Staff.

| Paket | Für wen |
|---|---|
| `<plugin>.player` | Spieler - die normalen Funktionen und `/<plugin> version` |
| `<plugin>.groups.support` | Support - ansehen und helfen |
| `<plugin>.groups.staff` | Staff - eingreifen |
| `<plugin>.groups.admin` | Admins - alles, auch Einstellungen |

Standardmäßig haben die Pakete nur OPs - du entscheidest, wer was bekommt. Die einzelnen Permissions bleiben daneben bestehen: Damit gibst du einzelnen Leuten etwas dazu oder nimmst aus einer Gruppe etwas heraus. Was genau in den Gruppen eines Plugins steckt, steht auf seiner Seite **Permissions**.

## Schnell eingerichtet
Für ein einzelnes Plugin, z.B. MRsleep:
```text
/lp group default permission set mrsleep.player true
/lp group supporter permission set mrsleep.groups.support true
/lp group staff permission set mrsleep.groups.staff true
/lp group admin permission set mrsleep.groups.admin true
```

**Fertige Gruppen für alle Plugins** (Gruppen anlegen, vererben, alle Pakete setzen) zum Kopieren: [Permissions aller Plugins](https://mrtechnology.marcelr.at/wiki/mradmin/alle-permissions/).

> [!WARNING]
> **Vorsicht mit `*`:** Wer `*` oder `<plugin>.*` hat, bekommt auch Ausnahme-Rechte wie `mrsleep.exempt` (zählt nicht zur Schlafquote) oder `mrchunks.exempt` (darf keine Chunkloader haben). Setz solche Rechte für Admin-Gruppen ausdrücklich auf `false`, z.B. `/lp group admin permission set mrsleep.exempt false`.
