const TG_TOKEN = '8304893267:AAGfhqu8aGSOcUvAaj-e_c3cA0IozOB5H_I'
const TG_CHAT  = '5004258766'

export function notifyVisit() {
  try {
    const now    = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem', hour12: false })
    const lang   = navigator.language || ''
    const ua     = navigator.userAgent.slice(0, 120)
    const mobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? '📱 נייד' : '🖥️ מחשב'
    const msg    = `👀 <b>כניסה ל-NetworksGuide</b>\n${mobile}\n🕐 ${now}\n🌐 שפה: ${lang}\n<code>${ua}</code>`
    fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT, text: msg, parse_mode: 'HTML' }),
    }).catch(() => {})
  } catch {}
}
