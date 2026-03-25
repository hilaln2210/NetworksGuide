#!/usr/bin/env python3
"""
Split cybersecurity HTML into standalone chapter/lab/quiz files.
Supports bilingual files (he/en) and single-language files.

Usage:
  python3 split_cyber.py [SRC] [OUT] [lang=he|en]
"""
import os, re, sys

_args = sys.argv[1:]
SRC  = _args[0] if _args else "/home/hila/Desktop/NetworksGuide/מסלול אבטחת מידע/cybersecurity_bilingual.html"
OUT  = _args[1] if len(_args) > 1 else "/home/hila/Desktop/NetworksGuide/public/learn/security"
LANG = _args[2] if len(_args) > 2 else "he"
os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

head_inner = re.search(r'<head>(.*?)</head>', raw, re.DOTALL).group(1)
# Match only inline <script> — skips Cloudflare external scripts
script_match = re.search(r'(<script\s*>.*?</script>)', raw, re.DOTALL)
shared_js = script_match.group(1) if script_match else ""

body_match = re.search(r'<body>(.*?)</body>', raw, re.DOTALL)
body = body_match.group(1) if body_match else raw
body = re.sub(r'<script\b[^>]*>.*?</script>', '', body, flags=re.DOTALL)
body = re.sub(r'<nav\b[^>]*>.*?</nav>', '', body, flags=re.DOTALL)

html_attrs = 'lang="he" dir="rtl"' if LANG == "he" else 'lang="en"'

def make_html(content):
    return f"""<!DOCTYPE html>
<html {html_attrs}>
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

# ── Section boundaries ─────────────────────────────────────────────────────
learn_m = re.search(r'<div\s+id="learn"\s+class="section[^"]*"', body)
labs_m  = re.search(r'<div\s+id="labs"\s+class="section[^"]*"',  body)
quiz_m  = re.search(r'<div\s+id="quiz"\s+class="section[^"]*"',  body)

learn_body = body[learn_m.start():labs_m.start()]
labs_body  = body[labs_m.start():quiz_m.start()]
quiz_body  = body[quiz_m.start():]

# ── Learn chapters ─────────────────────────────────────────────────────────
print(f"\n── Learn ({LANG}) ──")

if LANG == "en":
    ch_pat = r'<div\s+class="ch"\s+id="c(\d+)_en"'
    id_fmt = lambda n: f'c{n}_en'
else:
    ch_pat = r'<div\s+class="ch"\s+id="c(\d+)"(?![\w_])'  # pure digits only
    id_fmt = lambda n: f'c{n}'

# All chapter boundaries (both he and en) for proper end-of-chunk detection
all_ch_bounds = sorted(m.start() for m in re.finditer(
    r'<div\s+class="ch"\s+id="c\d+', learn_body))

ch_matches = list(re.finditer(ch_pat, learn_body))
print(f"  Found {len(ch_matches)} chapters")

for i, m in enumerate(ch_matches):
    start = m.start()
    cid   = int(m.group(1))
    # End = next chapter boundary (any lang) after start
    nexts = [p for p in all_ch_bounds if p > start]
    end   = nexts[0] if nexts else len(learn_body)
    chunk = learn_body[start:end].rstrip()
    # Auto-open
    chunk = re.sub(
        r'<div\s+class="ch"\s+id="' + re.escape(id_fmt(cid)) + r'"',
        f'<div class="ch open" id="{id_fmt(cid)}"', chunk, count=1)
    chunk = re.sub(r'(<div\s+class="ch-body")', r'\1 style="display:block"', chunk)
    write(f"learn_ch{i+1:02d}.html", make_html(chunk))

# ── Labs ───────────────────────────────────────────────────────────────────
print(f"\n── Labs ({LANG}) ──")

if LANG == "en":
    lb_pat = r'<div\s+class="lab"\s+id="lb(\d+)_en"'
    lb_id_fmt = lambda n: f'lb{n}_en'
else:
    lb_pat = r'<div\s+class="lab"\s+id="lb(\d+)"(?![\w_])'
    lb_id_fmt = lambda n: f'lb{n}'

all_lb_bounds = sorted(m.start() for m in re.finditer(
    r'<div\s+class="lab"\s+id="lb\d+', labs_body))

lb_matches = list(re.finditer(lb_pat, labs_body))
print(f"  Found {len(lb_matches)} labs")

for i, m in enumerate(lb_matches):
    start = m.start()
    lid   = int(m.group(1))
    nexts = [p for p in all_lb_bounds if p > start]
    end   = nexts[0] if nexts else len(labs_body)
    chunk = labs_body[start:end].rstrip()
    chunk = re.sub(
        r'<div\s+class="lab"\s+id="' + re.escape(lb_id_fmt(lid)) + r'"',
        f'<div class="lab open" id="{lb_id_fmt(lid)}"', chunk, count=1)
    chunk = re.sub(r'(<div\s+class="lab-body")', r'\1 style="display:block"', chunk)
    write(f"lab_ch{i+1:02d}.html", make_html(chunk))

# ── Quiz (Hebrew only — shared quiz) ──────────────────────────────────────
if LANG == "he":
    print("\n── Quiz ──")
    quiz_chunk = quiz_body.replace(
        'id="quiz" class="section"', 'id="quiz" class="section active"', 1)
    write("quiz_game.html", make_html(quiz_chunk))

    quiz_path = os.path.join(OUT, "quiz_game.html")
    with open(quiz_path, encoding="utf-8") as f:
        qt = f.read()
    if "ng_xp" not in qt:
        qt = qt.replace(
            'qScore++;',
            "qScore++;\n    try { window.parent.postMessage({ type: 'ng_xp', amount: 10 }, '*'); } catch(e) {}",
            1)
        with open(quiz_path, "w", encoding="utf-8") as f:
            f.write(qt)
        print("  Added XP to quiz")

print(f"\nDone! {len(os.listdir(OUT))} files in {OUT}")
