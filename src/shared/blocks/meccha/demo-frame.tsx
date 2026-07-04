'use client';

import Script from 'next/script';
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

const demos: Demo[] = [
  {
    id: 'easy',
    label: 'Easy',
    title: 'Meccha Chameleon Browser Game',
    source: 'Geometry Online',
    ratio: 'aspect-[16/9] min-h-[520px] max-h-[86vh]',
    src: 'https://chameleon-game.com/',
    note: 'Easy mode opens the Meccha Chameleon game screen directly, with Quick play, room creation, and practice visible right away.',
    openInNewTab: 'https://chameleon-game.com/',
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
    ratio: 'aspect-[480/800] sm:aspect-[16/10] lg:aspect-[480/800] min-h-[640px] max-h-[86vh]',
    src: 'https://embed.gamedistribution.com/?url=https://html5.gamedistribution.com/8529938662c2447091414e2cc73983e3/&width=480&height=800&language=en&gdpr-tracking=1&gdpr-targeting=1&gd_sdk_referrer_url=https://mechachameleon.games/',
    note: 'Social mode uses the friend-focused hide-and-seek browser game. Best for users looking for a group-play flavor.',
    openInNewTab: 'https://html5.gamedistribution.com/8529938662c2447091414e2cc73983e3/',
  },
];

const zhNotes: Record<Demo['id'], string> = {
  easy: 'Easy 直接打开 Meccha Chameleon 游戏屏，进入后就能看到 Quick play、创建房间和练习模式。',
  hard: 'Hard 使用 CrazyGames 的 Hide N Seek iframe。广告加载卡住时，用新标签打开。',
  social: 'Social 使用偏朋友组队体验的 hide-and-seek 浏览器游戏，适合社交玩法搜索。',
};

const EASY_LOAD_TIMEOUT_MS = 4500;
const EASY_POLL_INTERVAL_MS = 250;

function isEasyFrameReady(frame: HTMLIFrameElement | null) {
  if (!frame) return false;

  try {
    const doc = frame.contentDocument;
    const body = doc?.body;

    if (!doc || !body) return false;
    if (body.querySelector('.loader')) return false;

    const title = doc.title.toLowerCase();
    const text = body.textContent?.toLowerCase() ?? '';
    const html = body.innerHTML.toLowerCase();

    if (title.includes('meccha chameleon')) return true;
    if (text.includes('meccha chameleon')) return true;
    if (text.includes('quick play')) return true;
    if (text.includes('create room')) return true;
    if (text.includes('practice')) return true;

    return html.length > 1000;
  } catch {
    return false;
  }
}

