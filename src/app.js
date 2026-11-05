/* ============================================================
   BAR ATLAS — 交互与渲染
   ============================================================ */

const ALL = [
  ...COCKTAILS_GIN,
  ...COCKTAILS_WHISKEY,
  ...COCKTAILS_RUM,
  ...COCKTAILS_AGAVE,
  ...COCKTAILS_BRANDY,
  ...COCKTAILS_VODKA,
  ...COCKTAILS_OTHER,
  ...COCKTAILS_LIQUEUR,
  ...COCKTAILS_WINE,
  ...COCKTAILS_LOW,
  ...COCKTAILS_EXTRA,
  ...COCKTAILS_IBA,
  ...COCKTAILS_CLASSICS,
  ...COCKTAILS_MORE
];

const BY_ID = Object.fromEntries(ALL.map((c) => [c.id, c]));

for (const [id, extra] of Object.entries(EXTRA_VARIANTS)) {
  const recipe = BY_ID[id];
  if (!recipe || !Array.isArray(extra)) continue;
  const existing = new Set(recipe.v.map((v) => Array.isArray(v) ? v[1] : v.en));
  for (const variant of extra) {
    if (variant && variant.en && !existing.has(variant.en)) {
      recipe.v.push(variant);
      existing.add(variant.en);
    }
  }
}

/* 独立命名的酒款不重复充当母配方的变体。
   例如 Boulevardier / Old Pal 有独立配方页，就不再挂在 Negroni 变体里；
   它们的主酒身份由关系图谱中的“同族变体/历史谱系”连接表达。 */
const RECIPE_EN = new Map(ALL.map((c) => [c.en.toLowerCase(), c.id]));
for (const c of ALL) {
  c.v = c.v.filter((raw) => {
    const name = (Array.isArray(raw) ? raw[1] : raw.en || "").toLowerCase();
    return name !== c.en.toLowerCase() && !RECIPE_EN.has(name);
  });
}

const BASE_BY_ID = Object.fromEntries(BASES.map((b) => [b.id, b]));
const FAM_BY_ID = Object.fromEntries(FAMILIES.map((f) => [f.id, f]));
const MOD_BY_ID = Object.fromEntries(MODGROUPS.map((m) => [m.id, m]));
const PANTRY_BY_ID = Object.fromEntries(PANTRY_INGREDIENTS.map((x) => [x.id, x]));
const TOTAL_VARIANTS = ALL.reduce((sum, c) => sum + c.v.length, 0);
const IBA_TOTAL = Object.keys(IBA_INDEX).length;

function materialCategory(name) {
  if (/金酒|伏特加|朗姆|威士忌|龙舌兰|梅斯卡尔|白兰地|干邑|皮斯科|卡莎萨|清酒|烧酒|白酒|格拉帕/.test(name)) return "基酒";
  if (/味美思|雪莉|波特|葡萄酒|香槟|起泡|Prosecco|Cava|Lillet|Blanc/.test(name)) return "加强酒";
  if (/苦精|Peychaud|安高天娜/.test(name)) return "苦精";
  if (/金巴利|Aperol|查特|利口酒|君度|库拉索|苦艾|Pernod|Suze|Cynar|Fernet|Bénédictine|Galliano|Pimm|Limoncello|Sloe Gin|Amaro|Amer|杜林标|榛子|Noyaux|Cordial|cordial/.test(name)) return "利口酒 / 苦酒";
  if (/汁|果泥|果肉|柠檬水/.test(name)) return "果汁 / 果泥";
  if (/奶油|牛奶|炼乳|椰奶|蛋|黄油/.test(name)) return "乳制品 / 蛋";
  if (/糖浆|糖$|蜂蜜|枫糖/.test(name)) return "糖与甜味";
  if (/苏打|汤力|姜啤|可乐|汽水|啤酒/.test(name)) return "气泡 / 混合饮料";
  if (/冰|^水$|热水/.test(name)) return "冰与水";
  if (/盐|胡椒|辣椒|辣酱|伍斯特|芹菜|肉桂|丁香|八角|肉豆蔻|香草|可可/.test(name)) return "香料 / 调味";
  if (/橙皮|柠檬皮|青柠皮|葡萄柚皮|橙片|柠檬片|柠檬角|青柠角|薄荷|罗勒|黄瓜|草莓|黑莓|莓果|菠萝|百香果|樱桃|橄榄|洋葱|酒渍/.test(name)) return "水果 / 装饰";
  return "其他";
}

function materialProfile(name) {
  const exact = MATERIAL_NOTES.find((row) => row.name === name);
  if (exact) return exact;
  if (/苦精|安高天娜/.test(name) && !/橙味|Peychaud|莫尔/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "安高天娜");
  if (/雪莉/.test(name) && !/Manzanilla|Amontillado|Fino/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "雪莉");
  if (/波特/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "波特");
  if (/白兰地|干邑|卡尔瓦多斯|格拉帕/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "白兰地 / 干邑");
  if (/清酒|烧酒/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "清酒 / 烧酒");
  if (/金酒/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "金酒");
  if (/威士忌|波本|黑麦/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "威士忌");
  if (/朗姆/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "朗姆");
  if (/龙舌兰/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "龙舌兰");
  if (/梅斯卡尔/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "梅斯卡尔");
  if (/伏特加/.test(name)) return MATERIAL_NOTES.find((r) => r.name === "伏特加");
  return null;
}

function buildMaterialLibrary() {
  const map = new Map();
  const add = (rawName, c) => {
    const name = MATERIAL_ALIASES[rawName] || rawName;
    if (!name) return;
    if (!map.has(name)) map.set(name, { name, count: 0, recipes: new Set() });
    const row = map.get(name);
    row.count++;
    row.recipes.add(c);
  };
  for (const c of ALL) {
    for (const [name] of c.ing) add(name, c);
    for (const v of c.v) if (Array.isArray(v.ing)) for (const [name] of v.ing) add(name, c);
  }
  return [...map.values()].map((row) => {
    const profile = materialProfile(row.name);
    const category = materialCategory(row.name) || profile?.cat || "其他";
    const examples = [...row.recipes].slice(0, 3).map((c) => c.zh).join("、");
    const short = profile
      ? (profile.name === row.name ? profile.short : `${row.name}：${profile.short}`)
      : `${MATERIAL_CATEGORY_HINTS[category] || MATERIAL_CATEGORY_HINTS["其他"]} 在本站 ${row.count} 个配方中使用${examples ? `，如 ${examples}` : ""}。`;
    return {
      name: row.name,
      count: row.count,
      category,
      short,
      use: profile?.use || examples || "按配方使用",
      brand: profile?.brand || "按配方选择"
    };
  }).sort((a, b) => {
    const ai = MATERIAL_CATEGORY_ORDER.indexOf(a.category);
    const bi = MATERIAL_CATEGORY_ORDER.indexOf(b.category);
    return ai - bi || b.count - a.count || a.name.localeCompare(b.name);
  });
}

const MATERIAL_LIBRARY = buildMaterialLibrary();
const MATERIAL_USES = MATERIAL_LIBRARY.reduce((sum, row) => sum + row.count, 0);

function ibaMeta(c) {
  if (!c || !IBA_INDEX[c.id]) return null;
  const [name, cat] = IBA_INDEX[c.id];
  const slug = IBA_INDEX[c.id][2];
  return {
    name,
    cat,
    catZh: (IBA_CATS[cat] && IBA_CATS[cat].zh) || "IBA",
    catEn: (IBA_CATS[cat] && IBA_CATS[cat].en) || "IBA",
    url: `https://iba-world.com/iba-cocktail/${slug}/`
  };
}

function sourceInfo(c) {
  if (ibaMeta(c)) return null;
  if (c.src) return { tag: c.src.tag || "非 IBA", label: c.src.label || "经典/现代配方", url: c.src.url || "" };
  const tag = NON_IBATAGS[c.id];
  if (tag) return { tag: tag[0], label: tag[1], url: tag[2] || "" };
  return { tag: "非 IBA", label: "经典/现代配方，参考页面底部书目", url: "" };
}

function pantryText(c) {
  if (!c._pantryText) c._pantryText = (c.ing || []).map((x) => x[0]).join(" ");
  return c._pantryText;
}

function hasPantryItem(c, id) {
  const item = PANTRY_BY_ID[id];
  if (!item) return false;
  if (item.baseIds && item.baseIds.includes(c.base)) return true;
  return item.aliases.some((alias) => pantryText(c).includes(alias));
}

function pantryMatch(c) {
  if (state.pantryInclude.length && !state.pantryInclude.every((id) => hasPantryItem(c, id))) return false;
  if (state.pantryExclude.length && state.pantryExclude.some((id) => hasPantryItem(c, id))) return false;
  return true;
}

function savePantry() {
  try {
    localStorage.setItem("bar-atlas-pantry", JSON.stringify({
      include: state.pantryInclude,
      exclude: state.pantryExclude
    }));
  } catch (e) {}
}

function togglePantryItem(id) {
  const item = PANTRY_BY_ID[id];
  if (!item) return;
  if (state.pantryMode === "include") {
    state.pantryInclude = state.pantryInclude.includes(id)
      ? state.pantryInclude.filter((x) => x !== id)
      : [...state.pantryInclude, id];
    state.pantryExclude = state.pantryExclude.filter((x) => x !== id);
  } else {
    state.pantryExclude = state.pantryExclude.includes(id)
      ? state.pantryExclude.filter((x) => x !== id)
      : [...state.pantryExclude, id];
    state.pantryInclude = state.pantryInclude.filter((x) => x !== id);
  }
  savePantry();
  renderPantry();
}

function removePantryItem(id) {
  state.pantryInclude = state.pantryInclude.filter((x) => x !== id);
  state.pantryExclude = state.pantryExclude.filter((x) => x !== id);
  savePantry();
  renderPantry();
}

function pantryCountFor(id) {
  return ALL.filter((c) => hasPantryItem(c, id)).length;
}

function pantryStatus(id) {
  if (state.pantryInclude.includes(id)) return "include";
  if (state.pantryExclude.includes(id)) return "exclude";
  return "";
}

function pantrySummaryLabel() {
  const inc = state.pantryInclude.length;
  const exc = state.pantryExclude.length;
  return [inc ? `有 ${inc}` : "", exc ? `无 ${exc}` : ""].filter(Boolean).join(" / ");
}

function aliasesFor(c) {
  return (NAME_ALIASES[c.id] || []).filter((alias) => alias !== c.zh && alias !== c.en);
}

function normalizeVariant(v) {
  if (Array.isArray(v)) return { zh: v[0], en: v[1], how: v[2] };
  return v;
}

function resolvedVariant(c, raw) {
  const v = normalizeVariant(raw);
  const extra = VARIANT_SPECS[`${c.id}::${v.en}`];
  return extra ? { ...v, ...extra } : v;
}

function variantSearchText(v) {
  const o = normalizeVariant(v);
  return [o.zh, o.en, o.how, o.note, ...(o.ing || []).flat()].filter(Boolean).join(" ");
}

const ESSENTIALS = [
  "daiquiri", "old-fashioned", "margarita", "dry-martini", "negroni", "whiskey-sour",
  "manhattan", "gin-tonic", "moscow-mule", "mai-tai", "espresso-martini", "aperol-spritz"
];

const RECOMMENDED = [
  ...ESSENTIALS,
  "mojito", "sidecar", "paloma", "jungle-bird", "penicillin", "boulevardier",
  "cosmopolitan", "white-lady", "last-word", "french-75", "sazerac", "pisco-sour",
  "painkiller", "americano", "grasshopper", "irish-coffee", "paper-plane", "southside",
  "tom-collins", "clover-club", "hemingway-daiquiri", "paloma", "zombie", "vesper",
  "corpse-reviver-2", "aviation", "sherry-cobbler", "mint-julep", "bloody-mary", "amaretto-sour",
  "bramble", "martinez", "el-diablo", "blood-and-sand", "remember-the-maine", "bijou",
  "twentieth-century", "hanky-panky", "pegu-club", "test-pilot", "jet-pilot", "nui-nui",
  "gin-gin-mule", "satans-whiskers", "scofflaw", "doctor-funk",
  "kingston-negroni", "brown-derby", "hugo", "blue-hawaii", "pink-squirrel", "hot-toddy",
  "hotel-nacional", "old-pal", "rebujito", "kalimotxo", "havana-special", "port-light",
  "income-tax", "claridge", "tinto-de-verano", "shandy"
];
const RANK = new Map(RECOMMENDED.map((id, i) => [id, i]));

const STRENGTH_LABELS = ["", "轻盈", "适中", "偏烈", "很烈", "极烈"];
const DIFF_LABELS = ["", "易", "中", "难"];

const state = {
  base: "all",
  family: "all",
  flavor: "all",
  mod: "all",
  method: "all",
  strength: "all",
  iba: "all",
  q: "",
  sort: "editorial",
  favOnly: false,
  flavorView: "tags",
  density: "comfort",
  pantryInclude: [],
  pantryExclude: [],
  pantryMode: "include",
  pantryQuery: ""
};

let storedFavorites = loadJSON("bar-atlas-favorites", []);
if (!Array.isArray(storedFavorites)) storedFavorites = [];
let favorites = new Set(storedFavorites.filter((id) => BY_ID[id]));
state.flavorView = loadJSON("bar-atlas-flavor-view", "tags") === "radar" ? "radar" : "tags";
state.density = loadJSON("bar-atlas-density", "comfort") === "compact" ? "compact" : "comfort";
const storedPantry = loadJSON("bar-atlas-pantry", {}) || {};
const cleanPantry = (arr) => Array.isArray(arr) ? [...new Set(arr.filter((id) => PANTRY_BY_ID[id]))] : [];
state.pantryInclude = cleanPantry(storedPantry.include);
state.pantryExclude = cleanPantry(storedPantry.exclude).filter((id) => !state.pantryInclude.includes(id));
let lastFocus = null;
let currentRecipeId = null;
let closeTimer = 0;

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

