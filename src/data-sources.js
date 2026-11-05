/* ============================================================
   IBA 索引、历史叙事、参考来源与时间线
   IBA 分类与官方页面以 2026 年 11 月访问的 iba-world.com 为准。
   ============================================================ */

const IBA_CATS = {
  U: { zh: "IBA 不可遗忘", en: "The Unforgettables" },
  C: { zh: "IBA 当代经典", en: "Contemporary Classics" },
  N: { zh: "IBA 新纪元", en: "The New Era" }
};

/* [官方名称, 分类, IBA 页面 slug] */
const IBA_INDEX = {
  // The Unforgettables — 34
  alexander: ["Alexander", "U", "alexander"],
  americano: ["Americano", "U", "americano"],
  "angel-face": ["Angel Face", "U", "angel-face"],
  aviation: ["Aviation", "U", "aviation"],
  "between-the-sheets": ["Between the Sheets", "U", "between-the-sheets"],
  boulevardier: ["Boulevardier", "U", "boulevardier"],
  "brandy-crusta": ["Brandy Crusta", "U", "brandy-crusta"],
  casino: ["Casino", "U", "casino"],
  "clover-club": ["Clover Club", "U", "clover-club"],
  daiquiri: ["Daiquiri", "U", "daiquiri"],
  "dry-martini": ["Dry Martini", "U", "dry-martini"],
  "gin-fizz": ["Gin Fizz", "U", "gin-fizz"],
  "hanky-panky": ["Hanky Panky", "U", "hanky-panky"],
  "john-collins": ["John Collins", "U", "john-collins"],
  "last-word": ["Last Word", "U", "last-word"],
  manhattan: ["Manhattan", "U", "manhattan"],
  martinez: ["Martinez", "U", "martinez"],
  "mary-pickford": ["Mary Pickford", "U", "mary-pickford"],
  "monkey-gland": ["Monkey Gland", "U", "monkey-gland"],
  negroni: ["Negroni", "U", "negroni"],
  "old-fashioned": ["Old Fashioned", "U", "old-fashioned"],
  paradise: ["Paradise", "U", "paradise"],
  "planters-punch": ["Planters Punch", "U", "planters-punch"],
  "porto-flip": ["Porto Flip", "U", "porto-flip"],
  "ramos-gin-fizz": ["Ramos Fizz", "U", "ramos-fizz"],
  "remember-the-maine": ["Remember the Maine", "U", "remember-the-maine"],
  "rusty-nail": ["Rusty Nail", "U", "rusty-nail"],
  sazerac: ["Sazerac", "U", "sazerac"],
  sidecar: ["Sidecar", "U", "sidecar"],
  stinger: ["Stinger", "U", "stinger"],
  tuxedo: ["Tuxedo", "U", "tuxedo"],
  "vieux-carre": ["Vieux Carré", "U", "vieux-carre"],
  "whiskey-sour": ["Whiskey Sour", "U", "whiskey-sour"],
  "white-lady": ["White Lady", "U", "white-lady"],

  // The Contemporary Classics — 34
  bellini: ["Bellini", "C", "bellini"],
  "black-russian": ["Black Russian", "C", "black-russian"],
  "bloody-mary": ["Bloody Mary", "C", "bloody-mary"],
  caipirinha: ["Caipirinha", "C", "caipirinha"],
  cardinale: ["Cardinale", "C", "cardinale"],
  "champagne-cocktail": ["Champagne Cocktail", "C", "champagne-cocktail"],
  "corpse-reviver-2": ["Corpse Reviver #2", "C", "corpse-reviver-2"],
  cosmopolitan: ["Cosmopolitan", "C", "cosmopolitan"],
  "cuba-libre": ["Cuba Libre", "C", "cuba-libre"],
  "french-75": ["French 75", "C", "french-75"],
  "french-connection": ["French Connection", "C", "french-connection"],
  garibaldi: ["Garibaldi", "C", "garibaldi"],
  grasshopper: ["Grasshopper", "C", "grasshopper"],
  "hemingway-daiquiri": ["Hemingway Special", "C", "hemingway-special"],
  "horses-neck": ["Horse's Neck", "C", "horses-neck"],
  "irish-coffee": ["Irish Coffee", "C", "irish-coffee"],
  kir: ["Kir", "C", "kir"],
  "lemon-drop": ["Lemon Drop Martini", "C", "lemon-drop-martini"],
  "long-island-iced-tea": ["Long Island Iced Tea", "C", "long-island-iced-tea"],
  "mai-tai": ["Mai-Tai", "C", "mai-tai"],
  margarita: ["Margarita", "C", "margarita"],
  mimosa: ["Mimosa", "C", "mimosa"],
  "mint-julep": ["Mint Julep", "C", "mint-julep"],
  mojito: ["Mojito", "C", "mojito"],
  "moscow-mule": ["Moscow Mule", "C", "moscow-mule"],
  "pina-colada": ["Pina Colada", "C", "pina-colada"],
  "pisco-sour": ["Pisco Sour", "C", "pisco-sour"],
  "rabo-de-galo": ["Rabo de Galo", "C", "rabo-de-galo"],
  "sea-breeze": ["Sea Breeze", "C", "sea-breeze"],
  "sex-on-the-beach": ["Sex on the Beach", "C", "sex-on-the-beach"],
  "singapore-sling": ["Singapore Sling", "C", "singapore-sling"],
  "tequila-sunrise": ["Tequila Sunrise", "C", "tequila-sunrise"],
  vesper: ["Vesper", "C", "vesper"],
  zombie: ["Zombie", "C", "zombie"],

  // The New Era — 34
  "bees-knees": ["Bee's Knees", "N", "bees-knees"],
  bramble: ["Bramble", "N", "bramble"],
  canchanchara: ["Canchanchara", "N", "canchanchara"],
  "chartreuse-swizzle": ["Chartreuse Swizzle", "N", "chartreuse-swizzle"],
  "dark-n-stormy": ["Dark 'N' Stormy", "N", "dark-n-stormy"],
  "dons-special-daiquiri": ["Don's Special Daiquiri", "N", "dons-special-daiquiri"],
  "espresso-martini": ["Espresso Martini", "N", "espresso-martini"],
  fernandito: ["Fernandito", "N", "fernandito"],
  "french-martini": ["French Martini", "N", "french-martini"],
  "gin-basil-smash": ["Gin Basil Smash", "N", "gin-basil-smash"],
  "grand-margarita": ["Grand Margarita", "N", "grand-margarita"],
  "iba-tiki": ["IBA Tiki", "N", "iba-tiki"],
  illegal: ["Illegal", "N", "illegal"],
  "jungle-bird": ["Jungle Bird", "N", "jungle-bird"],
  "missionarys-downfall": ["Missionary's Downfall", "N", "missionarys-downfall"],
  "naked-and-famous": ["Naked and Famous", "N", "naked-and-famous"],
  "new-york-sour": ["New York Sour", "N", "new-york-sour"],
  "old-cuban": ["Old Cuban", "N", "old-cuban"],
  paloma: ["Paloma", "N", "paloma"],
  "paper-plane": ["Paper Plane", "N", "paper-plane"],
  penicillin: ["Penicillin", "N", "penicillin"],
  "pisco-punch": ["Pisco Punch", "N", "pisco-punch"],
  "porn-star-martini": ["Porn Star Martini", "N", "porn-star-martini"],
  "russian-spring-punch": ["Russian Spring Punch", "N", "russian-spring-punch"],
  "sherry-cobbler": ["Sherry Cobbler", "N", "sherry-cobbler"],
  southside: ["South Side", "N", "south-side"],
  "spicy-fifty": ["Spicy Fifty", "N", "spicy-fifty"],
  "aperol-spritz": ["Spritz", "N", "spritz"],
  "suffering-bastard": ["Suffering Bastard", "N", "suffering-bastard"],
  "three-dots-and-a-dash": ["Three Dots and a Dash", "N", "three-dots-and-a-dash"],
  tipperary: ["Tipperary", "N", "tipperary"],
  "tommys-margarita": ["Tommy's Margarita", "N", "tommys-margarita"],
  "trinidad-sour": ["Trinidad Sour", "N", "trinidad-sour"],
  "ve-n-to": ["Ve.N.To", "N", "ve-n-to"]
};

const IBA_COUNT = Object.keys(IBA_INDEX).length;

