import { useState, useEffect } from 'react'
import { useLang } from '../utils/language.jsx'
import './FeedbackButton.css'

const TYPES_HE = [
  { key: 'bug', label: '🐛 באג' },
  { key: 'suggestion', label: '💡 הצעה' },
  { key: 'question', label: '❓ שאלה' },
]
const TYPES_EN = [
  { key: 'bug', label: '🐛 Bug' },
  { key: 'suggestion', label: '💡 Suggestion' },
  { key: 'question', label: '❓ Question' },
]

export function FeedbackButton({ context = {} }) {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const TYPES = isEn ? TYPES_EN : TYPES_HE

  const [open, setOpen] = useState(false)
  const [type, setType] = useState('bug')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [thanks, setThanks] = useState(false)
  const [showPulse, setShowPulse] = useState(false)

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
    const { trackTitle, activeTab, chapterId, pageTitle, pageIndex, totalPages } = context
    const typeLabel = type

    setSending(true)
    try {
      const formData = new FormData()
      formData.append('type', typeLabel)
      formData.append('message', message)
      formData.append('track', trackTitle || 'unknown')
      formData.append('tab', activeTab || 'unknown')
      if (chapterId) formData.append('chapter', chapterId)
      formData.append('page', pageTitle || 'unknown')
      if (pageIndex != null && totalPages) formData.append('page_num', `${pageIndex + 1} / ${totalPages}`)
      formData.append('screen', `${window.innerWidth}x${window.innerHeight}`)
      formData.append('device', navigator.userAgent)
      formData.append('date', new Date().toLocaleString('en-US'))
      formData.append('lang', lang)
      formData.append('_subject', `[NetworksGuide ${typeLabel}] ${activeTab || ''} | ${trackTitle || 'general'} > ${pageTitle || ''}`)
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
      alert(isEn ? 'Error sending, please try again' : 'שגיאה בשליחה, נסו שוב')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <button
        className={`feedback-fab${showPulse ? ' pulse' : ''}`}
        onClick={() => { setOpen(true); setShowPulse(false) }}
        aria-label={isEn ? 'Feedback' : 'משוב'}
      >
        {isEn ? '📝 Feedback' : '📝 משוב'}
      </button>

      {open && (
        <div className="feedback-overlay" onClick={() => setOpen(false)}>
          <div className="feedback-popup" onClick={e => e.stopPropagation()}>
            {thanks ? (
              <div className="feedback-thanks">
                <span className="feedback-thanks-emoji">🙏</span>
                {isEn ? 'Thanks! Feedback sent' : 'תודה! המשוב נשלח'}
              </div>
            ) : (
              <>
                <div className="feedback-popup-header">
                  <h3>{isEn ? 'Send Feedback' : 'שליחת משוב'}</h3>
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
                  placeholder={isEn ? 'Write your message here...' : 'כתבו כאן את ההודעה...'}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  autoFocus
                />

                <button
                  className="feedback-send-btn"
                  onClick={handleSend}
                  disabled={!message.trim() || sending}
                >
                  {sending ? (isEn ? 'Sending...' : 'שולח...') : (isEn ? 'Send' : 'שלח')}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
