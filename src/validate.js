const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = __dirname;
const files = fs.readdirSync(dir).filter((f) => f.startsWith("data-") && f.endsWith(".js"));
const names = [
  "FAMILIES", "BASES", "MODGROUPS", "FLAVOR_TAGS", "METHODS",
  "COCKTAILS_GIN", "COCKTAILS_WHISKEY", "COCKTAILS_RUM", "COCKTAILS_AGAVE",
  "COCKTAILS_BRANDY", "COCKTAILS_VODKA", "COCKTAILS_OTHER", "COCKTAILS_LIQUEUR",
  "COCKTAILS_WINE", "COCKTAILS_LOW", "COCKTAILS_EXTRA", "COCKTAILS_IBA", "COCKTAILS_CLASSICS", "COCKTAILS_MORE",
  "BOTTLE_FAMILIES", "BRANDS", "PANTRY_CATS", "PANTRY_INGREDIENTS", "MATERIAL_NOTES", "MATERIAL_ALIASES", "MATERIAL_CATEGORY_ORDER", "MATERIAL_CATEGORY_HINTS", "SPIRIT_DETAILS", "ARCH_MODEL", "ARCH_LINEAGE", "ARCH_DERIVATIONS", "KNOWLEDGE", "GRAPH_REL_TYPES", "GRAPH_RELATIONS", "EXTRA_VARIANTS", "TOPIC_SYSTEMS", "NAME_ALIASES", "IBA_INDEX", "IBA_SPECS", "HISTORY", "NON_IBATAGS", "VARIANT_SPECS", "BIBLIOGRAPHY", "TIMELINE",
  "TECHNIQUES", "SYRUPS", "FAULTS", "GLASSES",
  "CONVERSIONS", "STARTER", "MENU_GUIDE", "GLOSSARY"
];
const source = files.map((f) => fs.readFileSync(path.join(dir, f), "utf8")).join("\n") +
  "\n;({" + names.join(",") + "});";
const ctx = vm.runInNewContext(source, {}, { filename: "bundle.js" });

