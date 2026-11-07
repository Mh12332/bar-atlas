/* ============================================================
   BAR ATLAS — 核心分类数据
   鸡尾酒架构 / 基酒 / 辅料
   ============================================================ */

const FAMILIES = [
  {
    id: "old-fashioned",
    zh: "古典型",
    en: "Old Fashioned",
    no: "01",
    tagline: "烈酒、糖、苦精与冰水的最小闭环",
    formula: [["烈酒", "60 ml"], ["糖", "7.5 ml"], ["苦精", "2 dash"], ["冰水", "约 15 ml"]],
    ratio: "8 : 1 : 2 dashes",
    idea: "这是「鸡尾酒」一词最古老的写法：烈酒 + 糖 + 苦精 + 水。它没有酸，张力来自酒精度、甜味与苦精香气之间的拉扯。",
    balance: "糖只负责磨圆棱角，不该喝出明显甜味；搅拌 20–30 秒，让稀释成为配方的一部分。",
    keys: ["糖量控制在烈酒的 1/8–1/6", "苦精是香料骨架，不是装饰", "大冰块延缓稀释，保持温度"],
    trap: "冰太小会水；糖没化开会前甜后烈；苦精手重会像药水。",
    examples: ["old-fashioned", "sazerac", "oaxaca-old-fashioned"]
  },
  {
    id: "sour",
    zh: "酸型",
    en: "Sour",
    no: "02",
    tagline: "烈酒、酸、甜构成的万能三角",
    formula: [["烈酒", "60 ml"], ["柑橘酸", "25 ml"], ["糖", "18 ml"], ["蛋清", "可选"]],
    ratio: "2 : 1 : ¾",
    idea: "酸提供明亮度，糖负责回甘，烈酒撑住骨架。蛋清、乳脂或茶汤可以改变质地，但不改变三角关系。",
    balance: "先按 2 : 1 : 0.75 起手，再依据柑橘酸度、酒体与客人偏好微调。酸了就补糖，但别把酸压没。",
    keys: ["鲜榨柑橘是底线", "摇和后必须试味", "蛋清要干摇出绵密泡沫"],
    trap: "用糖浆掩盖劣质酸；摇和时间不足；忽略杯中残留冰水。",
    examples: ["daiquiri", "whiskey-sour", "margarita"]
  },
  {
    id: "collins",
    zh: "柯林斯 / 菲士",
    en: "Collins & Fizz",
    no: "03",
    tagline: "把酸酒拉长，用气泡降低压力",
    formula: [["烈酒", "45 ml"], ["柑橘酸", "30 ml"], ["糖", "15 ml"], ["苏打", "60 ml"]],
    ratio: "3 : 2 : 1 + 气泡",
    idea: "酸酒的长饮版本。Collins 在杯中加冰，Fizz 通常不加冰、气泡更细，口感更轻。",
    balance: "气泡会稀释并抬高酸感，因此基酒与糖要比短饮稍微浓一点。苏打最后加，只轻轻提拉。",
    keys: ["先摇匀再补气泡", "Collins 用长冰，Fizz 用小杯", "柠檬皮油是香气的最后一步"],
    trap: "苏打与酒一起摇；杯温不够低；气泡放太久。",
    examples: ["tom-collins", "gin-fizz", "french-75"]
  },
  {
    id: "duo",
    zh: "双料型",
    en: "Duo / Martini",
    no: "04",
    tagline: "两种酒的直接对话，稀释即配方",
    formula: [["基酒", "60 ml"], ["第二酒", "15–30 ml"], ["苦精", "1–2 dash"], ["水", "搅拌带入"]],
    ratio: "4 : 1 → 2 : 1",
    idea: "马天尼与曼哈顿的共同底层：一个强骨架，一个修饰酒，少量苦精。没有果汁，温度与稀释就是全部。",
    balance: "味美思比例决定干/湿；搅拌而非摇和，保留清澈与丝滑。越简单，酒的质量越藏不住。",
    keys: ["提前冰杯冰搅拌杯", "搅拌 25–35 秒", "柠檬皮或橙皮现喷现用"],
    trap: "搅拌不足导致温吞；味美思氧化；杯子没冰透。",
    examples: ["dry-martini", "manhattan", "vesper"]
  },
  {
    id: "highball",
    zh: "高球型",
    en: "Highball",
    no: "05",
    tagline: "烈酒 + 长饮气泡，比例与温度决定一切",
    formula: [["烈酒", "45 ml"], ["长饮", "90–120 ml"], ["青柠 / 柠檬", "10 ml"], ["冰", "满杯"]],
    ratio: "1 : 2 → 1 : 3",
    idea: "高球不是「酒兑饮料」，而是用碳酸、冰与比例把烈酒变成可大口饮用的长饮。",
    balance: "碳酸会放大香气也放大缺点。先冰杯、冰酒，再缓慢注入，保留气泡。",
    keys: ["杯子与酒液都要冰", "沿吧勺注入保留碳酸", "柑橘油提升香气层次"],
    trap: "温杯、温酒、少冰；比例过淡；气泡跑光。",
    examples: ["gin-tonic", "whiskey-highball", "moscow-mule"]
  },
  {
    id: "tiki",
    zh: "提基型",
    en: "Tiki",
    no: "06",
    tagline: "多层朗姆、热带水果与香料的重叠",
    formula: [["朗姆 A", "30 ml"], ["朗姆 B", "30 ml"], ["柑橘", "20 ml"], ["甜味 / 香料", "15 + 10 ml"]],
    ratio: "多基酒 2 : 酸 ¾ : 甜 ¾ : 香料 ¼",
    idea: "Tiki 看似繁复，底层仍是酸酒：多种朗姆提供厚度，杏仁、肉桂、法勒南与热带果汁构成香气迷宫。",
    balance: "甜度通常高于普通酸酒，因为碎冰会快速稀释；用苦精和 151 朗姆收住尾韵。",
    keys: ["至少两种朗姆叠加", "碎冰与摇和都要到位", "装饰是香气的一部分"],
    trap: "把所有热带汁混在一起；甜到发腻；忽略酒精总量。",
    examples: ["mai-tai", "zombie", "jungle-bird"]
  },
  {
    id: "julep",
    zh: "朱丽普 / 斯玛什",
    en: "Julep & Smash",
    no: "07",
    tagline: "碎冰、香草与糖的古老长饮",
    formula: [["烈酒", "60 ml"], ["糖", "15 ml"], ["薄荷", "6–10 片"], ["碎冰", "满杯"]],
    ratio: "4 : 1 + 香草",
    idea: "Julep 只用薄荷、糖、烈酒与碎冰；Smash 加入柑橘并短摇。它们都是「香草 + 甜 + 冰」的变体。",
    balance: "薄荷要轻拍而非捣烂，避免释放叶绿素苦味；碎冰带来大量稀释，糖量要撑得住。",
    keys: ["薄荷轻拍出香", "碎冰要新鲜干燥", "喝前搅动，让温度均匀"],
    trap: "把薄荷捣成泥；冰不够碎；糖沉底。",
    examples: ["mint-julep", "whiskey-smash", "caipirinha"]
  },
  {
    id: "daisy",
    zh: "黛西型",
    en: "Daisy",
    no: "08",
    tagline: "酸酒 + 橙味利口酒，短饮或加气泡",
    formula: [["基酒", "45 ml"], ["柑橘", "20 ml"], ["橙味利口酒", "15 ml"], ["糖", "5–10 ml"]],
    ratio: "3 : 1.5 : 1",
    idea: "Daisy 是酸酒的华丽版本：用橙味利口酒替代部分甜味，常加少量苏打。玛格丽特、边车都是它的近亲。",
    balance: "橙味利口酒的甜度差异很大，先少糖，再补酸。加苏打时减少摇和稀释。",
    keys: ["按利口酒甜度调整糖", "橙皮与柑橘品种要呼应", "可做短饮或加气泡"],
    trap: "利口酒过量导致甜腻；忽视其酒精度；柑橘不新鲜。",
    examples: ["margarita", "sidecar", "cosmopolitan"]
  },
  {
    id: "flip",
    zh: "蛋奶 / 菲力普",
    en: "Flip & Cream",
    no: "09",
    tagline: "用蛋、奶油与可可构建圆润质地",
    formula: [["基酒", "45 ml"], ["甜味酒", "20 ml"], ["蛋 / 奶油", "1 个 / 30 ml"], ["肉豆蔻", "现磨"]],
    ratio: "2 : 1 : 1",
    idea: "Flip 用全蛋或蛋清带来丝绒质地，Cream 用奶油与利口酒构建甜点感。酒精度被质地包裹，但并没有消失。",
    balance: "质地越厚，越需要苦味、盐或酒精度收尾；温度必须够冷，否则腥与腻都会出现。",
    keys: ["先干摇，再加冰摇", "现磨肉豆蔻或可可粉", "杯型小一点，份量克制"],
    trap: "摇和不充分；奶油温度过高；甜到没有结尾。",
    examples: ["brandy-alexander", "grasshopper", "white-russian"]
  },
  {
    id: "coffee",
    zh: "咖啡 / 甜点",
    en: "Coffee & Dessert",
    no: "10",
    tagline: "苦甜、温度与咖啡油脂的餐后结构",
    formula: [["咖啡", "30 ml"], ["烈酒", "30 ml"], ["咖啡利口酒", "15 ml"], ["糖", "5–10 ml"]],
    ratio: "1 : 1 : ½",
    idea: "以咖啡、可可、奶油为核心的餐后酒。咖啡的苦与烘焙香提供骨架，糖和乳脂负责圆润。",
    balance: "咖啡要新鲜、浓缩、降温；糖量随咖啡烘焙度调整。摇出油脂，但别让泡沫掩盖温度。",
    keys: ["浓缩咖啡现萃现用", "摇前彻底冷却", "杯具提前冰镇"],
    trap: "咖啡过酸或过苦；摇后泡沫塌陷；甜得像糖浆。",
    examples: ["espresso-martini", "irish-coffee", "white-russian"]
  },
  {
    id: "punch",
    zh: "潘趣 / 杯装",
    en: "Punch & Cup",
    no: "11",
    tagline: "糖、酸、酒、水四元素的多人份公式",
    formula: [["酸", "1 份"], ["糖", "2 份"], ["烈酒", "3 份"], ["水 / 茶", "4 份"]],
    ratio: "1 : 2 : 3 : 4",
    idea: "潘趣是最早的「批量鸡尾酒」：提前把水算进配方，让酒液在冰镇后仍然平衡。Cup 则以葡萄酒或利口酒为底。",
    balance: "批量时先按 1:2:3:4 起手，再根据酒精度、冰量与饮用时间调整；提前冷藏，少加冰。",
    keys: ["糖先化开", "提前计算冰融水", "柑橘与香料现加"],
    trap: "现场加冰导致过淡；批量后没有试味；水果氧化。",
    examples: ["planters-punch", "pimms-cup", "sherry-cobbler"]
  },
  {
    id: "aperitivo",
    zh: "开胃酒 / 斯普里茨",
    en: "Aperitivo & Spritz",
    no: "12",
    tagline: "苦味、气泡与低酒精的餐前仪式",
    formula: [["起泡酒", "90 ml"], ["苦味酒", "60 ml"], ["苏打", "30 ml"], ["冰", "满杯"]],
    ratio: "3 : 2 : 1",
    idea: "Spritz 用起泡酒、苦味酒与苏打构成低酒精开胃酒。苦味负责唤醒味觉，气泡负责轻盈。",
    balance: "先倒起泡酒，再加苦味酒与苏打，减少搅动。冰要满，杯子要大。",
    keys: ["起泡酒先入杯", "只轻提拉一次", "橙片或橄榄要新鲜"],
    trap: "比例过甜；冰少导致温吞；气泡跑光。",
    examples: ["aperol-spritz", "americano", "sbagliato"]
  },
  {
    id: "blended",
    zh: "冰沙 / 热带",
    en: "Blended & Frozen",
    no: "13",
    tagline: "用冰与果泥构建可饮用的质地",
    formula: [["烈酒", "50 ml"], ["果汁", "60 ml"], ["椰奶 / 果泥", "30 ml"], ["冰", "1 杯"]],
    ratio: "2 : 2 : 1 : 冰",
    idea: "冷冻饮品把稀释、甜度与质地同时锁进一杯。配方必须比加冰版更浓、更甜，才能抵消冰的稀释。",
    balance: "冰量决定质地：少而碎是雪泥，多而久是冰沙。先少量搅打，再补冰调整。",
    keys: ["使用碎冰或小冰块", "所有液体先冷藏", "椰子奶油要摇匀"],
    trap: "冰太多变寡淡；机器发热融化；装饰下沉。",
    examples: ["pina-colada", "chi-chi", "frozen-margarita"]
  },
  {
    id: "low-no",
    zh: "低酒精 / 无酒精",
    en: "Low & No",
    no: "14",
    tagline: "去掉酒精后，重新补回结构与刺激",
    formula: [["复杂基底", "60 ml"], ["酸", "20 ml"], ["甜 / 苦", "15 ml"], ["气泡", "补满"]],
    ratio: "按酸酒逻辑重构",
    idea: "无酒精不是「少放酒」。缺的是酒精的辛辣、重量与防腐感，要用茶、苦精、盐、单宁、气泡和酸度补回来。",
    balance: "用苦味与盐制造「成年感」，用茶汤提供单宁与酒体，用气泡制造刺激；不要只靠果汁。",
    keys: ["苦精含酒精，需确认用量", "茶汤要浓，避免水感", "盐与酸让风味立起来"],
    trap: "像果汁；过甜；没有收尾。",
    examples: ["virgin-mojito", "phony-negroni", "cold-brew-tonic"]
  },
  {
    id: "hot",
    zh: "热饮",
    en: "Hot Drinks",
    no: "15",
    tagline: "温度、香料与甜度构成冬季的杯中暖意",
    formula: [["烈酒 / 葡萄酒", "45–150 ml"], ["甜味", "10–15 ml"], ["热水 / 牛奶", "120 ml"], ["香料", "1–2 种"]],
    ratio: "按酒体与温度调整",
    idea: "热饮不是把冰饮加热。高温会放大酒精与香料，也会让酸变尖；需要用糖、乳脂或稀释把结构重新拉回平衡。",
    balance: "液体保持在 70–85°C，不要沸腾；先在杯中调好甜味与香料，再加热酒，最后试味。",
    keys: ["杯具预热", "不要煮沸酒精", "肉豆蔻、肉桂、丁香要现用"],
    trap: "沸水直接冲酒；香料久煮发苦；甜度不足导致酒精灼热。",
    examples: ["hot-toddy", "tom-and-jerry", "mulled-wine"]
  }
];

