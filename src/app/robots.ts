import type { MetadataRoute } from 'next';

import { envConfigs } from '@/config';

// mechachameleon.games is a game-first hub:
//   - Indexed: /, /new-player, /connection-fix, /play-with-friends, /fps-boost,
//     /color-matching, /public-lobby-guide, /tools, /camo-lab
//   - Atlas (/maps/*) is allowed for crawl but lives in the official index on mecchachameleon.art
//   - All shipany template pages (SaaS dashboard / auth / AI tools / blog / docs / pricing /
//     settings / chat / activity / showcases / updates / auth-popup / auth-callback) are
//     disallow:ed for both * and Googlebot so they never reach Google's index even via
//     inbound links.
const disallowPaths = [
  '/admin',
  '/api',
  '/auth-popup',
  '/auth-callback',
  '/ai-image-generator',
  '/ai-music-generator',
  '/ai-video-generator',
  '/blog',
  '/chat',
  '/docs',
  '/no-permission',
  '/pricing',
  '/settings',
  '/showcases',
  '/sign-in',
  '/sign-up',
  '/updates',
  '/verify-email',
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