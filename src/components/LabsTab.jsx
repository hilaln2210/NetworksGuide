import { useState, useEffect } from 'react'
import { useLang } from '../utils/language.jsx'
import { isProUnlocked, validateCode } from '../utils/proAccess.js'

const TRACKS = [
  {
    id: 'networks',
    label: { he: '🌐 רשתות מחשבים', en: '🌐 Computer Networks' },
    labs: [
      { id: 'net-ch01', chapter: { he: 'פרק 1',  en: 'Chapter 1'  }, title: { he: '🌐 תחילת מסע — איך עובד האינטרנט?',  en: '🌐 How the Internet Works'      }, description: { he: 'מה קורה כשמקלידים URL? מסע packet בין שכבות הרשת ופרוטוקולים בסיסיים.', en: 'What happens when you type a URL? Packet journey across network layers.' }, difficulty: { he: 'מתחיל',  en: 'Beginner'     }, xp: 100, src: '/learn/networks/lab_ch01.html' },
      { id: 'net-ch02', chapter: { he: 'פרק 2',  en: 'Chapter 2'  }, title: { he: '🔌 תכנות ב-Sockets',                  en: '🔌 Socket Programming'          }, description: { he: 'Socket API: TCP vs UDP, חיבורים, ports, שליחת נתונים בין client ל-server.', en: 'Socket API: TCP vs UDP, connections, ports, sending data between client and server.' }, difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 120, src: '/learn/networks/lab_ch02.html' },
      { id: 'net-ch03', chapter: { he: 'פרק 3',  en: 'Chapter 3'  }, title: { he: '🦈 Wireshark ומודל חמש שכבות',        en: '🦈 Wireshark & Five-Layer Model' }, description: { he: 'ניתוח packets בזמן אמת עם Wireshark, זיהוי שכבות ופרוטוקולים.', en: 'Real-time packet analysis with Wireshark, layer identification and protocols.' }, difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 130, src: '/learn/networks/lab_ch03.html' },
      { id: 'net-ch04', chapter: { he: 'פרק 4',  en: 'Chapter 4'  }, title: { he: '📡 שכבת האפליקציה',                   en: '📡 Application Layer'           }, description: { he: 'תרגול HTTP, DNS, SMTP — בניית בקשות, קריאת תגובות ובדיקת headers.', en: 'Practice HTTP, DNS, SMTP — building requests, reading responses, inspecting headers.' }, difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 130, src: '/learn/networks/lab_ch04.html' },
      { id: 'net-ch05', chapter: { he: 'פרק 5',  en: 'Chapter 5'  }, title: { he: '🐍 Scapy — Packet Crafting',           en: '🐍 Scapy — Packet Crafting'     }, description: { he: 'יצירת packets מאפס עם Scapy: TCP SYN, ICMP ping, שינוי שדות.', en: 'Craft packets from scratch with Scapy: TCP SYN, ICMP ping, field manipulation.' }, difficulty: { he: 'מתקדם',  en: 'Advanced'     }, xp: 150, src: '/learn/networks/lab_ch05.html' },
      { id: 'net-ch06', chapter: { he: 'פרק 6',  en: 'Chapter 6'  }, title: { he: '🚚 שכבת התעבורה',                     en: '🚚 Transport Layer'             }, description: { he: 'TCP Handshake, flow control, congestion control, UDP vs TCP.', en: 'TCP Handshake, flow control, congestion control, UDP vs TCP.' }, difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 130, src: '/learn/networks/lab_ch06.html' },
      { id: 'net-ch07', chapter: { he: 'פרק 7',  en: 'Chapter 7'  }, title: { he: '🗺️ שכבת הרשת',                       en: '🗺️ Network Layer'              }, description: { he: 'IP addressing, routing, subnetting, CIDR — חישובי subnet ומעקב routing.', en: 'IP addressing, routing, subnetting, CIDR — subnet calculations and routing.' }, difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 140, src: '/learn/networks/lab_ch07.html' },
      { id: 'net-ch08', chapter: { he: 'פרק 8',  en: 'Chapter 8'  }, title: { he: '🔗 שכבת הקו',                         en: '🔗 Data Link Layer'             }, description: { he: 'MAC addresses, ARP, Ethernet frames, switching — ניתוח frames.', en: 'MAC addresses, ARP, Ethernet frames, switching — frame analysis.' }, difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 130, src: '/learn/networks/lab_ch08.html' },
      { id: 'net-ch09', chapter: { he: 'פרק 9',  en: 'Chapter 9'  }, title: { he: '🔧 רכיבי רשת',                        en: '🔧 Network Devices'             }, description: { he: 'Hub vs Switch vs Router vs Firewall — הבדלים ובחירת הרכיב הנכון.', en: 'Hub vs Switch vs Router vs Firewall — differences and choosing the right device.' }, difficulty: { he: 'מתחיל',  en: 'Beginner'     }, xp: 110, src: '/learn/networks/lab_ch09.html' },
      { id: 'net-ch10', chapter: { he: 'פרק 10', en: 'Chapter 10' }, title: { he: '⚡ השכבה הפיזית',                     en: '⚡ Physical Layer'              }, description: { he: 'bits, סיגנלים, כבלים, קידודים ורוחב פס — הבסיס הפיזי של הרשת.', en: 'Bits, signals, cables, encodings and bandwidth — the physical foundation.' }, difficulty: { he: 'מתחיל',  en: 'Beginner'     }, xp: 110, src: '/learn/networks/lab_ch10.html' },
      { id: 'net-ch11', chapter: { he: 'פרק 11', en: 'Chapter 11' }, title: { he: '📦 איך הכל מתחבר',                    en: '📦 How It All Connects'         }, description: { he: 'מסע packet מלא מהאפליקציה עד לחוטים — encapsulation דרך כל שכבות המודל.', en: 'Full packet journey from application to wire — encapsulation through all layers.' }, difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 130, src: '/learn/networks/lab_ch11.html' },
      { id: 'net-ch12', chapter: { he: 'פרק 12', en: 'Chapter 12' }, title: { he: '⚙️ תכנות Sockets מתקדם',              en: '⚙️ Advanced Socket Programming' }, description: { he: 'non-blocking sockets, select/epoll, multi-client servers ו-async I/O.', en: 'Non-blocking sockets, select/epoll, multi-client servers and async I/O.' }, difficulty: { he: 'מתקדם',  en: 'Advanced'     }, xp: 160, src: '/learn/networks/lab_ch12.html' },
    ],
  },
  {
    id: 'security',
    label: { he: '🔒 אבטחת מידע', en: '🔒 Cybersecurity' },
    labs: [
      { id: 'sec-ch01', chapter: { he: 'פרק 1', en: 'Chapter 1' }, title: { he: '🔍 Network Scanning עם Nmap', en: '🔍 Network Scanning with Nmap' }, description: { he: 'סריקת רשתות, גילוי hosts ושירותים פתוחים עם Nmap.', en: 'Network scanning, host discovery and open service detection with Nmap.' }, difficulty: { he: 'מתחיל', en: 'Beginner' }, xp: 110, src: '/learn/security/lab_ch01.html' },
      { id: 'sec-ch02', chapter: { he: 'פרק 2', en: 'Chapter 2' }, title: { he: '🎣 Phishing Email Analysis', en: '🎣 Phishing Email Analysis' }, description: { he: 'ניתוח מיילים פישינג, זיהוי סימני מניפולציה וטכניקות Social Engineering.', en: 'Analyzing phishing emails, identifying manipulation signs and Social Engineering.' }, difficulty: { he: 'מתחיל', en: 'Beginner' }, xp: 110, src: '/learn/security/lab_ch02.html' },
      { id: 'sec-ch03', chapter: { he: 'פרק 3', en: 'Chapter 3' }, title: { he: '💉 SQL Injection עם DVWA', en: '💉 SQL Injection with DVWA' }, description: { he: 'ניצול חולשות SQL Injection ב-DVWA — הבנת המתקפה והגנה.', en: 'Exploiting SQL Injection vulnerabilities in DVWA — attack and defense.' }, difficulty: { he: 'בינוני', en: 'Intermediate' }, xp: 130, src: '/learn/security/lab_ch03.html' },
      { id: 'sec-ch04', chapter: { he: 'פרק 4', en: 'Chapter 4' }, title: { he: '🔓 Password Cracking עם Hashcat', en: '🔓 Password Cracking with Hashcat' }, description: { he: 'פיצוח סיסמאות מוצפנות עם Hashcat — dictionary attacks ו-brute force.', en: 'Cracking hashed passwords with Hashcat — dictionary attacks and brute force.' }, difficulty: { he: 'בינוני', en: 'Intermediate' }, xp: 140, src: '/learn/security/lab_ch04.html' },
      { id: 'sec-ch05', chapter: { he: 'פרק 5', en: 'Chapter 5' }, title: { he: '🦈 Wireshark — ניתוח תעבורת רשת', en: '🦈 Wireshark — Network Traffic Analysis' }, description: { he: 'ניתוח packets בזמן אמת עם Wireshark, זיהוי תעבורה חשודה.', en: 'Real-time packet analysis with Wireshark, detecting suspicious traffic.' }, difficulty: { he: 'בינוני', en: 'Intermediate' }, xp: 130, src: '/learn/security/lab_ch05.html' },
      { id: 'sec-ch06', chapter: { he: 'פרק 6', en: 'Chapter 6' }, title: { he: '🏴 CTF Challenge: TryHackMe / HackTheBox', en: '🏴 CTF Challenge: TryHackMe / HackTheBox' }, description: { he: 'פתרון אתגר CTF מעשי — שילוב כל הכלים שנלמדו.', en: 'Solving a practical CTF challenge — combining all learned tools.' }, difficulty: { he: 'מתקדם', en: 'Advanced' }, xp: 160, src: '/learn/security/lab_ch06.html' },
    ],
  },
  {
    id: 'webapi',
    label: { he: '🌍 Web ו-APIs', en: '🌍 Web & APIs' },
    labs: [
      { id: 'web-ch01', chapter: { he: 'פרק 1', en: 'Chapter 1' }, title: { he: '🌐 HTTP בחשיפה מלאה עם curl',            en: '🌐 HTTP Deep Dive with curl'              }, description: { he: 'ניתוח בקשות HTTP, Headers, Status Codes וניפוי תגובות עם curl.', en: 'Analyze HTTP requests, headers, status codes and debug responses with curl.' }, difficulty: { he: 'מתחיל',  en: 'Beginner'     }, xp: 100, src: '/learn/webapi/lab_ch01.html' },
      { id: 'web-ch02', chapter: { he: 'פרק 2', en: 'Chapter 2' }, title: { he: '⚙️ בנה REST API עם Node.js + Express',  en: '⚙️ Build REST API with Node.js + Express' }, description: { he: 'פיתוח REST API מאפס — routes, middleware, error handling.', en: 'Build REST API from scratch — routes, middleware, error handling.' },           difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 130, src: '/learn/webapi/lab_ch02.html' },
      { id: 'web-ch03', chapter: { he: 'פרק 4', en: 'Chapter 4' }, title: { he: '🔑 Auth: JWT + Refresh Tokens',          en: '🔑 Auth: JWT + Refresh Tokens'            }, description: { he: 'יישום Authentication מלא: JWT, Refresh Tokens, שמירת sessions.', en: 'Implement full Authentication: JWT, Refresh Tokens, session management.' },    difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 140, src: '/learn/webapi/lab_ch03.html' },
      { id: 'web-ch04', chapter: { he: 'פרק 5', en: 'Chapter 5' }, title: { he: '💬 WebSocket Chat בזמן אמת',            en: '💬 WebSocket Real-Time Chat'              }, description: { he: 'בניית צ\'אט בזמן אמת עם WebSocket, Socket.io, rooms ו-events.', en: 'Build real-time chat with WebSocket, Socket.io, rooms and events.' },          difficulty: { he: 'בינוני',  en: 'Intermediate' }, xp: 130, src: '/learn/webapi/lab_ch04.html' },
      { id: 'web-ch05', chapter: { he: 'פרק 6', en: 'Chapter 6' }, title: { he: '🚦 Rate Limiting & API Gateway',         en: '🚦 Rate Limiting & API Gateway'           }, description: { he: 'הגנת API עם Rate Limiting, API Gateway, Throttling ו-Circuit Breaker.', en: 'Protect API with Rate Limiting, API Gateway, Throttling and Circuit Breaker.' }, difficulty: { he: 'מתקדם', en: 'Advanced'     }, xp: 150, src: '/learn/webapi/lab_ch05.html' },
      { id: 'web-ch06', chapter: { he: 'פרק 8', en: 'Chapter 8' }, title: { he: '📈 API Load Testing עם k6',             en: '📈 API Load Testing with k6'              }, description: { he: 'בדיקות עומס על API עם k6 — Virtual Users, ramps, thresholds.', en: 'Load testing API with k6 — Virtual Users, ramps, thresholds.' },               difficulty: { he: 'מתקדם',  en: 'Advanced'     }, xp: 150, src: '/learn/webapi/lab_ch06.html' },
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

// Map content.js track IDs → LabsTab TRACKS IDs
const TRACK_ID_MAP = { networking: 'networks', cyber: 'security', webapi: 'webapi' }

export function LabsTab({ trackId }) {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const [activeLab, setActiveLab] = useState(null)
  const [unlocked, setUnlocked] = useState(() => isProUnlocked())

  const activeTrack = TRACK_ID_MAP[trackId] || 'networks'

  if (!unlocked) {
    return <ProLockScreen onUnlock={() => setUnlocked(true)} isEn={isEn} />
  }

  if (activeLab) {
    const track = TRACKS.find(t => t.id === activeTrack) || TRACKS[0]
    const labIdx = track.labs.findIndex(l => l.id === activeLab.id)
    const prevLab = labIdx > 0 ? track.labs[labIdx - 1] : null
    const nextLab = labIdx < track.labs.length - 1 ? track.labs[labIdx + 1] : null
    const btnStyle = {
      background: 'var(--bg-secondary, #f3f4f6)',
      border: '1px solid var(--border, #e5e7eb)',
      borderRadius: '8px', padding: '6px 14px',
      cursor: 'pointer', fontSize: '0.9rem',
      color: 'var(--text, #1f2937)', whiteSpace: 'nowrap',
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '10px 16px', borderBottom: '1px solid var(--border, #e5e7eb)',
          background: 'var(--bg, #fff)', flexWrap: 'wrap',
        }}>
          <button onClick={() => setActiveLab(null)} style={btnStyle}>
            {isEn ? '← Labs' : '→ מעבדות'}
          </button>
          <span style={{ fontWeight: 600, color: 'var(--text, #1f2937)', flex: 1, fontSize: '0.95rem' }}>
            {activeLab.title[lang] || activeLab.title.he}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted, #6b7280)', whiteSpace: 'nowrap' }}>
            {isEn ? `Lab ${labIdx + 1} / ${track.labs.length}` : `מעבדה ${labIdx + 1} / ${track.labs.length}`}
          </span>
          {prevLab && (
            <button onClick={() => setActiveLab(prevLab)} style={btnStyle}>
              {isEn ? '← Prev' : '→ קודמת'}
            </button>
          )}
          {nextLab ? (
            <button onClick={() => setActiveLab(nextLab)} style={{ ...btnStyle, background: 'var(--primary, #0891b2)', color: '#fff', border: 'none', fontWeight: 600 }}>
              {isEn ? 'Next Lab →' : '← מעבדה הבאה'}
            </button>
          ) : (
            <span style={{ fontSize: '0.85rem', color: 'var(--success, #16a34a)', fontWeight: 600, whiteSpace: 'nowrap' }}>
              {isEn ? '✅ Last lab!' : '✅ מעבדה אחרונה!'}
            </span>
          )}
        </div>
        <iframe
          src={activeLab.src}
          title={activeLab.title[lang] || activeLab.title.he}
          style={{ flex: 1, border: 'none', width: '100%', minHeight: '600px' }}
          allow="fullscreen"
          onLoad={(e) => {
            try { e.target.contentWindow.postMessage({ ng: 'lang', lang }, '*') } catch {}
          }}
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
