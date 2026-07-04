import {
  homeProblemCards,
  toolsRadarCards,
} from '@/shared/blocks/meccha/problem-guides';

type Pair = [string, string];

type ProblemCopy = {
  title: string;
  body: string;
};

type ToolCopy = {
  title: string;
  risk: string;
  body: string;
};

export type HomeCopy = {
  eyebrow: string;
  title: string;
  description: string;
  startPlaying: string;
  controlsCta: string;
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  controlsEyebrow: string;
  controlsTitle: string;
  controlsBody: string;
  mapsCta: string;
  modesEyebrow: string;
  modesTitle: string;
  assistantEyebrow: string;
  assistantTitle: string;
  assistantBody: string;
  priceEyebrow: string;
  priceNote: string;
  checkoutLabel: string;
  seeInside: string;
  routesEyebrow: string;
  routesTitle: string;
  routesBody: string;
  faqTitle: string;
  disclaimer: string;
  modes: Pair[];
  controls: Pair[];
  faqs: Pair[];
  problemCards: Record<string, ProblemCopy>;
  toolCards: Record<string, ToolCopy>;
};

const en: HomeCopy = {
  eyebrow: 'Free browser game · no download',
  title: 'Meccha Chameleon Game — Play Mecha Chameleon Free',
  description:
    'A game-first hub for Mecha Chameleon, Mech Chameleon, and Meccha Chameleon searches. Start the browser game first, then use controls, modes, and route ideas without leaving the page.',
  startPlaying: 'Start playing',
  controlsCta: 'Controls',
  problemEyebrow: 'Player problem solver',
  problemTitle:
    'Can I play, how do I start, why is it laggy, and how do I paint better?',
  problemBody:
    'The first screen still lets players play immediately. Below are the common Steam-review pain points turned into practical guides. Deep map atlases stay on mecchachameleon.art.',
  controlsEyebrow: 'Quick controls',
  controlsTitle: 'Move first, hide second.',
  controlsBody:
    'Keep the control sheet right under the game so players can start without opening a separate guide.',
  mapsCta: 'Need full maps? Visit .art',
  modesEyebrow: 'Game modes',
  modesTitle: 'Make .games feel like the actual play entry.',
  assistantEyebrow: 'Play Kit for players',
  assistantTitle: 'Start faster, hide better, and keep friend rooms moving.',
  assistantBody:
    'Keep the useful parts together: fast-start checklist, lobby fixes, FPS settings, camo practice, and route cards.',
  priceEyebrow: 'One-time price',
  priceNote: 'one-time',
  checkoutLabel: 'Get Play Kit - $7',
  seeInside: 'See what is inside',
  routesEyebrow: 'Fast routes',
  routesTitle: 'Pick a map route without reading a full guide.',
  routesBody:
    'This page keeps a light route preview for gameplay. The full 50-spot atlas lives on mecchachameleon.art.',
  faqTitle: 'Game-first FAQ',
  disclaimer:
    'Disclaimer: this is an unofficial fan-made game hub. It is not affiliated with LEMORION and does not claim any official partnership.',
  modes: [
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
  ],
  controls: [
    ['Move', 'WASD / joystick'],
    ['Aim', 'Mouse / touch drag'],
    ['Paint', 'Hold main action'],
    ['Sample color', 'Eyedropper / right action'],
    ['Freeze', 'Pose lock'],
    ['Search', 'Flashlight scan'],
  ],
  faqs: [
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
  ],
  problemCards: {},
  toolCards: {},
};

const zh: HomeCopy = {
  ...en,
  eyebrow: '免费浏览器游戏 · 无需下载',
  title: 'Mecha Chameleon Game 免费在线玩',
  description:
    '面向 Mecha Chameleon / Meccha Chameleon 游戏搜索意图的入口。打开页面就能先玩，再看操作、模式、联机、FPS 和地图路线。',
  startPlaying: '开始游戏',
  controlsCta: '查看操作',
  problemEyebrow: '实用开局中心',
  problemTitle: '能不能玩、怎么玩、怎么不卡、怎么涂得像。',
  problemBody:
    '首屏让玩家直接开玩；下面把常见问题整理成实用解决方案。深度地图图鉴继续放在 mecchachameleon.art。',
  controlsEyebrow: '快速操作',
  controlsTitle: '先会动，再开始藏。',
  controlsBody: '把操作放在游戏下方，用户不用跳到攻略站也能立刻开局。',
  mapsCta: '需要完整地图？去 .art',
  modesEyebrow: '游戏模式',
  modesTitle: '让 .games 成为真正的游戏入口。',
  assistantEyebrow: '玩家 Play Kit',
  assistantTitle: '更快开局、更稳隐藏、更顺畅联机。',
  assistantBody:
    '把开局清单、联机修复、FPS 设置、伪装练习和路线卡放在一个包里，减少找资料的时间。',
  priceEyebrow: '一次性价格',
  priceNote: '一次性',
  checkoutLabel: '获取 Play Kit - $7',
  seeInside: '看看里面有什么',
  routesEyebrow: '快速路线',
  routesTitle: '不用读完整攻略，也能先选一张图。',
  routesBody:
    '这里保留少量地图预览服务游戏体验；完整 50 个隐藏点图鉴放在 mecchachameleon.art。',
  faqTitle: '常见问题',
  disclaimer:
    '免责声明：本站为粉丝制作的非官方网站，不隶属于 LEMORION，也不代表任何官方合作。',
  modes: [
    ['经典试玩', '直接进入躲猫猫循环，先感受涂色、隐藏和搜寻的核心节奏。'],
    ['练习路线', '一边玩上方窗口，一边看下方地图预览，提前练习真实对局的隐藏路线。'],
    ['速通热身', '快速开始，选一张图，只练一条稳定隐藏路线，不先读长攻略。'],
    ['朋友组队', '把页面发给朋友，开自定义房间，大家加入时也能看到操作说明。'],
  ],
  controls: [
    ['移动', 'WASD / 摇杆'],
    ['瞄准', '鼠标 / 触控拖动'],
    ['涂装', '长按主要动作'],
    ['取色', '吸管 / 右键动作'],
    ['定格', '姿势锁定'],
    ['搜寻', '手电扫描'],
  ],
  faqs: [
    ['这个站和 mecchachameleon.art 一样吗？', '不一样。mechachameleon.games 是纯游戏入口：在线玩、操作、模式和快速路线；mecchachameleon.art 更偏地图攻略和完整资料。'],
    ['可以免费在线玩 Mecha Chameleon 吗？', '可以。用上方浏览器窗口快速试玩，无需下载；之后再看操作说明和地图路线，为完整版 PC 对局做准备。'],
    ['为什么页面里有 Mecha、Mech、Meccha 几种写法？', '玩家会用多种拼法搜索。原游戏名是 Meccha Chameleon，这个 .games 站同时覆盖 Mecha Chameleon 和 Mech Chameleon 的游戏搜索意图。'],
    ['这是官网吗？', '不是。本站是粉丝制作的游戏入口，不隶属于 LEMORION，也不代表官方合作关系。'],
  ],
  problemCards: {
    'Play online': { title: '在线玩', body: '把浏览器游戏放在第一位。先进入游戏，再看攻略。' },
    'Can’t join?': { title: '进不去房间？', body: 'Signing in 卡住、进 lobby 失败、掉线，先检查 DNS、VPN、IPv6 和防火墙。' },
    'Playing with friends?': { title: '和朋友一起玩？', body: '私房、房间码、服务器标签、语音和创意工坊地图准备。' },
    'Low FPS?': { title: 'FPS 低？', body: '安全的画面设置、卡顿修复、录制设置和风险提醒。' },
    'Bad at painting?': { title: '涂色不准？', body: '练习取色、刷子限制、阴影、高光和姿势纪律。' },
    'Get Play Kit': { title: '获取 Play Kit', body: '一次性购买的小工具包，帮你更快开局、修复联机、提前准备路线卡。' },
    'Public lobby problems?': { title: '公房问题？', body: '被踢、乱射、旁观者报点、作弊和私房规则建议。' },
    'Need maps?': { title: '需要地图？', body: '完整隐藏点图鉴和 50 张地图截图在 mecchachameleon.art。' },
  },
  toolCards: {
    '10-min start': { title: '10 分钟开局', risk: '更快开始', body: '操作、涂色循环、隐藏者/搜寻者基础和首局错误清单。' },
    'Lobby fix': { title: '联机修复', risk: '少等一点', body: '私房、服务器标签、房间码和朋友加入前的地图检查。' },
    'FPS boost': { title: '提升 FPS', risk: '更流畅', body: '低配、直播、录制和稳定帧率的可回退设置。' },
    'Camo practice': { title: '伪装练习', risk: '藏得更好', body: '颜色匹配、阴影调整和开局前路线卡准备。' },
  },
};

