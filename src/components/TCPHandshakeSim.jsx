/**
 * הדמיה אינטראקטיבית - TCP Handshake
 * מדגימה את 3 השלבים: SYN, SYN-ACK, ACK
 */
import { useState } from 'react'
import './Simulations.css'

export function TCPHandshakeSim() {
  const [step, setStep] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const steps = [
    { from: 'client', to: 'server', msg: 'SYN', desc: 'לקוח: "אני רוצה להתחבר!"', color: '#3b82f6' },
    { from: 'server', to: 'client', msg: 'SYN-ACK', desc: 'שרת: "מאושר! מתחברים."', color: '#10b981' },
    { from: 'client', to: 'server', msg: 'ACK', desc: 'לקוח: "קיבלתי. מתחילים."', color: '#f59e0b' }
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
    <div className="simulation-box tcp-handshake">
      <h4>הדמיית TCP Handshake – לחיצה להפעלה</h4>
      <div className="sim-row">
        <div className="sim-node client">
          <span>לקוח</span>
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
          <span>שרת</span>
        </div>
      </div>
      <button
        className="sim-btn"
        onClick={runAnimation}
        disabled={playing}
      >
        {playing ? '▶ מתנגן...' : '▶ הרץ הדמיה'}
      </button>
    </div>
  )
}
