#!/usr/bin/env python3
"""
Split networks_course.html — full HTML per chapter with auto-navigation.
Each chapter file = complete course HTML, auto-navigates to the right chapter.
"""
import os, re, json

SRC    = "/home/hila/Desktop/NetworksGuide/מסלול רשתות תקשורת/networks_course.html"
OUT_HE = "/home/hila/Desktop/NetworksGuide/public/learn/networks"
OUT_EN = "/home/hila/Desktop/NetworksGuide/public/learn/networks-en"
os.makedirs(OUT_HE, exist_ok=True)
os.makedirs(OUT_EN, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# ── Extract chapter metadata ─────────────────────────────────────────────
def extract_chapter_meta(src, n):
    ch_pat   = r'n:\s*' + str(n)   + r',\s*icon:\s*"([^"]+)"'
    next_pat = r'n:\s*' + str(n+1) + r',\s*icon:'
    m     = re.search(ch_pat,   src)
    m_end = re.search(next_pat, src)
    if not m:
        return (f"פרק {n}", f"Chapter {n}", "📖")
    icon = json.loads('"' + m.group(1) + '"')
    region = src[m.start(): (m_end.start() if m_end else len(src))]
    he_name = re.search(r'he:\s*\{.*?name:\s*"([^"]+)"', region, re.DOTALL)
    en_name = re.search(r'en:\s*\{.*?name:\s*"([^"]+)"', region, re.DOTALL)
    return (
        he_name.group(1) if he_name else f"פרק {n}",
        en_name.group(1) if en_name else f"Chapter {n}",
        icon,
    )

def write(path, fname, html):
    fp = os.path.join(path, fname)
    with open(fp, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname}  ({len(html):,} chars)")

# ── Generate chapter files as FULL HTML with auto-nav ────────────────────
print("\n── Learn chapters (Full HTML, Hebrew) ──")
for i in range(12):
    n = i + 1
    ch_raw = raw.replace('</script>', f"""
/* Auto-navigate to chapter {n} */
setTimeout(function(){{ goTo('learn'); loadCh({n}); }}, 200);
</script>""", 1)
    write(OUT_HE, f"learn_ch{n:02d}.html", ch_raw)

print("\n── Learn chapters (Full HTML, English) ──")
for i in range(12):
    n = i + 1
    ch_raw = raw.replace('</script>', f"""
/* Auto-navigate to chapter {n} in English */
setTimeout(function(){{ toggleLang(); goTo('learn'); loadCh({n}); }}, 200);
</script>""", 1)
    write(OUT_EN, f"learn_ch{n:02d}.html", ch_raw)

# ── Standalone files ─────────────────────────────────────────────────────
print("\n── Standalone files ──")

quiz_raw = raw.replace('</script>', """
/* Auto-switch to quiz tab on load */
setTimeout(function(){ goTo('quiz'); }, 200);
</script>""", 1)
write(OUT_HE, "quiz_game.html", quiz_raw)

lab_raw = raw.replace('</script>', """
/* Auto-switch to lab tab on load */
setTimeout(function(){ goTo('lab'); }, 200);
</script>""", 1)
write(OUT_HE, "terminal.html", lab_raw)

# ── Chapter metadata ─────────────────────────────────────────────────────
print("\n── Chapter metadata ──")
for i in range(12):
    n = i + 1
    he_name, en_name, icon = extract_chapter_meta(raw, n)
    print(f"  ch{n:02d}: he='{icon} {he_name}' | en='{en_name}'")

print(f"\nDone! {OUT_HE} ({len(os.listdir(OUT_HE))} files)")
print(f"      {OUT_EN} ({len(os.listdir(OUT_EN))} files)")
