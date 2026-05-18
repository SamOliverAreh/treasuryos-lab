export const shellLabs = [
  {
    id: "ps-01",
    track: "PowerShell",
    trackColor: "#A78BFA",
    trackBg: "#110A28",
    title: "Bank Feed File Watcher",
    level: "Beginner–Intermediate",
    context: `Banks drop MT940 statement files into a watched folder every morning via SFTP. Your PowerShell script must pick up new files, validate them, call your Python parser, archive processed files, and log every action. This is exactly the kind of Windows Server automation you'd own on day one at Experian — replacing a manual process someone currently does by hand.`,
    schema: `# Folder structure:
# C:\\Treasury\\feeds\\inbox\\       ← bank SFTP drops files here
# C:\\Treasury\\feeds\\processing\\  ← move here while working (prevents double-processing)
# C:\\Treasury\\feeds\\archive\\     ← YYYY\\MM\\DD folder structure
# C:\\Treasury\\feeds\\quarantine\\  ← files that failed validation
# C:\\Treasury\\logs\\              ← your script writes structured logs here
#
# This script is scheduled via Windows Task Scheduler to run at 05:45 daily`,
    sampleData: `# Files that appear in inbox each morning:
# EXPGB_20240115_001.mt940   ← valid, should be processed
# EXPGB_20240115_002.mt940   ← valid, should be processed
# random_report.txt           ← wrong extension, should be silently skipped
# EXPGB_20240115_003.mt940   ← zero bytes (empty file), should go to quarantine
# EXPGB_20240115_004.mt940   ← first line is not :20:, should go to quarantine
#
# Validation rules for a valid MT940 file:
#   1. Extension must be .mt940
#   2. File size must be > 0 bytes
#   3. First line must start with ':20:'`,
    starterCode: `# Watch-BankFeed.ps1
# Schedule: Daily at 05:45 via Windows Task Scheduler
# Usage: .\\Watch-BankFeed.ps1 [-DryRun]
#        -DryRun prints what would happen without moving any files

param(
    [string]$WatchPath    = "C:\\Treasury\\feeds\\inbox",
    [string]$ArchiveRoot  = "C:\\Treasury\\feeds\\archive",
    [string]$Quarantine   = "C:\\Treasury\\feeds\\quarantine",
    [string]$LogPath      = "C:\\Treasury\\logs\\feed_watcher.log",
    [string]$PythonScript = "C:\\Treasury\\scripts\\parse_mt940.py",
    [switch]$DryRun
)

# ─────────────────────────────────────────────────────────────────────────────
# Write-FeedLog: append a structured log line + print to console with colour
# Format: [2024-01-15 06:01:03] [INFO] Message | file=filename.mt940
# ─────────────────────────────────────────────────────────────────────────────
function Write-FeedLog {
    param(
        [string]$Level,        # INFO | WARNING | ERROR | DEBUG
        [string]$Message,
        [string]$File = ""     # optional filename context
    )

    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    # TODO: build $entry string combining timestamp, level, message, and file
    # TODO: Add-Content to $LogPath
    # TODO: Write-Host with colour (ERROR=Red, WARNING=Yellow, INFO=Green, DEBUG=Gray)
}

# ─────────────────────────────────────────────────────────────────────────────
# Test-MT940File: return $true if file passes all 3 validation rules
# ─────────────────────────────────────────────────────────────────────────────
function Test-MT940File {
    param([System.IO.FileInfo]$File)

    # Rule 1: extension must be .mt940
    # TODO

    # Rule 2: file must not be empty
    # TODO

    # Rule 3: first line must start with ':20:'
    # Hint: Get-Content $File.FullName -First 1
    # TODO

    return $true
}

# ─────────────────────────────────────────────────────────────────────────────
# Get-ArchivePath: return (and create if needed) archive path for today
# Target: $ArchiveRoot\\YYYY\\MM\\DD
# ─────────────────────────────────────────────────────────────────────────────
function Get-ArchivePath {
    param([string]$ArchiveRoot)

    $today = Get-Date
    # TODO: build path using $today.ToString("yyyy"), "MM", "dd"
    # TODO: New-Item -ItemType Directory -Force to create it
    # TODO: return the path string
}

# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────
Write-FeedLog "INFO" "Feed watcher started | DryRun=$DryRun | Watching=$WatchPath"

# Step 1: Get all .mt940 files in inbox
# TODO: $files = Get-ChildItem ...

if ($files.Count -eq 0) {
    Write-FeedLog "INFO" "No .mt940 files found in inbox. Nothing to do."
    exit 0
}

Write-FeedLog "INFO" "Found $($files.Count) file(s) to process"

$successCount = 0
$failCount    = 0

foreach ($file in $files) {
    Write-FeedLog "INFO" "Examining file" -File $file.Name

    # Step 2: Validate
    # TODO: call Test-MT940File
    # If invalid: log WARNING, Move-Item to $Quarantine (unless -DryRun), continue

    # Step 3: Move to processing folder (atomic — prevents double-processing)
    $processingDir = Join-Path (Split-Path $WatchPath) "processing"
    # TODO: New-Item to ensure processing dir exists
    # TODO: Move-Item to processingDir, use -PassThru to get new path

    if (-not $DryRun) {
        # Step 4: Call Python parser
        # TODO: & python $PythonScript $processingFile.FullName
        # TODO: check $LASTEXITCODE — if != 0, move to quarantine, increment $failCount, continue

        # Step 5: Archive
        $archivePath = Get-ArchivePath -ArchiveRoot $ArchiveRoot
        # TODO: Move-Item to archivePath

        $successCount++
        Write-FeedLog "INFO" "Archived successfully" -File $file.Name
    } else {
        Write-FeedLog "DEBUG" "DryRun: would process and archive" -File $file.Name
    }
}

Write-FeedLog "INFO" "Completed. Success=$successCount Failed=$failCount"`,
    solution: `param(
    [string]$WatchPath    = "C:\\Treasury\\feeds\\inbox",
    [string]$ArchiveRoot  = "C:\\Treasury\\feeds\\archive",
    [string]$Quarantine   = "C:\\Treasury\\feeds\\quarantine",
    [string]$LogPath      = "C:\\Treasury\\logs\\feed_watcher.log",
    [string]$PythonScript = "C:\\Treasury\\scripts\\parse_mt940.py",
    [switch]$DryRun
)

function Write-FeedLog {
    param([string]$Level, [string]$Message, [string]$File = "")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $filePart  = if ($File) { " | file=$File" } else { "" }
    $entry     = "[$timestamp] [$Level] $Message$filePart"
    Add-Content -Path $LogPath -Value $entry
    $color = switch ($Level) {
        "ERROR"   { "Red"    }
        "WARNING" { "Yellow" }
        "DEBUG"   { "Gray"   }
        default   { "Green"  }
    }
    Write-Host $entry -ForegroundColor $color
}

function Test-MT940File {
    param([System.IO.FileInfo]$File)
    if ($File.Extension -ne ".mt940") { return $false }
    if ($File.Length -eq 0)           { return $false }
    $firstLine = Get-Content $File.FullName -First 1
    return $firstLine -match "^:20:"
}

function Get-ArchivePath {
    param([string]$ArchiveRoot)
    $today = Get-Date
    $path  = Join-Path $ArchiveRoot $today.ToString("yyyy") $today.ToString("MM") $today.ToString("dd")
    New-Item -ItemType Directory -Force -Path $path | Out-Null
    return $path
}

Write-FeedLog "INFO" "Feed watcher started | DryRun=$DryRun | Watching=$WatchPath"
$files = Get-ChildItem -Path $WatchPath -Filter "*.mt940"

if ($files.Count -eq 0) {
    Write-FeedLog "INFO" "No .mt940 files found. Nothing to do."
    exit 0
}

Write-FeedLog "INFO" "Found $($files.Count) file(s)"
$successCount = 0; $failCount = 0

foreach ($file in $files) {
    Write-FeedLog "INFO" "Examining" -File $file.Name

    if (-not (Test-MT940File -File $file)) {
        Write-FeedLog "WARNING" "Validation failed — quarantined" -File $file.Name
        if (-not $DryRun) { Move-Item $file.FullName -Destination $Quarantine }
        $failCount++; continue
    }

    $processingDir = Join-Path (Split-Path $WatchPath) "processing"
    New-Item -ItemType Directory -Force -Path $processingDir | Out-Null
    $processingFile = Move-Item $file.FullName -Destination $processingDir -PassThru

    if (-not $DryRun) {
        & python $PythonScript $processingFile.FullName
        if ($LASTEXITCODE -ne 0) {
            Write-FeedLog "ERROR" "Parser failed (exit $LASTEXITCODE) — quarantined" -File $file.Name
            Move-Item $processingFile.FullName -Destination $Quarantine
            $failCount++; continue
        }
        $archivePath = Get-ArchivePath -ArchiveRoot $ArchiveRoot
        Move-Item $processingFile.FullName -Destination $archivePath
        $successCount++
        Write-FeedLog "INFO" "Archived successfully" -File $file.Name
    } else {
        Write-FeedLog "DEBUG" "DryRun: would process and archive" -File $file.Name
    }
}

Write-FeedLog "INFO" "Completed. Success=$successCount Failed=$failCount"`,
    expectedOutput: `[2024-01-15 05:45:01] [INFO]    Feed watcher started | DryRun=False | Watching=C:\\Treasury\\feeds\\inbox
[2024-01-15 05:45:01] [INFO]    Found 4 file(s)
[2024-01-15 05:45:01] [INFO]    Examining | file=EXPGB_20240115_001.mt940
[2024-01-15 05:45:02] [INFO]    Archived successfully | file=EXPGB_20240115_001.mt940
[2024-01-15 05:45:02] [INFO]    Examining | file=EXPGB_20240115_002.mt940
[2024-01-15 05:45:03] [INFO]    Archived successfully | file=EXPGB_20240115_002.mt940
[2024-01-15 05:45:03] [INFO]    Examining | file=EXPGB_20240115_003.mt940
[2024-01-15 05:45:03] [WARNING] Validation failed — quarantined | file=EXPGB_20240115_003.mt940
[2024-01-15 05:45:03] [INFO]    Examining | file=EXPGB_20240115_004.mt940
[2024-01-15 05:45:03] [WARNING] Validation failed — quarantined | file=EXPGB_20240115_004.mt940
[2024-01-15 05:45:03] [INFO]    Completed. Success=2 Failed=2`,
    hints: [
      "Get-ChildItem -Path $WatchPath -Filter '*.mt940' — the -Filter parameter is faster than Where-Object for extension filtering.",
      "Get-Content $File.FullName -First 1 — reads only the first line, efficient for large files.",
      "Move-Item ... -PassThru returns the FileInfo object of the moved file so you can track its new location.",
      "$LASTEXITCODE holds the exit code of the last external process (python, etc.). 0 = success, anything else = failure.",
      "New-Item -ItemType Directory -Force will not throw an error if the directory already exists — safe to call every time."
    ],
    realWorldNote: "The -DryRun switch is a professional pattern — always build it into automation scripts so you can test logic safely in production without side effects. In a real deployment this runs via Task Scheduler with a service account that has SFTP read rights and write rights to the archive only — principle of least privilege."
  },
  {
    id: "bash-01",
    track: "Bash",
    trackColor: "#FF6B35",
    trackBg: "#1A1008",
    title: "System Health Check Script",
    level: "Beginner–Intermediate",
    context: `Write a Bash script that runs every 15 minutes on a Linux server and checks five treasury system health indicators: PostgreSQL connectivity, interface log recency, disk space, Python API availability, and stuck files in the inbox. Output structured JSON so your monitoring dashboard can consume it directly — no human parsing required.`,
    schema: `# Components checked:
# 1. PostgreSQL     — can we connect and count rows in interface_log?
# 2. Interfaces     — did all feeds run within the last 2 hours?
# 3. Disk space     — is /treasury/feeds/ below 80% usage?
# 4. Python API     — is localhost:8000/health returning HTTP 200?
# 5. Stuck files    — any .mt940 files in inbox older than 2 hours?
#
# Cron entry (add to crontab -e):
# */15 * * * * /treasury/scripts/health_check.sh >> /treasury/logs/health.log 2>&1`,
    sampleData: `# Expected JSON output shape:
{
  "timestamp": "2024-01-15T06:15:00Z",
  "overall_status": "WARNING",
  "checks": {
    "database":    {"status": "OK",      "message": "Connected. 1240 rows in interface_log"},
    "interfaces":  {"status": "WARNING", "message": "ORACLE_TO_FINASTRA last run: 3h ago (threshold: 2h)"},
    "disk_space":  {"status": "OK",      "message": "Feeds volume: 42% used"},
    "python_api":  {"status": "OK",      "message": "HTTP 200 in 45ms"},
    "stuck_files": {"status": "OK",      "message": "No stuck files in inbox"}
  }
}
# overall_status rules:
#   CRITICAL if ANY check is CRITICAL
#   WARNING  if ANY check is WARNING (and none are CRITICAL)
#   OK       if all checks are OK`,
    starterCode: `#!/bin/bash
# health_check.sh — Treasury system health monitor
# Runs every 15 minutes via cron
# Outputs JSON to stdout (redirected to log file by cron)

set -uo pipefail

# ── Config ────────────────────────────────────────────────────────────────────
DB_HOST="localhost"
DB_NAME="treasury"
DB_USER="treasury_svc"
FEED_INBOX="/treasury/feeds/inbox"
API_URL="http://localhost:8000/health"
DISK_THRESHOLD=80         # warn above this % used
STALENESS_HOURS=2         # warn if interface hasn't run in this many hours

# ── Helper: build one JSON check fragment ─────────────────────────────────────
# Usage: check_result "database" "OK" "Connected. 1240 rows"
# Output: "database": {"status": "OK", "message": "Connected. 1240 rows"}
check_result() {
    local name="$1" status="$2" message="$3"
    # TODO: use printf to output the JSON fragment
    # Hint: printf '"%s": {"status": "%s", "message": "%s"}' ...
}

# ── Check 1: PostgreSQL ───────────────────────────────────────────────────────
check_database() {
    # TODO: run psql query to count rows in interface_log
    # Hint: psql -h $DB_HOST -U $DB_USER -d $DB_NAME -t -c "SELECT COUNT(*) FROM interface_log"
    # Wrap in if/else to handle connection failure
    # Return check_result with appropriate status and message
    echo ""
}

# ── Check 2: Interface recency ────────────────────────────────────────────────
check_interfaces() {
    # TODO: query MAX(run_time) per interface_name from interface_log
    # Compare each to: date -u -d "$STALENESS_HOURS hours ago" +"%Y-%m-%d %H:%M:%S"
    # If any interface's last run is older than threshold → WARNING
    echo ""
}

# ── Check 3: Disk space ────────────────────────────────────────────────────────
check_disk() {
    # TODO: df "$FEED_INBOX" | awk 'NR==2 {print $5}' | tr -d '%'
    # Compare to $DISK_THRESHOLD
    echo ""
}

# ── Check 4: Python API ────────────────────────────────────────────────────────
check_api() {
    # TODO: curl -s -o /dev/null -w "%{http_code}|%{time_total}" "$API_URL"
    # Parse HTTP code and response time
    # If code != 200 → CRITICAL
    echo ""
}

# ── Check 5: Stuck files ──────────────────────────────────────────────────────
check_stuck_files() {
    # TODO: find "$FEED_INBOX" -name "*.mt940" -mmin +120
    # -mmin +120 means modified MORE than 120 minutes ago
    # If any found → WARNING with count
    echo ""
}

# ── Assemble final JSON ───────────────────────────────────────────────────────
main() {
    local db_r iface_r disk_r api_r stuck_r overall

    db_r=$(check_database)
    iface_r=$(check_interfaces)
    disk_r=$(check_disk)
    api_r=$(check_api)
    stuck_r=$(check_stuck_files)

    # TODO: determine overall status
    # Logic: CRITICAL > WARNING > OK
    # Hint: use grep to check if any result contains "CRITICAL" or "WARNING"
    overall="OK"

    # TODO: output the full JSON using heredoc (cat <<EOF ... EOF)
}

main`,
    solution: `#!/bin/bash
set -uo pipefail

DB_HOST="localhost"; DB_NAME="treasury"; DB_USER="treasury_svc"
FEED_INBOX="/treasury/feeds/inbox"; API_URL="http://localhost:8000/health"
DISK_THRESHOLD=80; STALENESS_HOURS=2

check_result() {
    printf '"%s": {"status": "%s", "message": "%s"}' "$1" "$2" "$3"
}

check_database() {
    if result=$(psql -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" -t \
                     -c "SELECT COUNT(*) FROM interface_log" 2>&1); then
        count=$(echo "$result" | tr -d ' ')
        check_result "database" "OK" "Connected. ${count} rows in interface_log"
    else
        check_result "database" "CRITICAL" "Cannot connect to PostgreSQL"
    fi
}

check_interfaces() {
    local threshold status="OK" msg="All interfaces current"
    threshold=$(date -u -d "$STALENESS_HOURS hours ago" +"%Y-%m-%d %H:%M:%S")
    while IFS='|' read -r iface last_run; do
        iface=$(echo "$iface" | tr -d ' ')
        last_run=$(echo "$last_run" | tr -d ' ')
        if [[ "$last_run" < "$threshold" ]]; then
            status="WARNING"
            msg="${iface} last run: ${last_run} (threshold: ${STALENESS_HOURS}h)"
        fi
    done < <(psql -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" -t \
             -c "SELECT interface_name, MAX(run_time) FROM interface_log GROUP BY interface_name" 2>/dev/null)
    check_result "interfaces" "$status" "$msg"
}

check_disk() {
    local usage
    usage=$(df "$FEED_INBOX" | awk 'NR==2 {print $5}' | tr -d '%')
    if [[ "$usage" -gt "$DISK_THRESHOLD" ]]; then
        check_result "disk_space" "WARNING" "Feeds volume: ${usage}% used (threshold: ${DISK_THRESHOLD}%)"
    else
        check_result "disk_space" "OK" "Feeds volume: ${usage}% used"
    fi
}

check_api() {
    local response code ms
    response=$(curl -s -o /dev/null -w "%{http_code}|%{time_total}" "$API_URL" 2>&1)
    code=$(echo "$response" | cut -d'|' -f1)
    ms=$(echo "$response" | cut -d'|' -f2 | awk '{printf "%.0f", $1*1000}')
    if [[ "$code" == "200" ]]; then
        check_result "python_api" "OK" "HTTP 200 in ${ms}ms"
    else
        check_result "python_api" "CRITICAL" "HTTP ${code} from ${API_URL}"
    fi
}

check_stuck_files() {
    local stuck count oldest
    stuck=$(find "$FEED_INBOX" -name "*.mt940" -mmin +120 2>/dev/null)
    if [[ -z "$stuck" ]]; then
        check_result "stuck_files" "OK" "No stuck files in inbox"
    else
        count=$(echo "$stuck" | wc -l | tr -d ' ')
        oldest=$(echo "$stuck" | head -1 | xargs basename)
        check_result "stuck_files" "WARNING" "${count} file(s) stuck >2h. Oldest: ${oldest}"
    fi
}

main() {
    local db_r iface_r disk_r api_r stuck_r overall="OK"
    db_r=$(check_database); iface_r=$(check_interfaces)
    disk_r=$(check_disk);   api_r=$(check_api); stuck_r=$(check_stuck_files)

    local all_results="$db_r $iface_r $disk_r $api_r $stuck_r"
    if echo "$all_results" | grep -q '"CRITICAL"'; then
        overall="CRITICAL"
    elif echo "$all_results" | grep -q '"WARNING"'; then
        overall="WARNING"
    fi

    cat <<EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "overall_status": "$overall",
  "checks": {
    $db_r,
    $iface_r,
    $disk_r,
    $api_r,
    $stuck_r
  }
}
EOF
}

main`,
    expectedOutput: `{
  "timestamp": "2024-01-15T06:15:00Z",
  "overall_status": "WARNING",
  "checks": {
    "database":    {"status": "OK",      "message": "Connected. 1240 rows in interface_log"},
    "interfaces":  {"status": "WARNING", "message": "ORACLE_TO_FINASTRA last run: 2024-01-15 03:00:00 (threshold: 2h)"},
    "disk_space":  {"status": "OK",      "message": "Feeds volume: 42% used"},
    "python_api":  {"status": "OK",      "message": "HTTP 200 in 45ms"},
    "stuck_files": {"status": "OK",      "message": "No stuck files in inbox"}
  }
}`,
    hints: [
      "psql -t strips column headers and row counts — essential for clean scripting output.",
      "curl -w '%{http_code}|%{time_total}' captures both HTTP status and response time in one call.",
      "find -mmin +120 finds files modified MORE than 120 minutes ago (the + prefix means 'greater than').",
      "Use 'if result=$(command 2>&1); then' pattern to catch errors without set -e aborting your whole script.",
      "heredoc (cat <<EOF ... EOF) is the cleanest way to emit multi-line JSON — no escaping nightmare."
    ],
    realWorldNote: "JSON output is intentional — this script's stdout pipes directly into your Python monitoring API: curl -s ./health_check.sh | python ingest_health.py. That chaining of Bash → Python is the core skill. The cron entry in the comment at the top is documentation convention — always include it so any engineer can redeploy the schedule without hunting through runbooks."
  }
]
