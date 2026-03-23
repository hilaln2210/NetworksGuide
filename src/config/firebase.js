import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// ══════════════════════════════════════════════════════════════
// PASTE YOUR FIREBASE CONFIG HERE (from Firebase Console)
// ══════════════════════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
}

const CONFIGURED = firebaseConfig.apiKey !== "PASTE_HERE"

let app = null, auth = null, db = null, googleProvider = null
if (CONFIGURED) {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
  googleProvider = new GoogleAuthProvider()
}

export { auth, db, googleProvider }
export const isFirebaseConfigured = () => CONFIGURED
