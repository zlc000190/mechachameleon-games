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
  viTitle?: string;
  description: string;
  zhDescription: string;
  viDescription?: string;
  primaryCta: GuideLink;
  secondaryCta?: GuideLink;
  quickAnswers: Array<[string, string]>;
  sections: GuideSection[];
  warnings?: string[];
  related: GuideLink[];
  vi?: {
    eyebrow?: string;
    primaryCta?: GuideLink;
    secondaryCta?: GuideLink;
    quickAnswers?: Array<[string, string]>;
    sections?: GuideSection[];
    warnings?: string[];
    related?: GuideLink[];
  };
};

export function guideText(guide: GuidePage, locale: string) {
  const vi = locale === 'vi';
  const zh = locale === 'zh';

  return {
    eyebrow: vi ? (guide.vi?.eyebrow ?? guide.eyebrow) : guide.eyebrow,
    title: vi ? (guide.viTitle ?? guide.title) : zh ? guide.zhTitle : guide.title,
    description: vi
      ? (guide.viDescription ?? guide.description)
      : zh
        ? guide.zhDescription
        : guide.description,
    primaryCta: vi ? (guide.vi?.primaryCta ?? guide.primaryCta) : guide.primaryCta,
    secondaryCta: vi ? (guide.vi?.secondaryCta ?? guide.secondaryCta) : guide.secondaryCta,
    quickAnswers: vi ? (guide.vi?.quickAnswers ?? guide.quickAnswers) : guide.quickAnswers,
    sections: vi ? (guide.vi?.sections ?? guide.sections) : guide.sections,
    warnings: vi ? (guide.vi?.warnings ?? guide.warnings) : guide.warnings,
    related: vi ? (guide.vi?.related ?? guide.related) : guide.related,
  };
}

