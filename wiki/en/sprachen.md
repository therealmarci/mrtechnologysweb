# Languages & messages

## Every player in their language
With `general.language: auto` (default) every player gets the language they set in Minecraft: German (also Austria and Switzerland) → German, English → English. All other languages get `general.fallback-language` (default English). With `general.language: de` or `en` everyone gets the same language.

Texts without a single recipient - Discord, emails, push notifications, the server list - use `general.server-language` (default `en`). On a German server, set `general.server-language: de`.

The console is always English.

## Change messages
All messages are in `plugins/<Plugin>/lang/de.yml` and `en.yml` in [MiniMessage format](https://docs.advntr.dev/minimessage/format.html):
- Change a message, save, `/<plugin> reload` - done.
- An empty message (`""`) turns the message off.
- Chat messages are short on purpose, details are in the **hover** (move the mouse over the message).
- The plugin adds new messages from updates by itself, your changes stay.

## Your own language
Copy `lang/en.yml`, e.g. as `lang/fr.yml`, and translate it. With `general.language: auto`, French players then get it automatically.

> [!TIP]
> **Broken umlauts** („Ã¤“ instead of „ä“)? Set the encoding in your editor to **UTF-8**.
