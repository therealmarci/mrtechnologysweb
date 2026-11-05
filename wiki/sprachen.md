# Sprachen & Texte

## Jeder Spieler in seiner Sprache
Mit `general.language: auto` (Standard) bekommt jeder Spieler die Sprache, die er in Minecraft eingestellt hat: Deutsch (auch Österreich und Schweiz) → Deutsch, Englisch → Englisch. Für alle anderen Sprachen gilt `general.fallback-language` (Standard Englisch). Mit `general.language: de` bzw. `en` bekommen alle dieselbe Sprache.

Texte ohne einzelnen Empfänger - Discord, E-Mails, Push-Nachrichten, die Serverliste - kommen in `general.server-language` (Standard `en`). Auf einem deutschen Server also `general.server-language: de` setzen.

Die Konsole ist immer Englisch.

## Texte ändern
Alle Texte stehen in `plugins/<Plugin>/lang/de.yml` und `en.yml` im [MiniMessage-Format](https://docs.advntr.dev/minimessage/format.html):
- Text ändern, speichern, `/<plugin> reload` - fertig.
- Ein leerer Text (`""`) schaltet die Nachricht ab.
- Chatnachrichten sind bewusst kurz, Einzelheiten stehen im **Hover** (Maus über die Nachricht).
- Neue Texte aus Updates ergänzt das Plugin selbst, deine Änderungen bleiben.

## Eigene Sprache
`lang/en.yml` kopieren, z.B. als `lang/fr.yml`, und übersetzen. Mit `general.language: auto` bekommen französische Spieler sie dann automatisch.

> [!TIP]
> **Umlaute kaputt** („Ã¤“ statt „ä“)? Stell die Kodierung im Editor auf **UTF-8**.
