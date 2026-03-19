/**
 * הדמיה - חבילה עוברת מרשת לרשת
 * Client → Switch → Router → ... → Server
 */
import { useState } from 'react'
import { useLang } from '../utils/language.jsx'
import './Simulations.css'

export function PacketFlowSim() {
  const { lang } = useLang(); const isEn = lang === 'en'

  const NODES = isEn
    ? ['Computer', 'Switch', 'Router 1', 'Router 2', 'Router 3', 'Server']
    : ['מחשב', 'Switch', 'נתב 1', 'נתב 2', 'נתב 3', 'שרת']

  const [position, setPosition] = useState(-1)
  const [running, setRunning] = useState(false)

  const run = () => {
    setPosition(-1)
    setRunning(true)
    let p = -1
    const interval = setInterval(() => {
      p++
      setPosition(p)
      if (p >= NODES.length) {
        clearInterval(interval)
        setRunning(false)
      }
    }, 700)
  }

  return (
    <div className="simulation-box packet-flow" dir={isEn ? 'ltr' : 'rtl'}>
      <h4>{isEn ? 'Packet Path Through the Network' : 'מסלול חבילה ברשת'}</h4>
      <div className="packet-path">
        {NODES.map((node, i) => (
          <div key={i} className="path-segment">
            <div className={`path-node ${position >= i ? 'passed' : ''} ${position === i ? 'active' : ''}`}>
              {position === i && <span className="packet-emoji">📦</span>}
              <span>{node}</span>
            </div>
            {i < NODES.length - 1 && (
              <div className={`path-line ${position > i ? 'passed' : ''}`} />
            )}
          </div>
        ))}
      </div>
      <button className="sim-btn" onClick={run} disabled={running}>
        {running ? '...' : isEn ? '▶ Run Path' : '▶ הרץ מסלול'}
      </button>
    </div>
  )
}
