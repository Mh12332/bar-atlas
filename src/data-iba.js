/* ============================================================
   配方库 · IBA 官方酒单补全（2024–2026 版）
   规格以 IBA 官方页面为主要依据；杯型、装饰按吧台可执行性整理。
   ============================================================ */

const COCKTAILS_IBA = [
  {
    id: "alexander", zh: "亚历山大", en: "Alexander", fam: "flip", base: "brandy", sub: "干邑",
    mods: ["coffee", "cream"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["干邑 Cognac", "30 ml"], ["可可利口酒 Cacao Liqueur", "30 ml"], ["淡奶油 Heavy Cream", "30 ml"]],
    steps: [
      "干邑、棕色可可利口酒与淡奶油加冰摇和 12 秒。",
      "双重过滤入冰镇碟形杯。",
      "现磨肉豆蔻厚厚一层。"
    ],
    gar: "现磨肉豆蔻",
    note: "IBA 版本使用棕色可可利口酒，比白可可多一层焦糖与巧克力苦。奶油要冷、摇和要充分，肉豆蔻负责收尾。",
    flavor: ["奶滑", "咖啡", "温暖"],
    history: "亚历山大是 20 世纪初的甜点型鸡尾酒，常见记载指向纽约的调酒师 Troy Alexander。它曾以 Gin Alexander 的形态流行，后来干邑版成为标准；IBA 将干邑、棕色可可与奶油的三等分配方收进“不可遗忘”类。",
    src: { type: "IBA", cat: "The Unforgettables", url: "https://iba-world.com/iba-cocktail/alexander/" },
    v: [
      { zh: "Gin Alexander", en: "Gin Alexander", how: "把干邑换成金酒，可可的甜会更清亮。", ing: [["金酒 Gin", "30 ml"], ["白可可利口酒 White Cacao Liqueur", "30 ml"], ["淡奶油 Heavy Cream", "30 ml"]], method: "摇和", glass: "碟形杯", note: "白可可版本颜色更浅，金酒的植物感更明显。" },
      { zh: "Alexander Royale", en: "Alexander Royale", how: "在成品上补起泡酒，降低甜度与酒体。", ing: [["干邑 Cognac", "30 ml"], ["可可利口酒 Cacao Liqueur", "30 ml"], ["淡奶油 Heavy Cream", "30 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "先摇和滤入杯中，再缓慢补起泡酒。" }
    ]
  },
  {
    id: "angel-face", zh: "天使面孔", en: "Angel Face", fam: "duo", base: "brandy", sub: "卡尔瓦多斯 + 金酒",
    mods: ["liqueur"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒 Gin", "30 ml"], ["杏子白兰地 Apricot Brandy", "30 ml"], ["卡尔瓦多斯 Calvados", "30 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "IBA 版不加装饰；吧台可喷橙皮油。"
    ],
    gar: "无（IBA 版）/ 橙皮（吧台版）",
    note: "三等分的全酒配方，靠杏子与苹果的果香撑起金酒。IBA 版不加装饰；卡尔瓦多斯要选有苹果香、不是只有酒精的。",
    flavor: ["花香", "温暖", "草本"],
    history: "Angel Face 见于 1930 年出版的《Savoy Cocktail Book》，是禁酒令后伦敦 Savoy 酒吧的经典之一。名字来自当时一部同名电影与舞台剧，配方以金酒、杏子白兰地和卡尔瓦多斯等量组合。",
    src: { type: "IBA", cat: "The Unforgettables", url: "https://iba-world.com/iba-cocktail/angel-face/" },
    v: [
      { zh: "Dry Angel", en: "Dry Angel", how: "把杏子白兰地减到 20 ml，补 10 ml 干味美思，更干。", ing: [["金酒 Gin", "30 ml"], ["杏子白兰地 Apricot Brandy", "20 ml"], ["卡尔瓦多斯 Calvados", "30 ml"], ["干味美思 Dry Vermouth", "10 ml"]], method: "搅拌", glass: "碟形杯", note: "搅拌而非摇和，酒体更丝滑。" },
      { zh: "Apple Angel", en: "Apple Angel", how: "提高卡尔瓦多斯比例，突出苹果。", ing: [["金酒 Gin", "25 ml"], ["杏子白兰地 Apricot Brandy", "25 ml"], ["卡尔瓦多斯 Calvados", "40 ml"]], method: "摇和", glass: "碟形杯", note: "适合苹果白兰地风味突出的版本。" }
    ]
  },
  {
    id: "canchanchara", zh: "坎查查拉", en: "Canchanchara", fam: "sour", base: "cane", sub: "甘蔗烈酒",
    mods: ["citrus", "syrup"], method: "直调", glass: "古典杯", strength: 3, diff: 1,
    ing: [["甘蔗烈酒 Aguardiente", "60 ml"], ["青柠汁 Lime Juice", "15 ml"], ["生蜂蜜 Raw Honey", "15 ml"], ["水 Water", "50 ml"], ["碎冰 Crushed Ice", "满杯"]],
    steps: [
      "蜂蜜与水、青柠汁先在杯底搅匀，涂抹杯壁。",
      "加入碎冰，倒入 Aguardiente。",
      "从杯底向上大力搅拌，青柠角装饰。"
    ],
    gar: "青柠角",
    note: "古巴特立尼达的乡村喝法。蜂蜜必须先用水中和，否则会沉底；Aguardiente 的甘蔗香气是灵魂，不要用伏特加替代。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Canchanchara 起源于古巴中部的特立尼达，常被追溯到 19 世纪独立战争时期的乡村酒馆。它用甘蔗蒸馏酒、蜂蜜、青柠与水制成，是古巴最古老的鸡尾酒之一；IBA 在“新纪元”类别中收录了它。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/canchanchara/" },
    v: [
      { zh: "Canchanchara Highball", en: "Canchanchara Highball", how: "把水换成苏打，杯型加大，更清爽。", ing: [["甘蔗烈酒 Aguardiente", "50 ml"], ["青柠汁 Lime Juice", "20 ml"], ["蜂蜜糖浆 Honey Syrup", "15 ml"], ["苏打水 Soda Water", "100 ml"]], method: "直调", glass: "高球杯", note: "蜂蜜先用少量温水化开，再加苏打。" },
      { zh: "Aged Canchanchara", en: "Aged Canchanchara", how: "用陈年甘蔗朗姆替代 Aguardiente，增加香草与橡木。", ing: [["陈年朗姆 Aged Rum", "60 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "15 ml"], ["水 Water", "40 ml"]], method: "直调", glass: "古典杯", note: "陈年版更圆，但会少一点田野气。" }
    ]
  },
  {
    id: "cardinale", zh: "红衣主教", en: "Cardinale", fam: "duo", base: "gin", sub: "伦敦干金",
    mods: ["vermouth", "amaro", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["金酒 Gin", "40 ml"], ["干味美思 Dry Vermouth", "20 ml"], ["金巴利 Campari", "10 ml"]],
    steps: [
      "所有液体加冰搅拌 20–25 秒。",
      "滤入冰镇碟形杯。",
      "柠檬皮油装饰。"
    ],
    gar: "柠檬皮",
    note: "内格罗尼的干型亲戚：金巴利只占 10 ml，干味美思负责清亮。适合作为开胃酒，也适合怕甜的人。",
    flavor: ["苦香", "草本", "清爽"],
    history: "Cardinale 是 20 世纪中期在罗马与佛罗伦萨一带流行的开胃酒，名字来自红衣主教的红色。它把内格罗尼的甜味美思换成干味美思，金巴利比例也降到点缀级别，因此更干、更适合餐前。",
    src: { type: "IBA", cat: "The Contemporary Classics", url: "https://iba-world.com/iba-cocktail/cardinale/" },
    v: [
      { zh: "Cardinale Bianco", en: "Cardinale Bianco", how: "用 Blanc 味美思替代干味美思，金巴利减到 7.5 ml。", ing: [["金酒 Gin", "40 ml"], ["Blanc 味美思 Blanc Vermouth", "20 ml"], ["金巴利 Campari", "7.5 ml"]], method: "搅拌", glass: "碟形杯", note: "更柔、更花香，适合作为第一杯。" },
      { zh: "Cardinale Rosso", en: "Cardinale Rosso", how: "补 10 ml 甜味美思，回到更接近内格罗尼的结构。", ing: [["金酒 Gin", "40 ml"], ["干味美思 Dry Vermouth", "15 ml"], ["甜味美思 Sweet Vermouth", "10 ml"], ["金巴利 Campari", "15 ml"]], method: "搅拌", glass: "古典杯", note: "加冰出品，橙皮装饰。" }
    ]
  },
  {
    id: "casino", zh: "赌场", en: "Casino", fam: "sour", base: "gin", sub: "老汤姆",
    mods: ["citrus", "liqueur", "bitters"], method: "摇和", glass: "古典杯", strength: 4, diff: 2,
    ing: [["老汤姆金酒 Old Tom Gin", "40 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "10 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["橙味苦精 Orange Bitters", "2 dash"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "滤入加冰古典杯。",
      "柠檬皮与黑樱桃装饰。"
    ],
    gar: "柠檬皮 + 黑樱桃",
    note: "Old Tom 的微甜与黑樱桃很合；柠檬只需 10 ml，保持短饮的紧致。没有 Old Tom 时，用 London Dry 加 2.5 ml 糖浆。",
    flavor: ["花香", "酸甜", "草本"],
    history: "Casino 见于 1900 年代初的调酒书，并在 1930 年《Savoy Cocktail Book》中定型。它用 Old Tom 金酒、黑樱桃利口酒与少量柠檬，结构介于酸酒与马天尼之间；名字来自当时上流社会的赌场文化。",
    src: { type: "IBA", cat: "The Unforgettables", url: "https://iba-world.com/iba-cocktail/casino/" },
    v: [
      { zh: "Casino Royale", en: "Casino Royale", how: "成品补 60 ml 起泡酒，降低甜度。", ing: [["老汤姆金酒 Old Tom Gin", "40 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "10 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["橙味苦精 Orange Bitters", "2 dash"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "先摇和滤入杯中，再补起泡酒。" },
      { zh: "Casino Dry", en: "Casino Dry", how: "黑樱桃减到 5 ml，加 10 ml 干味美思，更干。", ing: [["老汤姆金酒 Old Tom Gin", "40 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "5 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["干味美思 Dry Vermouth", "10 ml"], ["橙味苦精 Orange Bitters", "2 dash"]], method: "搅拌", glass: "碟形杯", note: "搅拌版更接近马天尼。" }
    ]
  },
  {
    id: "chartreuse-swizzle", zh: "查特绿旋转", en: "Chartreuse Swizzle", fam: "tiki", base: "liqueur", sub: "绿查特",
    mods: ["juice", "citrus", "syrup", "aromatic"], method: "直调", glass: "高球杯 / Tiki 杯", strength: 3, diff: 2,
    ing: [["绿查特 Green Chartreuse", "45 ml"], ["菠萝汁 Pineapple Juice", "30 ml"], ["青柠汁 Lime Juice", "22.5 ml"], ["法勒南 Falernum", "15 ml"], ["碎冰 Crushed Ice", "满杯"]],
    steps: [
      "所有液体倒入高球杯或 Tiki 杯。",
      "加碎冰至满，用吧勺或 swizzle 棒上下旋转搅拌。",
      "补碎冰，薄荷与现磨肉豆蔻装饰。"
    ],
    gar: "薄荷 + 肉豆蔻",
    note: "绿查特的药草与菠萝、法勒南的香料是 Tiki 里的异类组合。旋转搅拌比摇和更保留碳酸感与碎冰质地。",
    flavor: ["草本", "热带", "辛香"],
    history: "Chartreuse Swizzle 由旧金山调酒师 Marcovaldo Dionysos 在 2000 年代创作，后来被 IBA 收进“新纪元”。它把修道士配方的绿查特放进 Tiki 的菠萝、青柠与法勒南框架，成为现代经典。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/chartreuse-swizzle/" },
    v: [
      { zh: "Yellow Swizzle", en: "Yellow Swizzle", how: "用黄查特替代绿查特，药草更柔、蜂蜜更明显。", ing: [["黄查特 Yellow Chartreuse", "45 ml"], ["菠萝汁 Pineapple Juice", "30 ml"], ["青柠汁 Lime Juice", "22.5 ml"], ["法勒南 Falernum", "15 ml"]], method: "直调", glass: "高球杯", note: "黄查特甜度更高，可把法勒南减到 10 ml。" },
      { zh: "Green Gin Swizzle", en: "Green Gin Swizzle", how: "绿查特减到 30 ml，补 20 ml 金酒。", ing: [["绿查特 Green Chartreuse", "30 ml"], ["金酒 Gin", "20 ml"], ["菠萝汁 Pineapple Juice", "30 ml"], ["青柠汁 Lime Juice", "22.5 ml"], ["法勒南 Falernum", "15 ml"]], method: "直调", glass: "高球杯", note: "酒体更干，适合不喜欢纯药草甜的客人。" }
    ]
  },
  {
    id: "dons-special-daiquiri", zh: "唐的特殊大吉利", en: "Don's Special Daiquiri", fam: "blended", base: "rum", sub: "牙买加朗姆 + 古巴朗姆",
    mods: ["citrus", "syrup", "juice"], method: "搅拌机", glass: "高脚杯 / Tiki 杯", strength: 3, diff: 2,
    ing: [["牙买加朗姆 Jamaican Rum", "30 ml"], ["古巴朗姆 Cuban Rum", "15 ml"], ["百香果糖浆 Passion Fruit Syrup", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "15 ml"], ["碎冰 Crushed Ice", "1 杯"]],
    steps: [
      "所有液体与碎冰放入搅拌机。",
      "短暂搅打成雪泥，倒入高脚杯或 Tiki 杯。",
      "补碎冰，半个百香果装饰。"
    ],
    gar: "半个百香果",
    note: "Don the Beachcomber 的配方，甜酸浓度都高，因为碎冰会快速稀释。不要把百香果糖浆换成新鲜果肉而不调整糖。",
    flavor: ["热带", "酸甜", "花香"],
    history: "Don's Special Daiquiri 出自 Don the Beachcomber 的 Tiki 体系，是 1930–40 年代好莱坞 Tiki 风潮的产物。它用两种朗姆、百香果与蜂蜜把大吉利拉进碎冰与热带水果的语境。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/dons-special-daiquiri/" },
    v: [
      { zh: "Don's on the Rocks", en: "Don's on the Rocks", how: "不搅打，加冰摇和后滤入古典杯。", ing: [["牙买加朗姆 Jamaican Rum", "30 ml"], ["古巴朗姆 Cuban Rum", "15 ml"], ["百香果糖浆 Passion Fruit Syrup", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "15 ml"]], method: "摇和", glass: "古典杯", note: "质地更清澈，香气更集中。" },
      { zh: "Passion Honey Daiquiri", en: "Passion Honey Daiquiri", how: "只用一种陈年朗姆，简化配方。", ing: [["陈年朗姆 Aged Rum", "45 ml"], ["百香果糖浆 Passion Fruit Syrup", "15 ml"], ["青柠汁 Lime Juice", "20 ml"], ["蜂蜜糖浆 Honey Syrup", "10 ml"]], method: "摇和", glass: "碟形杯", note: "更适合单杯出品的短饮版。" }
    ]
  },
  {
    id: "fernandito", zh: "费尔南迪托", en: "Fernandito", fam: "highball", base: "liqueur", sub: "Fernet-Branca",
    mods: ["mixer"], method: "直调", glass: "古典杯", strength: 3, diff: 1,
    ing: [["Fernet-Branca", "50 ml"], ["可乐 Cola", "120 ml"], ["冰 Ice", "满杯"]],
    steps: [
      "古典杯加满冰，倒入 Fernet-Branca。",
      "补满冰镇可乐，轻轻搅拌。",
      "IBA 版不加装饰；吧台可加柠檬皮。"
    ],
    gar: "无（IBA 版）/ 柠檬皮（吧台版）",
    note: "阿根廷的国民喝法。Fernet 的薄荷、药草与可乐的焦糖互相救赎；IBA 版不加装饰。可乐必须冰，比例可按 1:2 到 1:3 调整。",
    flavor: ["苦香", "草本", "清爽"],
    history: "Fernandito 是阿根廷对 Fernet con Coca 的亲昵称呼，起源于 20 世纪中后期的科尔多瓦与布宜诺斯艾利斯。它把意大利苦味酒 Fernet-Branca 与可乐组合，成为阿根廷酒吧与家庭聚会里最常见的长饮之一。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/fernandito/" },
    v: [
      { zh: "Fernet Tonic", en: "Fernet Tonic", how: "把可乐换成汤力水，苦味更干。", ing: [["Fernet-Branca", "45 ml"], ["汤力水 Tonic Water", "120 ml"], ["柠檬皮 Lemon Peel", "1 片"]], method: "直调", glass: "高球杯", note: "汤力水的奎宁与 Fernet 的苦味叠加，适合餐前。" },
      { zh: "Mentha Fernandito", en: "Mentha Fernandito", how: "加 6 片薄荷轻压，补可乐。", ing: [["Fernet-Branca", "50 ml"], ["可乐 Cola", "120 ml"], ["薄荷 Mint", "6 片"]], method: "直调", glass: "古典杯", note: "薄荷放大 Fernet 的清凉感。" }
    ]
  },
  {
    id: "french-martini", zh: "法国马天尼", en: "French Martini", fam: "duo", base: "vodka", sub: "伏特加",
    mods: ["liqueur", "juice"], method: "摇和", glass: "碟形杯", strength: 3, diff: 1,
    ing: [["伏特加 Vodka", "45 ml"], ["覆盆子利口酒 Raspberry Liqueur", "15 ml"], ["菠萝汁 Pineapple Juice", "15 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "挤压柠檬皮油，不投入杯中。"
    ],
    gar: "柠檬皮油（不投入）",
    note: "1980 年代纽约的现代经典。菠萝汁只需 15 ml，负责泡沫与酸；摇和要够力，才能产生细密泡沫。",
    flavor: ["酸甜", "花香", "热带"],
    history: "French Martini 诞生于 1980 年代纽约的酒吧，常被归功于调酒师 Keith McNally 或 Walter Easterbrook 的圈子。它用伏特加、覆盆子利口酒与菠萝汁，靠菠萝的泡沫制造“马天尼”质感，是 90 年代都市鸡尾酒的代表。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/french-martini/" },
    v: [
      { zh: "French Martini Royale", en: "French Martini Royale", how: "摇和后补 60 ml 起泡酒。", ing: [["伏特加 Vodka", "45 ml"], ["覆盆子利口酒 Raspberry Liqueur", "15 ml"], ["菠萝汁 Pineapple Juice", "15 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "气泡让覆盆子更轻，适合早午餐。" },
      { zh: "Gin French Martini", en: "Gin French Martini", how: "用金酒替代伏特加，植物感更强。", ing: [["金酒 Gin", "45 ml"], ["覆盆子利口酒 Raspberry Liqueur", "15 ml"], ["菠萝汁 Pineapple Juice", "15 ml"]], method: "摇和", glass: "碟形杯", note: "金酒与覆盆子、菠萝的酸很合。" }
    ]
  },
  {
    id: "gin-basil-smash", zh: "金酒罗勒斯玛什", en: "Gin Basil Smash", fam: "julep", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["金酒 Gin", "60 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "22.5 ml"], ["罗勒 Basil", "10 片"]],
    steps: [
      "所有材料加冰，大力摇和 12 秒。",
      "倒入冰镇碟形杯（IBA 版不过滤；吧台可双重过滤）。",
      "IBA 版不加装饰；吧台常用罗勒枝。"
    ],
    gar: "无（IBA 版）/ 罗勒枝（吧台版）",
    note: "IBA 官方版直接倒入碟形杯、不加装饰；现代吧台通常双重过滤并装饰罗勒。罗勒不要捣烂，轻压或直接摇和即可；柠檬与糖 1:1 是起点。",
    flavor: ["草本", "酸甜", "清爽"],
    history: "Gin Basil Smash 由德国调酒师 Jörg Meyer 于 2008 年在汉堡的 Le Lion 创作。它把 Whiskey Smash 的结构换成金酒与罗勒，迅速成为欧洲现代经典，并被 IBA 收进“新纪元”。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/gin-basil-smash/" },
    v: [
      { zh: "Basil Collins", en: "Basil Collins", how: "摇好后滤入高球杯，补 60 ml 苏打。", ing: [["金酒 Gin", "60 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "22.5 ml"], ["罗勒 Basil", "10 片"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，罗勒香在气泡里更明显。" },
      { zh: "Basil Gimlet", en: "Basil Gimlet", how: "把柠檬换成青柠，糖浆减到 15 ml。", ing: [["金酒 Gin", "60 ml"], ["青柠汁 Lime Juice", "25 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["罗勒 Basil", "6 片"]], method: "摇和", glass: "碟形杯", note: "更锐利，适合作为餐前短饮。" }
    ]
  },
  {
    id: "grand-margarita", zh: "金万利玛格丽特", en: "Grand Margarita", fam: "daisy", base: "agave", sub: "100% 龙舌兰",
    mods: ["citrus", "liqueur", "aromatic"], method: "摇和", glass: "古典杯", strength: 4, diff: 1,
    ing: [["100% 龙舌兰 100% Agave Tequila", "45 ml"], ["Grand Marnier", "30 ml"], ["青柠汁 Lime Juice", "15 ml"], ["盐 Salt", "杯口盐边"]],
    steps: [
      "古典杯口蘸海盐，杯内加冰。",
      "所有液体加冰摇和 10 秒。",
      "滤入杯中，青柠片装饰。"
    ],
    gar: "青柠片 + 盐边",
    note: "Grand Marnier 比君度更甜、更有干邑香，所以青柠只需 15 ml。IBA 版为整圈盐边；吧台常只做半圈以保留香气。",
    flavor: ["酸甜", "花香", "草本"],
    history: "Grand Margarita 是玛格丽特的豪华版本，用干邑基的 Grand Marnier 替代君度。它没有单一发明者，而是 20 世纪后期高端墨西哥餐厅与酒店酒吧的常见升级；IBA 在“新纪元”中将其标准化为 45:30:15。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/grand-margarita/" },
    v: [
      { zh: "Grand Mezcal", en: "Grand Mezcal", how: "用梅斯卡尔替代龙舌兰，烟熏与干邑橙香。", ing: [["梅斯卡尔 Mezcal", "45 ml"], ["Grand Marnier", "30 ml"], ["青柠汁 Lime Juice", "15 ml"]], method: "摇和", glass: "古典杯", note: "烟熏会放大 Grand Marnier 的甜，青柠可加 5 ml。" },
      { zh: "Grand Frozen", en: "Grand Frozen", how: "加碎冰搅打，盐边保留。", ing: [["龙舌兰 Tequila", "45 ml"], ["Grand Marnier", "30 ml"], ["青柠汁 Lime Juice", "15 ml"], ["碎冰 Crushed Ice", "1 杯"]], method: "搅拌机", glass: "高球杯", note: "冰沙版需额外 5 ml 糖浆。" }
    ]
  },
  {
    id: "horses-neck", zh: "马颈", en: "Horse's Neck", fam: "highball", base: "brandy", sub: "干邑",
    mods: ["mixer", "bitters", "citrus"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["干邑 Cognac", "40 ml"], ["姜啤 Ginger Beer", "120 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash（可选）"]],
    steps: [
      "高球杯加满冰，倒入干邑。",
      "补满冰镇姜汁汽水，加 1 dash 苦精。",
      "把柠檬皮削成长螺旋，像马颈一样挂在杯口。"
    ],
    gar: "长柠檬皮螺旋",
    note: "名字来自长柠檬皮。干邑与姜汁汽水要冰、要轻搅；苦精可选，但会让姜的辛辣更有层次。",
    flavor: ["清爽", "辛香", "温暖"],
    history: "Horse's Neck 在 19 世纪后期已出现在美国酒吧，最初常以姜汁汽水与柠檬皮为基底，可加威士忌或干邑。20 世纪后干邑版成为标准，长柠檬皮螺旋是它的视觉标志；IBA 将其收进“当代经典”。",
    src: { type: "IBA", cat: "The Contemporary Classics", url: "https://iba-world.com/iba-cocktail/horses-neck/" },
    v: [
      { zh: "Bourbon Horse's Neck", en: "Bourbon Horse's Neck", how: "用波本替代干邑，加 2 dash 苦精。", ing: [["波本威士忌 Bourbon Whiskey", "45 ml"], ["姜啤 Ginger Beer", "120 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["柠檬皮 Lemon Peel", "1 长条"]], method: "直调", glass: "高球杯", note: "更甜、更橡木，适合冬天。" },
      { zh: "Gin Horse's Neck", en: "Gin Horse's Neck", how: "用金酒替代干邑，加青柠皮。", ing: [["金酒 Gin", "45 ml"], ["姜啤 Ginger Beer", "120 ml"], ["青柠皮 Lime Peel", "1 长条"]], method: "直调", glass: "高球杯", note: "更清亮，姜的辛辣更突出。" }
    ]
  },
  {
    id: "iba-tiki", zh: "IBA 提基", en: "IBA Tiki", fam: "tiki", base: "rum", sub: "古巴朗姆 + 烟熏朗姆",
    mods: ["juice", "citrus", "liqueur", "syrup", "aromatic"], method: "摇和", glass: "Tiki 杯", strength: 3, diff: 3,
    ing: [["古巴朗姆 Cuban Rum", "30 ml"], ["烟熏朗姆 Smoked Rum", "30 ml"], ["杏仁利口酒 Amaretto", "15 ml"], ["榛子利口酒 Hazelnut Liqueur", "5 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "5 drops"], ["百香果果泥 Passion Fruit Purée", "30 ml"], ["菠萝汁 Pineapple Juice", "90 ml"], ["青柠汁 Lime Juice", "30 ml"], ["姜片 Ginger Slice", "1 片"]],
    steps: [
      "Tiki 杯中先放入姜片轻压。",
      "其余材料加冰大力摇和 12 秒。",
      "滤入装满碎冰的 Tiki 杯，柑橘与脱水菠萝装饰。"
    ],
    gar: "柑橘 + 脱水菠萝",
    note: "IBA 的官方 Tiki 配方，果味与坚果香很浓，酒精度被大量果汁包裹。姜片只轻压，避免辛辣盖过朗姆。",
    flavor: ["热带", "花香", "酸甜"],
    history: "IBA Tiki 是国际调酒师协会为 Tiki 风格制定的官方配方，使用古巴朗姆、烟熏朗姆、杏仁、榛子、百香果与菠萝。它并非某一间酒吧的历史原作，而是 21 世纪 IBA 对 Tiki 结构的标准化表达。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/iba-tiki/" },
    v: [
      { zh: "IBA Tiki Royale", en: "IBA Tiki Royale", how: "减少菠萝汁到 60 ml，补 60 ml 起泡酒。", ing: [["古巴朗姆 Cuban Rum", "30 ml"], ["烟熏朗姆 Smoked Rum", "30 ml"], ["杏仁利口酒 Amaretto", "15 ml"], ["百香果果泥 Passion Fruit Purée", "30 ml"], ["菠萝汁 Pineapple Juice", "60 ml"], ["青柠汁 Lime Juice", "30 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "Tiki 杯", note: "气泡让厚重的果味变轻。" },
      { zh: "IBA Tiki Punch", en: "IBA Tiki Punch", how: "加倍果汁，补 30 ml 苏打，降低酒感。", ing: [["古巴朗姆 Cuban Rum", "30 ml"], ["烟熏朗姆 Smoked Rum", "30 ml"], ["杏仁利口酒 Amaretto", "15 ml"], ["百香果果泥 Passion Fruit Purée", "30 ml"], ["菠萝汁 Pineapple Juice", "120 ml"], ["青柠汁 Lime Juice", "30 ml"], ["苏打水 Soda Water", "30 ml"]], method: "直调", glass: "Tiki 杯", note: "适合多人分享的轻版本。" }
    ]
  },
  {
    id: "illegal", zh: "非法", en: "Illegal", fam: "sour", base: "agave", sub: "梅斯卡尔",
    mods: ["citrus", "syrup", "liqueur", "aromatic", "cream"], method: "摇和", glass: "碟形杯 / 陶杯", strength: 4, diff: 3,
    ing: [["梅斯卡尔 Mezcal", "30 ml"], ["高酒精度朗姆 Overproof Rum", "15 ml"], ["法勒南 Falernum", "15 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "1 吧勺"], ["青柠汁 Lime Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["蛋清 Egg White", "少许（可选）"]],
    steps: [
      "所有材料加冰大力摇和 12 秒（IBA 版不预摇）。",
      "双重过滤。",
      "滤入冰镇碟形杯或加碎冰的陶杯；IBA 版不加装饰。"
    ],
    gar: "无（IBA 版）/ 青柠皮（吧台版）",
    note: "烟熏梅斯卡尔、高酯朗姆与法勒南的香料叠加，是一杯“重口味”酸酒。Overproof 朗姆要精确计量，否则会压过梅斯卡尔；IBA 版不加装饰。",
    flavor: ["苦香", "热带", "草本"],
    history: "Illegal 由纽约 Death & Co 的调酒师在 2000 年代创作，是 Tiki 与酸酒的混血。它以梅斯卡尔、牙买加高酯朗姆、法勒南与黑樱桃构成，2010 年代后被 IBA 收进“新纪元”。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/illegal/" },
    v: [
      { zh: "Legal", en: "Legal", how: "用龙舌兰替代梅斯卡尔，烟熏感减弱。", ing: [["白色龙舌兰 Blanco Tequila", "30 ml"], ["牙买加朗姆 Jamaican Rum", "15 ml"], ["法勒南 Falernum", "15 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "1 吧勺"], ["青柠汁 Lime Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "15 ml"]], method: "摇和", glass: "碟形杯", note: "更清亮，适合不喜欢重烟熏的客人。" },
      { zh: "Illegal Sour", en: "Illegal Sour", how: "加入 20 ml 蛋清，口感更绵密。", ing: [["梅斯卡尔 Mezcal", "30 ml"], ["牙买加朗姆 Jamaican Rum", "15 ml"], ["法勒南 Falernum", "15 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "1 吧勺"], ["青柠汁 Lime Juice", "25 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["蛋清 Egg White", "20 ml"]], method: "摇和", glass: "碟形杯", note: "先干摇，再加冰摇；泡沫上点苦精。" }
    ]
  },
  {
    id: "john-collins", zh: "约翰柯林斯", en: "John Collins", fam: "collins", base: "gin", sub: "伦敦干金 / 老汤姆",
    mods: ["citrus", "syrup", "mixer"], method: "直调", glass: "柯林斯杯", strength: 2, diff: 1,
    ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["苏打水 Soda Water", "60 ml"]],
    steps: [
      "柯林斯杯加满冰，倒入金酒、柠檬汁与糖浆。",
      "搅拌 8–10 秒，补满冰镇苏打水。",
      "柠檬片与黑樱桃装饰。"
    ],
    gar: "柠檬片 + 黑樱桃",
    note: "IBA 说明：用 Old Tom 金酒时即为 Tom Collins。John Collins 更常与 London Dry 关联；关键是先调和再加苏打。",
    flavor: ["清爽", "酸甜"],
    history: "John Collins 的名字可追溯到 19 世纪初伦敦的 John Collins 旅馆与一位同名侍者。它后来分化出 Tom Collins（用 Old Tom 金酒），成为 19 世纪最流行的长饮之一；IBA 将 John Collins 列入“不可遗忘”。",
    src: { type: "IBA", cat: "The Unforgettables", url: "https://iba-world.com/iba-cocktail/john-collins/" },
    v: [
      { zh: "Tom Collins", en: "Tom Collins", how: "用 Old Tom 金酒替代 London Dry，甜感更圆。", ing: [["老汤姆金酒 Old Tom Gin", "45 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["苏打水 Soda Water", "60 ml"]], method: "直调", glass: "柯林斯杯", note: "Old Tom 的微甜与柠檬很合，糖浆可减 5 ml。" },
      { zh: "Juan Collins", en: "Juan Collins", how: "用龙舌兰替代金酒，加 1 dash 橙味苦精。", ing: [["白色龙舌兰 Blanco Tequila", "45 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["苏打水 Soda Water", "60 ml"], ["橙味苦精 Orange Bitters", "1 dash"]], method: "直调", glass: "柯林斯杯", note: "龙舌兰的植物感让长饮更干。" }
    ]
  },
  {
    id: "kir", zh: "基尔", en: "Kir", fam: "aperitivo", base: "wine", sub: "干白葡萄酒",
    mods: ["liqueur"], method: "直调", glass: "葡萄酒杯", strength: 1, diff: 1,
    ing: [["干白葡萄酒 Dry White Wine", "90 ml"], ["黑加仑利口酒 Crème de Cassis", "10 ml"]],
    steps: [
      "葡萄酒杯冰镇，先倒入黑加仑利口酒。",
      "缓慢补入冰镇干白葡萄酒。",
      "轻搅一次，不加装饰。"
    ],
    gar: "无",
    note: "第戎的传统开胃酒。黑加仑利口酒 10 ml 足够，过多会盖住白葡萄酒的酸；用勃艮第 Aligoté 最经典。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Kir 以第戎市长 Félix Kir 命名。传说他在二战后用勃艮第白葡萄酒与黑加仑利口酒招待客人，后来这种喝法以他的名字流传。IBA 将 Kir 列入“当代经典”，并注明把白葡萄酒换成香槟即为 Kir Royal。",
    src: { type: "IBA", cat: "The Contemporary Classics", url: "https://iba-world.com/iba-cocktail/kir/" },
    v: [
      { zh: "Kir Royale", en: "Kir Royale", how: "用香槟或起泡酒替代干白。", ing: [["黑加仑利口酒 Crème de Cassis", "15 ml"], ["香槟 Champagne", "120 ml"]], method: "直调", glass: "香槟杯", note: "起泡酒更干，黑加仑可略增到 15 ml。" },
      { zh: "Kir Imperial", en: "Kir Imperial", how: "用覆盆子利口酒替代黑加仑。", ing: [["覆盆子利口酒 Raspberry Liqueur", "15 ml"], ["香槟 Champagne", "120 ml"]], method: "直调", glass: "香槟杯", note: "颜色更红，果香更明亮。" }
    ]
  },
  {
    id: "long-island-iced-tea", zh: "长岛冰茶", en: "Long Island Iced Tea", fam: "highball", base: "vodka", sub: "伏特加 + 多基酒",
    mods: ["citrus", "syrup", "liqueur", "mixer"], method: "直调", glass: "高球杯", strength: 5, diff: 1,
    ing: [["伏特加 Vodka", "15 ml"], ["龙舌兰 Tequila", "15 ml"], ["白朗姆 White Rum", "15 ml"], ["金酒 Gin", "15 ml"], ["君度 Cointreau", "15 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "30 ml"], ["可乐 Cola", "补满"]],
    steps: [
      "高球杯加满冰，倒入除可乐外全部材料。",
      "搅拌 10 秒，补满冰镇可乐。",
      "柠檬片装饰，插吸管。"
    ],
    gar: "柠檬片",
    note: "IBA 版本的五种烈酒各 15 ml，酒精度很高。可乐只负责颜色与少许焦糖，不要用太多糖浆；给客人前确认酒量。",
    flavor: ["酸甜", "清爽", "苦香"],
    history: "长岛冰茶起源有争议，常见说法指向 1970 年代纽约长岛的 Oak Beach Inn 调酒师 Robert “Rosebud” Butt。它用五种烈酒加可乐伪装成冰茶，1980 年代风靡全球，现为 IBA“当代经典”。",
    src: { type: "IBA", cat: "The Contemporary Classics", url: "https://iba-world.com/iba-cocktail/long-island-iced-tea/" },
    v: [
      { zh: "Long Beach Iced Tea", en: "Long Beach Iced Tea", how: "用蔓越莓汁替代可乐，颜色更红。", ing: [["伏特加 Vodka", "15 ml"], ["龙舌兰 Tequila", "15 ml"], ["白朗姆 White Rum", "15 ml"], ["金酒 Gin", "15 ml"], ["君度 Cointreau", "15 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["蔓越莓汁 Cranberry Juice", "60 ml"]], method: "直调", glass: "高球杯", note: "蔓越莓的酸涩会压住甜味，糖浆减 10 ml。" },
      { zh: "Tokyo Iced Tea", en: "Tokyo Iced Tea", how: "加入 15 ml 蜜瓜利口酒，减少糖浆。", ing: [["伏特加 Vodka", "15 ml"], ["龙舌兰 Tequila", "15 ml"], ["白朗姆 White Rum", "15 ml"], ["金酒 Gin", "15 ml"], ["蜜瓜利口酒 Melon Liqueur", "15 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["苏打水 Soda Water", "补满"]], method: "直调", glass: "高球杯", note: "颜色偏绿，甜香更明显。" }
    ]
  },
  {
    id: "missionarys-downfall", zh: "传教士的堕落", en: "Missionary's Downfall", fam: "blended", base: "rum", sub: "白朗姆",
    mods: ["citrus", "syrup", "juice", "aromatic"], method: "搅拌机", glass: "高脚杯", strength: 2, diff: 2,
    ing: [["白朗姆 White Rum", "30 ml"], ["桃子白兰地 Peach Brandy", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "30 ml"], ["薄荷 Mint", "10 片"], ["菠萝块 Pineapple Chunks", "3–4 块"], ["碎冰 Crushed Ice", "半杯"]],
    steps: [
      "所有材料与半杯碎冰放入搅拌机。",
      "搅打至顺滑，倒入高脚杯。",
      "补碎冰，薄荷枝与菠萝片装饰。"
    ],
    gar: "薄荷 + 菠萝",
    note: "Don the Beachcomber 的 Tiki 经典。薄荷、桃子与菠萝的组合很香，蜂蜜糖浆 30 ml 看起来多，但碎冰会稀释；不要减太多。",
    flavor: ["热带", "花香", "酸甜"],
    history: "Missionary's Downfall 由 Don the Beachcomber 在 1930 年代创作，是 Tiki 黄金时代的代表之一。它用白朗姆、桃子白兰地、蜂蜜、薄荷与菠萝，把“传教士”与热带果汁的讽刺写进名字里。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/missionarys-downfall/" },
    v: [
      { zh: "Missionary's Fizz", en: "Missionary's Fizz", how: "不搅打，摇和后补 60 ml 苏打。", ing: [["白朗姆 White Rum", "30 ml"], ["桃子白兰地 Peach Brandy", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "20 ml"], ["薄荷 Mint", "8 片"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，薄荷香更清晰。" },
      { zh: "Missionary's Punch", en: "Missionary's Punch", how: "加倍朗姆与果汁，做成多人份潘趣。", ing: [["白朗姆 White Rum", "60 ml"], ["桃子白兰地 Peach Brandy", "30 ml"], ["青柠汁 Lime Juice", "30 ml"], ["蜂蜜糖浆 Honey Syrup", "40 ml"], ["菠萝汁 Pineapple Juice", "60 ml"], ["薄荷 Mint", "12 片"]], method: "搅拌机", glass: "潘趣碗", note: "按人数倍增，提前冷藏。" }
    ]
  },
  {
    id: "monkey-gland", zh: "猴腺", en: "Monkey Gland", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["金酒 Gin", "45 ml"], ["橙汁 Orange Juice", "45 ml"], ["苦艾酒 Absinthe", "1 汤匙"], ["石榴糖浆 Grenadine", "1 汤匙"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "IBA 版不加装饰；吧台可喷橙皮油。"
    ],
    gar: "无（IBA 版）/ 橙皮（吧台版）",
    note: "1920 年代巴黎的经典。苦艾酒 1 汤匙（约 15 ml）很强，先按 10 ml 做；石榴糖浆负责颜色与甜，不要超过 15 ml。IBA 版不加装饰。",
    flavor: ["草本", "酸甜", "花香"],
    history: "Monkey Gland 由巴黎 Harry's New York Bar 的调酒师 Harry MacElhone 在 1920 年代创作。名字来自当时一位医生提出的“猴腺移植”抗衰老理论，带着那个年代的怪诞与殖民趣味；配方是金酒、橙汁、苦艾与石榴。",
    src: { type: "IBA", cat: "The Unforgettables", url: "https://iba-world.com/iba-cocktail/monkey-gland/" },
    v: [
      { zh: "Monkey Gland No. 2", en: "Monkey Gland No. 2", how: "苦艾减到 5 ml，金酒加到 50 ml，更干。", ing: [["金酒 Gin", "50 ml"], ["橙汁 Orange Juice", "40 ml"], ["苦艾酒 Absinthe", "5 ml"], ["石榴糖浆 Grenadine", "10 ml"]], method: "摇和", glass: "碟形杯", note: "苦艾只做香气点缀。" },
      { zh: "Monkey Gland Fizz", en: "Monkey Gland Fizz", how: "摇好后补 45 ml 苏打，变成长饮。", ing: [["金酒 Gin", "45 ml"], ["橙汁 Orange Juice", "45 ml"], ["苦艾酒 Absinthe", "10 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["苏打水 Soda Water", "45 ml"]], method: "摇和", glass: "高球杯", note: "气泡让苦艾的茴香更轻。" }
    ]
  },
  {
    id: "new-york-sour", zh: "纽约酸", en: "New York Sour", fam: "sour", base: "whiskey", sub: "黑麦威士忌 / 波本威士忌",
    mods: ["citrus", "syrup", "cream", "mixer"], method: "摇和", glass: "古典杯", strength: 3, diff: 2,
    ing: [["黑麦威士忌 Rye Whiskey", "60 ml"], ["单糖浆 Simple Syrup", "22.5 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["蛋清 Egg White", "少许"], ["红葡萄酒 Red Wine", "15 ml"]],
    steps: [
      "除红酒外全部材料加冰摇和 12 秒（IBA 版不预摇）。",
      "滤入加冰古典杯，静置让泡沫稳定。",
      "沿吧勺背面漂浮红酒，柠檬皮与樱桃装饰。"
    ],
    gar: "柠檬皮 + 樱桃",
    note: "IBA 版为一次加冰摇和；吧台若用蛋清可先干摇。红酒要干、单宁适中（西拉、马尔贝克）；不要搅拌，喝的时候让红酒慢慢穿过泡沫。",
    flavor: ["酸甜", "温暖", "苦香"],
    history: "New York Sour 是威士忌酸的纽约变体，19 世纪末已出现“Continental Sour”之类的红酒漂浮做法。它把红酒的单宁与果香放在蛋清泡沫上，既像酸酒又像一杯轻葡萄酒；IBA 将其列入“新纪元”。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/new-york-sour/" },
    v: [
      { zh: "New York Sour Royale", en: "New York Sour Royale", how: "把红酒换成起泡酒，降低单宁。", ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["单糖浆 Simple Syrup", "22.5 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["蛋清 Egg White", "20 ml"], ["起泡酒 Sparkling Wine", "45 ml"]], method: "摇和", glass: "高球杯", note: "先摇和滤入杯中，再补起泡酒。" },
      { zh: "Chicago Sour", en: "Chicago Sour", how: "用波特酒替代红酒，甜香更浓。", ing: [["黑麦威士忌 Rye Whiskey", "60 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["蛋清 Egg White", "20 ml"], ["波特 Port", "15 ml"]], method: "摇和", glass: "古典杯", note: "波特更甜，糖浆减 5 ml。" }
    ]
  },
  {
    id: "old-cuban", zh: "老古巴", en: "Old Cuban", fam: "collins", base: "rum", sub: "陈年朗姆",
    mods: ["citrus", "syrup", "bitters", "mixer", "aromatic"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["陈年朗姆 Aged Rum", "45 ml"], ["青柠汁 Lime Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "30 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["薄荷 Mint", "6–8 片"], ["起泡酒 Sparkling Wine", "60 ml"]],
    steps: [
      "薄荷与糖浆轻压，加入朗姆、青柠与苦精。",
      "加冰摇和 12 秒，双重过滤入冰镇碟形杯。",
      "补入起泡酒，薄荷枝装饰。"
    ],
    gar: "薄荷枝",
    note: "Audrey Saunders 的现代经典，结构像莫吉托 + 香槟。糖浆 30 ml 看似多，但起泡酒会拉长；薄荷只轻压。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Old Cuban 由纽约 Pegu Club 的 Audrey Saunders 在 2000 年代创作，灵感来自莫吉托与 French 75。它用陈年朗姆、薄荷、青柠与起泡酒，成为 21 世纪最成功的现代经典之一，后被 IBA 收录。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/old-cuban/" },
    v: [
      { zh: "Old Cuban Royale", en: "Old Cuban Royale", how: "起泡酒加到 90 ml，糖浆减到 20 ml。", ing: [["陈年朗姆 Aged Rum", "45 ml"], ["青柠汁 Lime Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["薄荷 Mint", "6 片"], ["起泡酒 Sparkling Wine", "90 ml"]], method: "摇和", glass: "香槟杯", note: "更轻、更适合早午餐。" },
      { zh: "Old Cuban Fizz", en: "Old Cuban Fizz", how: "用苏打替代起泡酒，降低酒精度。", ing: [["陈年朗姆 Aged Rum", "45 ml"], ["青柠汁 Lime Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "25 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["薄荷 Mint", "6 片"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "薄荷与青柠更突出。" }
    ]
  },
  {
    id: "paradise", zh: "天堂", en: "Paradise", fam: "sour", base: "gin", sub: "伦敦干金",
    mods: ["liqueur", "juice"], method: "摇和", glass: "碟形杯", strength: 3, diff: 1,
    ing: [["金酒 Gin", "30 ml"], ["杏子白兰地 Apricot Brandy", "20 ml"], ["橙汁 Orange Juice", "15 ml"]],
    steps: [
      "所有材料加冰摇和 10 秒。",
      "双重过滤入冰镇碟形杯。",
      "IBA 版不加装饰；吧台可喷橙皮油。"
    ],
    gar: "无（IBA 版）/ 橙皮（吧台版）",
    note: "1930 年代 Savoy 的经典。杏子白兰地很甜，橙汁提供酸与苦；不要额外加糖，摇和稀释就够。IBA 版不加装饰。",
    flavor: ["花香", "酸甜", "温暖"],
    history: "Paradise 见于 1930 年《Savoy Cocktail Book》，是禁酒令后伦敦 Savoy 酒吧的短饮经典。金酒、杏子白兰地与橙汁的三材料组合简单，却要求杏子酒有真实的果香而不是糖浆感。",
    src: { type: "IBA", cat: "The Unforgettables", url: "https://iba-world.com/iba-cocktail/paradise/" },
    v: [
      { zh: "Paradise Fizz", en: "Paradise Fizz", how: "摇好后补 60 ml 苏打，变成长饮。", ing: [["金酒 Gin", "30 ml"], ["杏子白兰地 Apricot Brandy", "20 ml"], ["橙汁 Orange Juice", "15 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "杏子香在气泡里更轻。" },
      { zh: "Paradise Lost", en: "Paradise Lost", how: "用梅斯卡尔替代金酒，加 1 dash 苦精。", ing: [["梅斯卡尔 Mezcal", "30 ml"], ["杏子白兰地 Apricot Brandy", "20 ml"], ["橙汁 Orange Juice", "15 ml"], ["苦精 Bitters", "1 dash"]], method: "摇和", glass: "碟形杯", note: "烟熏与杏子形成更成熟的版本。" }
    ]
  },
  {
    id: "pisco-punch", zh: "皮斯科潘趣", en: "Pisco Punch", fam: "punch", base: "brandy", sub: "皮斯科",
    mods: ["juice", "citrus", "syrup", "mixer", "aromatic"], method: "摇和", glass: "大高脚杯", strength: 3, diff: 2,
    ing: [["皮斯科 Pisco", "60 ml"], ["菠萝汁 Pineapple Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["干白葡萄酒 Dry White Wine", "30 ml"], ["丁香 Clove", "3 粒"]],
    steps: [
      "糖浆与丁香轻压浸泡，加入皮斯科、菠萝、柠檬与冰。",
      "大力摇和，双重过滤入大高脚杯。",
      "顶部补干白葡萄酒，轻搅。"
    ],
    gar: "无（IBA 版）/ 菠萝片（吧台版）",
    note: "19 世纪旧金山的经典。丁香只需 3 粒，浸泡太久会苦；干白葡萄酒最后加，保留酸度与香气。IBA 版不加装饰。",
    flavor: ["热带", "酸甜", "花香"],
    history: "Pisco Punch 是 19 世纪旧金山银行交易所酒吧（Bank Exchange）的招牌，调酒师 Duncan Nicol 的配方曾风靡一时。它用秘鲁皮斯科、菠萝、柠檬与丁香，是加州淘金时代与太平洋贸易的产物。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/pisco-punch/" },
    v: [
      { zh: "Pisco Punch Royale", en: "Pisco Punch Royale", how: "把干白换成起泡酒，减少糖浆。", ing: [["皮斯科 Pisco", "60 ml"], ["菠萝汁 Pineapple Juice", "22.5 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["起泡酒 Sparkling Wine", "60 ml"], ["丁香 Clove", "3 粒"]], method: "摇和", glass: "香槟杯", note: "更轻，适合庆典。" },
      { zh: "Pisco Sour", en: "Pisco Sour", how: "去掉菠萝与葡萄酒，加蛋清与苦精。", ing: [["皮斯科 Pisco", "60 ml"], ["青柠汁 Lime Juice", "25 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["蛋清 Egg White", "20 ml"], ["苦精 Bitters", "3 dash"]], method: "摇和", glass: "古典杯", note: "更经典的秘鲁酸酒结构。" }
    ]
  },
  {
    id: "porn-star-martini", zh: "艳星马天尼", en: "Porn Star Martini", fam: "duo", base: "vodka", sub: "香草伏特加",
    mods: ["liqueur", "juice", "mixer"], method: "摇和", glass: "大碟形杯 + shot 杯", strength: 3, diff: 2,
    ing: [["香草伏特加 Vanilla Vodka", "50 ml"], ["百香果利口酒 Passion Fruit Liqueur", "20 ml"], ["百香果果泥 Passion Fruit Purée", "50 ml"], ["香草糖 Vanilla Sugar", "2 吧勺"], ["香槟 Champagne", "50 ml（旁置）"]],
    steps: [
      "除香槟外全部材料加冰摇和 12 秒。",
      "双重过滤入冰镇大碟形杯。",
      "百香果壳与糖装饰；香槟另装 shot 杯，旁置。"
    ],
    gar: "百香果壳 + 糖",
    note: "2000 年代伦敦的现代经典。香槟旁置是仪式感，不要倒进主杯；百香果果泥的酸度决定是否需要香草糖。",
    flavor: ["热带", "酸甜", "花香"],
    history: "Porn Star Martini 由伦敦调酒师 Douglas Ankrah 于 2002 年前后在 Soho 的 LAB 酒吧创作，原名 Maverick Martini。它用香草伏特加、百香果与旁置香槟，成为 2010 年代全球最流行的现代鸡尾酒之一，2020 年代被 IBA 收录。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/porn-star-martini/" },
    v: [
      { zh: "Porn Star 2.0", en: "Porn Star 2.0", how: "用新鲜百香果肉替代果泥，香草糖减半。", ing: [["香草伏特加 Vanilla Vodka", "50 ml"], ["百香果利口酒 Passion Fruit Liqueur", "20 ml"], ["新鲜百香果肉 Fresh Passion Fruit Pulp", "2 个"], ["香草糖 Vanilla Sugar", "1 吧勺"], ["香槟 Champagne", "50 ml（旁置）"]], method: "摇和", glass: "大碟形杯", note: "果肉纤维更明显，需双重过滤。" },
      { zh: "Porn Star Royale", en: "Porn Star Royale", how: "把香槟直接倒入主杯，降低甜度。", ing: [["香草伏特加 Vanilla Vodka", "40 ml"], ["百香果利口酒 Passion Fruit Liqueur", "15 ml"], ["百香果果泥 Passion Fruit Purée", "40 ml"], ["香槟 Champagne", "90 ml"]], method: "摇和", glass: "香槟杯", note: "更轻、更干，适合早午餐。" }
    ]
  },
  {
    id: "porto-flip", zh: "波特菲力普", en: "Porto Flip", fam: "flip", base: "wine", sub: "茶色波特",
    mods: ["cream", "aromatic"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["白兰地 Brandy", "15 ml"], ["茶色波特 Tawny Port", "45 ml"], ["蛋黄 Egg Yolk", "10 ml"]],
    steps: [
      "所有材料加冰大力摇和 12 秒。",
      "双重过滤入冰镇碟形杯。",
      "现磨肉豆蔻装饰。"
    ],
    gar: "现磨肉豆蔻",
    note: "IBA 使用茶色波特（tawny），比红宝石波特更干、更有坚果氧化香。蛋黄只需 10 ml，过多会腥；摇和必须充分，杯型要小。",
    flavor: ["奶滑", "温暖", "花香"],
    history: "Porto Flip 是 19 世纪流行的“Flip”家族成员，用波特酒、白兰地与蛋黄摇和。Flip 曾以热饮形式出现，后来演变为冷摇的餐后酒；IBA 将其列入“不可遗忘”。",
    src: { type: "IBA", cat: "The Unforgettables", url: "https://iba-world.com/iba-cocktail/porto-flip/" },
    v: [
      { zh: "White Porto Flip", en: "White Porto Flip", how: "用白波特替代茶色波特，颜色更浅。", ing: [["白兰地 Brandy", "15 ml"], ["白波特 White Port", "45 ml"], ["蛋黄 Egg Yolk", "10 ml"]], method: "摇和", glass: "碟形杯", note: "白波特更干，可加 5 ml 糖浆。" },
      { zh: "Ruby Flip", en: "Ruby Flip", how: "加入 10 ml 黑樱桃利口酒，减少波特。", ing: [["白兰地 Brandy", "15 ml"], ["红宝石波特 Ruby Port", "35 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "10 ml"], ["蛋黄 Egg Yolk", "10 ml"]], method: "摇和", glass: "碟形杯", note: "果香更浓，适合餐后。" }
    ]
  },
  {
    id: "russian-spring-punch", zh: "俄罗斯春潘趣", en: "Russian Spring Punch", fam: "collins", base: "vodka", sub: "伏特加",
    mods: ["citrus", "liqueur", "syrup", "mixer"], method: "摇和", glass: "高球杯", strength: 2, diff: 1,
    ing: [["伏特加 Vodka", "25 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["黑加仑利口酒 Crème de Cassis", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["起泡酒 Sparkling Wine", "补满"]],
    steps: [
      "除起泡酒外全部材料加冰摇和 10 秒。",
      "滤入加冰高球杯。",
      "补满起泡酒，黑莓与柠檬片装饰。"
    ],
    gar: "黑莓 + 柠檬片",
    note: "Dick Bradsell 的现代经典。黑加仑的酸与起泡酒的气泡很合；糖浆只需 10 ml，否则会甜。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Russian Spring Punch 由伦敦调酒师 Dick Bradsell 在 1980 年代创作，是英国鸡尾酒复兴的代表之一。它用伏特加、黑加仑、柠檬与起泡酒，结构像 French 75 的果味版本。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/russian-spring-punch/" },
    v: [
      { zh: "Russian Summer Punch", en: "Russian Summer Punch", how: "加入 4 颗黑莓与 2 片薄荷轻压。", ing: [["伏特加 Vodka", "25 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["黑加仑利口酒 Crème de Cassis", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["黑莓 Blackberry", "4 颗"], ["薄荷 Mint", "2 片"], ["起泡酒 Sparkling Wine", "补满"]], method: "摇和", glass: "高球杯", note: "果香更鲜，适合夏天。" },
      { zh: "Russian Royale", en: "Russian Royale", how: "提高起泡酒比例，伏特加减到 15 ml。", ing: [["伏特加 Vodka", "15 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["黑加仑利口酒 Crème de Cassis", "15 ml"], ["单糖浆 Simple Syrup", "5 ml"], ["起泡酒 Sparkling Wine", "120 ml"]], method: "直调", glass: "香槟杯", note: "更轻，适合早午餐。" }
    ]
  },
  {
    id: "sex-on-the-beach", zh: "性感沙滩", en: "Sex on the Beach", fam: "highball", base: "vodka", sub: "伏特加",
    mods: ["juice", "liqueur"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["伏特加 Vodka", "40 ml"], ["桃子利口酒 Peach Liqueur", "20 ml"], ["橙汁 Orange Juice", "40 ml"], ["蔓越莓汁 Cranberry Juice", "40 ml"]],
    steps: [
      "高球杯加满冰，倒入伏特加与桃子利口酒。",
      "加入橙汁与蔓越莓汁，搅拌 8 秒。",
      "半片橙子装饰。"
    ],
    gar: "半片橙",
    note: "1980 年代美国酒吧的派对经典。IBA 版不加石榴糖浆，颜色来自蔓越莓；桃子利口酒已经够甜，不需要额外糖。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Sex on the Beach 的起源有多个版本，最常被提到的是 1980 年代佛罗里达的 Confetti's 酒吧与 National Distributing 的促销。它用伏特加、桃子利口酒、橙汁与蔓越莓，成为 90 年代派对文化的代名词。",
    src: { type: "IBA", cat: "The Contemporary Classics", url: "https://iba-world.com/iba-cocktail/sex-on-the-beach/" },
    v: [
      { zh: "Sex on the Beach No. 2", en: "Sex on the Beach No. 2", how: "用菠萝汁替代橙汁，更热带。", ing: [["伏特加 Vodka", "40 ml"], ["桃子利口酒 Peach Liqueur", "20 ml"], ["菠萝汁 Pineapple Juice", "60 ml"], ["蔓越莓汁 Cranberry Juice", "30 ml"]], method: "直调", glass: "高球杯", note: "菠萝的酸让酒更清爽。" },
      { zh: "Sex on the Beach Royale", en: "Sex on the Beach Royale", how: "补 60 ml 起泡酒，降低甜度。", ing: [["伏特加 Vodka", "30 ml"], ["桃子利口酒 Peach Liqueur", "15 ml"], ["橙汁 Orange Juice", "30 ml"], ["蔓越莓汁 Cranberry Juice", "30 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "直调", glass: "香槟杯", note: "更轻，适合庆典。" }
    ]
  },
  {
    id: "singapore-sling", zh: "新加坡司令", en: "Singapore Sling", fam: "collins", base: "gin", sub: "伦敦干金",
    mods: ["juice", "citrus", "liqueur", "syrup", "bitters"], method: "摇和", glass: "飓风杯", strength: 3, diff: 3,
    ing: [["金酒 Gin", "30 ml"], ["樱桃利口酒 Cherry Liqueur", "15 ml"], ["君度 Cointreau", "7.5 ml"], ["Bénédictine", "7.5 ml"], ["菠萝汁 Pineapple Juice", "120 ml"], ["青柠汁 Lime Juice", "15 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]],
    steps: [
      "所有材料加冰摇和 12 秒。",
      "滤入加冰飓风杯。",
      "菠萝片与黑樱桃装饰。"
    ],
    gar: "菠萝片 + 黑樱桃",
    note: "Raffles Hotel 的经典。菠萝汁 120 ml 让酒体很长，金酒只有 30 ml；不要额外加糖，石榴与樱桃利口酒已经够甜。",
    flavor: ["热带", "酸甜", "花香"],
    history: "Singapore Sling 由新加坡 Raffles Hotel 的调酒师严崇文（Ngiam Tong Boon）在 1915 年前后创作。它以金酒、樱桃利口酒、Bénédictine、菠萝与石榴构成，是殖民时代“适合女士饮用的杜松子酒”传说的一部分；原配方在后世多次被复原与争议。",
    src: { type: "IBA", cat: "The Contemporary Classics", url: "https://iba-world.com/iba-cocktail/singapore-sling/" },
    v: [
      { zh: "Straits Sling", en: "Straits Sling", how: "金酒加到 45 ml，菠萝汁减到 90 ml，更烈。", ing: [["金酒 Gin", "45 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "15 ml"], ["君度 Cointreau", "7.5 ml"], ["Bénédictine", "7.5 ml"], ["菠萝汁 Pineapple Juice", "90 ml"], ["青柠汁 Lime Juice", "15 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["安高天娜苦精 Angostura Bitters", "1 dash"]], method: "摇和", glass: "飓风杯", note: "更适合喜欢酒感的客人。" },
      { zh: "Sling Fizz", en: "Sling Fizz", how: "补 60 ml 苏打，降低甜度。", ing: [["金酒 Gin", "30 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "15 ml"], ["君度 Cointreau", "7.5 ml"], ["Bénédictine", "7.5 ml"], ["菠萝汁 Pineapple Juice", "90 ml"], ["青柠汁 Lime Juice", "15 ml"], ["石榴糖浆 Grenadine", "10 ml"], ["苏打水 Soda Water", "60 ml"]], method: "直调", glass: "高球杯", note: "气泡让长饮更轻。" }
    ]
  },
  {
    id: "spicy-fifty", zh: "辣五十", en: "Spicy Fifty", fam: "sour", base: "vodka", sub: "香草伏特加",
    mods: ["citrus", "syrup", "liqueur", "aromatic"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["香草伏特加 Vanilla Vodka", "50 ml"], ["接骨木花浓糖浆 Elderflower Cordial", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "10 ml"], ["红辣椒 Chili Pepper", "2 薄片"]],
    steps: [
      "红辣椒与所有液体加冰摇和 12 秒。",
      "双重过滤入冰镇碟形杯。",
      "红辣椒装饰。"
    ],
    gar: "红辣椒",
    note: "辣椒的辣度差异极大，先放 1 片试味；双重过滤去掉辣椒籽，避免过度辛辣。接骨木花与香草伏特加是甜香基底。",
    flavor: ["辛香", "花香", "酸甜"],
    history: "Spicy Fifty 是 2000 年代伦敦酒吧的现代创作，常见说法指向调酒师 Joe McCanta 在 Boxwood Café 的配方。它用香草伏特加、接骨木花、蜂蜜与辣椒，把甜香与辛辣放在同一杯里；IBA 将其收进“新纪元”。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/spicy-fifty/" },
    v: [
      { zh: "Spicy Fifty Mezcal", en: "Spicy Fifty Mezcal", how: "用梅斯卡尔替代香草伏特加，烟熏与辣椒。", ing: [["梅斯卡尔 Mezcal", "50 ml"], ["接骨木花糖浆 Elderflower Syrup", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "10 ml"], ["红辣椒 Chili Pepper", "2 片"]], method: "摇和", glass: "碟形杯", note: "烟熏会放大辣感，辣椒可减到 1 片。" },
      { zh: "Spicy Fifty Cucumber", en: "Spicy Fifty Cucumber", how: "加 3 片黄瓜，减少蜂蜜。", ing: [["香草伏特加 Vanilla Vodka", "50 ml"], ["接骨木花糖浆 Elderflower Syrup", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "5 ml"], ["红辣椒 Chili Pepper", "1 片"], ["黄瓜 Cucumber", "3 片"]], method: "摇和", glass: "碟形杯", note: "黄瓜的清爽中和辣椒。" }
    ]
  },
  {
    id: "suffering-bastard", zh: "受苦混蛋", en: "Suffering Bastard", fam: "highball", base: "brandy", sub: "干邑 + 金酒",
    mods: ["citrus", "bitters", "mixer"], method: "直调", glass: "柯林斯杯", strength: 3, diff: 2,
    ing: [["干邑 Cognac", "30 ml"], ["金酒 Gin", "30 ml"], ["青柠汁 Lime Juice", "15 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["姜啤 Ginger Beer", "补满"]],
    steps: [
      "除姜啤外全部材料加冰摇和 10 秒。",
      "连冰倒入柯林斯杯。",
      "补满姜啤，薄荷与橙片装饰。"
    ],
    gar: "薄荷 + 橙片",
    note: "1940 年代开罗 Shepheard Hotel 的创作，据说为解宿醉。干邑与金酒各 30 ml，姜啤的辛辣是收尾；不要过滤，保留碎冰。",
    flavor: ["辛香", "清爽", "苦香"],
    history: "Suffering Bastard 由开罗 Shepheard Hotel 的调酒师 Joe Scialom 在 1940 年代创作，最初是给二战士兵解宿醉的姜啤长饮。它用干邑、金酒、青柠与苦精，名字与 Tiki 文化也有交集；IBA 将其列入“新纪元”。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/suffering-bastard/" },
    v: [
      { zh: "Suffering Bastard Royale", en: "Suffering Bastard Royale", how: "用起泡酒替代一半姜啤。", ing: [["干邑 Cognac", "30 ml"], ["金酒 Gin", "30 ml"], ["青柠汁 Lime Juice", "15 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["姜啤 Ginger Beer", "60 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "直调", glass: "高球杯", note: "更干，适合早午餐。" },
      { zh: "Dying Bastard", en: "Dying Bastard", how: "加入 15 ml 黑朗姆与 15 ml 法勒南。", ing: [["干邑 Cognac", "30 ml"], ["金酒 Gin", "30 ml"], ["黑朗姆 Dark Rum", "15 ml"], ["法勒南 Falernum", "15 ml"], ["青柠汁 Lime Juice", "15 ml"], ["姜啤 Ginger Beer", "补满"]], method: "直调", glass: "Tiki 杯", note: "Tiki 化的加强版，酒精更高。" }
    ]
  },
  {
    id: "three-dots-and-a-dash", zh: "三点一划", en: "Three Dots and a Dash", fam: "tiki", base: "rum", sub: "农业朗姆 + 陈年朗姆",
    mods: ["citrus", "juice", "syrup", "aromatic"], method: "搅拌机", glass: "高脚杯 / Tiki 杯", strength: 3, diff: 3,
    ing: [["农业朗姆 Rhum Agricole", "45 ml"], ["陈年朗姆 Aged Rum", "15 ml"], ["法勒南 Falernum", "7.5 ml"], ["多香果利口酒 Allspice Dram", "7.5 ml"], ["青柠汁 Lime Juice", "15 ml"], ["橙汁 Orange Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "15 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"], ["碎冰 Crushed Ice", "1 杯"]],
    steps: [
      "所有材料与碎冰放入搅拌机，短暂搅打。",
      "倒入高脚杯或 Tiki 杯，补碎冰。",
      "三颗樱桃与一块长方形菠萝装饰，形成“三点一划”。"
    ],
    gar: "3 颗樱桃 + 长方形菠萝",
    note: "Don the Beachcomber 的经典。装饰不是随意：三点一划是摩斯电码的“V”，代表胜利。农业朗姆的草香与多香果是骨架。",
    flavor: ["热带", "辛香", "苦香"],
    history: "Three Dots and a Dash 由 Don the Beachcomber 在二战期间创作，名字来自摩斯电码的字母 V（三点一划），象征胜利。它用农业朗姆、陈年朗姆、法勒南、多香果与蜂蜜，是 Tiki 黄金时代最复杂的配方之一。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/three-dots-and-a-dash/" },
    v: [
      { zh: "Three Dots Modern", en: "Three Dots Modern", how: "不搅打，加冰摇和后滤入加碎冰的 Tiki 杯。", ing: [["农业朗姆 Rhum Agricole", "45 ml"], ["陈年朗姆 Aged Rum", "15 ml"], ["法勒南 Falernum", "7.5 ml"], ["多香果利口酒 Allspice Dram", "7.5 ml"], ["青柠汁 Lime Juice", "15 ml"], ["橙汁 Orange Juice", "15 ml"], ["蜂蜜糖浆 Honey Syrup", "15 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]], method: "摇和", glass: "Tiki 杯", note: "质地更清澈，香气更集中。" },
      { zh: "Three Dots Punch", en: "Three Dots Punch", how: "加倍配方，补 60 ml 苏打，做成潘趣。", ing: [["农业朗姆 Rhum Agricole", "90 ml"], ["陈年朗姆 Aged Rum", "30 ml"], ["法勒南 Falernum", "15 ml"], ["多香果利口酒 Allspice Dram", "15 ml"], ["青柠汁 Lime Juice", "30 ml"], ["橙汁 Orange Juice", "30 ml"], ["蜂蜜糖浆 Honey Syrup", "30 ml"], ["苏打水 Soda Water", "60 ml"]], method: "直调", glass: "潘趣碗", note: "适合 4–6 人分享。" }
    ]
  },
  {
    id: "tipperary", zh: "蒂珀雷里", en: "Tipperary", fam: "duo", base: "whiskey", sub: "爱尔兰威士忌",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["爱尔兰威士忌 Irish Whiskey", "50 ml"], ["甜味美思 Sweet Vermouth", "25 ml"], ["绿查特 Green Chartreuse", "15 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]],
    steps: [
      "所有液体加冰搅拌 25 秒。",
      "滤入冰镇碟形杯。",
      "橙片或橙皮装饰。"
    ],
    gar: "橙片",
    note: "曼哈顿的爱尔兰表亲。绿查特的药草与甜味美思需要爱尔兰威士忌的柔顺来承接；15 ml 足够，不要加多。",
    flavor: ["草本", "温暖", "苦香"],
    history: "Tipperary 以爱尔兰蒂珀雷里郡和一战时期的同名歌曲命名，见于 1910–20 年代的调酒书。它用爱尔兰威士忌、甜味美思与绿查特，是曼哈顿家族里药草味最重的一支；IBA 将其列入“新纪元”。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/tipperary/" },
    v: [
      { zh: "Tipperary No. 2", en: "Tipperary No. 2", how: "绿查特减到 10 ml，威士忌加到 55 ml，更干。", ing: [["爱尔兰威士忌 Irish Whiskey", "55 ml"], ["甜味美思 Sweet Vermouth", "25 ml"], ["绿查特 Green Chartreuse", "10 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]], method: "搅拌", glass: "碟形杯", note: "更适合不喜欢重药草甜的客人。" },
      { zh: "Tipperary Highball", en: "Tipperary Highball", how: "补 90 ml 苏打，变成长饮。", ing: [["爱尔兰威士忌 Irish Whiskey", "50 ml"], ["甜味美思 Sweet Vermouth", "20 ml"], ["绿查特 Green Chartreuse", "10 ml"], ["苏打水 Soda Water", "90 ml"]], method: "直调", glass: "高球杯", note: "药草香在气泡里更轻。" }
    ]
  },
  {
    id: "trinidad-sour", zh: "特立尼达酸", en: "Trinidad Sour", fam: "sour", base: "liqueur", sub: "安高天娜苦精",
    mods: ["citrus", "syrup"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["安高天娜苦精 Angostura Bitters", "45 ml"], ["杏仁糖浆 Orgeat", "30 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["黑麦威士忌 Rye Whiskey", "15 ml"]],
    steps: [
      "所有材料加冰大力摇和 12 秒。",
      "双重过滤入冰镇碟形杯。",
      "IBA 版不加装饰；吧台可加柠檬皮。"
    ],
    gar: "无（IBA 版）/ 柠檬皮（吧台版）",
    note: "以苦精为主角的现代经典。45 ml 苦精听起来惊人，但杏仁糖浆与柠檬把它变成一杯香料酸酒；不要减少苦精，否则结构会散。IBA 版不加装饰。",
    flavor: ["苦香", "酸甜", "辛香"],
    history: "Trinidad Sour 由纽约 Clover Club 的调酒师 Giuseppe González 在 2008 年前后创作，灵感来自特立尼达的 Angostura 苦精。它把苦精从“几 dash”变成主基酒，是 21 世纪调酒师对苦味的一次大胆实验。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/trinidad-sour/" },
    v: [
      { zh: "Trinidad Sour No. 2", en: "Trinidad Sour No. 2", how: "苦精减到 30 ml，黑麦加到 30 ml，更易饮。", ing: [["安高天娜苦精 Angostura Bitters", "30 ml"], ["杏仁糖浆 Orgeat", "25 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["黑麦威士忌 Rye Whiskey", "30 ml"]], method: "摇和", glass: "碟形杯", note: "适合第一次尝试苦精主导配方的人。" },
      { zh: "Trinidad Sour Fizz", en: "Trinidad Sour Fizz", how: "摇好后补 60 ml 苏打，苦味更轻。", ing: [["安高天娜苦精 Angostura Bitters", "45 ml"], ["杏仁糖浆 Orgeat", "30 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["黑麦威士忌 Rye Whiskey", "15 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "气泡拉长苦味，适合餐前。" }
    ]
  },
  {
    id: "tuxedo", zh: "燕尾服", en: "Tuxedo", fam: "duo", base: "gin", sub: "老汤姆",
    mods: ["vermouth", "liqueur", "aromatic", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 3,
    ing: [["老汤姆金酒 Old Tom Gin", "30 ml"], ["干味美思 Dry Vermouth", "30 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "1/2 吧勺"], ["苦艾酒 Absinthe", "1/4 吧勺"], ["橙味苦精 Orange Bitters", "3 dash"]],
    steps: [
      "所有液体加冰搅拌 25 秒。",
      "滤入冰镇碟形杯。",
      "樱桃与柠檬皮装饰。"
    ],
    gar: "樱桃 + 柠檬皮",
    note: "19 世纪末的“高级马天尼”。黑樱桃与苦艾都只需吧勺量，多了会盖住 Old Tom 的微甜；橙味苦精 3 dash 是香气骨架。",
    flavor: ["草本", "花香", "苦香"],
    history: "Tuxedo 见于 1880 年代的调酒书，名字来自纽约 Tuxedo Park 的绅士俱乐部与“燕尾服”文化。它是马天尼家族里加入黑樱桃、苦艾与橙味苦精的复杂版本，IBA 将其列入“不可遗忘”。",
    src: { type: "IBA", cat: "The Unforgettables", url: "https://iba-world.com/iba-cocktail/tuxedo/" },
    v: [
      { zh: "Tuxedo No. 2", en: "Tuxedo No. 2", how: "黑樱桃加到 1 吧勺，苦艾减到 1 dash。", ing: [["老汤姆金酒 Old Tom Gin", "30 ml"], ["干味美思 Dry Vermouth", "30 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "1 吧勺"], ["苦艾酒 Absinthe", "1 dash"], ["橙味苦精 Orange Bitters", "3 dash"]], method: "搅拌", glass: "碟形杯", note: "樱桃香更明显，适合餐前。" },
      { zh: "Tuxedo Dry", en: "Tuxedo Dry", how: "干味美思加到 40 ml，金酒减到 25 ml。", ing: [["老汤姆金酒 Old Tom Gin", "25 ml"], ["干味美思 Dry Vermouth", "40 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "1/2 吧勺"], ["苦艾酒 Absinthe", "1/4 吧勺"], ["橙味苦精 Orange Bitters", "3 dash"]], method: "搅拌", glass: "碟形杯", note: "更干、更像马天尼。" }
    ]
  },
  {
    id: "ve-n-to", zh: "威尼斯", en: "Ve.N.To", fam: "sour", base: "brandy", sub: "格拉帕",
    mods: ["citrus", "syrup", "aromatic", "cream"], method: "摇和", glass: "小古典杯", strength: 3, diff: 2,
    ing: [["格拉帕 Grappa", "45 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["洋甘菊蜂蜜糖浆 Chamomile Honey Syrup", "15 ml"], ["洋甘菊浓糖浆 Chamomile Cordial", "15 ml"], ["蛋清 Egg White", "少许（可选）"]],
    steps: [
      "所有材料先干摇 10 秒（含蛋清时）。",
      "加冰摇和 12 秒，滤入加冰小古典杯。",
      "柠檬皮与白葡萄装饰。"
    ],
    gar: "柠檬皮 + 白葡萄",
    note: "IBA 的威尼斯现代经典。格拉帕的果渣香与洋甘菊、蜂蜜很合；没有洋甘菊 cordial 时，用浓洋甘菊茶与蜂蜜糖浆替代。",
    flavor: ["花香", "酸甜", "草本"],
    history: "Ve.N.To 由威尼斯调酒师在 2000 年代创作，名字来自 Veneto（威尼托）与威尼斯。它用白格拉帕、洋甘菊、蜂蜜与柠檬，把意大利北部的草本与果渣烈酒放进一杯酸酒；IBA 将其列入“新纪元”。",
    src: { type: "IBA", cat: "The New Era", url: "https://iba-world.com/iba-cocktail/ve-n-to/" },
    v: [
      { zh: "Ve.N.To Fizz", en: "Ve.N.To Fizz", how: "摇好后补 45 ml 苏打，变成长饮。", ing: [["格拉帕 Grappa", "45 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["洋甘菊蜂蜜糖浆 Chamomile Honey Syrup", "15 ml"], ["洋甘菊浓糖浆 Chamomile Cordial", "15 ml"], ["苏打水 Soda Water", "45 ml"]], method: "摇和", glass: "高球杯", note: "花香在气泡里更轻。" },
      { zh: "White Grape Ve.N.To", en: "White Grape Ve.N.To", how: "加入 6 颗白葡萄轻压，糖浆减 5 ml。", ing: [["格拉帕 Grappa", "45 ml"], ["柠檬汁 Lemon Juice", "22.5 ml"], ["洋甘菊蜂蜜糖浆 Chamomile Honey Syrup", "10 ml"], ["洋甘菊浓糖浆 Chamomile Cordial", "15 ml"], ["白葡萄 White Grape", "6 颗"]], method: "摇和", glass: "小古典杯", note: "葡萄的果香更明显，需双重过滤。" }
    ]
  }
];
