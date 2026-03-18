import { useState, useEffect, useCallback, useRef } from 'react'
import { tracks } from './data/content'
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
import './App.css'

const TABS = [
  { key: 'learn', label: '📖 למידה' },
  { key: 'quiz', label: '🎯 חידון' },
  { key: 'bugs', label: '🔧 שאלות נפוצות' },
  { key: 'credits', label: '📋 קרדיטים' },
]

// ===== Gender Picker =====
function GenderPicker({ onSelect }) {
  return (
    <div className="gender-overlay">
      <div className="gender-modal">
        <div className="gender-emoji">👋</div>
        <h2>ברוכים הבאים!</h2>
        <p>איך לפנות אליך?</p>
        <div className="gender-btns">
          <button className="gender-btn gender-btn-female" onClick={() => onSelect('female')}>
            <span className="gender-btn-emoji">👩</span>
            <span>בלשון נקבה</span>
          </button>
          <button className="gender-btn gender-btn-male" onClick={() => onSelect('male')}>
            <span className="gender-btn-emoji">👨</span>
            <span>בלשון זכר</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// ===== Track Picker =====
function TrackPicker({ tracks, onSelect }) {
  return (
    <div className="track-picker" dir="rtl">
      <div className="track-picker-header">
        <div className="track-picker-logo">🌐</div>
        <h1 className="track-picker-title">מדריך IT האינטראקטיבי</h1>
        <p className="track-picker-subtitle">בחרו מסלול לימוד — כל מסלול עצמאי עם פרקים ותרגול משלו</p>
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
                <div className="track-card-title">{track.title}</div>
                <div className="track-card-subtitle">{track.subtitle}</div>
                <div className="track-card-meta">
                  <span className="track-card-level">{track.level}</span>
                  {!isEmpty && <span className="track-card-chapters">{track.chapters.length} פרקים</span>}
                  {isEmpty && <span className="track-card-soon">בקרוב</span>}
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
              {hasProgress && <div className="track-card-continue">← המשך</div>}
              {!hasProgress && !isEmpty && <div className="track-card-start">← התחל</div>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ===== Main App =====
function App() {
  const [activeTrack, setActiveTrack] = useState(() => {
    const pos = getLastPosition()
    if (pos?.trackId) return tracks.find(t => t.id === pos.trackId) || null
    return null
  })
  const [activeTab, setActiveTab] = useState('learn')
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
  const [mobileShowContent, setMobileShowContent] = useState(false)
  const [quizAutoStart, setQuizAutoStart] = useState(null) // { chapterId, ts }

  const trackChapters = activeTrack?.chapters || []
  const chapter = trackChapters[currentChapter]
  const page = chapter?.pages[currentPage]
  const totalPages = chapter?.pages.length || 0

  const level = getLevel(xp)
  const nextLevel = getNextLevel(xp)
  const lvlProgress = getLevelProgress(xp)
  const levelName = getLevelName(level, gender)
  const nextLevelName = nextLevel ? getLevelName(nextLevel, gender) : null

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
    setActiveTab('learn')
    // Restore last position within this track
    const pos = getLastPosition()
    if (pos?.trackId === track.id) {
      setCurrentChapter(pos.chapterIdx ?? 0)
      setCurrentPage(pos.pageIdx ?? 0)
    } else {
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

  useEffect(() => {
    document.querySelector('.content-area')?.scrollTo?.(0, 0)
  }, [currentChapter, currentPage])

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
      <div className="app">
        {!gender && <GenderPicker onSelect={handleGenderSelect} />}
        <TrackPicker tracks={tracks} onSelect={handleSelectTrack} />
        {xpFloat && <div className="xp-float-global">{xpFloat}</div>}
        <FeedbackButton context={{}} />
      </div>
    )
  }

  if (!chapter || !page) return null

  return (
    <div className="app">
      {!gender && <GenderPicker onSelect={handleGenderSelect} />}

      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header-top">
          <div className="header-title-wrap">
            <button className="track-back-btn" onClick={handleBackToTracks} title="כל המסלולים">
              כל המסלולים →
            </button>
            <h1 style={{ color: activeTrack.color }}>
              {activeTrack.icon} {activeTrack.title}
            </h1>
          </div>
          <div className="header-stats">
            <div className="stat-chip stat-xp">
              <span className="stat-num">{xp}</span>
              <span className="stat-label">{level.emoji} XP</span>
            </div>
            <div className="stat-chip stat-progress" title={`${totalRead} מתוך ${totalPagesAllChapters} עמודים · ${completedChapters}/${trackChapters.length} פרקים`}>
              <span className="stat-num">{overallPct}%</span>
              <span className="stat-label">📖 התקדמות</span>
            </div>
            <div className={`stat-chip stat-time${todayMinutes > 0 ? ' active' : ''}`} title="זמן לימוד היום">
              <span className="stat-num" dir="ltr">{formatMinutes(todayMinutes)}</span>
              <span className="stat-label">⏱️ היום</span>
            </div>
            <div className="stat-chip" title={`רצף ${streak} ימי לימוד`}>
              <span className="stat-num">{streak}</span>
              <span className="stat-label">🔥 ימים</span>
            </div>
            {gender && (
              <button className="gender-toggle-btn" onClick={toggleGender} title="החלף פנייה">
                {gender === 'female' ? '👩' : '👨'}
              </button>
            )}
            <button className="reset-settings-btn" onClick={() => setShowResetModal(true)} title="הגדרות ואיפוס">
              ⚙️
            </button>
          </div>
        </div>

        {/* Level bar */}
        <div className="level-bar-wrap">
          <div className="level-label">
            <span>{level.emoji} {levelName}</span>
            {nextLevel && <span className="level-next">← {nextLevelName} ({nextLevel.min - xp} XP נותרו)</span>}
          </div>
          <div className="level-bar">
            <div className="level-fill" style={{ width: `${lvlProgress}%` }} />
          </div>
        </div>

        {/* Daily goal bar */}
        <div className="daily-goal-wrap">
          <span className="daily-goal-label">
            {goalMet ? '🎯 מטרה יומית הושגה!' : `🎯 מטרה יומית: ${formatMinutes(todayMinutes)} / ${DAILY_GOAL_MIN} ד'`}
            {goalMet && <span className="daily-goal-done"> 🏆</span>}
          </span>
          <div className="daily-goal-bar">
            <div className={`daily-goal-fill${goalMet ? ' goal-met' : ''}`} style={{ width: `${goalPct}%` }} />
          </div>
        </div>

        {/* Tab navigation */}
        <div className="app-tabs">
          {TABS.map(t => (
            <button
              key={t.key}
              className={`app-tab ${activeTab === t.key ? 'active' : ''}`}
              onClick={() => { setActiveTab(t.key); if (t.key !== 'quiz') setQuizAutoStart(null) }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      {/* ===== XP FLOAT ===== */}
      {xpFloat && <div className="xp-float-global">{xpFloat}</div>}

      {/* ===== LEVEL UP ===== */}
      {levelUp && (
        <div className="levelup-toast">
          {levelUp.emoji} עלית רמה! {getLevelName(levelUp, gender)}
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
      {activeTab === 'learn' && (
        <div className="layout">
          <nav className={`sidebar${mobileShowContent ? ' sidebar--mobile-hidden' : ''}`}>
            <h3>תוכן העניינים</h3>
            {trackChapters.map((ch, i) => {
              const compositeId = trackChapterId(activeTrack.id, ch.id)
              const prog = getChapterProgress(compositeId, ch.pages.length)
              return (
                <button
                  key={ch.id}
                  className={`chapter-btn ${i === currentChapter ? 'active' : ''}`}
                  onClick={() => goToChapter(i)}
                >
                  <span className="chapter-num">פרק {i + 1}</span>
                  <span className="chapter-title">{ch.title}</span>
                  <div className="chapter-footer">
                    <span className="chapter-pages">{ch.pages.length} עמודים</span>
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
              עמוד {currentPage + 1} מתוך {totalPages}
            </div>
          </nav>

          <main className="content-area" ref={contentAreaRef}>
            <button
              className="mobile-menu-back-btn"
              onClick={() => setMobileShowContent(false)}
            >
              רשימת פרקים →
            </button>
            <div className="page-header">
              <span className="page-type-badge" style={getBadgeStyle(page.type)}>
                {getPageTypeLabel(page.type)}
              </span>
              {pageRead && <span className="page-read-badge">✅ נקרא</span>}
              <h2>{page.title}</h2>
            </div>

            <article key={`${currentChapter}-${currentPage}`} className="page-content">
              {page.type === 'questions' ? (
                <QuestionsPage questions={page.questions} gender={gender} />
              ) : page.type === 'simulation' ? (
                <SimulationPage simId={page.simId} content={page.content} />
              ) : page.type === 'thinkOutside' ? (
                <ThinkOutsidePage page={page} />
              ) : (
                <div className="content-body" dangerouslySetInnerHTML={{ __html: processHtmlBidi(page.content) }} />
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
                  🎯 עבור לחידון של הפרק
                </button>
              </div>
            )}

            <nav className="page-navigation">
              <button className="nav-btn prev" onClick={goPrev} disabled={!canGoPrev}>הקודם →</button>
              <span className="page-counter">פרק {currentChapter + 1} | {currentPage + 1}/{totalPages}</span>
              <button className="nav-btn next" onClick={goNext} disabled={!canGoNext}>← הבא</button>
            </nav>
          </main>
        </div>
      )}

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
        chapterId: activeTab === 'learn' ? chapter?.id : undefined,
        pageTitle: activeTab === 'learn' ? page?.title : `טאב: ${TABS.find(t => t.key === activeTab)?.label || activeTab}`,
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

function getPageTypeLabel(type) {
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

function SimulationPage({ simId, content }) {
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
      {SimComponent ? <SimComponent /> : <p>הדמיה לא זמינה</p>}
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

function QuestionsPage({ questions, gender }) {
  const [openIndex, setOpenIndex] = useState(null)
  const allOpen = openIndex === 'all'
  const intro = gender === 'male' ? 'קרא, חשוב, ואז פתח את התשובה:' : 'קראי, חשבי, ואז פתחי את התשובה:'

  return (
    <div className="questions-container">
      <p className="questions-intro">{intro}</p>
      <div className="questions-actions">
        <button
          type="button"
          className="questions-toggle-all"
          onClick={() => setOpenIndex(allOpen ? null : 'all')}
        >
          {allOpen ? '🔼 סגור הכל' : '🔽 פתח הכל'}
        </button>
      </div>
      {questions.map((item, i) => (
        <div key={i} className="question-block">
          <button
            className="question-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : allOpen ? null : i)}
          >
            <span className="q-number">שאלה {i + 1}</span>
            <span className="q-text" dir="rtl">{renderBidiText(item.q)}</span>
            <span className="expand-icon">{(openIndex === i || allOpen) ? '▼' : '▶'}</span>
          </button>
          {(openIndex === i || allOpen) && (
            <div className="answer-block">
              <h4>💬 תשובה:</h4>
              <p dir="rtl">{renderBidiText(item.a)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ResetModal({ onClose, onReset, gender }) {
  const isMale = gender === 'male'
  return (
    <div className="reset-overlay" onClick={onClose}>
      <div className="reset-modal" onClick={e => e.stopPropagation()}>
        <div className="reset-modal-header">
          <span className="reset-modal-icon">⚙️</span>
          <h3>הגדרות ואיפוס</h3>
          <button className="reset-modal-close" onClick={onClose}>✕</button>
        </div>
        <p className="reset-modal-desc" dir="rtl">
          {isMale ? 'בחר מה לאפס:' : 'בחרי מה לאפס:'}
        </p>
        <div className="reset-options">
          <button className="reset-option-btn" onClick={() => onReset('xp')}>
            <span className="reset-opt-icon">⭐</span>
            <div>
              <div className="reset-opt-title">XP ורמה</div>
              <div className="reset-opt-sub">מאפס ניקוד ורמה בלבד</div>
            </div>
          </button>
          <button className="reset-option-btn" onClick={() => onReset('progress')}>
            <span className="reset-opt-icon">📖</span>
            <div>
              <div className="reset-opt-title">התקדמות קריאה</div>
              <div className="reset-opt-sub">מאפס עמודים שנקראו</div>
            </div>
          </button>
          <button className="reset-option-btn" onClick={() => onReset('quiz')}>
            <span className="reset-opt-icon">🎯</span>
            <div>
              <div className="reset-opt-title">ניקודי חידון</div>
              <div className="reset-opt-sub">מאפס תוצאות חידונים</div>
            </div>
          </button>
          <button className="reset-option-btn reset-option-all" onClick={() => {
            if (window.confirm(isMale ? 'לאפס הכל? הפעולה בלתי הפיכה.' : 'לאפס הכל? הפעולה בלתי הפיכה.')) {
              onReset('all')
            }
          }}>
            <span className="reset-opt-icon">🔄</span>
            <div>
              <div className="reset-opt-title">איפוס מלא</div>
              <div className="reset-opt-sub">מאפס הכל — XP, קריאה וחידונים</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
