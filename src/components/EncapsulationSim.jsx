/**
 * הדמיה - Encapsulation / Decapsulation
 * מדגימה איך כל שכבה מוסיפה Header
 */
import { useState } from 'react'
import './Simulations.css'

const LAYERS = [
  { name: 'אפליקציה', color: '#8b5cf6', data: 'HTTP GET /page' },
  { name: 'תעבורה', color: '#3b82f6', add: 'TCP Header' },
  { name: 'רשת', color: '#10b981', add: 'IP Header' },
  { name: 'קו', color: '#f59e0b', add: 'Ethernet Header' },
  { name: 'פיזית', color: '#64748b', add: 'ביטים...' }
]

export function EncapsulationSim() {
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
    <div className="simulation-box encapsulation" dir="rtl">
      <h4>Encapsulation / Decapsulation – עטיפה וקילוף שכבות</h4>
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
          ↓ Encapsulation (שליחה)
        </button>
        <button className="sim-btn" onClick={runDecapsulation}>
          ↑ Decapsulation (קבלה)
        </button>
      </div>
    </div>
  )
}
