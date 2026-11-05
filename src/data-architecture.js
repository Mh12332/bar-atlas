/* 架构 2.0：从“家族卡片”升级为可分析的结构模型 + 发展脉络。 */
const ARCH_MODEL = [
  {
    no: "01",
    zh: "骨架",
    en: "Spirit",
    title: "谁撑住这杯酒",
    text: "基酒决定酒体、香气上限与可承受的稀释。先判断它是干净、甜、苦、烟还是植物型，再决定配方。"
  },
  {
    no: "02",
    zh: "平衡",
    en: "Balance",
    title: "酸、甜、苦三条轴",
    text: "酸给明亮，糖给体积，苦给收尾。三者不是固定比例，而是随着基酒强度、利口酒甜度与稀释动态移动。"
  },
  {
    no: "03",
    zh: "质地",
    en: "Texture",
    title: "蛋、奶、冰、气泡",
    text: "蛋清给泡沫，奶油给乳脂，碎冰给冰沙，气泡给轻盈。质地改变的是吞咽感与香气释放，不只是“口感”。"
  },
  {
    no: "04",
    zh: "服务",
    en: "Service",
    title: "温度、稀释、杯型",
    text: "同一配方，冰型、摇和时间、杯型与出杯温度不同，结果就是两杯酒。服务层是架构的一部分。"
  },
  {
    no: "05",
    zh: "香气",
    en: "Aroma",
    title: "苦精、皮油、装饰",
    text: "苦精与柑橘皮油负责“方向”和“收尾”。装饰必须可食用、有香气，不是纯视觉。"
  }
];

/* 架构不是按名字分类，而是按“改动一个变量后是否仍是同一骨架”推导。 */
const ARCH_DERIVATIONS = [
  {
    from: "old-fashioned",
    rule: "烈酒 + 糖 + 苦精；最小结构",
    branches: [
      { op: "加柑橘酸 + 糖", to: "sour", target: "whiskey-sour", verdict: "新骨架", note: "加入酸后，平衡从“甜苦”转成“酸甜”，进入酸酒三角。" },
      { op: "加苏打 + 冰", to: "highball", target: "whiskey-highball", verdict: "同骨架 · 长饮", note: "只改稀释与温度，结构不变，酒体被拉长。" },
      { op: "加蛋 + 奶油", to: "flip", target: "brandy-alexander", verdict: "新质地层", note: "质地改变，但烈酒与甜的骨架仍在；从短饮变甜点杯。" }
    ]
  },
  {
    from: "duo",
    rule: "烈酒 + 加香酒；双料母公式",
    branches: [
      { op: "加苦精 + 糖", to: "old-fashioned", target: "old-fashioned", verdict: "新骨架", note: "加香酒退场，苦精与糖接管平衡，得到古典。" },
      { op: "加柑橘 + 糖", to: "sour", target: "daiquiri", verdict: "新骨架", note: "从双料的“酒+酒”变成“酒+酸+甜”。" },
      { op: "加苏打 + 冰", to: "highball", target: "gin-tonic", verdict: "同骨架 · 长饮", note: "双料被气泡与冰拉长，结构仍然是“主体 + 加香”。" },
      { op: "加薄荷 + 碎冰", to: "julep", target: "mint-julep", verdict: "新服务层", note: "碎冰、薄荷与杯型改变温度与香气，骨架不变。" }
    ]
  },
  {
    from: "sour",
    rule: "烈酒 + 酸 + 甜；2 : 1 : 0.75",
    branches: [
      { op: "加苏打 60 ml", to: "collins", target: "tom-collins", verdict: "同骨架 · 长饮", note: "酸酒 + 苏打 = 柯林斯；糖通常略增，抵抗稀释。" },
      { op: "加蛋清 / 奶油", to: "flip", target: "pisco-sour", verdict: "新质地层", note: "泡沫与乳脂改变口感，但酸甜三角不散。" },
      { op: "加薄荷 + 碎冰", to: "julep", target: "mojito", verdict: "新服务层", note: "薄荷与碎冰把短酸酒拉成长饮；莫吉托是柯林斯/酸酒的交界。" },
      { op: "把气泡换成起泡酒", to: "highball", target: "french-75", verdict: "同骨架 · 气泡", note: "酸酒的 30% 由起泡酒承担；法国 75 是酸酒的气泡版。" },
      { op: "换甜为橙味利口酒", to: "daisy", target: "sidecar", verdict: "同骨架 · 换甜", note: "糖换成橙味利口，酸酒变成边车/玛格丽特的黛西分支。" },
      { op: "多朗姆 + 香料糖浆", to: "tiki", target: "mai-tai", verdict: "新骨架", note: "酸酒进入 Tiki：多朗姆、杏仁、橙味与香料叠加，结构复杂度上升。" },
      { op: "去酸 + 加苦精", to: "old-fashioned", target: "old-fashioned", verdict: "新骨架", note: "去酸是两次操作（去酸 + 换苦精），不能再算酸酒变体。" }
    ]
  },
  {
    from: "highball",
    rule: "烈酒 + 气泡 + 冰；1 : 2–3",
    branches: [
      { op: "加柑橘 + 糖", to: "collins", target: "gin-fizz", verdict: "新骨架", note: "高球加入酸与甜，变成柯林斯/菲士的酸甜长饮。" },
      { op: "加苦酒 + 起泡酒", to: "aperitivo", target: "aperol-spritz", verdict: "新骨架", note: "苦酒与起泡酒取代苏打，进入 Spritz 的苦甜气泡结构。" },
      { op: "换姜啤 + 青柠", to: "highball", target: "moscow-mule", verdict: "同骨架 · 换气泡", note: "气泡来源从苏打换姜啤，结构仍是“烈酒 + 气泡”。" }
    ]
  },
  {
    from: "aperitivo",
    rule: "苦酒 + 加香酒 + 气泡；苦甜平衡",
    branches: [
      { op: "金酒替苏打", to: "aperitivo", target: "negroni", verdict: "同骨架 · 换主体", note: "美国佬去掉苏打、加金酒，成为内格罗尼；苦甜骨架不变。" },
      { op: "威士忌替金酒", to: "aperitivo", target: "boulevardier", verdict: "同骨架 · 换主体", note: "换基酒得到花花公子；苦味与甜味比例基本不动。" },
      { op: "起泡酒替金酒", to: "aperitivo", target: "sbagliato", verdict: "同骨架 · 低酒精", note: "起泡酒把酒精度降下来，气泡感上升，仍是苦甜三角。" }
    ]
  },
  {
    from: "tiki",
    rule: "多朗姆 + 果汁 + 香料糖浆",
    branches: [
      { op: "加碎冰 + 搅打", to: "blended", target: "pina-colada", verdict: "同骨架 · 质地", note: "搅打与碎冰把 Tiki 变成冰沙质地；配方逻辑不变。" },
      { op: "换咖啡 + 奶油", to: "coffee", target: "espresso-martini", verdict: "新骨架", note: "咖啡与奶油取代果汁与香料，进入咖啡/甜点结构。" }
    ]
  },
  {
    from: "punch",
    rule: "酸 + 甜 + 酒 + 水；批量母公式",
    branches: [
      { op: "多朗姆 + 香料", to: "tiki", target: "planters-punch", verdict: "同骨架 · 复杂化", note: "潘趣的多朗姆与香料版本，是 Tiki 的祖先之一。" },
      { op: "加茶 + 气泡", to: "highball", target: "arnold-palmer", verdict: "同骨架 · 长饮", note: "茶与气泡把潘趣变成日常长饮。" }
    ]
  }
];

