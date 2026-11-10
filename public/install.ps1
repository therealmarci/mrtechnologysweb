# ==============================================================================
#   MRtechnology - install a new Minecraft server (Paper + MRadmin) on Windows.
#
#     irm https://mrtechnology.marcelr.at/install.ps1 | iex
#
#   Options as environment variables (set them before the line above):
#     $env:MR_DIR = 'D:\Minecraft'        default: %USERPROFILE%\MINECRAFT\Server (must be empty or missing)
#     $env:MR_MEMORY_MIN = '2G'           $env:MR_MEMORY_MAX = '6G'
#     $env:MR_WEB_URL = 'https://admin.example.com'
#     $env:MR_PROXY = 'docker'            where the reverse proxy runs: here, docker or the address of another machine
#     $env:MR_CHANNEL = 'beta'            update channel stable or beta (beta = newest MRadmin beta now)
#     $env:MR_DEV_TOKEN = '...'           dev builds (release token; or MR_CHANNEL = 'dev' and type it in)
#     $env:MR_ACCEPT_EULA = '1'           accept the Minecraft EULA (https://aka.ms/MinecraftEULA)
#     $env:MR_YES = '1'                   take the suggested answers (needs MR_ACCEPT_EULA)
#     $env:MR_START = '0'                 only set up, no autostart and no start
#
#   What it does: checks Java 25 (offers to install it with winget), downloads mrserver.cmd from the newest MRadmin
#   release, which downloads MRadmin and Paper (both checked against their checksums), sets the memory, switches on
#   the web interface and on request sets up the autostart and starts the server.
#   Guide: https://mrtechnology.marcelr.at/wiki/mradmin/starter/
# ==============================================================================
& {
    $ErrorActionPreference = 'Stop'
    $release = 'https://github.com/therealmarci/mradmin/releases/latest/download'
    if ($env:MR_RELEASE) { $release = $env:MR_RELEASE }   # only for testing
    $yes = $env:MR_YES -eq '1'

    function Step($text) { Write-Host ''; Write-Host "==> $text" -ForegroundColor Green }
    function Fail($text) { Write-Host "Error: $text" -ForegroundColor Red; throw 'MRtechnology installer stopped.' }
    function Ask($question, $default) {
        if ($yes) { return $default }
        $answer = Read-Host $question
        if ([string]::IsNullOrWhiteSpace($answer)) { return $default }
        return $answer.Trim()
    }
    function YesNo($question, $default) {
        $answer = Ask $question $default
        return $answer -match '^[JjYy]'
    }
    function JavaMajor {
        $java = Get-Command java -ErrorAction SilentlyContinue
        if (-not $java) { return 0 }
        $out = (& cmd /c "java -version 2>&1") -join "`n"
        if ($out -match 'version "(\d+)') { return [int]$Matches[1] }
        return 0
    }
    function Megabytes($size) {
        if ($size -match '^(\d+)G$') { return [long]$Matches[1] * 1024 }
        if ($size -match '^(\d+)M$') { return [long]$Matches[1] }
        return -1
    }

    Write-Host 'MRtechnology - new Minecraft server with MRadmin' -ForegroundColor White

    # ------------------------------------------------------------------ Java 25
    Step 'Checking Java'
    $major = JavaMajor
    if ($major -lt 25) {
        if ($major -gt 0) { Write-Host "Paper needs Java 25 or newer (installed: Java $major)." } else { Write-Host 'Paper needs Java 25 or newer.' }
        if ((Get-Command winget -ErrorAction SilentlyContinue) -and -not $yes) {
            if (YesNo 'Install Java 25 now (winget, Eclipse Temurin)? [Y/n]' 'Y') {
                winget install --id EclipseAdoptium.Temurin.25.JRE -e --source winget --accept-source-agreements --accept-package-agreements
                # winget changes PATH for new windows - take it over for this one too.
                $env:Path = [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('Path', 'User')
                $major = JavaMajor
            }
        }
        if ($major -lt 25) { Fail 'Java 25 is still missing. Install it (e.g. https://adoptium.net/) and run this again.' }
    }
    Write-Host "Java $major - ok"

    # ------------------------------------------------------------------ Folder
    Step 'Server folder'
    $dir = $env:MR_DIR
    if (-not $dir) { $dir = Join-Path $env:USERPROFILE 'MINECRAFT\Server' }
    if (-not $env:MR_DIR) { $dir = Ask "Install into [$dir]" $dir }
    if ((Test-Path $dir) -and (Get-ChildItem -Force $dir | Select-Object -First 1)) {
        Fail "$dir is not empty. Choose an empty folder (MR_DIR) - an existing server is never overwritten. To add the starter to an existing server: /mradmin starter setup"
    }
    New-Item -ItemType Directory -Force $dir | Out-Null
    Write-Host $dir

    # ------------------------------------------------------------------ Memory
    Step 'Memory'
    $totalMb = [long]((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory / 1MB)
    $suggest = [Math]::Max(2, [int]($totalMb / 2048))
    Write-Host ("This machine has {0} GB memory." -f [int]($totalMb / 1024))
    $max = $env:MR_MEMORY_MAX
    while ($true) {
        if (-not $max) { $max = Ask "Maximum memory for the server [${suggest}G]" "${suggest}G" }
        $max = $max.ToUpper()
        if ((Megabytes $max) -gt 0) { break }
        Write-Host 'Please give a size like 4G or 4096M.'; $max = $null
        if ($yes) { Fail 'Invalid MR_MEMORY_MAX.' }
    }
    $min = $env:MR_MEMORY_MIN
    while ($true) {
        if (-not $min) { $min = Ask "Minimum memory (Paper recommends the same) [$max]" $max }
        $min = $min.ToUpper()
        if ((Megabytes $min) -gt 0 -and (Megabytes $min) -le (Megabytes $max)) { break }
        Write-Host "Please give a size like 2G, not larger than the maximum ($max)."; $min = $null
        if ($yes) { Fail 'Invalid MR_MEMORY_MIN.' }
    }
    if ((Megabytes $max) -ge $totalMb) { Write-Host "Note: $max is as much as the whole machine has - leave some memory for the system." }
    Write-Host "Memory: $min - $max (change it later in the web interface: Server -> Plugins -> MRadmin -> Configuration)"

    # ------------------------------------------------------------------ Web interface
    Step 'Web interface'
    Write-Host "MRadmin's web interface is switched on. It listens only on this machine: http://127.0.0.1:8125"
    $webUrl = $env:MR_WEB_URL
    if (-not $webUrl -and -not $yes) { $webUrl = Ask 'Public address of the web interface (empty = set it up later)' '' }
    if ($webUrl -and $webUrl -notmatch '^https?://[A-Za-z0-9.-]+(:[0-9]+)?(/[A-Za-z0-9._~/-]*)?$') {
        Fail "'$webUrl' is not an address like https://admin.example.com"
    }
    # Where the reverse proxy runs decides on which address MRadmin listens and whom it trusts for the visitor's IP.
    $proxy = "$env:MR_PROXY".Trim()
    if (-not $proxy -and $webUrl -and -not $yes) {
        Write-Host 'Where does your reverse proxy (e.g. Nginx Proxy Manager, Caddy) run?'
        Write-Host '  1) on this machine   2) in Docker on this machine   3) on another machine'
        switch (Ask 'Choice' '1') {
            '2' { $proxy = 'docker' }
            '3' { $proxy = Ask 'Address of the proxy machine (e.g. 10.0.0.5, or a range like 10.0.0.0/24)' '' }
            default { $proxy = 'here' }
        }
    }
    $target = 'http://127.0.0.1:8125'
    if ($proxy -eq 'docker') { $target = "http://host.docker.internal:8125 (Docker Desktop)" }
    elseif ($proxy -and $proxy -ne 'here') {
        if ($proxy -notmatch '^[0-9a-fA-F:.]+(/[0-9]{1,3})?$') { Fail "'$proxy' is not an address or range" }
        $target = 'http://<address of this machine>:8125'
    }

    # ------------------------------------------------------------------ Update channel
    Step 'Updates'
    $channel = "$env:MR_CHANNEL".Trim().ToLower()
    $devToken = $env:MR_DEV_TOKEN
    if ($devToken) { $channel = 'dev' }
    if (-not $channel) {
        Write-Host 'Stable versions are tested. Betas bring new features earlier, but may still have bugs.'
        if (YesNo 'Use beta versions (newest MRadmin beta now, beta updates later)? [y/N]' 'N') { $channel = 'beta' } else { $channel = 'stable' }
    }
    if ($channel -notin @('stable', 'beta', 'dev')) { Fail "Unknown channel '$channel' - stable or beta." }
    if ($channel -eq 'dev' -and -not $devToken) {
        if ($yes) { Fail 'The dev channel needs the release token (MR_DEV_TOKEN).' }
        $secure = Read-Host 'Release token for dev builds' -AsSecureString
        $devToken = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure))
        if (-not $devToken) { Fail 'No release token given.' }
    }
    switch ($channel) {
        'beta' { Write-Host 'Channel: beta (change it later in the web interface: Server -> Plugins)' }
        'dev' { Write-Host 'Channel: dev builds for MRadmin, beta for the other plugins' }
        default { Write-Host 'Channel: stable' }
    }

    # ------------------------------------------------------------------ EULA
    Step 'Minecraft EULA'
    if ($env:MR_ACCEPT_EULA -ne '1') {
        Write-Host 'The server only starts if you accept the Minecraft EULA: https://aka.ms/MinecraftEULA'
        if ($yes) { Fail 'Set $env:MR_ACCEPT_EULA = ''1'' to accept the Minecraft EULA.' }
        if (-not (YesNo 'Do you accept the Minecraft EULA? [y/N]' 'N')) { Fail "The EULA was not accepted - nothing was installed. ($dir is empty.)" }
    }

    # ------------------------------------------------------------------ MRadmin + Paper
    Step 'Downloading MRadmin and Paper'
    $cmdFile = Join-Path $dir 'mrserver.cmd'
    Invoke-WebRequest "$release/mrserver.cmd" -OutFile $cmdFile -UseBasicParsing
    $setup = @('setup', '--accept-eula', '--memory-min', $min, '--memory-max', $max, '--channel', $channel)
    if ($webUrl) { $setup += @('--web-url', $webUrl) } else { $setup += '--web' }
    if ($proxy) { $setup += @('--proxy', $proxy) }
    Push-Location $dir
    try {
        # The token goes through the environment, not as an argument (arguments show in process lists).
        $env:MRSERVER_DEV_TOKEN = $devToken
        try { & $cmdFile @setup } finally { Remove-Item Env:MRSERVER_DEV_TOKEN -ErrorAction SilentlyContinue }
        if ($LASTEXITCODE -ne 0) { Fail "Setup failed (exit code $LASTEXITCODE)." }

        # ------------------------------------------------------------------ Autostart + start
        Step 'Start'
        $started = $false
        if ($env:MR_START -eq '0') {
            Write-Host 'Not started (MR_START=0).'
        } elseif (YesNo 'Start the server automatically when you log in and start it now? [Y/n]' 'Y') {
            & $cmdFile install
            & $cmdFile start
            $started = $true
        }
    } finally {
        Pop-Location
    }

    # ------------------------------------------------------------------ Done
    Step 'Done'
    Write-Host "Server folder:  $dir"
    if ($started) {
        Write-Host 'The server runs in its own window. Status: mrserver status'
    } else {
        Write-Host "Start:          cd `"$dir`"; .\mrserver.cmd install; .\mrserver.cmd start"
    }
    Write-Host ''
    Write-Host 'Next steps' -ForegroundColor White
    Write-Host '  1. Join the server and make yourself operator:  mrserver console op <your name>'
    Write-Host '  2. Web interface (in game):                     /web - link and code to sign in'
    if ($webUrl) {
        Write-Host "     Your reverse proxy: $webUrl -> $target"
    } else {
        Write-Host '     On this PC: http://localhost:8125 - set web.public-url later in plugins\MRadmin\config.yml.'
    }
    Write-Host '     Guide: https://mrtechnology.marcelr.at/wiki/mradmin/web/'
    Write-Host '  3. More MRtechnology plugins with one click:    web interface -> Server -> Plugins'
}
