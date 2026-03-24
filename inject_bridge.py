#!/usr/bin/env python3
"""
Inject _bridge.js + light-mode CSS into every public HTML file.
Run from the NetworksGuide project root.
"""
import os, re

PUBLIC_DIR = os.path.join(os.path.dirname(__file__), 'public')

# ── Light-mode CSS per file category ──────────────────────────────────────────
LIGHT = {
    'webapi': """\
[data-theme="light"] {
  --bg: #f8f9ff; --bg2: #f0f1fb;
  --surface: #ffffff; --card: #fafafe;
  --border: #dde0f5; --border2: #c8ccee;
  --text: #1e1b4b; --text-mid: #3730a3; --text-dim: #6366f1;
  --blue: #4338ca; --blue2: #4f46e5; --blue3: #818cf8;
  --blue-glow: rgba(67,56,202,0.1); --code-bg: #f0f0ff;
}""",

    'linux': """\
[data-theme="light"] {
  --bg: #f4fbf4; --bg2: #ebf5eb;
  --surface: #ffffff; --card: #f7fbf7;
  --border: #c8e8c8; --border2: #a8d8a8;
  --text: #0d250d; --text-mid: #1a4a1a; --text-dim: #2d6e2d;
  --green: #16a34a; --green2: #15803d; --green3: #bbf7d0; --green-dim: #166534;
  --cursor: #16a34a; --phosphor: rgba(22,163,74,0.08);
}""",

    'security': """\
[data-theme="light"] {
  --bg: #f0f4f8; --surface: #ffffff; --card: #f5f8fc;
  --border: #ccd9e8;
  --accent: #0891b2; --accent2: #dc2626; --accent3: #16a34a; --gold: #d97706;
  --text: #0d1f33; --text-dim: #3a5a7a; --warn: #ea580c;
}""",

    'devops': """\
[data-theme="light"] {
  --bg: #faf9f5; --surface: #ffffff; --card: #fffdf8; --card2: #fff8f0;
  --border: #e8e4d8; --border2: #d8d2c0;
  --orange: #ea580c; --orange2: #f97316;
  --green: #16a34a; --green2: #22c55e; --yellow: #ca8a04; --blue: #0284c7; --red: #dc2626;
  --text: #1c1b15; --text-dim: #5c5a50; --text-mid: #78756a;
}""",

    # /learn/networks/ files — SPA copies of networks_pro.html
    'networks_spa': """\
[data-theme="light"] {
  --bg: #f0f6ff; --bg1: #e8f0ff;
  --surf: #ffffff; --s2: #f0f5ff; --s3: #e8f0ff;
  --brd: #c8d8f0; --brd2: #b0c4e8;
  --ac: #0284c7; --ac2: #7c3aed;
  --txt: #0f1f35; --dim: #2a4a6a; --dim2: #334155;
  --gr: #059669; --yw: #d97706; --rd: #dc2626; --pk: #db2777;
}
/* Fix hardcoded #fff text — chapter & section titles */
[data-theme="light"] .ch-title,
[data-theme="light"] .section-h,
[data-theme="light"] .concept-title,
[data-theme="light"] .alert-title,
[data-theme="light"] .curr-name,
[data-theme="light"] .ms-title,
[data-theme="light"] .mc-title,
[data-theme="light"] .hstat-val,
[data-theme="light"] .nav-logo,
[data-theme="light"] .hero-title { color: #0f1f35 !important; }

/* Summary table */
[data-theme="light"] .sum-tbl th { background: #dce8f8 !important; color: #0284c7 !important; }
[data-theme="light"] .sum-tbl td:first-child { color: #0f1f35 !important; }
[data-theme="light"] .sum-tbl tr:nth-child(even) td { background: rgba(2,132,199,0.04) !important; }

/* Alert boxes — keep colored bg but fix title */
[data-theme="light"] .alert-box.info { background: rgba(2,132,199,0.08) !important; border-color: rgba(2,132,199,0.3) !important; }
[data-theme="light"] .alert-box.tip  { background: rgba(5,150,105,0.08) !important; border-color: rgba(5,150,105,0.3) !important; }
[data-theme="light"] .alert-box.warn { background: rgba(217,119,6,0.08) !important; border-color: rgba(217,119,6,0.3) !important; }

/* Concept cards */
[data-theme="light"] .concept { background: #f0f5ff !important; border-color: #c8d8f0 !important; }

/* Mission elements */
[data-theme="light"] .mi-num { background: rgba(2,132,199,0.08) !important; border-color: #c8d8f0 !important; }
[data-theme="light"] .mission-item:hover { background: rgba(2,132,199,0.05) !important; }

/* Buttons with near-invisible bg */
[data-theme="light"] .tqc-btn { background: rgba(2,132,199,0.06) !important; color: #334155 !important; }

/* Nav */
[data-theme="light"] .nav-tab { color: #2a4a6a !important; }
[data-theme="light"] .header-bar { background: rgba(240,246,255,0.95) !important; border-color: #c8d8f0 !important; }""",

    # /labs/networks/ — pre-built terminal lab files
    'networks_lab': """\
[data-theme="light"] {
  --bg: #f0f6ff; --bg2: #e8f0ff;
  --surf: #ffffff; --surf2: #f5f8ff;
  --brd: #ccd8f0; --brd2: #b8c8e8;
  --ac: #0284c7; --ac2: #7c3aed;
  --txt: #0f1f35; --txt2: #3a5a7a; --txt3: #5a7a9a;
  --gr: #059669; --yw: #d97706; --rd: #dc2626;
}""",

    # /labs/sec-*.html, /labs/soc-lab.html, /labs/ch*.html
    'security_lab': """\
[data-theme="light"] {
  --bg: #f8fafc; --bg2: #f1f5f9; --bg3: #e8eef5;
  --border: #cbd5e1;
  --lime: #65a30d; --lime-dim: rgba(101,163,13,0.1);
  --red: #dc2626; --red-dim: rgba(220,38,38,0.08);
  --amber: #d97706; --amber-dim: rgba(217,119,6,0.08);
  --sky: #0284c7; --sky-dim: rgba(2,132,199,0.08);
  --text: #0f172a; --text2: #334155; --text3: #64748b;
}""",
}