function countBy(list, key) {
  return list.reduce((acc, item) => {
    const value = typeof key === "function" ? key(item) : item[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function baseColor(c) {
  return (BASE_BY_ID[c.base] && BASE_BY_ID[c.base].color) || "#8a6a45";
}

function openLink(id, cls = "") {
  const c = BY_ID[id];
  if (!c) return "";
  return `<a class="${cls}" href="#recipe/${esc(id)}" data-open="${esc(id)}">${esc(c.zh)}</a>`;
}

/* ---------------- 静态内容渲染 ---------------- */

function renderMetaCounts() {
  $$('[data-count="recipes"]').forEach((el) => { el.textContent = ALL.length; });
  $$('[data-count="variants"]').forEach((el) => { el.textContent = TOTAL_VARIANTS; });
  $$('[data-count="families"]').forEach((el) => { el.textContent = FAMILIES.length; });
  $$('[data-count="bases"]').forEach((el) => { el.textContent = BASES.length; });
  $$('[data-count="mods"]').forEach((el) => { el.textContent = MODGROUPS.length; });
  $$('[data-count="iba"]').forEach((el) => { el.textContent = IBA_TOTAL; });
  const sideRecipes = $('[data-side="recipes"]');
  const sideVariants = $('[data-side="variants"]');
  const sideIba = $('[data-side="iba"]');
  if (sideRecipes) sideRecipes.textContent = ALL.length;
  if (sideVariants) sideVariants.textContent = TOTAL_VARIANTS;
  if (sideIba) sideIba.textContent = IBA_TOTAL;
}

function renderEssentials() {
  const grid = $("#essentialGrid");
  if (!grid) return;
  grid.innerHTML = ESSENTIALS.map((id, i) => {
    const c = BY_ID[id];
    if (!c) return "";
    const base = BASE_BY_ID[c.base];
    const fam = FAM_BY_ID[c.fam];
    return `
      <a class="essential-card" href="#recipe/${esc(id)}" data-open="${esc(id)}" style="--base-color:${baseColor(c)}">
        <span class="essential-no">${String(i + 1).padStart(2, "0")}</span>
        <span class="essential-copy">
          <span class="essential-kicker">${esc(base.zh)} · ${esc(fam.zh)}</span>
          <b class="essential-zh">${esc(c.zh)}</b>
          <span class="essential-en">${esc(c.en)}</span>
          <span class="essential-line">${esc(c.ing.map((x) => x[0]).slice(0, 3).join(" · "))}</span>
        </span>
        <span class="essential-arrow"><svg class="icon"><use href="#i-up-right"></use></svg></span>
      </a>`;
  }).join("");
}

function renderArchModel() {
  const wrap = $("#archModel");
  if (!wrap) return;
  wrap.innerHTML = ARCH_MODEL.map((layer) => `<article class="arch-layer">
    <span>${esc(layer.no)}</span>
    <p class="eyebrow">${esc(layer.en)}</p>
    <h3>${esc(layer.zh)}</h3>
    <strong>${esc(layer.title)}</strong>
    <p>${esc(layer.text)}</p>
  </article>`).join("");
}

function renderDerivations() {
  const wrap = $("#derivationMap");
  if (!wrap) return;
  const rows = [];
  for (const group of ARCH_DERIVATIONS) {
    if (group.from === "sour") continue;
    const from = FAM_BY_ID[group.from];
    if (!from) continue;
    for (const edge of group.branches) {
      const to = FAM_BY_ID[edge.to];
      if (!to) continue;
      rows.push(`<tr>
        <td><span class="derivation-root-tag">${esc(from.zh)}</span><small>${esc(from.en)}</small></td>
        <td><b>${esc(edge.op)}</b><p>${esc(edge.note)}</p></td>
        <td><b>${esc(to.zh)}</b><small>${esc(to.en)}</small></td>
        <td><em class="derivation-verdict ${edge.verdict.includes("新") ? "is-new" : "is-same"}">${esc(edge.verdict)}</em></td>
        <td>${BY_ID[edge.target] ? `<a class="derivation-example" href="#recipe/${esc(edge.target)}" data-open="${esc(edge.target)}">${esc(BY_ID[edge.target].zh)} →</a>` : "—"}</td>
      </tr>`);
    }
  }
  wrap.innerHTML = `<div class="derivation-other-head"><p class="eyebrow">OTHER MOTHERS / 其他母结构</p><p>酸酒树之外的 6 个母结构，按同一套“操作 → 结果”规则展开。</p></div>
    <div class="derivation-table-wrap"><table class="derivation-table">
      <thead><tr><th>母结构</th><th>改了什么</th><th>得到</th><th>判断</th><th>例子</th></tr></thead>
      <tbody>${rows.join("")}</tbody>
    </table></div>`;
}

const ARCH_NODE_POS = {
  "duo": [58, 300], "old-fashioned": [58, 68], "punch": [58, 520],
  "sour": [292, 300], "highball": [292, 500], "julep": [522, 300],
  "aperitivo": [522, 68], "tiki": [522, 520],
  "flip": [752, 170], "collins": [752, 390], "daisy": [752, 42],
  "coffee": [900, 160], "blended": [900, 520], "hot": [900, 300], "low-no": [900, 420]
};

function archKind(op) {
  if (/去酸|两|2 次|两次/.test(op)) return "multi";
  if (/主体|金酒|威士忌|朗姆|基酒/.test(op)) return "base";
  if (/苏打|气泡|起泡|稀释|冰/.test(op)) return "dilution";
  if (/蛋|奶油|质地|碎冰|搅打/.test(op)) return "texture";
  if (/甜|酸|利口|糖/.test(op)) return "balance";
  return "other";
}

function archEdgeList() {
  const list = [];
  for (const group of ARCH_DERIVATIONS) {
    for (const edge of group.branches) list.push({ ...edge, from: group.from });
  }
  return list;
}

function focusArchNode(id) {
  const node = $(".arch-net-node[data-arch-node=\"" + CSS.escape(id) + "\"]");
  if (!node) return;
  const edges = archEdgeList();
  const incoming = edges.filter((e) => e.to === id);
  const outgoing = edges.filter((e) => e.from === id);
  $$(".arch-net-node").forEach((n) => n.classList.toggle("is-focus", n === node));
  $$(".arch-net-edge").forEach((e) => e.classList.toggle("is-hot", e.dataset.from === id || e.dataset.to === id));
  $$(".arch-net-edge-label").forEach((e) => e.classList.toggle("is-hot", e.dataset.from === id || e.dataset.to === id));
  const fam = FAM_BY_ID[id];
  const detail = $("#archNetworkDetail");
  if (!fam || !detail) return;
  const edgeHtml = (list, label) => list.length ? `<div class="arch-net-detail-group"><span>${label}</span>${list.map((e) => {
    const other = label === "从这里出发" ? e.to : e.from;
    const of = FAM_BY_ID[other];
    const example = BY_ID[e.target];
    return `<button type="button" class="arch-net-op" data-arch-jump="${esc(other)}"><b>${esc(e.op)}</b><small>${esc(of?.zh || other)}${example ? ` · 例：${esc(example.zh)}` : ""}</small></button>`;
  }).join("")}</div>` : "";
  detail.innerHTML = `<p class="eyebrow">SELECTED STRUCTURE</p><h4>${esc(fam.zh)}</h4><p class="arch-net-en">${esc(fam.en)} · ${esc(fam.ratio)}</p><p>${esc(fam.tagline)}</p><p class="arch-net-idea">${esc(fam.idea)}</p>
    ${edgeHtml(incoming, "到这里来")}${edgeHtml(outgoing, "从这里出发")}
    <button type="button" class="arch-net-filter" data-family-filter="${esc(fam.id)}">查看这类酒 →</button>`;
}

function renderDerivationTree() {
  const wrap = $("#derivationTree");
  if (!wrap) return;
  const edges = archEdgeList();
  const nodeW = 138, nodeH = 44;
  const pos = (id) => ARCH_NODE_POS[id] || [500, 300];
  const edgeSvg = edges.map((e, i) => {
    const [x1, y1] = pos(e.from), [x2, y2] = pos(e.to);
    const kind = archKind(e.op);
    if (e.from === e.to) {
      const x = x1 + nodeW / 2, y = y1 - 4;
      return `<path class="arch-net-edge edge-${esc(kind)}" data-from="${esc(e.from)}" data-to="${esc(e.to)}" d="M${x} ${y} C${x + 38} ${y - 45} ${x - 38} ${y - 45} ${x} ${y}"><title>${esc(e.op)}</title></path>`;
    }
    const sx = x1 + nodeW, sy = y1 + nodeH / 2, tx = x2, ty = y2 + nodeH / 2;
    const mx = (sx + tx) / 2;
    return `<path class="arch-net-edge edge-${esc(kind)}" data-from="${esc(e.from)}" data-to="${esc(e.to)}" d="M${sx} ${sy} C${mx} ${sy} ${mx} ${ty} ${tx} ${ty}" marker-end="url(#arch-net-arrow-${kind})"><title>${esc(e.op)} → ${esc(FAM_BY_ID[e.to]?.zh || e.to)}</title></path>`;
  }).join("");
  const nodes = Object.entries(ARCH_NODE_POS).map(([id, [x, y]]) => {
    const f = FAM_BY_ID[id];
    if (!f) return "";
    return `<g class="arch-net-node" data-arch-node="${esc(id)}" tabindex="0" role="button" aria-label="${esc(f.zh)}">
      <rect x="${x}" y="${y}" width="${nodeW}" height="${nodeH}" rx="5"></rect>
      <text class="arch-net-node-title" x="${x + 11}" y="${y + 20}">${esc(f.zh)}</text>
      <text class="arch-net-node-sub" x="${x + 11}" y="${y + 34}">${esc(f.en)} · ${(edges.filter((e) => e.from === id || e.to === id).length)} 条</text>
    </g>`;
  }).join("");
  const kinds = [
    ["base", "换主体"], ["balance", "换甜 / 换酸"], ["dilution", "加稀释 / 气泡"],
    ["texture", "换质地 / 温度"], ["multi", "2 次以上操作"]
  ];
  wrap.innerHTML = `<div class="derivation-tree-head"><span>STRUCTURE NETWORK / 结构网络</span><p>节点是结构，连线是“改了什么”。点击节点查看它的来路与去向；再次点击空白处回到全局。</p></div>
    <div class="arch-network-layout">
      <div class="arch-network-stage"><svg class="arch-network-svg" viewBox="0 0 1070 620" role="img" aria-label="鸡尾酒架构演化网络">
        <defs>${kinds.map(([k]) => `<marker id="arch-net-arrow-${k}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="arch-arrow-${k}"></path></marker>`).join("")}</defs>
        <g class="arch-net-edges">${edgeSvg}</g><g class="arch-net-nodes">${nodes}</g>
      </svg></div>
      <aside class="arch-network-detail" id="archNetworkDetail"><p class="eyebrow">SELECTED STRUCTURE</p><h4>点一个结构</h4><p>看它从哪些骨架来、又能分出哪些新类别。连线颜色代表改动的变量类型。</p><div class="arch-network-legend">${kinds.map(([k, label]) => `<span class="arch-legend-${k}"><i></i>${label}</span>`).join("")}</div></aside>
    </div>`;
  $$(".arch-net-node", wrap).forEach((node) => {
    node.addEventListener("click", (e) => { e.stopPropagation(); focusArchNode(node.dataset.archNode); });
    node.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); focusArchNode(node.dataset.archNode); } });
  });
  focusArchNode("sour");
  wrap.addEventListener("click", (e) => {
    if (e.target.closest(".arch-net-node")) return;
    const jump = e.target.closest("[data-arch-jump]");
    if (jump) { focusArchNode(jump.dataset.archJump); return; }
    if (e.target.closest(".arch-net-filter")) return;
    if (e.target === wrap || e.target.classList.contains("arch-network-stage") || (e.target.closest(".arch-network-svg") && !e.target.closest(".arch-net-node"))) {
      $$(".arch-net-node").forEach((n) => n.classList.remove("is-focus"));
      $$(".arch-net-edge").forEach((n) => n.classList.remove("is-hot"));
      const d = $("#archNetworkDetail");
      if (d) d.innerHTML = `<p class="eyebrow">SELECTED STRUCTURE</p><h4>点一个结构</h4><p>看它从哪些骨架来、又能分出哪些新类别。连线颜色代表改动的变量类型。</p>`;
    }
  });
}

function renderLineage() {
  const wrap = $("#lineageMap");
  if (!wrap) return;
  wrap.innerHTML = ARCH_LINEAGE.map((lane) => `<section class="lineage-lane">
    <header><h4>${esc(lane.zh)}</h4><span>${esc(lane.en)}</span><p>${esc(lane.note)}</p></header>
    <div class="lineage-chain">${lane.nodes.map((node, i) => {
      const c = BY_ID[node.id];
      if (!c) return "";
      return `${i ? `<i class="lineage-arrow" aria-hidden="true">→</i>` : ""}
        <a class="lineage-node" href="#recipe/${esc(c.id)}" data-open="${esc(c.id)}" style="--base-color:${baseColor(c)}">
          <span>${esc(node.year)}</span><b>${esc(c.zh)}</b><small>${esc(c.en)}</small><p>${esc(node.note)}</p>
        </a>`;
    }).join("")}</div>
  </section>`).join("");
}

function renderFamilies() {
  const grid = $("#familyGrid");
  if (!grid) return;
  const counts = countBy(ALL, "fam");
  grid.innerHTML = `<div class="arch-table-wrap"><table class="arch-table">
    <thead><tr><th>家族</th><th>核心比例</th><th>结构</th><th>判断</th><th>代表酒款</th><th>最容易翻车</th></tr></thead>
    <tbody>${FAMILIES.map((f) => {
      const examples = f.examples.filter((id) => BY_ID[id]).slice(0, 3);
      return `<tr>
        <td><b>${esc(f.zh)}</b><small>${esc(f.en)} · ${counts[f.id] || 0} 杯</small></td>
        <td><code>${esc(f.ratio)}</code></td>
        <td>${f.formula.map(([k, v]) => `<span class="arch-formula-pill">${esc(k)} <b>${esc(v)}</b></span>`).join("")}</td>
        <td>${esc(f.idea)}</td>
        <td>${examples.map((id) => openLink(id)).join(" ")}</td>
        <td class="arch-trap">${esc(f.trap)}</td>
      </tr>`;
    }).join("")}</tbody>
  </table></div>`;
}

function renderBases() {
  const grid = $("#baseGrid");
  if (!grid) return;
  grid.innerHTML = BASES.map((b) => {
    const count = ALL.filter((c) => c.base === b.id).length;
    const first = b.first.filter((id) => BY_ID[id]).slice(0, 4);
    return `
      <article class="base-card" style="--base-color:${b.color}">
        <div class="base-head">
          <span class="base-no">${b.no}</span>
          <div class="base-title">
            <p class="base-en">${esc(b.en)}</p>
            <h3>${esc(b.zh)}</h3>
            <p class="base-tag">${esc(b.tag)}</p>
          </div>
          <span class="base-abv">${esc(b.abv)}</span>
        </div>
        <p class="base-profile">${esc(b.profile)}</p>
        <div class="base-styles">${b.styles.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
        <div class="base-detail">
          <div><span class="detail-label">常用瓶</span><ul>${b.bottles.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div><span class="detail-label">在结构里</span><p>${esc(b.role)}</p><p class="base-avoid"><b>注意：</b>${esc(b.avoid)}</p></div>
        </div>
        <div class="base-examples">
          <span>从这几杯开始</span>
          ${first.map((id) => openLink(id)).join("")}
        </div>
        <button class="base-page-action" type="button" data-spirit-page="${esc(b.id)}">
          打开基酒详解 <svg class="icon"><use href="#i-arrow"></use></svg>
        </button>
        <button class="base-action" type="button" data-base-filter="${esc(b.id)}">
          查看 ${count} 杯 <svg class="icon"><use href="#i-arrow"></use></svg>
        </button>
      </article>`;
  }).join("");
}

function renderMods() {
  const grid = $("#modGrid");
  if (!grid) return;
  grid.innerHTML = MODGROUPS.map((g, i) => {
    const count = ALL.filter((c) => c.mods.includes(g.id)).length;
    const examples = g.examples.filter((id) => BY_ID[id]).slice(0, 4);
    return `
      <article class="mod-card" style="--mod-color:${g.color}">
        <div class="mod-head">
          <span class="mod-no">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <p class="mod-en">${esc(g.en)}</p>
            <h3>${esc(g.zh)}</h3>
          </div>
          <span class="mod-role">${esc(g.role)}</span>
        </div>
        <p class="mod-intro">${esc(g.intro)}</p>
        <div class="mod-items">
          ${g.items.map((it) => `
            <div class="mod-item">
              <div class="mod-item-head"><b>${esc(it.n)}</b><span>${esc(it.dose)}</span></div>
              <p class="mod-example">${esc(it.ex)}</p>
              <p class="mod-use">${esc(it.use)}</p>
              <p class="mod-tip"><svg class="icon"><use href="#i-info"></use></svg>${esc(it.tip)}</p>
            </div>`).join("")}
        </div>
        <div class="mod-foot">
          <div class="mod-examples"><span>用于</span>${examples.map((id) => openLink(id)).join("")}</div>
          <button type="button" class="mod-action" data-mod-filter="${esc(g.id)}">筛选 ${count} 杯 <svg class="icon"><use href="#i-arrow"></use></svg></button>
        </div>
      </article>`;
  }).join("");
}

function renderTechniques() {
  const grid = $("#techniqueGrid");
  if (!grid) return;
  grid.innerHTML = TECHNIQUES.map((t) => `
    <article class="technique-card">
      <div class="tech-head">
        <span class="tech-no">${t.no}</span>
        <div><h3>${esc(t.zh)}</h3><p>${esc(t.en)}</p></div>
      </div>
      <p class="tech-when">${esc(t.when)}</p>
      <ol class="tech-steps">${t.how.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      <div class="tech-meta"><span>稀释</span><b>${esc(t.dilution)}</b></div>
      <p class="tech-mistakes"><b>常见错误</b>${esc(t.mistakes)}</p>
    </article>`).join("");
}

function renderSyrups() {
  const grid = $("#syrupGrid");
  if (!grid) return;
  grid.innerHTML = SYRUPS.map((s) => `
    <article class="syrup-card">
      <div class="syrup-head"><h3>${esc(s.n)}</h3><span>${esc(s.ratio)}</span></div>
      <p class="syrup-yield">${esc(s.yield)} · ${esc(s.keep)}</p>
      <p>${esc(s.method)}</p>
      <p class="syrup-use"><b>用于</b>${esc(s.use)}</p>
    </article>`).join("");
}

function renderFaults() {
  const body = $("#faultsBody");
  if (!body) return;
  body.innerHTML = FAULTS.map((row) => `
    <tr><td><b>${esc(row[0])}</b></td><td>${esc(row[1])}</td><td>${esc(row[2])}</td><td>${esc(row[3])}</td></tr>`).join("");
}

function renderGlasses() {
  const grid = $("#glassGrid");
  if (!grid) return;
  grid.innerHTML = GLASSES.map((g) => `
    <article class="glass-card">
      <div class="glass-top"><h4>${esc(g.n)}</h4><span>${esc(g.ml)} ml</span></div>
      <p class="glass-en">${esc(g.en)}</p>
      <p class="glass-use">${esc(g.use)}</p>
      <p class="glass-tip">${esc(g.tip)}</p>
    </article>`).join("");
}

function renderConversions() {
  const body = $("#conversionBody");
  if (!body) return;
  body.innerHTML = CONVERSIONS.map((row) => `<tr><td><b>${esc(row[0])}</b></td><td>${esc(row[1])}</td><td>${esc(row[2])}</td></tr>`).join("");
}

function renderStarter() {
  const grid = $("#starterGrid");
  if (!grid) return;
  grid.innerHTML = STARTER.map((g, i) => `
    <article class="starter-card">
      <span class="starter-no">${String(i + 1).padStart(2, "0")}</span>
      <h4>${esc(g.group)}</h4>
      <ul>${g.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </article>`).join("");
}

function renderMenu() {
  const wrap = $("#menuGuide");
  if (!wrap) return;
  wrap.innerHTML = MENU_GUIDE.map((row) => `
    <div class="menu-row">
      <div class="menu-name"><b>${esc(row.n)}</b><span>${esc(row.ratio)}</span></div>
      <div class="menu-ex">${esc(row.ex)}</div>
      <p>${esc(row.why)}</p>
    </div>`).join("");
}

function renderGlossary() {
  const wrap = $("#glossary");
  if (!wrap) return;
  wrap.innerHTML = GLOSSARY.map(([term, def]) => `
    <div class="glossary-item"><b>${esc(term)}</b><p>${esc(def)}</p></div>`).join("");
}

function renderBrands() {
  const body = $("#brandBody");
  if (!body) return;
  body.innerHTML = BRANDS.map((row) => `
    <tr>
      <td><b>${esc(row.cat)}</b></td>
      <td>${esc(row.type)}</td>
      <td class="brand-list">${esc(row.brands)}</td>
      <td>${esc(row.use)}</td>
      <td>${esc(row.note)}</td>
    </tr>`).join("");
}

function renderMaterials() {
  const body = $("#materialBody");
  if (!body) return;
  body.innerHTML = MATERIAL_LIBRARY.map((row) => `
    <tr data-material-row data-cat="${esc(row.category)}" data-search="${esc((row.name + " " + row.category + " " + row.short + " " + row.use).toLowerCase())}">
      <td><span class="material-cat">${esc(row.category)}</span></td>
      <td><b>${esc(row.name)}</b><small class="material-count">${row.count} 次</small></td>
      <td>${esc(row.short)}</td>
      <td>${esc(row.use)}</td>
      <td class="brand-list">${esc(row.brand)}</td>
    </tr>`).join("");
  const stat = $("#materialStat");
  if (stat) stat.textContent = `${MATERIAL_LIBRARY.length} 种材料 · ${MATERIAL_USES} 次配方引用`;
}

function setupMaterialSearch() {
  const input = $("#materialSearch");
  if (!input) return;
  const rows = () => $$("[data-material-row]", $("#materialBody"));
  const stat = $("#materialStat");
  const cats = $("#materialCats");
  let activeCat = "全部";
  const counts = new Map();
  for (const row of MATERIAL_LIBRARY) counts.set(row.category, (counts.get(row.category) || 0) + 1);
  if (cats) {
    cats.innerHTML = ["全部", ...MATERIAL_CATEGORY_ORDER.filter((c) => counts.has(c))]
      .map((cat) => `<button type="button" class="material-cat-chip${cat === "全部" ? " is-active" : ""}" data-material-cat="${esc(cat)}">${esc(cat)}<span>${cat === "全部" ? MATERIAL_LIBRARY.length : counts.get(cat)}</span></button>`).join("");
    cats.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-material-cat]");
      if (!btn) return;
      activeCat = btn.dataset.materialCat;
      $$("[data-material-cat]", cats).forEach((x) => x.classList.toggle("is-active", x === btn));
      apply();
    });
  }
  const apply = () => {
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    for (const row of rows()) {
      const show = (activeCat === "全部" || row.dataset.cat === activeCat) && (!q || row.dataset.search.includes(q));
      row.hidden = !show;
      if (show) visible++;
    }
    if (stat) stat.textContent = (q || activeCat !== "全部")
      ? `${visible} / ${MATERIAL_LIBRARY.length} 种材料`
      : `${MATERIAL_LIBRARY.length} 种材料 · ${MATERIAL_USES} 次配方引用`;
  };
  input.addEventListener("input", apply);
}

function renderPantry() {
  const modal = $("#pantryModal");
  if (!modal) return;
  const q = state.pantryQuery.trim().toLowerCase();
  const selected = $("#pantrySelected");
  const groups = $("#pantryGroups");
  const count = $("#pantryResultCount");
  const apply = $("#pantryApply");
  const modeInc = $("#pantryModeInclude");
  const modeExc = $("#pantryModeExclude");
  if (modeInc) modeInc.classList.toggle("is-active", state.pantryMode === "include");
  if (modeExc) modeExc.classList.toggle("is-active", state.pantryMode === "exclude");

  const chips = [];
  for (const id of state.pantryInclude) {
    const item = PANTRY_BY_ID[id];
    if (item) chips.push(`<span class="pantry-chip is-include">有 · ${esc(item.zh)} <button type="button" data-pantry-remove="${esc(id)}" aria-label="移除 ${esc(item.zh)}">×</button></span>`);
  }
  for (const id of state.pantryExclude) {
    const item = PANTRY_BY_ID[id];
    if (item) chips.push(`<span class="pantry-chip is-exclude">无 · ${esc(item.zh)} <button type="button" data-pantry-remove="${esc(id)}" aria-label="移除 ${esc(item.zh)}">×</button></span>`);
  }
  if (selected) selected.innerHTML = chips.join("");

  const groupsHtml = [];
  for (const cat of PANTRY_CATS) {
    const items = PANTRY_INGREDIENTS.filter((item) => item.cat === cat && (!q || `${item.zh} ${item.aliases.join(" ")}`.toLowerCase().includes(q)) && (pantryCountFor(item.id) > 0 || pantryStatus(item.id)));
    if (!items.length) continue;
    groupsHtml.push(`<div class="pantry-group"><h4>${esc(cat)}</h4><div class="pantry-items">${items.map((item) => {
      const status = pantryStatus(item.id);
      return `<button type="button" class="pantry-item ${status ? "is-" + status : ""}" data-pantry-item="${esc(item.id)}">${esc(item.zh)} <b>${pantryCountFor(item.id)}</b></button>`;
    }).join("")}</div></div>`);
  }
  if (groups) groups.innerHTML = groupsHtml.length ? groupsHtml.join("") : `<p class="pantry-empty">没有匹配的材料。试试“青柠”“蜂蜜”或“金酒”。</p>`;
  const n = currentList().length;
  if (count) count.textContent = String(n);
  if (apply) apply.disabled = false;
  const btn = $("#pantryBtn");
  if (btn) {
    const total = state.pantryInclude.length + state.pantryExclude.length;
    const badge = $("#pantryCount");
    if (badge) badge.textContent = String(total);
    btn.classList.toggle("has-pantry", total > 0);
  }
}

function openPantry() {
  const modal = $("#pantryModal");
  if (!modal) return;
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.classList.add("is-open"));
  renderPantry();
  const search = $("#pantrySearch");
  if (search) setTimeout(() => search.focus(), 80);
}

function closePantry(apply = true) {
  const modal = $("#pantryModal");
  if (!modal || modal.hidden) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  window.setTimeout(() => { modal.hidden = true; }, 240);
  if (apply) render();
}

function egoGraphSVG(c) {
  const node = GRAPH && GRAPH.byId[c.id];
  if (!node) return "";
  const neighbors = [...node.adj].map((idx) => GRAPH.nodes[idx]?.c).filter(Boolean).slice(0, 6);
  const variants = (c.v || []).slice(0, 6).map(normalizeVariant);
  const cx = 180, cy = 130;
  const neighborNodes = neighbors.map((n, i) => {
    const angle = (-Math.PI / 2) + (i / Math.max(1, neighbors.length)) * Math.PI * 2;
    return { c: n, x: cx + Math.cos(angle) * 78, y: cy + Math.sin(angle) * 74 };
  });
  const variantNodes = variants.map((v, i) => {
    const angle = (-Math.PI / 2) + ((i + .5) / Math.max(1, variants.length)) * Math.PI * 2;
    return { v, x: cx + Math.cos(angle) * 116, y: cy + Math.sin(angle) * 108 };
  });
  const neighborEdges = neighborNodes.map((n) => {
    const type = GRAPH.edgeTypes.get(`${c.id}|${n.c.id}`) || "base";
    return `<line class="modal-rel-edge" data-relation="${esc(type)}" x1="${cx}" y1="${cy}" x2="${n.x.toFixed(1)}" y2="${n.y.toFixed(1)}"></line>`;
  }).join("");
  const variantEdges = variantNodes.map((v) => `<line class="modal-variant-edge" x1="${cx}" y1="${cy}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}"></line>`).join("");
  const neighborHtml = neighborNodes.map((n) => `<a href="#recipe/${esc(n.c.id)}" data-open="${esc(n.c.id)}" class="modal-graph-node">
    <title>${esc(n.c.zh)}</title>
    <circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="6.5" fill="${baseColor(n.c)}"></circle>
    <text x="${n.x.toFixed(1)}" y="${(n.y + 17).toFixed(1)}" text-anchor="middle">${esc(n.c.zh)}</text>
  </a>`).join("");
  const variantHtml = variantNodes.map(({ v, x, y }) => `<g class="modal-variant-node" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})">
    <title>${esc(v.zh)} · ${esc(c.zh)} 的变体</title>
    <polygon points="0,-5 5,0 0,5 -5,0" fill="var(--paper)" stroke="${baseColor(c)}" stroke-width="1.5"></polygon>
    <text x="0" y="-9" text-anchor="middle">${esc(v.zh)}</text>
  </g>`).join("");
  return `<div class="modal-graph-wrap">
    <svg class="modal-graph-svg" viewBox="0 0 360 260" role="img" aria-label="${esc(c.zh)} 的关系图谱">
      ${neighborEdges}${variantEdges}
      <circle cx="${cx}" cy="${cy}" r="9" fill="${baseColor(c)}" stroke="var(--paper)" stroke-width="2"></circle>
      <text class="modal-graph-center-label" x="${cx}" y="${cy + 24}" text-anchor="middle">${esc(c.zh)}</text>
      ${neighborHtml}${variantHtml}
    </svg>
    <div class="modal-graph-legend"><span><i class="dot"></i>邻接主酒</span><span><i class="diamond"></i>变体</span></div>
  </div>`;
}

function renderTopics() {
  const wrap = $("#topicGrid");
  if (!wrap) return;
  const acidOf = (c) => c.mods.includes("citrus") ? "高" : c.flavor.some((f) => /酸甜|酸/.test(f)) ? "中" : "低";
  const sweetOf = (c) => c.mods.includes("syrup") ? "中" : c.mods.includes("liqueur") || c.mods.includes("cream") ? "低–中" : "低";
  const tempOf = (c) => c.fam === "hot" ? "热" : /搅打/.test(c.method) ? "冰沙" : "冷";
  const bubbleOf = (c) => c.ing.some(([name]) => /苏打|汤力|汤圆|起泡|香槟|Prosecco|Cava|可乐|姜啤|汽水/.test(name)) ? "有" : "—";
  wrap.innerHTML = TOPIC_SYSTEMS.map((topic) => {
    const columns = topic.columns || ["基酒", "结构", "酸", "甜", "酒感", "关键差异"];
    const rows = topic.rows.map((row) => {
      const c = BY_ID[row.id];
      if (!c) return "";
      const im = ibaMeta(c);
      const values = row.cells || [
        BASE_BY_ID[c.base]?.zh || "",
        FAM_BY_ID[c.fam]?.zh || "",
        acidOf(c),
        sweetOf(c),
        `酒感 ${c.strength}/5 · ${tempOf(c)}`,
        row.diff || ""
      ];
      return `<tr>
        <td><a class="topic-link" href="#recipe/${esc(c.id)}" data-open="${esc(c.id)}">${esc(c.zh)}${im ? `<em>IBA</em>` : ""}<small>${esc(c.en)}</small></a></td>
        ${values.map((value, i) => {
          const level = /高|有/.test(value) ? "is-high" : /低|—/.test(value) ? "is-low" : "";
          return `<td data-col="${esc(columns[i] || "")}" class="${i === values.length - 1 ? "topic-key-cell" : level}">${esc(value)}</td>`;
        }).join("")}
      </tr>`;
    }).join("");
    return `<article class="topic-card topic-system" id="topic-${esc(topic.id)}">
      <header class="topic-head">
        <span class="topic-no">${esc(topic.no)}</span>
        <div class="topic-title">
          <p class="eyebrow">${esc(topic.kicker)}</p>
          <h3>${esc(topic.zh)}</h3>
          <p>${esc(topic.en)}</p>
        </div>
        <p class="topic-question">${esc(topic.question)}</p>
      </header>
      <p class="topic-thesis">${esc(topic.thesis)}</p>
      <div class="topic-matrix-wrap">
        <table class="topic-matrix">
          <thead><tr><th>酒款</th>${columns.map((col) => `<th>${esc(col)}</th>`).join("")}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="topic-axis-note"><b>读法</b>${columns.map((col) => `<span>${esc(col)}</span>`).join("")}</div>
      <div class="topic-guide"><b>一句话选酒</b><p>${esc(topic.guide)}</p></div>
    </article>`;
  }).join("");
}

function renderKnowledge() {
  const wrap = $("#knowledgeGrid");
  if (!wrap) return;
  wrap.innerHTML = KNOWLEDGE.map((item) => `
    <article class="knowledge-card">
      <span class="knowledge-tag">${esc(item.tag)}</span>
      <h4>${esc(item.title)}</h4>
      <p>${esc(item.text)}</p>
      <small>${esc(item.tip)}</small>
    </article>`).join("");
}

let GRAPH = null;
const pairKey = (a, b) => a < b ? `${a}|${b}` : `${b}|${a}`;
const GRAPH_REL_BY_PAIR = new Map(GRAPH_RELATIONS.map(([a, b, type]) => [pairKey(a, b), type]));
const graphView = { base: "all", query: "", focus: null, zoom: 1, tx: 0, ty: 0 };

function buildGraph() {
  const nodes = ALL.map((c) => ({
    c,
    x: 0, y: 0, vx: 0, vy: 0,
    deg: 0,
    adj: new Set(),
    ing: new Set((c.ing || []).map((x) => x[0]))
  }));
  const bases = [...new Set(ALL.map((c) => c.base))];
  nodes.forEach((n, i) => {
    const bi = Math.max(0, bases.indexOf(n.c.base));
    const angle = (bi / bases.length) * Math.PI * 2 - Math.PI / 2;
    const ring = 195 + ((i * 37) % 85);
    n.x = 500 + Math.cos(angle) * ring + (((i * 71) % 78) - 39);
    n.y = 310 + Math.sin(angle) * ring * 0.72 + (((i * 43) % 58) - 29);
  });
  const baseCenters = Object.fromEntries(bases.map((id, i) => {
    const angle = (i / bases.length) * Math.PI * 2 - Math.PI / 2;
    return [id, { x: 500 + Math.cos(angle) * 235, y: 310 + Math.sin(angle) * 150 }];
  }));
  const nodeIndex = Object.fromEntries(nodes.map((n, i) => [n.c.id, i]));
  const edges = [];
  const seen = new Set();
  const edgeTypes = new Map();
  const addEdge = (i, j, type) => {
    const key = i < j ? `${i}-${j}` : `${j}-${i}`;
    if (seen.has(key)) return;
    seen.add(key);
    edges.push([i, j, type]);
    edgeTypes.set(`${nodes[i].c.id}|${nodes[j].c.id}`, type);
    edgeTypes.set(`${nodes[j].c.id}|${nodes[i].c.id}`, type);
    nodes[i].adj.add(j);
    nodes[j].adj.add(i);
    nodes[i].deg++;
    nodes[j].deg++;
  };

  const generic = new Set(["冰", "水", "苏打水", "盐", "糖", "单糖浆", "糖浆", "薄荷", "柠檬皮", "橙皮", "青柠角", "柠檬片", "樱桃", "菠萝角", "肉豆蔻", "丁香", "肉桂"]);
  const relationFor = (a, b) => {
    const explicit = GRAPH_REL_BY_PAIR.get(pairKey(a.c.id, b.c.id));
    if (explicit) return explicit;
    const sharedMods = a.c.mods.filter((m) => b.c.mods.includes(m)).length;
    const sharedKey = [...a.ing].filter((x) => b.ing.has(x) && !generic.has(x)).length;
    if (a.c.base === b.c.base && a.c.fam === b.c.fam && (sharedKey >= 2 || sharedMods >= 2)) return "variant";
    if (a.c.base === b.c.base && (sharedKey >= 2 || sharedMods >= 2)) return "base";
    if (a.c.fam === b.c.fam && (sharedKey >= 2 || sharedMods >= 2)) return "family";
    if (sharedKey >= 2 && sharedMods >= 1) return "modifier";
    return null;
  };

  for (const [aId, bId, type] of GRAPH_RELATIONS) {
    if (nodeIndex[aId] === undefined || nodeIndex[bId] === undefined) continue;
    addEdge(nodeIndex[aId], nodeIndex[bId], type);
  }

  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    const candidates = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const b = nodes[j];
      const type = relationFor(a, b);
      if (!type) continue;
      const sharedMods = a.c.mods.filter((m) => b.c.mods.includes(m)).length;
      const sharedKey = [...a.ing].filter((x) => b.ing.has(x) && !generic.has(x)).length;
      const weight = { variant: 6, base: 4, family: 3, modifier: 2, lineage: 8 }[type] || 1;
      candidates.push([weight + Math.min(3, sharedKey) * .7 + sharedMods * .45, j, type]);
    }
    candidates.sort((p, q) => q[0] - p[0]);
    for (const [, j, type] of candidates.slice(0, 2)) addEdge(i, j, type);
  }
  for (let iter = 0; iter < 150; iter++) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        let dx = b.x - a.x, dy = b.y - a.y;
        let dist = Math.hypot(dx, dy) || 0.1;
        const push = Math.min(4, 900 / (dist * dist));
        dx /= dist; dy /= dist;
        a.vx -= dx * push; a.vy -= dy * push;
        b.vx += dx * push; b.vy += dy * push;
      }
    }
    for (const [i, j] of edges) {
      const a = nodes[i], b = nodes[j];
      let dx = b.x - a.x, dy = b.y - a.y;
      let dist = Math.hypot(dx, dy) || 0.1;
      const pull = (dist - 52) * .012;
      dx /= dist; dy /= dist;
      a.vx += dx * pull; a.vy += dy * pull;
      b.vx -= dx * pull; b.vy -= dy * pull;
    }
    for (const n of nodes) {
      const center = baseCenters[n.c.base] || { x: 500, y: 310 };
      n.vx += (center.x - n.x) * .0052;
      n.vy += (center.y - n.y) * .006;
      n.vx += (500 - n.x) * .001;
      n.vy += (310 - n.y) * .0012;
      n.x = Math.max(40, Math.min(960, n.x + n.vx));
      n.y = Math.max(42, Math.min(578, n.y + n.vy));
      n.vx *= .76; n.vy *= .76;
    }
  }
  const labels = new Set([...nodes].sort((a, b) => b.deg - a.deg).slice(0, 24).map((n) => n.c.id));
  const byId = Object.fromEntries(nodes.map((n) => [n.c.id, n]));
  return { nodes, edges, labels, byId, edgeTypes };
}

function renderGraph() {
  const svg = $("#relationGraph");
  if (!svg) return;
  if (!GRAPH) GRAPH = buildGraph();
  const { nodes, edges, labels } = GRAPH;
  const edgeHtml = edges.map(([i, j, type]) => {
    const a = nodes[i], b = nodes[j];
    const mx = (a.x + b.x) / 2 + (b.y - a.y) * 0.09;
    const my = (a.y + b.y) / 2 - (b.x - a.x) * 0.09;
    return `<path class="graph-edge" data-a="${esc(a.c.id)}" data-b="${esc(b.c.id)}" data-relation="${esc(type)}" d="M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}"></path>`;
  }).join("");
  const nodeHtml = nodes.map((n) => {
    const r = 4.4 + Math.min(7, n.deg) * .38;
    const color = baseColor(n.c);
    return `<g class="graph-node${labels.has(n.c.id) ? " has-label" : ""}" data-graph-id="${esc(n.c.id)}" data-base="${esc(n.c.base)}" data-search="${esc((n.c.zh + " " + n.c.en + " " + aliasesFor(n.c).join(" ")).toLowerCase())}" transform="translate(${n.x.toFixed(1)} ${n.y.toFixed(1)})">
      <circle r="${r.toFixed(1)}" fill="${color}"></circle>
      <text x="0" y="${(-r - 4).toFixed(1)}" text-anchor="middle">${esc(n.c.zh)}</text>
    </g>`;
  }).join("");
  svg.innerHTML = `<g class="graph-viewport" id="graphViewport"><g class="graph-edges">${edgeHtml}</g><g class="graph-nodes">${nodeHtml}</g><g class="graph-variant-layer" id="graphVariantLayer"></g></g>`;

  const legend = $("#graphLegend");
  if (legend) {
    const counts = {};
    for (const n of nodes) counts[n.c.base] = (counts[n.c.base] || 0) + 1;
    legend.innerHTML = `<button type="button" class="graph-legend-item is-active" data-graph-base="all">全部 ${nodes.length}</button>` +
      BASES.filter((b) => counts[b.id]).map((b) => `<button type="button" class="graph-legend-item" data-graph-base="${esc(b.id)}"><i style="background:${esc(b.color)}"></i>${esc(b.zh)} ${counts[b.id]}</button>`).join("");
  }
  const statNodes = $("#graphStatNodes");
  const statEdges = $("#graphStatEdges");
  if (statNodes) statNodes.textContent = String(nodes.length);
  if (statEdges) statEdges.textContent = String(edges.length);
  renderMinimap();
  applyGraphFilter();
  renderGraphDetail(graphView.focus);
}

function applyGraphFilter() {
  const svg = $("#relationGraph");
  if (!svg || !GRAPH) return;
  const q = graphView.query.trim().toLowerCase();
  const focus = graphView.focus && GRAPH.byId[graphView.focus];
  const neighbors = focus ? new Set([...focus.adj].map((idx) => GRAPH.nodes[idx].c.id)) : null;
  const visible = new Set();
  $$(".graph-node", svg).forEach((g) => {
    const id = g.dataset.graphId;
    const matchBase = graphView.base === "all" || g.dataset.base === graphView.base;
    const matchQuery = !q || g.dataset.search.includes(q);
    const matchFocus = !focus || id === graphView.focus || neighbors.has(id);
    const ok = matchBase && matchQuery && matchFocus;
    g.classList.toggle("is-dim", !ok);
    g.classList.toggle("is-match", Boolean(q) && ok);
    g.classList.toggle("show-label", Boolean(focus) && matchFocus);
    g.classList.toggle("is-focus", id === graphView.focus);
    if (ok) visible.add(id);
  });
  $$(".graph-edge", svg).forEach((line) => {
    const ok = visible.has(line.dataset.a) && visible.has(line.dataset.b);
    line.classList.toggle("is-dim", !ok);
    const hot = Boolean(focus) && (line.dataset.a === graphView.focus || line.dataset.b === graphView.focus);
    line.classList.toggle("is-hot", hot);
  });
}

function relationReason(a, b) {
  const type = GRAPH && GRAPH.edgeTypes.get(`${a.id}|${b.id}`);
  const reasons = [];
  if (type) reasons.push(GRAPH_REL_TYPES[type] || "结构相近");
  const sharedMods = a.mods.filter((m) => b.mods.includes(m));
  if (sharedMods.length) reasons.push(sharedMods.slice(0, 2).map((m) => MOD_BY_ID[m]?.zh || m).join("/"));
  const bIng = new Set((b.ing || []).map((x) => x[0]));
  const sharedIng = (a.ing || []).map((x) => x[0]).filter((x) => bIng.has(x) && !["冰", "水", "糖", "盐"].includes(x));
  if (sharedIng.length) reasons.push("共享" + sharedIng.slice(0, 2).join("/"));
  return reasons.slice(0, 3).join(" · ") || "相近结构";
}

function renderGraphVariants(focusId) {
  const layer = $("#graphVariantLayer");
  if (!layer) return;
  const c = BY_ID[focusId];
  const node = GRAPH && GRAPH.byId[focusId];
  if (!c || !node || !c.v || !c.v.length) { layer.innerHTML = ""; return; }
  const total = c.v.length;
  const radius = total <= 3 ? 60 : total <= 5 ? 76 : 88;
  const start = -Math.PI / 2;
  const items = c.v.map((raw, i) => {
    const v = normalizeVariant(raw);
    const angle = start + (i / total) * Math.PI * 2;
    const x = node.x + Math.cos(angle) * radius;
    const y = node.y + Math.sin(angle) * radius;
    const mx = node.x + Math.cos(angle) * radius * .48;
    const my = node.y + Math.sin(angle) * radius * .48;
    return `<path class="graph-variant-edge" d="M${node.x.toFixed(1)} ${node.y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}"></path>
      <g class="graph-variant-node" data-variant-parent="${esc(c.id)}" data-variant-index="${i}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})">
        <title>${esc(v.zh)} · ${esc(c.zh)} 的变体</title>
        <polygon points="0,-5.5 5.5,0 0,5.5 -5.5,0" fill="var(--paper)" stroke="${baseColor(c)}" stroke-width="1.6"></polygon>
        <text x="0" y="${(-9).toFixed(1)}" text-anchor="middle">${esc(v.zh)}</text>
      </g>`;
  }).join("");
  layer.innerHTML = items;
}

function renderGraphDetail(id, variantIndex = null) {
  const wrap = $("#graphDetail");
  if (!wrap) return;
  const c = BY_ID[id];
  if (!c) {
    wrap.innerHTML = `<p class="eyebrow">SELECT A NODE</p><h4>点一个节点</h4><p>图谱会保留它和最近的邻居，其余节点变淡。点击右侧邻居可以继续跳转。</p><div class="graph-detail-empty"><span><b>${ALL.length}</b> 杯</span><span><b>${GRAPH ? GRAPH.edges.length : 0}</b> 条连接</span><span><b>${FAMILIES.length}</b> 类架构</span></div>`;
    return;
  }
  if (variantIndex !== null && c.v[variantIndex]) {
    const raw = c.v[variantIndex];
    const v = normalizeVariant(raw);
    const resolved = resolvedVariant(c, raw);
    const ing = resolved.ing || [];
    wrap.innerHTML = `
      <p class="eyebrow">SELECTED VARIANT</p>
      <h4>${esc(v.zh)}</h4>
      <div class="graph-detail-meta"><span>${esc(c.zh)} 的变体</span><span>${esc(v.en || "")}</span></div>
      <p>${esc(v.how || v.note || "")}</p>
      ${ing.length ? `<h5>INGREDIENTS / 材料</h5><div class="graph-variant-ing">${ing.map((x) => `<span>${esc(x[0])} <b>${esc(x[1] || "")}</b></span>`).join("")}</div>` : ""}
      <h5>METHOD / 做法</h5>
      <p class="graph-variant-method">${esc(resolved.method || c.method || "")} · ${esc(resolved.glass || c.glass || "")}</p>
      <button type="button" class="graph-open" data-graph-open="${esc(c.id)}">打开母配方 <svg class="icon"><use href="#i-arrow"></use></svg></button>`;
    return;
  }
  const node = GRAPH && GRAPH.byId[id];
  const neighbors = node ? [...node.adj].map((idx) => GRAPH.nodes[idx]?.c).filter(Boolean) : [];
  wrap.innerHTML = `
    <p class="eyebrow">SELECTED NODE</p>
    <h4>${esc(c.zh)}</h4>
    <div class="graph-detail-meta"><span>${esc(BASE_BY_ID[c.base]?.zh || "")}</span><span>${esc(FAM_BY_ID[c.fam]?.zh || "")}</span><span>${esc(c.method)}</span></div>
    <p>${esc(c.note || "")}</p>
    <h5>NEAREST / 最近连接</h5>
    <div class="graph-neighbors">${neighbors.map((n) => `<button type="button" class="graph-neighbor" data-graph-focus="${esc(n.id)}"><span>${esc(n.zh)}</span><small>${esc(relationReason(c, n))}</small></button>`).join("")}</div>
    ${c.v && c.v.length ? `<h5>VARIANTS / 变体</h5><div class="graph-variant-list">${c.v.map((raw, i) => { const v = normalizeVariant(raw); return `<button type="button" class="graph-variant-chip" data-graph-variant="${i}"><i></i>${esc(v.zh)}</button>`; }).join("")}</div>` : ""}
    <button type="button" class="graph-open" data-graph-open="${esc(c.id)}">打开配方 <svg class="icon"><use href="#i-arrow"></use></svg></button>`;
}

function selectGraphVariant(parentId, index) {
  if (!BY_ID[parentId] || !BY_ID[parentId].v[index]) return;
  graphView.focus = parentId;
  focusGraphOn(parentId);
  const back = $("#graphBack");
  if (back) back.hidden = false;
  applyGraphFilter();
  renderGraphVariants(parentId);
  renderGraphDetail(parentId, index);
}

function selectGraphNode(id) {
  graphView.focus = id && BY_ID[id] ? id : null;
  if (graphView.focus) {
    focusGraphOn(graphView.focus);
    const back = $("#graphBack");
    if (back) back.hidden = false;
  } else {
    resetGraphFocusView();
    const back = $("#graphBack");
    if (back) back.hidden = true;
  }
  applyGraphFilter();
  renderGraphVariants(graphView.focus);
  renderGraphDetail(graphView.focus);
}

function renderMinimap() {
  const svg = $("#graphMinimap");
  if (!svg || !GRAPH) return;
  const nodes = GRAPH.nodes.map((n) => `<circle class="mini-node" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="6" fill="${baseColor(n.c)}"></circle>`).join("");
  svg.innerHTML = `${nodes}<rect class="mini-viewport" id="miniViewport" x="0" y="0" width="1000" height="620"></rect>`;
  updateMinimapViewport();
}

function updateMinimapViewport() {
  const rect = $("#miniViewport");
  if (!rect) return;
  const x = Math.max(0, -graphView.tx / graphView.zoom);
  const y = Math.max(0, -graphView.ty / graphView.zoom);
  const w = Math.min(1000 - x, 1000 / graphView.zoom);
  const h = Math.min(620 - y, 620 / graphView.zoom);
  rect.setAttribute("x", x.toFixed(1));
  rect.setAttribute("y", y.toFixed(1));
  rect.setAttribute("width", Math.max(0, w).toFixed(1));
  rect.setAttribute("height", Math.max(0, h).toFixed(1));
}

function applyGraphTransform() {
  const viewport = $("#graphViewport");
  if (!viewport) return;
  viewport.setAttribute("transform", `translate(${graphView.tx.toFixed(1)} ${graphView.ty.toFixed(1)}) scale(${graphView.zoom.toFixed(3)})`);
  const label = $("#graphZoomLabel");
  if (label) label.textContent = `${Math.round(graphView.zoom * 100)}%`;
  updateMinimapViewport();
}

function focusGraphOn(id) {
  const node = GRAPH && GRAPH.byId[id];
  if (!node) return;
  const ids = [id, ...[...node.adj].map((idx) => GRAPH.nodes[idx]?.c.id).filter(Boolean)];
  const points = ids.map((rid) => GRAPH.byId[rid]).filter(Boolean);
  const avgX = points.reduce((sum, n) => sum + n.x, 0) / points.length;
  const avgY = points.reduce((sum, n) => sum + n.y, 0) / points.length;
  graphView.zoom = 2.15;
  graphView.tx = 500 - avgX * graphView.zoom;
  graphView.ty = 310 - avgY * graphView.zoom;
  applyGraphTransform();
}

function resetGraphFocusView() {
  resetGraphZoom();
}

function renderGraphSearch(query) {
  const box = $("#graphSearchResults");
  if (!box) return;
  const q = query.trim().toLowerCase();
  if (!q) { box.hidden = true; box.innerHTML = ""; return; }
  const matches = ALL.filter((c) => `${c.zh} ${c.en} ${aliasesFor(c).join(" ")}`.toLowerCase().includes(q)).slice(0, 9);
  box.innerHTML = matches.length
    ? matches.map((c) => `<button type="button" class="graph-search-item" data-graph-search-id="${esc(c.id)}" style="--base-color:${baseColor(c)}"><i></i><b>${esc(c.zh)}</b><small>${esc(c.en)} · ${esc(BASE_BY_ID[c.base]?.zh || "")}</small></button>`).join("")
    : `<div class="graph-search-empty">没有匹配的配方，试试中文名或英文名。</div>`;
  box.hidden = false;
}

function selectGraphSearch(id) {
  const c = BY_ID[id];
  if (!c) return;
  const input = $("#graphSearch");
  const box = $("#graphSearchResults");
  graphView.query = "";
  if (input) input.value = c.zh;
  if (box) { box.hidden = true; box.innerHTML = ""; }
  selectGraphNode(id);
  if (input) input.blur();
}

function setGraphZoom(next, cx = 500, cy = 310, animate = true) {
  const target = Math.max(0.75, Math.min(4, next));
  if (Math.abs(target - graphView.zoom) < 0.0001) return;
  const ratio = target / graphView.zoom;
  graphView.tx = cx - (cx - graphView.tx) * ratio;
  graphView.ty = cy - (cy - graphView.ty) * ratio;
  graphView.zoom = target;
  applyGraphTransform();
  const label = $("#graphZoomLabel");
  if (label) label.textContent = `${Math.round(target * 100)}%`;
}

function resetGraphZoom() {
  graphView.zoom = 1;
  graphView.tx = 0;
  graphView.ty = 0;
  applyGraphTransform();
  const label = $("#graphZoomLabel");
  if (label) label.textContent = "100%";
}

function graphPoint(e) {
  const svg = $("#relationGraph");
  if (!svg) return { x: 500, y: 310 };
  const rect = svg.getBoundingClientRect();
  return { x: (e.clientX - rect.left) / rect.width * 1000, y: (e.clientY - rect.top) / rect.height * 620 };
}

function setupGraph() {
  renderGraph();
  applyGraphTransform();
  const canvas = document.querySelector(".graph-canvas");
  const tip = $("#graphTip");
  if (!canvas) return;
  const showTip = (g, e) => {
    if (!tip) return;
    const c = BY_ID[g.dataset.graphId];
    if (!c) return;
    const rect = canvas.getBoundingClientRect();
    tip.innerHTML = `<b>${esc(c.zh)}</b><span>${esc(c.en)}</span><small>${esc(BASE_BY_ID[c.base]?.zh || "")} · ${esc(FAM_BY_ID[c.fam]?.zh || "")}</small>`;
    tip.hidden = false;
    tip.style.left = `${Math.min(rect.width - 160, Math.max(8, e.clientX - rect.left + 12))}px`;
    tip.style.top = `${Math.max(8, e.clientY - rect.top - 8)}px`;
  };
  canvas.addEventListener("mousemove", (e) => {
    const g = e.target.closest(".graph-node");
    if (!g) { if (tip) tip.hidden = true; return; }
    $$(".graph-node", canvas).forEach((n) => n.classList.toggle("is-hover", n === g));
    $$(".graph-edge", canvas).forEach((line) => line.classList.toggle("is-hot", line.dataset.a === g.dataset.graphId || line.dataset.b === g.dataset.graphId));
    showTip(g, e);
  });
  canvas.addEventListener("mouseleave", () => {
    if (tip) tip.hidden = true;
    $$(".graph-node", canvas).forEach((n) => n.classList.remove("is-hover"));
    $$(".graph-edge", canvas).forEach((line) => line.classList.remove("is-hot"));
  });
  let panning = false;
  let moved = false;
  let suppressClick = false;
  let lastX = 0;
  let lastY = 0;
  let pinchStart = null;
  let downNode = null;
  let downVariant = null;
  const pointers = new Map();
  const pointerCenter = () => {
    const pts = [...pointers.values()];
    if (pts.length < 2) return { x: 500, y: 310, dist: 0 };
    const [a, b] = pts;
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, dist: Math.hypot(a.x - b.x, a.y - b.y) };
  };
  canvas.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) {
      downNode = e.target.closest(".graph-node");
      downVariant = e.target.closest(".graph-variant-node");
      panning = true; moved = false; lastX = e.clientX; lastY = e.clientY;
      canvas.classList.add("is-panning");
    } else if (pointers.size === 2) {
      panning = false;
      const center = pointerCenter();
      pinchStart = { dist: center.dist, zoom: graphView.zoom };
      for (const id of pointers.keys()) canvas.setPointerCapture?.(id);
    }
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size >= 2 && pinchStart) {
      const center = pointerCenter();
      const pt = graphPoint({ clientX: center.x, clientY: center.y });
      setGraphZoom(pinchStart.zoom * (center.dist / pinchStart.dist), pt.x, pt.y);
      moved = true;
      e.preventDefault();
      return;
    }
    if (!panning) return;
    const rect = canvas.getBoundingClientRect();
    const dx = (e.clientX - lastX) / rect.width * 1000;
    const dy = (e.clientY - lastY) / rect.height * 620;
    if (Math.abs(e.clientX - lastX) + Math.abs(e.clientY - lastY) > 6) {
      moved = true;
      if (!canvas.hasPointerCapture?.(e.pointerId)) canvas.setPointerCapture?.(e.pointerId);
    }
    graphView.tx += dx;
    graphView.ty += dy;
    lastX = e.clientX;
    lastY = e.clientY;
    applyGraphTransform();
    e.preventDefault();
  });
  const endPointer = (e) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinchStart = null;
    if (pointers.size === 0) {
      panning = false;
      canvas.classList.remove("is-panning");
      if (moved) {
        suppressClick = true;
      } else if (e.type === "pointerup") {
        /* Pointer capture / SVG hit-testing can make synthetic click targets
           unreliable. Resolve the node at the release point directly. */
        const hit = document.elementFromPoint(e.clientX, e.clientY);
        const variant = downVariant || hit?.closest(".graph-variant-node");
        const node = downNode || hit?.closest(".graph-node");
        if (variant) {
          selectGraphVariant(variant.dataset.variantParent, Number(variant.dataset.variantIndex));
          suppressClick = true;
        } else if (node) {
          selectGraphNode(node.dataset.graphId);
          suppressClick = true;
        } else {
          const raw = graphPoint(e);
          const px = (raw.x - graphView.tx) / graphView.zoom;
          const py = (raw.y - graphView.ty) / graphView.zoom;
          let best = null;
          let bestDist = Infinity;
          for (const candidate of GRAPH.nodes) {
            const d = Math.hypot(candidate.x - px, candidate.y - py);
            if (d < bestDist) { bestDist = d; best = candidate; }
          }
          if (best && bestDist < 20 / graphView.zoom) {
            selectGraphNode(best.c.id);
            suppressClick = true;
          }
        }
      }
    }
  };
  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);
  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    const pt = graphPoint(e);
    setGraphZoom(graphView.zoom * (e.deltaY < 0 ? 1.16 : 1 / 1.16), pt.x, pt.y);
  }, { passive: false });
  const minimap = $("#graphMinimapWrap");
  if (minimap) minimap.addEventListener("click", (e) => {
    const rect = minimap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 1000;
    const y = (e.clientY - rect.top) / rect.height * 620;
    graphView.tx = 500 - x * graphView.zoom;
    graphView.ty = 310 - y * graphView.zoom;
    applyGraphTransform();
  });
  const zoomWrap = document.querySelector(".graph-zoom");
  if (zoomWrap) zoomWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-graph-zoom]");
    if (!btn) return;
    if (btn.dataset.graphZoom === "in") setGraphZoom(graphView.zoom * 1.25);
    else if (btn.dataset.graphZoom === "out") setGraphZoom(graphView.zoom / 1.25);
    else resetGraphZoom();
  });
  canvas.addEventListener("click", (e) => {
    if (suppressClick) { suppressClick = false; return; }
    const variant = e.target.closest(".graph-variant-node");
    if (variant) { selectGraphVariant(variant.dataset.variantParent, Number(variant.dataset.variantIndex)); return; }
    const g = e.target.closest(".graph-node");
    if (g) selectGraphNode(g.dataset.graphId);
    else if (graphView.focus) selectGraphNode(null);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".graph-search")) {
      const box = $("#graphSearchResults");
      if (box) box.hidden = true;
    }
  });
  const detail = $("#graphDetail");
  if (detail) detail.addEventListener("click", (e) => {
    const open = e.target.closest("[data-graph-open]");
    if (open) { openRecipe(open.dataset.graphOpen); return; }
    const focus = e.target.closest("[data-graph-focus]");
    if (focus) selectGraphNode(focus.dataset.graphFocus);
    const variant = e.target.closest("[data-graph-variant]");
    if (variant) selectGraphVariant(graphView.focus, Number(variant.dataset.graphVariant));
  });
  const back = $("#graphBack");
  if (back) back.addEventListener("click", () => selectGraphNode(null));
  const search = $("#graphSearch");
  if (search) {
    search.addEventListener("input", () => {
      graphView.query = search.value;
      applyGraphFilter();
      renderGraphSearch(search.value);
    });
    search.addEventListener("focus", () => { if (search.value) renderGraphSearch(search.value); });
    search.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const first = $("#graphSearchResults [data-graph-search-id]");
        if (first) { e.preventDefault(); selectGraphSearch(first.dataset.graphSearchId); }
      } else if (e.key === "Escape") {
        search.value = "";
        graphView.query = "";
        const box = $("#graphSearchResults");
        if (box) box.hidden = true;
        applyGraphFilter();
      }
    });
  }
  const searchBox = $("#graphSearchResults");
  if (searchBox) searchBox.addEventListener("click", (e) => {
    const item = e.target.closest("[data-graph-search-id]");
    if (item) selectGraphSearch(item.dataset.graphSearchId);
  });
  const reset = $("#graphReset");
  if (reset) reset.addEventListener("click", () => {
    graphView.query = "";
    graphView.base = "all";
    graphView.focus = null;
    if (search) search.value = "";
    const searchResults = $("#graphSearchResults");
    if (searchResults) { searchResults.hidden = true; searchResults.innerHTML = ""; }
    $$(".graph-legend-item").forEach((b) => b.classList.toggle("is-active", b.dataset.graphBase === "all"));
    resetGraphFocusView();
    const back = $("#graphBack");
    if (back) back.hidden = true;
    applyGraphFilter();
    renderGraphVariants(null);
    renderGraphDetail(null);
  });
  const legend = $("#graphLegend");
  if (legend) legend.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-graph-base]");
    if (!btn) return;
    graphView.base = btn.dataset.graphBase;
    $$(".graph-legend-item").forEach((b) => b.classList.toggle("is-active", b === btn));
    applyGraphFilter();
  });
}

function renderTimeline() {
  const wrap = $("#timeline");
  if (!wrap) return;
  wrap.innerHTML = TIMELINE.map((item) => `
    <article class="timeline-item">
      <span class="timeline-year">${esc(item.year)}</span>
      <div><h4>${esc(item.title)}</h4><p>${esc(item.text)}</p></div>
    </article>`).join("");
}

function renderBibliography() {
  const wrap = $("#bibliography");
  if (!wrap) return;
  wrap.innerHTML = BIBLIOGRAPHY.map((item, i) => `
    <a class="bib-item" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">
      <span class="bib-no">${String(i + 1).padStart(2, "0")}</span>
      <span class="bib-body"><b>${esc(item.title)}</b><small>${esc(item.note)}</small></span>
      <svg class="icon"><use href="#i-up-right"></use></svg>
    </a>`).join("");
}

/* ---------------- 筛选与配方卡 ---------------- */

function buildFilters() {
  const baseChips = $("#baseChips");
  if (!baseChips) return;
  const baseCounts = countBy(ALL, "base");
  baseChips.innerHTML = `<button class="chip is-active" type="button" data-base="all">全部 <i>${ALL.length}</i></button>` +
    BASES.map((b) => `<button class="chip" type="button" data-base="${esc(b.id)}">${esc(b.zh)} <i>${baseCounts[b.id] || 0}</i></button>`).join("");

  const flavorChips = $("#flavorChips");
  const flavorCounts = {};
  ALL.forEach((c) => c.flavor.forEach((f) => { flavorCounts[f] = (flavorCounts[f] || 0) + 1; }));
  flavorChips.innerHTML = `<button class="chip is-active" type="button" data-flavor="all">全部风味</button>` +
    FLAVOR_TAGS.map((f) => `<button class="chip" type="button" data-flavor="${esc(f)}">${esc(f)} <i>${flavorCounts[f] || 0}</i></button>`).join("");

  const familySelect = $("#familySelect");
  const famCounts = countBy(ALL, "fam");
  familySelect.innerHTML = `<option value="all">全部架构</option>` +
    FAMILIES.map((f) => `<option value="${esc(f.id)}">${esc(f.zh)} · ${esc(f.en)}（${famCounts[f.id] || 0}）</option>`).join("");

  const modSelect = $("#modSelect");
  const modUseCounts = {};
  ALL.forEach((c) => c.mods.forEach((m) => { modUseCounts[m] = (modUseCounts[m] || 0) + 1; }));
  modSelect.innerHTML = `<option value="all">全部辅料</option>` +
    MODGROUPS.map((g) => `<option value="${esc(g.id)}">${esc(g.zh)}（${modUseCounts[g.id] || 0}）</option>`).join("");

  const methodSelect = $("#methodSelect");
  const methodCounts = countBy(ALL, "method");
  methodSelect.innerHTML = `<option value="all">全部技法</option>` +
    METHODS.map((m) => `<option value="${esc(m)}">${esc(m)}（${methodCounts[m] || 0}）</option>`).join("");
}

function currentList() {
  const q = state.q.trim().toLowerCase();
  const words = q ? q.split(/\s+/).filter(Boolean) : [];
  let list = ALL.filter((c) => {
    if (state.base !== "all" && c.base !== state.base) return false;
    if (state.family !== "all" && c.fam !== state.family) return false;
    if (state.flavor !== "all" && !c.flavor.includes(state.flavor)) return false;
    if (state.mod !== "all" && !c.mods.includes(state.mod)) return false;
    if (state.method !== "all" && c.method !== state.method) return false;
    if (state.iba !== "all") {
      const meta = ibaMeta(c);
      if (state.iba === "none" && meta) return false;
      if (state.iba !== "none" && (!meta || meta.cat !== state.iba)) return false;
    }
    if (state.strength === "light" && c.strength > 2) return false;
    if (state.strength === "medium" && c.strength !== 3) return false;
    if (state.strength === "strong" && c.strength < 4) return false;
    if (state.favOnly && !favorites.has(c.id)) return false;
    if (!pantryMatch(c)) return false;
    if (words.length) {
      const base = BASE_BY_ID[c.base];
      const fam = FAM_BY_ID[c.fam];
      const hist = c.history || HISTORY[c.id] || "";
      const im = ibaMeta(c);
      const hay = [
        c.zh, c.en, ...aliasesFor(c), c.sub, c.method, c.glass, c.gar, c.note, hist,
        im ? im.name + " " + im.catZh + " " + im.catEn : "",
        base ? base.zh + " " + base.en : "",
        fam ? fam.zh + " " + fam.en : "",
        ...c.flavor,
        ...c.ing.map((x) => x.join(" ")),
        ...c.v.map(variantSearchText)
      ].join(" ").toLowerCase();
      if (!words.every((w) => hay.includes(w))) return false;
    }
    return true;
  });

  if (state.sort === "light") list.sort((a, b) => a.strength - b.strength || (RANK.get(a.id) ?? 999) - (RANK.get(b.id) ?? 999));
  else if (state.sort === "strong") list.sort((a, b) => b.strength - a.strength || (RANK.get(a.id) ?? 999) - (RANK.get(b.id) ?? 999));
  else if (state.sort === "easy") list.sort((a, b) => a.diff - b.diff || (RANK.get(a.id) ?? 999) - (RANK.get(b.id) ?? 999));
  else if (state.sort === "az") list.sort((a, b) => a.en.localeCompare(b.en, "en"));
  else list.sort((a, b) => (RANK.get(a.id) ?? 900) - (RANK.get(b.id) ?? 900) || a.zh.localeCompare(b.zh, "zh"));
  return list;
}

function strengthMeter(value) {
  return `<span class="strength-meter" aria-label="酒感 ${value} / 5">` +
    Array.from({ length: 5 }, (_, i) => `<i class="${i < value ? "on" : ""}"></i>`).join("") +
    `</span><span class="strength-text">${STRENGTH_LABELS[value] || ""}</span>`;
}

const FLAVOR_AXES = [
  ["酸", "sour"], ["甜", "sweet"], ["苦", "bitter"],
  ["香", "aroma"], ["酒感", "strong"], ["质地", "texture"]
];

/* 按材料、风味标签与酒感做结构估算；是相对坐标，不是实验室数据。 */
function flavorProfile(c) {
  const p = { sour: 1, sweet: 1, bitter: 1, aroma: 2, strong: c.strength, texture: 1 };
  const tags = c.flavor || [];
  const names = (c.ing || []).map((x) => x[0]).join(" ");
  if (tags.includes("酸甜")) { p.sour = 4; p.sweet = 3; }
  if (tags.includes("清爽")) p.sour = Math.max(p.sour, 3);
  if (tags.includes("热带")) { p.sour = Math.max(p.sour, 3); p.sweet = Math.max(p.sweet, 3); p.aroma = Math.max(p.aroma, 4); }
  if (tags.includes("苦香")) p.bitter = 4;
  if (tags.includes("草本")) p.aroma = Math.max(p.aroma, 4);
  if (tags.includes("花香")) p.aroma = Math.max(p.aroma, 4);
  if (tags.includes("温暖")) p.aroma = Math.max(p.aroma, 3);
  if (tags.includes("辛香")) { p.aroma = Math.max(p.aroma, 3); p.bitter = Math.max(p.bitter, 3); }
  if (tags.includes("奶滑")) { p.texture = 5; p.sweet = Math.max(p.sweet, 3); }
  if (tags.includes("咖啡")) { p.bitter = Math.max(p.bitter, 3); p.aroma = Math.max(p.aroma, 4); }
  if (/青柠|柠檬|西柚|柚子|菠萝|蔓越莓|番茄|百香果|酸/.test(names)) p.sour = Math.max(p.sour, 3);
  if (/糖浆|蜂蜜|龙舌兰糖浆|石榴|利口酒|味美思|果汁|可乐|汤力|姜啤|香蕉|椰/.test(names)) p.sweet = Math.max(p.sweet, 3);
  if (/金巴利|阿玛罗|苦精|苦艾|汤力|Fernet|Cynar|Campari|Aperol|Suze|咖啡|可可/.test(names)) p.bitter = Math.max(p.bitter, 3);
  if (/奶油|蛋清|全蛋|蛋黄|牛奶|椰|酸奶/.test(names)) p.texture = Math.max(p.texture, 4);
  if (/苏打|起泡|香槟|Prosecco|啤酒|姜啤/.test(names)) p.texture = Math.max(p.texture, 3);
  const clean = {};
  for (const [, key] of FLAVOR_AXES) clean[key] = Math.max(1, Math.min(5, Math.round(p[key])));
  return clean;
}

function radarSVG(c, size = 220, showLabels = true) {
  const profile = flavorProfile(c);
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.31;
  const labels = FLAVOR_AXES.map(([label]) => label);
  const points = FLAVOR_AXES.map(([, key], i) => {
    const angle = (-90 + i * 60) * Math.PI / 180;
    const value = profile[key] / 5;
    return [cx + Math.cos(angle) * r * value, cy + Math.sin(angle) * r * value];
  });
  const rings = [1, 2, 3, 4, 5].map((level) => {
    const pts = FLAVOR_AXES.map(([, key], i) => {
      const angle = (-90 + i * 60) * Math.PI / 180;
      return `${(cx + Math.cos(angle) * r * level / 5).toFixed(1)},${(cy + Math.sin(angle) * r * level / 5).toFixed(1)}`;
    }).join(" ");
    return `<polygon class="radar-ring${level === 5 ? " is-outer" : ""}" points="${pts}"></polygon>`;
  }).join("");
  const axes = FLAVOR_AXES.map(([, key], i) => {
    const angle = (-90 + i * 60) * Math.PI / 180;
    return `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(angle) * r).toFixed(1)}" y2="${(cy + Math.sin(angle) * r).toFixed(1)}"></line>`;
  }).join("");
  const labelsHtml = showLabels ? FLAVOR_AXES.map(([label], i) => {
    const angle = (-90 + i * 60) * Math.PI / 180;
    const lx = cx + Math.cos(angle) * (r + 17);
    const ly = cy + Math.sin(angle) * (r + 17);
    const anchor = lx < cx - 2 ? "end" : lx > cx + 2 ? "start" : "middle";
    return `<text class="radar-label" x="${lx.toFixed(1)}" y="${(ly + 3).toFixed(1)}" text-anchor="${anchor}">${esc(label)}</text>`;
  }).join("") : "";
  const summary = FLAVOR_AXES.map(([label, key]) => `${label}${profile[key]}`).join("、");
  const dots = points.map(([x, y]) => `<circle class="radar-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${showLabels ? 2.2 : 1.7}"></circle>`).join("");
  return `<svg class="flavor-radar-svg${showLabels ? " is-detail" : " is-mini"}" viewBox="0 0 ${size} ${size}" role="img" aria-label="风味多边形估算：${summary}">
    ${rings}${axes}
    <polygon class="radar-shape" points="${points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")}"></polygon>
    ${dots}${labelsHtml}
  </svg>`;
}

function applyFlavorView(root = document) {
  $$("[data-flavor-panel]", root).forEach((panel) => {
    panel.hidden = panel.dataset.flavorPanel !== state.flavorView;
  });
  $$("[data-flavor-view]", root).forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.flavorView === state.flavorView);
    btn.setAttribute("aria-pressed", String(btn.dataset.flavorView === state.flavorView));
  });
  const btn = $("#flavorViewBtn");
  if (btn && root === document) {
    btn.textContent = state.flavorView === "radar" ? "风味：多边形" : "风味：标签";
    btn.setAttribute("aria-pressed", String(state.flavorView === "radar"));
  }
}