/* 已核对的 IBA 官方配方（与吧台版并列展示） */
const IBA_SPECS = {
  daiquiri: [["白古巴朗姆", "60 ml"], ["鲜榨青柠汁", "20 ml"], ["超细砂糖", "2 吧勺"]],
  "dry-martini": [["金酒", "60 ml"], ["干味美思", "10 ml"]],
  negroni: [["金酒", "30 ml"], ["金巴利", "30 ml"], ["甜味美思", "30 ml"]],
  manhattan: [["黑麦威士忌", "50 ml"], ["甜味美思", "20 ml"], ["安高天娜", "1 dash"]],
  margarita: [["100% 龙舌兰", "50 ml"], ["Triple Sec", "20 ml"], ["鲜榨青柠汁", "15 ml"]],
  "old-fashioned": [["波本或黑麦", "45 ml"], ["方糖", "1 块"], ["安高天娜", "数 dash"], ["清水", "数 dash"]],
  "whiskey-sour": [["波本", "45 ml"], ["鲜榨柠檬汁", "25 ml"], ["糖浆", "20 ml"], ["蛋清", "数滴（可选）"]],
  mojito: [["白古巴朗姆", "45 ml"], ["鲜榨青柠汁", "20 ml"], ["薄荷枝", "6 枝"], ["白甘蔗糖", "2 茶匙"], ["苏打水", "补满"]],
  "mai-tai": [["牙买加琥珀朗姆", "30 ml"], ["马丁尼克糖蜜朗姆", "30 ml"], ["橙味库拉索", "15 ml"], ["杏仁糖浆", "15 ml"], ["青柠汁", "30 ml"], ["糖浆", "7.5 ml"]],
  "aperol-spritz": [["Prosecco", "90 ml"], ["Aperol", "60 ml"], ["苏打水", "少量"]],
  "white-lady": [["金酒", "40 ml"], ["Triple Sec", "30 ml"], ["鲜榨柠檬汁", "20 ml"]]
};