export function DemoFrame({ locale = 'en' }: { locale?: string }) {
  const zh = locale === 'zh';
  const [activeId, setActiveId] = useState<Demo['id']>('easy');
  const [showHint, setShowHint] = useState(true);
  const [easyFrameState, setEasyFrameState] = useState<'loading' | 'ready' | 'fallback'>('loading');
  const activeDemo = demos.find((demo) => demo.id === activeId) ?? demos[0];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 9000);
    return () => clearTimeout(t);
  }, [activeId]);

  useEffect(() => {
    if (activeDemo.id !== 'easy') return;

    let finished = false;
    const finish = (state: 'ready' | 'fallback') => {
      if (finished) return;
      finished = true;
      clearTimeout(timeoutId);
      clearInterval(pollId);
      setEasyFrameState(state);
    };

    const poll = () => {
      if (isEasyFrameReady(iframeRef.current)) {
        finish('ready');
      }
    };

    const timeoutId = window.setTimeout(() => {
      if (!finished) {
        setEasyFrameState((current) => (current === 'ready' ? current : 'fallback'));
      }
    }, EASY_LOAD_TIMEOUT_MS);
    const pollId = window.setInterval(poll, EASY_POLL_INTERVAL_MS);

    poll();

    return () => {
      finished = true;
      clearTimeout(timeoutId);
      clearInterval(pollId);
    };
  }, [activeDemo.id]);

  const openFallback = () => {
    window.open(activeDemo.openInNewTab, '_blank', 'noopener,noreferrer');
  };

  const handlePrimaryAction = () => {
    if (activeDemo.id === 'easy' && easyFrameState !== 'ready') {
      openFallback();
      return;
    }

    iframeRef.current?.focus();
  };

  return (
    <div id="play" className="scroll-mt-24">
      <Script src="/vendor/x-frame-bypass.js" strategy="afterInteractive" />
      <div className="overflow-hidden rounded-lg border border-mortar/70 bg-paper/94 shadow-[0_18px_60px_rgba(42,19,10,0.22)]">
        <div className="border-b border-mortar/70 px-4 py-3 text-ink-900">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="text-sm font-semibold">
                {zh ? 'Mecha Chameleon 在线游戏' : 'Mecha Chameleon Game'} · {activeDemo.label}
              </div>
              <div className="mt-1 text-xs text-ink-500">
                {activeDemo.title} via {activeDemo.source}
              </div>
            </div>
            <button
              type="button"
              onClick={handlePrimaryAction}
              className="inline-flex min-h-9 w-fit items-center gap-2 rounded-md bg-brick-500 px-4 text-sm font-semibold text-white transition hover:bg-brick-700"
            >
              <Gamepad2 className="h-4 w-4" />
              {zh
                ? activeDemo.id === 'easy' && easyFrameState !== 'ready'
                  ? '新标签打开'
                  : '点击开始'
                : activeDemo.id === 'easy' && easyFrameState !== 'ready'
                  ? 'Open New Tab'
                  : 'Click to Play'}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Game mode">
            {demos.map((demo) => (
              <button
                key={demo.id}
                type="button"
                role="tab"
                aria-selected={activeDemo.id === demo.id}
                onClick={() => {
                  setActiveId(demo.id);
                  if (demo.id === 'easy') {
                    setEasyFrameState('loading');
                  }
                  setShowHint(true);
                }}
                className={`min-h-9 rounded-md border px-4 text-sm font-semibold transition ${
                  activeDemo.id === demo.id
                    ? 'border-ink-900 bg-ink-900 text-white'
                    : 'border-mortar bg-white text-ink-900 hover:bg-brick-50'
                }`}
              >
                {demo.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-ink-500">
            {zh ? zhNotes[activeDemo.id] : activeDemo.note}
          </p>
        </div>

        <div className={`relative w-full overflow-hidden bg-brick-900 ${activeDemo.ratio}`}>
          <iframe
            key={activeDemo.id}
            ref={iframeRef}
            title={`${activeDemo.title} browser game`}
            src={activeDemo.src}
            is={activeDemo.id === 'easy' ? 'x-frame-bypass' : undefined}
            className="absolute inset-0 h-full w-full"
            loading="eager"
            allow="autoplay; fullscreen; gamepad; pointer-lock; encrypted-media; web-share"
            allowFullScreen
            scrolling="no"
            referrerPolicy="origin"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-pointer-lock allow-top-navigation allow-presentation"
          />
          {activeDemo.id === 'easy' && easyFrameState !== 'ready' ? (
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/55 via-black/20 to-transparent p-4">
              <div className="pointer-events-auto flex max-w-md items-start gap-3 rounded-lg border border-white/20 bg-white/95 px-4 py-3 text-sm text-ink-900 shadow-xl">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brick-500 text-white">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold">
                    {easyFrameState === 'fallback'
                      ? zh
                        ? '这个内嵌被拦住了，直接新标签打开更稳。'
                        : 'This embed is blocked or too slow. Open the game in a new tab.'
                      : zh
                        ? '正在尝试轻量内嵌加载，卡住就直接新标签。'
                        : 'Trying a lightweight embedded load. If it stalls, open a new tab.'}
                  </div>
                  <div className="mt-1 text-xs text-ink-500">
                    {zh ? '你也可以随时用下面的按钮直接跳转。' : 'You can always jump out with the button below.'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openFallback}
                  className="shrink-0 rounded-md bg-brick-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brick-700"
                >
                  {zh ? '打开新标签' : 'Open Tab'}
                </button>
              </div>
            </div>
          ) : null}
          {showHint && activeDemo.id !== 'easy' ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="pointer-events-auto flex max-w-md items-start gap-3 rounded-lg border border-amber-300/40 bg-amber-50/95 px-4 py-3 text-sm text-amber-950 shadow-lg">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                <div>
                  <div className="font-semibold">
                    {zh ? '如果 iframe 加载卡住，点击下方新标签打开。' : 'If the iframe splash sticks, open the game in a new tab.'}
                  </div>
                  <div className="mt-1 text-xs text-amber-900/80">
                    {zh ? '第三方游戏源，非官方 Meccha Chameleon。' : 'Third-party game source, not the official Meccha Chameleon.'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowHint(false)}
                  className="-mr-1 -mt-1 rounded p-1 text-amber-700 hover:bg-amber-200/60"
                  aria-label="Dismiss hint"
                >
                  ×
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-mortar/70 bg-paper/90 px-4 py-3 text-xs text-ink-500">
          <span>{zh ? '提示：第三方源不加载时，使用新标签获得完整体验。' : 'Tip: if a third-party source does not load, use the new-tab fallback.'}</span>
          <a
            href={activeDemo.openInNewTab}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-mortar bg-white px-3 py-1.5 font-semibold text-ink-900 hover:bg-brick-50"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {zh ? `打开 ${activeDemo.label}` : `Open ${activeDemo.title}`}
          </a>
        </div>
      </div>
    </div>
  );
}
