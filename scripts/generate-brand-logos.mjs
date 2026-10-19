import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const BRAND_DIR = path.join(PUBLIC_DIR, 'brand');
const TMP_DIR = path.join(ROOT_DIR, '.tmp_logo_render');

if (!fs.existsSync(BRAND_DIR)) fs.mkdirSync(BRAND_DIR, { recursive: true });
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Read base64 assets
const logoPngB64 = fs.readFileSync(path.join(PUBLIC_DIR, 'LogoSaperVedere.png')).toString('base64');
const iconPngB64 = fs.readFileSync(path.join(PUBLIC_DIR, 'icon.png')).toString('base64');

const variants = [
  // 1. Primary Default: Full Logo on White Background
  {
    filename: 'brand-logo-white',
    transparent: false,
    html: `
      <div style="width: 800px; height: 800px; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <img src="data:image/png;base64,${logoPngB64}" style="width: 580px; height: auto; object-fit: contain;" />
        <div style="margin-top: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #194162; opacity: 0.85;">
          Fractional COO & Operating Partner
        </div>
      </div>
    `
  },
  // 1b. Full Logo on White (Minimal - without subtitle)
  {
    filename: 'brand-logo-white-minimal',
    transparent: false,
    html: `
      <div style="width: 800px; height: 800px; background: #ffffff; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <img src="data:image/png;base64,${logoPngB64}" style="width: 620px; height: auto; object-fit: contain;" />
      </div>
    `
  },
  // 2. Full Logo on Warm Linen (#f7f3eb)
  {
    filename: 'brand-logo-linen',
    transparent: false,
    html: `
      <div style="width: 800px; height: 800px; background: #f7f3eb; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <img src="data:image/png;base64,${logoPngB64}" style="width: 580px; height: auto; object-fit: contain;" />
        <div style="margin-top: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #194162; opacity: 0.85;">
          Fractional COO & Operating Partner
        </div>
      </div>
    `
  },
  // 3. Full Logo on Deep Navy (#194162)
  {
    filename: 'brand-logo-navy',
    transparent: false,
    html: `
      <div style="width: 800px; height: 800px; background: #194162; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <div style="position: absolute; width: 600px; height: 600px; background: rgba(26, 92, 136, 0.4); border-radius: 50%; filter: blur(90px); pointer-events: none;"></div>
        <img src="data:image/png;base64,${logoPngB64}" style="width: 580px; height: auto; object-fit: contain; filter: brightness(0) invert(1); position: relative; z-index: 2;" />
        <div style="margin-top: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #6cb3df; position: relative; z-index: 2;">
          Fractional COO & Operating Partner
        </div>
      </div>
    `
  },
  // 4. Monogram Icon "SV" on White
  {
    filename: 'brand-icon-white',
    transparent: false,
    html: `
      <div style="width: 800px; height: 800px; background: #ffffff; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <img src="data:image/png;base64,${iconPngB64}" style="width: 480px; height: 480px; object-fit: contain;" />
      </div>
    `
  },
  // 5. Monogram Icon "SV" on Deep Navy
  {
    filename: 'brand-icon-navy',
    transparent: false,
    html: `
      <div style="width: 800px; height: 800px; background: #194162; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <div style="position: absolute; width: 500px; height: 500px; background: rgba(26, 92, 136, 0.45); border-radius: 50%; filter: blur(80px); pointer-events: none;"></div>
        <img src="data:image/png;base64,${iconPngB64}" style="width: 480px; height: 480px; object-fit: contain; filter: brightness(0) invert(1); position: relative; z-index: 2;" />
      </div>
    `
  },
  // 6. Monogram Icon "SV" on Warm Linen
  {
    filename: 'brand-icon-linen',
    transparent: false,
    html: `
      <div style="width: 800px; height: 800px; background: #f7f3eb; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <img src="data:image/png;base64,${iconPngB64}" style="width: 480px; height: 480px; object-fit: contain;" />
      </div>
    `
  },
  // 7. Transparent Full Logo (PNG only)
  {
    filename: 'brand-logo-transparent',
    transparent: true,
    html: `
      <div style="width: 800px; height: 800px; background: transparent; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <img src="data:image/png;base64,${logoPngB64}" style="width: 620px; height: auto; object-fit: contain;" />
      </div>
    `
  },
  // 8. Transparent Monogram Icon (PNG only)
  {
    filename: 'brand-icon-transparent',
    transparent: true,
    html: `
      <div style="width: 800px; height: 800px; background: transparent; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <img src="data:image/png;base64,${iconPngB64}" style="width: 500px; height: 500px; object-fit: contain;" />
      </div>
    `
  }
];

console.log(`Starting generation of ${variants.length} square 800x800 logo assets...`);

for (const v of variants) {
  const htmlPath = path.join(TMP_DIR, `${v.filename}.html`);
  const pngPath = path.join(BRAND_DIR, `${v.filename}.png`);
  const jpgPath = path.join(BRAND_DIR, `${v.filename}.jpg`);

  const fullHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 800px; height: 800px; overflow: hidden; ${v.transparent ? 'background: transparent;' : ''} }
</style>
</head>
<body>
  ${v.html}
</body>
</html>`;

  fs.writeFileSync(htmlPath, fullHtml);

  const bgFlag = v.transparent ? '--default-background-color=00000000' : '';
  const cmd = `"${CHROME}" --headless --disable-gpu ${bgFlag} --window-size=800,800 --screenshot="${pngPath}" "file://${htmlPath}" 2>/dev/null`;
  
  execSync(cmd);

  if (!v.transparent) {
    execSync(`sips -s format jpeg -s formatOptions 95 "${pngPath}" --out "${jpgPath}" >/dev/null 2>&1`);
    console.log(`✓ Rendered: ${v.filename}.png & ${v.filename}.jpg (800x800)`);
  } else {
    console.log(`✓ Rendered: ${v.filename}.png (800x800 Transparent)`);
  }
}

// Set up the primary recommended files in public root for instant convenience:
fs.copyFileSync(path.join(BRAND_DIR, 'brand-logo-white.png'), path.join(PUBLIC_DIR, 'brand-logo-800x800.png'));
fs.copyFileSync(path.join(BRAND_DIR, 'brand-logo-white.jpg'), path.join(PUBLIC_DIR, 'brand-logo-800x800.jpg'));
fs.copyFileSync(path.join(BRAND_DIR, 'brand-icon-white.png'), path.join(PUBLIC_DIR, 'brand-icon-800x800.png'));
fs.copyFileSync(path.join(BRAND_DIR, 'brand-icon-white.jpg'), path.join(PUBLIC_DIR, 'brand-icon-800x800.jpg'));

// Cleanup tmp
fs.rmSync(TMP_DIR, { recursive: true, force: true });
console.log('All brand logo assets generated successfully in public/brand/ and public/!');
