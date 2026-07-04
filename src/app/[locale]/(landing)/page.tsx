import {
  BookOpen,
  Joystick,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';

import { AdsterraNativeBanner } from '@/extensions/ads';
import { AtlasPreview } from '@/shared/blocks/meccha/atlas-preview';
import { DemoFrame } from '@/shared/blocks/meccha/demo-frame';
import {
  getHomeCopy,
  getLocalizedProblemCards,
  getLocalizedToolsRadarCards,
} from '@/shared/blocks/meccha/home-l10n';
import { XCommunityWall } from '@/shared/blocks/meccha/x-community-wall';
import { PlayKitCheckoutButton } from '@/shared/blocks/meccha/play-kit-checkout-button';

export const revalidate = 3600;

function localHref(locale: string, href: string) {
  if (href.startsWith('http') || href.startsWith('#')) return href;
  if (locale === 'en') return href;
  return `/${locale}${href}`;
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getHomeCopy(locale);
  const activeModes = copy.modes;
  const activeControls = copy.controls;
  const activeFaqs = copy.faqs;
  const activeProblemCards = getLocalizedProblemCards(locale);
  const activeToolsRadarCards = getLocalizedToolsRadarCards(locale);
  const artUrl = 'https://mecchachameleon.art/maps';

  return (
    <main className="brick-wall text-ink-900 min-h-screen">
      <section className="border-mortar/60 border-b bg-black/10">
        <div className="container pt-32 pb-8 lg:pt-40 lg:pb-10">
          <div className="mb-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="border-mortar/60 bg-paper/92 rounded-xl border p-6 shadow-xl">
              <p className="border-ink-900/20 text-ink-900 mb-3 inline-flex rounded-full border bg-white/70 px-3 py-1 text-sm font-semibold">
                {copy.eyebrow}
              </p>
              <h1 className="text-ink-900 max-w-4xl text-4xl leading-tight font-bold tracking-normal md:text-6xl">
                {copy.title}
              </h1>
              <p className="text-ink-500 mt-5 max-w-2xl text-base leading-7">
                {copy.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#play"
                className="bg-brick-500 hover:bg-brick-700 inline-flex min-h-11 items-center gap-2 rounded-md px-5 py-3 font-semibold text-white transition"
              >
                <PlayCircle className="h-5 w-5" />
                {copy.startPlaying}
              </a>
              <a
                href="#controls"
                className="border-mortar bg-paper text-ink-900 hover:bg-brick-50 inline-flex min-h-11 items-center gap-2 rounded-md border px-5 py-3 font-semibold transition"
              >
                <Joystick className="h-5 w-5" />
                {copy.controlsCta}
              </a>
            </div>
          </div>
          <div id="play">
            <DemoFrame locale={locale} />
          </div>
        </div>
      </section>

      <section className="border-mortar/70 bg-paper/94 border-b backdrop-blur-sm">
        <div className="container py-6">
          <AdsterraNativeBanner
            className="mx-auto min-h-[90px] w-full max-w-5xl"
            containerId="container-c6b5f81c613dfc3239d80d64788ac982"
            invokeSrc="https://pl30105398.effectivecpmnetwork.com/c6b5f81c613dfc3239d80d64788ac982/invoke.js"
          />
        </div>
      </section>

      <section
        id="problem-solver"
        className="border-mortar/70 bg-paper/94 border-b backdrop-blur-sm"
      >
        <div className="container py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-brick-600 text-xs font-semibold tracking-widest uppercase">
              {copy.problemEyebrow}
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
              {copy.problemTitle}
            </h2>
            <p className="text-ink-500 mt-3 text-sm leading-6">
              {copy.problemBody}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeProblemCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={localHref(locale, card.href)}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    card.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group border-mortar/70 bg-paper/88 hover:bg-brick-50 rounded-lg border p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Icon className="text-brick-500 mb-4 h-5 w-5" />
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-ink-500 mt-2 text-sm leading-6">
                    {card.body}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="controls"
        className="border-mortar/70 bg-paper/94 border-b backdrop-blur-sm"
      >
        <div className="container py-14">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-brick-600 text-xs font-semibold tracking-widest uppercase">
                {copy.controlsEyebrow}
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
                {copy.controlsTitle}
              </h2>
              <p className="text-ink-500 mt-3 max-w-2xl text-sm leading-6">
                {copy.controlsBody}
              </p>
            </div>
            <a
              href={artUrl}
              className="border-mortar/70 bg-paper/88 text-ink-900 inline-flex min-h-10 w-fit items-center gap-2 rounded-md border px-4 text-sm font-semibold"
            >
              <BookOpen className="h-4 w-4" />
              {copy.mapsCta}
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeControls.map(([name, value]) => (
              <div
                key={name}
                className="border-mortar/70 bg-paper/88 rounded-md border p-5"
              >
                <div className="text-sm font-semibold">{name}</div>
                <div className="text-brick-600 mt-2 text-xl font-bold">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modes" className="border-mortar/70 bg-brick-50/92 border-b">
        <div className="container py-14">
          <p className="text-brick-600 text-xs font-semibold tracking-widest uppercase">
            {copy.modesEyebrow}
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
            {copy.modesTitle}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {activeModes.map(([title, body], i) => (
              <div key={title} className="rounded-md bg-white p-5 shadow-sm">
                <div className="bg-brick-400 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-ink-500 mt-2 text-sm leading-6">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="assistant"
        className="border-mortar/70 bg-paper/94 border-b backdrop-blur-sm"
      >
        <div className="container grid gap-8 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-brick-600 text-xs font-semibold tracking-widest uppercase">
              {copy.assistantEyebrow}
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
              {copy.assistantTitle}
            </h2>
            <p className="text-ink-500 mt-4 text-sm leading-6">
              {copy.assistantBody}
            </p>
            <div className="mt-5 rounded-md border border-brick-200 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brick-600">
                {copy.priceEyebrow}
              </div>
              <div className="mt-1 flex items-end gap-3">
                <span className="text-4xl font-bold text-ink-900">$7</span>
                <span className="pb-1 text-sm text-ink-500">
                  {copy.priceNote}
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="w-full sm:w-auto">
                <PlayKitCheckoutButton
                  label={copy.checkoutLabel}
                  priceLabel="$7"
                />
              </div>
              <a
                href={localHref(locale, '/tools')}
                className="border-ink-900 text-ink-900 hover:bg-brick-50 inline-flex min-h-11 items-center gap-2 rounded-md border bg-white px-5 py-3 text-sm font-semibold transition"
              >
                <ShieldCheck className="h-4 w-4" />
                {copy.seeInside}
              </a>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-lg border border-mortar/70 bg-ink-900 shadow-sm">
              <Image
                src="/imgs/meccha/play-kit-promo.png"
                alt="Meccha Chameleon Play Kit paid download preview"
                width={1672}
                height={941}
                className="h-auto w-full"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {activeToolsRadarCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="border-mortar/70 bg-paper/88 rounded-md border p-5"
                  >
                    <Icon className="text-brick-500 mb-3 h-5 w-5" />
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-semibold">{card.title}</div>
                      <span className="text-brick-600 rounded-full bg-white px-2 py-1 text-[11px] font-semibold">
                        {card.risk}
                      </span>
                    </div>
                    <p className="text-ink-500 mt-2 text-sm leading-6">
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="border-mortar/70 bg-paper/88 border-b">
        <div className="container py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-brick-600 text-xs font-semibold tracking-widest uppercase">
              {copy.routesEyebrow}
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
              {copy.routesTitle}
            </h2>
            <p className="text-ink-500 mt-4 text-sm leading-6">
              {copy.routesBody}
            </p>
          </div>
          <AtlasPreview locale={locale} />
        </div>
      </section>

      <XCommunityWall locale={locale} />

      <section className="border-mortar/50 bg-paper/92 border-t">
        <div className="container py-14">
          <h2 className="mb-8 text-3xl font-bold tracking-normal md:text-4xl">
            {copy.faqTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {activeFaqs.map(([q, a]) => (
              <div
                key={q}
                className="border-mortar/70 bg-paper/94 rounded-md border p-5 backdrop-blur-sm"
              >
                <ShieldCheck className="text-brick-600 mb-3 h-5 w-5" />
                <h3 className="font-semibold">{q}</h3>
                <p className="text-ink-500 mt-2 text-sm leading-6">{a}</p>
              </div>
            ))}
          </div>
          <p className="border-mortar/70 bg-paper/94 text-ink-500 mt-8 rounded-md border p-4 text-xs leading-5 backdrop-blur-sm">
            <Sparkles className="text-brick-500 mr-2 inline h-4 w-4" />
            {copy.disclaimer}
          </p>
        </div>
      </section>
    </main>
  );
}
