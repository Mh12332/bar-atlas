/* 专题 2.0：不再按“家族故事”分组，而是把配方拆成可比较的维度。 */
const TOPIC_SYSTEMS = [
  {
    id: "sour-formula",
    no: "01",
    kicker: "ACID / SWEET / SPIRIT",
    zh: "酸酒公式",
    en: "The Sour Formula",
    question: "同样是酸、甜、烈，为什么喝起来完全不是一杯酒？",
    thesis: "酸酒只有三个核心变量：烈酒、酸、甜。第四样东西——柑橘种类、利口酒、蛋清、气泡——才决定它像谁。先看比例，再看变量。",
    rows: [
      { id: "daiquiri", diff: "白朗姆 + 青柠 + 糖，最干净的 2:1:1 样本。" },
      { id: "margarita", diff: "龙舌兰 + 青柠 + 橙味利口酒，甜味从糖变成橙香。" },
      { id: "whiskey-sour", diff: "波本 + 柠檬 + 糖 + 蛋清，质地与橡木加入。" },
      { id: "sidecar", diff: "干邑 + 柠檬 + 橙味利口酒，酒体更圆、更葡萄。" },
      { id: "gimlet", diff: "金酒 + 青柠 + 糖，植物香把酸度拉得更锐利。" },
      { id: "pisco-sour", diff: "皮斯科 + 青柠 + 糖 + 蛋清，花香与泡沫。" }
    ],
    guide: "想要最干净：Daiquiri；想要橙香：Margarita；想要蛋清质地：Whiskey Sour / Pisco Sour；想要葡萄与木质：Sidecar。"
  },
  {
    id: "spirit-swap",
    no: "02",
    kicker: "BASE / STRUCTURE / SWAP",
    zh: "换基酒，不换骨架",
    en: "Spirit Swap Matrix",
    question: "同一套结构，换一瓶烈酒，哪些能成立，哪些会散？",
    thesis: "换基酒不是替换名字，而是替换酒体、甜度与香气。高酒精度、强风味、带甜味的基酒，对苦精、味美思与糖的容忍度完全不同。",
    rows: [
      { id: "old-fashioned", diff: "威士忌 + 糖 + 苦精：基酒必须能撑住稀释。" },
      { id: "manhattan", diff: "威士忌 + 甜味美思：换成黑麦更辛香，换成波本更甜。" },
      { id: "negroni", diff: "金酒 + 金巴利 + 甜味美思：金酒提供植物骨架。" },
      { id: "dry-martini", diff: "金酒 + 干味美思：基酒越中性，味美思越显眼。" },
      { id: "whiskey-sour", diff: "波本 + 柠檬 + 糖：换成苏格兰会多烟熏与干涩。" },
      { id: "margarita", diff: "龙舌兰 + 青柠 + 橙味：换成梅斯卡尔会多烟熏。" }
    ],
    guide: "先问基酒能不能撑住配方里的糖、苦与稀释；再问它的香气会不会和辅料打架。"
  },
  {
    id: "bitter-triangle",
    no: "03",
    kicker: "BITTER / SWEET / STRENGTH",
    zh: "苦甜三角",
    en: "Bitter–Sweet–Strong",
    question: "金巴利、味美思与烈酒，三者的比例一变，酒会走向哪里？",
    thesis: "苦甜酒的结构不是“苦 + 甜”，而是三条轴同时移动：苦味强度、甜味厚度、酒精度。换基酒、换味美思、加气泡，都是在移动其中一条轴。",
    rows: [
      { id: "negroni", diff: "1:1:1，苦、甜、烈都在中间。" },
      { id: "boulevardier", diff: "威士忌替金酒，酒体更暖、更橡木。" },
      { id: "old-pal", diff: "干味美思替甜味美思，苦更锐利、整体更干。" },
      { id: "sbagliato", diff: "起泡酒替金酒，酒精度骤降、气泡上升。" },
      { id: "kingston-negroni", diff: "牙买加朗姆替金酒，热带果香进入苦甜。" },
      { id: "white-negroni", diff: "Lillet + Suze，苦味更草本、颜色更浅。" }
    ],
    guide: "想要标准苦甜：Negroni；想要更暖：Boulevardier；想要更干：Old Pal；想要低酒精：Sbagliato；想要热带：Kingston。"
  },
  {
    id: "bubbles",
    no: "04",
    kicker: "BUBBLE / DILUTION / SERVE",
    zh: "气泡与稀释",
    en: "Bubble & Dilution",
    question: "同样加水、加冰、加气泡，为什么有的是 Highball，有的是 Spritz？",
    thesis: "气泡不是装饰，它是稀释方式。苏打、汤力、姜啤、起泡酒、可乐，分别带来不同的糖、苦、酸与气泡强度；杯型和冰量决定稀释速度。",
    rows: [
      { id: "gin-tonic", diff: "汤力水的奎宁苦 + 金酒植物香，气泡中等。" },
      { id: "whiskey-highball", diff: "苏打水无糖，只做稀释与气泡；威士忌必须够味。" },
      { id: "tom-collins", diff: "柠檬 + 糖 + 苏打，酸甜被拉长，气泡更活跃。" },
      { id: "aperol-spritz", diff: "Prosecco + Aperol + 苏打，3:2:1 的苦甜气泡。" },
      { id: "french-75", diff: "柠檬 + 糖 + 起泡酒，酸度与气泡都高。" },
      { id: "mojito", diff: "薄荷 + 青柠 + 朗姆 + 苏打，薄荷与碎冰主导。" }
    ],
    guide: "想要苦味气泡：Gin & Tonic；想要纯稀释：Whiskey Highball；想要酸甜长饮：Tom Collins；想要餐前苦甜：Aperol Spritz。"
  },
  {
    id: "texture",
    no: "05",
    kicker: "TEMPERATURE / TEXTURE",
    zh: "温度与质地",
    en: "Temperature & Texture",
    question: "热、冷、冰沙、蛋、奶——温度与质地如何改变一杯酒的结构？",
    thesis: "温度改变香气释放与甜感，质地改变酒体与吞咽感。蛋清、奶油、牛奶、碎冰不是“加料”，而是把同一杯酒变成另一种饮品。",
    rows: [
      { id: "hot-toddy", diff: "热水 + 蜂蜜 + 柠檬：热、稀、香气上扬。" },
      { id: "irish-coffee", diff: "热咖啡 + 威士忌 + 冷奶油：热与冷的分层。" },
      { id: "espresso-martini", diff: "冷、浓缩咖啡 + 泡沫：苦与清醒感。" },
      { id: "alexander", diff: "干邑 + 可可 + 奶油：甜点杯的乳脂质地。" },
      { id: "grasshopper", diff: "薄荷 + 可可 + 奶油：绿色甜点杯，甜度高。" },
      { id: "sherry-flip", diff: "雪莉 + 全蛋 + 糖：咸鲜与蛋奶的古老质地。" }
    ],
    guide: "想要热与蜂蜜：Hot Toddy；想要咖啡与奶油：Irish Coffee；想要冷咖啡泡沫：Espresso Martini；想要甜点：Alexander / Grasshopper。"
  },
  {
    id: "low-alcohol",
    no: "06",
    kicker: "LOW / NO / SESSION",
    zh: "低酒精光谱",
    en: "Low–No Spectrum",
    question: "低酒精不是“少放酒”，而是用什么替代酒精的体积与风味？",
    thesis: "低酒精饮品需要补足三件事：苦味、酸度、气泡或质地。否则只是稀释过的酒。雪莉、味美思、开胃酒、无酒精蒸馏酒，都是不同的补足方式。",
    rows: [
      { id: "phony-negroni", diff: "无酒精金酒/金巴利/味美思，模拟苦甜三角。" },
      { id: "rebujito", diff: "Fino 雪莉 + 柠檬汽水，咸鲜 + 气泡，极轻。" },
      { id: "aperol-spritz", diff: "Aperol + Prosecco + 苏打，低酒精但仍有苦甜。" },
      { id: "americano", diff: "金巴利 + 甜味美思 + 苏打，苦味长饮。" },
      { id: "bamboo", diff: "Fino 雪莉 + 干味美思，干型低酒精短饮。" },
      { id: "tinto-de-verano", diff: "红葡萄酒 + 柠檬汽水，果味、单宁、低酒精。" }
    ],
    guide: "想要零酒精：Phony Negroni；想要咸鲜气泡：Rebujito；想要苦味长饮：Americano；想要干型短饮：Bamboo。"
  },
  {
    id: "generations",
    no: "07",
    kicker: "GENERATION / REINVENTION",
    zh: "经典如何被重新发明",
    en: "How Classics Survive",
    question: "为什么有的酒消失了，有的酒被改写成现代经典？",
    thesis: "经典不是不变，而是能被不断重新解释。存活下来的配方，通常保留一个清晰骨架，同时允许基酒、甜味或温度被替换。",
    columns: ["年代", "原始结构", "现代改写", "为什么活下来"],
    rows: [
      { id: "martinez", cells: ["1880s", "金酒 + 甜味美思 + 黑樱桃", "Dry Martini 去掉甜味美思", "骨架简单，能随时间变干"] },
      { id: "dry-martini", cells: ["1900s", "金酒 + 干味美思", "Vesper / Gibson / Dirty", "温度与比例可无限微调"] },
      { id: "negroni", cells: ["1919", "金酒 + 金巴利 + 甜味美思", "Boulevardier / Sbagliato / Kingston", "1:1:1 易记，基酒可换"] },
      { id: "mai-tai", cells: ["1944", "朗姆 + 橙味 + 杏仁 + 青柠", "Tiki 模板，变体极多", "多朗姆与香料允许个性"] },
      { id: "penicillin", cells: ["2005", "苏格兰 + 蜂蜜 + 姜 + 柠檬", "现代酸酒的标准模板", "姜与蜂蜜有记忆点"] },
      { id: "espresso-martini", cells: ["1980s", "伏特加 + 咖啡 + 咖啡利口酒", "冷萃、氮气、不同咖啡", "咖啡因 + 泡沫 + 夜生活场景"] }
    ],
    guide: "判断一个经典是否能活下来：骨架是否一句话说清；是否允许一个变量被替换；是否有明确的场景。"
  }
];
