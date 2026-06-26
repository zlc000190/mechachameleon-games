import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  Brush,
  CheckCircle2,
  Download,
  Eye,
  Gamepad2,
  Gauge,
  Globe2,
  Palette,
  ShieldAlert,
  UsersRound,
  WifiOff,
  Wrench,
} from 'lucide-react';

export type GuideLink = {
  label: string;
  href: string;
};

export type GuideSection = {
  title: string;
  body: string;
  bullets: string[];
};

export type GuidePage = {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  zhTitle: string;
  description: string;
  zhDescription: string;
  primaryCta: GuideLink;
  secondaryCta?: GuideLink;
  quickAnswers: Array<[string, string]>;
  sections: GuideSection[];
  warnings?: string[];
  related: GuideLink[];
};

export const problemGuides: Record<string, GuidePage> = {
  'connection-fix': {
    slug: 'connection-fix',
    icon: WifiOff,
    eyebrow: 'Connection fix',
    title: 'Meccha Chameleon Connection Fix — Signing In, Lobby, Room Join, Disconnects',
    zhTitle: '超级变色龙进不去房间 / Signing in 卡住 / 掉线解决办法',
    description:
      'Fix Meccha Chameleon online problems: signing in stuck, cannot join room, kicked back to menu, private lobby disconnects, server region, relay, VPN, DNS, IPv6, firewall, and Steam file checks.',
    zhDescription:
      '解决超级变色龙常见在线问题：Signing in 卡住、进不去房、掉线、被踢回主菜单、私房进不去、服务器地区、VPN、DNS、IPv6、防火墙和 Steam 文件验证。',
    primaryCta: { label: 'Start with quick checks', href: '#quick-checks' },
    secondaryCta: { label: 'Play browser version', href: '/#play' },
    quickAnswers: [
      ['Signing in stuck', 'Restart Steam first, then the game; if it persists, test without VPN, flush DNS, and check whether Steam community reports a regional outage.'],
      ['Cannot join room', 'Prefer a fresh lobby that has not started. If the lobby uses a workshop map, subscribe/download before joining.'],
      ['Private room fails', 'Use the same server tag/region, have the host recreate the room, and avoid VPN exits that route friends to another relay.'],
      ['Disconnect after start', 'This is often server load or host instability. Lower background downloads, switch relay region, and verify files if it repeats only for you.'],
    ],
    sections: [
      {
        title: 'Quick checks before blaming your PC',
        body: 'Most Steam reviews complaining about online play describe the same flow: signing in hangs, lobby join returns to menu, or the match starts and someone drops. Start with the lowest-risk checks.',
        bullets: [
          'Restart Steam completely, not only the game window.',
          'Disable VPN / proxy for one test; if your group is cross-region, pick the region closest to the group midpoint.',
          'Pause downloads, cloud sync, and screen-share uploads before joining a lobby.',
          'Verify game files in Steam if only your client gets kicked while friends stay connected.',
        ],
      },
      {
        title: 'Lobby and room join checklist',
        body: 'The game lobby UI is rough, so the safest route is to reduce unknowns: fresh room, known region, known map, and one host who stays still until everyone joins.',
        bullets: [
          'Join rooms marked waiting / not started whenever possible.',
          'Avoid workshop-map lobbies unless you already have the map downloaded.',
          'If a room never loads, back out once; repeated joins usually keep failing until the host recreates it.',
          'For friends, one person hosts a new private room and sends the exact server tag / room code immediately.',
        ],
      },
      {
        title: 'Network fixes that are worth trying',
        body: 'Do not install random “online fix” EXEs. Use system-level checks you can undo.',
        bullets: [
          'Windows: run a DNS flush, then restart Steam: ipconfig /flushdns.',
          'Try a different DNS resolver such as Cloudflare or Google if signing in only fails on one ISP.',
          'If IPv6 is broken on your router, temporarily test with IPv6 disabled; if IPv6 is required by your ISP, reverse the change.',
          'Allow the game through Windows Firewall only from the official Steam install path.',
        ],
      },
    ],
    warnings: [
      'Do not download “connection fix” cracks, DLLs, or admin EXEs from comment sections.',
      'A lobby failing for everyone is usually server-side; reinstalling repeatedly will not fix a global outage.',
    ],
    related: [
      { label: 'Play with friends guide', href: '/play-with-friends' },
      { label: 'FPS boost guide', href: '/fps-boost' },
      { label: 'Public lobby survival', href: '/public-lobby-guide' },
    ],
  },
  'play-with-friends': {
    slug: 'play-with-friends',
    icon: UsersRound,
    eyebrow: 'Party start',
    title: 'How to Play Meccha Chameleon With Friends — Lobby, Room Codes, Server Tags',
    zhTitle: '如何和朋友一起玩超级变色龙 — 房间、房间码、服务器标签指南',
    description:
      'Set up Meccha Chameleon with friends: private rooms, lobby filters, room codes, server tags, public vs private rooms, voice chat, workshop maps, and what to do when friends cannot join.',
    zhDescription:
      '教你和朋友一起玩超级变色龙：私房、房间筛选、房间码、服务器标签、公房/私房区别、语音设置、创意工坊地图和朋友进不来时的处理办法。',
    primaryCta: { label: 'Use friend checklist', href: '#friend-checklist' },
    secondaryCta: { label: 'Fix join errors', href: '/connection-fix' },
    quickAnswers: [
      ['Best setup', 'Private room, same server tag, one host, no workshop map for the first test.'],
      ['Public or private?', 'Use private rooms for friends. Public rooms are fun but suffer from kicks, spectators, random shooting, and mixed language voice chat.'],
      ['Voice chat', 'Use push-to-talk or Discord. Keep in-game mic muted if public players are leaking spectator calls.'],
      ['Workshop maps', 'Subscribe before the session; missing map assets can turn the lobby into a black-screen or failed-load round.'],
    ],
    sections: [
      {
        title: 'Friend-room setup that avoids most failures',
        body: 'Steam reviews repeatedly complain that friends cannot land in the same match. The fix is not magic: keep the first room simple, then add maps and rules after the group proves it can connect.',
        bullets: [
          'Host creates a private Custom Room and waits in lobby until everyone joins.',
          'All players use the same region / server tag. Do not mix VPN and non-VPN routing.',
          'Start with an official map. Add workshop maps after the first successful round.',
          'If two friends fail, recreate the room instead of retrying the same broken lobby.',
        ],
      },
      {
        title: 'Lobby UI shortcuts',
        body: 'The in-game lobby search is one of the most criticized parts of the game. Use filters like a checklist instead of scrolling randomly.',
        bullets: [
          'Look for not-started rooms first; joining ongoing games wastes time.',
          'Avoid full rooms and rooms with unknown custom map tags when helping a new player.',
          'If the lobby list does not refresh, return to main menu and reopen multiplayer once.',
          'Have the host announce map, player count, and voice rules before launch.',
        ],
      },
      {
        title: 'Voice, language, and cross-region etiquette',
        body: 'Voice chat can make private rooms better and public rooms worse. Treat it as a tool, not a requirement.',
        bullets: [
          'Use push-to-talk to avoid open-mic noise and accidental spectator calls.',
          'For mixed-language groups, agree on simple pings: left/right/top/bottom or color words.',
          'Mute toxic players quickly; do not spend a round arguing with public voice chat.',
          'Streamers should hide room codes and mute spectator voice before opening the lobby list.',
        ],
      },
    ],
    related: [
      { label: 'Connection fix', href: '/connection-fix' },
      { label: 'Public lobby guide', href: '/public-lobby-guide' },
      { label: 'Color matching guide', href: '/color-matching' },
    ],
  },
  'fps-boost': {
    slug: 'fps-boost',
    icon: Gauge,
    eyebrow: 'Performance',
    title: 'Meccha Chameleon FPS Boost & Stutter Fix — Low-End PC Settings',
    zhTitle: '超级变色龙 FPS 提升与卡顿修复 — 低配电脑设置指南',
    description:
      'Improve Meccha Chameleon FPS and reduce stutter safely: graphics settings, windowed/borderless mode, Steam launch options, Windows Game Mode, GPU drivers, OBS settings, and risky FPS booster warnings.',
    zhDescription:
      '安全提升超级变色龙 FPS、减少卡顿：画质设置、窗口/无边框、Steam 启动参数、Windows 游戏模式、显卡驱动、OBS 录制设置，以及危险 FPS booster 提醒。',
    primaryCta: { label: 'Open safe settings', href: '#safe-settings' },
    secondaryCta: { label: 'Tool safety radar', href: '/tools' },
    quickAnswers: [
      ['Windowed or borderless?', 'Borderless is usually smoother for overlays and stream capture; use exclusive fullscreen only if input latency is your biggest issue.'],
      ['Stutter while painting', 'Lower shadows/effects first, then cap FPS to a stable value rather than chasing a higher unstable number.'],
      ['OBS recording', 'Use game capture, hardware encoder, and 1080p60 only if your GPU has headroom. Otherwise record 720p60.'],
      ['FPS booster EXE?', 'Avoid unknown admin EXEs. Prefer reversible Windows, Steam, and driver settings.'],
    ],
    sections: [
      {
        title: 'Safe settings that help first',
        body: 'Steam reviews mention stutter even when the average FPS looks fine. The goal is stable frame pacing, not only a high counter.',
        bullets: [
          'Lower shadows, reflections, post-processing, and effects before texture quality.',
          'Use borderless windowed if you alt-tab, stream, or use overlays.',
          'Cap FPS to 60 or 90 if uncapped FPS produces spikes.',
          'Close browser tabs, launchers, downloads, and recording tools during the first test.',
        ],
      },
      {
        title: 'Windows, Steam, and GPU checklist',
        body: 'These changes are reversible and do not modify the game files.',
        bullets: [
          'Update GPU drivers from NVIDIA / AMD / Intel, not from random driver bundles.',
          'Enable Windows Game Mode, but disable Xbox Game Bar capture if it causes stutter.',
          'Set the game to High Performance GPU in Windows Graphics settings on laptops.',
          'Verify game files in Steam after crashes during eyedropper or map loading.',
        ],
      },
      {
        title: 'What not to download',
        body: 'The GitHub topic has FPS optimizer and trainer projects. Some may be harmless, but players should understand the risk before running anything as Administrator.',
        bullets: [
          'Avoid password-protected .rar / .7z files claiming “undetected FPS boost”.',
          'Do not run admin EXEs unless you trust the source and understand what they change.',
          'Prefer tools that publish source code, changelog, and reversible settings.',
          'If a tool mixes FPS boost with ESP / aimbot, treat it as a high-risk game-memory tool.',
        ],
      },
    ],
    warnings: ['Performance tools can trigger anti-cheat or malware alerts. This site explains risk; it cannot guarantee third-party software safety.'],
    related: [
      { label: 'Tools radar', href: '/tools' },
      { label: 'Connection fix', href: '/connection-fix' },
      { label: 'Color matching guide', href: '/color-matching' },
    ],
  },
  'color-matching': {
    slug: 'color-matching',
    icon: Palette,
    eyebrow: 'Paint help',
    title: 'Meccha Chameleon Color Matching Guide — Paint, Eyedropper, Shadows, Brush Tips',
    zhTitle: '超级变色龙取色与涂色指南 — 画笔、吸管、阴影和伪装技巧',
    description:
      'Improve Meccha Chameleon painting: eyedropper compensation, color mismatch, shadows, highlights, brush resolution limits, pose discipline, map color references, and camo lab practice.',
    zhDescription:
      '提升超级变色龙涂色能力：吸管取色补偿、颜色偏差、阴影高光、画笔分辨率限制、姿势控制、地图颜色参考和网页伪装训练。',
    primaryCta: { label: 'Practice in Camo Lab', href: '/camo-lab' },
    secondaryCta: { label: 'Open map atlas', href: 'https://mecchachameleon.art/maps' },
    quickAnswers: [
      ['Eyedropper looks wrong', 'Sample three nearby pixels and average mentally; single-pixel samples often catch shadow or highlight instead of the true surface color.'],
      ['Paint too dark', 'You probably sampled a shadow. Add a warmer/lighter secondary color and face your best-painted side toward the seeker path.'],
      ['Brush too pixelated', 'Use broad color blocks plus texture hints. Do not try to draw perfect straight lines on the model.'],
      ['Best hiding surfaces', 'Patterned wallpaper, brick, tile, rugs, and object clusters hide imperfect brush edges better than plain walls.'],
    ],
    sections: [
      {
        title: 'Why your paint does not match',
        body: 'Players love the paint idea but complain that the eyedropper and brush resolution make exact matching hard. Treat the paint tool like camouflage, not illustration.',
        bullets: [
          'Sample from the exact camera angle where seekers will stand.',
          'Take one base color, one shadow color, and one highlight color from the same surface.',
          'Avoid glossy/metallic objects until you understand roughness and lighting.',
          'Do not move after lock-in; motion ruins even a good color match.',
        ],
      },
      {
        title: 'Brush and pose rules',
        body: 'The model and brush resolution limit fine detail. Large readable camouflage beats tiny precise drawings.',
        bullets: [
          'Use large base patches first, then smaller strokes only on visible edges.',
          'Match silhouette before decoration: crouch, rotate, and flatten against the surface.',
          'Put high-contrast details on the side facing away from common seeker paths.',
          'If the surface is noisy, copy the rhythm of the pattern rather than exact pixels.',
        ],
      },
      {
        title: 'Map color quick references',
        body: 'Use .games for technique and .art for deep map-specific color references.',
        bullets: [
          'For full 50-spot atlas and screenshots, open mecchachameleon.art/maps.',
          'For practice, use Camo Lab to compare sampled colors and shadow-adjusted variants.',
          'For public lobbies, pick simpler surfaces; rushed painting loses more rounds than imperfect spots.',
        ],
      },
    ],
    related: [
      { label: 'Camo Lab', href: '/camo-lab' },
      { label: 'Map atlas on .art', href: 'https://mecchachameleon.art/maps' },
      { label: 'Public lobby guide', href: '/public-lobby-guide' },
    ],
  },
  'public-lobby-guide': {
    slug: 'public-lobby-guide',
    icon: ShieldAlert,
    eyebrow: 'Public lobby survival',
    title: 'Meccha Chameleon Public Lobby Guide — Kicks, Random Shooting, Cheaters, Spectators',
    zhTitle: '超级变色龙公房生存指南 — 被踢、乱扫、外挂、观战报点',
    description:
      'Survive Meccha Chameleon public lobbies: kicks after good hiding, random shooting hunters, spectator callouts, friend teaming, cheaters, voice chat issues, and private room rule suggestions.',
    zhDescription:
      '应对超级变色龙公房问题：藏得好被踢、猎人乱扫、观战报点、朋友互相包庇、外挂、语音问题和私房规则建议。',
    primaryCta: { label: 'Use private-room rules', href: '#private-rules' },
    secondaryCta: { label: 'Play with friends', href: '/play-with-friends' },
    quickAnswers: [
      ['Getting kicked for hiding well', 'Move to private rooms or hosts with clear rules. Public host power is part of the current pain point.'],
      ['Hunters shoot randomly', 'Hide on surfaces that punish random scanning: open patterned areas, not obvious corners.'],
      ['Spectators call you out', 'Use push-to-talk rules in private rooms and mute public voice quickly.'],
      ['Cheaters / ESP', 'Leave and report. Do not escalate by downloading the same tools.'],
    ],
    sections: [
      {
        title: 'Public lobby problems are real',
        body: 'Steam reviews praise the concept but complain about host kicks, spectator callouts, random shooting, toxic voice, and cheaters. The workaround is social design: better rooms, clearer rules, and fast exits.',
        bullets: [
          'If a host kicks good hiders, do not argue for three rounds; leave and find a better room.',
          'Avoid hiding spots made famous by clips; hunters spam those first.',
          'Mute open microphones that leak spectator calls or abuse across languages.',
          'Treat “buy cheat?” messages as a report-and-leave signal.',
        ],
      },
      {
        title: 'Recommended private-room rules',
        body: 'Friend rooms can fix most public-lobby pain if the host sets rules before the round.',
        bullets: [
          'No spectator callouts; spectators stay muted until round end.',
          'Limit blind random shooting if your group wants creative hiding to matter.',
          'Rotate hosts every few rounds so one person does not control every kick/map decision.',
          'Use official maps for new players, workshop maps only after everyone has downloaded them.',
        ],
      },
      {
        title: 'Voice and cross-language etiquette',
        body: 'VC can be fun in private rooms and miserable in public rooms. Keep control simple.',
        bullets: [
          'Use push-to-talk, not open mic.',
          'Agree on simple seeker callouts: color, floor, left/right, object name.',
          'If you prefer no-voice public play, mute first and use pings/scoreboard instead.',
          'Streamers: hide lobby codes and mute spectator audio while searching rooms.',
        ],
      },
    ],
    related: [
      { label: 'Play with friends', href: '/play-with-friends' },
      { label: 'Connection fix', href: '/connection-fix' },
      { label: 'Tools safety', href: '/tools' },
    ],
  },
  tools: {
    slug: 'tools',
    icon: Wrench,
    eyebrow: 'Tools radar',
    title: 'Meccha Chameleon Tool Safety Guide — ESP, FPS Boosters, Password Archives, Admin EXE Risks',
    zhTitle: '超级变色龙工具安全指南 — ESP、FPS Booster、密码压缩包、管理员 EXE 风险',
    description:
      'A safety-first radar for Meccha Chameleon tools: external ESP trainer, FPS optimizer, camouflage helper, radar overlays, GitHub releases, password archives, admin EXEs, and safer alternatives.',
    zhDescription:
      '以安全为先的超级变色龙工具雷达：External ESP Trainer、FPS optimizer、伪装辅助、雷达叠加层、GitHub 发布、密码压缩包、管理员 EXE 和更安全的替代方案。',
    primaryCta: { label: 'Read risk labels', href: '#risk-labels' },
    secondaryCta: { label: 'FPS boost safely', href: '/fps-boost' },
    quickAnswers: [
      ['External ESP Trainer', 'High risk. It may read game memory, violate game terms, trigger anti-cheat, or contain malware if downloaded from an unknown source.'],
      ['FPS optimizer', 'Medium risk. System settings can be reversible; unknown admin EXEs are not.'],
      ['Camouflage helper', 'Low risk if it is a browser color/practice tool; high risk if it attaches to the game process.'],
      ['Password archives', 'Treat .rar/.7z files with passwords as red flags, especially when paired with “undetected” claims.'],
    ],
    sections: [
      {
        title: 'Tool categories from the GitHub topic',
        body: 'The public meccha-chameleon GitHub topic clusters around ESP overlays, FPS optimizers, camouflage helpers, radar, aimbot menus, and release downloads. This page explains what they claim to do and why players should be careful.',
        bullets: [
          'FPS optimizer: performance tweaks, priority changes, GPU settings, memory cleanup.',
          'External overlay / ESP: boxes, names, distance labels, snap lines, radar, health bars.',
          'Camouflage helper: color sampling, paint workflow, F10/F11 style shortcuts, texture paint experiments.',
          'Safety checker: source visibility, release history, VirusTotal link quality, admin permission, archive password.',
        ],
      },
      {
        title: 'Risk labels',
        body: 'Use this simple filter before downloading anything.',
        bullets: [
          'Green: browser-only color tool, guide, checklist, or map reference.',
          'Yellow: reversible FPS settings or open-source utility that does not touch game memory.',
          'Red: ESP, aimbot, radar, injector, memory reader, trainer, password archive, or admin-only EXE.',
          'Black flag: “undetected”, “crack”, “free key”, forced password, no source, no changelog, no clear owner.',
        ],
      },
      {
        title: 'Direct download policy on this site',
        body: 'The site can link to original GitHub sources and mirrored archives only with an explicit risk box. The copy should educate, not pretend third-party tools are safe.',
        bullets: [
          'Always show “Educational and research purposes only. Use at your own risk.” near trainer links.',
          'Prefer source repo and release page links before direct binary links.',
          'Tell users that third-party tools may violate Steam/game terms and can cause bans.',
          'Offer safe alternatives: FPS settings guide, Camo Lab, color matching guide, and .art map atlas.',
        ],
      },
    ],
    warnings: [
      'This site is fan-made and not affiliated with LEMORION or Steam.',
      'Third-party ESP / trainer / aimbot software can violate game terms and may be unsafe.',
    ],
    related: [
      { label: 'FPS boost guide', href: '/fps-boost' },
      { label: 'Camo Lab', href: '/camo-lab' },
      { label: 'Download safety via Steam', href: '/#assistant' },
    ],
  },
};

