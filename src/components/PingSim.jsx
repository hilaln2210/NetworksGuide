/**
 * הדמיה - Ping & Traceroute
 * שליחת ICMP packets ומעקב אחרי hops ברשת
 */
import { useState, useRef } from 'react'
import { useLang } from '../utils/language.jsx'
import './Simulations.css'

export function PingSim() {
  const { lang } = useLang(); const isEn = lang === 'en'

  const TRACEROUTE_HOPS = [
    { name: isEn ? 'Local Router' : 'נתב מקומי', ip: '192.168.1.1' },
    { name: isEn ? 'ISP Router' : 'נתב ISP', ip: '10.0.0.1' },
    { name: isEn ? 'Regional Router' : 'נתב אזורי', ip: '72.14.215.85' },
    { name: isEn ? 'Core Router' : 'נתב ליבה', ip: '108.170.232.14' },
    { name: null, ip: null } // placeholder for destination
  ]

  const [target, setTarget] = useState('8.8.8.8')
  const [mode, setMode] = useState(null) // null, 'ping', 'traceroute'
  const [pingResults, setPingResults] = useState([])
  const [pingDone, setPingDone] = useState(false)
  const [traceHops, setTraceHops] = useState([])
  const [traceDone, setTraceDone] = useState(false)
  const [activePacket, setActivePacket] = useState(-1)
  const [running, setRunning] = useState(false)
  const timeoutsRef = useRef([])

  const clearTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }

  const addTimeout = (fn, ms) => {
    timeoutsRef.current.push(setTimeout(fn, ms))
  }

  function randomRtt(base, variance) {
    return Math.round(base + Math.random() * variance)
  }

  const displayTarget = (target || '8.8.8.8').trim()

  const handlePing = () => {
    clearTimeouts()
    setMode('ping')
    setPingResults([])
    setPingDone(false)
    setTraceHops([])
    setTraceDone(false)
    setRunning(true)

    const results = []
    for (let i = 0; i < 4; i++) {
      const rtt = randomRtt(18, 28)
      addTimeout(() => {
        setActivePacket(i)
        addTimeout(() => {
          results.push(rtt)
          setPingResults([...results])
          setActivePacket(-1)
          if (i === 3) {
            addTimeout(() => {
              setPingDone(true)
              setRunning(false)
            }, 300)
          }
        }, 400 + rtt * 5)
      }, i * 900)
    }
  }

  const handleTraceroute = () => {
    clearTimeouts()
    setMode('traceroute')
    setTraceHops([])
    setTraceDone(false)
    setPingResults([])
    setPingDone(false)
    setRunning(true)

    const hops = TRACEROUTE_HOPS.map((hop, i) => {
      const isLast = i === TRACEROUTE_HOPS.length - 1
      return {
        ttl: i + 1,
        name: isLast ? displayTarget : hop.name,
        ip: isLast ? displayTarget : hop.ip,
        rtt: randomRtt(5 + i * 8, 15),
        isDestination: isLast
      }
    })

    const revealed = []
    hops.forEach((hop, i) => {
      addTimeout(() => {
        setActivePacket(i)
        addTimeout(() => {
          revealed.push(hop)
          setTraceHops([...revealed])
          setActivePacket(-1)
          if (i === hops.length - 1) {
            addTimeout(() => {
              setTraceDone(true)
              setRunning(false)
            }, 400)
          }
        }, 600)
      }, i * 1100)
    })
  }

  const avgRtt = pingResults.length > 0
    ? Math.round(pingResults.reduce((a, b) => a + b, 0) / pingResults.length)
    : 0

  return (
    <div className="simulation-box ping-sim" dir={isEn ? 'ltr' : 'rtl'}>
      <h4>{isEn ? 'Ping & Traceroute Simulation' : 'הדמיית Ping & Traceroute'}</h4>

      {/* Target input */}
      <div className="ping-controls">
        <input
          className="ping-target-input"
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder={isEn ? 'IP or hostname (e.g. 8.8.8.8)' : 'IP או hostname (למשל 8.8.8.8)'}
          disabled={running}
        />
      </div>

      {/* Visual: Client → hops → Server */}
      <div className="ping-visual">
        <div className="ping-endpoint">
          <span className="ping-endpoint-icon">🖥️</span>
          <span className="ping-endpoint-label">{isEn ? 'Your Computer' : 'המחשב שלך'}</span>
        </div>

        <div className="ping-path-area">
          {mode === 'ping' && (
            <div className="ping-packets">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`ping-packet-row ${activePacket === i ? 'sending' : ''} ${pingResults[i] !== undefined ? 'done' : ''}`}>
                  <div className={`ping-dot ${activePacket === i ? 'animate-fly' : ''}`} />
                  {pingResults[i] !== undefined && (
                    <span className="ping-rtt-inline">{pingResults[i]}ms</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {mode === 'traceroute' && (
            <div className="trace-hops-visual">
              {TRACEROUTE_HOPS.map((_, i) => {
                const hop = traceHops[i]
                const isActive = activePacket === i
                const isRevealed = !!hop
                return (
                  <div key={i} className="trace-hop-node-wrapper">
                    <div className={`trace-hop-line ${isRevealed ? 'revealed' : ''}`} />
                    <div className={`trace-hop-node ${isRevealed ? 'revealed' : ''} ${isActive ? 'glowing' : ''} ${hop?.isDestination ? 'destination' : ''}`}>
                      {isActive && !isRevealed && <span className="trace-searching">TTL={i + 1}</span>}
                      {isRevealed && (
                        <>
                          <span className="trace-hop-name">{hop.name}</span>
                          <span className="trace-hop-ip">{hop.ip}</span>
                          <span className="trace-hop-rtt">{hop.rtt}ms</span>
                        </>
                      )}
                      {!isActive && !isRevealed && <span className="trace-hop-placeholder">?</span>}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {!mode && (
            <div className="ping-idle-line" />
          )}
        </div>

        <div className="ping-endpoint">
          <span className="ping-endpoint-icon">🌐</span>
          <span className="ping-endpoint-label">{displayTarget}</span>
        </div>
      </div>

      {/* Results */}
      {mode === 'ping' && pingResults.length > 0 && (
        <div className="ping-results">
          <div className="ping-results-title">{isEn ? `Ping Results for ${displayTarget}:` : `תוצאות Ping ל-${displayTarget}:`}</div>
          {pingResults.map((rtt, i) => (
            <div key={i} className="ping-result-line">
              {isEn
                ? `Reply from ${displayTarget}: time=${rtt}ms TTL=64 (packet #${i + 1})`
                : `תגובה מ-${displayTarget}: זמן=${rtt}ms TTL=64 (חבילה #${i + 1})`
              }
            </div>
          ))}
          {pingDone && (
            <div className="ping-summary">
              {isEn
                ? `Statistics: 4 sent, ${pingResults.length} received, 0% loss | Average RTT: ${avgRtt}ms`
                : `סטטיסטיקה: 4 נשלחו, ${pingResults.length} התקבלו, 0% אובדן | ממוצע RTT: ${avgRtt}ms`
              }
            </div>
          )}
        </div>
      )}

      {mode === 'traceroute' && traceHops.length > 0 && (
        <div className="trace-results">
          <div className="trace-results-title">Traceroute {isEn ? 'to' : 'ל-'}{displayTarget}:</div>
          {traceHops.map((hop, i) => (
            <div key={i} className={`trace-result-line ${hop.isDestination ? 'destination' : ''}`}>
              <span className="trace-ttl">{hop.ttl}</span>
              <span className="trace-info">{hop.name} ({hop.ip})</span>
              <span className="trace-rtt-val">{hop.rtt}ms</span>
              {hop.isDestination && <span className="trace-check">✅</span>}
            </div>
          ))}
          {traceDone && (
            <div className="trace-summary">
              {isEn
                ? `Trace complete — ${traceHops.length} hops to destination`
                : `המעקב הושלם — ${traceHops.length} hops עד ליעד`
              }
            </div>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="sim-buttons">
        <button className="sim-btn" onClick={handlePing} disabled={running}>
          {running && mode === 'ping' ? (isEn ? '⏳ Sending...' : '⏳ שולח...') : '📡 Ping'}
        </button>
        <button className="sim-btn" onClick={handleTraceroute} disabled={running}>
          {running && mode === 'traceroute' ? (isEn ? '⏳ Tracing...' : '⏳ עוקב...') : '🗺️ Traceroute'}
        </button>
      </div>
    </div>
  )
}
