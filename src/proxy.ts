import { NextRequest, NextResponse } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';
import createIntlMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '@/config/locale';
import { routing } from '@/core/i18n/config';
import {
  isLocaleSupportedForPath,
  normalizePublicPath,
  stripLocalePrefix,
} from '@/core/i18n/page-locales.js';

const intlMiddleware = createIntlMiddleware(routing);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.length > 1 && pathname.endsWith('/')) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.pathname = pathname.replace(/\/+$/, '');
    return NextResponse.redirect(canonicalUrl, 301);
  }

  // Extract locale from pathname
  const locale = pathname.split('/')[1];
  const isValidLocale = (locales as readonly string[]).includes(locale);
  const pathWithoutLocale = stripLocalePrefix(pathname);

  if (isValidLocale && !isLocaleSupportedForPath(locale, pathname)) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.pathname =
      normalizePublicPath(pathWithoutLocale) === '/'
        ? '/'
        : normalizePublicPath(pathWithoutLocale);
    return NextResponse.redirect(canonicalUrl, 301);
  }

  const isPublicPage =
    !pathWithoutLocale.startsWith('/admin') &&
    !pathWithoutLocale.startsWith('/settings') &&
    !pathWithoutLocale.startsWith('/activity') &&
    !pathWithoutLocale.startsWith('/sign-') &&
    !pathWithoutLocale.startsWith('/auth');

  if (isPublicPage) {
    const publicUrl = new URL(request.url);
    const publicResponse = isValidLocale
      ? NextResponse.next()
      : NextResponse.rewrite(
          new URL(
            `/${defaultLocale}${pathname === '/' ? '' : pathname}`,
            request.url
          )
        );

    publicResponse.headers.set('x-pathname', request.nextUrl.pathname);
    publicResponse.headers.set('x-url', publicUrl.toString());
    publicResponse.headers.delete('Set-Cookie');

    const cacheControl = 'public, s-maxage=3600, stale-while-revalidate=14400';
    publicResponse.headers.set('Cache-Control', cacheControl);
    publicResponse.headers.set('CDN-Cache-Control', cacheControl);
    publicResponse.headers.set('Cloudflare-CDN-Cache-Control', cacheControl);

    return publicResponse;
  }

  // Handle internationalization for auth and private app routes.
  const intlResponse = intlMiddleware(request);

  // Only check authentication for admin routes
  if (
    pathWithoutLocale.startsWith('/admin') ||
    pathWithoutLocale.startsWith('/settings') ||
    pathWithoutLocale.startsWith('/activity')
  ) {
    // Check if session cookie exists
    const sessionCookie = getSessionCookie(request);

    // If no session token found, redirect to sign-in
    if (!sessionCookie) {
      const signInUrl = new URL(
        isValidLocale ? `/${locale}/sign-in` : '/sign-in',
        request.url
      );
      // Add the current path (including search params) as callback - use relative path for multi-language support
      const callbackPath = pathWithoutLocale + request.nextUrl.search;
      signInUrl.searchParams.set('callbackUrl', callbackPath);
      return NextResponse.redirect(signInUrl);
    }

    // For admin routes, we need to check RBAC permissions
    // Note: Full permission check happens in the page/API route level
    // This is a lightweight session check to prevent unauthorized access
    // The detailed permission check (admin.access and specific permissions)
    // will be done in the layout or individual pages using requirePermission()
  }

  intlResponse.headers.set('x-pathname', request.nextUrl.pathname);
  intlResponse.headers.set('x-url', request.url);

  // Remove Set-Cookie from public pages to allow caching
  // We exclude admin, settings, activity, and auth pages from this behavior
  if (isPublicPage) {
    intlResponse.headers.delete('Set-Cookie');

    // Cache-Control header for public pages
    const cacheControl = 'public, s-maxage=3600, stale-while-revalidate=14400';

    intlResponse.headers.set('Cache-Control', cacheControl);
    intlResponse.headers.set('CDN-Cache-Control', cacheControl);
    intlResponse.headers.set('Cloudflare-CDN-Cache-Control', cacheControl);
  }

  // For all other routes (including /, /sign-in, /sign-up, /sign-out), just return the intl response
  return intlResponse;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
