import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9aufDkcl_UiQ3AOpJt-VwQaeCTmNJ5HI",
  authDomain: "solid-ruler-464214-i6.firebaseapp.com",
  projectId: "solid-ruler-464214-i6",
  storageBucket: "solid-ruler-464214-i6.firebasestorage.app",
  messagingSenderId: "8784160886",
  appId: "1:8784160886:web:69ba27da2d00b3c5031757"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()

export const isFirebaseConfigured = () => true
