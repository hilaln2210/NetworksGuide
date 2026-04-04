const TG_TOKEN = '8304893267:AAGfhqu8aGSOcUvAaj-e_c3cA0IozOB5H_I'
const TG_CHAT  = '5004258766'

function send(msg) {
  fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT, text: msg, parse_mode: 'HTML' }),
  }).catch(() => {})
}

export function notifyVisit() {
  try {
    const now    = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem', hour12: false })
    const lang   = navigator.language || ''
    const ua     = navigator.userAgent.slice(0, 120)
    const mobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? '📱 נייד' : '🖥️ מחשב'
    send(`👀 <b>כניסה ל-NetworksGuide</b>\n${mobile}\n🕐 ${now}\n🌐 שפה: ${lang}\n<code>${ua}</code>`)
  } catch {}
}

export function notifyLogin(user) {
  try {
    const now = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem', hour12: false })
    const name = user.displayName || ''
    const email = user.email || ''
    send(`🔑 <b>התחברות Google</b>\n👤 ${name}\n📧 ${email}\n🕐 ${now}`)
  } catch {}
}