function setFlavorView(view) {
  state.flavorView = view === "radar" ? "radar" : "tags";
  try { localStorage.setItem("bar-atlas-flavor-view", state.flavorView); } catch (e) {}
  render();
  applyFlavorView();
}

function setDensity(density) {
  state.density = density === "compact" ? "compact" : "comfort";
  try { localStorage.setItem("bar-atlas-density", state.density); } catch (e) {}
  render();
}

function renderRecipeCards(list) {
  const grid = $("#recipeGrid");
  const empty = $("#emptyState");
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  grid.innerHTML = list.map((c) => {
    const base = BASE_BY_ID[c.base];
    const fam = FAM_BY_ID[c.fam];
    const isFav = favorites.has(c.id);
    const im = ibaMeta(c);
    const ext = sourceInfo(c);
    const ingredients = c.ing.map((x) => x[0]);
    return `
      <article class="recipe-card ${im ? "is-iba" : "is-non-iba"}" style="--base-color:${baseColor(c)}">
        <a class="recipe-card-link" href="#recipe/${esc(c.id)}" data-open="${esc(c.id)}" aria-label="查看 ${esc(c.zh)} ${esc(c.en)} 配方">
          <div class="card-head">
            <span class="card-base">${esc(base.zh)} <i>${esc(base.en)}</i></span>
            ${im ? `<span class="iba-flag" title="${esc(im.catZh)}">IBA</span>` : `<span class="iba-flag is-non" title="${esc(ext.tag)}">NON-IBA</span>`}
            <span class="card-family">${esc(fam.zh)}</span>
          </div>
          <div class="card-title">
            <h3>${esc(c.zh)}</h3>
            <p>${esc(c.en)}</p>
          </div>
          <p class="card-ingredients">${esc(ingredients.join(" · "))}</p>
          <div class="card-meta">
            <span class="mini-tag">${esc(c.method)}</span>
            <span class="mini-tag">${esc(c.glass.split("/")[0].trim())}</span>
            <span class="card-strength">${strengthMeter(c.strength)}</span>
          </div>
          <div class="card-foot">
            ${state.flavorView === "radar"
              ? `<span class="card-radar" title="风味多边形：${esc(c.flavor.join("、"))}">${radarSVG(c, 64, false)}</span>`
              : `<div class="card-flavors">${c.flavor.map((f) => `<span>${esc(f)}</span>`).join("")}</div>`}
            <span class="card-open">配方 <svg class="icon"><use href="#i-arrow"></use></svg></span>
          </div>
        </a>
        <button class="fav-btn ${isFav ? "is-fav" : ""}" type="button" data-fav="${esc(c.id)}" aria-label="${isFav ? "取消收藏" : "收藏"} ${esc(c.zh)}" aria-pressed="${isFav}">
          <svg class="icon"><use href="#i-star"></use></svg>
        </button>
      </article>`;
  }).join("");
}

