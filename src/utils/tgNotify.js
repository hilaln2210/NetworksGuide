// Sends notifications via server-side Netlify Function
// This bypasses ad blockers and CORS issues that block direct Telegram API calls

function send(data) {
  fetch('/.netlify/functions/notify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch(() => {})
}

export function notifyVisit() {
  try {
    send({
      type: 'visit',
      lang: navigator.language || '',
      ua: navigator.userAgent.slice(0, 120),
      mobile: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),
    })
  } catch {}
}

export function notifyLogin(user) {
  try {
    send({
      type: 'login',
      name: user.displayName || '',
      email: user.email || '',
    })
  } catch {}
}
