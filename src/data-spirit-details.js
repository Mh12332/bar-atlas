/* 基酒详情页：把“基酒”拆到可选择的子类别。 */
const SPIRIT_DETAILS = {
  gin: {
    headline: "植物蒸馏酒，杜松子是骨架，不是全部。",
    overview: "金酒以中性烈酒为底，经杜松子与多种植物重新蒸馏或浸泡。风格差异来自植物配方、蒸馏方式与是否加甜，而不是“酒精度越高越好”。",
    production: "中性谷物烈酒 → 杜松子与植物（芫荽、当归、柑橘皮、鸢尾根等）→ 蒸馏或浸泡 → 稀释装瓶。London Dry 不允许装瓶后加甜。",
    subtypes: [
      { id: "london-dry", zh: "伦敦干金", en: "London Dry", abv: "40–47%", note: "干、锐利、杜松子在前；调酒最通用，也最容易被误当成“越烈越好”。", craft: "与植物共同蒸馏，装瓶前不得加糖（糖 ≤0.1 g/L），无最低陈年要求。", profile: "杜松子 / 柑橘皮 / 芫荽籽 / 当归", bottles: "Beefeater / Tanqueray / Sipsmith", use: "Dry Martini、Negroni、Gin & Tonic" },
      { id: "plymouth", zh: "普利茅斯", en: "Plymouth", abv: "41.2%", note: "更柔更圆，带一点泥土与根茎甜；马天尼与 Pink Gin 的传统选择。", craft: "受地理标志保护，只能在普利茅斯生产；软水蒸馏，植物表比 London Dry 更柔。", profile: "柔和杜松 / 柑橘 / 根茎 / 轻甜", bottles: "Plymouth Gin", use: "Dry Martini、Pink Gin、Plymouth Sour" },
      { id: "old-tom", zh: "老汤姆", en: "Old Tom", abv: "40–43%", note: "微甜、质地更圆，18 世纪风格的现代复活；比 London Dry 更适合甜味与苦味。", craft: "蒸馏后允许少量加糖（约 0.5%），是历史上“无标签金酒”的甜化版本。", profile: "甜柑橘 / 甘草 / 柔和杜松", bottles: "Hayman's Old Tom / Ransom Old Tom", use: "Martinez、Tom Collins、Casino" },
      { id: "navy-strength", zh: "海军强度", en: "Navy Strength", abv: "57–57.5%", note: "海军强度（≥57.15%），香气被整体放大；入长饮必须减量并加大稀释。", craft: "历史上要求酒液泼到火药上仍能点燃；现代多为同配方的高酒精度装瓶，无额外法规。", profile: "浓缩杜松 / 强烈柑橘 / 长尾辛香", bottles: "Plymouth Navy Strength / Perry's Tot", use: "Navy Grog、Pink Gin、Overproof 短饮", avoid: "别按普通金酒等量替换，否则一杯酒直接失控。" },
      { id: "contemporary", zh: "现代风格", en: "Contemporary", abv: "40–46%", note: "新式植物配方：柑橘、花香、海洋或本地植物；个性强，不能默认替代 London Dry。", craft: "无糖、无产区限制；常用分批次浸泡后单次蒸馏，植物表随季节与创作意图变化。", profile: "花香 / 柑橘 / 草本 / 地域植物", bottles: "Monkey 47 / Malfy / Ki No Bi", use: "Gin & Tonic、Spritz、原创鸡尾酒" },
      { id: "genever", zh: "荷式金酒", en: "Genever", abv: "35–40%", note: "金酒的祖先，麦芽酒（moutwijn）打底，谷物与麦芽香明显，比金酒更像威士忌。", craft: "荷兰与比利时；Oude 含 ≥15% 麦芽酒并常入桶陈年，Jonge 麦芽酒比例更低、更中性。", profile: "麦芽 / 谷物 / 杜松 / 微甜", bottles: "Bols Genever / Ketel 1 Jenever", use: "Holland House、Genever Martinez、Old Fashioned 变体", avoid: "麦芽甜会改变马天尼的平衡，别直接套 London Dry 的比例。" },
      { id: "sloe-gin", zh: "黑刺李金酒", en: "Sloe Gin", abv: "25–30%", note: "黑刺李果浸泡的甜金酒，果酸与杏仁核的苦香；本质是利口酒，不是干型金酒。", craft: "金酒浸泡黑刺李果数月后加糖；欧盟要求最低 25% ABV，且必须以金酒为基底。", profile: "黑刺李 / 杏仁核 / 果酸 / 甜", bottles: "Sipsmith Sloe Gin / Plymouth Sloe Gin", use: "Sloe Gin Fizz、Charlie Chaplin、Kir Royale 变体", avoid: "甜度高，不能当干金酒等量使用。" },
      { id: "aged-gin", zh: "桶陈金酒", en: "Aged Gin", abv: "43–47%", note: "橡木带来香草与单宁，杜松子被柔化；没有统一定义，风格跨度很大。", craft: "蒸馏后入橡木桶数月至数年；桶型、新旧与时间决定它更接近金酒还是威士忌。", profile: "香草 / 橡木 / 柔化杜松 / 柑橘", bottles: "Citadelle Réserve / Ransom Barrel-Rested", use: "Negroni、Barrel-Aged Martini、纯饮" }
    ],
    choose: ["先备一瓶 London Dry 做通用款。", "想要柔和马天尼：Plymouth。", "想要甜圆古典：Old Tom。", "想要麦芽与谷物感：Genever。", "高酒精度金酒入长饮必须减量。"],
    avoid: "重杜松子酒不要压细腻花香或清酒；Navy Strength 不要按普通金酒等量使用；Sloe Gin 是甜酒，不是干金酒的替代品。"
  },
  whiskey: {
    headline: "谷物、蒸馏、橡木与时间，四个变量写成不同语言。",
    overview: "威士忌的差异来自谷物配方、蒸馏器、橡木桶与陈年气候。做鸡尾酒时，先判断它是“甜、辛、烟、果”哪一种，再决定它适合 stirred 还是 sour。",
    production: "谷物糖化 → 发酵 → 蒸馏 → 入桶陈年 → 稀释装瓶。波本多用新烘烤橡木桶；苏格兰允许旧桶与不同泥煤程度；黑麦强调辛香。",
    subtypes: [
      { id: "bourbon", zh: "波本威士忌", en: "Bourbon", abv: "40–50%", note: "玉米 ≥51%、全新烘烤橡木桶；香草、焦糖、椰子与甜橡木，古典与酸酒最稳的骨架。", craft: "玉米 ≥51%，蒸馏至 ≤80% ABV 入桶，必须使用全新烘烤橡木桶；标 Straight 需陈年 ≥2 年。", profile: "香草 / 焦糖 / 椰子 / 甜橡木", bottles: "Buffalo Trace / Maker's Mark / Wild Turkey 101", use: "Old Fashioned、Whiskey Sour、Gold Rush" },
      { id: "rye", zh: "黑麦威士忌", en: "Rye", abv: "40–50%", note: "黑麦比例高，辛香、胡椒与干果；酸酒更有骨架，曼哈顿的传统基底。", craft: "美国要求黑麦 ≥51%；加拿大走“黑麦风味”规则，不设谷物下限。", profile: "胡椒 / 黑麦辛香 / 干果 / 薄荷", bottles: "Rittenhouse / Sazerac Rye / Wild Turkey Rye", use: "Manhattan、Sazerac、Final Ward" },
      { id: "blended-scotch", zh: "苏格兰调和威士忌", en: "Blended Scotch", abv: "40–46%", note: "麦芽与谷物调和，蜂蜜与坚果为主；烟熏程度可控，是最不容易出错的入门款。", craft: "麦芽威士忌 + 谷物威士忌调和，最低 40% ABV，所有成分陈年 ≥3 年。", profile: "蜂蜜 / 坚果 / 麦芽 / 轻烟熏", bottles: "Monkey Shoulder / Johnnie Walker Black", use: "Rob Roy、Penicillin、Blood & Sand" },
      { id: "single-malt", zh: "单一麦芽", en: "Single Malt", abv: "40–48%", note: "单一酒厂 100% 麦芽；花果、海洋与泥煤差异极大，别默认都重烟熏。", craft: "单一酒厂、100% 发芽大麦、壶式蒸馏，橡木桶陈年 ≥3 年（苏格兰法规）。", profile: "花果 / 麦芽 / 海洋咸感 / 泥煤（视产区）", bottles: "Glenfiddich 12 / Lagavulin 16 / Talisker 10", use: "Rob Roy、Rusty Nail、Highball", avoid: "重泥煤不适合细腻奶油与花香。" },
      { id: "irish", zh: "爱尔兰威士忌", en: "Irish", abv: "40–46%", note: "通常三次蒸馏，柔顺带奶油感；纯壶式（Pot Still）更辛香、谷物感更厚。", craft: "三次蒸馏是常见做法而非强制；Single Pot Still 用发芽与未发芽大麦混合。", profile: "奶油 / 谷物甜 / 青苹果 / 柔辛香", bottles: "Jameson / Powers / Redbreast 12", use: "Irish Coffee、Hot Toddy、Tipperary" },
      { id: "japanese", zh: "日本威士忌", en: "Japanese", abv: "40–48%", note: "受苏格兰影响，强调平衡与细腻；高球文化成熟，水楢桶常带来檀香与椰子。", craft: "本国法规较宽松，多酒厂调和常见；水楢桶与多种桶型混用是其标志。", profile: "细腻果香 / 蜂蜜 / 檀香 / 干净收尾", bottles: "Suntory Toki / Nikka Coffey Malt", use: "Japanese Highball、Mizuwari、Whiskey Sour" },
      { id: "tennessee", zh: "田纳西威士忌", en: "Tennessee Whiskey", abv: "40–50%", note: "波本工艺 + 枫木炭过滤（Lincoln County Process），更干净，带焦糖与香蕉酯。", craft: "玉米 ≥51%，蒸馏后经枫木炭慢滤再入新桶；法规上不属于波本。", profile: "焦糖 / 香蕉 / 香草 / 干净收尾", bottles: "Jack Daniel's / George Dickel", use: "Lynchburg Lemonade、Whiskey Sour、Highball" },
      { id: "canadian", zh: "加拿大威士忌", en: "Canadian Whisky", abv: "40–43%", note: "常以高比例黑麦调味，轻盈顺口；法规允许少量调味酒添加，风格偏轻。", craft: "多为谷物柱式蒸馏后调和；允许加入 ≤9.09% 的调味酒或陈年烈酒。", profile: "轻黑麦 / 香草 / 谷物甜 / 顺口", bottles: "Crown Royal / Lot 40 / Canadian Club", use: "Canadian Club & Ginger、Manhattan（轻口版）、Highball" },
      { id: "single-grain", zh: "单一谷物威士忌", en: "Single Grain", abv: "43–46%", note: "单一酒厂的非麦芽谷物威士忌，多为柱式蒸馏；奶油、谷物与香草感突出。", craft: "单一酒厂、以玉米或小麦等谷物为主（可含麦芽），柱式蒸馏，陈年 ≥3 年。", profile: "奶油 / 香草 / 谷物 / 轻甜", bottles: "Nikka Coffey Grain / Cameronbridge", use: "Highball、Whiskey Sour、纯饮" }
    ],
    choose: ["做甜香古典：波本。", "做辛香曼哈顿：黑麦。", "做烟熏盘尼西林：苏格兰泥煤。", "做顺口热饮：爱尔兰。", "做轻盈高球：日本或加拿大。"],
    avoid: "重泥煤不适合细腻奶油与花香；高年份威士忌未必适合做混合酒；田纳西与波本不能互相默认替代。"
  },
  rum: {
    headline: "甘蔗的发酵与蒸馏，比“白/黑”更重要。",
    overview: "朗姆从甘蔗糖蜜或甘蔗汁出发，风格由原料、酵母、蒸馏器与陈年决定。白朗姆不等于无味，陈年朗姆也不等于甜。",
    production: "甘蔗糖蜜/汁 → 发酵（时间与酵母决定酯香）→ 壶式或柱式蒸馏 → 白朗姆过滤或陈年朗姆入桶 → 装瓶。",
    subtypes: [
      { id: "white", zh: "白朗姆", en: "White Rum", abv: "37.5–43%", note: "轻到中等酒体，甘蔗清甜；大吉利的默认基底，但“白”不等于无味。", craft: "糖蜜发酵蒸馏后过滤去色，可短陈再脱色；风味来自发酵时长与蒸馏器。", profile: "甘蔗清甜 / 青柠 / 轻酯香", bottles: "Probitas / Havana Club 3 / Plantation 3 Stars", use: "Daiquiri、Mojito、Cuba Libre" },
      { id: "gold", zh: "金朗姆", en: "Gold Rum", abv: "40–43%", note: "轻陈年或加焦糖色，香草与蜂蜜；比白朗姆圆，比陈年朗姆轻。", craft: "短期橡木桶陈年，或白朗姆加焦糖色调色；“gold”在多数产区无统一法规。", profile: "香草 / 蜂蜜 / 甘蔗 / 圆润", bottles: "Appleton Signature / Mount Gay Eclipse", use: "Mai Tai、Planter's Punch、Cuba Libre" },
      { id: "aged", zh: "陈年朗姆", en: "Aged Rum", abv: "40–45%", note: "橡木、干果与香料；适合 stirred 与 Tiki，热带陈年比欧洲陈年演化更快。", craft: "橡木桶陈年数年；加勒比热带陈年每年约相当于欧洲 2–3 年的演化速度。", profile: "焦糖 / 干果 / 香草 / 香料", bottles: "Appleton 12 / El Dorado 12 / Doorly's 12", use: "Rum Old Fashioned、Mai Tai、Zombie" },
      { id: "jamaican-high-ester", zh: "高酯牙买加朗姆", en: "Jamaican High Ester", abv: "50–63%", note: "香蕉、菠萝、油漆与 funk；少量就能改变整杯的香气方向。", craft: "长发酵 + 酒糟（dunder / muck）投入，酯类含量远高于其他产区。", profile: "香蕉 / 菠萝 / 溶剂感 / funk", bottles: "Smith & Cross / Wray & Nephew", use: "Kingston Negroni、Navy Grog、Tiki", avoid: "用量过大会盖掉柑橘与糖。" },
      { id: "agricole", zh: "农业朗姆", en: "Rhum Agricole", abv: "40–55%", note: "甘蔗汁直接发酵蒸馏，青草、矿物与花香；不是糖蜜朗姆。", craft: "马丁尼克 AOC 要求新鲜甘蔗汁、Creole 柱式蒸馏，且不允许添加糖。", profile: "青草 / 矿物 / 花香 / 甘蔗", bottles: "Rhum JM / Clément / Neisson", use: "Ti' Punch、Mai Tai、Three Dots and a Dash" },
      { id: "overproof", zh: "高酒精度朗姆", en: "Overproof", abv: "57–75%", note: "高酒精度、香气浓缩；Tiki 用它补酒感，必须精确计量。", craft: "蒸馏后少稀释（牙买加常为 63%）；风味强度随酒精度一起被放大。", profile: "强烈酯香 / 灼热 / 长尾", bottles: "Wray & Nephew Overproof / Lemon Hart 151", use: "Zombie、Jet Pilot、Navy Grog", avoid: "别按普通朗姆等量替换。" },
      { id: "demerara", zh: "德梅拉拉朗姆", en: "Demerara Rum", abv: "40–57%", note: "圭亚那糖蜜朗姆，厚重焦糖与木质香料；少数酒厂仍用百年木制蒸馏器。", craft: "德梅拉拉糖蜜为原料，部分酒厂保留木制壶式与柱式蒸馏器，产出厚酒体。", profile: "深焦糖 / 木质香料 / 太妃糖 / 厚酒体", bottles: "El Dorado 12 / Lemon Hart 1804 / Hamilton 86", use: "Mai Tai、Demerara Dry Float、Rum Old Fashioned" },
      { id: "spiced", zh: "香料朗姆", en: "Spiced Rum", abv: "35–40%", note: "加了香料与糖的调香朗姆；用起来方便，但甜度高、个性容易被配方盖住。", craft: "陈年或白朗姆浸泡香草、肉桂、丁香等并加糖；无统一法规，配方差异大。", profile: "香草 / 肉桂 / 甜 / 椰子", bottles: "Chairman's Reserve Spiced / Foursquare Spiced", use: "Spiced Daiquiri、Rum & Ginger、Tiki", avoid: "甜度高，替换白朗姆时需同步减糖。" },
      { id: "clairin", zh: "克莱林", en: "Clairin", abv: "45–55%", note: "海地小农蒸馏，野生酵母发酵甘蔗汁；野性、泥土与强烈酯香。", craft: "甘蔗汁自然发酵（不接种商业酵母）→ 小型壶式蒸馏，多为单批次、无添加。", profile: "泥土 / 野酵母 / 强烈酯香 / 矿物", bottles: "Clairin Sajous / Le Rocher / Vaval", use: "替代农业朗姆、Ti' Punch、原创 Tiki" }
    ],
    choose: ["大吉利：白朗姆。", "Tiki 多层：陈年 + 高酯 + Overproof 组合。", "想要甘蔗青草：农业朗姆。", "想要香蕉/funk：牙买加高酯。", "想要厚重焦糖：德梅拉拉。"],
    avoid: "重焦糖香精朗姆会掩盖柑橘；Overproof 不要按普通朗姆等量使用；香料朗姆的糖会改变整杯平衡。"
  },
  agave: {
    headline: "龙舌兰是植物，梅斯卡尔是火与土。",
    overview: "龙舌兰与梅斯卡尔都来自龙舌兰植物，但产区、品种与烘烤方式不同。Blanco 最植物，Reposado/Añejo 有橡木，Mezcal 常有烟熏。",
    production: "龙舌兰心（piña）→ 蒸煮 → 碾碎 → 发酵 → 蒸馏。梅斯卡尔常在地下坑式炉中用木柴与石头烘烤，带来烟熏。",
    subtypes: [
      { id: "blanco", zh: "白色龙舌兰", en: "Tequila Blanco", abv: "38–55%", note: "未陈年或短陈，青绿、胡椒与柑橘；酸酒最直接的选择。", craft: "韦伯蓝龙舌兰蒸煮碾碎发酵蒸馏；陈年 ≤2 个月，常用不锈钢罐。", profile: "青绿植物 / 黑胡椒 / 柑橘 / 矿物", bottles: "Tapatío / Siete Leguas / Fortaleza", use: "Margarita、Paloma、Ranch Water" },
      { id: "reposado", zh: "微陈龙舌兰", en: "Tequila Reposado", abv: "38–55%", note: "橡木 2 个月–1 年，香草与甜木；比 Blanco 圆，仍保留植物感。", craft: "橡木桶陈年 2 个月至 1 年（法定区间），桶型影响香草与香料强度。", profile: "香草 / 甜木 / 熟龙舌兰 / 柔和胡椒", bottles: "El Tesoro Reposado / Siete Leguas Reposado", use: "Oaxaca Old Fashioned、Rosita、圆润版 Margarita" },
      { id: "anejo", zh: "陈年龙舌兰", en: "Tequila Añejo", abv: "38–55%", note: "橡木 1–3 年，焦糖与干果；适合纯饮或 stirred，不适合清爽高球。", craft: "橡木桶（容量 ≤600 L）陈年 1–3 年，桶越大木味积累越慢。", profile: "焦糖 / 干果 / 香草 / 木质", bottles: "Don Julio Añejo / El Tesoro Añejo", use: "Old Fashioned、餐后纯饮、Añejo Highball（少量）" },
      { id: "extra-anejo", zh: "超长陈年龙舌兰", en: "Extra Añejo", abv: "38–55%", note: "陈年超过 3 年，甜木与坚果感接近干邑；成本高，做混合酒性价比低。", craft: "橡木桶陈年 >3 年；桶小、时间长，木味与氧化感明显。", profile: "坚果 / 太妃糖 / 香草 / 木质", bottles: "Don Julio 1942 / El Tesoro Paradiso", use: "纯饮、餐后、甜点搭配" },
      { id: "cristalino", zh: "澄滤龙舌兰", en: "Tequila Cristalino", abv: "38–40%", note: "过滤去色的陈年龙舌兰，口感顺滑，但木香被削掉一层；更像营销风格而非工艺类别。", craft: "Añejo/Extra Añejo 经活性炭过滤去色，再与少量未陈年酒调和装瓶。", profile: "顺滑 / 香草 / 轻甜 / 木香被削弱", bottles: "Maestro Dobel Diamante / Don Julio 70", use: "纯饮、顺滑版 Margarita", avoid: "别期待它保留 Añejo 的复杂木香。" },
      { id: "mezcal", zh: "梅斯卡尔", en: "Mezcal", abv: "40–55%", note: "地下坑式烘烤带来烟熏与泥土；Espadín 最常见，品种与产区差异极大。", craft: "龙舌兰心在地下石坑用木柴烘烤数日 → 石磨碾碎 → 野生酵母发酵 → 壶式蒸馏。", profile: "烟熏 / 泥土 / 矿物 / 熟龙舌兰甜", bottles: "Del Maguey Vida / Montelobos / Nuestra Soledad", use: "Naked and Famous、Mezcal Margarita、Oaxaca Old Fashioned", avoid: "用量过大会压住所有辅料。" },
      { id: "sotol", zh: "索托尔", en: "Sotol", abv: "38–50%", note: "用沙漠植物 Dasylirion 蒸馏（不是龙舌兰属），更干、更矿物、更野。", craft: "奇瓦瓦等地；烘烤后发酵蒸馏，多数不陈年，受原产地命名（DOT）保护。", profile: "干燥矿物 / 青草 / 胡椒 / 轻烟熏", bottles: "Hacienda de Chihuahua / Sotol Por Siempre", use: "Margarita 变体、Highball、原创鸡尾酒" },
      { id: "raicilla", zh: "莱西拉", en: "Raicilla", abv: "38–55%", note: "哈利斯科山区的小众蒸馏酒，青绿与奶油感并存；产量小、风格分散。", craft: "常用 Agave maximiliana 等野生品种，坑烤或蒸煮皆有，多为小批量生产。", profile: "青绿 / 奶油 / 花香 / 矿物", bottles: "La Venenosa / Mezonte", use: "原创鸡尾酒、Highball、纯饮" }
    ],
    choose: ["玛格丽特：Blanco。", "想要烟熏：Mezcal。", "想要香草橡木：Reposado。", "想要纯饮：Añejo 或 Extra Añejo。", "想要更干更矿物：Sotol。"],
    avoid: "梅斯卡尔用量过大会压住所有辅料；陈年龙舌兰的甜木香不适合清爽高球；Cristalino 不能替代 Añejo 的木香。"
  },
  brandy: {
    headline: "葡萄酒蒸馏后，橡木与时间决定语气。",
    overview: "白兰地是水果酒蒸馏后的烈酒。干邑与雅文邑是法国代表，皮斯科是秘鲁/智利代表，卡尔瓦多斯是苹果，格拉帕是葡萄渣。",
    production: "葡萄酒/果酒 → 蒸馏 → 入桶陈年（或不陈年）→ 调配 → 装瓶。干邑多用壶式蒸馏与法国橡木；皮斯科通常不陈年。",
    subtypes: [
      { id: "cognac", zh: "干邑", en: "Cognac", abv: "40–45%", note: "法国干邑区，以 Ugni Blanc 为主，二次蒸馏；花香、葡萄与橡木的层次清楚。", craft: "铜制壶式二次蒸馏，Limousin/Tronçais 橡木桶陈年；VS ≥2 年、VSOP ≥4 年、XO ≥10 年。", profile: "葡萄花 / 香草 / 柑橘 / 橡木", bottles: "Pierre Ferrand 1840 / Hine VSOP / Rémy VSOP", use: "Sidecar、Vieux Carré、Brandy Alexander" },
      { id: "armagnac", zh: "雅文邑", en: "Armagnac", abv: "40–48%", note: "更乡土、更香料；连续蒸馏保留更多酯香，单一年份装瓶很常见。", craft: "加斯科涅产区；多用连续蒸馏器（alembic armagnacais），黑橡木桶陈年，年份酒普遍。", profile: "干果 / 香料 / 皮革 / 粗犷质地", bottles: "Darroze / Larressingle", use: "Old Fashioned、Vieux Carré、餐后" },
      { id: "pisco", zh: "皮斯科", en: "Pisco", abv: "38–48%", note: "葡萄汁蒸馏，通常不陈年也不加水；花香与柑橘，轻盈但香气集中。", craft: "秘鲁规定蒸馏后不得加水、不得入桶陈年（可静置）；智利允许加水稀释，风格更轻。", profile: "花香 / 柑橘 / 葡萄 / 轻盈", bottles: "Barsol / Macchu Pisco / Capel（智利）", use: "Pisco Sour、Chilcano、Pisco Punch", avoid: "别按威士忌方式对待，它更轻盈。" },
      { id: "calvados", zh: "卡尔瓦多斯", en: "Calvados", abv: "40–45%", note: "诺曼底苹果（及梨）蒸馏；果香、坚果与温暖，适合苹果系甜点杯。", craft: "苹果酒二次蒸馏（Pays d'Auge 要求壶式二次），橡木桶陈年 ≥2 年。", profile: "苹果 / 梨 / 坚果 / 温暖", bottles: "Boulard / Christian Drouin", use: "Angel Face、Golden Dawn、Apple Brandy Sour" },
      { id: "applejack", zh: "苹果杰克", en: "Applejack", abv: "40–50%", note: "美国苹果白兰地，历史上用冷冻浓缩法；比卡尔瓦多斯更直接、更甜。", craft: "苹果酒蒸馏（现代多用柱式）；标 blended applejack 的会与中性谷物烈酒混合。", profile: "青苹果 / 焦糖 / 直接 / 轻甜", bottles: "Laird's Bonded / Laird's 86", use: "Jack Rose、Applejack Old Fashioned、Pink Lady" },
      { id: "grappa", zh: "格拉帕", en: "Grappa", abv: "40–50%", note: "葡萄渣蒸馏，青草、葡萄皮与强烈个性；意大利餐后与咖啡文化的一部分。", craft: "用酿酒后留下的葡萄皮渣（vinaccia）蒸馏，多为壶式；可入桶陈年（invecchiata）。", profile: "葡萄皮 / 青草 / 花香 / 强烈", bottles: "Nonino / Nardini", use: "Grappa Highball、Corretto、餐后" },
      { id: "jerez", zh: "赫雷斯白兰地", en: "Brandy de Jerez", abv: "36–45%", note: "西班牙赫雷斯，用雪莉桶与索雷拉系统陈年；甜木、葡萄干与坚果感。", craft: "葡萄酒蒸馏后入雪莉桶，按索雷拉（solera）系统分级陈年（Solera / Solera Reserva / Gran Solera）。", profile: "葡萄干 / 雪莉木 / 坚果 / 甜香料", bottles: "Lepanto / Fundador / Torres 10", use: "西班牙式 Brandy Sour、Sangría、餐后" },
      { id: "slivovitz", zh: "李子白兰地", en: "Slivovitz", abv: "40–50%", note: "巴尔干李子蒸馏酒，果肉与果核的香、一点苦；东欧餐桌的默认烈酒。", craft: "发酵李子（常带核）蒸馏，可为壶式；部分产区入桶陈年，颜色从透明到琥珀。", profile: "李子 / 杏仁核 / 微苦 / 果香", bottles: "Maraska / Žuta Osa / Zlatá Slivovice", use: "纯饮、李子酸酒、餐后" }
    ],
    choose: ["边车：干邑。", "皮斯科酸：皮斯科。", "苹果香：卡尔瓦多斯或苹果杰克。", "想要粗犷香料：雅文邑。", "想要雪莉木与坚果：赫雷斯白兰地。"],
    avoid: "昂贵干邑不适合重糖重奶油；皮斯科更轻盈，别按威士忌方式对待；卡尔瓦多斯与苹果杰克不能互换。"
  },
  vodka: {
    headline: "中性不是无味，而是把风味让给配方。",
    overview: "伏特加追求干净与质地，原料可以是小麦、黑麦、马铃薯、玉米或葡萄。它的作用是把鸡尾酒的骨架交给辅料。",
    production: "发酵 → 蒸馏（常多次）→ 过滤 → 稀释装瓶。不同原料与过滤方式带来细微质地差异。",
    subtypes: [
      { id: "wheat", zh: "小麦", en: "Wheat", abv: "37.5–40%", note: "柔顺、微甜、奶油质地；马天尼与咖啡杯最稳。", craft: "小麦为主粮，多次柱式蒸馏，多数再经活性炭过滤。", profile: "柔顺 / 微甜 / 奶油 / 干净", bottles: "Absolut / Ketel One / Belvedere", use: "Espresso Martini、Cosmopolitan、Vodka Martini" },
      { id: "rye", zh: "黑麦威士忌", en: "Rye", abv: "37.5–40%", note: "更辛香、更干；给酸酒更多骨架，也更能穿透番茄与辣酱。", craft: "黑麦为主粮，柱式蒸馏；辛香来自谷物本身而非添加。", profile: "胡椒 / 干爽 / 谷物辛香", bottles: "Belvedere / Chopin Rye / Wyborowa", use: "Vodka Martini、Bloody Mary" },
      { id: "potato", zh: "马铃薯", en: "Potato", abv: "37.5–40%", note: "更厚、更油润；适合重口味与奶油类。", craft: "马铃薯（常与谷物混合）发酵蒸馏，质地更黏稠，口感更厚。", profile: "油润 / 微甜 / 厚酒体", bottles: "Chopin Potato / Luksusowa", use: "White Russian、Espresso Martini" },
      { id: "corn", zh: "玉米", en: "Corn", abv: "37.5–40%", note: "甜、柔、圆；多数平价伏特加的底子。", craft: "玉米发酵蒸馏；美国常见以玉米为主粮，法规只要求中性无特征。", profile: "甜 / 圆 / 轻谷物", bottles: "Tito's / Deep Eddy", use: "Moscow Mule、Bloody Mary" },
      { id: "grape", zh: "葡萄", en: "Grape", abv: "37.5–40%", note: "质地更圆、带轻微果香；适合纯饮与细腻的短饮。", craft: "葡萄（含渣）发酵蒸馏，法国与意大利常见，风味比谷物版更柔。", profile: "葡萄 / 花香 / 圆润质地", bottles: "Cîroc / Grey Goose", use: "Vodka Martini、French Martini、纯饮" },
      { id: "flavored", zh: "调味伏特加", en: "Flavored", abv: "30–40%", note: "香草、柑橘、辣椒等浸提；会改变配方甜度与香气，需重新配平。", craft: "蒸馏后浸泡或添加天然香料与少量糖；酒精度通常低于同款原味。", profile: "依香料而定 / 甜 / 香气集中", bottles: "Absolut Citron / Absolut Vanilla / Żubrówka", use: "Cosmopolitan、Porn Star Martini、Bloody Mary", avoid: "替换原味伏特加时要同步调整糖与香气。" }
    ],
    choose: ["Espresso Martini：小麦或马铃薯。", "Bloody Mary：黑麦/玉米，骨架更硬。", "甜点杯：马铃薯或香草伏特加。", "细腻短饮：葡萄伏特加。", "不要期待伏特加提供复杂香气。"],
    avoid: "不要用调味伏特加替代普通伏特加而不调整糖与香气；伏特加的“顺”不代表可以无限加量。"
  },
  cane: {
    headline: "甘蔗汁的野生表亲，不是白朗姆。",
    overview: "卡莎萨是巴西甘蔗汁蒸馏酒，青草、甘蔗、轻微 funk；与朗姆的糖蜜底不同。它是 Caipirinha 的灵魂。",
    production: "甘蔗汁 → 发酵 → 蒸馏 → 可陈年或不陈年。未陈年更青绿，陈年更圆润。",
    subtypes: [
      { id: "unaged", zh: "未陈年", en: "Unaged", abv: "38–48%", note: "青草、甘蔗与辛辣；Caipirinha 的首选，也是风味最直接的一档。", craft: "甘蔗汁发酵 → 壶式或柱式蒸馏 → 直接装瓶；可静置但基本不入桶。", profile: "青草 / 甘蔗 / 辛辣 / 清爽", bottles: "Leblon / Novo Fogo Silver / 51", use: "Caipirinha、Rabo de Galo、Batida" },
      { id: "aged", zh: "陈年", en: "Aged", abv: "38–48%", note: "橡木、香草与蜂蜜；可纯饮或 stirred，巴西本土常以小杯纯饮。", craft: "橡木桶陈年（无最短年限规定）；巴西也用 Amburana、Bálsamo 等本地木材。", profile: "香草 / 蜂蜜 / 木质 / 圆润", bottles: "Novo Fogo Barrel-Aged / Avuá Amburana", use: "Old Fashioned、陈年版 Caipirinha、纯饮" },
      { id: "wood-varied", zh: "异木桶陈", en: "Native Wood Aged", abv: "38–48%", note: "用巴西本地木材（Amburana、Bálsamo、Jequitibá）陈年，香料与椰子感强烈。", craft: "不同树种的单宁与香气差异很大，同一酒厂常同时出多种木桶版本可对照。", profile: "肉桂 / 椰子 / 香草 / 木质", bottles: "Avuá Amburana / Weber Haus Amburana", use: "纯饮、原创 stirred 酒" },
      { id: "industrial", zh: "工业化", en: "Industrial", abv: "38–40%", note: "柱式蒸馏、量产调和，占巴西市场绝大多数；干净、甜、风味单一。", craft: "连续蒸馏 + 大规模调和，常加糖调色；适合长饮与派对桶。", profile: "干净 / 甜 / 轻甘蔗 / 单一", bottles: "51 / Pitu / Velho Barreiro", use: "派对版 Caipirinha、Batida、长饮", avoid: "加糖明显，做精细短饮会偏甜。" }
    ],
    choose: ["Caipirinha：未陈年。", "想要圆润：陈年。", "想要香料与椰子：异木桶陈。", "做批量长饮：工业化款。"],
    avoid: "别把它简单等同于白朗姆；它的青草与 funk 会改变酸酒方向，工业化款的糖也会改变平衡。"
  },
  rice: {
    headline: "米、麹与曲，三种不同的东方蒸馏/酿造语言。",
    overview: "清酒是酿造酒，烧酒/韩国烧酒多为蒸馏酒，白酒是高温大曲蒸馏。它们不是同一种“米酒”，风味与酒精度差异巨大。",
    production: "清酒：米 + 麹 + 水发酵；烧酒：发酵后蒸馏；白酒：高粱/谷物 + 大曲，固态发酵蒸馏。",
    subtypes: [
      { id: "junmai", zh: "纯米清酒", en: "Junmai Sake", abv: "13–17%", note: "只用水、米、麹与酵母；米香、乳酸与鲜味，低酒精但结构完整。", craft: "精米步合 ≤70%，不添加酿造酒精；低温发酵约一个月。", profile: "米香 / 乳酸 / 鲜味 / 干净收尾", bottles: "獭祭 45 / 八海山 / 久保田", use: "Saketini、清酒 Highball、生蚝搭配", avoid: "开瓶后氧化快，需冷藏并尽快用完。" },
      { id: "ginjo", zh: "吟酿 / 大吟酿", en: "Ginjo / Daiginjo", abv: "15–17%", note: "精米步合更低、低温长发酵；苹果与香蕉酯香明显，适合纯饮。", craft: "吟酿精米步合 ≤60%、大吟酿 ≤50%；低温长发酵产生更多酯类香气。", profile: "苹果 / 香蕉酯 / 花香 / 细腻", bottles: "獭祭 23 / 十四代 / 黑龙", use: "冷饮纯饮、Saketini、寿司" },
      { id: "honkaku-shochu", zh: "本格烧酒", en: "Honkaku Shochu", abv: "20–25%", note: "单次壶式蒸馏，保留原料个性；芋、麦、米各有明显差别。", craft: "单式（壶式）蒸馏，酒精度 ≤45%；常压蒸馏香气重，减压蒸馏更干净。", profile: "原料香（芋/麦/米）/ 甘甜 / 泥土", bottles: "黑雾岛（芋）/ いいちこ（麦）/ 鸟飼（米）", use: "加水加冰纯饮、Shochu Highball、Somaek", avoid: "常压蒸馏版香气重，别按伏特加方式使用。" },
      { id: "soju", zh: "烧酒", en: "Soju", abv: "16–25%", note: "稀释式烧酒，甜、轻、酒感低；适合批量与休闲场景。", craft: "多数为稀释式：发酵酒精稀释后加调味；传统安东烧酒属蒸馏式，另算一类。", profile: "微甜 / 干净 / 轻酒精 / 单薄", bottles: "Chamisul / Jinro / 安东烧酒（蒸馏式）", use: "Somaek、Soju Highball、炸弹酒" },
      { id: "baijiu-qing", zh: "白酒", en: "Light Aroma Baijiu", abv: "50–65%", note: "汾酒为代表，干净、酯香清亮；在鸡尾酒里最容易控制的一类白酒。", craft: "高粱 + 大曲地缸固态发酵，清蒸清烧；发酵期短，杂味少。", profile: "清亮酯香 / 豌豆 / 干净 / 高酒精", bottles: "汾酒（玻汾/青花）/ 红星二锅头", use: "Baijiu Sour、白酒 Highball、马天尼变体", avoid: "10–20 ml 就能主导整杯。" },
      { id: "baijiu-strong", zh: "浓香 / 酱香", en: "Strong / Sauce Aroma Baijiu", abv: "52–65%", note: "泸州老窖式的浓香与茅台式的酱香，窖香与曲香极强；少量即改变整杯。", craft: "泥窖或石窖固态发酵，多次取酒并长期陈酿；酱香型需一年周期、多轮蒸煮。", profile: "窖香 / 酱香 / 曲香 / 强烈发酵感", bottles: "泸州老窖特曲 / 茅台王子酒", use: "少量作香气增强、Baijiu Old Fashioned、原创", avoid: "风味极强，避免与细腻材料叠加。" }
    ],
    choose: ["Saketini：纯米清酒或吟酿。", "轻松 Highball：本格烧酒。", "烧啤：韩国烧酒。", "强香气实验：清香型白酒，少量。"],
    avoid: "白酒风味极强，通常 10–20 ml 就够；清酒不要和重柑橘长时间接触；稀释式烧酒甜度高，别当清酒用。"
  },
  liqueur: {
    headline: "甜、苦、香，三种角色，不能按体积互相替代。",
    overview: "利口酒覆盖橙味、苦味、咖啡、坚果、奶油、花香等。它们决定尾韵与甜度，常常是“少即是多”。",
    production: "基酒（中性酒精/白兰地/朗姆）→ 浸泡/蒸馏 → 加糖 → 装瓶。不同品牌糖度差异巨大。",
    subtypes: [
      { id: "orange", zh: "橙味利口酒", en: "Orange Liqueur", abv: "15–40%", note: "君度干净、Triple Sec 更甜、Dry Curaçao 更干；橙香是三合一结构的粘合剂。", craft: "甜橙与苦橙皮浸提或蒸馏后加糖；糖度与基酒决定它是“干香料”还是“甜糖浆”。", profile: "橙皮 / 甜 / 干净或厚重", bottles: "Cointreau / Combier / Pierre Ferrand Dry Curaçao", use: "Margarita、Sidecar、White Lady" },
      { id: "aperitivo", zh: "苦味开胃酒", en: "Aperitivo", abv: "11–25%", note: "Campari、Aperol 一类，苦甜鲜明、糖度高；是 Spritz 与 Negroni 的颜色与苦味来源。", craft: "中性酒精浸提苦根、柑橘与草本后加糖；颜色来自胭脂虫或人工色素。", profile: "苦橙 / 大黄 / 甜苦平衡 / 鲜明色", bottles: "Campari / Aperol / Select", use: "Negroni、Aperol Spritz、Americano", avoid: "糖度高，替换时需同步减糖。" },
      { id: "amaro", zh: "阿玛罗", en: "Amaro", abv: "16–35%", note: "意大利草本苦味酒，风格从轻到极苦；餐后纯饮与 Highball 两用。", craft: "数十种草本浸提后加糖与酒精调配；配方保密，苦度差异极大。", profile: "草本 / 苦根 / 甜苦 / 收尾长", bottles: "Nonino / Averna / Cynar / Fernet-Branca", use: "Paper Plane、Little Italy、Toronto、Fernet & Coke" },
      { id: "coffee", zh: "咖啡利口酒", en: "Coffee Liqueur", abv: "16–25%", note: "咖啡甜酒；Mr Black 更干更咖啡，Kahlúa 更甜更糖浆感。", craft: "冷萃咖啡 + 朗姆或中性酒精 + 糖；咖啡含量决定苦味与油脂感。", profile: "咖啡 / 焦糖 / 甜 / 烘焙苦", bottles: "Mr Black / Kahlúa", use: "Espresso Martini、White Russian、Revolver" },
      { id: "nut", zh: "坚果利口酒", en: "Nut Liqueur", abv: "20–28%", note: "杏仁、榛子、核桃；甜香强，少量即可撑起尾韵。", craft: "坚果浸提或蒸馏后加糖；杏仁款的核心是苦杏仁苷带来的苯甲醛香气。", profile: "杏仁 / 烘烤坚果 / 甜 / 香草", bottles: "Luxardo Amaretto / Frangelico / Nocino", use: "Amaretto Sour、Tiki、甜点杯" },
      { id: "cream", zh: "奶油利口酒", en: "Cream Liqueur", abv: "15–20%", note: "乳脂 + 糖 + 酒；甜点杯专用，需冷藏并注意保质期。", craft: "乳制品与糖、酒精乳化；稳定剂与均质工艺决定保质期与口感。", profile: "奶油 / 糖 / 可可 / 厚", bottles: "Baileys / RumChata", use: "Brandy Alexander、Grasshopper、Mudslide", avoid: "脂与糖会掩盖基酒，用量控制在 15–30 ml。" },
      { id: "cherry", zh: "樱桃利口酒", en: "Cherry Liqueur", abv: "20–32%", note: "Maraschino 干而带核苦，黑樱桃利口酒更甜更果；两者不能互换。", craft: "樱桃（常带核）浸提后加糖；Maraschino 用酸樱桃与核蒸馏，风格干爽。", profile: "樱桃 / 杏仁核 / 干或甜 / 花香", bottles: "Luxardo Maraschino / Cherry Heering", use: "Last Word、Aviation、Blood & Sand、Singapore Sling" },
      { id: "floral", zh: "花香利口酒", en: "Floral Liqueur", abv: "15–25%", note: "接骨木花、紫罗兰、玫瑰；香气轻盈，几毫升就能改变整杯气质。", craft: "花类浸提或蒸馏后加糖；真实花香与香精感的差别在开瓶后三分钟就能闻出来。", profile: "花香 / 甜 / 轻 / 易挥发", bottles: "St-Germain / Crème de Violette / Rothman & Winter", use: "Elderflower Gin Fizz、Aviation、Spritz", avoid: "过量会像香水。" }
    ],
    choose: ["橙香：Cointreau。", "苦味：Amaro / Fernet。", "咖啡：Mr Black。", "甜点：奶油利口酒，少量。", "花香：几毫升点到为止。"],
    avoid: "利口酒甜度差异巨大，不能按体积等量替换；苦味酒过量会盖住基酒；花香与樱桃类都要“少即是多”。"
  },
  wine: {
    headline: "低酒精、高酸度，结构里的“液体调味”。",
    overview: "葡萄酒与加强酒提供酸度、单宁、氧化香与苦甜。味美思是加香加强酒，雪莉和波特是加强酒，起泡酒提供气泡与酸度。",
    production: "葡萄发酵 →（加强/加香）→ 陈年 → 装瓶。味美思开瓶后需冷藏，雪莉/波特开瓶后寿命更长。",
    subtypes: [
      { id: "dry-vermouth", zh: "干味美思", en: "Dry Vermouth", abv: "15–18%", note: "干、咸香、草本；马天尼的修饰酒，也是低酒精短饮的主角。", craft: "白葡萄酒加苦艾、鸢尾根等草本与少量糖强化；开瓶后需冷藏，4–6 周内用完。", profile: "苦艾 / 咸香 / 柑橘 / 干", bottles: "Dolin Dry / Noilly Prat", use: "Dry Martini、Bamboo、Vesper" },
      { id: "sweet-vermouth", zh: "甜味美思", en: "Sweet Vermouth", abv: "15–18%", note: "甜、香料、苦甜；曼哈顿与内格罗尼的骨架。", craft: "红葡萄酒加草本、糖与焦糖色；Carpano Antica 以香草与苦味著称。", profile: "香草 / 苦甜 / 焦糖 / 香料", bottles: "Carpano Antica / Cocchi di Torino / Dolin Rouge", use: "Manhattan、Negroni、Boulevardier" },
      { id: "fino", zh: "菲诺 / 曼萨尼亚雪莉", en: "Fino Sherry", abv: "15–17%", note: "在生物膜（flor）下陈年，干、咸鲜、带酵母香；极低酒精，适合餐前。", craft: "帕洛米诺葡萄发酵后加烈至 15%，在 flor 酵母膜下陈年；开瓶后需冷藏。", profile: "咸鲜 / 酵母 / 杏仁 / 干", bottles: "Tío Pepe / La Ina / La Gitana（Manzanilla）", use: "Bamboo、Rebujito、Sherry Flip" },
      { id: "oloroso", zh: "奥洛罗索 / 阿蒙提亚多雪莉", en: "Oloroso Sherry", abv: "17–20%", note: "氧化陈年，琥珀色、核桃与咸香厚；可以替代部分甜味美思。", craft: "加烈至 17% 以上后氧化陈年（无 flor）；Amontillado 先经 flor 再转氧化。", profile: "核桃 / 焦糖 / 咸香 / 厚酒体", bottles: "Lustau Oloroso / Emilio Hidalgo", use: "Adonis、Bamboo 变体、Sherry Cobbler" },
      { id: "port", zh: "波特", en: "Port", abv: "19–20%", note: "甜、酒精度高；茶色波特（Tawny）有坚果氧化香，Ruby 更偏黑果。", craft: "发酵中途加葡萄烈酒停止发酵以保留糖分；Tawny 在木桶中长期氧化陈年。", profile: "黑果 / 坚果 / 焦糖 / 甜", bottles: "Taylor's / Graham's / Quinta do Noval", use: "Porto Flip、Coffee Cocktail、餐后" },
      { id: "madeira", zh: "马德拉", en: "Madeira", abv: "17–20%", note: "加热氧化陈年，酸度高、坚果与焦糖；开瓶后极耐久，是最稳定的加强酒。", craft: "加烈后经 Estufagem（加热）与长期氧化陈年；高酸度是关键结构。", profile: "焦糖 / 坚果 / 高酸 / 咸香", bottles: "Blandy's / Justino's", use: "Madeira Old Fashioned、Sherry Cobbler 变体、餐后" },
      { id: "sparkling", zh: "起泡酒", en: "Sparkling Wine", abv: "11–12.5%", note: "气泡 + 酸度；Prosecco 果味轻，香槟更干更复杂，Cava 性价比高。", craft: "二次发酵产气：香槟用瓶内二次发酵，Prosecco 多用罐式（Charmat）发酵。", profile: "苹果 / 柑橘 / 酵母（香槟）/ 气泡", bottles: "La Marca / Nino Franco / Champagne Brut", use: "Aperol Spritz、French 75、Kir Royale", avoid: "开瓶后气泡流失快，需当场用完。" }
    ],
    choose: ["马天尼：干味美思。", "曼哈顿：甜味美思。", "低酒精：Fino。", "气泡：Prosecco/香槟。", "耐存放：马德拉。"],
    avoid: "味美思开瓶后必须冷藏，通常 4–6 周内用完；氧化不是陈年；Fino 与 Oloroso 不能互换。"
  },
  beer: {
    headline: "发酵谷物、气泡与苦味，最容易被低估的调酒材料。",
    overview: "啤酒提供气泡、苦味、麦芽甜与酒体。拉格清爽，小麦啤柔，IPA 苦香强，世涛有咖啡/巧克力。",
    production: "麦芽 → 糖化 → 煮沸（加酒花）→ 发酵 → 熟成 → 装瓶。不同酵母与酒花决定风格。",
    subtypes: [
      { id: "mexican-lager", zh: "啤酒", en: "Mexican Lager", abv: "4–5%", note: "清爽、轻麦芽、气泡足；Michelada 与 Shandy 的默认选择。", craft: "浅色拉格，低温发酵后长期熟成；玉米或大米辅料带来更轻的酒体。", profile: "轻麦芽 / 气泡 / 干净 / 微甜", bottles: "Modelo / Pacifico / Tecate", use: "Michelada、Shandy、Beer Margarita" },
      { id: "wheat", zh: "小麦啤", en: "Wheat Beer", abv: "4.5–5.5%", note: "柔、面包香、低苦；香蕉与丁香来自酵母，适合轻鸡尾酒。", craft: "小麦比例常 ≥50%；德式 Weissbier 用特殊酵母产生香蕉酯与丁香酚。", profile: "面包 / 香蕉 / 丁香 / 柔", bottles: "Weihenstephaner / Hoegaarden", use: "Beer Spritz、Shandy、Beer Mimosa" },
      { id: "ipa", zh: "IPA", en: "IPA", abv: "5.5–7.5%", note: "酒花苦香强；会压过番茄、青柠与辣酱，也会盖住细腻基酒。", craft: "大量后期干投酒花，苦度（IBU）与香气强度都高，酒体通常更干。", profile: "松脂 / 柑橘皮 / 苦 / 干", bottles: "本地 IPA / Sierra Nevada", use: "Beer Highball、苦味实验（少量）", avoid: "重酒花 IPA 会压过番茄、青柠与辣酱。" },
      { id: "stout", zh: "世涛", en: "Stout", abv: "4–9%", note: "咖啡、巧克力与烘烤；适合甜点与咖啡杯，也可做 Flip。", craft: "深色烘焙麦芽（或烘烤大麦）带来咖啡与可可；爱尔兰世涛酒体相对轻。", profile: "咖啡 / 可可 / 烘烤 / 微苦", bottles: "Guinness / Left Hand Milk Stout", use: "Stout Flip、咖啡啤酒、甜点搭配" },
      { id: "sour-beer", zh: "酸啤", en: "Sour Beer", abv: "3.5–5%", note: "乳酸或醋酸酸度，可替代部分柑橘酸；Gose 还带盐与香菜籽。", craft: "乳酸菌或野生酵母酸化；Berliner Weisse、Gose、Flanders Red 的路径各不相同。", profile: "乳酸 / 柑橘 / 咸（Gose）/ 清爽", bottles: "Berliner Weisse / Gose", use: "Beer Sour、低酒精长饮" },
      { id: "lambic", zh: "兰比克 / 果啤", en: "Lambic / Fruit Beer", abv: "5–8%", note: "自然发酵，酸与霉香（funky）；樱桃款（Kriek）最常用于调酒。", craft: "比利时自然发酵（野生酵母），陈年 1–3 年后与果肉二次发酵。", profile: "酸 / 杏仁核 / 霉香 / 果", bottles: "Lindemans Kriek / Cantillon", use: "Beer Sangria、低酒精甜饮" },
      { id: "na-beer", zh: "无酒精啤酒", en: "Non-Alcoholic Beer", abv: "0–0.5%", note: "保留麦芽与苦味、去掉酒精；是零酒精长饮最容易被忽略的体积来源。", craft: "真空蒸馏脱醇或限制发酵；脱醇后香气减弱，需要靠酒花补回。", profile: "麦芽 / 轻苦 / 气泡 / 略薄", bottles: "Heineken 0.0 / Athletic Brewing", use: "NA Michelada、NA Shandy" }
    ],
    choose: ["Michelada：墨西哥拉格。", "轻饮：小麦啤。", "苦香：IPA，少量。", "甜点：世涛。", "零酒精：无酒精拉格。"],
    avoid: "重酒花 IPA 会压过番茄、青柠与辣酱；啤酒必须冰镇，开瓶后尽快用完；兰比克的酸会改变整杯的糖酸比。"
  },
  low: {
    headline: "低酒精不是少放酒，而是补足体积、苦味、酸与气泡。",
    overview: "无酒精/低酒精饮品需要替代酒精带来的体积、苦味、辛辣与质地。无酒精蒸馏液、茶、咖啡、苦味补剂、气泡饮各司其职。",
    production: "无酒精蒸馏液、茶/咖啡浸提、苦味补剂、果汁/气泡；关键是复配而不是简单稀释。",
    subtypes: [
      { id: "na-spirits", zh: "无酒精蒸馏液", en: "NA Spirits", abv: "0%", note: "模拟金酒/龙舌兰/开胃酒的植物与苦味；不是无味水，但也没有酒精的体积感。", craft: "植物浸提后蒸馏（可含少量酒精再脱醇），或直接用植物水提物调配。", profile: "植物 / 苦味 / 柑橘 / 轻", bottles: "Seedlip / Lyre's / Pentire", use: "Phony Negroni、NA Spritz、NA Martini" },
      { id: "tea", zh: "茶饮", en: "Tea", abv: "0%", note: "单宁与香气，能替代部分酒精的体积与收尾；冷萃更少涩感。", craft: "冷萃 8–12 小时或热冲后速冷；单宁浓度决定它能提供多少“骨架”。", profile: "单宁 / 花香 / 收敛 / 长收尾", bottles: "冷萃红茶 / 乌龙 / 伯爵", use: "Arnold Palmer、Tea Highball、NA Collins" },
      { id: "coffee", zh: "咖啡", en: "Coffee", abv: "0%", note: "苦味、烘焙与油脂；冷萃更适合摇和，热萃适合热饮。", craft: "冷萃（约 1:8 粉水比，12–16 小时）或浓缩；油脂与苦味提供类似酒精的重量。", profile: "烘焙 / 苦 / 油脂 / 厚", bottles: "冷萃咖啡 / 浓缩", use: "NA Espresso Martini、Coffee Tonic" },
      { id: "bitters", zh: "苦味补剂", en: "Bitters & Tonics", abv: "0%", note: "补苦味与收尾；注意传统苦精含酒精，零酒精版本需另找。", craft: "草本与根茎浸提；无酒精版本用甘油或水基浸提替代酒精溶剂。", profile: "苦 / 香料 / 收尾长 / 少量", bottles: "NA Bitters / Tonic / Chinotto", use: "NA Old Fashioned、NA Spritz", avoid: "苦精手重会像药水。" },
      { id: "sparkling", zh: "气泡饮", en: "Sparkling", abv: "0%", note: "苏打、汤力、柠檬汽水；提供体积、气泡与汤力里的奎宁苦。", craft: "碳酸化水加糖、奎宁或柑橘；气泡粗细影响口感与稀释速度。", profile: "气泡 / 苦（汤力）/ 甜 / 清爽", bottles: "Fever-Tree / 苏打水 / Chinotto", use: "Spritz、Highball、NA Gin & Tonic" },
      { id: "na-wine", zh: "无酒精啤酒 / 葡萄酒", en: "NA Beer & Wine", abv: "0%", note: "直接替代低酒精长饮的主体；脱醇后酸度与单宁往往被削弱。", craft: "真空蒸馏或反渗透脱醇；香气损失需要靠浸提或调配补回。", profile: "果 / 酸 / 单薄 / 气泡", bottles: "无酒精起泡酒 / Athletic Brewing", use: "NA Spritz、NA Michelada、庆祝场合" },
      { id: "shrub", zh: "醋饮", en: "Shrub", abv: "0%", note: "醋 + 糖 + 水果的浓缩酸液；用酸度与刺激感替代酒精的“冲击”。", craft: "水果与糖静置出汁后加醋（苹果醋/香槟醋），冷藏数日完成融合。", profile: "醋酸 / 果 / 甜 / 刺激", bottles: "自制 shrub / 苹果醋", use: "Shrub Soda、NA Sour、NA Highball" }
    ],
    choose: ["零酒精苦甜：NA spirits。", "轻苦：tonic + NA aperitivo。", "茶感：冷萃茶。", "刺激感：shrub。", "注意苦精含酒精。"],
    avoid: "别只把酒精拿掉；要补苦味、盐、酸与气泡。注意苦精通常含酒精。"
  }
};