function renderActiveFilters() {
  const wrap = $("#activeFilters");
  if (!wrap) return;
  const items = [];
  if (state.q.trim()) items.push(["q", `搜索 “${state.q.trim()}”`]);
  if (state.base !== "all") items.push(["base", BASE_BY_ID[state.base] ? BASE_BY_ID[state.base].zh : state.base]);
  if (state.family !== "all") items.push(["family", FAM_BY_ID[state.family] ? FAM_BY_ID[state.family].zh : state.family]);
  if (state.flavor !== "all") items.push(["flavor", state.flavor]);
  if (state.mod !== "all") items.push(["mod", MOD_BY_ID[state.mod] ? MOD_BY_ID[state.mod].zh : state.mod]);
  if (state.method !== "all") items.push(["method", state.method]);
  if (state.iba !== "all") items.push(["iba", state.iba === "none" ? "非 IBA" : "IBA " + IBA_CATS[state.iba].zh.replace("IBA ", "")]);
  if (state.strength !== "all") items.push(["strength", state.strength === "light" ? "轻盈" : state.strength === "medium" ? "适中" : "偏烈"]);
  if (state.favOnly) items.push(["fav", "仅收藏"]);
  if (state.pantryInclude.length || state.pantryExclude.length) items.push(["pantry", `我的吧台 ${pantrySummaryLabel()}`]);
  wrap.innerHTML = items.length
    ? items.map(([key, label]) => `<button type="button" class="active-filter" data-clear="${key}">${esc(label)} <svg class="icon"><use href="#i-close"></use></svg></button>`).join("") +
      `<button type="button" class="clear-all" data-reset>清除全部</button>`
    : `<span class="filter-hint">可组合筛选，例如：金酒 + 草本 + 摇和</span>`;
}

