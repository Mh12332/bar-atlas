/* ============================================================
   关系图谱的“显式谱系”
   只收录有明确结构/历史关系的配对；其余边由程序按基酒、
   架构与关键材料计算，避免把“都用了糖”误判为强关系。
   ============================================================ */

const GRAPH_REL_TYPES = {
  lineage: "历史谱系",
  variant: "同族变体",
  base: "同基酒",
  family: "同架构",
  modifier: "共用辅料"
};

const GRAPH_RELATIONS = [
  ["daiquiri", "hemingway-daiquiri", "variant"],
  ["daiquiri", "caipirinha", "lineage"],
  ["daiquiri", "mojito", "lineage"],
  ["margarita", "sidecar", "family"],
  ["margarita", "paloma", "base"],
  ["negroni", "boulevardier", "variant"],
  ["negroni", "sbagliato", "variant"],
  ["negroni", "old-pal", "variant"],
  ["negroni", "kingston-negroni", "variant"],
  ["manhattan", "rob-roy", "variant"],
  ["manhattan", "martinez", "lineage"],
  ["manhattan", "brooklyn", "variant"],
  ["manhattan", "red-hook", "variant"],
  ["brooklyn", "red-hook", "family"],
  ["red-hook", "bensonhurst", "family"],
  ["sidecar", "jack-rose", "family"],
  ["mai-tai", "corn-n-oil", "base"],
  ["manhattan", "coronation", "lineage"],
  ["whiskey-sour", "gold-rush", "variant"],
  ["whiskey-sour", "new-york-sour", "variant"],
  ["mai-tai", "zombie", "family"],
  ["mai-tai", "jet-pilot", "family"],
  ["mai-tai", "test-pilot", "lineage"],
  ["zombie", "jet-pilot", "family"],
  ["mojito", "caipirinha", "lineage"],
  ["dry-martini", "vesper", "variant"],
  ["old-fashioned", "sazerac", "family"],
  ["old-fashioned", "oaxaca-old-fashioned", "variant"],
  ["aperol-spritz", "hugo", "family"],
  ["aperol-spritz", "americano", "family"],
  ["pisco-sour", "pisco-punch", "base"],
  ["kir", "kir-royale", "variant"],
  ["bellini", "rossini", "variant"],
  ["moscow-mule", "gin-gin-mule", "variant"],
  ["bloody-mary", "michelada", "family"],
  ["paloma", "ranch-water", "base"],
  ["hotel-nacional", "havana-special", "base"],
  ["tinto-de-verano", "kalimotxo", "family"],
  ["rebujito", "tinto-de-verano", "family"],
  ["income-tax", "claridge", "base"],
  ["clover-club", "pink-lady", "family"],
  ["corpse-reviver-1", "corpse-reviver-2", "variant"],
  ["espresso-martini", "irish-coffee", "family"],
  ["nui-nui", "jet-pilot", "base"],
  ["saturn", "chartreuse-swizzle", "family"],
  ["army-and-navy", "ford-cocktail", "base"],
  ["alaska", "obituary", "base"]
];
