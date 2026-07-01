import {
  BookOpen,
  Download,
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
  homeProblemCards,
  toolsRadarCards,
} from '@/shared/blocks/meccha/problem-guides';
import { XCommunityWall } from '@/shared/blocks/meccha/x-community-wall';
import { PlayKitCheckoutButton } from '@/shared/blocks/meccha/play-kit-checkout-button';

export const revalidate = 3600;

function localHref(locale: string, href: string) {
  if (href.startsWith('http') || href.startsWith('#')) return href;
  if (locale === 'en') return href;
  return `/${locale}${href}`;
}

const modes = [
  [
    'Classic Play',
    'Jump in, learn the hide-and-seek loop, and test whether the paint-and-hide rhythm clicks for you.',
  ],
  [
    'Practice Route',
    'Use the embedded play window with the map previews below to rehearse hiding routes before a real match.',
  ],
  [
    'Speedrun Warmup',
    'Start fast, pick a map, and focus on one clean hiding route instead of reading a full guide first.',
  ],
  [
    'Party Queue',
    'Send the page to friends, open a Custom Room, and keep the controls visible while everyone joins.',
  ],
];

const controls = [
  ['Move', 'WASD / joystick'],
  ['Aim', 'Mouse / touch drag'],
  ['Paint', 'Hold main action'],
  ['Sample color', 'Eyedropper / right action'],
  ['Freeze', 'Pose lock'],
  ['Search', 'Flashlight scan'],
];

const zhModes = [
  ['经典试玩', '直接进入躲猫猫循环，先感受涂色、隐藏和搜寻的核心节奏。'],
  [
    '练习路线',
    '一边玩上方窗口，一边看下方地图预览，提前练习真实对局的隐藏路线。',
  ],
  ['速通热身', '快速开始，选一张图，只练一条稳定隐藏路线，不先读长攻略。'],
  ['朋友组队', '把页面发给朋友，开自定义房间，大家加入时也能看到操作说明。'],
];

const zhControls = [
  ['移动', 'WASD / 摇杆'],
  ['瞄准', '鼠标 / 触控拖动'],
  ['涂装', '长按主要动作'],
  ['取色', '吸管 / 右键动作'],
  ['定格', '姿势锁定'],
  ['搜寻', '手电扫描'],
];

const viModes = [
  [
    'Chơi nhanh',
    'Vào game ngay, làm quen vòng lặp trốn tìm, sơn màu và đứng yên đúng lúc.',
  ],
  [
    'Luyện đường trốn',
    'Vừa chơi trong khung trình duyệt, vừa xem bản đồ bên dưới để tập vị trí trước khi vào trận thật.',
  ],
  [
    'Khởi động tăng tốc',
    'Bắt đầu nhanh, chọn một map và tập một đường trốn ổn định thay vì đọc hướng dẫn dài.',
  ],
  [
    'Phòng cùng bạn bè',
    'Gửi trang này cho bạn, mở Custom Room và giữ phím điều khiển ngay trước mắt khi mọi người vào phòng.',
  ],
];

const viControls = [
  ['Di chuyển', 'WASD / joystick'],
  ['Ngắm', 'Chuột / kéo cảm ứng'],
  ['Sơn màu', 'Giữ nút hành động chính'],
  ['Lấy mẫu màu', 'Eyedropper / thao tác phải'],
  ['Đứng yên', 'Khóa tư thế'],
  ['Tìm kiếm', 'Quét đèn pin'],
];

const faqs = [
  [
    'Is this the same site as mecchachameleon.art?',
    'No. mechachameleon.games is the game-first entry: play window, controls, modes, and fast-start routes. mecchachameleon.art is the deeper guide and map atlas site.',
  ],
  [
    'Can I play Mecha Chameleon online free?',
    'Yes. Use the browser game window above for quick play without download, then use the controls and map routes to prepare for the full PC match.',
  ],
  [
    'Why does the name appear as Mecha, Mech, and Meccha?',
    'Players search all three spellings. The original game name is Meccha Chameleon; this .games site also targets Mecha Chameleon and Mech Chameleon game intent.',
  ],
  [
    'Is this official?',
    'No. This is an unofficial fan-made game hub and is not affiliated with LEMORION. It links to community play and guide resources.',
  ],
];

const zhFaqs = [
  [
    '这个站和 mecchachameleon.art 一样吗？',
    '不一样。mechachameleon.games 是纯游戏入口：在线玩、操作、模式和快速路线；mecchachameleon.art 更偏地图攻略和完整资料。',
  ],
  [
    '可以免费在线玩 Mecha Chameleon 吗？',
    '可以。用上方浏览器窗口快速试玩，无需下载；之后再看操作说明和地图路线，为完整版 PC 对局做准备。',
  ],
  [
    '为什么页面里有 Mecha、Mech、Meccha 几种写法？',
    '玩家会用多种拼法搜索。原游戏名是 Meccha Chameleon，中文可理解为「超级变色龙」；这个 .games 站同时覆盖 Mecha Chameleon 和 Mech Chameleon 的游戏搜索意图。',
  ],
  [
    '这是官网吗？',
    '不是。本站是粉丝制作的游戏入口，不隶属于 LEMORION，也不代表官方合作关系。',
  ],
];

