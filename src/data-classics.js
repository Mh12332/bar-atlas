/* ============================================================
   配方库 · 非 IBA 经典、Tiki 与地区酒
   来源标签区分「经典文献」「Tiki 传统」「现代经典」「地区传统」。
   ============================================================ */

const COCKTAILS_CLASSICS = [
  {
    id: "pegu-club", zh: "佩古俱乐部", en: "Pegu Club", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "liqueur", "bitters"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "60 ml"], ["君度 Cointreau", "30 ml"], ["青柠汁 Lime Juice", "5 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"], ["橙味苦精 Orange Bitters", "1 dash"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "Savoy 时代配方通常不加装饰；可挤青柠皮油。"],
    gar: "无 / 青柠皮油（可选）",
    note: "Savoy 1930 版是 2/3 金酒、1/3 君度、1 茶匙青柠与两种苦精；酒体甜而锐利。现代酒吧常把青柠加到 15 ml（见变体）。",
    flavor: ["酸甜", "苦香", "草本"],
    history: "Pegu Club 是缅甸仰光 Pegu Club 绅士俱乐部的招牌，1930 年《Savoy Cocktail Book》记录了配方。它后来在经典复兴中重新流行；由于原版青柠很少，现代常见版本会提高酸度。",
    src: { tag: "经典文献", label: "The Savoy Cocktail Book (1930) / Pegu Club, Burma", url: "https://savoycocktaildatabase.com/cocktails/pegu-club-cocktail/" },
    v: [
      { zh: "Modern Pegu Club", en: "Modern Pegu Club", how: "把青柠提高到 15 ml、君度减到 20 ml，接近现代酒吧比例。", ing: [["金酒 Gin", "45 ml"], ["君度 Cointreau", "20 ml"], ["青柠汁 Lime Juice", "15 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"], ["橙味苦精 Orange Bitters", "1 dash"]], method: "摇和", glass: "碟形杯", note: "更酸、更适合现代口味。" },
      { zh: "Pegu Club Royale", en: "Pegu Club Royale", how: "按现代比例摇和后补 60 ml 起泡酒。", ing: [["金酒 Gin", "45 ml"], ["君度 Cointreau", "20 ml"], ["青柠汁 Lime Juice", "15 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "气泡让苦精与君度更轻。" }
    ]
  },
  {
    id: "pink-lady", zh: "粉色佳人", en: "Pink Lady", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "liqueur", "cream"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["金酒 Gin", "40 ml"], ["苹果白兰地 Apple Brandy", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["蛋清 Egg White", "20 ml"]],
    steps: ["所有材料先干摇 15 秒。", "加冰摇和 12 秒，双重过滤入冰镇碟形杯。", "石榴籽或樱桃装饰。"],
    gar: "石榴籽 / 樱桃",
    note: "粉色来自石榴糖浆，不来自草莓。苹果白兰地提供果香与酒体，蛋清让颜色变柔；不要用过多糖浆。",
    flavor: ["酸甜", "花香"],
    history: "Pink Lady 在 1910 年代的纽约与伦敦流行，名字来自当时的舞台与社交文化。金酒、苹果白兰地、柠檬、石榴与蛋清的组合，在禁酒令前后都有记录，是酸酒家族里最优雅的粉色版本之一。",
    src: { tag: "经典文献", label: "Pink Lady (cocktail) / 20 世纪初记载", url: "https://en.wikipedia.org/wiki/Pink_Lady_(cocktail)" },
    v: [
      { zh: "Pink Lady Fizz", en: "Pink Lady Fizz", how: "省略蛋清，摇和后补 60 ml 苏打。", ing: [["金酒 Gin", "40 ml"], ["苹果白兰地 Apple Brandy", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，适合早午餐。" },
      { zh: "Pink Rose", en: "Pink Rose", how: "用黑樱桃利口酒替代石榴糖浆，减少 5 ml。", ing: [["金酒 Gin", "40 ml"], ["苹果白兰地 Apple Brandy", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "7.5 ml"], ["蛋清 Egg White", "20 ml"]], method: "摇和", glass: "碟形杯", note: "樱桃核香更明显，颜色更暗。" }
    ]
  },
  {
    id: "corpse-reviver-1", zh: "复苏者一号", en: "Corpse Reviver #1", fam: "duo", base: "brandy", sub: "干邑",
    mods: ["vermouth", "liqueur"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["干邑 Cognac", "45 ml"], ["苹果白兰地 Apple Brandy", "22.5 ml"], ["甜味美思 Sweet Vermouth", "22.5 ml"]],
    steps: ["所有液体加冰搅拌 25 秒。", "滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "Savoy 1930 版为 1/2 干邑、1/4 苹果白兰地、1/4 甜味美思（2:1:1）。后世常见等量版，酒感更重、更甜；本页以 Savoy 比例为基准。",
    flavor: ["温暖", "花香", "苦香"],
    history: "Corpse Reviver #1 见于 1930 年《Savoy Cocktail Book》，是“起死回生”解酒酒家族的另一支。干邑、苹果白兰地与甜味美思的 2:1:1 组合，比加入君度与柠檬的 #2 更古老、更酒感。",
    src: { tag: "经典文献", label: "The Savoy Cocktail Book (1930)", url: "https://savoycocktaildatabase.com/cocktails/corpse-reviver-no-1/" },
    v: [
      { zh: "Corpse Reviver #1 Equal Parts", en: "Corpse Reviver #1 Equal Parts", how: "三种材料各 30 ml，后世常见的等量版。", ing: [["干邑 Cognac", "30 ml"], ["苹果白兰地 Apple Brandy", "30 ml"], ["甜味美思 Sweet Vermouth", "30 ml"]], method: "搅拌", glass: "碟形杯", note: "更甜、更重，与 Savoy 的 2:1:1 不同。" },
      { zh: "Corpse Reviver #1 Royale", en: "Corpse Reviver #1 Royale", how: "按 2:1:1 搅拌后补 60 ml 起泡酒。", ing: [["干邑 Cognac", "45 ml"], ["苹果白兰地 Apple Brandy", "22.5 ml"], ["甜味美思 Sweet Vermouth", "22.5 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "搅拌", glass: "香槟杯", note: "先搅拌滤入杯中，再补起泡酒。" }
    ]
  },
  {
    id: "scofflaw", zh: "藐视法律者", en: "Scofflaw", fam: "sour", base: "whiskey", sub: "黑麦威士忌",
    mods: ["citrus", "vermouth", "syrup", "bitters"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["橙味苦精 Orange Bitters", "1 dash"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "1920 年代巴黎 Harry's Bar 的创作，名字来自禁酒令时期的“藐视法律者”。干味美思让黑麦更干，石榴只负责一丝红果甜。",
    flavor: ["酸甜", "苦香", "温暖"],
    history: "Scofflaw 由巴黎 Harry's New York Bar 的调酒师在 1920 年代创作，名字来自美国禁酒令时期对私酒饮用者的称呼。黑麦、干味美思、柠檬、石榴与苦精的组合，是禁酒令时代巴黎酒吧的经典。",
    src: { tag: "经典酒吧", label: "Harry's New York Bar / 1920s", url: "https://en.wikipedia.org/wiki/Harry%27s_New_York_Bar" },
    v: [
      { zh: "Scofflaw Fizz", en: "Scofflaw Fizz", how: "摇好后补 60 ml 苏打。", ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，苦精香气更明显。" },
      { zh: "Scofflaw Perfect", en: "Scofflaw Perfect", how: "干、甜味美思各 10 ml。", ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["干味美思 Dry Vermouth", "10 ml"], ["甜味美思 Sweet Vermouth", "10 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["石榴糖浆 Grenadine", "10 ml"]], method: "摇和", glass: "碟形杯", note: "甜度更圆，适合冬天。" }
    ]
  },
  {
    id: "blue-moon", zh: "蓝月", en: "Blue Moon", fam: "duo", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "liqueur", "citrus"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["紫罗兰利口酒 Crème de Violette", "10 ml"], ["柠檬汁 Lemon Juice", "10 ml"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "Aviation 的亲戚，但用干味美思替代黑樱桃。紫罗兰 10 ml 足够，颜色应是淡紫；过量会像香水。",
    flavor: ["花香", "草本", "酸甜"],
    history: "Blue Moon 的具体起源与年代待考，常被视为 Aviation 的变体：用干味美思替代黑樱桃，紫罗兰仍负责颜色与花香。它属于 20 世纪上半叶美国酒吧的紫罗兰利口酒传统。",
    src: { tag: "经典文献", label: "经典配方；具体起源待考", url: "" },
    v: [
      { zh: "Blue Moon Fizz", en: "Blue Moon Fizz", how: "摇好后补 60 ml 苏打。", ing: [["金酒 Gin", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["紫罗兰利口酒 Crème de Violette", "10 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，花香更明显。" },
      { zh: "Blue Moon Dry", en: "Blue Moon Dry", how: "干味美思加到 30 ml，紫罗兰减到 5 ml。", ing: [["金酒 Gin", "45 ml"], ["干味美思 Dry Vermouth", "30 ml"], ["紫罗兰利口酒 Crème de Violette", "5 ml"], ["柠檬汁 Lemon Juice", "10 ml"]], method: "搅拌", glass: "碟形杯", note: "更干，接近马天尼。" }
    ]
  },
  {
    id: "pink-gin", zh: "粉红金酒", en: "Pink Gin", fam: "old-fashioned", base: "gin", sub: "普利茅斯 / 伦敦干金",
    mods: ["bitters", "aromatic"], method: "搅拌", glass: "古典杯", strength: 4, diff: 1,
    ing: [["金酒 Gin", "45 ml"], ["安高天娜苦精 Angostura Bitters", "3 dash"], ["水 Water", "10 ml"], ["柠檬皮 Lemon Peel", "1 片"]],
    steps: ["古典杯加冰，滴入苦精并旋转杯壁。", "倒入金酒与水，搅拌 15 秒。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "英国皇家海军的喝法：金酒加苦精，常加少量水。苦精会染出淡粉色，不是加糖浆；柠檬皮是香气关键。",
    flavor: ["苦香", "草本", "清爽"],
    history: "Pink Gin 源于 19 世纪英国皇家海军：安高天娜苦精最初被当作抗疟补剂，军官把它加入金酒以缓解晕船与热带不适。苦精染出的淡粉色成为名字来源，后来演变为餐前短饮。",
    src: { tag: "经典文献", label: "Punch / 英国皇家海军传统", url: "https://punchdrink.com/articles/created-and-forgotten-at-sea-pink-gin/" },
    v: [
      { zh: "Pink Gin & Tonic", en: "Pink Gin & Tonic", how: "加 120 ml 汤力水，变成高球。", ing: [["金酒 Gin", "45 ml"], ["安高天娜苦精 Angostura Bitters", "3 dash"], ["汤力水 Tonic Water", "120 ml"], ["柠檬皮 Lemon Peel", "1 片"]], method: "直调", glass: "高球杯", note: "苦精与奎宁叠加，适合餐前。" },
      { zh: "Plymouth Pink Gin", en: "Plymouth Pink Gin", how: "用 Plymouth 金酒，水减到 5 ml。", ing: [["金酒 Gin", "45 ml"], ["安高天娜苦精 Angostura Bitters", "3 dash"], ["水 Water", "5 ml"]], method: "搅拌", glass: "古典杯", note: "Plymouth 更柔，苦精更突出。" }
    ]
  },
  {
    id: "champs-elysees", zh: "香榭丽舍", en: "Champs-Élysées", fam: "sour", base: "brandy", sub: "干邑",
    mods: ["citrus", "liqueur", "syrup", "bitters"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["干邑 Cognac", "45 ml"], ["绿查特 Green Chartreuse", "15 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "1930 年代巴黎的经典。绿查特的药草与干邑的果香需要柠檬与少量糖拉起；查特 15 ml 足够。",
    flavor: ["草本", "酸甜", "花香"],
    history: "Champs-Élysées 见于 1930 年《Savoy Cocktail Book》，以巴黎香榭丽舍大道命名。干邑、绿查特、柠檬、糖与苦精的组合，是禁酒令后巴黎酒吧文化的代表。",
    src: { tag: "经典文献", label: "The Savoy Cocktail Book (1930)", url: "https://en.wikipedia.org/wiki/The_Savoy_Cocktail_Book" },
    v: [
      { zh: "Champs-Élysées Fizz", en: "Champs-Élysées Fizz", how: "摇好后补 60 ml 苏打。", ing: [["干邑 Cognac", "45 ml"], ["绿查特 Green Chartreuse", "15 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，药草香更清晰。" },
      { zh: "Champs-Élysées Royale", en: "Champs-Élysées Royale", how: "补 60 ml 起泡酒，糖浆减 5 ml。", ing: [["干邑 Cognac", "45 ml"], ["绿查特 Green Chartreuse", "15 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["单糖浆 Simple Syrup", "5 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "适合庆典，酒精度仍不低。" }
    ]
  },
  {
    id: "de-la-louisiane", zh: "路易斯安那", en: "De La Louisiane", fam: "duo", base: "whiskey", sub: "黑麦威士忌",
    mods: ["vermouth", "liqueur", "bitters", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["甜味美思 Sweet Vermouth", "20 ml"], ["Bénédictine", "20 ml"], ["Peychaud's", "2 dash"], ["苦艾酒 Absinthe", "1 tsp 冲洗"]],
    steps: ["碟形杯用苦艾酒冲洗，倒掉多余。", "其余液体加冰搅拌 25 秒。", "滤入杯中，樱桃装饰。"],
    gar: "樱桃",
    note: "新奥尔良的经典，结构像曼哈顿加 Bénédictine。Bénédictine 的蜂蜜草药很甜，20 ml 是上限；苦艾只做杯壁香气。",
    flavor: ["温暖", "草本", "苦香"],
    history: "De La Louisiane 在 1930 年代的新奥尔良流行，名字来自路易斯安那州与法国殖民历史。黑麦、甜味美思、Bénédictine、Peychaud's 与苦艾冲洗，是曼哈顿在法语区的一次变奏。",
    src: { tag: "经典文献", label: "Punch / 新奥尔良经典", url: "https://punchdrink.com/recipes/de-la-louisiane/" },
    v: [
      { zh: "De La Louisiane Dry", en: "De La Louisiane Dry", how: "甜味美思减到 10 ml，干味美思 10 ml。", ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["甜味美思 Sweet Vermouth", "10 ml"], ["干味美思 Dry Vermouth", "10 ml"], ["Bénédictine", "20 ml"], ["Peychaud's", "2 dash"]], method: "搅拌", glass: "碟形杯", note: "更干，Bénédictine 仍主导。" },
      { zh: "De La Louisiane Fizz", en: "De La Louisiane Fizz", how: "摇和后补 60 ml 苏打。", ing: [["黑麦威士忌 Rye Whiskey", "45 ml"], ["甜味美思 Sweet Vermouth", "20 ml"], ["Bénédictine", "15 ml"], ["Peychaud's", "2 dash"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "气泡让甜香变轻。" }
    ]
  },
  {
    id: "rosita", zh: "罗西塔", en: "Rosita", fam: "duo", base: "agave", sub: "微陈龙舌兰",
    mods: ["vermouth", "amaro", "bitters"], method: "搅拌", glass: "古典杯", strength: 4, diff: 2,
    ing: [["微陈龙舌兰 Reposado Tequila", "45 ml"], ["金巴利 Campari", "30 ml"], ["甜味美思 Sweet Vermouth", "15 ml"], ["干味美思 Dry Vermouth", "15 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]],
    steps: ["所有液体加冰搅拌 20–25 秒。", "滤入加冰古典杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "龙舌兰版内格罗尼：金巴利 30 ml 提供苦味，干、甜味美思各半让结构更收。Reposado 的橡木与金巴利很合。",
    flavor: ["苦香", "草本", "温暖"],
    history: "Rosita 最早可查于 1974 年版《Mr. Boston Official Bartender's Guide》；1991 年 Gary Regan 在《The Bartender's Bible》中收录并略作调整，使它重新进入现代酒吧。它可被视为“龙舌兰内格罗尼”的经典版本。",
    src: { tag: "经典文献", label: "Mr. Boston 1974 / Gary Regan 1991", url: "https://vinepair.com/cocktail-recipe/rosita/" },
    v: [
      { zh: "Rosita Blanca", en: "Rosita Blanca", how: "用 Blanco 龙舌兰，干味美思加到 20 ml，金巴利 30 ml。", ing: [["白色龙舌兰 Blanco Tequila", "45 ml"], ["金巴利 Campari", "30 ml"], ["甜味美思 Sweet Vermouth", "10 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]], method: "搅拌", glass: "古典杯", note: "更清亮、更干。" },
      { zh: "Rosita Mezcal", en: "Rosita Mezcal", how: "用梅斯卡尔替代一半龙舌兰，金巴利减到 20 ml。", ing: [["微陈龙舌兰 Reposado Tequila", "25 ml"], ["梅斯卡尔 Mezcal", "20 ml"], ["金巴利 Campari", "20 ml"], ["甜味美思 Sweet Vermouth", "15 ml"], ["干味美思 Dry Vermouth", "15 ml"]], method: "搅拌", glass: "古典杯", note: "烟熏与苦味叠加，适合餐后。" }
    ]
  },
  {
    id: "nui-nui", zh: "努伊努伊", en: "Nui Nui", fam: "tiki", base: "rum", sub: "陈年朗姆",
    mods: ["citrus", "juice", "syrup", "aromatic"], method: "摇和", glass: "Tiki 杯 / 古典杯", strength: 4, diff: 2,
    ing: [["陈年朗姆 Aged Rum", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["橙汁 Orange Juice", "15 ml"], ["肉桂糖浆 Cinnamon Syrup", "10 ml"], ["香草糖浆 Vanilla Syrup", "5 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]],
    steps: ["所有材料加冰摇和 12 秒。", "滤入加碎冰的 Tiki 杯或古典杯。", "橙片与肉桂装饰。"],
    gar: "橙片 + 肉桂",
    note: "Don the Beachcomber 的 Tiki 经典，名字来自大溪地语。肉桂与香草是骨架，青柠与橙汁负责酸；不要用肉桂粉代替糖浆。",
    flavor: ["热带", "辛香", "酸甜"],
    history: "Nui Nui 由 Don the Beachcomber 在 1930 年代创作，是 Tiki 黄金时代的经典之一。它用陈年朗姆、青柠、橙、肉桂与香草，结构比 Zombie 更短、更聚焦香料。",
    src: { tag: "Tiki 传统", label: "Don the Beachcomber / 1930s", url: "https://en.wikipedia.org/wiki/Don_the_Beachcomber" },
    v: [
      { zh: "Nui Nui Royale", en: "Nui Nui Royale", how: "补 60 ml 起泡酒，减少肉桂糖浆。", ing: [["陈年朗姆 Aged Rum", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["橙汁 Orange Juice", "15 ml"], ["肉桂糖浆 Cinnamon Syrup", "5 ml"], ["香草糖浆 Vanilla Syrup", "5 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，香料与气泡。" },
      { zh: "Nui Nui Old Fashioned", en: "Nui Nui Old Fashioned", how: "去掉果汁，肉桂糖浆 7.5 ml，搅拌。", ing: [["陈年朗姆 Aged Rum", "60 ml"], ["肉桂糖浆 Cinnamon Syrup", "7.5 ml"], ["香草糖浆 Vanilla Syrup", "5 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]], method: "搅拌", glass: "古典杯", note: "更烈、更干，香料更集中。" }
    ]
  },
  {
    id: "jet-pilot", zh: "喷气飞行员", en: "Jet Pilot", fam: "tiki", base: "rum", sub: "陈年朗姆 + 高酒精度朗姆",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "Tiki 杯", strength: 5, diff: 3,
    ing: [["陈年朗姆 Aged Rum", "30 ml"], ["高酒精度朗姆 Overproof Rum", "30 ml"], ["青柠汁 Lime Juice", "15 ml"], ["西柚汁 Grapefruit Juice", "15 ml"], ["肉桂糖浆 Cinnamon Syrup", "10 ml"], ["法勒南 Falernum", "5 ml"], ["苦艾酒 Absinthe", "5 ml"]],
    steps: ["所有材料加冰摇和 12 秒。", "滤入加碎冰的 Tiki 杯。", "薄荷与青柠壳装饰。"],
    gar: "薄荷 + 青柠壳",
    note: "Don the Beachcomber 的强酒精 Tiki，结构像 Zombie 的短版。Overproof 朗姆 30 ml 很猛，给客人前确认；苦艾只 5 ml。",
    flavor: ["热带", "辛香", "苦香"],
    history: "Jet Pilot 是 1958 年比佛利山 Luau 酒吧的 Steve Crane 在 Test Pilot 基础上改编的版本：去掉 Cointreau，加入西柚汁与肉桂糖浆。把“首创”归给 Don the Beachcomber 是流传说法，不宜当作史实。",
    src: { tag: "Tiki 传统", label: "VinePair / Test Pilot 与 Jet Pilot 源流", url: "https://vinepair.com/cocktail-recipe/test-pilot/" },
    v: [
      { zh: "Jet Pilot Light", en: "Jet Pilot Light", how: "Overproof 减到 15 ml，陈年朗姆加到 45 ml。", ing: [["陈年朗姆 Aged Rum", "45 ml"], ["高酒精度朗姆 Overproof Rum", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["西柚汁 Grapefruit Juice", "15 ml"], ["肉桂糖浆 Cinnamon Syrup", "10 ml"], ["法勒南 Falernum", "5 ml"], ["苦艾酒 Absinthe", "5 ml"]], method: "摇和", glass: "Tiki 杯", note: "更适合单杯出品。" },
      { zh: "Jet Pilot Punch", en: "Jet Pilot Punch", how: "加倍果汁与苏打，做成多人份。", ing: [["陈年朗姆 Aged Rum", "60 ml"], ["高酒精度朗姆 Overproof Rum", "60 ml"], ["青柠汁 Lime Juice", "30 ml"], ["西柚汁 Grapefruit Juice", "30 ml"], ["肉桂糖浆 Cinnamon Syrup", "20 ml"], ["法勒南 Falernum", "10 ml"], ["苏打水 Soda Water", "120 ml"]], method: "直调", glass: "潘趣碗", note: "按人数倍增，提前冷藏。" }
    ]
  },
  {
    id: "test-pilot", zh: "试飞员", en: "Test Pilot", fam: "tiki", base: "rum", sub: "牙买加朗姆 + 波多黎各朗姆",
    mods: ["citrus", "liqueur", "syrup", "aromatic"], method: "搅拌机", glass: "双份古典杯", strength: 4, diff: 3,
    ing: [["牙买加朗姆 Jamaican Rum", "45 ml"], ["波多黎各朗姆 Puerto Rican Rum", "22.5 ml"], ["君度 Cointreau", "15 ml"], ["法勒南 Falernum", "15 ml"], ["青柠汁 Lime Juice", "7.5 ml"], ["苦艾酒 Absinthe", "6 drops"], ["安高天娜苦精 Angostura Bitters", "1 dash"], ["碎冰 Crushed Ice", "1 杯"]],
    steps: ["所有材料与 1 杯碎冰放入搅拌机，短促搅打至碎冰状。", "连冰倒入双份古典杯，补碎冰。", "黑樱桃装饰。"],
    gar: "黑樱桃",
    note: "这是 Don the Beachcomber 1941 年前后的 Test Pilot：朗姆、君度、法勒南、青柠、Pernod 与苦精，没有西柚或肉桂。1958 年 Luau 的 Jet Pilot 是在此基础上加入西柚与肉桂的改编版。",
    flavor: ["热带", "苦香", "辛香"],
    history: "Test Pilot 由 Don the Beachcomber 在 1930 年代创作，1941 年版本被 Jeff “Beachbum” Berry 记录。1958 年比佛利山 Luau 的 Steve Crane 将它改成 Jet Pilot：去掉君度，加入西柚与肉桂。",
    src: { tag: "Tiki 传统", label: "VinePair / Beachbum Berry 记录的 1941 版", url: "https://vinepair.com/cocktail-recipe/test-pilot/" },
    v: [
      { zh: "Test Pilot Shaken", en: "Test Pilot Shaken", how: "不用搅拌机，加冰摇和后滤入加碎冰的双份古典杯。", ing: [["牙买加朗姆 Jamaican Rum", "45 ml"], ["波多黎各朗姆 Puerto Rican Rum", "22.5 ml"], ["君度 Cointreau", "15 ml"], ["法勒南 Falernum", "15 ml"], ["青柠汁 Lime Juice", "10 ml"], ["苦艾酒 Absinthe", "6 drops"], ["安高天娜苦精 Angostura Bitters", "1 dash"]], method: "摇和", glass: "双份古典杯", note: "质地更清，香气更集中。" },
      { zh: "Test Pilot Royale", en: "Test Pilot Royale", how: "摇和后补 60 ml 起泡酒，降低酒感。", ing: [["牙买加朗姆 Jamaican Rum", "45 ml"], ["波多黎各朗姆 Puerto Rican Rum", "22.5 ml"], ["君度 Cointreau", "15 ml"], ["法勒南 Falernum", "10 ml"], ["青柠汁 Lime Juice", "10 ml"], ["苦艾酒 Absinthe", "4 drops"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，适合早午餐。" }
    ]
  },
  {
    id: "doctor-funk", zh: "芬克医生", en: "Doctor Funk", fam: "tiki", base: "rum", sub: "黑朗姆",
    mods: ["citrus", "syrup", "aromatic", "mixer"], method: "摇和", glass: "高球杯 / Sling 杯", strength: 4, diff: 2,
    ing: [["黑朗姆 Dark Rum", "75 ml"], ["苦艾酒 Absinthe", "7.5 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["苏打水 Soda Water", "60 ml"]],
    steps: ["除苏打外所有材料加冰摇和 12 秒。", "滤入加冰的高球杯或 Sling 杯。", "补苏打，薄荷与青柠装饰。"],
    gar: "薄荷 + 青柠",
    note: "这是加入朗姆后的 Tiki 版本：黑朗姆、苦艾、柠檬、青柠、石榴与糖浆，最后补苏打。原始无朗姆版本据称来自萨摩亚，Don the Beachcomber 在 1950 年代加入朗姆。",
    flavor: ["热带", "苦香", "酸甜"],
    history: "Doctor Funk 的名字来自 Robert Louis Stevenson 在萨摩亚的私人医生 Dr. Bernard Funk。无朗姆的原始版本据称源自萨摩亚；Don the Beachcomber 在 1950 年代才把朗姆加入，形成今天的 Tiki 版本。",
    src: { tag: "Tiki 传统", label: "Tasting Table / Adrienne Stillman《Spirited》", url: "https://www.tastingtable.com/1399180/unexpected-connection-doctor-funk-cocktail-treasure-island/" },
    v: [
      { zh: "Doctor Funk Original", en: "Doctor Funk Original", how: "不加朗姆，按萨摩亚原始结构做无酒精强度的苦艾长饮。", ing: [["苦艾酒 Absinthe", "20 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["苏打水 Soda Water", "90 ml"]], method: "摇和", glass: "高球杯", note: "苦艾酒本身酒精度高；这是原始风格，不是无酒精。" },
      { zh: "Doctor Funk Royale", en: "Doctor Funk Royale", how: "用起泡酒替代苏打，降低甜度。", ing: [["黑朗姆 Dark Rum", "60 ml"], ["苦艾酒 Absinthe", "7.5 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["石榴糖浆 Grenadine", "5 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，苦艾与气泡。" }
    ]
  },
  {
    id: "michelada", zh: "米切拉达", en: "Michelada", fam: "highball", base: "beer", sub: "啤酒",
    mods: ["juice", "citrus", "aromatic", "mixer"], method: "直调", glass: "高球杯 / 啤酒杯", strength: 1, diff: 1,
    ing: [["啤酒 Beer", "330 ml"], ["番茄汁 Tomato Juice", "60 ml"], ["青柠汁 Lime Juice", "15 ml"], ["伍斯特酱 Worcestershire Sauce", "2 dash"], ["辣酱 Hot Sauce", "2 dash"], ["盐 Salt", "杯口"], ["冰 Ice", "满杯"]],
    steps: ["杯口蘸盐，加满冰。", "倒入番茄汁、青柠汁、伍斯特与辣酱，搅匀。", "缓慢注入冰啤酒，轻搅，青柠角装饰。"],
    gar: "青柠角 + 盐边",
    note: "墨西哥的啤酒鸡尾酒，咸、酸、辣、鲜。啤酒要冰、拉格清爽；番茄汁可省略（那更接近传统 Michelada），但不要用番茄酱。",
    flavor: ["清爽", "辛香", "酸甜"],
    history: "Michelada 是墨西哥的啤酒饮法，起源有多个地区版本，常见说法可追溯到 20 世纪中期的墨西哥北部与太平洋沿岸。啤酒、青柠、盐、辣酱与番茄汁的组合，常被当作解暑与解宿醉的饮品。",
    src: { tag: "地区传统", label: "墨西哥啤酒鸡尾酒传统", url: "https://en.wikipedia.org/wiki/Michelada" },
    v: [
      { zh: "Michelada Clásica", en: "Michelada Clásica", how: "去掉番茄汁，只保留青柠、盐、辣酱与啤酒。", ing: [["啤酒 Beer", "330 ml"], ["青柠汁 Lime Juice", "20 ml"], ["辣酱 Hot Sauce", "3 dash"], ["盐 Salt", "杯口"], ["冰 Ice", "满杯"]], method: "直调", glass: "啤酒杯", note: "更清爽，接近墨西哥街头的经典喝法。" },
      { zh: "Ojo Rojo", en: "Ojo Rojo", how: "加 60 ml 橙汁与 2 dash 伍斯特，颜色更红。", ing: [["啤酒 Beer", "330 ml"], ["番茄汁 Tomato Juice", "60 ml"], ["橙汁 Orange Juice", "60 ml"], ["青柠汁 Lime Juice", "15 ml"], ["辣酱 Hot Sauce", "2 dash"], ["盐 Salt", "杯口"]], method: "直调", glass: "啤酒杯", note: "橙汁让咸鲜更圆，适合早午餐。" }
    ]
  },
  {
    id: "sgroppino", zh: "斯格罗皮诺", en: "Sgroppino", fam: "aperitivo", base: "wine", sub: "Prosecco",
    mods: ["liqueur", "cream", "mixer"], method: "搅拌机", glass: "香槟杯", strength: 1, diff: 1,
    ing: [["Prosecco", "90 ml"], ["伏特加 Vodka", "30 ml"], ["柠檬雪葩 Lemon Sorbet", "1 勺"], ["柠檬皮 Lemon Peel", "1 片"]],
    steps: ["雪葩与伏特加放入搅拌机，短暂搅打。", "倒入冰镇香槟杯，补入 Prosecco。", "柠檬皮装饰，立即出品。"],
    gar: "柠檬皮",
    note: "威尼斯的餐后冰沙，介于甜点与鸡尾酒之间。雪葩已经甜，不需要加糖；Prosecco 最后加，保留气泡。",
    flavor: ["清爽", "酸甜"],
    history: "Sgroppino 是意大利威尼托地区的餐后饮品，传统上用柠檬雪葩、伏特加与 Prosecco 制成。名字来自威尼斯方言“sgroppar”（解开、放松），常被当作清口甜点。",
    src: { tag: "地区传统", label: "Veneto / 意大利餐后传统", url: "https://en.wikipedia.org/wiki/Sgroppino" },
    v: [
      { zh: "Sgroppino Royale", en: "Sgroppino Royale", how: "用香槟替代 Prosecco，伏特加减到 20 ml。", ing: [["香槟 Champagne", "90 ml"], ["伏特加 Vodka", "20 ml"], ["柠檬雪葩 Lemon Sorbet", "1 勺"]], method: "搅拌机", glass: "香槟杯", note: "更干、更庆典。" },
      { zh: "Sgroppino Fragola", en: "Sgroppino Fragola", how: "用草莓雪葩替代柠檬雪葩。", ing: [["Prosecco", "90 ml"], ["伏特加 Vodka", "30 ml"], ["草莓雪葩 Strawberry Sorbet", "1 勺"]], method: "搅拌机", glass: "香槟杯", note: "果香更甜，适合夏天。" }
    ]
  },
  {
    id: "rossini", zh: "罗西尼", en: "Rossini", fam: "aperitivo", base: "wine", sub: "Prosecco",
    mods: ["juice", "mixer"], method: "直调", glass: "香槟杯", strength: 1, diff: 1,
    ing: [["草莓果泥 Strawberry Purée", "50 ml"], ["Prosecco", "100 ml"], ["柠檬汁 Lemon Juice", "5 ml"]],
    steps: ["草莓果泥与柠檬汁倒入冰镇香槟杯。", "缓慢补入冰镇 Prosecco，轻搅。", "草莓装饰。"],
    gar: "草莓",
    note: "Bellini 的草莓版本，来自威尼斯 Harry's Bar。果泥要熟、要细，柠檬汁只需 5 ml 提亮；不要加糖。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Rossini 由威尼斯 Harry's Bar 的 Giuseppe Cipriani 在 1940–50 年代创作，是 Bellini 的草莓版本。名字来自作曲家 Gioachino Rossini，与 Bellini 一样以艺术家命名。",
    src: { tag: "经典酒吧", label: "Harry's Bar, Venice / 20th century", url: "https://en.wikipedia.org/wiki/Harry%27s_Bar_(Venice)" },
    v: [
      { zh: "Rossini Royale", en: "Rossini Royale", how: "用香槟替代 Prosecco。", ing: [["草莓果泥 Strawberry Purée", "50 ml"], ["香槟 Champagne", "100 ml"], ["柠檬汁 Lemon Juice", "5 ml"]], method: "直调", glass: "香槟杯", note: "更干，果香更清晰。" },
      { zh: "Rossini Fizz", en: "Rossini Fizz", how: "加 30 ml 苏打，降低甜度。", ing: [["草莓果泥 Strawberry Purée", "40 ml"], ["Prosecco", "80 ml"], ["苏打水 Soda Water", "30 ml"]], method: "直调", glass: "高球杯", note: "更轻，适合夏天。" }
    ]
  },
  {
    id: "gin-gin-mule", zh: "金金骡子", en: "Gin-Gin Mule", fam: "highball", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "mixer", "aromatic"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["金酒 Gin", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["姜糖浆 Ginger Syrup", "15 ml"], ["姜啤 Ginger Beer", "90 ml"], ["薄荷 Mint", "6 片"]],
    steps: ["薄荷与姜糖浆在杯底轻压，加入青柠汁与金酒。", "加满冰，补姜啤，轻提拉。", "薄荷枝与青柠角装饰。"],
    gar: "薄荷 + 青柠角",
    note: "Audrey Saunders 的现代经典，比 Moscow Mule 更香、更辛辣。姜糖浆与姜啤叠加，薄荷负责清凉；不要用甜姜汁汽水。",
    flavor: ["清爽", "辛香", "草本"],
    history: "Gin-Gin Mule 由纽约 Pegu Club 的 Audrey Saunders 在 2000 年代创作，是 Moscow Mule 的金酒版本。它用新鲜姜糖浆、姜啤与薄荷，把姜的辛辣做得更精致，成为现代经典。",
    src: { tag: "现代经典", label: "Audrey Saunders / Pegu Club, 2000s", url: "" },
    v: [
      { zh: "Gin-Gin Mule Royale", en: "Gin-Gin Mule Royale", how: "补 60 ml 起泡酒，姜啤减半。", ing: [["金酒 Gin", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["姜糖浆 Ginger Syrup", "15 ml"], ["姜啤 Ginger Beer", "45 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "直调", glass: "高球杯", note: "更轻，气泡更细。" },
      { zh: "Gin-Gin Mule No. 2", en: "Gin-Gin Mule No. 2", how: "用梅斯卡尔替代一半金酒。", ing: [["金酒 Gin", "25 ml"], ["梅斯卡尔 Mezcal", "20 ml"], ["青柠汁 Lime Juice", "15 ml"], ["姜糖浆 Ginger Syrup", "15 ml"], ["姜啤 Ginger Beer", "90 ml"]], method: "直调", glass: "高球杯", note: "烟熏与姜的辛辣很搭。" }
    ]
  },
  {
    id: "earl-grey-marteani", zh: "伯爵茶马天尼", en: "Earl Grey MarTEAni", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "cream"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["金酒 Gin", "60 ml"], ["伯爵茶糖浆 Earl Grey Syrup", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["蛋清 Egg White", "20 ml"]],
    steps: ["所有材料先干摇 15 秒。", "加冰摇和 12 秒，双重过滤入冰镇碟形杯。", "柠檬皮或茶叶装饰。"],
    gar: "柠檬皮",
    note: "Audrey Saunders 的现代经典。伯爵茶的佛手柑与金酒很合；茶糖浆要浓，蛋清让口感更柔。",
    flavor: ["花香", "酸甜", "草本"],
    history: "Earl Grey MarTEAni 由纽约 Pegu Club 的 Audrey Saunders 在 2000 年代创作，用伯爵茶糖浆替代部分甜味，把茶的单宁与佛手柑带进金酒酸酒。它是 21 世纪“茶鸡尾酒”的代表之一。",
    src: { tag: "现代经典", label: "Audrey Saunders / Pegu Club, 2000s", url: "" },
    v: [
      { zh: "Earl Grey Fizz", en: "Earl Grey Fizz", how: "摇好后补 60 ml 苏打。", ing: [["金酒 Gin", "60 ml"], ["伯爵茶糖浆 Earl Grey Syrup", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，茶香更清晰。" },
      { zh: "Earl Grey Collins", en: "Earl Grey Collins", how: "加 15 ml 蜂蜜糖浆，补苏打。", ing: [["金酒 Gin", "60 ml"], ["伯爵茶糖浆 Earl Grey Syrup", "15 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["蜂蜜糖浆 Honey Syrup", "10 ml"], ["苏打水 Soda Water", "60 ml"]], method: "直调", glass: "柯林斯杯", note: "蜂蜜与佛手柑很合。" }
    ]
  },
  {
    id: "french-pearl", zh: "法国珍珠", en: "French Pearl", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["苦艾酒 Absinthe", "5 ml"], ["薄荷 Mint", "6 片"]],
    steps: ["薄荷与糖浆轻压，加入其余材料与冰。", "摇和 10–12 秒，双重过滤入冰镇碟形杯。", "薄荷叶装饰。"],
    gar: "薄荷叶",
    note: "Audrey Saunders 的现代经典，像加入茴香的 Southside。Pernod 只需 5 ml，多了会盖过金酒与薄荷。",
    flavor: ["草本", "花香", "酸甜"],
    history: "French Pearl 由纽约 Pegu Club 的 Audrey Saunders 在 2006 年前后创作。金酒、青柠、糖、Pernod 与薄荷的组合，把法式茴香酒带进清新的酸酒结构。",
    src: { tag: "现代经典", label: "Audrey Saunders / Pegu Club, 2006", url: "https://archive.jamesbeard.org/index.php/recipes/french-pearl-cocktail" },
    v: [
      { zh: "French Pearl Fizz", en: "French Pearl Fizz", how: "摇好后补 60 ml 苏打。", ing: [["金酒 Gin", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["苦艾酒 Absinthe", "5 ml"], ["薄荷 Mint", "6 片"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，茴香更柔。" },
      { zh: "French Pearl No. 2", en: "French Pearl No. 2", how: "Pernod 减到 3 ml，加 5 ml 绿查特。", ing: [["金酒 Gin", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["苦艾酒 Absinthe", "3 ml"], ["绿查特 Green Chartreuse", "5 ml"], ["薄荷 Mint", "6 片"]], method: "摇和", glass: "碟形杯", note: "药草更复杂。" }
    ]
  },
  {
    id: "army-and-navy", zh: "陆军与海军", en: "Army & Navy", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "bitters"], method: "摇和", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["金酒 Gin", "60 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["杏仁糖浆 Orgeat", "15 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "最早见于 David Embury 1948 年的《The Fine Art of Mixing Drinks》。杏仁糖浆的甜与柠檬的酸需要金酒撑住；苦精让尾韵更干。",
    flavor: ["酸甜", "花香", "苦香"],
    history: "Army & Navy 最早见于 David Embury 1948 年的《The Fine Art of Mixing Drinks》。名字与军队的关联没有确证，常被联系到 Army–Navy 橄榄球赛或华盛顿的 Army & Navy Club。",
    src: { tag: "经典文献", label: "David Embury, The Fine Art of Mixing Drinks (1948)", url: "https://en.wikipedia.org/wiki/David_A._Embury" },
    v: [
      { zh: "Army & Navy Fizz", en: "Army & Navy Fizz", how: "摇好后补 60 ml 苏打。", ing: [["金酒 Gin", "60 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["杏仁糖浆 Orgeat", "15 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，杏仁香更柔。" },
      { zh: "Army & Navy No. 2", en: "Army & Navy No. 2", how: "杏仁糖浆减到 10 ml，加 5 ml 黑樱桃利口酒。", ing: [["金酒 Gin", "60 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["杏仁糖浆 Orgeat", "10 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "5 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]], method: "摇和", glass: "碟形杯", note: "樱桃核香更明显。" }
    ]
  },
  {
    id: "million-dollar", zh: "百万美元", en: "Million Dollar", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "juice", "cream", "bitters"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["甜味美思 Sweet Vermouth", "20 ml"], ["菠萝汁 Pineapple Juice", "15 ml"], ["蛋清 Egg White", "20 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]],
    steps: ["所有材料先干摇 15 秒。", "加冰摇和 12 秒，双重过滤入冰镇碟形杯。", "菠萝叶或樱桃装饰。"],
    gar: "菠萝叶 / 樱桃",
    note: "结构像加入菠萝的甜马天尼。菠萝汁只需 15 ml，提供酸与泡沫；蛋清让口感更丝滑。具体创制年代待考。",
    flavor: ["酸甜", "花香", "奶滑"],
    history: "Million Dollar 的具体创制年代待考，常见于 20 世纪上半叶的美国调酒书。金酒、甜味美思、菠萝与蛋清的组合，是“华丽酸酒”的代表之一；名字来自当时的财富与奢华文化。",
    src: { tag: "经典文献", label: "经典配方；具体年代待考", url: "" },
    v: [
      { zh: "Million Dollar Fizz", en: "Million Dollar Fizz", how: "省略蛋清，摇好后补 60 ml 苏打。", ing: [["金酒 Gin", "45 ml"], ["甜味美思 Sweet Vermouth", "20 ml"], ["菠萝汁 Pineapple Juice", "15 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，菠萝酸更明显。" },
      { zh: "Million Dollar Dry", en: "Million Dollar Dry", how: "用干味美思替代甜味美思，菠萝汁减到 10 ml。", ing: [["金酒 Gin", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["菠萝汁 Pineapple Juice", "10 ml"], ["蛋清 Egg White", "20 ml"], ["橙味苦精 Orange Bitters", "1 dash"]], method: "摇和", glass: "碟形杯", note: "更干，适合餐前。" }
    ]
  },
  {
    id: "satans-whiskers", zh: "撒旦的胡须", en: "Satan's Whiskers", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "vermouth", "liqueur", "bitters"], method: "摇和", glass: "碟形杯", strength: 4, diff: 3,
    ing: [["金酒 Gin", "30 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["干味美思 Dry Vermouth", "30 ml"], ["橙汁 Orange Juice", "30 ml"], ["Grand Marnier", "15 ml"], ["橙味苦精 Orange Bitters", "1 dash"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "Savoy 1930 的 Straight 版：甜、干味美思、金酒、橙汁各 2 份，Grand Marnier 1 份，橙味苦精 1 dash。Curled 版只把 Grand Marnier 换成等量橙味库拉索，两种味美思都保留。原版杯量较大（约 135 ml 酒液），可按比例缩小。",
    flavor: ["花香", "酸甜", "苦香"],
    history: "Satan's Whiskers 见于 1930 年《Savoy Cocktail Book》，名字带着禁酒令后的怪诞幽默。Straight 与 Curled 的区别不在味美思，而在橙味利口酒：Grand Marnier 或橙味库拉索。",
    src: { tag: "经典文献", label: "The Savoy Cocktail Book (1930) / Savoy DB", url: "https://savoycocktaildatabase.com/cocktails/satans-whiskers-cocktail-straight/" },
    v: [
      { zh: "Satan's Whiskers Curled", en: "Satan's Whiskers Curled", how: "把 Grand Marnier 换成等量橙味库拉索，其余不变。", ing: [["金酒 Gin", "30 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["干味美思 Dry Vermouth", "30 ml"], ["橙汁 Orange Juice", "30 ml"], ["橙味库拉索 Orange Curaçao", "15 ml"], ["橙味苦精 Orange Bitters", "1 dash"]], method: "摇和", glass: "碟形杯", note: "Curled 版本，橙味更直接、甜度略低。" },
      { zh: "Satan's Whiskers Modern", en: "Satan's Whiskers Modern", how: "缩短份量：金酒 30 ml，两种味美思各 15 ml，橙汁 15 ml，库拉索 10 ml。", ing: [["金酒 Gin", "30 ml"], ["甜味美思 Sweet Vermouth", "15 ml"], ["干味美思 Dry Vermouth", "15 ml"], ["橙汁 Orange Juice", "15 ml"], ["橙味库拉索 Orange Curaçao", "10 ml"], ["橙味苦精 Orange Bitters", "1 dash"]], method: "摇和", glass: "碟形杯", note: "现代酒吧常见的缩短版，更接近酸酒比例。" }
    ]
  },
  {
    id: "alaska", zh: "阿拉斯加", en: "Alaska", fam: "duo", base: "gin", sub: "伦敦干金",
    mods: ["liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["黄查特 Yellow Chartreuse", "15 ml"], ["橙味苦精 Orange Bitters", "2 dash"]],
    steps: ["所有液体加冰搅拌 25 秒。", "滤入冰镇碟形杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "金酒与黄查特的蜂蜜草药香。黄查特 15 ml 很甜，金酒要选清亮、酒精度高的；不要加糖。本页为现代 3:1 比例，Savoy 原版更接近 2:1。",
    flavor: ["花香", "草本", "温暖"],
    history: "Alaska 见于 1910 年代的调酒书，1930 年《Savoy Cocktail Book》已收录。命名来源并不确定；Savoy 原书注释称它“可能最早出现在南卡罗来纳”，因此不宜简单归因于阿拉斯加。",
    src: { tag: "经典文献", label: "The Savoy Cocktail Book (1930) / Savoy DB", url: "https://savoycocktaildatabase.com/cocktails/alaska-cocktail/" },
    v: [
      { zh: "Alaska No. 2", en: "Alaska No. 2", how: "黄查特减到 10 ml，金酒加到 50 ml。", ing: [["金酒 Gin", "50 ml"], ["黄查特 Yellow Chartreuse", "10 ml"], ["橙味苦精 Orange Bitters", "2 dash"]], method: "搅拌", glass: "碟形杯", note: "更干，查特只做尾韵。" },
      { zh: "Alaska Fizz", en: "Alaska Fizz", how: "摇和后补 60 ml 苏打。", ing: [["金酒 Gin", "45 ml"], ["黄查特 Yellow Chartreuse", "15 ml"], ["橙味苦精 Orange Bitters", "2 dash"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，蜂蜜花香更明显。" }
    ]
  },
  {
    id: "obituary", zh: "讣告", en: "Obituary", fam: "duo", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "aromatic", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["苦艾酒 Absinthe", "5 ml"], ["橙味苦精 Orange Bitters", "1 dash"]],
    steps: ["所有液体加冰搅拌 25 秒。", "滤入冰镇碟形杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "干马天尼的苦艾版本。苦艾 5 ml 已经很强，先少后多；干味美思要新鲜冷藏。",
    flavor: ["草本", "苦香", "花香"],
    history: "Obituary 是新奥尔良的经典鸡尾酒，具体创制年代与命名由来待考；它常被描述为“干马天尼的苦艾版本”，在 20 世纪上半叶的美国酒吧中流传。",
    src: { tag: "经典文献", label: "BBC Travel / 新奥尔良经典", url: "https://www.bbc.com/travel/article/20261016-the-obituary-cocktail-the-deadly-drink-that-symbolises-new-orleans" },
    v: [
      { zh: "Obituary Dry", en: "Obituary Dry", how: "干味美思减到 10 ml，苦艾减到 3 ml。", ing: [["金酒 Gin", "50 ml"], ["干味美思 Dry Vermouth", "10 ml"], ["苦艾酒 Absinthe", "3 ml"], ["橙味苦精 Orange Bitters", "1 dash"]], method: "搅拌", glass: "碟形杯", note: "更干、更酒感。" },
      { zh: "Obituary Fizz", en: "Obituary Fizz", how: "摇和后补 60 ml 苏打。", ing: [["金酒 Gin", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["苦艾酒 Absinthe", "3 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "茴香在气泡里更轻。" }
    ]
  },
  {
    id: "ford-cocktail", zh: "福特鸡尾酒", en: "Ford Cocktail", fam: "duo", base: "gin", sub: "老汤姆",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["老汤姆金酒 Old Tom Gin", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["Bénédictine", "5 ml"], ["橙味苦精 Orange Bitters", "2 dash"]],
    steps: ["所有液体加冰搅拌 25 秒。", "滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "Kappeler 1895 原书未说明命名来源；原版为 Old Tom 金酒与干味美思等量、各 3 dash Bénédictine 与橙味苦精。本页 45/20/5 是现代改编，酒体更干。",
    flavor: ["花香", "草本", "苦香"],
    history: "Ford Cocktail 见于 Christian Kappeler 1895 年的《Modern American Drinks》，原书没有说明命名来源。把它与 Henry Ford 联系起来缺乏依据——福特汽车公司 1903 年才成立。",
    src: { tag: "经典文献", label: "Christian Kappeler, Modern American Drinks (1895)", url: "https://jerrycanspirits.co.uk/field-manual/cocktails/ford-cocktail/" },
    v: [
      { zh: "Ford Cocktail 1895", en: "Ford Cocktail 1895", how: "按 Kappeler 原书：Old Tom 与干味美思等量，Bénédictine 与橙味苦精各 3 dash。", ing: [["老汤姆金酒 Old Tom Gin", "30 ml"], ["干味美思 Dry Vermouth", "30 ml"], ["Bénédictine", "3 dash"], ["橙味苦精 Orange Bitters", "3 dash"]], method: "搅拌", glass: "碟形杯", note: "更甜、更草本，接近 19 世纪末的口味。" },
      { zh: "Ford Cocktail Fizz", en: "Ford Cocktail Fizz", how: "用本页现代比例摇和后补 60 ml 苏打。", ing: [["老汤姆金酒 Old Tom Gin", "45 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["Bénédictine", "5 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，蜂蜜草药香。" }
    ]
  },
  {
    id: "golden-dawn", zh: "金色黎明", en: "Golden Dawn", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["liqueur", "juice", "syrup"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "30 ml"], ["卡尔瓦多斯 Calvados", "30 ml"], ["杏子白兰地 Apricot Brandy", "30 ml"], ["橙汁 Orange Juice", "30 ml"], ["石榴糖浆 Grenadine", "1 dash"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "Savoy 1930 版是金酒、卡尔瓦多斯、杏子白兰地、橙汁各 1/4，石榴糖浆 1 dash；酒体比现代版更大、更甜。现代酒吧常把三种酒减到 15 ml。",
    flavor: ["花香", "酸甜", "温暖"],
    history: "Golden Dawn 见于 1930 年《Savoy Cocktail Book》的“Additional Cocktails”部分。金酒、卡尔瓦多斯、杏子白兰地、橙汁与 1 dash 石榴糖浆，是禁酒令后伦敦酒吧的华丽酸酒。",
    src: { tag: "经典文献", label: "The Savoy Cocktail Book (1930) / Savoy DB", url: "https://savoycocktaildatabase.com/cocktails/golden-dawn/" },
    v: [
      { zh: "Golden Dawn Modern", en: "Golden Dawn Modern", how: "三种酒减到 15 ml，石榴糖浆 5 ml，加 1 dash 安高天娜。", ing: [["金酒 Gin", "30 ml"], ["卡尔瓦多斯 Calvados", "15 ml"], ["杏子白兰地 Apricot Brandy", "15 ml"], ["橙汁 Orange Juice", "15 ml"], ["石榴糖浆 Grenadine", "5 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]], method: "摇和", glass: "碟形杯", note: "现代酒吧常见比例，更轻、更干。" },
      { zh: "Golden Dawn Fizz", en: "Golden Dawn Fizz", how: "按 Savoy 比例摇和后补 60 ml 苏打。", ing: [["金酒 Gin", "30 ml"], ["卡尔瓦多斯 Calvados", "30 ml"], ["杏子白兰地 Apricot Brandy", "30 ml"], ["橙汁 Orange Juice", "30 ml"], ["石榴糖浆 Grenadine", "1 dash"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，果香更明亮。" }
    ]
  }
];
