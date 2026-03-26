/**
 * Iframe Dark/Light Mode Injection
 * Injects CSS overrides into same-origin iframes to sync with app dark mode.
 */

const IFRAME_THEME_CSS = `
/* ── Light pages → Dark mode ── */
html[data-theme="dark"] {
  --bg:#0f172a !important;--bg2:#1e293b !important;--bg3:#273548 !important;
  --surface:#ffffff0d !important;--surface2:#273548 !important;
  --border:#2d3a4f !important;--border2:#3d4f66 !important;
  --ink:#e2e8f0 !important;--ink2:#94a3b8 !important;
  --text:#e2e8f0 !important;--text-dim:#94a3b8 !important;--text-muted:#64748b !important;
  --dim:#94a3b8 !important;--dim2:#64748b !important;
  --ac-lt:rgba(37,99,235,0.15) !important;--gr-lt:rgba(22,163,74,0.15) !important;
  --rd-lt:rgba(220,38,38,0.15) !important;--yw-lt:rgba(217,119,6,0.15) !important;
  --accent-dim:rgba(59,130,246,0.15) !important;--accent-glow:rgba(59,130,246,0.3) !important;
  --green-dim:rgba(0,168,90,0.15) !important;--green-glow:rgba(0,168,90,0.3) !important;
  color-scheme: dark;
}
html[data-theme="dark"] body { background:var(--bg) !important; color:var(--text,var(--ink,#e2e8f0)) !important; }
html[data-theme="dark"] body::before, html[data-theme="dark"] body::after { opacity:0.3 !important; }
html[data-theme="dark"] .header, html[data-theme="dark"] .nav { background:rgba(15,23,42,0.97) !important; backdrop-filter:blur(12px); }
html[data-theme="dark"] .sidebar { background:var(--bg2) !important; }
html[data-theme="dark"] .ch-btn:hover, html[data-theme="dark"] .nav-tab:hover { background:rgba(255,255,255,0.05) !important; }
html[data-theme="dark"] .ch-btn.active { background:rgba(255,255,255,0.08) !important; }
html[data-theme="dark"] .card, html[data-theme="dark"] .section, html[data-theme="dark"] .concept-card,
html[data-theme="dark"] .info-box, html[data-theme="dark"] .note, html[data-theme="dark"] .box { background:var(--surface) !important; border-color:var(--border) !important; }
html[data-theme="dark"] table { border-color:var(--border) !important; }
html[data-theme="dark"] th { background:var(--bg2) !important; color:var(--text) !important; border-color:var(--border) !important; }
html[data-theme="dark"] td { border-color:var(--border) !important; }
html[data-theme="dark"] tr:nth-child(even) { background:rgba(255,255,255,0.02) !important; }
html[data-theme="dark"] blockquote { background:var(--surface) !important; border-color:var(--border2) !important; }
html[data-theme="dark"] input, html[data-theme="dark"] select, html[data-theme="dark"] textarea { background:var(--surface) !important; color:var(--text) !important; border-color:var(--border) !important; }
html[data-theme="dark"] summary { color:var(--text) !important; }
html[data-theme="dark"] .quiz-option, html[data-theme="dark"] .option-btn { background:var(--surface) !important; color:var(--text) !important; border-color:var(--border) !important; }
html[data-theme="dark"] h1, html[data-theme="dark"] h2, html[data-theme="dark"] h3, html[data-theme="dark"] h4 { color:var(--text,var(--ink,#e2e8f0)) !important; }

/* ── Dark pages → Light mode ── */
html[data-theme="light"] {
  --bg:#f8f9fc !important;--bg2:#f1f5f9 !important;--bg3:#e2e8f0 !important;
  --surface:#ffffff !important;--card:#ffffff !important;
  --border:#e2e8f0 !important;--border2:#cbd5e1 !important;
  --ink:#0f172a !important;--ink2:#475569 !important;--ink3:#64748b !important;
  --text:#0f172a !important;--text-mid:#475569 !important;--text-dim:#64748b !important;
  --code-bg:#1e293b !important;
  color-scheme: light;
}
html[data-theme="light"] body { background:var(--bg) !important; color:var(--text,var(--ink,#0f172a)) !important; }
html[data-theme="light"] body::before, html[data-theme="light"] body::after { opacity:0.15 !important; }
html[data-theme="light"] .header, html[data-theme="light"] .nav { background:rgba(255,255,255,0.97) !important; backdrop-filter:blur(12px); }
html[data-theme="light"] .sidebar { background:var(--bg2) !important; }
html[data-theme="light"] .ch-btn:hover, html[data-theme="light"] .nav-tab:hover { background:rgba(0,0,0,0.04) !important; }
html[data-theme="light"] .ch-btn.active { background:rgba(0,0,0,0.06) !important; }
html[data-theme="light"] .card, html[data-theme="light"] .section, html[data-theme="light"] .concept-card,
html[data-theme="light"] .info-box, html[data-theme="light"] .note, html[data-theme="light"] .box { background:var(--surface) !important; border-color:var(--border) !important; }
html[data-theme="light"] table { border-color:var(--border) !important; }
html[data-theme="light"] th { background:var(--bg2) !important; color:var(--text) !important; border-color:var(--border) !important; }
html[data-theme="light"] td { border-color:var(--border) !important; }
html[data-theme="light"] tr:nth-child(even) { background:rgba(0,0,0,0.02) !important; }
html[data-theme="light"] blockquote { background:var(--surface) !important; border-color:var(--border2) !important; }
html[data-theme="light"] input, html[data-theme="light"] select, html[data-theme="light"] textarea { background:var(--surface) !important; color:var(--text) !important; border-color:var(--border) !important; }
html[data-theme="light"] summary { color:var(--text) !important; }
html[data-theme="light"] .quiz-option, html[data-theme="light"] .option-btn { background:var(--surface) !important; color:var(--text) !important; border-color:var(--border) !important; }
html[data-theme="light"] h1, html[data-theme="light"] h2, html[data-theme="light"] h3, html[data-theme="light"] h4 { color:var(--text,var(--ink,#0f172a)) !important; }

/* ── Smooth transition ── */
body, .header, .nav, .sidebar, .card, .section { transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
`

export function injectIframeTheme(iframe, dark) {
  try {
    const doc = iframe.contentDocument
    if (!doc || !doc.head) return
    doc.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    let style = doc.getElementById('ng-theme-inject')
    if (!style) {
      style = doc.createElement('style')
      style.id = 'ng-theme-inject'
      doc.head.appendChild(style)
    }
    style.textContent = IFRAME_THEME_CSS
  } catch (e) { /* cross-origin or not loaded yet */ }
}

const ZOOM = { small: 0.85, normal: 1.0, large: 1.18 }

export function injectIframeFont(iframe, size) {
  try {
    const doc = iframe.contentDocument
    if (!doc) return
    doc.documentElement.style.zoom = ZOOM[size] || 1.0
  } catch (e) { /* cross-origin or not loaded yet */ }
}
