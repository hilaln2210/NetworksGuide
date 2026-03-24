#!/usr/bin/env python3
"""Split networks_course.html into 12 standalone chapter files."""

import os
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול רשתות תקשורת/networks_course.html"
OUT = "/home/hila/Desktop/NetworksGuide/public/learn/networks"
os.makedirs(OUT, exist_ok=True)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

# Only use first complete HTML document (file may have appended extra HTML)
first_doc_end = raw.find('</html>')
if first_doc_end != -1:
    raw = raw[:first_doc_end + len('</html>')]

# ── 1. Extract <head> CSS ──────────────────────────────────────────────────
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_inner = head_match.group(1) if head_match else ""

# ── 2. Extract full <script> block ────────────────────────────────────────
# Use LAST script block (contains updated buildCh functions + MISSIONS)
script_match = None
for m in re.finditer(r'<script>(.*?)</script>', raw, re.DOTALL):
    script_match = m
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

# ── 4. Extract buildChN function from script (last occurrence = updated) ──
def extract_fn(script, n):
    start_pat = 'function buildCh' + str(n) + '(){'
    # Use rfind to get the LAST (updated) definition
    start = script.rfind(start_pat)
    if start == -1:
        return ''
    # find end: next buildCh function after this position, or end of script
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

# ── 6. Regenerate terminal.html with updated MISSIONS ─────────────────────
print("\n── Terminal ──")
body_match = re.search(r'<body>(.*?)</body>', raw, re.DOTALL)
body = body_match.group(1) if body_match else raw

term_start = body.find('<section class="screen" id="lab-screen">')
term_end   = body.find('</section>', term_start) + len('</section>')
term_html  = body[term_start:term_end]

# Make it visible by default
term_html = term_html.replace(
    'class="screen" id="lab-screen"',
    'class="screen on" id="lab-screen"',
    1
)

# Patch script: guard getElementById calls that reference SPA-only elements
patched_script = full_script
for elem_id in ['xpTotal', 'homeGrid', 'lSidebar', 'lContent']:
    patched_script = patched_script.replace(
        f"document.getElementById('{elem_id}')",
        f"(document.getElementById('{elem_id}')||{{}})"
    )

terminal_page = f"""<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
{head_inner}
</head>
<body>
{term_html}
<script>
{patched_script}
</script>
<script>
/* Force mission list build after all scripts have run and MISSIONS is final */
(function() {{
  var list = document.getElementById('missionList');
  if (!list || list.children.length > 0) return;
  MISSIONS.forEach(function(m, idx) {{
    var done = S.done.indexOf(m.id) >= 0;
    var item = document.createElement('div');
    item.className = 'm-item' + (done ? ' done' : '');
    item.id = 'mi_' + m.id;
    item.innerHTML =
      '<div class="m-num">' + (idx + 1) + '</div>' +
      '<div class="m-info"><div class="m-name">' + m.name + '</div>' +
      '<div class="m-ch">\u05e4\u05e8\u05e7 ' + m.ch + '</div></div>' +
      (done ? '<div class="m-check">\u2713</div>' : '');
    item.onclick = function() {{ loadMission(m); }};
    list.appendChild(item);
  }});
  if (typeof updateProgress === 'function') updateProgress();
}})();
</script>
</body>
</html>"""

term_path = os.path.join(OUT, "terminal.html")
with open(term_path, "w", encoding="utf-8") as f:
    f.write(terminal_page)
print(f"  Wrote terminal.html  ({len(terminal_page):,} chars)")

print(f"\nDone! {OUT}")
print(f"Files: {len(os.listdir(OUT))}")
