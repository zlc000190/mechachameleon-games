// Build-time static sitemap generator.
//
// SEO rule for .games (2026-06-26):
//   - Use B-scheme safely: only index locales that truly carry stable page
//     content in <url> entries (currently en + zh).
//   - Still emit the FULL hreflang alternate set for all supported locales so
//     search engines understand they are alternate language versions of the
//     same route, not unrelated pages.
//   - x-default always points to the default-locale (en) URL.
//   - Never list half-translated locales as first-class sitemap <url> entries.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const envUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://mechachameleon.games';
const base = envUrl.replace(/\/$/, '');

// All supported locales for hreflang coverage.
const allLocales = [
  'en',
  'zh',
  'ru',
  'it',
  'fr',
  'de',
  'es',
  'pt',
  'ja',
  'ko',
  'ar',
  'th',
  'vi',
  'zh-TW',
  'nl',
];

// Only locales with safely indexable .games content get their own <url> entry.
// fr/es/zh-TW already have some shell translations, but the main page bodies are
// not fully localized yet, so we keep them out of <url> entries for now.
const indexableLocales = ['en', 'zh'];
const defaultLocale = 'en';
const now = new Date().toISOString();

const locUrl = (locale, routePath) => {
  const normalizedPath = routePath.endsWith('/') ? routePath : `${routePath}/`;
  if (locale === defaultLocale) return `${base}${normalizedPath}`;
  return `${base}/${locale}${normalizedPath}`;
};

const entries = [];

const marketingPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/new-player', changefreq: 'monthly', priority: '0.7' },
  { path: '/connection-fix', changefreq: 'weekly', priority: '0.9' },
  { path: '/play-with-friends', changefreq: 'weekly', priority: '0.9' },
  { path: '/fps-boost', changefreq: 'weekly', priority: '0.85' },
  { path: '/color-matching', changefreq: 'weekly', priority: '0.85' },
  { path: '/public-lobby-guide', changefreq: 'weekly', priority: '0.8' },
  { path: '/tools', changefreq: 'weekly', priority: '0.8' },
  { path: '/camo-lab', changefreq: 'weekly', priority: '0.75' },
];

for (const page of marketingPages) {
  for (const loc of indexableLocales) {
    entries.push({
      loc: locUrl(loc, page.path),
      alternates: Object.fromEntries(
        allLocales.map((l) => [l, locUrl(l, page.path)])
      ),
      'x-default': locUrl(defaultLocale, page.path),
      lastmod: now,
      changefreq: page.changefreq,
      priority: page.priority,
    });
  }
}

// Map detail pages intentionally stay out of the .games sitemap.
// The full indexable atlas belongs on mecchachameleon.art.

const buildUrl = (entry) => {
  let xml = '  <url>\n';
  xml += `    <loc>${entry.loc}</loc>\n`;
  xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  xml += `    <priority>${entry.priority}</priority>\n`;
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
console.log(`Indexable locales in <url>: ${indexableLocales.join(', ')}`);
console.log(`Hreflang-only locales: ${allLocales.filter((l) => !indexableLocales.includes(l)).join(', ')}`);
