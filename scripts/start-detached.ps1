#!/usr/bin/env pwsh
# Starts the production server detached so it keeps running after the terminal closes.
# Usage: run `npm run serve-detached` which calls this script.

$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $projectDir

# Build first (if not already built)
Write-Output "Building the app..."
npm run build

Write-Output "Starting production server detached (next start -p 3000)..."
# Use cmd.exe /c to ensure PATH resolution for npm on Windows.
Start-Process -FilePath 'cmd.exe' -ArgumentList '/c','npm run start' -WorkingDirectory $projectDir -WindowStyle Hidden

Write-Output "Server started detached. Check http://localhost:3000"