/* 非 IBA 或 IBA 变体配方的历史补充 */
const HISTORY = {
  "old-fashioned": "“Cocktail”一词在 1806 年纽约州的一份报纸上被定义为“烈酒、糖、水与苦精”的混合物。19 世纪后期，调酒师开始用“Old Fashioned”称呼这种按古法制作的威士忌鸡尾酒，以区别于当时流行的花式甜酒。",
  "dry-martini": "马天尼由 19 世纪的 Martinez 演变而来，“Dry”指减少甜味美思、增加金酒。20 世纪初，随着干味美思与搅拌技法的普及，它成为检验酒吧温度与稀释控制的标志性短饮。",
  negroni: "1919 年前后，佛罗伦萨的 Camillo Negroni 伯爵请 Caffè Casoni 的调酒师 Fosco Scarselli 把美国佬中的苏打换成金酒。这杯更烈的版本后来以他的名字流传，成为 1:1:1 的经典。",
  manhattan: "曼哈顿常被追溯到 1870 年代纽约的 Manhattan Club，传说为 Jennie Jerome 的宴会而作，但缺乏确证。黑麦与甜味美思的组合在 19 世纪末迅速流行，成为“双料型”鸡尾酒的代表。",
  "whiskey-sour": "酸酒家族在 19 世纪已成型，1862 年 Jerry Thomas 的《Bartender's Guide》记录了威士忌酸。蛋清版本在 20 世纪成为标准之一，纽约酸则是它加入红酒漂浮的变体。",
  daiquiri: "Daiquiri 得名于古巴圣地亚哥附近的 Daiquirí 铁矿，常被归功于美国工程师 Jennings Cox 在 1898 年前后的配方。海明威在哈瓦那 El Floridita 的偏好让它更出名，Frozen Daiquiri 也由那里推广。",
  margarita: "玛格丽特的起源至少有十几个版本，涉及 1930 年代的蒂华纳、阿卡普尔科与墨西哥城。比较可靠的说法是它由黛西型（烈酒 + 橙味利口酒 + 柑橘）演化而来，盐边与青柠成为标准。",
  mojito: "莫吉托常被追溯到古巴甘蔗种植园与非洲奴隶的甘蔗酒饮，但早期记录模糊。20 世纪哈瓦那的酒吧把它定型为朗姆、青柠、薄荷、糖与苏打，海明威的常客故事进一步放大了它的名气。",
  "mai-tai": "Trader Vic 在 1944 年于加州奥克兰创作 Mai Tai，并用塔希提语“Mai Tai roa ae”（极好）命名。Don the Beachcomber 也宣称更早发明，配方之争延续至今；1960 年代的度假版常加菠萝汁。",
  zombie: "Zombie 由 Don the Beachcomber 在 1934 年的好莱坞创作，因一位宿醉客人要求“一杯能让我复活”的酒而得名。原版使用多种朗姆、百香果、肉桂与苦艾，酒精度极高，后来出现 1934 年复原版。",
  "jungle-bird": "Jungle Bird 于 1978 年由吉隆坡希尔顿酒店的 Jeffrey Ong 创作，最初是给酒店 Avocado 餐厅的欢迎饮料。金巴利的苦与菠萝的甜酸形成罕见平衡，2010 年代被全球酒吧重新发现。",
  painkiller: "Painkiller 源自 1970 年代英属维尔京群岛的 Soggy Dollar Bar，以黑朗姆、菠萝、橙、椰奶油与肉豆蔻制成。名字与“止痛药”无关，更多是海滩酒吧的玩笑；Pusser's 朗姆与它的商标争议也很有名。",
  "pina-colada": "Piña Colada 常被归功于 1954 年波多黎各 Caribe Hilton 的 Ramón “Monchito” Marrero，1978 年成为波多黎各官方饮品。它由朗姆、菠萝与椰奶油组成，冰沙版在 1970 年代随度假文化流行。",
  "aperol-spritz": "Spritz 源自 19 世纪意大利东北部，当时奥匈帝国士兵把水加入葡萄酒以适应口味。Aperol 于 1919 年在帕多瓦诞生，20 世纪后期 Aperol Spritz 成为威尼斯与意大利北部的日常开胃酒；IBA 在“新纪元”中标准化为 3:2:1。",
  americano: "Americano 见于 1860 年代，是金巴利、甜味美思与苏打的长饮。它比内格罗尼更早，也是内格罗尼诞生的直接前身；名字与“美国游客”或“美国式”有关，具体来源仍有争议。",
  boulevardier: "Boulevardier 由美国作家 Erskine Gwynne 在 1927 年左右的巴黎创作，名字来自他出版的杂志。它是内格罗尼的威士忌版本，用波本或黑麦替代金酒，比例通常更偏酒。",
  sazerac: "Sazerac 起源于 19 世纪新奥尔良，最初用干邑与 Peychaud's 苦精，后来因根瘤蚜疫与禁酒令改用黑麦。苦艾冲洗、柠檬皮油与不加冰的短饮形式，是它最鲜明的标志。",
  "mint-julep": "Mint Julep 在 19 世纪美国南方流行，常与赛马、夏季与肯塔基联系在一起。碎冰、金属杯与薄荷枝是它的仪式感；1938 年起成为肯塔基德比的官方饮品。",
  penicillin: "Penicillin 由纽约 Milk & Honey 的 Sam Ross 在 2005 年创作，是苏格兰威士忌、柠檬、蜂蜜姜与泥煤威士忌漂浮的组合。它迅速成为现代经典，并被 IBA 收进“新纪元”。",
  "paper-plane": "Paper Plane 由芝加哥 The Violet Hour 的 Sam Ross 在 2008 年创作，灵感来自 M.I.A. 的同名歌曲。四等分的波本、Aperol、Amaro Nonino 与柠檬，让它成为 2010 年代最受欢迎的现代酸酒之一。",
  "naked-and-famous": "Naked and Famous 由纽约 Death & Co 的 Joaquín Simó 在 2011 年创作，是 Last Word 的梅斯卡尔版本。等量的梅斯卡尔、Aperol、黄查特与青柠，苦甜与烟熏并置。",
  "last-word": "Last Word 起源于 1910 年代底特律的 Detroit Athletic Club，禁酒令后几乎消失，2000 年代在西雅图与纽约的酒吧复兴。等量金酒、绿查特、黑樱桃与青柠，是“等分四材料”的经典。",
  "corpse-reviver-2": "Corpse Reviver #2 见于 1930 年《Savoy Cocktail Book》，是“起死回生”系列的解酒酒之一。金酒、君度、Lillet、柠檬与苦艾冲洗的组合，靠苦艾的香气把酸甜收干。",
  aviation: "Aviation 由纽约调酒师 Hugo Ensslin 在 1916 年的书中记录，因紫罗兰利口酒的淡紫色而得名。禁酒令后配方一度失传，20 世纪末随经典鸡尾酒复兴重新流行。",
  sidecar: "Sidecar 常被追溯到一战后的巴黎与伦敦，名字来自摩托车边车。干邑、橙味利口酒与柠檬的三角结构，使它成为黛西家族最优雅的代表之一；糖边与杯型版本至今仍有争议。",
  "pisco-sour": "Pisco Sour 常被归功于 1920 年代利马 Morris' Bar 的美国调酒师 Victor V. Morris。秘鲁与智利都宣称拥有它，蛋清泡沫与安高天娜苦精点纹是识别标志。",
  "espresso-martini": "Espresso Martini 由伦敦调酒师 Dick Bradsell 在 1980 年代创作，传说一位客人要求“让我清醒，然后再把我灌醉”。伏特加、咖啡利口酒与浓缩咖啡摇出的泡沫，是它的签名。",
  "bloody-mary": "Bloody Mary 的起源有巴黎 Harry's Bar、纽约 St. Regis 与好莱坞等版本，1920–30 年代逐渐成型。番茄汁、伏特加、伍斯特、辣酱与芹菜的咸鲜组合，使它成为最像“食物”的鸡尾酒。",
  "moscow-mule": "Moscow Mule 于 1941 年前后在纽约创作，常被归功于 John G. Martin 与 Jack Morgan 的伏特加与姜啤推广。铜杯、青柠与姜啤的组合，成为伏特加进入美国市场的重要推手。",
  cosmopolitan: "Cosmopolitan 在 1970–80 年代的美国酒吧逐步成型，Toby Cecchini 在 1980 年代末的纽约版本被广泛引用。伏特加、君度、青柠与蔓越莓的颜色，使它成为 90 年代都市文化的符号。",
  "clover-club": "Clover Club 得名于 19 世纪末费城的 Clover Club 绅士社团，金酒、柠檬、覆盆子与蛋清是它的经典结构。禁酒令后一度沉寂，2000 年代随手工鸡尾酒复兴回归。",
  southside: "South Side 与 19 世纪末芝加哥 South Side 的酒吧有关，也被视为金酒莫吉托的短饮版。金酒、青柠、糖与薄荷的组合，在禁酒令时期与纽约的 Stork Club 版本中都很流行。",
  bramble: "Bramble 由伦敦调酒师 Dick Bradsell 在 1984 年创作，名字来自黑莓灌木。金酒酸酒加碎冰、最后淋黑莓利口酒的层次，是英国现代鸡尾酒复兴的代表。",
  "bees-knees": "Bee's Knees 在禁酒令时期流行，蜂蜜与柠檬用来掩盖劣质金酒的粗糙。名字是 1920 年代俚语，意为“最棒的”；蜂蜜糖浆必须稀释，才能与金酒和柠檬平衡。",
  "gin-fizz": "Gin Fizz 是 19 世纪酸酒加苏打的长饮，1862 年 Jerry Thomas 已有记录。Ramos Gin Fizz 由新奥尔良的 Henry C. Ramos 在 1880 年代发展，以奶油、蛋清、橙花水与长时间摇和闻名。",
  "tom-collins": "Tom Collins 的名字来自 19 世纪伦敦的 John Collins 与 Old Tom 金酒的文字游戏。它是最早的“酸酒 + 苏打”长饮之一，19 世纪末在美国酒吧极为流行。",
  "french-75": "French 75 得名于一战时期的法国 75 毫米野战炮，因香槟气泡的“冲击力”而戏称。金酒、柠檬、糖与香槟的组合，在 1930 年《Savoy Cocktail Book》中定型。",
  "white-lady": "White Lady 由伦敦 Savoy 酒吧的 Harry Craddock 在 1920 年代推广，金酒、君度与柠檬的结构与 Sidecar 平行。蛋清版本在 20 世纪后期成为标准之一。",
  gimlet: "Gimlet 与 19 世纪英国海军的青柠 cordial 有关，用来预防坏血病。金酒与青柠 cordial 的原始版本很甜，现代酒吧多用鲜榨青柠与糖浆重做。",
  saturn: "Saturn 由 J. “Popo” Galsini 在 1960 年代创作，是 Tiki 中少见的金酒主导配方。百香果、杏仁、法勒南与柠檬的组合，让它在 2000 年代被重新发现。",
  paloma: "Paloma 是墨西哥最日常的龙舌兰长饮之一，常见说法可追溯到 1950 年代。西柚汽水、青柠与盐的组合，比玛格丽特更轻松，也更适合炎热天气。",
  "tommys-margarita": "Tommy's Margarita 由旧金山 Tommy's Mexican Restaurant 的 Julio Bermejo 在 1990 年代推广，用龙舌兰糖浆替代橙味利口酒。它让龙舌兰与青柠直接对话，后来被 IBA 收进“新纪元”。",
  "oaxaca-old-fashioned": "Oaxaca Old Fashioned 由纽约 Death & Co 的 Phil Ward 在 2007 年创作。龙舌兰、梅斯卡尔、龙舌兰糖浆与莫尔苦精，把古典鸡尾酒的结构移到瓦哈卡的风土上。",
  "tequila-sunrise": "Tequila Sunrise 在 1970 年代于加州与墨西哥的酒吧流行，滚石乐队的巡演与 1988 年电影让它成为流行文化符号。龙舌兰、橙汁与石榴糖浆的渐变是它的视觉签名。",
  "ranch-water": "Ranch Water 是德州西部的日常喝法，龙舌兰、青柠、苏打与盐，无糖、极干。它常被追溯到 1960 年代的牧场与钓鱼文化，2010 年代成为瘦身版龙舌兰长饮。",
  "sherry-cobbler": "Sherry Cobbler 在 19 世纪中期非常流行，是“Cobbler”类碎冰饮品与雪莉酒的代表。它推动了碎冰、吸管与柑橘装饰在美国酒吧的普及，也被视为现代长饮的前身。",
  bamboo: "Bamboo 由日本调酒师在 19 世纪末推广，常见记载指向横滨 Grand Hotel 的 Louis Eppinger。Fino 雪莉与干味美思的低酒精组合，后来在纽约与东京的酒吧复兴。",
  adonis: "Adonis 于 1880 年代在纽约出现，名字来自当时一部同名音乐剧。Fino 雪莉、甜味美思与橙味苦精，是低酒精短饮的经典结构。",
  "kir-royale": "Kir Royal 是 Kir 的起泡酒版本，以第戎市长 Félix Kir 命名。黑加仑利口酒与香槟的组合，在 20 世纪后期成为法国餐前酒的象征。",
  hurricane: "Hurricane 由新奥尔良 Pat O'Brien's 在 1940 年代创作，因二战期间威士忌短缺、酒吧用朗姆替代而诞生。飓风杯与百香果糖浆的红色，是法国区旅游文化的标志。",
  "navy-grog": "Navy Grog 由 Don the Beachcomber 在 1940 年代创作，名字来自英国海军的水酒配给。三种朗姆、青柠、西柚、蜂蜜与多香果，是 Tiki 中最“干”的结构之一。",
  "planters-punch": "Planter's Punch 在 19 世纪加勒比与牙买加的酒吧流行，名字来自甘蔗种植园主。朗姆、青柠、糖、苦精与水的 1:2:3:4 结构，是潘趣公式的经典表达。",
  "dark-n-stormy": "Dark 'N' Stormy 与百慕大 Gosling's 黑朗姆和姜啤有关，20 世纪中期成为当地标志。Gosling's 与姜啤品牌之间的商标争议，也让这杯酒更有名。",
  "cuba-libre": "Cuba Libre 据说起源于 1900 年前后的古巴，是朗姆、可乐与青柠的组合，名字意为“自由古巴”。青柠是它区别于普通朗姆可乐的关键。",
  "rusty-nail": "Rusty Nail 在 20 世纪中期流行，是苏格兰威士忌与 Drambuie 的餐后组合。Drambuie 的蜂蜜、草药与威士忌的烟熏，形成简单却强烈的双料结构。",
  godfather: "Godfather 是 1970 年代流行的双料餐后酒，苏格兰威士忌与杏仁利口酒。名字来自同名电影，但配方与电影没有直接关系；比例从 3:1 到 2:1 都可。",
  "irish-coffee": "Irish Coffee 由爱尔兰厨师 Joe Sheridan 在 1940 年代为跨大西洋飞行的乘客创作，后来由旧金山 Buena Vista 酒吧推广到美国。热咖啡、爱尔兰威士忌、糖与冷奶油的分层是它的仪式。",
  "vieux-carre": "Vieux Carré 由新奥尔良 Carousel Bar 的 Walter Bergeron 在 1930 年代创作，名字是法语“老广场”，指法国区。黑麦、干邑、甜味美思、Bénédictine 与两种苦精，是这座城市多元历史的缩影。",
  toronto: "Toronto 见于 1920 年代，是黑麦威士忌、Fernet-Branca 与糖浆的短饮。Fernet 的薄荷与药草苦味，让它在禁酒令后的北美酒吧中流传。",
  "little-italy": "Little Italy 由纽约 Pegu Club 的 Audrey Saunders 在 2000 年代创作，是黑麦、Cynar 与甜味美思的曼哈顿变体。Cynar 的朝鲜蓟苦味与焦糖，让它比曼哈顿更草本。",
  greenpoint: "Greenpoint 由纽约 Milk & Honey 的 Michael McIlroy 在 2000 年代创作，以布鲁克林 Greenpoint 区命名。黑麦、黄查特与甜味美思，是“布鲁克林”系列经典之一。",
  revolver: "Revolver 由旧金山 Bourbon & Branch 的 Jon Santer 在 2000 年代创作，用波本、咖啡利口酒与橙味苦精。烧橙皮的香气与咖啡的烘焙苦，是它的签名。",
  vesper: "Vesper 出自 Ian Fleming 1953 年的《Casino Royale》，以 Vesper Lynd 命名。金酒、伏特加与 Kina Lillet 的组合，因原版 Kina Lillet 停产而需要用 Cocchi Americano 等替代。",
  "white-russian": "White Russian 在 1960–70 年代流行，是黑俄罗斯加奶油的分层版本。1998 年电影《The Big Lebowski》让它重新成为流行文化符号。",
  "black-russian": "Black Russian 在 1949 年由比利时调酒师 Gustave Tops 在布鲁塞尔创作，为美国驻卢森堡大使而作。伏特加与咖啡利口酒的组合，是冷战时期“美国酒”的象征之一。",
  "lemon-drop": "Lemon Drop 在 1970–80 年代的美国酒吧流行，常被做成 shot 或马天尼。柠檬、糖与伏特加的酸甜组合，名字来自柠檬糖。",
  kamikaze: "Kamikaze 在 1970 年代流行，是伏特加、君度与青柠的等分短饮。名字来自二战的神风特攻队，带有那个年代酒吧文化的冒犯性幽默。",
  "sea-breeze": "Sea Breeze 在 1920 年代已有记录，但 1980 年代因蔓越莓汁的商业推广而流行。伏特加、蔓越莓与西柚的组合，是 80 年代“低热量”鸡尾酒的代表。",
  "harvey-wallbanger": "Harvey Wallbanger 在 1970 年代流行，是伏特加、橙汁与 Galliano 的長飲。名字来自一位据说撞墙的冲浪者，是 70 年代迪斯科酒吧的产物。",
  "chi-chi": "Chi Chi 是 Piña Colada 的伏特加版本，在 1970 年代的美国酒吧流行。它保留了菠萝与椰奶油的热带质地，但用伏特加替代朗姆，味道更中性。",
  "amaretto-sour": "Amaretto Sour 在 1970–80 年代流行，但常因过甜被诟病。2000 年代 Jeffrey Morgenthaler 用高酒精度波本与蛋清重做，让它重新成为平衡的现代经典。",
  grasshopper: "Grasshopper 在 1918 年前后于新奥尔良创作，是薄荷利口酒、白可可与奶油的甜点鸡尾酒。绿色来自薄荷利口酒，20 世纪中期在美国中西部与餐后酒文化中流行。",
  garibaldi: "Garibaldi 以意大利统一英雄 Giuseppe Garibaldi 命名，是金巴利与橙汁的两材料长饮。橙汁的泡沫与甜味平衡金巴利的苦，是意大利开胃酒文化的代表。",
  "white-negroni": "White Negroni 是 2000 年代伦敦调酒师 Wayne Collins 的现代创作，用 Lillet Blanc 与 Suze 替代甜味美思和金巴利。它保留内格罗尼的苦甜骨架，却把颜色与香气都转向花香、葡萄与龙胆根。",
  "ramos-gin-fizz": "Ramos Gin Fizz 由新奥尔良的 Henry C. Ramos 在 1880 年代发展，以奶油、蛋清、橙花水与长时间摇和著称。它曾是酒吧里最费力的酒之一，甚至需要专门的小工接力摇壶。",
  "gin-tonic": "金汤力源于 19 世纪英属印度：士兵用奎宁汤力水服用抗疟药，再加入金酒、糖与青柠改善苦味。20 世纪汤力水商业化后，它成为全球最普遍的高球之一。",
  "pimms-cup": "Pimm's No.1 由伦敦 oyster bar 老板 James Pimm 在 1820 年代创造，最初是助消化的草本利口酒。Pimm's Cup 后来成为英国夏日网球、赛艇与花园派对的固定饮品。",
  jasmine: "Jasmine 由旧金山调酒师 Paul Harrington 在 1990 年代创作，是金巴利、君度与柠檬的酸酒。它把金巴利的苦甜放进清新结构里，后来成为现代经典之一。",
  "gold-rush": "Gold Rush 是 2000 年代纽约 Milk & Honey 的现代经典，常被归功于 T.J. Siegal。波本、蜂蜜与柠檬的组合，是 Bee's Knees 的威士忌版本。",
  "whiskey-smash": "Whiskey Smash 属于 19 世纪的 Smash 家族，1862 年 Jerry Thomas 已有记录。它用薄荷、柠檬、糖与威士忌，介于 Mint Julep 与 Whiskey Sour 之间。",
  "whiskey-highball": "威士忌高球在日本战后被系统化，Suntory 等品牌用它推广佐餐威士忌。冰、苏打与威士忌的比例、注气方式与长吧勺，形成了一套日式高球礼仪。",
  "rob-roy": "Rob Roy 是曼哈顿的苏格兰版本，名字来自 1894 年首演的同名歌剧。它用苏格兰威士忌替代黑麦，甜味美思与苦精保持不变，19 世纪末在纽约与伦敦流行。",
  "hemingway-daiquiri": "Hemingway Daiquiri 源自哈瓦那 El Floridita 的 Constantino Ribalaigua，海明威常点“Papa Doble”版本：双倍朗姆、少糖、加西柚与黑樱桃。它比原版大吉利更酸、更苦，也更接近作家的口味。",
  caipirinha: "Caipirinha 是巴西的国民鸡尾酒，起源常被追溯到 19 世纪圣保罗的乡村，用甘蔗酒、青柠、糖与冰。它和莫吉托、大吉利共享酸酒结构，却以捣压青柠与砂糖的粗犷质地著称。",
  "el-presidente": "El Presidente 在 1920 年代的哈瓦那流行，名字可能与古巴总统 Mario García Menocal 或当时的上流社会有关。白朗姆、干味美思、橙味利口酒与少量石榴糖浆，是加勒比上流社会的口味。",
  "mary-pickford": "Mary Pickford 由哈瓦那的调酒师在 1920 年代创作，以好莱坞女星 Mary Pickford 命名。白朗姆、菠萝、黑樱桃与石榴糖浆，是古巴与好莱坞黄金时代交会的甜香短饮。",
  "rum-old-fashioned": "Rum Old Fashioned 是 21 世纪经典复兴的产物，把威士忌换成陈年朗姆，用糖浆与橙味苦精保留古典型结构。它没有单一发明者，而是现代酒吧对朗姆陈年风味的再发现。",
  "tia-mia": "Tia Mia 是 Mai Tai 的梅斯卡尔版本，常被归功于纽约 Leyenda 的 Ivy Mix。梅斯卡尔、牙买加朗姆、杏仁、橙味与青柠，把 Tiki 的热带结构拉向烟熏与龙舌兰。",
  "frozen-margarita": "Frozen Margarita 在 1970 年代随冰沙机与度假酒吧流行，Dallas 的 Mariano Martinez 在 1971 年改造软冰淇淋机，被认为是冷冻玛格丽特商业化的关键。",
  batanga: "Batanga 由墨西哥哈利斯科 La Capilla 的 Don Javier Delgado Corona 创作，用龙舌兰、可乐、青柠与盐边。它比自由古巴更干、更咸，是龙舌兰故乡的日常长饮。",
  "mexican-firing-squad": "Mexican Firing Squad 在 1930 年代的墨西哥城流行，名字据称来自一幅同名壁画或革命故事。龙舌兰、青柠、石榴与苦精，是红色酸酒在墨西哥的版本。",
  "division-bell": "Division Bell 由纽约 Death & Co 的 Phil Ward 在 2008 年前后创作，是 Last Word 的梅斯卡尔变体。梅斯卡尔、Aperol、黑樱桃与青柠，苦甜与烟熏并置。",
  siesta: "Siesta 由费城调酒师 Katie Loeb 在 2005 年前后创作，用龙舌兰、金巴利、西柚、青柠与糖浆。它把内格罗尼的苦味放进酸酒结构，2010 年代被广泛收录。",
  "between-the-sheets": "Between the Sheets 见于 1930 年代，是 Sidecar 与朗姆的混合版本。干邑、白朗姆、君度与柠檬的等量结构，名字带着禁酒令后巴黎与伦敦的暧昧气质。",
  "brandy-alexander": "Brandy Alexander 是 Alexander 的干邑版本，在 20 世纪初的纽约与伦敦流行。干邑、可可利口酒与奶油的三等分，后来成为甜点鸡尾酒的标准。",
  "french-connection": "French Connection 在 1970 年代流行，名字来自同名电影。干邑与杏仁利口酒的简单双料结构，让它成为餐后酒单上的常客。",
  stinger: "Stinger 在 19 世纪末已出现，是干邑与白薄荷利口酒的餐后短饮。它曾被用来掩盖劣质白兰地，后来成为高级餐厅的消化酒。",
  "japanese-cocktail": "Japanese Cocktail 见于 1862 年 Jerry Thomas 的《Bartender's Guide》，与日本没有直接关系。干邑、杏仁糖浆与苦精，是 19 世纪美国调酒术对“东方”的想象。",
  chilcano: "Chilcano 是秘鲁的皮斯科长饮，名字来自当地一种以皮斯科、姜汁汽水与青柠制作的清凉饮品。它比 Pisco Sour 更轻，常见于利马的海鲜餐馆。",
  "brandy-crusta": "Brandy Crusta 由 1850 年代新奥尔良的 Joseph Santini 创作，是 Sidecar 与糖边鸡尾酒的前身。宽糖边、柠檬皮“领子”与樱桃，是它最鲜明的视觉语言。",
  "rabo-de-galo": "Rabo de Galo 是圣保罗的经典，名字意为“公鸡尾巴”。卡莎萨、Cynar 与甜味美思的组合，常见于巴西的 boteco 小酒馆，2010 年代被 IBA 收进当代经典。",
  "batida-de-coco": "Batida 是巴西的搅拌型甘蔗酒饮，用卡莎萨、水果、炼乳或椰奶与冰打成。它没有单一配方，而是巴西海滩与家庭聚会的即兴传统。",
  somaek: "Somaek 是韩国“烧酒 + 啤酒”的合成词，20 世纪后期随烧酒普及成为聚餐文化。比例从 3:7 到 5:5 都有，关键是两者都冰、杯中有气泡。",
  saketini: "Saketini 是 1990 年代纽约与东京的现代创作，用清酒替代部分金酒或伏特加。它没有统一配方，但米香、黄瓜与低酒精度是常见的共同点。",
  "baijiu-sour": "Baijiu Sour 是 2010 年代中国与海外酒吧的现代创作，用清香型白酒替代威士忌或金酒。白酒的酯香极强，通常需要青柠、糖与蛋清把它收进酸酒结构。",
  "golden-cadillac": "Golden Cadillac 在 1950 年代的美国流行，名字来自凯迪拉克汽车与它的金色。Galliano、白可可与奶油，是战后甜点鸡尾酒的代表。",
  sbagliato: "Negroni Sbagliato 意为“搞错的内格罗尼”，1970 年代由米兰 Bar Basso 的 Mirko Stocchetto 创作。传说他误把起泡酒当成金酒，结果得到一杯更轻、更气泡的苦甜长饮。",
  "vermouth-tonic": "Vermouth Tonic 是 21 世纪低酒精潮流的产物，用味美思替代金酒，保留汤力水的奎宁苦。它没有单一发明者，而是欧洲餐前酒文化对“低度、清爽、复杂”的回应。",
  bellini: "Bellini 由威尼斯 Harry's Bar 的 Giuseppe Cipriani 在 1948 年前后创作，用白桃果泥与 Prosecco。名字与颜色来自文艺复兴画家 Giovanni Bellini 的画作。",
  mimosa: "Mimosa 常被追溯到 1925 年巴黎 Ritz 的调酒师 Frank Meier，用香槟与橙汁。它成为早午餐文化的固定符号，颜色像含羞草花。",
  "death-in-the-afternoon": "Death in the Afternoon 来自海明威 1932 年的同名斗牛书，书中建议把苦艾酒与香槟混合。它是最早由作家本人推广的鸡尾酒之一，茴香与气泡的冲击力很强。",
  "champagne-cocktail": "Champagne Cocktail 在 19 世纪已出现，Jerry Thomas 的记录用方糖、苦精与香槟。方糖浸透苦精后缓慢溶解，是这杯酒最优雅的仪式。",
  "virgin-mojito": "Virgin Mojito 是无酒精版本的莫吉托，在 21 世纪无酒精潮流中普及。没有朗姆后，青柠、薄荷、盐与气泡必须更精确，才能避免变成薄荷糖水。",
  "phony-negroni": "Phony Negroni 是 2020 年代无酒精鸡尾酒潮流的代表，用无酒精金酒、苦味酒与味美思复刻内格罗尼。它没有单一发明者，重点是用苦根、奎宁与单宁补回酒精的“重量”。",
  "cold-brew-tonic": "Cold Brew Tonic 在 2010 年代的精品咖啡与鸡尾酒交叉场景中流行。冷萃咖啡的烘焙苦、汤力水的奎宁与橙皮，构成一杯低酒精或无酒精的成人长饮。",
  "shirley-temple": "Shirley Temple 以 1930 年代童星 Shirley Temple 命名，常被说成在好莱坞 Chasen's 餐厅为她特制。石榴糖浆、姜汁汽水与樱桃，是儿童也能参与的“酒吧仪式”。",
  "arnold-palmer": "Arnold Palmer 以美国高尔夫球手 Arnold Palmer 命名，他常点冰茶加柠檬水。1960 年代这种喝法在美国南方流行，后来成为无酒精长饮的经典。",
  martinez: "Martinez 是马天尼的前身之一，见于 1880 年代的调酒书，名字可能来自加州 Martinez 或一位同名调酒师。金酒、甜味美思、黑樱桃与苦精，是“甜马天尼”的早期形态。",
  bijou: "Bijou 见于 1890 年代，名字来自法语“宝石”，指金酒、绿查特与甜味美思的三种颜色。它曾是世纪之交的高级短饮，后来在经典复兴中回归。",
  "twentieth-century": "20th Century 在 1930 年代流行，名字来自当时著名的 20th Century Limited 列车。金酒、Lillet、白可可与柠檬，是铁路黄金时代的优雅短饮。",
  "hanky-panky": "Hanky Panky 由伦敦 Savoy 酒吧的 Ada Coleman 在 1900 年代创作，常被献给喜剧演员 Charles Hawtrey。金酒、甜味美思与少量 Fernet，是“苦味曼哈顿”的早期经典。",
  "blood-and-sand": "Blood and Sand 在 1922 年同名电影上映后流行，配方见于 1930 年《Savoy Cocktail Book》。苏格兰威士忌、甜味美思、黑樱桃与橙汁，是四等分的红色酸酒。",
  "remember-the-maine": "Remember the Maine 在 1930 年代流行，名字来自 1898 年爆炸沉没的美国军舰缅因号。黑麦、甜味美思、黑樱桃与苦艾冲洗，是曼哈顿的草本加强版。",
  "el-diablo": "El Diablo 在 1940 年代的洛杉矶与 Trader Vic's 体系中出现，用龙舌兰、黑加仑、青柠与姜啤。它比 Tiki 更干，是龙舌兰进入美国酒吧的早期代表之一。"
};