const cocktails = [];
for (const name of names.filter((n) => n.startsWith("COCKTAILS_"))) {
  if (!Array.isArray(ctx[name])) throw new Error("Missing " + name);
  cocktails.push(...ctx[name]);
}
console.log("Total cocktails:", cocktails.length);
const ids = new Set();
let errors = 0;
let variants = 0;
for (const c of cocktails) {
  if (ids.has(c.id)) { console.log("DUPLICATE ID:", c.id); errors++; }
  ids.add(c.id);
  for (const field of ["id", "zh", "en", "fam", "base", "mods", "method", "glass", "strength", "diff", "ing", "steps", "gar", "note", "flavor", "v"]) {
    if (c[field] === undefined) { console.log("MISSING", field, c.id); errors++; }
  }
  if (!ctx.FAMILIES.find((f) => f.id === c.fam)) { console.log("BAD FAMILY", c.id, c.fam); errors++; }
  if (!ctx.BASES.find((b) => b.id === c.base)) { console.log("BAD BASE", c.id, c.base); errors++; }
  for (const m of c.mods) if (!ctx.MODGROUPS.find((g) => g.id === m)) { console.log("BAD MOD", c.id, m); errors++; }
  for (const f of c.flavor) if (!ctx.FLAVOR_TAGS.includes(f)) { console.log("BAD FLAVOR", c.id, f); errors++; }
  if (!ctx.METHODS.includes(c.method)) { console.log("BAD METHOD", c.id, c.method); errors++; }
  if (!c.steps || c.steps.length < 2) { console.log("TOO FEW STEPS", c.id); errors++; }
  if (!c.v || c.v.length < 2) { console.log("TOO FEW VARIANTS", c.id); errors++; }
  for (const v of c.v) {
    variants++;
    if (!Array.isArray(v)) {
      if (!v.zh || !v.en || !v.how) { console.log("BAD VARIANT", c.id, v.en); errors++; }
      if (!Array.isArray(v.ing) || v.ing.length < 2) { console.log("VARIANT NO ING", c.id, v.en); errors++; }
    }
  }
}
for (const fam of ctx.FAMILIES) {
  for (const id of fam.examples) if (!ids.has(id)) { console.log("FAMILY EXAMPLE MISSING", fam.id, id); errors++; }
}
for (const group of ctx.MODGROUPS) {
  for (const id of group.examples) if (!ids.has(id)) { console.log("MOD EXAMPLE MISSING", group.id, id); errors++; }
}
console.log("IBA index:", Object.keys(ctx.IBA_INDEX).length);
for (const id of Object.keys(ctx.IBA_INDEX)) {
  if (!ids.has(id)) { console.log("IBA ID MISSING FROM RECIPES", id); errors++; }
}
for (const id of Object.keys(ctx.IBA_SPECS)) {
  if (!ids.has(id)) { console.log("IBA SPEC ID MISSING", id); errors++; }
}
for (const c of cocktails) {
  if (ctx.IBA_INDEX[c.id]) continue;
  const tag = c.src || ctx.NON_IBATAGS[c.id];
  if (!tag) { console.log("NON IBA SOURCE MISSING", c.id); errors++; }
  else if (c.src && (!c.src.tag || !c.src.label)) { console.log("BAD NON IBA SRC", c.id); errors++; }
}
for (const id of Object.keys(ctx.NON_IBATAGS)) {
  if (!ids.has(id)) { console.log("NON IBA TAG ORPHAN", id); errors++; }
}
for (const [id, list] of Object.entries(ctx.EXTRA_VARIANTS)) {
  const recipe = cocktails.find((c) => c.id === id);
  if (!recipe) { console.log("EXTRA VARIANT MISSING RECIPE", id); errors++; continue; }
  const names = new Set(recipe.v.map((v) => Array.isArray(v) ? v[1] : v.en));
  for (const v of list) {
    if (!v.en || names.has(v.en)) { console.log("DUPLICATE EXTRA VARIANT", id, v.en); errors++; }
    if (!v.zh || !v.how) { console.log("BAD EXTRA VARIANT", id, v.en); errors++; }
    names.add(v.en);
  }
}
for (const [id, list] of Object.entries(ctx.EXTRA_VARIANTS)) {
  const recipe = cocktails.find((c) => c.id === id);
  if (!recipe) continue;
  for (const v of list) if (!recipe.v.some((x) => (Array.isArray(x) ? x[1] : x.en) === v.en)) recipe.v.push(v);
}
const recipeByName = new Map(cocktails.map((c) => [c.en.toLowerCase(), c.id]));
for (const c of cocktails) {
  c.v = c.v.filter((raw) => {
    const name = (Array.isArray(raw) ? raw[1] : raw.en || "").toLowerCase();
    return name !== c.en.toLowerCase() && !recipeByName.has(name);
  });
}
variants = cocktails.reduce((sum, c) => sum + c.v.length, 0);
console.log("Total variants:", variants);
for (const id of Object.keys(ctx.NAME_ALIASES)) {
  if (!ids.has(id)) { console.log("ALIAS RECIPE MISSING", id); errors++; }
}
for (const topic of ctx.TOPIC_SYSTEMS) {
  for (const row of topic.rows) if (!ids.has(row.id)) { console.log("TOPIC RECIPE MISSING", topic.id, row.id); errors++; }
}
for (const lane of ctx.ARCH_LINEAGE) {
  for (const node of lane.nodes) if (!ids.has(node.id)) { console.log("LINEAGE RECIPE MISSING", lane.id, node.id); errors++; }
}
for (const group of ctx.ARCH_DERIVATIONS) {
  if (!ctx.FAMILIES.some((f) => f.id === group.from)) { console.log("DERIVATION BAD FROM", group.from); errors++; }
  for (const edge of group.branches) {
    if (!ctx.FAMILIES.some((f) => f.id === edge.to)) { console.log("DERIVATION BAD TO", group.from, edge.to); errors++; }
    if (!ids.has(edge.target)) { console.log("DERIVATION BAD TARGET", edge.target); errors++; }
  }
}
const SPIRIT_FIELDS = ["id", "zh", "en", "abv", "note", "craft", "profile", "bottles", "use"];
let spiritStyles = 0;
for (const base of ctx.BASES) {
  const detail = ctx.SPIRIT_DETAILS[base.id];
  if (!detail) { console.log("SPIRIT DETAIL MISSING BASE", base.id); errors++; continue; }
  if (!Array.isArray(detail.subtypes) || detail.subtypes.length < 3) { console.log("SPIRIT DETAIL TOO FEW SUBTYPES", base.id); errors++; continue; }
  if (!Array.isArray(detail.choose) || detail.choose.length < 3) { console.log("SPIRIT DETAIL FEW CHOOSE", base.id); errors++; }
  const seenStyles = new Set();
  for (const style of detail.subtypes) {
    spiritStyles++;
    for (const field of SPIRIT_FIELDS) if (!style[field]) { console.log("SPIRIT SUBTYPE MISSING", field, base.id, style.id || style.zh); errors++; }
    if (seenStyles.has(style.id)) { console.log("SPIRIT SUBTYPE DUP ID", base.id, style.id); errors++; }
    seenStyles.add(style.id);
  }
}
for (const id of Object.keys(ctx.SPIRIT_DETAILS)) {
  if (!ctx.BASES.some((b) => b.id === id)) { console.log("SPIRIT DETAIL BAD BASE", id); errors++; }
}
console.log("Spirit styles:", spiritStyles);
for (const [a, b, type] of ctx.GRAPH_RELATIONS) {
  if (!ids.has(a) || !ids.has(b)) { console.log("GRAPH RELATION MISSING RECIPE", a, b); errors++; }
  if (!ctx.GRAPH_REL_TYPES[type]) { console.log("GRAPH RELATION BAD TYPE", a, b, type); errors++; }
}
for (const [key, spec] of Object.entries(ctx.VARIANT_SPECS)) {
  const [rid, ven] = key.split("::");
  const recipe = cocktails.find((c) => c.id === rid);
  const variant = recipe && recipe.v.map((v) => Array.isArray(v) ? v[1] : v.en).includes(ven);
  if (!recipe) { console.log("VARIANT SPEC ORPHAN", key); errors++; continue; }
  if (!variant) continue;
  if (!Array.isArray(spec.ing) || spec.ing.length < 2) { console.log("VARIANT SPEC NO ING", key); errors++; }
}
const bottleFamilies = ctx.BOTTLE_FAMILIES;
const bottleStyles = ctx.BRANDS;
const bottleFamilyById = new Map();
if (!Array.isArray(bottleFamilies) || bottleFamilies.length === 0) {
  console.log("BAD BOTTLE FAMILIES"); errors++;
} else {
  for (const fam of bottleFamilies) {
    for (const field of ["id", "zh", "en", "intro"]) {
      if (typeof fam[field] !== "string" || !fam[field].trim()) { console.log("BOTTLE FAMILY FIELD", fam.id || "?", field); errors++; }
    }
    if (bottleFamilyById.has(fam.id)) { console.log("BOTTLE FAMILY DUP ID", fam.id); errors++; }
    bottleFamilyById.set(fam.id, fam);
    if (!ctx.BASES.some((b) => b.id === fam.base)) { console.log("BOTTLE FAMILY BAD BASE", fam.id, fam.base); errors++; }
  }
}
if (!Array.isArray(bottleStyles) || bottleStyles.length === 0) {
  console.log("BAD BOTTLE STYLES"); errors++;
} else {
  const seenStyles = new Set();
  const familyCounts = {};
  for (const row of bottleStyles) {
    if (seenStyles.has(row.id)) { console.log("BOTTLE DUP ID", row.id); errors++; }
    seenStyles.add(row.id);
    for (const field of ["id", "family", "type", "en", "abv", "note", "swap", "tip"]) {
      if (typeof row[field] !== "string" || !row[field].trim()) { console.log("BOTTLE FIELD", row.id || "?", field); errors++; }
    }
    if (!bottleFamilyById.has(row.family)) { console.log("BOTTLE BAD FAMILY", row.id, row.family); errors++; }
    else familyCounts[row.family] = (familyCounts[row.family] || 0) + 1;
    if (![1, 2, 3].includes(row.tier)) { console.log("BOTTLE BAD TIER", row.id, row.tier); errors++; }
    if (!Array.isArray(row.flavors) || row.flavors.length === 0) { console.log("BOTTLE NO FLAVORS", row.id); errors++; }
    else for (const f of row.flavors) if (!ctx.FLAVOR_TAGS.includes(f)) { console.log("BOTTLE BAD FLAVOR", row.id, f); errors++; }
    if (!Array.isArray(row.brands) || row.brands.length < 2 || row.brands.some((x) => typeof x !== "string" || !x.trim())) { console.log("BOTTLE BAD BRANDS", row.id); errors++; }
    if (!Array.isArray(row.drinks) || row.drinks.length < 1) { console.log("BOTTLE BAD DRINKS", row.id); errors++; }
    else for (const d of row.drinks) if (!ids.has(d)) { console.log("BOTTLE DRINK MISSING", row.id, d); errors++; }
  }
  for (const fam of bottleFamilies || []) if (!familyCounts[fam.id]) { console.log("BOTTLE FAMILY EMPTY", fam.id); errors++; }
}
console.log("Bottle styles:", bottleStyles ? bottleStyles.length : 0, "/ Bottle families:", bottleFamilies ? bottleFamilies.length : 0);
console.log("Errors:", errors);
const byBase = {};
const byFam = {};
for (const c of cocktails) { byBase[c.base] = (byBase[c.base] || 0) + 1; byFam[c.fam] = (byFam[c.fam] || 0) + 1; }
console.log("By base:", byBase);
console.log("By family:", byFam);
console.log("Families:", ctx.FAMILIES.length, "Bases:", ctx.BASES.length, "Mod groups:", ctx.MODGROUPS.length);

process.exitCode = errors ? 1 : 0;
