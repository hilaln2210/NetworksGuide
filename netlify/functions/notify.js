// Server-side Telegram notification — bypasses ad blockers and CORS issues
const TG_TOKEN = '8304893267:AAGfhqu8aGSOcUvAaj-e_c3cA0IozOB5H_I'
const TG_CHAT = '5004258766'

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { type, name, email, lang, ua, mobile } = JSON.parse(event.body || '{}')
    const now = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem', hour12: false })

    let msg
    if (type === 'login') {
      msg = `🔑 <b>התחברות Google</b>\n👤 ${name || '?'}\n📧 ${email || '?'}\n🕐 ${now}`
    } else {
      const device = mobile ? '📱 נייד' : '🖥️ מחשב'
      msg = `👀 <b>כניסה ל-NetworksGuide</b>\n${device}\n🕐 ${now}\n🌐 שפה: ${lang || '?'}\n<code>${(ua || '').slice(0, 120)}</code>`
    }

    await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT, text: msg, parse_mode: 'HTML' }),
    })

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: 'ok'
    }
  } catch (e) {
    return { statusCode: 500, body: e.message }
  }
}