const vi: HomeCopy = {
  ...zh,
  eyebrow: 'Game trình duyệt miễn phí · không cần tải',
  title: 'Mecha Chameleon Game - chơi online miễn phí',
  description:
    'Trang vào chơi cho người tìm Mecha Chameleon, Mech Chameleon và Meccha Chameleon tại Việt Nam. Mở là chơi ngay trên trình duyệt, không cần tải.',
  startPlaying: 'Chơi ngay',
  controlsCta: 'Phím điều khiển',
  problemEyebrow: 'Trung tâm vào game',
  problemTitle: 'Chơi được không, bắt đầu thế nào, vì sao lag và sơn sao cho giống?',
  problemBody:
    'Màn đầu vẫn để người chơi vào game ngay. Phần dưới biến các vấn đề hay gặp thành hướng dẫn thực dụng.',
  controlsEyebrow: 'Điều khiển nhanh',
  controlsTitle: 'Biết di chuyển trước, rồi hãy trốn.',
  controlsBody:
    'Đặt phím điều khiển ngay dưới game để người chơi vào trận mà không cần mở trang hướng dẫn khác.',
  mapsCta: 'Cần đủ bản đồ? Xem .art',
  modesEyebrow: 'Chế độ chơi',
  modesTitle: 'Để .games thật sự là nơi vào chơi.',
  assistantEyebrow: 'Play Kit cho người chơi',
  assistantTitle: 'Vào trận nhanh hơn, trốn tốt hơn, chơi cùng bạn bè mượt hơn.',
  assistantBody:
    'Giữ checklist vào nhanh, sửa lobby, FPS settings, luyện camo và route card trong một gói gọn.',
  priceEyebrow: 'Giá một lần',
  priceNote: 'mua một lần',
  checkoutLabel: 'Nhận Play Kit - $7',
  seeInside: 'Xem bên trong có gì',
  routesEyebrow: 'Đường trốn nhanh',
  routesTitle: 'Chọn một map trước, không cần đọc toàn bộ hướng dẫn.',
  routesBody:
    'Trang này giữ phần xem nhanh bản đồ để phục vụ trải nghiệm chơi. Atlas đầy đủ 50 điểm trốn nằm trên mecchachameleon.art.',
  faqTitle: 'Câu hỏi thường gặp',
  disclaimer:
    'Tuyên bố miễn trừ: đây là hub game do fan làm, không thuộc LEMORION và không tuyên bố hợp tác chính thức.',
  modes: [
    ['Chơi nhanh', 'Vào game ngay, làm quen vòng lặp trốn tìm, sơn màu và đứng yên đúng lúc.'],
    ['Luyện đường trốn', 'Vừa chơi trong khung trình duyệt, vừa xem bản đồ bên dưới để tập vị trí trước khi vào trận thật.'],
    ['Khởi động tăng tốc', 'Bắt đầu nhanh, chọn một map và tập một đường trốn ổn định thay vì đọc hướng dẫn dài.'],
    ['Phòng cùng bạn bè', 'Gửi trang này cho bạn, mở Custom Room và giữ phím điều khiển ngay trước mắt khi mọi người vào phòng.'],
  ],
  controls: [
    ['Di chuyển', 'WASD / joystick'],
    ['Ngắm', 'Chuột / kéo cảm ứng'],
    ['Sơn màu', 'Giữ nút hành động chính'],
    ['Lấy mẫu màu', 'Eyedropper / thao tác phải'],
    ['Đứng yên', 'Khóa tư thế'],
    ['Tìm kiếm', 'Quét đèn pin'],
  ],
  faqs: [
    ['Trang này có giống mecchachameleon.art không?', 'Không. mechachameleon.games là trang vào chơi trước: khung chơi, phím điều khiển, chế độ và đường trốn nhanh. mecchachameleon.art là nơi xem hướng dẫn sâu và atlas bản đồ.'],
    ['Có thể chơi Mecha Chameleon online miễn phí không?', 'Có. Dùng khung game trên trình duyệt để chơi nhanh, không cần tải; sau đó xem phím điều khiển và đường map để chuẩn bị cho trận PC.'],
    ['Vì sao có Mecha, Mech và Meccha?', 'Người chơi tìm cả ba cách viết. Tên gốc là Meccha Chameleon; trang .games cũng phục vụ nhu cầu tìm Mecha Chameleon và Mech Chameleon game.'],
    ['Đây có phải trang chính thức không?', 'Không. Đây là hub do fan làm, không thuộc LEMORION và không đại diện cho hợp tác chính thức.'],
  ],
  problemCards: {
    'Play online': { title: 'Chơi online', body: 'Giữ game trình duyệt là hành động đầu tiên. Vào chơi trước, đọc hướng dẫn sau.' },
    'Can’t join?': { title: 'Không vào được phòng?', body: 'Kẹt signing in, lỗi vào lobby, mất kết nối phòng, kiểm tra DNS/VPN/IPv6.' },
    'Playing with friends?': { title: 'Chơi cùng bạn bè?', body: 'Phòng riêng, mã phòng, server tag, cài voice và chuẩn bị workshop map.' },
    'Low FPS?': { title: 'FPS thấp?', body: 'Thiết lập hiệu năng an toàn, sửa giật lag, mẹo OBS và cảnh báo booster rủi ro.' },
    'Bad at painting?': { title: 'Sơn màu chưa khớp?', body: 'Bù màu eyedropper, giới hạn brush, bóng đổ, highlight và kỷ luật tư thế.' },
    'Get Play Kit': { title: 'Nhận Play Kit', body: 'Bộ gọn một lần mua cho người muốn vào trận nhanh hơn, sửa lobby mượt hơn, và có sẵn route card.' },
    'Public lobby problems?': { title: 'Lobby công khai rắc rối?', body: 'Bị kick, bắn bừa, spectator báo vị trí, cheat và quy tắc phòng riêng.' },
    'Need maps?': { title: 'Cần bản đồ?', body: 'Atlas điểm trốn đầy đủ và 50 ảnh map nằm trên mecchachameleon.art.' },
  },
  toolCards: {
    '10-min start': { title: 'Bắt đầu 10 phút', risk: 'Chơi nhanh hơn', body: 'Điều khiển, vòng lặp sơn màu, hider/seeker basics và lỗi vòng đầu trong một checklist.' },
    'Lobby fix': { title: 'Sửa lobby', risk: 'Ít chờ hơn', body: 'Private room, server tag, room code và kiểm tra workshop map trước khi bạn bè vào.' },
    'FPS boost': { title: 'Tăng FPS', risk: 'Mượt hơn', body: 'Thiết lập có thể hoàn tác cho máy yếu, stream, record và frame pacing ổn định.' },
    'Camo practice': { title: 'Luyện camo', risk: 'Trốn tốt hơn', body: 'Bài luyện khớp màu, chỉnh bóng và chuẩn bị route card trước khi vào round.' },
  },
};

