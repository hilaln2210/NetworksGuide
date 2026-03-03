import { useState } from 'react'
import { chapters } from './data/content'
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
          {chapters.map((ch, i) => (
            <button
              key={ch.id}
              className={`chapter-btn ${i === currentChapter ? 'active' : ''}`}
              onClick={() => goToChapter(i)}
            >
              <span className="chapter-num">פרק {ch.id}</span>
              <span className="chapter-title">{ch.title}</span>
            </button>
          ))}
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
            ) : (
              <div 
                className="content-body"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            )}
          </article>

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
    questions: '❓ שאלות הבנה'
  }
  return labels[type] || type
}

function QuestionsPage({ questions }) {
  const [openIndex, setOpenIndex] = useState(null)
  
  return (
    <div className="questions-container">
      <p className="questions-intro">
        המדריך מציג את השאלות והתשובות - קראי, והמדריך מסביר:
      </p>
      {questions.map((item, i) => (
        <div key={i} className="question-block">
          <button 
            className="question-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="q-number">שאלה {i + 1}</span>
            <span className="q-text">{item.q}</span>
            <span className="expand-icon">{openIndex === i ? '▼' : '◀'}</span>
          </button>
          {openIndex === i && (
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
