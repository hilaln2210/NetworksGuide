import { useState, useMemo } from 'react'
import { useLang } from '../utils/language.jsx'
import './Simulations.css'

function ipToInt(ip) {
  const parts = ip.split('.').map(Number)
  return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0
}

function intToIp(num) {
  return [
    (num >>> 24) & 0xff,
    (num >>> 16) & 0xff,
    (num >>> 8) & 0xff,
    num & 0xff,
  ].join('.')
}

function isValidIp(ip) {
  const parts = ip.split('.')
  if (parts.length !== 4) return false
  return parts.every(p => {
    const n = Number(p)
    return p !== '' && !isNaN(n) && n >= 0 && n <= 255 && String(n) === p
  })
}

function calcSubnet(ip, cidr) {
  const maskInt = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0
  const ipInt = ipToInt(ip)
  const networkInt = (ipInt & maskInt) >>> 0
  const broadcastInt = (networkInt | (~maskInt >>> 0)) >>> 0
  const totalHosts = Math.pow(2, 32 - cidr)
  const usableHosts = cidr <= 30 ? totalHosts - 2 : cidr === 31 ? 2 : 1

  return {
    network: intToIp(networkInt),
    broadcast: intToIp(broadcastInt),
    firstHost: cidr <= 30 ? intToIp(networkInt + 1) : intToIp(networkInt),
    lastHost: cidr <= 30 ? intToIp(broadcastInt - 1) : intToIp(broadcastInt),
    usableHosts: Math.max(usableHosts, 0),
    mask: intToIp(maskInt),
    maskBits: Array.from({ length: 32 }, (_, i) => (maskInt >>> (31 - i)) & 1),
  }
}

export function SubnetCalcSim() {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const [ip, setIp] = useState('192.168.1.100')
  const [cidr, setCidr] = useState(24)
  const [calculated, setCalculated] = useState(null)
  const [error, setError] = useState('')

  const liveBits = useMemo(() => {
    const maskInt = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0
    return Array.from({ length: 32 }, (_, i) => (maskInt >>> (31 - i)) & 1)
  }, [cidr])

  function handleCalc() {
    if (!isValidIp(ip)) {
      setError(isEn ? 'Invalid IP address — enter 4 octets (0-255)' : 'כתובת IP לא תקינה — יש להזין 4 אוקטטים (0-255)')
      setCalculated(null)
      return
    }
    setError('')
    setCalculated(calcSubnet(ip, cidr))
  }

  return (
    <div className="simulation-box subnet-calc">
      <h4>{isEn ? '🧮 Interactive Subnet Calculator' : '🧮 מחשבון Subnet אינטראקטיבי'}</h4>

      <div className="subnet-input-row">
        <div className="subnet-field">
          <label>{isEn ? 'IP Address' : 'כתובת IP'}</label>
          <input
            type="text"
            value={ip}
            onChange={e => setIp(e.target.value)}
            placeholder="192.168.1.100"
            dir="ltr"
          />
        </div>

        <div className="subnet-field subnet-slider-field">
          <label>CIDR Prefix: <span className="subnet-cidr-label">/{cidr}</span></label>
          <input
            className="subnet-slider"
            type="range"
            min={1}
            max={30}
            value={cidr}
            onChange={e => setCidr(Number(e.target.value))}
          />
          <div className="subnet-slider-range">
            <span>/1</span>
            <span>/30</span>
          </div>
        </div>

        <button className="sim-btn" onClick={handleCalc}>{isEn ? 'Calculate' : 'חשב'}</button>
      </div>

      {error && <div className="subnet-error">{error}</div>}

      {/* Live binary mask visualization */}
      <div className="subnet-binary-section">
        <label>{isEn ? 'Subnet mask in binary:' : 'מסכת רשת בבינארי:'}</label>
        <div className="subnet-binary">
          {liveBits.map((bit, i) => (
            <span key={i} className={`subnet-bit ${bit ? 'bit-one' : 'bit-zero'}`}
              style={i === cidr ? { marginRight: '0' } : undefined}
            >
              {bit}
            </span>
          ))}
          {cidr > 0 && cidr < 32 && (
            <div className="subnet-divider" style={{ right: `calc(${((32 - cidr) / 32) * 100}% - 1px)` }} />
          )}
        </div>
        <div className="subnet-binary-legend">
          <span className="legend-net">{isEn ? `Network (${cidr} bits)` : `רשת (${cidr} ביטים)`}</span>
          <span className="legend-host">{isEn ? `Host (${32 - cidr} bits)` : `מארח (${32 - cidr} ביטים)`}</span>
        </div>
      </div>

      {calculated && (
        <div className="subnet-results">
          <div className="subnet-result-card">
            <span className="result-label">{isEn ? '🌐 Network Address' : '🌐 כתובת רשת'}</span>
            <span className="result-value" dir="ltr">{calculated.network}/{cidr}</span>
          </div>
          <div className="subnet-result-card">
            <span className="result-label">{isEn ? '📡 Broadcast Address' : '📡 כתובת Broadcast'}</span>
            <span className="result-value" dir="ltr">{calculated.broadcast}</span>
          </div>
          <div className="subnet-result-card">
            <span className="result-label">{isEn ? '📍 Address Range' : '📍 טווח כתובות'}</span>
            <span className="result-value" dir="ltr">{calculated.firstHost} — {calculated.lastHost}</span>
          </div>
          <div className="subnet-result-card">
            <span className="result-label">{isEn ? '🖥️ Number of Hosts' : '🖥️ מספר Hosts'}</span>
            <span className="result-value">{calculated.usableHosts.toLocaleString()}</span>
          </div>
          <div className="subnet-result-card">
            <span className="result-label">{isEn ? '🎭 Subnet Mask' : '🎭 מסכת רשת'}</span>
            <span className="result-value" dir="ltr">{calculated.mask}</span>
          </div>
        </div>
      )}
    </div>
  )
}
