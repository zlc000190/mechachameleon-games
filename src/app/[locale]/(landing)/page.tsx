import {
  BookOpen,
  Joystick,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Download,
  ExternalLink,
  AlertTriangle,
} from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';

import { AtlasPreview } from '@/shared/blocks/meccha/atlas-preview';
import { DemoFrame } from '@/shared/blocks/meccha/demo-frame';
import { HowToPlaySection } from '@/shared/blocks/meccha/how-to-play-section';

export const revalidate = 3600;

const modes = [
  ['Classic Play', 'Jump in, learn the hide-and-seek loop, and test whether the paint-and-hide rhythm clicks for you.'],
  ['Practice Route', 'Use the embedded play window with the map previews below to rehearse hiding routes before a real match.'],
  ['Speedrun Warmup', 'Start fast, pick a map, and focus on one clean hiding route instead of reading a full guide first.'],
  ['Party Queue', 'Send the page to friends, open a Custom Room, and keep the controls visible while everyone joins.'],
];

const controls = [
  ['Move', 'WASD / joystick'], ['Aim', 'Mouse / touch drag'], ['Paint', 'Hold main action'], ['Sample color', 'Eyedropper / right action'], ['Freeze', 'Pose lock'], ['Search', 'Flashlight scan'],
];

const zhModes = [
  ['经典试玩', '直接进入躲猫猫循环，先感受涂色、隐藏和搜寻的核心节奏。'],
  ['练习路线', '一边玩上方窗口，一边看下方地图预览，提前练习真实对局的隐藏路线。'],
  ['速通热身', '快速开始，选一张图，只练一条稳定隐藏路线，不先读长攻略。'],
  ['朋友组队', '把页面发给朋友，开自定义房间，大家加入时也能看到操作说明。'],
];

const zhControls = [
  ['移动', 'WASD / 摇杆'], ['瞄准', '鼠标 / 触控拖动'], ['涂装', '长按主要动作'], ['取色', '吸管 / 右键动作'], ['定格', '姿势锁定'], ['搜寻', '手电扫描'],
];

const faqs = [
  ['Is this the same site as mecchachameleon.art?', 'No. mechachameleon.games is the game-first entry: play window, controls, modes, and fast-start routes. mecchachameleon.art is the deeper guide and map atlas site.'],
  ['Can I play Mecha Chameleon online free?', 'Yes. Use the browser game window above for quick play without download, then use the controls and map routes to prepare for the full PC match.'],
  ['Why does the name appear as Mecha, Mech, and Meccha?', 'Players search all three spellings. The original game name is Meccha Chameleon; this .games site also targets Mecha Chameleon and Mech Chameleon game intent.'],
  ['Is this official?', 'No. This is an unofficial fan-made game hub and is not affiliated with LEMORION. It links to community play and guide resources.'],
];


const assistantFeatures = [
  ['Fully external ESP', 'Runs as a separate process: no DLL injection, no hooks, and no UE4SS dependency.'],
  ['Pattern scanning', 'Automatically locates GUObjectArray and walks the Unreal Engine object array for MECCHA CHAMELEON UE5.6.'],
  ['Box ESP overlay', 'Dynamic corner / 2D box ESP with distance scaling, snap lines, name labels, and distance labels.'],
  ['Transparent overlay', 'Renders over the game window while keeping the game in windowed or borderless mode.'],
];

const zhAssistantFeatures = [
  ['全外部 ESP', '独立进程运行：无 DLL 注入、无 hooks、无 UE4SS 依赖。'],
  ['Pattern scanning', '自动定位 GUObjectArray，并遍历 MECCHA CHAMELEON UE5.6 的 Unreal Engine 对象数组。'],
  ['方框透视叠加', '支持动态 corner / 2D box ESP、距离缩放、吸附线、名称和距离标签。'],
  ['透明覆盖层', '游戏以窗口或无边框模式运行时，在游戏窗口上方渲染叠加层。'],
];

const assistantLinks = {
  repo: 'https://github.com/anfalalsarraf-cmyk/meccha-chameleon-project',
  release: 'https://github.com/anfalalsarraf-cmyk/meccha-chameleon-project/releases/tag/mecha-esp',
  zip: 'https://pub-4f8b0335d26b4eee9268da23e6b5531c.r2.dev/mecchachameleon.games-ass/meccha-toolkit.zip',
  zipGithub: 'https://github.com/anfalalsarraf-cmyk/meccha-chameleon-project/releases/download/mecha-esp/meccha-toolkit.zip',
};

