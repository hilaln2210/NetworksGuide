import { useState, useEffect, useLayoutEffect, useCallback, useRef, lazy, Suspense } from 'react'
import { tracks } from './data/content'
import { contentEn } from './data/content_en'
import { ThinkOutsideBox } from './components/ThinkOutsideBox'
import { KeyTip } from './components/KeyTip'
import { FeedbackButton } from './components/FeedbackButton'
import { AdminHighlight } from './components/AdminHighlight'
import { ShortcutsModal } from './components/ShortcutsModal'

// Lazy-loaded heavy components
const Quiz = lazy(() => import('./components/Quiz').then(m => ({ default: m.Quiz })))
const TroubleshootingTab = lazy(() => import('./components/TroubleshootingTab').then(m => ({ default: m.TroubleshootingTab })))
const CreditsTab = lazy(() => import('./components/CreditsTab').then(m => ({ default: m.CreditsTab })))
const SearchBar = lazy(() => import('./components/SearchBar').then(m => ({ default: m.SearchBar })))

// Lazy-loaded simulations
const Confetti = lazy(() => import('./components/Confetti').then(m => ({ default: m.Confetti })))

const TCPHandshakeSim = lazy(() => import('./components/TCPHandshakeSim').then(m => ({ default: m.TCPHandshakeSim })))
const EncapsulationSim = lazy(() => import('./components/EncapsulationSim').then(m => ({ default: m.EncapsulationSim })))
const DnsLookupSim = lazy(() => import('./components/DnsLookupSim').then(m => ({ default: m.DnsLookupSim })))
const PacketFlowSim = lazy(() => import('./components/PacketFlowSim').then(m => ({ default: m.PacketFlowSim })))
const SubnetCalcSim = lazy(() => import('./components/SubnetCalcSim').then(m => ({ default: m.SubnetCalcSim })))
const TLSHandshakeSim = lazy(() => import('./components/TLSHandshakeSim').then(m => ({ default: m.TLSHandshakeSim })))
const DHCPSim = lazy(() => import('./components/DHCPSim').then(m => ({ default: m.DHCPSim })))
const ARPSim = lazy(() => import('./components/ARPSim').then(m => ({ default: m.ARPSim })))
const FirewallSim = lazy(() => import('./components/FirewallSim').then(m => ({ default: m.FirewallSim })))
const HTTPRequestSim = lazy(() => import('./components/HTTPRequestSim').then(m => ({ default: m.HTTPRequestSim })))
const PingSim = lazy(() => import('./components/PingSim').then(m => ({ default: m.PingSim })))
import { getXP, addXP, getLevel, getLevelProgress, getNextLevel, getStreak, updateStreak, XP_PAGE_READ, getLevelName, resetXP, LEVELS } from './utils/xp'
import { markPageRead, isPageRead, getChapterProgress, getTotalRead, saveLastPosition, getLastPosition, trackChapterId, resetProgress, resetQuizScores, resetAll, getTodayMinutes, addSessionMinutes, formatMinutes, getCompletedChapters, getTotalQuizCorrect, getLearningPace, getReadPages, getQuizScore } from './utils/progress'
import { getGender, setGender } from './utils/gender'
import { processHtmlBidi, renderBidiText } from './utils/bidi.jsx'
import { useLang } from './utils/language.jsx'
import './App.css'

const TAB_KEYS = ['learn', 'quiz', 'stats', 'bugs', 'credits']
const TAB_I18N = {
  learn: 'tab_learn',
  quiz: 'tab_quiz',
  stats: 'tab_stats',
  bugs: 'tab_faq',
  credits: 'tab_credits',
}

