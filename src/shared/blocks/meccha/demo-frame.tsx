'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Gamepad2, Sparkles } from 'lucide-react';

type Demo = {
  id: 'easy' | 'hard' | 'social';
  label: string;
  title: string;
  source: string;
  ratio: string;
  src: string;
  note: string;
  openInNewTab: string;
};

const SHARED_GAME_URL =
  process.env.NEXT_PUBLIC_SHARED_GAME_URL ||
  'https://pub-8954980549be475f97e5a9810a809587.r2.dev/index.html';

// The primary slot embeds our own shared static game build. Host that build on
// a neutral CDN/R2 subdomain, then let .art and .games wrap it with different
// page copy, titles, screenshots, and internal links.
const EASY_STANDBY_NOTE_EN =
  'Playing the shared Mecha Chameleon browser build. The game files are hosted separately from the guide pages so .art and .games can keep distinct page content while using the same playable source.';

const EASY_STANDBY_NOTE_ZH =
  '正在运行共享的 Mecha Chameleon 浏览器版。游戏文件独立托管，.art 和 .games 可以使用同一个可玩源，同时保留不同页面内容。';

const demos: Demo[] = [
  {
    id: 'easy',
    label: 'Play',
    title: 'Mecha Chameleon Browser Game',
    source: 'Shared CDN',
    ratio: 'aspect-[16/9] min-h-[520px] max-h-[86vh]',
    src: SHARED_GAME_URL,
    note: EASY_STANDBY_NOTE_EN,
    openInNewTab: SHARED_GAME_URL,
  },
  {
    id: 'hard',
    label: 'Hard',
    title: 'Hide N Seek',
    source: 'CrazyGames',
    ratio: 'aspect-[9/16] min-h-[720px] max-h-[86vh]',
    src: 'https://games.crazygames.com/en_US/hide-n-seek/index.html',
    note: 'Hard mode uses the CrazyGames Hide N Seek iframe. If the ad splash sticks, use the new-tab fallback.',
    openInNewTab: 'https://www.crazygames.com/game/hide-n-seek',
  },
  {
    id: 'social',
    label: 'Social',
    title: 'Sneaky Friends',
    source: 'GameDistribution',
    ratio:
      'aspect-[480/800] sm:aspect-[16/10] lg:aspect-[480/800] min-h-[640px] max-h-[86vh]',
    src: 'https://embed.gamedistribution.com/?url=https://html5.gamedistribution.com/8529938662c2447091414e2cc73983e3/&width=480&height=800&language=en&gdpr-tracking=1&gdpr-targeting=1&gd_sdk_referrer_url=https://mechachameleon.games/',
    note: 'Social mode uses the friend-focused hide-and-seek browser game. Best for users looking for a group-play flavor.',
    openInNewTab:
      'https://html5.gamedistribution.com/8529938662c2447091414e2cc73983e3/',
  },
];

const zhNotes: Record<Demo['id'], string> = {
  easy: EASY_STANDBY_NOTE_ZH,
  hard: 'Hard 使用 CrazyGames 的 Hide N Seek iframe。广告加载卡住时，用新标签打开。',
  social:
    'Social 使用偏朋友组队体验的 hide-and-seek 浏览器游戏，适合社交玩法搜索。',
};

