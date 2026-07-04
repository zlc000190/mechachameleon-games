import { locales } from '@/config/locale';

const LOCALE_PREFIX_PATTERN = new RegExp(
  `^/(${[...locales].join('|')})(?=/|$)`
);

export function normalizeLocalePathname(pathname: string | null | undefined) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const strippedPath = normalizedPath.replace(LOCALE_PREFIX_PATTERN, '');

  return strippedPath || '/';
}
