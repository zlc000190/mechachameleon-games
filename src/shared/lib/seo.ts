import { getTranslations, setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { defaultLocale } from '@/config/locale';
import { HOMEPAGE_LOCALES, DEEP_PAGE_LOCALES } from '@/core/i18n/page-locales';

const BASE_URL = envConfigs.app_url.replace(/\/$/, '');

// Build the hreflang alternates map for a page.
// `supportedLocales` is the locale allowlist for the page
// (HOMEPAGE_LOCALES for the root, DEEP_PAGE_LOCALES for deep guide pages).
// Returns Record<hreflang, absolute URL>. Always includes 'x-default'
// pointing at the default-locale variant.
function buildLanguageAlternates(
  supportedLocales: readonly string[],
  path: string,
  defaultLocaleName: string
): Record<string, string> {
  const normalizedPath = path === '/' ? '' : path.replace(/\/+$/, '');
  const out: Record<string, string> = {};
  for (const loc of supportedLocales) {
    const locPath = loc === defaultLocaleName ? normalizedPath : `/${loc}${normalizedPath}`;
    out[loc] = `${BASE_URL}${locPath}`;
  }
  out['x-default'] = `${BASE_URL}${normalizedPath}`;
  return out;
}

type MetadataText = {
  title: string;
  description: string;
  keywords: string;
};

// get metadata for page component
export function getMetadata(
  options: {
    title?: string;
    description?: string;
    keywords?: string;
    metadataKey?: string;
    canonicalUrl?: string; // relative path or full url
    imageUrl?: string;
    appName?: string;
    noIndex?: boolean;
  } = {}
) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
    setRequestLocale(locale);

    // passed metadata
    const passedMetadata = {
      title: options.title,
      description: options.description,
      keywords: options.keywords,
    };

    // default metadata
    const defaultMetadata = await getTranslatedMetadata(
      defaultMetadataKey,
      locale
    );

    // translated metadata
    let translatedMetadata: Partial<MetadataText> = {};
    if (options.metadataKey) {
      translatedMetadata = await getTranslatedMetadata(
        options.metadataKey,
        locale
      );
    }

    // canonical url
    const canonicalUrl = await getCanonicalUrl(
      options.canonicalUrl || '',
      locale || ''
    );

    // Decide which locale allowlist this page exposes in hreflang.
    // The root + locale homepages use HOMEPAGE_LOCALES (14 languages).
    // Deep guide pages currently have only en + vi native rewrites,
    // so they only declare alternates for those two — declaring a hreflang
    // for a URL that 404s/redirects triggers GSC "alternate page with no
    // user-selected canonical" errors.
    const requestedPath = options.canonicalUrl || '/';
    const isHomepage =
      requestedPath === '/' || requestedPath === '' || requestedPath === 'home';
    const supportedLocales = isHomepage
      ? HOMEPAGE_LOCALES
      : DEEP_PAGE_LOCALES;

    // language alternates for hreflang
    const languages = buildLanguageAlternates(
      supportedLocales,
      requestedPath,
      defaultLocale
    );

    const title =
      passedMetadata.title || translatedMetadata.title || defaultMetadata.title;
    const description =
      passedMetadata.description ||
      translatedMetadata.description ||
      defaultMetadata.description;

    // image url
    let imageUrl = options.imageUrl || envConfigs.app_preview_image;
    if (imageUrl.startsWith('http')) {
      imageUrl = imageUrl;
    } else {
      imageUrl = `${envConfigs.app_url}${imageUrl}`;
    }

    // app name
    let appName = options.appName;
    if (!appName) {
      appName = envConfigs.app_name || '';
    }

    return {
      metadataBase: new URL(envConfigs.app_url),
      title:
        passedMetadata.title ||
        translatedMetadata.title ||
        defaultMetadata.title,
      description:
        passedMetadata.description ||
        translatedMetadata.description ||
        defaultMetadata.description,
      keywords:
        passedMetadata.keywords ||
        translatedMetadata.keywords ||
        defaultMetadata.keywords,
      alternates: {
        canonical: canonicalUrl,
        languages,
      },

      openGraph: {
        type: 'website',
        locale: locale,
        url: canonicalUrl,
        title,
        description,
        siteName: appName,
        images: [{ url: imageUrl.toString(), alt: title }],
      },

      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [imageUrl.toString()],
        site: envConfigs.app_url,
      },

      robots: {
        index: options.noIndex ? false : true,
        follow: options.noIndex ? false : true,
      },
    };
  };
}

const defaultMetadataKey = 'common.metadata';

async function getTranslatedMetadata(metadataKey: string, locale: string) {
  const t = await getTranslations({ locale, namespace: metadataKey });

  return {
    title: t.has('title') ? t('title') : '',
    description: t.has('description') ? t('description') : '',
    keywords: t.has('keywords') ? t('keywords') : '',
  };
}

export async function getCanonicalUrl(canonicalUrl: string, locale: string) {
  if (!canonicalUrl) {
    canonicalUrl = '/';
  }

  const appUrl = envConfigs.app_url.replace(/\/$/, '');

  if (canonicalUrl.startsWith('http')) {
    // full url
    canonicalUrl = canonicalUrl.replace(/\/$/, '');
  } else {
    // relative path
    if (!canonicalUrl.startsWith('/')) {
      canonicalUrl = `/${canonicalUrl}`;
    }

    const pathPart =
      canonicalUrl === '/' ? '' : canonicalUrl.replace(/\/+$/, '');

    canonicalUrl = `${appUrl}${
      !locale || locale === defaultLocale ? '' : `/${locale}`
    }${pathPart}`;
  }

  return canonicalUrl;
}

export function getSocialImageUrl(imageUrl = envConfigs.app_preview_image) {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }

  return `${envConfigs.app_url}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
}