function render() {
  const list = currentList();
  const grid = $("#recipeGrid");
  if (grid) grid.classList.toggle("is-compact", state.density === "compact");
  const densityBtn = $("#densityBtn");
  if (densityBtn) {
    densityBtn.textContent = state.density === "compact" ? "排版：紧凑" : "排版：舒适";
    densityBtn.setAttribute("aria-pressed", String(state.density === "compact"));
  }
  renderRecipeCards(list);
  renderActiveFilters();
  const meta = $("#resultMeta");
  if (meta) {
    const suffix = state.q.trim() ? ` · 搜索“${state.q.trim()}”` : "";
    meta.textContent = list.length === ALL.length
      ? `共 ${ALL.length} 杯配方${suffix}`
      : `找到 ${list.length} 杯 / 共 ${ALL.length} 杯${suffix}`;
  }
  const pantryBtn = $("#pantryBtn");
  if (pantryBtn) {
    const pantryTotal = state.pantryInclude.length + state.pantryExclude.length;
    const pantryBadge = $("#pantryCount");
    if (pantryBadge) pantryBadge.textContent = String(pantryTotal);
    pantryBtn.classList.toggle("has-pantry", pantryTotal > 0);
  }
  $$("#baseChips [data-base]").forEach((b) => b.classList.toggle("is-active", b.dataset.base === state.base));
  $$("[data-flavor]").forEach((b) => b.classList.toggle("is-active", b.dataset.flavor === state.flavor));
  const fs = $("#familySelect");
  const ms = $("#modSelect");
  const mes = $("#methodSelect");
  const ibas = $("#ibaSelect");
  const ss = $("#strengthSelect");
  const sos = $("#sortSelect");
  if (fs) fs.value = state.family;
  if (ms) ms.value = state.mod;
  if (mes) mes.value = state.method;
  if (ibas) ibas.value = state.iba;
  if (ss) ss.value = state.strength;
  if (sos) sos.value = state.sort;
  const favBtn = $("#favToggle");
  if (favBtn) {
    favBtn.classList.toggle("is-active", state.favOnly);
    favBtn.setAttribute("aria-pressed", String(state.favOnly));
  }
  const fc = $("#favCount");
  if (fc) fc.textContent = favorites.size;
  const activeCount = ["base", "family", "flavor", "mod", "method", "iba", "strength"]
    .filter((key) => state[key] !== "all").length;
  const fac = $("#filterActiveCount");
  if (fac) fac.textContent = activeCount;
  const filterToggle = $("#filterToggle");
  if (filterToggle) filterToggle.classList.toggle("has-active", activeCount > 0);
}

