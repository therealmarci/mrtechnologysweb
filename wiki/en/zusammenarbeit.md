# Working together via MRadmin

Every MRtechnology plugin runs **on its own**. The plugins do not know each other - they only talk to each other through **MRadmin**. If MRadmin is installed, they connect automatically, there is nothing to set up.

## What MRadmin adds
- **One place for everything:** the dashboard and the player menu in game show the information of every plugin.
- **Web interface for the team:** own pages for chunk loaders, sleep, duels and waypoints, a shared **log** (up to 14 days) and the **configuration of all plugins in the browser**.
- **Player page** (`/web`): players see their chunk loaders, duels and statistics and use the map.
- **Plugins & updates:** install and update in the browser.

## Plugins among each other
| With MRadmin | Also needs |
|---|---|
| Players in a duel do not count for the sleep quota | MRsleep + MRpvp |
| The tool bar pauses during a duel | MRtoolbar + MRpvp |
| No chunk loaders can be placed in the arena world | MRchunks + MRpvp |
| Chunk loaders and waypoints on the map of the player page | MRchunks / MRwaypoints |
| Admin mode: not counted for the sleep quota, tool bar pauses, no duels | MRsleep / MRtoolbar / MRpvp |
| Discord log via MRadmin's webhook instead of an own one (`discord.use-mradmin-webhook`) | the plugin in question |

You switch off a connection in MRadmin under `integrations` (e.g. `mrsleep: false`). Which plugins are connected is shown in the console on startup.

> [!NOTE]
> For developers: the interface is the [module API of MRadmin](https://github.com/therealmarci/mradmin/blob/main/docs/MODULE-API.md).
