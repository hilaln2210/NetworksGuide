/**
 * הדמיה - Encapsulation / Decapsulation
 * מדגימה איך כל שכבה מוסיפה Header
 */
import { useState } from 'react'
import { useLang } from '../utils/language.jsx'
import './Simulations.css'

export function EncapsulationSim() {
  const { lang } = useLang(); const isEn = lang === 'en'

  const LAYERS = [
    { name: isEn ? 'Application' : 'אפליקציה', color: '#8b5cf6', data: 'HTTP GET /page' },
    { name: isEn ? 'Transport' : 'תעבורה', color: '#3b82f6', add: 'TCP Header' },
    { name: isEn ? 'Network' : 'רשת', color: '#10b981', add: 'IP Header' },
    { name: isEn ? 'Data Link' : 'קו', color: '#f59e0b', add: 'Ethernet Header' },
    { name: isEn ? 'Physical' : 'פיזית', color: '#64748b', add: isEn ? 'Bits...' : 'ביטים...' }
  ]

  const [direction, setDirection] = useState('down') // down = encapsulation, up = decapsulation
  const [activeLayer, setActiveLayer] = useState(-1)

  const runEncapsulation = () => {
    setDirection('down')
    setActiveLayer(-1)
    let i = 0
    const interval = setInterval(() => {
      setActiveLayer(i)
      i++
      if (i >= LAYERS.length) clearInterval(interval)
    }, 600)
  }

  const runDecapsulation = () => {
    setDirection('up')
    setActiveLayer(-1)
    let i = 0
    const interval = setInterval(() => {
      setActiveLayer(i)
      i++
      if (i >= LAYERS.length) clearInterval(interval)
    }, 600)
  }

  const layers = direction === 'down' ? LAYERS : [...LAYERS].reverse()

  return (
    <div className="simulation-box encapsulation" dir={isEn ? 'ltr' : 'rtl'}>
      <h4>{isEn ? 'Encapsulation / Decapsulation – Wrapping & Unwrapping Layers' : 'Encapsulation / Decapsulation – עטיפה וקילוף שכבות'}</h4>
      <div className={`encaps-layers ${direction}`}>
        {layers.map((layer, i) => {
          const isActive = direction === 'down'
            ? i <= activeLayer
            : i <= activeLayer  // decapsulation: reveal from bottom (reversed list)
          return (
            <div
              key={layer.name}
              className={`encaps-layer ${isActive ? 'active' : ''}`}
              style={{ '--layer-color': layer.color }}
            >
              <span className="layer-name">{layer.name}</span>
              <span className="layer-add">
                {direction === 'down' ? '+' : '−'} {layer.add || layer.data}
              </span>
            </div>
          )
        })}
      </div>
      <div className="sim-buttons">
        <button className="sim-btn" onClick={runEncapsulation}>
          {isEn ? '↓ Encapsulation (Send)' : '↓ Encapsulation (שליחה)'}
        </button>
        <button className="sim-btn" onClick={runDecapsulation}>
          {isEn ? '↑ Decapsulation (Receive)' : '↑ Decapsulation (קבלה)'}
        </button>
      </div>
    </div>
  )
}
