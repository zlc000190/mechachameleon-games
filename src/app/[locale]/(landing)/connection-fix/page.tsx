import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { problemGuides } from '@/shared/blocks/meccha/problem-guides';
import { ProblemGuidePage } from '@/shared/blocks/meccha/problem-guide-page';
import { getCanonicalUrl } from '@/shared/lib/seo';

export const revalidate = 3600;

const guide = problemGuides['connection-fix'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = await getCanonicalUrl('/connection-fix', locale);
  return {
    title: locale === 'zh' ? guide.zhTitle : guide.title,
    description: locale === 'zh' ? guide.zhDescription : guide.description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title: locale === 'zh' ? guide.zhTitle : guide.title, description: locale === 'zh' ? guide.zhDescription : guide.description, url: canonicalUrl },
    twitter: { card: 'summary_large_image', title: locale === 'zh' ? guide.zhTitle : guide.title, description: locale === 'zh' ? guide.zhDescription : guide.description },
  };
}

export default async function ConnectionFixPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProblemGuidePage guide={guide} locale={locale} />;
}
