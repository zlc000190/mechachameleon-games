import type { AtlasMap, AtlasSpot } from './atlas-data';

export const isZh = (locale: string) => locale === 'zh';

export const homeCopy = {
  en: {
    title: 'Mecha Chameleon Game', playNow: 'Play now', howToPlay: 'How to play',
    faqs: [
      ['Can I play Meccha Chameleon online?', 'Yes. Start with the browser game above, then use the play guide and hiding spot atlas when you want deeper match help.'],
      ['What should I try first?', 'Play one short round, then open the How to play section for role basics, seeker habits, and hider positioning.'],
      ['Does this work on mobile?', 'The browser games load on modern phones, and the guide sections are built to work as a second screen while you play on PC.'],
      ['Where are the best hiding spots?', 'Use the map atlas below for quick spot ideas, paint colors, difficulty labels, and hider notes.'],
    ],
    secondScreenItems: [
      ['Phone first', 'Tap map, color, and pose notes without alt-tabbing.'],
      ['PC aware', 'Keep a quick guide open while the match runs.'],
      ['Fast queue help', 'Use role notes, spot ideas, and color cues without leaving the round.'],
    ],
    newPlayerEyebrow: 'New player route',
    newPlayerTitle: 'If you searched before downloading, start with the browser game.',
    newPlayerCards: [
      ['What is it?', 'A PC hide-and-seek game where hiders paint their bodies to blend into the map.'],
      ['Can I play here?', 'Yes. Start with the browser game above, then use the guide when you want match tips.'],
      ['Should I install it?', 'Try one quick round first. If hiding, painting, and seeker pressure feel fun, keep this guide open for the next match.'],
      ['What should I learn first?', 'Spot selection, color matching, pose discipline, and staying still after you commit.'],
    ],
    camoEyebrow: 'For real players',
    camoTitle: 'Camo Lab turns search traffic into match-ready help.',
    previewAtlas: 'Preview map atlas',
    camoCards: [
      ['Color reads', 'Show primary and secondary paint colors for each map surface.'],
      ['Pose notes', 'Tell players which side or silhouette should face the seeker.'],
      ['Risk rating', 'Label beginner-safe, high-reward, and obvious bait spots.'],
    ],
    atlasEyebrow: 'Hiding Spot Atlas',
    atlasTitle: 'Five real map guides, fifty hiding spots, one fast second screen.',
    atlasDesc: 'These are the captured Meccha Chameleon map assets Claude already prepared: screenshots, paint colors, difficulty, and match tips.',
    secondEyebrow: 'Best form factor',
    secondTitle: 'Build for phone-in-hand while the real game runs on PC.',
    secondDesc: 'A browser page beats a plugin here. PC gameplay happens outside the browser, so the practical companion is a mobile-friendly web guide that loads instantly and needs no account.',
    quickAnswers: 'Quick answers',
  },
  zh: {
    title: '超级变色龙 Meccha Chameleon 在线玩', playNow: '立即开始', howToPlay: '玩法指南',
    faqs: [
      ['可以在线玩超级变色龙吗？', '可以。先从上方浏览器游戏开始，想深入研究对局时再看玩法指南和隐藏点地图图鉴。'],
      ['新手第一步该做什么？', '先玩一小局，再看玩法区：角色基础、搜寻者习惯、隐藏者站位都会快速讲清楚。'],
      ['手机能看这个站吗？', '可以。浏览器游戏能在现代手机加载，攻略区也适合当作 PC 游玩时的第二屏参考。'],
      ['最好的隐藏点在哪里？', '看下方地图图鉴：每张图都有点位思路、涂装颜色、难度标签和隐藏者提示。'],
    ],
    secondScreenItems: [
      ['手机优先', '不用切出游戏，手机上直接看地图、颜色和姿势提示。'],
      ['适配 PC 对局', '比赛进行时，把快速攻略放在旁边随时看。'],
      ['快速排队辅助', '不离开回合，也能看角色提示、点位灵感和颜色线索。'],
    ],
    newPlayerEyebrow: '新手路线',
    newPlayerTitle: '如果你是搜索后才准备下载，先从浏览器版体验开始。',
    newPlayerCards: [
      ['这是什么游戏？', '超级变色龙是一款 PC 躲猫猫派对游戏，隐藏者要把身体涂成地图环境的颜色。'],
      ['这里可以玩吗？', '可以。先玩上方浏览器游戏，之后需要对局技巧时再看攻略。'],
      ['值得安装吗？', '先快速试玩一局。如果隐藏、涂色和被搜寻的压力让你觉得有趣，再把这个攻略开着进入下一局。'],
      ['最先学什么？', '先学点位选择、颜色匹配、姿势控制，以及决定隐藏后保持静止。'],
    ],
    camoEyebrow: '给真实玩家',
    camoTitle: '伪装实验室把搜索流量变成能上场的对局帮助。',
    previewAtlas: '预览地图图鉴',
    camoCards: [
      ['颜色读取', '展示每个地图表面的主色和辅助涂装颜色。'],
      ['姿势提示', '告诉玩家该把哪一侧或哪种轮廓朝向搜寻者。'],
      ['风险评级', '标注新手安全点、高收益点和明显诱饵点。'],
    ],
    atlasEyebrow: '隐藏点地图图鉴',
    atlasTitle: '5 张真实地图攻略、50 个隐藏点，一个快速第二屏。',
    atlasDesc: '这里整理了超级变色龙地图素材：截图、涂装颜色、难度和实战提示，方便对局时快速查看。',
    secondEyebrow: '最佳使用方式',
    secondTitle: '真实游戏在 PC 上跑，攻略放在手边手机上看。',
    secondDesc: '这个场景里网页比插件更实用。PC 游戏在浏览器外运行，所以真正好用的是一个手机友好的网页攻略：加载快、无需账号、随时能看。',
    quickAnswers: '快速解答',
  },
} as const;

