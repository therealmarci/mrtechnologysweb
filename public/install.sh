#!/bin/sh
# ==============================================================================
#   MRtechnology - install a new Minecraft server (Paper + MRadmin) on Linux.
#
#     curl -fsSL https://mrtechnology.marcelr.at/install.sh | sh
#
#   Options (curl ... | sh -s -- <options>):
#     --dir <folder>        default: ~/MINECRAFT/Server (must be empty or missing)
#     --memory-min <size>   e.g. 2G      --memory-max <size>   e.g. 6G
#     --web-url <address>   public address of the web interface, e.g. https://admin.example.com
#     --accept-eula         accept the Minecraft EULA (https://aka.ms/MinecraftEULA)
#     --yes                 take the suggested answers (needs --accept-eula)
#     --no-start            only set up, no autostart and no start
#
#   What it does: checks Java 25 (offers to install it), downloads mrserver.sh from the newest MRadmin release, which
#   downloads MRadmin and Paper (both checked against their checksums), sets the memory, and on request sets up the
#   autostart and starts the server. Other MRtechnology plugins: web interface -> Server -> Plugins.
#   Guide: https://mrtechnology.marcelr.at/wiki/mradmin/starter/
# ==============================================================================
set -eu

DIR="${HOME}/MINECRAFT/Server"
MIN=""
MAX=""
EULA=""
WEBURL=""
YES=""
RELEASE="${MR_RELEASE:-https://github.com/therealmarci/mradmin/releases/latest/download}"
NOSTART=""

while [ $# -gt 0 ]; do
    case "$1" in
        --dir) DIR=$2; shift 2 ;;
        --memory-min) MIN=$2; shift 2 ;;
        --memory-max) MAX=$2; shift 2 ;;
        --web-url) WEBURL=$2; shift 2 ;;
        --accept-eula) EULA=1; shift ;;
        --no-start) NOSTART=1; shift ;;
        --yes|-y) YES=1; shift ;;
        *) echo "Unknown option: $1"; exit 2 ;;
    esac
done

bold() { printf '\033[1m%s\033[0m\n' "$*"; }
step() { printf '\n\033[1;32m==>\033[0m \033[1m%s\033[0m\n' "$*"; }
fail() { printf '\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }

# Questions go to the terminal, also when this script comes through a pipe (curl ... | sh).
TTY=""
if [ -z "$YES" ] && { : </dev/tty; } 2>/dev/null; then
    TTY=1
fi
ask() { # ask "question" "default" -> $REPLY
    if [ -z "$TTY" ]; then REPLY=$2; return; fi
    printf '%s ' "$1" >/dev/tty
    read -r REPLY </dev/tty || REPLY=""
    [ -n "$REPLY" ] || REPLY=$2
}
yes_no() { # yes_no "question" "Y|N"
    ask "$1" "$2"
    case "$REPLY" in [JjYy]*) return 0 ;; *) return 1 ;; esac
}
fetch() { # fetch <url> <file>
    if command -v curl >/dev/null 2>&1; then curl -fsSL "$1" -o "$2"; else wget -qO "$2" "$1"; fi
}

bold "MRtechnology - new Minecraft server with MRadmin"
[ "$(id -u)" -ne 0 ] || fail "Please run this as a normal user, not as root - the server should not run as root."
command -v curl >/dev/null 2>&1 || command -v wget >/dev/null 2>&1 || fail "curl or wget is needed."

