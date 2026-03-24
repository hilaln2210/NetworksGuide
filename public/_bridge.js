/**
 * NetworksGuide Bridge — injected into every iframe HTML file
 * Connects: font size (A-/A+), dark/light mode, XP reporting
 */
(function ngBridge() {
  'use strict';

  // ── Font zoom ──────────────────────────────────────────────
  var ZOOM = { small: 0.85, normal: 1.0, large: 1.18 };

  function applyFont(size) {
    var z = ZOOM[size] || 1.0;
    document.documentElement.style.zoom = z;
  }

  // ── Dark / Light mode ──────────────────────────────────────
  function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  // ── Init from localStorage (same origin as parent app) ─────
  try {
    var darkPref = localStorage.getItem('ng_dark_mode');
    // Default: dark = false (light mode) unless explicitly set to '1'
    applyTheme(darkPref === '1');
    applyFont(localStorage.getItem('ng_font_size') || 'normal');
  } catch (e) {}

  // ── Listen for messages from App.jsx ───────────────────────
  window.addEventListener('message', function (e) {
    if (!e.data) return;
    if (e.data.ng === 'font')  applyFont(e.data.size);
    if (e.data.ng === 'theme') applyTheme(e.data.dark);
  });

  // ── XP helper — call window.ngXP(10) from any HTML file ───
  window.ngXP = function (amount) {
    if (amount > 0) {
      try { window.parent.postMessage({ type: 'ng_xp', amount: amount }, '*'); } catch (e) {}
    }
  };
})();
