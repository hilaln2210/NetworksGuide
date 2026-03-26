import { useRef, useCallback, useState } from 'react'
import { getXP, getLevel, getLevelName, getStreak } from '../utils/xp.js'
import { getReadPages, trackChapterId } from '../utils/progress.js'
import './ShareProgress.css'

function getTrackProgress(track) {
  const readPages = getReadPages()
  let totalPages = 0
  let readCount = 0
  for (const ch of track.chapters) {
    totalPages += ch.pages.length
    const key = trackChapterId(track.id, ch.id)
    const read = readPages[key] || {}
    readCount += Object.keys(read).length
  }
  if (totalPages === 0) return 0
  return Math.round((readCount / totalPages) * 100)
}

function drawCard(canvas, { lang, tracks }) {
  const isHe = lang !== 'en'
  const W = 720
  const H = 520
  const activeTracks = tracks.filter(t => !t.locked && t.chapters.length > 0)
  const dynamicH = 520 + Math.max(0, activeTracks.length - 4) * 50
  canvas.width = W
  canvas.height = dynamicH

  const ctx = canvas.getContext('2d')

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, W, dynamicH)
  grad.addColorStop(0, '#0f172a')
  grad.addColorStop(0.5, '#1e293b')
  grad.addColorStop(1, '#0f172a')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, dynamicH)

  // Subtle accent glow top-right
  const glow = ctx.createRadialGradient(W - 80, 80, 10, W - 80, 80, 260)
  glow.addColorStop(0, 'rgba(6,182,212,0.15)')
  glow.addColorStop(1, 'transparent')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, W, dynamicH)

  // Border
  ctx.strokeStyle = 'rgba(6,182,212,0.3)'
  ctx.lineWidth = 2
  ctx.roundRect(6, 6, W - 12, dynamicH - 12, 16)
  ctx.stroke()

  const dir = isHe ? 'rtl' : 'ltr'
  ctx.direction = dir
  ctx.textAlign = isHe ? 'right' : 'left'
  const textX = isHe ? W - 40 : 40

  // Title
  ctx.fillStyle = '#e2e8f0'
  ctx.font = 'bold 26px system-ui, sans-serif'
  ctx.fillText('Interactive IT Guide', textX, 50)

  // XP and Level
  const xp = getXP()
  const levelObj = getLevel(xp)
  const levelName = getLevelName(levelObj, 'male', lang)
  const streak = getStreak()

  ctx.fillStyle = '#06b6d4'
  ctx.font = 'bold 20px system-ui, sans-serif'
  ctx.fillText(`${levelObj.emoji} ${levelName}`, textX, 90)

  ctx.fillStyle = '#94a3b8'
  ctx.font = '16px system-ui, sans-serif'
  const xpLabel = isHe ? `${xp.toLocaleString()} XP` : `${xp.toLocaleString()} XP`
  ctx.fillText(xpLabel, textX, 118)

  // Streak
  if (streak > 0) {
    const streakText = isHe ? `${streak} ${streak === 1 ? 'יום' : 'ימים'} רצף` : `${streak} day streak`
    ctx.fillStyle = '#fbbf24'
    ctx.font = 'bold 16px system-ui, sans-serif'
    const streakX = isHe ? 40 : W - 40
    ctx.textAlign = isHe ? 'left' : 'right'
    ctx.fillText(`🔥 ${streakText}`, streakX, 90)
    // Reset alignment
    ctx.textAlign = isHe ? 'right' : 'left'
  }

  // Separator
  ctx.strokeStyle = 'rgba(148,163,184,0.2)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(40, 140)
  ctx.lineTo(W - 40, 140)
  ctx.stroke()

  // Section title
  ctx.fillStyle = '#e2e8f0'
  ctx.font = 'bold 17px system-ui, sans-serif'
  const tracksTitleText = isHe ? 'התקדמות במסלולים' : 'Track Progress'
  ctx.fillText(tracksTitleText, textX, 170)

  // Track progress bars
  let y = 200
  const barW = W - 120
  const barH = 22
  const barX = 60

  for (const track of activeTracks) {
    const pct = getTrackProgress(track)

    // Track name with icon
    ctx.fillStyle = '#cbd5e1'
    ctx.font = '15px system-ui, sans-serif'
    ctx.textAlign = isHe ? 'right' : 'left'
    const label = `${track.icon} ${track.title}`
    ctx.fillText(label, textX, y)

    // Percentage on opposite side
    ctx.textAlign = isHe ? 'left' : 'right'
    const pctX = isHe ? 40 : W - 40
    ctx.fillStyle = pct === 100 ? '#34d399' : '#94a3b8'
    ctx.font = 'bold 14px system-ui, sans-serif'
    ctx.fillText(`${pct}%`, pctX, y)

    y += 10

    // Bar background
    ctx.fillStyle = 'rgba(148,163,184,0.15)'
    ctx.beginPath()
    ctx.roundRect(barX, y, barW, barH, barH / 2)
    ctx.fill()

    // Bar fill
    if (pct > 0) {
      const fillW = Math.max(barH, (pct / 100) * barW)
      const barGrad = ctx.createLinearGradient(barX, y, barX + fillW, y)
      barGrad.addColorStop(0, track.color || '#06b6d4')
      barGrad.addColorStop(1, pct === 100 ? '#34d399' : '#6366f1')
      ctx.fillStyle = barGrad
      ctx.beginPath()
      ctx.roundRect(barX, y, fillW, barH, barH / 2)
      ctx.fill()
    }

    y += barH + 24
  }

  // Date at bottom
  const now = new Date()
  const dateStr = now.toLocaleDateString(isHe ? 'he-IL' : 'en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
  ctx.fillStyle = '#64748b'
  ctx.font = '13px system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(dateStr, W / 2, dynamicH - 24)

  // Watermark
  ctx.fillStyle = 'rgba(100,116,139,0.4)'
  ctx.font = '11px system-ui, sans-serif'
  ctx.fillText('networksguide.com', W / 2, dynamicH - 8)
}

export function ShareProgress({ lang, tracks }) {
  const canvasRef = useRef(null)
  const [busy, setBusy] = useState(false)
  const isHe = lang !== 'en'

  const handleShare = useCallback(async () => {
    if (busy) return
    setBusy(true)
    try {
      const canvas = canvasRef.current
      if (!canvas) return
      drawCard(canvas, { lang, tracks })

      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
      if (!blob) return

      const file = new File([blob], 'my-progress.png', { type: 'image/png' })

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: 'Interactive IT Guide',
          text: isHe ? 'ההתקדמות שלי ב-Interactive IT Guide' : 'My progress on Interactive IT Guide',
          files: [file],
        })
      } else {
        // Fallback: download as PNG
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'my-progress.png'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Share failed:', err)
      }
    } finally {
      setBusy(false)
    }
  }, [lang, tracks, busy, isHe])

  return (
    <>
      <button className="share-progress-btn" onClick={handleShare} disabled={busy}>
        📤 {isHe ? 'שתף התקדמות' : 'Share Progress'}
      </button>
      <canvas ref={canvasRef} className="share-progress-canvas" />
    </>
  )
}