const ARCH_LINEAGE = [
  {
    id: "stirred",
    zh: "搅拌与苦香",
    en: "Stirred & Aromatic",
    note: "从苦精、糖与烈酒的古典，走向干、冷、透明的短饮。",
    nodes: [
      { year: "1850s", id: "sazerac", note: "苦精、糖、威士忌与苦艾冲洗。" },
      { year: "1880s", id: "martinez", note: "金酒、甜味美思与黑樱桃，马天尼的甜味祖先。" },
      { year: "1900s", id: "dry-martini", note: "干味美思与搅拌，把甜味祖先推向干、冷。" },
      { year: "1950s", id: "vesper", note: "金酒、伏特加与 Lillet，酒精度更高。" }
    ]
  },
  {
    id: "bitter",
    zh: "苦甜与开胃",
    en: "Bitter & Aperitivo",
    note: "金巴利、味美思与烈酒的三轴结构，向低酒精与热带分岔。",
    nodes: [
      { year: "1860s", id: "americano", note: "金巴利、甜味美思与苏打。" },
      { year: "1919", id: "negroni", note: "金酒替苏打，形成 1:1:1。" },
      { year: "1927", id: "boulevardier", note: "威士忌替金酒，更暖、更橡木。" },
      { year: "1970s", id: "sbagliato", note: "起泡酒替金酒，低酒精气泡。" },
      { year: "2000s", id: "kingston-negroni", note: "牙买加朗姆替金酒，热带果香。" }
    ]
  },
  {
    id: "rum-sour",
    zh: "朗姆与酸酒",
    en: "Rum & Sour",
    note: "甘蔗酸酒从古巴出发，经过 Tiki 与热带水果的分岔。",
    nodes: [
      { year: "1898", id: "daiquiri", note: "白朗姆、青柠与糖。" },
      { year: "1930s", id: "hemingway-daiquiri", note: "西柚与黑樱桃改变苦甜。" },
      { year: "1944", id: "mai-tai", note: "多朗姆、橙味、杏仁与青柠。" },
      { year: "1978", id: "jungle-bird", note: "朗姆 + 金巴利 + 菠萝，苦甜热带。" }
    ]
  },
  {
    id: "whiskey-sour",
    zh: "威士忌酸酒",
    en: "Whiskey Sour",
    note: "酸酒三角在威士忌上不断换甜味、换质地、换颜色。",
    nodes: [
      { year: "1862", id: "whiskey-sour", note: "威士忌、柠檬、糖；蛋清后来标准化。" },
      { year: "1880s", id: "new-york-sour", note: "红酒漂浮，加入单宁。" },
      { year: "1930s", id: "brown-derby", note: "西柚与蜂蜜，苦甜更明显。" },
      { year: "2000s", id: "gold-rush", note: "蜂蜜替糖，更圆、更现代。" },
      { year: "2005", id: "penicillin", note: "姜、蜂蜜与烟熏苏格兰。" }
    ]
  },
  {
    id: "modern",
    zh: "现代与料理化",
    en: "Modern & Culinary",
    note: "咖啡、苦精、澄清与低酒精，把鸡尾酒推向餐厅与家庭吧台。",
    nodes: [
      { year: "1980s", id: "espresso-martini", note: "咖啡、伏特加、咖啡利口酒与泡沫。" },
      { year: "2008", id: "paper-plane", note: "波本、Aperol、Amaro 与柠檬，等量结构。" },
      { year: "2009", id: "trinidad-sour", note: "苦精当基酒，杏仁与柠檬平衡。" },
      { year: "2011", id: "naked-and-famous", note: "梅斯卡尔、黄查特、Aperol 与青柠。" }
    ]
  }
];
