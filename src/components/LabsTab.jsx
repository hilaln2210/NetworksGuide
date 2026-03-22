import { useState, useEffect } from 'react'
import { useLang } from '../utils/language.jsx'
import { isProUnlocked, validateCode } from '../utils/proAccess.js'

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
      {
        id: 'net-ch10',
        title: { he: '⚡ השכבה הפיזית — Physical Layer', en: '⚡ Physical Layer' },
        description: { he: 'bits, סיגנלים, כבלים, קידודים ורוחב פס — הבסיס הפיזי של כל תקשורת רשת.', en: 'Bits, signals, cables, encodings and bandwidth — the physical foundation of all network communication.' },
        chapter: { he: 'פרק 10', en: 'Chapter 10' },
        difficulty: { he: 'מתחיל', en: 'Beginner' },
        xp: 110,
        src: '/labs/networks/ch10-physical-layer-lab.html',
      },
      {
        id: 'net-ch11',
        title: { he: '📦 איך הכל מתחבר — Encapsulation', en: '📦 How It All Connects — Encapsulation' },
        description: { he: 'מסע packet מלא מהאפליקציה עד לחוטים — encapsulation ו-decapsulation דרך כל שכבות המודל.', en: 'Full packet journey from application to wire — encapsulation and decapsulation through all model layers.' },
        chapter: { he: 'פרק 11', en: 'Chapter 11' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 130,
        src: '/labs/networks/ch11-encapsulation-lab.html',
      },
      {
        id: 'net-ch12',
        title: { he: '⚙️ Sockets מתקדם', en: '⚙️ Advanced Sockets' },
        description: { he: 'non-blocking sockets, select/epoll, multi-client servers ו-async I/O — תרגול מתקדם של תכנות רשת.', en: 'Non-blocking sockets, select/epoll, multi-client servers and async I/O — advanced network programming practice.' },
        chapter: { he: 'פרק 12', en: 'Chapter 12' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 160,
        src: '/labs/networks/ch12-sockets-advanced-lab.html',
      },
      {
        id: 'net-ch13',
        title: { he: '📖 מילון מושגים — Networking Glossary', en: '📖 Networking Glossary' },
        description: { he: 'סיכום אינטראקטיבי של כל מושגי הרשת — חיפוש, פילוס וחידון על הגדרות מפרקים 1–12.', en: 'Interactive summary of all networking terms — search, browse and quiz yourself on definitions from chapters 1–12.' },
        chapter: { he: 'פרק 13', en: 'Chapter 13' },
        difficulty: { he: 'מתחיל', en: 'Beginner' },
        xp: 100,
        src: '/labs/networks/ch13-glossary-lab.html',
      },
      {
        id: 'net-ch14',
        title: { he: '🛠️ פקודות וכלים — Commands & Tools', en: '🛠️ Commands & Tools' },
        description: { he: 'ping, traceroute, nslookup, netstat, curl ועוד — תרגול מעשי של כלי הרשת החיוניים.', en: 'ping, traceroute, nslookup, netstat, curl and more — hands-on practice with essential network tools.' },
        chapter: { he: 'פרק 14', en: 'Chapter 14' },
        difficulty: { he: 'מתחיל', en: 'Beginner' },
        xp: 110,
        src: '/labs/networks/ch14-commands-tools-lab.html',
      },
      {
        id: 'net-ch15',
        title: { he: '🔒 HTTPS ו-TLS — תקשורת מוצפנת', en: '🔒 HTTPS & TLS — Encrypted Communication' },
        description: { he: 'איך TLS Handshake עובד, certificates, HSTS, ומה ההבדל בין HTTP ל-HTTPS בפועל.', en: 'How TLS Handshake works, certificates, HSTS, and the practical difference between HTTP and HTTPS.' },
        chapter: { he: 'פרק 15', en: 'Chapter 15' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/ch15-https-tls-lab.html',
      },
      {
        id: 'net-ch16',
        title: { he: '📱 פרוטוקולי אפליקציה — App Protocols', en: '📱 Application Protocols' },
        description: { he: 'HTTP/2, WebSockets, gRPC, REST vs GraphQL — השוואה מעשית של פרוטוקולי שכבת האפליקציה המודרניים.', en: 'HTTP/2, WebSockets, gRPC, REST vs GraphQL — practical comparison of modern application layer protocols.' },
        chapter: { he: 'פרק 16', en: 'Chapter 16' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/ch16-app-protocols-lab.html',
      },
      {
        id: 'net-ch17',
        title: { he: '🧮 Subnetting ו-CIDR', en: '🧮 Subnetting & CIDR' },
        description: { he: 'חישובי subnet ידניים ואוטומטיים, CIDR notation, network/broadcast address — תרגול מעשי.', en: 'Manual and automatic subnet calculations, CIDR notation, network/broadcast address — hands-on practice.' },
        chapter: { he: 'פרק 17', en: 'Chapter 17' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/ch17-subnetting-lab.html',
      },
      {
        id: 'net-ch18',
        title: { he: '🌍 IPv6 — גרסת האינטרנט החדשה', en: '🌍 IPv6 — The New Internet' },
        description: { he: 'מבנה כתובת IPv6, קיצורים, סוגי כתובות, Dual Stack והשוואה ל-IPv4 — תרגול אינטראקטיבי.', en: 'IPv6 address structure, abbreviations, address types, Dual Stack and comparison to IPv4 — interactive practice.' },
        chapter: { he: 'פרק 18', en: 'Chapter 18' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/ch18-ipv6-lab.html',
      },
      {
        id: 'net-ch19',
        title: { he: '🔎 DNS בעומק — הספר הטלפוני של האינטרנט', en: '🔎 DNS Deep Dive' },
        description: { he: 'Recursive vs Iterative queries, DNS records (A, MX, CNAME, TXT), TTL, caching וtroubleshooting.', en: 'Recursive vs Iterative queries, DNS records (A, MX, CNAME, TXT), TTL, caching and troubleshooting.' },
        chapter: { he: 'פרק 19', en: 'Chapter 19' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 150,
        src: '/labs/networks/ch19-dns-deep-lab.html',
      },
      {
        id: 'net-ch20',
        title: { he: '🔬 TCP בעומק', en: '🔬 TCP Deep Dive' },
        description: { he: 'Flow Control, Congestion Control, TCP States — ניתוח מעמיק של הפרוטוקול שמניע את האינטרנט.', en: 'Flow Control, Congestion Control, TCP States — deep analysis of the protocol that powers the internet.' },
        chapter: { he: 'פרק 20', en: 'Chapter 20' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 160,
        src: '/labs/networks/ch20-tcp-deep-lab.html',
      },
      {
        id: 'net-ch21',
        title: { he: '🛡️ VPN ואבטחת רשת', en: '🛡️ VPN & Network Security' },
        description: { he: 'איך VPN עובד, tunneling, IPSec, WireGuard — הגנה על תקשורת ברשתות ציבוריות.', en: 'How VPN works, tunneling, IPSec, WireGuard — protecting communication over public networks.' },
        chapter: { he: 'פרק 21', en: 'Chapter 21' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/ch21-lab.html',
      },
      {
        id: 'net-ch22',
        title: { he: '🏗️ ארכיטקטורות אינטרנט', en: '🏗️ Internet Architectures' },
        description: { he: 'CDN, Load Balancing, Microservices, Edge Computing — ארכיטקטורות שמניעות שירותים בקנה מידה גלובלי.', en: 'CDN, Load Balancing, Microservices, Edge Computing — architectures powering global-scale services.' },
        chapter: { he: 'פרק 22', en: 'Chapter 22' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 150,
        src: '/labs/networks/ch22-lab.html',
      },
      {
        id: 'net-ch23',
        title: { he: '🔥 כשל ואיתור תקלות', en: '🔥 Failures & Troubleshooting' },
        description: { he: 'זיהוי וניתוח כשלי רשת: packet loss, latency spikes, routing loops — מתודולוגיית troubleshooting מקצועית.', en: 'Identifying and diagnosing network failures: packet loss, latency spikes, routing loops — professional troubleshooting methodology.' },
        chapter: { he: 'פרק 23', en: 'Chapter 23' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 150,
        src: '/labs/networks/ch23-lab.html',
      },
      {
        id: 'net-ch24',
        title: { he: '🎭 מאחורי הקלעים', en: '🎭 Behind the Scenes' },
        description: { he: 'מה קורה כשמקלידים URL — מסע מלא דרך DNS, TCP, TLS, HTTP/2 עד לפיקסל על המסך.', en: 'What happens when you type a URL — full journey through DNS, TCP, TLS, HTTP/2 to pixels on screen.' },
        chapter: { he: 'פרק 24', en: 'Chapter 24' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/ch24-lab.html',
      },
      {
        id: 'net-ch25',
        title: { he: '👁️ פרטיות ומעקב', en: '👁️ Privacy & Tracking' },
        description: { he: 'איך גולשים נעקבים ברשת, fingerprinting, cookies, DNS-over-HTTPS — הגנה על פרטיות דיגיטלית.', en: 'How users are tracked online, fingerprinting, cookies, DNS-over-HTTPS — protecting digital privacy.' },
        chapter: { he: 'פרק 25', en: 'Chapter 25' },
        difficulty: { he: 'בינוני', en: 'Intermediate' },
        xp: 140,
        src: '/labs/networks/ch25-lab.html',
      },
      {
        id: 'net-ch26',
        title: { he: '🚀 QUIC ו-Edge Computing', en: '🚀 QUIC & Edge Computing' },
        description: { he: 'HTTP/3, QUIC protocol, Edge Computing — הדור הבא של פרוטוקולי האינטרנט ועיבוד בשוליים.', en: 'HTTP/3, QUIC protocol, Edge Computing — the next generation of internet protocols and edge processing.' },
        chapter: { he: 'פרק 26', en: 'Chapter 26' },
        difficulty: { he: 'מתקדם', en: 'Advanced' },
        xp: 160,
        src: '/labs/networks/ch26-lab.html',
      },
    ],
  },
  {
    id: 'security',
    label: { he: '🔒 אבטחת מידע', en: '🔒 Cybersecurity' },
    labs: [],
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
