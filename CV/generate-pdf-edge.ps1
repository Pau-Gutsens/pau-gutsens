# generate-pdf-edge.ps1
# Genera un PDF del CV usando Microsoft Edge en modo headless

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $scriptDir) { $scriptDir = Get-Location }
$htmlFile = Join-Path $scriptDir "index.html"
$pdfOutput = Join-Path $scriptDir "CV_Pau_Gutsens.pdf"
$pdfOutputRoot = Join-Path (Split-Path -Parent $scriptDir) "CV_Pau_Gutsens.pdf"
$htmlUrl = "file:///" + $htmlFile.Replace("\", "/")

Write-Host "Generando PDF desde: $htmlUrl"
Write-Host "Destino: $pdfOutput"

# Buscar Edge
$edgePaths = @(
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)

$edge = $edgePaths | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $edge) {
    Write-Error "No se encontró Microsoft Edge."
    exit 1
}

Write-Host "Usando Edge: $edge"

# Usar Edge headless para imprimir a PDF
$args = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--print-to-pdf=`"$pdfOutput`"",
    "--print-to-pdf-no-header",
    "--no-pdf-header-footer",
    $htmlUrl
)

$process = Start-Process -FilePath $edge -ArgumentList $args -Wait -PassThru -NoNewWindow

if ($process.ExitCode -eq 0 -and (Test-Path $pdfOutput)) {
    Write-Host "PDF generado exitosamente en CV: $pdfOutput"
    # Copiar también al directorio raíz si existe
    Copy-Item -Path $pdfOutput -Destination $pdfOutputRoot -Force
    Write-Host "Copia actualizada en la raíz: $pdfOutputRoot"
} else {
    Write-Host "Exit code: $($process.ExitCode)"
    Write-Error "Error generando el PDF."
}

