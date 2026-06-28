import { ArrowLeft, CheckCircle2, Clock, Compass, Cpu, Gamepad2, Lightbulb, Palette, PartyPopper, Search, Sparkles, Target, Timer, Users, XCircle, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getCanonicalUrl, getSocialImageUrl } from '@/shared/lib/seo';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Hướng dẫn Meccha Chameleon cho người mới - chơi trận đầu trong 10 phút'
    : 'Meccha Chameleon New Player Guide — 10-min Walkthrough';
  const description = vi
    ? 'Hướng dẫn Meccha Chameleon cho người mới: cách vào game, phím điều khiển, sơn màu, vai hider/seeker, checklist trận đầu và lỗi dễ mắc.'
    : 'Meccha Chameleon beginner walkthrough in 10 minutes: controls, paint tool, role guide, first-match checklist, and 8 rookie mistakes to avoid in round one.';
  const canonicalUrl = await getCanonicalUrl('/new-player', locale);
  const imageUrl = getSocialImageUrl();
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

const quickStart = [
  {
    step: '01',
    icon: Cpu,
    title: 'Start in the browser',
    body:
      'Start with the browser play window on this site. It loads quickly, keeps the game flow on one page, and lets you decide whether the hide-and-seek loop clicks for you.',
    detail:
      'If you move to the PC version later, the system requirements are modest: any 4-core CPU after 2015 and a GPU with 2 GB VRAM.',
  },
  {
    step: '02',
    icon: Gamepad2,
    title: 'Boot up and finish the tutorial',
    body:
      'The first launch drops you into a 6-minute interactive tutorial. It walks the paint tool, the pose lock, the seek scan, and one full round. Skip the optional Discord invite — the in-game voice works fine.',
    detail:
      'Pay attention to the "Parallax" moment at minute 4. It is the single mechanic that separates good hiders from great ones, and the game only shows it once.',
  },
  {
    step: '03',
    icon: Users,
    title: 'Join a public lobby first',
    body:
      'Click Multiplayer → Quick Match. The matchmaker drops you into a 6-8 player Classic Hide & Seek round. There is no skill rating on public lobbies, so nobody will be upset if you paint yourself neon orange in round one.',
    detail:
      'Public lobbies default to push-to-talk voice. If you prefer quiet, hit F8 in the lobby to mute yourself — chat is opt-in, not opt-out.',
  },
];

const controls = [
  { key: 'WASD', action: 'Move' },
  { key: 'Mouse', action: 'Aim paint brush' },
  { key: 'LMB', action: 'Paint (hold for thicker stroke)' },
  { key: 'RMB', action: 'Eyedropper — sample color from environment' },
  { key: 'Shift', action: 'Crouch / lower silhouette' },
  { key: 'Ctrl', action: 'Pose lock — freeze in place' },
  { key: 'R', action: 'Reset paint (clears the canvas)' },
  { key: 'F', action: 'Toggle flashlight as seeker' },
  { key: 'Tab', action: 'Scoreboard' },
  { key: 'F8', action: 'Mute / unmute mic' },
];

const roles = [
  {
    title: 'Hider',
    icon: Palette,
    color: 'bg-[#7D6D69] text-white',
    body:
      'You get 45-90 seconds (depending on map and rule) to paint your character to match a chosen surface. Once the phase ends, you cannot move. Seekers then scan the map for 2-4 minutes.',
    tips: [
      'Pick a spot before you start painting — samples from a moving target throw off the color match.',
      'Use 3+ colors. A flat-color hider reads as a flat-color shape against a textured wall.',
      'Pose lock is your friend. Even one pixel of motion will give you away.',
    ],
  },
  {
    title: 'Seeker',
    icon: Search,
    color: 'bg-[#AA776E] text-white',
    body:
      'You run, jump, crouch, and use the flashlight to scan every surface. Each found hider is converted into a point for the seeker team. You can ping a suspect for your teammates with the middle mouse button.',
    tips: [
      'Walk, do not run. Aiming the flashlight while sprinting makes the cone wobble.',
      'Parallax: side-step a few meters and re-scan. A hider painted from one angle may look like scenery from another.',
      'Trash first. The default scan zone for most new seekers is corners, dark spots, and behind objects. Look in plain sight.',
    ],
  },
];

