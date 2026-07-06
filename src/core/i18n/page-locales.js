export const HOMEPAGE_LOCALES = [
  'en',
  'vi',
  'es',
  'pt',
  'zh',
  'zh-TW',
  'fr',
  'de',
  'nl',
  'ja',
  'ko',
  'th',
  'ru',
  'ar',
];

export const DEEP_PAGE_LOCALES = ['en', 'vi'];

export const LOCALE_PREFIX_PATTERN =
  /^\/(en|zh|ru|it|fr|de|es|pt|ja|ko|ar|th|vi|zh-TW|nl)(?=\/|$)/;

const DEEP_PAGE_PREFIXES = [
  '/tools',
  '/new-player',
  '/connection-fix',
  '/play-with-friends',
  '/fps-boost',
  '/color-matching',
  '/public-lobby-guide',
  '/camo-lab',
];

export function normalizePublicPath(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const ensuredLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const withoutTrailingSlash = ensuredLeadingSlash.replace(/\/+$/, '');

  return withoutTrailingSlash || '/';
}

export function stripLocalePrefix(pathname) {
  const normalized = normalizePublicPath(pathname);
  const stripped = normalized.replace(LOCALE_PREFIX_PATTERN, '');

  return stripped || '/';
}

export function getSupportedLocalesForPath(pathname) {
  const strippedPath = stripLocalePrefix(pathname);

  if (strippedPath === '/') {
    return HOMEPAGE_LOCALES;
  }

  if (
    DEEP_PAGE_PREFIXES.some(
      (prefix) => strippedPath === prefix || strippedPath.startsWith(`${prefix}/`)
    )
  ) {
    return DEEP_PAGE_LOCALES;
  }

  return ['en'];
}

export function isLocaleSupportedForPath(locale, pathname) {
  return getSupportedLocalesForPath(pathname).includes(locale);
}
