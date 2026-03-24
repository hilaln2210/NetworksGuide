#!/usr/bin/env python3
"""Split devops_pro_course.html into standalone chapter/lab/quiz files."""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול Devops/devops_pro_course.html"
OUT = "/home/hila/Desktop/NetworksGuide/public/learn/devops"
os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# ── 1. Extract <head> ──────────────────────────────────────────────────────
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_inner = head_match.group(1) if head_match else ""

# ── 2. Extract shared <script> ─────────────────────────────────────────────
script_match = re.search(r'(<script\b[^>]*>.*?</script>)', raw, re.DOTALL)
shared_js = script_match.group(1) if script_match else ""

# ── 3. Extract <body> ──────────────────────────────────────────────────────
body_match = re.search(r'<body>(.*?)</body>', raw, re.DOTALL)
body = body_match.group(1) if body_match else raw

# Strip the shared <script> from body
body = re.sub(r'<script\b[^>]*>.*?</script>', '', body, flags=re.DOTALL)

# ── 4. HTML wrapper ────────────────────────────────────────────────────────
def make_html(body_content):
    return f"""<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
{head_inner}
</head>
<body>
{body_content}
{shared_js}
</body>
</html>
"""

def write(fname, html):
    path = os.path.join(OUT, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname}  ({len(html):,} chars)")

# ── 5. Find section boundaries ─────────────────────────────────────────────
learn_m = re.search(r'<div\s+id="learn"\s+class="section[^"]*"', body)
labs_m  = re.search(r'<div\s+id="labs"\s+class="section[^"]*"',  body)
quiz_m  = re.search(r'<div\s+id="quiz"\s+class="section[^"]*"',  body)

learn_start = learn_m.start() if learn_m else 0
labs_start  = labs_m.start()  if labs_m  else len(body)
quiz_start  = quiz_m.start()  if quiz_m  else len(body)

# ── 6. Learn — 9 chapters ─────────────────────────────────────────────────
print("\n── Learn ──")
learn_body = body[learn_start:labs_start]

ch_positions = [m.start() for m in re.finditer(r'<div\s+class="ch"\s+id="c\d+"', learn_body)]
num_ch = len(ch_positions)
print(f"  Found {num_ch} chapters")

ch_names = [
    "מה זה DevOps — תרבות לפני טכנולוגיה",
    "Linux & Shell",
    "Docker & Containers",
    "Kubernetes",
    "CI/CD",
    "Infrastructure as Code — Terraform & Ansible",
    "Observability",
    "Cloud — AWS, Azure, GCP",
    "DevSecOps",
]

for i, start in enumerate(ch_positions):
    end = ch_positions[i + 1] if i + 1 < num_ch else len(learn_body)
    chunk = learn_body[start:end].rstrip()

    # Auto-open
    chunk = re.sub(
        r'<div\s+class="ch"\s+id="c' + str(i + 1) + r'"',
        f'<div class="ch open" id="c{i+1}"',
        chunk, count=1
    )
    chunk = re.sub(r'(<div\s+class="ch-body")', r'\1 style="display:block"', chunk)

    html = make_html(chunk)
    write(f"learn_ch{i+1:02d}.html", html)

# ── 7. Labs — 7 labs ──────────────────────────────────────────────────────
print("\n── Labs ──")
labs_body = body[labs_start:quiz_start]

lb_positions = [m.start() for m in re.finditer(r'<div\s+class="lab"\s+id="lb\d+"', labs_body)]
num_lb = len(lb_positions)
print(f"  Found {num_lb} labs")

for i, start in enumerate(lb_positions):
    end = lb_positions[i + 1] if i + 1 < num_lb else len(labs_body)
    chunk = labs_body[start:end].rstrip()

    # Auto-open
    chunk = re.sub(
        r'<div\s+class="lab"\s+id="lb' + str(i + 1) + r'"',
        f'<div class="lab open" id="lb{i+1}"',
        chunk, count=1
    )
    chunk = re.sub(r'(<div\s+class="lab-body")', r'\1 style="display:block"', chunk)

    html = make_html(chunk)
    write(f"lab_ch{i+1:02d}.html", html)

# ── 8. Quiz ────────────────────────────────────────────────────────────────
print("\n── Quiz ──")
quiz_chunk = body[quiz_start:].rstrip()
quiz_chunk = quiz_chunk.replace('id="quiz" class="section"', 'id="quiz" class="section active"', 1)
quiz_html = make_html(quiz_chunk)
write("quiz_game.html", quiz_html)

# ── 9. Add XP to quiz ─────────────────────────────────────────────────────
quiz_path = os.path.join(OUT, "quiz_game.html")
with open(quiz_path, encoding="utf-8") as f:
    qtext = f.read()

xp_line = "    try { window.parent.postMessage({ type: 'ng_xp', amount: 10 }, '*'); } catch(e) {}"
if "ng_xp" not in qtext:
    # Find score++ pattern and add XP after it
    qtext = re.sub(
        r'(score\+\+;)',
        r'\1\n' + xp_line,
        qtext, count=1
    )
    with open(quiz_path, "w", encoding="utf-8") as f:
        f.write(qtext)
    print("  Added XP postMessage to quiz")
else:
    print("  XP already present in quiz")

# ── Done ───────────────────────────────────────────────────────────────────
print(f"\nDone! {OUT}")
files = sorted(os.listdir(OUT))
print(f"Total: {len(files)} files")
for fn in files:
    print(f"  {fn}")
