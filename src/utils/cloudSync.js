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

function countProgress(data) {
  try {
    const pages = JSON.parse(data.read_pages || '{}')
    return Object.values(pages).reduce((sum, ch) => sum + Object.keys(ch).length, 0)
  } catch { return 0 }
}

// Pull progress from Firestore → merge into localStorage (cloud wins if more progress)
export async function pullProgress(uid) {
  if (!isFirebaseConfigured() || !uid) return false
  try {
    const snap = await getDoc(doc(db, 'users', uid))
    if (!snap.exists()) return false
    const cloud = snap.data()
    const local = getAllProgress()
    // Cloud wins if it has more read pages (= more progress)
    const cloudCount = countProgress(cloud)
    const localCount = countProgress(local)
    if (cloudCount > localCount) {
      setAllProgress(cloud)
      return true // did restore
    }
    return false
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
