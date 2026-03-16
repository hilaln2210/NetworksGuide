import { useState, useEffect, useCallback, useRef } from 'react'
import { chapters } from './data/content'
import { TCPHandshakeSim } from './components/TCPHandshakeSim'
import { EncapsulationSim } from './components/EncapsulationSim'
import { DnsLookupSim } from './components/DnsLookupSim'
import { PacketFlowSim } from './components/PacketFlowSim'
import { ThinkOutsideBox } from './components/ThinkOutsideBox'
import { AskQuestion } from './components/AskQuestion'
import { KeyTip } from './components/KeyTip'
import { Quiz } from './components/Quiz'
import { TroubleshootingTab } from './components/TroubleshootingTab'
import { getXP, addXP, getLevel, getLevelProgress, getNextLevel, getStreak, updateStreak, XP_PAGE_READ, getLevelName } from './utils/xp'
import { markPageRead, isPageRead, getChapterProgress, getTotalRead, saveLastPosition, getLastPosition } from './utils/progress'
import { getGender, setGender } from './utils/gender'
import './App.css'

const TABS = [
  { key: 'learn', label: '📖 למידה' },
  { key: 'quiz', label: '🎯 חידון' },
  { key: 'bugs', label: '🔧 שאלות נפוצות' },
]

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

