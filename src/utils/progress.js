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