# ------------------------------------------------------------------ Java 25
step "Checking Java"
java_major() { java -version 2>&1 | sed -nE '1s/.*version "([0-9]+).*/\1/p'; }
MAJOR=""
if command -v java >/dev/null 2>&1; then MAJOR=$(java_major); fi
if [ -z "$MAJOR" ] || [ "$MAJOR" -lt 25 ]; then
    echo "Paper needs Java 25 or newer${MAJOR:+ (installed: Java $MAJOR)}."
    if command -v apt-get >/dev/null 2>&1 && command -v sudo >/dev/null 2>&1 && [ -n "$TTY" ]; then
        if apt-cache policy openjdk-25-jre-headless 2>/dev/null | grep -q 'Candidate: [0-9]'; then
            if yes_no "Install Java 25 now (sudo apt-get install openjdk-25-jre-headless)? [Y/n]" Y; then
                sudo apt-get update && sudo apt-get install -y openjdk-25-jre-headless
            fi
        elif yes_no "Install Java 25 from Adoptium (Eclipse Temurin, adds packages.adoptium.net to apt)? [Y/n]" Y; then
            CODENAME=$(. /etc/os-release && echo "${VERSION_CODENAME:-}")
            [ -n "$CODENAME" ] || fail "Could not find the codename of your system - install Java 25 by hand: https://adoptium.net/"
            sudo apt-get update && sudo apt-get install -y wget gpg
            wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | gpg --dearmor \
                | sudo tee /usr/share/keyrings/adoptium.gpg >/dev/null
            echo "deb [signed-by=/usr/share/keyrings/adoptium.gpg] https://packages.adoptium.net/artifactory/deb $CODENAME main" \
                | sudo tee /etc/apt/sources.list.d/adoptium.list >/dev/null
            sudo apt-get update && sudo apt-get install -y temurin-25-jre
        fi
        MAJOR=""
        if command -v java >/dev/null 2>&1; then MAJOR=$(java_major); fi
    fi
    if [ -z "$MAJOR" ] || [ "$MAJOR" -lt 25 ]; then
        fail "Java 25 is still missing. Install it (e.g. https://adoptium.net/) and run this again."
    fi
fi
echo "Java $MAJOR - ok"

# ------------------------------------------------------------------ Folder
step "Server folder"
if [ -z "$YES" ] && [ -n "$TTY" ]; then
    ask "Install into [$DIR]:" "$DIR"
    DIR=$REPLY
fi
case "$DIR" in "~"*) DIR="$HOME${DIR#\~}" ;; esac
if [ -d "$DIR" ] && [ -n "$(ls -A "$DIR" 2>/dev/null)" ]; then
    fail "$DIR is not empty. Choose an empty folder (--dir) - an existing server is never overwritten. To add the starter to an existing server: /mradmin starter setup"
fi
mkdir -p "$DIR"
echo "$DIR"

# ------------------------------------------------------------------ Memory
step "Memory"
TOTAL_MB=$(awk '/^MemTotal:/ { printf "%d", $2 / 1024 }' /proc/meminfo 2>/dev/null || echo 0)
SUGGEST=4
if [ "$TOTAL_MB" -gt 0 ]; then
    SUGGEST=$(( TOTAL_MB / 2048 ))          # half of the machine, in GB
    [ "$SUGGEST" -ge 2 ] || SUGGEST=2
    echo "This machine has $(( TOTAL_MB / 1024 )) GB memory."
fi
memory_ok() { echo "$1" | grep -Eq '^[1-9][0-9]*[MG]$'; }
megabytes() { case "$1" in *G) echo $(( ${1%G} * 1024 )) ;; *M) echo "${1%M}" ;; esac; }
while :; do
    [ -n "$MAX" ] || { ask "Maximum memory for the server [${SUGGEST}G]:" "${SUGGEST}G"; MAX=$REPLY; }
    MAX=$(echo "$MAX" | tr 'mg' 'MG')
    if memory_ok "$MAX"; then break; fi
    echo "Please give a size like 4G or 4096M."; MAX=""
    [ -n "$TTY" ] || fail "Invalid --memory-max."
done
while :; do
    [ -n "$MIN" ] || { ask "Minimum memory (Paper recommends the same) [$MAX]:" "$MAX"; MIN=$REPLY; }
    MIN=$(echo "$MIN" | tr 'mg' 'MG')
    if memory_ok "$MIN" && [ "$(megabytes "$MIN")" -le "$(megabytes "$MAX")" ]; then break; fi
    echo "Please give a size like 2G, not larger than the maximum ($MAX)."; MIN=""
    [ -n "$TTY" ] || fail "Invalid --memory-min."
done
if [ "$TOTAL_MB" -gt 0 ] && [ "$(megabytes "$MAX")" -ge "$TOTAL_MB" ]; then
    echo "Note: $MAX is as much as the whole machine has - leave some memory for the system."