const viFaqs = [
  [
    'Trang này có giống mecchachameleon.art không?',
    'Không. mechachameleon.games là trang vào chơi trước: khung chơi, phím điều khiển, chế độ và đường trốn nhanh. mecchachameleon.art là nơi xem hướng dẫn sâu và atlas bản đồ.',
  ],
  [
    'Có thể chơi Mecha Chameleon online miễn phí không?',
    'Có. Dùng khung game trên trình duyệt để chơi nhanh, không cần tải; sau đó xem phím điều khiển và đường map để chuẩn bị cho trận PC.',
  ],
  [
    'Vì sao có Mecha, Mech và Meccha?',
    'Người chơi tìm cả ba cách viết. Tên gốc là Meccha Chameleon; trang .games cũng phục vụ nhu cầu tìm Mecha Chameleon và Mech Chameleon game.',
  ],
  [
    'Đây có phải trang chính thức không?',
    'Không. Đây là hub do fan làm, không thuộc LEMORION và không đại diện cho hợp tác chính thức.',
  ],
];

const viHomeProblemCards = homeProblemCards.map((card) => {
  const copy: Record<string, { title: string; body: string }> = {
    'Play online': {
      title: 'Chơi online',
      body: 'Giữ game trình duyệt là hành động đầu tiên. Vào chơi trước, đọc hướng dẫn sau.',
    },
    'Can’t join?': {
      title: 'Không vào được phòng?',
      body: 'Kẹt signing in, lỗi vào lobby, mất kết nối phòng, kiểm tra DNS/VPN/IPv6.',
    },
    'Playing with friends?': {
      title: 'Chơi cùng bạn bè?',
      body: 'Phòng riêng, mã phòng, server tag, cài voice và chuẩn bị workshop map.',
    },
    'Low FPS?': {
      title: 'FPS thấp?',
      body: 'Thiết lập hiệu năng an toàn, sửa giật lag, mẹo OBS và cảnh báo booster rủi ro.',
    },
    'Bad at painting?': {
      title: 'Sơn màu chưa khớp?',
      body: 'Bù màu eyedropper, giới hạn brush, bóng đổ, highlight và kỷ luật tư thế.',
    },
    'Get Play Kit': {
      title: 'Nhận Play Kit',
      body: 'Bộ gọn một lần mua cho người muốn vào trận nhanh hơn, sửa lobby mượt hơn, và có sẵn route card trước khi bắt đầu.',
    },
    'Public lobby problems?': {
      title: 'Lobby công khai rắc rối?',
      body: 'Bị kick, bắn bừa, spectator báo vị trí, cheat và quy tắc phòng riêng.',
    },
    'Need maps?': {
      title: 'Cần bản đồ?',
      body: 'Atlas điểm trốn đầy đủ và 50 ảnh map nằm trên mecchachameleon.art.',
    },
  };
  return { ...card, ...(copy[card.title] ?? {}) };
});

