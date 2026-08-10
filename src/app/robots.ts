import type { MetadataRoute } from 'next';

import { envConfigs } from '@/config';

// mechachameleon.games is a game-first hub:
//   - Indexed: /, /new-player, /connection-fix, /play-with-friends, /fps-boost,
//     /color-matching, /public-lobby-guide, /tools, /camo-lab
//   - Atlas (/maps/*) is allowed for crawl but lives in the official index on mecchachameleon.art
//   - The disallow list only covers paths that exist as real routes on this
//     site (admin / api / auth* / settings / sign-*). Shipany-template paths
//     (/blog /chat /docs /pricing etc.) are NOT listed here — those routes
//     are live with their own `<meta name="robots" content="noindex">`,
//     which is a cleaner signal than the Disallow contradiction that
//     previously triggered GSC's "indexed though blocked by robots.txt"
//     report.
const disallowPaths = [
  '/admin',
  '/api',
  '/auth-popup',
  '/auth-callback',
  '/settings',
  '/sign-in',
  '/sign-up',
];

export default function robots(): MetadataRoute.Robots {
  const base = envConfigs.app_url.replace(/\/$/, '');
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowPaths,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowPaths,
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/admin', '/api'],
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/admin', '/api'],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      `${base}/sitemap.xml`,
      // 显式声明多语言站点, 帮 Yandex 抓全
    ],
    host: base,
  };
}
