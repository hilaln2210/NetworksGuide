#!/usr/bin/env python3
"""Split web_apis_bilingual.html into standalone chapter files.
Usage:
  python3 split_webapi.py [SRC] [OUT] [lang]
  lang: 'he' (default) or 'en'
"""

import os
import re
import sys

_args = sys.argv[1:]
SRC  = _args[0] if _args else "/home/hila/Desktop/NetworksGuide/מסלול Web & APIs /web_apis_bilingual.html"
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
html_attrs = 'lang="he" dir="rtl" id="root"' if LANG == "he" else 'lang="en" id="root" class="en"'

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

# ── 5. Find section boundaries ─────────────────────────────────────────────
learn_m = re.search(r'<div\s+id="learn"\s+class="section[^"]*"', body)
labs_m  = re.search(r'<div\s+id="labs"\s+class="section[^"]*"',  body)
quiz_m  = re.search(r'<div\s+id="quiz"\s+class="section[^"]*"',  body)
game_m  = re.search(r'<div\s+id="game"\s+class="section[^"]*"',  body)

learn_start = learn_m.start() if learn_m else 0
labs_start  = labs_m.start()  if labs_m  else len(body)
quiz_start  = quiz_m.start()  if quiz_m  else len(body)
game_start  = game_m.start()  if game_m  else len(body)

# ── 6. Learn chapters ──────────────────────────────────────────────────────
print("\n── Learn ──")
learn_body = body[learn_start:labs_start]

# Chapter pattern based on language
if LANG == "en":
    ch_pat = r'<div\s+class="ch"\s+id="c(\d+)_en"'
    id_fmt = lambda n: f'c{n}_en'
else:
    ch_pat = r'<div\s+class="ch"\s+id="c(\d+)"(?![\w_])'
    id_fmt = lambda n: f'c{n}'

# All chapter boundaries (both he and en) for proper end detection
all_ch_bounds = sorted(m.start() for m in re.finditer(r'<div\s+class="ch"\s+id="c\d+', learn_body))

ch_matches = list(re.finditer(ch_pat, learn_body))
num_ch = len(ch_matches)
print(f"  Found {num_ch} chapters (lang={LANG})")

for i, m in enumerate(ch_matches):
    ch_start = m.start()
    # Find next boundary in all_ch_bounds after ch_start
    next_bounds = [b for b in all_ch_bounds if b > ch_start]
    ch_end = next_bounds[0] if next_bounds else len(learn_body)
    chunk = learn_body[ch_start:ch_end].rstrip()

    cid = id_fmt(i)
    # Auto-open this chapter
    chunk = re.sub(
        r'<div\s+class="ch"\s+id="' + re.escape(cid) + r'"',
        f'<div class="ch open" id="{cid}"',
        chunk, count=1
    )
    chunk = re.sub(r'(<div\s+class="ch-body")', r'\1 style="display:block"', chunk)

    html = make_html(chunk)
    write(f"learn_ch{i+1:02d}.html", html)

# ── 7. Labs (Hebrew only — no English labs in bilingual file) ──────────────
if labs_m and LANG == "he":
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

# ── 8. Quiz (Hebrew only) ──────────────────────────────────────────────────
if quiz_m and LANG == "he":
    print("\n── Quiz ──")
    quiz_end = game_start if game_m else len(body)
    quiz_chunk = body[quiz_start:quiz_end].rstrip()
    quiz_chunk = quiz_chunk.replace('id="quiz" class="section"', 'id="quiz" class="section active"', 1)
    quiz_html = make_html(quiz_chunk)
    write("quiz_game.html", quiz_html)

    # Add XP postMessage
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
        print("  XP already present")

# ── Done ───────────────────────────────────────────────────────────────────
print(f"\nDone! {num_ch} learn files -> {OUT}")