function resetAll() {
  state.base = "all";
  state.family = "all";
  state.flavor = "all";
  state.mod = "all";
  state.method = "all";
  state.iba = "all";
  state.strength = "all";
  state.q = "";
  state.sort = "editorial";
  state.favOnly = false;
  state.pantryInclude = [];
  state.pantryExclude = [];
  savePantry();
  const input = $("#recipeSearch");
  if (input) input.value = "";
  const panel = $("#filterPanel");
  if (panel) panel.classList.remove("is-open");
  const toggle = $("#filterToggle");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
  render();
}

function clearOne(key) {
  if (key === "q") { state.q = ""; const input = $("#recipeSearch"); if (input) input.value = ""; }
  else if (key === "fav") state.favOnly = false;
  else if (key === "pantry") { state.pantryInclude = []; state.pantryExclude = []; savePantry(); }
  else state[key] = "all";
  render();
}

function goToRecipes() {
  const target = $("#recipes");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------------- 配方详情 ---------------- */

function relatedRecipes(c) {
  const sameFamily = ALL.filter((x) => x.fam === c.fam && x.id !== c.id);
  const sameBase = ALL.filter((x) => x.base === c.base && x.id !== c.id && x.fam !== c.fam);
  const seen = new Set();
  const out = [];
  for (const item of [...sameFamily, ...sameBase]) {
    if (!seen.has(item.id) && out.length < 3) {
      seen.add(item.id);
      out.push(item);
    }
  }
  return out;
}

function modalHTML(c) {
  const base = BASE_BY_ID[c.base];
  const fam = FAM_BY_ID[c.fam];
  const isFav = favorites.has(c.id);
  const im = ibaMeta(c);
  const ext = sourceInfo(c);
  const related = relatedRecipes(c);
  const historyText = c.history || HISTORY[c.id] || "";
  const official = im ? IBA_SPECS[c.id] : null;
  const exact = !!(c.src && c.src.type === "IBA");
  const officialPriority = exact || !!official;
  const ingredients = c.ing.map(([name, amount]) => `
    <li><span>${esc(name)}</span><i></i><b>${esc(amount)}</b></li>`).join("");
  const steps = c.steps.map((s) => `<li><span>${esc(s)}</span></li>`).join("");
  const variants = c.v.map((raw) => {
    const v = resolvedVariant(c, raw);
    const vIngs = Array.isArray(v.ing) && v.ing.length
      ? `<ul class="variant-ing">${v.ing.map(([n, a]) => `<li><span>${esc(n)}</span><i></i><b>${esc(a)}</b></li>`).join("")}</ul>`
      : `<p class="variant-base">以本页基准配方为底，按上方改法调整比例与材料。</p>`;
    const vMeta = [v.method, v.glass].filter(Boolean).length
      ? `<div class="variant-meta">${v.method ? `<span>${esc(v.method)}</span>` : ""}${v.glass ? `<span>${esc(v.glass)}</span>` : ""}</div>`
      : "";
    return `
      <div class="variant ${Array.isArray(v.ing) && v.ing.length ? "variant-complete" : ""}">
        <div class="variant-head">
          <b>${esc(v.zh)}</b>${v.zh === v.en ? "" : `<span>${esc(v.en)}</span>`}
          ${Array.isArray(v.ing) && v.ing.length ? `<em>完整配方</em>` : ""}
        </div>
        <p class="variant-how">${esc(v.how)}</p>
        ${vIngs}
        ${vMeta}
        ${v.note ? `<p class="variant-note">${esc(v.note)}</p>` : ""}
      </div>`;
  }).join("");

  const ibaBox = im ? `
    <section class="iba-source">
      <div class="iba-source-head">
        <span class="source-badge">${officialPriority ? "IBA 官方优先" : "IBA 收录 · 吧台版"}</span>
        <div>
          <h3>${esc(im.name)}</h3>
          <p>${esc(im.catZh)} · ${esc(im.catEn)}</p>
        </div>
        <a href="${esc(im.url)}" target="_blank" rel="noopener noreferrer">官方页面 <svg class="icon"><use href="#i-up-right"></use></svg></a>
      </div>
      ${official
        ? `<details class="official-spec" open><summary>IBA 官方配方（优先） <svg class="icon"><use href="#i-chevron"></use></svg></summary>
            <ul>${official.map(([n, a]) => `<li><span>${esc(n)}</span><b>${esc(a)}</b></li>`).join("")}</ul>
            <p>本页“配方”栏为吧台适配版；官方版本以上表为准。</p>
          </details>`
        : exact
          ? `<p class="official-note">IBA 官方配方优先：本页主配方采用官方规格；现代酒吧的调整比例放在变体与注记中。</p>`
          : official
            ? `<p class="official-note">IBA 官方规格对照：本页“配方”栏为现代吧台版，官方比例以上表为准。</p>`
            : `<p class="official-note">IBA 收录，但暂未取得逐项官方规格：本页为现代吧台可执行版，比例与装饰以 IBA 官方页面为准，不作为官方配方声称。</p>`}
    </section>` : `
    <section class="iba-source is-external">
      <div class="iba-source-head">
        <span class="source-badge is-external">${esc(ext.tag)}</span>
        <div><h3>非 IBA 收录配方</h3><p>${esc(ext.label)}</p></div>
        ${ext.url ? `<a href="${esc(ext.url)}" target="_blank" rel="noopener noreferrer">参考链接 <svg class="icon"><use href="#i-up-right"></use></svg></a>` : ""}
      </div>
      <p class="official-note">本杯不在 IBA 官方酒单中。来源标签为“${esc(ext.tag)}”，参考说明见上；配方为可复现的吧台版本，历史叙事已尽量采用谨慎措辞。</p>
      <button type="button" class="source-jump" data-goto-sources>查看完整参考书目 <svg class="icon"><use href="#i-arrow"></use></svg></button>
    </section>`;

  return `
    <header class="modal-head" style="--base-color:${baseColor(c)}">
      <div class="modal-head-top">
        <span class="modal-kicker">${esc(fam.zh)} · ${esc(fam.en)}</span>
        <span class="modal-base">${esc(base.zh)} / ${esc(base.en)}</span>
      </div>
      <p class="modal-en">${esc(c.en)}</p>
      <h2 id="modalTitle">${esc(c.zh)}</h2>
      ${aliasesFor(c).length ? `<p class="modal-aliases">常见译名：${aliasesFor(c).map(esc).join(" · ")}</p>` : ""}
      <div class="modal-subline">
        <span>${esc(c.sub)}</span>
        <span>${esc(c.method)}</span>
        <span>${c.v.length} 个变体</span>
        ${im ? `<span class="modal-iba-tag">IBA · ${esc(im.catZh.replace("IBA ", ""))}</span>` : ""}
      </div>
      <div class="modal-tools">
        <button type="button" class="modal-tool" data-copy="${esc(c.id)}">
          <svg class="icon"><use href="#i-copy"></use></svg>复制配方
        </button>
        <button type="button" class="modal-tool fav-tool ${isFav ? "is-fav" : ""}" data-fav="${esc(c.id)}" aria-pressed="${isFav}">
          <svg class="icon"><use href="#i-star"></use></svg><span>${isFav ? "已收藏" : "收藏"}</span>
        </button>
      </div>
    </header>
    <div class="modal-body">
      <div class="modal-main">
        <section class="modal-block">
          <div class="block-head"><h3>${exact ? "IBA 官方配方" : official ? "现代吧台版" : "配方"}</h3><span>${exact ? "IBA PRIORITY" : official ? "MODERN BAR" : "INGREDIENTS"}</span></div>
          <ul class="ing-list">${ingredients}</ul>
        </section>
        <section class="modal-block">
          <div class="block-head"><h3>做法</h3><span>METHOD</span></div>
          <ol class="step-list">${steps}</ol>
        </section>
        ${historyText ? `<section class="history-block"><p class="eyebrow">ORIGIN / 由来</p><h3>这杯酒的故事</h3><p>${esc(historyText)}</p></section>` : ""}
        <section class="note-block">
          <p class="eyebrow">BARTENDER'S NOTE</p>
          <p>${esc(c.note)}</p>
        </section>
        ${ibaBox}
        <section class="modal-block modal-graph-block">
          <div class="block-head"><h3>关系图谱</h3><span>RELATIONS</span></div>
          ${egoGraphSVG(c)}
          <p class="modal-graph-help">点击节点打开相邻配方；菱形是这杯酒的变体。</p>
        </section>
        <section class="modal-block">
          <div class="block-head"><h3>变体与配方</h3><span>${c.v.length} VARIATIONS</span></div>
          <p class="variant-disclaimer">标有“完整配方”的变体附独立材料表；其余变体以本页基准配方为底，按改法调整。带 IBA 标记的酒款可在上方对照官方比例。</p>
          <div class="variant-list">${variants}</div>
        </section>
      </div>
      <aside class="modal-side">
        <div class="fact-grid">
          <div><span>酒感</span><b>${STRENGTH_LABELS[c.strength]}</b><small>${c.strength} / 5</small></div>
          <div><span>难度</span><b>${DIFF_LABELS[c.diff]}</b><small>${"●".repeat(c.diff)}${"○".repeat(3 - c.diff)}</small></div>
          <div><span>杯型</span><b>${esc(c.glass)}</b></div>
          <div><span>技法</span><b>${esc(c.method)}</b></div>
        </div>
        <div class="side-block flavor-block">
          <div class="flavor-head">
            <h3>风味坐标</h3>
            <div class="flavor-switch" aria-label="风味显示方式">
              <button type="button" data-flavor-view="tags" aria-pressed="${state.flavorView === "tags"}">标签</button>
              <button type="button" data-flavor-view="radar" aria-pressed="${state.flavorView === "radar"}">多边形</button>
            </div>
          </div>
          <div data-flavor-panel="tags">
            <div class="flavor-tags">${c.flavor.map((f) => `<span>${esc(f)}</span>`).join("")}</div>
          </div>
          <div data-flavor-panel="radar" hidden>
            <div class="flavor-radar">${radarSVG(c, 210, true)}</div>
            <p class="flavor-note">按材料、标签与酒感估算的相对剖面，不是实验室数据。</p>
          </div>
          <div class="side-strength">${strengthMeter(c.strength)}</div>
        </div>
        <div class="side-block">
          <h3>装饰与出品</h3>
          <p class="side-text">${esc(c.gar)}</p>
        </div>
        <div class="side-block">
          <h3>同类推荐</h3>
          <div class="related-list">
            ${related.map((r) => {
              const rb = BASE_BY_ID[r.base];
              return `<a href="#recipe/${esc(r.id)}" data-open="${esc(r.id)}" class="related-item" style="--base-color:${baseColor(r)}">
                <span>${esc(rb.zh)}</span><b>${esc(r.zh)}</b><small>${esc(r.en)}</small>
              </a>`;
            }).join("")}
          </div>
        </div>
        <div class="side-block side-note">
          <h3>调校逻辑</h3>
          <p>${esc(fam.balance)}</p>
        </div>
      </aside>
    </div>`;
}

function spiritModalHTML(b) {
  const d = SPIRIT_DETAILS[b.id];
  if (!d) return "";
  const examples = ALL.filter((c) => c.base === b.id).slice(0, 6);
  return `<header class="spirit-hero" style="--base-color:${b.color}">
    <div class="spirit-hero-top"><span>SPIRIT / ${esc(b.en)}</span><span>${esc(b.abv)}</span></div>
    <p class="spirit-kicker">${esc(b.tag)}</p>
    <h1 id="spiritTitle">${esc(b.zh)}</h1>
    <p class="spirit-headline">${esc(d.headline)}</p>
    <div class="spirit-meta"><span>${esc(b.en)}</span><span>${b.styles.length} 个子类别</span><span>${ALL.filter((c) => c.base === b.id).length} 杯配方</span></div>
  </header>
  <div class="spirit-body">
    <section class="spirit-section">
      <div class="spirit-section-head"><h3>先理解这类酒</h3><span>OVERVIEW</span></div>
      <p class="spirit-lead">${esc(d.overview)}</p>
      <p class="spirit-production"><b>怎么做出来：</b>${esc(d.production)}</p>
    </section>
    <section class="spirit-section">
      <div class="spirit-section-head"><h3>子类别</h3><span>${d.subtypes.length} STYLES</span></div>
      <div class="spirit-subtypes">${d.subtypes.map((s) => `<article class="spirit-subtype">
        <div class="spirit-subtype-head"><h4>${esc(s.zh)}</h4><span>${esc(s.en)}</span></div>
        <p>${esc(s.note)}</p>
        <dl><dt>常见瓶</dt><dd>${esc(s.bottles)}</dd><dt>适合</dt><dd>${esc(s.use)}</dd></dl>
      </article>`).join("")}</div>
    </section>
    <section class="spirit-section spirit-choose">
      <div class="spirit-section-head"><h3>选择原则</h3><span>HOW TO CHOOSE</span></div>
      <ul>${d.choose.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <p class="spirit-avoid"><b>注意：</b>${esc(d.avoid)}</p>
    </section>
    <section class="spirit-section">
      <div class="spirit-section-head"><h3>从这些酒开始</h3><span>START HERE</span></div>
      <div class="spirit-recipes">${examples.map((c) => `<button type="button" class="spirit-recipe" data-spirit-recipe="${esc(c.id)}" style="--base-color:${baseColor(c)}"><b>${esc(c.zh)}</b><span>${esc(c.en)}</span></button>`).join("")}</div>
    </section>
  </div>`;
}

function openSpiritPage(id) {
  const b = BASE_BY_ID[id];
  const modal = $("#spiritModal");
  const scroll = $("#spiritScroll");
  if (!b || !SPIRIT_DETAILS[id] || !modal || !scroll) return;
  scroll.innerHTML = spiritModalHTML(b);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.classList.add("is-open"));
  scroll.scrollTop = 0;
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus({ preventScroll: true });
}

