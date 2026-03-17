/**
 * טיפ מפתח – נקודה חשובה לזכור
 */
import { useState } from 'react'
import './KeyTip.css'

const TIPS = [
  'IP = בניין, פורט = דירה',
  'TCP Handshake: SYN → SYN-ACK → ACK',
  'Encapsulation = הוספת Header, Decapsulation = קילוף',
  'DHCP → IP. DNS → תרגום שם. ARP → MAC',
  'Switch = MAC. Router = IP. Hub = לא יודע',
  'GET = הבאה. POST = שליחה',
]

export function KeyTip() {
  const [i, setI] = useState(0)
  const tip = TIPS[i % TIPS.length]

  return (
    <div
      className="key-tip"
      dir="rtl"
      onClick={() => setI((i) => i + 1)}
      title="לחצו להחלפה"
    >
      <span className="key-tip-icon">💡</span>
      <span className="key-tip-text">{tip}</span>
    </div>
  )
}