// ===== Gender Picker =====
function GenderPicker({ onSelect }) {
  const { t } = useLang()
  return (
    <div className="gender-overlay">
      <div className="gender-modal">
        <div className="gender-emoji">👋</div>
        <h2>{t('welcome')}</h2>
        <p>{t('gender_prompt')}</p>
        <div className="gender-btns">
          <button className="gender-btn gender-btn-female" onClick={() => onSelect('female')}>
            <span className="gender-btn-emoji">👩</span>
            <span>{t('gender_female')}</span>
          </button>
          <button className="gender-btn gender-btn-male" onClick={() => onSelect('male')}>
            <span className="gender-btn-emoji">👨</span>
            <span>{t('gender_male')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// ===== Track i18n helper =====
const trackI18n = (track, field, t, lang) => {
  const key = `track_${track.id}_${field}`
  const val = t(key)
  return val !== key ? val : track[field]
}

// ===== Track Picker =====
function TrackPicker({ tracks, onSelect }) {
  const { lang, setLang, t } = useLang()
  const isEn = lang === 'en'
  return (
    <div className="track-picker" dir={isEn ? 'ltr' : 'rtl'}>
      <div className="track-picker-header">
        <button
          className="lang-toggle-btn lang-toggle-picker"
          onClick={() => setLang(isEn ? 'he' : 'en')}
          title={isEn ? t('lang_tooltip_en') : t('lang_tooltip_he')}
        >
          {t('lang_toggle')}
        </button>
        <div className="track-picker-logo">🌐</div>
        <h1 className="track-picker-title">{t('app_title')}</h1>
        <p className="track-picker-subtitle">{t('pick_track')}</p>
      </div>
      <div className="track-grid">
        {tracks.map(track => {
          const totalPages = track.chapters.reduce((s, c) => s + c.pages.length, 0)
          const totalRead = track.chapters.reduce((s, c) =>
            s + Object.keys(JSON.parse(localStorage.getItem('networks_read_pages') || '{}')[trackChapterId(track.id, c.id)] || {}).length
          , 0)
          const pct = totalPages > 0 ? Math.round((totalRead / totalPages) * 100) : 0
          const hasProgress = pct > 0
          const isEmpty = track.chapters.length === 0

          return (
            <button
              key={track.id}
              className={`track-card ${isEmpty ? 'track-card--soon' : ''}`}
              onClick={() => !isEmpty && onSelect(track)}
              disabled={isEmpty}
              style={{ '--track-color': track.color }}
            >
              <div className="track-card-icon">{track.icon}</div>
              <div className="track-card-body">
                <div className="track-card-title">{trackI18n(track, 'title', t, lang)}</div>
                <div className="track-card-subtitle">{trackI18n(track, 'subtitle', t, lang)}</div>
                <div className="track-card-meta">
                  <span className="track-card-level">{trackI18n(track, 'level', t, lang)}</span>
                  {!isEmpty && <span className="track-card-chapters">{track.chapters.length} {t('chapters_count')}</span>}
                  {isEmpty && <span className="track-card-soon">{t('coming_soon')}</span>}
                </div>
                {hasProgress && (
                  <div className="track-card-progress">
                    <div className="track-card-prog-bar">
                      <div className="track-card-prog-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="track-card-pct">{pct}%</span>
                  </div>
                )}
              </div>
              {hasProgress && <div className="track-card-continue">{t('continue')}</div>}
              {!hasProgress && !isEmpty && <div className="track-card-start">{t('start')}</div>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ===== Content i18n helper: returns English content if available, otherwise Hebrew =====
function getEnPage(chapterId, pageIdx) {
  const chEn = contentEn[chapterId]
  if (!chEn || !chEn.pages || !chEn.pages[pageIdx]) return null
  return chEn.pages[pageIdx]
}

function getEnChapterTitle(chapterId) {
  return contentEn[chapterId]?.titleEn || null
}

function usePageContent(page, lang, chapterId, pageIdx) {
  if (!page) return { title: '', content: '' }
  if (lang === 'en') {
    const en = getEnPage(chapterId, pageIdx)
    if (en?.titleEn) {
      return { title: en.titleEn, content: en.contentEn || page.content }
    }
  }
  return { title: page.title, content: page.content }
}

// ===== Main App =====
function App() {
  const [activeTrack, setActiveTrack] = useState(() => {
    const pos = getLastPosition()
    if (pos?.trackId) return tracks.find(t => t.id === pos.trackId) || null
    return null
  })
  const [activeTab, setActiveTab] = useState(() => {
    try { return localStorage.getItem('ng_active_tab') || 'learn' } catch { return 'learn' }
  })
  const [currentChapter, setCurrentChapter] = useState(() => {
    const pos = getLastPosition()
    return pos?.chapterIdx ?? 0
  })
  const [currentPage, setCurrentPage] = useState(() => {
    const pos = getLastPosition()
    return pos?.pageIdx ?? 0
  })
  const [xp, setXp] = useState(getXP())
  const [streak, setStreak] = useState(getStreak())
  const [todayMinutes, setTodayMinutes] = useState(getTodayMinutes())
  const [xpFloat, setXpFloat] = useState(null)
  const [levelUp, setLevelUp] = useState(null)
  const [gender, setGenderState] = useState(getGender)
  const [showResetModal, setShowResetModal] = useState(false)
  const [mobileShowContent, setMobileShowContent] = useState(() => {
    try { return localStorage.getItem('ng_mobile_content') === '1' } catch { return false }
  })
  const [quizAutoStart, setQuizAutoStart] = useState(null) // { chapterId, ts }
  const [quizContext, setQuizContext] = useState(null) // { chapterId, questionNum, totalQuestions }
  const [headerCollapsed, setHeaderCollapsed] = useState(() => {
    try { return localStorage.getItem('ng_header_collapsed') === '1' } catch { return false }
  })
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem('ng_dark_mode') === '1' } catch { return false }
  })
  const [bookmarks, setBookmarks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ng_bookmarks') || '[]') } catch { return [] }
  })
  const [showConfetti, setShowConfetti] = useState(false)
  const [bookmarksOpen, setBookmarksOpen] = useState(true)
  const [fontSize, setFontSize] = useState(() => {
    try { return localStorage.getItem('ng_font_size') || 'normal' } catch { return 'normal' }
  })
  const [showShortcuts, setShowShortcuts] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // ── Visitor notification (once per browser) ──────────────────────────────
  useEffect(() => {
    const TG_TOKEN = import.meta.env.VITE_TG_TOKEN
    const TG_CHAT  = import.meta.env.VITE_TG_CHAT
    if (!TG_TOKEN || !TG_CHAT) return
    try {
      const key = 'ng_visitor_notified'
      if (localStorage.getItem(key)) return
      localStorage.setItem(key, '1')
      const now = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem', hour12: false })
      const lang = navigator.language || ''
      const ua   = navigator.userAgent.slice(0, 80)
      const msg  = `👀 <b>מישהו נכנס ל-NetworksGuide</b>\n🕐 ${now}\n🌐 שפה: ${lang}\n📱 ${ua}`
      fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT, text: msg, parse_mode: 'HTML' }),
      }).catch(() => {})
    } catch {}
  }, [])

  const FONT_SIZES = ['small', 'normal', 'large']
  const cycleFontSize = (dir) => {
    const idx = FONT_SIZES.indexOf(fontSize)
    const next = FONT_SIZES[Math.max(0, Math.min(FONT_SIZES.length - 1, idx + dir))]
    setFontSize(next)
    try { localStorage.setItem('ng_font_size', next) } catch {}
  }

  const handleContentScroll = useCallback((e) => {
    const el = e.target
    const scrollTop = el.scrollTop
    const scrollHeight = el.scrollHeight - el.clientHeight
    if (scrollHeight > 0) {
      setScrollProgress(Math.round((scrollTop / scrollHeight) * 100))
    }
  }, [])

  const saveBookmarks = (bms) => {
    setBookmarks(bms)
    try { localStorage.setItem('ng_bookmarks', JSON.stringify(bms)) } catch {}
  }

  const toggleBookmark = (trackId, chapterId, pageIdx, title) => {
    const exists = bookmarks.find(b => b.trackId === trackId && b.chapterId === chapterId && b.pageIdx === pageIdx)
    if (exists) {
      saveBookmarks(bookmarks.filter(b => !(b.trackId === trackId && b.chapterId === chapterId && b.pageIdx === pageIdx)))
    } else {
      saveBookmarks([...bookmarks, { trackId, chapterId, pageIdx, title, timestamp: Date.now() }])
    }
  }

  const isBookmarked = (trackId, chapterId, pageIdx) => {
    return bookmarks.some(b => b.trackId === trackId && b.chapterId === chapterId && b.pageIdx === pageIdx)
  }

  const goToBookmark = (bm) => {
    const track = tracks.find(t => t.id === bm.trackId)
    if (!track) return
    if (activeTrack?.id !== track.id) setActiveTrack(track)
    const chIdx = track.chapters.findIndex(c => c.id === bm.chapterId)
    if (chIdx < 0) return
    setCurrentChapter(chIdx)
    setCurrentPage(bm.pageIdx)
    saveLastPosition(chIdx, bm.pageIdx, track.id)
    setMobileShowContent(true)
    setActiveTab('learn')
    scrollToTop()
  }

  // Apply dark mode to document — iOS Safari needs color-scheme + background on html
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    root.style.colorScheme = darkMode ? 'dark' : 'light'
    root.style.background = darkMode ? '#0f172a' : ''
    document.body.style.background = darkMode ? '#0f172a' : ''
    // iOS meta theme-color
    let meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta) }
    meta.content = darkMode ? '#0f172a' : '#f0f9ff'
    try { localStorage.setItem('ng_dark_mode', darkMode ? '1' : '0') } catch {}
  }, [darkMode])

  // Persist active tab and mobile view across refreshes
  useEffect(() => {
    try { localStorage.setItem('ng_active_tab', activeTab) } catch {}
  }, [activeTab])
  useEffect(() => {
    try { localStorage.setItem('ng_mobile_content', mobileShowContent ? '1' : '0') } catch {}
  }, [mobileShowContent])
  useEffect(() => {
    try { localStorage.setItem('ng_header_collapsed', headerCollapsed ? '1' : '0') } catch {}
  }, [headerCollapsed])

  const { lang, setLang, t } = useLang()
  const isEn = lang === 'en'

  const trackChapters = activeTrack?.chapters || []
  const chapter = trackChapters[currentChapter]
  const page = chapter?.pages[currentPage]
  const totalPages = chapter?.pages.length || 0

  const level = getLevel(xp)
  const nextLevel = getNextLevel(xp)
  const lvlProgress = getLevelProgress(xp)
  const levelName = getLevelName(level, gender, lang)
  const nextLevelName = nextLevel ? getLevelName(nextLevel, gender, lang) : null

  const totalPagesAllChapters = trackChapters.reduce((s, c) => s + c.pages.length, 0)
  const totalRead = activeTrack
    ? trackChapters.reduce((s, c) => {
        const all = JSON.parse(localStorage.getItem('networks_read_pages') || '{}')
        const key = trackChapterId(activeTrack.id, c.id)
        return s + Object.keys(all[key] || {}).length
      }, 0)
    : getTotalRead()
  const overallPct = totalPagesAllChapters > 0 ? Math.round((totalRead / totalPagesAllChapters) * 100) : 0
  const completedChapters = activeTrack ? getCompletedChapters(trackChapters, activeTrack.id) : 0
  const totalQuizCorrect = getTotalQuizCorrect()
  const pace = getLearningPace(totalRead, streak)
  const DAILY_GOAL_MIN = 15
  const goalPct = Math.min(100, Math.round((todayMinutes / DAILY_GOAL_MIN) * 100))
  const goalMet = todayMinutes >= DAILY_GOAL_MIN

  const handleGenderSelect = (g) => { setGender(g); setGenderState(g) }
  const toggleGender = () => {
    const next = gender === 'male' ? 'female' : 'male'
    setGender(next); setGenderState(next)
  }

  const refreshXP = useCallback((result) => {
    setXp(result.after)
    if (result.leveledUp && result.after !== result.before) {
      setLevelUp(getLevel(result.after))
      setTimeout(() => setLevelUp(null), 3000)
    }
  }, [])

  const handleXPGain = useCallback((result) => { refreshXP(result) }, [refreshXP])

  const tryMarkRead = useCallback(() => {
    if (!chapter || !page || !activeTrack) return
    const compositeId = trackChapterId(activeTrack.id, chapter.id)
    // Use compositeId as the "chapterId" key in progress storage
    const isNew = markPageRead(compositeId, currentPage)
    if (isNew) {
      const s = updateStreak()
      setStreak(s)
      const result = addXP(XP_PAGE_READ)
      setXp(result.after)
      setXpFloat(`+${XP_PAGE_READ} XP`)
      setTimeout(() => setXpFloat(null), 1200)
      // Check if entire chapter is now complete
      if (getChapterProgress(compositeId, chapter.pages.length) === 100) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3500)
      }
    }
  }, [chapter, page, currentPage, activeTrack])

  const contentAreaRef = useRef(null)
  const pageHeaderRef = useRef(null)

  const scrollToTop = useCallback(() => {
    // 1. Desktop: .content-area is the scroll container (overflow-y: auto)
    if (contentAreaRef.current) {
      contentAreaRef.current.scrollTop = 0
    }
    // 2. Mobile (all platforms): window/body/html scroll
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    // 3. Fallback: scroll the page header into view (works on all browsers)
    pageHeaderRef.current?.scrollIntoView?.({ block: 'start', behavior: 'instant' })
  }, [])

  const goNext = () => {
    tryMarkRead()
    if (currentPage < totalPages - 1) {
      const newPg = currentPage + 1
      saveLastPosition(currentChapter, newPg, activeTrack?.id)
      setCurrentPage(newPg)
    } else if (currentChapter < trackChapters.length - 1) {
      const newCh = currentChapter + 1
      saveLastPosition(newCh, 0, activeTrack?.id)
      setCurrentChapter(newCh)
      setCurrentPage(0)
    }
    scrollToTop()
  }

  const goPrev = () => {
    if (currentPage > 0) {
      const newPg = currentPage - 1
      saveLastPosition(currentChapter, newPg, activeTrack?.id)
      setCurrentPage(newPg)
    } else if (currentChapter > 0) {
      const newCh = currentChapter - 1
      const prevLen = trackChapters[newCh].pages.length
      const newPg = prevLen - 1
      saveLastPosition(newCh, newPg, activeTrack?.id)
      setCurrentChapter(newCh)
      setCurrentPage(newPg)
    }
    scrollToTop()
  }

  const goToChapter = (chIndex) => {
    saveLastPosition(chIndex, 0, activeTrack?.id)
    setCurrentChapter(chIndex)
    setCurrentPage(0)
    setMobileShowContent(true)
    scrollToTop()
    requestAnimationFrame(scrollToTop)
    setTimeout(scrollToTop, 100)
    setTimeout(scrollToTop, 300)
  }

  const handleSelectTrack = (track) => {
    setActiveTrack(track)
    // Restore last position within this track
    const pos = getLastPosition()
    if (pos?.trackId === track.id) {
      setCurrentChapter(pos.chapterIdx ?? 0)
      setCurrentPage(pos.pageIdx ?? 0)
    } else {
      setActiveTab('learn')
      setCurrentChapter(0)
      setCurrentPage(0)
    }
  }

  const handleBackToTracks = () => {
    setActiveTrack(null)
    setActiveTab('learn')
  }

  const canGoNext = currentPage < totalPages - 1 || currentChapter < trackChapters.length - 1
  const canGoPrev = currentPage > 0 || currentChapter > 0

  const pageRead = (() => {
    if (!chapter || !activeTrack) return false
    const compositeId = trackChapterId(activeTrack.id, chapter.id)
    return isPageRead(compositeId, currentPage)
  })()

  // Auto-mark page as read after 3 seconds of viewing
  useEffect(() => {
    if (!chapter || !page || !activeTrack || activeTab !== 'learn') return
    const timer = setTimeout(() => {
      tryMarkRead()
    }, 3000)
    return () => clearTimeout(timer)
  }, [currentChapter, currentPage, activeTrack, activeTab, chapter, page, tryMarkRead])

  const goNextRef = useRef(goNext)
  const goPrevRef = useRef(goPrev)
  useEffect(() => { goNextRef.current = goNext })
  useEffect(() => { goPrevRef.current = goPrev })

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea')) return
      // Global shortcuts (work on any tab)
      if (e.key === '?') { setShowShortcuts(s => !s); return }
      if (e.key === 'd' || e.key === 'D') { setDarkMode(d => !d); return }
      // Learn-tab only shortcuts
      if (activeTab !== 'learn' || !activeTrack) return
      if (e.key === 'ArrowLeft' && canGoNext) goNextRef.current()
      if (e.key === 'ArrowRight' && canGoPrev) goPrevRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [canGoNext, canGoPrev, activeTab, activeTrack])

  // Persist position + scroll to top on every chapter/page change
  useLayoutEffect(() => {
    if (activeTrack) {
      saveLastPosition(currentChapter, currentPage, activeTrack.id)
    }
    // useLayoutEffect fires after DOM update but before paint — best time to scroll
    scrollToTop()
  }, [currentChapter, currentPage, activeTrack, scrollToTop])

  // Backup scroll after paint — catches iOS Safari delayed layout
  useEffect(() => {
    scrollToTop()
    const t1 = setTimeout(scrollToTop, 50)
    const t2 = setTimeout(scrollToTop, 200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [currentChapter, currentPage, scrollToTop])

  // Session time tracker — ticks every 30s, pauses when tab is hidden
  useEffect(() => {
    const tick = () => {
      if (!document.hidden) {
        addSessionMinutes(0.5)
        setTodayMinutes(getTodayMinutes())
      }
    }
    const id = setInterval(tick, 30000)
    const onVisible = () => setTodayMinutes(getTodayMinutes())
    document.addEventListener('visibilitychange', onVisible)
    return () => { clearInterval(id); document.removeEventListener('visibilitychange', onVisible) }
  }, [])

  // ===== RENDER: Track Picker =====
  if (!activeTrack) {
    return (
      <div className="app" dir={isEn ? 'ltr' : 'rtl'}>
        {!gender && <GenderPicker onSelect={handleGenderSelect} />}
        <TrackPicker tracks={tracks} onSelect={handleSelectTrack} />
        {xpFloat && <div className="xp-float-global">{xpFloat}</div>}
        <AdminHighlight context={{}} />
      </div>
    )
  }

  if (!chapter || !page) return null

  return (
    <div className={`app font-${fontSize}`} dir={isEn ? 'ltr' : 'rtl'}>
      {!gender && <GenderPicker onSelect={handleGenderSelect} />}

      {/* ===== READING PROGRESS BAR ===== */}
      {activeTab === 'learn' && scrollProgress > 0 && (
        <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }} />
      )}

      {/* ===== KEYBOARD SHORTCUTS MODAL ===== */}
      {showShortcuts && (
        <ShortcutsModal onClose={() => setShowShortcuts(false)} lang={lang} t={t} />
      )}

      {/* ===== HEADER ===== */}
      <header className={`header${headerCollapsed ? ' header--collapsed' : ''}`}>
        <button
          className="header-collapse-toggle"
          onClick={() => setHeaderCollapsed(c => !c)}
          title={headerCollapsed ? t('expand_header') : t('collapse_header')}
        >
          {headerCollapsed ? '\u25BC' : '\u25B2'}
        </button>

        <div className="header-collapsible">
          <div className="header-top">
            <div className="header-title-wrap">
              <button className="track-back-btn" onClick={handleBackToTracks} title={t('all_tracks')}>
                {t('all_tracks')}
              </button>
              <h1 style={{ color: activeTrack.color }}>
                {activeTrack.icon} {trackI18n(activeTrack, 'title', t, lang)}
              </h1>
            </div>
            <div className="header-stats">
              <div className="stat-chip stat-xp">
                <span className="stat-num">{xp}</span>
                <span className="stat-label">{level.emoji} XP</span>
              </div>
              <div className="stat-chip stat-progress" title={`${totalRead} ${t('pages_of')} ${totalPagesAllChapters}`}>
                <span className="stat-num">{overallPct}%</span>
                <span className="stat-label">{t('stat_progress')}</span>
              </div>
              <div className={`stat-chip stat-time${todayMinutes > 0 ? ' active' : ''}`}>
                <span className="stat-num" dir="ltr">{formatMinutes(todayMinutes, lang)}</span>
                <span className="stat-label">{t('stat_today')}</span>
              </div>
              <div className="stat-chip">
                <span className="stat-num">{streak}</span>
                <span className="stat-label">{t('stat_streak')}</span>
              </div>
              <button
                className="lang-toggle-btn"
                onClick={() => setLang(isEn ? 'he' : 'en')}
                title={isEn ? t('lang_tooltip_en') : t('lang_tooltip_he')}
              >
                {t('lang_toggle')}
              </button>
              {gender && (
                <button className="gender-toggle-btn" onClick={toggleGender} title={t('toggle_gender')}>
                  {gender === 'female' ? '👩' : '👨'}
                </button>
              )}
              <button className="font-size-btn" onClick={() => cycleFontSize(-1)} disabled={fontSize === 'small'} title={t('font_size')}>
                A-
              </button>
              <button className="font-size-btn" onClick={() => cycleFontSize(1)} disabled={fontSize === 'large'} title={t('font_size')}>
                A+
              </button>
              <button className="dark-mode-btn" onClick={() => setDarkMode(d => !d)} title={darkMode ? 'Light mode' : 'Dark mode'}>
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button className="reset-settings-btn" onClick={() => setShowResetModal(true)} title={t('settings')}>
                ⚙️
              </button>
              <FeedbackButton inline context={{
                trackTitle: activeTrack?.title,
                activeTab,
                chapterId: activeTab === 'learn' ? chapter?.id : activeTab === 'quiz' ? quizContext?.chapterId : undefined,
                pageTitle: activeTab === 'learn' ? page?.title : activeTab === 'quiz' && quizContext ? `${t('quiz_question_counter')} ${quizContext.questionNum}/${quizContext.totalQuestions}` : t(TAB_I18N[activeTab] || 'tab_learn'),
                pageIndex: activeTab === 'learn' ? currentPage : undefined,
                totalPages: activeTab === 'learn' ? totalPages : undefined,
              }} />
            </div>
          </div>

          {/* Level bar */}
          <div className="level-bar-wrap">
            <div className="level-label">
              <span>{level.emoji} {levelName}</span>
              {nextLevel && <span className="level-next">{isEn ? '→' : '←'} {nextLevelName} ({nextLevel.min - xp} {t('xp_remaining')})</span>}
            </div>
            <div className="level-bar">
              <div className="level-fill" style={{ width: `${lvlProgress}%` }} />
            </div>
          </div>

          {/* Daily goal bar */}
          <div className="daily-goal-wrap">
            <span className="daily-goal-label">
              {goalMet ? t('daily_goal_met') : `${t('daily_goal_pre')} ${formatMinutes(todayMinutes, lang)} / ${DAILY_GOAL_MIN}m`}
              {goalMet && <span className="daily-goal-done"> 🏆</span>}
            </span>
            <div className="daily-goal-bar">
              <div className={`daily-goal-fill${goalMet ? ' goal-met' : ''}`} style={{ width: `${goalPct}%` }} />
            </div>
          </div>

          {/* Content search */}
          <Suspense fallback={null}>
            <SearchBar
              tracks={tracks}
              lang={lang}
              t={t}
              onGoToResult={(trackId, chapterIdx, pageIdx) => {
                const track = tracks.find(tr => tr.id === trackId)
                if (!track) return
                if (activeTrack?.id !== track.id) setActiveTrack(track)
                setCurrentChapter(chapterIdx)
                setCurrentPage(pageIdx)
                saveLastPosition(chapterIdx, pageIdx, trackId)
                setMobileShowContent(true)
                setActiveTab('learn')
                scrollToTop()
              }}
            />
          </Suspense>
        </div>

        {/* Tab navigation */}
        <div className="app-tabs">
          {TAB_KEYS.map(key => (
            <button
              key={key}
              className={`app-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => { setActiveTab(key); if (key !== 'quiz') setQuizAutoStart(null) }}
            >
              {t(TAB_I18N[key])}
            </button>
          ))}
        </div>
      </header>

      {/* ===== XP FLOAT ===== */}
      {xpFloat && <div className="xp-float-global">{xpFloat}</div>}

      {/* ===== LEVEL UP ===== */}
      {levelUp && (
        <div className="levelup-toast">
          {levelUp.emoji} {t('level_up')} {getLevelName(levelUp, gender, lang)}
        </div>
      )}

      {/* ===== CONFETTI — chapter complete ===== */}
      {showConfetti && <Suspense fallback={null}><Confetti /></Suspense>}

      {/* ===== RESET MODAL ===== */}
      {showResetModal && (
        <ResetModal
          onClose={() => setShowResetModal(false)}
          onReset={(type) => {
            if (type === 'xp') { resetXP(); setXp(getXP()) }
            else if (type === 'progress') { resetProgress() }
            else if (type === 'quiz') { resetQuizScores() }
            else if (type === 'all') { resetAll(); resetXP(); setXp(getXP()) }
            setShowResetModal(false)
          }}
          gender={gender}
        />
      )}

      {/* ===== LEARN ===== */}
      {activeTab === 'learn' && (() => {
        const pc = usePageContent(page, lang, chapter?.id, currentPage)
        const chTitle = isEn ? (getEnChapterTitle(chapter?.id) || chapter?.title) : chapter?.title
        return (
        <div className="layout">
          <nav className={`sidebar${mobileShowContent ? ' sidebar--mobile-hidden' : ''}`}>
            <h3>{t('table_of_contents')}</h3>
            {trackChapters.map((ch, i) => {
              const compositeId = trackChapterId(activeTrack.id, ch.id)
              const prog = getChapterProgress(compositeId, ch.pages.length)
              return (
                <button
                  key={ch.id}
                  className={`chapter-btn ${i === currentChapter ? 'active' : ''}`}
                  onClick={() => goToChapter(i)}
                >
                  <span className="chapter-num">{t('chapter')} {i + 1}</span>
                  <span className="chapter-title">{isEn ? (getEnChapterTitle(ch.id) || ch.title) : ch.title}</span>
                  <div className="chapter-footer">
                    <span className="chapter-pages">{ch.pages.length} {t('pages')}</span>
                    {prog > 0 && (
                      <div className="chapter-prog-bar">
                        <div className="chapter-prog-fill" style={{ width: `${prog}%` }} />
                      </div>
                    )}
                    {prog === 100 && <span className="chapter-done">✅</span>}
                  </div>
                </button>
              )
            })}
            <div className="page-nav-mini">
              {t('page_word')} {currentPage + 1} {t('page_of')} {totalPages}
            </div>

            {/* Bookmarks section */}
            <div className="bookmarks-section">
              <div className="bookmarks-title" onClick={() => setBookmarksOpen(o => !o)}>
                {bookmarksOpen ? '\u25BC' : '\u25B6'} {t('bookmarks')} ({bookmarks.filter(b => b.trackId === activeTrack.id).length})
              </div>
              {bookmarksOpen && (
                <div className="bookmarks-list">
                  {bookmarks.filter(b => b.trackId === activeTrack.id).length === 0 && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', padding: '4px 8px' }}>{t('no_bookmarks')}</div>
                  )}
                  {bookmarks
                    .filter(b => b.trackId === activeTrack.id)
                    .sort((a, b) => a.timestamp - b.timestamp)
                    .map((bm, i) => (
                      <button key={i} className="bookmark-item" onClick={() => goToBookmark(bm)}>
                        {'\u2B50'} {bm.title}
                      </button>
                    ))
                  }
                </div>
              )}
            </div>
          </nav>

          <main className="content-area" ref={contentAreaRef} onScroll={handleContentScroll}>
            <button
              className="mobile-menu-back-btn"
              onClick={() => setMobileShowContent(false)}
            >
              {t('chapter_list')}
            </button>
            <div className="page-header" ref={pageHeaderRef}>
              <span className="page-type-badge" style={getBadgeStyle(page.type)}>
                {getPageTypeLabel(page.type, t)}
              </span>
              {pageRead && <span className="page-read-badge">{t('page_read')}</span>}
              <button
                className={`bookmark-btn${isBookmarked(activeTrack.id, chapter.id, currentPage) ? ' bookmarked' : ''}`}
                onClick={() => toggleBookmark(activeTrack.id, chapter.id, currentPage, pc.title)}
                title={t('bookmarks')}
              >
                {isBookmarked(activeTrack.id, chapter.id, currentPage) ? '\u2B50' : '\u2606'}
              </button>
              <h2>{pc.title}</h2>
            </div>

            <article key={`${currentChapter}-${currentPage}`} className="page-content">
              {page.type === 'questions' ? (
                <QuestionsPage questions={page.questions} gender={gender} lang={lang} t={t} />
              ) : page.type === 'simulation' ? (
                <SimulationPage simId={page.simId} content={pc.content} t={t} lang={lang} />
              ) : page.type === 'thinkOutside' ? (
                <ThinkOutsidePage page={page} lang={lang} chapterId={chapter?.id} pageIdx={currentPage} />
              ) : (
                <div className="content-body" dangerouslySetInnerHTML={{ __html: isEn && pc.content !== page.content ? pc.content : processHtmlBidi(page.content) }} />
              )}
            </article>

            {currentPage === totalPages - 1 && (
              <div className="go-to-quiz-wrap">
                <button
                  className="go-to-quiz-btn"
                  onClick={() => {
                    setQuizAutoStart({ chapterId: chapter.id, ts: Date.now() })
                    setActiveTab('quiz')
                  }}
                >
                  {t('go_to_quiz')}
                </button>
              </div>
            )}

            <nav className="page-navigation">
              <button className="nav-btn prev" onClick={goPrev} disabled={!canGoPrev}>{t('prev_btn')}</button>
              <span className="page-counter">{t('chapter')} {currentChapter + 1} | {currentPage + 1}/{totalPages}</span>
              <button className="nav-btn next" onClick={goNext} disabled={!canGoNext}>{t('next_btn')}</button>
            </nav>
          </main>
        </div>
        )
      })()}

      {activeTab === 'quiz' && (
        <div className="tab-content">
          <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
            <Quiz
              chapters={trackChapters}
              onXPGain={handleXPGain}
              gender={gender}
              onGoToChapter={(chIdx) => {
                goToChapter(chIdx)
                setActiveTab('learn')
              }}
              autoStartChapterId={quizAutoStart?.chapterId}
              autoStartKey={quizAutoStart?.ts}
              onContextChange={setQuizContext}
            />
          </Suspense>
        </div>
      )}

      {activeTab === 'stats' && (() => {
        const allRead = getReadPages()
        const QUIZ_KEY = 'networks_quiz_scores'
        const quizData = (() => { try { return JSON.parse(localStorage.getItem(QUIZ_KEY) || '{}') } catch { return {} } })()
        const quizEntries = Object.entries(quizData)
        const avgScore = quizEntries.length > 0
          ? Math.round(quizEntries.reduce((s, [, v]) => s + (v.total > 0 ? (v.best / v.total) * 100 : 0), 0) / quizEntries.length)
          : 0
        const bestTopic = quizEntries.length > 0
          ? quizEntries.reduce((best, [k, v]) => {
              const pct = v.total > 0 ? v.best / v.total : 0
              return pct > best.pct ? { id: k, pct } : best
            }, { id: '', pct: -1 })
          : null
        const worstTopic = quizEntries.length > 0
          ? quizEntries.reduce((worst, [k, v]) => {
              const pct = v.total > 0 ? v.best / v.total : 1
              return pct < worst.pct ? { id: k, pct } : worst
            }, { id: '', pct: 2 })
          : null
        const findChapterTitle = (id) => {
          for (const track of tracks) {
            const ch = track.chapters.find(c => String(c.id) === String(id) || `${track.id}__${c.id}` === id)
            if (ch) return isEn ? (getEnChapterTitle(ch.id) || ch.title) : ch.title
          }
          return id
        }

        const cardStyle = {
          background: 'var(--card-bg, #fff)',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid var(--border, #e5e7eb)',
        }
        const sectionTitle = {
          fontSize: '1.1rem',
          fontWeight: 700,
          marginBottom: '14px',
          color: 'var(--text, #1f2937)',
        }
        const barBg = {
          background: 'var(--bg-secondary, #f3f4f6)',
          borderRadius: '8px',
          height: '10px',
          overflow: 'hidden',
          width: '100%',
        }
        const statNum = {
          fontSize: '2rem',
          fontWeight: 800,
          color: 'var(--accent, #0891b2)',
          lineHeight: 1,
        }
        const statLabel = {
          fontSize: '0.8rem',
          color: 'var(--text-muted, #6b7280)',
          marginTop: '4px',
        }

        return (
        <div className="tab-content" style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--text, #1f2937)' }}>{t('stats_title')}</h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {/* === Level Progress === */}
            <div style={cardStyle}>
              <div style={sectionTitle}>{t('stats_level_title')}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <span style={{ fontSize: '2.5rem' }}>{level.emoji}</span>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text, #1f2937)' }}>{levelName}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #6b7280)' }}>Level {level.level} &middot; {xp} XP</div>
                </div>
              </div>
              <div style={barBg}>
                <div style={{ height: '100%', borderRadius: '8px', background: 'linear-gradient(90deg, #06b6d4, #0891b2)', width: `${lvlProgress}%`, transition: 'width 0.5s' }} />
              </div>
              <div style={{ marginTop: '6px', fontSize: '0.8rem', color: 'var(--text-muted, #6b7280)', textAlign: 'center' }}>
                {nextLevel ? `${nextLevel.min - xp} ${t('stats_xp_to_next')} (${nextLevelName})` : t('stats_max_level')}
              </div>
            </div>

            {/* === Progress by Track === */}
            <div style={cardStyle}>
              <div style={sectionTitle}>{t('stats_progress_title')}</div>
              {tracks.filter(tr => tr.chapters.length > 0).map(track => {
                const totalPg = track.chapters.reduce((s, c) => s + c.pages.length, 0)
                const readPg = track.chapters.reduce((s, c) => {
                  const key = trackChapterId(track.id, c.id)
                  return s + Object.keys(allRead[key] || {}).length
                }, 0)
                const pct = totalPg > 0 ? Math.round((readPg / totalPg) * 100) : 0
                const compCh = getCompletedChapters(track.chapters, track.id)
                return (
                  <div key={track.id} style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{track.icon} {trackI18n(track, 'title', t, lang)}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted, #6b7280)' }}>{pct}% &middot; {compCh}/{track.chapters.length} {t('stats_chapters_done')}</span>
                    </div>
                    <div style={barBg}>
                      <div style={{ height: '100%', borderRadius: '8px', background: track.color || '#0891b2', width: `${pct}%`, transition: 'width 0.5s' }} />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* === Quiz Performance === */}
            <div style={cardStyle}>
              <div style={sectionTitle}>{t('stats_quiz_title')}</div>
              {quizEntries.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-muted, #6b7280)', padding: '20px 0' }}>{t('stats_no_quizzes')}</div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', textAlign: 'center' }}>
                  <div>
                    <div style={statNum}>{avgScore}%</div>
                    <div style={statLabel}>{t('stats_avg_score')}</div>
                  </div>
                  <div>
                    <div style={statNum}>{totalQuizCorrect}</div>
                    <div style={statLabel}>{t('stats_total_correct')}</div>
                  </div>
                  {bestTopic && bestTopic.id && (
                    <div>
                      <div style={{ ...statNum, fontSize: '1rem', marginTop: '8px' }}>{findChapterTitle(bestTopic.id)}</div>
                      <div style={statLabel}>{t('stats_best_topic')} ({Math.round(bestTopic.pct * 100)}%)</div>
                    </div>
                  )}
                  {worstTopic && worstTopic.id && quizEntries.length > 1 && (
                    <div>
                      <div style={{ ...statNum, fontSize: '1rem', marginTop: '8px', color: '#ef4444' }}>{findChapterTitle(worstTopic.id)}</div>
                      <div style={statLabel}>{t('stats_worst_topic')} ({Math.round(worstTopic.pct * 100)}%)</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* === Learning Time & Streak === */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={cardStyle}>
                <div style={sectionTitle}>{t('stats_time_title')}</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={statNum} dir="ltr">{formatMinutes(todayMinutes, lang)}</div>
                  <div style={statLabel}>{t('stats_today')}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ ...statNum, fontSize: '1.3rem' }}>{getTotalRead()}</div>
                    <div style={statLabel}>{t('stats_total_pages')}</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ ...statNum, fontSize: '1.3rem' }}>{pace}</div>
                    <div style={statLabel}>{t('stats_pages_per_day')}</div>
                  </div>
                </div>
              </div>

              <div style={cardStyle}>
                <div style={sectionTitle}>{t('stats_streak_title')}</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ ...statNum, fontSize: '3rem' }}>{streak}</div>
                  <div style={statLabel}>{t('stats_current_streak')} ({t('stats_days')})</div>
                  <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '4px' }}>
                    {Array.from({ length: Math.min(streak, 14) }).map((_, i) => (
                      <span key={i} style={{ fontSize: '1.2rem' }}>&#128293;</span>
                    ))}
                    {streak === 0 && <span style={{ color: 'var(--text-muted, #6b7280)', fontSize: '0.85rem' }}>{isEn ? 'Start learning to build your streak!' : 'התחל ללמוד כדי לבנות רצף!'}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      })()}

      {activeTab === 'bugs' && (
        <div className="tab-content">
          <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
            <TroubleshootingTab />
          </Suspense>
        </div>
      )}

      {activeTab === 'credits' && (
        <div className="tab-content">
          <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
            <CreditsTab />
          </Suspense>
        </div>
      )}

      <AdminHighlight context={{
        trackTitle: activeTrack?.title,
        activeTab,
        chapterId: activeTab === 'learn' ? chapter?.id : undefined,
        pageTitle: activeTab === 'learn' ? page?.title : undefined,
      }} />
    </div>
  )
}

function getBadgeStyle(type) {
  const styles = {
    explanation: { background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.35)', color: '#4f46e5' },
    demo: { background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.35)', color: '#047857' },
    summary: { background: 'rgba(217,119,6,0.1)', border: '1px solid rgba(217,119,6,0.35)', color: '#b45309' },
    questions: { background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.3)', color: '#dc2626' },
    simulation: { background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.35)', color: '#7c3aed' },
    thinkOutside: { background: 'rgba(217,119,6,0.1)', border: '1px solid rgba(217,119,6,0.35)', color: '#b45309' },
    story: { background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.3)', color: '#db2777' },
    diagram: { background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.3)', color: '#0891b2' },
    example: { background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)', color: '#059669' },
  }
  return styles[type] || styles.explanation
}

function getPageTypeLabel(type, t) {
  if (t) {
    const key = `type_${type}`
    const val = t(key)
    if (val !== key) return val
  }
  const labels = {
    explanation: '📖 הסבר',
    demo: '💡 הדגמה',
    summary: '📋 סיכום',
    questions: '❓ שאלות',
    simulation: '🎮 הדמיה',
    thinkOutside: '🧠 מחוץ לקופסא',
    story: '📰 סיפור אמיתי',
    diagram: '📊 דיאגרמה',
    example: '💻 דוגמה'
  }
  return labels[type] || '📖 הסבר'
}

function SimulationPage({ simId, content, t, lang }) {
  const sims = {
    tcpHandshake: TCPHandshakeSim,
    encapsulation: EncapsulationSim,
    dnsLookup: DnsLookupSim,
    packetFlow: PacketFlowSim,
    subnetCalc: SubnetCalcSim,
    tlsHandshake: TLSHandshakeSim,
    dhcp: DHCPSim,
    arp: ARPSim,
    firewall: FirewallSim,
    httpRequest: HTTPRequestSim,
    ping: PingSim
  }
  const SimComponent = sims[simId]
  return (
    <div className="content-body">
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {SimComponent ? <Suspense fallback={<div className="loading-spinner">Loading...</div>}><SimComponent /></Suspense> : <p>{t ? t('sim_unavailable') : 'Simulation not available'}</p>}
    </div>
  )
}

function ThinkOutsidePage({ page, lang, chapterId, pageIdx }) {
  const isEn = lang === 'en'
  // Check if content_en has a flat contentEn for this page
  const enPage = isEn ? getEnPage(chapterId, pageIdx) : null
  if (isEn && enPage?.contentEn) {
    return (
      <div className="content-body" dangerouslySetInnerHTML={{ __html: enPage.contentEn }} />
    )
  }
  return (
    <div className="content-body">
      {page.intro && <p dangerouslySetInnerHTML={{ __html: page.intro }} />}
      {page.blocks?.map((block, i) => (
        <ThinkOutsideBox key={i} title={block.title} icon={block.icon || '💡'}>
          <div dangerouslySetInnerHTML={{ __html: block.content }} />
        </ThinkOutsideBox>
      ))}
    </div>
  )
}

function QuestionsPage({ questions, gender, lang, t: tProp }) {
  const langCtx = useLang()
  const t = tProp || langCtx.t
  const isEn = (lang || langCtx.lang) === 'en'
  const [openIndex, setOpenIndex] = useState(null)
  const allOpen = openIndex === 'all'
  const intro = isEn ? t('questions_intro_male') : (gender === 'male' ? t('questions_intro_male') : t('questions_intro_female'))

  return (
    <div className="questions-container">
      <p className="questions-intro">{intro}</p>
      <div className="questions-actions">
        <button
          type="button"
          className="questions-toggle-all"
          onClick={() => setOpenIndex(allOpen ? null : 'all')}
        >
          {allOpen ? t('close_all') : t('open_all')}
        </button>
      </div>
      {questions.map((item, i) => (
        <div key={i} className="question-block">
          <button
            className="question-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : allOpen ? null : i)}
          >
            <span className="q-number">{t('question')} {i + 1}</span>
            <span className="q-text" dir={isEn ? 'ltr' : 'rtl'}>{isEn && item.qEn ? item.qEn : renderBidiText(item.q)}</span>
            <span className="expand-icon">{(openIndex === i || allOpen) ? '▼' : '▶'}</span>
          </button>
          {(openIndex === i || allOpen) && (
            <div className="answer-block">
              <h4>{t('answer')}</h4>
              <p dir={isEn ? 'ltr' : 'rtl'}>{isEn && item.aEn ? item.aEn : renderBidiText(item.a)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ResetModal({ onClose, onReset, gender }) {
  const { t } = useLang()
  const isMale = gender === 'male'
  return (
    <div className="reset-overlay" onClick={onClose}>
      <div className="reset-modal" onClick={e => e.stopPropagation()}>
        <div className="reset-modal-header">
          <span className="reset-modal-icon">⚙️</span>
          <h3>{t('reset_title')}</h3>
          <button className="reset-modal-close" onClick={onClose}>✕</button>
        </div>
        <p className="reset-modal-desc">
          {isMale ? t('reset_prompt_male') : t('reset_prompt_female')}
        </p>
        <div className="reset-options">
          <button className="reset-option-btn" onClick={() => onReset('xp')}>
            <span className="reset-opt-icon">⭐</span>
            <div>
              <div className="reset-opt-title">{t('reset_xp_title')}</div>
              <div className="reset-opt-sub">{t('reset_xp_sub')}</div>
            </div>
          </button>
          <button className="reset-option-btn" onClick={() => onReset('progress')}>
            <span className="reset-opt-icon">📖</span>
            <div>
              <div className="reset-opt-title">{t('reset_progress_title')}</div>
              <div className="reset-opt-sub">{t('reset_progress_sub')}</div>
            </div>
          </button>
          <button className="reset-option-btn" onClick={() => onReset('quiz')}>
            <span className="reset-opt-icon">🎯</span>
            <div>
              <div className="reset-opt-title">{t('reset_quiz_title')}</div>
              <div className="reset-opt-sub">{t('reset_quiz_sub')}</div>
            </div>
          </button>
          <button className="reset-option-btn reset-option-all" onClick={() => {
            if (window.confirm(isMale ? t('reset_confirm_male') : t('reset_confirm_female'))) {
              onReset('all')
            }
          }}>
            <span className="reset-opt-icon">🔄</span>
            <div>
              <div className="reset-opt-title">{t('reset_all_title')}</div>
              <div className="reset-opt-sub">{t('reset_all_sub')}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
