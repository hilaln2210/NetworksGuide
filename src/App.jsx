import { useState, useEffect } from 'react'
import { chapters } from './data/content'
import { TCPHandshakeSim } from './components/TCPHandshakeSim'
import { EncapsulationSim } from './components/EncapsulationSim'
import { DnsLookupSim } from './components/DnsLookupSim'
import { PacketFlowSim } from './components/PacketFlowSim'
import { ThinkOutsideBox } from './components/ThinkOutsideBox'
import { AskQuestion } from './components/AskQuestion'
import { KeyTip } from './components/KeyTip'
import './App.css'

function App() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  
  const chapter = chapters[currentChapter]
  const page = chapter?.pages[currentPage]
  const totalPages = chapter?.pages.length || 0

  const goNext = () => {
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
      const prevChapterPages = chapters[currentChapter - 1].pages.length
      setCurrentPage(prevChapterPages - 1)
    }
  }

  const goToChapter = (chIndex) => {
    setCurrentChapter(chIndex)
    setCurrentPage(0)
  }

  const canGoNext = currentPage < totalPages - 1 || currentChapter < chapters.length - 1
  const canGoPrev = currentPage > 0 || currentChapter > 0

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea')) return
      if (e.key === 'ArrowLeft' && canGoNext) goNext()
      if (e.key === 'ArrowRight' && canGoPrev) goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [canGoNext, canGoPrev])

  useEffect(() => {
    document.querySelector('.content-area')?.scrollTo?.(0, 0)
  }, [currentChapter, currentPage])

  if (!chapter || !page) return null

  return (
    <div className="app">
      <header className="header">
        <h1>📚 מדריך רשתות - למידה אינטראקטיבית</h1>
        <p className="subtitle">מבוסס על חומרי הקורס רשתות מחשבים</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${((currentChapter + (currentPage + 1) / totalPages) / chapters.length) * 100}%`
            }}
          />
        </div>
      </header>

      <div className="layout">
        <nav className="sidebar">
          <h3>תוכן העניינים</h3>
          <p className="sidebar-hint">◀ → מקלדת לניווט</p>
          {chapters.map((ch, i) => (
            <button
              key={ch.id}
              className={`chapter-btn ${i === currentChapter ? 'active' : ''}`}
              onClick={() => goToChapter(i)}
            >
              <span className="chapter-num">פרק {ch.id}</span>
              <span className="chapter-title">{ch.title}</span>
              <span className="chapter-pages">{ch.pages.length} עמודים</span>
            </button>
          ))}
          <KeyTip />
          <div className="page-nav-mini">
            <span>עמוד {currentPage + 1} מתוך {totalPages}</span>
          </div>
        </nav>

        <main className="content-area">
          <div className="page-header">
            <span className="page-type-badge">{getPageTypeLabel(page.type)}</span>
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
            <button 
              className="nav-btn prev" 
              onClick={goPrev} 
              disabled={!canGoPrev}
            >
              ← עמוד קודם
            </button>
            <span className="page-counter">
              פרק {currentChapter + 1} | עמוד {currentPage + 1}/{totalPages}
            </span>
            <button 
              className="nav-btn next" 
              onClick={goNext} 
              disabled={!canGoNext}
            >
              עמוד הבא →
            </button>
          </nav>
        </main>
      </div>
    </div>
  )
}

function getPageTypeLabel(type) {
  const labels = {
    explanation: '📖 הסבר',
    demo: '💡 הדגמה',
    summary: '📋 סיכום',
    questions: '❓ שאלות הבנה',
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
      <p className="questions-intro">
        המדריך מציג את השאלות והתשובות - קראי, והמדריך מסביר:
      </p>
      <div className="questions-actions">
        <button
          type="button"
          className="questions-toggle-all"
          onClick={() => setOpenIndex(allOpen ? null : 'all')}
        >
          {allOpen ? 'סגור כל התשובות' : 'פתח את כל התשובות'}
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
              <h4>המדריך מסביר:</h4>
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