const beginnerVideoSeries = {
  title: 'Meccha Chameleon beginner guide series',
  src: 'https://www.youtube-nocookie.com/embed/OwrQrvNRHoY?playlist=1_p9HKjNqnk,tiwvQyc2a8k,hGbThwkwU50,eCbimRl-VLw&rel=0&modestbranding=1&playsinline=1',
  steps: [
    'Start with the first guide and let the playlist auto-advance.',
    'Watch for paint, pose, and spot-selection rules before the first match.',
    'Keep the page open; the next guide plays here without leaving the site.',
  ],
};

const firstMatch = [
  { time: '00:00', label: 'Round start', body: 'Lobby assigns roles. You will see either "Hider" or "Seeker" in the top bar.' },
  { time: '00:10', label: 'Map vote (Custom Rooms only)', body: 'Public matchmaking skips this. Custom Rooms let the host pick from 5 stock maps + workshop.' },
  { time: '00:30', label: 'Hiding phase', body: 'Hiders spawn and the timer starts. Seekers wait in a sealed lobby. You have 60-90 seconds to walk to a spot and paint it.' },
  { time: '02:00', label: 'Lock in', body: 'A chime signals paint phase is over. Hiders are pose-locked. A countdown from 5 begins for seekers.' },
  { time: '02:10', label: 'Seeking phase', body: 'Seekers spawn. Their flashlight turns on. The round timer (default 2:30) starts.' },
  { time: '04:40', label: 'Round end', body: 'Any hiders still standing score. In Classic, the round resets. In Speed Hunt, scores accumulate.' },
];

const proTips = [
  {
    icon: Palette,
    title: 'Sample multiple colors from the same surface',
    body:
      'Walls are not one color. A "white" wall has at least four shades depending on the light. Sample 3-5 spots around you and blend them with a soft brush.',
  },
  {
    icon: Target,
    title: 'Hide in plain sight',
    body:
      'Seekers check corners, behind objects, and dark spots first. The middle of an open patterned surface (wallpaper, brick, tile) is paradoxically the safest place.',
  },
  {
    icon: Zap,
    title: 'Mind the parallax',
    body:
      'Both as hider and seeker. As a hider, rotate so your best-painted side faces the most common camera path. As a seeker, side-step 1-2 meters before declaring a wall clean.',
  },
  {
    icon: Timer,
    title: 'Stay completely still after painting',
    body:
      'Movement is the single biggest give-away. A perfectly painted chameleon that takes one step at second 50 will be caught. Pose-lock the moment you finish painting.',
  },
  {
    icon: Compass,
    title: 'Hide at eye level or above',
    body:
      'Most players default to scanning at eye level. Shelves, ledges, ceiling fixtures, and objects on the wall are statistically safer than floor-level crouches.',
  },
  {
    icon: Lightbulb,
    title: 'Match the metallic slider',
    body:
      'The paint tool has a metallic / roughness slider. Walls are matte. Metal fixtures are glossy. Use it. A matte-only paint job on a brass lamp gets spotted in two seconds.',
  },
];

const mistakes = [
  { bad: 'One solid color is enough.', good: 'Sample 3+ colors from your hiding surface and blend them.' },
  { bad: 'The corner is the safest spot.', good: 'Hide in open areas — corners are the first things checked.' },
  { bad: 'Keep adjusting my position after painting.', good: 'Stay completely still the moment you lock in.' },
  { bad: 'Dark areas are invisible.', good: 'Seekers check dark spots first — moderate light is safer.' },
  { bad: 'Skip the metallic slider.', good: 'Match the surface roughness and metallic with the slider.' },
  { bad: 'Any angle works fine.', good: 'Rotate so your best-painted side faces the most-likely camera path.' },
  { bad: 'Scan quickly as a seeker.', good: 'Side-step 1-2 meters and re-scan — parallax reveals flat-color hiders.' },
  { bad: 'Paint during the hiding phase only.', good: 'Memorize the surface colors before the round starts, then paint fast.' },
];