export const problemGuides: Record<string, GuidePage> = {
  'connection-fix': {
    slug: 'connection-fix',
    icon: WifiOff,
    eyebrow: 'Connection fix',
    title: 'Meccha Chameleon Connection Fix — Signing In, Lobby, Room Join, Disconnects',
    zhTitle: '超级变色龙进不去房间 / Signing in 卡住 / 掉线解决办法',
    viTitle: 'Sửa lỗi kết nối Meccha Chameleon - kẹt Signing In, lỗi vào phòng, mất kết nối',
    description:
      'Fix Meccha Chameleon online problems: signing in stuck, cannot join room, kicked back to menu, private lobby disconnects, server region, relay, VPN, DNS, IPv6, firewall, and Steam file checks.',
    zhDescription:
      '解决超级变色龙常见在线问题：Signing in 卡住、进不去房、掉线、被踢回主菜单、私房进不去、服务器地区、VPN、DNS、IPv6、防火墙和 Steam 文件验证。',
    viDescription:
      'Sửa lỗi online trong Meccha Chameleon: kẹt Signing In, không vào được phòng, bị đá về menu, mất kết nối lobby riêng, vùng server, VPN, DNS, IPv6, tường lửa và kiểm tra file Steam.',
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
    vi: {
      eyebrow: 'Sửa kết nối',
      primaryCta: { label: 'Kiểm tra nhanh trước', href: '#quick-checks' },
      secondaryCta: { label: 'Chơi bản trình duyệt', href: '/#play' },
      quickAnswers: [
        ['Kẹt Signing In', 'Khởi động lại Steam trước, rồi mở lại game. Nếu vẫn kẹt, thử tắt VPN, flush DNS và kiểm tra xem Steam/community có đang lỗi khu vực không.'],
        ['Không vào được phòng', 'Ưu tiên lobby mới, chưa bắt đầu. Nếu phòng dùng workshop map, hãy subscribe/tải map trước khi vào.'],
        ['Phòng riêng bị lỗi', 'Dùng cùng server tag/khu vực, để host tạo lại phòng và tránh VPN làm bạn bè bị route sang relay khác.'],
        ['Mất kết nối khi bắt đầu', 'Thường do tải server hoặc host không ổn định. Tạm dừng download nền, đổi relay region và verify files nếu chỉ bạn bị rớt.'],
      ],
      sections: [
        {
          title: 'Kiểm tra nhanh trước khi đổ lỗi cho máy',
          body: 'Các lỗi online thường lặp lại cùng một kiểu: Signing In treo, vào lobby bị trả về menu, hoặc bắt đầu trận thì có người rớt. Hãy bắt đầu từ các bước ít rủi ro.',
          bullets: [
            'Thoát hẳn Steam rồi mở lại, không chỉ đóng cửa sổ game.',
            'Tắt VPN/proxy để test một lần; nếu nhóm chơi khác khu vực, chọn region gần điểm giữa của nhóm.',
            'Tạm dừng download, cloud sync và upload chia sẻ màn hình trước khi vào lobby.',
            'Verify game files trong Steam nếu chỉ client của bạn bị đá còn bạn bè vẫn chơi được.',
          ],
        },
        {
          title: 'Checklist vào lobby và phòng',
          body: 'UI lobby còn thô, nên cách an toàn là giảm biến số: phòng mới, region rõ, map rõ và một host chờ yên cho mọi người vào.',
          bullets: [
            'Ưu tiên phòng đang chờ, chưa bắt đầu.',
            'Tránh lobby workshop map nếu bạn chưa tải map đó.',
            'Nếu phòng không load, thoát ra một lần; retry liên tục thường vẫn fail cho tới khi host tạo lại.',
            'Khi chơi với bạn bè, một người tạo private room mới và gửi ngay server tag/mã phòng chính xác.',
          ],
        },
        {
          title: 'Các sửa lỗi mạng đáng thử',
          body: 'Đừng cài EXE “online fix” lạ. Chỉ dùng kiểm tra cấp hệ thống có thể hoàn tác.',
          bullets: [
            'Windows: flush DNS rồi khởi động lại Steam: ipconfig /flushdns.',
            'Thử DNS khác như Cloudflare hoặc Google nếu Signing In chỉ lỗi trên một nhà mạng.',
            'Nếu IPv6 trên router lỗi, thử tắt IPv6 tạm thời; nếu ISP cần IPv6 thì bật lại.',
            'Chỉ allow game qua Windows Firewall từ đường dẫn cài Steam chính thức.',
          ],
        },
      ],
      warnings: [
        'Không tải crack, DLL hoặc admin EXE “connection fix” từ bình luận.',
        'Nếu cả lobby cùng lỗi thì thường là phía server; cài lại game nhiều lần sẽ không sửa được outage toàn cầu.',
      ],
      related: [
        { label: 'Hướng dẫn chơi cùng bạn bè', href: '/play-with-friends' },
        { label: 'Hướng dẫn tăng FPS', href: '/fps-boost' },
        { label: 'Sinh tồn lobby công khai', href: '/public-lobby-guide' },
      ],
    },
  },
  'play-with-friends': {
    slug: 'play-with-friends',
    icon: UsersRound,
    eyebrow: 'Party start',
    title: 'How to Play Meccha Chameleon With Friends — Lobby, Room Codes, Server Tags',
    zhTitle: '如何和朋友一起玩超级变色龙 — 房间、房间码、服务器标签指南',
    viTitle: 'Cách chơi Meccha Chameleon cùng bạn bè - lobby, mã phòng, server tag',
    description:
      'Set up Meccha Chameleon with friends: private rooms, lobby filters, room codes, server tags, public vs private rooms, voice chat, workshop maps, and what to do when friends cannot join.',
    zhDescription:
      '教你和朋友一起玩超级变色龙：私房、房间筛选、房间码、服务器标签、公房/私房区别、语音设置、创意工坊地图和朋友进不来时的处理办法。',
    viDescription:
      'Thiết lập Meccha Chameleon để chơi cùng bạn bè: phòng riêng, bộ lọc lobby, mã phòng, server tag, phòng công khai hay riêng tư, voice chat, workshop map và cách xử lý khi bạn bè không vào được.',
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
    vi: {
      eyebrow: 'Vào party',
      primaryCta: { label: 'Dùng checklist chơi cùng bạn', href: '#friend-checklist' },
      secondaryCta: { label: 'Sửa lỗi vào phòng', href: '/connection-fix' },
      quickAnswers: [
        ['Cách setup tốt nhất', 'Private room, cùng server tag, một host, không dùng workshop map trong lần test đầu.'],
        ['Public hay private?', 'Dùng private room khi chơi với bạn. Public room vui nhưng hay có kick, spectator báo vị trí, bắn bừa và voice chat lẫn ngôn ngữ.'],
        ['Voice chat', 'Dùng push-to-talk hoặc Discord. Tắt mic trong game nếu spectator public hay leak vị trí.'],
        ['Workshop map', 'Subscribe trước buổi chơi; thiếu asset map có thể làm lobby đen màn hoặc load fail.'],
      ],
      sections: [
        {
          title: 'Cách tạo phòng bạn bè ít lỗi nhất',
          body: 'Nhiều người phàn nàn bạn bè không vào cùng trận. Cách xử lý là giữ phòng đầu tiên thật đơn giản, rồi mới thêm map và luật sau khi nhóm kết nối ổn.',
          bullets: [
            'Host tạo private Custom Room và chờ trong lobby tới khi mọi người vào đủ.',
            'Tất cả dùng cùng region/server tag. Đừng trộn VPN và không VPN.',
            'Bắt đầu bằng official map. Thêm workshop map sau vòng đầu thành công.',
            'Nếu hai người vào fail, tạo lại phòng thay vì spam retry lobby lỗi.',
          ],
        },
        {
          title: 'Mẹo dùng lobby UI',
          body: 'Tìm lobby trong game là điểm bị chê nhiều. Hãy dùng filter như checklist thay vì cuộn ngẫu nhiên.',
          bullets: [
            'Tìm phòng chưa bắt đầu trước; vào trận đang chạy rất mất thời gian.',
            'Tránh phòng đầy và phòng có custom map lạ khi đang hỗ trợ người mới.',
            'Nếu danh sách lobby không refresh, quay về main menu rồi mở multiplayer lại.',
            'Host nên báo map, số người và luật voice trước khi start.',
          ],
        },
        {
          title: 'Voice, ngôn ngữ và chơi khác khu vực',
          body: 'Voice chat làm private room vui hơn nhưng có thể làm public room tệ hơn. Hãy dùng nó như công cụ, không phải bắt buộc.',
          bullets: [
            'Dùng push-to-talk để tránh open mic và spectator lỡ báo vị trí.',
            'Nhóm đa ngôn ngữ nên thống nhất callout đơn giản: trái/phải/trên/dưới hoặc màu.',
            'Mute người toxic nhanh; đừng tốn cả round cãi nhau trong public voice.',
            'Streamer nên che room code và mute spectator voice trước khi mở danh sách lobby.',
          ],
        },
      ],
      related: [
        { label: 'Sửa kết nối', href: '/connection-fix' },
        { label: 'Hướng dẫn lobby công khai', href: '/public-lobby-guide' },
        { label: 'Hướng dẫn phối màu', href: '/color-matching' },
      ],
    },
  },
  'fps-boost': {
    slug: 'fps-boost',
    icon: Gauge,
    eyebrow: 'Performance',
    title: 'Meccha Chameleon FPS Boost & Stutter Fix — Low-End PC Settings',
    zhTitle: '超级变色龙 FPS 提升与卡顿修复 — 低配电脑设置指南',
    viTitle: 'Tăng FPS và sửa giật lag Meccha Chameleon - cài đặt cho máy yếu',
    description:
      'Improve Meccha Chameleon FPS and reduce stutter safely: graphics settings, windowed/borderless mode, Steam launch options, Windows Game Mode, GPU drivers, OBS settings, and risky FPS booster warnings.',
    zhDescription:
      '安全提升超级变色龙 FPS、减少卡顿：画质设置、窗口/无边框、Steam 启动参数、Windows 游戏模式、显卡驱动、OBS 录制设置，以及危险 FPS booster 提醒。',
    viDescription:
      'Tăng FPS và giảm giật lag Meccha Chameleon an toàn: thiết lập đồ họa, windowed/borderless, launch options Steam, Windows Game Mode, driver GPU, OBS và cảnh báo FPS booster rủi ro.',
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
    vi: {
      eyebrow: 'Hiệu năng',
      primaryCta: { label: 'Mở cài đặt an toàn', href: '#safe-settings' },
      secondaryCta: { label: 'Radar an toàn công cụ', href: '/tools' },
      quickAnswers: [
        ['Windowed hay borderless?', 'Borderless thường mượt hơn khi dùng overlay hoặc stream capture; chỉ dùng fullscreen riêng nếu độ trễ input là vấn đề lớn nhất.'],
        ['Giật khi sơn màu', 'Giảm shadows/effects trước, sau đó khóa FPS ở mức ổn định thay vì chạy số FPS cao nhưng dao động.'],
        ['Ghi hình OBS', 'Dùng game capture, hardware encoder và 1080p60 chỉ khi GPU còn dư. Nếu không, ghi 720p60.'],
        ['FPS booster EXE?', 'Tránh EXE admin không rõ nguồn. Ưu tiên cài đặt Windows, Steam và driver có thể hoàn tác.'],
      ],
      sections: [
        {
          title: 'Cài đặt an toàn nên thử trước',
          body: 'Nhiều người bị stutter dù FPS trung bình vẫn ổn. Mục tiêu là frame pacing ổn định, không chỉ một con số cao.',
          bullets: [
            'Giảm shadows, reflections, post-processing và effects trước texture quality.',
            'Dùng borderless windowed nếu bạn alt-tab, stream hoặc dùng overlay.',
            'Khóa FPS ở 60 hoặc 90 nếu uncapped FPS gây spike.',
            'Đóng tab trình duyệt, launcher, download và tool record trong lần test đầu.',
          ],
        },
        {
          title: 'Checklist Windows, Steam và GPU',
          body: 'Các thay đổi này có thể hoàn tác và không chỉnh sửa file game.',
          bullets: [
            'Cập nhật driver GPU từ NVIDIA/AMD/Intel, không dùng driver bundle lạ.',
            'Bật Windows Game Mode, nhưng tắt Xbox Game Bar capture nếu nó gây stutter.',
            'Trên laptop, đặt game dùng High Performance GPU trong Windows Graphics settings.',
            'Verify game files trong Steam sau crash khi dùng eyedropper hoặc load map.',
          ],
        },
        {
          title: 'Không nên tải gì',
          body: 'Có nhiều tool FPS optimizer và trainer. Một số có thể vô hại, nhưng người chơi cần hiểu rủi ro trước khi chạy quyền Administrator.',
          bullets: [
            'Tránh file .rar/.7z có mật khẩu với lời hứa “undetected FPS boost”.',
            'Không chạy admin EXE nếu bạn không tin nguồn và không hiểu nó thay đổi gì.',
            'Ưu tiên tool có source code, changelog và cài đặt có thể hoàn tác.',
            'Nếu tool trộn FPS boost với ESP/aimbot, hãy xem nó là tool đọc bộ nhớ rủi ro cao.',
          ],
        },
      ],
      warnings: ['Tool hiệu năng có thể kích hoạt anti-cheat hoặc cảnh báo malware. Trang này giải thích rủi ro, không bảo đảm an toàn cho phần mềm bên thứ ba.'],
      related: [
        { label: 'Radar công cụ', href: '/tools' },
        { label: 'Sửa kết nối', href: '/connection-fix' },
        { label: 'Hướng dẫn phối màu', href: '/color-matching' },
      ],
    },
  },
  'color-matching': {
    slug: 'color-matching',
    icon: Palette,
    eyebrow: 'Paint help',
    title: 'Meccha Chameleon Color Matching Guide — Paint, Eyedropper, Shadows, Brush Tips',
    zhTitle: '超级变色龙取色与涂色指南 — 画笔、吸管、阴影和伪装技巧',
    viTitle: 'Hướng dẫn phối màu Meccha Chameleon - sơn, eyedropper, bóng đổ, brush',
    description:
      'Improve Meccha Chameleon painting: eyedropper compensation, color mismatch, shadows, highlights, brush resolution limits, pose discipline, map color references, and camo lab practice.',
    zhDescription:
      '提升超级变色龙涂色能力：吸管取色补偿、颜色偏差、阴影高光、画笔分辨率限制、姿势控制、地图颜色参考和网页伪装训练。',
    viDescription:
      'Cải thiện kỹ năng sơn màu Meccha Chameleon: bù màu eyedropper, lệch màu, bóng đổ, highlight, giới hạn brush, giữ tư thế, màu map và luyện camo trên trình duyệt.',
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
    vi: {
      eyebrow: 'Hỗ trợ sơn màu',
      primaryCta: { label: 'Luyện trong Camo Lab', href: '/camo-lab' },
      secondaryCta: { label: 'Mở atlas bản đồ', href: 'https://mecchachameleon.art/maps' },
      quickAnswers: [
        ['Eyedropper nhìn sai màu', 'Lấy mẫu ba pixel gần nhau rồi ước lượng trung bình; một pixel đơn lẻ thường dính bóng hoặc highlight.'],
        ['Sơn quá tối', 'Có thể bạn lấy mẫu vùng bóng. Thêm màu phụ sáng/ấm hơn và xoay mặt sơn tốt nhất về hướng seeker hay đi.'],
        ['Brush quá pixel', 'Dùng mảng màu lớn kèm gợi ý texture. Đừng cố vẽ đường thẳng hoàn hảo trên model.'],
        ['Bề mặt dễ trốn nhất', 'Wallpaper, gạch, tile, thảm và cụm đồ vật che mép brush lỗi tốt hơn tường trơn.'],
      ],
      sections: [
        {
          title: 'Vì sao màu sơn không khớp',
          body: 'Ý tưởng sơn màu rất hay, nhưng eyedropper và độ phân giải brush khiến khớp màu tuyệt đối khó. Hãy xem sơn như ngụy trang, không phải vẽ minh họa.',
          bullets: [
            'Lấy mẫu từ đúng góc camera mà seeker sẽ đứng.',
            'Lấy một màu nền, một màu bóng và một màu highlight từ cùng bề mặt.',
            'Tránh đồ bóng/kim loại cho tới khi hiểu roughness và ánh sáng.',
            'Không di chuyển sau khi lock-in; chuyển động phá hỏng cả màu sơn tốt.',
          ],
        },
        {
          title: 'Luật brush và tư thế',
          body: 'Model và brush có giới hạn chi tiết. Ngụy trang mảng lớn dễ đọc sẽ tốt hơn tranh nhỏ quá chính xác.',
          bullets: [
            'Sơn mảng nền lớn trước, rồi thêm stroke nhỏ ở mép thấy rõ.',
            'Khớp silhouette trước trang trí: crouch, xoay và ép sát bề mặt.',
            'Đặt chi tiết tương phản ở phía quay xa đường camera phổ biến.',
            'Nếu bề mặt nhiều noise, bắt nhịp pattern thay vì copy từng pixel.',
          ],
        },
        {
          title: 'Tham chiếu màu theo map',
          body: 'Dùng .games để học kỹ thuật và .art để xem màu/ảnh map sâu hơn.',
          bullets: [
            'Mở mecchachameleon.art/maps để xem đủ atlas 50 điểm trốn và ảnh chụp.',
            'Dùng Camo Lab để so màu đã lấy mẫu với biến thể sáng/tối.',
            'Trong public lobby, chọn bề mặt đơn giản hơn; sơn vội thường làm thua nhiều hơn spot chưa hoàn hảo.',
          ],
        },
      ],
      related: [
        { label: 'Camo Lab', href: '/camo-lab' },
        { label: 'Atlas bản đồ trên .art', href: 'https://mecchachameleon.art/maps' },
        { label: 'Hướng dẫn lobby công khai', href: '/public-lobby-guide' },
      ],
    },
  },
  'public-lobby-guide': {
    slug: 'public-lobby-guide',
    icon: ShieldAlert,
    eyebrow: 'Public lobby survival',
    title: 'Meccha Chameleon Public Lobby Guide — Kicks, Random Shooting, Cheaters, Spectators',
    zhTitle: '超级变色龙公房生存指南 — 被踢、乱扫、外挂、观战报点',
    viTitle: 'Hướng dẫn lobby công khai Meccha Chameleon - bị kick, bắn bừa, cheat, spectator',
    description:
      'Survive Meccha Chameleon public lobbies: kicks after good hiding, random shooting hunters, spectator callouts, friend teaming, cheaters, voice chat issues, and private room rule suggestions.',
    zhDescription:
      '应对超级变色龙公房问题：藏得好被踢、猎人乱扫、观战报点、朋友互相包庇、外挂、语音问题和私房规则建议。',
    viDescription:
      'Cách sống sót trong lobby công khai Meccha Chameleon: bị kick vì trốn tốt, seeker bắn bừa, spectator báo vị trí, team bạn bè, cheat, voice chat và luật phòng riêng.',
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
    vi: {
      eyebrow: 'Sinh tồn lobby công khai',
      primaryCta: { label: 'Dùng luật phòng riêng', href: '#private-rules' },
      secondaryCta: { label: 'Chơi cùng bạn bè', href: '/play-with-friends' },
      quickAnswers: [
        ['Bị kick vì trốn tốt', 'Chuyển sang private room hoặc host có luật rõ. Quyền kick của host là một điểm đau hiện tại.'],
        ['Hunter bắn bừa', 'Chọn bề mặt phạt việc scan ngẫu nhiên: khu vực mở có pattern, không phải góc quá hiển nhiên.'],
        ['Spectator báo vị trí', 'Đặt luật push-to-talk trong phòng riêng và mute voice public thật nhanh.'],
        ['Cheater / ESP', 'Thoát và report. Đừng phản ứng bằng cách tải cùng loại tool.'],
      ],
      sections: [
        {
          title: 'Vấn đề public lobby là có thật',
          body: 'Review Steam khen concept nhưng phàn nàn về kick, spectator callout, bắn bừa, voice toxic và cheat. Cách né là thiết kế xã hội: phòng tốt hơn, luật rõ hơn và thoát nhanh.',
          bullets: [
            'Nếu host kick người trốn giỏi, đừng tranh cãi ba round; rời đi và tìm phòng khác.',
            'Tránh spot đã nổi trên clip; hunter sẽ spam những chỗ đó trước.',
            'Mute open mic leak vị trí hoặc chửi nhau xuyên ngôn ngữ.',
            'Tin nhắn “buy cheat?” là tín hiệu report-and-leave.',
          ],
        },
        {
          title: 'Luật phòng riêng nên dùng',
          body: 'Phòng bạn bè có thể sửa hầu hết nỗi đau public lobby nếu host đặt luật trước vòng.',
          bullets: [
            'Không spectator callout; spectator mute tới khi round kết thúc.',
            'Giới hạn bắn mù nếu nhóm muốn việc trốn sáng tạo có ý nghĩa.',
            'Luân phiên host sau vài round để một người không kiểm soát mọi kick/map.',
            'Dùng official map cho người mới, workshop map chỉ sau khi mọi người đã tải.',
          ],
        },
        {
          title: 'Voice và etiquette đa ngôn ngữ',
          body: 'Voice chat vui trong private room nhưng dễ tệ trong public room. Giữ nó đơn giản.',
          bullets: [
            'Dùng push-to-talk, không open mic.',
            'Thống nhất callout đơn giản: màu, tầng, trái/phải, tên đồ vật.',
            'Nếu không muốn voice public, mute trước và dùng ping/scoreboard.',
            'Streamer nên che lobby code và mute spectator audio khi tìm phòng.',
          ],
        },
      ],
      related: [
        { label: 'Chơi cùng bạn bè', href: '/play-with-friends' },
        { label: 'Sửa kết nối', href: '/connection-fix' },
        { label: 'An toàn công cụ', href: '/tools' },
      ],
    },
  },
  tools: {
    slug: 'tools',
    icon: Wrench,
    eyebrow: 'Tools radar',
    title: 'Meccha Chameleon Tool Safety Guide — ESP, FPS Boosters, Password Archives, Admin EXE Risks',
    zhTitle: '超级变色龙工具安全指南 — ESP、FPS Booster、密码压缩包、管理员 EXE 风险',
    viTitle: 'Hướng dẫn an toàn công cụ Meccha Chameleon - ESP, FPS booster, file nén mật khẩu, admin EXE',
    description:
      'A safety-first radar for Meccha Chameleon tools: external ESP trainer, FPS optimizer, camouflage helper, radar overlays, GitHub releases, password archives, admin EXEs, and safer alternatives.',
    zhDescription:
      '以安全为先的超级变色龙工具雷达：External ESP Trainer、FPS optimizer、伪装辅助、雷达叠加层、GitHub 发布、密码压缩包、管理员 EXE 和更安全的替代方案。',
    viDescription:
      'Radar an toàn cho công cụ Meccha Chameleon: external ESP trainer, FPS optimizer, hỗ trợ ngụy trang, radar overlay, GitHub release, file nén mật khẩu, admin EXE và lựa chọn an toàn hơn.',
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
    vi: {
      eyebrow: 'Radar công cụ',
      primaryCta: { label: 'Đọc nhãn rủi ro', href: '#risk-labels' },
      secondaryCta: { label: 'Tăng FPS an toàn', href: '/fps-boost' },
      quickAnswers: [
        ['External ESP Trainer', 'Rủi ro cao. Nó có thể đọc bộ nhớ game, vi phạm điều khoản, kích hoạt anti-cheat hoặc chứa malware nếu tải từ nguồn lạ.'],
        ['FPS optimizer', 'Rủi ro trung bình. Cài đặt hệ thống có thể hoàn tác; admin EXE không rõ nguồn thì không.'],
        ['Camouflage helper', 'Rủi ro thấp nếu chỉ là tool màu trên trình duyệt; rủi ro cao nếu gắn vào tiến trình game.'],
        ['File nén mật khẩu', 'Xem .rar/.7z có mật khẩu là cờ đỏ, nhất là khi đi kèm chữ “undetected”.'],
      ],
      sections: [
        {
          title: 'Nhóm công cụ trong GitHub topic',
          body: 'Topic công khai quanh meccha-chameleon thường có ESP overlay, FPS optimizer, camouflage helper, radar, aimbot menu và release download. Trang này giải thích chúng tuyên bố làm gì và vì sao nên cẩn thận.',
          bullets: [
            'FPS optimizer: tweak hiệu năng, đổi priority, setting GPU, dọn bộ nhớ.',
            'External overlay / ESP: box, tên, khoảng cách, snap line, radar, thanh máu.',
            'Camouflage helper: lấy mẫu màu, workflow sơn, phím tắt kiểu F10/F11, thử texture paint.',
            'Safety checker: source có công khai không, lịch sử release, link VirusTotal, quyền admin, mật khẩu archive.',
          ],
        },
        {
          title: 'Nhãn rủi ro',
          body: 'Dùng bộ lọc đơn giản này trước khi tải bất cứ thứ gì.',
          bullets: [
            'Xanh: tool màu chạy trong trình duyệt, guide, checklist hoặc tham chiếu map.',
            'Vàng: cài đặt FPS có thể hoàn tác hoặc utility mã nguồn mở không chạm bộ nhớ game.',
            'Đỏ: ESP, aimbot, radar, injector, memory reader, trainer, archive mật khẩu hoặc EXE chỉ chạy admin.',
            'Cờ đen: “undetected”, “crack”, “free key”, ép mật khẩu, không source, không changelog, không rõ chủ sở hữu.',
          ],
        },
        {
          title: 'Chính sách link tải trực tiếp trên trang này',
          body: 'Trang có thể link tới GitHub nguồn gốc và mirror archive chỉ khi có hộp rủi ro rõ. Nội dung phải giáo dục, không giả vờ tool bên thứ ba là an toàn.',
          bullets: [
            'Luôn hiển thị “Chỉ phục vụ mục đích giáo dục/nghiên cứu. Tự chịu rủi ro.” gần link trainer.',
            'Ưu tiên link source repo và release page trước link binary trực tiếp.',
            'Nói rõ tool bên thứ ba có thể vi phạm điều khoản Steam/game và gây ban.',
            'Đưa lựa chọn an toàn: hướng dẫn FPS, Camo Lab, hướng dẫn phối màu và atlas map .art.',
          ],
        },
      ],
      warnings: [
        'Trang này do fan làm, không liên kết với LEMORION hoặc Steam.',
        'ESP / trainer / aimbot bên thứ ba có thể vi phạm điều khoản game và không an toàn.',
      ],
      related: [
        { label: 'Hướng dẫn tăng FPS', href: '/fps-boost' },
        { label: 'Camo Lab', href: '/camo-lab' },
        { label: 'An toàn tải file qua Steam', href: '/#assistant' },
      ],
    },
  },
};

