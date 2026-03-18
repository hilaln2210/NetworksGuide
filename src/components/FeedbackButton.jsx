import { useState, useEffect } from 'react'
import './FeedbackButton.css'

const TYPES = [
  { key: 'bug', label: '\uD83D\uDC1B באג' },
  { key: 'suggestion', label: '\uD83D\uDCA1 הצעה' },
  { key: 'question', label: '\u2753 שאלה' },
]

const TYPE_LABELS = { bug: 'באג', suggestion: 'הצעה', question: 'שאלה' }

export function FeedbackButton({ context = {} }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('bug')
  const [message, setMessage] = useState('')
  const [thanks, setThanks] = useState(false)
  const [showPulse, setShowPulse] = useState(false)

  // Pulse animation on first visit only
  useEffect(() => {
    const key = 'feedback_btn_seen'
    if (!localStorage.getItem(key)) {
      setShowPulse(true)
      localStorage.setItem(key, '1')
      const timer = setTimeout(() => setShowPulse(false), 6500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSend = () => {
    const { trackTitle, chapterId, pageTitle } = context
    const typeLabel = TYPE_LABELS[type] || type
    const subject = encodeURIComponent(`[NetworksGuide ${typeLabel}] ${trackTitle || 'כללי'} > פרק ${chapterId || '?'}`)

    const bodyParts = [
      message,
      '',
      '---',
      `מסלול: ${trackTitle || 'לא ידוע'}`,
      `פרק: ${chapterId || 'לא ידוע'}`,
      `עמוד: ${pageTitle || 'לא ידוע'}`,
      `URL: ${window.location.href}`,
      `User-Agent: ${navigator.userAgent}`,
    ]
    const body = encodeURIComponent(bodyParts.join('\n'))

    window.location.href = `mailto:feedback@networksguide.app?subject=${subject}&body=${body}`

    setThanks(true)
    setTimeout(() => {
      setThanks(false)
      setOpen(false)
      setMessage('')
      setType('bug')
    }, 2000)
  }

  return (
    <>
      <button
        className={`feedback-fab${showPulse ? ' pulse' : ''}`}
        onClick={() => { setOpen(true); setShowPulse(false) }}
        aria-label="משוב"
      >
        🐛 משוב
      </button>

      {open && (
        <div className="feedback-overlay" onClick={() => setOpen(false)}>
          <div className="feedback-popup" onClick={e => e.stopPropagation()}>
            {thanks ? (
              <div className="feedback-thanks">
                <span className="feedback-thanks-emoji">🙏</span>
                תודה!
              </div>
            ) : (
              <>
                <div className="feedback-popup-header">
                  <h3>שליחת משוב</h3>
                  <button className="feedback-close-btn" onClick={() => setOpen(false)}>✕</button>
                </div>

                <div className="feedback-types">
                  {TYPES.map(t => (
                    <button
                      key={t.key}
                      className={`feedback-type-btn${type === t.key ? ' active' : ''}`}
                      onClick={() => setType(t.key)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <textarea
                  className="feedback-textarea"
                  placeholder="כתבו כאן את ההודעה..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  autoFocus
                />

                <button
                  className="feedback-send-btn"
                  onClick={handleSend}
                  disabled={!message.trim()}
                >
                  שלח
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
