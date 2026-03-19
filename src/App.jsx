import { useState, useEffect, useCallback, useRef } from 'react'
import { tracks } from './data/content'
import { contentEn } from './data/content_en'
import { TCPHandshakeSim } from './components/TCPHandshakeSim'
import { EncapsulationSim } from './components/EncapsulationSim'
import { DnsLookupSim } from './components/DnsLookupSim'
import { PacketFlowSim } from './components/PacketFlowSim'
import { SubnetCalcSim } from './components/SubnetCalcSim'
import { TLSHandshakeSim } from './components/TLSHandshakeSim'
import { DHCPSim } from './components/DHCPSim'
import { ARPSim } from './components/ARPSim'
import { FirewallSim } from './components/FirewallSim'
import { HTTPRequestSim } from './components/HTTPRequestSim'
import { PingSim } from './components/PingSim'
import { ThinkOutsideBox } from './components/ThinkOutsideBox'
import { KeyTip } from './components/KeyTip'
import { Quiz } from './components/Quiz'
import { TroubleshootingTab } from './components/TroubleshootingTab'
import { CreditsTab } from './components/CreditsTab'
import { FeedbackButton } from './components/FeedbackButton'
import { getXP, addXP, getLevel, getLevelProgress, getNextLevel, getStreak, updateStreak, XP_PAGE_READ, getLevelName, resetXP } from './utils/xp'
import { markPageRead, isPageRead, getChapterProgress, getTotalRead, saveLastPosition, getLastPosition, trackChapterId, resetProgress, resetQuizScores, resetAll, getTodayMinutes, addSessionMinutes, formatMinutes, getCompletedChapters, getTotalQuizCorrect, getLearningPace } from './utils/progress'
import { getGender, setGender } from './utils/gender'
import { processHtmlBidi, renderBidiText } from './utils/bidi.jsx'
import { useLang } from './utils/language.jsx'
import './App.css'

const TAB_KEYS = ['learn', 'quiz', 'bugs', 'credits']
const TAB_I18N = {
  learn: 'tab_learn',
  quiz: 'tab_quiz',
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
    }
  }, [chapter, page, currentPage, activeTrack])

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
    window.scrollTo(0, 0)
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
    window.scrollTo(0, 0)
  }

  const contentAreaRef = useRef(null)

  const goToChapter = (chIndex) => {
    saveLastPosition(chIndex, 0, activeTrack?.id)
    setCurrentChapter(chIndex)
    setCurrentPage(0)
    setMobileShowContent(true)
    window.scrollTo({ top: 0, behavior: 'instant' })
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

  const goNextRef = useRef(goNext)
  const goPrevRef = useRef(goPrev)
  useEffect(() => { goNextRef.current = goNext })
  useEffect(() => { goPrevRef.current = goPrev })

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea')) return
      if (activeTab !== 'learn' || !activeTrack) return
      if (e.key === 'ArrowLeft' && canGoNext) goNextRef.current()
      if (e.key === 'ArrowRight' && canGoPrev) goPrevRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [canGoNext, canGoPrev, activeTab, activeTrack])

  // Persist position on every chapter/page change (ensures refresh restores correctly)
  useEffect(() => {
    if (activeTrack) {
      saveLastPosition(currentChapter, currentPage, activeTrack.id)
    }
    document.querySelector('.content-area')?.scrollTo?.(0, 0)
  }, [currentChapter, currentPage, activeTrack])

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
        <FeedbackButton context={{}} />
      </div>
    )
  }

  if (!chapter || !page) return null

  return (
    <div className="app" dir={isEn ? 'ltr' : 'rtl'}>
      {!gender && <GenderPicker onSelect={handleGenderSelect} />}

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
              <button className="reset-settings-btn" onClick={() => setShowResetModal(true)} title={t('settings')}>
                ⚙️
              </button>
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
          </nav>

          <main className="content-area" ref={contentAreaRef}>
            <button
              className="mobile-menu-back-btn"
              onClick={() => setMobileShowContent(false)}
            >
              {t('chapter_list')}
            </button>
            <div className="page-header">
              <span className="page-type-badge" style={getBadgeStyle(page.type)}>
                {getPageTypeLabel(page.type, t)}
              </span>
              {pageRead && <span className="page-read-badge">{t('page_read')}</span>}
              <h2>{pc.title}</h2>
            </div>

            <article key={`${currentChapter}-${currentPage}`} className="page-content">
              {page.type === 'questions' ? (
                <QuestionsPage questions={page.questions} gender={gender} lang={lang} t={t} />
              ) : page.type === 'simulation' ? (
                <SimulationPage simId={page.simId} content={pc.content} t={t} />
              ) : page.type === 'thinkOutside' ? (
                <ThinkOutsidePage page={page} lang={lang} />
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
        </div>
      )}

      {activeTab === 'bugs' && (
        <div className="tab-content">
          <TroubleshootingTab />
        </div>
      )}

      {activeTab === 'credits' && (
        <div className="tab-content">
          <CreditsTab />
        </div>
      )}

      <FeedbackButton context={{
        trackTitle: activeTrack?.title,
        activeTab,
        chapterId: activeTab === 'learn' ? chapter?.id : activeTab === 'quiz' ? quizContext?.chapterId : undefined,
        pageTitle: activeTab === 'learn' ? page?.title : activeTab === 'quiz' && quizContext ? `${t('quiz_question_counter')} ${quizContext.questionNum}/${quizContext.totalQuestions}` : t(TAB_I18N[activeTab] || 'tab_learn'),
        pageIndex: activeTab === 'learn' ? currentPage : undefined,
        totalPages: activeTab === 'learn' ? totalPages : undefined,
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

function SimulationPage({ simId, content, t }) {
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
      {SimComponent ? <SimComponent /> : <p>{t ? t('sim_unavailable') : 'Simulation not available'}</p>}
    </div>
  )
}

function ThinkOutsidePage({ page }) {
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