export const camoLabPage: GuidePage = {
  slug: 'camo-lab',
  icon: Brush,
  eyebrow: 'Camo Lab',
  title: 'Meccha Chameleon Camo Lab — Color Difference, Shadow Correction, Camouflage Score',
  zhTitle: '超级变色龙伪装实验室 — 色差、阴影修正、伪装评分',
  viTitle: 'Meccha Chameleon Camo Lab - chênh màu, chỉnh bóng, điểm ngụy trang',
  description:
    'A legal browser-only Meccha Chameleon camo practice lab: compare colors, adjust shadows/highlights, estimate color difference, and practice camouflage without touching the game process.',
  zhDescription:
    '合法的浏览器端超级变色龙伪装训练：颜色对比、阴影/高光修正、估算色差、练习伪装，不读取或修改游戏进程。',
  viDescription:
    'Camo Lab hợp pháp chạy trên trình duyệt cho Meccha Chameleon: so màu, chỉnh bóng/highlight, ước lượng chênh màu và luyện ngụy trang mà không chạm tiến trình game.',
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
  vi: {
    eyebrow: 'Camo Lab',
    primaryCta: { label: 'Thử kiểm tra màu', href: '#camo-checker' },
    secondaryCta: { label: 'Đọc hướng dẫn phối màu', href: '/color-matching' },
    quickAnswers: [
      ['Đây có phải cheat không?', 'Không. Lab này chạy trong trình duyệt và không gắn vào game. Nó là công cụ luyện tập.'],
      ['Nó chấm điểm gì?', 'Nó ước lượng khoảng cách RGB giữa màu sơn và màu bề mặt mục tiêu, rồi gợi ý biến thể sáng/tối.'],
      ['Có dùng ảnh map không?', 'Hiện tại hãy nhập hex/RGB thủ công. Ảnh map và điểm trốn sâu nằm trên mecchachameleon.art.'],
      ['Dùng thế nào tốt nhất?', 'Luyện trước trận thật, rồi mở hướng dẫn phối màu như màn hình thứ hai.'],
    ],
    sections: [
      {
        title: 'Luyện trên trình duyệt, không đọc bộ nhớ game',
        body: 'Camo Lab được giữ an toàn có chủ ý: nó dạy phán đoán màu mà không DLL injection, overlay, đọc bộ nhớ hay phần mềm admin.',
        bullets: [
          'So màu bề mặt mục tiêu với màu sơn bạn định dùng.',
          'Tạo biến thể sáng hơn và tối hơn để bù ánh sáng.',
          'Dùng điểm số như gợi ý, không phải bảo đảm; tư thế và silhouette vẫn quan trọng.',
          'Mở atlas .art khi cần ảnh map và vị trí trốn chính xác.',
        ],
      },
    ],
    related: [
      { label: 'Hướng dẫn phối màu', href: '/color-matching' },
      { label: 'Atlas bản đồ trên .art', href: 'https://mecchachameleon.art/maps' },
      { label: 'Hướng dẫn an toàn công cụ', href: '/tools' },
    ],
  },
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
