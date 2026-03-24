#!/usr/bin/env python3
"""
Split cybersecurity_pro_course.html into 15 standalone HTML files:
  - 8 learn chapter files (learn_ch01.html ... learn_ch08.html)
  - 6 lab files          (lab_ch01.html  ... lab_ch06.html)
  - 1 quiz file          (quiz_game.html)
"""

import re
import os

SRC = "/home/hila/Desktop/NetworksGuide/מסלול אבטחת מידע/cybersecurity_pro_course.html"
OUT = "/home/hila/Desktop/NetworksGuide/public/learn/security"

os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    html = f.read()

# ── Extract CSS (everything between <style> and </style>) ─────────────────────
css_match = re.search(r"<style>(.*?)</style>", html, re.DOTALL)
css_raw = css_match.group(1)

# Remove the rule that hides sections (not needed in standalone files)
css = re.sub(r"\s*\.section\s*\{\s*display:\s*none;\s*\}", "", css_raw)

# ── Common HTML template ───────────────────────────────────────────────────────
def page(title, body, script=""):
    script_block = f"<script>{script}</script>" if script else ""
    return f"""<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>{css}</style>
</head>
<body>
{body}
{script_block}
</body>
</html>"""

# ── Extract chapter cards (CH1 – CH8) ─────────────────────────────────────────
# Each chapter is delimited by <!-- CH{n} --> ... <!-- CH{n+1} --> (or end of chapters-grid)
chapters_block_match = re.search(
    r"<!-- CH1 -->(.*?)(?=</div><!-- /chapters-grid -->)",
    html, re.DOTALL
)
chapters_block = chapters_block_match.group(0)

# Split on <!-- CH{n} --> markers
ch_parts = re.split(r"<!-- CH\d+ -->", chapters_block)
ch_parts = [p.strip() for p in ch_parts if p.strip()]

ch_titles = [
    "יסודות אבטחת מידע — CIA Triad",
    "Social Engineering & Phishing",
    "קריפטוגרפיה — הצפנה",
    "רשתות ואבטחת רשת",
    "Malware — סוגים, זיהוי ומניעה",
    "Penetration Testing",
    "SOC & Incident Response",
    "Cloud Security & Compliance",
]

toggle_js = """
function toggleChapter(header) {
  const card = header.parentElement;
  card.classList.toggle('open');
}
"""

for i, ch_html in enumerate(ch_parts[:8], start=1):
    # Make the chapter-card start in open state
    ch_html_open = ch_html.replace('<div class="chapter-card">', '<div class="chapter-card open">', 1)
    body = f'<div class="container">\n<div class="chapters-grid">\n{ch_html_open}\n</div>\n</div>'
    title = f"פרק {i:02d} — {ch_titles[i-1]}"
    fname = f"learn_ch{i:02d}.html"
    out_path = os.path.join(OUT, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(page(title, body, toggle_js))
    print(f"✓ {fname}")

# ── Extract lab cards (LAB 1 – LAB 6) ─────────────────────────────────────────
labs_block_match = re.search(
    r"<!-- LAB 1 -->(.*?)(?=</div><!-- /labs-grid -->)",
    html, re.DOTALL
)
labs_block = labs_block_match.group(0)

# Split on <!-- LAB {n} --> markers
lab_parts = re.split(r"<!-- LAB \d+ -->", labs_block)
lab_parts = [p.strip() for p in lab_parts if p.strip()]

lab_titles = [
    "Network Scanning עם Nmap",
    "Phishing Email Analysis",
    "SQL Injection עם DVWA",
    "Password Cracking עם Hashcat",
    "Wireshark — ניתוח תעבורת רשת",
    "CTF Challenge: TryHackMe / HackTheBox",
]

for i, lab_html in enumerate(lab_parts[:6], start=1):
    body = f'<div class="container">\n<div class="labs-grid">\n{lab_html}\n</div>\n</div>'
    title = f"מעבדה {i:02d} — {lab_titles[i-1]}"
    fname = f"lab_ch{i:02d}.html"
    out_path = os.path.join(OUT, fname)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(page(title, body))
    print(f"✓ {fname}")

# ── Quiz file ──────────────────────────────────────────────────────────────────
quiz_html_match = re.search(
    r"<!-- ={10,} QUIZ ={10,} -->(.*?)</div><!-- /container -->",
    html, re.DOTALL
)
quiz_html = quiz_html_match.group(1).strip()

# Wrap in container div (remove the outer section wrapper)
# Remove <div id="quiz" class="section"> and its closing tag
quiz_html = re.sub(r'<div id="quiz" class="section">', "", quiz_html)
quiz_html = re.sub(r"</div>\s*$", "", quiz_html.rstrip())

quiz_body = f"""<div class="container">
{quiz_html}
</div>
<div class="footer">
  // CYBERSECURITY PRO TRACK — KNOWLEDGE IS DEFENSE //
</div>"""

# Extract the <script> block
script_match = re.search(r"<script>(.*?)</script>", html, re.DOTALL)
full_script = script_match.group(1)

# Keep only quiz-related functions (remove switchTab + toggleChapter, keep the rest)
# Remove switchTab function
full_script = re.sub(r"// ===== TABS =====\nfunction switchTab.*?\n\}\n", "", full_script, flags=re.DOTALL)
# Remove toggleChapter function (we don't need it in quiz)
full_script = re.sub(r"// ===== CHAPTERS =====\nfunction toggleChapter.*?\n\}\n", "", full_script, flags=re.DOTALL)

out_path = os.path.join(OUT, "quiz_game.html")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(page("חידון אבטחת מידע PRO", quiz_body, full_script))
print("✓ quiz_game.html")

print(f"\nDone! 15 files written to:\n{OUT}")
