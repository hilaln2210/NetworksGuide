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
  const [sending, setSending] = useState(false)
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

  const handleSend = async () => {
    const { trackTitle, chapterId, pageTitle, pageIndex, totalPages } = context
    const typeLabel = TYPE_LABELS[type] || type

    setSending(true)
    try {
      const formData = new FormData()
      formData.append('סוג', typeLabel)
      formData.append('הודעה', message)
      formData.append('מסלול', trackTitle || 'לא ידוע')
      formData.append('פרק', chapterId || 'לא ידוע')
      formData.append('עמוד', pageTitle || 'לא ידוע')
      formData.append('מספר עמוד', pageIndex != null && totalPages ? `${pageIndex + 1} מתוך ${totalPages}` : 'לא ידוע')
      formData.append('מסך', `${window.innerWidth}x${window.innerHeight}`)
      formData.append('מכשיר', navigator.userAgent)
      formData.append('תאריך', new Date().toLocaleString('he-IL'))
      formData.append('_subject', `[NetworksGuide ${typeLabel}] ${trackTitle || 'כללי'} > פרק ${chapterId || '?'} > ${pageTitle || ''}`)
      formData.append('_template', 'table')

      await fetch('https://formsubmit.co/ajax/hilaaa90@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })

      setThanks(true)
      setTimeout(() => {
        setThanks(false)
        setOpen(false)
        setMessage('')
        setType('bug')
      }, 2000)
    } catch {
      alert('שגיאה בשליחה, נסו שוב')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <button
        className={`feedback-fab${showPulse ? ' pulse' : ''}`}
        onClick={() => { setOpen(true); setShowPulse(false) }}
        aria-label="משוב"
      >
        📝 משוב
      </button>

      {open && (
        <div className="feedback-overlay" onClick={() => setOpen(false)}>
          <div className="feedback-popup" onClick={e => e.stopPropagation()}>
            {thanks ? (
              <div className="feedback-thanks">
                <span className="feedback-thanks-emoji">🙏</span>
                תודה! המשוב נשלח
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
                  disabled={!message.trim() || sending}
                >
                  {sending ? 'שולח...' : 'שלח'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
