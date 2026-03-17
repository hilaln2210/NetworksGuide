const XP_KEY = 'networks_xp'
const STREAK_KEY = 'networks_streak'

export const XP_PAGE_READ = 5
export const XP_QUIZ_CORRECT = 15
export const XP_QUIZ_BONUS = 50

// nameF = נקבה, nameM = זכר
export const LEVELS = [
  { level: 1,  nameF: 'מתחילה',           nameM: 'מתחיל',           emoji: '🌱',  min: 0 },
  { level: 2,  nameF: 'סטודנטית',          nameM: 'סטודנט',          emoji: '📚',  min: 60 },
  { level: 3,  nameF: 'טכנאית',            nameM: 'טכנאי',           emoji: '🔧',  min: 180 },
  { level: 4,  nameF: 'מהנדסת',            nameM: 'מהנדס',           emoji: '⚙️',  min: 360 },
  { level: 5,  nameF: 'מומחית',            nameM: 'מומחה',           emoji: '🏆',  min: 600 },
  { level: 6,  nameF: 'גורו רשתות',        nameM: 'גורו רשתות',      emoji: '🔮',  min: 900 },
  { level: 7,  nameF: 'ארכיטקטית רשתות',  nameM: 'ארכיטקט רשתות',  emoji: '🏗️', min: 1500 },
  { level: 8,  nameF: 'מנהלת תשתיות',     nameM: 'מנהל תשתיות',    emoji: '🌐',  min: 2500 },
  { level: 9,  nameF: 'מומחית אבטחה',     nameM: 'מומחה אבטחה',    emoji: '🔐',  min: 4000 },
  { level: 10, nameF: 'CTO',               nameM: 'CTO',             emoji: '🚀',  min: 6500 },
  { level: 11, nameF: 'אגדת הרשתות',      nameM: 'אגדת הרשתות',    emoji: '⚡',  min: 10000 },
  { level: 12, nameF: 'אל הרשתות',        nameM: 'אל הרשתות',      emoji: '🌌',  min: 15000 },
]

export function getLevelName(levelObj, gender) {
  return gender === 'male' ? levelObj.nameM : levelObj.nameF
}

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

export function resetXP() {
  localStorage.removeItem(XP_KEY)
  localStorage.removeItem(STREAK_KEY)
}
