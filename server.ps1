# KBO Journey - PowerShell Native HTTP Server with Auto-Save API
$port = 8000
$directory = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
} catch {
    Write-Host "Port $port is in use, trying 8080..."
    $port = 8080
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
}

Write-Host "=================================================="
Write-Host "⚾ KBO Journey Server (PowerShell) Running!"
Write-Host "🌐 App:   http://localhost:$port/"
Write-Host "⚙️ Admin: http://localhost:$port/admin.html"
Write-Host "=================================================="
Start-Process "http://localhost:$port/admin.html"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")
    $response.Headers.Add("Access-Control-Allow-Origin", "*")
    $response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    $response.Headers.Add("Access-Control-Allow-Headers", "Content-Type")

    if ($request.HttpMethod -eq "OPTIONS") {
        $response.StatusCode = 200
        $response.Close()
        continue
    }

    $rawUrl = $request.RawUrl.Split('?')[0]

    if ($rawUrl -eq "/api/status") {
        $response.ContentType = "application/json; charset=utf-8"
        $buf = [System.Text.Encoding]::UTF8.GetBytes('{"status":"running"}')
        $response.OutputStream.Write($buf, 0, $buf.Length)
        $response.Close()
        continue
    }

    if ($request.HttpMethod -eq "POST" -and $rawUrl -eq "/api/save") {
        $reader = New-Object System.IO.StreamReader($request.InputStream, [System.Text.Encoding]::UTF8)
        $body = $reader.ReadToEnd()
        $reader.Close()

        try {
            # Format and save data.json
            $jsonObj = $body | ConvertFrom-Json
            $formatted = $jsonObj | ConvertTo-Json -Depth 10
            [System.IO.File]::WriteAllText("$directory\data.json", $formatted, [System.Text.Encoding]::UTF8)

            # Sync js/data.js
            $dataJsPath = "$directory\js\data.js"
            if (Test-Path $dataJsPath) {
                $dataJsContent = [System.IO.File]::ReadAllText($dataJsPath, [System.Text.Encoding]::UTF8)
                $markerIdx = $dataJsContent.IndexOf("  entries: {")
                if ($markerIdx -ge 0) {
                    $preamble = $dataJsContent.Substring(0, $markerIdx)
                    $lines = $formatted -split "`r?`n"
                    $indented = ($lines | ForEach-Object { if ($_) { "    " + $_ } else { "" } }) -join "`r`n"
                    $newContent = $preamble + "  entries: " + $indented.TrimStart() + ";`r`n`r`nif (typeof module !== 'undefined' && module.exports) {`r`n  module.exports = KBO_DATA;`r`n}`r`n"
                    [System.IO.File]::WriteAllText($dataJsPath, $newContent, [System.Text.Encoding]::UTF8)
                }
            }

            $timeStr = (Get-Date).ToString("hh:mm:ss tt")
            Write-Host "[$timeStr] Auto-saved data.json and synchronized js/data.js"

            $resObj = @{ success = $true; timestamp = $timeStr } | ConvertTo-Json
            $buf = [System.Text.Encoding]::UTF8.GetBytes($resObj)
            $response.ContentType = "application/json; charset=utf-8"
            $response.OutputStream.Write($buf, 0, $buf.Length)
        } catch {
            Write-Host "[Save Error] $_"
            $response.StatusCode = 500
            $buf = [System.Text.Encoding]::UTF8.GetBytes('{"success":false}')
            $response.OutputStream.Write($buf, 0, $buf.Length)
        }
        $response.Close()
        continue
    }

    # Static file serving
    if ($rawUrl -eq "/" -or $rawUrl -eq "") { $rawUrl = "/index.html" }
    $localPath = [System.IO.Path]::Combine($directory, $rawUrl.TrimStart('/').Replace('/', '\'))

    if ([System.IO.File]::Exists($localPath)) {
        $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
        $contentType = "application/octet-stream"
        switch ($ext) {
            ".html" { $contentType = "text/html; charset=utf-8" }
            ".css"  { $contentType = "text/css; charset=utf-8" }
            ".js"   { $contentType = "application/javascript; charset=utf-8" }
            ".json" { $contentType = "application/json; charset=utf-8" }
            ".png"  { $contentType = "image/png" }
            ".jpg"  { $contentType = "image/jpeg" }
            ".jpeg" { $contentType = "image/jpeg" }
            ".webp" { $contentType = "image/webp" }
            ".svg"  { $contentType = "image/svg+xml" }
        }
        $response.ContentType = $contentType
        $bytes = [System.IO.File]::ReadAllBytes($localPath)
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
    }
    $response.Close()
}