const localized: Record<string, Partial<HomeCopy>> = {
  es: {
    eyebrow: 'Juego gratis en navegador · sin descarga',
    title: 'Mecha Chameleon Game - juega gratis online',
    description: 'Entra a jugar Mecha Chameleon en el navegador, sin descarga. Empieza rápido y usa controles, rutas, amigos, FPS y camuflaje sin salir de la página.',
    startPlaying: 'Jugar ahora', controlsCta: 'Controles',
    problemEyebrow: 'Centro para jugadores', problemTitle: '¿Puedo jugar, cómo empiezo, por qué va lento y cómo pinto mejor?',
    problemBody: 'La primera pantalla te deja jugar de inmediato. Después tienes soluciones prácticas para conexión, amigos, FPS, pintura y lobbies públicos.',
    controlsEyebrow: 'Controles rápidos', controlsTitle: 'Muévete primero, escóndete después.',
    controlsBody: 'Los controles están justo debajo del juego para empezar sin abrir otra guía.', mapsCta: '¿Mapas completos? Ver .art',
    modesEyebrow: 'Modos de juego', modesTitle: 'Que .games se sienta como la entrada real al juego.',
    assistantEyebrow: 'Play Kit para jugadores', assistantTitle: 'Empieza más rápido, escóndete mejor y mantiene las salas con amigos funcionando.',
    assistantBody: 'Checklist de inicio, arreglos de lobby, ajustes FPS, práctica de camuflaje y tarjetas de ruta en un solo paquete.',
    priceEyebrow: 'Precio único', priceNote: 'pago único', checkoutLabel: 'Obtener Play Kit - $7', seeInside: 'Ver qué incluye',
    routesEyebrow: 'Rutas rápidas', routesTitle: 'Elige una ruta de mapa sin leer una guía completa.',
    routesBody: 'Esta página mantiene una vista rápida para jugar. El atlas completo de 50 escondites está en mecchachameleon.art.',
    faqTitle: 'FAQ para jugar', disclaimer: 'Aviso: este es un hub fan no oficial. No está afiliado a LEMORION ni afirma colaboración oficial.',
  },
  pt: {
    eyebrow: 'Jogo grátis no navegador · sem download',
    title: 'Mecha Chameleon Game - jogue online grátis',
    description: 'Jogue Mecha Chameleon no navegador, sem download. Comece rápido e use controles, rotas, amigos, FPS e camuflagem na mesma página.',
    startPlaying: 'Jogar agora', controlsCta: 'Controles',
    problemEyebrow: 'Central do jogador', problemTitle: 'Dá para jogar, como começar, por que trava e como pintar melhor?',
    problemBody: 'A primeira tela deixa você jogar imediatamente. Depois vêm guias práticos para conexão, amigos, FPS, pintura e lobbies públicos.',
    controlsEyebrow: 'Controles rápidos', controlsTitle: 'Mova primeiro, esconda depois.',
    controlsBody: 'A folha de controles fica logo abaixo do jogo para começar sem abrir outra guia.', mapsCta: 'Mapas completos? Ver .art',
    modesEyebrow: 'Modos de jogo', modesTitle: 'Faça o .games parecer a entrada real do jogo.',
    assistantEyebrow: 'Play Kit para jogadores', assistantTitle: 'Comece mais rápido, esconda melhor e mantenha salas com amigos fluindo.',
    assistantBody: 'Checklist de início, correções de lobby, ajustes de FPS, treino de camuflagem e cartões de rota juntos.',
    priceEyebrow: 'Preço único', priceNote: 'pagamento único', checkoutLabel: 'Pegar Play Kit - $7', seeInside: 'Ver o que vem dentro',
    routesEyebrow: 'Rotas rápidas', routesTitle: 'Escolha uma rota de mapa sem ler um guia completo.',
    routesBody: 'Esta página mantém uma prévia leve para jogar. O atlas completo com 50 esconderijos fica em mecchachameleon.art.',
    faqTitle: 'FAQ para jogar', disclaimer: 'Aviso: este é um hub de fãs não oficial. Não é afiliado à LEMORION nem reivindica parceria oficial.',
  },
  fr: {
    eyebrow: 'Jeu navigateur gratuit · sans téléchargement',
    title: 'Mecha Chameleon Game - jouer gratuitement en ligne',
    description: 'Joue à Mecha Chameleon dans le navigateur, sans téléchargement. Lance la partie puis garde contrôles, amis, FPS, camouflage et routes au même endroit.',
    startPlaying: 'Jouer maintenant', controlsCta: 'Contrôles',
    problemEyebrow: 'Aide joueur', problemTitle: 'Puis-je jouer, comment commencer, pourquoi ça lag et comment mieux peindre ?',
    problemBody: 'Le premier écran permet de jouer tout de suite. Ensuite, les problèmes fréquents deviennent des guides pratiques.',
    controlsEyebrow: 'Contrôles rapides', controlsTitle: 'Bouge d’abord, cache-toi ensuite.',
    controlsBody: 'Les contrôles restent sous le jeu pour commencer sans ouvrir une autre page.', mapsCta: 'Cartes complètes ? Voir .art',
    modesEyebrow: 'Modes de jeu', modesTitle: '.games doit être une vraie porte d’entrée pour jouer.',
    assistantEyebrow: 'Play Kit pour joueurs', assistantTitle: 'Commence plus vite, cache-toi mieux et garde les salles d’amis fluides.',
    assistantBody: 'Checklist de départ, corrections de lobby, réglages FPS, entraînement camo et cartes de route réunis.',
    priceEyebrow: 'Prix unique', priceNote: 'paiement unique', checkoutLabel: 'Obtenir le Play Kit - $7', seeInside: 'Voir le contenu',
    routesEyebrow: 'Routes rapides', routesTitle: 'Choisis une route de carte sans lire un guide complet.',
    routesBody: 'Cette page garde un aperçu léger pour jouer. L’atlas complet de 50 cachettes est sur mecchachameleon.art.',
    faqTitle: 'FAQ orientée jeu', disclaimer: 'Avertissement : ce hub de fans non officiel n’est pas affilié à LEMORION et ne revendique aucun partenariat officiel.',
  },
  de: {
    eyebrow: 'Kostenloses Browsergame · kein Download',
    title: 'Mecha Chameleon Game - kostenlos online spielen',
    description: 'Spiele Mecha Chameleon direkt im Browser ohne Download. Starte schnell und nutze Steuerung, Freunde, FPS, Tarnung und Routen auf einer Seite.',
    startPlaying: 'Jetzt spielen', controlsCta: 'Steuerung',
    problemEyebrow: 'Spieler-Hilfe', problemTitle: 'Kann ich spielen, wie starte ich, warum laggt es und wie male ich besser?',
    problemBody: 'Der erste Bildschirm lässt dich sofort spielen. Darunter werden typische Probleme zu praktischen Guides.',
    controlsEyebrow: 'Schnelle Steuerung', controlsTitle: 'Erst bewegen, dann verstecken.',
    controlsBody: 'Die Steuerung steht direkt unter dem Spiel, damit du ohne zweite Anleitung starten kannst.', mapsCta: 'Alle Karten? Zu .art',
    modesEyebrow: 'Spielmodi', modesTitle: '.games soll sich wie der echte Spieleinstieg anfühlen.',
    assistantEyebrow: 'Play Kit für Spieler', assistantTitle: 'Schneller starten, besser verstecken und Freundesräume am Laufen halten.',
    assistantBody: 'Start-Checklist, Lobby-Fixes, FPS-Settings, Camo-Training und Routenkarten in einem Paket.',
    priceEyebrow: 'Einmalpreis', priceNote: 'einmalig', checkoutLabel: 'Play Kit holen - $7', seeInside: 'Inhalt ansehen',
    routesEyebrow: 'Schnelle Routen', routesTitle: 'Wähle eine Kartenroute, ohne einen kompletten Guide zu lesen.',
    routesBody: 'Diese Seite zeigt eine leichte Routenvorschau fürs Spielen. Der volle Atlas mit 50 Verstecken liegt auf mecchachameleon.art.',
    faqTitle: 'Spiel-FAQ', disclaimer: 'Hinweis: Dies ist ein inoffizieller Fan-Hub, nicht mit LEMORION verbunden und ohne offiziellen Partnerschaftsanspruch.',
  },
  nl: {
    eyebrow: 'Gratis browsergame · geen download',
    title: 'Mecha Chameleon Game - gratis online spelen',
    description: 'Speel Mecha Chameleon direct in je browser zonder download. Start snel en gebruik controls, vrienden, FPS, camo en routes op dezelfde pagina.',
    startPlaying: 'Nu spelen', controlsCta: 'Besturing',
    problemEyebrow: 'Spelershulp', problemTitle: 'Kan ik spelen, hoe start ik, waarom hapert het en hoe schilder ik beter?',
    problemBody: 'Het eerste scherm laat je meteen spelen. Daaronder staan praktische oplossingen voor verbinding, vrienden, FPS, kleur en openbare lobbies.',
    controlsEyebrow: 'Snelle besturing', controlsTitle: 'Eerst bewegen, daarna verstoppen.',
    controlsBody: 'De besturing staat direct onder het spel, zodat je geen aparte gids nodig hebt.', mapsCta: 'Alle maps? Naar .art',
    modesEyebrow: 'Spelmodi', modesTitle: 'Laat .games voelen als de echte speel-ingang.',
    assistantEyebrow: 'Play Kit voor spelers', assistantTitle: 'Sneller starten, beter verstoppen en vriendenkamers soepel houden.',
    assistantBody: 'Startchecklist, lobbyfixes, FPS-instellingen, camotraining en routekaarten bij elkaar.',
    priceEyebrow: 'Eenmalige prijs', priceNote: 'eenmalig', checkoutLabel: 'Play Kit krijgen - $7', seeInside: 'Bekijk de inhoud',
    routesEyebrow: 'Snelle routes', routesTitle: 'Kies een maproute zonder een volledige gids te lezen.',
    routesBody: 'Deze pagina houdt een lichte routepreview voor gameplay. De volledige atlas met 50 verstopplekken staat op mecchachameleon.art.',
    faqTitle: 'Game-first FAQ', disclaimer: 'Disclaimer: dit is een onofficiële fanhub, niet verbonden aan LEMORION en zonder officiële samenwerking.',
  },
  ja: {
    eyebrow: '無料ブラウザゲーム · ダウンロード不要',
    title: 'Mecha Chameleon Game - 無料でオンラインプレイ',
    description: 'Mecha Chameleonをブラウザで無料プレイ。ダウンロード不要で、操作、友達との部屋、FPS、迷彩、ルートを同じページで確認できます。',
    startPlaying: '今すぐプレイ', controlsCta: '操作を見る',
    problemEyebrow: 'プレイヤー向けヘルプ', problemTitle: '遊べる？始め方は？重い時は？どう塗れば隠れやすい？',
    problemBody: '最初の画面でそのまま遊べます。下には接続、友達、FPS、塗り、公開ロビーの実用ガイドがあります。',
    controlsEyebrow: 'クイック操作', controlsTitle: 'まず動く。次に隠れる。',
    controlsBody: 'ゲームのすぐ下に操作表を置き、別ガイドを開かずに始められるようにしています。', mapsCta: '全マップは .art へ',
    modesEyebrow: 'ゲームモード', modesTitle: '.games を本当のプレイ入口にする。',
    assistantEyebrow: 'プレイヤー用 Play Kit', assistantTitle: 'より速く開始し、より上手く隠れ、友達部屋をスムーズに。',
    assistantBody: '開始チェックリスト、ロビー修正、FPS設定、迷彩練習、ルートカードをまとめています。',
    priceEyebrow: '買い切り価格', priceNote: '買い切り', checkoutLabel: 'Play Kit を入手 - $7', seeInside: '内容を見る',
    routesEyebrow: 'クイックルート', routesTitle: '長いガイドを読まずにマップルートを選ぶ。',
    routesBody: 'このページには軽いルートプレビューを置いています。50か所の完全な隠れ場所 atlas は mecchachameleon.art にあります。',
    faqTitle: 'プレイ用 FAQ', disclaimer: '免責事項：これは非公式のファン製ゲームハブです。LEMORIONとは提携しておらず、公式協力を主張しません。',
  },
  ko: {
    eyebrow: '무료 브라우저 게임 · 다운로드 없음',
    title: 'Mecha Chameleon Game - 무료 온라인 플레이',
    description: '다운로드 없이 브라우저에서 Mecha Chameleon을 플레이하세요. 조작, 친구 방, FPS, 위장, 루트를 한 페이지에서 확인할 수 있습니다.',
    startPlaying: '지금 플레이', controlsCta: '조작법',
    problemEyebrow: '플레이어 문제 해결', problemTitle: '플레이할 수 있나, 어떻게 시작하나, 왜 끊기나, 어떻게 더 잘 칠하나?',
    problemBody: '첫 화면에서 바로 플레이할 수 있습니다. 아래에는 연결, 친구, FPS, 색칠, 공개 로비 문제를 실전 가이드로 정리했습니다.',
    controlsEyebrow: '빠른 조작', controlsTitle: '먼저 움직이고, 그다음 숨으세요.',
    controlsBody: '게임 바로 아래에 조작표를 두어 별도 가이드 없이 시작할 수 있습니다.', mapsCta: '전체 맵은 .art',
    modesEyebrow: '게임 모드', modesTitle: '.games를 실제 플레이 입구처럼 만듭니다.',
    assistantEyebrow: '플레이어용 Play Kit', assistantTitle: '더 빨리 시작하고, 더 잘 숨고, 친구 방을 부드럽게 유지하세요.',
    assistantBody: '빠른 시작 체크리스트, 로비 수정, FPS 설정, 위장 연습, 루트 카드를 한곳에 모았습니다.',
    priceEyebrow: '일회성 가격', priceNote: '1회 결제', checkoutLabel: 'Play Kit 받기 - $7', seeInside: '내용 보기',
    routesEyebrow: '빠른 루트', routesTitle: '긴 가이드를 읽지 않고 맵 루트를 고르세요.',
    routesBody: '이 페이지에는 플레이용 가벼운 루트 미리보기가 있습니다. 50개 은신처 전체 atlas는 mecchachameleon.art에 있습니다.',
    faqTitle: '게임 우선 FAQ', disclaimer: '면책: 이 사이트는 비공식 팬 제작 게임 허브이며 LEMORION과 제휴하지 않았고 공식 파트너십을 주장하지 않습니다.',
  },
  th: {
    eyebrow: 'เกมเล่นบนเบราว์เซอร์ฟรี · ไม่ต้องดาวน์โหลด',
    title: 'Mecha Chameleon Game - เล่นออนไลน์ฟรี',
    description: 'เล่น Mecha Chameleon บนเบราว์เซอร์ได้ทันที ไม่ต้องดาวน์โหลด พร้อมดูปุ่มควบคุม ห้องกับเพื่อน FPS การพรางตัว และเส้นทางในหน้าเดียว',
    startPlaying: 'เล่นเลย', controlsCta: 'ปุ่มควบคุม',
    problemEyebrow: 'ศูนย์ช่วยผู้เล่น', problemTitle: 'เล่นได้ไหม เริ่มยังไง ทำไมแลค และระบายสียังไงให้เนียน?',
    problemBody: 'หน้าจอแรกให้เล่นได้ทันที ด้านล่างคือคำแนะนำแก้ปัญหาเชื่อมต่อ เล่นกับเพื่อน FPS สี และล็อบบี้สาธารณะ',
    controlsEyebrow: 'ควบคุมอย่างรวดเร็ว', controlsTitle: 'ขยับให้เป็นก่อน แล้วค่อยซ่อน',
    controlsBody: 'วางปุ่มควบคุมไว้ใต้เกมเพื่อเริ่มได้โดยไม่ต้องเปิดคู่มือหน้าอื่น', mapsCta: 'ต้องการแผนที่ครบ? ไป .art',
    modesEyebrow: 'โหมดเกม', modesTitle: 'ทำให้ .games เป็นทางเข้าเล่นจริง',
    assistantEyebrow: 'Play Kit สำหรับผู้เล่น', assistantTitle: 'เริ่มเร็วขึ้น ซ่อนได้ดีขึ้น และเล่นห้องเพื่อนได้ลื่นขึ้น',
    assistantBody: 'รวมเช็กลิสต์เริ่มเกม การแก้ล็อบบี้ ตั้งค่า FPS ฝึกพรางตัว และการ์ดเส้นทางไว้ในชุดเดียว',
    priceEyebrow: 'จ่ายครั้งเดียว', priceNote: 'ครั้งเดียว', checkoutLabel: 'รับ Play Kit - $7', seeInside: 'ดูว่ามีอะไรบ้าง',
    routesEyebrow: 'เส้นทางเร็ว', routesTitle: 'เลือกเส้นทางในแผนที่โดยไม่ต้องอ่านคู่มือยาว',
    routesBody: 'หน้านี้มีตัวอย่างเส้นทางแบบสั้นสำหรับการเล่น ส่วน atlas จุดซ่อน 50 จุดอยู่ที่ mecchachameleon.art',
    faqTitle: 'FAQ สำหรับเล่นเกม', disclaimer: 'หมายเหตุ: นี่คือฮับแฟนเมดที่ไม่เป็นทางการ ไม่ได้เกี่ยวข้องกับ LEMORION และไม่ได้อ้างความร่วมมืออย่างเป็นทางการ',
  },
  ru: {
    eyebrow: 'Бесплатная браузерная игра · без загрузки',
    title: 'Mecha Chameleon Game - играть онлайн бесплатно',
    description: 'Играй в Mecha Chameleon прямо в браузере без загрузки. Быстрый старт, управление, комнаты с друзьями, FPS, камуфляж и маршруты на одной странице.',
    startPlaying: 'Играть сейчас', controlsCta: 'Управление',
    problemEyebrow: 'Помощь игроку', problemTitle: 'Можно ли играть, как начать, почему лагает и как лучше краситься?',
    problemBody: 'Первый экран сразу запускает игру. Ниже собраны практичные решения для подключения, друзей, FPS, покраски и публичных лобби.',
    controlsEyebrow: 'Быстрое управление', controlsTitle: 'Сначала двигайся, потом прячься.',
    controlsBody: 'Управление находится прямо под игрой, чтобы начать без отдельного гайда.', mapsCta: 'Все карты? На .art',
    modesEyebrow: 'Режимы игры', modesTitle: '.games должен быть настоящим входом в игру.',
    assistantEyebrow: 'Play Kit для игроков', assistantTitle: 'Быстрее стартуй, лучше прячься и держи комнаты с друзьями стабильными.',
    assistantBody: 'Чеклист старта, исправления лобби, FPS-настройки, тренировка камуфляжа и карточки маршрутов вместе.',
    priceEyebrow: 'Разовая цена', priceNote: 'один платеж', checkoutLabel: 'Получить Play Kit - $7', seeInside: 'Что внутри',
    routesEyebrow: 'Быстрые маршруты', routesTitle: 'Выбери маршрут карты без чтения полного гайда.',
    routesBody: 'Здесь есть легкий предпросмотр маршрутов. Полный атлас 50 мест для укрытия находится на mecchachameleon.art.',
    faqTitle: 'FAQ для игры', disclaimer: 'Отказ от ответственности: это неофициальный фанатский хаб, не связанный с LEMORION и не заявляющий официальное партнерство.',
  },
  ar: {
    eyebrow: 'لعبة متصفح مجانية · بدون تحميل',
    title: 'Mecha Chameleon Game - العب مجانًا على الإنترنت',
    description: 'العب Mecha Chameleon مباشرة في المتصفح بدون تحميل. ابدأ بسرعة واستخدم التحكم، غرف الأصدقاء، FPS، التمويه والمسارات في صفحة واحدة.',
    startPlaying: 'العب الآن', controlsCta: 'التحكم',
    problemEyebrow: 'مساعدة اللاعبين', problemTitle: 'هل يمكنني اللعب، كيف أبدأ، لماذا يوجد تأخير، وكيف ألوّن بشكل أفضل؟',
    problemBody: 'الشاشة الأولى تتيح اللعب فورًا. في الأسفل حلول عملية لمشاكل الاتصال والأصدقاء وFPS والتلوين والردهات العامة.',
    controlsEyebrow: 'تحكم سريع', controlsTitle: 'تحرك أولًا، ثم اختبئ.',
    controlsBody: 'تبقى أزرار التحكم أسفل اللعبة حتى تبدأ دون فتح دليل آخر.', mapsCta: 'تريد كل الخرائط؟ افتح .art',
    modesEyebrow: 'أوضاع اللعب', modesTitle: 'اجعل .games مدخل اللعب الحقيقي.',
    assistantEyebrow: 'Play Kit للاعبين', assistantTitle: 'ابدأ أسرع، اختبئ أفضل، واجعل غرف الأصدقاء أكثر سلاسة.',
    assistantBody: 'قائمة بدء، إصلاحات اللوبي، إعدادات FPS، تدريب التمويه وبطاقات المسارات في حزمة واحدة.',
    priceEyebrow: 'سعر لمرة واحدة', priceNote: 'دفع مرة واحدة', checkoutLabel: 'احصل على Play Kit - $7', seeInside: 'شاهد المحتوى',
    routesEyebrow: 'مسارات سريعة', routesTitle: 'اختر مسار خريطة دون قراءة دليل كامل.',
    routesBody: 'تحتفظ هذه الصفحة بمعاينة خفيفة للمسارات. أطلس 50 مكان اختباء كامل موجود في mecchachameleon.art.',
    faqTitle: 'أسئلة اللعب الشائعة', disclaimer: 'تنبيه: هذا مركز غير رسمي من صنع المعجبين، غير تابع لـ LEMORION ولا يدّعي أي شراكة رسمية.',
  },
};