function closeSpiritPage() {
  const modal = $("#spiritModal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

function openRecipe(id, updateHash = true) {
  const c = BY_ID[id];
  if (!c) return;
  const modal = $("#recipeModal");
  const scroll = $("#modalScroll");
  if (!modal || !scroll) return;
  lastFocus = document.activeElement;
  currentRecipeId = id;
  scroll.innerHTML = modalHTML(c);
  applyFlavorView(modal);
  scroll.scrollTop = 0;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.classList.add("is-open"));
  window.clearTimeout(closeTimer);
  if (updateHash) {
    try { history.replaceState(null, "", "#recipe/" + encodeURIComponent(id)); } catch (e) {}
  }
  const closeBtn = $(".modal-close", modal);
  if (closeBtn) setTimeout(() => closeBtn.focus(), 60);
}

function closeRecipe() {
  const modal = $("#recipeModal");
  if (!modal || modal.hidden) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  currentRecipeId = null;
  closeTimer = window.setTimeout(() => {
    modal.hidden = true;
    const scroll = $("#modalScroll");
    if (scroll) scroll.innerHTML = "";
  }, 260);
  if (location.hash.indexOf("#recipe/") === 0) {
    try { history.replaceState(null, "", location.href.split("#")[0]); } catch (e) {}
  }
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function toggleFavorite(id) {
  if (!BY_ID[id]) return;
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  saveJSON("bar-atlas-favorites", Array.from(favorites));
  $$(`[data-fav="${id}"]`).forEach((btn) => {
    const isFav = favorites.has(id);
    btn.classList.toggle("is-fav", isFav);
    btn.setAttribute("aria-pressed", String(isFav));
    const label = btn.querySelector("span");
    if (label) label.textContent = isFav ? "已收藏" : "收藏";
    if (btn.classList.contains("fav-btn")) {
      btn.setAttribute("aria-label", `${isFav ? "取消收藏" : "收藏"} ${BY_ID[id].zh}`);
    }
  });
  const fc = $("#favCount");
  if (fc) fc.textContent = favorites.size;
  if (state.favOnly) render();
  toast(favorites.has(id) ? "已加入收藏" : "已取消收藏");
}

function recipeText(c) {
  const base = BASE_BY_ID[c.base];
  const fam = FAM_BY_ID[c.fam];
  const im = ibaMeta(c);
  const historyText = c.history || HISTORY[c.id] || "";
  return [
    `${c.zh} ${c.en}`,
    `${fam.zh} / ${base.zh} / ${c.method}${im ? ` / IBA ${im.catEn}` : ""}`,
    "",
    "配方：",
    ...c.ing.map(([n, a]) => `· ${n} ${a}`),
    "",
    "做法：",
    ...c.steps.map((s, i) => `${i + 1}. ${s}`),
    "",
    `装饰：${c.gar}`,
    "",
    historyText ? `由来：${historyText}` : "",
    "",
    `调酒师笔记：${c.note}`,
    "",
    `变体：${c.v.map((v) => normalizeVariant(v).zh).join(" / ")}`,
    im ? `IBA 官方页面：${im.url}` : ""
  ].filter((x) => x !== "").join("\n");
}

function copyRecipe(id) {
  const c = BY_ID[id];
  if (!c) return;
  const text = recipeText(c);
  const done = () => toast("配方已复制");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); done(); } catch (e) { toast("复制失败，请手动选择文本"); }
  document.body.removeChild(ta);
}