export const mapLabels = {
  en: { spots: 'spots', difficulty: 'difficulty', selectedSpot: 'Selected spot', paintColors: 'Paint colors', primary: 'Primary', secondary: 'Secondary', back: 'Back to atlas', guide: 'Meccha Chameleon map guide', hidingSpots: 'Hiding Spots', ready: 'Ready for the real match?', readyBody: 'Keep this atlas open while you queue up, compare map colors, and pick your next hiding route.', play: 'Play online', titleSuffix: 'Hiding Spots — Meccha Chameleon', descriptionSuffix: 'Meccha Chameleon hiding spot atlas (10 spots): screenshots, paint RGB, difficulty, and hider tips.', altPreview: 'Meccha Chameleon map preview' },
  zh: { spots: '个点位', difficulty: '难度', selectedSpot: '当前点位', paintColors: '涂装颜色', primary: '主色', secondary: '辅色', back: '返回图鉴', guide: '超级变色龙地图攻略', hidingSpots: '隐藏点', ready: '准备进入真实对局了吗？', readyBody: '排队时保持这个图鉴打开，对照地图颜色，选择下一条隐藏路线。', play: '在线玩', titleSuffix: '隐藏点 — 超级变色龙', descriptionSuffix: '超级变色龙隐藏点地图图鉴（10 个点位）：截图、涂装 RGB、难度和隐藏者提示。', altPreview: '超级变色龙地图预览' },
} as const;

const mapZh: Record<string, Pick<AtlasMap, 'name' | 'desc' | 'difficulty'>> = {
  'vintage-room': { name: '复古会客厅', difficulty: 'medium', desc: '巴洛克绿色锦缎墙纸、黑白棋盘地板、镀金画框和吊灯光线。适合练习绿色与金色的伪装涂装。' },
  'cow-farm': { name: '田园奶牛农场', difficulty: 'easy', desc: '开阔牧场、奶牛、干草堆、红色谷仓和卡通天空壁画。新手友好，亮绿、草黄和谷仓红对比清晰。' },
  'brick-tavern': { name: '砖墙酒馆大厅', difficulty: 'medium', desc: '红砖墙、外露木梁和金色马雕像，经典酒馆氛围。适合练习砖红和木棕色匹配。' },
  'grand-ballroom': { name: '豪华宴会厅', difficulty: 'hard', desc: '水晶吊灯、三角钢琴、宴会桌和弧形楼梯。暖黄和深红很多，装饰面复杂，是最难地图之一。' },
  'blue-parlor': { name: '蓝色花纹客厅', difficulty: 'hard', desc: '蓝色花纹墙纸、红色天鹅绒贵妃椅、圆形吊灯和衣帽架。冷蓝与红色点缀并存，对颜色匹配要求很高。' },
};

