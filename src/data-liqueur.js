/* ============================================================
   配方库 · 利口酒主导
   ============================================================ */

const COCKTAILS_LIQUEUR = [
  {
    id: "amaretto-sour", zh: "杏仁酸", en: "Amaretto Sour", fam: "sour", base: "liqueur", sub: "杏仁利口酒",
    mods: ["citrus", "syrup", "cream", "bitters"], method: "摇和", glass: "古典杯 / 碟形杯", strength: 3, diff: 2,
    ing: [["杏仁利口酒 Amaretto", "45 ml"], ["高酒精度波本 High-Proof Bourbon", "30 ml"], ["柠檬汁 Lemon Juice", "30 ml"], ["浓糖浆 Rich Syrup", "5 ml"], ["蛋清 Egg White", "20 ml"], ["安高天娜苦精 Angostura Bitters", "2 dash"]],
    steps: [
      "除苦精外全部材料先干摇 15 秒。",
      "加冰摇和 12 秒，双重过滤入加冰古典杯。",
      "泡沫上点苦精，柠檬皮装饰。"
    ],
    gar: "柠檬皮 + 苦精点纹",
    note: "Morganthaler 的现代版用高酒精度波本压住杏仁的甜，这是关键。只用杏仁利口酒会像糖浆；蛋清让质地变高级。",
    flavor: ["酸甜", "奶滑", "花香"],
    v: [
      ["Amaretto Sour Classic", "Amaretto Sour Classic", "杏仁利口酒 60 ml + 柠檬 30 ml + 糖浆 10 ml，无波本，更甜。"],
      ["Godfather", "Godfather", "苏格兰 + 杏仁利口酒，加冰直调。"],
      ["French Connection", "French Connection", "干邑 + 杏仁利口酒，更柔。" ]
    ]
  },
  {
    id: "grasshopper", zh: "蚱蜢", en: "Grasshopper", fam: "flip", base: "liqueur", sub: "薄荷利口酒",
    mods: ["coffee", "cream"], method: "摇和", glass: "碟形杯", strength: 2, diff: 1,
    ing: [["绿薄荷利口酒 Green Crème de Menthe", "20 ml"], ["白可可利口酒 White Cacao Liqueur", "20 ml"], ["淡奶油 Heavy Cream", "30 ml"], ["薄荷 Mint", "1 片"]],
    steps: [
      "所有液体加冰摇和 12 秒。",
      "双重过滤入冰镇碟形杯。",
      "薄荷叶或可可粉装饰。"
    ],
    gar: "薄荷叶 / 可可粉",
    note: "甜点型鸡尾酒。薄荷与可可的比例可以 1:1，但奶油要够冷；怕甜可把奶油加到 40 ml、利口酒各减 5 ml。",
    flavor: ["奶滑", "咖啡", "草本"],
    v: [
      ["Flying Grasshopper", "Flying Grasshopper", "加入 20 ml 伏特加，降低甜度，提高酒精度。"],
      ["Brandy Alexander", "Brandy Alexander", "干邑 + 白可可 + 奶油，坚果与葡萄香。"],
      ["Golden Cadillac", "Golden Cadillac", "Galliano + 白可可 + 奶油，香草与茴香。" ]
    ]
  },
  {
    id: "golden-cadillac", zh: "金色凯迪拉克", en: "Golden Cadillac", fam: "flip", base: "liqueur", sub: "Galliano",
    mods: ["coffee", "cream"], method: "摇和", glass: "碟形杯", strength: 2, diff: 1,
    ing: [["Galliano", "20 ml"], ["白可可利口酒 White Cacao Liqueur", "20 ml"], ["淡奶油 Heavy Cream", "30 ml"], ["肉豆蔻 Nutmeg", "现磨"]],
    steps: [
      "所有液体加冰摇和 12 秒。",
      "双重过滤入冰镇碟形杯。",
      "现磨肉豆蔻装饰。"
    ],
    gar: "现磨肉豆蔻",
    note: "Galliano 的香草、茴香与白可可很搭。甜度高，杯型要小；肉豆蔻是必要的辛香。",
    flavor: ["奶滑", "花香", "咖啡"],
    v: [
      ["Golden Dream", "Golden Dream", "Galliano + 君度 + 橙汁 + 奶油，柑橘版。"],
      ["Grasshopper", "Grasshopper", "薄荷 + 白可可 + 奶油，绿色版。" ]
    ]
  },
  {
    id: "garibaldi", zh: "加里波第", en: "Garibaldi", fam: "highball", base: "liqueur", sub: "金巴利",
    mods: ["juice"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["金巴利 Campari", "45 ml"], ["橙汁 Orange Juice", "120 ml"], ["橙片 Orange Wheel", "1 片"]],
    steps: [
      "高球杯加满冰，倒入金巴利。",
      "加入鲜榨橙汁，用吧勺充分搅拌，让橙汁打出一点空气感。",
      "橙片装饰；如使用搅拌机短暂打 3 秒，质地更蓬松。"
    ],
    gar: "橙片",
    note: "只有两种材料，橙汁品质决定一切。鲜榨、带果肉、充分搅拌出泡沫，是这杯酒的关键。",
    flavor: ["苦香", "清爽", "酸甜"],
    v: [
      ["Garibaldi Fizz", "Garibaldi Fizz", "补 30 ml 苏打，气泡更轻。"],
      ["Aperol Spritz", "Aperol Spritz", "Aperol + 起泡酒 + 苏打，低酒精开胃。" ]
    ]
  },
  {
    id: "americano", zh: "美国佬", en: "Americano", fam: "aperitivo", base: "liqueur", sub: "金巴利 + 味美思",
    mods: ["vermouth", "amaro", "mixer"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["金巴利 Campari", "30 ml"], ["甜味美思 Sweet Vermouth", "30 ml"], ["苏打水 Soda Water", "60 ml"], ["橙片 Orange Wheel", "1 片"]],
    steps: [
      "高球杯加满冰，倒入金巴利与甜味美思。",
      "补满冰镇苏打水，轻提拉一次。",
      "橙片装饰。"
    ],
    gar: "橙片",
    note: "内格罗尼的前身之一，低酒精、苦甜、气泡。甜味美思的品质决定上限；不要用太多苏打冲淡。",
    flavor: ["苦香", "清爽", "草本"],
    v: [
      ["Americano Perfecto", "Americano Perfecto", "甜、干味美思各 15 ml，更干。"],
      ["Negroni Sbagliato", "Negroni Sbagliato", "用起泡酒替代苏打，酒体更丰富。" ],
      ["Milano-Torino", "Milano-Torino", "金巴利 + 甜味美思 1:1，不加苏打，更浓。" ]
    ]
  }
];