const sharedModes: Partial<Record<string, Pair[]>> = {
  es: [['Juego clásico', 'Entra, aprende el ciclo de esconderse y buscar, y prueba si el ritmo de pintar y ocultarse te engancha.'], ['Ruta de práctica', 'Usa la ventana de juego con las vistas de mapa para ensayar escondites antes de una partida real.'], ['Calentamiento rápido', 'Empieza rápido, elige un mapa y practica una ruta limpia en vez de leer una guía larga.'], ['Cola con amigos', 'Envía la página a tus amigos, abre una sala personalizada y mantén los controles visibles mientras entran.']],
  pt: [['Jogo clássico', 'Entre, aprenda o ciclo de esconde-esconde e veja se o ritmo de pintar e se esconder combina com você.'], ['Rota de treino', 'Use a janela do jogo com as prévias de mapa para ensaiar esconderijos antes de uma partida real.'], ['Aquecimento rápido', 'Comece rápido, escolha um mapa e foque em uma rota limpa em vez de ler um guia longo.'], ['Fila com amigos', 'Envie a página aos amigos, abra uma sala personalizada e mantenha os controles visíveis enquanto todos entram.']],
  fr: [['Partie classique', 'Lance-toi, découvre la boucle cache-cache et teste le rythme peinture plus dissimulation.'], ['Route d’entraînement', 'Utilise la fenêtre de jeu et les aperçus de carte pour répéter tes cachettes avant une vraie partie.'], ['Échauffement rapide', 'Démarre vite, choisis une carte et travaille une route propre au lieu de lire un long guide.'], ['File entre amis', 'Envoie la page à tes amis, ouvre une salle personnalisée et garde les contrôles visibles pendant qu’ils rejoignent.']],
  de: [['Klassisch spielen', 'Spring rein, lerne den Versteckspiel-Loop und teste, ob Malen und Verstecken für dich funktioniert.'], ['Route üben', 'Nutze das Spielfenster und die Kartenvorschau, um Verstecke vor einem echten Match zu üben.'], ['Schnelles Warmup', 'Starte schnell, wähle eine Karte und übe eine saubere Route statt erst einen langen Guide zu lesen.'], ['Party-Warteschlange', 'Schick die Seite an Freunde, öffne einen Custom Room und halte die Steuerung sichtbar, während alle joinen.']],
  nl: [['Klassiek spelen', 'Spring erin, leer de verstoplus en test of schilderen plus verstoppen voor jou werkt.'], ['Route oefenen', 'Gebruik het speelvenster met mapvoorbeelden om verstoproutes te oefenen voor een echte match.'], ['Snelle warming-up', 'Start snel, kies een map en focus op één nette route in plaats van eerst een lange gids te lezen.'], ['Met vrienden', 'Stuur de pagina naar vrienden, open een Custom Room en houd de besturing zichtbaar terwijl iedereen joint.']],
  ja: [['クラシックプレイ', 'すぐに入り、かくれんぼの流れとペイントして隠れるリズムを体感します。'], ['ルート練習', 'ゲーム画面とマッププレビューを見ながら、本番前に隠れルートを練習します。'], ['スピード準備', '素早く始め、1つのマップで安定した隠れルートに集中します。'], ['フレンド部屋', 'ページを友達に送り、Custom Roomを開き、参加中も操作を見えるようにします。']],
  ko: [['클래식 플레이', '바로 들어가 숨바꼭질 흐름과 칠하고 숨는 리듬이 맞는지 확인하세요.'], ['루트 연습', '게임 창과 맵 미리보기를 함께 보며 실제 경기 전에 은신 루트를 연습하세요.'], ['빠른 워밍업', '빨리 시작하고 한 맵에서 안정적인 루트 하나에 집중하세요.'], ['친구 대기열', '페이지를 친구에게 보내고 Custom Room을 열어 모두가 들어오는 동안 조작법을 볼 수 있게 하세요.']],
  th: [['เล่นแบบคลาสสิก', 'เข้าเล่นทันที เรียนรู้จังหวะซ่อนหา ระบายสี และหลบซ่อนให้เนียน'], ['ฝึกเส้นทาง', 'ใช้หน้าต่างเกมพร้อมตัวอย่างแผนที่เพื่อซ้อมจุดซ่อนก่อนเล่นจริง'], ['วอร์มอัพเร็ว', 'เริ่มเร็ว เลือกแผนที่ แล้วฝึกเส้นทางที่มั่นคงหนึ่งเส้นก่อนอ่านคู่มือยาว'], ['เล่นกับเพื่อน', 'ส่งหน้านี้ให้เพื่อน เปิด Custom Room และให้ทุกคนเห็นปุ่มควบคุมตอนเข้าห้อง']],
  ru: [['Классическая игра', 'Заходи, изучай цикл пряток и проверь, подходит ли тебе ритм покраски и укрытия.'], ['Тренировка маршрута', 'Используй окно игры и превью карт, чтобы отработать укрытия перед настоящим матчем.'], ['Быстрый разогрев', 'Быстро начни, выбери карту и отработай один чистый маршрут без длинного гайда.'], ['Очередь с друзьями', 'Отправь страницу друзьям, открой Custom Room и держи управление на виду, пока все входят.']],
  ar: [['لعب كلاسيكي', 'ادخل مباشرة وتعلّم حلقة الاختباء والبحث واختبر إيقاع التلوين والاختباء.'], ['تدريب المسار', 'استخدم نافذة اللعب مع معاينات الخرائط للتدرّب على أماكن الاختباء قبل المباراة الحقيقية.'], ['إحماء سريع', 'ابدأ بسرعة واختر خريطة وركّز على مسار اختباء واضح بدل قراءة دليل طويل.'], ['غرفة مع الأصدقاء', 'أرسل الصفحة للأصدقاء وافتح Custom Room واجعل التحكم ظاهرًا أثناء انضمام الجميع.']],
};