const faqs = [
  {
    q: 'Can I play with friends in a different country?',
    a:
      'Yes. Custom Rooms route over relay servers. Pick the relay closest to the median location of your group and you will get sub-150 ms latency. For example, a Tokyo-Sydney-Sao Paulo group should use the Singapore relay.',
  },
  {
    q: 'Is there crossplay with console?',
    a:
      'No. Meccha Chameleon is PC-only. There is no PlayStation, Xbox, or Switch version announced. If you want to play on a phone, use Moonlight or Sunshine to stream from your PC.',
  },
  {
    q: 'How long does a single round take?',
    a:
      'Classic: 4-5 minutes including the lobby wait. Infection: 3-4 minutes per round, 3-5 rounds. Speed Hunt: 2-3 minutes per match. Custom Rooms can be stretched to 8 minutes for streamer-friendly pacing.',
  },
  {
    q: 'Do I need a powerful PC?',
    a:
      'No. The game has modest requirements: 4-core CPU, 2 GB VRAM GPU, 8 GB RAM. Integrated graphics on a 2018 laptop run it on Medium. The first launch is heavier than gameplay because the shader cache compiles.',
  },
  {
    q: 'Can I play on Mac?',
    a:
      'There is no native Mac client. Mac players join through Crossover, Whisky / Game Porting Toolkit, or Parallels. Community Mac guides usually walk the Crossover install in about 20 minutes.',
  },
  {
    q: 'Are custom maps worth it?',
    a:
      'For longevity, yes. After 1.2.0 the game has 200+ custom maps. The top-rated ones add maps beyond the stock rotation: hospital, cruise ship, abandoned mall, etc. Custom maps are the best way to keep friend groups playing.',
  },
  {
    q: 'What is the player count sweet spot?',
    a:
      '8 players is the most fun. 2-4 is too easy for the seekers. 24 is chaos; fine for streamers, bad for first-timers. The developer recommends 2-10 and we agree.',
  },
];

const viQuickStart = [
  {
    step: '01',
    icon: Cpu,
    title: 'Bắt đầu bằng bản trình duyệt',
    body: 'Mở khung chơi trên trang này trước. Nó vào nhanh, giữ toàn bộ luồng chơi trên một trang và giúp bạn hiểu vòng lặp trốn tìm trước khi đọc hướng dẫn dài.',
    detail: 'Nếu sau đó chuyển sang bản PC, cấu hình yêu cầu không quá cao: CPU 4 nhân sau 2015 và GPU 2 GB VRAM là điểm khởi đầu hợp lý.',
  },
  {
    step: '02',
    icon: Gamepad2,
    title: 'Học phím điều khiển và thử sơn',
    body: 'Tập di chuyển, lấy mẫu màu, sơn lên nhân vật và đứng yên đúng lúc. Đây là vòng lặp quan trọng nhất của Meccha Chameleon.',
    detail: 'Đừng chỉ nhìn màu. Tư thế, góc camera và việc đứng yên sau khi sơn thường quyết định bạn có bị phát hiện hay không.',
  },
  {
    step: '03',
    icon: Users,
    title: 'Vào public lobby hoặc phòng bạn bè',
    body: 'Người mới nên thử một lobby nhanh trước, sau đó dùng private room nếu chơi cùng bạn. Phòng riêng giúp tránh kick, spectator báo vị trí và voice chat lộn xộn.',
    detail: 'Nếu phòng không vào được, quay sang hướng dẫn sửa kết nối trước khi cài lại game hoặc tải tool lạ.',
  },
];

