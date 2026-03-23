import { useState, useEffect } from 'react'
import { useLang } from '../utils/language.jsx'
import { isProUnlocked, validateCode } from '../utils/proAccess.js'

const TRACKS = [
  {
    id: 'networks',
    label: { he: '🌐 רשתות מחשבים', en: '🌐 Computer Networks' },
    labs: [
      {
        id: 'net-ch03',
        title: { he: '🦈 Wireshark ומודל חמש שכבות', en: '🦈 Wireshark & Five-Layer Model' },
        description: { he: 'ניתוח packets בזמן אמת עם Wireshark, זיהוי שכבות, פרוטוקולים וencapsulation.', en: 'Real-time packet analysis with Wireshark, layer identification, protocols and encapsulation.' },
        chapter: { he: 'פרק 3', en: 'Chapter 3' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/lab_ch03.html',
      },
      {
        id: 'net-ch04',
        title: { he: '📡 שכבת האפליקציה', en: '📡 Application Layer' },
        description: { he: 'תרגול HTTP, DNS, SMTP — בניית בקשות, קריאת תגובות, ובדיקת header fields.', en: 'Practice HTTP, DNS, SMTP — building requests, reading responses, and inspecting header fields.' },
        chapter: { he: 'פרק 4', en: 'Chapter 4' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/lab_ch04.html',
      },
      {
        id: 'net-ch05',
        title: { he: '🐍 Scapy — Packet Crafting', en: '🐍 Scapy — Packet Crafting' },
        description: { he: 'יצירת packets מאפס עם Scapy: TCP SYN, ICMP ping, שינוי שדות וזיהוי תקיפות.', en: 'Craft packets from scratch with Scapy: TCP SYN, ICMP ping, field manipulation and attack detection.' },
        chapter: { he: 'פרק 5', en: 'Chapter 5' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 150,
        src: '/labs/networks/lab_ch05.html',
      },
      {
        id: 'net-ch06',
        title: { he: '🚚 שכבת התעבורה', en: '🚚 Transport Layer' },
        description: { he: 'TCP Handshake, flow control, congestion control, UDP vs TCP — תרגול ויזואלי עם אנימציות.', en: 'TCP Handshake, flow control, congestion control, UDP vs TCP — visual practice with animations.' },
        chapter: { he: 'פרק 6', en: 'Chapter 6' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/lab_ch06.html',
      },
      {
        id: 'net-ch07',
        title: { he: '🗺️ שכבת הרשת', en: '🗺️ Network Layer' },
        description: { he: 'IP addressing, routing, subnetting, CIDR — חישובי subnet ומעקב אחרי routing decisions.', en: 'IP addressing, routing, subnetting, CIDR — subnet calculations and routing decision tracing.' },
        chapter: { he: 'פרק 7', en: 'Chapter 7' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/lab_ch07.html',
      },
      {
        id: 'net-ch08',
        title: { he: '🔗 שכבת הקו', en: '🔗 Data Link Layer' },
        description: { he: 'MAC addresses, ARP, Ethernet frames, switching — ניתוח frames ומעקב אחרי בלאגן ARP.', en: 'MAC addresses, ARP, Ethernet frames, switching — frame analysis and ARP storm tracing.' },
        chapter: { he: 'פרק 8', en: 'Chapter 8' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/lab_ch08.html',
      },
      {
        id: 'net-ch09',
        title: { he: '🔧 רכיבי רשת', en: '🔧 Network Devices' },
        description: { he: 'Hub vs Switch vs Router vs Firewall — הבדלים, שכבות עבודה, ובחירת הרכיב הנכון לתרחיש.', en: 'Hub vs Switch vs Router vs Firewall — differences, operating layers, and choosing the right device.' },
        chapter: { he: 'פרק 9', en: 'Chapter 9' },
        difficulty: { he: 'מתחיל', en: 'Beginner' },
        xp: 110,
        src: '/labs/networks/lab_ch09.html',
      },
      {
        id: 'net-ch10',
        title: { he: '⚡ השכבה הפיזית', en: '⚡ Physical Layer' },
        description: { he: 'bits, סיגנלים, כבלים, קידודים ורוחב פס — הבסיס הפיזי של כל תקשורת רשת.', en: 'Bits, signals, cables, encodings and bandwidth — the physical foundation of all network communication.' },
        chapter: { he: 'פרק 10', en: 'Chapter 10' },
        difficulty: { he: 'מתחיל', en: 'Beginner' },
        xp: 110,
        src: '/labs/networks/lab_ch10.html',
      },
    ],
  },
  {
    id: 'security',
    label: { he: '🔒 אבטחת מידע', en: '🔒 Cybersecurity' },
    labs: [
      {
        id: 'sec-ch01',
        title: { he: '🔒 CIA Triad — יסודות אבטחת מידע', en: '🔒 CIA Triad — Security Fundamentals' },
        description: { he: 'Confidentiality, Integrity, Availability — שלושת עמודי התווך של אבטחת מידע, תרחישים מעשיים וניתוח כשלים.', en: 'Confidentiality, Integrity, Availability — the three pillars of information security, practical scenarios and failure analysis.' },
        chapter: { he: 'פרק 1', en: 'Chapter 1' },
        difficulty: { he: 'מתחיל', en: 'Beginner' },
        xp: 110,
        src: '/labs/sec-ch01-cia-triad-lab.html',
      },
      {
        id: 'sec-ch02',
        title: { he: '🔒 מתקפות רשת — TCP/IP כנשק', en: '🔒 Network Attacks — TCP/IP as a Weapon' },
        description: { he: 'SYN Flood, ARP Spoofing, MITM, DNS Poisoning — איך פרוטוקולי רשת מנוצלים למתקפות ואיך מתגוננים.', en: 'SYN Flood, ARP Spoofing, MITM, DNS Poisoning — how network protocols are exploited and how to defend.' },
        chapter: { he: 'פרק 2', en: 'Chapter 2' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/sec-ch02-network-attacks-lab.html',
      },
      {
        id: 'sec-ch03',
        title: { he: '🔒 OWASP Top 10 — פגיעויות Web', en: '🔒 OWASP Top 10 — Web Vulnerabilities' },
        description: { he: 'עשרת הפגיעויות הנפוצות ביותר ב-Web: XSS, SQLi, CSRF, IDOR ועוד — זיהוי, ניצול והגנה.', en: 'The 10 most common web vulnerabilities: XSS, SQLi, CSRF, IDOR and more — identification, exploitation and defense.' },
        chapter: { he: 'פרק 3', en: 'Chapter 3' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 150,
        src: '/labs/sec-ch03-owasp-top10-lab.html',
      },
      {
        id: 'sec-ch04',
        title: { he: '🔒 Penetration Testing — בדיקות חדירה', en: '🔒 Penetration Testing' },
        description: { he: 'מתודולוגיית Pentest: Reconnaissance, Scanning, Exploitation, Reporting — תרגול סביבת מטרה מבוקרת.', en: 'Pentest methodology: Reconnaissance, Scanning, Exploitation, Reporting — practice in a controlled target environment.' },
        chapter: { he: 'פרק 4', en: 'Chapter 4' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 180,
        src: '/labs/sec-ch04-pentest-lab.html',
      },
      {
        id: 'sec-ch05',
        title: { he: '🔍 Incident Response & Digital Forensics', en: '🔍 Incident Response & Digital Forensics' },
        description: { he: 'PICERL, Order of Volatility, Containment, Memory Forensics, Ransomware Response, Chain of Custody — תגובה מקצועית לאירועי סייבר ופורנזיקה דיגיטלית.', en: 'PICERL, Order of Volatility, Containment, Memory Forensics, Ransomware Response, Chain of Custody — professional cyber incident response and digital forensics.' },
        chapter: { he: 'פרק 5', en: 'Chapter 5' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 170,
        src: '/labs/sec-ch05-incident-response-lab.html',
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

function ProLockScreen({ onUnlock, isEn }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!code.trim()) return
    setLoading(true)
    setError(false)
    const ok = await validateCode(code)
    setLoading(false)
    if (ok) onUnlock()
    else setError(true)
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', padding: '32px', textAlign: 'center',
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔐</div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text, #1f2937)', marginBottom: '8px' }}>
        {isEn ? 'Pro Content' : 'תוכן Pro'}
      </h2>
      <p style={{ color: 'var(--text-muted, #6b7280)', marginBottom: '28px', maxWidth: '340px', lineHeight: 1.6 }}>
        {isEn
          ? 'The Labs are available to approved students only. Enter your access code to continue.'
          : 'המעבדות זמינות לסטודנטים מאושרים בלבד. הזן את קוד הגישה שקיבלת כדי להמשיך.'}
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '300px' }}>
        <input
          type="text"
          value={code}
          onChange={e => { setCode(e.target.value); setError(false) }}
          placeholder={isEn ? 'Enter access code...' : 'קוד גישה...'}
          autoFocus
          style={{
            padding: '12px 16px', borderRadius: '10px', fontSize: '1rem',
            border: `1.5px solid ${error ? '#ef4444' : 'var(--border, #e5e7eb)'}`,
            background: 'var(--bg, #fff)', color: 'var(--text, #1f2937)',
            outline: 'none', textAlign: 'center', letterSpacing: '0.05em',
          }}
        />
        {error && (
          <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>
            {isEn ? 'Invalid code. Please try again.' : 'קוד שגוי. נסה שוב.'}
          </span>
        )}
        <button
          type="submit"
          disabled={loading || !code.trim()}
          style={{
            padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '1rem',
            background: 'var(--accent, #0891b2)', color: '#fff', border: 'none',
            cursor: loading || !code.trim() ? 'not-allowed' : 'pointer',
            opacity: loading || !code.trim() ? 0.6 : 1,
          }}
        >
          {loading ? '...' : (isEn ? 'Unlock Labs' : 'פתח גישה')}
        </button>
      </form>
      <p style={{ marginTop: '24px', fontSize: '0.8rem', color: 'var(--text-muted, #6b7280)' }}>
        {isEn ? "Don't have a code? Contact your instructor." : 'אין לך קוד? פנה למרצה.'}
      </p>
    </div>
  )
}

export function LabsTab() {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const [activeLab, setActiveLab] = useState(null)
  const [activeTrack, setActiveTrack] = useState('networks')
  const [unlocked, setUnlocked] = useState(() => isProUnlocked())

  if (!unlocked) {
    return <ProLockScreen onUnlock={() => setUnlocked(true)} isEn={isEn} />
  }

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
                    <span style={{ fontSize: '0.75rem', background: 'linear-gradient(135deg,#f59e0b,#ef4444)', color: '#fff', borderRadius: '6px', padding: '2px 8px', fontWeight: 700, letterSpacing: '0.03em' }}>
                      ✦ PRO
                    </span>
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
