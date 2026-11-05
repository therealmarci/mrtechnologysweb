# Installieren & aktualisieren

## Was du brauchst
- Einen **Paper-Server** (oder einen Fork wie Purpur) in der Minecraft-Version, für die das Plugin gebaut ist - aktuell **26.3** mit **Java 25**.
- Empfohlen: **[LuckPerms](https://luckperms.net/)** für die Rechte. Ohne LuckPerms haben nur OPs Zugriff.
- Für MRtoolbar und MRwaypoints brauchen die Spieler zusätzlich den Mod: **Fabric Loader** und **[Fabric API](https://modrinth.com/mod/fabric-api)**.

## Installieren
1. Auf der Seite **Downloads** die Minecraft-Version wählen und das Plugin herunterladen.
2. Die JAR in den Ordner `plugins/` legen (Mods: beim Spieler in `mods/`).
3. Den Server starten. Jedes Plugin legt dabei `plugins/<Plugin>/config.yml` und die Sprachdateien in `plugins/<Plugin>/lang/` an.
4. [Rechte vergeben](https://mrtechnology.marcelr.at/wiki/allgemein/rechte/) - danach ist alles startklar.

> [!TIP]
> **Mit MRadmin geht es auch im Browser:** Unter **Plugins** in der Weboberfläche siehst du alle MRtechnology-Plugins und installierst fehlende mit einem Klick. Dort stellst du sie auch ein (Reiter **Konfiguration**).

## Aktualisieren
1. Die alte JAR durch die neue ersetzen.
2. Den Server neu starten.

Ändert sich der Aufbau einer Config, passt das Plugin sie beim Start selbst an: Deine Einstellungen bleiben, neue Optionen kommen mit Standardwerten dazu, die alte Datei wird als `config.v<N>.backup.yml` gesichert. Neue Texte kommen genauso in deine Sprachdateien - deine eigenen Änderungen bleiben.

- **Update-Hinweis:** Jedes Plugin prüft regelmäßig, ob es eine neue Version für deine Minecraft-Version gibt, und meldet das in der Konsole und beim Betreten an Admins. Jederzeit nachsehen: `/<plugin> version`.
- **Mit MRadmin:** Updates lassen sich im Browser herunterladen (nur offizielle Releases mit passender Prüfsumme). Sie landen in `plugins/update/` und werden beim nächsten Neustart eingespielt.

> [!WARNING]
> Leg vor jedem Update eine Sicherung des Server-Ordners an.

## Versionen
Versionen heißen `mc<Minecraft>-v<Version>`, z.B. `mc26.3-v1.2.0`. Bei Plugin + Mod steht `plugin-` bzw. `mod-` davor - Plugin und Mod haben eigene Versionen, ein Update des einen zwingt nie zum Update des anderen.

| Version | Bedeutung |
|---|---|
| `0.x` | **Vorabversion** - funktioniert, kann sich aber noch ändern |
| `1.2.0` → `1.2.1` | Fehlerbehebung |
| `1.2.0` → `1.3.0` | Neue Funktionen |
| `1.x` → `2.0.0` | Große Änderung - vorher den Changelog lesen |
