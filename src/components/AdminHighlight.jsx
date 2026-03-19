import { useState, useEffect, useCallback, useRef } from 'react'
import { useLang } from '../utils/language.jsx'
import './AdminHighlight.css'

const ADMIN_KEY = 'ng_admin_unlocked'
const ADMIN_PASSWORD = 'hila2025'

export function AdminHighlight({ context = {} }) {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const [unlocked, setUnlocked] = useState(() => {
    try { return localStorage.getItem(ADMIN_KEY) === '1' } catch { return false }
  })
  const [showLogin, setShowLogin] = useState(false)
  const [password, setPassword] = useState('')
  const [selection, setSelection] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [note, setNote] = useState('')
  const [action, setAction] = useState('report') // 'report' | 'fix-text'
  const [fixText, setFixText] = useState('')
  const [sending, setSending] = useState(false)
  const [thanks, setThanks] = useState(false)
  const popupRef = useRef(null)

  // Handle login
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setUnlocked(true)
      localStorage.setItem(ADMIN_KEY, '1')
      setShowLogin(false)
      setPassword('')
    } else {
      setPassword('')
    }
  }

  const handleLogout = () => {
    setUnlocked(false)
    localStorage.removeItem(ADMIN_KEY)
  }

  // Listen for text selection
  const handleMouseUp = useCallback(() => {
    if (!unlocked) return
    const sel = window.getSelection()
    if (!sel || sel.isCollapsed || !sel.toString().trim()) {
      return
    }
    const text = sel.toString().trim()
    if (text.length < 2) return

    // Get position for popup
    const range = sel.getRangeAt(0)
    const rect = range.getBoundingClientRect()

    setSelection({
      text,
      top: rect.bottom + window.scrollY + 8,
      left: Math.min(rect.left + window.scrollX, window.innerWidth - 350),
    })
    setFixText(text)
    setNote('')
    setAction('report')
  }, [unlocked])

  useEffect(() => {
    if (unlocked) {
      document.addEventListener('mouseup', handleMouseUp)
      return () => document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [unlocked, handleMouseUp])

  // Close popup on outside click
  useEffect(() => {
    if (!selection) return
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelection(null)
      }
    }
    setTimeout(() => document.addEventListener('mousedown', handleClick), 100)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [selection])

  const handleSend = async () => {
    setSending(true)
    try {
      const formData = new FormData()
      formData.append('type', action === 'fix-text' ? 'ADMIN_FIX' : 'ADMIN_REPORT')
      formData.append('selected_text', selection.text)
      if (action === 'fix-text') {
        formData.append('fix_to', fixText)
      }
      formData.append('note', note)
      formData.append('track', context.trackTitle || '')
      formData.append('tab', context.activeTab || '')
      formData.append('chapter', context.chapterId || '')
      formData.append('page', context.pageTitle || '')
      formData.append('lang', lang)
      formData.append('url', window.location.href)
      formData.append('date', new Date().toLocaleString('en-US'))
      formData.append('_subject', `[Admin ${action}] "${selection.text.substring(0, 40)}..."`)
      formData.append('_template', 'table')
      formData.append('_captcha', 'false')

      const resp = await fetch('https://formsubmit.co/ajax/hilaaa90@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })
      const result = await resp.json().catch(() => ({}))
      if (!resp.ok || result.success === false) {
        throw new Error(result.message || 'Failed')
      }

      setThanks(true)
      setTimeout(() => {
        setThanks(false)
        setSelection(null)
      }, 1500)
    } catch {
      alert('Error sending')
    } finally {
      setSending(false)
    }
  }

  // Admin lock button (always visible, tiny)
  if (!unlocked) {
    return (
      <>
        <button
          className="admin-lock-btn"
          onClick={() => setShowLogin(true)}
          title="Admin"
        >
          🔒
        </button>
        {showLogin && (
          <div className="admin-login-overlay" onClick={() => setShowLogin(false)}>
            <div className="admin-login-modal" onClick={e => e.stopPropagation()}>
              <h3>🔐 Admin Access</h3>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                autoFocus
              />
              <button onClick={handleLogin}>Enter</button>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      {/* Admin active indicator */}
      <button className="admin-active-btn" onClick={handleLogout} title="Admin mode ON (click to lock)">
        🔓
      </button>

      {/* Selection popup */}
      {selection && (
        <div
          ref={popupRef}
          className="admin-popup"
          style={{ top: selection.top, left: selection.left }}
        >
          {thanks ? (
            <div className="admin-thanks">✅ {isEn ? 'Sent!' : 'נשלח!'}</div>
          ) : (
            <>
              <div className="admin-popup-header">
                <span className="admin-popup-title">
                  {isEn ? '🎯 Selected Text' : '🎯 טקסט מסומן'}
                </span>
                <button className="admin-popup-close" onClick={() => setSelection(null)}>✕</button>
              </div>

              <div className="admin-selected-text" dir="auto">
                "{selection.text.length > 100 ? selection.text.substring(0, 100) + '...' : selection.text}"
              </div>

              <div className="admin-actions">
                <button
                  className={`admin-action-btn ${action === 'report' ? 'active' : ''}`}
                  onClick={() => setAction('report')}
                >
                  📋 {isEn ? 'Report Issue' : 'דווח בעיה'}
                </button>
                <button
                  className={`admin-action-btn ${action === 'fix-text' ? 'active' : ''}`}
                  onClick={() => setAction('fix-text')}
                >
                  ✏️ {isEn ? 'Fix Text' : 'תקן טקסט'}
                </button>
              </div>

              {action === 'fix-text' && (
                <textarea
                  className="admin-fix-input"
                  value={fixText}
                  onChange={e => setFixText(e.target.value)}
                  placeholder={isEn ? 'Write the correct text...' : 'כתוב את הטקסט הנכון...'}
                  dir="auto"
                />
              )}

              <textarea
                className="admin-note-input"
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder={isEn ? 'Note (optional)...' : 'הערה (אופציונלי)...'}
                dir="auto"
              />

              <button
                className="admin-send-btn"
                onClick={handleSend}
                disabled={sending || (action === 'fix-text' && !fixText.trim())}
              >
                {sending ? '⏳' : '📨'} {isEn ? 'Send' : 'שלח'}
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
