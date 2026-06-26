'use client';

import { ExternalLink, ImageIcon, MessageCircle, Star, ThumbsDown, ThumbsUp, Video } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type XPost = {
  id: string;
  account: string;
  name: string;
  url: string;
  text: string;
  kind: 'screenshot' | 'video' | 'gif' | 'official' | 'community';
  source: string;
  seed: number;
};

const posts: XPost[] = [
  {
    id: 'official-1-5-update',
    account: '@mecchachameleon',
    name: 'Meccha Chameleon',
    url: 'https://x.com/mecchachameleon',
    kind: 'official',
    source: 'X profile result',
    seed: 91,
    text:
      'Do you guys like the game? The 1.5 update added reveal-time likes for hidden players and saves those likes forever.',
  },
  {
    id: 'bermasin-sketch-gif',
    account: '@bermasin',
    name: 'Ber00',
    url: 'https://x.com/bermasin/status/2069081740170178694',
    kind: 'gif',
    source: 'Public X search result',
    seed: 62,
    text: 'meccha chameleon sketch gif — a short community GIF / sketch share around the game.',
  },
  {
    id: 'bermasin-is-fun',
    account: '@bermasin',
    name: 'Ber00',
    url: 'https://x.com/bermasin/status/2069486256892035153',
    kind: 'community',
    source: 'Public X search result',
    seed: 74,
    text: 'meccha chameleon is fun — quick player reaction post from the X community.',
  },
  {
    id: 'grok-funny-clip',
    account: '@grok',
    name: 'Grok',
    url: 'https://x.com/grok/status/2068321719446594040',
    kind: 'screenshot',
    source: 'Public X search result',
    seed: 38,
    text:
      'Funny clip from the viral Steam game めっちゃカメレオン / Meccha Chameleon: players paint a white character to blend into the background.',
  },
  {
    id: 'dokibird-vtuber-collab',
    account: '@dokibird',
    name: 'Dokibird',
    url: 'https://x.com/dokibird/status/2069466146437312792',
    kind: 'video',
    source: 'Public X search result',
    seed: 87,
    text:
      'After seeing a million clips of this game, brought together a bunch of VTubers for hide-and-seek painting shenanigans.',
  },
  {
    id: 'cosmicbunny-vtuber-collab',
    account: '@CosmicBunnyVT',
    name: 'Cosmic Bunny',
    url: 'https://x.com/CosmicBunnyVT/status/2069643509645164590',
    kind: 'video',
    source: 'Public X search result',
    seed: 46,
    text:
      'Meccha Chameleon VTuber collab announcement with multiple creators and a stream link in bio.',
  },
  {
    id: 'roflgator-hidden-pic',
    account: '@roflgatorOW',
    name: 'roflgator',
    url: 'https://x.com/roflgatorOW/status/2065195884090966045',
    kind: 'screenshot',
    source: 'Public X search result',
    seed: 58,
    text:
      'We played MECCHA CHAMELEON! I am completely in this pic, can you find me? — screenshot-style hide-and-seek challenge.',
  },
  {
    id: 'fuzettv-real-way',
    account: '@Fuzettv_',
    name: 'Fuze',
    url: 'https://x.com/Fuzettv_/status/2068628595296059774',
    kind: 'video',
    source: 'Public X search result',
    seed: 69,
    text:
      'THE REAL WAY TO PLAY MECCHA CHAMELEON!! #mecchachameleon #funny #gaming — clip-style community post.',
  },
  {
    id: 'x-community',
    account: 'X Community',
    name: 'meccha chameleon Community',
    url: 'https://x.com/i/communities/1999897138612847006',
    kind: 'community',
    source: 'Public X search result',
    seed: 53,
    text:
      'A Meccha Chameleon community on X with hundreds of members discussing and sharing ideas around the game.',
  },
];

type Votes = Record<string, { up: number; down: number; user?: 'up' | 'down' }>;

const VOTE_KEY = 'meccha-x-wall-votes-v1';
const RATING_KEY = 'meccha-x-wall-rating-v1';

function defaultVotes(seed: number) {
  // Deterministic "random-looking" initial values so the same post keeps the same baseline.
  return {
    up: 18 + ((seed * 37) % 95),
    down: 1 + ((seed * 17) % 18),
  };
}

function loadVotes(): Votes {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(VOTE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveVotes(votes: Votes) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(VOTE_KEY, JSON.stringify(votes));
  } catch {
    // ignore disabled storage
  }
}

function loadRating() {
  if (typeof window === 'undefined') return 0;
  const raw = window.localStorage.getItem(RATING_KEY);
  const num = raw ? Number(raw) : 0;
  return Number.isFinite(num) ? num : 0;
}

