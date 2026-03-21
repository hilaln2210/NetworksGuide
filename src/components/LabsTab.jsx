import { useState } from 'react'
import { useLang } from '../utils/language.jsx'

const TRACKS = [
  {
    id: 'networks',
    label: { he: '🌐 רשתות מחשבים', en: '🌐 Computer Networks' },
    labs: [
      {
        id: 'net-ch01',
        title: { he: '🌐 תחילת מסע: איך עובד האינטרנט', en: '🌐 How the Internet Works' },
        description: { he: 'מה קורה כשמקלידים URL? מסע packet בין שכבות הרשת, פרוטוקולים בסיסיים ותרגול מעשי.', en: 'What happens when you type a URL? Packet journey across network layers, basic protocols and hands-on practice.' },
        chapter: { he: 'פרק 1', en: 'Chapter 1' },
        difficulty: { he: 'מתחיל', en: 'Beginner' },
        xp: 100,
        src: '/labs/networks/ch01-internet-basics-lab.html',
      },
      {
        id: 'net-ch02',
        title: { he: '🔌 תכנות Sockets ב-TCP/IP', en: '🔌 TCP/IP Socket Programming' },
        description: { he: 'תרגול Socket API: TCP vs UDP, חיבורים, ports, ושליחת נתונים בין client ל-server.', en: 'Socket API practice: TCP vs UDP, connections, ports, and sending data between client and server.' },
        chapter: { he: 'פרק 2', en: 'Chapter 2' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 120,
        src: '/labs/networks/ch02-sockets-lab.html',
      },
      {
        id: 'net-ch03',
        title: { he: '🦈 Wireshark ומודל חמש שכבות', en: '🦈 Wireshark & Five-Layer Model' },
        description: { he: 'ניתוח packets בזמן אמת עם Wireshark, זיהוי שכבות, פרוטוקולים וencapsulation.', en: 'Real-time packet analysis with Wireshark, layer identification, protocols and encapsulation.' },
        chapter: { he: 'פרק 3', en: 'Chapter 3' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/ch03-wireshark-lab.html',
      },
      {
        id: 'net-ch04',
        title: { he: '📡 שכבת האפליקציה', en: '📡 Application Layer' },
        description: { he: 'תרגול HTTP, DNS, SMTP — בניית בקשות, קריאת תגובות, ובדיקת header fields.', en: 'Practice HTTP, DNS, SMTP — building requests, reading responses, and inspecting header fields.' },
        chapter: { he: 'פרק 4', en: 'Chapter 4' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/ch04-application-layer-lab.html',
      },
      {
        id: 'net-ch05',
        title: { he: '🐍 Scapy — Packet Crafting', en: '🐍 Scapy — Packet Crafting' },
        description: { he: 'יצירת packets מאפס עם Scapy: TCP SYN, ICMP ping, שינוי שדות וזיהוי תקיפות.', en: 'Craft packets from scratch with Scapy: TCP SYN, ICMP ping, field manipulation and attack detection.' },
        chapter: { he: 'פרק 5', en: 'Chapter 5' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 150,
        src: '/labs/networks/ch05-scapy-lab.html',
      },
      {
        id: 'net-ch06',
        title: { he: '🚚 שכבת התעבורה — Transport Layer', en: '🚚 Transport Layer' },
        description: { he: 'TCP Handshake, flow control, congestion control, UDP vs TCP — תרגול ויזואלי עם אנימציות.', en: 'TCP Handshake, flow control, congestion control, UDP vs TCP — visual practice with animations.' },
        chapter: { he: 'פרק 6', en: 'Chapter 6' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/ch06-transport-layer-lab.html',
      },
      {
        id: 'net-ch07',
        title: { he: '🗺️ שכבת הרשת — Network Layer', en: '🗺️ Network Layer' },
        description: { he: 'IP addressing, routing, subnetting, CIDR — חישובי subnet ומעקב אחרי routing decisions.', en: 'IP addressing, routing, subnetting, CIDR — subnet calculations and routing decision tracing.' },
        chapter: { he: 'פרק 7', en: 'Chapter 7' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/ch07-network-layer-lab.html',
      },
      {
        id: 'net-ch08',
        title: { he: '🔗 שכבת הקו — Data Link Layer', en: '🔗 Data Link Layer' },
        description: { he: 'MAC addresses, ARP, Ethernet frames, switching — ניתוח frames ומעקב אחרי בלאגן ARP.', en: 'MAC addresses, ARP, Ethernet frames, switching — frame analysis and ARP storm tracing.' },
        chapter: { he: 'פרק 8', en: 'Chapter 8' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/ch08-data-link-lab.html',
      },
      {
        id: 'net-ch09',
        title: { he: '🔧 רכיבי רשת — Network Devices', en: '🔧 Network Devices' },
        description: { he: 'Hub vs Switch vs Router vs Firewall — הבדלים, שכבות עבודה, ובחירת הרכיב הנכון לתרחיש.', en: 'Hub vs Switch vs Router vs Firewall — differences, operating layers, and choosing the right device.' },
        chapter: { he: 'פרק 9', en: 'Chapter 9' },
        difficulty: { he: 'מתחיל', en: 'Beginner' },
        xp: 110,
        src: '/labs/networks/ch09-network-devices-lab.html',
      },
    ],
  },
  {
    id: 'security',
    label: { he: '🔒 אבטחת מידע', en: '🔒 Cybersecurity' },
    labs: [
      {
        id: 'soc-analyst',
        title: { he: '🔍 סימולציית אנליסט SOC', en: '🔍 SOC Analyst Simulation' },
        description: { he: 'חקור אירועי אבטחה בסביבת SIEM אמיתית — זהה התקפות, ענה על שאלות חקירה, ותרגל כישורי Blue Team.', en: 'Investigate security events in a real SIEM environment — identify attacks, answer investigation questions, and practice Blue Team skills.' },
        chapter: { he: 'פרק 5 — אבטחת רשת', en: 'Chapter 5 — Network Security' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 150,
        src: '/labs/soc-lab.html',
      },
      {
        id: 'bug-bounty-ctf',
        title: { he: '🐛 Bug Bounty CTF', en: '🐛 Bug Bounty CTF' },
        description: { he: '5 אתגרים עם קוד אמיתי: XSS, IDOR, Base64, SQL Injection, וכתיבת דוח Bug Bounty מקצועי. מערכת Bounty כספי ו-3 חיים.', en: '5 real-code challenges: XSS, IDOR, Base64, SQL Injection, and writing a professional Bug Bounty report. Bounty money system and 3 lives.' },
        chapter: { he: 'פרק 6 — אבטחת אפליקציות', en: 'Chapter 6 — Application Security' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 200,
        src: '/labs/ch6-bug-bounty.html',
      },
      {
        id: 'crypto-lab',
        title: { he: '🔐 מעבדת קריפטוגרפיה', en: '🔐 Cryptography Lab' },
        description: { he: '5 אתגרים: Caesar Cipher, הצפנה סימטרית/אסימטרית, Hash Collision, MitM על TLS, ובחירת ארכיטקטורת הצפנה. מערכת "מפתחות".', en: '5 challenges: Caesar Cipher, symmetric/asymmetric encryption, Hash Collision, MitM on TLS, and choosing encryption architecture. "Keys" system.' },
        chapter: { he: 'פרק 7 — קריפטוגרפיה', en: 'Chapter 7 — Cryptography' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 180,
        src: '/labs/ch7-crypto.html',
      },
    ],
  },
]

const DIFFICULTY_COLORS = {
  'מתחיל': { bg: 'rgba(5,150,105,0.1)', color: '#047857' },
  'Beginner': { bg: 'rgba(5,150,105,0.1)', color: '#047857' },
  'בינוני': { bg: 'rgba(99,102,241,0.1)', color: '#4f46e5' },
  'Intermediate': { bg: 'rgba(99,102,241,0.1)', color: '#4f46e5' },
  'מתקדם': { bg: 'rgba(220,38,38,0.1)', color: '#dc2626' },
  'Advanced': { bg: 'rgba(220,38,38,0.1)', color: '#dc2626' },
}

export function LabsTab() {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const [activeLab, setActiveLab] = useState(null)
  const [activeTrack, setActiveTrack] = useState('networks')

  if (activeLab) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '12px 20px', borderBottom: '1px solid var(--border, #e5e7eb)',
          background: 'var(--bg, #fff)',
        }}>
          <button
            onClick={() => setActiveLab(null)}
            style={{
              background: 'var(--bg-secondary, #f3f4f6)',
              border: '1px solid var(--border, #e5e7eb)',
              borderRadius: '8px', padding: '6px 14px',
              cursor: 'pointer', fontSize: '0.9rem',
              color: 'var(--text, #1f2937)',
            }}
          >
            {isEn ? '← Back to Labs' : '→ חזרה למעבדות'}
          </button>
          <span style={{ fontWeight: 600, color: 'var(--text, #1f2937)' }}>
            {activeLab.title[lang] || activeLab.title.he}
          </span>
        </div>
        <iframe
          src={activeLab.src}
          title={activeLab.title[lang] || activeLab.title.he}
          style={{ flex: 1, border: 'none', width: '100%', minHeight: '600px' }}
          allow="fullscreen"
        />
      </div>
    )
  }

  const track = TRACKS.find(t => t.id === activeTrack) || TRACKS[0]

  return (
    <div className="tab-content" style={{ padding: '24px', maxWidth: '860px', margin: '0 auto' }} dir={isEn ? 'ltr' : 'rtl'}>
      <h2 style={{ textAlign: 'center', marginBottom: '8px', color: 'var(--text, #1f2937)' }}>
        {isEn ? '🧪 Interactive Labs' : '🧪 מעבדות אינטראקטיביות'}
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted, #6b7280)', marginBottom: '20px', fontSize: '0.95rem' }}>
        {isEn ? 'Hands-on simulations — practice real-world scenarios in your browser' : 'סימולציות מעשיות — תרגול תרחישים אמיתיים ישירות בדפדפן'}
      </p>

      {/* Track selector */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
        {TRACKS.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTrack(t.id)}
            style={{
              padding: '8px 20px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.15s',
              background: activeTrack === t.id ? 'var(--accent, #0891b2)' : 'var(--bg-secondary, #f3f4f6)',
              color: activeTrack === t.id ? '#fff' : 'var(--text, #1f2937)',
              border: activeTrack === t.id ? 'none' : '1px solid var(--border, #e5e7eb)',
            }}
          >
            {t.label[lang] || t.label.he}
            <span style={{ marginInlineStart: '6px', opacity: 0.75, fontSize: '0.8rem' }}>({t.labs.length})</span>
          </button>
        ))}
      </div>

      {/* Lab cards */}
      <div style={{ display: 'grid', gap: '14px' }}>
        {track.labs.map(lab => {
          const diff = lab.difficulty[lang] || lab.difficulty.he
          const diffStyle = DIFFICULTY_COLORS[diff] || { bg: 'rgba(107,114,128,0.1)', color: '#6b7280' }
          return (
            <div
              key={lab.id}
              style={{
                background: 'var(--card-bg, #fff)',
                borderRadius: '12px',
                padding: '18px 20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                border: '1px solid var(--border, #e5e7eb)',
                cursor: 'pointer',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onClick={() => setActiveLab(lab)}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.11)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text, #1f2937)', marginBottom: '5px' }}>
                    {lab.title[lang] || lab.title.he}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #6b7280)', marginBottom: '10px', lineHeight: 1.5 }}>
                    {lab.description[lang] || lab.description.he}
                  </div>
                  <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(8,145,178,0.1)', color: '#0891b2', borderRadius: '6px', padding: '2px 8px', fontWeight: 600 }}>
                      {lab.chapter[lang] || lab.chapter.he}
                    </span>
                    <span style={{ fontSize: '0.75rem', background: diffStyle.bg, color: diffStyle.color, borderRadius: '6px', padding: '2px 8px', fontWeight: 600 }}>
                      {diff}
                    </span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(5,150,105,0.1)', color: '#047857', borderRadius: '6px', padding: '2px 8px', fontWeight: 600 }}>
                      +{lab.xp} XP
                    </span>
                  </div>
                </div>
                <button
                  style={{
                    background: 'var(--accent, #0891b2)', color: '#fff',
                    border: 'none', borderRadius: '8px', padding: '9px 18px',
                    fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer',
                    whiteSpace: 'nowrap', alignSelf: 'center',
                  }}
                  onClick={e => { e.stopPropagation(); setActiveLab(lab) }}
                >
                  {isEn ? 'Start →' : '← התחל'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