/* 原有非 IBA 配方的来源标签。
   [标签, 参考说明, 参考链接]；标签表示资料类型，不表示该链接逐字核对了配方。 */
const NON_IBATAGS = {
  "white-negroni": ["现代经典", "2000 年代伦敦 / Difford's Guide 记录", "https://www.diffordsguide.com/"],
  "tom-collins": ["经典文献", "Jerry Thomas / 19 世纪 Collins 传统", "https://en.wikipedia.org/wiki/Tom_Collins"],
  gimlet: ["经典文献", "英国皇家海军青柠 cordial 传统", "https://en.wikipedia.org/wiki/Gimlet_(cocktail)"],
  "gin-tonic": ["地区传统", "英属印度 / 奎宁汤力水传统", "https://en.wikipedia.org/wiki/Gin_and_tonic"],
  "pimms-cup": ["经典文献", "Pimm's No.1 / 英国果杯传统", "https://en.wikipedia.org/wiki/Pimm%27s"],
  saturn: ["现代经典", "J. “Popo” Galsini / 1960s Tiki", "https://en.wikipedia.org/wiki/Saturn_(cocktail)"],
  jasmine: ["现代经典", "Paul Harrington / 1990s", "https://en.wikipedia.org/wiki/Jasmine_(cocktail)"],
  "gold-rush": ["现代经典", "Milk & Honey / 2000s", "https://www.diffordsguide.com/"],
  "whiskey-smash": ["经典文献", "19 世纪 Smash 家族 / Jerry Thomas", "https://en.wikipedia.org/wiki/Whiskey_smash"],
  "whiskey-highball": ["地区传统", "日本战后高球文化", "https://en.wikipedia.org/wiki/Highball"],
  "rob-roy": ["经典文献", "1894 年同名歌剧 / 曼哈顿变体", "https://en.wikipedia.org/wiki/Rob_Roy_(cocktail)"],
  godfather: ["流行文化", "1970s 双料餐后酒", "https://en.wikipedia.org/wiki/Godfather_(cocktail)"],
  toronto: ["经典文献", "1920s 经典鸡尾酒记载", "https://en.wikipedia.org/wiki/Toronto_(cocktail)"],
  "little-italy": ["现代经典", "Audrey Saunders / Pegu Club", "https://www.diffordsguide.com/"],
  greenpoint: ["现代经典", "Michael McIlroy / Milk & Honey", "https://www.diffordsguide.com/"],
  revolver: ["现代经典", "Jon Santer / Bourbon & Branch", "https://www.diffordsguide.com/"],
  painkiller: ["地区传统", "英属维尔京群岛 Soggy Dollar Bar", "https://en.wikipedia.org/wiki/Painkiller_(cocktail)"],
  "navy-grog": ["Tiki 传统", "Don the Beachcomber / 1940s", "https://en.wikipedia.org/wiki/Navy_grog"],
  hurricane: ["地区传统", "New Orleans / Pat O'Brien's", "https://en.wikipedia.org/wiki/Hurricane_(cocktail)"],
  "el-presidente": ["经典文献", "1920s 哈瓦那经典", "https://en.wikipedia.org/wiki/El_Presidente_(cocktail)"],
  "rum-old-fashioned": ["现代经典", "21 世纪朗姆古典改编", "https://www.diffordsguide.com/"],
  "tia-mia": ["现代经典", "Ivy Mix / Leyenda", "https://www.diffordsguide.com/"],
  "frozen-margarita": ["流行文化", "1970s 冰沙机与度假酒吧", "https://en.wikipedia.org/wiki/Margarita"],
  "oaxaca-old-fashioned": ["现代经典", "Phil Ward / Death & Co", "https://www.diffordsguide.com/"],
  "ranch-water": ["地区传统", "德州 / 龙舌兰苏打传统", "https://en.wikipedia.org/wiki/Ranch_water"],
  batanga: ["地区传统", "Jalisco / La Capilla", "https://en.wikipedia.org/wiki/Batanga"],
  "mexican-firing-squad": ["经典文献", "1930s 墨西哥城经典", "https://en.wikipedia.org/wiki/Mexican_Firing_Squad"],
  "division-bell": ["现代经典", "Phil Ward / Death & Co", "https://www.diffordsguide.com/"],
  siesta: ["现代经典", "Katie Loeb / 2005", "https://www.diffordsguide.com/"],
  "brandy-alexander": ["经典文献", "20 世纪初 Alexander 变体", "https://en.wikipedia.org/wiki/Alexander_(cocktail)"],
  "japanese-cocktail": ["经典文献", "Jerry Thomas, 1862", "https://en.wikipedia.org/wiki/Japanese_cocktail"],
  chilcano: ["地区传统", "秘鲁皮斯科长饮", "https://en.wikipedia.org/wiki/Chilcano"],
  "white-russian": ["流行文化", "1960s–70s / The Big Lebowski", "https://en.wikipedia.org/wiki/White_Russian"],
  kamikaze: ["流行文化", "1970s 等分短饮", "https://en.wikipedia.org/wiki/Kamikaze_(cocktail)"],
  "harvey-wallbanger": ["流行文化", "1970s 迪斯科酒吧", "https://en.wikipedia.org/wiki/Harvey_Wallbanger"],
  "chi-chi": ["流行文化", "1970s Piña Colada 伏特加版", "https://en.wikipedia.org/wiki/Chi_chi_(cocktail)"],
  "batida-de-coco": ["地区传统", "巴西 Batida 传统", "https://en.wikipedia.org/wiki/Batida"],
  somaek: ["地区传统", "韩国烧酒 + 啤酒文化", "https://en.wikipedia.org/wiki/Somaek"],
  saketini: ["现代经典", "1990s 纽约 / 东京清酒马天尼", "https://www.diffordsguide.com/"],
  "baijiu-sour": ["当代创作", "中国白酒酸酒 / Bar Atlas 资料整理", ""],
  "amaretto-sour": ["现代经典", "Jeffrey Morgenthaler 现代版", "https://en.wikipedia.org/wiki/Amaretto_sour"],
  "golden-cadillac": ["经典文献", "1950s 美国甜点鸡尾酒", "https://en.wikipedia.org/wiki/Golden_Cadillac"],
  sbagliato: ["现代经典", "Bar Basso, Milan / 1970s", "https://en.wikipedia.org/wiki/Negroni"],
  bamboo: ["经典文献", "19 世纪末横滨 / 雪莉短饮", "https://en.wikipedia.org/wiki/Bamboo_(cocktail)"],
  adonis: ["经典文献", "1880s 纽约 / 雪莉短饮", "https://en.wikipedia.org/wiki/Adonis_(cocktail)"],
  "vermouth-tonic": ["当代创作", "21 世纪低酒精开胃酒", "https://www.diffordsguide.com/"],
  "kir-royale": ["经典文献", "Kir 的起泡酒版本", "https://en.wikipedia.org/wiki/Kir_(cocktail)"],
  "death-in-the-afternoon": ["经典文献", "Hemingway, 1932", "https://en.wikipedia.org/wiki/Death_in_the_Afternoon"],
  "virgin-mojito": ["无酒精", "当代无酒精改编", ""],
  "phony-negroni": ["无酒精", "2020s 无酒精苦味酒潮流", ""],
  "cold-brew-tonic": ["当代创作", "2010s 咖啡 × 汤力", "https://www.diffordsguide.com/"],
  "shirley-temple": ["流行文化", "1930s 好莱坞 / Chasen's", "https://en.wikipedia.org/wiki/Shirley_Temple_(drink)"],
  "arnold-palmer": ["流行文化", "Arnold Palmer / 1960s", "https://en.wikipedia.org/wiki/Arnold_Palmer"],
  bijou: ["经典文献", "1890s 经典鸡尾酒记载", "https://en.wikipedia.org/wiki/Bijou_(cocktail)"],
  "twentieth-century": ["经典文献", "1930s / 20th Century Limited", "https://en.wikipedia.org/wiki/Twentieth_Century_(cocktail)"],
  "blood-and-sand": ["经典文献", "1922 年同名电影 / Savoy", "https://en.wikipedia.org/wiki/Blood_and_Sand_(cocktail)"],
  "el-diablo": ["经典文献", "1940s 洛杉矶 / Trader Vic's", "https://en.wikipedia.org/wiki/El_Diablo_(cocktail)"]
};