export const camoLabPage: GuidePage = {
  slug: 'camo-lab',
  icon: Brush,
  eyebrow: 'Camo Lab',
  title: 'Meccha Chameleon Camo Lab — Color Difference, Shadow Correction, Camouflage Score',
  zhTitle: '超级变色龙伪装实验室 — 色差、阴影修正、伪装评分',
  description:
    'A legal browser-only Meccha Chameleon camo practice lab: compare colors, adjust shadows/highlights, estimate color difference, and practice camouflage without touching the game process.',
  zhDescription:
    '合法的浏览器端超级变色龙伪装训练：颜色对比、阴影/高光修正、估算色差、练习伪装，不读取或修改游戏进程。',
  primaryCta: { label: 'Try the color checker', href: '#camo-checker' },
  secondaryCta: { label: 'Read color guide', href: '/color-matching' },
  quickAnswers: [
    ['Is it a cheat?', 'No. This lab runs in the browser and does not attach to the game. It is a practice aid.'],
    ['What does it score?', 'It estimates RGB distance between your paint color and the target surface color, then suggests lighter/darker variants.'],
    ['Can it use map screenshots?', 'For now, use manual hex/RGB values. Deep map screenshots and spots live on mecchachameleon.art.'],
    ['Best use', 'Practice before a real match, then keep the color matching guide open as a second screen.'],
  ],
  sections: [
    {
      title: 'Browser-only practice, not game memory',
      body: 'Camo Lab is intentionally safe: it teaches color judgment without DLL injection, overlays, memory reading, or admin software.',
      bullets: [
        'Compare a target surface color with your planned paint color.',
        'Generate lighter and darker variants to compensate for lighting.',
        'Use the score as a hint, not a guarantee; pose and silhouette still matter.',
        'Open the .art atlas when you need exact map screenshots and hiding spots.',
      ],
    },
  ],
  related: [
    { label: 'Color matching guide', href: '/color-matching' },
    { label: 'Map atlas on .art', href: 'https://mecchachameleon.art/maps' },
    { label: 'Tools safety guide', href: '/tools' },
  ],
};