const BASES = [
  {
    id: "gin",
    zh: "金酒",
    en: "Gin",
    no: "01",
    color: "#52756a",
    abv: "37.5–47%",
    tag: "植物学的放大镜",
    profile: "杜松子为骨架，柑橘、芫荽籽、鸢尾根、当归与各类草本层层展开。London Dry 干净锐利，Old Tom 微甜圆润，Navy Strength 酒感强。",
    bottles: ["Beefeater / Tanqueray（London Dry）", "Plymouth（柔和）", "Hayman's Old Tom（微甜）"],
    role: "清亮的植物香气，适合马天尼、酸酒与苦味开胃酒；也最容易暴露调酒师的比例问题。",
    avoid: "不要用重杜松子酒去压细腻的花香或清酒；高酒精度金酒入长饮时要减量。",
    first: ["dry-martini", "negroni", "gimlet", "tom-collins"]
  },
  {
    id: "whiskey",
    zh: "威士忌",
    en: "Whiskey",
    no: "02",
    color: "#a8642e",
    abv: "40–50%",
    tag: "谷物、橡木与时间",
    profile: "波本的玉米甜与香草、黑麦的辛香、苏格兰的泥煤与海风、爱尔兰的柔顺、日本威士忌的精致果香。橡木桶决定一半性格。",
    bottles: ["Buffalo Trace（波本）", "Rittenhouse Rye（黑麦）", "Monkey Shoulder（调和麦芽）", "Laphroaig 10（泥煤）"],
    role: "古典、曼哈顿与酸酒的骨架；高酒精度与橡木香能承受糖、苦精和柑橘。",
    avoid: "重泥煤不适合搭配细腻奶油与花香；高年份威士忌未必适合做混合酒。",
    first: ["old-fashioned", "manhattan", "whiskey-sour", "penicillin"]
  },
  {
    id: "rum",
    zh: "朗姆酒",
    en: "Rum",
    no: "03",
    color: "#b07a3f",
    abv: "37.5–55%",
    tag: "甘蔗的千张面孔",
    profile: "从清爽的白朗姆到酯香爆棚的牙买加高酯朗姆，再到焦糖与香料的陈年朗姆。原料（糖蜜或甘蔗汁）、发酵与蒸馏器决定风格。",
    bottles: ["Probitas（白朗姆）", "Appleton Estate Signature（牙买加）", "Smith & Cross（高酯）", "Diplomático Reserva Exclusiva（陈年）"],
    role: "从 Daiquiri 的极简到 Tiki 的层层叠叠；高酯朗姆能穿透果汁与糖。",
    avoid: "重焦糖香精朗姆会掩盖柑橘；Overproof 需精确计量，别让一杯酒失控。",
    first: ["daiquiri", "mai-tai", "mojito", "jungle-bird"]
  },
  {
    id: "agave",
    zh: "龙舌兰 / 梅斯卡尔",
    en: "Agave",
    no: "04",
    color: "#8a8a4a",
    abv: "38–55%",
    tag: "泥土、青草与火",
    profile: "龙舌兰的植物甜与胡椒感，梅斯卡尔的烟熏与矿物感。Blanco 最清亮，Reposado 更圆润，Añejo 带木桶甜香。",
    bottles: ["Tapatío 110（Blanco）", "Siete Leguas（Reposado）", "Del Maguey Vida（Mezcal）"],
    role: "玛格丽特、帕洛玛与烟熏酸酒的骨架；梅斯卡尔适合替代部分基酒，增加深度。",
    avoid: "梅斯卡尔用量过大会压住所有辅料；陈年龙舌兰的甜木香不适合清爽高球。",
    first: ["margarita", "paloma", "naked-and-famous", "oaxaca-old-fashioned"]
  },
  {
    id: "brandy",
    zh: "白兰地 / 皮斯科",
    en: "Brandy & Pisco",
    no: "05",
    color: "#9c5b45",
    abv: "35–45%",
    tag: "果实、花与蒸馏的圆润",
    profile: "干邑与雅文邑的葡萄与橡木，皮斯科的鲜花与柑橘，苹果白兰地的清脆果香。口感通常比威士忌更柔。",
    bottles: ["Pierre Ferrand 1840（干邑）", "Pisco Quebranta", "Laird's Applejack"],
    role: "边车、亚历山大与皮斯科酸酒的骨架；适合与橙味利口酒、奶油和坚果搭配。",
    avoid: "昂贵干邑不适合重糖重奶油；皮斯科别用威士忌的方式对待，它更轻盈。",
    first: ["sidecar", "pisco-sour", "brandy-alexander", "between-the-sheets"]
  },
  {
    id: "vodka",
    zh: "伏特加",
    en: "Vodka",
    no: "06",
    color: "#70818a",
    abv: "37.5–50%",
    tag: "纯净的画布",
    profile: "中性、干净、酒感直接。不同原料（小麦、黑麦、马铃薯、玉米）会带来细微质地差异，但在鸡尾酒中主要提供酒精与体积。",
    bottles: ["Absolut（中性）", "Ketel One（小麦）", "Belvedere（黑麦）"],
    role: "让果汁、咖啡、番茄与奶油成为主角；也用于提升酒精度而不改变风味。",
    avoid: "不要期待伏特加提供复杂香气；它的价值在于干净与质地。",
    first: ["moscow-mule", "espresso-martini", "bloody-mary", "cosmopolitan"]
  },
  {
    id: "cane",
    zh: "卡莎萨 / 甘蔗酒",
    en: "Cachaça",
    no: "07",
    color: "#7d8b4c",
    abv: "38–48%",
    tag: "田野、青草与甘蔗芯",
    profile: "巴西甘蔗汁蒸馏酒，带有青草、甘蔗、香蕉与泥土气息。未陈年版清冽，陈年版有香草与木质甜香。",
    bottles: ["Leblon（未陈年）", "Novo Fogo（甘蔗汁）", "Avuá Amburana（陈年）"],
    role: "Caipirinha 的灵魂；也能做 Rabo de Galo 这类苦味短饮。",
    avoid: "别把它简单等同于白朗姆；它的青草与 funk 会改变酸酒的香气方向。",
    first: ["caipirinha", "rabo-de-galo"]
  },
  {
    id: "rice",
    zh: "米酒 / 烧酒 / 白酒",
    en: "Rice & Baijiu",
    no: "08",
    color: "#9b9580",
    abv: "12–60%",
    tag: "东方谷物的发酵与蒸馏",
    profile: "清酒的米香与鲜味、烧酒的干净与微甜、白酒的酯香与强烈发酵感。它们的共同点是鲜味与谷物甜，而不是橡木。",
    bottles: ["獭祭 45（纯米大吟酿）", "Chamisul（烧酒）", "汾酒（清香型）"],
    role: "低酒精高球、清酒马天尼与东方风味酸酒；白酒适合少量用作香气增强。",
    avoid: "白酒风味极强，通常 10–20 ml 就够；清酒不要和重柑橘长时间接触。",
    first: ["saketini", "somaek", "baijiu-sour"]
  },
  {
    id: "liqueur",
    zh: "利口酒 / 苦味酒",
    en: "Liqueur & Amaro",
    no: "09",
    color: "#a33f35",
    abv: "11–35%",
    tag: "糖、苦味与草本的浓缩",
    profile: "橙味利口酒、杏仁、咖啡、奶油、草本、苦根。它们是调味件，也可以成为一杯酒的主角。",
    bottles: ["Cointreau", "Campari", "Amaro Nonino", "Mr Black", "Luxardo Maraschino"],
    role: "提供甜、苦、香与颜色；Amaretto Sour、Grasshopper 这类酒以利口酒为骨架。",
    avoid: "利口酒甜度差异巨大，不能按体积等量替换；苦味酒过量会盖住基酒。",
    first: ["amaretto-sour", "grasshopper", "aperol-spritz", "garibaldi"]
  },
  {
    id: "wine",
    zh: "葡萄酒 / 加强酒",
    en: "Wine & Fortified",
    no: "10",
    color: "#7a4b5d",
    abv: "5–20%",
    tag: "氧化、单宁与酸度",
    profile: "味美思、雪莉、波特、马德拉与起泡酒。它们提供低酒精、酸度、单宁、坚果与氧化香，是「低酒精鸡尾酒」的核心。",
    bottles: ["Dolin Dry", "Carpano Antica Formula", "Fino La Ina", "Prosecco"],
    role: "马天尼与曼哈顿的修饰酒；雪莉可做短饮主角；起泡酒负责气泡与节庆感。",
    avoid: "味美思开瓶后必须冷藏，通常 4–6 周内用完；氧化不是「陈年」。",
    first: ["dry-martini", "manhattan", "sherry-cobbler", "aperol-spritz"]
  },
  {
    id: "beer",
    zh: "啤酒",
    en: "Beer",
    no: "11",
    color: "#b58b3a",
    abv: "4–8%",
    tag: "气泡、谷物与苦味",
    profile: "拉格的清爽、小麦啤的香蕉与丁香、IPA 的酒花苦、世涛的烘焙香。啤酒在鸡尾酒里既是基酒，也是气泡与苦味的来源。",
    bottles: ["墨西哥拉格（Michelada）", "德式小麦啤", "清爽型 IPA"],
    role: "Michelada、Shandy、Beer Margarita 等啤酒鸡尾酒的主体；也可作为高球的补气材料。",
    avoid: "重酒花 IPA 会压过番茄、青柠与辣酱；啤酒必须冰镇，开瓶后尽快用完。",
    first: ["michelada"]
  },
  {
    id: "low",
    zh: "无酒精",
    en: "Zero Proof",
    no: "12",
    color: "#5d7b78",
    abv: "0%",
    tag: "用结构替代酒精",
    profile: "无酒精蒸馏液、茶、咖啡、苦精、醋饮、气泡与盐。目标不是模仿某杯酒，而是重建酸、甜、苦、香、质地与刺激。",
    bottles: ["Seedlip Garden", "Lyre's Dry Vermouth", "Strong Earl Grey", "Cold Brew"],
    role: "让不喝酒的人也能得到一杯有开头、有中段、有收尾的饮品。",
    avoid: "别只把酒精拿掉；要补苦味、盐、酸与气泡。注意苦精通常含酒精。",
    first: ["virgin-mojito", "phony-negroni", "cold-brew-tonic"]
  }
];

