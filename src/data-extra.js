/* ============================================================
   配方库 · 现代经典与进阶经典
   ============================================================ */

const COCKTAILS_EXTRA = [
  {
    id: "martinez", zh: "马丁内斯", en: "Martinez", fam: "duo", base: "gin", sub: "老汤姆 / 伦敦干金",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "7.5 ml"], ["橙味苦精 Orange Bitters", "1 dash"]],
    steps: [
      "所有液体加冰搅拌 25 秒。",
      "滤入冰镇碟形杯。",
      "橙皮油或樱桃装饰。"
    ],
    gar: "橙皮 / 樱桃",
    note: "马天尼的前身之一，也是「甜味美思 + 黑樱桃」的经典组合。Old Tom 的微甜最合适；London Dry 会把樱桃香推得更前。",
    flavor: ["花香", "温暖", "苦香"],
    v: [
      ["Dry Martinez", "Dry Martinez", "用干味美思替代甜味美思，黑樱桃减到 5 ml，更干。"],
      ["Perfect Martinez", "Perfect Martinez", "甜、干味美思各 15 ml，结构更轻。"],
      ["Genever Martinez", "Genever Martinez", "用荷兰金酒替代金酒，麦芽与香料更突出。"]
    ]
  },
  {
    id: "bramble", zh: "荆棘", en: "Bramble", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "liqueur"], method: "摇和", glass: "古典杯", strength: 3, diff: 2,
    ing: [["金酒 Gin", "50 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "12.5 ml"], ["黑莓利口酒 Blackberry Liqueur", "15 ml"], ["碎冰 Crushed Ice", "满杯"]],
    steps: [
      "金酒、柠檬汁与糖浆加冰摇和 10–12 秒。",
      "滤入加碎冰的古典杯。",
      "沿杯壁缓慢淋黑莓利口酒，形成红色纹路，黑莓与柠檬片装饰。"
    ],
    gar: "黑莓 + 柠檬片",
    note: "1980 年代伦敦的现代经典。黑莓利口酒不是摇进去，而是最后淋在碎冰上；喝的时候从甜到酸，层次才出现。",
    flavor: ["酸甜", "花香", "清爽"],
    v: [
      ["Bramble 2.0", "Bramble 2.0", "用 2 茶匙黑莓果酱替代利口酒，先与金酒摇匀，果味更自然。"],
      ["Bramble Fizz", "Bramble Fizz", "摇好后滤入高球杯，补 60 ml 苏打，顶部淋黑莓利口酒。"],
      ["Blackberry Sour", "Blackberry Sour", "把黑莓利口酒与金酒一起摇和，颜色均匀，酸度更直接。"]
    ]
  },
  {
    id: "bijou", zh: "珠宝", en: "Bijou", fam: "duo", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["绿查特 Green Chartreuse", "20 ml"], ["甜味美思 Sweet Vermouth", "20 ml"], ["橙味苦精 Orange Bitters", "1 dash"]],
    steps: [
      "所有液体加冰搅拌 25–30 秒。",
      "滤入冰镇碟形杯。",
      "橙皮油与樱桃装饰。"
    ],
    gar: "橙皮 + 樱桃",
    note: "19 世纪末的经典，名字来自三种酒的颜色像宝石。绿查特的甜与药草很强，20 ml 足够；想更干，金酒加到 50 ml。",
    flavor: ["草本", "花香", "苦香"],
    v: [
      ["Bijou Blanc", "Bijou Blanc", "用干味美思替代甜味美思，绿查特减到 15 ml，更清亮。"],
      ["Bijou Royale", "Bijou Royale", "补 60 ml 起泡酒，降低酒精度与甜度。"]
    ]
  },
  {
    id: "twentieth-century", zh: "二十世纪", en: "20th Century", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "coffee", "citrus"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["Blanc 味美思 Blanc Vermouth", "20 ml"], ["白可可利口酒 White Cacao Liqueur", "15 ml"], ["柠檬汁 Lemon Juice", "20 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "柠檬皮或可可粉装饰。"
    ],
    gar: "柠檬皮",
    note: "1930 年代伦敦的经典，名字来自当时的热门列车。白可可的甜与 Lillet 的葡萄酒香需要柠檬拉起，别额外加糖。",
    flavor: ["花香", "咖啡", "酸甜"],
    v: [
      ["20th Century Fizz", "20th Century Fizz", "摇好后补 45 ml 苏打，质地更轻。"],
      ["Twentieth Century Cocktail", "Twentieth Century Cocktail", "用 Cocchi Americano 替代 Lillet，加 1 dash 橙味苦精，苦味更明显。"]
    ]
  },
  {
    id: "hanky-panky", zh: "汉基潘基", en: "Hanky Panky", fam: "duo", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "amaro", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["甜味美思 Sweet Vermouth", "45 ml"], ["Fernet-Branca", "7.5 ml"], ["橙皮 Orange Peel", "1 片"]],
    steps: [
      "所有液体加冰搅拌 25 秒。",
      "滤入冰镇碟形杯。",
      "橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "Savoy 酒店的经典，Ada Coleman 的创作。Fernet 的薄荷与药草只要 7.5 ml，就能把甜味美思的糖分收住。",
    flavor: ["苦香", "草本", "温暖"],
    v: [
      ["Hanky Panky No. 2", "Hanky Panky No. 2", "用 Averna 替代 Fernet，苦味更圆、焦糖更多。"],
      ["Toronto", "Toronto", "黑麦 + Fernet + 糖浆，更温暖。"],
      ["Little Italy", "Little Italy", "黑麦 + Cynar + 甜味美思，蔬菜苦味版。"]
    ]
  },
  {
    id: "blood-and-sand", zh: "血与沙", en: "Blood and Sand", fam: "sour", base: "whiskey", sub: "苏格兰调和威士忌",
    mods: ["vermouth", "liqueur", "juice"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["苏格兰威士忌 Blended Scotch Whisky", "30 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "30 ml"], ["橙汁 Orange Juice", "30 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "橙皮油与樱桃装饰。"
    ],
    gar: "橙皮 + 樱桃",
    note: "1922 年同名电影带来的经典。四等分配方很甜，橙汁必须鲜榨、带酸；如果樱桃利口酒太甜，减到 20 ml。",
    flavor: ["酸甜", "温暖", "花香"],
    v: [
      ["Blood and Sand Fizz", "Blood and Sand Fizz", "摇好后补 45 ml 苏打，降低甜度。"],
      ["Blood and Sand No. 2", "Blood and Sand No. 2", "用梅斯卡尔替代苏格兰，烟熏与橙汁更搭。"]
    ]
  },
  {
    id: "remember-the-maine", zh: "记住缅因号", en: "Remember the Maine", fam: "duo", base: "whiskey", sub: "黑麦威士忌",
    mods: ["vermouth", "liqueur", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "10 ml"], ["苦艾酒 Absinthe", "1 tsp 冲洗"]],
    steps: [
      "碟形杯用苦艾酒冲洗，倒掉多余。",
      "黑麦、甜味美思与黑樱桃加冰搅拌 25 秒。",
      "滤入杯中，樱桃装饰。"
    ],
    gar: "酒渍樱桃",
    note: "1930 年代的经典，名字来自美西战争。结构像曼哈顿，但苦艾与黑樱桃把香气拉向草本与核果。",
    flavor: ["温暖", "草本", "花香"],
    v: [
      ["Remember the Alamo", "Remember the Alamo", "用龙舌兰与梅斯卡尔替代黑麦，苦艾冲洗保留。"],
      ["Creole Cocktail", "Creole Cocktail", "黑麦 + 甜味美思 + Bénédictine + 苦精，更草本。"]
    ]
  },
  {
    id: "el-diablo", zh: "魔鬼", en: "El Diablo", fam: "highball", base: "agave", sub: "微陈龙舌兰",
    mods: ["liqueur", "citrus", "mixer"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["微陈龙舌兰 Reposado Tequila", "45 ml"], ["黑加仑利口酒 Crème de Cassis", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["姜啤 Ginger Beer", "100 ml"]],
    steps: [
      "高球杯加满冰，倒入龙舌兰、黑加仑利口酒与青柠汁。",
      "补满冰镇姜啤，轻提拉。",
      "青柠角与黑加仑装饰。"
    ],
    gar: "青柠角 / 黑加仑",
    note: "1940 年代洛杉矶的经典。黑加仑的酸甜与姜啤的辛辣需要青柠连接；姜啤要够辣，否则会像果汁。",
    flavor: ["清爽", "酸甜", "辛香"],
    v: [
      ["Mezcal Diablo", "Mezcal Diablo", "用梅斯卡尔替代龙舌兰，烟熏与黑加仑。"],
      ["Diablo Royale", "Diablo Royale", "用起泡酒替代一半姜啤，降低甜度。"],
      ["El Diablo Rojo", "El Diablo Rojo", "加入 5 ml 石榴糖浆，颜色更红。" ]
    ]
  },
  {
    id: "piscola", zh: "皮斯科可乐", en: "Piscola", fam: "highball", base: "brandy", sub: "皮斯科",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["皮斯科 Pisco", "60 ml"], ["可乐 Cola", "120 ml"], ["青柠汁 Lime Juice", "10 ml"], ["冰 Ice", "满杯"]],
    steps: [
      "高球杯加满冰，倒入皮斯科与青柠汁。",
      "沿吧勺补入冰镇可乐，轻提拉一次。",
      "青柠角挤汁后投入杯中。"
    ],
    gar: "青柠角",
    note: "智利的日常喝法：皮斯科与可乐约 1:2，冰要满杯。皮斯科的花香很脆弱，可乐的焦糖与香草很容易盖住它，所以青柠汁控制在 10 ml 左右，只做支撑不做主角。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Piscola 是智利最常见的皮斯科长饮，酒吧与家庭聚会都在做，没有可考的发明人与年份。它把皮斯科从酸酒带到日常：皮斯科、可乐、冰，青柠可选。智利与秘鲁对皮斯科的产区与工艺定义长期有争论，Piscola 属于智利一侧的喝法。",
    src: { tag: "地区传统", label: "智利日常喝法 / Piscola", url: "https://en.wikipedia.org/wiki/Piscola" },
    v: [
      { zh: "Piscola Amargo", en: "Piscola Amargo", how: "加 2 dash 安高天娜苦精，青柠汁减到 5 ml。", ing: [["皮斯科 Pisco", "60 ml"], ["可乐 Cola", "120 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]], method: "直调", glass: "高球杯", note: "苦精拉长尾韵，甜度更克制。" },
      { zh: "Piscola de Autor", en: "Piscola de Autor", how: "用陈年皮斯科（Reservado / Añejo）与橙味苦精，比例更干。", ing: [["皮斯科 Pisco", "60 ml"], ["可乐 Cola", "100 ml"], ["青柠汁 Lime Juice", "15 ml"], ["橙味苦精 Orange Bitters", "1 dash"]], method: "直调", glass: "高球杯", note: "木质与香草更明显，酸度也要跟上。" },
      { zh: "Piscola de Naranja", en: "Piscola de Naranja", how: "补 20 ml 橙汁，青柠汁减半。", ing: [["皮斯科 Pisco", "50 ml"], ["可乐 Cola", "100 ml"], ["橙汁 Orange Juice", "20 ml"], ["青柠汁 Lime Juice", "5 ml"]], method: "直调", glass: "高球杯", note: "更像果汁长饮，适合炎热天气。" }
    ]
  },
  {
    id: "vermut-con-cola", zh: "味美思可乐", en: "Vermut con Cola", fam: "highball", base: "wine", sub: "甜味美思",
    mods: ["vermouth", "mixer", "citrus"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["甜味美思 Sweet Vermouth", "90 ml"], ["可乐 Cola", "90 ml"], ["橙皮 Orange Peel", "1 片"], ["冰 Ice", "满杯"]],
    steps: [
      "高球杯加满冰，倒入甜味美思。",
      "补入冰镇可乐，轻搅两圈。",
      "挤橙皮油后投入杯中。"
    ],
    gar: "橙皮",
    note: "西班牙酒吧下午的日常：龙头味美思（vermut de grifo）加可乐与橙皮。味美思自带焦糖与苦甜，可乐只负责拉长与加气，比例约 1:1；用甜型 Rojo，不要用干型。",
    flavor: ["苦香", "温暖", "清爽"],
    history: "vermut 在西班牙是下午的社交饮品，酒吧从龙头打出的 vermut de grifo 常被加冰、橙皮或橄榄。加可乐的版本属于地区日常喝法（马德里等城市的老酒吧常见），没有统一的配方与可考的起源年份，因此这里按 1:1 的可复现比例记录。",
    src: { tag: "地区传统", label: "西班牙酒吧 / vermut de grifo 的日常喝法", url: "" },
    v: [
      { zh: "Vermut con Cola Seco", en: "Vermut con Cola Seco", how: "甜味美思 60 ml + 干味美思 30 ml，整体更干。", ing: [["甜味美思 Sweet Vermouth", "60 ml"], ["干味美思 Dry Vermouth", "30 ml"], ["可乐 Cola", "90 ml"], ["橙皮 Orange Peel", "1 片"]], method: "直调", glass: "高球杯", note: "苦味与草本更明显，甜度降一档。" },
      { zh: "Vermut con Cola y Limón", en: "Vermut con Cola y Limón", how: "加 10 ml 柠檬汁与柠檬片，酸度更亮。", ing: [["甜味美思 Sweet Vermouth", "90 ml"], ["可乐 Cola", "80 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["柠檬片 Lemon Wheel", "1 片"]], method: "直调", glass: "高球杯", note: "更像汽水，下午第一杯很合适。" }
    ]
  },
  {
    id: "whiskey-cola", zh: "威士忌可乐", en: "Whiskey-Cola", fam: "highball", base: "whiskey", sub: "波本威士忌 / 黑麦威士忌",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["波本威士忌 Bourbon Whiskey", "50 ml"], ["可乐 Cola", "120 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["冰 Ice", "满杯"]],
    steps: [
      "高球杯加满冰，倒入波本威士忌与柠檬汁。",
      "补满冰镇可乐，轻提拉一次。",
      "柠檬角挤汁后投入杯中。"
    ],
    gar: "柠檬角",
    note: "吧台最常被点的一款长饮，出问题几乎总是比例和冰：50 ml 波本对 120 ml 可乐约 1:2.4，再加 10 ml 柠檬汁把焦糖的甜拉平。冰要满杯，否则几分钟就变成温糖水。",
    flavor: ["温暖", "酸甜", "清爽"],
    history: "威士忌加可乐在 20 世纪的美国酒吧与家庭里都很常见，常被当作波本或黑麦的日常喝法；它没有单一的发明记录，也不在 IBA 官方酒单里。加柠檬汁是酒吧做法，用来补酸、避免整杯只剩焦糖甜。",
    src: { tag: "现代经典", label: "全球吧台常点 / Whiskey-Cola 长饮", url: "" },
    v: [
      { zh: "Rye-Cola", en: "Rye-Cola", how: "用黑麦威士忌替代波本，辛香与胡椒感更明显。", ing: [["黑麦威士忌 Rye Whiskey", "50 ml"], ["可乐 Cola", "120 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["冰 Ice", "满杯"]], method: "直调", glass: "高球杯", note: "黑麦比波本更干，酸度可以再减 5 ml。" },
      { zh: "Whiskey-Cola Doble", en: "Whiskey-Cola Doble", how: "波本加到 60 ml，可乐减到 90 ml，做成更烈的版本。", ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["可乐 Cola", "90 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"], ["冰 Ice", "满杯"]], method: "直调", glass: "高球杯", note: "接近 Highball 的比例，威士忌本身要够味。" },
      { zh: "Whiskey-Cola Ahumado", en: "Whiskey-Cola Ahumado", how: "用调和苏格兰威士忌替代波本，柠檬角换成橙皮；想更重可以换成泥煤款。", ing: [["苏格兰威士忌 Blended Scotch Whisky", "45 ml"], ["可乐 Cola", "120 ml"], ["橙皮 Orange Peel", "1 片"], ["冰 Ice", "满杯"]], method: "直调", glass: "高球杯", note: "苏格兰的谷物与微烟熏和可乐的香草是两个方向，换成泥煤款时差异更大。" }
    ]
  },
  {
    id: "cherry-cola-highball", zh: "樱桃可乐高球", en: "Cherry Cola Highball", fam: "highball", base: "whiskey", sub: "波本威士忌 / 黑麦威士忌",
    mods: ["liqueur", "mixer", "citrus"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["波本威士忌 Bourbon Whiskey", "45 ml"], ["樱桃利口酒 Cherry Liqueur", "15 ml"], ["可乐 Cola", "110 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["冰 Ice", "满杯"]],
    steps: [
      "高球杯加满冰，倒入波本与樱桃利口酒。",
      "补入冰镇可乐，挤入柠檬汁后轻提拉。",
      "酒渍樱桃与柠檬片装饰。"
    ],
    gar: "酒渍樱桃 + 柠檬片",
    note: "樱桃利口酒不是装饰，而是这杯的甜味来源：15 ml 已经够，多了会盖掉波本的木质与香草。柠檬汁 10 ml 切成樱桃的糖分，最后用酒渍樱桃，不要用糖水罐头樱桃。",
    flavor: ["酸甜", "温暖", "花香"],
    history: "樱桃可乐是美国的汽水口味，酒吧版把它拆开重做：樱桃利口酒提供樱桃与杏仁香，可乐提供香草与气泡。它没有文献出处，属于现代吧台的风味重构，出现在 2000 年代之后的鸡尾酒单上。",
    src: { tag: "现代经典", label: "现代吧台 / 樱桃可乐的酒精版本", url: "" },
    v: [
      { zh: "Cherry Cola Fizz", en: "Cherry Cola Fizz", how: "补 30 ml 苏打，可乐减到 80 ml，气泡更活跃。", ing: [["波本威士忌 Bourbon Whiskey", "45 ml"], ["樱桃利口酒 Cherry Liqueur", "15 ml"], ["可乐 Cola", "80 ml"], ["苏打水 Soda Water", "30 ml"]], method: "直调", glass: "高球杯", note: "更轻，适合夏天午后。" },
      { zh: "Cherry Cola Amargo", en: "Cherry Cola Amargo", how: "樱桃利口酒减到 10 ml，加 2 dash 安高天娜苦精。", ing: [["波本威士忌 Bourbon Whiskey", "45 ml"], ["樱桃利口酒 Cherry Liqueur", "10 ml"], ["可乐 Cola", "110 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]], method: "直调", glass: "高球杯", note: "苦精压住甜味，尾韵更长。" },
      { zh: "Black Cherry Cola", en: "Black Cherry Cola", how: "用黑樱桃利口酒替代樱桃利口酒，香气更浓更核果。", ing: [["波本威士忌 Bourbon Whiskey", "40 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "15 ml"], ["可乐 Cola", "110 ml"], ["柠檬汁 Lemon Juice", "10 ml"]], method: "直调", glass: "高球杯", note: "马拉斯奇诺带杏仁感，糖分也更高。" }
    ]
  },
  {
    id: "cola-sour", zh: "可乐酸酒", en: "Cola Sour", fam: "sour", base: "whiskey", sub: "波本威士忌 / 黑麦威士忌",
    mods: ["citrus", "syrup", "mixer"], method: "摇和", glass: "古典杯", strength: 2, diff: 2,
    ing: [["波本威士忌 Bourbon Whiskey", "45 ml"], ["可乐糖浆 Cola Syrup", "20 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "5 ml"], ["苏打水 Soda Water", "30 ml"]],
    steps: [
      "波本、可乐糖浆、柠檬汁与单糖浆加冰摇和 10–12 秒。",
      "滤入加一块大冰的古典杯。",
      "补 30 ml 冰镇苏打，柠檬片与橙皮装饰。"
    ],
    gar: "柠檬片 + 橙皮",
    note: "把可乐的香料与焦糖浓缩成糖浆，酸酒才有结构：20 ml 可乐糖浆提供甜、香草与肉桂，柠檬汁负责酸，苏打只补气泡。可乐直接摇会跑气，也会把配方稀释成糖水。",
    flavor: ["酸甜", "苦香", "辛香"],
    history: "可乐风味的酸酒是近十几年吧台的产物：把可乐煮浓成糖浆，或直接用汽水厂的 cola syrup，避免碳酸把配方稀释。它不在任何经典文献或 IBA 酒单里，属于现代吧台的可复现做法。",
    src: { tag: "现代经典", label: "现代吧台 / 可乐糖浆酸酒", url: "" },
    v: [
      { zh: "Cola Sour con Huevo", en: "Cola Sour con Huevo", how: "加 20 ml 蛋清，先干摇再加冰摇和。", ing: [["波本威士忌 Bourbon Whiskey", "45 ml"], ["可乐糖浆 Cola Syrup", "20 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["蛋清 Egg White", "20 ml"]], method: "摇和", glass: "碟形杯", note: "泡沫会把可乐的香料推到前面，口感更圆。" },
      { zh: "Cola Sour Sin Burbujas", en: "Cola Sour Sin Burbujas", how: "不加苏打，摇好后双重过滤入冰镇碟形杯。", ing: [["波本威士忌 Bourbon Whiskey", "50 ml"], ["可乐糖浆 Cola Syrup", "20 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "5 ml"]], method: "摇和", glass: "碟形杯", note: "更浓更干，甜度全靠糖浆。" },
      { zh: "Cola Sour de Centeno", en: "Cola Sour de Centeno", how: "用黑麦威士忌替代波本，辛香更明显。", ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["可乐糖浆 Cola Syrup", "20 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]], method: "摇和", glass: "古典杯", note: "黑麦的胡椒感与可乐的肉桂很合。" }
    ]
  },
  {
    id: "cuba-libre-especial", zh: "特别自由古巴", en: "Cuba Libre Especial", fam: "highball", base: "rum", sub: "陈年朗姆",
    mods: ["mixer", "citrus", "bitters"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["陈年朗姆 Aged Rum", "50 ml"], ["可乐 Cola", "120 ml"], ["青柠汁 Lime Juice", "10 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["冰 Ice", "满杯"]],
    steps: [
      "高球杯加满冰，倒入陈年朗姆、青柠汁与苦精。",
      "补满冰镇可乐，轻提拉一次。",
      "青柠角挤汁后投入杯中。"
    ],
    gar: "青柠角",
    note: "自由古巴的加勒比升级版：白朗姆换成陈年朗姆，再加两 dash 苦精。陈年朗姆的香草与焦糖和可乐同向，靠苦精与青柠把它们拉住；苦精别超过 3 dash，否则整杯像药水。",
    flavor: ["温暖", "酸甜", "苦香"],
    history: "自由古巴的起源流传着 1900 年前后哈瓦那、美军与可乐的故事，属于传说而非可考记录。用陈年朗姆加苦精做成 “especial” 的版本，是加勒比酒吧对它的常见升级，同样没有统一配方来源，属于地区酒吧的现代做法。",
    src: { tag: "现代经典", label: "加勒比酒吧 / 自由古巴的升级做法", url: "" },
    v: [
      { zh: "Cuba Libre Especial Oscuro", en: "Cuba Libre Especial Oscuro", how: "用深色陈年朗姆，青柠汁加到 15 ml。", ing: [["陈年朗姆 Aged Rum", "50 ml"], ["可乐 Cola", "110 ml"], ["青柠汁 Lime Juice", "15 ml"], ["橙味苦精 Orange Bitters", "1 dash"]], method: "直调", glass: "高球杯", note: "焦糖与热带水果更重，酸度必须跟上。" },
      { zh: "Cuba Libre Especial de Café", en: "Cuba Libre Especial de Café", how: "加 10 ml 咖啡利口酒，苦精减到 1 dash。", ing: [["陈年朗姆 Aged Rum", "45 ml"], ["咖啡利口酒 Coffee Liqueur", "10 ml"], ["可乐 Cola", "120 ml"], ["青柠汁 Lime Juice", "10 ml"]], method: "直调", glass: "高球杯", note: "咖啡的苦与可乐的焦糖叠在一起，适合餐后。" }
    ]
  },
  {
    id: "cola-collins", zh: "可乐柯林斯", en: "Cola Collins", fam: "collins", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "mixer"], method: "直调", glass: "柯林斯杯", strength: 2, diff: 1,
    ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["可乐 Cola", "100 ml"], ["冰 Ice", "满杯"]],
    steps: [
      "柯林斯杯加满冰。",
      "金酒、柠檬汁与单糖浆加冰摇和 8–10 秒，滤入杯中。",
      "补满冰镇可乐，轻提拉，柠檬片装饰。"
    ],
    gar: "柠檬片",
    note: "把 Tom Collins 的苏打换成可乐：金酒的植物香与可乐的香草、肉桂需要更多酸，所以柠檬汁给到 25 ml、糖浆 15 ml。可乐最后加，摇过就没气了。",
    flavor: ["清爽", "酸甜", "苦香"],
    history: "柯林斯家族（Tom Collins、John Collins 等）在 19 世纪的美国酒书里已经成形，酒精度低、以柠檬、糖与气泡拉长。用可乐替代苏打是后来酒吧的改动，没有文献出处，属于现代吧台的即兴版本。",
    src: { tag: "现代经典", label: "现代吧台 / Collins 结构的可乐版", url: "" },
    v: [
      { zh: "Cola Collins de Ron", en: "Cola Collins de Ron", how: "用白朗姆替代金酒，柠檬汁减到 20 ml。", ing: [["白朗姆 White Rum", "45 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["可乐 Cola", "100 ml"]], method: "直调", glass: "柯林斯杯", note: "甘蔗的甜与可乐更贴，酸度可以少一点。" },
      { zh: "Cola Collins Amargo", en: "Cola Collins Amargo", how: "糖浆减到 10 ml，加 2 dash 安高天娜苦精。", ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["可乐 Cola", "100 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]], method: "直调", glass: "柯林斯杯", note: "更干、更接近高球，苦精连接金酒与可乐。" }
    ]
  },
  {
    id: "tinto-de-verano-con-cola", zh: "夏日红酒可乐", en: "Tinto de Verano con Cola", fam: "highball", base: "wine", sub: "红葡萄酒",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["红葡萄酒 Red Wine", "90 ml"], ["可乐 Cola", "60 ml"], ["柠檬汽水 Lemon Soda", "30 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["冰 Ice", "满杯"]],
    steps: [
      "高球杯加满冰。",
      "倒入红葡萄酒与柠檬汁。",
      "补可乐与柠檬汽水，轻搅，柠檬片装饰。"
    ],
    gar: "柠檬片",
    note: "和 Kalimotxo 的区别就在这里：这杯保留 tinto de verano 的骨架——红酒 + 柠檬汽水 + 柠檬，只把一部分汽水换成可乐，所以它带柑橘与细气泡；Kalimotxo 只有红酒和可乐，没有汽水也没有柠檬。想要更干，可乐减到 30 ml、汽水加到 60 ml。",
    flavor: ["清爽", "酸甜", "温暖"],
    history: "Tinto de Verano（“夏日红酒”）是西班牙夏季的低酒精饮品，常见做法是红葡萄酒配柠檬汽水或苏打，加柠檬片。把其中一部分汽水换成可乐的版本在西班牙的酒吧与家庭都存在，但没有独立名字与可考起源，因此这里按“夏日红酒的加可乐版”记录。它与 Kalimotxo 的关键差别是：Kalimotxo（巴斯克地区，1970 年代起流行）只有红酒 + 可乐；tinto de verano 有柠檬汽水与柑橘。",
    src: { tag: "地区传统", label: "西班牙夏季 / Tinto de Verano 的加可乐版本", url: "" },
    v: [
      { zh: "Tinto de Verano con Cola y Naranja", en: "Tinto de Verano con Cola y Naranja", how: "加 20 ml 橙汁，柠檬汽水减半。", ing: [["红葡萄酒 Red Wine", "90 ml"], ["可乐 Cola", "60 ml"], ["橙汁 Orange Juice", "20 ml"], ["柠檬汽水 Lemon Soda", "20 ml"]], method: "直调", glass: "高球杯", note: "橙香更明显，甜度也更高。" },
      { zh: "Tinto de Verano con Cola Royale", en: "Tinto de Verano con Cola Royale", how: "补 60 ml 起泡酒，可乐减到 40 ml。", ing: [["红葡萄酒 Red Wine", "60 ml"], ["起泡酒 Sparkling Wine", "60 ml"], ["可乐 Cola", "40 ml"], ["柠檬片 Lemon Wheel", "1 片"]], method: "直调", glass: "高球杯", note: "气泡更细，更适合庆典。" }
    ]
  }
];
