import { useState, useEffect, useCallback, useRef } from 'react'
import { getQuizForChapter, getAllQuizQuestions } from '../data/quizBank'
import { contentEn } from '../data/content_en'
import { addXP, XP_QUIZ_CORRECT, XP_QUIZ_BONUS, getLevel } from '../utils/xp'
import { saveQuizScore, getQuizScore } from '../utils/progress'
import { renderBidiText, processHtmlBidi } from '../utils/bidi.jsx'
import { useLang } from '../utils/language.jsx'
import './Quiz.css'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function Quiz({ chapters, onXPGain, gender, onGoToChapter, autoStartChapterId, autoStartKey, onContextChange }) {
  const { lang, t } = useLang()
  const isEn = lang === 'en'

  const [mode, setMode] = useState(null)
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [picked, setPicked] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [canContinue, setCanContinue] = useState(false)
  const pendingAdvance = useRef(null)
  const [hearts, setHearts] = useState(3)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [xpFloat, setXpFloat] = useState(null)
  const [streak, setStreak] = useState(0)
  const [hintVisible, setHintVisible] = useState(false)
  const [explLang, setExplLang] = useState('he')
  const [chapterModal, setChapterModal] = useState(null)

  // Sync explLang with app language
  useEffect(() => { setExplLang(lang) }, [lang])

  function getHint(explanation, correct) {
    const text = explanation.replace(/<[^>]+>/g, '').trim()
    const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 10)
    if (sentences.length <= 1) {
      const words = text.split(/\s+/)
      const half = words.slice(Math.floor(words.length * 0.5))
      return (half.join(' ') || text.slice(0, 80)).trim() + '...'
    }
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
    const mid = Math.floor(sentences.length / 2)
    const secondHalf = scored.filter(x => x.idx >= mid)
    const pool = secondHalf.length > 0 ? secondHalf : scored
    pool.sort((a, b) => a.overlap - b.overlap)
    return pool[0].s.trim()
  }

  // Helper: get chapter title (English or Hebrew)
  const chTitle = (ch) => {
    if (isEn) return contentEn[ch.id]?.titleEn || ch.title
    return ch.title
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

  useEffect(() => {
    if (onContextChange) {
      if (mode && questions.length > 0) {
        onContextChange({ chapterId: selectedChapter, questionNum: current + 1, totalQuestions: questions.length })
      } else {
        onContextChange(null)
      }
    }
  }, [mode, selectedChapter, current, questions.length, onContextChange])

  useEffect(() => {
    if (autoStartChapterId != null && autoStartKey != null) {
      const qs = getQuizForChapter(autoStartChapterId)
      if (qs.length) {
        setMode('chapter')
        setSelectedChapter(autoStartChapterId)
        startQuiz(qs)
      }
    }
  }, [autoStartChapterId, autoStartKey, startQuiz])

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

    pendingAdvance.current = { isCorrect, finalScore }
    const minReadTime = isCorrect ? 1800 : 2500
    setTimeout(() => setCanContinue(true), minReadTime)
  }

  const handleContinue = () => {
    const { isCorrect, finalScore } = pendingAdvance.current || {}
    advanceQuiz(isCorrect, finalScore ?? score)
  }

  const choiceLetters = isEn ? ['A', 'B', 'C', 'D'] : ['א', 'ב', 'ג', 'ד']

  // ===== SCREEN: SELECT MODE =====
  if (!mode) {
    return (
      <div className="quiz-screen">
        <div className="quiz-select-header">
          <div className="quiz-hero-emoji">🎯</div>
          <h2>{t('quiz_title')}</h2>
          <p>{gender === 'male' ? t('quiz_select_male') : t('quiz_select_female')}</p>
        </div>
        <div className="quiz-mode-cards">
          <button className="quiz-mode-card quiz-mode-all" onClick={() => {
            setMode('all')
            startQuiz(getAllQuizQuestions())
          }}>
            <span className="qmc-emoji">🌐</span>
            <span className="qmc-title">{t('quiz_general')}</span>
            <span className="qmc-sub">{t('quiz_general_sub')}</span>
          </button>
        </div>
        <p className="quiz-chapter-label">{gender === 'male' ? t('quiz_pick_chapter_male') : t('quiz_pick_chapter_female')}</p>
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
                <span className="qcb-num">{t('chapter')} {ch.id}</span>
                <span className="qcb-title">{chTitle(ch)}</span>
                <div className="qcb-footer">
                  <span className="qcb-count">{qs.length} {t('quiz_questions')}</span>
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

    const PERFECT_EN = [
      'Great job! But a true expert never stops learning. What\'s next? 🚀',
      'Perfect! Now try another chapter — the next challenge awaits 🔥',
      '100%! Can you do it again? 💪',
      'Well done — but there are more chapters to master 🌐',
    ]
    const PERFECT_HE_M = [
      'אחלה! אבל הגורו האמיתי לעולם לא מפסיק ללמוד. מה הלאה? 🚀',
      'מושלם! עכשיו נסה פרק אחר — האתגר הבא מחכה לך 🔥',
      '100%! אבל האם תצליח שוב? ורק בלי לחשוב יותר מדי... ⚡',
      'כל הכבוד — אבל יש עוד 21 פרקים. הגאון האמיתי יודע הכל 🌐',
    ]
    const PERFECT_HE_F = [
      'אחלה! אבל הגורו האמיתית לעולם לא מפסיקה ללמוד. מה הלאה? 🚀',
      'מושלם! עכשיו נסי פרק אחר — האתגר הבא מחכה לך 🔥',
      '100%! אבל האם תצליחי שוב? ורק בלי לחשוב יותר מדי... ⚡',
      'כל הכבוד — אבל יש עוד 21 פרקים. הגאונית האמיתית יודעת הכל 🌐',
    ]

    const pool = isEn ? PERFECT_EN : (gender === 'male' ? PERFECT_HE_M : PERFECT_HE_F)
    const challengeMsg = pool[Math.floor(Math.random() * pool.length)]

    const doneMsg = isPerfect
      ? challengeMsg
      : pct >= 70
        ? isEn ? 'Well done! 💪' : (gender === 'male' ? 'כל הכבוד! היית מצוין 💪' : 'כל הכבוד! היית מצוינת 💪')
        : pct >= 40
          ? isEn ? 'Keep learning — try again!' : (gender === 'male' ? 'ממשיכים ללמוד — תחזור ותנסה שוב!' : 'ממשיכים ללמוד — תחזרי ותנסי שוב!')
          : isEn ? 'Read the chapter again, then try once more 📚' : (gender === 'male' ? 'קרא שוב את הפרק ואז תנסה שוב 📚' : 'קראי שוב את הפרק ואז תנסי שוב 📚')

    return (
      <div className="quiz-screen">
        <div className="quiz-done">
          <div className="quiz-done-emoji">{emoji}</div>
          <h2 className="quiz-done-title">
            {isPerfect ? t('quiz_perfect') : `${score} ${t('quiz_score')} ${total}`}
          </h2>
          <div className="quiz-done-pct" style={{ '--pct': pct + '%' }}>
            <div className="quiz-done-bar"><div className="quiz-done-fill" /></div>
            <span>{pct}%</span>
          </div>
          {isPerfect && (
            <div className="quiz-perfect-banner">
              ✨ {t('quiz_perfect_bonus')} +{XP_QUIZ_BONUS} XP ✨
            </div>
          )}
          <p className="quiz-done-msg">{doneMsg}</p>
          {(() => {
            const chIdx = mode === 'chapter' ? chapters.findIndex(c => c.id === selectedChapter) : -1
            const nextCh = chIdx >= 0 ? chapters.slice(chIdx + 1).find(c => getQuizForChapter(c.id).length > 0) : null
            return (
              <div className="quiz-done-btns">
                <button className="quiz-restart-btn" onClick={() => startQuiz(
                  mode === 'all' ? getAllQuizQuestions() : getQuizForChapter(selectedChapter)
                )}>{t('quiz_again')}</button>
                {nextCh && (
                  <button className="quiz-next-btn" onClick={() => {
                    setSelectedChapter(nextCh.id)
                    startQuiz(getQuizForChapter(nextCh.id))
                  }}>{t('quiz_next_chapter')}</button>
                )}
                <button className="quiz-back-btn" onClick={() => setMode(null)}>
                  {t('quiz_all_chapters')}
                </button>
                {mode === 'chapter' && (() => {
                  const learnChIdx = chapters.findIndex(c => c.id === selectedChapter)
                  if (learnChIdx >= 0 && learnChIdx < chapters.length - 1) {
                    return (
                      <button className="quiz-learn-btn" onClick={() => onGoToChapter(learnChIdx + 1)}>
                        {t('quiz_learn_next')}
                      </button>
                    )
                  }
                  return null
                })()}
              </div>
            )
          })()}
        </div>
      </div>
    )
  }

  // ===== SCREEN: GAME OVER =====
  if (gameOver) {
    const chIdx = mode === 'chapter' ? chapters.findIndex(c => c.id === selectedChapter) : -1
    const nextCh = chIdx >= 0 ? chapters.slice(chIdx + 1).find(c => getQuizForChapter(c.id).length > 0) : null
    return (
      <div className="quiz-screen">
        <div className="quiz-done">
          <div className="quiz-done-emoji">💔</div>
          <h2 className="quiz-done-title">{t('quiz_game_over')}</h2>
          <p className="quiz-done-msg">
            {isEn
              ? `You got ${score} points. Every mistake is a chance to learn — try again! 💪`
              : gender === 'male'
                ? `הגעת ל-${score} נקודות. כל נפילה היא הזדמנות ללמוד — נסה שוב! 💪`
                : `הגעת ל-${score} נקודות. כל נפילה היא הזדמנות ללמוד — נסי שוב! 💪`}
          </p>
          <div className="quiz-done-btns">
            <button className="quiz-restart-btn" onClick={() => startQuiz(
              mode === 'all' ? getAllQuizQuestions() : getQuizForChapter(selectedChapter)
            )}>{t('quiz_try_again')}</button>
            {nextCh && (
              <button className="quiz-next-btn" onClick={() => {
                setSelectedChapter(nextCh.id)
                startQuiz(getQuizForChapter(nextCh.id))
              }}>{t('quiz_next_chapter')}</button>
            )}
            <button className="quiz-back-btn" onClick={() => setMode(null)}>
              {t('quiz_all_chapters')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[current]
  if (!q) return null

  // Get the right text based on language
  const qText = isEn && q.explanationEn ? q.q : q.q // questions are in Hebrew (quiz shows Hebrew q always, or English if available)
  const hintExpl = isEn && q.explanationEn ? q.explanationEn : q.explanation

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
        <div className="quiz-streak-banner">
          {isEn ? `🔥 ${streak} correct in a row!` : `🔥 רצף של ${streak} נכון!`}
        </div>
      )}

      {/* Question */}
      <div className="quiz-question-card">
        <span className="quiz-q-num">
          {mode === 'chapter' && selectedChapter != null && (() => {
            const ch = chapters.find(c => c.id === selectedChapter)
            return ch ? `${t('chapter')} ${ch.id}: ${chTitle(ch)} • ` : ''
          })()}
          {t('quiz_question_counter')} {current + 1} {t('quiz_of')} {questions.length}
        </span>
        <p className="quiz-question-text" dir={isEn ? 'ltr' : 'rtl'}>{renderBidiText(q.q)}</p>
        {/* Hint + chapter link row */}
        {picked === null && (
          <div className="quiz-hint-row">
            <div className="quiz-hint-actions">
              <button
                className={`quiz-hint-btn${hintVisible ? ' quiz-hint-btn--active' : ''}`}
                onClick={() => setHintVisible(v => !v)}
              >
                {t('quiz_hint')}
              </button>
              {q.chapterId != null && (() => {
                const chIdx = chapters.findIndex(ch => String(ch.id) === String(q.chapterId))
                if (chIdx < 0) return null
                const ch = chapters[chIdx]
                return (
                  <button
                    className="quiz-chapter-link-btn"
                    onClick={() => setChapterModal({ chapter: ch, chIdx })}
                    title={chTitle(ch)}
                  >
                    📖 {t('chapter')} {chIdx + 1} — {chTitle(ch)}
                  </button>
                )
              })()}
            </div>
            {hintVisible && (
              <div className="quiz-hint-box" dir={isEn ? 'ltr' : 'rtl'}>
                <span className="quiz-hint-label">{t('quiz_hint')}:</span>
                {getHint(hintExpl, q.correct)}
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
              <span className="choice-letter">{choiceLetters[i]}</span>
              <span className="choice-text" dir={isEn ? 'ltr' : 'rtl'}>{renderBidiText(choice)}</span>
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
                <p className="exp-correct-msg">{isEn ? 'Correct! 🎉' : 'נכון! מעולה 🎉'}</p>
              )}
              {q.explanationEn && (
                <button className="quiz-lang-toggle" onClick={() => setExplLang(l => l === 'he' ? 'en' : 'he')}>
                  {explLang === 'he' ? '🇬🇧 English' : '🇮🇱 עברית'}
                </button>
              )}
              <div className="quiz-exp-text">
                {(explLang === 'en' && q.explanationEn ? q.explanationEn : q.explanation).split(/\n|(?<=\.)\s+/).map((s, i) => {
                  const showEnglish = explLang === 'en' && q.explanationEn
                  const withoutParens = s.replace(/\([^)]*\)/g, '')
                  const isRTL = !showEnglish && /[\u0590-\u05ff\ufb1d-\ufb4f]/.test(withoutParens)
                  return (
                    <span key={i} dir={isRTL ? 'rtl' : 'ltr'} style={{ display: 'block', textAlign: isRTL ? 'right' : 'left', marginBottom: '0.1rem' }}>{s}</span>
                  )
                })}
              </div>
            </div>
          </div>
          {canContinue && (
            <div className="quiz-nav-btns">
              {current > 0 && (
                <button className="quiz-prev-btn" onClick={() => {
                  setCurrent(current - 1)
                  setPicked(null)
                  setShowResult(false)
                  setCanContinue(false)
                  setHintVisible(false)
                }}>{t('prev_btn')}</button>
              )}
              <button className="quiz-continue-btn" onClick={handleContinue}>
                {current + 1 >= questions.length
                  ? (isEn ? 'Finish →' : '← סיום')
                  : t('quiz_continue')}
              </button>
            </div>
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
  const { lang, t } = useLang()
  const isEn = lang === 'en'
  const [pageIdx, setPageIdx] = useState(0)
  const page = chapter.pages[pageIdx]
  const total = chapter.pages.length

  const PAGE_TYPE_LABELS_HE = {
    explanation: '📖 הסבר', demo: '💡 הדגמה', summary: '📋 סיכום',
    questions: '❓ שאלות', story: '📰 סיפור', diagram: '📊 דיאגרמה',
    example: '💻 דוגמה', thinkOutside: '🧠 מחוץ לקופסא', simulation: '🎮 הדמיה'
  }
  const PAGE_TYPE_LABELS_EN = {
    explanation: '📖 Explanation', demo: '💡 Demo', summary: '📋 Summary',
    questions: '❓ Questions', story: '📰 Story', diagram: '📊 Diagram',
    example: '💻 Example', thinkOutside: '🧠 Think Outside', simulation: '🎮 Simulation'
  }
  const typeLabels = isEn ? PAGE_TYPE_LABELS_EN : PAGE_TYPE_LABELS_HE

  const chTitleEn = contentEn[chapter.id]?.titleEn || chapter.title
  const displayTitle = isEn ? chTitleEn : chapter.title

  const pageTitle = (() => {
    if (isEn) {
      const en = contentEn[chapter.id]?.pages?.[pageIdx]
      return en?.titleEn || page.title
    }
    return page.title
  })()

  const renderPageContent = (p, idx) => {
    if (p.type === 'questions' && p.questions) {
      return (
        <div className="ch-modal-qa-list">
          {p.questions.map((item, i) => (
            <details key={i} className="ch-modal-qa-item">
              <summary className="ch-modal-qa-q" dir={isEn ? 'ltr' : 'rtl'}>{renderBidiText(item.q)}</summary>
              <p className="ch-modal-qa-a" dir={isEn ? 'ltr' : 'rtl'}>{renderBidiText(item.a)}</p>
            </details>
          ))}
        </div>
      )
    }
    if (p.type === 'simulation') {
      return <p className="ch-modal-sim-note">{isEn ? 'Simulation available in the Learn tab 🎮' : 'הדמיה זמינה בטאב הלמידה 🎮'}</p>
    }

    // Try English content
    if (isEn) {
      const enPage = contentEn[chapter.id]?.pages?.[idx]
      if (enPage?.contentEn) {
        return (
          <div className="ch-modal-content-body content-body" dir="ltr"
            dangerouslySetInnerHTML={{ __html: enPage.contentEn }} />
        )
      }
    }

    const html = p.content || p.intro || ''
    return (
      <div className="ch-modal-content-body content-body" dir="rtl"
        dangerouslySetInnerHTML={{ __html: processHtmlBidi(html) }} />
    )
  }

  return (
    <div className="ch-modal-overlay" onClick={onClose}>
      <div className="ch-modal" onClick={e => e.stopPropagation()}>
        <div className="ch-modal-header">
          <div className="ch-modal-title-wrap">
            <span className="ch-modal-num">{t('chapter')} {chIdx + 1}</span>
            <span className="ch-modal-title" dir={isEn ? 'ltr' : 'rtl'}>{displayTitle}</span>
          </div>
          <button className="ch-modal-close" onClick={onClose}>
            ✕ {isEn ? 'Back to quiz' : 'חזור לחידון'}
          </button>
        </div>

        <div className="ch-modal-page-header">
          <span className="ch-modal-type-badge">{typeLabels[page.type] || '📖'}</span>
          <span className="ch-modal-page-title" dir={isEn ? 'ltr' : 'rtl'}>{pageTitle}</span>
        </div>

        <div className="ch-modal-body">
          {renderPageContent(page, pageIdx)}
        </div>

        <div className="ch-modal-footer">
          <button className="ch-modal-nav-btn" disabled={pageIdx === 0}
            onClick={() => setPageIdx(p => p - 1)}>{t('prev_btn')}</button>
          <span className="ch-modal-counter" dir="ltr">{pageIdx + 1} / {total}</span>
          <button className="ch-modal-nav-btn" disabled={pageIdx === total - 1}
            onClick={() => setPageIdx(p => p + 1)}>{t('next_btn')}</button>
        </div>
      </div>
    </div>
  )
}
