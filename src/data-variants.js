/* ============================================================
   额外变体：为高频经典补充可直接执行的变体规格。
   这些变体会合并进母配方的 v 数组，并进入关系图谱的“变体层”。
   ============================================================ */

const EXTRA_VARIANTS = {
  "daiquiri": [
    { zh: "菠萝大吉利", en: "Pineapple Daiquiri", how: "加入 30 ml 菠萝汁，糖浆减到 10 ml。", ing: [["白朗姆 White Rum", "60 ml"], ["青柠汁 Lime Juice", "20 ml"], ["菠萝汁 Pineapple Juice", "30 ml"], ["单糖浆 Simple Syrup", "10 ml"]], method: "摇和", glass: "碟形杯", note: "菠萝提供酸与泡沫，青柠要新鲜。" },
    { zh: "椰香大吉利", en: "Coconut Daiquiri", how: "加入 15 ml 椰奶油，糖浆减到 5 ml。", ing: [["白朗姆 White Rum", "60 ml"], ["青柠汁 Lime Juice", "25 ml"], ["椰奶油 Coconut Cream", "15 ml"], ["单糖浆 Simple Syrup", "5 ml"]], method: "摇和", glass: "碟形杯", note: "椰奶油让酒体更圆，青柠要略多。" }
  ],
  "margarita": [
  ],
  "negroni": [
    { zh: "白色内格罗尼", en: "Negroni Bianco", how: "用 Lillet Blanc 与 Suze 替代甜味美思，苦味更清。", ing: [["金酒 Gin", "30 ml"], ["Blanc 味美思 Blanc Vermouth", "30 ml"], ["Suze", "20 ml"], ["橙皮 Orange Peel", "1 片"]], method: "搅拌", glass: "古典杯", note: "Lillet 的蜜饯甜与 Suze 的龙胆苦形成新平衡。" },
    { zh: "热带内格罗尼", en: "Tropical Negroni", how: "加 15 ml 菠萝汁与 1 dash 苦精，摇和后滤冰。", ing: [["金酒 Gin", "30 ml"], ["金巴利 Campari", "30 ml"], ["甜味美思 Sweet Vermouth", "20 ml"], ["菠萝汁 Pineapple Juice", "15 ml"]], method: "摇和", glass: "古典杯", note: "菠萝的酸让苦甜更轻，适合餐前。" }
  ],
  "old-fashioned": [
    { zh: "枫糖古典", en: "Maple Old Fashioned", how: "用枫糖浆替代单糖浆，苦精换成橙味苦精。", ing: [["波本威士忌 Bourbon Whiskey", "60 ml"], ["枫糖浆 Maple Syrup", "7.5 ml"], ["橙味苦精 Orange Bitters", "2 dash"]], method: "搅拌", glass: "古典杯", note: "枫木与波本的橡木很搭，糖浆不要多。" },
  ],
  "whiskey-sour": [
    { zh: "枫糖酸", en: "Maple Sour", how: "用枫糖浆替代单糖浆，威士忌换成黑麦。", ing: [["黑麦威士忌 Rye Whiskey", "60 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["枫糖浆 Maple Syrup", "15 ml"]], method: "摇和", glass: "碟形杯", note: "枫糖与黑麦的辛香很合，酸度要够。" }
  ],
  "manhattan": [
  ],
  "dry-martini": [
  ],
  "mojito": [
    { zh: "克里奥尔莫吉托", en: "Mojito Criollo", how: "用陈年朗姆，糖浆换成德梅拉拉糖浆。", ing: [["陈年朗姆 Aged Rum", "45 ml"], ["青柠汁 Lime Juice", "20 ml"], ["德梅拉拉糖浆 Demerara Syrup", "15 ml"], ["薄荷 Mint", "8 片"], ["苏打水 Soda Water", "60 ml"]], method: "直调", glass: "高球杯", note: "陈年朗姆让莫吉托更有深度。" },
    { zh: "菠萝莫吉托", en: "Pineapple Mojito", how: "加入 30 ml 菠萝汁，糖浆减到 10 ml。", ing: [["白朗姆 White Rum", "45 ml"], ["青柠汁 Lime Juice", "20 ml"], ["菠萝汁 Pineapple Juice", "30 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["薄荷 Mint", "8 片"], ["苏打水 Soda Water", "60 ml"]], method: "直调", glass: "高球杯", note: "菠萝的酸香与薄荷很合，适合夏天。" }
  ],
  "mai-tai": [
    { zh: "皇家迈泰", en: "Mai Tai Royal", how: "摇和后补 60 ml 起泡酒。", ing: [["陈年朗姆 Aged Rum", "30 ml"], ["高酒精度朗姆 Overproof Rum", "30 ml"], ["橙味库拉索 Orange Curaçao", "15 ml"], ["青柠汁 Lime Juice", "20 ml"], ["杏仁糖浆 Orgeat", "10 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，起泡酒把 Tiki 香料拉长。" },
    { zh: "迈泰潘趣", en: "Mai Tai Punch", how: "按 4 人份加倍，加 120 ml 苏打与大量碎冰。", ing: [["陈年朗姆 Aged Rum", "240 ml"], ["高酒精度朗姆 Overproof Rum", "120 ml"], ["橙味库拉索 Orange Curaçao", "60 ml"], ["青柠汁 Lime Juice", "80 ml"], ["杏仁糖浆 Orgeat", "40 ml"], ["苏打水 Soda Water", "120 ml"]], method: "直调", glass: "潘趣碗", note: "提前冷藏，杯中补碎冰。" }
  ],
  "paloma": [
    { zh: "帕洛玛菲士", en: "Paloma Fizz", how: "用鲜榨西柚汁与苏打替代西柚汽水。", ing: [["白色龙舌兰 Blanco Tequila", "45 ml"], ["西柚汁 Grapefruit Juice", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更酸、更自然，适合早午餐。" }
  ],
  "moscow-mule": [
  ],
  "clover-club": [
    { zh: "三叶草俱乐部皇家", en: "Clover Club Royale", how: "摇和后补 60 ml 起泡酒。", ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["覆盆子糖浆 Raspberry Syrup", "15 ml"], ["蛋清 Egg White", "20 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，覆盆子的颜色更亮。" },
  ],
  "sidecar": [
    { zh: "边车皇家", en: "Sidecar Royale", how: "摇和后补 60 ml 起泡酒，糖边减半。", ing: [["干邑 Cognac", "45 ml"], ["君度 Cointreau", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，适合庆典。" },
    { zh: "边车 crusta", en: "Sidecar Crusta", how: "杯口做糖边，柠檬皮在杯内挤出油。", ing: [["干邑 Cognac", "45 ml"], ["君度 Cointreau", "20 ml"], ["柠檬汁 Lemon Juice", "20 ml"], ["砂糖 Sugar", "杯口"]], method: "摇和", glass: "碟形杯", note: "糖边与柠檬皮让香气更集中。" }
  ],
  "last-word": [
    { zh: "最后一句菲士", en: "Last Word Fizz", how: "摇好后补 60 ml 苏打。", ing: [["金酒 Gin", "22.5 ml"], ["绿查特 Green Chartreuse", "22.5 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "22.5 ml"], ["青柠汁 Lime Juice", "22.5 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，查特的草本香更飘。" },
    { zh: "最后一句柯林斯", en: "Last Word Collins", how: "加 15 ml 糖浆与 90 ml 苏打，拉成长饮。", ing: [["金酒 Gin", "30 ml"], ["绿查特 Green Chartreuse", "20 ml"], ["黑樱桃利口酒 Maraschino Liqueur", "20 ml"], ["青柠汁 Lime Juice", "25 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["苏打水 Soda Water", "90 ml"]], method: "摇和", glass: "柯林斯杯", note: "甜度更高，适合慢饮。" }
  ],
  "jungle-bird": [
    { zh: "冷冻丛林鸟", en: "Jungle Bird Frozen", how: "与碎冰搅打成冰沙。", ing: [["黑朗姆 Dark Rum", "45 ml"], ["金巴利 Campari", "20 ml"], ["菠萝汁 Pineapple Juice", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["碎冰 Crushed Ice", "1 杯"]], method: "搅拌机", glass: "Tiki 杯", note: "更厚，苦味被冰镇柔化。" },
    { zh: "丛林鸟高球", en: "Jungle Bird Highball", how: "摇和后补 60 ml 苏打，滤入高球杯。", ing: [["黑朗姆 Dark Rum", "45 ml"], ["金巴利 Campari", "20 ml"], ["菠萝汁 Pineapple Juice", "45 ml"], ["青柠汁 Lime Juice", "15 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["苏打水 Soda Water", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，适合夏日长饮。" }
  ],
  "gin-tonic": [
    { zh: "西班牙金汤力", en: "Spanish Gin Tonic", how: "用大 balloon 杯，金酒 45 ml、汤力水 150 ml，加迷迭香与青柠。", ing: [["金酒 Gin", "45 ml"], ["汤力水 Tonic Water", "150 ml"], ["迷迭香 Rosemary", "1 枝"], ["青柠角 Lime Wedge", "1 块"], ["冰 Ice", "满杯"]], method: "直调", glass: "大葡萄酒杯", note: "西班牙式：大杯、满冰、慢倒汤力，香气更开放。" },
    { zh: "粉红金汤力", en: "Pink Gin Tonic", how: "加 3 dash 安高天娜苦精，汤力水 120 ml。", ing: [["金酒 Gin", "45 ml"], ["安高天娜苦精 Angostura Bitters", "3 dash"], ["汤力水 Tonic Water", "120 ml"], ["柠檬皮 Lemon Peel", "1 片"]], method: "直调", glass: "高球杯", note: "苦精染出淡粉色，苦味与奎宁叠加。" }
  ],
  "tom-collins": [
    { zh: "接骨木花柯林斯", en: "Elderflower Collins", how: "用接骨木花利口酒替代部分糖浆，补苏打。", ing: [["金酒 Gin", "45 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["接骨木花利口酒 Elderflower Liqueur", "15 ml"], ["苏打水 Soda Water", "90 ml"]], method: "直调", glass: "柯林斯杯", note: "花香更明显，甜度更低。" },
    { zh: "皮姆柯林斯", en: "Pimm's Collins", how: "用 Pimm's No.1 替代一半金酒，加黄瓜片。", ing: [["金酒 Gin", "25 ml"], ["Pimm's No.1", "25 ml"], ["柠檬汁 Lemon Juice", "25 ml"], ["单糖浆 Simple Syrup", "10 ml"], ["苏打水 Soda Water", "90 ml"], ["黄瓜 Cucumber", "2 片"]], method: "直调", glass: "柯林斯杯", note: "英式果杯的清爽长饮版本。" }
  ],
  "whiskey-highball": [
    { zh: "日式威士忌高球", en: "Japanese Whisky Highball", how: "用日本威士忌 45 ml、强气泡苏打 150 ml，低温慢倒。", ing: [["日本威士忌 Japanese Whisky", "45 ml"], ["苏打水 Soda Water", "150 ml"], ["柠檬皮 Lemon Peel", "1 片"], ["冰 Ice", "满杯"]], method: "直调", glass: "高球杯", note: "关键是大冰块、冰杯与强气泡水，不要搅动过度。" },
    { zh: "蜂蜜威士忌高球", en: "Honey Whisky Highball", how: "加 10 ml 蜂蜜糖浆与 10 ml 柠檬汁，补苏打。", ing: [["波本威士忌 Bourbon Whiskey", "45 ml"], ["蜂蜜糖浆 Honey Syrup", "10 ml"], ["柠檬汁 Lemon Juice", "10 ml"], ["苏打水 Soda Water", "120 ml"]], method: "直调", glass: "高球杯", note: "蜂蜜让高球更圆，柠檬提亮。" }
  ],
  "aperol-spritz": [
    { zh: "冷冻阿佩罗气泡", en: "Frozen Aperol Spritz", how: "所有材料与碎冰搅打成冰沙。", ing: [["Prosecco", "90 ml"], ["Aperol", "60 ml"], ["苏打水 Soda Water", "30 ml"], ["碎冰 Crushed Ice", "1 杯"]], method: "搅拌机", glass: "大葡萄酒杯", note: "更厚、更甜，适合夏日。" },
    { zh: "阿佩罗汤力", en: "Aperol Tonic", how: "用汤力水替代 Prosecco，降低酒精度。", ing: [["Aperol", "60 ml"], ["汤力水 Tonic Water", "120 ml"], ["橙片 Orange Wheel", "1 片"], ["冰 Ice", "满杯"]], method: "直调", glass: "高球杯", note: "奎宁的苦让 Aperol 更干，适合低酒精。" }
  ],
  "french-75": [
    { zh: "冷冻法国 75", en: "French 75 Frozen", how: "金酒、柠檬、糖浆与碎冰搅打，最后补起泡酒。", ing: [["金酒 Gin", "30 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["碎冰 Crushed Ice", "1 杯"], ["起泡酒 Sparkling Wine", "60 ml"]], method: "搅拌机", glass: "香槟杯", note: "先搅打，再缓慢补起泡酒。" },
    { zh: "梅斯卡尔 75", en: "Mezcal 75", how: "用梅斯卡尔替代金酒，起泡酒 90 ml。", ing: [["梅斯卡尔 Mezcal", "30 ml"], ["柠檬汁 Lemon Juice", "15 ml"], ["单糖浆 Simple Syrup", "15 ml"], ["起泡酒 Sparkling Wine", "90 ml"]], method: "摇和", glass: "香槟杯", note: "烟熏与气泡形成对比，适合餐前。" }
  ],
  "pisco-sour": [
    { zh: "皮斯科酸加厚泡沫", en: "Pisco Sour Foam", how: "蛋清加到 25 ml，干摇 20 秒，泡沫更厚。", ing: [["皮斯科 Pisco", "60 ml"], ["青柠汁 Lime Juice", "25 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["蛋清 Egg White", "25 ml"], ["苦精 Bitters", "3 dash"]], method: "摇和", glass: "古典杯", note: "泡沫更绵密，苦精点出香气。" },
    { zh: "肉桂皮斯科酸", en: "Pisco Sour Cinnamon", how: "加 2 dash 肉桂苦精，表面现磨肉桂。", ing: [["皮斯科 Pisco", "60 ml"], ["青柠汁 Lime Juice", "25 ml"], ["单糖浆 Simple Syrup", "20 ml"], ["蛋清 Egg White", "20 ml"], ["肉桂苦精 Cinnamon Bitters", "2 dash"]], method: "摇和", glass: "古典杯", note: "肉桂与皮斯科的花香很合。" }
  ]
};