const sharedFaqs: Partial<Record<string, Pair[]>> = {
  es: [['¿Es el mismo sitio que mecchachameleon.art?', 'No. mechachameleon.games es la entrada para jugar: ventana de juego, controles, modos y rutas rápidas. mecchachameleon.art es el atlas y guía profunda.'], ['¿Puedo jugar Mecha Chameleon gratis online?', 'Sí. Usa la ventana del navegador para jugar sin descarga y luego consulta controles y rutas.'], ['¿Por qué aparecen Mecha, Mech y Meccha?', 'Los jugadores buscan las tres formas. El nombre original es Meccha Chameleon; este sitio también cubre intención Mecha Chameleon y Mech Chameleon.'], ['¿Es oficial?', 'No. Es un hub fan no oficial y no está afiliado a LEMORION.']],
  pt: [['É o mesmo site que mecchachameleon.art?', 'Não. mechachameleon.games é a entrada para jogar; mecchachameleon.art é o atlas e guia mais profundo.'], ['Posso jogar Mecha Chameleon online grátis?', 'Sim. Use a janela do navegador para jogar sem download e depois veja controles e rotas.'], ['Por que aparecem Mecha, Mech e Meccha?', 'Jogadores pesquisam as três grafias. O nome original é Meccha Chameleon; este site também cobre essas buscas.'], ['É oficial?', 'Não. É um hub de fãs não oficial e não é afiliado à LEMORION.']],
  fr: [['Est-ce le même site que mecchachameleon.art ?', 'Non. mechachameleon.games sert à jouer vite ; mecchachameleon.art est le guide et atlas plus détaillé.'], ['Puis-je jouer à Mecha Chameleon gratuitement en ligne ?', 'Oui. Utilise la fenêtre de jeu du navigateur, sans téléchargement, puis consulte contrôles et routes.'], ['Pourquoi Mecha, Mech et Meccha ?', 'Les joueurs cherchent les trois orthographes. Le nom original est Meccha Chameleon.'], ['Est-ce officiel ?', 'Non. C’est un hub de fans non officiel, non affilié à LEMORION.']],
  de: [['Ist das dieselbe Seite wie mecchachameleon.art?', 'Nein. mechachameleon.games ist der Spieleinstieg; mecchachameleon.art ist der tiefere Guide- und Kartenatlas.'], ['Kann ich Mecha Chameleon kostenlos online spielen?', 'Ja. Nutze das Browserfenster ohne Download und danach Steuerung und Routen.'], ['Warum Mecha, Mech und Meccha?', 'Spieler suchen alle drei Schreibweisen. Der Originalname ist Meccha Chameleon.'], ['Ist das offiziell?', 'Nein. Dies ist ein inoffizieller Fan-Hub und nicht mit LEMORION verbunden.']],
  nl: [['Is dit hetzelfde als mecchachameleon.art?', 'Nee. mechachameleon.games is de speel-ingang; mecchachameleon.art is de diepere gids en mapatlas.'], ['Kan ik Mecha Chameleon gratis online spelen?', 'Ja. Gebruik het browservenster zonder download en bekijk daarna controls en routes.'], ['Waarom Mecha, Mech en Meccha?', 'Spelers zoeken alle drie schrijfwijzen. De oorspronkelijke naam is Meccha Chameleon.'], ['Is dit officieel?', 'Nee. Dit is een onofficiële fanhub en niet verbonden aan LEMORION.']],
  ja: [['mecchachameleon.art と同じサイトですか？', 'いいえ。.games はプレイ入口、.art は詳しいガイドとマップ atlas です。'], ['Mecha Chameleon を無料でオンラインプレイできますか？', 'はい。ブラウザのゲーム画面でダウンロードなしに遊べます。'], ['Mecha、Mech、Meccha があるのはなぜ？', 'プレイヤーが複数の表記で検索するためです。元の名前は Meccha Chameleon です。'], ['公式ですか？', 'いいえ。これは非公式のファン製ハブで、LEMORIONとは提携していません。']],
  ko: [['mecchachameleon.art와 같은 사이트인가요?', '아니요. .games는 플레이 입구이고 .art는 더 깊은 가이드와 맵 atlas입니다.'], ['Mecha Chameleon을 무료 온라인으로 할 수 있나요?', '네. 브라우저 게임 창에서 다운로드 없이 바로 플레이할 수 있습니다.'], ['왜 Mecha, Mech, Meccha가 모두 나오나요?', '플레이어가 세 가지 철자로 검색하기 때문입니다. 원래 이름은 Meccha Chameleon입니다.'], ['공식 사이트인가요?', '아니요. LEMORION과 관련 없는 비공식 팬 허브입니다.']],
  th: [['เหมือนกับ mecchachameleon.art ไหม?', 'ไม่เหมือน .games คือทางเข้าเล่น ส่วน .art คือคู่มือและ atlas แผนที่แบบละเอียด'], ['เล่น Mecha Chameleon ออนไลน์ฟรีได้ไหม?', 'ได้ ใช้หน้าต่างเกมบนเบราว์เซอร์ เล่นได้โดยไม่ต้องดาวน์โหลด'], ['ทำไมมี Mecha, Mech และ Meccha?', 'ผู้เล่นค้นหาหลายแบบ ชื่อเดิมคือ Meccha Chameleon'], ['เป็นเว็บทางการไหม?', 'ไม่ใช่ เป็นฮับแฟนเมดที่ไม่เกี่ยวข้องกับ LEMORION']],
  ru: [['Это тот же сайт, что mecchachameleon.art?', 'Нет. .games — вход для игры, а .art — подробный гайд и атлас карт.'], ['Можно играть в Mecha Chameleon онлайн бесплатно?', 'Да. Используй окно браузерной игры без загрузки, затем смотри управление и маршруты.'], ['Почему Mecha, Mech и Meccha?', 'Игроки ищут все три написания. Оригинальное название — Meccha Chameleon.'], ['Это официальный сайт?', 'Нет. Это неофициальный фанатский хаб, не связанный с LEMORION.']],
  ar: [['هل هذا نفس موقع mecchachameleon.art؟', 'لا. .games هو مدخل اللعب، أما .art فهو دليل وخرائط أعمق.'], ['هل يمكن لعب Mecha Chameleon مجانًا على الإنترنت؟', 'نعم. استخدم نافذة اللعبة في المتصفح بدون تحميل ثم راجع التحكم والمسارات.'], ['لماذا تظهر Mecha وMech وMeccha؟', 'اللاعبون يبحثون بكل هذه الصيغ. الاسم الأصلي هو Meccha Chameleon.'], ['هل هذا رسمي؟', 'لا. هذا مركز غير رسمي من صنع المعجبين وغير تابع لـ LEMORION.']],
};

