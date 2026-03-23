import { useState } from 'react'
import { signInWithGoogle, signOut } from '../utils/auth.js'
import { isFirebaseConfigured } from '../config/firebase.js'
import { useLang } from '../utils/language.jsx'

export function UserMenu({ user, onSignIn, onSignOut }) {
  const { lang } = useLang()
  const [loading, setLoading] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const isEn = lang === 'en'

  if (!isFirebaseConfigured()) return null

  async function handleSignIn() {
    setLoading(true)
    try {
      const u = await signInWithGoogle()
      if (u && onSignIn) onSignIn(u)
    } catch (e) {
      console.error('Sign in failed:', e)
    }
    setLoading(false)
  }

  async function handleSignOut() {
    await signOut()
    if (onSignOut) onSignOut()
    setShowMenu(false)
  }

  if (!user) {
    return (
      <button
        onClick={handleSignIn}
        disabled={loading}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: '#fff', color: '#333', border: '1px solid #dadce0',
          borderRadius: '20px', padding: '5px 14px 5px 5px',
          cursor: loading ? 'wait' : 'pointer', fontSize: '0.8rem',
          fontWeight: 600, fontFamily: 'inherit', transition: 'box-shadow 0.15s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'}
      >
        <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#34A853" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#FBBC05" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
        {loading ? '...' : (isEn ? 'Sign in' : 'התחבר')}
      </button>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'transparent', border: 'none', cursor: 'pointer',
          padding: '2px',
        }}
      >
        <img
          src={user.photoURL || ''}
          alt=""
          style={{ width: 30, height: 30, borderRadius: '50%', border: '2px solid var(--accent, #0891b2)' }}
          onError={e => { e.target.style.display = 'none' }}
        />
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text, #1f2937)', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {user.displayName?.split(' ')[0] || 'User'}
        </span>
      </button>

      {showMenu && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setShowMenu(false)} />
          <div style={{
            position: 'absolute', top: '110%', left: 0, right: 'auto',
            background: 'var(--card-bg, #fff)', border: '1px solid var(--border, #e5e7eb)',
            borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            padding: '12px', minWidth: '180px', zIndex: 100,
          }} dir={isEn ? 'ltr' : 'rtl'}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text, #1f2937)', marginBottom: '2px' }}>
              {user.displayName || 'User'}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #6b7280)', marginBottom: '10px' }}>
              {user.email}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent, #0891b2)', marginBottom: '10px' }}>
              {isEn ? '☁️ Progress synced' : '☁️ התקדמות מסונכרנת'}
            </div>
            <button
              onClick={handleSignOut}
              style={{
                width: '100%', padding: '7px', borderRadius: '6px',
                border: '1px solid var(--border, #e5e7eb)', background: 'var(--bg-secondary, #f3f4f6)',
                color: 'var(--text, #1f2937)', fontSize: '0.8rem', fontWeight: 600,
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              {isEn ? 'Sign out' : 'התנתק'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
