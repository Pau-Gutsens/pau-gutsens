import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const htmlPath = path.join(__dirname, 'index.html');
const outputPath = path.join(__dirname, 'CV_Pau_Gutsens.pdf');

(async () => {
  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Cargando CV HTML...');
  await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, {
    waitUntil: 'networkidle0',
  });

  // Esperar a que las fuentes de Google carguen (puede que no en file://, pero intentamos)
  await new Promise(r => setTimeout(r, 2000));

  console.log('Generando PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    pageRanges: '1',
    printBackground: true,
    margin: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
  });

  await browser.close();
  console.log(`✅ PDF generado en: ${outputPath}`);
})();
