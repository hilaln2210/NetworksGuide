// Server-side Telegram notification — bypasses ad blockers and CORS issues
const TG_TOKEN = '8304893267:AAGfhqu8aGSOcUvAaj-e_c3cA0IozOB5H_I'
const TG_CHAT = '5004258766'

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function formatMins(mins) {
  const n = Number(mins) || 0
  if (n <= 0) return '0 דק׳ (תחילת סשן)'
  if (n < 60) return `${Math.round(n * 10) / 10} דק׳`
  const h = Math.floor(n / 60)
  const m = Math.round(n % 60)
  return m > 0 ? `${h} שע׳ ו-${m} דק׳` : `${h} שע׳`
}

const TAB_LABELS = {
  learn: '📖 למידה',
  quiz: '🎯 חידון',
  labs: '🧪 מעבדות',
  stats: '📊 סטטיסטיקה',
  bugs: '🔧 פותר תקלות',
  credits: 'ℹ️ קרדיטים',
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const {
      type,
      name,
      email,
      course,
      chapter,
      tab,
      sessionMinutes,
      todayMinutes,
      xp,
      level,
      streak,
      lang,
      ua,
      mobile,
    } = JSON.parse(event.body || '{}')

    const now = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem', hour12: false })
    const device = mobile ? '📱 נייד' : '🖥️ מחשב'
    const courseText = escapeHtml(course || '🏠 מסך בחירת מסלול (דף הבית)')
    const tabText = TAB_LABELS[tab] ? ` (${TAB_LABELS[tab]})` : ''
    const chapterLine = chapter ? `\n📑 <b>פרק:</b> ${escapeHtml(chapter)}` : ''

    const sessionStr = formatMins(sessionMinutes)
    const todayNum = Number(todayMinutes) || 0
    const todayStr = todayNum > 0 ? `${Math.round(todayNum * 10) / 10} דק׳` : '0 דק׳'
    const timeLine = `⏱️ <b>זמן סשן:</b> ${sessionStr} | <b>היום:</b> ${todayStr}`

    const statsParts = []
    if (xp !== undefined && xp !== null) statsParts.push(`${xp} XP`)
    if (level) statsParts.push(escapeHtml(level))
    if (Number(streak) > 0) statsParts.push(`🔥 רצף ${streak} ימים`)
    const statsLine = statsParts.length > 0 ? `\n⭐ <b>התקדמות:</b> ${statsParts.join(' · ')}` : ''

    const userLine = (name || email)
      ? `👤 <b>משתמש:</b> ${escapeHtml(name || '?')} (${escapeHtml(email || '?')})`
      : `👤 <b>משתמש:</b> אורח אנונימי`

    let header = '👀 <b>כניסה אנונימית</b>'
    if (type === 'login') {
      header = '🔑 <b>התחברות Google</b>'
    } else if (type === 'course_select') {
      header = '📚 <b>מעבר לקורס / בחירת מסלול</b>'
    } else if (type === 'session_update') {
      header = '⏳ <b>עדכון סשן למידה פעיל</b>'
    } else if (type === 'session_summary') {
      header = '🏁 <b>סיכום סשן למידה</b>'
    }

    let msg
    if (type === 'login') {
      msg = [
        header,
        `👤 ${escapeHtml(name || '?')}`,
        `📧 ${escapeHtml(email || '?')}`,
        `📚 <b>קורס נוכחי:</b> ${courseText}${tabText}${chapterLine}`,
        timeLine + statsLine,
        `${device} | 🌐 ${escapeHtml(lang || '?')}`,
        `🕐 ${now}`,
        `<code>${escapeHtml((ua || '').slice(0, 120))}</code>`,
      ].join('\n')
    } else {
      msg = [
        header,
        userLine,
        `📚 <b>קורס נוכחי:</b> ${courseText}${tabText}${chapterLine}`,
        timeLine + statsLine,
        `${device} | 🌐 ${escapeHtml(lang || '?')}`,
        `🕐 ${now}`,
        `<code>${escapeHtml((ua || '').slice(0, 120))}</code>`,
      ].join('\n')
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