const MODGROUPS = [
  {
    id: "vermouth",
    zh: "味美思与加强酒",
    en: "Vermouth & Fortified",
    role: "酒体、氧化香与苦甜",
    color: "#8a5a2b",
    intro: "葡萄酒加强并加香。干味美思负责清爽与咸香，甜味美思负责圆润与苦甜， blanc 介于两者之间。它们不是「便宜的酒」，而是结构件。",
    items: [
      { n: "干味美思", ex: "Dolin Dry / Noilly Prat", use: "马天尼、Bamboo、Adonis", dose: "10–30 ml", tip: "开瓶冷藏，4–6 周内用完。" },
      { n: "甜味美思", ex: "Carpano Antica / Cocchi Storico", use: "曼哈顿、内格罗尼、Boulevardier", dose: "20–30 ml", tip: "品牌甜度差异大，先少量试。" },
      { n: "Blanc 味美思", ex: "Dolin Blanc / Lillet Blanc", use: "White Negroni、Vesper", dose: "15–30 ml", tip: "带蜜饯与花香，比干味美思柔。" },
      { n: "菲诺雪莉", ex: "La Ina / Tío Pepe", use: "Sherry Cobbler、Bamboo", dose: "45–90 ml", tip: "开瓶后冷藏，尽快喝完。" }
    ],
    examples: ["dry-martini", "manhattan", "white-negroni", "sherry-cobbler"]
  },
  {
    id: "bitters",
    zh: "苦精",
    en: "Bitters",
    role: "香料骨架与收尾",
    color: "#7b3f2e",
    intro: "高浓度酒精浸提的苦味与香料。用量以 dash 计，却决定一杯酒的「成年感」。苦精不是装饰，是配方的标点符号。",
    items: [
      { n: "芳香苦精", ex: "Angostura", use: "古典、曼哈顿、潘趣", dose: "1–3 dash", tip: "丁香与肉桂感强，手重会苦。" },
      { n: "橙味苦精", ex: "Regans' / Fee Brothers", use: "马天尼、朗姆古典", dose: "1–2 dash", tip: "提亮柑橘香，不增加明显苦味。" },
      { n: "Peychaud's", ex: "Peychaud's", use: "Sazerac、Vieux Carré", dose: "2–4 dash", tip: "樱桃与茴香，颜色偏红。" },
      { n: "莫尔苦精", ex: "Bittermens Xocolatl", use: "Oaxaca Old Fashioned", dose: "1–2 dash", tip: "可可、辣椒与烟熏，适合龙舌兰。" }
    ],
    examples: ["old-fashioned", "sazerac", "manhattan", "oaxaca-old-fashioned"]
  },
  {
    id: "citrus",
    zh: "柑橘与酸",
    en: "Citrus & Acid",
    role: "明亮度、骨架与唾液",
    color: "#b8a23c",
    intro: "酸是鸡尾酒的发动机。鲜榨、当天使用、按品种调整；柠檬更圆润，青柠更锐利，葡萄柚带苦，柚子更香。",
    items: [
      { n: "柠檬汁", ex: "Eureka / Meyer", use: "酸酒、柯林斯、边车", dose: "20–30 ml", tip: "Meyer 更甜，需减糖。" },
      { n: "青柠汁", ex: "Persian / Key", use: "大吉利、玛格丽特、莫吉托", dose: "15–30 ml", tip: "Key 更香更酸，别盲目等量替换。" },
      { n: "葡萄柚汁", ex: "Ruby Red / White", use: "海明威、帕洛玛、Siesta", dose: "30–60 ml", tip: "白葡萄柚更苦，适合苦味酒。" },
      { n: "酸调整液", ex: "柠檬酸 + 水", use: "批量、无酒精", dose: "按 1–2% 添加", tip: "让风味更亮，但别替代鲜榨。" }
    ],
    examples: ["daiquiri", "whiskey-sour", "margarita", "hemingway-daiquiri"]
  },
  {
    id: "syrup",
    zh: "糖浆与甜味剂",
    en: "Syrups & Sweeteners",
    role: "回甘、质地与香料载体",
    color: "#b07235",
    intro: "糖不只是甜。不同糖源带来质地与香气：德梅拉拉有焦糖，蜂蜜有花香，龙舌兰有植物甜，杏仁糖浆有坚果与奶油感。",
    items: [
      { n: "单糖浆", ex: "糖 1 : 水 1", use: "通用酸甜平衡", dose: "10–20 ml", tip: "冷藏可放 2–4 周。" },
      { n: "浓糖浆", ex: "糖 2 : 水 1", use: "需要浓甜与质地", dose: "7.5–15 ml", tip: "溶解慢，用温水或搅拌机。" },
      { n: "蜂蜜糖浆", ex: "蜂蜜 3 : 水 1", use: "Bee's Knees、Gold Rush", dose: "15–20 ml", tip: "纯蜂蜜难量难溶，必须稀释。" },
      { n: "杏仁糖浆", ex: "Orgeat", use: "Mai Tai、Japanese Cocktail", dose: "10–20 ml", tip: "品牌甜度差异大，先试。" },
      { n: "法勒南", ex: "Falernum", use: "Tiki、Saturn、Zombie", dose: "5–15 ml", tip: "丁香、杏仁与青柠，甜度高。" }
    ],
    examples: ["bees-knees", "mai-tai", "gold-rush", "japanese-cocktail"]
  },
  {
    id: "liqueur",
    zh: "橙味 / 果味利口酒",
    en: "Fruit & Orange Liqueur",
    role: "甜香、酒体与中层风味",
    color: "#b65b3c",
    intro: "利口酒是「带糖的香水」。橙味利口酒连接基酒与柑橘，樱桃、紫罗兰、接骨木花与桃子则负责方向性香气。",
    items: [
      { n: "Cointreau", ex: "Cointreau", use: "玛格丽特、边车、White Lady", dose: "15–25 ml", tip: "干净、酒精度高、甜度中等。" },
      { n: "Triple Sec", ex: "Combier / Bols", use: "通用橙味", dose: "15–25 ml", tip: "甜度差异大，别与 Cointreau 等量替换。" },
      { n: "黑樱桃利口酒", ex: "Luxardo Maraschino", use: "Last Word、Aviation、Hemingway", dose: "5–15 ml", tip: "杏仁与樱桃核香，几毫升就够。" },
      { n: "接骨木花利口酒", ex: "St-Germain", use: "Southside、Spritz", dose: "10–20 ml", tip: "花香脆弱，别与重泥煤同用。" },
      { n: "紫罗兰利口酒", ex: "Rothman & Winter", use: "Aviation、Blue Moon", dose: "5–10 ml", tip: "颜色与花香都强，过量像香水。" }
    ],
    examples: ["margarita", "sidecar", "last-word", "aviation"]
  },
  {
    id: "amaro",
    zh: "苦味酒 / 阿玛罗",
    en: "Amaro & Bitter",
    role: "苦味、草本与收尾",
    color: "#8f3b30",
    intro: "苦味是成人风味的捷径。Campari 的红与苦、Aperol 的橙与轻、Fernet 的薄荷与药感、Cynar 的朝鲜蓟与泥土。",
    items: [
      { n: "Campari", ex: "Campari", use: "内格罗尼、Boulevardier、Jungle Bird", dose: "20–30 ml", tip: "苦甜强烈，适合红色基酒。" },
      { n: "Aperol", ex: "Aperol", use: "Aperol Spritz、Paper Plane", dose: "20–30 ml", tip: "更甜更低苦，适合开胃。" },
      { n: "Fernet-Branca", ex: "Fernet-Branca", use: "Toronto、Hanky Panky", dose: "5–10 ml", tip: "薄荷、药草与极强苦味，少量。" },
      { n: "Cynar", ex: "Cynar", use: "Little Italy、Rabo de Galo", dose: "15–25 ml", tip: "朝鲜蓟与焦糖，苦中带甜。" },
      { n: "Suze", ex: "Suze", use: "White Negroni", dose: "15–20 ml", tip: "龙胆根苦味，干而花香。" }
    ],
    examples: ["negroni", "boulevardier", "jungle-bird", "white-negroni"]
  },
  {
    id: "coffee",
    zh: "咖啡与可可",
    en: "Coffee & Cacao",
    role: "烘焙苦、油脂与甜点感",
    color: "#5b4036",
    intro: "咖啡提供烘焙苦与油脂，可可提供粉质甜香。它们既能做主角，也能像苦精一样给烈酒加深度。",
    items: [
      { n: "浓缩咖啡", ex: "现萃 Espresso", use: "Espresso Martini、Irish Coffee", dose: "30 ml", tip: "降温后摇，避免过度稀释。" },
      { n: "冷萃咖啡", ex: "Cold Brew", use: "Cold Brew Tonic、咖啡高球", dose: "60–90 ml", tip: "浓度高，风味更圆。" },
      { n: "咖啡利口酒", ex: "Mr Black / Kahlúa", use: "White Russian、Revolver", dose: "15–30 ml", tip: "Mr Black 更干，Kahlúa 更甜。" },
      { n: "白可可利口酒", ex: "Tempus Fugit Crème de Cacao", use: "Grasshopper、Brandy Alexander", dose: "20–30 ml", tip: "白色版本不改变颜色。" }
    ],
    examples: ["espresso-martini", "white-russian", "brandy-alexander", "revolver"]
  },
  {
    id: "cream",
    zh: "蛋、奶油与乳",
    en: "Egg, Cream & Dairy",
    role: "质地、泡沫与圆润",
    color: "#aa9270",
    intro: "蛋清增加泡沫与丝绒感，全蛋增加厚度，奶油增加甜点感，椰奶增加热带质地。它们都需要更低的温度和更明确的收尾。",
    items: [
      { n: "蛋清", ex: "新鲜巴氏蛋清", use: "Whiskey Sour、Clover Club", dose: "20–25 ml", tip: "干摇 10–15 秒，再加冰摇。" },
      { n: "全蛋", ex: "新鲜鸡蛋", use: "Flip、Eggnog", dose: "1 个", tip: "肉豆蔻与酒精度是必要平衡。" },
      { n: "淡奶油", ex: "35% Heavy Cream", use: "Alexander、Irish Coffee", dose: "20–30 ml", tip: "轻微打发，不要硬性发泡。" },
      { n: "椰奶油", ex: "Coco López", use: "Piña Colada、Painkiller", dose: "30–45 ml", tip: "摇匀罐中内容，甜度很高。" },
      { n: "Aquafaba", ex: "鹰嘴豆水", use: "纯素替代蛋清", dose: "20–30 ml", tip: "摇和时间更长，泡沫略松。" }
    ],
    examples: ["whiskey-sour", "clover-club", "pina-colada", "brandy-alexander"]
  },
  {
    id: "juice",
    zh: "果汁与果泥",
    en: "Juice & Purée",
    role: "酸度、颜色与热带体积",
    color: "#a8863c",
    intro: "果汁不是填充液。菠萝提供泡沫与酸，葡萄柚提供苦，番茄提供鲜味，桃子提供质地。选择与比例决定一杯酒的方向。",
    items: [
      { n: "菠萝汁", ex: "鲜榨 / 高压杀菌", use: "Tiki、Piña Colada", dose: "45–90 ml", tip: "鲜榨会起泡，摇和更绵密。" },
      { n: "橙汁", ex: "鲜榨 Valencia", use: "Garibaldi、Tequila Sunrise", dose: "90–120 ml", tip: "现榨，不要用含糖果汁。" },
      { n: "西柚汁", ex: "Ruby Red", use: "Paloma、Hemingway", dose: "30–60 ml", tip: "白柚更苦，适合 Campari。" },
      { n: "蔓越莓汁", ex: "100% 果汁", use: "Cosmopolitan、Sea Breeze", dose: "30–90 ml", tip: "酸涩，别与过多糖并用。" },
      { n: "番茄汁", ex: "高品质番茄汁", use: "Bloody Mary", dose: "120 ml", tip: "盐、酸、鲜味缺一不可。" }
    ],
    examples: ["pina-colada", "paloma", "bloody-mary", "garibaldi"]
  },
  {
    id: "mixer",
    zh: "气泡与长饮",
    en: "Soda, Tonic & Beer",
    role: "稀释、气泡与苦甜",
    color: "#5f7d76",
    intro: "气泡是口感的一部分。苏打中性，汤力水带奎宁苦，姜啤带辛辣，可乐带焦糖与磷酸，起泡酒带酸与酒体。",
    items: [
      { n: "苏打水", ex: "高碳酸矿泉水", use: "Collins、Ranch Water", dose: "60–120 ml", tip: "冰镇、现开、沿杯壁注入。" },
      { n: "汤力水", ex: "Fever-Tree / Schweppes", use: "Gin & Tonic", dose: "90–150 ml", tip: "奎宁苦度差异大，选一款固定使用。" },
      { n: "姜啤", ex: "Fever-Tree / Gosling's", use: "Moscow Mule、Dark 'n' Stormy", dose: "90–120 ml", tip: "辛辣度决定是否需要额外糖。" },
      { n: "可乐", ex: "可口可乐 / 百事", use: "Cuba Libre、Batanga", dose: "90–120 ml", tip: "冰镇与青柠是灵魂。" },
      { n: "起泡酒", ex: "Prosecco / Champagne", use: "Spritz、French 75、Bellini", dose: "60–120 ml", tip: "提前冰镇，开瓶后尽快用完。" }
    ],
    examples: ["gin-tonic", "moscow-mule", "cuba-libre", "aperol-spritz"]
  },
  {
    id: "aromatic",
    zh: "香料、盐与鲜味",
    en: "Spice, Salt & Umami",
    role: "刺激、深度与收尾",
    color: "#74624c",
    intro: "盐能压低苦味、提升甜味与香气；辣椒与胡椒增加刺激；肉豆蔻、肉桂与八角提供温暖；鲜味让番茄与肉感鸡尾酒更完整。",
    items: [
      { n: "盐 / 盐水", ex: "20% 盐水", use: "玛格丽特、Bloody Mary", dose: "1–3 dash", tip: "盐水比盐粒更易控制。" },
      { n: "现磨肉豆蔻", ex: "Whole Nutmeg", use: "Alexander、Painkiller", dose: "现磨少许", tip: "香气挥发快，出品前磨。" },
      { n: "肉桂 / 肉桂糖浆", ex: "Ceylon Cinnamon", use: "Zombie、Tiki", dose: "5–15 ml", tip: "与丁香、多香果搭配。" },
      { n: "苦艾酒冲洗", ex: "Absinthe", use: "Sazerac、Corpse Reviver", dose: "1 tsp 冲洗", tip: "倒掉多余，只留香气。" },
      { n: "橄榄盐水", ex: "Olive Brine", use: "Dirty Martini", dose: "5–15 ml", tip: "咸鲜强，别盖过酒。" },
      { n: "伍斯特 / 辣酱", ex: "Worcestershire / Tabasco", use: "Bloody Mary", dose: "2–4 dash", tip: "先少后多，逐杯试味。" }
    ],
    examples: ["margarita", "bloody-mary", "sazerac", "dry-martini"]
  },
  {
    id: "tea",
    zh: "茶与植物浸液",
    en: "Tea & Infusions",
    role: "单宁、花香与低酒精体积",
    color: "#7a8656",
    intro: "茶是低酒精鸡尾酒最有力的工具：单宁提供酒体，花香提供中段，咖啡因带来轻微刺激。冷萃比热泡更少苦涩。",
    items: [
      { n: "伯爵茶", ex: "Earl Grey", use: "无酒精高球、金汤力", dose: "60–90 ml 浓茶", tip: "佛手柑与金酒很合拍。" },
      { n: "茉莉绿茶", ex: "Jasmine", use: "清酒、皮斯科、低酒精", dose: "60–90 ml", tip: "低温浸泡，避免苦涩。" },
      { n: "洋甘菊", ex: "Chamomile", use: "蜂蜜酸酒、睡前饮", dose: "60–90 ml", tip: "与蜂蜜、苹果、白兰地搭配。" },
      { n: "洛神花", ex: "Hibiscus", use: "无酒精 Spritz、潘趣", dose: "30–60 ml", tip: "酸度高、颜色强，减糖。" }
    ],
    examples: ["cold-brew-tonic", "phony-negroni", "sherry-cobbler"]
  }
];

const GLOSSARY = [
  ["Dash", "约 0.6–1 ml，通常指苦精瓶口一次短促倾倒；不同瓶口差异很大。"],
  ["Barspoon", "吧勺，约 5 ml；也指一次搅拌动作。"],
  ["Dry / Wet", "Dry 指味美思少、酒感干；Wet 指味美思多、口感柔。"],
  ["Up", "酒液冰镇后滤入无冰的杯中说「up」，并非「加冰」。"],
  ["Build", "直接在服务杯中加冰与材料，现场调和。"],
  ["Rinse", "用少量烈酒旋转杯壁后倒掉，只留香气。"],
  ["Dry Shake", "不加冰先摇，用于蛋清、奶油或充气；再加冰第二次摇。"],
  ["Cordial", "浓缩的柑橘糖浆，如青柠 cordial；甜酸已平衡。"],
  ["Oleo Saccharum", "糖与柑橘皮静置析出的芳香糖浆，潘趣的核心。"],
  ["Overproof", "酒精度高于常规的烈酒，常见于朗姆与苦艾。"],
  ["Dilution", "搅拌或摇和带入的水，通常占成品体积的 15–30%。"],
  ["ABV", "Alcohol by Volume，酒精度体积百分比。"]
];