/* 为经典配方中最重要的变体补充可直接执行的完整规格。
   键为「母配方 id::变体英文名」，与正文变体说明合并显示。 */
const VARIANT_SPECS = {
  "daiquiri::Hemingway Daiquiri": {
    ing: [["白朗姆", "60 ml"], ["青柠汁", "15 ml"], ["西柚汁", "20 ml"], ["黑樱桃利口酒", "10 ml"]],
    method: "摇和", glass: "碟形杯", note: "不加糖，靠黑樱桃与西柚平衡；西柚必须鲜榨。"
  },
  "daiquiri::Floridita Daiquiri": {
    ing: [["白朗姆", "60 ml"], ["青柠汁", "25 ml"], ["单糖浆", "10 ml"], ["黑樱桃利口酒", "5 ml"]],
    method: "摇和", glass: "碟形杯", note: "比标准大吉利略甜，黑樱桃只做尾韵。"
  },
  "daiquiri::Banana Daiquiri": {
    ing: [["白朗姆", "60 ml"], ["青柠汁", "20 ml"], ["单糖浆", "15 ml"], ["香蕉利口酒", "30 ml"]],
    method: "摇和", glass: "碟形杯", note: "用熟香蕉利口酒，青柠要够酸；也可加半根香蕉搅打。"
  },
  "daiquiri::Frozen Daiquiri": {
    ing: [["白朗姆", "60 ml"], ["青柠汁", "25 ml"], ["单糖浆", "20 ml"], ["碎冰", "1 杯"]],
    method: "搅拌机", glass: "高脚杯", note: "冰沙版糖浆略增，搅打至雪泥状。"
  },

  "margarita::Tommy's Margarita": {
    ing: [["龙舌兰 Blanco", "60 ml"], ["青柠汁", "30 ml"], ["龙舌兰糖浆", "15 ml"], ["盐", "1 小撮"]],
    method: "摇和", glass: "古典杯", note: "不加橙味利口酒，龙舌兰与青柠直接对话。"
  },
  "margarita::Mezcal Margarita": {
    ing: [["梅斯卡尔", "50 ml"], ["青柠汁", "25 ml"], ["君度", "20 ml"], ["盐", "1 小撮"]],
    method: "摇和", glass: "碟形杯", note: "烟熏会放大甜味，青柠可加到 30 ml。"
  },
  "margarita::Spicy Margarita": {
    ing: [["龙舌兰 Blanco", "50 ml"], ["青柠汁", "25 ml"], ["君度", "20 ml"], ["墨西哥辣椒", "2–3 片"]],
    method: "摇和", glass: "古典杯", note: "辣椒与酒液一起短摇，双重过滤去籽。"
  },
  "margarita::Cadillac Margarita": {
    ing: [["龙舌兰 Blanco", "50 ml"], ["Grand Marnier", "20 ml"], ["青柠汁", "15 ml"], ["橙味苦精", "1 dash"]],
    method: "摇和", glass: "碟形杯", note: "Grand Marnier 更甜，青柠减到 15 ml。"
  },
  "margarita::Frozen Margarita": {
    ing: [["龙舌兰 Blanco", "50 ml"], ["青柠汁", "25 ml"], ["君度", "20 ml"], ["单糖浆", "5 ml"], ["碎冰", "1 杯"]],
    method: "搅拌机", glass: "高球杯", note: "盐边保留，冰沙版糖浆略增。"
  },

  "old-fashioned::Oaxaca Old Fashioned": {
    ing: [["龙舌兰 Reposado", "45 ml"], ["梅斯卡尔", "15 ml"], ["龙舌兰糖浆", "7.5 ml"], ["莫尔苦精", "2 dash"]],
    method: "搅拌", glass: "古典杯", note: "烧橙皮油；梅斯卡尔 15 ml 足够提供烟熏。"
  },
  "old-fashioned::Rum Old Fashioned": {
    ing: [["陈年朗姆", "60 ml"], ["德梅拉拉糖浆", "5 ml"], ["橙味苦精", "2 dash"], ["橙皮", "1 片"]],
    method: "搅拌", glass: "古典杯", note: "陈年朗姆自带甜感，糖浆只需 5 ml。"
  },
  "old-fashioned::Toronto": {
    ing: [["黑麦威士忌", "60 ml"], ["Fernet-Branca", "7.5 ml"], ["单糖浆", "7.5 ml"], ["安高天娜", "1 dash"]],
    method: "搅拌", glass: "古典杯", note: "Fernet 不要超过 10 ml；橙皮油收尾。"
  },
  "old-fashioned::Wisconsin Old Fashioned": {
    ing: [["白兰地", "60 ml"], ["单糖浆", "7.5 ml"], ["安高天娜", "2 dash"], ["樱桃与橙片", "各 1"], ["苏打水", "30 ml"]],
    method: "捣压", glass: "古典杯", note: "樱桃与橙片先轻压，加冰、白兰地与苦精，最后补苏打。"
  },

  "dry-martini::Wet Martini": {
    ing: [["金酒", "60 ml"], ["干味美思", "25 ml"]],
    method: "搅拌", glass: "碟形杯", note: "味美思回温后香气更明显，搅拌 20–25 秒。"
  },
  "dry-martini::Dirty Martini": {
    ing: [["金酒", "60 ml"], ["干味美思", "10 ml"], ["橄榄盐水", "10 ml"], ["橄榄", "2 颗"]],
    method: "搅拌", glass: "碟形杯", note: "盐水先少后多，避免盖过金酒。"
  },
  "dry-martini::Gibson": {
    ing: [["金酒", "60 ml"], ["干味美思", "10 ml"], ["珍珠洋葱", "1 颗"]],
    method: "搅拌", glass: "碟形杯", note: "洋葱的辛甜比橄榄更干，适合清亮型金酒。"
  },
  "dry-martini::Fifty-Fifty": {
    ing: [["金酒", "45 ml"], ["干味美思", "45 ml"], ["橙味苦精", "1 dash"]],
    method: "搅拌", glass: "碟形杯", note: "低酒精版本，味美思必须新鲜冷藏。"
  },

  "negroni::Boulevardier": {
    ing: [["波本或黑麦", "45 ml"], ["金巴利", "30 ml"], ["甜味美思", "30 ml"], ["橙皮", "1 片"]],
    method: "搅拌", glass: "古典杯", note: "比内格罗尼更温暖；波本甜、黑麦辛，按基酒调整。"
  },
  "negroni::White Negroni": {
    ing: [["金酒", "40 ml"], ["Lillet Blanc", "30 ml"], ["Suze", "20 ml"], ["葡萄柚皮", "1 片"]],
    method: "搅拌", glass: "古典杯", note: "Suze 很干，怕苦可减到 15 ml。"
  },
  "negroni::Negroni Sbagliato": {
    ing: [["金巴利", "30 ml"], ["甜味美思", "30 ml"], ["Prosecco", "60 ml"], ["橙片", "1 片"]],
    method: "直调", glass: "古典杯", note: "先搅拌金巴利与味美思，再补起泡酒。"
  },
  "negroni::Old Pal": {
    ing: [["黑麦威士忌", "30 ml"], ["干味美思", "30 ml"], ["金巴利", "30 ml"], ["橙皮", "1 片"]],
    method: "搅拌", glass: "碟形杯", note: "比 Boulevardier 更干，干味美思要新鲜。"
  },

  "whiskey-sour::Boston Sour": {
    ing: [["波本", "60 ml"], ["柠檬汁", "30 ml"], ["单糖浆", "20 ml"], ["蛋清", "20 ml"]],
    method: "摇和", glass: "古典杯", note: "先干摇 15 秒，再加冰摇；泡沫上点苦精。"
  },
  "whiskey-sour::New York Sour": {
    ing: [["波本", "60 ml"], ["柠檬汁", "30 ml"], ["单糖浆", "20 ml"], ["蛋清", "20 ml"], ["红葡萄酒", "15 ml"]],
    method: "摇和", glass: "古典杯", note: "红酒沿吧勺背面漂浮，不要搅拌。"
  },
  "whiskey-sour::Gold Rush": {
    ing: [["波本", "60 ml"], ["柠檬汁", "22.5 ml"], ["蜂蜜糖浆", "20 ml"]],
    method: "摇和", glass: "古典杯", note: "蜂蜜按 3:1 稀释；加冰古典杯出品。"
  },
  "whiskey-sour::Penicillin": {
    ing: [["苏格兰调和", "60 ml"], ["柠檬汁", "22.5 ml"], ["蜂蜜姜糖浆", "20 ml"], ["泥煤威士忌", "7.5 ml"]],
    method: "摇和", glass: "古典杯", note: "前三者摇和滤冰，最后漂浮泥煤威士忌。"
  },

  "manhattan::Perfect Manhattan": {
    ing: [["黑麦", "60 ml"], ["甜味美思", "15 ml"], ["干味美思", "15 ml"], ["安高天娜", "2 dash"]],
    method: "搅拌", glass: "碟形杯", note: "甜与干各半，柠檬皮或樱桃都可。"
  },
  "manhattan::Dry Manhattan": {
    ing: [["黑麦", "60 ml"], ["干味美思", "30 ml"], ["橙味苦精", "1 dash"]],
    method: "搅拌", glass: "碟形杯", note: "柠檬皮装饰，酒体更锐利。"
  },
  "manhattan::Black Manhattan": {
    ing: [["黑麦", "60 ml"], ["Averna", "30 ml"], ["橙味苦精", "2 dash"]],
    method: "搅拌", glass: "碟形杯", note: "Averna 替代甜味美思，苦甜更深、焦糖更多。"
  },
  "manhattan::Brooklyn": {
    ing: [["黑麦", "60 ml"], ["干味美思", "20 ml"], ["黑樱桃利口酒", "10 ml"], ["Amer Picon", "5 ml"]],
    method: "搅拌", glass: "碟形杯", note: "没有 Amer Picon 时用 Cynar 5 ml 替代。"
  },
  "manhattan::Little Italy": {
    ing: [["黑麦", "45 ml"], ["Cynar", "20 ml"], ["甜味美思", "20 ml"], ["橙皮", "1 片"]],
    method: "搅拌", glass: "碟形杯", note: "Cynar 的朝鲜蓟苦与焦糖，橙皮必须现喷。"
  },
  "manhattan::Greenpoint": {
    ing: [["黑麦", "60 ml"], ["黄查特", "15 ml"], ["甜味美思", "15 ml"], ["安高天娜", "1 dash"]],
    method: "搅拌", glass: "碟形杯", note: "黄查特的蜂蜜花香很浓，15 ml 足够。"
  },

  "gin-tonic::Spanish G&T": {
    ing: [["金酒", "50 ml"], ["汤力水", "120 ml"], ["迷迭香", "1 枝"], ["葡萄柚片", "1 片"]],
    method: "直调", glass: "Copa 杯", note: "大杯、满冰、缓慢注气；草本与柑橘按金酒风格搭配。"
  },
  "gin-tonic::Gin Sonic": {
    ing: [["金酒", "45 ml"], ["汤力水", "60 ml"], ["苏打水", "60 ml"], ["青柠角", "1 块"]],
    method: "直调", glass: "高球杯", note: "汤力与苏打 1:1，降低甜度、突出气泡。"
  },
  "gin-tonic::Pink Gin & Tonic": {
    ing: [["金酒", "45 ml"], ["汤力水", "120 ml"], ["橙味苦精", "2 dash"], ["橙皮", "1 片"]],
    method: "直调", glass: "高球杯", note: "苦精先入杯，再加冰与汤力，颜色更均匀。"
  },

  "moscow-mule::Mexican Mule": {
    ing: [["龙舌兰 Blanco", "45 ml"], ["青柠汁", "15 ml"], ["姜啤", "100 ml"], ["安高天娜", "1 dash"]],
    method: "直调", glass: "铜杯 / 高球杯", note: "龙舌兰的植物感与姜的辛辣很合。"
  },
  "moscow-mule::Gin-Gin Mule": {
    ing: [["金酒", "45 ml"], ["青柠汁", "15 ml"], ["姜糖浆", "15 ml"], ["姜啤", "100 ml"], ["薄荷", "6 片"]],
    method: "直调", glass: "高球杯", note: "薄荷轻压，姜糖浆补足辛辣。"
  },
  "moscow-mule::Kentucky Mule": {
    ing: [["波本", "45 ml"], ["青柠汁", "15 ml"], ["姜啤", "100 ml"], ["薄荷", "1 枝"]],
    method: "直调", glass: "铜杯 / 高球杯", note: "波本的香草与姜啤很搭，青柠提亮。"
  },

  "mai-tai::Royal Hawaiian Mai Tai": {
    ing: [["陈年朗姆", "30 ml"], ["农业朗姆", "30 ml"], ["青柠汁", "20 ml"], ["橙味利口酒", "15 ml"], ["杏仁糖浆", "15 ml"], ["菠萝汁", "30 ml"], ["石榴糖浆", "10 ml"]],
    method: "摇和", glass: "Tiki 杯", note: "度假版更甜，菠萝汁与石榴是后来加入的。"
  },
  "mai-tai::Mai Tai Swizzle": {
    ing: [["陈年朗姆", "30 ml"], ["农业朗姆", "30 ml"], ["青柠汁", "20 ml"], ["橙味利口酒", "15 ml"], ["杏仁糖浆", "15 ml"], ["151 朗姆", "7.5 ml 漂浮"]],
    method: "直调", glass: "Tiki 杯", note: "碎冰中旋转搅拌，顶部漂浮 151 朗姆。"
  },
  "mai-tai::Jungle Bird": {
    ing: [["黑朗姆", "45 ml"], ["金巴利", "20 ml"], ["菠萝汁", "45 ml"], ["青柠汁", "15 ml"], ["单糖浆", "15 ml"]],
    method: "摇和", glass: "古典杯", note: "鲜榨菠萝汁才有泡沫与酸度。"
  },

  "espresso-martini::Espresso Martini No. 2": {
    ing: [["伏特加", "30 ml"], ["浓缩咖啡", "30 ml"], ["Mr Black", "20 ml"], ["单糖浆", "10 ml"]],
    method: "摇和", glass: "碟形杯", note: "Mr Black 更干，糖浆按咖啡苦度调整。"
  },
  "espresso-martini::Cold Brew Martini": {
    ing: [["冷萃咖啡", "45 ml"], ["伏特加", "30 ml"], ["咖啡利口酒", "15 ml"], ["单糖浆", "5 ml"]],
    method: "摇和", glass: "碟形杯", note: "冷萃泡沫较薄，但口感更圆。"
  },
  "espresso-martini::Carajillo": {
    ing: [["Licor 43", "45 ml"], ["浓缩咖啡", "30 ml"], ["冰", "满杯"]],
    method: "摇和", glass: "古典杯", note: "摇和后倒入加冰古典杯，香草与咖啡。"
  },

  "aperol-spritz::Aperol Spritz 2.0": {
    ing: [["Prosecco", "90 ml"], ["Aperol", "45 ml"], ["葡萄柚苏打", "15 ml"], ["橙片", "1 片"]],
    method: "直调", glass: "大葡萄酒杯", note: "减少 Aperol、补葡萄柚苏打，更干。"
  },
  "aperol-spritz::Campari Spritz": {
    ing: [["Prosecco", "90 ml"], ["金巴利", "60 ml"], ["苏打水", "30 ml"], ["橙片", "1 片"]],
    method: "直调", glass: "大葡萄酒杯", note: "金巴利比 Aperol 更苦，适合餐前。"
  },

  "french-75::French 75 Cognac": {
    ing: [["干邑", "30 ml"], ["柠檬汁", "15 ml"], ["单糖浆", "15 ml"], ["香槟", "90 ml"]],
    method: "摇和", glass: "香槟杯", note: "干邑的果香比金酒更圆，起泡酒要冰。"
  },
  "french-75::Rosé 75": {
    ing: [["金酒", "30 ml"], ["柠檬汁", "15 ml"], ["单糖浆", "10 ml"], ["桃红起泡酒", "90 ml"]],
    method: "摇和", glass: "香槟杯", note: "桃红起泡酒的果味让糖浆可减 5 ml。"
  },
  "french-75::French 125": {
    ing: [["波本", "30 ml"], ["青柠汁", "15 ml"], ["单糖浆", "15 ml"], ["香槟", "90 ml"]],
    method: "摇和", glass: "香槟杯", note: "波本与青柠的组合更甜润。"
  },

  "last-word::Final Ward": {
    ing: [["黑麦", "22.5 ml"], ["绿查特", "22.5 ml"], ["黑樱桃利口酒", "22.5 ml"], ["柠檬汁", "22.5 ml"]],
    method: "摇和", glass: "碟形杯", note: "把金酒换成黑麦、青柠换成柠檬，更温暖。"
  },
  "last-word::Paper Plane": {
    ing: [["波本", "22.5 ml"], ["Aperol", "22.5 ml"], ["Amaro Nonino", "22.5 ml"], ["柠檬汁", "22.5 ml"]],
    method: "摇和", glass: "碟形杯", note: "四等分，橙皮油收尾。"
  },
  "last-word::Naked and Famous": {
    ing: [["梅斯卡尔", "22.5 ml"], ["Aperol", "22.5 ml"], ["黄查特", "22.5 ml"], ["青柠汁", "22.5 ml"]],
    method: "摇和", glass: "碟形杯", note: "烟熏与苦甜并置，青柠必须够酸。"
  }
};