const viControls = [
  { key: 'WASD', action: 'Di chuyển' },
  { key: 'Mouse', action: 'Ngắm / xoay camera' },
  { key: 'LMB', action: 'Sơn màu, giữ để stroke dày hơn' },
  { key: 'RMB', action: 'Eyedropper - lấy màu từ môi trường' },
  { key: 'Shift', action: 'Crouch / hạ silhouette' },
  { key: 'Ctrl', action: 'Pose lock - đứng yên tại chỗ' },
  { key: 'R', action: 'Reset sơn' },
  { key: 'F', action: 'Bật/tắt đèn pin khi là seeker' },
  { key: 'Tab', action: 'Bảng điểm' },
  { key: 'F8', action: 'Mute / unmute mic' },
];

const viRoles = [
  {
    title: 'Hider',
    icon: Palette,
    color: 'bg-[#7D6D69] text-white',
    body: 'Bạn có một khoảng thời gian ngắn để chọn bề mặt, lấy màu và sơn nhân vật sao cho hòa vào môi trường. Khi phase kết thúc, hãy đứng yên tuyệt đối.',
    tips: [
      'Chọn chỗ trốn trước khi sơn, đừng vừa chạy vừa lấy mẫu màu.',
      'Dùng ít nhất 3 màu: màu nền, bóng và highlight.',
      'Pose lock ngay khi sơn xong. Một chuyển động nhỏ cũng đủ lộ.',
    ],
  },
  {
    title: 'Seeker',
    icon: Search,
    color: 'bg-[#AA776E] text-white',
    body: 'Bạn quét bề mặt, dùng đèn pin và đổi góc nhìn để tìm hider. Hider khớp màu từ một góc có thể lộ ra khi bạn bước sang ngang.',
    tips: [
      'Đi chậm khi quét; chạy nhanh làm cone đèn pin khó kiểm soát.',
      'Side-step vài mét rồi scan lại để bắt parallax.',
      'Đừng chỉ kiểm góc tối. Người chơi giỏi thường trốn ngay trên bề mặt mở có pattern.',
    ],
  },
];

const viFirstMatch = [
  { time: '00:00', label: 'Bắt đầu round', body: 'Lobby gán vai trò. Bạn sẽ là Hider hoặc Seeker.' },
  { time: '00:30', label: 'Hiding phase', body: 'Hider đi tìm vị trí, lấy màu và sơn. Seeker chờ tới khi phase kết thúc.' },
  { time: '02:00', label: 'Lock in', body: 'Hider đứng yên. Nếu bạn còn di chuyển sau lúc này, rất dễ bị phát hiện.' },
  { time: '02:10', label: 'Seeking phase', body: 'Seeker vào map, bật đèn pin và quét từng bề mặt.' },
  { time: '04:40', label: 'Kết thúc round', body: 'Hider còn sống được tính điểm; round mới bắt đầu hoặc lobby đổi vai.' },
];

const viTips = [
  { icon: Palette, title: 'Lấy nhiều mẫu màu từ cùng bề mặt', body: 'Một bức tường không chỉ có một màu. Lấy nền, bóng và highlight rồi pha bằng mảng lớn.' },
  { icon: Target, title: 'Trốn nơi nhìn có vẻ lộ', body: 'Seeker thường kiểm góc, sau đồ vật và chỗ tối trước. Bề mặt mở có pattern đôi khi an toàn hơn.' },
  { icon: Zap, title: 'Chú ý parallax', body: 'Hider nên xoay mặt sơn đẹp nhất về hướng seeker hay đi. Seeker nên đổi góc nhìn trước khi bỏ qua một bức tường.' },
  { icon: Timer, title: 'Đứng yên sau khi sơn', body: 'Chuyển động là tín hiệu lộ rõ nhất. Màu đẹp vẫn thua nếu bạn nhúc nhích.' },
  { icon: Compass, title: 'Ưu tiên ngang tầm mắt hoặc cao hơn', body: 'Nhiều người scan ngang mắt. Kệ, ledge và object trên tường thường tốt hơn floor-level crouch.' },
  { icon: Lightbulb, title: 'Đừng quên độ bóng bề mặt', body: 'Tường matte khác đồ kim loại bóng. Nếu có slider roughness/metallic, hãy dùng nó đúng bề mặt.' },
];

