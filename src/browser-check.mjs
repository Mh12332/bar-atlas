import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333;
const PROFILE = path.join(ROOT, ".chrome-check");
const URL = "file:///" + path.join(ROOT, "bar-atlas.html").replace(/\\/g, "/");
const OUT = path.join(ROOT, "shots");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

await fs.mkdir(OUT, { recursive: true });
await fs.rm(PROFILE, { recursive: true, force: true });

const chrome = spawn(CHROME, [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  "--disable-crash-reporter",
  "--disable-breakpad",
  "--disable-dev-shm-usage",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${PROFILE}`,
  "--no-first-run",
  "--no-default-browser-check",
  "about:blank"
], { stdio: "ignore" });

let version = null;
for (let i = 0; i < 50; i++) {
  try {
    const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
    if (res.ok) { version = await res.json(); break; }
  } catch (e) {}
  await sleep(200);
}
if (!version) throw new Error("Chrome DevTools did not start");

const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
const page = list.find((t) => t.type === "page");
if (!page) throw new Error("No page target");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

let seq = 0;
const pending = new Map();
const errors = [];
const consoleMessages = [];

ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id) {
    const p = pending.get(msg.id);
    if (p) {
      pending.delete(msg.id);
      if (msg.error) p.reject(new Error(JSON.stringify(msg.error)));
      else p.resolve(msg.result);
    }
    return;
  }
  if (msg.method === "Runtime.exceptionThrown") {
    errors.push(msg.params.exceptionDetails.text + " " + (msg.params.exceptionDetails.exception?.description || ""));
  }
  if (msg.method === "Log.entryAdded" && msg.params.entry.level === "error") {
    errors.push(msg.params.entry.text);
  }
  if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error") {
    consoleMessages.push(msg.params.args.map((a) => a.value || a.description || "").join(" "));
  }
});

function send(method, params = {}) {
  const id = ++seq;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const res = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (res.exceptionDetails) throw new Error(res.exceptionDetails.text + " " + (res.exceptionDetails.exception?.description || ""));
  return res.result.value;
}

async function setViewport(width, height) {
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false });
  await sleep(300);
}

async function screenshot(name) {
  const res = await send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
  await fs.writeFile(path.join(OUT, name), Buffer.from(res.data, "base64"));
}

async function scrollTo(selector, offset = 80) {
  await evaluate(`(() => {
    const el = document.querySelector(${JSON.stringify(selector)});
    if (!el) return false;
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    const y = el.getBoundingClientRect().top + window.scrollY - ${offset};
    window.scrollTo(0, y);
    root.style.scrollBehavior = prev;
    return true;
  })()`);
  await sleep(350);
}

await send("Page.enable");
await send("Runtime.enable");
await send("Log.enable");
await setViewport(1440, 1200);
await send("Page.navigate", { url: URL });
await sleep(1800);

const report = {};
report.title = await evaluate("document.title");
report.initial = await evaluate(`({
  recipes: document.querySelectorAll('.recipe-card').length,
  families: document.querySelectorAll('.family-card').length,
  bases: document.querySelectorAll('.base-card').length,
  mods: document.querySelectorAll('.mod-card').length,
  variants: [...document.querySelectorAll('.recipe-card')].length,
  countRecipes: document.querySelector('[data-count="recipes"]').textContent,
  countVariants: document.querySelector('[data-side="variants"]').textContent,
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth,
  bodyHeight: document.body.scrollHeight,
  modalHidden: document.querySelector('#recipeModal').hidden,
  ibaCards: document.querySelectorAll('.recipe-card.is-iba').length,
  nonIbaCards: document.querySelectorAll('.recipe-card.is-non-iba').length,
  baseCards: document.querySelectorAll('.base-card').length,
  ibaCount: document.querySelector('[data-count="iba"]').textContent,
  timeline: document.querySelectorAll('.timeline-item').length,
  bibliography: document.querySelectorAll('.bib-item').length,
  brandRows: document.querySelectorAll('#brandBody tr.brand-row').length,
  brandGroups: document.querySelectorAll('#brandBody tr.brand-group-row').length,
  knowledgeCards: document.querySelectorAll('.knowledge-card').length,
  materialRows: document.querySelectorAll('#materialBody tr').length,
  topicCards: document.querySelectorAll('.topic-card').length,
  graphNodes: document.querySelectorAll('.graph-node').length,
  graphEdges: document.querySelectorAll('.graph-edge').length,
  sectionHeights: [...document.querySelectorAll('main section[data-section]')].map(s => [s.id, Math.round(s.getBoundingClientRect().height)])
})`);

report.brandCounts = await evaluate(`({
  brandCards: document.querySelectorAll('#brandCards [data-brand-item]').length,
  brandFamilies: document.querySelectorAll('#brandCards [data-brand-group]').length,
  brandTableRows: document.querySelectorAll('#brandBody tr.brand-row').length,
  brandTableGroups: document.querySelectorAll('#brandBody tr.brand-group-row').length,
  brandCardDrinks: document.querySelectorAll('#brandCards .brand-drink[data-open]').length,
  brandTableDrinks: document.querySelectorAll('#brandBody .brand-drink-link[data-open]').length,
  brandChips: document.querySelectorAll('#brandCats [data-brand-cat]').length,
  brandTierLabels: document.querySelectorAll('#brandCards .brand-tier-label').length,
  firstTierLabel: document.querySelector('#brandCards .brand-tier-label')?.textContent.trim(),
  firstTierAria: document.querySelector('#brandCards .brand-tier')?.getAttribute('aria-label'),
  stat: document.querySelector('#brandStat')?.textContent.trim(),
  cardsHidden: document.querySelector('#brandCards')?.hidden,
  tableHidden: document.querySelector('#brandTableWrap')?.hidden
})`);
report.brandCards = report.brandCounts.brandCards;
report.brandFamilies = report.brandCounts.brandFamilies;
report.brandTableRows = report.brandCounts.brandTableRows;
report.brandTableGroups = report.brandCounts.brandTableGroups;
report.brandDrinkLinks = report.brandCounts.brandCardDrinks + report.brandCounts.brandTableDrinks;
report.brandTierLabels = report.brandCounts.brandTierLabels;
const tierSet = new Set(["日常", "进阶", "高价"]);
report.brandTierLabelCheck = {
  count: report.brandCounts.brandTierLabels,
  firstLabel: report.brandCounts.firstTierLabel,
  firstAria: report.brandCounts.firstTierAria,
  ok: tierSet.has(report.brandCounts.firstTierLabel)
    && tierSet.has((report.brandCounts.firstTierAria || "").replace(/^价格档：/, ""))
};

await scrollTo("#overview", 0);
await screenshot("01-hero.png");

await scrollTo("#architecture");
await screenshot("02-architecture.png");
await scrollTo("#derivationTree", 100);
await sleep(250);
await screenshot("02a-derivation-tree.png");
await scrollTo("#derivationMap", 100);
await sleep(250);
await screenshot("02a-derivation.png");
await scrollTo("#lineageMap", 100);
await sleep(250);
await screenshot("02d-lineage.png");

await scrollTo("#graph", 70);
await screenshot("02b-graph.png");
await evaluate(`(() => { const s = document.querySelector('#graphSearch'); s.value = 'Mai Tai'; s.dispatchEvent(new Event('input', { bubbles: true })); return true; })()`);
await sleep(300);
report.graphFilter = await evaluate(`({
  dimmed: document.querySelectorAll('.graph-node.is-dim').length,
  matched: document.querySelectorAll('.graph-node.is-match').length,
  results: document.querySelectorAll('.graph-search-item').length
})`);
await evaluate("document.querySelector('.graph-search-item').click()");
await sleep(500);
report.graphSearchSelection = await evaluate(`({
  detailTitle: document.querySelector('#graphDetail h4')?.textContent,
  transform: document.querySelector('#graphViewport').getAttribute('transform'),
  resultHidden: document.querySelector('#graphSearchResults').hidden,
  inputValue: document.querySelector('#graphSearch').value
})`);
await screenshot("02f-graph-search.png");
await evaluate("document.querySelector('#graphReset').click()");
await sleep(650);
const graphNodeBox = await evaluate(`(() => {
  const canvas = document.querySelector('.graph-canvas').getBoundingClientRect();
  const nodes = [...document.querySelectorAll('.graph-node circle')];
  const c = nodes.find((n) => {
    const r = n.getBoundingClientRect();
    return r.left > canvas.left + 180 && r.right < canvas.right - 180 && r.top > canvas.top + 90 && r.bottom < canvas.bottom - 90;
  });
  if (!c) return null;
  const r = c.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
})()`);
if (graphNodeBox) {
  await send("Input.dispatchMouseEvent", { type: "mousePressed", x: graphNodeBox.x, y: graphNodeBox.y, button: "left", clickCount: 1 });
  await send("Input.dispatchMouseEvent", { type: "mouseReleased", x: graphNodeBox.x, y: graphNodeBox.y, button: "left", clickCount: 1 });
}
const graphOpened = !!graphNodeBox;
await sleep(400);
report.graphSelection = await evaluate(`({
  nodeClicked: ${graphOpened},
  detailTitle: document.querySelector('#graphDetail h4')?.textContent,
  neighbors: document.querySelectorAll('.graph-neighbor').length,
  dimmed: document.querySelectorAll('.graph-node.is-dim').length,
  transform: document.querySelector('#graphViewport').getAttribute('transform'),
  backVisible: !document.querySelector('#graphBack').hidden,
  variantNodes: document.querySelectorAll('.graph-variant-node').length,
  variantChips: document.querySelectorAll('.graph-variant-chip').length
})`);
await screenshot("02c-graph-selected.png");
if (await evaluate("!!document.querySelector('.graph-variant-node')")) {
  await evaluate("document.querySelector('.graph-variant-node').dispatchEvent(new MouseEvent('click', { bubbles: true }))");
  await sleep(350);
  report.graphVariant = await evaluate(`({
    eyebrow: document.querySelector('#graphDetail .eyebrow')?.textContent,
    title: document.querySelector('#graphDetail h4')?.textContent,
    ingredients: document.querySelectorAll('.graph-variant-ing span').length
  })`);
}
await screenshot("02e-graph-variant.png");
if (await evaluate("!!document.querySelector('[data-graph-open]')")) {
  await evaluate("document.querySelector('[data-graph-open]').click()");
  await sleep(500);
}
report.graphModal = await evaluate(`({
  open: !document.querySelector('#recipeModal').hidden,
  title: document.querySelector('#modalTitle')?.textContent
})`);
if (report.graphModal.open) {
  await evaluate("document.querySelector('.modal-close').click()");
  await sleep(300);
}
await evaluate("document.querySelector('#graphBack').click()");
await sleep(500);
report.graphBack = await evaluate(`({
  transform: document.querySelector('#graphViewport').getAttribute('transform'),
  backHidden: document.querySelector('#graphBack').hidden,
  detailTitle: document.querySelector('#graphDetail h4')?.textContent
})`);
await evaluate("document.querySelector('[data-graph-zoom=\"in\"]').click()");
await sleep(250);
report.graphManual = await evaluate(`({
  label: document.querySelector('#graphZoomLabel').textContent,
  transform: document.querySelector('#graphViewport').getAttribute('transform')
})`);
await evaluate("document.querySelector('[data-graph-zoom=\"reset\"]').click()");
await sleep(650);

await scrollTo("#knowledgeGrid", 80);
await screenshot("07b-knowledge.png");

await scrollTo("#recipes");
await screenshot("03-recipes.png");

report.density = await evaluate(`(() => {
  document.querySelector('#densityBtn').click();
  return {
    button: document.querySelector('#densityBtn').textContent,
    compact: document.querySelector('#recipeGrid').classList.contains('is-compact'),
    cards: document.querySelectorAll('.recipe-card').length
  };
})()`);
await sleep(300);
await screenshot("03f-compact.png");
await evaluate("document.querySelector('#densityBtn').click()");
await sleep(250);

report.cardFlavorView = await evaluate(`(() => {
  document.querySelector('#flavorViewBtn').click();
  return {
    button: document.querySelector('#flavorViewBtn').textContent,
    radarCards: document.querySelectorAll('.card-radar').length,
    tagBlocks: document.querySelectorAll('.card-flavors').length
  };
})()`);
await sleep(300);
await screenshot("03c-radar-cards.png");
await evaluate("document.querySelector('#flavorViewBtn').click()");
await sleep(250);

report.pantry = await evaluate(`(() => {
  document.querySelector('#pantryBtn').click();
  return {
    open: !document.querySelector('#pantryModal').hidden,
    items: document.querySelectorAll('.pantry-item').length
  };
})()`);
await sleep(300);
await screenshot("03d-pantry.png");
await evaluate(`(() => {
  const click = (sel) => document.querySelector(sel)?.click();
  click('[data-pantry-item="gin"]');
  click('[data-pantry-item="lime"]');
  click('#pantryModeExclude');
  click('[data-pantry-item="raspberry-syrup"]');
  return true;
})()`);
await sleep(300);
report.pantryPicked = await evaluate(`({
  selected: [...document.querySelectorAll('.pantry-chip')].map(x => x.textContent.trim()),
  result: document.querySelector('#pantryResultCount')?.textContent
})`);
await evaluate("document.querySelector('#pantryApply').click()");
await sleep(450);
report.pantryApplied = await evaluate(`({
  cards: document.querySelectorAll('.recipe-card').length,
  active: [...document.querySelectorAll('.active-filter')].map(x => x.textContent.trim()),
  button: document.querySelector('#pantryBtn')?.textContent.trim()
})`);
await screenshot("03e-pantry-applied.png");
await evaluate("document.querySelector('[data-clear=\"pantry\"]')?.click()");
await sleep(350);

report.ibaFilters = {};
for (const [key, value] of [["U", "U"], ["C", "C"], ["N", "N"], ["none", "none"]]) {
  await evaluate(`(() => { const s = document.querySelector('#ibaSelect'); s.value = '${value}'; s.dispatchEvent(new Event('change', { bubbles: true })); return true; })()`);
  await sleep(220);
  report.ibaFilters[key] = await evaluate("document.querySelectorAll('.recipe-card').length");
  if (value === "none") {
    await scrollTo("#recipes", 65);
    await screenshot("03b-noniba.png");
  }
}
await evaluate(`(() => { const s = document.querySelector('#ibaSelect'); s.value = 'all'; s.dispatchEvent(new Event('change', { bubbles: true })); return true; })()`);
await sleep(250);

report.filterGin = await evaluate(`(() => {
  document.querySelector('#baseChips [data-base="gin"]').click();
  return {
    cards: document.querySelectorAll('.recipe-card').length,
    meta: document.querySelector('#resultMeta').textContent,
    active: [...document.querySelectorAll('.active-filter')].map(x => x.textContent.trim())
  };
})()`);
await sleep(350);
await scrollTo("#recipes");
await screenshot("04-recipes-filtered.png");

await evaluate("document.querySelector('#baseChips [data-base=\"all\"]').click()");
await sleep(250);
report.search = await evaluate(`(() => {
  const input = document.querySelector('#recipeSearch');
  input.value = '咖啡';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(400);
report.searchCount = await evaluate("document.querySelectorAll('.recipe-card').length");
await evaluate(`(() => {
  const input = document.querySelector('#recipeSearch');
  input.value = '代基里';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(400);
report.aliasSearch = await evaluate(`({
  cards: document.querySelectorAll('.recipe-card').length,
  first: document.querySelector('.recipe-card h3')?.textContent
})`);
await evaluate(`(() => {
  const input = document.querySelector('#recipeSearch');
  input.value = '白夫人';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(400);
report.whiteLadySearch = await evaluate(`({
  cards: document.querySelectorAll('.recipe-card').length,
  first: document.querySelector('.recipe-card h3')?.textContent
})`);
await evaluate(`(() => {
  const input = document.querySelector('#recipeSearch');
  input.value = '';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(400);

await scrollTo("#bases");
await screenshot("05-bases.png");
await evaluate("document.querySelector('[data-spirit-page=\"whiskey\"]').click()");
await sleep(450);
report.spiritModal = await evaluate(`({
  open: !document.querySelector('#spiritModal').hidden,
  title: document.querySelector('#spiritTitle')?.textContent,
  subtypes: document.querySelectorAll('.spirit-subtype').length,
  recipes: document.querySelectorAll('.spirit-recipe').length
})`);
await screenshot("05c-spirit-whiskey.png");
await evaluate("document.querySelector('[data-spirit-close]').click()");
await sleep(250);
await scrollTo("#brands", 70);
await screenshot("05b-brands.png");

/* 酒款速查：搜索「波本」（全字段搜索，命中 bourbon + rye + japanese 均属预期） */
await evaluate(`(() => {
  const input = document.querySelector('#brandSearch');
  input.value = '波本';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(400);
report.brandSearch = await evaluate(`(() => {
  const cards = [...document.querySelectorAll('#brandCards [data-brand-item]')];
  const bourbon = document.querySelector('#brand-bourbon');
  return {
    visibleCards: cards.filter((el) => el.offsetParent !== null).length,
    visibleFamilies: [...document.querySelectorAll('#brandCards [data-brand-group]')].filter((el) => el.offsetParent !== null).length,
    bourbonPresent: !!bourbon,
    bourbonHidden: bourbon ? bourbon.hidden : null,
    bourbonVisible: bourbon ? bourbon.offsetParent !== null : false,
    stat: document.querySelector('#brandStat')?.textContent.trim()
  };
})()`);
report.brandSearch.match = report.brandSearch.visibleCards >= 1
  && report.brandSearch.bourbonPresent
  && report.brandSearch.bourbonHidden === false
  && report.brandSearch.bourbonVisible
  && (report.brandSearch.stat || '').includes('/ 32');
await evaluate(`(() => {
  const input = document.querySelector('#brandSearch');
  input.value = '';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(350);

/* 酒款速查：唯一品牌搜索「Maker's Mark」 */
await evaluate(`(() => {
  const input = document.querySelector('#brandSearch');
  input.value = "Maker's Mark";
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(400);
report.brandSingleBrandSearch = await evaluate(`(() => {
  const cards = [...document.querySelectorAll('#brandCards [data-brand-item]')].filter((el) => el.offsetParent !== null);
  const bourbon = document.querySelector('#brand-bourbon');
  return {
    visibleCards: cards.length,
    visibleIds: cards.map((el) => el.id),
    bourbonPresent: !!bourbon,
    bourbonVisible: bourbon ? bourbon.offsetParent !== null : false,
    stat: document.querySelector('#brandStat')?.textContent.trim()
  };
})()`);
report.brandSingleBrandSearch.match = report.brandSingleBrandSearch.visibleCards === 1
  && report.brandSingleBrandSearch.visibleIds[0] === 'brand-bourbon'
  && report.brandSingleBrandSearch.bourbonVisible
  && (report.brandSingleBrandSearch.stat || '').includes('/ 32');
await evaluate(`(() => {
  const input = document.querySelector('#brandSearch');
  input.value = '';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(350);

/* 酒款速查：家族 chip「威士忌」 */
await evaluate(`(() => {
  const chip = document.querySelector('#brandCats [data-brand-cat="whiskey"]');
  if (!chip) return false;
  chip.click();
  return true;
})()`);
await sleep(400);
report.brandFamilyChip = await evaluate(`({
  exists: !!document.querySelector('#brandCats [data-brand-cat="whiskey"]'),
  pressed: document.querySelector('#brandCats [data-brand-cat="whiskey"]')?.getAttribute('aria-pressed'),
  active: document.querySelector('#brandCats [data-brand-cat="whiskey"]')?.classList.contains('is-active'),
  visibleCards: [...document.querySelectorAll('#brandCards [data-brand-item]')].filter((el) => el.offsetParent !== null).length,
  visibleFamilies: [...document.querySelectorAll('#brandCards [data-brand-group]')].filter((el) => el.offsetParent !== null).length,
  stat: document.querySelector('#brandStat')?.textContent.trim()
})`);
report.brandFamilyChip.statIncludes = (report.brandFamilyChip.stat || '').includes('显示 6 / 32');
await scrollTo('#brands [data-brand-group="whiskey"]', 90);
await sleep(250);
await screenshot("05b1-brands-family.png");

/* 酒款速查：视图切换 → 对照表 */
await evaluate("document.querySelector('#brandCats [data-brand-cat=\"all\"]')?.click()");
await sleep(350);
await evaluate("document.querySelector('[data-brand-view=\"table\"]')?.click()");
await sleep(400);
report.brandTableView = await evaluate(`({
  tableVisible: !document.querySelector('#brandTableWrap').hidden,
  cardsHidden: document.querySelector('#brandCards').hidden,
  tablePressed: document.querySelector('[data-brand-view="table"]')?.getAttribute('aria-pressed'),
  cardsPressed: document.querySelector('[data-brand-view="cards"]')?.getAttribute('aria-pressed'),
  tableRows: document.querySelectorAll('#brandBody tr.brand-row').length,
  tableGroups: document.querySelectorAll('#brandBody tr.brand-group-row').length
})`);
await scrollTo("#brands", 70);
await sleep(250);
await screenshot("05b2-brands-table.png");
await evaluate("document.querySelector('[data-brand-view=\"cards\"]')?.click()");
await sleep(350);

/* 酒款速查：卡片上的配方 chip → 配方弹窗 */
report.brandDrinkClick = await evaluate(`(() => {
  const btn = document.querySelector('#brandCards .brand-drink[data-open]');
  if (!btn) return { found: false };
  const recipeId = btn.dataset.open;
  let expectedTitle = null;
  try {
    expectedTitle = typeof BY_ID !== 'undefined' && BY_ID[recipeId] ? BY_ID[recipeId].zh : null;
  } catch (e) {}
  btn.click();
  return { found: true, recipeId, buttonLabel: btn.textContent.trim(), expectedTitle };
})()`);
await sleep(650);
report.brandDrinkModal = await evaluate(`({
  open: !document.querySelector('#recipeModal').hidden,
  title: document.querySelector('#modalTitle')?.textContent.trim()
})`);
report.brandDrinkModal.recipeId = report.brandDrinkClick.recipeId;
report.brandDrinkModal.buttonLabel = report.brandDrinkClick.buttonLabel;
report.brandDrinkModal.expectedTitle = report.brandDrinkClick.expectedTitle;
report.brandDrinkModal.match = !!report.brandDrinkModal.title
  && report.brandDrinkModal.title === (report.brandDrinkClick.expectedTitle || report.brandDrinkClick.buttonLabel);
await evaluate("document.querySelector('#recipeModal .modal-close')?.click()");
await sleep(450);

/* 酒款速查：基酒卡片的 .base-guide-link → 跳转并筛选 */
await scrollTo("#bases", 70);
await sleep(250);
report.brandBaseLink = await evaluate(`({
  links: document.querySelectorAll('.base-guide-link').length,
  whiskey: !!document.querySelector('.base-guide-link[data-brand-family="whiskey"]')
})`);
await evaluate(`(() => {
  const btn = document.querySelector('.base-guide-link[data-brand-family="whiskey"]');
  if (!btn) return false;
  btn.click();
  return true;
})()`);
await sleep(1200);
report.brandBaseJump = await evaluate(`({
  chipPressed: document.querySelector('#brandCats [data-brand-cat="whiskey"]')?.getAttribute('aria-pressed'),
  chipActive: document.querySelector('#brandCats [data-brand-cat="whiskey"]')?.classList.contains('is-active'),
  visibleCards: [...document.querySelectorAll('#brandCards [data-brand-item]')].filter((el) => el.offsetParent !== null).length,
  stat: document.querySelector('#brandStat')?.textContent.trim(),
  brandsTop: Math.round(document.querySelector('#brands').getBoundingClientRect().top),
  flash: !!document.querySelector('.brand-family.is-flash')
})`);
await evaluate("document.querySelector('#brandCats [data-brand-cat=\"all\"]')?.click()");
await sleep(300);

await scrollTo("#modifiers");
await screenshot("06-modifiers.png");
await scrollTo("#materials", 70);
await screenshot("06b-materials.png");
await evaluate(`(() => {
  const input = document.querySelector('#materialSearch');
  input.value = '青柠';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await sleep(300);
report.materialFilter = await evaluate(`({
  visible: [...document.querySelectorAll('#materialBody tr')].filter((r) => !r.hidden).length,
  stat: document.querySelector('#materialStat')?.textContent
})`);
await evaluate(`(() => {
  const input = document.querySelector('#materialSearch');
  input.value = '';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await scrollTo("#technique");
await screenshot("07-technique.png");
await scrollTo("#reference");
await screenshot("08-reference.png");
await scrollTo("#sources", 78);
await screenshot("08b-sources.png");
await scrollTo("#topics", 70);
await screenshot("08c-topics.png");

await evaluate("window.scrollTo(0,0)");
await sleep(300);
await evaluate("document.querySelector('[data-open=\"daiquiri\"]').click()");
await sleep(700);
report.modal = await evaluate(`({
  hidden: document.querySelector('#recipeModal').hidden,
  open: document.querySelector('#recipeModal').classList.contains('is-open'),
  title: document.querySelector('#modalTitle')?.textContent,
  ingredients: document.querySelectorAll('.ing-list li').length,
  steps: document.querySelectorAll('.step-list li').length,
  variants: document.querySelectorAll('.variant').length,
  completeVariants: document.querySelectorAll('.variant-complete').length,
  related: document.querySelectorAll('.related-item').length,
  history: !!document.querySelector('.history-block'),
  aliases: document.querySelector('.modal-aliases')?.textContent.trim(),
  modalGraph: !!document.querySelector('.modal-graph-svg'),
  officialSpec: !!document.querySelector('.official-spec'),
  ibaSource: !!document.querySelector('.iba-source'),
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth
})`);
await screenshot("09-modal.png");
await evaluate("document.querySelector('.modal-graph-block').scrollIntoView({ block: 'center' })");
await sleep(350);
report.modalGraph = await evaluate(`({
  nodes: document.querySelectorAll('.modal-graph-node').length,
  variants: document.querySelectorAll('.modal-variant-node').length,
  svg: !!document.querySelector('.modal-graph-svg')
})`);
await screenshot("09g-modal-graph.png");
await evaluate("document.querySelector('.modal-close').click()");
await sleep(300);
await evaluate("window.scrollTo(0,0)");
await sleep(200);
await evaluate("document.querySelector('[data-open=\"daiquiri\"]').click()");
await sleep(600);
await evaluate("document.querySelector('.flavor-switch [data-flavor-view=\"radar\"]').click()");
await sleep(350);
report.flavorModal = await evaluate(`({
  radarVisible: !document.querySelector('[data-flavor-panel="radar"]').hidden,
  tagsHidden: document.querySelector('[data-flavor-panel="tags"]').hidden,
  labels: document.querySelectorAll('.radar-label').length,
  note: document.querySelector('.flavor-note')?.textContent.trim()
})`);
await screenshot("09f-radar-modal.png");
await evaluate("document.querySelector('.flavor-switch [data-flavor-view=\"tags\"]').click()");
await sleep(250);
await evaluate("document.querySelector('.variant-list').scrollIntoView({ block: 'start' })");
await sleep(400);
await screenshot("09c-variants.png");

await evaluate("document.querySelector('.modal-close').click()");
await sleep(400);
await evaluate("window.scrollTo(0,0)");
await sleep(200);
await evaluate("document.querySelector('[data-open=\"alexander\"]').click()");
await sleep(600);
report.ibaModal = await evaluate(`({
  title: document.querySelector('#modalTitle')?.textContent,
  history: !!document.querySelector('.history-block'),
  source: !!document.querySelector('.iba-source'),
  sourceLink: document.querySelector('.iba-source a')?.getAttribute('href'),
  completeVariants: document.querySelectorAll('.variant-complete').length,
  sourceBadge: document.querySelector('.source-badge')?.textContent.trim()
})`);
await screenshot("09b-iba-modal.png");
await evaluate("document.querySelector('.modal-close').click()");
await sleep(400);
await evaluate("window.scrollTo(0,0)");
await sleep(200);
await evaluate("document.querySelector('[data-open=\"painkiller\"]').click()");
await sleep(500);
report.nonIbaModal = await evaluate(`({
  title: document.querySelector('#modalTitle')?.textContent,
  external: document.querySelector('.iba-source')?.classList.contains('is-external'),
  sourceBadge: document.querySelector('.source-badge')?.textContent.trim(),
  sourceLabel: document.querySelector('.iba-source-head p')?.textContent.trim(),
  sourceJump: !!document.querySelector('.source-jump'),
  completeVariants: document.querySelectorAll('.variant-complete').length
})`);
await evaluate("document.querySelector('.source-jump').click()");
await sleep(700);
report.sourceJump = await evaluate(`({
  modalHidden: document.querySelector('#recipeModal').hidden,
  sourcesTop: Math.round(document.querySelector('#sources').getBoundingClientRect().top),
  hash: location.hash,
  topbar: document.querySelector('#topbarTitle').textContent
})`);
await screenshot("09d-sources-jump.png");

await evaluate("window.scrollTo(0,0)");
await sleep(250);
await evaluate("document.querySelector('[data-open=\"pegu-club\"]').click()");
await sleep(600);
report.nonIbaNew = await evaluate(`({
  title: document.querySelector('#modalTitle')?.textContent,
  sourceBadge: document.querySelector('.source-badge')?.textContent.trim(),
  sourceLabel: document.querySelector('.iba-source-head p')?.textContent.trim(),
  completeVariants: document.querySelectorAll('.variant-complete').length,
  history: !!document.querySelector('.history-block')
})`);
await screenshot("09e-noniba-new.png");
await evaluate("document.querySelector('.modal-close').click()");
await sleep(400);

await evaluate("document.querySelector('#themeBtn').click()");
await sleep(500);
await evaluate("window.scrollTo(0,0)");
await sleep(350);
await screenshot("10-dark-hero.png");
await scrollTo("#recipes", 65);
await screenshot("11-dark-recipes.png");

await send("Page.reload", { ignoreCache: true });
await sleep(1400);
report.themeAfterReload = await evaluate("document.documentElement.dataset.theme");
await evaluate("document.querySelector('#themeBtn').click()");
await sleep(400);
report.themeAfterToggleBack = await evaluate("document.documentElement.dataset.theme");

await setViewport(390, 844);
await evaluate("window.scrollTo(0,0)");
await sleep(600);
report.mobile = await evaluate(`({
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth,
  heroHeight: Math.round(document.querySelector('#overview').getBoundingClientRect().height),
  menuVisible: getComputedStyle(document.querySelector('#menuBtn')).display,
  baseChipRow: (() => { const el = document.querySelector('#baseChips'); return { scrollWidth: el.scrollWidth, clientWidth: el.clientWidth }; })()
})`);
report.mobileOverflow = await evaluate(`(() => {
  const vw = innerWidth;
  return [...document.querySelectorAll('body *')].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.right > vw + 2 && getComputedStyle(el).position !== 'fixed';
  }).slice(0, 20).map((el) => ({ tag: el.tagName, cls: el.getAttribute('class'), right: Math.round(el.getBoundingClientRect().right), width: Math.round(el.getBoundingClientRect().width) }));
})()`);
await screenshot("12-mobile-hero.png");

await scrollTo("#brands", 70);
await sleep(400);
report.brandMobile = await evaluate(`(() => {
  const brands = document.querySelector('#brands');
  const cards = [...document.querySelectorAll('#brandCards .brand-card')];
  const toolbar = document.querySelector('.brand-toolbar');
  return {
    cards: document.querySelectorAll('#brandCards [data-brand-item]').length,
    families: document.querySelectorAll('#brandCards [data-brand-group]').length,
    cardsHidden: document.querySelector('#brandCards').hidden,
    brandsScrollWidth: brands.scrollWidth,
    brandsClientWidth: brands.clientWidth,
    brandsOverflow: brands.scrollWidth - brands.clientWidth,
    docScrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
    maxCardWidth: Math.round(Math.max(0, ...cards.map((el) => el.getBoundingClientRect().width))),
    toolbarOverflow: toolbar ? toolbar.scrollWidth - toolbar.clientWidth : null
  };
})()`);
await screenshot("05b3-brands-mobile.png");

await scrollTo("#recipes", 60);
await screenshot("13-mobile-recipes.png");
await evaluate("document.querySelector('#flavorViewBtn').click()");
await sleep(300);
report.mobileRadar = await evaluate(`({
  cards: document.querySelectorAll('.card-radar').length,
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth
})`);
await screenshot("13b-mobile-radar.png");
await evaluate("document.querySelector('#flavorViewBtn').click()");
await sleep(250);

report.mobileFiltersBefore = await evaluate("getComputedStyle(document.querySelector('#filterPanel')).display");
await evaluate("document.querySelector('#filterToggle').click()");
await sleep(350);
report.mobileFiltersAfter = await evaluate(`({
  display: getComputedStyle(document.querySelector('#filterPanel')).display,
  expanded: document.querySelector('#filterToggle').getAttribute('aria-expanded'),
  baseChipRow: (() => { const el = document.querySelector('#baseChips'); return { scrollWidth: el.scrollWidth, clientWidth: el.clientWidth }; })()
})`);
await screenshot("16-mobile-filters.png");
await evaluate("document.querySelector('#baseChips [data-base=\"gin\"]').click()");
await sleep(250);
report.mobileFiltered = await evaluate(`({
  cards: document.querySelectorAll('.recipe-card').length,
  count: document.querySelector('#filterActiveCount').textContent
})`);
await evaluate("document.querySelector('#resetFilters').click()");
await sleep(250);

await evaluate("document.querySelector('[data-open=\"bramble\"]').click()");
await sleep(600);
report.mobileRecipe = await evaluate(`({
  panelWidth: Math.round(document.querySelector('.modal-panel').getBoundingClientRect().width),
  panelHeight: Math.round(document.querySelector('.modal-panel').getBoundingClientRect().height),
  innerWidth: window.innerWidth,
  scrollWidth: document.querySelector('#modalScroll').scrollWidth,
  clientWidth: document.querySelector('#modalScroll').clientWidth
})`);
await screenshot("14-mobile-modal.png");
await evaluate("document.querySelector('.modal-close').click()");
await sleep(300);
await evaluate("openSpiritPage('whiskey')");
await sleep(500);
report.mobileSpirit = await evaluate(`({
  open: !document.querySelector('#spiritModal').hidden,
  panelWidth: Math.round(document.querySelector('.spirit-panel').getBoundingClientRect().width),
  innerWidth: window.innerWidth,
  scrollWidth: document.querySelector('#spiritScroll').scrollWidth,
  clientWidth: document.querySelector('#spiritScroll').clientWidth
})`);
await screenshot("14b-mobile-spirit.png");
await evaluate("closeSpiritPage()");
await sleep(300);

await evaluate("document.querySelector('#pantryBtn').click()");
await sleep(350);
report.mobilePantry = await evaluate(`({
  open: !document.querySelector('#pantryModal').hidden,
  panelWidth: Math.round(document.querySelector('.pantry-panel').getBoundingClientRect().width),
  innerWidth: window.innerWidth,
  scrollWidth: document.documentElement.scrollWidth
})`);
await screenshot("17-mobile-pantry.png");
await evaluate("document.querySelector('[data-pantry-close]').click()");
await sleep(300);

await evaluate("document.querySelector('#menuBtn').click()");
await sleep(300);
await screenshot("15-mobile-nav.png");

report.errors = errors;
report.consoleErrors = consoleMessages;
report.url = URL;
await fs.writeFile(path.join(OUT, "report.json"), JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));

try { await send("Browser.close"); } catch (e) {}
chrome.kill();
await sleep(300);
process.exit(errors.length ? 1 : 0);
