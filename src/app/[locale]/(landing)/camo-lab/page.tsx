import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ArrowLeft, Brush, ExternalLink } from 'lucide-react';

import { CamoLabWidget } from '@/shared/blocks/meccha/camo-lab-widget';
import { camoLabPage as guide, guideText } from '@/shared/blocks/meccha/problem-guides';
import { getCanonicalUrl, getSocialImageUrl } from '@/shared/lib/seo';

export const revalidate = 3600;

function localHref(locale: string, href: string) {
  if (href.startsWith('http') || href.startsWith('#')) return href;
  if (locale === 'en') return href;
  return `/${locale}${href}`;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = await getCanonicalUrl('/camo-lab', locale);
  const imageUrl = getSocialImageUrl();
  const copy = guideText(guide, locale);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title: copy.title, description: copy.description, url: canonicalUrl, images: [imageUrl] },
    twitter: { card: 'summary_large_image', title: copy.title, description: copy.description, images: [imageUrl] },
  };
}

export default async function CamoLabPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const vi = locale === 'vi';
  const copy = guideText(guide, locale);

  return (
    <main className="min-h-screen bg-[#fff7f1] text-[#29211D]">
      <section className="border-b border-[#D8CFC6] bg-gradient-to-br from-[#fff7c8] via-[#ffd2e1] to-[#cdefff]">
        <div className="container pb-12 pt-28 lg:pb-16 lg:pt-36">
          <a href={localHref(locale, '/')} className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-md border border-[#29211D]/20 bg-white/75 px-3 py-2 text-sm font-semibold text-[#29211D] hover:bg-white">
            <ArrowLeft className="h-4 w-4" />{vi ? 'Quay lại trang chơi' : zh ? '返回游戏入口' : 'Back to play hub'}
          </a>
          <p className="mb-3 inline-flex rounded-full border border-[#29211D]/20 bg-white/75 px-3 py-1 text-sm font-semibold text-[#29211D]">{copy.eyebrow}</p>
          <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-normal md:text-6xl">{copy.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#4C3B35] md:text-lg">{copy.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={localHref(locale, copy.primaryCta.href)} className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#ff6f9a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e95a88]"><Brush className="h-4 w-4" />{copy.primaryCta.label}</a>
            <a href={localHref(locale, copy.secondaryCta?.href ?? '/color-matching')} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#29211D]/20 bg-white px-5 py-3 text-sm font-semibold text-[#29211D] transition hover:bg-[#fff7c8]">{copy.secondaryCta?.label}</a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D8CFC6] bg-white">
        <div className="container grid gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <CamoLabWidget />
          <div className="grid gap-3">
            {copy.quickAnswers.map(([q, a]) => (
              <div key={q} className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-4">
                <h2 className="font-semibold">{q}</h2>
                <p className="mt-2 text-sm leading-6 text-[#4C3B35]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
        <div className="container py-12">
          {copy.sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-[#D8CFC6] bg-white p-6">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4C3B35]">{section.body}</p>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {section.bullets.map((bullet) => <li key={bullet} className="rounded-md bg-[#F6F0EA] p-3 text-sm leading-6">{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-12">
          <h2 className="text-2xl font-bold">{vi ? 'Bước tiếp theo' : zh ? '下一步' : 'Next steps'}</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {copy.related.map((link) => (
              <a key={link.href} href={localHref(locale, link.href)} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#D8CFC6] bg-[#F6F0EA] px-5 py-3 text-sm font-semibold text-[#29211D] hover:bg-[#fff7c8]">
                {link.label}{link.href.startsWith('http') ? <ExternalLink className="h-4 w-4" /> : null}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