const sharedControls: Partial<Record<string, Pair[]>> = {
  es: [['Mover', 'WASD / joystick'], ['Apuntar', 'Ratón / arrastrar táctil'], ['Pintar', 'Mantener acción principal'], ['Tomar color', 'Cuentagotas / acción derecha'], ['Congelar', 'Bloqueo de pose'], ['Buscar', 'Escaneo con linterna']],
  pt: [['Mover', 'WASD / joystick'], ['Mirar', 'Mouse / arrastar no toque'], ['Pintar', 'Segurar ação principal'], ['Pegar cor', 'Conta-gotas / ação direita'], ['Congelar', 'Travar pose'], ['Procurar', 'Varredura com lanterna']],
  fr: [['Se déplacer', 'WASD / joystick'], ['Viser', 'Souris / glisser tactile'], ['Peindre', 'Maintenir l’action principale'], ['Prélever couleur', 'Pipette / action droite'], ['Figer', 'Verrouillage de pose'], ['Chercher', 'Balayage lampe torche']],
  de: [['Bewegen', 'WASD / Joystick'], ['Zielen', 'Maus / Touch ziehen'], ['Malen', 'Hauptaktion halten'], ['Farbe nehmen', 'Pipette / rechte Aktion'], ['Einfrieren', 'Pose sperren'], ['Suchen', 'Taschenlampen-Scan']],
  nl: [['Bewegen', 'WASD / joystick'], ['Richten', 'Muis / touch slepen'], ['Verven', 'Hoofdactie ingedrukt'], ['Kleur pakken', 'Pipet / rechteractie'], ['Bevriezen', 'Pose vergrendelen'], ['Zoeken', 'Zaklamp-scan']],
  ja: [['移動', 'WASD / ジョイスティック'], ['照準', 'マウス / タッチドラッグ'], ['ペイント', 'メイン操作を長押し'], ['色を取る', 'スポイト / 右操作'], ['固定', 'ポーズロック'], ['探索', 'ライトでスキャン']],
  ko: [['이동', 'WASD / 조이스틱'], ['조준', '마우스 / 터치 드래그'], ['칠하기', '주 행동 길게 누르기'], ['색 추출', '스포이트 / 오른쪽 행동'], ['고정', '포즈 잠금'], ['수색', '손전등 스캔']],
  th: [['เคลื่อนที่', 'WASD / จอยสติ๊ก'], ['เล็ง', 'เมาส์ / ลากบนจอ'], ['ระบายสี', 'กดปุ่มหลักค้าง'], ['ดูดสี', 'Eyedropper / ปุ่มขวา'], ['หยุดท่า', 'ล็อกท่า'], ['ค้นหา', 'สแกนไฟฉาย']],
  ru: [['Движение', 'WASD / джойстик'], ['Прицел', 'Мышь / сенсорное перетаскивание'], ['Покраска', 'Удерживать основное действие'], ['Взять цвет', 'Пипетка / правое действие'], ['Замереть', 'Фиксация позы'], ['Поиск', 'Скан фонариком']],
  ar: [['الحركة', 'WASD / عصا التحكم'], ['التصويب', 'الماوس / السحب باللمس'], ['التلوين', 'اضغط مطولًا على الإجراء الرئيسي'], ['أخذ اللون', 'القطارة / الإجراء الأيمن'], ['تثبيت', 'قفل الوضعية'], ['البحث', 'مسح بالمصباح']],
};

