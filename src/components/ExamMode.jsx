import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { getAllQuizQuestions } from '../data/quizBank'
import { addXP } from '../utils/xp'
import './ExamMode.css'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const T = {
  he: {
    examMode: 'מצב בחינה',
    setupTitle: 'הגדרות בחינה',
    numQuestions: 'מספר שאלות',
    timeLimit: 'מגבלת זמן',
    minutes: 'דקות',
    startExam: 'התחל בחינה',
    cancel: 'ביטול',
    question: 'שאלה',
    of: 'מתוך',
    next: 'הבא',
    prev: 'הקודם',
    submit: 'הגש בחינה',
    submitConfirm: 'האם להגיש את הבחינה? לא ניתן לחזור אחורה.',
    timeUp: 'הזמן נגמר!',
    results: 'תוצאות הבחינה',
    score: 'ציון',
    passed: 'עבר בהצלחה!',
    failed: 'לא עבר',
    correct: 'תשובות נכונות',
    wrong: 'תשובות שגויות',
    unanswered: 'לא נענו',
    wrongAnswers: 'תשובות שגויות — סקירה',
    yourAnswer: 'התשובה שלך',
    correctAnswer: 'התשובה הנכונה',
    explanation: 'הסבר',
    certificate: 'תעודת הצלחה',
    certTitle: 'תעודת סיום בחינה',
    certPassedExam: 'עבר/ה בהצלחה את הבחינה ברשתות מחשבים',
    certScore: 'ציון',
    certDate: 'תאריך',
    downloadCert: 'הורד תעודה',
    xpEarned: 'XP שהתקבל',
    backToMenu: 'חזרה לתפריט',
    examInProgress: 'בחינה בתהליך',
    questionGrid: 'מפת שאלות',
  },
  en: {
    examMode: 'Exam Mode',
    setupTitle: 'Exam Setup',
    numQuestions: 'Number of Questions',
    timeLimit: 'Time Limit',
    minutes: 'minutes',
    startExam: 'Start Exam',
    cancel: 'Cancel',
    question: 'Question',
    of: 'of',
    next: 'Next',
    prev: 'Previous',
    submit: 'Submit Exam',
    submitConfirm: 'Submit the exam? This cannot be undone.',
    timeUp: "Time's up!",
    results: 'Exam Results',
    score: 'Score',
    passed: 'Passed!',
    failed: 'Failed',
    correct: 'Correct',
    wrong: 'Wrong',
    unanswered: 'Unanswered',
    wrongAnswers: 'Wrong Answers — Review',
    yourAnswer: 'Your Answer',
    correctAnswer: 'Correct Answer',
    explanation: 'Explanation',
    certificate: 'Certificate',
    certTitle: 'Exam Completion Certificate',
    certPassedExam: 'Successfully passed the Computer Networks Exam',
    certScore: 'Score',
    certDate: 'Date',
    downloadCert: 'Download Certificate',
    xpEarned: 'XP Earned',
    backToMenu: 'Back to Menu',
    examInProgress: 'Exam in Progress',
    questionGrid: 'Question Map',
  },
}

const PASS_THRESHOLD = 80
const XP_PASS = 100
const XP_HIGH = 200
const HIGH_THRESHOLD = 90

