#!/usr/bin/env python3
"""Split linux_pro_course.html into 17 standalone files."""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול מערכות לינוקס/linux_pro_course.html"
OUT = "/home/hila/Desktop/NetworksGuide/public/learn/linux"

os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# ── 1. Extract <head> block ──────────────────────────────────────────────────
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_inner = head_match.group(1) if head_match else ""

# ── 2. Extract <script> block (single script at bottom) ─────────────────────
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

# ── 6. Find line positions of key sections ────────────────────────────────────
# Chapters: c1..c10
# Labs: lb1..lb6  (inside <div id="labs"...)
# Quiz: <div id="quiz"...

# We'll work with the body string for slicing.

# Find positions of each chapter div
ch_positions = []
for i in range(1, 11):
    m = re.search(r'<div\s+class="ch"\s+id="c' + str(i) + r'"', body)
    if m:
        ch_positions.append(m.start())
    else:
        print(f"WARNING: chapter c{i} not found")

# Find position of labs section
labs_m = re.search(r'<div\s+id="labs"', body)
labs_start = labs_m.start() if labs_m else len(body)

# Find positions of each lab div
lb_positions = []
for i in range(1, 7):
    m = re.search(r'<div\s+class="lab"\s+id="lb' + str(i) + r'"', body)
    if m:
        lb_positions.append(m.start())
    else:
        print(f"WARNING: lab lb{i} not found")

# Find position of quiz section
quiz_m = re.search(r'<div\s+id="quiz"', body)
quiz_start = quiz_m.start() if quiz_m else len(body)

print(f"Chapters found: {len(ch_positions)}")
print(f"Labs found: {len(lb_positions)}")
print(f"Quiz found: {quiz_m is not None}")

# ── 7. Extract each chapter ───────────────────────────────────────────────────
chapter_names = [
    "The Linux Philosophy",
    "Filesystem Hierarchy",
    "Process Management",
    "Shell & Bash Scripting",
    "Text Processing",
    "Networking",
    "Storage & Filesystems",
    "systemd",
    "Performance Tuning",
    "Linux Security Hardening",
]

for i, start in enumerate(ch_positions):
    # end = start of next chapter, or start of labs section
    if i + 1 < len(ch_positions):
        end = ch_positions[i + 1]
    else:
        end = labs_start

    chunk = body[start:end].rstrip()

    # Auto-open: add "open" class to the div, set ch-body display:block
    # Replace <div class="ch" id="cN"> with <div class="ch open" id="cN">
    chunk = re.sub(
        r'<div\s+class="ch"\s+id="c' + str(i+1) + r'"',
        f'<div class="ch open" id="c{i+1}"',
        chunk, count=1
    )
    # Set .ch-body display:block by adding style if not present
    chunk = re.sub(
        r'(<div\s+class="ch-body")',
        r'\1 style="display:block"',
        chunk
    )

    # Wrap in container
    body_content = f'<div class="container">\n{chunk}\n</div>'

    fname = f"learn_ch{i+1:02d}.html"
    html = make_html(chapter_names[i], body_content)
    out_path = os.path.join(OUT, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname} ({len(html)} chars)")

# ── 8. Extract labs section wrapper (opening tags before lb1) ────────────────
labs_header_end = lb_positions[0] if lb_positions else quiz_start
labs_header = body[labs_start:labs_header_end]

lab_names = [
    "מעבדה 1 — Filesystem Archaeology",
    "מעבדה 2 — Bash Script ברמת Production",
    "מעבדה 3 — Log Analysis Kung-Fu",
    "מעבדה 4 — Process & Memory Forensics",
    "מעבדה 5 — systemd Service ברמה מקצועית",
    "מעבדה 6 — SSH Hardening + Fail2ban",
]

for i, start in enumerate(lb_positions):
    if i + 1 < len(lb_positions):
        end = lb_positions[i + 1]
    else:
        end = quiz_start

    chunk = body[start:end].rstrip()

    # Auto-open: add "open" class to the lab div
    chunk = re.sub(
        r'<div\s+class="lab"\s+id="lb' + str(i+1) + r'"',
        f'<div class="lab open" id="lb{i+1}"',
        chunk, count=1
    )
    # Set .lab-body / .ch-body display:block
    chunk = re.sub(
        r'(<div\s+class="(?:lab|ch)-body")',
        r'\1 style="display:block"',
        chunk
    )

    # Wrap with labs section container (include labs header for context/styles)
    labs_header_active = labs_header.replace('class="section"', 'class="section active"', 1)
    body_content = f'{labs_header_active}\n{chunk}\n</div></div>'

    fname = f"lab_ch{i+1:02d}.html"
    html = make_html(lab_names[i], body_content)
    out_path = os.path.join(OUT, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname} ({len(html)} chars)")

# ── 9. Extract quiz section ───────────────────────────────────────────────────
quiz_chunk = body[quiz_start:].rstrip()
quiz_chunk = quiz_chunk.replace('id="quiz" class="section"', 'id="quiz" class="section active"', 1)
quiz_html = make_html("Linux PRO — Quiz", quiz_chunk)
quiz_path = os.path.join(OUT, "quiz_game.html")
with open(quiz_path, "w", encoding="utf-8") as f:
    f.write(quiz_html)
print(f"  Wrote quiz_game.html ({len(quiz_html)} chars)")

print(f"\nDone! Files written to {OUT}")
files = sorted(os.listdir(OUT))
print(f"Total files: {len(files)}")
for fn in files:
    print(f"  {fn}")
