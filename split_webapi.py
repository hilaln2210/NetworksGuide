#!/usr/bin/env python3
"""Split web_apis_learn.html into standalone chapter files.
Usage:
  python3 split_webapi.py [SRC] [OUT] [lang]
  lang: 'he' (default) or 'en'
"""

import os
import re
import sys

_args = sys.argv[1:]
SRC  = _args[0] if _args else "/home/hila/Desktop/NetworksGuide/מסלול Web & APIs /web_apis_learn.html"
OUT  = _args[1] if len(_args) > 1 else "/home/hila/Desktop/NetworksGuide/public/learn/webapi"
LANG = _args[2] if len(_args) > 2 else "he"
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
html_attrs = 'lang="he" dir="rtl"' if LANG == "he" else 'lang="en"'

def make_html(body_content):
    return f"""<!DOCTYPE html>
<html {html_attrs}>
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

# ── 5. Find learn section boundaries ──────────────────────────────────────
learn_m  = re.search(r'<div\s+id="learn"\s+class="section[^"]*"', body)
labs_m   = re.search(r'<div\s+id="labs"\s+class="section[^"]*"',  body)
quiz_m   = re.search(r'<div\s+id="quiz"\s+class="section[^"]*"',  body)

learn_start = learn_m.start() if learn_m else 0
labs_start  = labs_m.start()  if labs_m  else len(body)
quiz_start  = quiz_m.start()  if quiz_m  else len(body)

# ── 6. Learn chapters ──────────────────────────────────────────────────────
print("\n── Learn ──")
learn_body = body[learn_start:labs_start]

ch_positions = [m.start() for m in re.finditer(r'<div\s+class="ch"\s+id="c\d+"', learn_body)]
num_ch = len(ch_positions)
print(f"  Found {num_ch} chapters")

for i, start in enumerate(ch_positions):
    end = ch_positions[i + 1] if i + 1 < num_ch else len(learn_body)
    chunk = learn_body[start:end].rstrip()

    # Auto-open (chapter ids start at c0)
    cid = i  # c0, c1, c2...
    chunk = re.sub(
        r'<div\s+class="ch"\s+id="c' + str(cid) + r'"',
        f'<div class="ch open" id="c{cid}"',
        chunk, count=1
    )
    chunk = re.sub(r'(<div\s+class="ch-body")', r'\1 style="display:block"', chunk)

    html = make_html(chunk)
    write(f"learn_ch{i+1:02d}.html", html)

# ── 7. Labs (if present) ───────────────────────────────────────────────────
if labs_m:
    print("\n── Labs ──")
    labs_body = body[labs_start:quiz_start]

    lb_positions = [m.start() for m in re.finditer(r'<div\s+class="lab"\s+id="lb\d+"', labs_body)]
    num_lb = len(lb_positions)
    print(f"  Found {num_lb} labs")

    for i, start in enumerate(lb_positions):
        end = lb_positions[i + 1] if i + 1 < num_lb else len(labs_body)
        chunk = labs_body[start:end].rstrip()

        chunk = re.sub(
            r'<div\s+class="lab"\s+id="lb' + str(i + 1) + r'"',
            f'<div class="lab open" id="lb{i+1}"',
            chunk, count=1
        )
        chunk = re.sub(r'(<div\s+class="lab-body")', r'\1 style="display:block"', chunk)

        html = make_html(chunk)
        write(f"lab_ch{i+1:02d}.html", html)

# ── 8. Quiz (if present) ───────────────────────────────────────────────────
if quiz_m:
    print("\n── Quiz ──")
    quiz_chunk = body[quiz_start:].rstrip()
    quiz_chunk = quiz_chunk.replace('id="quiz" class="section"', 'id="quiz" class="section active"', 1)
    quiz_html = make_html(quiz_chunk)
    write("quiz_game.html", quiz_html)

    quiz_path = os.path.join(OUT, "quiz_game.html")
    with open(quiz_path, encoding="utf-8") as f:
        qtext = f.read()

    xp_line = "    try { window.parent.postMessage({ type: 'ng_xp', amount: 10 }, '*'); } catch(e) {}"
    if "ng_xp" not in qtext:
        qtext = re.sub(r'(qScore\+\+;)', r'\1\n' + xp_line, qtext, count=1)
        with open(quiz_path, "w", encoding="utf-8") as f:
            f.write(qtext)
        print("  Added XP to quiz")
    else:
        print("  XP already present in quiz")

# ── Done ───────────────────────────────────────────────────────────────────
print(f"\nDone! {num_ch} learn files in {OUT}")
