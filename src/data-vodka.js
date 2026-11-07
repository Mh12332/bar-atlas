/* ============================================================
   配方库 · 伏特加
   ============================================================ */

const COCKTAILS_VODKA = [
  {
    id: "moscow-mule", zh: "莫斯科骡子", en: "Moscow Mule", fam: "highball", base: "vodka", sub: "中性伏特加",
    mods: ["mixer", "citrus"], method: "直调", glass: "铜杯 / 高球杯", strength: 2, diff: 1,
    ing: [["伏特加 Vodka", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["姜啤 Ginger Beer", "100 ml"], ["青柠角 Lime Wedge", "1 块"]],
    steps: [
      "铜杯或高球杯加满冰，倒入伏特加与青柠汁。",
      "补满冰镇姜啤，轻提拉一次。",
      "青柠角装饰，杯壁凝霜最佳。"
    ],
    gar: "青柠角 + 薄荷（可选）",
    note: "姜啤的辛辣是灵魂。不要用甜姜汁汽水；铜杯能带来更低的触感温度，但杯子必须提前冰镇。",
    flavor: ["清爽", "辛香"],
    v: [
      ["Mexican Mule", "Mexican Mule", "用龙舌兰替代伏特加，加 1 dash 苦精。"],
      ["Gin-Gin Mule", "Gin-Gin Mule", "用金酒替代伏特加，加 15 ml 姜蜜与薄荷。"],
      ["Kentucky Mule", "Kentucky Mule", "用波本替代伏特加，姜与橡木更搭。" ]
    ]
  },
  {
    id: "bloody-mary", zh: "血腥玛丽", en: "Bloody Mary", fam: "highball", base: "vodka", sub: "中性伏特加",
    mods: ["juice", "citrus", "aromatic", "bitters"], method: "摇和", glass: "高球杯", strength: 2, diff: 2,
    ing: [["伏特加 Vodka", "45 ml"], ["番茄汁 Tomato Juice", "120 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["伍斯特酱 Worcestershire Sauce", "3 dash"], ["辣酱 Hot Sauce", "3 dash"], ["芹菜盐 Celery Salt", "1 小撮"], ["黑胡椒 Black Pepper", "1 小撮"]],
    steps: [
      "所有材料加冰，用滚动法（rolling）在摇壶与杯中来回倒 6–8 次，避免番茄汁起泡。",
      "滤入加冰高球杯，或连冰倒入。",
      "芹菜杆、柠檬角与橄榄装饰，现磨黑胡椒。"
    ],
    gar: "芹菜杆 + 柠檬角 + 橄榄",
    note: "血腥玛丽是「咸鲜酸辣」的平衡。番茄汁品牌差异大，先少盐少辣，再逐杯调整；不要用力摇，会起泡分层。",
    flavor: ["清爽", "辛香", "酸甜"],
    v: [
      ["Bloody Maria", "Bloody Maria", "用龙舌兰替代伏特加，加青柠与辣酱。"],
      ["Red Snapper", "Red Snapper", "用金酒替代伏特加，加更多黑胡椒。"],
      ["Bloody Caesar", "Bloody Caesar", "用蛤蜊番茄汁（Clamato），加拿大版。" ],
      ["Virgin Mary", "Virgin Mary", "去掉伏特加，加 1 茶匙橄榄盐水与更多柠檬。" ]
    ]
  },
  {
    id: "cosmopolitan", zh: "大都会", en: "Cosmopolitan", fam: "daisy", base: "vodka", sub: "柑橘伏特加 / 中性",
    mods: ["citrus", "liqueur", "juice"], method: "摇和", glass: "碟形杯", strength: 3, diff: 1,
    ing: [["柑橘伏特加 Citrus Vodka", "40 ml"], ["君度 Cointreau", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蔓越莓汁 Cranberry Juice", "30 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "橙皮油或青柠片装饰。"
    ],
    gar: "橙皮 / 青柠片",
    note: "90 年代的经典。蔓越莓汁提供颜色与酸涩，君度提供甜，青柠负责拉紧；不要用含糖蔓越莓饮料。",
    flavor: ["酸甜", "花香"],
    v: [
      ["Cosmopolitan Royale", "Cosmopolitan Royale", "补 60 ml 起泡酒，降低甜度。"],
      ["Pink Lady", "Pink Lady", "金酒 + 苹果白兰地 + 柠檬 + 石榴 + 蛋清，更古典。" ]
    ]
  },
  {
    id: "espresso-martini", zh: "浓缩咖啡马天尼", en: "Espresso Martini", fam: "coffee", base: "vodka", sub: "香草伏特加 / 中性",
    mods: ["coffee", "liqueur", "syrup"], method: "摇和", glass: "碟形杯 / 马天尼杯", strength: 3, diff: 2,
    ing: [["伏特加 Vodka", "30 ml"], ["浓缩咖啡 Espresso", "30 ml"], ["咖啡利口酒 Coffee Liqueur", "20 ml"], ["单糖浆 Simple Syrup", "10 ml"]],
    steps: [
      "现萃浓缩咖啡，加冰快速降温。",
      "所有材料加冰大力摇和 12–15 秒，产生厚泡沫。",
      "双重过滤入冰镇碟形杯，静置 20 秒，放 3 颗咖啡豆。"
    ],
    gar: "3 颗咖啡豆",
    note: "泡沫来自咖啡油脂与摇和，不是奶油。咖啡必须现萃并降温；糖浆量取决于咖啡苦度与利口酒甜度。",
    flavor: ["咖啡", "奶滑", "苦香"],
    v: [
      ["Espresso Martini No. 2", "Espresso Martini No. 2", "用 Mr Black 替代甜咖啡利口酒，更干。"],
      ["Cold Brew Martini", "Cold Brew Martini", "用 45 ml 冷萃替代浓缩，泡沫较薄但更顺。"],
      ["Carajillo", "Carajillo", "Licor 43 + 浓缩咖啡，摇和后加冰，甜香更突出。" ]
    ]
  },
  {
    id: "white-russian", zh: "白俄罗斯", en: "White Russian", fam: "flip", base: "vodka", sub: "中性伏特加",
    mods: ["coffee", "cream"], method: "直调", glass: "古典杯", strength: 3, diff: 1,
    ing: [["伏特加 Vodka", "50 ml"], ["咖啡利口酒 Coffee Liqueur", "20 ml"], ["淡奶油 Heavy Cream", "30 ml"]],
    steps: [
      "古典杯加满冰，倒入伏特加与咖啡利口酒。",
      "搅拌 10 秒，沿吧勺背面缓慢倒入奶油，形成分层。",
      "不搅拌，插入吸管；喝时可轻搅。"
    ],
    gar: "现磨肉豆蔻（可选）",
    note: "奶油要冷且略稀，才能形成漂亮的分层。咖啡利口酒的选择决定甜度：Kahlúa 更甜，Mr Black 更干。",
    flavor: ["奶滑", "咖啡"],
    v: [
      ["Black Russian", "Black Russian", "去掉奶油，伏特加 + 咖啡利口酒，加冰直调。"],
      ["White Mexican", "White Mexican", "用龙舌兰替代伏特加，加肉桂。"],
      ["Mudslide", "Mudslide", "伏特加 + 咖啡利口酒 + 百利甜 + 奶油，搅打或加冰。" ]
    ]
  },
  {
    id: "black-russian", zh: "黑俄罗斯", en: "Black Russian", fam: "coffee", base: "vodka", sub: "中性伏特加",
    mods: ["coffee"], method: "直调", glass: "古典杯", strength: 4, diff: 1,
    ing: [["伏特加 Vodka", "50 ml"], ["咖啡利口酒 Coffee Liqueur", "20 ml"]],
    steps: [
      "古典杯加一大块冰。",
      "倒入伏特加与咖啡利口酒，搅拌 15 秒。",
      "橙皮或咖啡豆装饰。"
    ],
    gar: "橙皮 / 咖啡豆",
    note: "极简的餐后酒。咖啡利口酒的甜度决定比例；想更干，利口酒减到 15 ml，伏特加加到 55 ml。",
    flavor: ["咖啡", "苦香"],
    v: [
      ["White Russian", "White Russian", "顶部加 30 ml 奶油，形成分层。"],
      ["Revolver", "Revolver", "波本 + 咖啡利口酒 + 橙味苦精，更温暖。" ]
    ]
  },
  {
    id: "vesper", zh: "维斯帕", en: "Vesper", fam: "duo", base: "vodka", sub: "伏特加 + 金酒",
    mods: ["vermouth", "bitters"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["伏特加 Vodka", "15 ml"], ["Blanc 味美思 Blanc Vermouth", "7.5 ml"], ["橙味苦精 Orange Bitters", "1 dash"]],
    steps: [
      "所有液体加冰搅拌 25–30 秒。",
      "滤入冰镇碟形杯。",
      "大块柠檬皮油装饰。"
    ],
    gar: "柠檬皮",
    note: "007 的配方，原名「Vesper」来自 Vesper Lynd。原版用 Kina Lillet，现在用 Lillet Blanc 替代，苦味更少。",
    flavor: ["草本", "辛香", "花香"],
    v: [
      ["Vesper 1953", "Vesper 1953", "用 Cocchi Americano 替代 Lillet，补回奎宁苦味。"],
      ["Dry Martini", "Dry Martini", "去掉伏特加，金酒 60 ml + 干味美思 10 ml。" ]
    ]
  },
  {
    id: "lemon-drop", zh: "柠檬糖", en: "Lemon Drop", fam: "sour", base: "vodka", sub: "柠檬伏特加",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "碟形杯", strength: 3, diff: 1,
    ing: [["柠檬伏特加 Lemon Vodka", "45 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["砂糖 Sugar", "杯口"]],
    steps: [
      "杯口蘸细砂糖，杯身冰镇。",
      "所有液体加冰摇和 10–12 秒。",
      "双重过滤入杯，柠檬片装饰。"
    ],
    gar: "柠檬片 + 糖边",
    note: "酸甜像柠檬糖，但酒精感要够。糖边只做半圈；如果柠檬很酸，糖浆加到 20 ml。",
    flavor: ["酸甜", "清爽"],
    v: [
      ["Lemon Drop Martini", "Lemon Drop Martini", "加 10 ml 君度，减少糖浆，橙香更明显。"],
      ["Kamikaze", "Kamikaze", "伏特加 + 君度 + 青柠，等量，无糖边。" ]
    ]
  },
  {
    id: "kamikaze", zh: "神风", en: "Kamikaze", fam: "sour", base: "vodka", sub: "中性伏特加",
    mods: ["citrus", "liqueur"], method: "摇和", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["伏特加 Vodka", "30 ml"], ["君度 Cointreau", "30 ml"], ["青柠汁 Lime Juice", "30 ml"]],
    steps: [
      "所有材料加冰摇和 10 秒。",
      "双重过滤入冰镇碟形杯。",
      "青柠皮装饰。"
    ],
    gar: "青柠皮",
    note: "等量三材料，简单直接。君度的甜与青柠的酸必须平衡；青柠不够酸时，加 5 ml 柠檬汁。",
    flavor: ["酸甜", "清爽"],
    v: [
      ["Kamikaze Shot", "Kamikaze Shot", "摇和后滤入小 shot 杯，不加冰。"],
      ["Cosmopolitan", "Cosmopolitan", "加蔓越莓汁 30 ml，颜色与果香更丰富。" ]
    ]
  },
  {
    id: "sea-breeze", zh: "海风", en: "Sea Breeze", fam: "highball", base: "vodka", sub: "中性伏特加",
    mods: ["juice"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["伏特加 Vodka", "40 ml"], ["蔓越莓汁 Cranberry Juice", "90 ml"], ["西柚汁 Grapefruit Juice", "30 ml"], ["青柠角 Lime Wedge", "1 块"]],
    steps: [
      "高球杯加满冰，倒入伏特加、蔓越莓汁与西柚汁。",
      "搅拌 10 秒，挤入青柠角。",
      "西柚片或青柠片装饰。"
    ],
    gar: "西柚片",
    note: "80 年代的经典长饮。蔓越莓的酸涩与西柚的苦需要青柠提亮；不要额外加糖。",
    flavor: ["清爽", "酸甜", "苦香"],
    v: [
      ["Bay Breeze", "Bay Breeze", "用菠萝汁替代西柚汁，更热带。"],
      ["Cape Cod", "Cape Cod", "只保留伏特加与蔓越莓汁，加青柠。" ]
    ]
  },
  {
    id: "harvey-wallbanger", zh: "哈维撞墙", en: "Harvey Wallbanger", fam: "highball", base: "vodka", sub: "中性伏特加",
    mods: ["juice", "liqueur"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["伏特加 Vodka", "45 ml"], ["橙汁 Orange Juice", "90 ml"], ["Galliano", "15 ml"]],
    steps: [
      "高球杯加冰，倒入伏特加与橙汁，搅拌。",
      "沿吧勺背面漂浮 Galliano。",
      "橙片装饰，喝前轻搅。"
    ],
    gar: "橙片",
    note: "70 年代的经典。Galliano 的香草与茴香很甜，15 ml 足够；橙汁必须鲜榨。",
    flavor: ["清爽", "花香", "酸甜"],
    v: [
      ["Harvey Wallbanger Fizz", "Harvey Wallbanger Fizz", "补 30 ml 苏打，降低甜度。"],
      ["Screwdriver", "Screwdriver", "去掉 Galliano，伏特加 + 橙汁，最简版。" ]
    ]
  },
  {
    id: "chi-chi", zh: "奇奇", en: "Chi Chi", fam: "blended", base: "vodka", sub: "中性伏特加",
    mods: ["juice", "cream"], method: "搅拌机", glass: "飓风杯", strength: 2, diff: 1,
    ing: [["伏特加 Vodka", "50 ml"], ["菠萝汁 Pineapple Juice", "60 ml"], ["椰奶油 Coconut Cream", "30 ml"], ["青柠汁 Lime Juice", "10 ml"], ["碎冰 Crushed Ice", "1 杯"]],
    steps: [
      "所有液体与碎冰放入搅拌机。",
      "高速搅打 15–20 秒，至顺滑。",
      "倒入冰镇飓风杯，菠萝角与樱桃装饰。"
    ],
    gar: "菠萝角 + 樱桃",
    note: "Piña Colada 的伏特加版本。椰奶油很甜，青柠与菠萝的酸必须够；冰量决定质地。",
    flavor: ["热带", "奶滑", "酸甜"],
    v: [
      ["Piña Colada", "Piña Colada", "用朗姆替代伏特加，更经典。"],
      ["Chi Chi Float", "Chi Chi Float", "顶部漂浮 10 ml 黑朗姆，增加深度。" ]
    ]
  }
];
