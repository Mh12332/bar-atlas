/* ============================================================
   配方库 · 现代经典与进阶经典
   ============================================================ */

const COCKTAILS_EXTRA = [
  {
    id: "martinez", zh: "马丁内斯", en: "Martinez", fam: "duo", base: "gin", sub: "Old Tom / London Dry",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒", "45 ml"], ["甜味美思", "30 ml"], ["黑樱桃利口酒", "7.5 ml"], ["橙味苦精", "1 dash"]],
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
    id: "bramble", zh: "荆棘", en: "Bramble", fam: "sour", base: "gin", sub: "London Dry",
    mods: ["citrus", "syrup", "liqueur"], method: "摇和", glass: "古典杯", strength: 3, diff: 2,
    ing: [["金酒", "50 ml"], ["柠檬汁", "25 ml"], ["单糖浆", "12.5 ml"], ["黑莓利口酒", "15 ml"], ["碎冰", "满杯"]],
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
    id: "bijou", zh: "珠宝", en: "Bijou", fam: "duo", base: "gin", sub: "London Dry",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["金酒", "45 ml"], ["绿查特", "20 ml"], ["甜味美思", "20 ml"], ["橙味苦精", "1 dash"]],
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
    id: "twentieth-century", zh: "二十世纪", en: "20th Century", fam: "sour", base: "gin", sub: "London Dry",
    mods: ["vermouth", "coffee", "citrus"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒", "45 ml"], ["Lillet Blanc", "20 ml"], ["白可可利口酒", "15 ml"], ["柠檬汁", "20 ml"]],
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
    id: "hanky-panky", zh: "汉基潘基", en: "Hanky Panky", fam: "duo", base: "gin", sub: "London Dry",
    mods: ["vermouth", "amaro", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["金酒", "45 ml"], ["甜味美思", "45 ml"], ["Fernet-Branca", "7.5 ml"], ["橙皮", "1 片"]],
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
    id: "blood-and-sand", zh: "血与沙", en: "Blood and Sand", fam: "sour", base: "whiskey", sub: "苏格兰调和",
    mods: ["vermouth", "liqueur", "juice"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["苏格兰调和威士忌", "30 ml"], ["甜味美思", "30 ml"], ["黑樱桃利口酒", "30 ml"], ["鲜榨橙汁", "30 ml"]],
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
    id: "remember-the-maine", zh: "记住缅因号", en: "Remember the Maine", fam: "duo", base: "whiskey", sub: "黑麦",
    mods: ["vermouth", "liqueur", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["黑麦威士忌", "45 ml"], ["甜味美思", "30 ml"], ["黑樱桃利口酒", "10 ml"], ["苦艾酒", "1 tsp 冲洗"]],
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
    id: "el-diablo", zh: "魔鬼", en: "El Diablo", fam: "highball", base: "agave", sub: "龙舌兰 Reposado",
    mods: ["liqueur", "citrus", "mixer"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["龙舌兰 Reposado", "45 ml"], ["黑加仑利口酒", "15 ml"], ["青柠汁", "15 ml"], ["姜啤", "100 ml"]],
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
  }
];