fi
echo "Memory: $MIN - $MAX (change it later in the web interface: Server -> Plugins -> MRadmin -> Configuration)"


# ------------------------------------------------------------------ Web interface
step "Web interface"
echo "MRadmin's web interface is switched on. It listens only on this machine (http://127.0.0.1:8125);"
echo "make it reachable with a reverse proxy (HTTPS + domain), e.g. https://admin.example.com -> http://127.0.0.1:8125."
if [ -z "$WEBURL" ] && [ -n "$TTY" ]; then
    ask "Public address of the web interface (empty = set it up later):" ""
    WEBURL=$REPLY
fi
if [ -n "$WEBURL" ] && ! echo "$WEBURL" | grep -Eq '^https?://[A-Za-z0-9.-]+(:[0-9]+)?(/[A-Za-z0-9._~/-]*)?$'; then
    fail "'$WEBURL' is not an address like https://admin.example.com"
fi
# ------------------------------------------------------------------ EULA
step "Minecraft EULA"
if [ -z "$EULA" ]; then
    echo "The server only starts if you accept the Minecraft EULA: https://aka.ms/MinecraftEULA"
    [ -n "$TTY" ] || fail "Run with --accept-eula to accept the Minecraft EULA."
    yes_no "Do you accept the Minecraft EULA? [y/N]" N || fail "The EULA was not accepted - nothing was installed. ($DIR is empty.)"
fi

# ------------------------------------------------------------------ MRadmin + Paper
step "Downloading MRadmin and Paper"
fetch "$RELEASE/mrserver.sh" "$DIR/mrserver.sh" || fail "Could not download mrserver.sh from the MRadmin release."
chmod +x "$DIR/mrserver.sh"
cd "$DIR"
if [ -n "$WEBURL" ]; then
    sh ./mrserver.sh setup --accept-eula --memory-min "$MIN" --memory-max "$MAX" --web-url "$WEBURL" </dev/null
else
    sh ./mrserver.sh setup --accept-eula --memory-min "$MIN" --memory-max "$MAX" --web </dev/null
fi

MODE=$(sed -n 's/^mode=//p' mrserver.properties 2>/dev/null | tr -d '\r' | tail -n 1)

# ------------------------------------------------------------------ Autostart + start
step "Start"
STARTED=""
if [ -n "$NOSTART" ]; then
    echo "Not started (--no-start)."
elif [ "$MODE" = foreground ]; then
    echo "Mode foreground (no systemd and no screen found): start the server with  cd $DIR && ./mrserver.sh run"
elif yes_no "Start the server automatically with the machine and start it now? [Y/n]" Y; then
    ./mrserver.sh install
    if [ "$MODE" = systemd ] && [ ! -e "/var/lib/systemd/linger/$(id -un)" ] && command -v sudo >/dev/null 2>&1 && [ -n "$TTY" ]; then
        if yes_no "Keep the server running while you are logged out (sudo loginctl enable-linger $(id -un))? [Y/n]" Y; then
            sudo loginctl enable-linger "$(id -un)" && echo "Linger is on."
        fi
    fi
    ./mrserver.sh start
    STARTED=1
fi

# ------------------------------------------------------------------ Done
step "Done"
echo "Server folder:  $DIR"
if [ -n "$STARTED" ]; then
    echo "Status:         ./mrserver.sh status      Console: ./mrserver.sh attach"
else
    echo "Start:          cd $DIR && ./mrserver.sh install && ./mrserver.sh start"
fi
echo
bold "Next steps"
echo "  1. Join the server and make yourself operator:  ./mrserver.sh console op <your name>"
echo "  2. Web interface account (in game):             /mradmin web setup"
if [ -n "$WEBURL" ]; then
    echo "     Your reverse proxy: $WEBURL -> http://127.0.0.1:8125"
else
    echo "     No public address yet - from your PC:  ssh -L 8125:127.0.0.1:8125 $(id -un)@<server>"
    echo "     then open http://localhost:8125. Set web.public-url later in plugins/MRadmin/config.yml."
fi
echo "     Guide: https://mrtechnology.marcelr.at/wiki/mradmin/web/"
echo "  3. More MRtechnology plugins with one click:    web interface -> Server -> Plugins"
