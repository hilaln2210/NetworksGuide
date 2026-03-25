#!/usr/bin/env python3
"""Split linux_bilingual.html into standalone chapter/lab/quiz files (HE + EN)."""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול מערכות לינוקס/linux_bilingual.html"
OUT_HE = "/home/hila/Desktop/NetworksGuide/public/learn/linux"
OUT_EN = "/home/hila/Desktop/NetworksGuide/public/learn/linux-en"

os.makedirs(OUT_HE, exist_ok=True)
os.makedirs(OUT_EN, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# ── 1. Extract <head> CSS (everything inside <head>...</head>) ───────────────
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_inner = head_match.group(1) if head_match else ""

# ── 2. Extract <script> block (single script at bottom) ─────────────────────
script_match = re.search(r'(<script>.*?</script>)\s*</body>', raw, re.DOTALL)
shared_js = script_match.group(1) if script_match else ""

# ── 3. Mobile-fix CSS ───────────────────────────────────────────────────────
mobile_fix = """<style>
/* mobile-fix */
html, body { overflow-x: hidden; }
@media (max-width: 800px) {
  .container { padding: 0 12px; }
  pre, code { font-size: 0.78rem; }
  table { font-size: 0.82rem; }
}
@media (max-width: 480px) {
  .container { padding: 0 6px; }
  .ch, .lab, .mission-card { padding: 12px 8px; }
  pre { padding: 10px 8px; }
}
</style>"""

# ── 4. HTML wrapper factory ─────────────────────────────────────────────────
def make_html(title, body_content, lang="he"):
    """Wrap content in a standalone HTML page. lang='he' or 'en'."""
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

# ── 5. Extract body content ─────────────────────────────────────────────────
body_match = re.search(r'<body>(.*?)<footer', raw, re.DOTALL)
body = body_match.group(1) if body_match else raw

# ── 6. Find Hebrew chapter positions (c1..c10) ─────────────────────────────
he_ch_positions = []
for i in range(1, 11):
    m = re.search(r'<div\s+class="ch"\s+id="c' + str(i) + r'"', body)
    if m:
        he_ch_positions.append(m.start())
    else:
        print(f"WARNING: Hebrew chapter c{i} not found")

# ── 7. Find English chapter positions (c1_en..c10_en) ──────────────────────
en_ch_positions = []
for i in range(1, 11):
    m = re.search(r'<div\s+class="ch"\s+id="c' + str(i) + r'_en"', body)
    if m:
        en_ch_positions.append(m.start())
    else:
        print(f"WARNING: English chapter c{i}_en not found")

# Find boundaries
labs_m = re.search(r'<div\s+id="labs"', body)
labs_start = labs_m.start() if labs_m else len(body)

# English chapters end before labs section — find end of en-b wrapper
en_end_m = re.search(r'</div>\s*</div>\s*</div>\s*<div\s+id="labs"', body)
en_chapters_end = en_end_m.start() if en_end_m else labs_start

# Hebrew chapters end where English wrapper begins
he_end_m = re.search(r'<div\s+class="en-b"><div\s+class="chapters"', body)
he_chapters_end = he_end_m.start() if he_end_m else (en_ch_positions[0] if en_ch_positions else labs_start)

print(f"Hebrew chapters: {len(he_ch_positions)}")
print(f"English chapters: {len(en_ch_positions)}")

# ── 8. Chapter names ───────────────────────────────────────────────────────
he_chapter_names = [
    "מה זה לינוקס ולמה ללמוד אותו?",
    "ניווט בתיקיות וקבצים",
    "קריאה וכתיבה של קבצים",
    "הרשאות ומשתמשים",
    "Pipes ו-Redirection",
    "Processes — תהליכים וניהולם",
    "רשת בסיסית",
    "ניהול תוכנות וחבילות",
    "Bash Scripting — אוטומציה ראשונה",
    "Logs, חיפוש ו-Troubleshooting",
]

en_chapter_names = [
    "What is Linux and Why Learn It?",
    "Navigation — Folders and Files",
    "Reading and Writing Files",
    "Permissions and Users",
    "Pipes and Redirection",
    "Processes — Managing Running Programs",
    "Networking Basics",
    "Package Management",
    "Bash Scripting — First Automation",
    "Logs, Search, and Troubleshooting",
]


def auto_open_ch(chunk, ch_id):
    """Add 'open' class and set ch-body to display:block."""
    chunk = re.sub(
        r'<div\s+class="ch"\s+id="' + re.escape(ch_id) + r'"',
        f'<div class="ch open" id="{ch_id}"',
        chunk, count=1
    )
    chunk = re.sub(
        r'(<div\s+class="ch-body")',
        r'\1 style="display:block"',
        chunk
    )
    return chunk


# ── 9. Extract Hebrew chapters ──────────────────────────────────────────────
for i, start in enumerate(he_ch_positions):
    end = he_ch_positions[i + 1] if i + 1 < len(he_ch_positions) else he_chapters_end
    chunk = body[start:end].rstrip()
    chunk = auto_open_ch(chunk, f"c{i+1}")
    body_content = f'<div class="container">\n{chunk}\n</div>'

    fname = f"learn_ch{i+1:02d}.html"
    html = make_html(he_chapter_names[i], body_content, lang="he")
    out_path = os.path.join(OUT_HE, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  [HE] {fname} ({len(html)} chars)")

# ── 10. Extract English chapters ────────────────────────────────────────────
for i, start in enumerate(en_ch_positions):
    end = en_ch_positions[i + 1] if i + 1 < len(en_ch_positions) else en_chapters_end
    chunk = body[start:end].rstrip()
    chunk = auto_open_ch(chunk, f"c{i+1}_en")
    body_content = f'<div class="container">\n{chunk}\n</div>'

    fname = f"learn_ch{i+1:02d}.html"
    html = make_html(en_chapter_names[i], body_content, lang="en")
    out_path = os.path.join(OUT_EN, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  [EN] {fname} ({len(html)} chars)")

# ── 11. Labs (bilingual — he/en spans inside each lab) ──────────────────────
lb_positions = []
for i in range(1, 7):
    m = re.search(r'id="lb' + str(i) + r'"', body)
    if m:
        lb_positions.append(m.start())
    else:
        print(f"WARNING: lab lb{i} not found")

quiz_m = re.search(r'<div\s+id="quiz"', body)
quiz_start = quiz_m.start() if quiz_m else len(body)

labs_header_end = lb_positions[0] if lb_positions else quiz_start
labs_header = body[labs_start:labs_header_end]

lab_names = [
    "מיפוי מערכת קבצים",
    "חיפוש וקריאת קבצים",
    "הרשאות ומשתמשים",
    "ניהול תהליכים",
    "רשת ו-Ports",
    "Bash Scripting",
]

print(f"Labs found: {len(lb_positions)}")

for i, start in enumerate(lb_positions):
    end = lb_positions[i + 1] if i + 1 < len(lb_positions) else quiz_start
    chunk = body[start:end].rstrip()

    # Wrap with labs section container
    labs_header_active = labs_header.replace('class="section"', 'class="section active"', 1)
    body_content = f'{labs_header_active}\n{chunk}\n</div></div>'

    fname = f"lab_ch{i+1:02d}.html"
    # Labs are bilingual — use Hebrew wrapper (CSS he/en switching works via #root)
    html = make_html(lab_names[i], body_content, lang="he")
    out_path = os.path.join(OUT_HE, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  [LAB] {fname} ({len(html)} chars)")

# ── 12. Quiz + Game section (bilingual) ─────────────────────────────────────
quiz_chunk = body[quiz_start:].rstrip()
# Strip embedded <script> to avoid duplicate with shared_js
quiz_chunk = re.sub(r'<script\b[^>]*>.*?</script>', '', quiz_chunk, flags=re.DOTALL)
quiz_chunk = quiz_chunk.replace('id="quiz" class="section"', 'id="quiz" class="section active"', 1)

quiz_html = make_html("Linux PRO — Quiz", quiz_chunk, lang="he")
quiz_path = os.path.join(OUT_HE, "quiz_game.html")
with open(quiz_path, "w", encoding="utf-8") as f:
    f.write(quiz_html)
print(f"  [QUIZ] quiz_game.html ({len(quiz_html)} chars)")

# ── Summary ─────────────────────────────────────────────────────────────────
print(f"\nDone!")
for label, d in [("HE", OUT_HE), ("EN", OUT_EN)]:
    files = sorted(os.listdir(d))
    print(f"\n{label} ({d}): {len(files)} files")
    for fn in files:
        print(f"  {fn}")
