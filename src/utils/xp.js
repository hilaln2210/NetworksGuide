const XP_KEY = 'networks_xp'
const STREAK_KEY = 'networks_streak'

export const XP_PAGE_READ = 5
export const XP_QUIZ_CORRECT = 15
export const XP_QUIZ_BONUS = 50

export const LEVELS = [
  { level: 1, name: 'מתחילה', emoji: '🌱', min: 0 },
  { level: 2, name: 'סטודנטית', emoji: '📚', min: 60 },
  { level: 3, name: 'טכנאית', emoji: '🔧', min: 180 },
  { level: 4, name: 'מהנדסת', emoji: '⚙️', min: 360 },
  { level: 5, name: 'מומחית', emoji: '🏆', min: 600 },
  { level: 6, name: 'גורו רשתות', emoji: '🔮', min: 900 },
]

export function getXP() {
  return parseInt(localStorage.getItem(XP_KEY) || '0', 10)
}

export function addXP(amount) {
  const before = getXP()
  const after = before + amount
  localStorage.setItem(XP_KEY, String(after))
  return { before, after, leveledUp: getLevel(after).level > getLevel(before).level }
}

export function getLevel(xp) {
  let lvl = LEVELS[0]
  for (const l of LEVELS) {
    if (xp >= l.min) lvl = l
  }
  return lvl
}

export function getNextLevel(xp) {
  return LEVELS.find(l => l.min > xp) || null
}

export function getLevelProgress(xp) {
  const cur = getLevel(xp)
  const next = getNextLevel(xp)
  if (!next) return 100
  return Math.round(((xp - cur.min) / (next.min - cur.min)) * 100)
}

// ===== Streak =====

export function getStreak() {
  try {
    const d = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"streak":0}')
    return d.streak || 0
  } catch { return 0 }
}

export function updateStreak() {
  try {
    const today = new Date().toDateString()
    const raw = localStorage.getItem(STREAK_KEY)
    const d = raw ? JSON.parse(raw) : { lastDay: '', streak: 0 }
    if (d.lastDay === today) return d.streak
    const yesterday = new Date(Date.now() - 86400000).toDateString()
    d.streak = d.lastDay === yesterday ? d.streak + 1 : 1
    d.lastDay = today
    localStorage.setItem(STREAK_KEY, JSON.stringify(d))
    return d.streak
  } catch { return 0 }
}
