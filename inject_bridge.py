#!/usr/bin/env python3
"""
Inject _bridge.js + light-mode CSS + fix/responsive CSS into every public HTML file.
Run from the NetworksGuide project root.

Skip logic:
  - File has /_bridge.js AND id="ng-fix" → already fully injected, skip.
  - Otherwise → strip old ng-light/ng-fix, re-inject fresh blocks + bridge.
"""
import os, re

PUBLIC_DIR = os.path.join(os.path.dirname(__file__), 'public')

# ── Universal responsive/UX fixes applied to every track ──────────────────────
_UNIVERSAL = """\
/* NG responsive: prevent horizontal overflow, fix media, code scrolling */
body { overflow-x: hidden; }
img { max-width: 100% !important; height: auto !important; }
pre, .code-body, .code-block { overflow-x: auto !important; max-width: 100%; }
table { display: block; overflow-x: auto; max-width: 100%; }
@media (max-width: 480px) { body { font-size: 14px; } }"""

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

    # Networks files: :root is light by default.
    # [data-theme="light"] fine-tunes; [data-theme="dark"] is added in FIX.
    'networks': """\
[data-theme="light"] {
  --bg: #f0f6ff;
  --surface: #ffffff;
  --border: #dce8f8; --border2: #c0d4f0;
  --ink: #0f172a; --ink2: #1e293b;
  --dim: #2a4a6a; --dim2: #475569;
  --ac: #0284c7; --ac-h: #0369a1; --ac-lt: rgba(2,132,199,0.08);
  --gr: #059669; --gr-lt: rgba(5,150,105,0.06);
  --rd: #dc2626; --rd-lt: rgba(220,38,38,0.06);
  --yw: #d97706; --yw-lt: rgba(217,119,6,0.06);
  --pu: #7c3aed; --code-bg: #1e293b;
}""",

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

# ── Fix / responsive CSS per file category ────────────────────────────────────
FIX = {
    'webapi':       _UNIVERSAL,
    'linux':        _UNIVERSAL,
    'security':     _UNIVERSAL,
    'devops':       _UNIVERSAL,
    'security_lab': _UNIVERSAL,

    # Networks: add Noto Sans Hebrew + dark mode + terminal/learn mobile fixes
    'networks': """\
/* NG: Noto Sans Hebrew for nikud */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@300;400;500;600;700&display=swap');
:root {
  --f-body: 'Noto Sans Hebrew', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body { font-family: var(--f-body); }

/* NG: Networks dark mode (inverts the light :root defaults) */
[data-theme="dark"] {
  --bg:      #0b1020;
  --surface: #131928;
  --border:  #1e2d45; --border2: #263550;
  --ink:     #e2e8f0; --ink2: #cbd5e1;
  --dim:     #94a3b8; --dim2:  #64748b;
  --ac:      #60a5fa; --ac-h: #93c5fd; --ac-lt: rgba(96,165,250,0.1);
  --gr:      #4ade80; --gr-lt: rgba(74,222,128,0.08);
  --rd:      #f87171; --rd-lt: rgba(248,113,113,0.08);
  --yw:      #fbbf24; --yw-lt: rgba(251,191,36,0.08);
  --pu:      #c084fc;
  --code-bg: #0d1b2e;
}
[data-theme="dark"] body     { background: var(--bg) !important; color: var(--ink) !important; }
[data-theme="dark"] pre      { background: var(--code-bg) !important; color: #cdd6f4 !important; }
[data-theme="dark"] code     { background: rgba(96,165,250,0.08) !important; color: var(--ac) !important; }
[data-theme="dark"] .header-bar,
[data-theme="dark"] nav      { background: rgba(11,16,32,0.95) !important; border-color: var(--border) !important; }

/* NG: Terminal — collapse sidebar on mobile */
@media (max-width: 640px) {
  .trm-layout {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto 1fr;
    height: auto !important;
    min-height: 100vh;
  }
  .trm-missions {
    max-height: 220px;
    border-inline-end: none !important;
    border-bottom: 1px solid #21262d;
  }
  .trm-wrap { max-height: 60vh !important; }
}

/* NG: Learn chapters — collapse sidebar on mobile */
@media (max-width: 680px) {
  .learn-layout {
    flex-direction: column !important;
    height: auto !important;
    overflow: visible !important;
  }
  .l-sb { display: none !important; }
  .l-content {
    width: 100% !important; min-width: 0 !important;
    padding: 16px 14px 60px !important;
    overflow-y: visible !important; height: auto !important;
  }
}

/* NG: Universal */
body { overflow-x: hidden; }
img  { max-width: 100% !important; height: auto !important; }
pre, .code-body, .code-block { overflow-x: auto !important; max-width: 100%; }
table { display: block; overflow-x: auto; max-width: 100%; }
@media (max-width: 480px) { body { font-size: 14px; } }
""",
}


def get_category(filepath):
    rel = os.path.relpath(filepath, PUBLIC_DIR).replace('\\', '/')
    parts = rel.split('/')
    if parts[0] == 'learn' and len(parts) > 1:
        sub = parts[1]
        base = sub[:-3] if sub.endswith('-en') else sub  # strip -en suffix
        if base == 'webapi':    return 'webapi'
        if base == 'linux':     return 'linux'
        if base == 'security':  return 'security'
        if base == 'devops':    return 'devops'
        if base == 'networks':  return 'networks'
    if parts[0] == 'labs':
        if len(parts) > 1 and parts[1] == 'networks':
            return 'networks'
        return 'security_lab'
    return None


def inject_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    has_bridge = '/_bridge.js' in content
    has_fix    = 'id="ng-fix"' in content

    # Already fully processed — skip
    if has_bridge and has_fix:
        return 'skipped'

    # Strip old blocks (may have wrong CSS from previous runs)
    content = re.sub(r'<style id="ng-light">.*?</style>\n?', '', content, flags=re.DOTALL)
    content = re.sub(r'<style id="ng-fix">.*?</style>\n?',   '', content, flags=re.DOTALL)

    cat = get_category(filepath)

    fix_block   = f'<style id="ng-fix">\n{FIX[cat]}\n</style>\n'   if cat and cat in FIX   else ''
    light_block = f'<style id="ng-light">\n{LIGHT[cat]}\n</style>\n' if cat and cat in LIGHT else ''
    bridge_tag  = '' if has_bridge else '<script src="/_bridge.js"></script>\n'

    inject = fix_block + light_block + bridge_tag
    if not inject.strip():
        return 'skipped'

    new_content = re.sub(r'</head>', inject + '</head>', content, count=1, flags=re.IGNORECASE)
    if new_content == content:
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
