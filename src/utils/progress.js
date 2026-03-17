const KEY = 'networks_read_pages'

// Track-aware helpers — prefix chapterId with trackId to avoid collisions
export function trackChapterId(trackId, chapterId) {
  return `${trackId}__${chapterId}`
}

export function getReadPages() {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} }
}

export function markPageRead(chapterId, pageIdx) {
  const read = getReadPages()
  const isNew = !read[chapterId]?.[pageIdx]
  if (!read[chapterId]) read[chapterId] = {}
  read[chapterId][pageIdx] = true
  localStorage.setItem(KEY, JSON.stringify(read))
  return isNew
}

export function isPageRead(chapterId, pageIdx) {
  return !!getReadPages()[chapterId]?.[pageIdx]
}

export function getChapterProgress(chapterId, totalPages) {
  const read = getReadPages()[chapterId] || {}
  return Math.round((Object.keys(read).length / totalPages) * 100)
}

export function getTotalRead() {
  const read = getReadPages()
  return Object.values(read).reduce((sum, ch) => sum + Object.keys(ch).length, 0)
}

// ===== Last Position (track-aware) =====
const POSITION_KEY = 'networks_position'

export function saveLastPosition(chapterIdx, pageIdx, trackId = 'networking') {
  localStorage.setItem(POSITION_KEY, JSON.stringify({ trackId, chapterIdx, pageIdx }))
}

export function getLastPosition() {
  try { return JSON.parse(localStorage.getItem(POSITION_KEY) || 'null') } catch { return null }
}

const QUIZ_KEY = 'networks_quiz_scores'

export function saveQuizScore(chapterId, score, total) {
  try {
    const d = JSON.parse(localStorage.getItem(QUIZ_KEY) || '{}')
    if (!d[chapterId] || score > d[chapterId].best) {
      d[chapterId] = { best: score, total, date: new Date().toLocaleDateString('he-IL') }
    }
    localStorage.setItem(QUIZ_KEY, JSON.stringify(d))
  } catch {}
}

export function getQuizScore(chapterId) {
  try {
    const d = JSON.parse(localStorage.getItem(QUIZ_KEY) || '{}')
    return d[chapterId] || null
  } catch { return null }
}

export function resetProgress() {
  localStorage.removeItem(KEY)
  localStorage.removeItem(POSITION_KEY)
}

export function resetQuizScores() {
  localStorage.removeItem(QUIZ_KEY)
}

export function resetAll() {
  localStorage.removeItem(KEY)
  localStorage.removeItem(POSITION_KEY)
  localStorage.removeItem(QUIZ_KEY)
}

// ===== Session Time (today's learning minutes) =====
const SESSION_KEY = 'networks_session_today'

export function getTodayMinutes() {
  try {
    const d = JSON.parse(localStorage.getItem(SESSION_KEY) || '{}')
    const today = new Date().toDateString()
    return d.date === today ? (d.minutes || 0) : 0
  } catch { return 0 }
}

export function addSessionMinutes(n) {
  try {
    const today = new Date().toDateString()
    const d = JSON.parse(localStorage.getItem(SESSION_KEY) || '{}')
    const minutes = d.date === today ? (d.minutes || 0) + n : n
    localStorage.setItem(SESSION_KEY, JSON.stringify({ date: today, minutes }))
  } catch {}
}

export function formatMinutes(total) {
  if (total < 1) return '< 1 ד\''
  if (total < 60) return `${Math.round(total)} ד'`
  const h = Math.floor(total / 60)
  const m = Math.round(total % 60)
  return m > 0 ? `${h}ש' ${m}ד'` : `${h} שעות`
}

// ===== Chapters Completed (all pages read) =====
export function getCompletedChapters(chapters, trackId) {
  const all = getReadPages()
  return chapters.filter(ch => {
    const key = trackId ? `${trackId}__${ch.id}` : String(ch.id)
    const read = all[key] || {}
    return ch.pages.length > 0 && Object.keys(read).length >= ch.pages.length
  }).length
}

// ===== Total Quiz Questions Answered Correctly =====
export function getTotalQuizCorrect() {
  try {
    const d = JSON.parse(localStorage.getItem(QUIZ_KEY) || '{}')
    return Object.values(d).reduce((sum, v) => sum + (v.best || 0), 0)
  } catch { return 0 }
}

// ===== Learning Pace (pages per day based on streak + totalRead) =====
export function getLearningPace(totalRead, streak) {
  if (!streak || !totalRead) return 0
  return Math.round((totalRead / Math.max(streak, 1)) * 10) / 10
}
