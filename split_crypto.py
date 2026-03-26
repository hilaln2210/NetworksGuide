#!/usr/bin/env python3
"""
Split crypto_course.html (CHAPTERS-array format) into standalone files.
Generates:
  public/learn/crypto/       — Hebrew learn chapters + terminal lab
  public/learn/crypto-en/    — English learn chapters
"""
import os, re, json

SRC    = "/home/hila/Desktop/NetworksGuide/מסלול קריפטו/crypto_course.html"
OUT_HE = "/home/hila/Desktop/NetworksGuide/public/learn/crypto"
OUT_EN = "/home/hila/Desktop/NetworksGuide/public/learn/crypto-en"
os.makedirs(OUT_HE, exist_ok=True)
os.makedirs(OUT_EN, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# ── 1. Extract <head> CSS ──────────────────────────────────────────────────
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_inner = head_match.group(1) if head_match else ""

# ── 2. Extract all template-literal content blocks ─────────────────────────
def extract_template_literals(src):
    marker = 'content: function() { return `'
    results = []
    pos = 0
    while True:
        start = src.find(marker, pos)
        if start == -1:
            break
        content_start = start + len(marker)
        end = src.find('`', content_start)
        if end == -1:
            break
        results.append(src[content_start:end].strip())
        pos = end + 1
    return results

all_blocks = extract_template_literals(raw)
if len(all_blocks) != 24:
    print(f"⚠  Expected 24 content blocks, got {len(all_blocks)}")

he_blocks = all_blocks[0::2]   # indices 0, 2, 4, ... = Hebrew
en_blocks = all_blocks[1::2]   # indices 1, 3, 5, ... = English

# ── 3. Extract chapter metadata from CHAPTERS array ────────────────────────
def extract_chapter_meta(src, n):
    """Return (he_name, he_desc, en_name, en_desc, icon) for chapter n."""
    ch_pat   = r'n:\s*' + str(n)   + r',\s*icon:\s*"([^"]+)"'
    next_pat = r'n:\s*' + str(n+1) + r',\s*icon:'
    m     = re.search(ch_pat,   src)
    m_end = re.search(next_pat, src)
    if not m:
        return (f"פרק {n}", "", f"Chapter {n}", "", "📖")

    icon = json.loads('"' + m.group(1) + '"')
    region = src[m.start(): (m_end.start() if m_end else len(src))]

    he_name = re.search(r'he:\s*\{.*?name:\s*"([^"]+)"', region, re.DOTALL)
    he_desc = re.search(r'he:\s*\{.*?desc:\s*"([^"]+)"', region, re.DOTALL)
    en_name = re.search(r'en:\s*\{.*?name:\s*"([^"]+)"', region, re.DOTALL)
    en_desc = re.search(r'en:\s*\{.*?desc:\s*"([^"]+)"', region, re.DOTALL)

    return (
        he_name.group(1) if he_name else f"פרק {n}",
        he_desc.group(1) if he_desc else "",
        en_name.group(1) if en_name else f"Chapter {n}",
        en_desc.group(1) if en_desc else "",
        icon,
    )

# ── 4. HTML wrapper ────────────────────────────────────────────────────────
def make_html(lang, dir_, body_content):
    return f"""<!DOCTYPE html>
<html lang="{lang}" dir="{dir_}">
<head>
{head_inner}
</head>
<body>
<div style="max-width:860px;margin:0 auto;padding:24px 16px 80px;">
{body_content}
</div>
</body>
</html>"""

def write(path, fname, html):
    fp = os.path.join(path, fname)
    with open(fp, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname}  ({len(html):,} chars)")

# ── 5. Generate chapter files as FULL HTML with auto-nav ─────────────────
# Each chapter file = full course HTML, auto-navigates to that chapter.
# This gives the user full access to learn/lab/quiz tabs from every chapter.
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
    # For English: auto-switch language + navigate to chapter
    ch_raw = raw.replace('</script>', f"""
/* Auto-navigate to chapter {n} in English */
setTimeout(function(){{ toggleLang(); goTo('learn'); loadCh({n}); }}, 200);
</script>""", 1)
    write(OUT_EN, f"learn_ch{n:02d}.html", ch_raw)

# ── 6. Generate quiz + lab standalone files ──────────────────────────────
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
write(OUT_HE, "lab.html", lab_raw)

write(OUT_HE, "terminal.html", raw)

# ── 7. Print chapter metadata for content.js update ───────────────────────
print("\n── Chapter metadata (for content.js) ──")
for i in range(12):
    n = i + 1
    he_name, he_desc, en_name, en_desc, icon = extract_chapter_meta(raw, n)
    print(f"  ch{n:02d}: he='{icon} {he_name}' | en='{en_name}'")

print(f"\nDone! {OUT_HE} ({len(os.listdir(OUT_HE))} files)")
print(f"      {OUT_EN} ({len(os.listdir(OUT_EN))} files)")
