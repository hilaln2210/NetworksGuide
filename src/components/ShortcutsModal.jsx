import { useEffect } from 'react'
import './ShortcutsModal.css'

export function ShortcutsModal({ onClose, lang, t }) {
  const isEn = lang === 'en'

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const shortcuts = [
    { keys: isEn ? ['←', '→'] : ['→', '←'], desc: t('shortcut_nav') },
    { keys: ['Ctrl', 'K'], desc: t('shortcut_search') },
    { keys: ['?'], desc: t('shortcut_shortcuts') },
    { keys: ['D'], desc: t('shortcut_dark') },
  ]

  return (
    <div className="shortcuts-backdrop" onClick={onClose}>
      <div className="shortcuts-modal" dir={isEn ? 'ltr' : 'rtl'} onClick={e => e.stopPropagation()}>
        <div className="shortcuts-header">
          <h3>{t('shortcuts_title')}</h3>
          <button className="shortcuts-close-btn" onClick={onClose}>&#x2715;</button>
        </div>
        <div className="shortcuts-list">
          {shortcuts.map((s, i) => (
            <div key={i} className="shortcut-row">
              <div className="shortcut-keys">
                {s.keys.map((k, j) => (
                  <span key={j} className="shortcut-key">{k}</span>
                ))}
              </div>
              <span className="shortcut-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
