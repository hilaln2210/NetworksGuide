import { signInWithPopup, signOut as fbSignOut, onAuthStateChanged } from 'firebase/auth'
import { auth, googleProvider, isFirebaseConfigured } from '../config/firebase.js'

export function onAuthChange(callback) {
  if (!isFirebaseConfigured()) { callback(null); return () => {} }
  return onAuthStateChanged(auth, callback)
}

export async function signInWithGoogle() {
  if (!isFirebaseConfigured()) return null
  const result = await signInWithPopup(auth, googleProvider)
  return result.user
}

export async function signOut() {
  if (!isFirebaseConfigured()) return
  await fbSignOut(auth)
}