const spotZh: Record<string, Pick<AtlasSpot, 'name' | 'tip'>> = {
  'vintage-01': { name: '镀金画框伪装', tip: '蹲在金色画框后方，把身体涂成深锦缎绿，贴近周围墙纸纹理。' },
  'vintage-02': { name: '走廊花瓶藏点', tip: '站在派对旗帜下的高花瓶旁，使用米白底色并点上绿色花纹。' },
  'vintage-03': { name: '棋盘地板彩蛋堆', tip: '钻进黑白地板上的彩蛋堆，把自己涂成随机粉彩斑块。' },
  'vintage-04': { name: '壁灯阴影角落', tip: '卡在壁灯下方的阴暗角落，绿色墙纸接近黑色时用深炭灰伪装。' },
  'vintage-05': { name: '楼梯踏步阴影', tip: '爬到楼梯中段，蹲在踏步阴影里，使用深木棕色。' },
  'vintage-06': { name: '皮沙发背后', tip: '贴到棕色皮沙发背面，把身体涂成偏红的皮革棕色。' },
  'vintage-07': { name: '桌布褶皱', tip: '躲到垂落桌布下，使用暖灰褐色匹配布料褶皱阴影。' },
  'vintage-08': { name: '窗帘落地处', tip: '贴着及地窗帘底部，涂成带灰尘感的米色融入布料堆叠。' },
  'vintage-09': { name: '古董钟柜顶部', tip: '跳到祖父钟旁的柜顶，涂成深木色并加一点黄铜色。' },
  'vintage-10': { name: '镜框金边', tip: '卡进镀金镜框边缘，涂成暖金色并保持完全静止。' },
  'farm-01': { name: '奶牛花纹干草堆', tip: '站在干草堆旁的斑点奶牛附近，用黑白竖条模仿奶牛皮。' },
  'farm-02': { name: '卷草垛中心', tip: '蜷进圆形草垛里，使用麦金色并加深琥珀色条纹。' },
  'farm-03': { name: '红谷仓门阴影', tip: '躲到红色谷仓门拱后，使用深谷仓红并在阴影侧加暗红。' },
  'farm-04': { name: '白色栅栏柱', tip: '贴齐白色栅栏柱，涂成干净的灰白色并加轻微风化边缘。' },
  'farm-05': { name: '卡通云壁画', tip: '靠在天空壁画的云朵上，使用天蓝底色和蓬松白色斑块。' },
  'farm-06': { name: '木箱堆缝隙', tip: '挤进木箱堆之间，涂成咖啡棕匹配老松木。' },
  'farm-07': { name: '热气球篮子', tip: '躲在热气球篮下方，使用醒目的蓝白竖条。' },
  'farm-08': { name: '拖拉机轮胎阴影', tip: '蹲在拖拉机大后轮旁，涂成哑黑并带一点胎纹阴影。' },
  'farm-09': { name: '草绿色屋顶角', tip: '爬到草地和棚顶交界处，用鲜绿色融进草坪。' },
  'farm-10': { name: '牛奶罐群', tip: '挤进金属奶罐堆里，涂成拉丝银并加浅凹痕阴影。' },
  'brick-01': { name: '金马雕像底座', tip: '蹲在金色马雕像台座旁，涂成金属金色融入青铜质感。' },
  'brick-02': { name: '砖缝凹槽', tip: '贴进更深的砖墙凹槽，使用暖砖棕并画出暗色灰缝。' },
  'brick-03': { name: '木梁阴影', tip: '藏在粗重天花木梁下，涂成深木棕并加焦黑阴影。' },
  'brick-04': { name: '木桶侧面', tip: '贴住墙边酒桶，涂成红棕色匹配老橡木。' },
  'brick-05': { name: '红地毯花纹', tip: '趴在波斯地毯上，使用深红并画出金色花纹。' },
  'brick-06': { name: '壁炉灰烬区', tip: '站进冷壁炉里，涂成烟灰炭黑并保留砖边色。' },
  'brick-07': { name: '楼梯踏步侧边', tip: '坐在木楼梯踏步侧面，涂成中棕色匹配立板阴影。' },
  'brick-08': { name: '古董烛台旁', tip: '站在青铜烛台旁，涂成古铜色并利用暗木背景。' },
  'brick-09': { name: '酒馆长凳下', tip: '钻到长橡木凳下，使用暖灰棕匹配座位阴影。' },
  'brick-10': { name: '画框后方', tip: '贴在墙画后面，使用深红棕并加金色画框高光。' },
  'ballroom-01': { name: '三角钢琴漆面', tip: '蹲在黑色亮漆三角钢琴旁，涂成纯黑并加一点光泽高光。' },
  'ballroom-02': { name: '水晶吊灯杆', tip: '站在吊灯杆下，涂成奶油金，让落光把轮廓吞掉。' },
  'ballroom-03': { name: '宴会桌布折痕', tip: '趴在宴会桌上靠近折好的餐巾，涂成纯白并加灰色折痕。' },
  'ballroom-04': { name: '雕花高背椅', tip: '卡进高背雕花椅缝，涂成深胡桃木色并加深木纹。' },
  'ballroom-05': { name: '楼梯常春藤花环', tip: '贴进楼梯扶手常春藤，涂成森林绿并加暗苔藓色。' },
  'ballroom-06': { name: '派对气球簇', tip: '站进气球花束，用强烈红蓝色块混进气球。' },
  'ballroom-07': { name: '大理石柱纹', tip: '贴住大理石柱，涂成奶油色并画出焦糖色纹理。' },
  'ballroom-08': { name: '窗帘深褶阴影', tip: '藏进厚天鹅绒窗帘褶里，使用近黑咖啡棕。' },
  'ballroom-09': { name: '壁灯之间的阴影池', tip: '停在两盏壁灯之间，涂成中灰色融入阴影谷。' },
  'ballroom-10': { name: '红色垂幅', tip: '贴住悬挂红色垂幅，涂成深绯红并加暗褶皱。' },
  'parlor-01': { name: '睡姿贴墙技巧', tip: '侧躺在蓝色花纹墙上，用主蓝色把身体压平成墙纸的一部分。' },
  'parlor-02': { name: '红色贵妃椅扶手', tip: '蜷在红天鹅绒扶手上，涂成深红并加暗侧阴影。' },
  'parlor-03': { name: '灰色窗帘褶', tip: '滑进两道灰色窗帘褶之间，涂成中灰并画出深折线。' },
  'parlor-04': { name: '衣帽架轮廓', tip: '站在木制衣帽架后面，涂成深胡桃木融入柱子阴影。' },
  'parlor-05': { name: '天花灯眩光', tip: '站在圆形吊灯正下方，涂成灯白色，让眩光吞掉你。' },
  'parlor-06': { name: '蓝色花墙角', tip: '贴进两块蓝色墙纸交汇的深角落，使用海军蓝并加暗褶。' },
  'parlor-07': { name: '镜面盲角', tip: '站在镜子的盲角，涂成冷灰蓝，让反射把你当成背景。' },
  'parlor-08': { name: '床头柜侧面', tip: '蹲在木床头柜旁，涂成暖栗色匹配抽屉正面。' },
  'parlor-09': { name: '蓝色印花地毯', tip: '坐在蓝色花纹地毯上，涂成海军蓝并加清晰白花。' },
  'parlor-10': { name: '昏暗角落池', tip: '走进客厅最暗的角落，涂成暮色灰蓝融入阴影。' },
};

export function localizeMap(map: AtlasMap, locale: string): AtlasMap {
  if (!isZh(locale)) return map;
  return { ...map, ...(mapZh[map.id] ?? {}) };
}

export function localizeSpot(spot: AtlasSpot, locale: string): AtlasSpot {
  if (!isZh(locale)) return spot;
  return { ...spot, ...(spotZh[spot.id] ?? {}) };
}