function App() {
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
  const [xpFloat, setXpFloat] = useState(null)
  const [levelUp, setLevelUp] = useState(null)
  const [search, setSearch] = useState('')
  const [gender, setGenderState] = useState(getGender)

  const chapter = chapters[currentChapter]
  const page = chapter?.pages[currentPage]
  const totalPages = chapter?.pages.length || 0
  const level = getLevel(xp)
  const nextLevel = getNextLevel(xp)
  const lvlProgress = getLevelProgress(xp)
  const levelName = getLevelName(level, gender)
  const nextLevelName = nextLevel ? getLevelName(nextLevel, gender) : null

  const totalPagesAllChapters = chapters.reduce((s, c) => s + c.pages.length, 0)
  const totalRead = getTotalRead()
  const overallPct = Math.round((totalRead / totalPagesAllChapters) * 100)

  // Filtered chapters for sidebar search
  const filteredChapters = search.trim()
    ? chapters.map((ch, i) => ({ ch, i })).filter(({ ch }) =>
        ch.title.includes(search) || String(ch.id).includes(search)
      )
    : chapters.map((ch, i) => ({ ch, i }))

  const handleGenderSelect = (g) => {
    setGender(g)
    setGenderState(g)
  }

  const toggleGender = () => {
    const next = gender === 'male' ? 'female' : 'male'
    setGender(next)
    setGenderState(next)
  }

  const refreshXP = useCallback((result) => {
    setXp(result.after)
    if (result.leveledUp && result.after !== result.before) {
      setLevelUp(getLevel(result.after))
      setTimeout(() => setLevelUp(null), 3000)
    }
  }, [])

  const handleXPGain = useCallback((result) => {
    refreshXP(result)
  }, [refreshXP])

  // Mark page as read + give XP when navigating away
  const tryMarkRead = useCallback(() => {
    if (!chapter || !page) return
    const isNew = markPageRead(chapter.id, currentPage)
    if (isNew) {
      const s = updateStreak()
      setStreak(s)
      const result = addXP(XP_PAGE_READ)
      setXp(result.after)
      setXpFloat(`+${XP_PAGE_READ} XP`)
      setTimeout(() => setXpFloat(null), 1200)
    }
  }, [chapter, page, currentPage])

  const goNext = () => {
    tryMarkRead()
    if (currentPage < totalPages - 1) {
      const newPg = currentPage + 1
      saveLastPosition(currentChapter, newPg)
      setCurrentPage(newPg)
    } else if (currentChapter < chapters.length - 1) {
      const newCh = currentChapter + 1
      saveLastPosition(newCh, 0)
      setCurrentChapter(newCh)
      setCurrentPage(0)
    }
  }

  const goPrev = () => {
    if (currentPage > 0) {
      const newPg = currentPage - 1
      saveLastPosition(currentChapter, newPg)
      setCurrentPage(newPg)
    } else if (currentChapter > 0) {
      const newCh = currentChapter - 1
      const prevLen = chapters[newCh].pages.length
      const newPg = prevLen - 1
      saveLastPosition(newCh, newPg)
      setCurrentChapter(newCh)
      setCurrentPage(newPg)
    }
  }

  const goToChapter = (chIndex) => {
    saveLastPosition(chIndex, 0)
    setCurrentChapter(chIndex)
    setCurrentPage(0)
  }

  const canGoNext = currentPage < totalPages - 1 || currentChapter < chapters.length - 1
  const canGoPrev = currentPage > 0 || currentChapter > 0
  const pageRead = chapter ? isPageRead(chapter.id, currentPage) : false

  const goNextRef = useRef(goNext)
  const goPrevRef = useRef(goPrev)
  useEffect(() => { goNextRef.current = goNext })
  useEffect(() => { goPrevRef.current = goPrev })

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea')) return
      if (activeTab !== 'learn') return
      if (e.key === 'ArrowLeft' && canGoNext) goNextRef.current()
      if (e.key === 'ArrowRight' && canGoPrev) goPrevRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [canGoNext, canGoPrev, activeTab])

  useEffect(() => {
    document.querySelector('.content-area')?.scrollTo?.(0, 0)
  }, [currentChapter, currentPage])

  if (!chapter || !page) return null

  return (
    <div className="app">
      {/* ===== GENDER PICKER (first visit) ===== */}
      {!gender && <GenderPicker onSelect={handleGenderSelect} />}

      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header-top">
          <div className="header-title-wrap">
            <h1>🌐 מדריך רשתות</h1>
            <p className="subtitle">למידה אינטראקטיבית</p>
          </div>
          <div className="header-stats">
            <div className="stat-chip">
              <span className="stat-num">{streak}</span>
              <span className="stat-label">🔥 ימים</span>
            </div>
            <div className="stat-chip stat-progress" title={`${totalRead} מתוך ${totalPagesAllChapters} עמודים נקראו`}>
              <span className="stat-num">{overallPct}%</span>
              <span className="stat-label">📖 התקדמות</span>
            </div>
            <div className="stat-chip stat-xp">
              <span className="stat-num">{xp}</span>
              <span className="stat-label">{level.emoji} XP</span>
            </div>
            {gender && (
              <button className="gender-toggle-btn" onClick={toggleGender} title="החלף פנייה">
                {gender === 'female' ? '👩' : '👨'}
              </button>
            )}
          </div>
        </div>

        {/* Level bar */}
        <div className="level-bar-wrap">
          <div className="level-label">
            <span>{level.emoji} {levelName}</span>
            {nextLevel && <span className="level-next">→ {nextLevelName} ({nextLevel.min - xp} XP נותרו)</span>}
          </div>
          <div className="level-bar">
            <div className="level-fill" style={{ width: `${lvlProgress}%` }} />
          </div>
        </div>

        {/* Tab navigation */}
        <div className="app-tabs">
          {TABS.map(t => (
            <button
              key={t.key}
              className={`app-tab ${activeTab === t.key ? 'active' : ''}`}
              onClick={() => setActiveTab(t.key)}
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

      {/* ===== MAIN CONTENT ===== */}
      {activeTab === 'learn' && (
        <div className="layout">
          <nav className="sidebar">
            <h3>תוכן העניינים</h3>

            {/* Search */}
            <div className="sidebar-search-wrap">
              <input
                type="text"
                className="sidebar-search"
                placeholder="🔍 חיפוש פרק..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => e.key === 'Escape' && setSearch('')}
                dir="rtl"
              />
            </div>

            {filteredChapters.length === 0 && (
              <p className="sidebar-no-results">לא נמצאו פרקים</p>
            )}

            {filteredChapters.map(({ ch, i }) => {
              const prog = getChapterProgress(ch.id, ch.pages.length)
              return (
                <button
                  key={ch.id}
                  className={`chapter-btn ${i === currentChapter ? 'active' : ''}`}
                  onClick={() => goToChapter(i)}
                >
                  <span className="chapter-num">פרק {ch.id}</span>
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
            <KeyTip />
            <div className="page-nav-mini">
              עמוד {currentPage + 1} מתוך {totalPages}
            </div>
          </nav>

          <main className="content-area">
            <div className="page-header">
              <span className="page-type-badge" style={getBadgeStyle(page.type)}>
                {getPageTypeLabel(page.type)}
              </span>
              {pageRead && <span className="page-read-badge">✅ נקרא</span>}
              <h2>{page.title}</h2>
            </div>

            <article
              key={`${currentChapter}-${currentPage}`}
              className="page-content"
            >
              {page.type === 'questions' ? (
                <QuestionsPage questions={page.questions} gender={gender} />
              ) : page.type === 'simulation' ? (
                <SimulationPage simId={page.simId} content={page.content} />
              ) : page.type === 'thinkOutside' ? (
                <ThinkOutsidePage page={page} />
              ) : (
                <div
                  className="content-body"
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
              )}
            </article>

            <AskQuestion />

            <nav className="page-navigation">
              <button className="nav-btn prev" onClick={goPrev} disabled={!canGoPrev}>
                ← קודם
              </button>
              <span className="page-counter">
                פרק {currentChapter + 1} | {currentPage + 1}/{totalPages}
              </span>
              <button className="nav-btn next" onClick={goNext} disabled={!canGoNext}>
                הבא →
              </button>
            </nav>
          </main>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="tab-content">
          <Quiz chapters={chapters} onXPGain={handleXPGain} gender={gender} />
        </div>
      )}

      {activeTab === 'bugs' && (
        <div className="tab-content">
          <TroubleshootingTab />
        </div>
      )}
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
    thinkOutside: '🧠 מחוץ לקופסא'
  }
  return labels[type] || type
}

function SimulationPage({ simId, content }) {
  const sims = {
    tcpHandshake: TCPHandshakeSim,
    encapsulation: EncapsulationSim,
    dnsLookup: DnsLookupSim,
    packetFlow: PacketFlowSim
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
            <span className="q-text">{item.q}</span>
            <span className="expand-icon">{(openIndex === i || allOpen) ? '▼' : '◀'}</span>
          </button>
          {(openIndex === i || allOpen) && (
            <div className="answer-block">
              <h4>💬 תשובה:</h4>
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