const zhFaqs = [
  ['这个站和 mecchachameleon.art 一样吗？', '不一样。mechachameleon.games 是纯游戏入口：在线玩、操作、模式和快速路线；mecchachameleon.art 更偏地图攻略和完整资料。'],
  ['可以免费在线玩 Mecha Chameleon 吗？', '可以。用上方浏览器窗口快速试玩，无需下载；之后再看操作说明和地图路线，为完整版 PC 对局做准备。'],
  ['为什么页面里有 Mecha、Mech、Meccha 几种写法？', '玩家会用多种拼法搜索。原游戏名是 Meccha Chameleon，中文可理解为「超级变色龙」；这个 .games 站同时覆盖 Mecha Chameleon 和 Mech Chameleon 的游戏搜索意图。'],
  ['这是官网吗？', '不是。本站是粉丝制作的游戏入口，不隶属于 LEMORION，也不代表官方合作关系。'],
];

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const activeModes = zh ? zhModes : modes;
  const activeControls = zh ? zhControls : controls;
  const activeFaqs = zh ? zhFaqs : faqs;
  const artUrl = 'https://mecchachameleon.art/maps';

  return (
    <main className="min-h-screen bg-[#fff7f1] text-[#29211D]">
      <section className="border-b border-[#f2cfd8] bg-gradient-to-br from-[#fff7c8] via-[#ffd2e1] to-[#cdefff]">
        <div className="container pb-8 pt-32 lg:pb-10 lg:pt-40">
          <div className="mb-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#29211D]/20 bg-white/70 px-3 py-1 text-sm font-semibold text-[#29211D]">
                {zh ? '免费浏览器游戏 · 无需下载' : 'Free browser game · no download'}
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-[#29211D] md:text-6xl">
                {zh ? 'Mecha Chameleon Game 免费在线玩' : 'Mecha Chameleon Game — Play Online Free'}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4C3B35]">
                {zh
                  ? '这是面向游戏搜索意图的 Mecha Chameleon / Meccha Chameleon 入口。打开页面就能开始，先玩，再看操作、模式和地图路线。'
                  : 'A game-first hub for Mecha Chameleon, Mech Chameleon, and Meccha Chameleon searches. Start the browser game first, then use controls, modes, and route ideas without leaving the page.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#play" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#ff6f9a] px-5 py-3 font-semibold text-white transition hover:bg-[#e95a88]"><PlayCircle className="h-5 w-5" />{zh ? '开始游戏' : 'Start playing'}</a>
              <a href="#controls" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#efc8d3] bg-white px-5 py-3 font-semibold text-[#29211D] transition hover:bg-[#fff7c8]"><Joystick className="h-5 w-5" />{zh ? '查看操作' : 'Controls'}</a>
            </div>
          </div>
          <div id="play"><DemoFrame locale={locale} /></div>
        </div>
      </section>

      <section id="controls" className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">{zh ? '快速操作' : 'Quick controls'}</p>
              <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">{zh ? '先会动，再开始藏。' : 'Move first, hide second.'}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4C3B35]">{zh ? '把操作放在游戏下方，用户不用跳到攻略站也能立刻开局。' : 'Keep the control sheet right under the game so players can start without opening a separate guide.'}</p>
            </div>
            <a href={artUrl} className="inline-flex min-h-10 w-fit items-center gap-2 rounded-md border border-[#D8CFC6] bg-[#F6F0EA] px-4 text-sm font-semibold text-[#29211D]"><BookOpen className="h-4 w-4" />{zh ? '需要完整地图？去 .art' : 'Need full maps? Visit .art'}</a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeControls.map(([name, value]) => (
              <div key={name} className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-5"><div className="text-sm font-semibold">{name}</div><div className="mt-2 text-xl font-bold text-[#7D6D69]">{value}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="modes" className="border-b border-[#D8CFC6] bg-[#F4DCD0]">
        <div className="container py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">{zh ? '游戏模式' : 'Game modes'}</p>
          <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">{zh ? '让 .games 成为真正的游戏入口。' : 'Make .games feel like the actual play entry.'}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {activeModes.map(([title, body], i) => (
              <div key={title} className="rounded-md bg-white p-5 shadow-sm"><div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ff8fb3] font-bold text-white">{i + 1}</div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#4C3B35]">{body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="assistant" className="border-b border-[#D8CFC6] bg-white">
        <div className="container grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">{zh ? '辅助工具' : 'Assistant tool'}</p>
            <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">
              {zh ? 'Meccha Chameleon External ESP Trainer' : 'Meccha Chameleon External ESP Trainer'}
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#4C3B35]">
              {zh
                ? '辅助区域现在使用 anfalalsarraf-cmyk/meccha-chameleon-project：一个面向 MECCHA CHAMELEON（Steam / UE5.6）的全外部 Box ESP 工具。优先从 Cloudflare R2 下载 meccha-toolkit.zip，并保留 GitHub release 链接作为备用。'
                : 'This assistant area uses anfalalsarraf-cmyk/meccha-chameleon-project: a fully external Box ESP trainer for MECCHA CHAMELEON (Steam / UE5.6). meccha-toolkit.zip is the primary download, mirrored on Cloudflare R2; the GitHub release is kept as a backup source.'}
            </p>
            <div className="mt-5 rounded-md border border-amber-300 bg-amber-50 p-4 text-xs leading-5 text-amber-950">
              <AlertTriangle className="mr-2 inline h-4 w-4" />
              {zh
                ? 'Educational and research purposes only. Use at your own risk. 第三方工具可能违反游戏条款、触发反作弊或导致封号。本站不托管该项目文件，也不承担使用后果。'
                : 'Educational and research purposes only. Use at your own risk. Third-party tools can violate game terms, trigger anti-cheat, or cause account bans. This site does not host the project files or accept liability for use.'}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={assistantLinks.zip} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#ff6f9a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e95a88]"><Download className="h-4 w-4" />{zh ? '下载 meccha-toolkit.zip' : 'Download meccha-toolkit.zip'}</a>
              <a href={assistantLinks.zipGithub} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#29211D] bg-white px-5 py-3 text-sm font-semibold text-[#29211D] transition hover:bg-[#fff7c8]"><Download className="h-4 w-4" />{zh ? 'GitHub zip 备用' : 'GitHub zip backup'}</a>
              <a href={assistantLinks.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#D8CFC6] bg-[#F6F0EA] px-5 py-3 text-sm font-semibold text-[#29211D] transition hover:bg-white"><ExternalLink className="h-4 w-4" />GitHub</a>
              <a href={assistantLinks.release} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#D8CFC6] bg-[#F6F0EA] px-5 py-3 text-sm font-semibold text-[#29211D] transition hover:bg-white"><ExternalLink className="h-4 w-4" />{zh ? '发布页' : 'Release'}</a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {(zh ? zhAssistantFeatures : assistantFeatures).map(([title, body]) => (
              <div key={title} className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-5">
                <ShieldCheck className="mb-3 h-5 w-5 text-[#ff6f9a]" />
                <div className="text-sm font-semibold">{title}</div>
                <p className="mt-2 text-sm leading-6 text-[#4C3B35]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
        <div className="container py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">{zh ? '快速路线' : 'Fast routes'}</p>
            <h2 className="mt-1 text-3xl font-bold tracking-normal md:text-4xl">{zh ? '不用读完整攻略，也能先选一张图。' : 'Pick a map route without reading a full guide.'}</h2>
            <p className="mt-4 text-sm leading-6 text-[#4C3B35]">{zh ? '这里保留少量地图预览服务游戏体验；完整 50 个隐藏点图鉴放在 mecchachameleon.art。' : 'This page keeps a light route preview for gameplay. The full 50-spot atlas lives on mecchachameleon.art.'}</p>
          </div>
          <AtlasPreview locale={locale} />
        </div>
      </section>

      <HowToPlaySection locale={locale} />

      <section className="bg-[#F6F0EA]">
        <div className="container py-14">
          <h2 className="mb-8 text-3xl font-bold tracking-normal md:text-4xl">{zh ? '常见问题' : 'Game-first FAQ'}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {activeFaqs.map(([q, a]) => <div key={q} className="rounded-md border border-[#D8CFC6] bg-white p-5"><ShieldCheck className="mb-3 h-5 w-5 text-[#7D6D69]" /><h3 className="font-semibold">{q}</h3><p className="mt-2 text-sm leading-6 text-[#4C3B35]">{a}</p></div>)}
          </div>
          <p className="mt-8 rounded-md border border-[#D8CFC6] bg-white p-4 text-xs leading-5 text-[#4C3B35]"><Sparkles className="mr-2 inline h-4 w-4 text-[#ff6f9a]" />{zh ? '免责声明：本站为粉丝制作的非官方网站，不隶属于 LEMORION，也不代表任何官方合作。' : 'Disclaimer: this is an unofficial fan-made game hub. It is not affiliated with LEMORION and does not claim any official partnership.'}</p>
        </div>
      </section>
    </main>
  );
}
