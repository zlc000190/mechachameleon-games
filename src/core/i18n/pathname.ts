import { stripLocalePrefix } from '@/core/i18n/page-locales.js';

export function normalizeLocalePathname(pathname: string | null | undefined) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const strippedPath = stripLocalePrefix(pathname);

  return strippedPath || '/';
}