export function DemoFrame({ locale = 'en' }: { locale?: string }) {
  const zh = locale === 'zh';
  const [activeId, setActiveId] = useState<Demo['id']>('easy');
  const [showHint, setShowHint] = useState(true);
  const activeDemo = demos.find((demo) => demo.id === activeId) ?? demos[0];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 9000);
    return () => clearTimeout(t);
  }, [activeId]);

  const handlePrimaryAction = () => {
    iframeRef.current?.focus();
  };

  return (
    <div id="play" className="scroll-mt-24">
      <div className="border-mortar/70 bg-paper/94 overflow-hidden rounded-lg border shadow-[0_18px_60px_rgba(42,19,10,0.22)]">
        <div className="border-mortar/70 text-ink-900 border-b px-4 py-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="text-sm font-semibold">
                {zh ? 'Mecha Chameleon 在线游戏' : 'Mecha Chameleon Game'} ·{' '}
                {activeDemo.label}
              </div>
              <div className="text-ink-500 mt-1 text-xs">
                {activeDemo.title} via {activeDemo.source}
              </div>
            </div>
            <button
              type="button"
              onClick={handlePrimaryAction}
              className="bg-brick-500 hover:bg-brick-700 inline-flex min-h-9 w-fit items-center gap-2 rounded-md px-4 text-sm font-semibold text-white transition"
            >
              <Gamepad2 className="h-4 w-4" />
              {zh ? '点击开始' : 'Click to Play'}
            </button>
          </div>

          <div
            className="mt-4 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Game mode"
          >
            {demos.map((demo) => (
              <button
                key={demo.id}
                type="button"
                role="tab"
                aria-selected={activeDemo.id === demo.id}
                onClick={() => {
                  setActiveId(demo.id);
                  setShowHint(true);
                }}
                className={`min-h-9 rounded-md border px-4 text-sm font-semibold transition ${
                  activeDemo.id === demo.id
                    ? 'border-ink-900 bg-ink-900 text-white'
                    : 'border-mortar text-ink-900 hover:bg-brick-50 bg-white'
                }`}
              >
                {demo.label}
              </button>
            ))}
          </div>
          <p className="text-ink-500 mt-3 text-xs leading-5">
            {zh ? zhNotes[activeDemo.id] : activeDemo.note}
          </p>
        </div>

        <div
          className={`bg-brick-900 relative w-full overflow-hidden ${activeDemo.ratio}`}
        >
          <iframe
            key={activeDemo.id}
            ref={iframeRef}
            title={`${activeDemo.title} browser game`}
            src={activeDemo.src}
            className="absolute inset-0 h-full w-full"
            loading="eager"
            allow="autoplay; fullscreen; gamepad; pointer-lock; encrypted-media; web-share"
            allowFullScreen
            scrolling="no"
            referrerPolicy="origin"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-pointer-lock allow-top-navigation allow-presentation"
          />
          {showHint && activeDemo.id !== 'easy' ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="pointer-events-auto flex max-w-md items-start gap-3 rounded-lg border border-amber-300/40 bg-amber-50/95 px-4 py-3 text-sm text-amber-950 shadow-lg">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                <div>
                  <div className="font-semibold">
                    {zh
                      ? '如果 iframe 加载卡住，点击下方新标签打开。'
                      : 'If the iframe splash sticks, open the game in a new tab.'}
                  </div>
                  <div className="mt-1 text-xs text-amber-900/80">
                    {zh
                      ? '第三方游戏源，非官方 Meccha Chameleon。'
                      : 'Third-party game source, not the official Meccha Chameleon.'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowHint(false)}
                  className="-mt-1 -mr-1 rounded p-1 text-amber-700 hover:bg-amber-200/60"
                  aria-label="Dismiss hint"
                >
                  ×
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="border-mortar/70 bg-paper/90 text-ink-500 flex flex-wrap items-center justify-between gap-3 border-t px-4 py-3 text-xs">
          <span>
            {zh
              ? activeDemo.id === 'easy'
                ? '自有游戏源独立托管，当前页面只负责承载和说明。'
                : '第三方游戏源直接嵌入，无需跳转。'
              : activeDemo.id === 'easy'
                ? 'Owned game build hosted separately; this page provides the play shell and guide context.'
                : 'Third-party source embedded directly, no redirect required.'}
          </span>
          <a
            href={activeDemo.openInNewTab}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="border-mortar text-ink-900 hover:bg-brick-50 inline-flex items-center gap-1.5 rounded-md border bg-white px-3 py-1.5 font-semibold"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {zh ? `打开 ${activeDemo.label}` : `Open ${activeDemo.title}`}
          </a>
        </div>
      </div>
    </div>
  );
}
