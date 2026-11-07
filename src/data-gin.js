/* ============================================================
   配方库 · 金酒
   ============================================================ */

const COCKTAILS_GIN = [
  {
    id: "dry-martini", zh: "干马天尼", en: "Dry Martini", fam: "duo", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "bitters"], method: "搅拌", glass: "碟形杯 / 马天尼杯", strength: 5, diff: 3,
    ing: [["金酒 Gin", "60 ml"], ["干味美思 Dry Vermouth", "10 ml"], ["橙味苦精 Orange Bitters", "1 dash"]],
    steps: [
      "把碟形杯与搅拌杯提前冰镇，味美思与金酒保持冷藏。",
      "搅拌杯中加满大冰块，倒入金酒、干味美思与苦精，搅拌 25–30 秒。",
      "滤入冰杯，喷柠檬皮油并以柠檬皮或橄榄装饰。"
    ],
    gar: "柠檬皮油 + 柠檬皮 / 橄榄",
    note: "马天尼的「干」不是没有味美思，而是味美思少。10 ml 是起点，不是法律；酒精度高的金酒可略增味美思。",
    flavor: ["草本", "辛香"],
    v: [
      ["湿马天尼", "Wet Martini", "干味美思加到 25–30 ml，口感更柔、酒感更低。"],
      ["脏马天尼", "Dirty Martini", "加 10–15 ml 橄榄盐水，咸鲜感提升；装饰用橄榄。"],
      ["吉布森", "Gibson", "用珍珠洋葱替代橄榄，风味更干、更辛香。"],
      ["50/50", "Fifty-Fifty", "金酒与干味美思 1:1，适合低酒精饮用；搅拌后更显葡萄酒香。"]
    ]
  },
  {
    id: "negroni", zh: "内格罗尼", en: "Negroni", fam: "aperitivo", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "amaro", "aromatic"], method: "搅拌", glass: "古典杯", strength: 4, diff: 1,
    ing: [["金酒 Gin", "30 ml"], ["金巴利 Campari", "30 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["橙皮 Orange Peel", "1 片"]],
    steps: [
      "古典杯中放入一大块透明冰，搅拌杯加冰预冷。",
      "依次倒入金酒、金巴利与甜味美思，搅拌 20–25 秒。",
      "滤入古典杯，挤压橙皮油并投入杯中。"
    ],
    gar: "橙皮",
    note: "1:1:1 是记忆锚点，不是唯一答案。金巴利苦、味美思甜、金酒骨架，先按品牌调整：甜味美思可减至 25 ml，金酒可加到 35 ml。",
    flavor: ["苦香", "草本", "温暖"],
    v: [
      ["Boulevardier", "Boulevardier", "把金酒换成波本或黑麦 45 ml，比例 1.5:1:1，更温暖、更甜。"],
      ["White Negroni", "White Negroni", "用 Lillet Blanc 与 Suze 替代甜味美思与金巴利，清亮、花香、干苦。"],
      ["Sbagliato", "Negroni Sbagliato", "用 Prosecco 替代金酒，气泡感强、酒精度低；最后补 30 ml 起泡酒。"],
      ["Old Pal", "Old Pal", "黑麦、干味美思、金巴利 1:1:1，比内格罗尼更干、更辛香。"]
    ]
  },
  {
    id: "white-negroni", zh: "白色内格罗尼", en: "White Negroni", fam: "aperitivo", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "amaro"], method: "搅拌", glass: "古典杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "40 ml"], ["Blanc 味美思 Blanc Vermouth", "30 ml"], ["Suze", "20 ml"], ["葡萄柚皮 Grapefruit Peel", "1 片"]],
    steps: [
      "古典杯加冰预冷，搅拌杯加满冰。",
      "倒入金酒、Lillet Blanc 与 Suze，搅拌 20 秒。",
      "滤入杯中，喷葡萄柚皮油，投入葡萄柚皮。"
    ],
    gar: "葡萄柚皮",
    note: "Suze 的龙胆根苦味很干，Lillet 负责圆润。若客人怕苦，Suze 减到 15 ml；若想更干，金酒加到 45 ml。",
    flavor: ["苦香", "花香", "草本"],
    v: [
      ["White Negroni No. 2", "White Negroni No. 2", "用 Cocchi Americano 替代 Lillet，加 1 dash 橙味苦精，香气更复杂。"],
      ["Bitter Giuseppe", "Bitter Giuseppe", "用 Cynar 与甜味美思替换，苦甜更浓，适合餐后。"]
    ]
  },
  {
    id: "tom-collins", zh: "汤姆柯林斯", en: "Tom Collins", fam: "collins", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "mixer"], method: "直调", glass: "柯林斯杯", strength: 2, diff: 1,
    ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["苏打水 Soda Water", "60 ml"]],
    steps: [
      "柯林斯杯加满冰，倒入金酒、柠檬汁与糖浆。",
      "用吧勺提拉 8–10 次，让材料与冰充分接触。",
      "补满冰镇苏打水，轻轻提拉一次，柠檬片与樱桃装饰。"
    ],
    gar: "柠檬片 + 酒渍樱桃",
    note: "柯林斯的关键是「先调和、后气泡」。苏打只负责拉长，不要把刚摇好的酒味冲没。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["John Collins", "John Collins", "把金酒换成波本，柠檬换成柠檬汁 30 ml，风味更甜润。"],
      ["Juan Collins", "Juan Collins", "用龙舌兰替代金酒，加 1 dash 橙味苦精，带植物与胡椒感。"],
      ["Gin Fizz", "Gin Fizz", "不加大冰块，滤入小高球杯后补苏打，气泡更细、口感更紧。"]
    ]
  },
  {
    id: "gin-fizz", zh: "金菲士", en: "Gin Fizz", fam: "collins", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "mixer", "cream"], method: "摇和", glass: "小高球杯", strength: 2, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["蛋清 Egg White", "15 ml（可选）"], ["苏打水 Soda Water", "60 ml"]],
    steps: [
      "金酒、柠檬、糖浆与蛋清（如用）先干摇 10 秒。",
      "加冰摇和 12 秒，滤入冰镇小高球杯。",
      "缓慢补满苏打水，形成细腻泡沫，柠檬皮装饰。"
    ],
    gar: "柠檬皮",
    note: "Fizz 的传统是不加冰、用小杯，靠碳酸与泡沫撑起轻盈感。加蛋清时叫 Silver Fizz，泡沫更厚。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Silver Fizz", "Silver Fizz", "加入 20 ml 蛋清，口感更丝绒，泡沫更厚。"],
      ["Golden Fizz", "Golden Fizz", "加入 1 个蛋黄，酒体更圆、颜色金黄。"],
      ["Ramos Gin Fizz", "Ramos Gin Fizz", "加入奶油、橙花水与大量蛋清，长时间摇和后补苏打，是 Fizz 的极致版本。"]
    ]
  },
  {
    id: "ramos-gin-fizz", zh: "拉莫斯金菲士", en: "Ramos Gin Fizz", fam: "collins", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "cream", "mixer", "aromatic"], method: "摇和", glass: "小高球杯", strength: 2, diff: 3,
    ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["淡奶油 Heavy Cream", "30 ml"], ["蛋清 Egg White", "1 个"], ["橙花水 Orange Blossom Water", "3 dash"], ["苏打水 Soda Water", "30 ml"]],
    steps: [
      "除苏打外全部材料加入摇壶，先干摇 15 秒。",
      "加冰，持续摇和 45–60 秒，直到壶身结霜、内部形成浓密泡沫。",
      "滤入冰镇小高球杯，静置 30 秒让泡沫稳定，再沿杯壁补苏打。"
    ],
    gar: "橙花水喷雾 / 柠檬皮",
    note: "这杯酒的难点不是配方，是乳化与泡沫稳定性。宁愿多摇，也不要提前加苏打。",
    flavor: ["奶滑", "花香", "酸甜"],
    v: [
      ["Ramos Gin Fizz（现代版）", "Modern Ramos", "用 15 ml 奶油 + 20 ml 蛋清，减少摇和时间，口感更轻。"],
      ["Peach Fizz", "Peach Fizz", "加入 20 ml 桃子利口酒，减少糖浆，果香更明亮。"]
    ]
  },
  {
    id: "gimlet", zh: "吉姆雷特", en: "Gimlet", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup"], method: "摇和", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["金酒 Gin", "60 ml"], ["青柠汁 Lime Juice", "20 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["青柠皮 Lime Peel", "1 片"]],
    steps: [
      "金酒、青柠汁与糖浆加入加冰摇壶。",
      "摇和 10–12 秒，充分冷却并带入稀释。",
      "双重过滤入冰镇碟形杯，喷青柠皮油。"
    ],
    gar: "青柠皮",
    note: "传统用青柠 cordial，现代多用鲜榨青柠 + 糖浆。想更锐利，青柠加到 25 ml；想更圆，糖浆加到 18 ml。",
    flavor: ["酸甜", "草本"],
    v: [
      ["Vodka Gimlet", "Vodka Gimlet", "把金酒换成伏特加，风味更中性，青柠更突出。"],
      ["Basil Gimlet", "Basil Gimlet", "摇和前轻拍 4 片罗勒叶，过滤后装饰罗勒。"],
      ["Rosemary Gimlet", "Rosemary Gimlet", "用迷迭香糖浆替代单糖浆，草本香气更浓。"]
    ]
  },
  {
    id: "white-lady", zh: "白色佳人", en: "White Lady", fam: "daisy", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "liqueur", "cream"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "40 ml"], ["君度 Cointreau", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["蛋清 Egg White", "15 ml（可选）"]],
    steps: [
      "所有材料（含蛋清）先干摇 10 秒。",
      "加冰摇和 12 秒，双重过滤入冰镇碟形杯。",
      "柠檬皮油装饰；如用蛋清，静置片刻让泡沫成型。"
    ],
    gar: "柠檬皮",
    note: "这是黛西结构的教科书：金酒 + 橙味利口酒 + 柠檬。蛋清可有可无，但加与不加是两种质地。",
    flavor: ["酸甜", "花香"],
    v: [
      ["Chelsea Sidecar", "Chelsea Sidecar", "把金酒换成干邑，保留君度与柠檬，果香更圆。"],
      ["Marguerite", "Marguerite", "金酒、君度、柠檬，加 1 dash 橙味苦精，更干。"],
      ["Pink Lady", "Pink Lady", "用 15 ml 苹果白兰地替代部分君度，加入 10 ml 石榴糖浆与蛋清，颜色粉红、口感更圆。" ]
    ]
  },
  {
    id: "bees-knees", zh: "蜂之膝", en: "Bee's Knees", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup"], method: "摇和", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["金酒 Gin", "60 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["蜂蜜糖浆 Honey Syrup", "20 ml"]],
    steps: [
      "蜂蜜按 3:1 与水调成糖浆，冷却备用。",
      "金酒、柠檬汁与蜂蜜糖浆加冰摇和 12 秒。",
      "双重过滤入冰镇碟形杯，柠檬皮或蜂巢装饰。"
    ],
    gar: "柠檬皮 / 蜂巢（可选）",
    note: "蜂蜜的花香与金酒的植物香是天然盟友。蜂蜜糖浆必须稀释，否则沉底且过甜。",
    flavor: ["酸甜", "花香"],
    v: [
      ["Gold Rush", "Gold Rush", "把金酒换成波本，蜂蜜与柠檬不变，温暖而甜美。"],
      ["Brown Derby", "Brown Derby", "波本 + 蜂蜜 + 西柚，果香更酸苦。"],
      ["Bee's Knees Fizz", "Bee's Knees Fizz", "摇好后滤入高球杯，补 60 ml 苏打，变成轻盈长饮。"]
    ]
  },
  {
    id: "clover-club", zh: "三叶草俱乐部", en: "Clover Club", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "cream"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["覆盆子糖浆 Raspberry Syrup", "15 ml"], ["蛋清 Egg White", "20 ml"]],
    steps: [
      "所有材料先干摇 10–15 秒，让蛋清充气。",
      "加冰摇和 12 秒，双重过滤入冰镇碟形杯。",
      "静置 20 秒，泡沫稳定后以覆盆子或柠檬皮装饰。"
    ],
    gar: "覆盆子 + 柠檬皮",
    note: "覆盆子糖浆要酸、要有果味，不能只是甜。蛋清让酸与果香更柔，但摇和不充分会有腥味。",
    flavor: ["酸甜", "花香"],
    v: [
      ["Pink Lady", "Pink Lady", "金酒 + 苹果白兰地 + 柠檬 + 石榴 + 蛋清，更干、更复杂。"],
      ["Clover Club Fizz", "Clover Club Fizz", "省略蛋清，摇好后补苏打，变成清爽长饮。"],
      ["Raspberry Sour", "Raspberry Sour", "用波本替代金酒，覆盆子与橡木更搭。"]
    ]
  },
  {
    id: "southside", zh: "南区", en: "Southside", fam: "julep", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "碟形杯", strength: 3, diff: 1,
    ing: [["金酒 Gin", "60 ml"], ["青柠汁 Lime Juice", "25 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["薄荷 Mint", "8 片"]],
    steps: [
      "薄荷叶与糖浆在摇壶中轻压 2–3 次，只出香不捣碎。",
      "加入金酒、青柠汁与冰，摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯，拍薄荷枝装饰。"
    ],
    gar: "薄荷枝",
    note: "南区是「金酒莫吉托」的短饮版。薄荷只需轻拍，捣烂会带来草腥与苦味。",
    flavor: ["清爽", "草本", "酸甜"],
    v: [
      ["Southside Fizz", "Southside Fizz", "摇好后滤入高球杯，补 60 ml 苏打，更轻盈。"],
      ["St-Germain Southside", "St-Germain Southside", "加 15 ml 接骨木花利口酒，糖浆减半，花香更明显。"],
      ["Gin Smash", "Gin Smash", "加入 2 片柠檬与更多薄荷，短摇后连冰倒入古典杯。"]
    ]
  },
  {
    id: "last-word", zh: "最后一语", en: "Last Word", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "liqueur", "amaro"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "22.5 ml"], ["绿查特 Green Chartreuse", "22.5 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "22.5 ml"], ["青柠汁 Lime Juice", "22.5 ml"]],
    steps: [
      "四款材料等量加入加冰摇壶。",
      "摇和 10–12 秒，双重过滤入冰镇碟形杯。",
      "以青柠皮或樱桃装饰。"
    ],
    gar: "青柠皮 / 樱桃",
    note: "等量配方很脆弱：绿查特的甜与药草、黑樱桃的核香、青柠的酸必须互相咬合。青柠不够酸就整杯发甜。",
    flavor: ["草本", "酸甜", "苦香"],
    v: [
      ["Final Ward", "Final Ward", "把金酒换成黑麦，青柠换成柠檬，结构更温暖。"],
      ["Paper Plane", "Paper Plane", "波本、Aperol、Amaro Nonino、柠檬等量，苦甜更现代。"],
      ["Naked and Famous", "Naked and Famous", "梅斯卡尔、Aperol、黄查特、青柠等量，烟熏与苦甜。"],
      ["Division Bell", "Division Bell", "梅斯卡尔、Aperol、黑樱桃、青柠，烟熏更突出。"]
    ]
  },
  {
    id: "corpse-reviver-2", zh: "复苏者二号", en: "Corpse Reviver #2", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "liqueur", "vermouth", "aromatic"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "22.5 ml"], ["君度 Cointreau", "22.5 ml"], ["Blanc 味美思 Blanc Vermouth", "22.5 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["苦艾酒 Absinthe", "1 dash"]],
    steps: [
      "碟形杯用苦艾酒冲洗，倒掉多余酒液。",
      "其余材料加冰摇和 10–12 秒。",
      "双重过滤入杯，橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "名字是「起死回生」，但它是极平衡的酸酒。苦艾只做杯壁冲洗，不要直接倒 10 ml 进去。",
    flavor: ["酸甜", "草本", "花香"],
    v: [
      ["Corpse Reviver #1", "Corpse Reviver #1", "干邑、苹果白兰地、甜味美思，搅拌而非摇和，更古老。"],
      ["Savoy Corpse Reviver", "Savoy Corpse Reviver", "干邑、Fernet、白可可，餐后药草感更强。"],
      ["Absinthe Frappé", "Absinthe Frappé", "苦艾、糖浆、苏打与碎冰，茴香感极强，适合苦艾爱好者。"]
    ]
  },
  {
    id: "aviation", zh: "航空", en: "Aviation", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "liqueur"], method: "摇和", glass: "碟形杯", strength: 4, diff: 3,
    ing: [["金酒 Gin", "45 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "15 ml"], ["紫罗兰利口酒 Crème de Violette", "7.5 ml"], ["柠檬汁 Lemon Juice", "20 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "以樱桃装饰；紫罗兰过量会像香水。"
    ],
    gar: "酒渍樱桃",
    note: "紫罗兰利口酒是这杯酒的灵魂，也是最容易翻车的地方：5–10 ml 足够，颜色应是淡紫而非深紫。",
    flavor: ["花香", "酸甜"],
    v: [
      ["Blue Moon", "Blue Moon", "去掉紫罗兰，金酒、柠檬与黑樱桃，更干净。"],
      ["Aviation No. 2", "Aviation No. 2", "用黑莓利口酒替代紫罗兰，果香更浓。"],
      ["Tuxedo", "Tuxedo", "金酒、干味美思、黑樱桃、苦艾酒冲洗，更干更复杂。"]
    ]
  },
  {
    id: "french-75", zh: "法式 75", en: "French 75", fam: "collins", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "mixer"], method: "摇和", glass: "香槟杯", strength: 3, diff: 2,
    ing: [["金酒 Gin", "30 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["起泡酒 Sparkling Wine", "90 ml"]],
    steps: [
      "金酒、柠檬汁与糖浆加冰摇和 8–10 秒。",
      "滤入冰镇香槟杯，缓慢补入冰镇起泡酒。",
      "柠檬皮油装饰，轻提拉一次。"
    ],
    gar: "柠檬皮",
    note: "这杯酒的酒精度藏在气泡里。金酒 30 ml 足够；起泡酒越干，糖浆可略增。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["French 75 Cognac", "French 75 Cognac", "用干邑替代金酒，果香更圆、更有力。"],
      ["Rosé 75", "Rosé 75", "用桃红起泡酒，减 5 ml 糖浆，颜色与果香更柔。"],
      ["French 125", "French 125", "把金酒换成波本，柠檬换成青柠，甜润版。" ]
    ]
  },
  {
    id: "gin-tonic", zh: "金汤力", en: "Gin & Tonic", fam: "highball", base: "gin", sub: "伦敦干金",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯 / Copa 杯", strength: 2, diff: 1,
    ing: [["金酒 Gin", "45 ml"], ["汤力水 Tonic Water", "120 ml"], ["青柠角 Lime Wedge", "1 块"]],
    steps: [
      "高球杯加满大冰块，搅动 10 秒冰杯，倒掉融水。",
      "倒入金酒，沿吧勺缓慢注入冰镇汤力水。",
      "轻提拉一次，挤青柠角并投入杯中。"
    ],
    gar: "青柠角 / 草本枝",
    note: "金汤力是「冰、气、比例」的考试。杯子要冰、汤力要冰、冰要满；金酒 45 ml 对 120 ml 汤力是安全起点。",
    flavor: ["清爽", "苦香", "草本"],
    v: [
      ["Spanish G&T", "Spanish G&T", "用 Copa 杯、更多冰与金酒 50 ml，装饰迷迭香、葡萄柚或黄瓜。"],
      ["Gin Sonic", "Gin Sonic", "汤力水与苏打 1:1，降低甜度，气泡更锐利。"],
      ["Pink Gin & Tonic", "Pink Gin & Tonic", "加 2 dash 橙味苦精或少量红石榴糖浆，颜色粉红。"],
      ["Pimm's Cup", "Pimm's Cup", "以 Pimm's No.1 为基酒，加柠檬水、黄瓜、草莓与薄荷。" ]
    ]
  },
  {
    id: "pimms-cup", zh: "皮姆杯", en: "Pimm's Cup", fam: "punch", base: "gin", sub: "Pimm's No.1",
    mods: ["mixer", "citrus", "syrup", "aromatic"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["Pimm's No.1", "50 ml"], ["柠檬水 Lemonade", "100 ml"], ["黄瓜 Cucumber", "3 片"], ["草莓 Strawberry", "1 颗"], ["薄荷 Mint", "1 枝"]],
    steps: [
      "高球杯加满冰，放入黄瓜、草莓与薄荷。",
      "倒入 Pimm's No.1，补满冰镇柠檬水。",
      "轻轻提拉，薄荷枝与黄瓜片装饰。"
    ],
    gar: "黄瓜 + 草莓 + 薄荷",
    note: "Pimm's 是低酒精的英式夏日杯饮。水果要新鲜、冰要满；不要用太多糖浆，柠檬水本身有甜度。",
    flavor: ["清爽", "花香"],
    v: [
      ["Pimm's Royale", "Pimm's Royale", "用起泡酒替代柠檬水，提升酒精度与节庆感。"],
      ["Pimm's Ginger", "Pimm's Ginger", "用姜汁汽水替代柠檬水，加青柠，辛辣感更强。"]
    ]
  },
  {
    id: "saturn", zh: "土星", en: "Saturn", fam: "tiki", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "liqueur"], method: "摇和", glass: "碟形杯 / Tiki 杯", strength: 4, diff: 3,
    ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["百香果糖浆 Passion Fruit Syrup", "15 ml"], ["杏仁糖浆 Orgeat", "10 ml"], ["法勒南 Falernum", "5 ml"]],
    steps: [
      "所有材料加冰摇和 12 秒。",
      "双重过滤入冰镇碟形杯或加碎冰的 Tiki 杯。",
      "以柠檬皮与樱桃装饰，可加一颗「土星环」。"
    ],
    gar: "柠檬皮 + 樱桃",
    note: "这是 Tiki 里少见的金酒主导配方。百香果的酸与杏仁的甜要互相支撑，法勒南只负责香料尾韵。",
    flavor: ["热带", "酸甜", "花香"],
    v: [
      ["Saturn Fizz", "Saturn Fizz", "摇好后补 45 ml 苏打，变成气泡版。"],
      ["Pink Saturn", "Pink Saturn", "加入 5 ml 石榴糖浆，颜色粉红，甜度略增。"]
    ]
  },
  {
    id: "jasmine", zh: "茉莉", en: "Jasmine", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "liqueur", "amaro"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["金巴利 Campari", "20 ml"], ["君度 Cointreau", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "柠檬皮油装饰。"
    ],
    gar: "柠檬皮",
    note: "金巴利的苦与君度的甜把金酒包住，柠檬负责收尾。这是一杯「苦甜酸」的现代经典。",
    flavor: ["苦香", "酸甜", "花香"],
    v: [
      ["Jasmine Fizz", "Jasmine Fizz", "摇好后补苏打，苦味更轻，适合餐前。"],
      ["Jasmine 2.0", "Jasmine 2.0", "金巴利减到 15 ml，加 5 ml 葡萄柚汁，更清爽。"]
    ]
  }
];
