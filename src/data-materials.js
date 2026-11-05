/* ============================================================
   材料小词典：基酒、利口酒、味美思、苦精、果汁、糖浆、乳制品
   与气泡饮料的简短介绍。品牌只是类别示例，不是推荐。
   ============================================================ */

const MATERIAL_NOTES = [
  { cat: "基酒", name: "金酒", short: "以杜松子为主轴的植物蒸馏酒；London Dry 干净锐利，Old Tom 微甜，Plymouth 更柔。", use: "马天尼、金汤力、内格罗尼", brand: "Beefeater / Tanqueray / Sipsmith" },
  { cat: "基酒", name: "威士忌", short: "谷物蒸馏后橡木陈年；波本偏玉米甜，黑麦偏辛香，苏格兰可有泥煤烟熏。", use: "古典、曼哈顿、威士忌酸", brand: "Buffalo Trace / Rittenhouse / Monkey Shoulder" },
  { cat: "基酒", name: "朗姆", short: "甘蔗糖蜜或甘蔗汁蒸馏；白朗姆轻，陈年朗姆有焦糖与果干，Overproof 酒精度高。", use: "大吉利、莫吉托、Tiki", brand: "Probitas / Appleton / Smith & Cross" },
  { cat: "基酒", name: "龙舌兰", short: "蓝色龙舌兰蒸馏；Blanco 植物感强，Reposado 经橡木陈年，100% agave 是品质底线。", use: "玛格丽特、帕洛玛、墨西哥骡子", brand: "Tapatío / Siete Leguas / Fortaleza" },
  { cat: "基酒", name: "梅斯卡尔", short: "龙舌兰的近亲，常带烟熏、泥土与矿物感；Espadín 是最常见的品种。", use: "梅斯卡尔玛格丽特、Naked and Famous", brand: "Del Maguey Vida / Montelobos" },
  { cat: "基酒", name: "白兰地 / 干邑", short: "葡萄酒蒸馏后陈年；干邑产自法国干邑区，带葡萄、花香与橡木。", use: "边车、Vieux Carré、亚历山大", brand: "Pierre Ferrand 1840 / Hine / Rémy VSOP" },
  { cat: "基酒", name: "皮斯科", short: "葡萄汁蒸馏、通常不陈年；花香与柑橘感强，是秘鲁与智利的国酒。", use: "皮斯科酸、Chilcano", brand: "Barsol / Macchu Pisco / Capel" },
  { cat: "基酒", name: "伏特加", short: "中性蒸馏酒，追求干净与质地；风味差异比想象中细。", use: "莫斯科骡子、Cosmopolitan、Espresso Martini", brand: "Absolut / Ketel One / Belvedere" },
  { cat: "基酒", name: "卡莎萨", short: "巴西甘蔗汁蒸馏酒；青草、甘蔗与轻微 funk，和朗姆不是同一种酒。", use: "Caipirinha、Rabo de Galo", brand: "Leblon / Novo Fogo / Avuá" },
  { cat: "基酒", name: "清酒 / 烧酒", short: "清酒以米与麹酿造，烧酒多为蒸馏；前者看精米步合，后者清爽低酒精度。", use: "Saketini、Somaek、清酒高球", brand: "Dassai / Hakkaisan / Chamisul" },
  { cat: "基酒", name: "白酒", short: "中国谷物蒸馏酒，酯香极强；清香、浓香、酱香风格差异巨大。", use: "Baijiu Sour、白酒高球", brand: "汾酒 / 泸州老窖 / 五粮液" },

  { cat: "加强酒", name: "干味美思", short: "加香加强葡萄酒，干型；咸香、草本与轻微苦味，开瓶后需冷藏。", use: "Dry Martini、Bamboo、Adonis", brand: "Dolin Dry / Noilly Prat" },
  { cat: "加强酒", name: "甜味美思", short: "加香加强葡萄酒，甜型；焦糖、香料与苦甜，是曼哈顿与内格罗尼的骨架。", use: "Manhattan、Negroni、Boulevardier", brand: "Carpano Antica / Cocchi / Dolin Rouge" },
  { cat: "加强酒", name: "Blanc / Lillet", short: "介于干甜之间的加香酒；蜜饯、花香与柔和苦味。", use: "White Negroni、Vesper、20th Century", brand: "Dolin Blanc / Lillet Blanc / Cocchi Americano" },
  { cat: "加强酒", name: "雪莉", short: "西班牙加强葡萄酒；Fino 干咸，Amontillado 坚果，Oloroso 更饱满。", use: "Sherry Cobbler、Bamboo、Adonis", brand: "Tío Pepe / La Ina / Lustau" },
  { cat: "加强酒", name: "波特", short: "葡萄牙加强葡萄酒；茶色波特有坚果氧化香，红宝石波特更果味。", use: "Porto Flip、Chicago Sour", brand: "Taylor's / Graham's / Cockburn's" },

  { cat: "利口酒", name: "橙味利口酒", short: "橙皮加香的甜酒；Cointreau 干净，Triple Sec 更甜，Dry Curaçao 更干。", use: "Margarita、Sidecar、White Lady", brand: "Cointreau / Combier / Pierre Ferrand" },
  { cat: "利口酒", name: "黑樱桃利口酒", short: "樱桃核与杏仁香，甜度高；几毫升就能改变一杯酒的尾韵。", use: "Last Word、Aviation、Hemingway", brand: "Luxardo Maraschino" },
  { cat: "利口酒", name: "查特", short: "法国修道院草本利口酒；绿查特更烈更草本，黄查特更甜更柔和。", use: "Last Word、Bijou、Tipperary", brand: "Green / Yellow Chartreuse" },
  { cat: "利口酒", name: "金巴利 / Aperol", short: "意大利苦味酒；Campari 更苦更红，Aperol 更甜更橙。", use: "Negroni、Spritz、Jungle Bird", brand: "Campari / Aperol / Select" },
  { cat: "利口酒", name: "阿玛罗", short: "意大利苦味利口酒的总称；苦甜、草本，风格从轻柔到极苦。", use: "Paper Plane、Little Italy、Toronto", brand: "Nonino / Averna / Cynar / Fernet-Branca" },
  { cat: "利口酒", name: "咖啡利口酒", short: "咖啡豆浸泡的甜酒；Mr Black 更干，Kahlúa 更甜。", use: "Espresso Martini、White Russian", brand: "Mr Black / Kahlúa" },
  { cat: "利口酒", name: "可可利口酒", short: "可可风味甜酒；白可可更柔，黑可可更苦。", use: "Alexander、Grasshopper、Pink Squirrel", brand: "Tempus Fugit / Giffard" },
  { cat: "利口酒", name: "接骨木花利口酒", short: "花香型甜酒，荔枝与白花香气；脆弱，不宜与重泥煤同用。", use: "Hugo、Southside", brand: "St-Germain" },
  { cat: "利口酒", name: "苦艾酒", short: "茴香与草本风味，酒精度高；通常只用于冲洗或几滴。", use: "Sazerac、Corpse Reviver #2", brand: "Pernod / Absinthe" },
  { cat: "利口酒", name: "Galliano", short: "香草、茴香与柑橘的黄色利口酒；甜度高，适合甜点杯。", use: "Golden Dream、Harvey Wallbanger", brand: "Galliano" },

  { cat: "苦精", name: "安高天娜", short: "丁香、肉桂与龙胆的芳香苦精；1–3 dash 就能定调整杯酒。", use: "Old Fashioned、Manhattan", brand: "Angostura" },
  { cat: "苦精", name: "橙味苦精", short: "橙皮与香料，提亮柑橘香而不明显增苦。", use: "Martini、Coronation、Pegu Club", brand: "Regan's / Fee Brothers" },
  { cat: "苦精", name: "Peychaud's", short: "樱桃、茴香与红色调，新奥尔良风格的代表。", use: "Sazerac、Vieux Carré", brand: "Peychaud's" },

  { cat: "果汁", name: "青柠汁", short: "比柠檬更锐利、更香；鲜榨当天用完，Key Lime 更酸更香。", use: "Daiquiri、Margarita、Mojito", brand: "鲜榨" },
  { cat: "果汁", name: "柠檬汁", short: "圆润的酸，适合酸酒与柯林斯；Meyer 柠檬更甜。", use: "Whiskey Sour、Sidecar、Tom Collins", brand: "鲜榨" },
  { cat: "果汁", name: "西柚汁", short: "酸中带苦，适合与龙舌兰、金酒和苦味酒搭配。", use: "Paloma、Brown Derby、Hemingway", brand: "鲜榨" },
  { cat: "果汁", name: "菠萝汁", short: "热带酸甜与泡沫；新鲜菠萝汁比罐头更亮，但会因酶产生泡沫。", use: "Tiki、Jungle Bird、Blue Hawaii", brand: "鲜榨" },
  { cat: "果汁", name: "番茄汁", short: "咸鲜与酸度，Bloody Mary 的主体；需要盐、辣与酸平衡。", use: "Bloody Mary、Michelada", brand: "番茄汁" },

  { cat: "糖浆", name: "单糖浆", short: "糖 1:水 1，最中性的甜味；冷藏保存 2–4 周。", use: "通用酸甜平衡", brand: "自制" },
  { cat: "糖浆", name: "蜂蜜糖浆", short: "蜂蜜 3:水 1；花香与黏度，比单糖浆更圆。", use: "Bee's Knees、Gold Rush、Air Mail", brand: "自制" },
  { cat: "糖浆", name: "杏仁糖浆", short: "杏仁与橙花香气，Tiki 与古典的常见甜味；品牌甜度差异大。", use: "Mai Tai、Japanese Cocktail", brand: "Small Hand Foods / Liber & Co." },
  { cat: "糖浆", name: "法勒南", short: "丁香、杏仁、青柠与姜的香料糖浆，Tiki 的骨架之一。", use: "Saturn、Zombie、Corn n' Oil", brand: "John D. Taylor's" },
  { cat: "糖浆", name: "石榴糖浆", short: "石榴的红色与果甜；现代产品多为混合糖浆，少量使用。", use: "Jack Rose、Pink Lady、Tequila Sunrise", brand: "自制 / 优质瓶装" },

  { cat: "乳制品 / 蛋", name: "蛋清", short: "提供泡沫与丝绒质地；需干摇，20 ml 足够。", use: "Whiskey Sour、Clover Club、Pisco Sour", brand: "巴氏蛋清" },
  { cat: "乳制品 / 蛋", name: "淡奶油", short: "增加乳脂与圆润；甜点杯与 Flip 常用，温度必须低。", use: "Alexander、Pink Squirrel、Golden Dream", brand: "淡奶油" },
  { cat: "乳制品 / 蛋", name: "椰奶油", short: "椰子与糖的浓稠乳制品；Tiki 与热带冰沙的质地来源。", use: "Piña Colada、Blue Hawaii", brand: "Coco López / 椰奶油" },

  { cat: "气泡 / 混合", name: "苏打水", short: "无味碳酸水，负责拉长与起泡；必须冰镇，最后加。", use: "Collins、Fizz、Highball", brand: "苏打水" },
  { cat: "气泡 / 混合", name: "汤力水", short: "含奎宁的碳酸饮料，苦味与气泡；与金酒、Aperol 很合。", use: "Gin & Tonic、Aperol Tonic", brand: "Fever-Tree / Schweppes" },
  { cat: "气泡 / 混合", name: "姜啤", short: "姜味碳酸饮料，辛辣与甜；Mule 与 Tiki 常用。", use: "Moscow Mule、Dark 'N' Stormy", brand: "Fever-Tree / Gosling's" },
  { cat: "气泡 / 混合", name: "起泡酒", short: "气泡与酸度；Prosecco 更果味，香槟更干更复杂。", use: "Spritz、French 75、Kir Royale", brand: "La Marca / Nino Franco" },
  { cat: "气泡 / 混合", name: "啤酒", short: "低酒精度、苦味与气泡；拉格清爽，适合 Michelada 与 Shandy。", use: "Michelada、Shandy", brand: "Modelo / Pacifico" },
  { cat: "利口酒", name: "君度", short: "干净、酒精度较高的橙味利口酒；甜度中等，适合边车、白夫人与玛格丽特。", use: "Sidecar、White Lady、Margarita", brand: "Cointreau / Combier" },
  { cat: "利口酒", name: "Grand Marnier", short: "干邑为底的橙味利口酒；比君度更圆、更葡萄、更贵。", use: "Grand Margarita、Satan's Whiskers", brand: "Grand Marnier" },
  { cat: "利口酒", name: "橙味库拉索", short: "橙皮利口酒的一类；颜色可蓝可白，Dry Curaçao 更干、更苦。", use: "Margarita、Mai Tai、Blue Hawaii", brand: "Pierre Ferrand Dry Curaçao" },
  { cat: "利口酒", name: "金巴利", short: "意大利苦味酒；红、苦、橙皮与草本，是内格罗尼的骨架。", use: "Negroni、Jungle Bird、Americano", brand: "Campari" },
  { cat: "利口酒", name: "Aperol", short: "比金巴利更甜、更橙、更低酒精；Spritz 的日常苦味。", use: "Aperol Spritz、Paper Plane", brand: "Aperol" },
  { cat: "利口酒", name: "绿查特", short: "绿色修道院草本利口酒；更烈、更草本、更苦，Last Word 的核心。", use: "Last Word、Bijou、Chartreuse Swizzle", brand: "Green Chartreuse" },
  { cat: "利口酒", name: "黄查特", short: "黄色修道院草本利口酒；更甜、更柔和，带藏红花与蜂蜜。", use: "Naked and Famous、Alaska", brand: "Yellow Chartreuse" },
  { cat: "利口酒", name: "白可可利口酒", short: "浅色可可甜酒；奶油、香草与可可，甜点杯常用。", use: "Brandy Alexander、Grasshopper", brand: "Tempus Fugit / Giffard" },
  { cat: "利口酒", name: "黑可可利口酒", short: "深色、可可苦味更明显的甜酒；适合深色甜点杯。", use: "Pink Squirrel", brand: "Tempus Fugit / Marie Brizard" }
];
