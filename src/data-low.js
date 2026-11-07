/* ============================================================
   配方库 · 低酒精与无酒精
   ============================================================ */

const COCKTAILS_LOW = [
  {
    id: "virgin-mojito", zh: "无酒精莫吉托", en: "Virgin Mojito", fam: "low-no", base: "low", sub: "无酒精",
    mods: ["citrus", "syrup", "aromatic", "mixer"], method: "捣压", glass: "高球杯", strength: 1, diff: 1,
    ing: [["青柠汁 Lime Juice", "30 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["薄荷 Mint", "10 片"], ["苏打水 Soda Water", "120 ml"], ["盐 Salt", "1 小撮"]],
    steps: [
      "薄荷与糖浆轻压 2 次，加入青柠汁与一小撮盐。",
      "加满碎冰，注入苏打水。",
      "用吧勺上下提拉，薄荷枝与青柠角装饰。"
    ],
    gar: "薄荷枝 + 青柠角",
    note: "没有酒精，酸、甜、盐、气泡必须更精确。盐能提升青柠与薄荷的香气；不要用雪碧替代苏打。",
    flavor: ["清爽", "酸甜", "草本"],
    v: [
      ["Virgin Raspberry Mojito", "Virgin Raspberry Mojito", "加入 5 颗覆盆子轻压，糖浆减 5 ml。"],
      ["Cucumber Mint Cooler", "Cucumber Mint Cooler", "加入 3 片黄瓜，青柠减 5 ml，更清爽。" ]
    ]
  },
  {
    id: "phony-negroni", zh: "仿制内格罗尼", en: "Phony Negroni", fam: "low-no", base: "low", sub: "无酒精",
    mods: ["vermouth", "amaro", "aromatic"], method: "搅拌", glass: "古典杯", strength: 1, diff: 2,
    ing: [["无酒精金酒 Non-Alcoholic Gin", "30 ml"], ["无酒精金巴利 Non-Alcoholic Campari", "30 ml"], ["无酒精味美思 Non-Alcoholic Vermouth", "30 ml"], ["橙皮 Orange Peel", "1 片"]],
    steps: [
      "古典杯加大冰预冷。",
      "所有无酒精材料加冰搅拌 20 秒。",
      "滤入杯中，橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "无酒精版最难的是「苦味与重量」。选择有奎宁、龙胆或苦根的无酒精产品；如果太甜，加 2 dash 苦精（注意含酒精）。",
    flavor: ["苦香", "草本", "温暖"],
    v: [
      ["Phony Spritz", "Phony Spritz", "补 90 ml 无酒精起泡酒与 30 ml 苏打，变成开胃长饮。"],
      ["Bitter Tonic", "Bitter Tonic", "无酒精苦味酒 60 ml + 汤力水 120 ml + 橙皮。" ]
    ]
  },
  {
    id: "cold-brew-tonic", zh: "冷萃汤力", en: "Cold Brew Tonic", fam: "low-no", base: "low", sub: "无酒精",
    mods: ["coffee", "mixer", "aromatic"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["冷萃咖啡 Cold Brew Coffee", "90 ml"], ["汤力水 Tonic Water", "120 ml"], ["橙皮 Orange Peel", "1 片"], ["单糖浆 Simple Syrup", "5 ml（可选）"]],
    steps: [
      "高球杯加满冰，倒入冷萃咖啡与糖浆（如用）。",
      "沿吧勺注入冰镇汤力水。",
      "橙皮油装饰，轻提拉一次。"
    ],
    gar: "橙皮",
    note: "咖啡的烘焙苦与奎宁的苦互相叠加，橙皮是必要的香气桥梁。冷萃要浓，否则会被汤力水冲淡。",
    flavor: ["咖啡", "苦香", "清爽"],
    v: [
      ["Cold Brew Tonic Float", "Cold Brew Tonic Float", "顶部加 20 ml 椰奶油，形成分层。"],
      ["Espresso Tonic", "Espresso Tonic", "用 30 ml 浓缩咖啡 + 120 ml 汤力水，气泡与油脂更明显。" ]
    ]
  },
  {
    id: "shirley-temple", zh: "秀兰·邓波儿", en: "Shirley Temple", fam: "low-no", base: "low", sub: "无酒精",
    mods: ["syrup", "mixer", "citrus"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["石榴糖浆 Grenadine", "15 ml"], ["姜啤 Ginger Beer", "120 ml"], ["青柠汁 Lime Juice", "10 ml"], ["酒渍樱桃 Maraschino Cherry", "1 颗"]],
    steps: [
      "高球杯加满冰，倒入石榴糖浆与青柠汁。",
      "补满冰镇姜汁汽水，轻提拉。",
      "樱桃与橙片装饰。"
    ],
    gar: "樱桃 + 橙片",
    note: "儿童友好的经典。石榴糖浆只负责颜色与底部甜味，青柠与姜汁汽水让它不至于像糖水。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Shirley Temple Royale", "Shirley Temple Royale", "用无酒精起泡酒替代姜汁汽水，更成人的气泡感。"],
      ["Arnold Palmer", "Arnold Palmer", "冰茶 + 柠檬水，无糖浆，更清爽。" ]
    ]
  },
  {
    id: "arnold-palmer", zh: "阿诺德·帕尔默", en: "Arnold Palmer", fam: "low-no", base: "low", sub: "无酒精",
    mods: ["tea", "juice", "citrus"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["冷萃红茶 Cold Brew Black Tea", "60 ml"], ["柠檬水 Lemonade", "60 ml"], ["柠檬片 Lemon Wheel", "1 片"], ["薄荷 Mint", "1 枝"]],
    steps: [
      "高球杯加满冰，倒入冷萃红茶与柠檬水。",
      "搅拌 8 秒，补少量冰。",
      "柠檬片与薄荷装饰。"
    ],
    gar: "柠檬片 + 薄荷",
    note: "茶的单宁提供酒体，柠檬水提供酸与甜。用冷萃茶避免苦涩；如果柠檬水太甜，加 10 ml 苏打。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Arnold Palmer Spritz", "Arnold Palmer Spritz", "补 60 ml 苏打，加入 1 dash 苦精（可选）。"],
      ["Hibiscus Cooler", "Hibiscus Cooler", "用洛神花茶替代红茶，颜色与酸度更强。" ]
    ]
  }
];
