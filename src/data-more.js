/* ============================================================
   配方库 · 热饮、现代经典与地区补充
   新增 10 杯非 IBA 配方，均带来源标签与历史说明。
   ============================================================ */

const COCKTAILS_MORE = [
  {
    id: "hot-toddy", zh: "热托迪", en: "Hot Toddy", fam: "hot", base: "whiskey", sub: "波本 / 苏格兰",
    mods: ["syrup", "citrus", "aromatic"], method: "直调", glass: "带柄玻璃杯", strength: 2, diff: 1,
    ing: [["威士忌", "45 ml"], ["蜂蜜糖浆", "15 ml"], ["柠檬汁", "15 ml"], ["热水", "120 ml"], ["丁香", "1 粒"], ["柠檬片", "1 片"]],
    steps: ["杯中放入蜂蜜糖浆、柠檬汁与丁香。", "倒入热水搅匀，再加入威士忌。", "柠檬片装饰，趁热饮用。"],
    gar: "柠檬片 + 丁香",
    note: "热饮的平衡是酸、甜、酒、水。不要用沸水直接冲威士忌，80–90°C 更能保留香气；蜂蜜要先用少量热水化开。",
    flavor: ["温暖", "酸甜", "辛香"],
    history: "Hot Toddy 是英语世界最常见的热饮鸡尾酒，19 世纪已在苏格兰与爱尔兰流行。威士忌、热水、蜂蜜/糖与柠檬的组合被当作驱寒饮品；具体起源没有单一发明者。",
    src: { tag: "经典文献", label: "19 世纪热饮传统 / Difford's Guide", url: "https://www.diffordsguide.com/" },
    v: [
      { zh: "Rum Toddy", en: "Rum Toddy", how: "用陈年朗姆替代威士忌，蜂蜜换成德梅拉拉糖浆。", ing: [["陈年朗姆", "45 ml"], ["德梅拉拉糖浆", "15 ml"], ["青柠汁", "15 ml"], ["热水", "120 ml"], ["肉桂", "1 小段"]], method: "直调", glass: "带柄玻璃杯", note: "朗姆的焦糖与肉桂更温暖。" },
      { zh: "Irish Toddy", en: "Irish Toddy", how: "用爱尔兰威士忌，蜂蜜与柠檬不变，加现磨肉豆蔻。", ing: [["爱尔兰威士忌", "45 ml"], ["蜂蜜糖浆", "15 ml"], ["柠檬汁", "15 ml"], ["热水", "120 ml"], ["肉豆蔻", "现磨"]], method: "直调", glass: "带柄玻璃杯", note: "更柔，肉豆蔻收尾。" }
    ]
  },
  {
    id: "eggnog", zh: "蛋奶酒", en: "Eggnog", fam: "flip", base: "brandy", sub: "干邑 + 朗姆",
    mods: ["cream", "syrup", "aromatic"], method: "摇和", glass: "古典杯 / 潘趣杯", strength: 2, diff: 2,
    ing: [["干邑", "30 ml"], ["陈年朗姆", "30 ml"], ["单糖浆", "15 ml"], ["全蛋", "1 个"], ["牛奶", "60 ml"], ["淡奶油", "30 ml"], ["肉豆蔻", "现磨"]],
    steps: ["鸡蛋与糖浆搅打至略发白。", "加入干邑、朗姆、牛奶与奶油，加冰摇和 12 秒。", "滤入加冰古典杯，现磨肉豆蔻。"],
    gar: "现磨肉豆蔻",
    note: "蛋奶酒是“可饮用的甜点”，但必须冷、必须够酒。全蛋要新鲜，摇和充分；肉豆蔻是必不可少的收尾。",
    flavor: ["奶滑", "温暖", "辛香"],
    history: "Eggnog 源于英国与美国的潘趣/蛋奶传统，19 世纪在北美圣诞节流行。干邑、朗姆、蛋、奶与糖的组合，后来成为节日批量饮品的代表；具体配方因家庭与地区差异很大。",
    src: { tag: "经典文献", label: "19 世纪英美蛋奶潘趣传统", url: "https://en.wikipedia.org/wiki/Eggnog" },
    v: [
      { zh: "Aged Eggnog", en: "Aged Eggnog", how: "按配方加倍，冷藏熟成 2–4 周；饮用前加肉豆蔻。", ing: [["干邑", "300 ml"], ["陈年朗姆", "300 ml"], ["单糖浆", "150 ml"], ["全蛋", "10 个"], ["牛奶", "600 ml"], ["淡奶油", "300 ml"]], method: "搅拌", glass: "潘趣杯", note: "需使用巴氏蛋并在冷藏中熟成；有食品安全风险，家庭制作需谨慎。" },
      { zh: "Coquito", en: "Coquito", how: "用椰奶替代牛奶，加 15 ml 椰子朗姆。", ing: [["白朗姆", "45 ml"], ["椰奶", "60 ml"], ["炼乳", "15 ml"], ["淡奶油", "30 ml"], ["蛋黄", "1 个"], ["肉桂", "1 小撮"]], method: "搅拌机", glass: "小杯", note: "波多黎各的椰子蛋奶酒，甜度更高。" }
    ]
  },
  {
    id: "kingston-negroni", zh: "金斯敦内格罗尼", en: "Kingston Negroni", fam: "aperitivo", base: "rum", sub: "牙买加朗姆",
    mods: ["vermouth", "amaro", "aromatic"], method: "搅拌", glass: "古典杯", strength: 4, diff: 1,
    ing: [["牙买加朗姆", "30 ml"], ["金巴利", "30 ml"], ["甜味美思", "30 ml"], ["橙皮", "1 片"]],
    steps: ["所有液体加冰搅拌 20–25 秒。", "滤入加冰古典杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "内格罗尼的朗姆版本。牙买加朗姆的香蕉与 funk 香气能穿透金巴利；不要用过于甜腻的加香朗姆。",
    flavor: ["苦香", "热带", "温暖"],
    history: "Kingston Negroni 由纽约 Death & Co 的 Joaquín Simó 在 2000 年代创作，用牙买加朗姆替代金酒。它把内格罗尼的苦甜骨架放进加勒比朗姆的果香与 funk 中，是现代经典。",
    src: { tag: "现代经典", label: "Joaquín Simó / Death & Co", url: "https://www.diffordsguide.com/" },
    v: [
      { zh: "Kingston Sbagliato", en: "Kingston Sbagliato", how: "用 60 ml 起泡酒替代一半朗姆，降低酒感。", ing: [["牙买加朗姆", "20 ml"], ["金巴利", "30 ml"], ["甜味美思", "30 ml"], ["起泡酒", "60 ml"]], method: "直调", glass: "古典杯", note: "先搅拌前三者，再补起泡酒。" },
      { zh: "Pineapple Kingston", en: "Pineapple Kingston", how: "用 15 ml 菠萝朗姆替代部分牙买加朗姆。", ing: [["牙买加朗姆", "20 ml"], ["菠萝朗姆", "15 ml"], ["金巴利", "30 ml"], ["甜味美思", "30 ml"]], method: "搅拌", glass: "古典杯", note: "菠萝的酸香让苦味更立体。" }
    ]
  },
  {
    id: "brown-derby", zh: "棕色德比", en: "Brown Derby", fam: "sour", base: "whiskey", sub: "波本",
    mods: ["citrus", "syrup"], method: "摇和", glass: "碟形杯", strength: 3, diff: 1,
    ing: [["波本威士忌", "60 ml"], ["西柚汁", "30 ml"], ["蜂蜜糖浆", "20 ml"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "西柚皮油装饰。"],
    gar: "西柚皮",
    note: "蜂蜜的圆润、西柚的苦酸与波本的香草，是这杯酒的全部。蜂蜜糖浆按 3:1 稀释；西柚要鲜榨。",
    flavor: ["酸甜", "苦香", "花香"],
    history: "Brown Derby 得名于好莱坞的 Brown Derby 餐厅，1930 年代出现在洛杉矶的酒吧文化中。波本、西柚与蜂蜜的组合，是禁酒令后“好莱坞式”酸酒的代表。",
    src: { tag: "经典文献", label: "1930s 好莱坞 / 经典鸡尾酒记载", url: "https://en.wikipedia.org/wiki/Brown_Derby_(cocktail)" },
    v: [
      { zh: "Brown Derby Fizz", en: "Brown Derby Fizz", how: "摇好后补 60 ml 苏打。", ing: [["波本", "60 ml"], ["西柚汁", "30 ml"], ["蜂蜜糖浆", "20 ml"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，西柚的苦更明显。" },
      { zh: "Maple Brown Derby", en: "Maple Brown Derby", how: "用枫糖浆替代蜂蜜糖浆。", ing: [["波本", "60 ml"], ["西柚汁", "30 ml"], ["枫糖浆", "15 ml"]], method: "摇和", glass: "碟形杯", note: "枫木与波本的橡木很搭，甜度略低。" }
    ]
  },
  {
    id: "air-mail", zh: "航空邮件", en: "Air Mail", fam: "collins", base: "rum", sub: "陈年朗姆",
    mods: ["citrus", "syrup", "mixer"], method: "摇和", glass: "香槟杯", strength: 2, diff: 1,
    ing: [["陈年朗姆", "45 ml"], ["青柠汁", "15 ml"], ["蜂蜜糖浆", "15 ml"], ["香槟 / 起泡酒", "60 ml"]],
    steps: ["朗姆、青柠与蜂蜜加冰摇和 10 秒。", "滤入冰镇香槟杯。", "缓慢补入起泡酒，柠檬皮装饰。"],
    gar: "柠檬皮",
    note: "Air Mail 是“朗姆 + 蜂蜜 + 青柠 + 香槟”的节日长饮，结构像 French 75 的朗姆版。蜂蜜要稀释，香槟最后加。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Air Mail 在 1930 年代流行，名字来自航空邮政时代。它用陈年朗姆、青柠、蜂蜜与香槟，是加勒比与欧洲饮酒文化交会的产物；具体发明者不详。",
    src: { tag: "经典文献", label: "1930s 经典鸡尾酒记载", url: "https://en.wikipedia.org/wiki/Air_Mail_(cocktail)" },
    v: [
      { zh: "Air Mail Royale", en: "Air Mail Royale", how: "起泡酒加到 90 ml，蜂蜜减到 10 ml。", ing: [["陈年朗姆", "45 ml"], ["青柠汁", "15 ml"], ["蜂蜜糖浆", "10 ml"], ["香槟", "90 ml"]], method: "摇和", glass: "香槟杯", note: "更干、更气泡。" },
      { zh: "Air Mail Sour", en: "Air Mail Sour", how: "去掉起泡酒，加 30 ml 苏打。", ing: [["陈年朗姆", "45 ml"], ["青柠汁", "20 ml"], ["蜂蜜糖浆", "15 ml"], ["苏打水", "30 ml"]], method: "摇和", glass: "高球杯", note: "更酸，适合不喜欢甜气泡的人。" }
    ]
  },
  {
    id: "hugo", zh: "雨果", en: "Hugo", fam: "aperitivo", base: "wine", sub: "Prosecco",
    mods: ["liqueur", "citrus", "mixer", "aromatic"], method: "直调", glass: "大葡萄酒杯", strength: 1, diff: 1,
    ing: [["Prosecco", "90 ml"], ["接骨木花利口酒", "20 ml"], ["苏打水", "30 ml"], ["薄荷", "6 片"], ["青柠角", "1 块"]],
    steps: ["杯中加入薄荷、青柠角与接骨木花利口酒，轻压。", "加满冰，倒入 Prosecco。", "补苏打，轻提拉，薄荷装饰。"],
    gar: "薄荷 + 青柠",
    note: "Hugo 是南蒂罗尔的现代开胃酒，比 Aperol Spritz 更花香、更轻。接骨木花 20 ml 足够，薄荷只轻压。",
    flavor: ["清爽", "花香", "酸甜"],
    history: "Hugo 由南蒂罗尔调酒师 Roland Gruber 在 2005 年前后创作，用接骨木花、Prosecco、薄荷与青柠。它迅速成为阿尔卑斯地区与欧洲夏季的开胃酒，和 Aperol Spritz 并列。",
    src: { tag: "现代经典", label: "Roland Gruber / South Tyrol, 2005", url: "https://www.diffordsguide.com/" },
    v: [
      { zh: "Hugo Royale", en: "Hugo Royale", how: "用香槟替代 Prosecco，接骨木花减到 15 ml。", ing: [["香槟", "90 ml"], ["接骨木花利口酒", "15 ml"], ["苏打水", "15 ml"], ["薄荷", "6 片"], ["青柠角", "1 块"]], method: "直调", glass: "香槟杯", note: "更干、更庆典。" },
      { zh: "Hugo Spritz", en: "Hugo Spritz", how: "加 15 ml Aperol，减少接骨木花至 10 ml。", ing: [["Prosecco", "90 ml"], ["Aperol", "15 ml"], ["接骨木花利口酒", "10 ml"], ["苏打水", "30 ml"], ["薄荷", "6 片"]], method: "直调", glass: "大葡萄酒杯", note: "花香与苦味并存。" }
    ]
  },
  {
    id: "limoncello-spritz", zh: "柠檬酒斯普里茨", en: "Limoncello Spritz", fam: "aperitivo", base: "liqueur", sub: "Limoncello",
    mods: ["liqueur", "mixer", "citrus"], method: "直调", glass: "大葡萄酒杯", strength: 1, diff: 1,
    ing: [["Limoncello", "60 ml"], ["Prosecco", "90 ml"], ["苏打水", "30 ml"], ["柠檬片", "1 片"], ["薄荷", "1 枝"]],
    steps: ["大葡萄酒杯加满冰，倒入 Limoncello。", "补入 Prosecco，再加苏打。", "轻提拉，柠檬片与薄荷装饰。"],
    gar: "柠檬片 + 薄荷",
    note: "Limoncello 很甜，Prosecco 要干型，苏打负责拉低甜度。柠檬片不要挤压过度，否则会苦。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Limoncello Spritz 是 21 世纪意大利南部的现代开胃酒，把阿马尔菲/索伦托的柠檬利口酒放进 Spritz 结构。它没有单一发明者，属于地区饮品现代化的一支。",
    src: { tag: "地区传统", label: "意大利南部 Limoncello / 现代 Spritz", url: "https://www.diffordsguide.com/" },
    v: [
      { zh: "Limoncello Collins", en: "Limoncello Collins", how: "加 30 ml 柠檬汁与 60 ml 苏打，杯型加大。", ing: [["Limoncello", "45 ml"], ["柠檬汁", "30 ml"], ["苏打水", "90 ml"], ["柠檬片", "1 片"]], method: "直调", glass: "柯林斯杯", note: "更酸、更轻。" },
      { zh: "Frozen Limoncello", en: "Frozen Limoncello", how: "与碎冰搅打成冰沙。", ing: [["Limoncello", "60 ml"], ["Prosecco", "60 ml"], ["柠檬汁", "15 ml"], ["碎冰", "1 杯"]], method: "搅拌机", glass: "高球杯", note: "甜度更高，适合甜点。" }
    ]
  },
  {
    id: "blue-hawaii", zh: "蓝色夏威夷", en: "Blue Hawaii", fam: "blended", base: "rum", sub: "白朗姆",
    mods: ["juice", "liqueur", "cream", "citrus"], method: "搅拌机", glass: "飓风杯 / Tiki 杯", strength: 2, diff: 1,
    ing: [["白朗姆", "45 ml"], ["蓝色库拉索", "20 ml"], ["菠萝汁", "45 ml"], ["柠檬汁", "15 ml"], ["椰奶油", "15 ml"], ["碎冰", "1 杯"]],
    steps: ["所有液体与碎冰放入搅拌机。", "高速搅打 15 秒，至顺滑。", "倒入冰镇飓风杯，菠萝角与樱桃装饰。"],
    gar: "菠萝角 + 樱桃",
    note: "1950 年代夏威夷度假文化的代表。蓝色库拉索只负责颜色与橙香，20 ml 足够；椰奶油让口感更圆。",
    flavor: ["热带", "酸甜", "奶滑"],
    history: "Blue Hawaii 由夏威夷 Hilton Hawaiian Village 的调酒师 Harry Yee 在 1957 年创作。它用白朗姆、蓝色库拉索、菠萝、柠檬与椰奶油，成为夏威夷 Tiki 与度假鸡尾酒的符号。",
    src: { tag: "现代经典", label: "Harry Yee / Hilton Hawaiian Village, 1957", url: "https://en.wikipedia.org/wiki/Blue_Hawaii_(cocktail)" },
    v: [
      { zh: "Blue Hawaii Royale", en: "Blue Hawaii Royale", how: "减少椰奶油，补 60 ml 起泡酒。", ing: [["白朗姆", "45 ml"], ["蓝色库拉索", "15 ml"], ["菠萝汁", "45 ml"], ["柠檬汁", "15 ml"], ["起泡酒", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻、更气泡。" },
      { zh: "Blue Hawaii Frozen", en: "Blue Hawaii Frozen", how: "加倍椰奶油，搅打至更厚的冰沙。", ing: [["白朗姆", "45 ml"], ["蓝色库拉索", "20 ml"], ["菠萝汁", "45 ml"], ["柠檬汁", "15 ml"], ["椰奶油", "30 ml"], ["碎冰", "1.5 杯"]], method: "搅拌机", glass: "Tiki 杯", note: "更像甜点，适合分享。" }
    ]
  },
  {
    id: "aperol-sour", zh: "阿佩罗酸", en: "Aperol Sour", fam: "sour", base: "liqueur", sub: "Aperol + 金酒",
    mods: ["citrus", "syrup", "cream"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["Aperol", "45 ml"], ["金酒", "30 ml"], ["柠檬汁", "25 ml"], ["单糖浆", "10 ml"], ["蛋清", "20 ml"]],
    steps: ["所有材料先干摇 15 秒。", "加冰摇和 12 秒，双重过滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "Aperol 的橙甜与金酒的植物香，加柠檬与蛋清变成一杯苦甜酸酒。不要额外加太多糖；Aperol 本身很甜。",
    flavor: ["苦香", "酸甜", "花香"],
    history: "Aperol Sour 是 21 世纪现代酒吧对 Aperol 的再创作，没有单一发明者。它把 Aperol 从 Spritz 的气泡语境里拿出来，放进酸酒结构，让橙苦与蛋清质地成为主角。",
    src: { tag: "现代经典", label: "当代酒吧创作 / Difford's Guide", url: "https://www.diffordsguide.com/" },
    v: [
      { zh: "Aperol Sour Fizz", en: "Aperol Sour Fizz", how: "省略蛋清，摇好后补 60 ml 苏打。", ing: [["Aperol", "45 ml"], ["金酒", "30 ml"], ["柠檬汁", "25 ml"], ["单糖浆", "10 ml"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，橙苦更直接。" },
      { zh: "Aperol Gin Sour", en: "Aperol Gin Sour", how: "Aperol 减到 30 ml，金酒加到 45 ml。", ing: [["Aperol", "30 ml"], ["金酒", "45 ml"], ["柠檬汁", "25 ml"], ["单糖浆", "10 ml"], ["蛋清", "20 ml"]], method: "摇和", glass: "碟形杯", note: "更酒感、更干。" }
    ]
  },
  {
    id: "pink-squirrel", zh: "粉红松鼠", en: "Pink Squirrel", fam: "flip", base: "liqueur", sub: "黑樱桃核利口酒",
    mods: ["coffee", "cream"], method: "摇和", glass: "碟形杯", strength: 2, diff: 1,
    ing: [["Crème de Noyaux", "30 ml"], ["白可可利口酒", "30 ml"], ["淡奶油", "30 ml"], ["肉豆蔻", "现磨"]],
    steps: ["所有液体加冰摇和 12 秒。", "双重过滤入冰镇碟形杯。", "现磨肉豆蔻装饰。"],
    gar: "现磨肉豆蔻",
    note: "威斯康星州经典甜点鸡尾酒。Crème de Noyaux 的杏仁/樱桃核香与白可可、奶油很合；甜度高，杯型要小。",
    flavor: ["奶滑", "咖啡", "花香"],
    history: "Pink Squirrel 在 1940–50 年代的美国中西部流行，尤其与威斯康星州的 supper club 文化相关。Crème de Noyaux、白可可与奶油，是战后甜点鸡尾酒的代表。",
    src: { tag: "经典文献", label: "1940s–50s 美国中西部 supper club", url: "" },
    v: [
      { zh: "Pink Squirrel Fizz", en: "Pink Squirrel Fizz", how: "摇好后补 45 ml 苏打。", ing: [["Crème de Noyaux", "30 ml"], ["白可可利口酒", "30 ml"], ["淡奶油", "20 ml"], ["苏打水", "45 ml"]], method: "摇和", glass: "高球杯", note: "更轻，坚果香更清晰。" },
      { zh: "Chocolate Pink Squirrel", en: "Chocolate Pink Squirrel", how: "加 10 ml 黑可可利口酒，减少白可可。", ing: [["Crème de Noyaux", "30 ml"], ["白可可利口酒", "20 ml"], ["黑可可利口酒", "10 ml"], ["淡奶油", "30 ml"]], method: "摇和", glass: "碟形杯", note: "可可苦味更明显。" }
    ]
  },
  {
    id: "tom-and-jerry", zh: "汤姆与杰瑞", en: "Tom and Jerry", fam: "hot", base: "brandy", sub: "干邑 + 朗姆",
    mods: ["cream", "syrup", "aromatic"], method: "直调", glass: "带柄马克杯", strength: 2, diff: 3,
    ing: [["干邑", "30 ml"], ["陈年朗姆", "30 ml"], ["全蛋", "1 个"], ["单糖浆", "15 ml"], ["热牛奶", "120 ml"], ["肉豆蔻", "现磨"]],
    steps: ["蛋黄与蛋白分开，蛋黄加糖浆打至发白，蛋白打至软峰后拌回。", "加入干邑与朗姆，搅成酒糊。", "杯中放 2 勺酒糊，冲入热牛奶，搅匀，现磨肉豆蔻。"],
    gar: "现磨肉豆蔻",
    note: "19 世纪美国冬季节日饮品。蛋糊（batter）可提前做好冷藏；热牛奶冲入时不要沸腾，否则蛋会结块。",
    flavor: ["奶滑", "温暖", "辛香"],
    history: "Tom and Jerry 是 19 世纪美国流行的热蛋奶潘趣，Jerry Thomas 1862 年的《Bartender's Guide》记录了蛋糊做法。它曾是圣诞节酒吧的标配，后来被 Eggnog 取代。",
    src: { tag: "经典文献", label: "Jerry Thomas, Bartender's Guide (1862)", url: "https://en.wikipedia.org/wiki/Tom_and_Jerry_(drink)" },
    v: [
      { zh: "Tom and Jerry Bowl", en: "Tom and Jerry Bowl", how: "按 6 人份加倍蛋糊与酒，热牛奶另装，现场冲入。", ing: [["干邑", "180 ml"], ["陈年朗姆", "180 ml"], ["全蛋", "6 个"], ["单糖浆", "90 ml"], ["热牛奶", "720 ml"], ["肉豆蔻", "适量"]], method: "直调", glass: "潘趣碗", note: "蛋糊冷藏可保存 2 天；热牛奶不要煮沸。" },
      { zh: "Brandy Tom and Jerry", en: "Brandy Tom and Jerry", how: "去掉朗姆，干邑加到 60 ml。", ing: [["干邑", "60 ml"], ["全蛋", "1 个"], ["单糖浆", "15 ml"], ["热牛奶", "120 ml"], ["肉豆蔻", "现磨"]], method: "直调", glass: "带柄马克杯", note: "更纯粹的白兰地香气。" }
    ]
  },
  {
    id: "mulled-wine", zh: "热红酒", en: "Mulled Wine", fam: "hot", base: "wine", sub: "红葡萄酒",
    mods: ["syrup", "aromatic", "citrus"], method: "直调", glass: "带柄马克杯", strength: 1, diff: 1,
    ing: [["红葡萄酒", "150 ml"], ["白兰地", "30 ml"], ["蜂蜜", "15 ml"], ["橙片", "2 片"], ["丁香", "3 粒"], ["肉桂", "1 根"], ["八角", "1 颗"]],
    steps: ["葡萄酒、白兰地、蜂蜜与香料放入小锅。", "小火加热至 70–80°C，不要煮沸，保持 10 分钟。", "滤入杯中，橙片装饰。"],
    gar: "橙片 + 肉桂",
    note: "热红酒的关键是“加热但不要沸腾”：沸腾会带走酒精与果香。蜂蜜先化开；香料不要久煮，否则发苦。",
    flavor: ["温暖", "辛香", "酸甜"],
    history: "Mulled Wine 是欧洲冬季的传统热饮，古罗马已有加香料加热葡萄酒的记载。中世纪起，德语的 Glühwein、北欧的 Glögg 与英国的 mulled wine 各自发展出不同香料配方。",
    src: { tag: "地区传统", label: "欧洲冬季热酒传统", url: "https://en.wikipedia.org/wiki/Mulled_wine" },
    v: [
      { zh: "White Mulled Wine", en: "White Mulled Wine", how: "用干白葡萄酒，减少蜂蜜，加柠檬皮。", ing: [["干白葡萄酒", "150 ml"], ["白兰地", "30 ml"], ["蜂蜜", "10 ml"], ["柠檬皮", "1 条"], ["肉桂", "1 根"], ["八角", "1 颗"]], method: "直调", glass: "带柄马克杯", note: "更轻，适合白葡萄酒爱好者。" },
      { zh: "Glögg", en: "Glögg", how: "加 15 ml 黑加仑利口酒与杏仁，北欧风格。", ing: [["红葡萄酒", "150 ml"], ["白兰地", "30 ml"], ["黑加仑利口酒", "15 ml"], ["蜂蜜", "10 ml"], ["肉桂", "1 根"], ["丁香", "3 粒"], ["杏仁", "5 颗"]], method: "直调", glass: "带柄马克杯", note: "黑加仑与杏仁让香气更复杂。" }
    ]
  },
  {
    id: "mr-bali-hai", zh: "巴厘海先生", en: "Mr. Bali Hai", fam: "tiki", base: "rum", sub: "黑朗姆",
    mods: ["juice", "liqueur", "syrup", "citrus"], method: "摇和", glass: "Tiki 杯", strength: 3, diff: 2,
    ing: [["黑朗姆", "45 ml"], ["咖啡利口酒", "15 ml"], ["菠萝汁", "45 ml"], ["柠檬汁", "15 ml"], ["单糖浆", "10 ml"]],
    steps: ["所有材料加冰摇和 12 秒。", "滤入加碎冰的 Tiki 杯。", "菠萝角与樱桃装饰。"],
    gar: "菠萝角 + 樱桃",
    note: "咖啡、菠萝与黑朗姆的组合，甜苦交织。咖啡利口酒 15 ml 足够；菠萝汁要新鲜，否则会太甜。",
    flavor: ["热带", "咖啡", "酸甜"],
    history: "Mr. Bali Hai 由 Don the Beachcomber 在 1950 年代为圣地亚哥 Bali Hai 餐厅创作，名字来自餐厅的巨型 Tiki 雕像。它是 Tiki 与咖啡利口酒结合的早期代表。",
    src: { tag: "Tiki 传统", label: "Don the Beachcomber / Bali Hai, 1950s", url: "https://en.wikipedia.org/wiki/Don_the_Beachcomber" },
    v: [
      { zh: "Mr. Bali Hai Royale", en: "Mr. Bali Hai Royale", how: "补 60 ml 起泡酒，减少糖浆。", ing: [["黑朗姆", "45 ml"], ["咖啡利口酒", "15 ml"], ["菠萝汁", "45 ml"], ["柠檬汁", "15 ml"], ["起泡酒", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，咖啡苦味被气泡拉长。" },
      { zh: "Mr. Bali Hai Old Fashioned", en: "Mr. Bali Hai Old Fashioned", how: "去掉果汁，咖啡利口酒 10 ml，搅拌。", ing: [["黑朗姆", "60 ml"], ["咖啡利口酒", "10 ml"], ["糖浆", "5 ml"], ["安高天娜", "1 dash"]], method: "搅拌", glass: "古典杯", note: "更烈、更干，像咖啡朗姆古典。" }
    ]
  },
  {
    id: "golden-dream", zh: "金色梦想", en: "Golden Dream", fam: "flip", base: "liqueur", sub: "Galliano",
    mods: ["liqueur", "juice", "cream"], method: "摇和", glass: "碟形杯", strength: 2, diff: 1,
    ing: [["Galliano", "20 ml"], ["君度", "20 ml"], ["橙汁", "20 ml"], ["淡奶油", "20 ml"], ["肉豆蔻", "现磨"]],
    steps: ["所有液体加冰摇和 12 秒。", "双重过滤入冰镇碟形杯。", "现磨肉豆蔻装饰。"],
    gar: "现磨肉豆蔻",
    note: "1960 年代的甜点鸡尾酒，四种材料等量。Galliano 的香草与茴香是骨架，橙汁提供酸，奶油负责圆润；甜度高，杯型要小。",
    flavor: ["奶滑", "花香", "温暖"],
    history: "Golden Dream 在 1960 年代美国酒吧流行，常被归入 Galliano 复兴时期的甜点鸡尾酒。它用 Galliano、君度、橙汁与奶油等量摇和，颜色金黄，是 Tiki 时代之后的餐后甜酒。",
    src: { tag: "经典文献", label: "1960s 美国甜点鸡尾酒 / Galliano", url: "https://en.wikipedia.org/wiki/Golden_Dream_(cocktail)" },
    v: [
      { zh: "Golden Dream Fizz", en: "Golden Dream Fizz", how: "摇好后补 45 ml 苏打。", ing: [["Galliano", "20 ml"], ["君度", "20 ml"], ["橙汁", "20 ml"], ["淡奶油", "15 ml"], ["苏打水", "45 ml"]], method: "摇和", glass: "高球杯", note: "更轻，香草与橙香更清晰。" },
      { zh: "Golden Cadillac", en: "Golden Cadillac", how: "用白可可利口酒替代君度与橙汁，结构更甜。", ing: [["Galliano", "30 ml"], ["白可可利口酒", "30 ml"], ["淡奶油", "30 ml"]], method: "摇和", glass: "碟形杯", note: "更甜、更可可，是另一杯经典甜点酒。" }
    ]
  },
  {
    id: "hotel-nacional", zh: "国家饭店", en: "Hotel Nacional", fam: "sour", base: "rum", sub: "陈年朗姆",
    mods: ["citrus", "juice", "liqueur", "syrup"], method: "摇和", glass: "碟形杯", strength: 3, diff: 1,
    ing: [["陈年朗姆", "45 ml"], ["菠萝汁", "20 ml"], ["青柠汁", "15 ml"], ["杏子白兰地", "10 ml"], ["单糖浆", "5 ml"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "青柠皮或菠萝角装饰。"],
    gar: "青柠皮 / 菠萝角",
    note: "哈瓦那 Hotel Nacional 的经典。菠萝与杏子白兰地提供果香，青柠与朗姆撑住骨架；不要把菠萝汁加多，否则会变成果汁。",
    flavor: ["热带", "酸甜", "花香"],
    history: "Hotel Nacional 得名于哈瓦那的 Hotel Nacional de Cuba，20 世纪上半叶在古巴酒吧流行。朗姆、菠萝、青柠与杏子白兰地的组合，是古巴“热带酸酒”的代表。",
    src: { tag: "经典文献", label: "哈瓦那 Hotel Nacional / 20 世纪经典", url: "" },
    v: [
      { zh: "Hotel Nacional Royale", en: "Hotel Nacional Royale", how: "摇和后补 60 ml 起泡酒，菠萝汁减到 15 ml。", ing: [["陈年朗姆", "45 ml"], ["菠萝汁", "15 ml"], ["青柠汁", "15 ml"], ["杏子白兰地", "10 ml"], ["起泡酒", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，适合早午餐。" },
      { zh: "Hotel Nacional Old Fashioned", en: "Hotel Nacional Old Fashioned", how: "去掉菠萝汁与糖浆，杏子白兰地 15 ml，搅拌。", ing: [["陈年朗姆", "60 ml"], ["杏子白兰地", "15 ml"], ["青柠皮", "1 片"], ["安高天娜", "1 dash"]], method: "搅拌", glass: "古典杯", note: "更烈，果香变成尾韵。" }
    ]
  },
  {
    id: "havana-special", zh: "哈瓦那特调", en: "Havana Special", fam: "highball", base: "rum", sub: "白朗姆",
    mods: ["juice", "citrus", "syrup"], method: "摇和", glass: "高球杯 / 飓风杯", strength: 2, diff: 1,
    ing: [["白朗姆", "45 ml"], ["菠萝汁", "30 ml"], ["青柠汁", "15 ml"], ["单糖浆", "10 ml"]],
    steps: ["所有材料加冰摇和 10 秒。", "滤入加碎冰的高球杯或飓风杯。", "菠萝角与樱桃装饰。"],
    gar: "菠萝角 + 樱桃",
    note: "哈瓦那的菠萝朗姆长饮。菠萝汁要新鲜，糖浆按菠萝甜度调整；碎冰会快速稀释，甜度可略高。",
    flavor: ["热带", "酸甜", "清爽"],
    history: "Havana Special 是 20 世纪上半叶古巴酒吧的经典长饮，常见于哈瓦那的旅游酒吧与酒店酒单。白朗姆、菠萝、青柠与糖浆，是“古巴式热带高球”的基本结构。",
    src: { tag: "地区传统", label: "古巴哈瓦那 / 热带高球传统", url: "" },
    v: [
      { zh: "Havana Special Royale", en: "Havana Special Royale", how: "补 60 ml 起泡酒，糖浆减半。", ing: [["白朗姆", "45 ml"], ["菠萝汁", "30 ml"], ["青柠汁", "15 ml"], ["起泡酒", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，气泡让菠萝更明亮。" },
      { zh: "Havana Special Frozen", en: "Havana Special Frozen", how: "与碎冰搅打成冰沙。", ing: [["白朗姆", "45 ml"], ["菠萝汁", "45 ml"], ["青柠汁", "15 ml"], ["单糖浆", "10 ml"], ["碎冰", "1 杯"]], method: "搅拌机", glass: "飓风杯", note: "更厚，适合夏天。" }
    ]
  },
  {
    id: "port-light", zh: "左舷灯", en: "Port Light", fam: "tiki", base: "whiskey", sub: "波本",
    mods: ["citrus", "syrup", "cream", "aromatic"], method: "摇和", glass: "古典杯", strength: 3, diff: 2,
    ing: [["波本", "45 ml"], ["百香果糖浆", "20 ml"], ["柠檬汁", "20 ml"], ["蜂蜜糖浆", "15 ml"], ["蛋清", "20 ml"]],
    steps: ["所有材料先干摇 15 秒。", "加冰摇和 12 秒，滤入加冰古典杯。", "百香果壳或柠檬皮装饰。"],
    gar: "柠檬皮 / 百香果壳",
    note: "波本、百香果、柠檬与蜂蜜的 Tiki 酸酒。百香果糖浆要酸，不能只是甜；蛋清让酒体更圆。",
    flavor: ["热带", "酸甜", "花香"],
    history: "Port Light 是 Tiki 中少见的波本基酒配方，常见于 Don the Beachcomber 体系与后来的 Tiki 复兴酒单。它把百香果、蜂蜜与波本放在酸酒结构里，颜色像左舷灯。",
    src: { tag: "Tiki 传统", label: "Tiki 经典 / Difford's Guide", url: "https://www.diffordsguide.com/" },
    v: [
      { zh: "Port Light Fizz", en: "Port Light Fizz", how: "省略蛋清，摇好后补 60 ml 苏打。", ing: [["波本", "45 ml"], ["百香果糖浆", "20 ml"], ["柠檬汁", "20 ml"], ["蜂蜜糖浆", "15 ml"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，百香果更直接。" },
      { zh: "Port Light Sour", en: "Port Light Sour", how: "用黑麦替代波本，蜂蜜减到 10 ml。", ing: [["黑麦", "45 ml"], ["百香果糖浆", "20 ml"], ["柠檬汁", "25 ml"], ["蜂蜜糖浆", "10 ml"], ["蛋清", "20 ml"]], method: "摇和", glass: "碟形杯", note: "更干、更辛香。" }
    ]
  },
  {
    id: "old-pal", zh: "老伙计", en: "Old Pal", fam: "duo", base: "whiskey", sub: "黑麦",
    mods: ["vermouth", "amaro", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["黑麦威士忌", "30 ml"], ["金巴利", "30 ml"], ["干味美思", "30 ml"], ["橙皮", "1 片"]],
    steps: ["所有液体加冰搅拌 20–25 秒。", "滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "内格罗尼的“干型表亲”：把甜味美思换成干味美思，苦味更锐利。黑麦的辛香与金巴利很合。",
    flavor: ["苦香", "草本", "温暖"],
    history: "Old Pal 在 1920 年代出现，常与巴黎 Harry's New York Bar 及《Savoy Cocktail Book》联系在一起。黑麦、金巴利与干味美思的等量组合，是“干内格罗尼”的经典写法。",
    src: { tag: "经典酒吧", label: "Harry's New York Bar / 1920s", url: "https://en.wikipedia.org/wiki/Old_Pal" },
    v: [
      { zh: "Old Pal Perfect", en: "Old Pal Perfect", how: "干、甜味美思各 15 ml，苦甜更平衡。", ing: [["黑麦", "30 ml"], ["金巴利", "30 ml"], ["干味美思", "15 ml"], ["甜味美思", "15 ml"]], method: "搅拌", glass: "碟形杯", note: "更圆润，适合不喜欢太干的人。" },
      { zh: "Old Pal Royale", en: "Old Pal Royale", how: "按等量搅拌后补 60 ml 起泡酒。", ing: [["黑麦", "30 ml"], ["金巴利", "30 ml"], ["干味美思", "30 ml"], ["起泡酒", "60 ml"]], method: "搅拌", glass: "香槟杯", note: "更轻，苦味被气泡拉长。" }
    ]
  },
  {
    id: "rebujito", zh: "雷布希托", en: "Rebujito", fam: "highball", base: "wine", sub: "Fino 雪莉",
    mods: ["mixer", "citrus", "aromatic"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["Fino 雪莉", "90 ml"], ["柠檬汽水", "90 ml"], ["薄荷", "4 片"], ["青柠角", "1 块"], ["冰", "满杯"]],
    steps: ["高球杯加满冰，放入薄荷与青柠角。", "倒入雪莉，补柠檬汽水。", "轻提拉，薄荷装饰。"],
    gar: "薄荷 + 青柠",
    note: "西班牙安达卢西亚的夏季喝法，常配 tapas。Fino 的咸鲜与柠檬汽水的甜酸很合；汽水要冰，倒得慢。",
    flavor: ["清爽", "酸甜", "草本"],
    history: "Rebujito 是西班牙南部（尤其安达卢西亚）的节日饮品，常见于塞维利亚的 Feria。它用 Fino 雪莉与柠檬汽水，酒精度低，适合白天与炎热天气。",
    src: { tag: "地区传统", label: "西班牙安达卢西亚 / Feria 传统", url: "https://en.wikipedia.org/wiki/Rebujito" },
    v: [
      { zh: "Rebujito Blanco", en: "Rebujito Blanco", how: "用 Manzanilla 雪莉，柠檬汽水换成苏打与柠檬汁。", ing: [["Manzanilla 雪莉", "90 ml"], ["苏打水", "90 ml"], ["柠檬汁", "10 ml"], ["薄荷", "4 片"]], method: "直调", glass: "高球杯", note: "更干、更咸鲜。" },
      { zh: "Rebujito Royale", en: "Rebujito Royale", how: "补 60 ml 起泡酒，减少汽水。", ing: [["Fino 雪莉", "60 ml"], ["起泡酒", "60 ml"], ["柠檬汽水", "30 ml"], ["薄荷", "4 片"]], method: "直调", glass: "高球杯", note: "更庆典，气泡更细。" }
    ]
  },
  {
    id: "kalimotxo", zh: "卡利莫乔", en: "Kalimotxo", fam: "highball", base: "wine", sub: "红葡萄酒",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["红葡萄酒", "90 ml"], ["可乐", "90 ml"], ["柠檬角", "1 块"], ["冰", "满杯"]],
    steps: ["高球杯加满冰。", "倒入红葡萄酒，再补可乐。", "轻搅，柠檬角装饰。"],
    gar: "柠檬角",
    note: "巴斯克地区的“可乐红酒”。甜、轻、便宜，适合大壶与户外；用简单、果味重的红葡萄酒，不要用昂贵的酒。",
    flavor: ["清爽", "酸甜", "温暖"],
    history: "Kalimotxo 起源于 1970 年代西班牙巴斯克地区，传说是在一场节日活动中把可乐加入劣质红酒而来。它如今是西班牙北部最常见的低酒精混合饮品之一。",
    src: { tag: "地区传统", label: "西班牙巴斯克 / 1970s", url: "https://en.wikipedia.org/wiki/Kalimotxo" },
    v: [
      { zh: "Kalimotxo Blanco", en: "Kalimotxo Blanco", how: "用干白葡萄酒替代红葡萄酒，加 10 ml 柠檬汁。", ing: [["干白葡萄酒", "90 ml"], ["可乐", "90 ml"], ["柠檬汁", "10 ml"]], method: "直调", glass: "高球杯", note: "更轻，酸度更明显。" },
      { zh: "Kalimotxo Cítrico", en: "Kalimotxo Cítrico", how: "加 15 ml 橙汁与 1 dash 苦精。", ing: [["红葡萄酒", "90 ml"], ["可乐", "90 ml"], ["橙汁", "15 ml"], ["安高天娜", "1 dash"]], method: "直调", glass: "高球杯", note: "橙香与苦精让甜味更有层次。" }
    ]
  },
  {
    id: "income-tax", zh: "所得税", en: "Income Tax", fam: "duo", base: "gin", sub: "London Dry",
    mods: ["vermouth", "citrus", "bitters", "aromatic"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["金酒", "45 ml"], ["甜味美思", "20 ml"], ["橙汁", "15 ml"], ["安高天娜", "2 dash"], ["橙味苦精", "1 dash"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "金酒、甜味美思、橙汁与两种苦精。橙汁只要 15 ml，负责连接味美思与苦精；不要加糖，甜味已经足够。",
    flavor: ["苦香", "花香", "酸甜"],
    history: "Income Tax 在 1930 年代流行，名字带着禁酒令后对“税务”的调侃。它常见于当时的美国与伦敦酒书，是金酒、味美思与橙汁组成的短饮。",
    src: { tag: "经典文献", label: "1930s 经典鸡尾酒记载", url: "" },
    v: [
      { zh: "Income Tax Fizz", en: "Income Tax Fizz", how: "摇好后补 60 ml 苏打。", ing: [["金酒", "45 ml"], ["甜味美思", "20 ml"], ["橙汁", "15 ml"], ["安高天娜", "2 dash"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，橙香更明显。" },
      { zh: "Income Tax Perfect", en: "Income Tax Perfect", how: "甜、干味美思各 10 ml。", ing: [["金酒", "45 ml"], ["甜味美思", "10 ml"], ["干味美思", "10 ml"], ["橙汁", "15 ml"], ["橙味苦精", "1 dash"]], method: "摇和", glass: "碟形杯", note: "更干，结构更像 Perfect Martini。" }
    ]
  },
  {
    id: "claridge", zh: "克拉里奇", en: "Claridge", fam: "duo", base: "gin", sub: "London Dry",
    mods: ["vermouth", "liqueur", "aromatic"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["金酒", "30 ml"], ["干味美思", "30 ml"], ["杏子白兰地", "15 ml"], ["君度", "15 ml"]],
    steps: ["所有液体加冰搅拌 20–25 秒。", "滤入冰镇碟形杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "金酒与干味美思等量，杏子白兰地与君度补果香。它像一杯更甜、更果味的马天尼；搅拌而非摇和，保持清澈。",
    flavor: ["花香", "温暖", "草本"],
    history: "Claridge 得名于伦敦 Claridge's 酒店，1920–30 年代常见于欧洲酒吧酒单。金酒、干味美思、杏子白兰地与君度的组合，是“酒店式马天尼”的代表。",
    src: { tag: "经典酒吧", label: "Claridge's, London / 1920s–30s", url: "" },
    v: [
      { zh: "Claridge Royale", en: "Claridge Royale", how: "搅拌后补 60 ml 起泡酒。", ing: [["金酒", "30 ml"], ["干味美思", "30 ml"], ["杏子白兰地", "15 ml"], ["君度", "15 ml"], ["起泡酒", "60 ml"]], method: "搅拌", glass: "香槟杯", note: "更轻，果香与气泡。" },
      { zh: "Claridge Dry", en: "Claridge Dry", how: "干味美思加到 40 ml，君度减到 10 ml。", ing: [["金酒", "40 ml"], ["干味美思", "40 ml"], ["杏子白兰地", "10 ml"], ["君度", "10 ml"]], method: "搅拌", glass: "碟形杯", note: "更干，更接近马天尼。" }
    ]
  },
  {
    id: "tinto-de-verano", zh: "夏日红酒", en: "Tinto de Verano", fam: "highball", base: "wine", sub: "红葡萄酒",
    mods: ["mixer", "citrus"], method: "直调", glass: "高球杯", strength: 1, diff: 1,
    ing: [["红葡萄酒", "90 ml"], ["柠檬汽水", "90 ml"], ["柠檬片", "1 片"], ["冰", "满杯"]],
    steps: ["高球杯加满冰。", "倒入红葡萄酒，补柠檬汽水。", "轻搅，柠檬片装饰。"],
    gar: "柠檬片",
    note: "西班牙夏天的“红酒 + 柠檬汽水”，比 Sangria 更简单。用年轻、果味重的红葡萄酒；汽水要冰。",
    flavor: ["清爽", "酸甜", "温暖"],
    history: "Tinto de Verano 是西班牙夏季最常见的低酒精饮品之一，名字意为“夏日红酒”。它通常用红葡萄酒与柠檬汽水/苏打，和 Sangria 的区别是不加烈酒与大量水果。",
    src: { tag: "地区传统", label: "西班牙夏季 / Tinto de Verano", url: "https://en.wikipedia.org/wiki/Tinto_de_Verano" },
    v: [
      { zh: "Tinto Blanco", en: "Tinto Blanco", how: "用干白葡萄酒替代红葡萄酒，加 10 ml 柠檬汁。", ing: [["干白葡萄酒", "90 ml"], ["柠檬汽水", "90 ml"], ["柠檬汁", "10 ml"]], method: "直调", glass: "高球杯", note: "更轻、更酸。" },
      { zh: "Tinto de Verano Royale", en: "Tinto de Verano Royale", how: "补 60 ml 起泡酒，减少汽水。", ing: [["红葡萄酒", "60 ml"], ["起泡酒", "60 ml"], ["柠檬汽水", "30 ml"], ["柠檬片", "1 片"]], method: "直调", glass: "高球杯", note: "更有气泡感，适合庆典。" }
    ]
  },
  {
    id: "shandy", zh: "香迪", en: "Shandy", fam: "highball", base: "beer", sub: "拉格 / 淡色艾尔",
    mods: ["mixer", "citrus"], method: "直调", glass: "啤酒杯", strength: 1, diff: 1,
    ing: [["拉格啤酒", "150 ml"], ["柠檬汽水", "150 ml"], ["柠檬片", "1 片"], ["冰", "满杯"]],
    steps: ["啤酒杯加满冰。", "先倒啤酒，再补柠檬汽水。", "轻搅，柠檬片装饰。"],
    gar: "柠檬片",
    note: "啤酒与柠檬汽水各半，酒精度低、清爽。啤酒选清淡拉格，汽水不要太甜；先倒啤酒再加汽水，气泡更稳。",
    flavor: ["清爽", "酸甜", "苦香"],
    history: "Shandy 是英国与欧洲常见的啤酒混合饮品，常见做法是啤酒加柠檬汽水或姜汁汽水。法国的 Panaché 是它的近亲；具体起源不详，属于工人阶层与夏季酒吧文化。",
    src: { tag: "地区传统", label: "英国 / 欧洲啤酒混合传统", url: "https://en.wikipedia.org/wiki/Shandy" },
    v: [
      { zh: "Panaché", en: "Panaché", how: "用法式柠檬汽水，比例改为啤酒 120 ml、汽水 180 ml。", ing: [["拉格啤酒", "120 ml"], ["柠檬汽水", "180 ml"], ["柠檬片", "1 片"]], method: "直调", glass: "啤酒杯", note: "更轻、更甜，法国酒吧常见。" },
      { zh: "Radler", en: "Radler", how: "用德式柠檬汽水，啤酒与汽水各 150 ml。", ing: [["拉格啤酒", "150 ml"], ["德式柠檬汽水", "150 ml"], ["柠檬片", "1 片"]], method: "直调", glass: "啤酒杯", note: "德语区的 Radler，适合骑行后饮用。" }
    ]
  },
  {
    id: "brooklyn", zh: "布鲁克林", en: "Brooklyn", fam: "duo", base: "whiskey", sub: "黑麦",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["黑麦威士忌", "60 ml"], ["干味美思", "20 ml"], ["黑樱桃利口酒", "15 ml"], ["Amer Picon", "5 ml"]],
    steps: ["所有液体加冰搅拌 20–25 秒。", "滤入冰镇碟形杯。", "橙皮或樱桃装饰。"],
    gar: "橙皮 / 樱桃",
    note: "曼哈顿的布鲁克林变体：干味美思、黑樱桃与 Amer Picon 的苦橙。Amer Picon 不易买，可用 1 dash 橙味苦精加 5 ml 阿玛罗替代。",
    flavor: ["苦香", "温暖", "花香"],
    history: "Brooklyn 见于 1908 年的调酒书，得名于纽约布鲁克林区。它用黑麦、干味美思、黑樱桃与 Amer Picon，是曼哈顿家族中苦橙味最明显的一支。",
    src: { tag: "经典文献", label: "1908 经典鸡尾酒记载", url: "" },
    v: [
      { zh: "Brooklyn Modern", en: "Brooklyn Modern", how: "用 1 dash 橙味苦精 + 5 ml 阿玛罗替代 Amer Picon。", ing: [["黑麦", "60 ml"], ["干味美思", "20 ml"], ["黑樱桃利口酒", "15 ml"], ["阿玛罗", "5 ml"], ["橙味苦精", "1 dash"]], method: "搅拌", glass: "碟形杯", note: "更易复现，苦橙与草本仍在。" },
      { zh: "Brooklyn Perfect", en: "Brooklyn Perfect", how: "干、甜味美思各 10 ml。", ing: [["黑麦", "60 ml"], ["干味美思", "10 ml"], ["甜味美思", "10 ml"], ["黑樱桃利口酒", "15 ml"], ["Amer Picon", "5 ml"]], method: "搅拌", glass: "碟形杯", note: "更圆润，适合不喜欢太干的人。" }
    ]
  },
  {
    id: "red-hook", zh: "红钩", en: "Red Hook", fam: "duo", base: "whiskey", sub: "黑麦",
    mods: ["vermouth", "liqueur"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 1,
    ing: [["黑麦威士忌", "60 ml"], ["Punt e Mes", "20 ml"], ["黑樱桃利口酒", "10 ml"]],
    steps: ["所有液体加冰搅拌 20–25 秒。", "滤入冰镇碟形杯。", "樱桃装饰。"],
    gar: "樱桃",
    note: "布鲁克林 Red Hook 区的现代经典。Punt e Mes 比甜味美思更苦，黑樱桃只需 10 ml；不要加苦精，苦味已够。",
    flavor: ["苦香", "温暖", "花香"],
    history: "Red Hook 由纽约 Milk & Honey 的 Vincenzo Errico 在 2000 年代创作，以布鲁克林 Red Hook 区命名。它是曼哈顿的现代变体，用 Punt e Mes 替代甜味美思。",
    src: { tag: "现代经典", label: "Vincenzo Errico / Milk & Honey", url: "https://www.diffordsguide.com/" },
    v: [
      { zh: "Red Hook Perfect", en: "Red Hook Perfect", how: "Punt e Mes 减到 10 ml，加 10 ml 干味美思。", ing: [["黑麦", "60 ml"], ["Punt e Mes", "10 ml"], ["干味美思", "10 ml"], ["黑樱桃利口酒", "10 ml"]], method: "搅拌", glass: "碟形杯", note: "更干，苦味更收。" },
      { zh: "Red Hook Boulevardier", en: "Red Hook Boulevardier", how: "加 15 ml 金巴利，Punt e Mes 减到 10 ml。", ing: [["黑麦", "45 ml"], ["金巴利", "15 ml"], ["Punt e Mes", "10 ml"], ["黑樱桃利口酒", "10 ml"]], method: "搅拌", glass: "碟形杯", note: "更苦、更红色。" }
    ]
  },
  {
    id: "bensonhurst", zh: "本森赫斯特", en: "Bensonhurst", fam: "duo", base: "whiskey", sub: "黑麦",
    mods: ["vermouth", "liqueur", "amaro"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["黑麦威士忌", "60 ml"], ["干味美思", "20 ml"], ["黑樱桃利口酒", "10 ml"], ["Cynar", "10 ml"]],
    steps: ["所有液体加冰搅拌 20–25 秒。", "滤入冰镇碟形杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "布鲁克林系列的另一个区名。Cynar 的朝鲜蓟苦与黑樱桃的果香，让黑麦更草本；不要加糖。",
    flavor: ["苦香", "草本", "温暖"],
    history: "Bensonhurst 由纽约 Milk & Honey 的调酒师在 2000 年代创作，以布鲁克林 Bensonhurst 区命名。它是 Red Hook 的 Cynar 版本，属于现代“布鲁克林家族”。",
    src: { tag: "现代经典", label: "Milk & Honey / 2000s", url: "https://www.diffordsguide.com/" },
    v: [
      { zh: "Bensonhurst Bianco", en: "Bensonhurst Bianco", how: "用 Lillet Blanc 替代干味美思，Cynar 减到 5 ml。", ing: [["黑麦", "60 ml"], ["Lillet Blanc", "20 ml"], ["黑樱桃利口酒", "10 ml"], ["Cynar", "5 ml"]], method: "搅拌", glass: "碟形杯", note: "更柔和、更花香。" },
      { zh: "Bensonhurst Fizz", en: "Bensonhurst Fizz", how: "摇和后补 60 ml 苏打。", ing: [["黑麦", "60 ml"], ["干味美思", "20 ml"], ["黑樱桃利口酒", "10 ml"], ["Cynar", "10 ml"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，Cynar 的苦味被气泡拉长。" }
    ]
  },
  {
    id: "jack-rose", zh: "杰克玫瑰", en: "Jack Rose", fam: "sour", base: "brandy", sub: "苹果白兰地",
    mods: ["citrus", "syrup"], method: "摇和", glass: "碟形杯", strength: 3, diff: 1,
    ing: [["苹果白兰地", "60 ml"], ["柠檬汁", "25 ml"], ["石榴糖浆", "15 ml"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "柠檬皮或苹果片装饰。"],
    gar: "柠檬皮 / 苹果片",
    note: "苹果白兰地、柠檬与石榴糖浆的经典酸酒。石榴糖浆只要 15 ml，过多会盖住苹果；苹果白兰地要选有真实果香的。",
    flavor: ["酸甜", "花香", "温暖"],
    history: "Jack Rose 在 20 世纪初流行，名字可能来自苹果白兰地“Applejack”与玫瑰色酒液。它是美国禁酒令前后最受欢迎的苹果白兰地酸酒之一。",
    src: { tag: "经典文献", label: "20 世纪初美国经典", url: "https://en.wikipedia.org/wiki/Jack_Rose" },
    v: [
      { zh: "Jack Rose Royale", en: "Jack Rose Royale", how: "摇和后补 60 ml 起泡酒。", ing: [["苹果白兰地", "45 ml"], ["柠檬汁", "20 ml"], ["石榴糖浆", "10 ml"], ["起泡酒", "60 ml"]], method: "摇和", glass: "香槟杯", note: "更轻，苹果香更明亮。" },
      { zh: "Jack Rose Fizz", en: "Jack Rose Fizz", how: "摇好后补 60 ml 苏打。", ing: [["苹果白兰地", "60 ml"], ["柠檬汁", "25 ml"], ["石榴糖浆", "15 ml"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "更清爽，适合夏天。" }
    ]
  },
  {
    id: "corn-n-oil", zh: "玉米与油", en: "Corn n' Oil", fam: "highball", base: "rum", sub: "黑朗姆",
    mods: ["citrus", "syrup"], method: "摇和", glass: "古典杯", strength: 3, diff: 1,
    ing: [["黑朗姆", "60 ml"], ["法勒南", "15 ml"], ["青柠汁", "15 ml"], ["安高天娜", "1 dash"]],
    steps: ["所有材料加冰摇和 10 秒。", "滤入加冰古典杯。", "青柠角装饰。"],
    gar: "青柠角",
    note: "巴巴多斯的朗姆酸酒，名字来自法勒南的“油”质感与朗姆的“玉米”甜。法勒南 15 ml 足够，青柠要新鲜。",
    flavor: ["热带", "酸甜", "辛香"],
    history: "Corn n' Oil 是巴巴多斯的传统朗姆饮品，名字来源有不同说法。它用黑朗姆、法勒南与青柠，是加勒比“朗姆 + 香料糖浆”结构的代表。",
    src: { tag: "地区传统", label: "巴巴多斯 / 加勒比朗姆传统", url: "https://en.wikipedia.org/wiki/Corn_n%27_Oil" },
    v: [
      { zh: "Corn n' Oil Fizz", en: "Corn n' Oil Fizz", how: "摇好后补 60 ml 苏打。", ing: [["黑朗姆", "60 ml"], ["法勒南", "15 ml"], ["青柠汁", "15 ml"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻，法勒南的香料更明显。" },
      { zh: "Corn n' Oil Old Fashioned", en: "Corn n' Oil Old Fashioned", how: "去掉青柠，法勒南 10 ml，搅拌。", ing: [["黑朗姆", "60 ml"], ["法勒南", "10 ml"], ["安高天娜", "2 dash"]], method: "搅拌", glass: "古典杯", note: "更烈，像香料朗姆古典。" }
    ]
  },
  {
    id: "coronation", zh: "加冕", en: "Coronation", fam: "duo", base: "gin", sub: "London Dry",
    mods: ["vermouth", "liqueur", "bitters"], method: "搅拌", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["金酒", "45 ml"], ["干味美思", "20 ml"], ["黑樱桃利口酒", "10 ml"], ["橙味苦精", "1 dash"]],
    steps: ["所有液体加冰搅拌 20–25 秒。", "滤入冰镇碟形杯。", "橙皮油装饰。"],
    gar: "橙皮",
    note: "1930 年代为英王乔治六世加冕而命名的鸡尾酒。金酒、干味美思与黑樱桃，结构像更干、更樱桃的曼哈顿。",
    flavor: ["花香", "苦香", "温暖"],
    history: "Coronation 在 1937 年英王乔治六世加冕前后流行，常见于当时的英国酒书。它用金酒、干味美思、黑樱桃与橙味苦精，是“加冕鸡尾酒”的经典版本。",
    src: { tag: "经典文献", label: "1937 英国加冕 / 经典记载", url: "" },
    v: [
      { zh: "Coronation Royale", en: "Coronation Royale", how: "搅拌后补 60 ml 起泡酒。", ing: [["金酒", "45 ml"], ["干味美思", "20 ml"], ["黑樱桃利口酒", "10 ml"], ["起泡酒", "60 ml"]], method: "搅拌", glass: "香槟杯", note: "更轻，樱桃香与气泡。" },
      { zh: "Coronation Perfect", en: "Coronation Perfect", how: "干、甜味美思各 10 ml。", ing: [["金酒", "45 ml"], ["干味美思", "10 ml"], ["甜味美思", "10 ml"], ["黑樱桃利口酒", "10 ml"]], method: "搅拌", glass: "碟形杯", note: "更圆润，适合不喜欢太干的人。" }
    ]
  },
  {
    id: "gibson", zh: "吉布森", en: "Gibson", fam: "duo", base: "gin", sub: "London Dry",
    mods: ["vermouth"], method: "搅拌", glass: "马天尼杯", strength: 4, diff: 1,
    ing: [["金酒", "60 ml"], ["干味美思", "15 ml"], ["珍珠洋葱", "1 颗"]],
    steps: ["金酒与干味美思加冰搅拌 20–25 秒。", "滤入冰镇马天尼杯。", "放入一颗珍珠洋葱。"],
    gar: "珍珠洋葱",
    note: "与干马天尼同结构，装饰从橄榄换成珍珠洋葱。洋葱的辛香比橄榄更锐利，适合想要更干、更冷的一杯。",
    flavor: ["草本", "辛香", "清爽"],
    history: "Gibson 在 20 世纪初出现，常被归为干马天尼的洋葱装饰版本。名字来源有多个说法，最流行的是与插画家 Charles Dana Gibson 或某位同名调酒师有关，均无确证。",
    src: { tag: "经典文献", label: "20 世纪初经典鸡尾酒记载", url: "" },
    v: [
      { zh: "Gibson Dry", en: "Gibson Dry", how: "干味美思减到 8 ml，更干。", ing: [["金酒", "65 ml"], ["干味美思", "8 ml"], ["珍珠洋葱", "1 颗"]], method: "搅拌", glass: "马天尼杯", note: "更冷、更锐利。" },
      { zh: "Gibson Pickled", en: "Gibson Pickled", how: "加 5 ml 洋葱腌渍液。", ing: [["金酒", "60 ml"], ["干味美思", "15 ml"], ["洋葱腌渍液", "5 ml"], ["珍珠洋葱", "1 颗"]], method: "搅拌", glass: "马天尼杯", note: "带一点酸与咸，像更干的 Dirty Martini。" }
    ]
  },
  {
    id: "dirty-martini", zh: "脏马天尼", en: "Dirty Martini", fam: "duo", base: "gin", sub: "London Dry",
    mods: ["vermouth"], method: "搅拌", glass: "马天尼杯", strength: 4, diff: 1,
    ing: [["金酒", "60 ml"], ["干味美思", "10 ml"], ["橄榄盐水", "15 ml"], ["橄榄", "2 颗"]],
    steps: ["金酒、干味美思与橄榄盐水加冰搅拌 20 秒。", "滤入冰镇马天尼杯。", "放入橄榄。"],
    gar: "橄榄",
    note: "橄榄盐水带来咸鲜与浑浊，不是“把马天尼弄脏”。盐水要新鲜、不过咸；15 ml 是明显但不压倒金酒的起点。",
    flavor: ["草本", "苦香", "清爽"],
    history: "Dirty Martini 在 20 世纪中后期流行，是干马天尼加入橄榄盐水的变体。具体发明者不详；它把马天尼从餐前短饮变成更咸鲜、更适合配咸味小食的饮品。",
    src: { tag: "经典文献", label: "20 世纪中后期美国酒吧", url: "" },
    v: [
      { zh: "Filthy Martini", en: "Filthy Martini", how: "橄榄盐水加到 25 ml，减少干味美思。", ing: [["金酒", "60 ml"], ["干味美思", "5 ml"], ["橄榄盐水", "25 ml"], ["橄榄", "3 颗"]], method: "搅拌", glass: "马天尼杯", note: "更咸、更浑，适合重口味。" },
      { zh: "Dirty Vodka Martini", en: "Dirty Vodka Martini", how: "用伏特加替代金酒。", ing: [["伏特加", "60 ml"], ["干味美思", "10 ml"], ["橄榄盐水", "15 ml"], ["橄榄", "2 颗"]], method: "搅拌", glass: "马天尼杯", note: "更中性，咸鲜更直接。" }
    ]
  },
  {
    id: "sloe-gin-fizz", zh: "黑刺李金菲士", en: "Sloe Gin Fizz", fam: "collins", base: "liqueur", sub: "Sloe Gin",
    mods: ["citrus", "syrup", "mixer"], method: "摇和", glass: "高球杯", strength: 2, diff: 1,
    ing: [["Sloe Gin", "45 ml"], ["柠檬汁", "25 ml"], ["单糖浆", "15 ml"], ["苏打水", "90 ml"]],
    steps: ["Sloe Gin、柠檬与糖浆加冰摇和 10 秒。", "滤入加冰高球杯。", "补苏打，轻提拉，柠檬片装饰。"],
    gar: "柠檬片",
    note: "Sloe Gin 是黑刺李浸泡的金酒，带果香与柔和单宁。它比普通金菲士更红、更果味，但仍然是酸酒 + 气泡的结构。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Sloe Gin Fizz 在 19 世纪末与 20 世纪初流行，是金菲士家族的黑刺李版本。Sloe Gin 在英国乡间常被家庭自制，20 世纪后期随经典鸡尾酒复兴回到酒吧。",
    src: { tag: "经典文献", label: "19–20 世纪金菲士传统", url: "" },
    v: [
      { zh: "Sloe Gin Collins", en: "Sloe Gin Collins", how: "苏打加到 120 ml，杯型换成柯林斯杯。", ing: [["Sloe Gin", "45 ml"], ["柠檬汁", "25 ml"], ["单糖浆", "15 ml"], ["苏打水", "120 ml"]], method: "摇和", glass: "柯林斯杯", note: "更轻、更长。" },
      { zh: "Sloe Gin Sour", en: "Sloe Gin Sour", how: "去掉苏打，加 20 ml 蛋清，摇和后滤入碟形杯。", ing: [["Sloe Gin", "60 ml"], ["柠檬汁", "25 ml"], ["单糖浆", "15 ml"], ["蛋清", "20 ml"]], method: "摇和", glass: "碟形杯", note: "更浓郁，黑刺李果香与泡沫。" }
    ]
  },
  {
    id: "gin-rickey", zh: "金瑞奇", en: "Gin Rickey", fam: "highball", base: "gin", sub: "London Dry",
    mods: ["citrus", "mixer"], method: "直调", glass: "高球杯", strength: 2, diff: 1,
    ing: [["金酒", "45 ml"], ["青柠汁", "20 ml"], ["苏打水", "120 ml"], ["青柠角", "1 块"]],
    steps: ["高球杯加满冰，倒入金酒与青柠汁。", "补苏打水，轻搅。", "放入青柠角。"],
    gar: "青柠角",
    note: "金瑞奇是“金酒 + 青柠 + 苏打”，不加糖，比金菲士更干。青柠要鲜榨，苏打要冰；它适合炎热天气与不喜欢甜味的人。",
    flavor: ["清爽", "酸甜", "草本"],
    history: "Gin Rickey 在 1880 年代于华盛顿特区流行，常被归功于民主党说客 Joe Rickey。它用青柠与苏打把金酒拉长，不加糖，是 Highball 家族的经典之一。",
    src: { tag: "经典文献", label: "1880s 美国 Highball 传统", url: "" },
    v: [
      { zh: "Rum Rickey", en: "Rum Rickey", how: "用白朗姆替代金酒。", ing: [["白朗姆", "45 ml"], ["青柠汁", "20 ml"], ["苏打水", "120 ml"], ["青柠角", "1 块"]], method: "直调", glass: "高球杯", note: "更清甜，朗姆的甘蔗香。" },
      { zh: "Ricky with Syrup", en: "Ricky with Syrup", how: "加 10 ml 单糖浆，接近金菲士。", ing: [["金酒", "45 ml"], ["青柠汁", "20 ml"], ["单糖浆", "10 ml"], ["苏打水", "120 ml"]], method: "直调", glass: "高球杯", note: "更圆润，适合不喜欢太干的人。" }
    ]
  },
  {
    id: "hot-buttered-rum", zh: "热黄油朗姆", en: "Hot Buttered Rum", fam: "hot", base: "rum", sub: "黑朗姆",
    mods: ["syrup", "aromatic", "cream"], method: "直调", glass: "带柄马克杯", strength: 2, diff: 2,
    ing: [["黑朗姆", "60 ml"], ["黄油", "10 g"], ["红糖", "10 g"], ["热水", "120 ml"], ["肉桂", "1 根"], ["肉豆蔻", "现磨"]],
    steps: ["杯中放入黄油、红糖与少量热水，搅成糖油。", "加入朗姆与剩余热水，搅匀。", "肉桂与现磨肉豆蔻装饰。"],
    gar: "肉桂 + 肉豆蔻",
    note: "黄油、红糖与朗姆的冬季热饮。黄油要软化但不要融化到油水分离；红糖先用热水化开，口感更顺。",
    flavor: ["奶滑", "温暖", "辛香"],
    history: "Hot Buttered Rum 在北美殖民时期已出现，是冬季与节日的传统热饮。朗姆、黄油、红糖与香料，后来成为滑雪度假地与老式酒吧的冬季符号。",
    src: { tag: "地区传统", label: "北美冬季热饮传统", url: "" },
    v: [
      { zh: "Hot Buttered Bourbon", en: "Hot Buttered Bourbon", how: "用波本替代黑朗姆。", ing: [["波本", "60 ml"], ["黄油", "10 g"], ["红糖", "10 g"], ["热水", "120 ml"], ["肉桂", "1 根"]], method: "直调", glass: "带柄马克杯", note: "更橡木、更甜。" },
      { zh: "Hot Buttered Cider", en: "Hot Buttered Cider", how: "用热苹果酒替代热水，朗姆减到 45 ml。", ing: [["黑朗姆", "45 ml"], ["热苹果酒", "150 ml"], ["黄油", "10 g"], ["红糖", "5 g"], ["肉桂", "1 根"]], method: "直调", glass: "带柄马克杯", note: "苹果与黄油很搭，适合节日。" }
    ]
  },
  {
    id: "milk-punch", zh: "牛奶潘趣", en: "Milk Punch", fam: "punch", base: "brandy", sub: "干邑",
    mods: ["cream", "syrup", "aromatic"], method: "摇和", glass: "古典杯", strength: 2, diff: 2,
    ing: [["干邑", "45 ml"], ["牛奶", "60 ml"], ["单糖浆", "15 ml"], ["香草精", "1 dash"], ["肉豆蔻", "现磨"]],
    steps: ["所有液体加冰摇和 12 秒。", "双重过滤入加冰古典杯。", "现磨肉豆蔻装饰。"],
    gar: "现磨肉豆蔻",
    note: "牛奶潘趣是“可饮用的甜点”，但必须冷、必须够酒。牛奶与干邑的比例可按 1:1 到 2:1 调整；肉豆蔻是必要收尾。",
    flavor: ["奶滑", "温暖", "花香"],
    history: "Milk Punch 在 18–19 世纪的英美酒吧流行，是潘趣家族加入牛奶的版本。它常被当作早餐或宿醉饮品，后来成为新奥尔良与经典酒吧的冬季/早午餐鸡尾酒。",
    src: { tag: "经典文献", label: "18–19 世纪英美潘趣传统", url: "" },
    v: [
      { zh: "Bourbon Milk Punch", en: "Bourbon Milk Punch", how: "用波本替代干邑。", ing: [["波本", "45 ml"], ["牛奶", "60 ml"], ["单糖浆", "15 ml"], ["香草精", "1 dash"]], method: "摇和", glass: "古典杯", note: "更甜、更橡木。" },
      { zh: "Clarified Milk Punch", en: "Clarified Milk Punch", how: "按批量加入柠檬与牛奶，静置后过滤澄清。", ing: [["干邑", "200 ml"], ["牛奶", "200 ml"], ["柠檬汁", "60 ml"], ["单糖浆", "60 ml"], ["热水", "100 ml"]], method: "直调", glass: "小杯", note: "需要提前一天过滤；澄清后更轻、更保存。" }
    ]
  },
  {
    id: "sangria", zh: "桑格利亚", en: "Sangria", fam: "punch", base: "wine", sub: "红葡萄酒",
    mods: ["juice", "liqueur", "citrus", "syrup"], method: "直调", glass: "大葡萄酒杯 / 潘趣杯", strength: 1, diff: 1,
    ing: [["红葡萄酒", "120 ml"], ["白兰地", "30 ml"], ["橙汁", "30 ml"], ["单糖浆", "10 ml"], ["橙片", "2 片"], ["柠檬片", "1 片"], ["冰", "满杯"]],
    steps: ["葡萄酒、白兰地、橙汁与糖浆搅匀。", "加入水果与冰，冷藏 30 分钟。", "倒入杯中，补水果装饰。"],
    gar: "橙片 + 柠檬片",
    note: "桑格利亚是“红酒 + 水果 + 少量烈酒”的批量饮品。不要用昂贵红酒；糖浆按酒与水果甜度调整，冷藏后更好喝。",
    flavor: ["清爽", "酸甜", "温暖"],
    history: "Sangria 源自西班牙与葡萄牙，19 世纪已有红酒加水果与糖的喝法。它在 1964 年纽约世博会之后在美国流行，成为夏季潘趣与西班牙餐厅的常见饮品。",
    src: { tag: "地区传统", label: "西班牙 / 葡萄牙红酒潘趣", url: "" },
    v: [
      { zh: "Sangria Blanca", en: "Sangria Blanca", how: "用干白葡萄酒，加 15 ml 柠檬汁。", ing: [["干白葡萄酒", "120 ml"], ["白兰地", "20 ml"], ["柠檬汁", "15 ml"], ["单糖浆", "10 ml"], ["柠檬片", "2 片"]], method: "直调", glass: "大葡萄酒杯", note: "更轻、更酸，适合夏天。" },
      { zh: "Sangria Royale", en: "Sangria Royale", how: "补 60 ml 起泡酒，减少糖浆。", ing: [["红葡萄酒", "90 ml"], ["白兰地", "20 ml"], ["橙汁", "20 ml"], ["起泡酒", "90 ml"], ["橙片", "1 片"]], method: "直调", glass: "大葡萄酒杯", note: "更有气泡，适合庆典。" }
    ]
  },
  {
    id: "agua-de-valencia", zh: "瓦伦西亚之水", en: "Agua de Valencia", fam: "punch", base: "wine", sub: "Cava",
    mods: ["juice", "liqueur", "citrus"], method: "直调", glass: "大葡萄酒杯 / 潘趣杯", strength: 2, diff: 1,
    ing: [["Cava", "90 ml"], ["橙汁", "90 ml"], ["金酒", "15 ml"], ["伏特加", "15 ml"], ["橙片", "1 片"], ["冰", "满杯"]],
    steps: ["杯中加冰，倒入金酒与伏特加。", "加入橙汁，补 Cava。", "轻搅，橙片装饰。"],
    gar: "橙片",
    note: "瓦伦西亚的早午餐/节日饮品：Cava、橙汁、金酒与伏特加。它像含酒精的橙汁，但酒精度不低；橙汁必须鲜榨。",
    flavor: ["清爽", "酸甜", "花香"],
    history: "Agua de Valencia 起源于 1950 年代的西班牙瓦伦西亚，常被归功于当地酒吧将橙汁、Cava 与烈酒混合。它现在是瓦伦西亚 Fallas 节与周末早午餐的常见饮品。",
    src: { tag: "地区传统", label: "西班牙瓦伦西亚 / 1950s", url: "" },
    v: [
      { zh: "Agua de Valencia Royale", en: "Agua de Valencia Royale", how: "Cava 加到 120 ml，减少橙汁。", ing: [["Cava", "120 ml"], ["橙汁", "60 ml"], ["金酒", "15 ml"], ["伏特加", "15 ml"]], method: "直调", glass: "大葡萄酒杯", note: "更气泡、更干。" },
      { zh: "Agua de Sevilla", en: "Agua de Sevilla", how: "加 15 ml 黑加仑利口酒，颜色更深。", ing: [["Cava", "90 ml"], ["橙汁", "60 ml"], ["金酒", "15 ml"], ["黑加仑利口酒", "15 ml"]], method: "直调", glass: "大葡萄酒杯", note: "黑加仑的果香更浓。" }
    ]
  },
  {
    id: "sherry-flip", zh: "雪莉菲力普", en: "Sherry Flip", fam: "flip", base: "wine", sub: "Fino 雪莉",
    mods: ["cream", "syrup", "aromatic"], method: "摇和", glass: "碟形杯", strength: 2, diff: 2,
    ing: [["Fino 雪莉", "60 ml"], ["全蛋", "1 个"], ["单糖浆", "15 ml"], ["肉豆蔻", "现磨"]],
    steps: ["所有液体与全蛋先干摇 10 秒。", "加冰摇和 12 秒，双重过滤入冰镇碟形杯。", "现磨肉豆蔻装饰。"],
    gar: "现磨肉豆蔻",
    note: "雪莉、全蛋与糖的古老 Flip。Fino 的咸鲜与蛋的乳脂形成独特对比；蛋要新鲜，摇和必须充分，否则会腥。",
    flavor: ["奶滑", "温暖", "花香"],
    history: "Sherry Flip 是 18–19 世纪 Flip 家族的一员，用雪莉、蛋与糖摇和。Flip 最初常是热饮，后来演变为冷摇的餐后酒；雪莉版本因 Fino 的咸鲜而独特。",
    src: { tag: "经典文献", label: "18–19 世纪 Flip 传统", url: "" },
    v: [
      { zh: "Amontillado Flip", en: "Amontillado Flip", how: "用 Amontillado 雪莉，糖浆减到 10 ml。", ing: [["Amontillado 雪莉", "60 ml"], ["全蛋", "1 个"], ["单糖浆", "10 ml"]], method: "摇和", glass: "碟形杯", note: "坚果香更明显。" },
      { zh: "Sherry Egg Nog", en: "Sherry Egg Nog", how: "加 30 ml 牛奶与 30 ml 奶油，搅匀。", ing: [["Fino 雪莉", "45 ml"], ["全蛋", "1 个"], ["牛奶", "30 ml"], ["淡奶油", "30 ml"], ["单糖浆", "10 ml"]], method: "摇和", glass: "古典杯", note: "更接近蛋奶酒，适合节日。" }
    ]
  },
  {
    id: "final-ward", zh: "最终守卫", en: "Final Ward", fam: "duo", base: "whiskey", sub: "黑麦威士忌",
    mods: ["liqueur", "citrus"], method: "摇和", glass: "碟形杯", strength: 4, diff: 2,
    ing: [["黑麦威士忌", "30 ml"], ["绿查特", "30 ml"], ["黑樱桃利口酒", "20 ml"], ["柠檬汁", "20 ml"]],
    steps: ["所有材料加冰摇和 10–12 秒。", "双重过滤入冰镇碟形杯。", "柠檬皮油装饰。"],
    gar: "柠檬皮",
    note: "Last Word 的黑麦版本：威士忌替金酒，酸度与草本更暗、更暖。四种材料等量接近，但黑麦与绿查特的强度需要精准平衡。",
    flavor: ["草本", "酸甜", "温暖"],
    history: "Final Ward 由纽约调酒师 Phil Ward 在 2007 年前后创作，是 Last Word 的威士忌改编。它把金酒换成黑麦，保留绿查特、黑樱桃与柠檬的等量结构。",
    src: { tag: "现代经典", label: "Phil Ward / 2007", url: "" },
    v: [
      { zh: "Final Ward Highball", en: "Final Ward Highball", how: "摇和后补 60 ml 苏打，倒入高球杯。", ing: [["黑麦威士忌", "30 ml"], ["绿查特", "20 ml"], ["黑樱桃利口酒", "15 ml"], ["柠檬汁", "20 ml"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "更轻、更长，草本与气泡。" },
      { zh: "Final Ward Perfect", en: "Final Ward Perfect", how: "黑麦减到 25 ml，补 10 ml 干味美思。", ing: [["黑麦威士忌", "25 ml"], ["绿查特", "25 ml"], ["黑樱桃利口酒", "15 ml"], ["柠檬汁", "20 ml"], ["干味美思", "10 ml"]], method: "摇和", glass: "碟形杯", note: "更干、更草本。" }
    ]
  },
  {
    id: "industry-sour", zh: "行业酸", en: "Industry Sour", fam: "sour", base: "liqueur", sub: "Fernet-Branca",
    mods: ["liqueur", "citrus", "syrup"], method: "摇和", glass: "碟形杯", strength: 3, diff: 2,
    ing: [["Fernet-Branca", "30 ml"], ["绿查特", "30 ml"], ["青柠汁", "30 ml"], ["单糖浆", "20 ml"]],
    steps: ["所有材料加冰摇和 12 秒。", "双重过滤入冰镇碟形杯。", "青柠皮或薄荷装饰。"],
    gar: "青柠皮",
    note: "Fernet 与绿查特两种极苦草本酒，靠青柠与糖拉回可饮性。它不是“平衡”，而是让苦味站在正中央。",
    flavor: ["苦香", "草本", "酸甜"],
    history: "Industry Sour 由圣路易斯调酒师 Ted Kilgore 在 2010 年前后创作，是当代“苦味酸酒”的代表。名字来自行业内部对 Fernet 的偏爱。",
    src: { tag: "现代经典", label: "Ted Kilgore / 2010", url: "" },
    v: [
      { zh: "Industry Sour Fizz", en: "Industry Sour Fizz", how: "摇和后补 60 ml 苏打。", ing: [["Fernet-Branca", "30 ml"], ["绿查特", "25 ml"], ["青柠汁", "25 ml"], ["单糖浆", "15 ml"], ["苏打水", "60 ml"]], method: "摇和", glass: "高球杯", note: "苦味被气泡拉长。" },
      { zh: "Industry Sour Sweet", en: "Industry Sour Sweet", how: "糖浆加到 30 ml，青柠减到 25 ml。", ing: [["Fernet-Branca", "30 ml"], ["绿查特", "30 ml"], ["青柠汁", "25 ml"], ["单糖浆", "30 ml"]], method: "摇和", glass: "碟形杯", note: "更甜、更适合苦味新手。" }
    ]
  },
  {
    id: "pousse-cafe", zh: "普施咖啡", en: "Pousse Café", fam: "flip", base: "liqueur", sub: "分层利口酒",
    mods: ["liqueur", "syrup"], method: "分层", glass: "Pousse Café 杯 / 小甜酒杯", strength: 3, diff: 3,
    ing: [["石榴糖浆", "15 ml"], ["黑樱桃利口酒", "15 ml"], ["黄查特", "15 ml"], ["干邑", "15 ml"]],
    steps: ["按糖浆、黑樱桃、黄查特、干邑的顺序沿杯壁缓慢倒入。", "每层之间用吧勺背缓冲，保持分层。", "不要搅拌，直接饮用。"],
    gar: "无",
    note: "Pousse Café 是“可饮用的分层甜点”，靠糖度与酒精度差异维持层次。它更偏展示与餐后仪式，不是日常解渴酒。",
    flavor: ["奶滑", "花香", "温暖"],
    history: "Pousse Café 在 19 世纪法国与美国的酒吧流行，名字意为“推咖啡”，常作为餐后甜酒。20 世纪后逐渐变成展示分层技法的经典。",
    src: { tag: "经典文献", label: "19 世纪分层甜酒传统", url: "" },
    v: [
      { zh: "Pousse Café Royale", en: "Pousse Café Royale", how: "最上层改用香槟，减少干邑。", ing: [["石榴糖浆", "15 ml"], ["黑樱桃利口酒", "15 ml"], ["黄查特", "15 ml"], ["香槟", "30 ml"]], method: "分层", glass: "香槟杯", note: "更气泡、更轻。" },
      { zh: "Pousse Café Coffee", en: "Pousse Café Coffee", how: "底层加 15 ml 冷萃咖啡。", ing: [["冷萃咖啡", "15 ml"], ["石榴糖浆", "10 ml"], ["黑樱桃利口酒", "15 ml"], ["黄查特", "15 ml"], ["干邑", "15 ml"]], method: "分层", glass: "小甜酒杯", note: "咖啡苦味压住甜度。" }
    ]
  }
];
