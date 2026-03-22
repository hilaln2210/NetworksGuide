// Pro access codes — stored as SHA-256 hashes so plaintext isn't in source.
// To add a new code: run hashCode('YOUR_CODE') in browser console and add the result here.
// To generate hashes for new codes, use: https://emn178.github.io/online-tools/sha256.html

const VALID_HASHES = [
  // Add hashes here — one per line, one per student (or a shared code).
  // Example: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', // code: 123
]

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

const LS_KEY = 'ng_pro_hash'

export async function validateCode(code) {
  const hash = await sha256(code.trim().toLowerCase())
  if (VALID_HASHES.includes(hash)) {
    localStorage.setItem(LS_KEY, hash)
    return true
  }
  return false
}

export function isProUnlocked() {
  const stored = localStorage.getItem(LS_KEY)
  return stored !== null && VALID_HASHES.includes(stored)
}

export function revokeAccess() {
  localStorage.removeItem(LS_KEY)
}

// Dev helper — call in browser console to get the hash for a new code:
// import { hashCode } from './utils/proAccess'
export async function hashCode(code) {
  const h = await sha256(code.trim().toLowerCase())
  console.log(`Code: "${code}" → Hash: "${h}"`)
  return h
}
