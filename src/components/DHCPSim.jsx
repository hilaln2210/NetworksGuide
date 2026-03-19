/**
 * הדמיה אינטראקטיבית - DHCP DORA Process
 * מדגימה את 4 השלבים: Discover, Offer, Request, Acknowledge
 */
import { useState } from 'react'
import { useLang } from '../utils/language.jsx'
import './Simulations.css'

export function DHCPSim() {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const [step, setStep] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(false)

  const steps = [
    { dir: 'right', label: 'Discover', desc: isEn ? 'Who is the DHCP server? 📢' : 'מי שרת DHCP? 📢', color: '#3b82f6' },
    { dir: 'left', label: 'Offer', desc: isEn ? '192.168.1.50 — good for you? 🎁' : '192.168.1.50 מתאים? 🎁', color: '#10b981' },
    { dir: 'right', label: 'Request', desc: isEn ? 'Yes, I want it! 🙋' : 'כן, אני רוצה את זה! 🙋', color: '#f59e0b' },
    { dir: 'left', label: 'Ack', desc: isEn ? 'Approved! ✅' : 'מאושר! ✅', color: '#8b5cf6' },
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
    <div className="simulation-box dhcp-sim" dir={isEn ? 'ltr' : 'rtl'}>
      <h4>{isEn ? 'DHCP Simulation — DORA Process' : 'הדמיית DHCP — תהליך DORA'}</h4>

      <div className="dhcp-arena">
        <div className="dhcp-device dhcp-client">
          <span className="dhcp-icon">💻</span>
          <span className="dhcp-label">{isEn ? 'Client' : 'לקוח'}</span>
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
          <span className="dhcp-label">{isEn ? 'DHCP Server' : 'שרת DHCP'}</span>
        </div>
      </div>

      {done && (
        <div className="dhcp-result-card">
          <h5>{isEn ? 'Received settings:' : 'הגדרות שהתקבלו:'}</h5>
          <div className="dhcp-result-grid">
            <div className="dhcp-result-item">
              <span className="dhcp-result-key">{isEn ? 'IP Address' : 'כתובת IP'}</span>
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
        {playing ? (isEn ? '▶ Running...' : '▶ מריץ...') : (isEn ? '▶ Start' : '▶ התחל')}
      </button>
    </div>
  )
}
