import bundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = createMDX();

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/core/i18n/request.ts',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.VERCEL ? undefined : 'standalone',
  trailingSlash: false,
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [60, 70, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  async redirects() {
    // Locale homepage canonical: force every locale prefix WITHOUT a trailing
    // slash to 301-redirect to the WITH-slash version. This consolidates the
    // PageRank split between /ja and /ja/ that GSC shows (e.g. /ja pos 6.1 +
    // /ja/ pos 4.8 -> merge into /ja/ at top 3).
    //
    // We deliberately do NOT redirect the bare root "/" because the canonical
    // is the no-slash form, and we do NOT touch deep pages (/tools,
    // /new-player, etc.) because they currently rank well without a trailing
    // slash and re-canonicalising them risks a fresh split cycle.
    //
    // NOTE: Next.js redirects() supports a `regex` source type since 14.x that
    // lets us anchor the match exactly with ^...$ — path-to-regexp source
    // strings can't express "match the locale segment but not when a slash
    // follows it" precisely enough without catching /japan, /james, etc.
    const localePrefixes = [
      'en', 'vi', 'es', 'pt', 'zh', 'zh-TW', 'fr', 'de',
      'nl', 'ja', 'ko', 'th', 'ru', 'ar',
    ];
    const alt = localePrefixes.join('|');
    return [
      {
        // ^/(locale)$  — exact, no trailing slash
        source: `/(${alt})$`,
        destination: '/$1/',
        permanent: true, // -> 301
        regex: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/imgs/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Allow OAuth popups to retain window.opener after cross-origin navigation
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },
  turbopack: {
    resolveAlias: {
      // fs: {
      //   browser: './empty.ts', // We recommend to fix code imports before using this method
      // },
    },
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
    // Disable mdxRs for Vercel deployment compatibility with fumadocs-mdx
    ...(process.env.VERCEL ? {} : { mdxRs: true }),
  },
  reactCompiler: true,
};

export default withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));
