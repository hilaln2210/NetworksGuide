/**
 * הדמיה - DNS Lookup
 * דומיין → שרת DNS → IP
 */
import { useState } from 'react'
import './Simulations.css'

const FAKE_DOMAINS = {
  'google.com': '142.250.185.46',
  'facebook.com': '31.13.72.65',
  'github.com': '20.205.243.166',
  'ynet.co.il': '213.8.113.38'
}

export function DnsLookupSim() {
  const [domain, setDomain] = useState('')
  const [stage, setStage] = useState('idle') // idle, querying, resolved
  const [ip, setIp] = useState('')

  const handleLookup = () => {
    const d = domain.trim().toLowerCase() || 'example.com'
    const resolved = FAKE_DOMAINS[d] || `93.184.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
    
    setStage('querying')
    setIp('')
    
    setTimeout(() => {
      setStage('resolved')
      setIp(resolved)
    }, 1200)
  }

  return (
    <div className="simulation-box dns-lookup">
      <h4>הדמיית DNS – תרגום שם ל־IP</h4>
      <div className="dns-flow">
        <div className="dns-node">
          <span>דפדפן</span>
          <input
            type="text"
            placeholder="הכנסי דומיין (למשל google.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLookup()}
          />
        </div>
        <div className={`dns-arrow ${stage !== 'idle' ? 'active' : ''}`}>
          {stage === 'querying' && <span className="pulse">שאילתת DNS...</span>}
        </div>
        <div className="dns-node dns-server">
          <span>שרת DNS</span>
          {stage === 'querying' && <span className="thinking">מחפש...</span>}
        </div>
        <div className={`dns-arrow ${stage === 'resolved' ? 'active' : ''}`}>
          {stage === 'resolved' && <span>← IP</span>}
        </div>
        <div className="dns-node dns-result">
          <span>תוצאה</span>
          {ip && <code className="ip-result">{ip}</code>}
        </div>
      </div>
      <button className="sim-btn" onClick={handleLookup}>
        🔍 חפשי IP
      </button>
    </div>
  )
}
