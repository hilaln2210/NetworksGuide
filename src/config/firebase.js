import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzWXWDtlFY49RIoZSZgfQ3hMtuArjO7SE",
  authDomain: "im-ok-hila.firebaseapp.com",
  projectId: "im-ok-hila",
  storageBucket: "im-ok-hila.firebasestorage.app",
  messagingSenderId: "500133632911",
  appId: "1:500133632911:web:3e137c9980fc4ba64509fa"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()

export const isFirebaseConfigured = () => true
