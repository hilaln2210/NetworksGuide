/**
 * bidi.jsx — RTL/LTR mixing utilities
 *
 * Wraps non-Hebrew segments (that contain ASCII) as a SINGLE <span dir="ltr">.
 * Splitting by Hebrew character runs prevents the bidi reordering bug where
 * wrapping each word in a separate isolated span causes multi-word English
 * phrases like "(Protocol Data Unit)" to display as "(Unit Data Protocol)".
 */

// Hebrew + Arabic strong-RTL characters
const HEBREW_RE = /[\u0590-\u05ff\ufb1d-\ufb4f\u0600-\u06ff]+/g

/**
 * renderBidiText(text) → React children array
 *
 * Splits text on Hebrew character runs. Non-Hebrew segments that contain
 * at least one ASCII letter/digit are wrapped in a single <span dir="ltr">.
 * This keeps multi-word English phrases like "(Protocol Data Unit)" intact.
 *
 * Usage: <p dir="rtl">{renderBidiText(someText)}</p>
 */
export function renderBidiText(text) {
  if (!text || typeof text !== 'string') return text

  const parts = []
  let last = 0
  let key = 0
  const re = new RegExp(HEBREW_RE.source, 'g')
  let match

  const pushNonHebrew = (seg, k) => {
    if (!seg) return
    if (/[A-Za-z0-9]/.test(seg)) {
      // Trim leading/trailing spaces and punctuation OUT of the LTR span.
      // Keeping spaces inside causes them to appear on the wrong visual side
      // when a lone Hebrew preposition (ל, ב, מ...) sits between two LTR spans.
      // Trailing punctuation (?!.,;:) must stay outside so RTL context places it correctly.
      const trimmed = seg.trimStart()
      const leading = seg.slice(0, seg.length - trimmed.length)
      const inner = trimmed.trimEnd()
      const trailing = trimmed.slice(inner.length)
      // Strip leading/trailing punctuation from inner, push outside span
      const leadPuncMatch = inner.match(/^([?!.,;:]+)/)
      const leadPunc = leadPuncMatch ? leadPuncMatch[1] : ''
      const afterLeadPunc = leadPunc ? inner.slice(leadPunc.length) : inner
      const puncMatch = afterLeadPunc.match(/([?!.,;:]+)$/)
      const coreLtr = puncMatch ? afterLeadPunc.slice(0, -puncMatch[1].length) : afterLeadPunc
      const trailingPunc = puncMatch ? puncMatch[1] : ''
      if (leading) parts.push(leading)
      if (leadPunc) parts.push(leadPunc)
      if (coreLtr) {
        parts.push(
          <span key={k} dir="ltr" style={{ unicodeBidi: 'isolate' }}>
            {coreLtr}
          </span>
        )
      }
      if (trailingPunc) parts.push(trailingPunc)
      if (trailing) parts.push(trailing)
    } else {
      parts.push(seg)
    }
  }

  while ((match = re.exec(text)) !== null) {
    pushNonHebrew(text.slice(last, match.index), key++)
    parts.push(match[0])
    last = match.index + match[0].length
  }
  pushNonHebrew(text.slice(last), key++)

  return parts.length > 0 ? parts : text
}

/**
 * processHtmlBidi(html) → html string
 *
 * Use for HTML strings rendered with dangerouslySetInnerHTML.
 * Wraps English/number tokens in <span dir="ltr"> within text nodes,
 * skipping content inside <pre>, <code>, and existing <span dir="ltr"> tags.
 */
export function processHtmlBidi(html) {
  if (!html) return html

  // We process text nodes between tags, but skip <pre>, <code>, <svg>, and existing dir="ltr" spans.
  // <span> inside SVG <text> is invalid and breaks rendering entirely.
  const SKIP_RE = /(<(?:pre|code|svg)[^>]*>[\s\S]*?<\/(?:pre|code|svg)>|<span\s+dir="ltr"[^>]*>[\s\S]*?<\/span>)/gi

  const segments = html.split(SKIP_RE)

  return segments.map((seg, i) => {
    // Odd-indexed segments are the matched (skipped) blocks — leave as-is
    if (i % 2 === 1) return seg

    // For text segments: split each text node on Hebrew runs,
    // wrap non-Hebrew segments containing ASCII as a single <span dir="ltr">
    return seg.replace(/>([^<]+)</g, (full, textNode) => {
      const processed = textNode.replace(
        /([\u0590-\u05ff\ufb1d-\ufb4f\u0600-\u06ff]+)|([^\u0590-\u05ff\ufb1d-\ufb4f\u0600-\u06ff]+)/g,
        (m, heb, ltr) => {
          if (heb) return heb
          if (ltr && /[A-Za-z0-9]/.test(ltr)) {
            const inner = ltr.trim()
            const leading = ltr.slice(0, ltr.indexOf(inner[0]))
            const trailing = ltr.slice(ltr.lastIndexOf(inner[inner.length - 1]) + 1)
            // Strip leading/trailing punctuation from LTR span so RTL places them correctly
            const leadPunc = inner.match(/^([?!.,;:]+)/)
            const afterLead = leadPunc ? inner.slice(leadPunc[1].length) : inner
            const trailPunc = afterLead.match(/([?!.,;:]+)$/)
            const core = trailPunc ? afterLead.slice(0, -trailPunc[1].length) : afterLead
            const lp = leadPunc ? leadPunc[1] : ''
            const tp = trailPunc ? trailPunc[1] : ''
            if (core) {
              return `${leading}${lp}<span dir="ltr">${core}</span>${tp}${trailing}`
            }
            return ltr || ''
          }
          return ltr || ''
        }
      )
      return `>${processed}<`
    })
  }).join('')
}