export const homeProblemCards = [
  { icon: Gamepad2, title: 'Play online', body: 'Keep the browser game as the first action. Start playing before reading.', href: '#play' },
  { icon: WifiOff, title: "Can’t join?", body: 'Signing in stuck, lobby join failed, room disconnects, DNS/VPN/IPv6 checklist.', href: '/connection-fix' },
  { icon: UsersRound, title: 'Playing with friends?', body: 'Private rooms, room codes, server tags, voice setup, workshop map prep.', href: '/play-with-friends' },
  { icon: Gauge, title: 'Low FPS?', body: 'Safe performance settings, stutter fixes, OBS tips, and risky booster warnings.', href: '/fps-boost' },
  { icon: Palette, title: 'Bad at painting?', body: 'Eyedropper compensation, brush limits, shadows, highlights, and pose discipline.', href: '/color-matching' },
  { icon: Eye, title: 'External ESP Trainer', body: 'Tools radar with safety labels for ESP, radar, FPS boosters, and admin EXEs.', href: '/tools' },
  { icon: ShieldAlert, title: 'Public lobby problems?', body: 'Kicks, random shooting, spectator callouts, cheaters, and private-room rules.', href: '/public-lobby-guide' },
  { icon: Globe2, title: 'Need maps?', body: 'Full hiding spot atlas and 50 map screenshots live on mecchachameleon.art.', href: 'https://mecchachameleon.art/maps' },
] as const;

export const toolsRadarCards = [
  { icon: Gauge, title: 'FPS optimizer', risk: 'Medium', body: 'Prefer reversible settings; avoid unknown admin EXEs.' },
  { icon: Eye, title: 'External overlay / ESP', risk: 'High', body: 'Memory tools can violate terms, trigger anti-cheat, or hide malware.' },
  { icon: Palette, title: 'Camouflage helper', risk: 'Low–High', body: 'Browser color practice is safe; process-attaching paint tools are not.' },
  { icon: CheckCircle2, title: 'Safety checker', risk: 'Required', body: 'Check source, releases, password archives, VirusTotal, and permissions.' },
  { icon: Download, title: 'Direct downloads', risk: 'Explicit risk', body: 'Source/release links first; direct archives need a visible warning.' },
  { icon: AlertTriangle, title: 'Crack / key claims', risk: 'Avoid', body: 'Free key, crack, and undetected wording are red flags.' },
] as const;
