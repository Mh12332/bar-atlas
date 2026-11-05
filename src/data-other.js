/* ============================================================
   配方库 · 甘蔗、米与东方谷物
   ============================================================ */

const COCKTAILS_OTHER = [
  {
    id: "rabo-de-galo", zh: "公鸡尾巴", en: "Rabo de Galo", fam: "old-fashioned", base: "cane", sub: "卡莎萨",
    mods: ["vermouth", "amaro", "aromatic"], method: "搅拌", glass: "古典杯", strength: 4, diff: 1,
    ing: [["卡莎萨", "50 ml"], ["Cynar", "20 ml"], ["甜味美思", "20 ml"], ["橙皮", "1 片"]],
    steps: [
      "古典杯加大冰预冷。",
      "所有液体加冰搅拌 20 秒。",
      "滤入杯中，橙皮油装饰。"
    ],
    gar: "橙皮",
    note: "巴西圣保罗的经典，结构像 Little Italy。卡莎萨的青草与 Cynar 的朝鲜蓟苦很搭；甜味美思只需 20 ml。",
    flavor: ["苦香", "草本", "温暖"],
    v: [
      ["Rabo de Galo Bianco", "Rabo de Galo Bianco", "用干味美思替代甜味美思，更干。"],
      ["Little Italy", "Little Italy", "黑麦 + Cynar + 甜味美思，更温暖。" ]
    ]
  },
  {
    id: "batida-de-coco", zh: "椰子巴提达", en: "Batida de Coco", fam: "blended", base: "cane", sub: "卡莎萨",
    mods: ["cream", "syrup", "juice"], method: "搅拌机", glass: "高球杯", strength: 2, diff: 1,
    ing: [["卡莎萨", "60 ml"], ["椰奶", "60 ml"], ["炼乳", "20 ml"], ["青柠汁", "15 ml"], ["碎冰", "1 杯"]],
    steps: [
      "所有液体与碎冰放入搅拌机。",
      "高速搅打 15–20 秒，至顺滑。",
      "倒入冰镇高球杯，椰片或青柠皮装饰。"
    ],
    gar: "椰片 / 青柠皮",
    note: "巴西海滩的冰沙。炼乳很甜，青柠汁必须够；没有炼乳可用 15 ml 糖浆 + 20 ml 椰奶油替代。",
    flavor: ["热带", "奶滑", "酸甜"],
    v: [
      ["Batida de Maracujá", "Batida de Maracujá", "用百香果果肉替代椰子，炼乳减半。"],
      ["Piña Colada", "Piña Colada", "用朗姆 + 菠萝 + 椰奶油，更经典。" ]
    ]
  },
  {
    id: "somaek", zh: "烧啤", en: "Somaek", fam: "highball", base: "rice", sub: "韩国烧酒",
    mods: ["mixer"], method: "直调", glass: "啤酒杯", strength: 2, diff: 1,
    ing: [["韩国烧酒", "50 ml"], ["拉格啤酒", "200 ml"], ["青柠角", "1 块（可选）"]],
    steps: [
      "啤酒杯冰镇，倒入冰镇烧酒。",
      "沿杯壁注入冰镇拉格，轻搅一次。",
      "可挤少量青柠，或直接配烤肉饮用。"
    ],
    gar: "青柠角（可选）",
    note: "韩国的「烧酒 + 啤酒」。比例从 3:7 到 5:5 都可，关键是两者都要冰。烧酒风味轻，别加太多果汁。",
    flavor: ["清爽", "酸甜"],
    v: [
      ["Somaek Highball", "Somaek Highball", "加入 30 ml 苏打与青柠，降低啤酒苦味。"],
      ["Soju Tonic", "Soju Tonic", "烧酒 45 ml + 汤力水 120 ml + 青柠，更干。" ]
    ]
  },
  {
    id: "saketini", zh: "清酒马天尼", en: "Saketini", fam: "duo", base: "rice", sub: "纯米清酒",
    mods: ["vermouth", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["清酒", "45 ml"], ["金酒", "30 ml"], ["干味美思", "5 ml"], ["黄瓜片", "1 片"]],
    steps: [
      "所有液体加冰搅拌 20–25 秒。",
      "滤入冰镇碟形杯。",
      "黄瓜片或柚子皮装饰。"
    ],
    gar: "黄瓜片 / 柚子皮",
    note: "清酒的米香与鲜味会稀释金酒的植物感。用纯米酒，不要用甜味吟酿；黄瓜增加清爽感。",
    flavor: ["草本", "清爽", "花香"],
    v: [
      ["Sake Martini", "Sake Martini", "清酒与伏特加 1:1，加 1 dash 橙味苦精，更中性。"],
      ["Saketini Fizz", "Saketini Fizz", "补 45 ml 苏打，清酒香气更轻。" ]
    ]
  },
  {
    id: "baijiu-sour", zh: "白酒酸", en: "Baijiu Sour", fam: "sour", base: "rice", sub: "清香型白酒",
    mods: ["citrus", "syrup", "cream"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["清香型白酒", "45 ml"], ["青柠汁", "20 ml"], ["单糖浆", "15 ml"], ["蛋清", "15 ml（可选）"]],
    steps: [
      "所有材料先干摇 10 秒（含蛋清时）。",
      "加冰摇和 12 秒，双重过滤入冰镇碟形杯。",
      "青柠皮或桂花装饰。"
    ],
    gar: "青柠皮 / 桂花",
    note: "白酒的酯香很强，45 ml 已是上限。清香型比浓香型更适合酸酒；糖与青柠要把发酵香收住，而不是压掉。",
    flavor: ["酸甜", "花香", "辛香"],
    v: [
      ["Baijiu Highball", "Baijiu Highball", "白酒 30 ml + 苏打 120 ml + 青柠，酒精感更轻。"],
      ["Baijiu Sour No. 2", "Baijiu Sour No. 2", "加入 10 ml 桂花糖浆，减少单糖浆，花香更明显。" ]
    ]
  }
];
