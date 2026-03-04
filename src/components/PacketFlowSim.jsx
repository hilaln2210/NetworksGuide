/**
 * הדמיה - חבילה עוברת מרשת לרשת
 * Client → Switch → Router → ... → Server
 */
import { useState } from 'react'
import './Simulations.css'

const NODES = ['מחשב', 'Switch', 'נתב 1', 'נתב 2', 'נתב 3', 'שרת']

export function PacketFlowSim() {
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
    <div className="simulation-box packet-flow">
      <h4>מסלול חבילה ברשת</h4>
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
        {running ? '...' : '▶ הרץ מסלול'}
      </button>
    </div>
  )
}
