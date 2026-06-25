// Build-time static sitemap generator. Replaces the Next.js dynamic
// sitemap.ts because the operator wants a static XML that Google can
// index regardless of server runtime state. Run via: pnpm sitemap
// or as a prebuild step in package.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const envUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://mechachameleon.games';
const base = envUrl.replace(/\/$/, '');

const locales = ['en', 'zh'];
const defaultLocale = 'en';
const now = new Date().toISOString();

const locUrl = (locale, path) => {
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;
  if (locale === defaultLocale) return `${base}${normalizedPath}`;
  return `${base}/${locale}${normalizedPath}`;
};

const entries = [];

// Home
for (const loc of locales) {
  entries.push({
    loc: locUrl(loc, '/'),
    alternates: Object.fromEntries(
      locales.map((l) => [l, locUrl(l, '/')])
    ),
    'x-default': locUrl(defaultLocale, '/'),
    lastmod: now,
    changefreq: 'weekly',
    priority: '1.0',
  });
}

// New player
for (const loc of locales) {
  entries.push({
    loc: locUrl(loc, '/new-player'),
    alternates: Object.fromEntries(
      locales.map((l) => [l, locUrl(l, '/new-player')])
    ),
    'x-default': locUrl(defaultLocale, '/new-player'),
    lastmod: now,
    changefreq: 'monthly',
    priority: '0.7',
  });
}

// Map detail pages intentionally stay out of the .games sitemap.
// They are lightweight route previews; the full indexable atlas belongs on mecchachameleon.art.

const buildUrl = (entry) => {
  let xml = '  <url>\n';
  xml += `    <loc>${entry.loc}</loc>\n`;
  xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  xml += `    <priority>${entry.priority}</priority>\n`;
  // xhtml:link alternates
  for (const [hreflang, href] of Object.entries(entry.alternates)) {
    xml += `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>\n`;
  }
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${entry['x-default']}"/>\n`;
  xml += '  </url>\n';
  return xml;
};

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(buildUrl).join('')}
</urlset>
`;

const outDir = path.join(root, 'public');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`Wrote ${outPath} (${entries.length} entries, ${xml.length} bytes)`);
