# Hitayu CMS — Database & Deploy Helper
# Run this from the project root: .\scripts\manage.ps1
# If PowerShell blocks it, run once: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

function Get-EnvValue {
    param($FilePath, $Key)
    if (-not (Test-Path $FilePath)) {
        Write-Host "  (missing file: $FilePath)" -ForegroundColor DarkYellow
        return $null
    }
    $line = Get-Content $FilePath | Where-Object { $_ -match "^$Key=" } | Select-Object -First 1
    if ($line) {
        return ($line -split '=', 2)[1].Trim()
    }
    return $null
}

function Set-EnvFromFile {
    param($FilePath, $Label)
    $dbUrl = Get-EnvValue $FilePath "DATABASE_URL"
    $secret = Get-EnvValue $FilePath "PAYLOAD_SECRET"
    if (-not $dbUrl -or -not $secret) {
        Write-Host "Could not read DATABASE_URL / PAYLOAD_SECRET from $FilePath" -ForegroundColor Red
        return $false
    }
    $env:DATABASE_URL = $dbUrl
    $env:PAYLOAD_SECRET = $secret
    Write-Host "Using $Label database:" -ForegroundColor Cyan
    Write-Host "  $dbUrl" -ForegroundColor DarkGray
    return $true
}

Write-Host ""
Write-Host "=== Hitayu CMS Helper ===" -ForegroundColor Cyan
Write-Host "1) Start local dev server          (pnpm dev, uses .env.development)"
Write-Host "2) Run migrations on LOCAL db       (.env.development)"
Write-Host "3) Run migrations on PRODUCTION db  (.env.production)"
Write-Host "4) Seed Services/Solutions on LOCAL db"
Write-Host "5) Seed Services/Solutions on PRODUCTION db"
Write-Host "6) Generate a new migration file from local schema changes"
Write-Host "0) Exit"
Write-Host ""
$choice = Read-Host "Choose an option"

switch ($choice) {
    "1" {
        Write-Host "`nStarting local dev server...`n" -ForegroundColor Green
        pnpm dev
    }
    "2" {
        if (Set-EnvFromFile ".env.development" "LOCAL") {
            Write-Host "`nRunning migrations on LOCAL...`n" -ForegroundColor Yellow
            pnpm migrate:retry
        }
    }
    "3" {
        if (Set-EnvFromFile ".env.production" "PRODUCTION") {
            Write-Host "`n⚠️  This will modify your LIVE production database. Continuing in 3 seconds...`n" -ForegroundColor Red
            Start-Sleep -Seconds 3
            pnpm migrate:retry
        }
    }
    "4" {
        if (Set-EnvFromFile ".env.development" "LOCAL") {
            Write-Host "`nSeeding LOCAL database...`n" -ForegroundColor Yellow
            pnpm seed:content
        }
    }
    "5" {
        if (Set-EnvFromFile ".env.production" "PRODUCTION") {
            Write-Host "`n⚠️  This will write to your LIVE production database. Continuing in 3 seconds...`n" -ForegroundColor Red
            Start-Sleep -Seconds 3
            pnpm seed:content
        }
    }
    "6" {
        if (Set-EnvFromFile ".env.development" "LOCAL") {
            Write-Host "`nGenerating new migration from local schema...`n" -ForegroundColor Yellow
            pnpm payload migrate:create
        }
    }
    "0" {
        Write-Host "Bye." -ForegroundColor Cyan
    }
    default {
        Write-Host "Invalid option." -ForegroundColor Red
    }
}
