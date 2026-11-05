from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"

data_files = [
    "data-core.js",
    "data-gin.js",
    "data-whiskey.js",
    "data-rum.js",
    "data-agave.js",
    "data-brandy.js",
    "data-vodka.js",
    "data-other.js",
    "data-liqueur.js",
    "data-wine.js",
    "data-low.js",
    "data-extra.js",
    "data-iba.js",
    "data-classics.js",
    "data-more.js",
    "data-sources.js",
    "data-brands.js",
    "data-pantry.js",
    "data-graph.js",
    "data-variants.js",
    "data-topic-systems.js",
    "data-materials.js",
    "data-aliases.js",
    "data-material-library.js",
    "data-spirit-details.js",
    "data-architecture.js",
    "data-learning.js",
]

shell = (SRC / "shell.html").read_text(encoding="utf-8")
styles = (SRC / "styles.css").read_text(encoding="utf-8")
data = "\n\n".join((SRC / name).read_text(encoding="utf-8") for name in data_files)
app = (SRC / "app.js").read_text(encoding="utf-8")

html = (
    shell
    .replace("/*__STYLES__*/", styles)
    .replace("/*__DATA__*/", data)
    .replace("/*__APP__*/", app)
)

out = ROOT / "bar-atlas.html"
out.write_text(html, encoding="utf-8")
print(f"Built {out} ({out.stat().st_size / 1024:.1f} KB)")
