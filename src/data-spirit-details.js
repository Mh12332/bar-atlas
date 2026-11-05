/* 基酒详情页：把“基酒”拆到可选择的子类别。 */
const SPIRIT_DETAILS = {
  gin: {
    headline: "植物蒸馏酒，杜松子是骨架，不是全部。",
    overview: "金酒以中性烈酒为底，经杜松子与多种植物重新蒸馏或浸泡。风格差异来自植物配方、蒸馏方式与是否加甜，而不是“酒精度越高越好”。",
    production: "中性谷物烈酒 → 杜松子与植物（芫荽、当归、柑橘皮、鸢尾根等）→ 蒸馏或浸泡 → 稀释装瓶。London Dry 不允许装瓶后加甜。",
    subtypes: [
      { zh: "London Dry", en: "London Dry", note: "干、锐利、杜松子突出；调酒最通用的风格。", bottles: "Beefeater / Tanqueray / Sipsmith", use: "Dry Martini、Negroni、Gin & Tonic" },
      { zh: "Plymouth", en: "Plymouth", note: "更柔、更圆，柑橘与根茎香；适合马天尼。", bottles: "Plymouth Gin", use: "Dry Martini、Pink Gin" },
      { zh: "Old Tom", en: "Old Tom", note: "微甜、质地更圆；18 世纪风格的现代复活。", bottles: "Hayman's Old Tom / Ransom", use: "Martinez、Tom Collins、Casino" },
      { zh: "Navy Strength", en: "Navy Strength", note: "酒精度高（约 57%），香气浓缩；入长饮要减量。", bottles: "Plymouth Navy Strength / Perry's Tot", use: "Navy Grog、Overproof 短饮" },
      { zh: "Contemporary", en: "Contemporary", note: "新式植物配方，柑橘、花香、海洋或本地植物；不要默认它能替代 London Dry。", bottles: "Monkey 47 / Malfy / Ki No Bi", use: "Gin & Tonic、Spritz、原创鸡尾酒" }
    ],
    choose: ["先备一瓶 London Dry 做通用款。", "想要柔和马天尼：Plymouth。", "想要甜圆古典：Old Tom。", "高酒精度金酒入长饮必须减量。"],
    avoid: "重杜松子酒不要压细腻花香或清酒；Navy Strength 不要按普通金酒等量使用。"
  },
  whiskey: {
    headline: "谷物、蒸馏、橡木与时间，四个变量写成不同语言。",
    overview: "威士忌的差异来自谷物配方、蒸馏器、橡木桶与陈年气候。做鸡尾酒时，先判断它是“甜、辛、烟、果”哪一种，再决定它适合 stirred 还是 sour。",
    production: "谷物糖化 → 发酵 → 蒸馏 → 入桶陈年 → 稀释装瓶。波本多用新烘烤橡木桶；苏格兰允许旧桶与不同泥煤程度；黑麦强调辛香。",
    subtypes: [
      { zh: "波本", en: "Bourbon", note: "玉米 ≥51%，新烘烤橡木桶；香草、焦糖、椰子、甜橡木。", bottles: "Buffalo Trace / Maker's Mark / Wild Turkey 101", use: "Old Fashioned、Whiskey Sour、Gold Rush" },
      { zh: "黑麦", en: "Rye", note: "黑麦比例高；辛香、胡椒、干果，酸酒更有骨架。", bottles: "Rittenhouse / Sazerac Rye / Wild Turkey Rye", use: "Manhattan、Sazerac、Final Ward" },
      { zh: "苏格兰调和", en: "Blended Scotch", note: "麦芽与谷物调和；蜂蜜、坚果、烟熏程度可控。", bottles: "Monkey Shoulder / Johnnie Walker Black", use: "Rob Roy、Penicillin、Blood & Sand" },
      { zh: "单一麦芽", en: "Single Malt", note: "单一酒厂麦芽；花果、海洋、泥煤差异大，别默认都重烟熏。", bottles: "Glenfiddich 12 / Lagavulin 16 / Talisker 10", use: "Rob Roy、Rusty Nail、Highball" },
      { zh: "爱尔兰", en: "Irish", note: "通常三次蒸馏，柔顺、奶油与谷物甜；适合顺饮与热饮。", bottles: "Jameson / Powers / Redbreast 12", use: "Irish Coffee、Hot Toddy、Tipperary" },
      { zh: "日本", en: "Japanese", note: "受苏格兰影响，强调平衡与细腻；高球文化成熟。", bottles: "Suntory Toki / Nikka Coffey Malt", use: "Japanese Highball、Whiskey Sour" }
    ],
    choose: ["做甜香古典：波本。", "做辛香曼哈顿：黑麦。", "做烟熏盘尼西林：苏格兰泥煤。", "做顺口热饮：爱尔兰。"],
    avoid: "重泥煤不适合细腻奶油与花香；高年份威士忌未必适合做混合酒。"
  },
  rum: {
    headline: "甘蔗的发酵与蒸馏，比“白/黑”更重要。",
    overview: "朗姆从甘蔗糖蜜或甘蔗汁出发，风格由原料、酵母、蒸馏器与陈年决定。白朗姆不等于无味，陈年朗姆也不等于甜。",
    production: "甘蔗糖蜜/汁 → 发酵（时间与酵母决定酯香）→ 壶式或柱式蒸馏 → 白朗姆过滤或陈年朗姆入桶 → 装瓶。",
    subtypes: [
      { zh: "白朗姆", en: "White Rum", note: "轻到中等酒体，甘蔗清甜；大吉利的基础。", bottles: "Probitas / Havana Club 3 / Plantation 3 Stars", use: "Daiquiri、Mojito、Cuba Libre" },
      { zh: "金朗姆", en: "Gold Rum", note: "轻陈年或加焦糖色；香草、蜂蜜、圆润。", bottles: "Appleton Signature / Mount Gay Eclipse", use: "Mai Tai、Planter's Punch" },
      { zh: "陈年朗姆", en: "Aged Rum", note: "橡木、焦糖、干果、香料；适合 stirred 与 Tiki。", bottles: "Appleton 12 / El Dorado 12 / Doorly's 12", use: "Rum Old Fashioned、Mai Tai、Zombie" },
      { zh: "高酯牙买加", en: "Jamaican High Ester", note: "香蕉、菠萝、油漆、funky；少量就能改变整杯。", bottles: "Smith & Cross / Wray & Nephew", use: "Kingston Negroni、Navy Grog、Tiki" },
      { zh: "农业朗姆", en: "Rhum Agricole", note: "甘蔗汁蒸馏，青草、矿物、花香；不是糖蜜朗姆。", bottles: "Rhum JM / Clément / Neisson", use: "Ti' Punch、Mai Tai、Three Dots" },
      { zh: "Overproof", en: "Overproof", note: "高酒精度（55%+），香气强；必须精确计量。", bottles: "Wray & Nephew Overproof / Lemon Hart 151", use: "Zombie、Jet Pilot、Navy Grog" }
    ],
    choose: ["大吉利：白朗姆。", "Tiki 多层：陈年 + 高酯 + Overproof 组合。", "想要甘蔗青草：农业朗姆。", "想要香蕉/funk：牙买加高酯。"],
    avoid: "重焦糖香精朗姆会掩盖柑橘；Overproof 不要按普通朗姆等量使用。"
  },
  agave: {
    headline: "龙舌兰是植物，梅斯卡尔是火与土。",
    overview: "龙舌兰与梅斯卡尔都来自龙舌兰植物，但产区、品种与烘烤方式不同。Blanco 最植物，Reposado/Añejo 有橡木，Mezcal 常有烟熏。",
    production: "龙舌兰心（piña）→ 蒸煮 → 碾碎 → 发酵 → 蒸馏。梅斯卡尔常在地下坑式炉中用木柴与石头烘烤，带来烟熏。",
    subtypes: [
      { zh: "Blanco", en: "Tequila Blanco", note: "未陈年或短陈；青绿、胡椒、柑橘，最适合酸酒。", bottles: "Tapatío / Siete Leguas / Fortaleza", use: "Margarita、Paloma、Ranch Water" },
      { zh: "Reposado", en: "Tequila Reposado", note: "橡木 2 个月–1 年；香草、甜木、圆润。", bottles: "El Tesoro / Siete Leguas Reposado", use: "Oaxaca Old Fashioned、Rosita" },
      { zh: "Añejo", en: "Tequila Añejo", note: "橡木 1–3 年；焦糖、干果、香草，适合纯饮或 stirred。", bottles: "Don Julio Añejo / El Tesoro Añejo", use: "Old Fashioned、After-dinner" },
      { zh: "Mezcal", en: "Mezcal", note: "烟熏、泥土、矿物；Espadín 最常见，品种差异大。", bottles: "Del Maguey Vida / Montelobos", use: "Naked and Famous、Mezcal Margarita" },
      { zh: "Raicilla / Sotol", en: "Raicilla / Sotol", note: "更小众的龙舌兰蒸馏酒；青绿、矿物、野性。", bottles: "La Venenosa / Hacienda de Chihuahua", use: "原创鸡尾酒、Highball" }
    ],
    choose: ["玛格丽特：Blanco。", "想要烟熏：Mezcal。", "想要香草橡木：Reposado。", "想要纯饮：Añejo。"],
    avoid: "梅斯卡尔用量过大会压住所有辅料；陈年龙舌兰的甜木香不适合清爽高球。"
  },
  brandy: {
    headline: "葡萄酒蒸馏后，橡木与时间决定语气。",
    overview: "白兰地是水果酒蒸馏后的烈酒。干邑与雅文邑是法国代表，皮斯科是秘鲁/智利代表，卡尔瓦多斯是苹果，格拉帕是葡萄渣。",
    production: "葡萄酒/果酒 → 蒸馏 → 入桶陈年（或不陈年）→ 调配 → 装瓶。干邑多用壶式蒸馏与法国橡木；皮斯科通常不陈年。",
    subtypes: [
      { zh: "干邑", en: "Cognac", note: "法国干邑区；葡萄、花香、橡木，VS/VSOP/XO 代表陈年。", bottles: "Pierre Ferrand 1840 / Hine / Rémy VSOP", use: "Sidecar、Vieux Carré、Alexander" },
      { zh: "雅文邑", en: "Armagnac", note: "更乡土、更香料；柱式蒸馏常见，质地更粗犷。", bottles: "Darroze / Larressingle", use: "Old Fashioned、Vieux Carré" },
      { zh: "皮斯科", en: "Pisco", note: "葡萄汁蒸馏、通常不陈年；花香、柑橘、轻盈。", bottles: "Barsol / Macchu Pisco", use: "Pisco Sour、Chilcano、Pisco Punch" },
      { zh: "卡尔瓦多斯", en: "Calvados", note: "苹果/梨蒸馏；果香、坚果、温暖。", bottles: "Boulard / Christian Drouin", use: "Angel Face、Golden Dawn" },
      { zh: "格拉帕", en: "Grappa", note: "葡萄渣蒸馏；青草、葡萄皮、强烈个性。", bottles: "Nonino / Nardini", use: "Grappa Highball、餐后" }
    ],
    choose: ["边车：干邑。", "皮斯科酸：皮斯科。", "苹果香：卡尔瓦多斯。", "想要粗犷香料：雅文邑。"],
    avoid: "昂贵干邑不适合重糖重奶油；皮斯科更轻盈，别按威士忌方式对待。"
  },
  vodka: {
    headline: "中性不是无味，而是把风味让给配方。",
    overview: "伏特加追求干净与质地，原料可以是小麦、黑麦、马铃薯、玉米或葡萄。它的作用是把鸡尾酒的骨架交给辅料。",
    production: "发酵 → 蒸馏（常多次）→ 过滤 → 稀释装瓶。不同原料与过滤方式带来细微质地差异。",
    subtypes: [
      { zh: "小麦", en: "Wheat", note: "柔顺、微甜、奶油质地；适合马天尼与奶油杯。", bottles: "Absolut / Ketel One / Belvedere", use: "Espresso Martini、Cosmopolitan" },
      { zh: "黑麦", en: "Rye", note: "更辛香、更干；给酸酒更多骨架。", bottles: "Belvedere / Chopin Rye", use: "Vodka Martini、Bloody Mary" },
      { zh: "马铃薯", en: "Potato", note: "更厚、更油润；适合重口味与奶油。", bottles: "Chopin Potato / Luksusowa", use: "White Russian、Espresso Martini" },
      { zh: "玉米", en: "Corn", note: "甜、柔、圆；低价伏特加常见。", bottles: "Tito's / Deep Eddy", use: "Moscow Mule、Bloody Mary" },
      { zh: "调味伏特加", en: "Flavored", note: "香草、柑橘、辣椒等；会改变配方甜度与香气。", bottles: "Absolut Citron / Vanilla", use: "Cosmopolitan、Porn Star Martini" }
    ],
    choose: ["Espresso Martini：小麦或马铃薯。", "Bloody Mary：黑麦/玉米，骨架更硬。", "甜点杯：马铃薯或香草伏特加。", "不要期待伏特加提供复杂香气。"],
    avoid: "不要用调味伏特加替代普通伏特加而不调整糖与香气。"
  },
  cane: {
    headline: "甘蔗汁的野生表亲，不是白朗姆。",
    overview: "卡莎萨是巴西甘蔗汁蒸馏酒，青草、甘蔗、轻微 funk；与朗姆的糖蜜底不同。它是 Caipirinha 的灵魂。",
    production: "甘蔗汁 → 发酵 → 蒸馏 → 可陈年或不陈年。未陈年更青绿，陈年更圆润。",
    subtypes: [
      { zh: "未陈年", en: "Unaged", note: "青草、甘蔗、辛辣；Caipirinha 首选。", bottles: "Leblon / Novo Fogo Silver", use: "Caipirinha、Rabo de Galo" },
      { zh: "陈年", en: "Aged", note: "橡木、香草、蜂蜜；可纯饮或 stirred。", bottles: "Novo Fogo Barrel-Aged / Avuá Amburana", use: "Old Fashioned、原创" },
      { zh: "甘蔗汁蒸馏", en: "Cane Juice", note: "更接近农业朗姆，青绿与矿物。", bottles: "Avuá / Weber Haus", use: "Ti' Punch 风格、Highball" }
    ],
    choose: ["Caipirinha：未陈年。", "想要圆润：陈年。", "想要青草与矿物：甘蔗汁蒸馏。"],
    avoid: "别把它简单等同于白朗姆；它的青草与 funk 会改变酸酒方向。"
  },
  rice: {
    headline: "米、麹与曲，三种不同的东方蒸馏/酿造语言。",
    overview: "清酒是酿造酒，烧酒/韩国烧酒多为蒸馏酒，白酒是高温大曲蒸馏。它们不是同一种“米酒”，风味与酒精度差异巨大。",
    production: "清酒：米 + 麹 + 水发酵；烧酒：发酵后蒸馏；白酒：高粱/谷物 + 大曲，固态发酵蒸馏。",
    subtypes: [
      { zh: "纯米清酒", en: "Junmai Sake", note: "米香、乳酸、鲜味；低酒精度，适合清冽短饮。", bottles: "Dassai / Hakkaisan", use: "Saketini、清酒 Highball" },
      { zh: "烧酒", en: "Shochu", note: "薯/麦/米蒸馏；清爽、低酒精度，适合 Highball。", bottles: "Iichiko / Kuro Kirishima", use: "Shochu Highball、Somaek" },
      { zh: "韩国烧酒", en: "Soju", note: "稀释式烧酒，甜、轻；适合批量与休闲。", bottles: "Chamisul / Jinro", use: "Somaek、Soju Highball" },
      { zh: "清香型白酒", en: "Baijiu", note: "酯香强、酒精度高；几毫升就能主导整杯。", bottles: "汾酒 / 红星二锅头", use: "Baijiu Sour、白酒 Highball" }
    ],
    choose: ["Saketini：纯米清酒。", "轻松 Highball：烧酒。", "烧啤：韩国烧酒。", "强香气实验：清香型白酒，少量。"],
    avoid: "白酒风味极强，通常 10–20 ml 就够；清酒不要和重柑橘长时间接触。"
  },
  liqueur: {
    headline: "甜、苦、香，三种角色，不能按体积互相替代。",
    overview: "利口酒覆盖橙味、苦味、咖啡、坚果、奶油、花香等。它们决定尾韵与甜度，常常是“少即是多”。",
    production: "基酒（中性酒精/白兰地/朗姆）→ 浸泡/蒸馏 → 加糖 → 装瓶。不同品牌糖度差异巨大。",
    subtypes: [
      { zh: "橙味利口酒", en: "Orange Liqueur", note: "君度干净、Triple Sec 更甜、Dry Curaçao 更干。", bottles: "Cointreau / Combier / Pierre Ferrand", use: "Margarita、Sidecar、White Lady" },
      { zh: "阿玛罗", en: "Amaro", note: "意大利苦味酒；苦甜、草本，风格从轻到极苦。", bottles: "Nonino / Averna / Cynar / Fernet", use: "Paper Plane、Little Italy、Toronto" },
      { zh: "咖啡利口酒", en: "Coffee Liqueur", note: "咖啡甜酒；Mr Black 更干，Kahlúa 更甜。", bottles: "Mr Black / Kahlúa", use: "Espresso Martini、White Russian" },
      { zh: "坚果利口酒", en: "Nut Liqueur", note: "杏仁、榛子、核桃；甜香强，少量即可。", bottles: "Luxardo Amaretto / Frangelico", use: "Amaretto Sour、Tiki" },
      { zh: "奶油利口酒", en: "Cream Liqueur", note: "乳脂 + 糖 + 酒；甜点杯，需冷藏。", bottles: "Baileys / RumChata", use: "Alexander、Grasshopper" }
    ],
    choose: ["橙香：Cointreau。", "苦味：Amaro/Fernet。", "咖啡：Mr Black。", "甜点：奶油利口酒，少量。"],
    avoid: "利口酒甜度差异巨大，不能按体积等量替换；苦味酒过量会盖住基酒。"
  },
  wine: {
    headline: "低酒精、高酸度，结构里的“液体调味”。",
    overview: "葡萄酒与加强酒提供酸度、单宁、氧化香与苦甜。味美思是加香加强酒，雪莉和波特是加强酒，起泡酒提供气泡与酸度。",
    production: "葡萄发酵 →（加强/加香）→ 陈年 → 装瓶。味美思开瓶后需冷藏，雪莉/波特开瓶后寿命更长。",
    subtypes: [
      { zh: "干味美思", en: "Dry Vermouth", note: "干、咸香、草本；马天尼与低酒精短饮。", bottles: "Dolin Dry / Noilly Prat", use: "Dry Martini、Bamboo" },
      { zh: "甜味美思", en: "Sweet Vermouth", note: "甜、香料、苦甜；曼哈顿与内格罗尼骨架。", bottles: "Carpano Antica / Cocchi / Dolin Rouge", use: "Manhattan、Negroni" },
      { zh: "Fino 雪莉", en: "Fino Sherry", note: "干、咸鲜、酵母香；极低酒精，适合餐前。", bottles: "Tío Pepe / La Ina", use: "Bamboo、Rebujito、Sherry Flip" },
      { zh: "起泡酒", en: "Sparkling", note: "酸度 + 气泡；Prosecco 果味，香槟更干。", bottles: "La Marca / Nino Franco", use: "Spritz、French 75、Kir Royale" },
      { zh: "波特", en: "Port", note: "甜、酒精度高；茶色波特有坚果氧化香。", bottles: "Taylor's / Graham's", use: "Porto Flip、餐后" }
    ],
    choose: ["马天尼：干味美思。", "曼哈顿：甜味美思。", "低酒精：Fino。", "气泡：Prosecco/香槟。"],
    avoid: "味美思开瓶后必须冷藏，通常 4–6 周内用完；氧化不是陈年。"
  },
  beer: {
    headline: "发酵谷物、气泡与苦味，最容易被低估的调酒材料。",
    overview: "啤酒提供气泡、苦味、麦芽甜与酒体。拉格清爽，小麦啤柔，IPA 苦香强，世涛有咖啡/巧克力。",
    production: "麦芽 → 糖化 → 煮沸（加酒花）→ 发酵 → 熟成 → 装瓶。不同酵母与酒花决定风格。",
    subtypes: [
      { zh: "墨西哥拉格", en: "Mexican Lager", note: "清爽、轻麦芽、气泡足；Michelada 与 Shandy。", bottles: "Modelo / Pacifico / Tecate", use: "Michelada、Shandy" },
      { zh: "小麦啤", en: "Wheat Beer", note: "柔、面包香、低苦；适合轻鸡尾酒。", bottles: "Weihenstephaner / Hoegaarden", use: "Beer Spritz、Shandy" },
      { zh: "IPA", en: "IPA", note: "酒花苦香强；会压过番茄、青柠与辣酱。", bottles: "本地 IPA", use: "Beer Highball、苦味实验" },
      { zh: "世涛", en: "Stout", note: "咖啡、巧克力、烘烤；适合甜点/咖啡杯。", bottles: "Guinness / Left Hand", use: "Stout Flip、咖啡啤酒" },
      { zh: "酸啤", en: "Sour Beer", note: "乳酸/醋酸酸度；可替代部分柑橘酸。", bottles: "Berliner Weisse / Gose", use: "Beer Sour、低酒精" }
    ],
    choose: ["Michelada：墨西哥拉格。", "轻饮：小麦啤。", "苦香：IPA，少量。", "甜点：世涛。"],
    avoid: "重酒花 IPA 会压过番茄、青柠与辣酱；啤酒必须冰镇，开瓶后尽快用完。"
  },
  low: {
    headline: "低酒精不是少放酒，而是补足体积、苦味、酸与气泡。",
    overview: "无酒精/低酒精饮品需要替代酒精带来的体积、苦味、辛辣与质地。无酒精蒸馏液、茶、咖啡、苦味补剂、气泡饮各司其职。",
    production: "无酒精蒸馏液、茶/咖啡浸提、苦味补剂、果汁/气泡；关键是复配而不是简单稀释。",
    subtypes: [
      { zh: "无酒精蒸馏液", en: "NA Spirits", note: "模拟金酒/龙舌兰/开胃酒的植物与苦味；不是无味水。", bottles: "Seedlip / Lyre's / Pentire", use: "Phony Negroni、NA Spritz" },
      { zh: "茶", en: "Tea", note: "单宁与香气；冷萃红茶/乌龙可替代部分酒精体积。", bottles: "冷萃红茶 / 乌龙", use: "Arnold Palmer、Tea Highball" },
      { zh: "咖啡", en: "Coffee", note: "苦味、烘焙与咖啡因；冷萃更适合摇和。", bottles: "冷萃咖啡", use: "Espresso Martini、Coffee Tonic" },
      { zh: "苦味补剂", en: "Bitters & Tonics", note: "补苦味与收尾；注意苦精通常含酒精。", bottles: " tonic / NA bitters", use: "NA Spritz、Tonic" },
      { zh: "气泡饮", en: "Sparkling", note: "苏打、汤力、柠檬汽水；提供体积与气泡。", bottles: "Fever-Tree / 苏打水", use: "Spritz、Highball" }
    ],
    choose: ["零酒精苦甜：NA spirits。", "轻苦：tonic + NA aperitivo。", "茶感：冷萃茶。", "注意苦精含酒精。"],
    avoid: "别只把酒精拿掉；要补苦味、盐、酸与气泡。注意苦精通常含酒精。"
  },
};
