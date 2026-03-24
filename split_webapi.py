#!/usr/bin/env python3
"""Split web_apis_pro_course.html into 15 standalone files (8 learn + 6 lab + 1 quiz)."""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול Web & APIs /web_apis_pro_course.html"
OUT = "/home/hila/Desktop/NetworksGuide/public/learn/webapi"

os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# ── 1. Extract <head> block ──────────────────────────────────────────────────
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_inner = head_match.group(1) if head_match else ""

# ── 2. Extract <script> block ────────────────────────────────────────────────
script_match = re.search(r'(<script>.*?</script>)', raw, re.DOTALL)
shared_js = script_match.group(1) if script_match else ""

# ── 3. Mobile-fix CSS ────────────────────────────────────────────────────────
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
  .ch, .lab { padding: 12px 8px; }
  pre { padding: 10px 8px; }
}
</style>"""

# ── 4. HTML wrapper factory ───────────────────────────────────────────────────
def make_html(title, body_content):
    return f"""<!DOCTYPE html>
<html lang="he" dir="rtl">
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

# ── 5. Extract body content ───────────────────────────────────────────────────
body_match = re.search(r'<body>(.*?)</body>', raw, re.DOTALL)
body = body_match.group(1) if body_match else raw

# ── 6. Find positions of chapters, labs, quiz ────────────────────────────────
ch_positions = []
for i in range(1, 9):
    m = re.search(r'<div\s+class="ch"\s+id="c' + str(i) + r'"', body)
    if m:
        ch_positions.append(m.start())
    else:
        print(f"WARNING: chapter c{i} not found")

labs_m = re.search(r'<div\s+id="labs"', body)
labs_start = labs_m.start() if labs_m else len(body)

lb_positions = []
for i in range(1, 7):
    m = re.search(r'<div\s+class="lab"\s+id="lb' + str(i) + r'"', body)
    if m:
        lb_positions.append(m.start())
    else:
        print(f"WARNING: lab lb{i} not found")

quiz_m = re.search(r'<div\s+id="quiz"', body)
quiz_start = quiz_m.start() if quiz_m else len(body)

print(f"Chapters found: {len(ch_positions)}")
print(f"Labs found: {len(lb_positions)}")
print(f"Quiz found: {quiz_m is not None}")

# ── 7. Extract each chapter ───────────────────────────────────────────────────
chapter_names = [
    "HTTP — הפרוטוקול שמריץ את האינטרנט",
    "REST API — תכנון שנעשה נכון",
    "GraphQL — בקש רק מה שאתה צריך",
    "Authentication & Authorization",
    "WebSockets & Real-Time",
    "Performance & Caching",
    "API Design Patterns",
    "Testing, Docs & Load Testing",
]

for i, start in enumerate(ch_positions):
    if i + 1 < len(ch_positions):
        end = ch_positions[i + 1]
    else:
        end = labs_start

    chunk = body[start:end].rstrip()

    # Auto-open
    chunk = re.sub(
        r'<div\s+class="ch"\s+id="c' + str(i+1) + r'"',
        f'<div class="ch open" id="c{i+1}"',
        chunk, count=1
    )
    chunk = re.sub(
        r'(<div\s+class="ch-body")',
        r'\1 style="display:block"',
        chunk
    )

    body_content = f'<div class="container">\n{chunk}\n</div>'
    fname = f"learn_ch{i+1:02d}.html"
    html = make_html(chapter_names[i], body_content)
    out_path = os.path.join(OUT, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname} ({len(html)} chars)")

# ── 8. Extract labs ───────────────────────────────────────────────────────────
labs_header_end = lb_positions[0] if lb_positions else quiz_start
labs_header = body[labs_start:labs_header_end]

lab_names = [
    "מעבדה 1 — HTTP בחשיפה מלאה עם curl",
    "מעבדה 2 — REST API ברמת Production",
    "מעבדה 3 — Auth מלא — JWT + Refresh Tokens",
    "מעבדה 4 — WebSocket Chat Real-Time",
    "מעבדה 5 — Rate Limiting & Caching",
    "מעבדה 6 — Load Testing עם k6",
]

for i, start in enumerate(lb_positions):
    if i + 1 < len(lb_positions):
        end = lb_positions[i + 1]
    else:
        end = quiz_start

    chunk = body[start:end].rstrip()

    chunk = re.sub(
        r'<div\s+class="lab"\s+id="lb' + str(i+1) + r'"',
        f'<div class="lab open" id="lb{i+1}"',
        chunk, count=1
    )
    chunk = re.sub(
        r'(<div\s+class="(?:lab|ch)-body")',
        r'\1 style="display:block"',
        chunk
    )

    # Make the labs section visible (standalone file — no tab switcher)
    labs_header_active = labs_header.replace('class="section"', 'class="section active"', 1)
    body_content = f'{labs_header_active}\n{chunk}\n</div></div>'
    fname = f"lab_ch{i+1:02d}.html"
    html = make_html(lab_names[i], body_content)
    out_path = os.path.join(OUT, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname} ({len(html)} chars)")

# ── 9. Extract quiz ───────────────────────────────────────────────────────────
quiz_chunk = body[quiz_start:].rstrip()
quiz_chunk = quiz_chunk.replace('id="quiz" class="section"', 'id="quiz" class="section active"', 1)
quiz_html = make_html("Web & APIs PRO — Quiz", quiz_chunk)
quiz_path = os.path.join(OUT, "quiz_game.html")
with open(quiz_path, "w", encoding="utf-8") as f:
    f.write(quiz_html)
print(f"  Wrote quiz_game.html ({len(quiz_html)} chars)")

print(f"\nDone! Files written to {OUT}")
files = sorted(os.listdir(OUT))
print(f"Total files: {len(files)}")
for fn in files:
    print(f"  {fn}")