const defaultProblemCardCopy = (locale: string) =>
  locale === 'en' ? en.problemCards : (copyByLocale[locale]?.problemCards ?? zh.problemCards);

const defaultToolCardCopy = (locale: string) =>
  locale === 'en' ? en.toolCards : (copyByLocale[locale]?.toolCards ?? zh.toolCards);

export const copyByLocale: Record<string, HomeCopy> = {
  en,
  zh,
  vi,
  ...Object.fromEntries(
    Object.entries(localized).map(([locale, copy]) => [
      locale,
      {
        ...en,
        ...copy,
        modes: sharedModes[locale] ?? en.modes,
        controls: sharedControls[locale] ?? en.controls,
        faqs: sharedFaqs[locale] ?? en.faqs,
        problemCards: {},
        toolCards: {},
      },
    ])
  ),
};

export function getHomeCopy(locale: string) {
  return copyByLocale[locale] ?? en;
}

export function getLocalizedProblemCards(locale: string) {
  const cardCopy = defaultProblemCardCopy(locale);
  return homeProblemCards.map((card) => ({
    ...card,
    ...(cardCopy[card.title] ?? {}),
  }));
}

export function getLocalizedToolsRadarCards(locale: string) {
  const cardCopy = defaultToolCardCopy(locale);
  return toolsRadarCards.map((card) => ({
    ...card,
    ...(cardCopy[card.title] ?? {}),
  }));
}
