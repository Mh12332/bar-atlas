/* ============================================================
   配方库 · 葡萄酒、加强酒与起泡酒
   ============================================================ */

const COCKTAILS_WINE = [
  {
    id: "aperol-spritz", zh: "阿佩罗橙光", en: "Aperol Spritz", fam: "aperitivo", base: "wine", sub: "Prosecco",
    mods: ["liqueur", "mixer"], method: "直调", glass: "大葡萄酒杯", strength: 1, diff: 1,
    ing: [["Prosecco", "90 ml"], ["Aperol", "60 ml"], ["苏打水", "30 ml"], ["橙片", "1 片"]],
    steps: [
      "大葡萄酒杯加满冰，先倒入冰镇 Prosecco。",
      "加入 Aperol，再补苏打水。",
      "轻提拉一次，橙片装饰；不要用力搅拌。"
    ],
    gar: "橙片",
    note: "3:2:1 是记忆锚点。先倒起泡酒再倒 Aperol，能保留更多气泡；冰要满，杯子要大。",
    flavor: ["苦香", "清爽", "花香"],
    v: [
      ["Aperol Spritz 2.0", "Aperol Spritz 2.0", "Aperol 减到 45 ml，补 15 ml 葡萄柚苏打，更干。"],
      ["Campari Spritz", "Campari Spritz", "用金巴利替代 Aperol，苦味更强。"],
      ["Sbagliato", "Negroni Sbagliato", "金巴利 + 甜味美思 + Prosecco，酒精更强。" ]
    ]
  },
  {
    id: "sbagliato", zh: "错误内格罗尼", en: "Negroni Sbagliato", fam: "aperitivo", base: "wine", sub: "Prosecco",
    mods: ["vermouth", "amaro", "mixer"], method: "直调", glass: "古典杯 / 葡萄酒杯", strength: 2, diff: 1,
    ing: [["金巴利", "30 ml"], ["甜味美思", "30 ml"], ["Prosecco", "60 ml"], ["橙片", "1 片"]],
    steps: [
      "古典杯或葡萄酒杯加满冰。",
      "倒入金巴利与甜味美思，搅拌 8 秒。",
      "补入冰镇 Prosecco，轻提拉，橙片装饰。"
    ],
    gar: "橙片",
    note: "「Sbagliato」意为「搞错了」：把内格罗尼的金酒换成了起泡酒。气泡让苦甜更轻，但酒精度仍不低。",
    flavor: ["苦香", "清爽", "花香"],
    v: [
      ["Sbagliato Rosso", "Sbagliato Rosso", "用 Rosé Prosecco，果香更柔。"],
      ["Americano", "Americano", "用苏打替代起泡酒，更低酒精。" ]
    ]
  },
  {
    id: "sherry-cobbler", zh: "雪莉库布勒", en: "Sherry Cobbler", fam: "punch", base: "wine", sub: "Amontillado 雪莉",
    mods: ["syrup", "citrus", "aromatic"], method: "直调", glass: "大葡萄酒杯 / 高球杯", strength: 1, diff: 1,
    ing: [["Amontillado 雪莉", "90 ml"], ["单糖浆", "15 ml"], ["柠檬汁", "10 ml"], ["橙片", "2 片"], ["当季莓果", "3 颗"], ["碎冰", "满杯"]],
    steps: [
      "杯中放入橙片与莓果，加糖浆与柠檬汁轻压。",
      "倒入雪莉，加入碎冰至满。",
      "用吧勺上下提拉，让冰与酒充分融合，薄荷与莓果装饰。"
    ],
    gar: "薄荷 + 莓果 + 橙片",
    note: "19 世纪最流行的鸡尾酒之一。雪莉的坚果与咸香需要柠檬与糖拉起；碎冰是质地的一部分。",
    flavor: ["清爽", "花香", "苦香"],
    v: [
      ["Sherry Cobbler Royale", "Sherry Cobbler Royale", "补 60 ml 起泡酒，降低甜度。"],
      ["Bamboo", "Bamboo", "雪莉 + 干味美思 + 苦精，短饮版。" ]
    ]
  },
  {
    id: "bamboo", zh: "竹子", en: "Bamboo", fam: "duo", base: "wine", sub: "Fino 雪莉",
    mods: ["vermouth", "bitters"], method: "搅拌", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["Fino 雪莉", "45 ml"], ["干味美思", "45 ml"], ["橙味苦精", "2 dash"], ["安高天娜", "1 dash"], ["柠檬皮", "1 片"]],
    steps: [
      "所有液体加冰搅拌 20–25 秒。",
      "滤入冰镇碟形杯。",
      "柠檬皮油装饰。"
    ],
    gar: "柠檬皮",
    note: "日本调酒师推广的经典。Fino 的咸鲜与干味美思的草本很合；不要用甜雪莉替代，会完全变味。",
    flavor: ["草本", "苦香", "清爽"],
    v: [
      ["Bamboo Perfecto", "Bamboo Perfecto", "用 30 ml Fino + 30 ml 干味美思 + 30 ml 甜味美思，更圆。"],
      ["Adonis", "Adonis", "Fino + 甜味美思 + 橙味苦精，更甜。" ]
    ]
  },
  {
    id: "adonis", zh: "阿多尼斯", en: "Adonis", fam: "duo", base: "wine", sub: "Fino 雪莉",
    mods: ["vermouth", "bitters"], method: "搅拌", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["Fino 雪莉", "45 ml"], ["甜味美思", "30 ml"], ["橙味苦精", "2 dash"], ["橙皮", "1 片"]],
    steps: [
      "所有液体加冰搅拌 20 秒。",
      "滤入冰镇碟形杯。",
      "橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "1890 年代纽约的经典。甜味美思的圆润与 Fino 的咸鲜形成对比；酒精度低，适合作为第一杯。",
    flavor: ["苦香", "温暖", "花香"],
    v: [
      ["Adonis Perfecto", "Adonis Perfecto", "甜、干味美思各 15 ml，更干。"],
      ["Bamboo", "Bamboo", "用干味美思替代甜味美思，更清爽。" ]
    ]
  },
  {
    id: "vermouth-tonic", zh: "味美思汤力", en: "Vermouth & Tonic", fam: "highball", base: "wine", sub: "干味美思",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯 / Copa 杯", strength: 1, diff: 1,
    ing: [["干味美思", "60 ml"], ["汤力水", "120 ml"], ["橙皮", "1 片"], ["迷迭香", "1 枝（可选）"]],
    steps: [
      "杯中加满冰，倒入干味美思。",
      "补满冰镇汤力水，轻提拉。",
      "橙皮油与迷迭香装饰。"
    ],
    gar: "橙皮 + 迷迭香",
    note: "低酒精开胃酒。干味美思的草本与奎宁苦很搭；甜味美思则适合搭配西柚与苏打。",
    flavor: ["清爽", "苦香", "草本"],
    v: [
      ["Sweet Vermouth Tonic", "Sweet Vermouth Tonic", "用甜味美思，加西柚片与迷迭香，甜苦更浓。"],
      ["White Port Tonic", "White Port Tonic", "用白波特替代味美思，坚果与蜂蜜香。" ]
    ]
  },
  {
    id: "kir-royale", zh: "皇家基尔", en: "Kir Royale", fam: "aperitivo", base: "wine", sub: "起泡酒",
    mods: ["liqueur", "mixer"], method: "直调", glass: "香槟杯", strength: 1, diff: 1,
    ing: [["黑加仑利口酒", "15 ml"], ["香槟 / 起泡酒", "120 ml"]],
    steps: [
      "香槟杯冰镇，倒入黑加仑利口酒。",
      "缓慢补入冰镇起泡酒。",
      "轻提拉一次，可加一颗黑加仑或柠檬皮。"
    ],
    gar: "黑加仑 / 柠檬皮",
    note: "勃艮第的经典。黑加仑的酸与果香能穿透气泡；15 ml 足够，倒多了会甜。",
    flavor: ["清爽", "酸甜", "花香"],
    v: [
      ["Kir", "Kir", "用勃艮第白葡萄酒替代起泡酒，更低酒精。"],
      ["Bellini", "Bellini", "用白桃果泥替代黑加仑，更柔。" ]
    ]
  },
  {
    id: "bellini", zh: "贝里尼", en: "Bellini", fam: "aperitivo", base: "wine", sub: "Prosecco",
    mods: ["juice", "mixer"], method: "直调", glass: "香槟杯", strength: 1, diff: 1,
    ing: [["白桃果泥", "50 ml"], ["Prosecco", "100 ml"], ["柠檬汁", "5 ml（可选）"]],
    steps: [
      "白桃果泥与柠檬汁（如用）倒入冰镇香槟杯。",
      "缓慢补入冰镇 Prosecco，轻搅一次。",
      "桃片装饰。"
    ],
    gar: "桃片",
    note: "威尼斯 Harry's Bar 的创作。白桃果泥要熟、要细；如果桃子不够甜，加 5 ml 糖浆，不要加太多。",
    flavor: ["清爽", "花香", "酸甜"],
    v: [
      ["Bellini Rossini", "Bellini Rossini", "用草莓果泥替代白桃，颜色与酸度更强。"],
      ["Mimosa", "Mimosa", "用橙汁替代桃泥，更日常。" ]
    ]
  },
  {
    id: "mimosa", zh: "含羞草", en: "Mimosa", fam: "aperitivo", base: "wine", sub: "起泡酒",
    mods: ["juice", "mixer"], method: "直调", glass: "香槟杯", strength: 1, diff: 1,
    ing: [["橙汁", "60 ml"], ["香槟 / 起泡酒", "120 ml"], ["橙片", "1 片"]],
    steps: [
      "香槟杯冰镇，倒入冰镇鲜榨橙汁。",
      "缓慢补入起泡酒，轻提拉一次。",
      "橙片装饰。"
    ],
    gar: "橙片",
    note: "早午餐的标配。橙汁要鲜榨、去籽；起泡酒选干型，否则会甜。比例可按 1:2 到 1:1 调整。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Grand Mimosa", "Grand Mimosa", "加 10 ml 君度，橙香更浓。"],
      ["Poinsettia", "Poinsettia", "用蔓越莓汁替代橙汁，加 5 ml 君度。" ]
    ]
  },
  {
    id: "death-in-the-afternoon", zh: "午后之死", en: "Death in the Afternoon", fam: "aperitivo", base: "wine", sub: "香槟",
    mods: ["aromatic", "mixer"], method: "直调", glass: "香槟杯", strength: 3, diff: 1,
    ing: [["苦艾酒", "15 ml"], ["香槟", "120 ml"], ["柠檬皮", "1 片（可选）"]],
    steps: [
      "香槟杯冰镇，倒入苦艾酒。",
      "缓慢补入冰镇香槟。",
      "不加冰，柠檬皮油可选；饮用前轻搅。"
    ],
    gar: "柠檬皮（可选）",
    note: "海明威的配方。苦艾的茴香与香槟的酸很搭，但苦艾量要克制；15 ml 是上限。",
    flavor: ["草本", "清爽", "花香"],
    v: [
      ["Death in the Afternoon No. 2", "Death in the Afternoon No. 2", "苦艾减到 10 ml，加 5 ml 糖浆，平衡茴香。"],
      ["Absinthe Frappé", "Absinthe Frappé", "苦艾 + 糖浆 + 苏打 + 碎冰，茴香更强。" ]
    ]
  },
  {
    id: "champagne-cocktail", zh: "香槟鸡尾酒", en: "Champagne Cocktail", fam: "aperitivo", base: "wine", sub: "香槟",
    mods: ["syrup", "bitters", "mixer"], method: "直调", glass: "香槟杯", strength: 2, diff: 1,
    ing: [["方糖", "1 块"], ["安高天娜苦精", "2 dash"], ["香槟", "120 ml"], ["柠檬皮", "1 片"]],
    steps: [
      "方糖放入香槟杯，滴上苦精，静置 1 分钟让其渗透。",
      "缓慢补入冰镇香槟。",
      "柠檬皮油装饰，饮用前轻搅。"
    ],
    gar: "柠檬皮",
    note: "方糖与苦精是这杯酒的核心：苦精浸透方糖，香槟慢慢溶解它。不要用糖浆替代，口感和气泡都不同。",
    flavor: ["苦香", "清爽", "花香"],
    v: [
      ["Champagne Cocktail Royale", "Champagne Cocktail Royale", "加入 10 ml 干邑，酒体更厚。"],
      ["Kir Royale", "Kir Royale", "用黑加仑利口酒替代方糖与苦精，果香版。" ]
    ]
  }
];
