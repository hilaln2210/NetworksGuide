/**
 * הדמיה אינטראקטיבית - TLS 1.3 Handshake
 * מדגימה את שלבי ה-Handshake: ClientHello, ServerHello, Finished, מוצפן
 */
import { useState, useRef } from 'react'
import { useLang } from '../utils/language.jsx'
import './Simulations.css'

function getSteps(isEn) {
  return [
    {
      id: 'client-hello',
      direction: 'right',
      label: 'ClientHello',
      color: '#3b82f6',
      desc: isEn
        ? 'The client sends the list of Cipher Suites it supports + a Key Share for computing a shared secret.'
        : 'הלקוח שולח את רשימת ה-Cipher Suites שהוא תומך בהם + מפתח Key Share לחישוב סוד משותף.',
      detail: 'TLS_AES_128_GCM_SHA256, x25519 key share',
    },
    {
      id: 'server-hello',
      direction: 'left',
      label: 'ServerHello + Certificate',
      color: '#10b981',
      desc: isEn
        ? 'The server selects a Cipher Suite, sends its Key Share + a digital Certificate to verify its identity.'
        : 'השרת בוחר Cipher Suite, שולח את ה-Key Share שלו + תעודה דיגיטלית (Certificate) לאימות זהותו.',
      detail: 'Selected: TLS_AES_128_GCM_SHA256 + x509 cert',
    },
    {
      id: 'finished',
      direction: 'both',
      label: 'Finished',
      color: '#f59e0b',
      desc: isEn
        ? 'Both sides derive shared encryption keys from the Key Share. Each side sends an encrypted Finished message for verification.'
        : 'שני הצדדים גוזרים מפתחות הצפנה משותפים מה-Key Share. כל צד שולח הודעת Finished מוצפנת לאימות.',
      detail: 'Session keys derived via HKDF',
    },
    {
      id: 'encrypted',
      direction: 'tunnel',
      label: isEn ? '🔒 Encrypted!' : '🔒 מוצפן!',
      color: '#059669',
      desc: isEn
        ? 'The tunnel is encrypted! All communication is now protected with AES-128-GCM. No one in the middle can read the data.'
        : 'התעלה מוצפנת! כל התקשורת מעתה מוגנת ב-AES-128-GCM. אף אחד באמצע לא יכול לקרוא את המידע.',
      detail: 'Application Data encrypted',
    },
  ]
}

export function TLSHandshakeSim() {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const STEPS = getSteps(isEn)
  const [step, setStep] = useState(-1)
  const [running, setRunning] = useState(false)
  const timerRef = useRef(null)

  const start = () => {
    setStep(-1)
    setRunning(true)
    let current = -1
    timerRef.current = setInterval(() => {
      current++
      setStep(current)
      if (current >= STEPS.length - 1) {
        clearInterval(timerRef.current)
        setRunning(false)
      }
    }, 1500)
  }

  const reset = () => {
    clearInterval(timerRef.current)
    setStep(-1)
    setRunning(false)
  }

  const renderArrow = (s, i) => {
    const isActive = step >= i
    if (!isActive) return null

    if (s.direction === 'right') {
      return (
        <div className="tls-arrow tls-arrow-right" style={{ '--arrow-color': s.color }}>
          <div className="tls-arrow-line" />
          <div className="tls-arrow-head">▶</div>
        </div>
      )
    }
    if (s.direction === 'left') {
      return (
        <div className="tls-arrow tls-arrow-left" style={{ '--arrow-color': s.color }}>
          <div className="tls-arrow-head">◀</div>
          <div className="tls-arrow-line" />
        </div>
      )
    }
    if (s.direction === 'both') {
      return (
        <div className="tls-arrow tls-arrow-both" style={{ '--arrow-color': s.color }}>
          <div className="tls-arrow-head">◀</div>
          <div className="tls-arrow-line" />
          <div className="tls-arrow-head">▶</div>
        </div>
      )
    }
    // tunnel
    return null
  }

  return (
    <div className="simulation-box tls-handshake" dir={isEn ? 'ltr' : 'rtl'}>
      <h4>{isEn ? 'TLS 1.3 Handshake Simulation — Click to Start' : 'הדמיית TLS 1.3 Handshake — לחצו להפעלה'}</h4>

      <div className="tls-stage">
        {/* Client & Server columns */}
        <div className="tls-endpoint tls-client">
          <div className="tls-endpoint-icon">🖥️</div>
          <div className="tls-endpoint-label">{isEn ? 'Client' : 'לקוח (Client)'}</div>
        </div>

        <div className="tls-middle">
          {STEPS.map((s, i) => (
            <div
              key={s.id}
              className={`tls-msg-row ${step >= i ? 'active' : ''} ${step === i ? 'current' : ''}`}
            >
              {s.direction !== 'tunnel' ? (
                <>
                  <div className="tls-msg-label" style={{ color: step >= i ? s.color : undefined }}>
                    {step >= i ? s.label : '???'}
                  </div>
                  {renderArrow(s, i)}
                </>
              ) : (
                step >= i && (
                  <div className="tls-tunnel">
                    <span className="tls-tunnel-lock">🔒</span>
                    <div className="tls-tunnel-bar" />
                    <span className="tls-tunnel-text">{isEn ? 'Encrypted!' : 'מוצפן!'}</span>
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        <div className="tls-endpoint tls-server">
          <div className="tls-endpoint-icon">🖧</div>
          <div className="tls-endpoint-label">{isEn ? 'Server' : 'שרת (Server)'}</div>
        </div>
      </div>

      {/* Step description */}
      <div className="tls-description">
        {step >= 0 && step < STEPS.length ? (
          <>
            <div className="tls-desc-title" style={{ color: STEPS[step].color }}>
              {STEPS[step].label}
            </div>
            <div className="tls-desc-text">{STEPS[step].desc}</div>
            <div className="tls-desc-detail">{STEPS[step].detail}</div>
          </>
        ) : (
          <div className="tls-desc-text tls-desc-placeholder">{isEn ? 'Click "Start" to watch the Handshake process' : 'לחצו "התחל" לצפייה בתהליך ה-Handshake'}</div>
        )}
      </div>

      {/* Progress dots */}
      <div className="tls-progress">
        {STEPS.map((s, i) => (
          <div
            key={s.id}
            className={`tls-dot ${step >= i ? 'filled' : ''} ${step === i ? 'current' : ''}`}
            style={{ '--dot-color': s.color }}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="sim-buttons">
        <button className="sim-btn" onClick={start} disabled={running}>
          {running ? (isEn ? '▶ Running...' : '▶ מריץ...') : (isEn ? '▶ Start' : '▶ התחל')}
        </button>
        <button className="sim-btn" onClick={reset} disabled={running} style={{ background: 'linear-gradient(135deg, #64748b, #94a3b8)' }}>
          {isEn ? '↺ Reset' : '↺ איפוס'}
        </button>
      </div>
    </div>
  )
}
