/* ============================================================
   配方库 · 白兰地、皮斯科
   ============================================================ */

const COCKTAILS_BRANDY = [
  {
    id: "sidecar", zh: "边车", en: "Sidecar", fam: "daisy", base: "brandy", sub: "干邑",
    mods: ["citrus", "liqueur", "aromatic"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["干邑", "50 ml"], ["君度", "20 ml"], ["柠檬汁", "20 ml"], ["细砂糖", "杯口（可选）"]],
    steps: [
      "杯口用柠檬润湿，蘸一圈细砂糖（可选），杯身冰镇。",
      "干邑、君度与柠檬汁加冰摇和 10–12 秒。",
      "双重过滤入杯，柠檬皮油装饰。"
    ],
    gar: "柠檬皮 + 糖边（可选）",
    note: "边车是「白兰地版黛西」。干邑的果香与君度的橙甜很搭；柠檬要够酸，糖边只做半圈。",
    flavor: ["酸甜", "花香", "温暖"],
    v: [
      ["Boston Sidecar", "Boston Sidecar", "干邑 + 朗姆 + 君度 + 柠檬，酒体更厚。"],
      ["Chelsea Sidecar", "Chelsea Sidecar", "用金酒替代干邑，更清亮、更草本。"],
      ["Between the Sheets", "Between the Sheets", "干邑 + 朗姆 + 君度 + 柠檬，边车的加强版。" ]
    ]
  },
  {
    id: "between-the-sheets", zh: "床笫之间", en: "Between the Sheets", fam: "sour", base: "brandy", sub: "干邑 + 朗姆",
    mods: ["citrus", "liqueur"], method: "摇和", glass: "碟形杯", strength: 5, diff: 2,
    ing: [["干邑", "30 ml"], ["白朗姆", "30 ml"], ["君度", "20 ml"], ["柠檬汁", "20 ml"]],
    steps: [
      "所有材料加冰摇和 10–12 秒。",
      "双重过滤入冰镇碟形杯。",
      "柠檬皮油装饰。"
    ],
    gar: "柠檬皮",
    note: "1930 年代经典。干邑与朗姆各 30 ml，酒精度高，柠檬与君度负责平衡；不要额外加糖。",
    flavor: ["酸甜", "温暖", "花香"],
    v: [
      ["Between the Sheets Fizz", "Between the Sheets Fizz", "补 45 ml 苏打，降低酒感。"],
      ["Sidecar", "Sidecar", "去掉朗姆，只用干邑，更经典。" ]
    ]
  },
  {
    id: "brandy-alexander", zh: "白兰地亚历山大", en: "Brandy Alexander", fam: "flip", base: "brandy", sub: "干邑",
    mods: ["coffee", "cream"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["干邑", "30 ml"], ["白可可利口酒", "30 ml"], ["淡奶油", "30 ml"], ["肉豆蔻", "现磨"]],
    steps: [
      "干邑、白可可与奶油加冰摇和 12 秒。",
      "双重过滤入冰镇碟形杯。",
      "现磨肉豆蔻装饰。"
    ],
    gar: "现磨肉豆蔻",
    note: "甜点型鸡尾酒。奶油要冷、摇和要充分，肉豆蔻是必要的辛香收尾。可用 20 ml 奶油让酒体更紧。",
    flavor: ["奶滑", "咖啡", "温暖"],
    v: [
      ["Alexander", "Alexander", "用金酒替代干邑，更清亮，可可更突出。"],
      ["Grasshopper", "Grasshopper", "薄荷利口酒 + 白可可 + 奶油，绿色甜点版。"],
      ["Golden Cadillac", "Golden Cadillac", "Galliano + 白可可 + 奶油，香草与茴香。" ]
    ]
  },
  {
    id: "french-connection", zh: "法国贩毒网", en: "French Connection", fam: "old-fashioned", base: "brandy", sub: "干邑",
    mods: ["liqueur"], method: "直调", glass: "古典杯", strength: 4, diff: 1,
    ing: [["干邑", "45 ml"], ["杏仁利口酒", "20 ml"]],
    steps: [
      "古典杯加一大块冰。",
      "倒入干邑与杏仁利口酒，搅拌 15 秒。",
      "橙皮或烤杏仁装饰。"
    ],
    gar: "橙皮 / 烤杏仁",
    note: "干邑的果香与杏仁的甜香很合。比例可按 3:1 到 2:1 调整；杏仁利口酒太甜时，干邑加到 50 ml。",
    flavor: ["温暖", "奶滑", "花香"],
    v: [
      ["Godfather", "Godfather", "苏格兰 + 杏仁利口酒，烟熏版。"],
      ["French Connection Fizz", "French Connection Fizz", "加 60 ml 苏打与柠檬皮，变成清爽长饮。" ]
    ]
  },
  {
    id: "stinger", zh: "毒刺", en: "Stinger", fam: "old-fashioned", base: "brandy", sub: "干邑",
    mods: ["liqueur"], method: "搅拌", glass: "碟形杯 / 古典杯", strength: 5, diff: 1,
    ing: [["干邑", "50 ml"], ["白薄荷利口酒", "20 ml"]],
    steps: [
      "所有液体加冰搅拌 20 秒。",
      "滤入冰镇碟形杯，或加碎冰倒入古典杯。",
      "薄荷叶装饰。"
    ],
    gar: "薄荷叶",
    note: "餐后消化酒。白薄荷的清凉很强，20 ml 是上限；干邑要有足够酒体，否则像漱口水。",
    flavor: ["草本", "温暖", "清爽"],
    v: [
      ["Green Stinger", "Green Stinger", "用绿薄荷利口酒，颜色更绿、甜度更高。"],
      ["Stinger Royale", "Stinger Royale", "补 60 ml 起泡酒，降低酒精度。" ]
    ]
  },
  {
    id: "japanese-cocktail", zh: "日本鸡尾酒", en: "Japanese Cocktail", fam: "old-fashioned", base: "brandy", sub: "干邑",
    mods: ["syrup", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["干邑", "60 ml"], ["杏仁糖浆", "15 ml"], ["安高天娜苦精", "2 dash"], ["柠檬皮", "1 片"]],
    steps: [
      "所有液体加冰搅拌 20 秒。",
      "滤入冰镇碟形杯。",
      "柠檬皮油装饰。"
    ],
    gar: "柠檬皮",
    note: "1860 年代 Jerry Thomas 的配方，与日本无直接关系。杏仁糖浆的甜与干邑的果香需要苦精收尾。",
    flavor: ["温暖", "花香", "苦香"],
    v: [
      ["Japanese Fizz", "Japanese Fizz", "摇和后补苏打，杏仁香更轻。"],
      ["Rum Old Fashioned", "Rum Old Fashioned", "用陈年朗姆替代干邑，杏仁糖浆换成糖浆。" ]
    ]
  },
  {
    id: "pisco-sour", zh: "皮斯科酸", en: "Pisco Sour", fam: "sour", base: "brandy", sub: "皮斯科",
    mods: ["citrus", "syrup", "cream", "bitters"], method: "摇和", glass: "古典杯 / 碟形杯", strength: 3, diff: 2,
    ing: [["皮斯科", "60 ml"], ["青柠汁", "25 ml"], ["单糖浆", "20 ml"], ["蛋清", "20 ml"], ["安高天娜苦精", "3 dash"]],
    steps: [
      "皮斯科、青柠、糖浆与蛋清先干摇 10–15 秒。",
      "加冰摇和 12 秒，双重过滤入冰镇杯。",
      "在泡沫上点 3 dash 苦精，牙签划纹。"
    ],
    gar: "苦精点纹",
    note: "秘鲁与智利都宣称拥有它。皮斯科的香气很娇嫩，不要用重柑橘或过多糖浆压住；蛋清泡沫要厚。",
    flavor: ["酸甜", "花香"],
    v: [
      ["Chilcano", "Chilcano", "皮斯科 + 青柠 + 姜汁汽水，高球版。"],
      ["Capitán", "Capitán", "皮斯科 + 甜味美思，搅拌后柠檬皮装饰。"],
      ["Pisco Punch", "Pisco Punch", "皮斯科 + 菠萝 + 青柠 + 糖浆，19 世纪旧金山经典。" ]
    ]
  },
  {
    id: "chilcano", zh: "奇尔卡诺", en: "Chilcano", fam: "highball", base: "brandy", sub: "皮斯科",
    mods: ["citrus", "mixer"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["皮斯科", "50 ml"], ["青柠汁", "15 ml"], ["姜汁汽水", "100 ml"], ["安高天娜苦精", "1 dash"]],
    steps: [
      "高球杯加满冰，倒入皮斯科与青柠汁。",
      "补满冰镇姜汁汽水，加 1 dash 苦精。",
      "轻提拉一次，青柠片装饰。"
    ],
    gar: "青柠片",
    note: "秘鲁的日常高球。姜汁汽水的辛辣与皮斯科的花香很搭；苦精只需 1 dash，提香即可。",
    flavor: ["清爽", "花香", "辛香"],
    v: [
      ["Chilcano de Pisco", "Chilcano de Pisco", "用姜汁啤酒替代姜汁汽水，辛辣更强。"],
      ["Pisco Sour", "Pisco Sour", "短饮版，加蛋清与苦精。" ]
    ]
  },
  {
    id: "brandy-crusta", zh: "白兰地卡斯达", en: "Brandy Crusta", fam: "sour", base: "brandy", sub: "白兰地",
    mods: ["citrus", "liqueur", "bitters", "aromatic"], method: "摇和", glass: "小葡萄酒杯", strength: 4, diff: 3,
    ing: [["白兰地", "50 ml"], ["柠檬汁", "20 ml"], ["橙味利口酒", "10 ml"], ["黑樱桃利口酒", "5 ml"], ["安高天娜苦精", "1 dash"], ["细砂糖", "杯口"]],
    steps: [
      "杯口润湿后蘸细砂糖，尽量做出宽糖边。",
      "所有液体加冰摇和 10–12 秒。",
      "双重过滤入杯，杯内放入一大片柠檬皮（像「领子」），樱桃装饰。"
    ],
    gar: "宽糖边 + 柠檬皮领 + 樱桃",
    note: "19 世纪经典，是 Sidecar 的前身之一。糖边、柠檬皮领与樱桃不是装饰，它们参与每一口的香气。",
    flavor: ["酸甜", "花香", "温暖"],
    v: [
      ["Crusta Fizz", "Crusta Fizz", "补 45 ml 苏打，糖边保留。"],
      ["Sidecar", "Sidecar", "简化版，去掉樱桃与柠檬皮领。" ]
    ]
  }
];
