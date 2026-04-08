// Sends notifications via server-side Netlify Function
// This bypasses ad blockers and CORS issues that block direct Telegram API calls

let pendingVisit = null

function send(data) {
  fetch('/.netlify/functions/notify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch(() => {})
}

export function notifyVisit() {
  try {
    // Don't send immediately — wait 3s for a possible login to merge with
    pendingVisit = {
      type: 'visit',
      lang: navigator.language || '',
      ua: navigator.userAgent.slice(0, 120),
      mobile: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),
    }
    setTimeout(() => {
      if (pendingVisit) {
        send(pendingVisit)
        pendingVisit = null
      }
    }, 3000)
  } catch {}
}

export function notifyLogin(user) {
  try {
    // Merge with pending visit if exists
    const visit = pendingVisit
    pendingVisit = null // cancel standalone visit
    send({
      type: 'login',
      name: user.displayName || '',
      email: user.email || '',
      lang: visit?.lang || navigator.language || '',
      ua: visit?.ua || navigator.userAgent.slice(0, 120),
      mobile: visit?.mobile ?? /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),
    })
  } catch {}
}
