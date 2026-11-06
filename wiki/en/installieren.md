# Install & update

## What you need
- A **Paper server** (or a fork like Purpur) on the Minecraft version the plugin is built for - currently **26.3** with **Java 25**.
- Recommended: **[LuckPerms](https://luckperms.net/)** for permissions. Without LuckPerms only OPs have access.
- For MRtoolbar and MRwaypoints the players also need the mod: **Fabric Loader** and **[Fabric API](https://modrinth.com/mod/fabric-api)**.

## Install
1. On the **Downloads** page, choose the Minecraft version and download the plugin.
2. Put the JAR into the `plugins/` folder (mods: into the player's `mods/` folder).
3. Start the server. Every plugin creates `plugins/<Plugin>/config.yml` and the language files in `plugins/<Plugin>/lang/`.
4. [Give permissions](https://mrtechnology.marcelr.at/wiki/allgemein/rechte/) - and you are ready to go.

> [!TIP]
> **With MRadmin you can do it in the browser:** Under **Plugins** in the web interface you see all MRtechnology plugins and install missing ones with one click. You configure them there as well (tab **Configuration**).

## Update
1. Replace the old JAR with the new one.
2. Restart the server.

If the layout of a config changes, the plugin adapts it on startup: your settings stay, new options are added with their defaults, and the old file is backed up as `config.v<N>.backup.yml`. New messages are added to your language files the same way - your own changes stay.

- **Update notice:** Every plugin checks regularly whether there is a new version for your Minecraft version and reports it in the console and to admins when they join. Check any time: `/<plugin> version`.
- **With MRadmin:** Updates can be downloaded in the browser (only official releases with a matching checksum). They go to `plugins/update/` and are applied on the next restart.

> [!WARNING]
> Make a backup of the server folder before every update.

## Versions
Versions are called `mc<Minecraft>-v<version>`, e.g. `mc26.3-v1.2.0`. For plugin + mod there is a `plugin-` or `mod-` in front - plugin and mod have their own versions, an update of one never forces an update of the other.

| Version | Meaning |
|---|---|
| `0.x` | **Pre-release** - works, but may still change |
| `1.2.0` → `1.2.1` | Bug fix |
| `1.2.0` → `1.3.0` | New features |
| `1.x` → `2.0.0` | Big change - read the changelog first |