let toastTimer = 0;
function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("is-show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove("is-show"), 2200);
}

/* ---------------- 导航、主题、滚动 ---------------- */

function setupTheme() {
  const btn = $("#themeBtn");
  if (!btn) return;
  const sync = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    btn.setAttribute("aria-label", dark ? "切换到明亮主题" : "切换到暗色主题");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#101a16" : "#15352c";
  };
  sync();
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("bar-atlas-theme", next); } catch (e) {}
    sync();
  });
}

function setupSidebar() {
  const btn = $("#menuBtn");
  const sidebar = $("#sidebar");
  const scrim = $("#sidebarScrim");
  if (!btn || !sidebar) return;
  const close = () => {
    sidebar.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    if (scrim) scrim.hidden = true;
  };
  const open = () => {
    sidebar.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    if (scrim) scrim.hidden = false;
  };
  btn.addEventListener("click", () => {
    if (sidebar.classList.contains("is-open")) close();
    else open();
  });
  if (scrim) scrim.addEventListener("click", close);
  $$(".side-nav a").forEach((a) => a.addEventListener("click", close));
  window.addEventListener("resize", () => { if (window.innerWidth > 900) close(); });
}

function updateScrollUI() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
  const bar = $("#scrollProgress");
  if (bar) bar.style.width = progress + "%";

  const sections = $$("main section[data-section]");
  if (!sections.length) return;
  let current = sections[0];
  const marker = window.scrollY + 140;
  for (const section of sections) {
    if (section.offsetTop <= marker) current = section;
  }
  const no = current.dataset.no || "01";
  const title = current.dataset.title || "总览";
  const en = current.dataset.en || "Overview";
  const topNo = $("#topbarNo");
  const topTitle = $("#topbarTitle");
  const topEn = $("#topbarEn");
  if (topNo && topNo.textContent !== no) topNo.textContent = no;
  if (topTitle && topTitle.textContent !== title) topTitle.textContent = title;
  if (topEn && topEn.textContent !== en) topEn.textContent = en;
  $$(".nav-link").forEach((a) => a.classList.toggle("is-active", a.dataset.nav === current.dataset.section));
}

function setupScroll() {
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateScrollUI();
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateScrollUI();
}

function setupKeyboard() {
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (e.target && e.target.isContentEditable);
    if (e.key === "/" && !typing) {
      const modal = $("#recipeModal");
      if (modal && !modal.hidden) return;
      e.preventDefault();
      focusSearch();
    }
    if (e.key === "Escape") {
      const pantry = $("#pantryModal");
      if (pantry && !pantry.hidden) closePantry();
      const spirit = $("#spiritModal");
      if (spirit && !spirit.hidden) closeSpiritPage();
      const modal = $("#recipeModal");
      if (modal && !modal.hidden) closeRecipe();
      const sidebar = $("#sidebar");
      if (sidebar && sidebar.classList.contains("is-open")) {
        sidebar.classList.remove("is-open");
        const btn = $("#menuBtn");
        if (btn) btn.setAttribute("aria-expanded", "false");
        const scrim = $("#sidebarScrim");
        if (scrim) scrim.hidden = true;
      }
    }
    if (e.key === "Tab") {
      const modal = $("#recipeModal");
      if (!modal || modal.hidden) return;
      const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modal)
        .filter((el) => !el.disabled && el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

function focusSearch() {
  const input = $("#recipeSearch");
  const target = $("#recipes");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => { if (input) input.focus({ preventScroll: true }); }, 420);
}

function setupCalculator() {
  const ids = ["abvV1", "abvA1", "abvV2", "abvA2", "abvVn", "abvDil"];
  const els = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
  if (!els.abvV1) return;
  const calc = () => {
    const v1 = Math.max(0, parseFloat(els.abvV1.value) || 0);
    const a1 = Math.min(100, Math.max(0, parseFloat(els.abvA1.value) || 0));
    const v2 = Math.max(0, parseFloat(els.abvV2.value) || 0);
    const a2 = Math.min(100, Math.max(0, parseFloat(els.abvA2.value) || 0));
    const vn = Math.max(0, parseFloat(els.abvVn.value) || 0);
    const dil = Math.max(0, parseFloat(els.abvDil.value) || 0);
    const ethanol = v1 * a1 / 100 + v2 * a2 / 100;
    const total = (v1 + v2 + vn) * (1 + dil / 100);
    const abv = total > 0 ? (ethanol / total) * 100 : 0;
    const grams = ethanol * 0.789;
    $("#abvResult").textContent = abv.toFixed(1);
    $("#abvTotal").textContent = Math.round(total);
    $("#abvGrams").textContent = grams.toFixed(1);
    $("#abvStandard").textContent = (grams / 14).toFixed(1);
  };
  ids.forEach((id) => els[id] && els[id].addEventListener("input", calc));
  calc();
}

function setupChecklist() {
  const wrap = $("#finalChecklist");
  if (!wrap) return;
  wrap.addEventListener("change", () => {
    const total = $$("input", wrap).length;
    const checked = $$("input:checked", wrap).length;
    const count = $("#checklistCount");
    if (count) count.textContent = `${checked} / ${total}`;
    wrap.classList.toggle("is-complete", checked === total);
  });
}

function setupHashRoutes() {
  const openFromHash = () => {
    const match = location.hash.match(/^#recipe\/(.+)$/);
    if (match) {
      const id = decodeURIComponent(match[1]);
      if (BY_ID[id]) openRecipe(id, false);
    }
  };
  window.addEventListener("hashchange", () => {
    const modal = $("#recipeModal");
    if (location.hash.indexOf("#recipe/") === 0) openFromHash();
    else if (modal && !modal.hidden) closeRecipe();
  });
  openFromHash();
}

/* ---------------- 事件绑定 ---------------- */

function setupEvents() {
  document.addEventListener("click", (e) => {
    const flavorView = e.target.closest("[data-flavor-view]");
    if (flavorView) {
      e.preventDefault();
      setFlavorView(flavorView.dataset.flavorView);
      return;
    }
    const viewBtn = e.target.closest("#flavorViewBtn");
    if (viewBtn) {
      e.preventDefault();
      setFlavorView(state.flavorView === "radar" ? "tags" : "radar");
      return;
    }
    if (e.target.closest("#densityBtn")) {
      e.preventDefault();
      setDensity(state.density === "compact" ? "comfort" : "compact");
      return;
    }
    if (e.target.closest("#pantryBtn")) { e.preventDefault(); openPantry(); return; }
    if (e.target.closest("[data-pantry-close]")) { e.preventDefault(); closePantry(); return; }
    const pantryItem = e.target.closest("[data-pantry-item]");
    if (pantryItem) { e.preventDefault(); togglePantryItem(pantryItem.dataset.pantryItem); return; }
    const pantryRemove = e.target.closest("[data-pantry-remove]");
    if (pantryRemove) { e.preventDefault(); removePantryItem(pantryRemove.dataset.pantryRemove); return; }
    const pantryMode = e.target.closest("[data-pantry-mode]");
    if (pantryMode) { e.preventDefault(); state.pantryMode = pantryMode.dataset.pantryMode; renderPantry(); return; }
    if (e.target.closest("#pantryClear")) {
      e.preventDefault();
      state.pantryInclude = [];
      state.pantryExclude = [];
      savePantry();
      renderPantry();
      return;
    }
    if (e.target.closest("#pantryApply")) { e.preventDefault(); closePantry(); return; }
    const fav = e.target.closest("[data-fav]");
    if (fav) {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(fav.dataset.fav);
      return;
    }
    const copy = e.target.closest("[data-copy]");
    if (copy) {
      e.preventDefault();
      copyRecipe(copy.dataset.copy);
      return;
    }
    const sourceJump = e.target.closest("[data-goto-sources]");
    if (sourceJump) {
      e.preventDefault();
      closeRecipe();
      window.setTimeout(() => {
        const target = $("#sources");
        if (target) {
          const root = document.documentElement;
          const prev = root.style.scrollBehavior;
          root.style.scrollBehavior = "auto";
          window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - 80);
          root.style.scrollBehavior = prev;
          updateScrollUI();
        }
      }, 300);
      return;
    }
    const open = e.target.closest("[data-open]");
    if (open) {
      e.preventDefault();
      const id = open.dataset.open;
      if (state.favOnly && !favorites.has(id)) { /* still open from outside the grid */ }
      openRecipe(id);
      return;
    }
    const baseBtn = e.target.closest("#baseChips [data-base]");
    if (baseBtn) {
      state.base = baseBtn.dataset.base;
      render();
      return;
    }
    const flavorBtn = e.target.closest("[data-flavor]");
    if (flavorBtn) {
      state.flavor = flavorBtn.dataset.flavor;
      render();
      return;
    }
    const familyFilter = e.target.closest("[data-family-filter]");
    if (familyFilter) {
      state.family = familyFilter.dataset.familyFilter;
      render();
      goToRecipes();
      return;
    }
    const spiritPage = e.target.closest("[data-spirit-page]");
    if (spiritPage) {
      openSpiritPage(spiritPage.dataset.spiritPage);
      return;
    }
    const spiritRecipe = e.target.closest("[data-spirit-recipe]");
    if (spiritRecipe) {
      closeSpiritPage();
      openRecipe(spiritRecipe.dataset.spiritRecipe);
      return;
    }
    const baseFilter = e.target.closest("[data-base-filter]");
    if (baseFilter) {
      state.base = baseFilter.dataset.baseFilter;
      render();
      goToRecipes();
      return;
    }
    const modFilter = e.target.closest("[data-mod-filter]");
    if (modFilter) {
      state.mod = modFilter.dataset.modFilter;
      render();
      goToRecipes();
      return;
    }
    const clear = e.target.closest("[data-clear]");
    if (clear) { clearOne(clear.dataset.clear); return; }
    if (e.target.closest("[data-reset]")) { resetAll(); return; }
    if (e.target.closest("[data-spirit-close]")) { closeSpiritPage(); return; }
    if (e.target.closest("[data-close]")) { closeRecipe(); return; }
  });

  const search = $("#recipeSearch");
  let timer = 0;
  if (search) {
    search.addEventListener("input", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        state.q = search.value;
        render();
      }, 120);
    });
  }

  const pantrySearch = $("#pantrySearch");
  if (pantrySearch) {
    pantrySearch.addEventListener("input", () => {
      state.pantryQuery = pantrySearch.value;
      renderPantry();
    });
  }

  const bindSelect = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", () => { state[key] = el.value; render(); });
  };
  bindSelect("familySelect", "family");
  bindSelect("modSelect", "mod");
  bindSelect("methodSelect", "method");
  bindSelect("ibaSelect", "iba");
  bindSelect("strengthSelect", "strength");
  bindSelect("sortSelect", "sort");

  const reset = $("#resetFilters");
  if (reset) reset.addEventListener("click", resetAll);

  const random = $("#randomBtn");
  if (random) random.addEventListener("click", () => {
    const list = currentList();
    if (!list.length) { toast("先减少一个筛选条件"); return; }
    openRecipe(list[Math.floor(Math.random() * list.length)].id);
  });

  const favToggle = $("#favToggle");
  if (favToggle) favToggle.addEventListener("click", () => {
    state.favOnly = !state.favOnly;
    render();
  });

  const searchJump = $("#searchJump");
  if (searchJump) searchJump.addEventListener("click", focusSearch);

  const filterToggle = $("#filterToggle");
  if (filterToggle) filterToggle.addEventListener("click", () => {
    const panel = $("#filterPanel");
    if (!panel) return;
    const isOpen = panel.classList.toggle("is-open");
    filterToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ---------------- 初始化 ---------------- */

function init() {
  document.documentElement.classList.add("js");
  renderMetaCounts();
  renderEssentials();
  renderArchModel();
renderDerivationTree();
renderDerivations();
renderLineage();
renderFamilies();
  renderBases();
  renderMods();
  renderTechniques();
  renderSyrups();
  renderFaults();
  renderGlasses();
  renderConversions();
  renderStarter();
  renderMenu();
  renderGlossary();
  renderBrands();
  renderMaterials();
setupMaterialSearch();
  renderTopics();
  renderKnowledge();
  setupGraph();
  renderTimeline();
  renderBibliography();
  buildFilters();
  render();
  applyFlavorView();
  setupTheme();
  setupSidebar();
  setupScroll();
  setupKeyboard();
  setupCalculator();
  setupChecklist();
  setupEvents();
  setupHashRoutes();
  updateScrollUI();
}

init();