const viToolsRadarCards = toolsRadarCards.map((card) => {
  const copy: Record<string, { title: string; risk: string; body: string }> = {
    '10-min start': {
      title: 'Bắt đầu 10 phút',
      risk: 'Chơi nhanh hơn',
      body: 'Điều khiển, vòng lặp sơn màu, hider/seeker basics và lỗi vòng đầu trong một checklist.',
    },
    'Lobby fix': {
      title: 'Sửa lobby',
      risk: 'Ít chờ hơn',
      body: 'Private room, server tag, room code và kiểm tra workshop map trước khi bạn bè vào.',
    },
    'FPS boost': {
      title: 'Tăng FPS',
      risk: 'Mượt hơn',
      body: 'Thiết lập có thể hoàn tác cho máy yếu, stream, record và frame pacing ổn định.',
    },
    'Camo practice': {
      title: 'Luyện camo',
      risk: 'Trốn tốt hơn',
      body: 'Bài luyện khớp màu, chỉnh bóng và chuẩn bị route card trước khi vào round.',
    },
  };
  return { ...card, ...(copy[card.title] ?? {}) };
});

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const vi = locale === 'vi';
  const activeModes = vi ? viModes : zh ? zhModes : modes;
  const activeControls = vi ? viControls : zh ? zhControls : controls;
  const activeFaqs = vi ? viFaqs : zh ? zhFaqs : faqs;
  const activeProblemCards = vi ? viHomeProblemCards : homeProblemCards;
  const activeToolsRadarCards = vi ? viToolsRadarCards : toolsRadarCards;
  const artUrl = 'https://mecchachameleon.art/maps';

  return (
    <main className="brick-wall text-ink-900 min-h-screen">
      <section className="border-mortar/60 border-b bg-black/10">
        <div className="container pt-32 pb-8 lg:pt-40 lg:pb-10">
          <div className="mb-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="border-mortar/60 bg-paper/92 rounded-xl border p-6 shadow-xl">
              <p className="border-ink-900/20 text-ink-900 mb-3 inline-flex rounded-full border bg-white/70 px-3 py-1 text-sm font-semibold">
                {vi
                  ? 'Game trình duyệt miễn phí · không cần tải'
                  : zh
                    ? '免费浏览器游戏 · 无需下载'
                    : 'Free browser game · no download'}
              </p>
              <h1 className="text-ink-900 max-w-4xl text-4xl leading-tight font-bold tracking-normal md:text-6xl">
                {vi
                  ? 'Mecha Chameleon Game - chơi online miễn phí'
                  : zh
                    ? 'Mecha Chameleon Game 免费在线玩'
                    : 'Meccha Chameleon Game — Play Mecha Chameleon Free'}
              </h1>
              <p className="text-ink-500 mt-5 max-w-2xl text-base leading-7">
                {vi
                  ? 'Trang vào chơi cho người tìm Mecha Chameleon, Mech Chameleon và Meccha Chameleon tại Việt Nam. Mở là chơi ngay trên trình duyệt, không cần tải; xem nhanh phím điều khiển, cách chơi cùng bạn bè, sửa lỗi kết nối và tăng FPS.'
                  : zh
                    ? '这是面向游戏搜索意图的 Mecha Chameleon / Meccha Chameleon 入口。打开页面就能开始，先玩，再看操作、模式和地图路线。'
                    : 'A game-first hub for Mecha Chameleon, Mech Chameleon, and Meccha Chameleon searches. Start the browser game first, then use controls, modes, and route ideas without leaving the page.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#play"
                className="bg-brick-500 hover:bg-brick-700 inline-flex min-h-11 items-center gap-2 rounded-md px-5 py-3 font-semibold text-white transition"
              >
                <PlayCircle className="h-5 w-5" />
                {vi ? 'Chơi ngay' : zh ? '开始游戏' : 'Start playing'}
              </a>
              <a
                href="#controls"
                className="border-mortar bg-paper text-ink-900 hover:bg-brick-50 inline-flex min-h-11 items-center gap-2 rounded-md border px-5 py-3 font-semibold transition"
              >
                <Joystick className="h-5 w-5" />
                {vi ? 'Phím điều khiển' : zh ? '查看操作' : 'Controls'}
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
              {vi
                ? 'Trung tâm vào game'
                : zh
                  ? '实用开局中心'
                  : 'Player problem solver'}
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
              {vi
                ? 'Chơi được không, bắt đầu thế nào, vì sao lag và sơn sao cho giống?'
                : zh
                  ? '能不能玩、怎么玩、怎么不卡、怎么涂得像。'
                  : 'Can I play, how do I start, why is it laggy, and how do I paint better?'}
            </h2>
            <p className="text-ink-500 mt-3 text-sm leading-6">
              {vi
                ? 'Màn đầu vẫn để người chơi vào game ngay. Phần dưới biến các vấn đề hay gặp thành hướng dẫn thực dụng: lỗi kết nối, chơi cùng bạn bè, tăng FPS, phối màu và lobby công khai. Atlas bản đồ sâu vẫn ở mecchachameleon.art.'
                : zh
                  ? '首屏仍然让玩家直接开玩；下面把 Steam 评论里最常见的问题变成一页一页的解决方案。地图深度图鉴继续去 mecchachameleon.art。'
                  : 'The first screen still lets players play immediately. Below are the common Steam-review pain points turned into practical guides. Deep map atlases stay on mecchachameleon.art.'}
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
                {vi ? 'Điều khiển nhanh' : zh ? '快速操作' : 'Quick controls'}
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
                {vi
                  ? 'Biết di chuyển trước, rồi hãy trốn.'
                  : zh
                    ? '先会动，再开始藏。'
                    : 'Move first, hide second.'}
              </h2>
              <p className="text-ink-500 mt-3 max-w-2xl text-sm leading-6">
                {vi
                  ? 'Đặt phím điều khiển ngay dưới game để người chơi Việt có thể vào trận mà không cần mở trang hướng dẫn khác.'
                  : zh
                    ? '把操作放在游戏下方，用户不用跳到攻略站也能立刻开局。'
                    : 'Keep the control sheet right under the game so players can start without opening a separate guide.'}
              </p>
            </div>
            <a
              href={artUrl}
              className="border-mortar/70 bg-paper/88 text-ink-900 inline-flex min-h-10 w-fit items-center gap-2 rounded-md border px-4 text-sm font-semibold"
            >
              <BookOpen className="h-4 w-4" />
              {vi
                ? 'Cần đủ bản đồ? Xem .art'
                : zh
                  ? '需要完整地图？去 .art'
                  : 'Need full maps? Visit .art'}
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
            {vi ? 'Chế độ chơi' : zh ? '游戏模式' : 'Game modes'}
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
            {vi
              ? 'Để .games thật sự là nơi vào chơi.'
              : zh
                ? '让 .games 成为真正的游戏入口。'
                : 'Make .games feel like the actual play entry.'}
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
              {vi ? 'Play Kit cho người chơi' : zh ? '玩家 Play Kit' : 'Play Kit for players'}
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
              {vi
                ? 'Vào trận nhanh hơn, trốn tốt hơn, chơi cùng bạn bè mượt hơn.'
                : zh
                  ? '更快开局、更稳隐藏、更顺畅联机。'
                  : 'Start faster, hide better, and keep friend rooms moving.'}
            </h2>
            <p className="text-ink-500 mt-4 text-sm leading-6">
              {vi
                ? 'Giữ checklist vào nhanh, sửa lobby, FPS settings, luyện camo và route card trong một gói gọn để trước khi chơi chỉ cần mở lên là dùng.'
                : zh
                  ? '把开局清单、联机修复、FPS 设置、伪装练习和路线卡放在一个包里，减少找资料的时间。'
                  : 'Keep the useful parts together: fast-start checklist, lobby fixes, FPS settings, camo practice, and route cards.'}
            </p>
            <div className="mt-5 rounded-md border border-brick-200 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brick-600">
                {vi ? 'Giá một lần' : zh ? '一次性价格' : 'One-time price'}
              </div>
              <div className="mt-1 flex items-end gap-3">
                <span className="text-4xl font-bold text-ink-900">$7</span>
                <span className="pb-1 text-sm text-ink-500">
                  {vi ? 'mua một lần' : zh ? '一次性' : 'one-time'}
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="w-full sm:w-auto">
                <PlayKitCheckoutButton
                  label={
                    vi
                      ? 'Nhận Play Kit - $7'
                      : zh
                        ? '获取 Play Kit - $7'
                        : 'Get Play Kit - $7'
                  }
                  priceLabel="$7"
                />
              </div>
              <a
                href={localHref(locale, '/tools')}
                className="border-ink-900 text-ink-900 hover:bg-brick-50 inline-flex min-h-11 items-center gap-2 rounded-md border bg-white px-5 py-3 text-sm font-semibold transition"
              >
                <ShieldCheck className="h-4 w-4" />
                {vi
                  ? 'Xem bên trong có gì'
                  : zh
                    ? '看看里面有什么'
                    : 'See what is inside'}
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
              {vi ? 'Đường trốn nhanh' : zh ? '快速路线' : 'Fast routes'}
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
              {vi
                ? 'Chọn một map trước, không cần đọc toàn bộ hướng dẫn.'
                : zh
                  ? '不用读完整攻略，也能先选一张图。'
                  : 'Pick a map route without reading a full guide.'}
            </h2>
            <p className="text-ink-500 mt-4 text-sm leading-6">
              {vi
                ? 'Trang này giữ phần xem nhanh bản đồ để phục vụ trải nghiệm chơi. Atlas đầy đủ 50 điểm trốn nằm trên mecchachameleon.art.'
                : zh
                  ? '这里保留少量地图预览服务游戏体验；完整 50 个隐藏点图鉴放在 mecchachameleon.art。'
                  : 'This page keeps a light route preview for gameplay. The full 50-spot atlas lives on mecchachameleon.art.'}
            </p>
          </div>
          <AtlasPreview locale={locale} />
        </div>
      </section>

      <XCommunityWall locale={locale} />

      <section className="border-mortar/50 bg-paper/92 border-t">
        <div className="container py-14">
          <h2 className="mb-8 text-3xl font-bold tracking-normal md:text-4xl">
            {vi ? 'Câu hỏi thường gặp' : zh ? '常见问题' : 'Game-first FAQ'}
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
            {vi
              ? 'Tuyên bố miễn trừ: đây là hub game do fan làm, không thuộc LEMORION và không tuyên bố hợp tác chính thức.'
              : zh
                ? '免责声明：本站为粉丝制作的非官方网站，不隶属于 LEMORION，也不代表任何官方合作。'
                : 'Disclaimer: this is an unofficial fan-made game hub. It is not affiliated with LEMORION and does not claim any official partnership.'}
          </p>
        </div>
      </section>
    </main>
  );
}