const viMistakes = [
  { bad: 'Một màu phẳng là đủ.', good: 'Lấy 3+ màu từ bề mặt và blend chúng.' },
  { bad: 'Góc tường là an toàn nhất.', good: 'Góc là nơi seeker kiểm đầu tiên; hãy thử bề mặt mở có pattern.' },
  { bad: 'Sơn xong vẫn chỉnh vị trí.', good: 'Lock tư thế ngay khi hoàn tất.' },
  { bad: 'Chỗ tối là vô hình.', good: 'Chỗ tối bị kiểm rất sớm; ánh sáng vừa phải thường an toàn hơn.' },
  { bad: 'Bỏ qua bóng/highlight.', good: 'Bù sáng/tối theo nguồn sáng trong map.' },
  { bad: 'Góc nào cũng giống nhau.', good: 'Xoay mặt sơn tốt nhất về đường camera phổ biến.' },
  { bad: 'Seeker chỉ cần quét nhanh.', good: 'Đổi góc 1-2 mét rồi quét lại để thấy hider.' },
  { bad: 'Chỉ học khi đã vào trận.', good: 'Xem phím và vòng round trước, rồi hãy queue.' },
];

const viFaqs = [
  { q: 'Có thể chơi Meccha Chameleon online miễn phí không?', a: 'Có. Bạn có thể bắt đầu bằng khung game trình duyệt trên trang này, không cần tải, rồi chuyển sang hướng dẫn PC nếu muốn chơi sâu hơn.' },
  { q: 'Nên chơi public hay private room?', a: 'Người mới có thể thử public nhanh, nhưng nếu chơi cùng bạn thì private room tốt hơn vì kiểm soát voice, map và luật spectator.' },
  { q: 'Máy yếu có chơi được không?', a: 'Có thể. Hãy giảm shadow/effects, dùng borderless, khóa FPS ổn định và tránh FPS booster EXE không rõ nguồn.' },
  { q: 'Tại sao màu lấy bằng eyedropper vẫn sai?', a: 'Vì pixel có bóng/highlight. Hãy lấy nhiều mẫu gần nhau và bù sáng/tối thay vì tin một pixel đơn lẻ.' },
];

