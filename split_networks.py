#!/usr/bin/env python3
"""Split networks_course.html into 12 standalone chapter files."""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול רשתות תקשורת/networks_course.html"
OUT = "/home/hila/Desktop/NetworksGuide/public/learn/networks"
os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# ── 1. Extract <head> CSS ──────────────────────────────────────────────────
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_inner = head_match.group(1) if head_match else ""

# ── 2. Extract full <script> block ────────────────────────────────────────
script_match = re.search(r'<script>(.*?)</script>', raw, re.DOTALL)
full_script = script_match.group(1) if script_match else ""

# ── 3. Chapter metadata ────────────────────────────────────────────────────
chapters_meta = [
    (1,  '🌐', 'תחילת מסע',       'Client/Server, כתובות IP, DNS, ping, traceroute, ענן האינטרנט'),
    (2,  '🔌', 'Sockets בסיסי',   'socket(), connect(), bind(), listen(), accept(), send(), recv()'),
    (3,  '🦈', 'Wireshark',        'Encapsulation, Decapsulation, Display Filter, Capture Filter'),
    (4,  '📡', 'שכבת האפליקציה',  'HTTP GET/POST, Status Codes, Headers, URL, DNS, Root Directory'),
    (5,  '🐍', 'Scapy',            'sniff(), lfilter, prn, שכבות חבילה, send/sr/sr1'),
    (6,  '🚦', 'שכבת התעבורה',    'TCP vs UDP, Ports, netstat, Three-Way Handshake, Seq/ACK'),
    (7,  '🌍', 'שכבת הרשת',       'IP, Subnet Mask, NAT, Routing Table, DHCP, TTL, traceroute'),
    (8,  '🔗', 'שכבת הקו',        'Ethernet, MAC Address, ARP, Ethernet Frame, Hub vs Switch'),
    (9,  '🔀', 'רכיבי רשת',       'Hub vs Switch vs Router — שכבות, MAC Table, Flooding, ARP'),
    (10, '⚡', 'השכבה הפיזית',    'ביט, גלים, AM/FM, אנלוגי/דיגיטלי, ADSL, CAT5, WiFi, סיב אופטי'),
    (11, '🧩', 'איך הכל מתחבר',   'DHCP→ARP→DNS→TCP→HTTP→NAT — מסע פקטה שלם מקצה לקצה'),
    (12, '⚙️', 'Sockets מתקדם',   'select(), blocking vs non-blocking, multi-client, Chat Protocol'),
]

# ── 4. Extract buildChN function from script ──────────────────────────────
def extract_fn(script, n):
    start_pat = 'function buildCh' + str(n) + '(){'
    start = script.find(start_pat)
    if start == -1:
        return ''
    # find end: next buildCh function or end of script
    next_fns = []
    for other in range(1, 13):
        if other == n:
            continue
        p = script.find('function buildCh' + str(other) + '(){', start + 1)
        if p != -1:
            next_fns.append(p)
    end = min(next_fns) if next_fns else len(script)
    return script[start:end].rstrip()

# ── 5. Generate each chapter file ─────────────────────────────────────────
print("\n── Learn chapters ──")
for (n, icon, name, desc) in chapters_meta:
    fn_code = extract_fn(full_script, n)
    n2 = str(n).zfill(2)

    html = f"""<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
{head_inner}
</head>
<body>
<div style="max-width:860px;margin:0 auto;padding:24px 16px 80px;">
  <div id="chContent"></div>
</div>
<script>
{fn_code}

document.addEventListener('DOMContentLoaded', function() {{
  document.getElementById('chContent').innerHTML =
    '<div class="ch-eyebrow">פרק {n2} מתוך 12</div>' +
    '<h1 class="ch-title">{icon} {name}</h1>' +
    '<p class="ch-desc">{desc}</p>' +
    '<div class="divider"></div>' +
    buildCh{n}();
}});
</script>
</body>
</html>"""

    fname = f"learn_ch{n:02d}.html"
    with open(os.path.join(OUT, fname), "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {fname}  ({len(html):,} chars)")

print(f"\nDone! {OUT}")
print(f"Files: {len([f for f in os.listdir(OUT) if f.startswith('learn_')])}")
