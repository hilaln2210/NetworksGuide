import './CreditsTab.css'

const SOURCES = [
  {
    icon: '📚',
    name: 'Computer Networks — Tanenbaum',
    description: 'ספר הלימוד הקלאסי לרשתות מחשבים. הבסיס התיאורטי לכל הנושאים המוסברים במדריך.',
  },
  {
    icon: '🌐',
    name: 'RFC Documents (IETF)',
    description: 'המפרטים הרשמיים של פרוטוקולי האינטרנט — TCP, UDP, HTTP, TLS ועוד.',
  },
  {
    icon: '📖',
    name: 'Google SRE Book',
    description: 'Site Reliability Engineering — תפיסות תשתית, זמינות ואמינות בקנה מידה של Google.',
  },
  {
    icon: '🔒',
    name: 'Cloudflare Blog',
    description: 'מאמרים טכניים מעמיקים על QUIC, eBPF, DDoS mitigation ואבטחת רשת.',
  },
  {
    icon: '🦈',
    name: 'Wireshark Documentation',
    description: 'תיעוד כלי ניתוח החבילות המוביל — הבנת פרוטוקולים דרך ניתוח תעבורה אמיתית.',
  },
  {
    icon: '🎓',
    name: 'Stanford CS144',
    description: 'קורס Introduction to Computer Networks של אוניברסיטת סטנפורד — חומר אקדמי מעולה.',
  },
  {
    icon: '📡',
    name: 'RIPE NCC',
    description: 'נתוני BGP, הקצאות IP ומפות רשת של האינטרנט האירופי והעולמי.',
  },
  {
    icon: '🕸️',
    name: 'EFF Panopticlick',
    description: 'מחקר Browser Fingerprinting של Electronic Frontier Foundation — פרטיות ברשת.',
  },
  {
    icon: '🚀',
    name: 'Netflix Tech Blog',
    description: 'ארכיטקטורת Open Connect CDN, אופטימיזציות סטרימינג ותשתית בקנה מידה גלובלי.',
  },
  {
    icon: '🔬',
    name: 'Tor Project Documentation',
    description: 'תיעוד רשמי של רשת Tor — הצפנה בשכבות, ניתוב שרשרתי ואנונימיות ברשת.',
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
  return (
    <div className="credits-tab" dir="rtl">
      {/* Header */}
      <div className="credits-header">
        <div className="credits-header-icon">🌐</div>
        <h1 className="credits-title">מקורות וקרדיטים</h1>
        <p className="credits-subtitle">
          המדריך האינטראקטיבי לרשתות מחשבים נבנה על בסיס מקורות אקדמיים,
          תיעוד רשמי וספרות טכנית מהשורה הראשונה.
        </p>
      </div>

      {/* Sources */}
      <section className="credits-section">
        <h2 className="credits-section-title">
          <span className="credits-section-icon">📋</span>
          מקורות ומידע
        </h2>
        <div className="credits-grid">
          {SOURCES.map((src) => (
            <div className="credits-card" key={src.name}>
              <div className="credits-card-icon">{src.icon}</div>
              <div className="credits-card-body">
                <div className="credits-card-name">{src.name}</div>
                <div className="credits-card-desc">{src.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Built With */}
      <section className="credits-section">
        <h2 className="credits-section-title">
          <span className="credits-section-icon">🛠️</span>
          נבנה עם
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
          <h3 className="credits-creator-title">על המדריך</h3>
          <p className="credits-creator-text">
            מדריך לימוד אינטראקטיבי לרשתות מחשבים — עוצב ונבנה כדי להפוך
            נושאים מורכבים לנגישים, ויזואליים וקלים להבנה.
            כל פרק כולל הסברים, דיאגרמות SVG ותרחישים אמיתיים.
          </p>
          <div className="credits-creator-badge">NetworksGuide · 2025</div>
        </div>
      </section>

      {/* Footer */}
      <p className="credits-footer">
        כל הסברים, סיפורים ותובנות נכתבו בהשראת המקורות המפורטים לעיל
      </p>
    </div>
  )
}
