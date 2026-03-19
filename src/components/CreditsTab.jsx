import { useLang } from '../utils/language.jsx'
import './CreditsTab.css'

const SOURCES = [
  {
    icon: '📚',
    name: 'Computer Networks — Tanenbaum',
    description: 'ספר הלימוד הקלאסי לרשתות מחשבים. הבסיס התיאורטי לכל הנושאים המוסברים במדריך.',
    descriptionEn: 'The classic textbook for computer networks. The theoretical foundation for all topics covered in this guide.',
  },
  {
    icon: '🌐',
    name: 'RFC Documents (IETF)',
    description: 'המפרטים הרשמיים של פרוטוקולי האינטרנט — TCP, UDP, HTTP, TLS ועוד.',
    descriptionEn: 'The official specifications for Internet protocols — TCP, UDP, HTTP, TLS and more.',
  },
  {
    icon: '📖',
    name: 'Google SRE Book',
    description: 'Site Reliability Engineering — תפיסות תשתית, זמינות ואמינות בקנה מידה של Google.',
    descriptionEn: 'Site Reliability Engineering — infrastructure concepts, availability and reliability at Google scale.',
  },
  {
    icon: '🔒',
    name: 'Cloudflare Blog',
    description: 'מאמרים טכניים מעמיקים על QUIC, eBPF, DDoS mitigation ואבטחת רשת.',
    descriptionEn: 'In-depth technical articles on QUIC, eBPF, DDoS mitigation and network security.',
  },
  {
    icon: '🦈',
    name: 'Wireshark Documentation',
    description: 'תיעוד כלי ניתוח החבילות המוביל — הבנת פרוטוקולים דרך ניתוח תעבורה אמיתית.',
    descriptionEn: 'Documentation for the leading packet analysis tool — understanding protocols through real traffic analysis.',
  },
  {
    icon: '🎓',
    name: 'Stanford CS144',
    description: 'קורס Introduction to Computer Networks של אוניברסיטת סטנפורד — חומר אקדמי מעולה.',
    descriptionEn: 'Stanford University\'s Introduction to Computer Networks course — excellent academic material.',
  },
  {
    icon: '📡',
    name: 'RIPE NCC',
    description: 'נתוני BGP, הקצאות IP ומפות רשת של האינטרנט האירופי והעולמי.',
    descriptionEn: 'BGP data, IP allocations and network maps of the European and global Internet.',
  },
  {
    icon: '🕸️',
    name: 'EFF Panopticlick',
    description: 'מחקר Browser Fingerprinting של Electronic Frontier Foundation — פרטיות ברשת.',
    descriptionEn: 'Browser Fingerprinting research by the Electronic Frontier Foundation — online privacy.',
  },
  {
    icon: '🚀',
    name: 'Netflix Tech Blog',
    description: 'ארכיטקטורת Open Connect CDN, אופטימיזציות סטרימינג ותשתית בקנה מידה גלובלי.',
    descriptionEn: 'Open Connect CDN architecture, streaming optimizations and infrastructure at global scale.',
  },
  {
    icon: '🔬',
    name: 'Tor Project Documentation',
    description: 'תיעוד רשמי של רשת Tor — הצפנה בשכבות, ניתוב שרשרתי ואנונימיות ברשת.',
    descriptionEn: 'Official Tor network documentation — layered encryption, onion routing and online anonymity.',
  },
]

const TECHS = [
  { icon: '⚛️', label: 'React + Vite' },
  { icon: '🎨', label: 'CSS Modules' },
  { icon: '📐', label: 'SVG Diagrams (Inline)' },
  { icon: '🤖', label: 'Puppeteer (QA)' },
  { icon: '🔤', label: 'Rubik Font' },
]

export function CreditsTab() {
  const { lang } = useLang()
  const isEn = lang === 'en'

  return (
    <div className="credits-tab" dir={isEn ? 'ltr' : 'rtl'}>
      {/* Header */}
      <div className="credits-header">
        <div className="credits-header-icon">🌐</div>
        <h1 className="credits-title">{isEn ? 'Sources & Credits' : 'מקורות וקרדיטים'}</h1>
        <p className="credits-subtitle">
          {isEn
            ? 'This interactive computer networks guide was built based on academic sources, official documentation and top-tier technical literature.'
            : 'המדריך האינטראקטיבי לרשתות מחשבים נבנה על בסיס מקורות אקדמיים, תיעוד רשמי וספרות טכנית מהשורה הראשונה.'}
        </p>
      </div>

      {/* Sources */}
      <section className="credits-section">
        <h2 className="credits-section-title">
          <span className="credits-section-icon">📋</span>
          {isEn ? 'Sources & References' : 'מקורות ומידע'}
        </h2>
        <div className="credits-grid">
          {SOURCES.map((src) => (
            <div className="credits-card" key={src.name}>
              <div className="credits-card-icon">{src.icon}</div>
              <div className="credits-card-body">
                <div className="credits-card-name">{src.name}</div>
                <div className="credits-card-desc">{isEn ? src.descriptionEn : src.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Built With */}
      <section className="credits-section">
        <h2 className="credits-section-title">
          <span className="credits-section-icon">🛠️</span>
          {isEn ? 'Built With' : 'נבנה עם'}
        </h2>
        <div className="credits-tech-list">
          {TECHS.map((t) => (
            <span className="credits-tech-chip" key={t.label}>
              <span>{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* Creator */}
      <section className="credits-section">
        <div className="credits-creator">
          <div className="credits-creator-heart">❤️</div>
          <h3 className="credits-creator-title">{isEn ? 'About This Guide' : 'על המדריך'}</h3>
          <p className="credits-creator-text">
            {isEn
              ? 'An interactive learning guide for computer networks — designed and built to make complex topics accessible, visual and easy to understand. Each chapter includes explanations, SVG diagrams and real-world scenarios.'
              : 'מדריך לימוד אינטראקטיבי לרשתות מחשבים — עוצב ונבנה כדי להפוך נושאים מורכבים לנגישים, ויזואליים וקלים להבנה. כל פרק כולל הסברים, דיאגרמות SVG ותרחישים אמיתיים.'}
          </p>
          <div className="credits-creator-badge">NetworksGuide · 2025</div>
        </div>
      </section>

      {/* Footer */}
      <p className="credits-footer">
        {isEn
          ? 'All explanations, stories and insights were written inspired by the sources listed above'
          : 'כל הסברים, סיפורים ותובנות נכתבו בהשראת המקורות המפורטים לעיל'}
      </p>
    </div>
  )
}
