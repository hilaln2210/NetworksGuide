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

// Fix any corrupted quiz_scores data (nulls from previous bad merge)
function repairLocalStorage() {
  try {
    const raw = localStorage.getItem('networks_quiz_scores')
    if (!raw) return
    const data = JSON.parse(raw)
    let changed = false
    for (const [k, v] of Object.entries(data)) {
      if (v === null || typeof v !== 'object' || !('best' in v)) {
        delete data[k]
        changed = true
      }
    }
    if (changed) localStorage.setItem('networks_quiz_scores', JSON.stringify(data))
  } catch {
    localStorage.removeItem('networks_quiz_scores')
  }
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

function countPages(data) {
  try {
    const pages = JSON.parse(data.read_pages || '{}')
    return Object.values(pages).reduce((sum, ch) => sum + Object.keys(ch).length, 0)
  } catch { return 0 }
}

// Pull progress from Firestore → localStorage (cloud wins if more pages read)
export async function pullProgress(uid) {
  if (!isFirebaseConfigured() || !uid) return false
  repairLocalStorage()
  try {
    const snap = await getDoc(doc(db, 'users', uid))
    if (!snap.exists()) return false
    const cloud = snap.data()
    const local = getAllProgress()
    if (countPages(cloud) > countPages(local)) {
      setAllProgress(cloud)
      return true
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
  repairLocalStorage()
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
  _pushInterval = setInterval(() => pushProgress(uid), 30_000)
  window.addEventListener('beforeunload', () => pushProgress(uid))
}

export function stopAutoSync() {
  if (_pushInterval) { clearInterval(_pushInterval); _pushInterval = null }
}