const BIBLIOGRAPHY = [
  {
    title: "IBA — All Cocktails",
    note: "国际调酒师协会官方酒单，按 The Unforgettables / Contemporary Classics / New Era 分类；本页 IBA 索引的主要依据。",
    url: "https://iba-world.com/cocktails/all-cocktails/"
  },
  {
    title: "IBA — The Unforgettables",
    note: "34 杯“不可遗忘”经典，含 Daiquiri、Negroni、Manhattan 等官方配方与装饰。",
    url: "https://iba-world.com/cocktails/the-unforgettables/"
  },
  {
    title: "IBA — The Contemporary Classics",
    note: "34 杯“当代经典”，含 Margarita、Mai-Tai、Zombie、Vesper 等。",
    url: "https://iba-world.com/cocktails/the-contemporary/"
  },
  {
    title: "IBA — The New Era",
    note: "34 杯“新纪元”，含 Bramble、Penicillin、Paper Plane、Porn Star Martini 等现代经典。",
    url: "https://iba-world.com/cocktails/the-new-era/"
  },
  {
    title: "Wikipedia — List of IBA official cocktails",
    note: "用于交叉核对 IBA 分类、名称与部分历史背景；不作为配方唯一依据。",
    url: "https://en.wikipedia.org/wiki/List_of_IBA_official_cocktails"
  },
  {
    title: "Difford's Guide",
    note: "鸡尾酒与烈酒数据库，用于品牌、历史与变体的交叉参考。",
    url: "https://www.diffordsguide.com/"
  },
  {
    title: "Punch",
    note: "鸡尾酒历史与文化报道，用于现代经典与酒吧故事的背景核对。",
    url: "https://punchdrink.com/"
  },
  {
    title: "The Savoy Cocktail Book",
    note: "Harry Craddock，1930 年伦敦 Savoy Hotel 的经典酒书；多杯禁酒令后经典的早期记录来源。",
    url: "https://en.wikipedia.org/wiki/The_Savoy_Cocktail_Book"
  },
  {
    title: "The 1930 Savoy Cocktail Book Database",
    note: "逐条转录 1930 年 Savoy 原书的配方数据库；用于 Pegu Club、Corpse Reviver #1、Satan's Whiskers、Golden Dawn、Alaska 等配方核对。",
    url: "https://savoycocktaildatabase.com/"
  },
  {
    title: "VinePair — Cocktail Recipes",
    note: "用于 Test Pilot、Jet Pilot、Rosita 等现代/经典配方的交叉核对与历史背景。",
    url: "https://vinepair.com/cocktail-recipe/"
  },
  {
    title: "Jerry Thomas — Bartender's Guide",
    note: "1862 年出版的早期调酒手册，酸酒、Fizz、Punch 等结构的源头之一。",
    url: "https://en.wikipedia.org/wiki/Jerry_Thomas"
  },
  {
    title: "Cocktail (1806 definition)",
    note: "1806 年《The Balance and Columbian Repository》对“cocktail”的定义：烈酒、糖、水与苦精。",
    url: "https://en.wikipedia.org/wiki/Cocktail"
  },
  {
    title: "Beachbum Berry — Tiki 研究",
    note: "Jeff “Beachbum” Berry 对 Don the Beachcomber、Trader Vic 与 Tiki 配方的档案研究；用于 Tiki 历史与配方的交叉核对。",
    url: "https://www.beachbumberry.com/"
  },
  {
    title: "David Wondrich — Imbibe!",
    note: "19 世纪美国鸡尾酒史与 Jerry Thomas 研究；用于经典配方与历史叙事的背景核对。",
    url: "https://en.wikipedia.org/wiki/David_Wondrich"
  }
];

