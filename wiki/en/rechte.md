# Permissions with LuckPerms

**All plugins are built the same way:** one package for players and three groups for the team. Every group contains the one below - staff can do everything support can, admin everything staff can.

| Package | For whom |
|---|---|
| `<plugin>.player` | Players - the normal features and `/<plugin> version` |
| `<plugin>.groups.support` | Support - view and help |
| `<plugin>.groups.staff` | Staff - step in |
| `<plugin>.groups.admin` | Admins - everything, including settings |

By default only OPs have the packages - you decide who gets what. The single permissions stay usable next to them: use them to give single people something extra or to take something out of a group. What exactly is in the groups of a plugin is listed on its **Permissions** page.

## Quick setup
For a single plugin, e.g. MRsleep:
```text
/lp group default permission set mrsleep.player true
/lp group supporter permission set mrsleep.groups.support true
/lp group staff permission set mrsleep.groups.staff true
/lp group admin permission set mrsleep.groups.admin true
```

**Ready-made groups for all plugins** (create groups, set up inheritance, set all packages) to copy: [Permissions of all plugins](https://mrtechnology.marcelr.at/wiki/mradmin/alle-permissions/).

> [!WARNING]
> **Careful with `*`:** Whoever has `*` or `<plugin>.*` also gets exemption permissions like `mrsleep.exempt` (not counted for the sleep quota) or `mrchunks.exempt` (may not have chunk loaders). Set such permissions to `false` explicitly for admin groups, e.g. `/lp group admin permission set mrsleep.exempt false`.
