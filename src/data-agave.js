/* ============================================================
   配方库 · 龙舌兰与梅斯卡尔
   ============================================================ */

const COCKTAILS_AGAVE = [
  {
    id: "margarita", zh: "玛格丽特", en: "Margarita", fam: "daisy", base: "agave", sub: "白色龙舌兰",
    mods: ["citrus", "liqueur", "aromatic"], method: "摇和", glass: "碟形杯 / 古典杯", strength: 4, diff: 1,
    ing: [["白色龙舌兰 Blanco Tequila", "50 ml"], ["青柠汁 Lime Juice", "25 ml"], ["君度 Cointreau", "20 ml"], ["盐 Salt", "1 小撮（可选）"]],
    steps: [
      "杯口用青柠角润湿，半圈蘸盐（可选），杯身冰镇。",
      "龙舌兰、青柠汁与君度加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯，青柠片装饰。"
    ],
    gar: "青柠片 + 半圈盐边",
    note: "玛格丽特的平衡取决于青柠与君度。先按 50:25:20 做，再根据青柠酸度调整；盐边只需半圈，别让盐盖住酒。",
    flavor: ["酸甜", "草本", "辛香"],
    v: [
      ["Tommy's Margarita", "Tommy's Margarita", "去掉君度，用 15 ml 龙舌兰糖浆，龙舌兰风味更纯。"],
      ["Mezcal Margarita", "Mezcal Margarita", "用梅斯卡尔替代一半或全部龙舌兰，烟熏感更强。"],
      ["Spicy Margarita", "Spicy Margarita", "加 2–3 片墨西哥辣椒轻压，或 1 dash 辣椒苦精。"],
      ["Cadillac Margarita", "Cadillac Margarita", "用 Grand Marnier 替代君度，加 1 dash 橙味苦精，更圆润。"],
      ["Frozen Margarita", "Frozen Margarita", "所有材料与碎冰搅打，糖浆略增，盐边保留。" ]
    ]
  },
  {
    id: "tommys-margarita", zh: "汤米玛格丽特", en: "Tommy's Margarita", fam: "sour", base: "agave", sub: "白色龙舌兰",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "古典杯", strength: 3, diff: 1,
    ing: [["白色龙舌兰 Blanco Tequila", "60 ml"], ["青柠汁 Lime Juice", "30 ml"], ["龙舌兰糖浆 Agave Syrup", "15 ml"], ["盐 Salt", "1 小撮"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "滤入加冰古典杯，或双重过滤入碟形杯。",
      "青柠片装饰。"
    ],
    gar: "青柠片",
    note: "旧金山 Tommy's 的创作。去掉橙味利口酒，让龙舌兰与青柠直接对话；龙舌兰糖浆的植物甜比单糖浆更合。",
    flavor: ["酸甜", "草本"],
    v: [
      ["Tommy's Mezcal", "Tommy's Mezcal", "用梅斯卡尔替代龙舌兰，增加烟熏。"],
      ["Tommy's Paloma", "Tommy's Paloma", "加 60 ml 西柚汁与苏打，变成长饮。" ]
    ]
  },
  {
    id: "frozen-margarita", zh: "冰沙玛格丽特", en: "Frozen Margarita", fam: "blended", base: "agave", sub: "白色龙舌兰",
    mods: ["citrus", "liqueur", "aromatic"], method: "搅拌机", glass: "高球杯 / 玛格丽特杯", strength: 3, diff: 1,
    ing: [["白色龙舌兰 Blanco Tequila", "50 ml"], ["青柠汁 Lime Juice", "25 ml"], ["君度 Cointreau", "20 ml"], ["单糖浆 Simple Syrup", "5 ml"], ["碎冰 Crushed Ice", "1 杯"]],
    steps: [
      "所有液体与碎冰放入搅拌机。",
      "高速搅打 15 秒，至雪泥状。",
      "倒入盐边冰杯，青柠片装饰。"
    ],
    gar: "青柠片 + 盐边",
    note: "冰沙版需要比加冰版略甜，因为冰会稀释。但不要用糖浆掩盖青柠；先少糖，再补。",
    flavor: ["酸甜", "清爽"],
    v: [
      ["Frozen Strawberry Margarita", "Frozen Strawberry Margarita", "加入 5 颗草莓，减少糖浆。"],
      ["Frozen Mezcal Margarita", "Frozen Mezcal Margarita", "用梅斯卡尔替代一半龙舌兰，烟熏与冰沙。" ]
    ]
  },
  {
    id: "paloma", zh: "帕洛玛", en: "Paloma", fam: "highball", base: "agave", sub: "白色龙舌兰",
    mods: ["mixer", "citrus", "aromatic"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["白色龙舌兰 Blanco Tequila", "50 ml"], ["西柚汽水 Grapefruit Soda", "100 ml"], ["青柠汁 Lime Juice", "10 ml"], ["盐 Salt", "1 小撮"]],
    steps: [
      "高球杯加满冰，倒入龙舌兰与青柠汁。",
      "补满冰镇西柚汽水，加一小撮盐。",
      "轻提拉一次，西柚片或青柠角装饰。"
    ],
    gar: "西柚片 + 盐边（可选）",
    note: "帕洛玛是墨西哥最日常的龙舌兰长饮。西柚汽水要苦甜平衡，盐能压低苦味、提升果香。",
    flavor: ["清爽", "苦香", "酸甜"],
    v: [
      ["Mezcal Paloma", "Mezcal Paloma", "用梅斯卡尔替代龙舌兰，烟熏与西柚很搭。"],
      ["Paloma Rosa", "Paloma Rosa", "用粉红西柚汽水，加 5 ml 石榴糖浆，颜色更美。"],
      ["Ranch Water", "Ranch Water", "龙舌兰 + 青柠 + 苏打 + 盐，无糖、极干。" ]
    ]
  },
  {
    id: "oaxaca-old-fashioned", zh: "瓦哈卡古典", en: "Oaxaca Old Fashioned", fam: "old-fashioned", base: "agave", sub: "龙舌兰 + 梅斯卡尔",
    mods: ["syrup", "bitters", "aromatic"], method: "搅拌", glass: "古典杯", strength: 4, diff: 2,
    ing: [["微陈龙舌兰 Reposado Tequila", "45 ml"], ["梅斯卡尔 Mezcal", "15 ml"], ["龙舌兰糖浆 Agave Syrup", "7.5 ml"], ["莫尔苦精 Mole Bitters", "2 dash"], ["橙皮 Orange Peel", "1 片"]],
    steps: [
      "古典杯加大冰预冷。",
      "所有液体加冰搅拌 20–25 秒。",
      "滤入杯中，烧橙皮油并投入。"
    ],
    gar: "烧橙皮",
    note: "纽约 Death & Co 的创作。梅斯卡尔 15 ml 足够提供烟熏；莫尔苦精的可可、辣椒与香料是点睛。",
    flavor: ["温暖", "苦香", "辛香"],
    v: [
      ["Mezcal Old Fashioned", "Mezcal Old Fashioned", "全部用梅斯卡尔，糖浆减到 5 ml，烟熏更重。"],
      ["Oaxaca Negroni", "Oaxaca Negroni", "龙舌兰 + 梅斯卡尔 + 金巴利 + 甜味美思，烟熏内格罗尼。" ]
    ]
  },
  {
    id: "ranch-water", zh: "牧场水", en: "Ranch Water", fam: "highball", base: "agave", sub: "白色龙舌兰",
    mods: ["mixer", "citrus", "aromatic"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["白色龙舌兰 Blanco Tequila", "50 ml"], ["青柠汁 Lime Juice", "20 ml"], ["苏打水 Soda Water", "100 ml"], ["盐 Salt", "1 小撮"]],
    steps: [
      "高球杯加满冰，倒入龙舌兰、青柠汁与盐。",
      "补满冰镇苏打水，轻提拉。",
      "青柠角装饰。"
    ],
    gar: "青柠角",
    note: "德州西部的喝法：龙舌兰、青柠、苏打、盐。无糖、极干，适合炎热天气；盐是必须的。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Ranch Water con Fruta", "Ranch Water con Fruta", "加入 2 片西瓜或黄瓜，轻压后补苏打。"],
      ["Paloma", "Paloma", "用西柚汽水替代苏打，增加苦甜与果香。" ]
    ]
  },
  {
    id: "tequila-sunrise", zh: "龙舌兰日出", en: "Tequila Sunrise", fam: "highball", base: "agave", sub: "白色龙舌兰",
    mods: ["juice", "syrup"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["白色龙舌兰 Blanco Tequila", "45 ml"], ["橙汁 Orange Juice", "90 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["橙片 Orange Wheel", "1 片"]],
    steps: [
      "高球杯加冰，倒入龙舌兰与橙汁，搅拌均匀。",
      "沿杯壁缓慢倒入石榴糖浆，形成沉底渐变。",
      "不要搅拌，橙片与樱桃装饰。"
    ],
    gar: "橙片 + 樱桃",
    note: "70 年代的经典。橙汁要鲜榨，石榴糖浆只负责颜色与底部甜味；喝前可轻搅。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Tequila Sunset", "Tequila Sunset", "用西柚汁替代一半橙汁，加 5 ml 黑莓利口酒。"],
      ["Tequila Sunrise Fizz", "Tequila Sunrise Fizz", "补 30 ml 苏打，降低甜度。" ]
    ]
  },
  {
    id: "batanga", zh: "巴坦加", en: "Batanga", fam: "highball", base: "agave", sub: "白色龙舌兰",
    mods: ["mixer", "citrus", "aromatic"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["白色龙舌兰 Blanco Tequila", "50 ml"], ["可乐 Cola", "100 ml"], ["青柠汁 Lime Juice", "15 ml"], ["盐 Salt", "1 小撮"]],
    steps: [
      "高球杯口蘸盐，加满冰。",
      "倒入龙舌兰与青柠汁，补满可乐。",
      "用吧勺轻提拉，青柠角装饰。"
    ],
    gar: "青柠角 + 盐边",
    note: "墨西哥哈利斯科的经典。可乐的焦糖与磷酸需要青柠与盐来平衡；用同一把刀切青柠，别浪费皮油。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Batanga Reposado", "Batanga Reposado", "用 Reposado 龙舌兰，增加香草与橡木。"],
      ["Cuba Libre", "Cuba Libre", "朗姆 + 可乐 + 青柠，加勒比版。" ]
    ]
  },
  {
    id: "mexican-firing-squad", zh: "墨西哥行刑队", en: "Mexican Firing Squad", fam: "sour", base: "agave", sub: "白色龙舌兰",
    mods: ["citrus", "syrup", "bitters", "mixer"], method: "摇和", glass: "高球杯", strength: 3, diff: 2,
    ing: [["白色龙舌兰 Blanco Tequila", "60 ml"], ["青柠汁 Lime Juice", "20 ml"], ["石榴糖浆 Grenadine", "15 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["苏打水 Soda Water", "30 ml"]],
    steps: [
      "除苏打外全部材料加冰摇和 10–12 秒。",
      "滤入加冰高球杯，补少量苏打。",
      "青柠片与樱桃装饰。"
    ],
    gar: "青柠片 + 樱桃",
    note: "1930 年代墨西哥城的经典。石榴的甜、青柠的酸、苦精的香料，结构像一杯红色酸酒。",
    flavor: ["酸甜", "苦香", "辛香"],
    v: [
      ["Mexican Firing Squad Fizz", "Mexican Firing Squad Fizz", "补满苏打，变成更轻的长饮。"],
      ["Siesta", "Siesta", "龙舌兰 + 金巴利 + 西柚 + 青柠，苦味版。" ]
    ]
  },
  {
    id: "naked-and-famous", zh: "声名狼藉", en: "Naked and Famous", fam: "sour", base: "agave", sub: "梅斯卡尔",
    mods: ["citrus", "liqueur", "amaro"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["梅斯卡尔 Mezcal", "22.5 ml"], ["Aperol", "22.5 ml"], ["黄查特 Yellow Chartreuse", "22.5 ml"], ["青柠汁 Lime Juice", "22.5 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "青柠皮或橙皮装饰。"
    ],
    gar: "青柠皮",
    note: "Death & Co 的现代经典，Last Word 的梅斯卡尔表亲。四等分但每种酒都很强，青柠必须够酸。",
    flavor: ["苦香", "草本", "热带"],
    v: [
      ["Naked and Famous Fizz", "Naked and Famous Fizz", "摇好后补 45 ml 苏打，苦味更轻。"],
      ["Last Word", "Last Word", "金酒 + 绿查特 + 黑樱桃 + 青柠，更草本。" ]
    ]
  },
  {
    id: "division-bell", zh: "分界钟", en: "Division Bell", fam: "sour", base: "agave", sub: "梅斯卡尔",
    mods: ["citrus", "liqueur", "amaro"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["梅斯卡尔 Mezcal", "30 ml"], ["Aperol", "20 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "15 ml"], ["青柠汁 Lime Juice", "20 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "樱桃或青柠皮装饰。"
    ],
    gar: "樱桃",
    note: "梅斯卡尔的烟熏、Aperol 的橙苦、黑樱桃的核香，三者需要青柠的酸来拉紧。",
    flavor: ["苦香", "花香", "热带"],
    v: [
      ["Division Bell Fizz", "Division Bell Fizz", "补 45 ml 苏打，烟熏更柔。"],
      ["Tia Mia", "Tia Mia", "梅斯卡尔 + 朗姆 + 杏仁 + 橙味，Tiki 版。" ]
    ]
  },
  {
    id: "siesta", zh: "午睡", en: "Siesta", fam: "sour", base: "agave", sub: "白色龙舌兰",
    mods: ["citrus", "liqueur", "amaro", "syrup"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["白色龙舌兰 Blanco Tequila", "45 ml"], ["金巴利 Campari", "15 ml"], ["西柚汁 Grapefruit Juice", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "西柚皮或青柠皮装饰。"
    ],
    gar: "西柚皮",
    note: "龙舌兰的植物感、金巴利的苦、西柚的酸苦，三层苦味叠加。糖浆只需 10 ml，别把苦味压没。",
    flavor: ["苦香", "酸甜", "热带"],
    v: [
      ["Siesta Fizz", "Siesta Fizz", "补 45 ml 苏打，变成苦味长饮。"],
      ["Jasmine", "Jasmine", "金酒 + 金巴利 + 君度 + 柠檬，更清亮。" ]
    ]
  }
];