def get_category(filepath):
    rel = os.path.relpath(filepath, PUBLIC_DIR).replace('\\', '/')
    parts = rel.split('/')
    if parts[0] == 'learn' and len(parts) > 1:
        sub = parts[1]
        if sub == 'webapi':   return 'webapi'
        if sub == 'linux':    return 'linux'
        if sub == 'security': return 'security'
        if sub == 'devops':   return 'devops'
        if sub == 'networks': return 'networks_spa'
    if parts[0] == 'labs':
        if len(parts) > 1 and parts[1] == 'networks':
            return 'networks_lab'
        return 'security_lab'
    return None


def inject_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '/_bridge.js' in content:
        return 'skipped'

    cat = get_category(filepath)
    light_block = ''
    if cat and cat in LIGHT:
        light_block = f'<style id="ng-light">\n{LIGHT[cat]}\n</style>\n'

    inject = light_block + '<script src="/_bridge.js"></script>\n'
    new_content = re.sub(r'</head>', inject + '</head>', content, count=1, flags=re.IGNORECASE)

    if new_content == content:
        # No </head> found — append before </html>
        new_content = re.sub(r'</html>', inject + '</html>', content, count=1, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return 'ok'


modified = skipped = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    dirs.sort()
    for fname in sorted(files):
        if not fname.endswith('.html'):
            continue
        fpath = os.path.join(root, fname)
        result = inject_file(fpath)
        rel = os.path.relpath(fpath, PUBLIC_DIR)
        if result == 'ok':
            modified += 1
            print(f'  ✓ {rel}')
        else:
            skipped += 1
            print(f'  · skip {rel}')

print(f'\nDone — {modified} modified, {skipped} skipped')
