/* ============================================================
   配方库 · 威士忌
   ============================================================ */

const COCKTAILS_WHISKEY = [
  {
    id: "old-fashioned", zh: "古典鸡尾酒", en: "Old Fashioned", fam: "old-fashioned", base: "whiskey", sub: "波本威士忌 / 黑麦威士忌",
    mods: ["syrup", "bitters", "aromatic"], method: "搅拌", glass: "古典杯", strength: 4, diff: 2,
    ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["单糖浆 Simple Syrup", "7.5 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["橙皮 Orange Peel", "1 片"]],
    steps: [
      "古典杯放入一大块透明冰，搅拌杯加冰预冷。",
      "威士忌、糖浆与苦精加冰搅拌 25–30 秒。",
      "滤入古典杯，挤压橙皮油并擦拭杯口，投入橙皮。"
    ],
    gar: "橙皮",
    note: "糖是调味，不是饮料。若使用高酒精度威士忌，可加 2.5 ml 糖浆；若想更干，糖浆减到 5 ml。",
    flavor: ["温暖", "辛香", "苦香"],
    v: [
      ["Oaxaca Old Fashioned", "Oaxaca Old Fashioned", "龙舌兰 45 ml + 梅斯卡尔 15 ml，龙舌兰糖浆与莫尔苦精，烟熏版。"],
      ["Rum Old Fashioned", "Rum Old Fashioned", "用陈年朗姆 60 ml，糖浆 5 ml，橙味苦精 2 dash。"],
      ["Toronto", "Toronto", "黑麦 60 ml + Fernet 7.5 ml + 糖浆 7.5 ml，药草苦味更强。"],
      ["Wisconsin Old Fashioned", "Wisconsin Old Fashioned", "用白兰地，加樱桃与橙片捣压，最后补苏打，甜而果香。" ]
    ]
  },
  {
    id: "sazerac", zh: "萨泽拉克", en: "Sazerac", fam: "old-fashioned", base: "whiskey", sub: "黑麦威士忌",
    mods: ["syrup", "bitters", "aromatic"], method: "搅拌", glass: "古典杯", strength: 5, diff: 3,
    ing: [["黑麦威士忌 Rye Whiskey", "60 ml"], ["方糖 Sugar Cube", "1 块"], ["Peychaud's 苦精", "3 dash"], ["苦艾酒 Absinthe", "1 tsp 冲洗"], ["柠檬皮 Lemon Peel", "1 片"]],
    steps: [
      "古典杯用苦艾酒冲洗，倒掉多余酒液，杯口朝下静置。",
      "搅拌杯加冰，放入方糖、Peychaud's 与黑麦，搅拌 25 秒。",
      "滤入苦艾冲洗过的杯中，挤压柠檬皮油后丢弃柠檬皮。"
    ],
    gar: "柠檬皮油（不投入）",
    note: "萨泽拉克是「苦艾的香气 + 黑麦的骨架 + Peychaud's 的樱桃茴香」。柠檬皮只喷油，不放入杯中，避免苦味。",
    flavor: ["辛香", "草本", "温暖"],
    v: [
      ["Cognac Sazerac", "Cognac Sazerac", "用干邑替代黑麦，酒体更圆，19 世纪原版风格。"],
      ["Mezcal Sazerac", "Mezcal Sazerac", "用梅斯卡尔替代黑麦，烟熏与苦艾形成双重草本。"],
      ["Improved Whiskey Cocktail", "Improved Whiskey Cocktail", "古典鸡尾酒加 5 ml 黑樱桃利口酒与 5 ml 苦艾，香气更复杂。"]
    ]
  },
  {
    id: "manhattan", zh: "曼哈顿", en: "Manhattan", fam: "duo", base: "whiskey", sub: "黑麦威士忌",
    mods: ["vermouth", "bitters"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["黑麦威士忌 Rye Whiskey", "60 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]],
    steps: [
      "碟形杯提前冰镇，搅拌杯加满大冰块。",
      "倒入黑麦、甜味美思与苦精，搅拌 25–30 秒。",
      "滤入冰杯，以酒渍樱桃装饰。"
    ],
    gar: "酒渍樱桃",
    note: "2:1 是经典比例，但甜味美思的品牌甜度差异极大。Carpano Antica 很浓，可减到 25 ml；Dolin Rouge 较轻，可用 30 ml。",
    flavor: ["温暖", "苦香", "辛香"],
    v: [
      ["Perfect Manhattan", "Perfect Manhattan", "甜味美思与干味美思各 15 ml，更干、更复杂。"],
      ["Dry Manhattan", "Dry Manhattan", "用干味美思 30 ml，柠檬皮替代樱桃，酒感更锐利。"],
      ["Black Manhattan", "Black Manhattan", "用 Averna 替代甜味美思，加 1 dash 橙味苦精，苦甜更深。"],
      ["Brooklyn", "Brooklyn", "黑麦 + 干味美思 + 黑樱桃 + Amer Picon，干苦而芳香。"],
      ["Little Italy", "Little Italy", "黑麦 + Cynar + 甜味美思，朝鲜蓟苦味与焦糖。"],
      ["Greenpoint", "Greenpoint", "黑麦 + 黄查特 + 甜味美思，蜂蜜与药草。" ]
    ]
  },
  {
    id: "boulevardier", zh: "花花公子", en: "Boulevardier", fam: "aperitivo", base: "whiskey", sub: "波本威士忌 / 黑麦威士忌",
    mods: ["vermouth", "amaro"], method: "搅拌", glass: "古典杯", strength: 4, diff: 2,
    ing: [["波本威士忌 Bourbon Whiskey", "45 ml"], ["金巴利 Campari", "30 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["橙皮 Orange Peel", "1 片"]],
    steps: [
      "古典杯加大冰预冷。",
      "所有液体加冰搅拌 20–25 秒。",
      "滤入杯中，橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "内格罗尼的威士忌版本。波本带来玉米甜，黑麦带来辛香；想让苦味更突出，金巴利加到 35 ml。",
    flavor: ["苦香", "温暖", "辛香"],
    v: [
      ["Old Pal", "Old Pal", "黑麦 + 干味美思 + 金巴利 1:1:1，更干。"],
      ["1794", "1794", "黑麦 + 金巴利 + 甜味美思，加 1 dash 橙味苦精，比例更偏酒。"],
      ["Left Hand", "Left Hand", "波本 + 金巴利 + 甜味美思 + 2 dash 巧克力苦精，苦甜更圆。"]
    ]
  },
  {
    id: "whiskey-sour", zh: "威士忌酸", en: "Whiskey Sour", fam: "sour", base: "whiskey", sub: "波本威士忌",
    mods: ["citrus", "syrup", "cream", "bitters"], method: "摇和", glass: "古典杯 / 碟形杯", strength: 3, diff: 2,
    ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["蛋清 Egg White", "20 ml（可选）"], ["安高天娜苦精 Angostura Bitters", "2 dash"]],
    steps: [
      "除苦精外全部材料先干摇 10–15 秒（含蛋清时）。",
      "加冰摇和 12 秒，双重过滤入加冰古典杯或无冰碟形杯。",
      "在泡沫上点 2 dash 苦精，用牙签划出纹路。"
    ],
    gar: "柠檬皮 + 苦精点纹",
    note: "酸甜比不是固定的。柠檬的酸度、糖浆浓度、威士忌酒精度都要考虑；先按 60:30:20 起手，再试味。",
    flavor: ["酸甜", "温暖"],
    v: [
      ["Boston Sour", "Boston Sour", "加入蛋清，口感更绵密，泡沫更厚。"],
      ["New York Sour", "New York Sour", "在蛋清泡沫上漂浮 15 ml 红葡萄酒，果香与单宁增加层次。"],
      ["Gold Rush", "Gold Rush", "用蜂蜜糖浆替代单糖浆，去掉蛋清，更温暖。"],
      ["Penicillin", "Penicillin", "苏格兰调和 + 蜂蜜姜糖浆 + 柠檬，最后漂浮泥煤威士忌。" ]
    ]
  },
  {
    id: "gold-rush", zh: "淘金热", en: "Gold Rush", fam: "sour", base: "whiskey", sub: "波本威士忌",
    mods: ["citrus", "syrup"], method: "摇和", glass: "古典杯", strength: 3, diff: 1,
    ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["蜂蜜糖浆 Honey Syrup", "20 ml"]],
    steps: [
      "蜂蜜按 3:1 与水调成糖浆，冷却。",
      "所有材料加冰摇和 12 秒。",
      "滤入加冰古典杯，柠檬皮或蜂巢装饰。"
    ],
    gar: "柠檬皮",
    note: "蜂蜜比糖浆更黏、更甜，必须稀释。波本的香草与蜂蜜很搭；黑麦会让尾韵更干。",
    flavor: ["酸甜", "温暖", "花香"],
    v: [
      ["Bee's Knees", "Bee's Knees", "把波本换成金酒，蜂蜜与柠檬不变，更清亮。"],
      ["Brown Derby", "Brown Derby", "波本 + 蜂蜜 + 西柚，酸苦平衡更复杂。"],
      ["Gold Rush Fizz", "Gold Rush Fizz", "摇好后补 60 ml 苏打，变成蜂蜜气泡长饮。"]
    ]
  },
  {
    id: "penicillin", zh: "盘尼西林", en: "Penicillin", fam: "sour", base: "whiskey", sub: "苏格兰调和威士忌",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "古典杯", strength: 4, diff: 2,
    ing: [["苏格兰威士忌 Blended Scotch Whisky", "60 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["蜂蜜姜糖浆 Honey-Ginger Syrup", "20 ml"], ["泥煤单一麦芽 Peated Single Malt", "7.5 ml 漂浮"]],
    steps: [
      "除泥煤威士忌外全部材料加冰摇和 12 秒。",
      "滤入加冰古典杯，静置片刻。",
      "沿吧勺背面漂浮泥煤威士忌，姜片或柠檬皮装饰。"
    ],
    gar: "姜片 / 柠檬皮",
    note: "蜂蜜姜糖浆要真有姜的辛辣，不能只是甜。泥煤威士忌只做 7.5 ml 漂浮，喝时先闻烟熏再入口。",
    flavor: ["温暖", "辛香", "酸甜"],
    v: [
      ["Penicillin No. 2", "Penicillin No. 2", "用梅斯卡尔替代泥煤威士忌漂浮，烟熏更矿物。"],
      ["Ginger Gold", "Ginger Gold", "波本 + 柠檬 + 姜蜜，去掉泥煤，更易饮。"],
      ["Scotch Sour", "Scotch Sour", "调和苏格兰 + 柠檬 + 糖浆 + 蛋清，更传统。" ]
    ]
  },
  {
    id: "mint-julep", zh: "薄荷朱丽普", en: "Mint Julep", fam: "julep", base: "whiskey", sub: "波本威士忌",
    mods: ["syrup", "aromatic"], method: "捣压", glass: "朱丽普杯", strength: 4, diff: 2,
    ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["薄荷 Mint", "8–10 片"], ["碎冰 Crushed Ice", "满杯"]],
    steps: [
      "朱丽普杯内壁轻抹薄荷叶，杯底放薄荷与糖浆轻压 2 次。",
      "加入波本与少量碎冰，搅拌至杯壁结霜。",
      "用碎冰填满杯子，堆成小山，拍薄荷枝插入冰中。"
    ],
    gar: "薄荷枝 + 糖粉（可选）",
    note: "Julep 的灵魂是碎冰与霜。薄荷只轻压，不要捣碎；杯子要冰到握不住。",
    flavor: ["清爽", "草本", "温暖"],
    v: [
      ["Georgia Julep", "Georgia Julep", "加入 15 ml 桃子利口酒，减少糖浆，果香更明显。"],
      ["Scotch Julep", "Scotch Julep", "用调和苏格兰替代波本，加 1 dash 苦精。"],
      ["Rum Julep", "Rum Julep", "用陈年朗姆，糖浆换成德梅拉拉糖浆，焦糖感更强。" ]
    ]
  },
  {
    id: "whiskey-smash", zh: "威士忌斯玛什", en: "Whiskey Smash", fam: "julep", base: "whiskey", sub: "波本威士忌",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "古典杯", strength: 3, diff: 1,
    ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["薄荷 Mint", "6 片"]],
    steps: [
      "薄荷与糖浆在摇壶中轻压，加入柠檬、波本与冰。",
      "摇和 10–12 秒，连冰倒入古典杯。",
      "补少量碎冰，薄荷枝与柠檬片装饰。"
    ],
    gar: "薄荷枝 + 柠檬片",
    note: "Smash 是 Julep 的柑橘版本。薄荷不要捣烂，柠檬要新鲜；可以连冰倒入，保留粗犷感。",
    flavor: ["清爽", "酸甜", "草本"],
    v: [
      ["Gin Smash", "Gin Smash", "用金酒替代波本，加 2 片黄瓜，更清爽。"],
      ["Peach Whiskey Smash", "Peach Whiskey Smash", "加入 2 片桃子与 10 ml 桃子利口酒，减少糖浆。"],
      ["Mint Julep", "Mint Julep", "去掉柠檬，只用薄荷、糖与波本，碎冰堆满。" ]
    ]
  },
  {
    id: "whiskey-highball", zh: "威士忌高球", en: "Whiskey Highball", fam: "highball", base: "whiskey", sub: "日本威士忌 / 调和",
    mods: ["mixer", "aromatic"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["日本威士忌 Japanese Whisky", "45 ml"], ["苏打水 Soda Water", "120 ml"], ["柠檬皮 Lemon Peel", "1 片"]],
    steps: [
      "高球杯加满大冰块，搅动冰杯后倒掉融水。",
      "倒入威士忌，沿吧勺缓慢注入冰镇苏打水。",
      "轻提拉一次，喷柠檬皮油，插入长吧勺。"
    ],
    gar: "柠檬皮",
    note: "日式高球追求「冷、干、气泡细」。威士忌 45 ml 对苏打 120 ml，冰要满，倒苏打时不要猛冲。",
    flavor: ["清爽", "温暖"],
    v: [
      ["Mizuwari", "Mizuwari", "日本酒吧做法：威士忌 45 ml、水 90 ml、冰，搅拌而非加苏打，口感柔。"],
      ["Horse's Neck", "Horse's Neck", "威士忌 + 姜汁汽水，加长柠檬皮螺旋。"],
      ["Godfather", "Godfather", "威士忌 45 ml + 杏仁利口酒 20 ml，加冰直调，甜香浓郁。" ]
    ]
  },
  {
    id: "rob-roy", zh: "罗伊罗伊", en: "Rob Roy", fam: "duo", base: "whiskey", sub: "苏格兰",
    mods: ["vermouth", "bitters"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["苏格兰威士忌 Blended Scotch Whisky", "60 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]],
    steps: [
      "碟形杯冰镇，搅拌杯加冰。",
      "所有材料搅拌 25 秒。",
      "滤入杯中，樱桃装饰。"
    ],
    gar: "酒渍樱桃",
    note: "曼哈顿的苏格兰版本。调和苏格兰最稳；单一麦芽会带来更多个性，但可能压过味美思。",
    flavor: ["温暖", "苦香", "辛香"],
    v: [
      ["Perfect Rob Roy", "Perfect Rob Roy", "甜、干味美思各 15 ml，更干更复杂。"],
      ["Dry Rob Roy", "Dry Rob Roy", "用干味美思 30 ml，柠檬皮装饰。"],
      ["Bobby Burns", "Bobby Burns", "苏格兰 + 甜味美思 + 2 dash Bénédictine，蜂蜜草药香。" ]
    ]
  },
  {
    id: "rusty-nail", zh: "锈钉", en: "Rusty Nail", fam: "old-fashioned", base: "whiskey", sub: "苏格兰",
    mods: ["liqueur"], method: "搅拌", glass: "古典杯", strength: 5, diff: 1,
    ing: [["苏格兰威士忌 Blended Scotch Whisky", "45 ml"], ["杜林标 Drambuie", "20 ml"], ["柠檬皮 Lemon Peel", "1 片"]],
    steps: [
      "古典杯加大冰，倒入苏格兰与杜林标。",
      "用吧勺搅拌 15 秒，充分冷却。",
      "喷柠檬皮油，投入杯中。"
    ],
    gar: "柠檬皮",
    note: "两种甜烈酒的对话。杜林标很甜，20 ml 是安全线；想让酒更干，减到 15 ml，威士忌加到 50 ml。",
    flavor: ["温暖", "花香", "辛香"],
    v: [
      ["Highland Nail", "Highland Nail", "用高地单一麦芽替代调和苏格兰，蜂蜜与石楠花香更明显。"],
      ["Rusty Compass", "Rusty Compass", "加入 1 dash 橙味苦精与橙皮，甜味更有层次。"]
    ]
  },
  {
    id: "godfather", zh: "教父", en: "Godfather", fam: "old-fashioned", base: "whiskey", sub: "苏格兰",
    mods: ["liqueur"], method: "直调", glass: "古典杯", strength: 4, diff: 1,
    ing: [["苏格兰威士忌 Blended Scotch Whisky", "45 ml"], ["杏仁利口酒 Amaretto", "20 ml"]],
    steps: [
      "古典杯加一大块冰。",
      "倒入苏格兰与杏仁利口酒，搅拌 15 秒。",
      "橙皮或烤杏仁装饰。"
    ],
    gar: "橙皮 / 烤杏仁",
    note: "杏仁的甜与苏格兰的烟熏/蜂蜜是经典搭配。比例从 3:1 到 2:1 都可，看利口酒甜度。",
    flavor: ["温暖", "奶滑", "花香"],
    v: [
      ["Godmother", "Godmother", "把苏格兰换成伏特加，杏仁更直接。"],
      ["Godchild", "Godchild", "把苏格兰换成干邑，果香更圆。"],
      ["French Connection", "French Connection", "干邑 + 杏仁利口酒，更柔和的餐后版本。" ]
    ]
  },
  {
    id: "irish-coffee", zh: "爱尔兰咖啡", en: "Irish Coffee", fam: "coffee", base: "whiskey", sub: "爱尔兰威士忌",
    mods: ["coffee", "cream", "syrup"], method: "直调", glass: "带柄咖啡杯", strength: 2, diff: 2,
    ing: [["爱尔兰威士忌 Irish Whiskey", "45 ml"], ["热咖啡 Hot Coffee", "120 ml"], ["德梅拉拉糖浆 Demerara Syrup", "10 ml"], ["淡奶油 Heavy Cream", "30 ml"]],
    steps: [
      "咖啡杯用热水预热，倒掉水。",
      "加入威士忌、糖浆与热咖啡，搅拌至糖完全溶解。",
      "沿吧勺背面缓慢倒入轻打发奶油，形成 1.5 cm 厚的奶油层，不搅拌饮用。"
    ],
    gar: "现磨肉豆蔻（可选）",
    note: "奶油只打到浓稠流动，不要硬性发泡。第一口要穿过冷奶油喝到热咖啡，这是这杯酒的戏剧性。",
    flavor: ["咖啡", "奶滑", "温暖"],
    v: [
      ["Gaelic Coffee", "Gaelic Coffee", "用苏格兰威士忌替代爱尔兰，烟熏感更强。"],
      ["Mexican Coffee", "Mexican Coffee", "加入 10 ml 咖啡利口酒与肉桂，减少糖浆。"],
      ["Cold Irish Coffee", "Cold Irish Coffee", "冰咖啡、威士忌、糖浆加冰摇和，滤入杯中后漂浮冷奶泡。" ]
    ]
  },
  {
    id: "vieux-carre", zh: "老广场", en: "Vieux Carré", fam: "duo", base: "whiskey", sub: "黑麦威士忌 + 干邑",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "古典杯", strength: 5, diff: 3,
    ing: [["黑麦威士忌 Rye Whiskey", "30 ml"], ["干邑 Cognac", "30 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["Bénédictine", "5 ml"], ["Peychaud's", "1 dash"], ["安高天娜苦精 Angostura Bitters", "1 dash"]],
    steps: [
      "古典杯加冰预冷，搅拌杯加满冰。",
      "所有液体搅拌 25–30 秒。",
      "滤入杯中，橙皮油与樱桃装饰。"
    ],
    gar: "橙皮 + 樱桃",
    note: "新奥尔良的复合型经典。Bénédictine 只需 5 ml，它的蜂蜜草药香会贯穿整杯；甜味美思选不要太浓的。",
    flavor: ["温暖", "苦香", "草本"],
    v: [
      ["Vieux Carré Blanc", "Vieux Carré Blanc", "用干味美思替代甜味美思，加 1 dash 橙味苦精，更干。"],
      ["Sazerac", "Sazerac", "去掉干邑、味美思与 Bénédictine，只留黑麦、糖、Peychaud's 与苦艾。" ]
    ]
  },
  {
    id: "paper-plane", zh: "纸飞机", en: "Paper Plane", fam: "sour", base: "whiskey", sub: "波本威士忌",
    mods: ["citrus", "amaro"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["波本威士忌 Bourbon Whiskey", "22.5 ml"], ["Aperol", "22.5 ml"], ["Amaro Nonino", "22.5 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "等量配方，但四种材料的甜苦差异很大。Aperol 的橙甜、Nonino 的苦橙与波本的香草要互相对话。",
    flavor: ["苦香", "酸甜", "温暖"],
    v: [
      ["Paper Plane 2.0", "Paper Plane 2.0", "波本 30 ml，其余各 20 ml，酒感更突出。"],
      ["Final Ward", "Final Ward", "黑麦、绿查特、黑樱桃、柠檬等量，草本更重。"],
      ["Naked and Famous", "Naked and Famous", "梅斯卡尔、Aperol、黄查特、青柠等量，烟熏版。" ]
    ]
  },
  {
    id: "toronto", zh: "多伦多", en: "Toronto", fam: "old-fashioned", base: "whiskey", sub: "黑麦威士忌",
    mods: ["syrup", "amaro", "bitters"], method: "搅拌", glass: "古典杯", strength: 5, diff: 2,
    ing: [["黑麦威士忌 Rye Whiskey", "60 ml"], ["Fernet-Branca", "7.5 ml"], ["单糖浆 Simple Syrup", "7.5 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]],
    steps: [
      "古典杯加冰预冷，搅拌杯加满冰。",
      "所有材料搅拌 25 秒。",
      "滤入杯中，橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "Fernet 的薄荷、药草与极强苦味需要糖与黑麦支撑。7.5 ml 是起点；第一次做不要超过 10 ml。",
    flavor: ["苦香", "草本", "温暖"],
    v: [
      ["Toronto No. 2", "Toronto No. 2", "用 Averna 替代 Fernet，苦味更圆、焦糖更多。"],
      ["Hanky Panky", "Hanky Panky", "金酒 + 甜味美思 + 5 ml Fernet，更清亮。" ]
    ]
  },
  {
    id: "little-italy", zh: "小意大利", en: "Little Italy", fam: "duo", base: "whiskey", sub: "黑麦威士忌",
    mods: ["vermouth", "amaro"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["Cynar", "20 ml"], ["甜味美思 Sweet Vermouth", "20 ml"], ["橙皮 Orange Peel", "1 片"]],
    steps: [
      "所有液体加冰搅拌 20–25 秒。",
      "滤入冰镇碟形杯。",
      "橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "Cynar 的朝鲜蓟苦与焦糖甜，把曼哈顿变得更草本。想让苦味更明显，Cynar 加到 25 ml。",
    flavor: ["苦香", "温暖", "草本"],
    v: [
      ["Little Italy Bianco", "Little Italy Bianco", "用干味美思替代甜味美思，加 1 dash 橙味苦精，更干。"],
      ["Rabo de Galo", "Rabo de Galo", "卡莎萨 + Cynar + 甜味美思，巴西版。" ]
    ]
  },
  {
    id: "greenpoint", zh: "绿点", en: "Greenpoint", fam: "duo", base: "whiskey", sub: "黑麦威士忌",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["黑麦威士忌 Rye Whiskey", "60 ml"], ["黄查特 Yellow Chartreuse", "15 ml"], ["甜味美思 Sweet Vermouth", "15 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]],
    steps: [
      "所有液体加冰搅拌 20–25 秒。",
      "滤入冰镇碟形杯。",
      "柠檬皮油装饰。"
    ],
    gar: "柠檬皮",
    note: "黄查特的蜂蜜与花香很浓，15 ml 足够。黑麦的辛香把甜味拉回干爽。",
    flavor: ["花香", "温暖", "草本"],
    v: [
      ["Greenpoint Fizz", "Greenpoint Fizz", "摇和并补苏打，花香更轻。"],
      ["Brooklyn", "Brooklyn", "黑麦 + 干味美思 + 黑樱桃 + Amer Picon，更干苦。" ]
    ]
  },
  {
    id: "revolver", zh: "左轮手枪", en: "Revolver", fam: "old-fashioned", base: "whiskey", sub: "波本威士忌",
    mods: ["coffee", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["咖啡利口酒 Coffee Liqueur", "15 ml"], ["橙味苦精 Orange Bitters", "2 dash"]],
    steps: [
      "所有液体加冰搅拌 20 秒。",
      "滤入冰镇碟形杯。",
      "烧橙皮油并投入杯中。"
    ],
    gar: "烧橙皮",
    note: "咖啡利口酒让波本更圆，橙味苦精把甜味拉回干爽。不要加奶油，这是一杯短饮。",
    flavor: ["咖啡", "温暖", "苦香"],
    v: [
      ["Revolver Rye", "Revolver Rye", "用黑麦替代波本，咖啡与辛香更锐利。"],
      ["Black Russian", "Black Russian", "伏特加 + 咖啡利口酒，更直接、更甜。" ]
    ]
  }
];