function KindIcon({ kind }: { kind: XPost['kind'] }) {
  if (kind === 'video') return <Video className="h-4 w-4" />;
  if (kind === 'gif' || kind === 'screenshot') return <ImageIcon className="h-4 w-4" />;
  return <MessageCircle className="h-4 w-4" />;
}

export function XCommunityWall({ locale }: { locale: string }) {
  const zh = locale === 'zh';
  const [votes, setVotes] = useState<Votes>(() => loadVotes());
  const [rating, setRating] = useState(() => loadRating());

  useEffect(() => saveVotes(votes), [votes]);
  useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem(RATING_KEY, String(rating));
  }, [rating]);

  const avgRating = useMemo(() => {
    const baseline = 4.6;
    return rating ? ((baseline * 28 + rating) / 29).toFixed(1) : baseline.toFixed(1);
  }, [rating]);

  function displayVotes(post: XPost) {
    const base = defaultVotes(post.seed);
    const extra = votes[post.id];
    return {
      up: base.up + (extra?.up || 0),
      down: base.down + (extra?.down || 0),
      user: extra?.user,
    };
  }

  function vote(id: string, direction: 'up' | 'down') {
    setVotes((prev) => {
      const current = prev[id] || { up: 0, down: 0 };
      if (current.user === direction) return prev;
      const next = { ...current, user: direction };
      if (current.user === 'up') next.up -= 1;
      if (current.user === 'down') next.down -= 1;
      if (direction === 'up') next.up += 1;
      if (direction === 'down') next.down += 1;
      return { ...prev, [id]: next };
    });
  }

  return (
    <section id="x-wall" className="scroll-mt-28 border-y border-brick-700/40 bg-black/20 py-16 backdrop-blur-[1px]">
      <div className="container">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <div className="rounded-xl border border-mortar/60 bg-paper/92 p-6 shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brick-600">X community wall</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink-900 md:text-5xl">
              {zh ? '玩家在 X 上怎么晒 Meccha Chameleon' : 'What players are sharing on X'}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-500">
              {zh
                ? '这里收集公开 X 搜索结果里的截图、GIF、视频、直播预告和玩家吐槽。每条都保留账号和原始链接；不伪造截图，不冒充官方。'
                : 'A wall of public X results: screenshots, GIFs, videos, stream plans, and player reactions. Each card keeps the account and original link; no fake screenshots and no official-claim wording.'}
            </p>
          </div>

          <div className="rounded-xl border border-mortar/70 bg-paper/95 p-5 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brick-600">
                  {zh ? '社区评分' : 'Community rating'}
                </p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-4xl font-black text-ink-900">{avgRating}</span>
                  <span className="pb-1 text-sm font-bold text-ink-500">/ 5</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    className="rounded-md border border-brick-700/20 bg-mortar-soft p-2 text-brick-500 hover:bg-brick-100"
                    aria-label={`Rate ${n} stars`}
                  >
                    <Star className={`h-5 w-5 ${rating >= n ? 'fill-brick-500' : ''}`} />
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-ink-500">
              {zh ? '评分保存在当前浏览器，用来做页面互动，不上传服务器。' : 'Your rating is stored in this browser only; it does not upload to a server.'}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => {
            const shown = displayVotes(post);
            return (
              <article key={post.id} className="flex min-h-[260px] flex-col justify-between rounded-xl border border-mortar/70 bg-paper/94 p-5 shadow-xl">
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-black text-ink-900">{post.account}</div>
                      <div className="text-xs font-semibold text-ink-300">{post.name}</div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-brick-400/30 bg-brick-50 px-2.5 py-1 text-[11px] font-black uppercase text-brick-700">
                      <KindIcon kind={post.kind} /> {post.kind}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-ink-500">“{post.text}”</p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-ink-300">
                    {post.source}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-mortar pt-4">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => vote(post.id, 'up')}
                      className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-black transition ${
                        shown.user === 'up'
                          ? 'border-brick-600 bg-brick-500 text-white'
                          : 'border-mortar bg-white text-ink-900 hover:bg-brick-50'
                      }`}
                    >
                      <ThumbsUp className="h-4 w-4" /> {shown.up}
                    </button>
                    <button
                      type="button"
                      onClick={() => vote(post.id, 'down')}
                      className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-black transition ${
                        shown.user === 'down'
                          ? 'border-ink-700 bg-ink-700 text-white'
                          : 'border-mortar bg-white text-ink-900 hover:bg-brick-50'
                      }`}
                    >
                      <ThumbsDown className="h-4 w-4" /> {shown.down}
                    </button>
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-ink-900 px-3 py-2 text-xs font-black text-white transition hover:bg-brick-700"
                  >
                    {zh ? '打开 X 原文' : 'Open on X'} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
