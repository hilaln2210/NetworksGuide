#!/usr/bin/env python3
"""Split web_apis_*.html into standalone chapter/lab/quiz files."""

import os
import re

SRC_DIR = "/home/hila/Desktop/NetworksGuide/מסלול Web & APIs "
OUT     = "/home/hila/Desktop/NetworksGuide/public/learn/webapi"
os.makedirs(OUT, exist_ok=True)

# ── helpers ──────────────────────────────────────────────────────────────────

def load(fname):
    with open(os.path.join(SRC_DIR, fname), encoding="utf-8") as f:
        return f.read()

def extract_head(raw):
    m = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
    return m.group(1) if m else ""

def extract_script(raw):
    m = re.search(r'(<script\b[^>]*>.*?</script>)', raw, re.DOTALL)
    return m.group(1) if m else ""

def extract_body(raw):
    m = re.search(r'<body>(.*?)</body>', raw, re.DOTALL)
    return m.group(1) if m else raw

def strip_nav(body):
    return re.sub(r'<nav\b[^>]*>.*?</nav>', '', body, flags=re.DOTALL)

def make_html(head_inner, body_content, shared_js):
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

# ════════════════════════════════════════════════════════════════════════════
# 1. LEARN — 8 chapters (c1–c8)
# ════════════════════════════════════════════════════════════════════════════
print("\n── Learn ──")
raw_learn  = load("web_apis_learn.html")
head_learn = extract_head(raw_learn)
js_learn   = extract_script(raw_learn)
body_learn = strip_nav(extract_body(raw_learn))
body_learn = re.sub(r'<script\b[^>]*>.*?</script>', '', body_learn, flags=re.DOTALL)

ch_positions = [m.start() for m in re.finditer(r'<div\s+class="ch"\s+id="c\d+"', body_learn)]
num_chapters = len(ch_positions)

ch_names = [
    "HTTP — הפרוטוקול שמריץ את האינטרנט",
    "REST API — תכנון שנעשה נכון",
    "GraphQL — בקש רק מה שאתה צריך",
    "Authentication & Authorization",
    "WebSockets & Real-Time",
    "Performance & Caching",
    "API Design Patterns & Architecture",
    "API Testing, Docs & Versioning",
]

body_end = len(body_learn)

for i, start in enumerate(ch_positions):
    end = ch_positions[i + 1] if i + 1 < num_chapters else body_end
    chunk = body_learn[start:end].rstrip()

    chunk = re.sub(
        r'<div\s+class="ch"\s+id="c' + str(i + 1) + r'"',
        f'<div class="ch open" id="c{i+1}"',
        chunk, count=1
    )
    chunk = re.sub(
        r'(<div\s+class="ch-body")',
        r'\1 style="display:block"',
        chunk
    )

    body_content = f'<div class="container">\n{chunk}\n</div>'
    html = make_html(head_learn, body_content, js_learn)
    write(f"learn_ch{i+1:02d}.html", html)

# ════════════════════════════════════════════════════════════════════════════
# 2. LABS — 6 labs (lb1–lb6)
# ════════════════════════════════════════════════════════════════════════════
print("\n── Labs ──")
raw_labs  = load("web_apis_labs.html")
head_labs = extract_head(raw_labs)
js_labs   = extract_script(raw_labs)
body_labs = strip_nav(extract_body(raw_labs))
body_labs = re.sub(r'<script\b[^>]*>.*?</script>', '', body_labs, flags=re.DOTALL)

lb_positions = [m.start() for m in re.finditer(r'<div\s+class="lab"\s+id="lb\d+"', body_labs)]
num_labs = len(lb_positions)

body_labs_end = len(body_labs)

for i, start in enumerate(lb_positions):
    end = lb_positions[i + 1] if i + 1 < num_labs else body_labs_end
    chunk = body_labs[start:end].rstrip()

    chunk = re.sub(
        r'<div\s+class="lab"\s+id="lb' + str(i + 1) + r'"',
        f'<div class="lab open" id="lb{i+1}"',
        chunk, count=1
    )
    chunk = re.sub(
        r'(<div\s+class="lab-body")',
        r'\1 style="display:block"',
        chunk
    )

    body_content = f'<div class="container">\n{chunk}\n</div>'
    html = make_html(head_labs, body_content, js_labs)
    write(f"lab_ch{i+1:02d}.html", html)

# ════════════════════════════════════════════════════════════════════════════
# 3. QUIZ — copy as-is (inject_bridge.py handles bridge + light CSS)
# ════════════════════════════════════════════════════════════════════════════
print("\n── Quiz ──")
raw_quiz = load("web_apis_quiz.html")
quiz_out = os.path.join(OUT, "quiz_game.html")
with open(quiz_out, "w", encoding="utf-8") as f:
    f.write(raw_quiz)
print(f"  Wrote quiz_game.html  ({len(raw_quiz):,} chars)")

# ════════════════════════════════════════════════════════════════════════════
print(f"\nDone! {OUT}")
files = sorted(os.listdir(OUT))
print(f"Total: {len(files)} files")
for fn in files:
    print(f"  {fn}")
