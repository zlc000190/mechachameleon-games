import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { guideText, problemGuides } from '@/shared/blocks/meccha/problem-guides';
import { ProblemGuidePage } from '@/shared/blocks/meccha/problem-guide-page';
import { getCanonicalUrl, getSocialImageUrl } from '@/shared/lib/seo';

export const revalidate = 3600;

const guide = problemGuides['public-lobby-guide'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = await getCanonicalUrl('/public-lobby-guide', locale);
  const imageUrl = getSocialImageUrl();
  return {
    title: guideText(guide, locale).title,
    description: guideText(guide, locale).description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title: guideText(guide, locale).title, description: guideText(guide, locale).description, url: canonicalUrl, images: [imageUrl] },
    twitter: { card: 'summary_large_image', title: guideText(guide, locale).title, description: guideText(guide, locale).description, images: [imageUrl] },
  };
}

export default async function PublicLobbyGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProblemGuidePage guide={guide} locale={locale} />;
}
