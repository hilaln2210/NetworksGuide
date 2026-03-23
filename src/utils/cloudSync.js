import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../config/firebase.js'

const LS_KEYS = {
  read_pages: 'networks_read_pages',
  quiz_scores: 'networks_quiz_scores',
  xp: 'networks_xp',
  streak: 'networks_streak',
  position: 'networks_position',
  session: 'networks_session_today',
  gender: 'networks_gender',
  pro_hash: 'ng_pro_hash',
}

function getAllProgress() {
  const data = {}
  for (const [key, lsKey] of Object.entries(LS_KEYS)) {
    const val = localStorage.getItem(lsKey)
    if (val !== null) data[key] = val
  }
  return data
}

function setAllProgress(data) {
  for (const [key, lsKey] of Object.entries(LS_KEYS)) {
    if (data[key] !== undefined && data[key] !== null) {
      localStorage.setItem(lsKey, data[key])
    }
  }
}

// Merge two progress snapshots — always take the best of both
function mergeProgress(local, cloud) {
  const merged = { ...local }

  // read_pages: union of all chapters+pages from both
  try {
    const lp = JSON.parse(local.read_pages || '{}')
    const cp = JSON.parse(cloud.read_pages || '{}')
    const all = { ...lp }
    for (const [ch, pages] of Object.entries(cp)) {
      all[ch] = { ...(all[ch] || {}), ...pages }
    }
    merged.read_pages = JSON.stringify(all)
  } catch { /* keep local */ }

  // xp, streak — take max
  for (const key of ['xp', 'streak']) {
    const l = parseFloat(local[key]) || 0
    const c = parseFloat(cloud[key]) || 0
    merged[key] = String(Math.max(l, c))
  }

  // quiz_scores — per-chapter max
  try {
    const lq = JSON.parse(local.quiz_scores || '{}')
    const cq = JSON.parse(cloud.quiz_scores || '{}')
    const all = { ...lq }
    for (const [ch, score] of Object.entries(cq)) {
      all[ch] = Math.max(all[ch] ?? 0, score)
    }
    merged.quiz_scores = JSON.stringify(all)
  } catch { /* keep local */ }

  // gender, position — cloud wins (preferences set intentionally)
  if (cloud.gender) merged.gender = cloud.gender
  if (cloud.position) merged.position = cloud.position

  // pro_hash — keep whichever exists
  if (!merged.pro_hash && cloud.pro_hash) merged.pro_hash = cloud.pro_hash

  return merged
}

// Pull progress from Firestore → merge into localStorage
export async function pullProgress(uid) {
  if (!isFirebaseConfigured() || !uid) return false
  try {
    const snap = await getDoc(doc(db, 'users', uid))
    if (!snap.exists()) return false
    const cloud = snap.data()
    const local = getAllProgress()
    const merged = mergeProgress(local, cloud)
    setAllProgress(merged)
    return true
  } catch (e) {
    console.warn('[CloudSync] pull failed:', e.message)
    return false
  }
}

// Push localStorage → Firestore
export async function pushProgress(uid) {
  if (!isFirebaseConfigured() || !uid) return
  try {
    const data = getAllProgress()
    data.updated_at = new Date().toISOString()
    await setDoc(doc(db, 'users', uid), data, { merge: true })
  } catch (e) {
    console.warn('[CloudSync] push failed:', e.message)
  }
}

// Auto-sync: pull on login, push periodically
let _pushInterval = null

export function startAutoSync(uid) {
  stopAutoSync()
  // Push every 30 seconds
  _pushInterval = setInterval(() => pushProgress(uid), 30_000)
  // Also push on page unload
  window.addEventListener('beforeunload', () => pushProgress(uid))
}

export function stopAutoSync() {
  if (_pushInterval) { clearInterval(_pushInterval); _pushInterval = null }
}
