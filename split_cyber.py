#!/usr/bin/env python3
"""Split cybersecurity_pro_course.html into standalone chapter/lab/quiz files."""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול אבטחת מידע/cybersecurity_pro_course.html"
OUT = "/home/hila/Desktop/NetworksGuide/public/learn/security"
os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

head_inner = re.search(r'<head>(.*?)</head>', raw, re.DOTALL).group(1)
# Match only inline <script> (no src/attributes) — skips Cloudflare external scripts
script_match = re.search(r'(<script\s*>.*?</script>)', raw, re.DOTALL)
shared_js = script_match.group(1) if script_match else ""

body_match = re.search(r'<body>(.*?)</body>', raw, re.DOTALL)
body = body_match.group(1) if body_match else raw
body = re.sub(r'<script\b[^>]*>.*?</script>', '', body, flags=re.DOTALL)
body = re.sub(r'<nav\b[^>]*>.*?</nav>', '', body, flags=re.DOTALL)

def make_html(content):
    return f"""<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
{head_inner}
</head>
<body>
{content}
{shared_js}
</body>
</html>"""

def write(fname, html):
    with open(os.path.join(OUT, fname), "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname}  ({len(html):,} chars)")

# section boundaries
learn_m = re.search(r'<div\s+id="learn"\s+class="section[^"]*"', body)
labs_m  = re.search(r'<div\s+id="labs"\s+class="section[^"]*"',  body)
quiz_m  = re.search(r'<div\s+id="quiz"\s+class="section[^"]*"',  body)

learn_body = body[learn_m.start():labs_m.start()]
labs_body  = body[labs_m.start():quiz_m.start()]
quiz_body  = body[quiz_m.start():]

# ── Learn — 8 chapters ────────────────────────────────────────────────────
print("\n── Learn ──")
ch_pos = [m.start() for m in re.finditer(r'<div\s+class="ch"\s+id="c\d+"', learn_body)]
print(f"  Found {len(ch_pos)} chapters")

for i, start in enumerate(ch_pos):
    end = ch_pos[i+1] if i+1 < len(ch_pos) else len(learn_body)
    chunk = learn_body[start:end].rstrip()
    chunk = re.sub(r'<div\s+class="ch"\s+id="c'+str(i+1)+r'"',
                   f'<div class="ch open" id="c{i+1}"', chunk, count=1)
    chunk = re.sub(r'(<div\s+class="ch-body")', r'\1 style="display:block"', chunk)
    write(f"learn_ch{i+1:02d}.html", make_html(chunk))

# ── Labs — 6 labs ─────────────────────────────────────────────────────────
print("\n── Labs ──")
lb_pos = [m.start() for m in re.finditer(r'<div\s+class="lab"\s+id="lb\d+"', labs_body)]
print(f"  Found {len(lb_pos)} labs")

for i, start in enumerate(lb_pos):
    end = lb_pos[i+1] if i+1 < len(lb_pos) else len(labs_body)
    chunk = labs_body[start:end].rstrip()
    chunk = re.sub(r'<div\s+class="lab"\s+id="lb'+str(i+1)+r'"',
                   f'<div class="lab open" id="lb{i+1}"', chunk, count=1)
    chunk = re.sub(r'(<div\s+class="lab-body")', r'\1 style="display:block"', chunk)
    write(f"lab_ch{i+1:02d}.html", make_html(chunk))

# ── Quiz ──────────────────────────────────────────────────────────────────
print("\n── Quiz ──")
quiz_chunk = quiz_body.replace('id="quiz" class="section"', 'id="quiz" class="section active"', 1)
write("quiz_game.html", make_html(quiz_chunk))

# Add XP to quiz
quiz_path = os.path.join(OUT, "quiz_game.html")
with open(quiz_path, encoding="utf-8") as f:
    qt = f.read()
if "ng_xp" not in qt:
    qt = qt.replace(
        'qScore++;',
        'qScore++;\n    try { window.parent.postMessage({ type: \'ng_xp\', amount: 10 }, \'*\'); } catch(e) {}',
        1
    )
    with open(quiz_path, "w", encoding="utf-8") as f:
        f.write(qt)
    print("  Added XP to quiz")

print(f"\nDone! {len(os.listdir(OUT))} files in {OUT}")
