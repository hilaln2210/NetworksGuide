import { useState, useEffect, useCallback } from 'react'
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
import { getXP, addXP, getLevel, getLevelProgress, getNextLevel, getStreak, updateStreak, XP_PAGE_READ } from './utils/xp'
import { markPageRead, isPageRead, getChapterProgress, getTotalRead } from './utils/progress'
import './App.css'

const TABS = [
  { key: 'learn', label: '📖 למידה' },
  { key: 'quiz', label: '🎯 חידון' },
  { key: 'bugs', label: '🔧 שאלות נפוצות' },
]

function App() {
  const [activeTab, setActiveTab] = useState('learn')
  const [currentChapter, setCurrentChapter] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [xp, setXp] = useState(getXP())
  const [streak, setStreak] = useState(getStreak())
  const [xpFloat, setXpFloat] = useState(null)
  const [levelUp, setLevelUp] = useState(null)

  const chapter = chapters[currentChapter]
  const page = chapter?.pages[currentPage]
  const totalPages = chapter?.pages.length || 0
  const level = getLevel(xp)
  const nextLevel = getNextLevel(xp)
  const lvlProgress = getLevelProgress(xp)

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
      setCurrentPage(p => p + 1)
    } else if (currentChapter < chapters.length - 1) {
      setCurrentChapter(c => c + 1)
      setCurrentPage(0)
    }
  }

  const goPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(p => p - 1)
    } else if (currentChapter > 0) {
      setCurrentChapter(c => c - 1)
      const prev = chapters[currentChapter - 1].pages.length
      setCurrentPage(prev - 1)
    }
  }

  const goToChapter = (chIndex) => {
    tryMarkRead()
    setCurrentChapter(chIndex)
    setCurrentPage(0)
  }

  const canGoNext = currentPage < totalPages - 1 || currentChapter < chapters.length - 1
  const canGoPrev = currentPage > 0 || currentChapter > 0
  const pageRead = chapter ? isPageRead(chapter.id, currentPage) : false

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea')) return
      if (activeTab !== 'learn') return
      if (e.key === 'ArrowLeft' && canGoNext) goNext()
      if (e.key === 'ArrowRight' && canGoPrev) goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [canGoNext, canGoPrev, activeTab])

  useEffect(() => {
    document.querySelector('.content-area')?.scrollTo?.(0, 0)
  }, [currentChapter, currentPage])

  if (!chapter || !page) return null

  const totalPagesAllChapters = chapters.reduce((s, c) => s + c.pages.length, 0)
  const totalRead = getTotalRead()

  return (
    <div className="app">
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
            <div className="stat-chip">
              <span className="stat-num">{totalRead}</span>
              <span className="stat-label">📖 עמודים</span>
            </div>
            <div className="stat-chip stat-xp">
              <span className="stat-num">{xp}</span>
              <span className="stat-label">{level.emoji} XP</span>
            </div>
          </div>
        </div>

        {/* Level bar */}
        <div className="level-bar-wrap">
          <div className="level-label">
            <span>{level.emoji} {level.name}</span>
            {nextLevel && <span className="level-next">→ {nextLevel.name} ({nextLevel.min - xp} XP נותרו)</span>}
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
          {levelUp.emoji} עלית רמה! {levelUp.name}
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      {activeTab === 'learn' && (
        <div className="layout">
          <nav className="sidebar">
            <h3>תוכן העניינים</h3>
            <p className="sidebar-hint">◀ ▶ ניווט מקלדת</p>
            {chapters.map((ch, i) => {
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

            <article className="page-content">
              {page.type === 'questions' ? (
                <QuestionsPage questions={page.questions} />
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
          <Quiz chapters={chapters} onXPGain={handleXPGain} />
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
    explanation: { background: 'rgba(99,102,241,0.25)', borderColor: 'rgba(99,102,241,0.5)', color: '#a5b4fc' },
    demo: { background: 'rgba(52,211,153,0.2)', borderColor: 'rgba(52,211,153,0.45)', color: '#6ee7b7' },
    summary: { background: 'rgba(251,191,36,0.18)', borderColor: 'rgba(251,191,36,0.4)', color: '#fde68a' },
    questions: { background: 'rgba(248,113,113,0.18)', borderColor: 'rgba(248,113,113,0.4)', color: '#fca5a5' },
    simulation: { background: 'rgba(167,139,250,0.22)', borderColor: 'rgba(167,139,250,0.5)', color: '#c4b5fd' },
    thinkOutside: { background: 'rgba(251,191,36,0.15)', borderColor: 'rgba(251,191,36,0.35)', color: '#fde68a' },
  }
  return { ...(styles[type] || styles.explanation), border: '1px solid' }
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

function QuestionsPage({ questions }) {
  const [openIndex, setOpenIndex] = useState(null)
  const allOpen = openIndex === 'all'

  return (
    <div className="questions-container">
      <p className="questions-intro">קראי, חשבי, ואז פתחי את התשובה:</p>
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