const TIMELINE = [
  { year: "1806", title: "“Cocktail”被定义", text: "纽约州的一份报纸把 cocktail 定义为烈酒、糖、水与苦精的混合物，这是现代鸡尾酒最早的书面定义之一。" },
  { year: "1862", title: "Jerry Thomas 出版调酒指南", text: "《Bartender's Guide》系统记录酸酒、Fizz、Punch、Julep 等结构，奠定美国调酒术的语法。" },
  { year: "1880s", title: "冰与酒吧的黄金年代", text: "铁路与制冰业让大冰块进入城市酒吧，搅拌、摇和与长饮的稀释控制成为一门专业。" },
  { year: "1919", title: "美国禁酒令", text: "禁酒令催生地下酒吧与甜味掩盖，也让美国调酒师流向欧洲；许多经典配方在伦敦与巴黎被保存。" },
  { year: "1930", title: "《Savoy Cocktail Book》", text: "Harry Craddock 在伦敦 Savoy 酒吧出版酒书，记录大量禁酒令前后的经典与变体。" },
  { year: "1934", title: "Tiki 与 Zombie", text: "Don the Beachcomber 在好莱坞开创 Tiki，Zombie、Navy Grog 等复杂多朗姆配方改变了长饮的想象。" },
  { year: "1944", title: "Mai Tai", text: "Trader Vic 在加州奥克兰创作 Mai Tai，之后成为全球 Tiki 文化的核心符号。" },
  { year: "1951", title: "IBA 成立", text: "国际调酒师协会成立，后来建立官方酒单与分类，成为全球调酒教育的共同参照。" },
  { year: "1970s", title: "迪斯科与甜味长饮", text: "Harvey Wallbanger、Piña Colada、Tequila Sunrise 等进入流行文化，酒吧成为社交与音乐场景的一部分。" },
  { year: "1980s", title: "现代经典的第一波", text: "Dick Bradsell 的 Bramble、Espresso Martini 等作品，开始把新鲜果汁与经典结构带回吧台。" },
  { year: "2000s", title: "手工鸡尾酒复兴", text: "Milk & Honey、PDT、Death & Co 等酒吧推动精确计量、冰块与预调；Penicillin、Paper Plane 等新经典诞生。" },
  { year: "2020s", title: "IBA 酒单扩容", text: "IBA 的 New Era 类别持续吸收 1980 年代之后的现代经典，Tiki、低酒精与无酒精也进入主流讨论。" }
];
