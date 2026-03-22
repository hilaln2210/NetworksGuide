// Pro access codes — stored as SHA-256 hashes so plaintext isn't in source.
// To add a new code: run hashCode('YOUR_CODE') in browser console and add the result here.
// To generate hashes for new codes, use: https://emn178.github.io/online-tools/sha256.html

const VALID_HASHES = [
  '2941df552690c2f34296f703c7573581b09124a0a546a3d71c71cfc82e157d0e', // fbe2a7nw
  '33f079e8bdace029b476096b22f39a9a77d4ed279e68b14db5d305cc95680e2a', // 9h9xdra6
  '30b9a72195e3372c68106bcc88ee5b4bfe970fce37f99c23a45b52cc72733a37', // sq17ovoc
  '1ee6d884dd0d5f5bc8dfc472aa6557b8971a418f80bfe1f3fbcc1ac05967c10b', // 4b8mrc39
  '5fd8850825c56fa2edef28d629be716e62126d9d2ca75beac21e17bb0c6e69e2', // gce5byib
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
