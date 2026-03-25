import { useState, useEffect } from 'react'
import { useLang } from '../utils/language.jsx'
import { isProUnlocked, validateCode } from '../utils/proAccess.js'

const TRACKS = []

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
const TRACK_ID_MAP = {}

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
