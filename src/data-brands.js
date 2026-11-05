/* ============================================================
   酒款与品牌速查
   品牌为常见、较易获得的类别示例，不是商业推荐；
   同一类别内风格差异很大，最终以实际试饮为准。
   ============================================================ */

const BRANDS = [
  { cat: "金酒", type: "London Dry", brands: "Beefeater · Tanqueray · Sipsmith", use: "马天尼 / 金汤力 / 内格罗尼", note: "干净、杜松子明显，适合作为吧台主力。" },
  { cat: "金酒", type: "Old Tom", brands: "Hayman's · Ransom", use: "Martinez / Casino / Tom Collins", note: "微甜、圆润，适合古典短饮。" },
  { cat: "威士忌", type: "波本", brands: "Buffalo Trace · Maker's Mark · Wild Turkey 101", use: "古典 / 威士忌酸 / Gold Rush", note: "玉米甜与香草；101 酒精度高，适合调酒。" },
  { cat: "威士忌", type: "黑麦", brands: "Rittenhouse · Sazerac · Bulleit", use: "曼哈顿 / Sazerac / Toronto", note: "辛香、干爽；Rittenhouse 是酒吧常用高 proof 选择。" },
  { cat: "威士忌", type: "调和苏格兰", brands: "Monkey Shoulder · Johnnie Walker Black · Chivas 12", use: "Penicillin / Rob Roy / 高球", note: "稳定、易配；Black Label 带轻微烟熏。" },
  { cat: "威士忌", type: "泥煤苏格兰", brands: "Laphroaig 10 · Ardbeg 10 · Lagavulin 16", use: "Penicillin 漂浮 / 烟熏高球", note: "碘酒、海风与烟熏；几毫升就能改变整杯酒。" },
  { cat: "威士忌", type: "爱尔兰", brands: "Jameson · Powers · Redbreast 12", use: "Irish Coffee / Tipperary", note: "柔顺、谷物甜；Redbreast 更饱满。" },
  { cat: "威士忌", type: "日本", brands: "Suntory Toki · Nikka Coffey Grain · Hakushu 12", use: "日式高球 / Saketini", note: "精致、果香；Toki 适合高球。" },
  { cat: "朗姆", type: "白朗姆", brands: "Probitas · Havana Club 3 · Plantation 3 Stars", use: "Daiquiri / Mojito / El Presidente", note: "清淡到中等酒体；Probitas 带轻微 funk。" },
  { cat: "朗姆", type: "陈年朗姆", brands: "Appleton Signature · El Dorado 12 · Diplomatico Reserva", use: "Mai Tai / Old Cuban / 朗姆古典", note: "焦糖、香草与果干；甜度差异大。" },
  { cat: "朗姆", type: "Overproof", brands: "Smith & Cross · Wray & Nephew · Plantation OFTD", use: "Tiki / 漂浮 / 潘趣", note: "高酒精度、强香气；必须精确计量。" },
  { cat: "龙舌兰", type: "Blanco", brands: "Tapatío 110 · Siete Leguas · Fortaleza", use: "Margarita / Paloma / Ranch Water", note: "植物感、胡椒；100% agave 是底线。" },
  { cat: "龙舌兰", type: "Reposado", brands: "Siete Leguas · El Tesoro · G4", use: "Oaxaca Old Fashioned / Rosita", note: "橡木与香草，仍保留 agave 风味。" },
  { cat: "梅斯卡尔", type: "Espadín", brands: "Del Maguey Vida · Montelobos · Nuestra Soledad", use: "Naked and Famous / Mezcal Margarita", note: "烟熏与矿物；Vida 是常见入门款。" },
  { cat: "白兰地", type: "干邑", brands: "Pierre Ferrand 1840 · Hine VSOP · Rémy Martin VSOP", use: "Sidecar / Vieux Carré / Alexander", note: "葡萄、花香与橡木；1840 专为调酒设计。" },
  { cat: "白兰地", type: "皮斯科", brands: "Barsol Quebranta · Macchu Pisco · Capel", use: "Pisco Sour / Chilcano", note: "花香与柑橘；不要与葡萄渣白兰地混淆。" },
  { cat: "伏特加", type: "中性 / 小麦", brands: "Absolut · Ketel One · Belvedere", use: "Moscow Mule / Espresso Martini / Cosmopolitan", note: "干净、质地优先；风味差异较细。" },
  { cat: "卡莎萨", type: "未陈年 / 甘蔗汁", brands: "Leblon · Novo Fogo · Avuá", use: "Caipirinha / Rabo de Galo", note: "青草、甘蔗与 funk；不要当白朗姆用。" },
  { cat: "清酒 / 烧酒", type: "纯米 / 烧酒", brands: "Dassai 45 · Hakkaisan · Chamisul", use: "Saketini / Somaek / 清酒高球", note: "清酒看精米步合；烧酒清爽、低酒精度。" },
  { cat: "白酒", type: "清香 / 浓香", brands: "汾酒 · 泸州老窖 · 五粮液", use: "Baijiu Sour / 白酒高球", note: "酯香极强；从 10–20 ml 开始试用。" },
  { cat: "味美思", type: "干型", brands: "Dolin Dry · Noilly Prat · Martini Extra Dry", use: "Dry Martini / Bamboo / Adonis", note: "开瓶冷藏，4–6 周内用完。" },
  { cat: "味美思", type: "甜型", brands: "Carpano Antica · Cocchi di Torino · Dolin Rouge", use: "Manhattan / Negroni / Boulevardier", note: "甜度与香料差异大；Carpano 很浓。" },
  { cat: "味美思", type: "Blanc / Lillet", brands: "Dolin Blanc · Lillet Blanc · Cocchi Americano", use: "White Negroni / Vesper / 20th Century", note: "蜜饯、花香与柔和苦味。" },
  { cat: "苦味酒", type: "Campari / Aperol", brands: "Campari · Aperol · Select", use: "Negroni / Spritz / Jungle Bird", note: "Campari 更苦、Aperol 更甜；Select 更草本。" },
  { cat: "阿玛罗", type: "苦味利口酒", brands: "Amaro Nonino · Averna · Cynar · Fernet-Branca", use: "Paper Plane / Little Italy / Toronto", note: "苦甜、草本；Fernet 的薄荷药感最强。" },
  { cat: "橙味利口酒", type: "Triple Sec / Curaçao", brands: "Cointreau · Combier · Pierre Ferrand Dry Curaçao", use: "Margarita / Sidecar / White Lady", note: "Cointreau 干净；Dry Curaçao 更干、更复杂。" },
  { cat: "樱桃 / 查特", type: "Maraschino / Chartreuse", brands: "Luxardo Maraschino · Green Chartreuse · Yellow Chartreuse", use: "Last Word / Aviation / Bijou", note: "Maraschino 几毫升就够；Chartreuse 甜而强。" },
  { cat: "咖啡 / 可可", type: "Coffee / Cacao", brands: "Mr Black · Kahlúa · Tempus Fugit Crème de Cacao", use: "Espresso Martini / White Russian / Alexander", note: "Mr Black 更干；Kahlúa 更甜。" },
  { cat: "花香 / 果味", type: "Elderflower / Violet / Cassis", brands: "St-Germain · Rothman & Winter · Lejay", use: "Hugo / Aviation / Kir", note: "花香脆弱；紫罗兰与黑加仑颜色、香气都强。" },
  { cat: "糖浆 / 坚果", type: "Orgeat / Falernum", brands: "Small Hand Foods · Liber & Co. · John D. Taylor's", use: "Mai Tai / Saturn / Three Dots", note: "杏仁与香料糖浆；甜度高，先试品牌。" },
  { cat: "起泡酒 / 啤酒", type: "Prosecco / Lager", brands: "La Marca · Nino Franco · Modelo", use: "Spritz / French 75 / Michelada", note: "起泡酒要冰；啤酒选清爽拉格。" },
  { cat: "苦精", type: "Aromatic / Orange", brands: "Angostura · Regan's · Peychaud's · Bittermens", use: "Old Fashioned / Manhattan / Sazerac", note: "按 dash 计；不同瓶口差异很大。" }
];
