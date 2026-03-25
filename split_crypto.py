#!/usr/bin/env python3
"""Split crypto_bilingual.html into standalone chapter/lab/quiz files (HE + EN)."""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול קריפטוגרפיה/crypto_bilingual.html"
OUT_HE = "/home/hila/Desktop/NetworksGuide/public/learn/crypto"
OUT_EN = "/home/hila/Desktop/NetworksGuide/public/learn/crypto-en"

os.makedirs(OUT_HE, exist_ok=True)
os.makedirs(OUT_EN, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# ── 1. Extract <head> CSS ────────────────────────────────────────────────────
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_inner = head_match.group(1) if head_match else ""

# ── 2. Extract <script> block ────────────────────────────────────────────────
script_match = re.search(r'(<script>.*?</script>)\s*</body>', raw, re.DOTALL)
shared_js = script_match.group(1) if script_match else ""

# ── 3. Mobile-fix CSS ────────────────────────────────────────────────────────
mobile_fix = """<style>
html, body { overflow-x: hidden; }
@media (max-width: 800px) {
  .container { padding: 0 12px; }
  pre, code { font-size: 0.78rem; }
  table { font-size: 0.82rem; }
}
@media (max-width: 480px) {
  .container { padding: 0 6px; }
  .ch, .mission-card { padding: 12px 8px; }
  pre { padding: 10px 8px; }
}
</style>"""

# ── 4. HTML wrapper ──────────────────────────────────────────────────────────
def make_html(title, body_content, lang="he"):
    direction = "rtl" if lang == "he" else "ltr"
    root_class = "" if lang == "he" else ' class="en"'
    return f"""<!DOCTYPE html>
<html lang="{lang}" dir="{direction}" id="root"{root_class}>
<head>
{head_inner}
{mobile_fix}
</head>
<body>
{body_content}
{shared_js}
</body>
</html>
"""

# ── 5. Extract body ──────────────────────────────────────────────────────────
body_match = re.search(r'<body>(.*?)<footer', raw, re.DOTALL)
body = body_match.group(1) if body_match else raw

# ── 6. Hebrew chapters (c1..c10) ─────────────────────────────────────────────
he_ch = []
for i in range(1, 11):
    m = re.search(r'<div\s+class="ch"\s+id="c' + str(i) + r'"', body)
    if m:
        he_ch.append(m.start())
    else:
        print(f"WARNING: HE c{i} not found")

# ── 7. English chapters (c1_en..c10_en) ──────────────────────────────────────
en_ch = []
for i in range(1, 11):
    m = re.search(r'<div\s+class="ch"\s+id="c' + str(i) + r'_en"', body)
    if m:
        en_ch.append(m.start())
    else:
        print(f"WARNING: EN c{i}_en not found")

# Boundaries
labs_m = re.search(r'<div\s+id="labs"', body)
labs_start = labs_m.start() if labs_m else len(body)

en_end_m = re.search(r'</div>\s*</div>\s*</div>\s*<div\s+id="labs"', body)
en_chapters_end = en_end_m.start() if en_end_m else labs_start

he_end_m = re.search(r'<div\s+class="en-b"><div\s+class="chapters"', body)
he_chapters_end = he_end_m.start() if he_end_m else (en_ch[0] if en_ch else labs_start)

print(f"HE chapters: {len(he_ch)}, EN chapters: {len(en_ch)}")

# ── 8. Names ─────────────────────────────────────────────────────────────────
he_names = [
    "מבוא לקריפטוגרפיה", "קידוד vs הצפנה vs גיבוב",
    "צפנים קלאסיים", "XOR — הבסיס של הצפנה מודרנית",
    "Block Ciphers — AES", "Stream Ciphers — ChaCha20",
    "Hashing — MD5, SHA, Salt", "שמירת סיסמאות — bcrypt, Argon2",
    "Random Numbers וניהול מפתחות", "תקיפת הצפנה",
]
en_names = [
    "Introduction to Cryptography", "Encoding vs Encryption vs Hashing",
    "Classical Ciphers", "XOR — Foundation of Modern Encryption",
    "Block Ciphers — AES", "Stream Ciphers — ChaCha20",
    "Hashing — MD5, SHA, Salt", "Password Storage — bcrypt, Argon2",
    "Random Numbers & Key Management", "Breaking Encryption",
]

def auto_open(chunk, ch_id):
    chunk = re.sub(
        r'<div\s+class="ch"\s+id="' + re.escape(ch_id) + r'"',
        f'<div class="ch open" id="{ch_id}"',
        chunk, count=1
    )
    chunk = re.sub(r'(<div\s+class="ch-body")', r'\1 style="display:block"', chunk)
    return chunk

# ── 9. Write HE chapters ────────────────────────────────────────────────────
for i, start in enumerate(he_ch):
    end = he_ch[i + 1] if i + 1 < len(he_ch) else he_chapters_end
    chunk = auto_open(body[start:end].rstrip(), f"c{i+1}")
    html = make_html(he_names[i], f'<div class="container">\n{chunk}\n</div>', "he")
    path = os.path.join(OUT_HE, f"learn_ch{i+1:02d}.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  [HE] learn_ch{i+1:02d}.html ({len(html)} chars)")

# ── 10. Write EN chapters ───────────────────────────────────────────────────
for i, start in enumerate(en_ch):
    end = en_ch[i + 1] if i + 1 < len(en_ch) else en_chapters_end
    chunk = auto_open(body[start:end].rstrip(), f"c{i+1}_en")
    html = make_html(en_names[i], f'<div class="container">\n{chunk}\n</div>', "en")
    path = os.path.join(OUT_EN, f"learn_ch{i+1:02d}.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  [EN] learn_ch{i+1:02d}.html ({len(html)} chars)")

# ── 11. Labs (bilingual) ────────────────────────────────────────────────────
lb_pos = []
for i in range(1, 7):
    m = re.search(r'id="lb' + str(i) + r'"', body)
    if m:
        lb_pos.append(m.start())

quiz_m = re.search(r'<div\s+id="quiz"', body)
quiz_start = quiz_m.start() if quiz_m else len(body)

labs_header_end = lb_pos[0] if lb_pos else quiz_start
labs_header = body[labs_start:labs_header_end]

lab_names = [
    "Caesar Cipher", "XOR Encryption", "Base64 & Hex",
    "Hash Cracker", "AES Encryption", "Password Strength",
]

print(f"Labs: {len(lb_pos)}")
for i, start in enumerate(lb_pos):
    end = lb_pos[i + 1] if i + 1 < len(lb_pos) else quiz_start
    chunk = body[start:end].rstrip()
    labs_h = labs_header.replace('class="section"', 'class="section active"', 1)
    html = make_html(lab_names[i], f'{labs_h}\n{chunk}\n</div></div>', "he")
    path = os.path.join(OUT_HE, f"lab_ch{i+1:02d}.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  [LAB] lab_ch{i+1:02d}.html ({len(html)} chars)")

# ── 12. Quiz + Game ─────────────────────────────────────────────────────────
quiz_chunk = body[quiz_start:].rstrip()
quiz_chunk = re.sub(r'<script\b[^>]*>.*?</script>', '', quiz_chunk, flags=re.DOTALL)
quiz_chunk = quiz_chunk.replace('id="quiz" class="section"', 'id="quiz" class="section active"', 1)
quiz_html = make_html("Crypto PRO — Quiz", quiz_chunk, "he")
with open(os.path.join(OUT_HE, "quiz_game.html"), "w", encoding="utf-8") as f:
    f.write(quiz_html)
print(f"  [QUIZ] quiz_game.html ({len(quiz_html)} chars)")

# ── Summary ──────────────────────────────────────────────────────────────────
print(f"\nDone!")
for label, d in [("HE", OUT_HE), ("EN", OUT_EN)]:
    files = sorted(os.listdir(d))
    print(f"\n{label} ({d}): {len(files)} files")
    for fn in files:
        print(f"  {fn}")
