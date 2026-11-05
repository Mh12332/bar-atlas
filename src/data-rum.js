/* ============================================================
   配方库 · 朗姆酒与甘蔗酒
   ============================================================ */

const COCKTAILS_RUM = [
  {
    id: "daiquiri", zh: "大吉利", en: "Daiquiri", fam: "sour", base: "rum", sub: "白朗姆",
    mods: ["citrus", "syrup"], method: "摇和", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["白朗姆", "60 ml"], ["青柠汁", "25 ml"], ["单糖浆", "15 ml"]],
    steps: [
      "白朗姆、青柠汁与糖浆加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "青柠皮油装饰，或加一片薄青柠。"
    ],
    gar: "青柠皮",
    note: "大吉利是测试吧台功力的杯子：只有三种材料，青柠的新鲜度、糖浆浓度、摇和稀释全都藏不住。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Hemingway Daiquiri", "Hemingway Daiquiri", "加 20 ml 西柚汁与 10 ml 黑樱桃利口酒，减少糖浆，酸苦更复杂。"],
      ["Floridita Daiquiri", "Floridita Daiquiri", "加入 5 ml 黑樱桃利口酒，糖浆减到 10 ml，微甜。"],
      ["Banana Daiquiri", "Banana Daiquiri", "加 30 ml 香蕉利口酒或半根香蕉，搅打成冰沙。"],
      ["Frozen Daiquiri", "Frozen Daiquiri", "所有材料与 1 杯碎冰搅打，杯型加大，糖浆略增。" ]
    ]
  },
  {
    id: "hemingway-daiquiri", zh: "海明威大吉利", en: "Hemingway Daiquiri", fam: "sour", base: "rum", sub: "白朗姆",
    mods: ["citrus", "liqueur"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["白朗姆", "60 ml"], ["青柠汁", "15 ml"], ["西柚汁", "20 ml"], ["黑樱桃利口酒", "10 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "青柠皮或樱桃装饰。"
    ],
    gar: "青柠皮 / 樱桃",
    note: "原版为「Papa Doble」，糖几乎被拿掉，靠黑樱桃的甜与西柚的苦支撑。西柚要鲜榨，否则会水。",
    flavor: ["酸甜", "苦香", "花香"],
    v: [
      ["Papa Doble", "Papa Doble", "双倍份量，黑樱桃利口酒加到 15 ml，酒精度更高。"],
      ["Hemingway Fizz", "Hemingway Fizz", "摇好后补 45 ml 苏打，变成轻盈长饮。" ]
    ]
  },
  {
    id: "mojito", zh: "莫吉托", en: "Mojito", fam: "highball", base: "rum", sub: "白朗姆",
    mods: ["citrus", "syrup", "aromatic", "mixer"], method: "捣压", glass: "高球杯", strength: 2, diff: 2,
    ing: [["白朗姆", "45 ml"], ["青柠汁", "20 ml"], ["单糖浆", "15 ml"], ["薄荷叶", "8 片"], ["苏打水", "60 ml"]],
    steps: [
      "高球杯中放薄荷与糖浆，轻压 2 次，加入青柠汁。",
      "加满碎冰，倒入白朗姆，用吧勺提拉均匀。",
      "补满苏打水，轻提拉一次，薄荷枝与青柠角装饰。"
    ],
    gar: "薄荷枝 + 青柠角",
    note: "莫吉托不是「薄荷汽水」。薄荷只轻压，青柠要鲜榨，苏打最后加；碎冰让温度与稀释同时发生。",
    flavor: ["清爽", "酸甜", "草本"],
    v: [
      ["Mojito Cubano", "Mojito Cubano", "用德梅拉拉糖浆与更多薄荷，减少苏打，风味更浓。"],
      ["Raspberry Mojito", "Raspberry Mojito", "加入 6 颗覆盆子轻压，糖浆减 5 ml。"],
      ["Coconut Mojito", "Coconut Mojito", "加入 20 ml 椰奶油，苏打减半，热带质地。"],
      ["Virgin Mojito", "Virgin Mojito", "去掉朗姆，用 30 ml 青柠汁、20 ml 糖浆与苏打，补一小撮盐。" ]
    ]
  },
  {
    id: "caipirinha", zh: "卡琵莉亚", en: "Caipirinha", fam: "julep", base: "cane", sub: "卡莎萨",
    mods: ["citrus", "syrup"], method: "捣压", glass: "古典杯", strength: 4, diff: 1,
    ing: [["卡莎萨", "60 ml"], ["青柠", "1 个（切 8 块）"], ["砂糖", "2 茶匙"], ["碎冰", "满杯"]],
    steps: [
      "青柠洗净去芯，切 8 块放入古典杯，加砂糖。",
      "用捣棒轻压青柠与糖，释放汁液与皮油，不要捣烂果皮。",
      "加入卡莎萨与碎冰，搅拌均匀，补满碎冰。"
    ],
    gar: "青柠角",
    note: "糖是研磨剂，帮助提取青柠皮油；先压青柠与糖，再加酒与冰。用砂糖而非糖浆，口感更粗犷。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Caipiroska", "Caipiroska", "用伏特加替代卡莎萨，更中性。"],
      ["Caipirissima", "Caipirissima", "用白朗姆替代卡莎萨，甜感更明显。"],
      ["Passion Fruit Caipirinha", "Passion Fruit Caipirinha", "加入 20 ml 百香果糖浆，减少糖，热带酸香。" ]
    ]
  },
  {
    id: "mai-tai", zh: "迈泰", en: "Mai Tai", fam: "tiki", base: "rum", sub: "陈年朗姆",
    mods: ["citrus", "liqueur", "syrup"], method: "摇和", glass: "古典杯 / Tiki 杯", strength: 4, diff: 3,
    ing: [["陈年牙买加朗姆", "30 ml"], ["农业朗姆", "30 ml"], ["青柠汁", "20 ml"], ["橙味利口酒", "15 ml"], ["杏仁糖浆", "15 ml"]],
    steps: [
      "所有材料加冰摇和 12 秒。",
      "连冰倒入古典杯，或滤入加碎冰的 Tiki 杯。",
      "以薄荷枝、青柠壳与糖渍菠萝装饰。"
    ],
    gar: "薄荷 + 青柠壳 + 菠萝",
    note: "Mai Tai 的核心是「两种朗姆 + 青柠 + 杏仁 + 橙味利口酒」。不要加菠萝汁，那是后来的度假版。",
    flavor: ["热带", "酸甜", "花香"],
    v: [
      ["Royal Hawaiian Mai Tai", "Royal Hawaiian Mai Tai", "加入 30 ml 菠萝汁与 10 ml 石榴糖浆，更甜更度假。"],
      ["Mai Tai Swizzle", "Mai Tai Swizzle", "用碎冰与吧勺旋转搅拌，顶部加 151 朗姆。"],
      ["Jungle Bird", "Jungle Bird", "朗姆 + 金巴利 + 菠萝 + 青柠，苦味热带。" ]
    ]
  },
  {
    id: "zombie", zh: "僵尸", en: "Zombie", fam: "tiki", base: "rum", sub: "多款朗姆",
    mods: ["citrus", "syrup", "liqueur", "aromatic"], method: "摇和", glass: "Tiki 杯", strength: 5, diff: 3,
    ing: [["牙买加朗姆", "45 ml"], ["波多黎各金朗姆", "45 ml"], ["青柠汁", "20 ml"], ["西柚汁", "15 ml"], ["肉桂糖浆", "10 ml"], ["法勒南", "10 ml"], ["苦艾酒", "1 dash"], ["安高天娜", "1 dash"]],
    steps: [
      "除苦艾与苦精外全部材料加冰摇和 12 秒。",
      "连冰倒入 Tiki 杯，补碎冰。",
      "淋苦艾与苦精，薄荷枝装饰。"
    ],
    gar: "薄荷枝",
    note: "Zombie 是「酒精炸弹」，但平衡必须精确：甜、酸、香料、酒精四者缺一不可。不要给客人连续点第二杯。",
    flavor: ["热带", "辛香", "酸甜"],
    v: [
      ["Zombie 1934", "Zombie 1934", "使用 1934 年原版比例：多种朗姆、百香果、肉桂、石榴与苦艾。"],
      ["Jungle Bird", "Jungle Bird", "朗姆 + 金巴利 + 菠萝 + 青柠，苦味版热带。" ]
    ]
  },
  {
    id: "jungle-bird", zh: "丛林鸟", en: "Jungle Bird", fam: "tiki", base: "rum", sub: "黑朗姆",
    mods: ["citrus", "juice", "amaro", "syrup"], method: "摇和", glass: "古典杯", strength: 4, diff: 2,
    ing: [["黑朗姆", "45 ml"], ["金巴利", "20 ml"], ["菠萝汁", "45 ml"], ["青柠汁", "15 ml"], ["单糖浆", "15 ml"]],
    steps: [
      "所有材料加冰摇和 12 秒。",
      "双重过滤入加冰古典杯。",
      "菠萝叶与橙皮装饰。"
    ],
    gar: "菠萝叶 + 橙皮",
    note: "1978 年吉隆坡希尔顿的创作。金巴利的苦与菠萝的甜酸意外合拍；菠萝汁要鲜榨，才有泡沫与酸度。",
    flavor: ["热带", "苦香", "酸甜"],
    v: [
      ["Jungle Bird Bianco", "Jungle Bird Bianco", "用白朗姆与 Suze，减少糖浆，更清亮干苦。"],
      ["Jungle Bird Sour", "Jungle Bird Sour", "加入 20 ml 蛋清，口感更绵密。" ]
    ]
  },
  {
    id: "painkiller", zh: "止痛药", en: "Painkiller", fam: "tiki", base: "rum", sub: "黑朗姆",
    mods: ["juice", "cream", "aromatic"], method: "摇和", glass: "Tiki 杯 / 高球杯", strength: 3, diff: 2,
    ing: [["黑朗姆", "60 ml"], ["菠萝汁", "60 ml"], ["橙汁", "30 ml"], ["椰奶油", "30 ml"], ["现磨肉豆蔻", "适量"]],
    steps: [
      "所有液体加冰摇和 12 秒。",
      "连冰倒入 Tiki 杯或高球杯，补碎冰。",
      "现磨肉豆蔻厚厚一层。"
    ],
    gar: "肉豆蔻 + 菠萝叶",
    note: "椰奶油很甜，菠萝与橙汁的酸度必须够。肉豆蔻是灵魂，现磨与预磨粉是两杯酒。",
    flavor: ["热带", "奶滑", "酸甜"],
    v: [
      ["Piña Colada", "Piña Colada", "去掉橙汁，增加椰奶油，搅打成冰沙。"],
      ["Painkiller No. 2", "Painkiller No. 2", "加入 15 ml 椰子朗姆，减少椰奶油，酒感更强。"],
      ["Chi Chi", "Chi Chi", "用伏特加替代朗姆，更中性。" ]
    ]
  },
  {
    id: "pina-colada", zh: "椰林飘香", en: "Piña Colada", fam: "blended", base: "rum", sub: "白朗姆 / 黑朗姆",
    mods: ["juice", "cream"], method: "搅拌机", glass: "飓风杯 / Tiki 杯", strength: 2, diff: 1,
    ing: [["朗姆", "50 ml"], ["菠萝汁", "60 ml"], ["椰奶油", "30 ml"], ["青柠汁", "10 ml"], ["碎冰", "1 杯"]],
    steps: [
      "所有液体与碎冰放入搅拌机。",
      "高速搅打 15–20 秒，直到质地均匀、无大冰粒。",
      "倒入冰镇飓风杯，菠萝角与樱桃装饰。"
    ],
    gar: "菠萝角 + 樱桃",
    note: "椰奶油甜度高，青柠是必要的平衡。冰量决定质地：先少冰，再补，避免变成冰水。",
    flavor: ["热带", "奶滑", "酸甜"],
    v: [
      ["Chi Chi", "Chi Chi", "用伏特加替代朗姆，更干净。"],
      ["Lava Flow", "Lava Flow", "杯底加草莓糖浆，倒入椰林飘香，形成分层。"],
      ["Virgin Piña Colada", "Virgin Piña Colada", "去掉朗姆，用菠萝汁与椰奶油，加一小撮盐。" ]
    ]
  },
  {
    id: "navy-grog", zh: "海军格罗格", en: "Navy Grog", fam: "tiki", base: "rum", sub: "多款朗姆",
    mods: ["citrus", "syrup", "aromatic"], method: "摇和", glass: "Tiki 杯", strength: 5, diff: 3,
    ing: [["牙买加朗姆", "30 ml"], ["德梅拉拉朗姆", "30 ml"], ["青柠汁", "20 ml"], ["西柚汁", "20 ml"], ["蜂蜜糖浆", "15 ml"], ["多香果利口酒", "5 ml"]],
    steps: [
      "所有材料加冰摇和 12 秒。",
      "滤入加碎冰的 Tiki 杯。",
      "青柠壳与薄荷装饰，可加一小段肉桂。"
    ],
    gar: "青柠壳 + 肉桂",
    note: "海军格罗格是 Tiki 的「干型」代表：西柚的苦、青柠的酸、蜂蜜的圆，三种朗姆提供厚度。",
    flavor: ["热带", "苦香", "辛香"],
    v: [
      ["Navy Grog 1941", "Navy Grog 1941", "使用三种朗姆与蜂蜜、西柚、青柠，比例更复杂。"],
      ["Planters Punch", "Planter's Punch", "黑朗姆 + 青柠 + 糖浆 + 苦精，更长饮。" ]
    ]
  },
  {
    id: "hurricane", zh: "飓风", en: "Hurricane", fam: "tiki", base: "rum", sub: "黑朗姆 / 陈年朗姆",
    mods: ["citrus", "syrup"], method: "摇和", glass: "飓风杯", strength: 4, diff: 1,
    ing: [["黑朗姆", "60 ml"], ["百香果糖浆", "30 ml"], ["柠檬汁", "20 ml"], ["橙片", "1 片"]],
    steps: [
      "黑朗姆、百香果糖浆与柠檬汁加冰摇和 12 秒。",
      "连冰倒入飓风杯，补碎冰。",
      "橙片与樱桃装饰。"
    ],
    gar: "橙片 + 樱桃",
    note: "新奥尔良的经典。百香果糖浆的甜酸决定整杯酒的平衡；如果糖浆太甜，柠檬加到 25 ml。",
    flavor: ["热带", "酸甜"],
    v: [
      ["Hurricane Royale", "Hurricane Royale", "补 60 ml 起泡酒，降低甜度，增加气泡。"],
      ["Passion Fruit Daiquiri", "Passion Fruit Daiquiri", "白朗姆 + 百香果 + 青柠，更清爽。" ]
    ]
  },
  {
    id: "planters-punch", zh: "种植者潘趣", en: "Planter's Punch", fam: "punch", base: "rum", sub: "黑朗姆",
    mods: ["citrus", "syrup", "bitters", "mixer"], method: "摇和", glass: "高球杯", strength: 3, diff: 1,
    ing: [["黑朗姆", "60 ml"], ["青柠汁", "30 ml"], ["德梅拉拉糖浆", "22.5 ml"], ["安高天娜苦精", "2 dash"], ["苏打水", "30 ml"]],
    steps: [
      "除苏打外全部材料加冰摇和 10–12 秒。",
      "滤入加冰高球杯，补少量苏打。",
      "橙片、菠萝叶与樱桃装饰。"
    ],
    gar: "橙片 + 菠萝叶 + 樱桃",
    note: "潘趣的 1:2:3:4 是骨架，不是死板配方。这里用摇和缩短稀释，再补一点苏打拉长。",
    flavor: ["热带", "酸甜", "苦香"],
    v: [
      ["Jamaican Planter's Punch", "Jamaican Planter's Punch", "用高酯牙买加朗姆，加 5 ml 法勒南，风味更野。"],
      ["Trinidad Punch", "Trinidad Punch", "加入 15 ml 椰子水与 2 dash 苦精，更清爽。" ]
    ]
  },
  {
    id: "dark-n-stormy", zh: "暗黑风暴", en: "Dark 'n' Stormy", fam: "highball", base: "rum", sub: "黑朗姆",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["黑朗姆", "60 ml"], ["姜啤", "100 ml"], ["青柠汁", "10 ml"]],
    steps: [
      "高球杯加满冰，倒入青柠汁与黑朗姆。",
      "沿吧勺注入姜啤，轻提拉一次。",
      "青柠角装饰。"
    ],
    gar: "青柠角",
    note: "Gosling's 黑朗姆与姜啤的组合是经典。姜啤要辛辣，不要用甜姜汁汽水；青柠负责提亮。",
    flavor: ["清爽", "辛香"],
    v: [
      ["Dark 'n' Stormy Float", "Dark 'n' Stormy Float", "顶部漂浮 15 ml Overproof 朗姆，酒感更强。"],
      ["Moscow Mule", "Moscow Mule", "伏特加 + 姜啤 + 青柠，更中性。" ]
    ]
  },
  {
    id: "cuba-libre", zh: "自由古巴", en: "Cuba Libre", fam: "highball", base: "rum", sub: "白朗姆 / 金朗姆",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["朗姆", "50 ml"], ["可乐", "100 ml"], ["青柠汁", "10 ml"]],
    steps: [
      "高球杯加满冰，倒入朗姆与青柠汁。",
      "补满冰镇可乐，轻提拉。",
      "青柠角装饰。"
    ],
    gar: "青柠角",
    note: "自由古巴的关键是青柠：没有青柠就是朗姆可乐。可乐的焦糖与磷酸需要青柠的酸来平衡。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Cuba Libre Criollo", "Cuba Libre Criollo", "用陈年朗姆，加 2 dash 苦精，更复杂。"],
      ["Batanga", "Batanga", "龙舌兰 + 可乐 + 青柠 + 盐口，墨西哥版。" ]
    ]
  },
  {
    id: "el-presidente", zh: "总统", en: "El Presidente", fam: "duo", base: "rum", sub: "白朗姆",
    mods: ["vermouth", "liqueur", "syrup"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["白朗姆", "45 ml"], ["干味美思", "20 ml"], ["橙味利口酒", "10 ml"], ["石榴糖浆", "5 ml"]],
    steps: [
      "所有液体加冰搅拌 20 秒。",
      "滤入冰镇碟形杯。",
      "橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "哈瓦那的经典，干味美思让白朗姆变得优雅。石榴糖浆只需 5 ml，负责颜色与一丝红果甜。",
    flavor: ["温暖", "花香", "苦香"],
    v: [
      ["El Presidente Perfecto", "El Presidente Perfecto", "干、甜味美思各 10 ml，加 1 dash 橙味苦精。"],
      ["Mary Pickford", "Mary Pickford", "白朗姆 + 菠萝 + 黑樱桃 + 石榴，果香版。" ]
    ]
  },
  {
    id: "mary-pickford", zh: "玛丽·碧克馥", en: "Mary Pickford", fam: "sour", base: "rum", sub: "白朗姆",
    mods: ["juice", "liqueur", "syrup"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["白朗姆", "45 ml"], ["菠萝汁", "30 ml"], ["黑樱桃利口酒", "7.5 ml"], ["石榴糖浆", "5 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "樱桃装饰。"
    ],
    gar: "酒渍樱桃",
    note: "1920 年代哈瓦那的创作。菠萝的酸与黑樱桃的甜需要石榴糖浆补色补甜，但别超过 5 ml。",
    flavor: ["热带", "酸甜", "花香"],
    v: [
      ["Mary Pickford Fizz", "Mary Pickford Fizz", "摇好后补 45 ml 苏打，更轻盈。"],
      ["Pisco Punch", "Pisco Punch", "皮斯科 + 菠萝 + 青柠 + 糖浆，类似结构。" ]
    ]
  },
  {
    id: "rum-old-fashioned", zh: "朗姆古典", en: "Rum Old Fashioned", fam: "old-fashioned", base: "rum", sub: "陈年朗姆",
    mods: ["syrup", "bitters", "aromatic"], method: "搅拌", glass: "古典杯", strength: 4, diff: 1,
    ing: [["陈年朗姆", "60 ml"], ["德梅拉拉糖浆", "5 ml"], ["橙味苦精", "2 dash"], ["橙皮", "1 片"]],
    steps: [
      "古典杯加大冰，搅拌杯加冰。",
      "朗姆、糖浆与苦精搅拌 20 秒。",
      "滤入杯中，橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "陈年朗姆的焦糖与香草已经带甜，糖浆只需 5 ml。高酯朗姆会有强烈的香蕉与凤梨香，适合这杯。",
    flavor: ["温暖", "花香", "苦香"],
    v: [
      ["Tiki Old Fashioned", "Tiki Old Fashioned", "加 5 ml 法勒南与 1 dash 苦精，热带香料版。"],
      ["Oaxaca Old Fashioned", "Oaxaca Old Fashioned", "龙舌兰 + 梅斯卡尔，龙舌兰糖浆与莫尔苦精。" ]
    ]
  },
  {
    id: "tia-mia", zh: "蒂亚米娅", en: "Tia Mia", fam: "tiki", base: "rum", sub: "朗姆 + 梅斯卡尔",
    mods: ["citrus", "liqueur", "syrup"], method: "摇和", glass: "古典杯", strength: 4, diff: 2,
    ing: [["梅斯卡尔", "30 ml"], ["牙买加朗姆", "30 ml"], ["青柠汁", "20 ml"], ["杏仁糖浆", "15 ml"], ["橙味利口酒", "10 ml"]],
    steps: [
      "所有材料加冰摇和 12 秒。",
      "连冰倒入古典杯，补碎冰。",
      "薄荷与青柠壳装饰。"
    ],
    gar: "薄荷 + 青柠壳",
    note: "Mai Tai 的梅斯卡尔变体。烟熏与杏仁的坚果香很合拍；朗姆要选有 funk 的牙买加款。",
    flavor: ["热带", "苦香", "花香"],
    v: [
      ["Mai Tai", "Mai Tai", "去掉梅斯卡尔，使用两种朗姆，更经典。"],
      ["Naked and Famous", "Naked and Famous", "梅斯卡尔 + Aperol + 黄查特 + 青柠，苦甜版。" ]
    ]
  }
];
