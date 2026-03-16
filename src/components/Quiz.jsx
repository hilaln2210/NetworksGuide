import { useState, useEffect, useCallback } from 'react'
import { getQuizForChapter, getAllQuizQuestions } from '../data/quizBank'
import { addXP, XP_QUIZ_CORRECT, XP_QUIZ_BONUS, getLevel } from '../utils/xp'
import { saveQuizScore, getQuizScore } from '../utils/progress'
import './Quiz.css'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function Quiz({ chapters, onXPGain }) {
  const [mode, setMode] = useState(null) // 'chapter' | 'all'
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [picked, setPicked] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [hearts, setHearts] = useState(3)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [xpFloat, setXpFloat] = useState(null)
  const [streak, setStreak] = useState(0)

  const startQuiz = useCallback((qs) => {
    setQuestions(shuffle(qs).slice(0, Math.min(qs.length, 10)))
    setCurrent(0)
    setPicked(null)
    setShowResult(false)
    setHearts(3)
    setScore(0)
    setDone(false)
    setGameOver(false)
    setStreak(0)
    setXpFloat(null)
  }, [])

  const handlePick = (choice) => {
    if (picked !== null) return
    setPicked(choice)
    setShowResult(true)
    const q = questions[current]
    const isCorrect = choice === q.correct

    if (isCorrect) {
      const newScore = score + 1
      const newStreak = streak + 1
      setScore(newScore)
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
        setTimeout(() => setGameOver(true), 1200)
        return
      }
    }

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        const isPerfect = score + (isCorrect ? 1 : 0) === questions.length
        if (isPerfect) {
          const result = addXP(XP_QUIZ_BONUS)
          if (onXPGain) onXPGain(result)
        }
        if (selectedChapter) {
          saveQuizScore(selectedChapter, score + (isCorrect ? 1 : 0), questions.length)
        }
        setDone(true)
      } else {
        setCurrent(c => c + 1)
        setPicked(null)
        setShowResult(false)
      }
    }, isCorrect ? 900 : 1400)
  }

  // ===== SCREEN: SELECT MODE =====
  if (!mode) {
    return (
      <div className="quiz-screen">
        <div className="quiz-select-header">
          <div className="quiz-hero-emoji">🎯</div>
          <h2>חידון רשתות</h2>
          <p>בחרי פרק או התחילי חידון כללי</p>
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
        <p className="quiz-chapter-label">או בחרי פרק:</p>
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
          <p className="quiz-done-msg">
            {isPerfect ? 'את גורו הרשתות! כל השאלות נכונות 🔥'
              : pct >= 70 ? 'כל הכבוד! היית מצוינת 💪'
              : pct >= 40 ? 'ממשיכים ללמוד — תחזרי ותנסי שוב!'
              : 'קראי שוב את הפרק ואז תנסי שוב 📚'}
          </p>
          <div className="quiz-done-btns">
            <button className="quiz-restart-btn" onClick={() => startQuiz(
              mode === 'all' ? getAllQuizQuestions() : getQuizForChapter(selectedChapter)
            )}>🔄 שוב</button>
            <button className="quiz-back-btn" onClick={() => setMode(null)}>← בחרי פרק</button>
          </div>
        </div>
      </div>
    )
  }

  // ===== SCREEN: GAME OVER =====
  if (gameOver) {
    return (
      <div className="quiz-screen">
        <div className="quiz-done">
          <div className="quiz-done-emoji">💔</div>
          <h2 className="quiz-done-title">נגמרו הלבבות</h2>
          <p className="quiz-done-msg">הגעת ל-{score} נקודות. רוצה לנסות שוב?</p>
          <div className="quiz-done-btns">
            <button className="quiz-restart-btn" onClick={() => startQuiz(
              mode === 'all' ? getAllQuizQuestions() : getQuizForChapter(selectedChapter)
            )}>🔄 נסי שוב</button>
            <button className="quiz-back-btn" onClick={() => setMode(null)}>← בחירת פרק</button>
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
        <p className="quiz-question-text">{q.q}</p>
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
              <span className="choice-text">{choice}</span>
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showResult && picked && (
        <div className={`quiz-explanation ${picked === q.correct ? 'exp-correct' : 'exp-wrong'}`}>
          <span className="exp-icon">{picked === q.correct ? '✅' : '❌'}</span>
          <p>{q.explanation}</p>
        </div>
      )}
    </div>
  )
}
