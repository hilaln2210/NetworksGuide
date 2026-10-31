// Sends notifications via server-side Netlify Function
// This bypasses ad blockers and CORS issues that block direct Telegram API calls

import { tracks, enrichmentTracks } from '../data/content.js'
import { getTodayMinutes, getLastPosition } from './progress.js'
import { getXP, getLevel, getLevelName, getStreak } from './xp.js'

const ALL_TRACKS = [...(tracks || []), ...(enrichmentTracks || [])]

let pendingVisit = null
let sessionStartMs = Date.now()
let activeSessionMinutes = 0
let lastReportedSessionMinutes = 0
let lastCourseNotify = { trackId: null, ts: 0 }
let lastSummaryTs = 0

// Live context updated by App.jsx
let currentContext = {
  user: null,
  track: null,
  tab: 'learn',
  chapterTitle: '',
}

export function formatCourseLabel(track) {
  if (!track) return '🏠 מסך בחירת מסלול (דף הבית)'
  const icon = track.icon || '📚'
  const title = track.title || track.id || 'קורס'
  return `${icon} ${title}`
}

function resolveCurrentTrack(explicitTrack) {
  if (explicitTrack) return explicitTrack
  if (currentContext.track) return currentContext.track
  const pos = getLastPosition()
  if (pos?.trackId) {
    return ALL_TRACKS.find(t => t.id === pos.trackId) || null
  }
  return null
}

function getSessionDurationMinutes() {
  const elapsedMin = Math.floor((Date.now() - sessionStartMs) / 60000)
  return Math.round(Math.max(activeSessionMinutes, Math.min(elapsedMin, activeSessionMinutes + 1)) * 10) / 10
}

function buildPayload(type, overrides = {}) {
  const track = resolveCurrentTrack(overrides.track)
  const user = overrides.user !== undefined ? overrides.user : currentContext.user
  const xp = getXP()
  const levelObj = getLevel(xp)
  const gender = localStorage.getItem('networks_gender') || 'female'
  const levelName = `${levelObj.emoji} ${getLevelName(levelObj, gender, 'he')} (רמה ${levelObj.level})`
  const todayMin = Math.round(getTodayMinutes() * 10) / 10
  const sessionMin = overrides.sessionMinutes ?? getSessionDurationMinutes()

  return {
    type,
    name: user?.displayName || overrides.name || '',
    email: user?.email || overrides.email || '',
    course: overrides.course || formatCourseLabel(track),
    chapter: overrides.chapter ?? currentContext.chapterTitle ?? '',
    tab: overrides.tab || currentContext.tab || 'learn',
    sessionMinutes: sessionMin,
    todayMinutes: todayMin,
    xp,
    level: levelName,
    streak: getStreak(),
    lang: navigator.language || '',
    ua: navigator.userAgent.slice(0, 120),
    mobile: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),
    ...overrides,
  }
}

function send(data, keepalive = false) {
  try {
    const body = JSON.stringify(data)
    if (keepalive && typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([body], { type: 'application/json' })
      const ok = navigator.sendBeacon('/.netlify/functions/notify', blob)
      if (ok) return
    }
    fetch('/.netlify/functions/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive,
    }).catch(() => {})
  } catch {}
}

export function updateNotifyContext(partial) {
  currentContext = { ...currentContext, ...partial }
  if (pendingVisit && partial.track !== undefined) {
    pendingVisit.course = formatCourseLabel(partial.track)
  }
}

export function recordActiveHalfMinute() {
  activeSessionMinutes = Math.round((activeSessionMinutes + 0.5) * 10) / 10
  // Send a periodic live update every 15 minutes of active learning in a session
  if (activeSessionMinutes >= 15 && activeSessionMinutes - lastReportedSessionMinutes >= 15) {
    lastReportedSessionMinutes = activeSessionMinutes
    send(buildPayload('session_update'))
  }
}

export function notifyVisit(initialTrack = null) {
  try {
    sessionStartMs = Date.now()
    if (initialTrack) currentContext.track = initialTrack
    // Don't send immediately — wait 3s for a possible login or immediate course click to merge with
    pendingVisit = buildPayload('visit', { track: initialTrack })
    setTimeout(() => {
      if (pendingVisit) {
        // Refresh course & session data right before sending
        const fresh = buildPayload('visit')
        send({ ...pendingVisit, ...fresh, type: 'visit' })
        pendingVisit = null
      }
    }, 3000)
  } catch {}
}

export function notifyLogin(user) {
  try {
    currentContext.user = user
    const visit = pendingVisit
    pendingVisit = null // cancel standalone visit
    const payload = buildPayload('login', {
      user,
      name: user?.displayName || '',
      email: user?.email || '',
      lang: visit?.lang || navigator.language || '',
      ua: visit?.ua || navigator.userAgent.slice(0, 120),
      mobile: visit?.mobile ?? /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),
    })
    send(payload)
  } catch {}
}

export function notifyCourseSelect(track) {
  try {
    if (!track) return
    currentContext.track = track
    const courseLabel = formatCourseLabel(track)

    // If initial visit notification hasn't fired yet, merge into it to avoid double message
    if (pendingVisit) {
      pendingVisit.course = courseLabel
      return
    }

    // Throttle duplicate clicks on the same course within 60 seconds
    const now = Date.now()
    if (lastCourseNotify.trackId === track.id && now - lastCourseNotify.ts < 60000) {
      return
    }
    lastCourseNotify = { trackId: track.id, ts: now }

    send(buildPayload('course_select', { track, course: courseLabel }))
  } catch {}
}

export function notifySessionEnd() {
  try {
    const now = Date.now()
    const sessionMin = getSessionDurationMinutes()
    // Only send session summary if user was active for at least 1 minute since last report
    // and at least 60 seconds passed since the last summary
    if (sessionMin < 1 || sessionMin - lastReportedSessionMinutes < 1) return
    if (now - lastSummaryTs < 60000) return

    lastSummaryTs = now
    lastReportedSessionMinutes = sessionMin
    send(buildPayload('session_summary', { sessionMinutes: sessionMin }), true)
  } catch {}
}
