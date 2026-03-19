/**
 * הדמיה אינטראקטיבית - TCP Handshake
 * מדגימה את 3 השלבים: SYN, SYN-ACK, ACK
 */
import { useState } from 'react'
import { useLang } from '../utils/language.jsx'
import './Simulations.css'

export function TCPHandshakeSim() {
  const { lang } = useLang(); const isEn = lang === 'en'
  const [step, setStep] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const steps = [
    { from: 'client', to: 'server', msg: 'SYN', desc: isEn ? 'Client: "I want to connect!"' : 'לקוח: "אני רוצה להתחבר!"', color: '#3b82f6' },
    { from: 'server', to: 'client', msg: 'SYN-ACK', desc: isEn ? 'Server: "Approved! Connecting."' : 'שרת: "מאושר! מתחברים."', color: '#10b981' },
    { from: 'client', to: 'server', msg: 'ACK', desc: isEn ? 'Client: "Received. Let\'s start."' : 'לקוח: "קיבלתי. מתחילים."', color: '#f59e0b' }
  ]

  const runAnimation = () => {
    setStep(-1)
    setPlaying(true)
    let s = -1
    const interval = setInterval(() => {
      s++
      setStep(s)
      if (s >= 2) {
        clearInterval(interval)
        setPlaying(false)
      }
    }, 1500)
  }

  return (
    <div className="simulation-box tcp-handshake" dir={isEn ? 'ltr' : 'rtl'}>
      <h4>{isEn ? 'TCP Handshake Simulation – Click to Start' : 'הדמיית TCP Handshake – לחצו להפעלה'}</h4>
      <div className="sim-row">
        <div className="sim-node client">
          <span>{isEn ? 'Client' : 'לקוח'}</span>
        </div>
        <div className="sim-pipe">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`sim-msg ${step >= i ? 'active' : ''}`}
              style={{ '--msg-color': s.color }}
            >
              {step >= i ? (
                <>
                  <span className="msg-label">{s.msg}</span>
                  <span className="msg-desc">{s.desc}</span>
                </>
              ) : (
                <span className="msg-placeholder">?</span>
              )}
            </div>
          ))}
        </div>
        <div className="sim-node server">
          <span>{isEn ? 'Server' : 'שרת'}</span>
        </div>
      </div>
      <button
        className="sim-btn"
        onClick={runAnimation}
        disabled={playing}
      >
        {playing ? (isEn ? '▶ Running...' : '▶ מריץ...') : (isEn ? '▶ Run Simulation' : '▶ הרצת הדמיה')}
      </button>
    </div>
  )
}