export default async function NewPlayerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const backHref = locale === 'en' ? '/#new-player' : `/${locale}/#new-player`;
  const atHowToPlay = locale === 'en' ? '/#how-to-play' : `/${locale}/#how-to-play`;

  if (locale === 'vi') {
    return (
      <main className="min-h-screen bg-white text-[#29211D]">
        <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
          <div className="container py-14">
            <a href={backHref} className="mb-6 inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#D8CFC6] bg-white px-3 text-sm font-semibold text-[#29211D] transition hover:border-[#7D6D69]">
              <ArrowLeft className="h-4 w-4" />
              Quay lại trang chơi
            </a>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">Hướng dẫn người mới</p>
            <h1 className="mt-1 text-3xl font-bold leading-tight md:text-4xl">Mới chơi Meccha Chameleon? Đọc trang này trong 10 phút.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#4C3B35]">
              Hướng dẫn trận đầu cho người chơi Việt Nam: vào game, phím điều khiển, cách sơn màu, vai trò Hider/Seeker và các lỗi khiến bạn bị bắt rất nhanh.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-[#4C3B35]">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#D8CFC6] bg-white px-3 py-1.5"><Clock className="h-3.5 w-3.5 text-[#7D6D69]" /> Đọc 10 phút</span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#D8CFC6] bg-white px-3 py-1.5"><Gamepad2 className="h-3.5 w-3.5 text-[#7D6D69]" /> Người mới</span>
              <a href={backHref} className="inline-flex items-center gap-1.5 rounded-md border border-[#ff6f9a] bg-[#ff6f9a] px-3 py-1.5 text-white transition hover:bg-[#e95a88]">Chơi online</a>
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8CFC6] bg-white">
          <div className="container py-14">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">Bắt đầu nhanh: từ mở game tới trận đầu</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">Ba bước thực dụng để bạn hiểu vòng chơi trước khi vào lobby thật.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {viQuickStart.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="flex flex-col rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-6">
                    <div className="mb-3 flex items-center gap-3"><span className="text-2xl font-bold text-[#7D6D69]">{s.step}</span><Icon className="h-5 w-5 text-[#4C3B35]" /></div>
                    <h3 className="text-base font-semibold text-[#29211D]">{s.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#4C3B35]">{s.body}</p>
                    <p className="mt-3 text-xs leading-5 text-[#4C3B35] opacity-80">{s.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
          <div className="container py-14">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">Bảng phím điều khiển</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">Giữ bảng này bên cạnh trong vài trận đầu. Sau đó bạn sẽ nhớ tự nhiên.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {viControls.map((c) => (
                <div key={c.key} className="rounded-md border border-[#D8CFC6] bg-white p-4">
                  <kbd className="rounded-sm bg-[#ff8fb3] px-2 py-1 font-mono text-xs font-bold text-white">{c.key}</kbd>
                  <p className="mt-2 text-xs leading-5 text-[#4C3B35]">{c.action}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8CFC6] bg-white">
          <div className="container py-14">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">Vai trò: Hider và Seeker làm gì?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">Mỗi round xoay quanh hai vai: Hider sơn và đứng yên; Seeker đổi góc nhìn, quét và tìm.</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {viRoles.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-6">
                    <div className="flex items-center gap-3"><span className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${r.color}`}><Icon className="h-5 w-5" /></span><h3 className="text-xl font-bold">{r.title}</h3></div>
                    <p className="mt-4 text-sm leading-6 text-[#4C3B35]">{r.body}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4C3B35]">
                      {r.tips.map((t) => <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7D6D69]" />{t}</li>)}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8CFC6] bg-gradient-to-br from-[#9de7dc] via-[#cdefff] to-[#d9b7ff] text-[#29211D]">
          <div className="container py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff6f9a]">Trận đầu</p>
            <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">Một round thường diễn ra như thế nào?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">Dùng timeline này để biết mình cần làm gì trước khi vào public matchmaking.</p>
            <ol className="mt-8 space-y-4">
              {viFirstMatch.map((m, i) => (
                <li key={m.label} className="flex gap-4 rounded-md border border-white/70 bg-white/70 p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff8fb3] text-sm font-bold text-white">{i + 1}</span>
                  <div className="flex-1"><div className="flex items-center gap-3 text-xs"><span className="rounded-sm bg-white/20 px-2 py-0.5 font-mono font-semibold">{m.time}</span><span className="font-semibold">{m.label}</span></div><p className="mt-1.5 text-sm leading-6 text-[#4C3B35]">{m.body}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-[#D8CFC6] bg-white">
          <div className="container py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">Mẹo nhanh</p>
            <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">Sáu mẹo giúp bạn chơi tốt hơn ngay</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {viTips.map((t) => {
                const Icon = t.icon;
                return <div key={t.title} className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-5"><Icon className="h-5 w-5 text-[#7D6D69]" /><h3 className="mt-3 text-base font-semibold text-[#29211D]">{t.title}</h3><p className="mt-2 text-sm leading-6 text-[#4C3B35]">{t.body}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
          <div className="container py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#AA776E]">Lỗi người mới</p>
            <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">Đừng mắc 8 lỗi này</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {viMistakes.map((m) => (
                <div key={m.bad} className="rounded-md border border-[#D8CFC6] bg-white p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[#AA776E]"><XCircle className="h-4 w-4" /> Sai lầm</div>
                  <p className="text-sm leading-6 text-[#4C3B35] line-through opacity-70">{m.bad}</p>
                  <div className="my-3 border-t border-dashed border-[#D8CFC6]" />
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#7D6D69]"><CheckCircle2 className="h-4 w-4" /> Nên làm</div>
                  <p className="text-sm leading-6 text-[#29211D]">{m.good}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8CFC6] bg-white">
          <div className="container py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">FAQ</p>
            <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">Câu hỏi của người mới</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {viFaqs.map((f) => (
                <details key={f.q} className="group rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-[#29211D]">{f.q}<span className="ml-auto text-[#7D6D69] transition group-open:rotate-45">+</span></summary>
                  <p className="mt-3 text-sm leading-6 text-[#4C3B35]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F6F0EA]">
          <div className="container flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ff8fb3] text-white"><PartyPopper className="h-5 w-5" /></span>
              <div>
                <h3 className="text-lg font-semibold text-[#29211D]">Sẵn sàng vào lobby?</h3>
                <p className="mt-1 max-w-xl text-sm leading-6 text-[#4C3B35]">Sau khi nắm phím và cấu trúc round, đọc tiếp hướng dẫn chơi cùng bạn bè để tránh lỗi phòng, voice và server tag.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <a href={atHowToPlay} className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[#ff6f9a] px-4 text-sm font-semibold text-white transition hover:bg-[#e95a88]"><Sparkles className="h-4 w-4" /> Hướng dẫn chơi cùng bạn</a>
              <a href={backHref} className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#29211D] bg-white px-4 text-sm font-semibold text-[#29211D] transition hover:border-[#7D6D69] hover:text-[#7D6D69]">Chơi online</a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#29211D]">
      {/* Hero */}
      <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
        <div className="container py-14">
          <a
            href={backHref}
            className="mb-6 inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#D8CFC6] bg-white px-3 text-sm font-semibold text-[#29211D] transition hover:border-[#7D6D69]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">
            Beginner walkthrough
          </p>
          <h1 className="mt-1 text-3xl font-bold leading-tight md:text-4xl">
            New to Meccha Chameleon? Read this in 10 minutes.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#4C3B35]">
            A complete first-match walkthrough. Controls, paint tool, role responsibilities, and the
            eight mistakes that get you caught in 30 seconds — all on one page. No fluff, no
            marketing. Written for a player who has never launched the game.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-[#4C3B35]">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#D8CFC6] bg-white px-3 py-1.5">
              <Clock className="h-3.5 w-3.5 text-[#7D6D69]" /> 10 min read
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#D8CFC6] bg-white px-3 py-1.5">
              <Gamepad2 className="h-3.5 w-3.5 text-[#7D6D69]" /> Beginner
            </span>
            <a
              href={backHref}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#ff6f9a] bg-[#ff6f9a] px-3 py-1.5 text-white transition hover:bg-[#e95a88]"
            >
              Play online
            </a>
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <h2 className="text-2xl font-bold leading-tight md:text-3xl">Quick start: from install to first round</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            Three steps. Twenty minutes. You will have played a full match and understood every
            mechanic the game shows you in the first session.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {quickStart.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex flex-col rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl font-bold text-[#7D6D69]">{s.step}</span>
                    <Icon className="h-5 w-5 text-[#4C3B35]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#29211D]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#4C3B35]">{s.body}</p>
                  <p className="mt-3 text-xs leading-5 text-[#4C3B35] opacity-80">{s.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
        <div className="container py-14">
          <h2 className="text-2xl font-bold leading-tight md:text-3xl">Controls cheat sheet</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            Print this. Stick it next to your monitor for the first three matches. By the fourth you
            will not need it.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {controls.map((c) => (
              <div key={c.key} className="rounded-md border border-[#D8CFC6] bg-white p-4">
                <kbd className="rounded-sm bg-[#ff8fb3] px-2 py-1 font-mono text-xs font-bold text-white">
                  {c.key}
                </kbd>
                <p className="mt-2 text-xs leading-5 text-[#4C3B35]">{c.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <h2 className="text-2xl font-bold leading-tight md:text-3xl">Roles: what you do as a Hider vs. Seeker</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            Each round assigns you one of two roles. Hiders paint and freeze; Seekers scan and find.
            The role balance is 70/30 in Classic — 7 hiders, 3 seekers for an 8-player lobby.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {roles.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-6">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${r.color}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold">{r.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#4C3B35]">{r.body}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4C3B35]">
                    {r.tips.map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7D6D69]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beginner video series */}
      <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
        <div className="container py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">
            Beginner video series
          </p>
          <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
            Watch the guide series here and stay on this page
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            The player is embedded as a playlist, so it can move to the next
            guide automatically without sending you away from the site.
          </p>
          <div className="mt-8 overflow-hidden rounded-md border border-[#efc8d3] bg-gradient-to-br from-[#fff7c8] via-[#ffd2e1] to-[#cdefff]">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="relative aspect-video bg-[#eef8ff]">
                <iframe
                  src={beginnerVideoSeries.src}
                  title={beginnerVideoSeries.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <aside className="border-t border-[#D8CFC6] bg-[#F6F0EA] p-5 lg:border-l lg:border-t-0">
                <h3 className="text-base font-semibold text-[#29211D]">{beginnerVideoSeries.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4C3B35]">
                  Three things to notice while the playlist runs:
                </p>
                <ol className="mt-4 space-y-3 text-sm leading-6 text-[#4C3B35]">
                  {beginnerVideoSeries.steps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff8fb3] text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* First match timeline */}
      <section className="border-b border-[#D8CFC6] bg-gradient-to-br from-[#9de7dc] via-[#cdefff] to-[#d9b7ff] text-[#29211D]">
        <div className="container py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ff6f9a]">First match</p>
          <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
            What a single round actually looks like, minute by minute
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            A 5-minute walkthrough of one Classic Hide &amp; Seek round. Use this to set expectations
            before your first public matchmaking queue.
          </p>
          <ol className="mt-8 space-y-4">
            {firstMatch.map((m, i) => (
              <li key={m.label} className="flex gap-4 rounded-md border border-white/70 bg-white/70 p-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff8fb3] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-sm bg-white/10 px-2 py-0.5 font-mono font-semibold">
                      {m.time}
                    </span>
                    <span className="font-semibold">{m.label}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-white/80">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pro tips */}
      <section className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">Pro tips</p>
          <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
            Six tips that instantly improve your game
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {proTips.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-5">
                  <Icon className="h-5 w-5 text-[#7D6D69]" />
                  <h3 className="mt-3 text-base font-semibold text-[#29211D]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#4C3B35]">{t.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 Rookie Mistakes */}
      <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
        <div className="container py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#AA776E]">Rookie mistakes</p>
          <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
            Don&apos;t make these 8 mistakes — they get you caught in 30 seconds
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {mistakes.map((m, i) => (
              <div key={i} className="rounded-md border border-[#D8CFC6] bg-white p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[#AA776E]">
                  <XCircle className="h-4 w-4" />
                  The mistake
                </div>
                <p className="text-sm leading-6 text-[#4C3B35] line-through opacity-70">{m.bad}</p>
                <div className="my-3 border-t border-dashed border-[#D8CFC6]" />
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#7D6D69]">
                  <CheckCircle2 className="h-4 w-4" />
                  What to do instead
                </div>
                <p className="text-sm leading-6 text-[#29211D]">{m.good}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7D6D69]">FAQ</p>
          <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
            New player questions, answered
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-[#29211D]">
                  {f.q}
                  <span className="ml-auto text-[#7D6D69] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-[#4C3B35]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to multiplayer + CTA */}
      <section className="bg-[#F6F0EA]">
        <div className="container flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ff8fb3] text-white">
              <PartyPopper className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#29211D]">Ready to actually queue up?</h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-[#4C3B35]">
                Now that you know the controls and the round structure, read the multiplayer playbook
                for how to get a friend group — local, long-distance, or matchmaking — into the
                same lobby.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={atHowToPlay}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[#ff6f9a] px-4 text-sm font-semibold text-white transition hover:bg-[#e95a88]"
            >
              <Sparkles className="h-4 w-4" />
              Multiplayer playbook
            </a>
            <a
              href={backHref}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#29211D] bg-white px-4 text-sm font-semibold text-[#29211D] transition hover:border-[#7D6D69] hover:text-[#7D6D69]"
            >
              Play online
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
