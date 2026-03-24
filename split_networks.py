#!/usr/bin/env python3
"""
Split networks_pro.html into standalone chapter + lab files.
Strategy: copy the full SPA into each file, inject a startup script
that auto-navigates to the right chapter / screen.
"""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול רשתות תקשורת/עדכון מסלול/networks_pro.html"
OUT = "/home/hila/Desktop/NetworksGuide/public/learn/networks"

os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# Mobile-fix CSS to inject into <head>
mobile_fix = """<style>
/* mobile-fix */
html, body { overflow-x: hidden; }
@media (max-width: 800px) {
  .wrap { padding: 0 12px; }
  pre, code { font-size: 0.78rem; }
  table { font-size: 0.82rem; }
}
@media (max-width: 480px) {
  .wrap { padding: 0 6px; }
}
</style>"""

def inject_mobile_fix(html):
    return html.replace("</head>", mobile_fix + "\n</head>", 1)

# ── Learn chapters ──────────────────────────────────────────────────────────
chapter_names = [
    "תחילת מסע",
    "Sockets בסיסי",
    "Wireshark",
    "שכבת האפליקציה",
    "Scapy",
    "שכבת התעבורה",
    "שכבת הרשת",
    "שכבת הקו",
    "רכיבי רשת",
    "השכבה הפיזית",
    "איך הכל מתחבר",
    "Sockets מתקדם",
]

HIDE_NAV_CSS = """<style>
/* Hide internal nav when embedded in iframe */
.nav-tabs, #amb, .hero-stats, .hero-badge, .hero-cta,
.curr-grid, canvas#netCanvas, .hero { display: none !important; }
#landing { display: none !important; }
body { padding-top: 0 !important; }
.screen { padding-top: 8px !important; }
.learn-layout { min-height: auto !important; }
.learn-content { height: auto !important; overflow-y: visible !important; }
</style>"""

for i, name in enumerate(chapter_names, start=1):
    startup = f"""<script>
window.addEventListener('load', function() {{
  try {{
    showScreen('learn');
    openChapter({i});
  }} catch(e) {{ setTimeout(function(){{ showScreen('learn'); openChapter({i}); }}, 200); }}
}});
</script>"""
    html = raw.replace("</head>", HIDE_NAV_CSS + "\n</head>", 1)
    html = html.replace("</body>", startup + "\n</body>", 1)
    html = inject_mobile_fix(html)
    fname = f"learn_ch{i:02d}.html"
    with open(os.path.join(OUT, fname), "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname}  ({name})")

# ── Lab files (terminal missions per chapter) ────────────────────────────────
# How many missions exist per chapter (from grep: ch:1→3, ch:2→2, etc.)
# We create one lab file per chapter, auto-opening terminal + filtering to that chapter
lab_names = [
    "מעבדה 1 — ping, traceroute, nslookup",
    "מעבדה 2 — Socket לקוח + שרת",
    "מעבדה 3 — Wireshark + Filters",
    "מעבדה 4 — HTTP בסיסי",
    "מעבדה 5 — Scapy sniff & send",
    "מעבדה 6 — TCP Handshake + netstat",
    "מעבדה 7 — IP, Subnet, DHCP",
    "מעבדה 8 — ARP + MAC + Ethernet",
    "מעבדה 9 — Hub vs Switch vs Router",
    "מעבדה 10 — Physical Layer",
    "מעבדה 11 — Full Packet Journey",
    "מעבדה 12 — select() + Multi-Client",
]

for i, name in enumerate(lab_names, start=1):
    startup = f"""<script>
window.addEventListener('load', function() {{
  try {{
    // Filter missions to this chapter and open terminal
    var orig = typeof MISSIONS !== 'undefined' ? MISSIONS : [];
    window.MISSIONS = orig.filter(function(m){{ return m.ch === {i}; }});
    showScreen('terminal-screen');
    if (typeof renderMissions === 'function') renderMissions();
    else if (typeof initMissions === 'function') initMissions();
  }} catch(e) {{
    setTimeout(function(){{
      try {{
        var orig = typeof MISSIONS !== 'undefined' ? MISSIONS : [];
        window.MISSIONS = orig.filter(function(m){{ return m.ch === {i}; }});
        showScreen('terminal-screen');
        if (typeof renderMissions === 'function') renderMissions();
        else if (typeof initMissions === 'function') initMissions();
      }} catch(e2) {{ showScreen('terminal-screen'); }}
    }}, 300);
  }}
}});
</script>"""
    html = raw.replace("</body>", startup + "\n</body>", 1)
    html = inject_mobile_fix(html)
    fname = f"lab_ch{i:02d}.html"
    with open(os.path.join(OUT, fname), "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname}  ({name})")

# ── Summary ────────────────────────────────────────────────────────────────
files = sorted(os.listdir(OUT))
print(f"\nDone! {len(files)} files in {OUT}")
for fn in files:
    sz = os.path.getsize(os.path.join(OUT, fn))
    print(f"  {fn}  ({sz//1024}KB)")
