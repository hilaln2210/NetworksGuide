import { useState, useEffect, useCallback, useRef } from 'react'
import { getQuizForChapter, getAllQuizQuestions } from '../data/quizBank'
import { addXP, XP_QUIZ_CORRECT, XP_QUIZ_BONUS, getLevel } from '../utils/xp'
import { saveQuizScore, getQuizScore } from '../utils/progress'
import { renderBidiText, processHtmlBidi } from '../utils/bidi.jsx'
import './Quiz.css'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function Quiz({ chapters, onXPGain, gender, onGoToChapter }) {
  const [mode, setMode] = useState(null) // 'chapter' | 'all'
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [picked, setPicked] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [canContinue, setCanContinue] = useState(false)
  const pendingAdvance = useRef(null) // stores { isCorrect, finalScore } for handleContinue
  const [hearts, setHearts] = useState(3)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [xpFloat, setXpFloat] = useState(null)
  const [streak, setStreak] = useState(0)
  const [hintVisible, setHintVisible] = useState(false)
  const [chapterModal, setChapterModal] = useState(null) // { chapter, chIdx }

  // Generate a hint: find the sentence with the lowest overlap with the correct answer
  function getHint(explanation, correct) {
    const text = explanation.replace(/<[^>]+>/g, '').trim()

    // Split into sentences
    const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 10)
    if (sentences.length <= 1) {
      // Short explanation — return second half of the text
      const words = text.split(/\s+/)
      const half = words.slice(Math.floor(words.length * 0.5))
      return (half.join(' ') || text.slice(0, 80)).trim() + '...'
    }

    // Score sentences: count how many words from the correct answer appear in each sentence
    const correctWords = (correct || '')
      .toLowerCase()
      .replace(/[^\w\u0590-\u05ff\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2)

    const scored = sentences.map((s, idx) => {
      const sLower = s.toLowerCase()
      const overlap = correctWords.filter(w => sLower.includes(w)).length
      return { s, overlap, idx }
    })

    // Prefer sentences from the second half of the explanation (more context, less direct answer)
    const mid = Math.floor(sentences.length / 2)
    const secondHalf = scored.filter(x => x.idx >= mid)
    const pool = secondHalf.length > 0 ? secondHalf : scored

    // Pick the sentence with the fewest correct-answer words (least revealing)
    pool.sort((a, b) => a.overlap - b.overlap)
    return pool[0].s.trim()
  }

  const startQuiz = useCallback((qs) => {
    setQuestions(shuffle(qs).slice(0, Math.min(qs.length, 10)).map(q => ({
      ...q,
      choices: shuffle(q.choices)
    })))
    setCurrent(0)
    setPicked(null)
    setShowResult(false)
    setHearts(3)
    setScore(0)
    setDone(false)
    setGameOver(false)
    setStreak(0)
    setXpFloat(null)
    setCanContinue(false)
    setHintVisible(false)
    pendingAdvance.current = null
  }, [])

  const advanceQuiz = useCallback((isCorrect, finalScore) => {
    const isLast = current + 1 >= questions.length
    if (isLast) {
      const isPerfect = finalScore === questions.length
      if (isPerfect) {
        const result = addXP(XP_QUIZ_BONUS)
        if (onXPGain) onXPGain(result)
      }
      if (selectedChapter) {
        saveQuizScore(selectedChapter, finalScore, questions.length)
      }
      setDone(true)
    } else {
      setCurrent(c => c + 1)
      setPicked(null)
      setShowResult(false)
      setCanContinue(false)
      setHintVisible(false)
    }
  }, [current, questions.length, selectedChapter, onXPGain])

  const handlePick = (choice) => {
    if (picked !== null) return
    setPicked(choice)
    setShowResult(true)
    setCanContinue(false)
    const q = questions[current]
    const isCorrect = choice === q.correct

    let finalScore = score
    if (isCorrect) {
      finalScore = score + 1
      const newStreak = streak + 1
      setScore(finalScore)
      setStreak(newStreak)
      const xp = XP_QUIZ_CORRECT + (newStreak >= 3 ? 5 : 0)
      const result = addXP(xp)
      setXpFloat(`+${xp} XP${newStreak >= 3 ? ' 🔥' : ''}`)
      setTimeout(() => setXpFloat(null), 1500)
      if (onXPGain) onXPGain(result)
    } else {
      setStreak(0)
      const newHearts = hearts - 1
      setHearts(newHearts)
      if (newHearts <= 0) {
        setTimeout(() => setGameOver(true), 2000)
        return
      }
    }

    // Store advance params and show continue button after min reading time
    pendingAdvance.current = { isCorrect, finalScore }
    const minReadTime = isCorrect ? 1800 : 2500
    setTimeout(() => setCanContinue(true), minReadTime)
  }

  const handleContinue = () => {
    const { isCorrect, finalScore } = pendingAdvance.current || {}
    advanceQuiz(isCorrect, finalScore ?? score)
  }

  // ===== SCREEN: SELECT MODE =====
  if (!mode) {
    return (
      <div className="quiz-screen">
        <div className="quiz-select-header">
          <div className="quiz-hero-emoji">🎯</div>
          <h2>חידון רשתות</h2>
          <p>{gender === 'male' ? 'בחר פרק או התחל חידון כללי' : 'בחרי פרק או התחילי חידון כללי'}</p>
        </div>
        <div className="quiz-mode-cards">
          <button className="quiz-mode-card quiz-mode-all" onClick={() => {
            setMode('all')
            startQuiz(getAllQuizQuestions())
          }}>
            <span className="qmc-emoji">🌐</span>
            <span className="qmc-title">חידון כללי</span>
            <span className="qmc-sub">שאלות מכל הפרקים</span>
          </button>
        </div>
        <p className="quiz-chapter-label">{gender === 'male' ? 'או בחר פרק:' : 'או בחרי פרק:'}</p>
        <div className="quiz-chapter-grid">
          {chapters.map(ch => {
            const qs = getQuizForChapter(ch.id)
            if (!qs.length) return null
            const best = getQuizScore(ch.id)
            return (
              <button
                key={ch.id}
                className="quiz-chapter-btn"
                onClick={() => {
                  setMode('chapter')
                  setSelectedChapter(ch.id)
                  startQuiz(qs)
                }}
              >
                <span className="qcb-num">פרק {ch.id}</span>
                <span className="qcb-title">{ch.title}</span>
                <div className="qcb-footer">
                  <span className="qcb-count">{qs.length} שאלות</span>
                  {best && (
                    <span className={`qcb-best ${best.best === best.total ? 'qcb-best-perfect' : ''}`}>
                      {best.best === best.total ? '🏆' : '⭐'} {best.best}/{best.total}
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // ===== SCREEN: DONE =====
  if (done) {
    const total = questions.length
    const pct = Math.round((score / total) * 100)
    const isPerfect = score === total
    const emoji = isPerfect ? '🏆' : pct >= 70 ? '🎉' : pct >= 40 ? '😊' : '💪'
    const isMale = gender === 'male'

    const PERFECT_CHALLENGES = [
      isMale
        ? 'אחלה! אבל הגורו האמיתי לעולם לא מפסיק ללמוד. מה הלאה? 🚀'
        : 'אחלה! אבל הגורו האמיתית לעולם לא מפסיקה ללמוד. מה הלאה? 🚀',
      isMale
        ? 'מושלם! עכשיו נסה פרק אחר — האתגר הבא מחכה לך 🔥'
        : 'מושלם! עכשיו נסי פרק אחר — האתגר הבא מחכה לך 🔥',
      isMale
        ? '100%! אבל האם תצליח שוב? ורק בלי לחשוב יותר מדי... ⚡'
        : '100%! אבל האם תצליחי שוב? ורק בלי לחשוב יותר מדי... ⚡',
      isMale
        ? 'כל הכבוד — אבל יש עוד 21 פרקים. הגאון האמיתי יודע הכל 🌐'
        : 'כל הכבוד — אבל יש עוד 21 פרקים. הגאונית האמיתית יודעת הכל 🌐',
    ]
    const challengeMsg = PERFECT_CHALLENGES[Math.floor(Math.random() * PERFECT_CHALLENGES.length)]

    const doneMsg = isPerfect
      ? challengeMsg
      : pct >= 70
        ? isMale ? 'כל הכבוד! היית מצוין 💪' : 'כל הכבוד! היית מצוינת 💪'
        : pct >= 40
          ? isMale ? 'ממשיכים ללמוד — תחזור ותנסה שוב!' : 'ממשיכים ללמוד — תחזרי ותנסי שוב!'
          : isMale ? 'קרא שוב את הפרק ואז תנסה שוב 📚' : 'קראי שוב את הפרק ואז תנסי שוב 📚'

    return (
      <div className="quiz-screen">
        <div className="quiz-done">
          <div className="quiz-done-emoji">{emoji}</div>
          <h2 className="quiz-done-title">
            {isPerfect ? 'מושלם! הכל נכון!' : `${score} מתוך ${total}`}
          </h2>
          <div className="quiz-done-pct" style={{ '--pct': pct + '%' }}>
            <div className="quiz-done-bar"><div className="quiz-done-fill" /></div>
            <span>{pct}%</span>
          </div>
          {isPerfect && (
            <div className="quiz-perfect-banner">
              ✨ בונוס מושלם! +{XP_QUIZ_BONUS} XP ✨
            </div>
          )}
          <p className="quiz-done-msg">{doneMsg}</p>
          <div className="quiz-done-btns">
            <button className="quiz-restart-btn" onClick={() => startQuiz(
              mode === 'all' ? getAllQuizQuestions() : getQuizForChapter(selectedChapter)
            )}>🔄 שוב</button>
            <button className="quiz-back-btn" onClick={() => setMode(null)}>
              {isMale ? 'בחר פרק →' : 'בחרי פרק →'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ===== SCREEN: GAME OVER =====
  if (gameOver) {
    const isMale = gender === 'male'
    return (
      <div className="quiz-screen">
        <div className="quiz-done">
          <div className="quiz-done-emoji">💔</div>
          <h2 className="quiz-done-title">נגמרו הלבבות</h2>
          <p className="quiz-done-msg">
            {isMale
              ? `הגעת ל-${score} נקודות. כל נפילה היא הזדמנות ללמוד — נסה שוב! 💪`
              : `הגעת ל-${score} נקודות. כל נפילה היא הזדמנות ללמוד — נסי שוב! 💪`}
          </p>
          <div className="quiz-done-btns">
            <button className="quiz-restart-btn" onClick={() => startQuiz(
              mode === 'all' ? getAllQuizQuestions() : getQuizForChapter(selectedChapter)
            )}>{isMale ? '🔄 נסה שוב' : '🔄 נסי שוב'}</button>
            <button className="quiz-back-btn" onClick={() => setMode(null)}>
              בחירת פרק →
            </button>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[current]
  if (!q) return null

  return (
    <div className="quiz-screen">
      {/* Status bar */}
      <div className="quiz-status">
        <div className="quiz-hearts">
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`heart ${i >= hearts ? 'heart-lost' : ''}`}>❤️</span>
          ))}
        </div>
        <div className="quiz-progress-wrap">
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${(current / questions.length) * 100}%` }} />
          </div>
          <span className="quiz-progress-text">{current + 1}/{questions.length}</span>
        </div>
        <div className="quiz-score-badge">⭐ {score}</div>
      </div>

      {/* XP float */}
      {xpFloat && <div className="xp-float">{xpFloat}</div>}

      {/* Streak banner */}
      {streak >= 3 && (
        <div className="quiz-streak-banner">🔥 רצף של {streak} נכון!</div>
      )}

      {/* Question */}
      <div className="quiz-question-card">
        <span className="quiz-q-num">שאלה {current + 1}</span>
        <p className="quiz-question-text" dir="rtl">{renderBidiText(q.q)}</p>
        {/* Hint + chapter link row — only before answering */}
        {picked === null && (
          <div className="quiz-hint-row">
            <div className="quiz-hint-actions">
              <button
                className={`quiz-hint-btn${hintVisible ? ' quiz-hint-btn--active' : ''}`}
                onClick={() => setHintVisible(v => !v)}
              >
                💡 {hintVisible ? 'הסתר רמז' : 'רמז'}
              </button>
              {q.chapterId != null && (() => {
                const chIdx = chapters.findIndex(ch => String(ch.id) === String(q.chapterId))
                if (chIdx < 0) return null
                const ch = chapters[chIdx]
                return (
                  <button
                    className="quiz-chapter-link-btn"
                    onClick={() => setChapterModal({ chapter: ch, chIdx })}
                    title={ch.title}
                  >
                    📖 פרק {chIdx + 1} — {ch.title}
                  </button>
                )
              })()}
            </div>
            {hintVisible && (
              <div className="quiz-hint-box" dir="rtl">
                <span className="quiz-hint-label">💡 רמז:</span>
                {getHint(q.explanation, q.correct)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Choices */}
      <div className="quiz-choices">
        {q.choices.map((choice, i) => {
          let cls = 'quiz-choice'
          if (picked !== null) {
            if (choice === q.correct) cls += ' choice-correct'
            else if (choice === picked) cls += ' choice-wrong'
            else cls += ' choice-dim'
          }
          return (
            <button key={i} className={cls} onClick={() => handlePick(choice)}>
              <span className="choice-letter">{['א', 'ב', 'ג', 'ד'][i]}</span>
              <span className="choice-text" dir="rtl">{renderBidiText(choice)}</span>
            </button>
          )
        })}
      </div>

      {/* Explanation + continue */}
      {showResult && picked && (
        <div className={`quiz-explanation ${picked === q.correct ? 'exp-correct' : 'exp-wrong'}`}>
          <div className="exp-top">
            <span className="exp-icon">{picked === q.correct ? '✅' : '📖'}</span>
            <div className="exp-body">
              {picked === q.correct && (
                <p className="exp-correct-msg" dir="rtl">
                  {gender === 'male' ? 'נכון! מעולה 🎉' : 'נכון! מעולה 🎉'}
                </p>
              )}
              <div className="quiz-exp-text">
                {q.explanation.split(/(?<=\.)\s+/).map((s, i) => {
                  // Only count Hebrew outside parenthetical expressions — prevents English sentences
                  // with a Hebrew word in parens (e.g. "Active Mode: server (NAT שובר)") from going RTL
                  const withoutParens = s.replace(/\([^)]*\)/g, '')
                  const isRTL = /[\u0590-\u05ff\ufb1d-\ufb4f]/.test(withoutParens)
                  return (
                    <span key={i} dir={isRTL ? 'rtl' : 'ltr'} style={{ display: 'block', textAlign: isRTL ? 'right' : 'left', marginBottom: '0.1rem' }}>{renderBidiText(s)}</span>
                  )
                })}
              </div>
            </div>
          </div>
          {canContinue && (
            <button className="quiz-continue-btn" onClick={handleContinue}>
              {current + 1 >= questions.length ? '← סיום' : '← הבא'}
            </button>
          )}
        </div>
      )}

      {/* Chapter reference modal */}
      {chapterModal && (
        <ChapterModal
          chapter={chapterModal.chapter}
          chIdx={chapterModal.chIdx}
          onClose={() => setChapterModal(null)}
        />
      )}
    </div>
  )
}

function ChapterModal({ chapter, chIdx, onClose }) {
  const [pageIdx, setPageIdx] = useState(0)
  const page = chapter.pages[pageIdx]
  const total = chapter.pages.length

  const PAGE_TYPE_LABELS = {
    explanation: '📖 הסבר', demo: '💡 הדגמה', summary: '📋 סיכום',
    questions: '❓ שאלות', story: '📰 סיפור', diagram: '📊 דיאגרמה',
    example: '💻 דוגמה', thinkOutside: '🧠 מחוץ לקופסא', simulation: '🎮 הדמיה'
  }

  const renderPageContent = (p) => {
    if (p.type === 'questions' && p.questions) {
      return (
        <div className="ch-modal-qa-list">
          {p.questions.map((item, i) => (
            <details key={i} className="ch-modal-qa-item">
              <summary className="ch-modal-qa-q" dir="rtl">{renderBidiText(item.q)}</summary>
              <p className="ch-modal-qa-a" dir="rtl">{renderBidiText(item.a)}</p>
            </details>
          ))}
        </div>
      )
    }
    if (p.type === 'simulation') {
      return <p className="ch-modal-sim-note" dir="rtl">הדמיה זמינה בטאב הלמידה 🎮</p>
    }
    const html = p.content || p.intro || ''
    return (
      <div
        className="ch-modal-content-body content-body"
        dir="rtl"
        dangerouslySetInnerHTML={{ __html: processHtmlBidi(html) }}
      />
    )
  }

  return (
    <div className="ch-modal-overlay" onClick={onClose}>
      <div className="ch-modal" onClick={e => e.stopPropagation()}>
        <div className="ch-modal-header">
          <div className="ch-modal-title-wrap">
            <span className="ch-modal-num">פרק {chIdx + 1}</span>
            <span className="ch-modal-title" dir="rtl">{chapter.title}</span>
          </div>
          <button className="ch-modal-close" onClick={onClose} title="חזור לחידון">✕ חזור לחידון</button>
        </div>

        <div className="ch-modal-page-header">
          <span className="ch-modal-type-badge">{PAGE_TYPE_LABELS[page.type] || '📖'}</span>
          <span className="ch-modal-page-title" dir="rtl">{page.title}</span>
        </div>

        <div className="ch-modal-body">
          {renderPageContent(page)}
        </div>

        <div className="ch-modal-footer">
          <button
            className="ch-modal-nav-btn"
            disabled={pageIdx === 0}
            onClick={() => setPageIdx(p => p - 1)}
          >הקודם →</button>
          <span className="ch-modal-counter" dir="ltr">{pageIdx + 1} / {total}</span>
          <button
            className="ch-modal-nav-btn"
            disabled={pageIdx === total - 1}
            onClick={() => setPageIdx(p => p + 1)}
          >← הבא</button>
        </div>
      </div>
    </div>
  )
}
