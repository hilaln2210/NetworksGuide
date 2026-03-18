/**
 * הדמיה אינטראקטיבית - DHCP DORA Process
 * מדגימה את 4 השלבים: Discover, Offer, Request, Acknowledge
 */
import { useState } from 'react'
import './Simulations.css'

export function DHCPSim() {
  const [step, setStep] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(false)

  const steps = [
    { dir: 'right', label: 'Discover', desc: 'מי שרת DHCP? 📢', color: '#3b82f6' },
    { dir: 'left', label: 'Offer', desc: '192.168.1.50 מתאים? 🎁', color: '#10b981' },
    { dir: 'right', label: 'Request', desc: 'כן, אני רוצה את זה! 🙋', color: '#f59e0b' },
    { dir: 'left', label: 'Ack', desc: 'מאושר! ✅', color: '#8b5cf6' },
  ]

  const result = {
    ip: '192.168.1.50',
    subnet: '255.255.255.0',
    gateway: '192.168.1.1',
    dns: '8.8.8.8',
  }

  const runAnimation = () => {
    setStep(-1)
    setDone(false)
    setPlaying(true)
    let s = -1
    const interval = setInterval(() => {
      s++
      setStep(s)
      if (s >= 3) {
        clearInterval(interval)
        setTimeout(() => {
          setDone(true)
          setPlaying(false)
        }, 800)
      }
    }, 1500)
  }

  return (
    <div className="simulation-box dhcp-sim" dir="rtl">
      <h4>הדמיית DHCP — תהליך DORA</h4>

      <div className="dhcp-arena">
        <div className="dhcp-device dhcp-client">
          <span className="dhcp-icon">💻</span>
          <span className="dhcp-label">לקוח</span>
          {done && <span className="dhcp-assigned">{result.ip}</span>}
        </div>

        <div className="dhcp-messages">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`dhcp-msg ${step >= i ? 'active' : ''} dhcp-msg-${s.dir}`}
              style={{ '--msg-color': s.color }}
            >
              <span className="dhcp-msg-arrow">
                {s.dir === 'right' ? '→' : '←'}
              </span>
              <span className="dhcp-msg-label">{s.label}</span>
              {step >= i && <span className="dhcp-msg-desc">{s.desc}</span>}
            </div>
          ))}
        </div>

        <div className="dhcp-device dhcp-server">
          <span className="dhcp-icon">🖧</span>
          <span className="dhcp-label">שרת DHCP</span>
        </div>
      </div>

      {done && (
        <div className="dhcp-result-card">
          <h5>הגדרות שהתקבלו:</h5>
          <div className="dhcp-result-grid">
            <div className="dhcp-result-item">
              <span className="dhcp-result-key">כתובת IP</span>
              <code>{result.ip}</code>
            </div>
            <div className="dhcp-result-item">
              <span className="dhcp-result-key">Subnet Mask</span>
              <code>{result.subnet}</code>
            </div>
            <div className="dhcp-result-item">
              <span className="dhcp-result-key">Default Gateway</span>
              <code>{result.gateway}</code>
            </div>
            <div className="dhcp-result-item">
              <span className="dhcp-result-key">DNS Server</span>
              <code>{result.dns}</code>
            </div>
          </div>
        </div>
      )}

      <button className="sim-btn" onClick={runAnimation} disabled={playing}>
        {playing ? '▶ מריץ...' : '▶ התחל'}
      </button>
    </div>
  )
}
