import { defineRouting } from 'next-intl/routing';

import {
  defaultLocale,
  localeDetection,
  localePrefix,
  locales,
} from '@/config/locale';

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: locales.includes(defaultLocale as any)
    ? (defaultLocale as (typeof locales)[number])
    : 'en',
  localePrefix,
  localeDetection,
});