export function ExamMode({ lang = 'he', onClose, onXP }) {
  const t = T[lang] || T.he
  const isEn = lang === 'en'

  // phases: setup, exam, results
  const [phase, setPhase] = useState('setup')
  const [numQ, setNumQ] = useState(30)
  const [timeMin, setTimeMin] = useState(30)
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [results, setResults] = useState(null)
  const timerRef = useRef(null)
  const canvasRef = useRef(null)

  // Start exam
  const startExam = useCallback(() => {
    const all = getAllQuizQuestions()
    const shuffled = shuffle(all)
    const selected = shuffled.slice(0, Math.min(numQ, all.length)).map(q => {
      // Shuffle choices with same permutation for he/en
      const indices = q.choices.map((_, i) => i)
      const shuffledIdx = shuffle(indices)
      return {
        ...q,
        choices: shuffledIdx.map(i => q.choices[i]),
        choicesEn: q.choicesEn ? shuffledIdx.map(i => q.choicesEn[i]) : undefined,
      }
    })
    setQuestions(selected)
    setAnswers({})
    setCurrent(0)
    setTimeLeft(timeMin * 60)
    setPhase('exam')
    setResults(null)
  }, [numQ, timeMin])

  // Timer
  useEffect(() => {
    if (phase !== 'exam') return
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          submitExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  const selectAnswer = (qIdx, choice) => {
    setAnswers(prev => ({ ...prev, [qIdx]: choice }))
  }

  const submitExam = useCallback(() => {
    clearInterval(timerRef.current)
    // We need to read the latest state via functional approach
    setPhase('results')
  }, [])

  // Calculate results when entering results phase
  useEffect(() => {
    if (phase !== 'results' || questions.length === 0) return

    let correctCount = 0
    let wrongCount = 0
    let unansweredCount = 0
    const wrongList = []

    questions.forEach((q, idx) => {
      const userAns = answers[idx]
      const correctAns = isEn ? (q.correctEn || q.correct) : q.correct
      if (userAns === undefined || userAns === null) {
        unansweredCount++
        wrongList.push({ idx, q, userAns: null, correctAns })
      } else if (userAns === correctAns) {
        correctCount++
      } else {
        wrongCount++
        wrongList.push({ idx, q, userAns, correctAns })
      }
    })

    const pct = Math.round((correctCount / questions.length) * 100)
    const passed = pct >= PASS_THRESHOLD
    let xpGained = 0
    if (passed) {
      xpGained = pct >= HIGH_THRESHOLD ? XP_HIGH : XP_PASS
      addXP(xpGained)
      if (onXP) onXP(xpGained)
    }

    setResults({
      total: questions.length,
      correct: correctCount,
      wrong: wrongCount,
      unanswered: unansweredCount,
      pct,
      passed,
      xpGained,
      wrongList,
    })
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  const downloadCertificate = () => {
    if (!results) return
    const canvas = document.createElement('canvas')
    canvas.width = 800
    canvas.height = 500
    const ctx = canvas.getContext('2d')

    // Background
    const grad = ctx.createLinearGradient(0, 0, 800, 500)
    grad.addColorStop(0, '#0e7490')
    grad.addColorStop(0.5, '#0891b2')
    grad.addColorStop(1, '#06b6d4')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 800, 500)

    // Inner card
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.roundRect(30, 30, 740, 440, 20)
    ctx.fill()

    // Border
    ctx.strokeStyle = '#0891b2'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.roundRect(45, 45, 710, 410, 15)
    ctx.stroke()

    // Title
    ctx.fillStyle = '#0e7490'
    ctx.font = 'bold 32px Arial, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(t.certTitle, 400, 110)

    // Decorative line
    ctx.strokeStyle = '#06b6d4'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(200, 130)
    ctx.lineTo(600, 130)
    ctx.stroke()

    // Star
    ctx.font = '48px serif'
    ctx.fillText('★', 400, 190)

    // Main text
    ctx.fillStyle = '#334155'
    ctx.font = '20px Arial, sans-serif'
    ctx.fillText(t.certPassedExam, 400, 240)

    // Score
    ctx.fillStyle = '#0e7490'
    ctx.font = 'bold 52px Arial, sans-serif'
    ctx.fillText(`${results.pct}%`, 400, 310)

    // Date
    ctx.fillStyle = '#64748b'
    ctx.font = '16px Arial, sans-serif'
    const dateStr = new Date().toLocaleDateString(isEn ? 'en-US' : 'he-IL', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
    ctx.fillText(`${t.certDate}: ${dateStr}`, 400, 360)

    // Footer
    ctx.fillStyle = '#94a3b8'
    ctx.font = '14px Arial, sans-serif'
    ctx.fillText('NetworksGuide — Computer Networks Study App', 400, 420)

    // Download
    const link = document.createElement('a')
    link.download = `exam-certificate-${results.pct}pct.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  // ====== SETUP SCREEN ======
  if (phase === 'setup') {
    return (
      <div className="exam-overlay" dir={isEn ? 'ltr' : 'rtl'}>
        <div className="exam-container exam-setup">
          <div className="exam-setup-header">
            <span className="exam-hero-icon">📝</span>
            <h2>{t.examMode}</h2>
            <p>{t.setupTitle}</p>
          </div>

          <div className="exam-setup-section">
            <label>{t.numQuestions}</label>
            <div className="exam-option-row">
              {[20, 30, 50].map(n => (
                <button
                  key={n}
                  className={`exam-option-btn ${numQ === n ? 'active' : ''}`}
                  onClick={() => setNumQ(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="exam-setup-section">
            <label>{t.timeLimit}</label>
            <div className="exam-option-row">
              {[15, 30, 45].map(m => (
                <button
                  key={m}
                  className={`exam-option-btn ${timeMin === m ? 'active' : ''}`}
                  onClick={() => setTimeMin(m)}
                >
                  {m} {t.minutes}
                </button>
              ))}
            </div>
          </div>

          <div className="exam-setup-actions">
            <button className="exam-start-btn" onClick={startExam}>
              {t.startExam}
            </button>
            <button className="exam-cancel-btn" onClick={onClose}>
              {t.cancel}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ====== EXAM SCREEN ======
  if (phase === 'exam') {
    const q = questions[current]
    const qText = isEn ? (q.qEn || q.q) : q.q
    const choices = isEn ? (q.choicesEn || q.choices) : q.choices
    const correctAns = isEn ? (q.correctEn || q.correct) : q.correct
    const userAns = answers[current]
    const isLowTime = timeLeft <= 60

    return (
      <div className="exam-overlay" dir={isEn ? 'ltr' : 'rtl'}>
        {/* Timer header */}
        <div className={`exam-timer-bar ${isLowTime ? 'low-time' : ''}`}>
          <span className="exam-timer-label">{t.examInProgress}</span>
          <span className="exam-timer-clock">{formatTime(timeLeft)}</span>
          <span className="exam-timer-progress">
            {Object.keys(answers).length}/{questions.length}
          </span>
        </div>

        <div className="exam-container exam-question-area">
          {/* Question header */}
          <div className="exam-q-header">
            <span className="exam-q-num">
              {t.question} {current + 1} {t.of} {questions.length}
            </span>
          </div>

          {/* Question text */}
          <div className="exam-q-text">{qText}</div>

          {/* Choices */}
          <div className="exam-choices">
            {choices.map((c, idx) => {
              const isSelected = userAns === c
              return (
                <button
                  key={idx}
                  className={`exam-choice-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => selectAnswer(current, c)}
                >
                  <span className="exam-choice-letter">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="exam-choice-text">{c}</span>
                </button>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="exam-nav">
            <button
              className="exam-nav-btn"
              disabled={current === 0}
              onClick={() => setCurrent(c => c - 1)}
            >
              {t.prev}
            </button>
            {current < questions.length - 1 ? (
              <button
                className="exam-nav-btn primary"
                onClick={() => setCurrent(c => c + 1)}
              >
                {t.next}
              </button>
            ) : (
              <button
                className="exam-nav-btn submit"
                onClick={() => {
                  if (window.confirm(t.submitConfirm)) {
                    submitExam()
                  }
                }}
              >
                {t.submit}
              </button>
            )}
          </div>

          {/* Question grid */}
          <div className="exam-grid-section">
            <div className="exam-grid-title">{t.questionGrid}</div>
            <div className="exam-grid">
              {questions.map((_, idx) => {
                const isAnswered = answers[idx] !== undefined
                const isCurrent = idx === current
                return (
                  <button
                    key={idx}
                    className={`exam-grid-cell ${isAnswered ? 'answered' : ''} ${isCurrent ? 'current' : ''}`}
                    onClick={() => setCurrent(idx)}
                  >
                    {idx + 1}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ====== RESULTS SCREEN ======
  if (phase === 'results' && results) {
    return (
      <div className="exam-overlay" dir={isEn ? 'ltr' : 'rtl'}>
        <div className="exam-container exam-results">
          <h2 className="exam-results-title">{t.results}</h2>

          {/* Score circle */}
          <div className={`exam-score-circle ${results.passed ? 'passed' : 'failed'}`}>
            <span className="exam-score-pct">{results.pct}%</span>
            <span className="exam-score-label">
              {results.passed ? t.passed : t.failed}
            </span>
          </div>

          {/* Stats */}
          <div className="exam-stats-row">
            <div className="exam-stat correct">
              <span className="exam-stat-num">{results.correct}</span>
              <span className="exam-stat-label">{t.correct}</span>
            </div>
            <div className="exam-stat wrong">
              <span className="exam-stat-num">{results.wrong}</span>
              <span className="exam-stat-label">{t.wrong}</span>
            </div>
            <div className="exam-stat unanswered">
              <span className="exam-stat-num">{results.unanswered}</span>
              <span className="exam-stat-label">{t.unanswered}</span>
            </div>
          </div>

          {/* XP */}
          {results.xpGained > 0 && (
            <div className="exam-xp-banner">
              +{results.xpGained} {t.xpEarned}
            </div>
          )}

          {/* Certificate */}
          {results.passed && (
            <div className="exam-certificate">
              <div className="exam-cert-card">
                <div className="exam-cert-header">{t.certTitle}</div>
                <div className="exam-cert-star">★</div>
                <div className="exam-cert-body">{t.certPassedExam}</div>
                <div className="exam-cert-score">{results.pct}%</div>
                <div className="exam-cert-date">
                  {t.certDate}: {new Date().toLocaleDateString(isEn ? 'en-US' : 'he-IL', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </div>
              </div>
              <button className="exam-download-btn" onClick={downloadCertificate}>
                {t.downloadCert}
              </button>
            </div>
          )}

          {/* Wrong answers review */}
          {results.wrongList.length > 0 && (
            <div className="exam-wrong-section">
              <h3>{t.wrongAnswers}</h3>
              {results.wrongList.map(({ idx, q, userAns, correctAns }) => {
                const qText = isEn ? (q.qEn || q.q) : q.q
                const expText = isEn ? (q.explanationEn || q.explanation) : q.explanation
                return (
                  <div key={idx} className="exam-wrong-item">
                    <div className="exam-wrong-q">
                      <strong>{t.question} {idx + 1}:</strong> {qText}
                    </div>
                    {userAns && (
                      <div className="exam-wrong-yours">
                        <span className="exam-label-tag wrong-tag">{t.yourAnswer}:</span> {userAns}
                      </div>
                    )}
                    <div className="exam-wrong-correct">
                      <span className="exam-label-tag correct-tag">{t.correctAnswer}:</span> {correctAns}
                    </div>
                    {expText && (
                      <div className="exam-wrong-expl">
                        <span className="exam-label-tag expl-tag">{t.explanation}:</span>
                        <div className="exam-expl-text">{expText}</div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          <button className="exam-back-btn" onClick={onClose}>
            {t.backToMenu}
          </button>
        </div>
      </div>
    )
  }

  return null
}
