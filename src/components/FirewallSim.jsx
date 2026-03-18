/**
 * הדמיה אינטראקטיבית - Firewall Packet Filtering
 * מדגימה סינון חבילות לפי חוקי Firewall
 */
import { useState } from 'react'
import './Simulations.css'

const RULES = [
  { id: 1, action: 'ALLOW', protocol: 'TCP', port: 80, desc: 'HTTP — גלישה רגילה' },
  { id: 2, action: 'ALLOW', protocol: 'TCP', port: 443, desc: 'HTTPS — גלישה מאובטחת' },
  { id: 3, action: 'DENY', protocol: '*', port: '*', desc: 'ברירת מחדל — חסום הכל' },
]

const PACKET_OPTIONS = [
  { protocol: 'TCP', port: 80 },
  { protocol: 'TCP', port: 443 },
  { protocol: 'TCP', port: 22 },
  { protocol: 'TCP', port: 3306 },
  { protocol: 'UDP', port: 53 },
  { protocol: 'UDP', port: 8080 },
]

function randomIP() {
  return `${Math.floor(Math.random() * 223) + 1}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 254) + 1}`
}

function matchRule(packet) {
  for (const rule of RULES) {
    if (rule.port === '*' && rule.protocol === '*') {
      return { rule, matched: true }
    }
    if (rule.protocol === packet.protocol && rule.port === packet.port) {
      return { rule, matched: true }
    }
  }
  return { rule: RULES[2], matched: true }
}

export function FirewallSim() {
  const [packet, setPacket] = useState(null)
  const [phase, setPhase] = useState('idle') // idle, flying, result
  const [result, setResult] = useState(null)
  const [matchedRuleId, setMatchedRuleId] = useState(null)

  const sendPacket = () => {
    const template = PACKET_OPTIONS[Math.floor(Math.random() * PACKET_OPTIONS.length)]
    const pkt = {
      protocol: template.protocol,
      port: template.port,
      srcIP: randomIP(),
    }
    setPacket(pkt)
    setPhase('flying')
    setResult(null)
    setMatchedRuleId(null)

    setTimeout(() => {
      const { rule } = matchRule(pkt)
      setMatchedRuleId(rule.id)
      setResult(rule.action === 'ALLOW' ? 'allow' : 'deny')
      setPhase('result')
    }, 1500)
  }

  return (
    <div className="simulation-box firewall-sim" dir="rtl">
      <h4>הדמיית Firewall — סינון חבילות</h4>

      {/* Rules table */}
      <div className="fw-rules-section">
        <h5>חוקי Firewall:</h5>
        <table className="fw-rules-table">
          <thead>
            <tr>
              <th>#</th>
              <th>פעולה</th>
              <th>פרוטוקול</th>
              <th>פורט</th>
              <th>תיאור</th>
            </tr>
          </thead>
          <tbody>
            {RULES.map((r) => (
              <tr
                key={r.id}
                className={`fw-rule-row ${matchedRuleId === r.id ? (r.action === 'ALLOW' ? 'fw-rule-hit-allow' : 'fw-rule-hit-deny') : ''}`}
              >
                <td>{r.id}</td>
                <td>
                  <span className={`fw-action-badge ${r.action === 'ALLOW' ? 'fw-allow' : 'fw-deny'}`}>
                    {r.action}
                  </span>
                </td>
                <td>{r.protocol}</td>
                <td>{String(r.port)}</td>
                <td>{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Animation area */}
      <div className="fw-animation-area">
        <div className="fw-source">
          <span className="fw-icon">💻</span>
          <span>מקור</span>
        </div>

        <div className="fw-packet-lane">
          {packet && (
            <div className={`fw-packet ${phase === 'flying' ? 'fw-packet-fly' : ''} ${result === 'allow' ? 'fw-packet-pass' : ''} ${result === 'deny' ? 'fw-packet-bounce' : ''}`}>
              <span className="fw-packet-label">
                {packet.protocol}:{packet.port}
              </span>
            </div>
          )}
          <div className="fw-packet-track"></div>
        </div>

        <div className={`fw-wall ${result === 'allow' ? 'fw-wall-open' : ''} ${result === 'deny' ? 'fw-wall-block' : ''}`}>
          <span className="fw-wall-icon">🧱</span>
          <span>Firewall</span>
        </div>

        <div className="fw-packet-lane">
          <div className="fw-packet-track"></div>
        </div>

        <div className="fw-dest">
          <span className="fw-icon">🖧</span>
          <span>יעד</span>
        </div>
      </div>

      {/* Result */}
      {phase === 'result' && result && (
        <div className={`fw-result-card ${result === 'allow' ? 'fw-result-allow' : 'fw-result-deny'}`}>
          <span className="fw-result-icon">{result === 'allow' ? '✅' : '❌'}</span>
          <div className="fw-result-text">
            <strong>
              {result === 'allow' ? 'החבילה עברה!' : 'החבילה נחסמה!'}
            </strong>
            <span>
              {packet.protocol}:{packet.port} מ-{packet.srcIP}
              {' — '}
              {matchedRuleId && (
                <>
                  התאים לחוק #{matchedRuleId}
                  {matchedRuleId <= 2
                    ? ` (${RULES[matchedRuleId - 1].desc})`
                    : ' (ברירת מחדל — חסום הכל)'}
                </>
              )}
            </span>
          </div>
        </div>
      )}

      <button className="sim-btn" onClick={sendPacket} disabled={phase === 'flying'}>
        {phase === 'flying' ? '📦 שולח...' : '📦 שלח חבילה'}
      </button>
    </div>
  )
}
