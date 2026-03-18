/**
 * הדמיה אינטראקטיבית - ARP Resolution
 * מדגימה ARP Request (broadcast) ו-ARP Reply (unicast)
 */
import { useState } from 'react'
import './Simulations.css'

const DEVICES = [
  { name: 'PC1', ip: '192.168.1.10', mac: '11:22:33:44:55:66', emoji: '💻' },
  { name: 'PC2', ip: '192.168.1.20', mac: 'AA:BB:CC:DD:EE:FF', emoji: '💻' },
  { name: 'PC3', ip: '192.168.1.30', mac: '77:88:99:AA:BB:CC', emoji: '💻' },
]

export function ARPSim() {
  const [step, setStep] = useState(-1)
  const [playing, setPlaying] = useState(false)

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
    }, 2000)
  }

  return (
    <div className="simulation-box arp-sim" dir="rtl">
      <h4>הדמיית ARP — תרגום IP לכתובת MAC</h4>

      <div className="arp-devices">
        {DEVICES.map((dev, i) => (
          <div
            key={i}
            className={`arp-device ${
              step === 0 ? 'arp-broadcast-target' : ''
            } ${step === 1 && i === 1 ? 'arp-reply-sender' : ''} ${
              step >= 2 && i === 0 ? 'arp-updated' : ''
            }`}
          >
            <span className="arp-emoji">{dev.emoji}</span>
            <span className="arp-name">{dev.name}</span>
            <code className="arp-ip">{dev.ip}</code>
          </div>
        ))}
      </div>

      <div className="arp-messages">
        {/* Step 0: Broadcast */}
        <div className={`arp-msg-row ${step >= 0 ? 'active' : ''}`}>
          <span className="arp-step-num">1</span>
          <div className="arp-msg-content arp-broadcast">
            <span className="arp-msg-type">ARP Request (Broadcast)</span>
            <span className="arp-msg-text">
              PC1 → כולם: &quot;מי זה 192.168.1.20?&quot;
            </span>
            {step >= 0 && (
              <div className="arp-arrows-broadcast">
                <span className="arp-arrow-line">→ PC2</span>
                <span className="arp-arrow-line">→ PC3</span>
              </div>
            )}
          </div>
        </div>

        {/* Step 1: Reply */}
        <div className={`arp-msg-row ${step >= 1 ? 'active' : ''}`}>
          <span className="arp-step-num">2</span>
          <div className="arp-msg-content arp-reply">
            <span className="arp-msg-type">ARP Reply (Unicast)</span>
            <span className="arp-msg-text">
              PC2 → PC1: &quot;זה אני — AA:BB:CC:DD:EE:FF!&quot;
            </span>
            {step >= 1 && (
              <div className="arp-arrows-reply">
                <span className="arp-arrow-line arp-arrow-back">← PC1</span>
              </div>
            )}
          </div>
        </div>

        {/* Step 2: ARP Table */}
        <div className={`arp-msg-row ${step >= 2 ? 'active' : ''}`}>
          <span className="arp-step-num">3</span>
          <div className="arp-msg-content arp-table-update">
            <span className="arp-msg-type">טבלת ARP עודכנה ב-PC1</span>
          </div>
        </div>
      </div>

      {step >= 2 && (
        <div className="arp-table-card">
          <h5>טבלת ARP של PC1:</h5>
          <table className="arp-table">
            <thead>
              <tr>
                <th>כתובת IP</th>
                <th>כתובת MAC</th>
                <th>סוג</th>
              </tr>
            </thead>
            <tbody>
              <tr className="arp-table-new">
                <td><code>192.168.1.20</code></td>
                <td><code>AA:BB:CC:DD:EE:FF</code></td>
                <td>דינמי</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <button className="sim-btn" onClick={runAnimation} disabled={playing}>
        {playing ? '▶ מריץ...' : '▶ התחל'}
      </button>
    </div>
  )
}
