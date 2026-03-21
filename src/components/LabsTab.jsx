import { useState } from 'react'
import { useLang } from '../utils/language.jsx'

const LABS = [
  {
    id: 'soc-analyst',
    title: { he: '🔍 סימולציית אנליסט SOC', en: '🔍 SOC Analyst Simulation' },
    description: {
      he: 'חקור אירועי אבטחה בסביבת SIEM אמיתית — זהה התקפות, ענה על שאלות חקירה, ותרגל כישורי Blue Team.',
      en: 'Investigate security events in a real SIEM environment — identify attacks, answer investigation questions, and practice Blue Team skills.',
    },
    chapter: { he: 'פרק 5 — אבטחת רשת', en: 'Chapter 5 — Network Security' },
    difficulty: { he: 'בינוני', en: 'Intermediate' },
    xp: 150,
    src: '/labs/soc-lab.html',
  },
]

export function LabsTab() {
  const { lang, t } = useLang()
  const isEn = lang === 'en'
  const [activeLab, setActiveLab] = useState(null)

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

  return (
    <div className="tab-content" style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }} dir={isEn ? 'ltr' : 'rtl'}>
      <h2 style={{ textAlign: 'center', marginBottom: '8px', color: 'var(--text, #1f2937)' }}>
        {isEn ? '🧪 Interactive Labs' : '🧪 מעבדות אינטראקטיביות'}
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted, #6b7280)', marginBottom: '28px', fontSize: '0.95rem' }}>
        {isEn
          ? 'Hands-on simulations — practice real-world scenarios in your browser'
          : 'סימולציות מעשיות — תרגול תרחישים אמיתיים ישירות בדפדפן'}
      </p>

      <div style={{ display: 'grid', gap: '16px' }}>
        {LABS.map(lab => (
          <div
            key={lab.id}
            style={{
              background: 'var(--card-bg, #fff)',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--border, #e5e7eb)',
              cursor: 'pointer',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onClick={() => setActiveLab(lab)}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text, #1f2937)', marginBottom: '6px' }}>
                  {lab.title[lang] || lab.title.he}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted, #6b7280)', marginBottom: '12px', lineHeight: 1.5 }}>
                  {lab.description[lang] || lab.description.he}
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.78rem', background: 'rgba(8,145,178,0.1)', color: '#0891b2', borderRadius: '6px', padding: '2px 8px', fontWeight: 600 }}>
                    {lab.chapter[lang] || lab.chapter.he}
                  </span>
                  <span style={{ fontSize: '0.78rem', background: 'rgba(99,102,241,0.1)', color: '#4f46e5', borderRadius: '6px', padding: '2px 8px', fontWeight: 600 }}>
                    {lab.difficulty[lang] || lab.difficulty.he}
                  </span>
                  <span style={{ fontSize: '0.78rem', background: 'rgba(5,150,105,0.1)', color: '#047857', borderRadius: '6px', padding: '2px 8px', fontWeight: 600 }}>
                    +{lab.xp} XP
                  </span>
                </div>
              </div>
              <button
                style={{
                  background: 'var(--accent, #0891b2)', color: '#fff',
                  border: 'none', borderRadius: '8px', padding: '10px 20px',
                  fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                onClick={e => { e.stopPropagation(); setActiveLab(lab) }}
              >
                {isEn ? 'Start Lab →' : '→ התחל מעבדה'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
