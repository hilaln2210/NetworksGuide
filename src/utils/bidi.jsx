/**
 * bidi.jsx — RTL/LTR mixing utilities
 *
 * Strategy:
 * 1. Split text on Hebrew character runs.
 * 2. Wrap non-Hebrew ASCII segments in <span dir="ltr" unicode-bidi:embed>.
 * 3. After each LTR span, inject U+200F (RTL mark) to anchor trailing
 *    punctuation (". ", ": ", ", ") back into the RTL flow — preventing
 *    the classic reordering bug where "Segment. שכבת" renders as ". Segmentשכבת".
 */

// Hebrew + Arabic strong-RTL characters
const HEBREW_RE = /[\u0590-\u05ff\ufb1d-\ufb4f\u0600-\u06ff]+/g

/**
 * renderBidiText(text) → React children array
 * Usage: <p dir="auto">{renderBidiText(someText)}</p>
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
      parts.push(
        <span key={k} dir="ltr" style={{ unicodeBidi: 'embed' }}>
          {seg}
        </span>
      )
      // RTL mark after LTR span — keeps following punctuation in RTL flow
      parts.push('\u200F')
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
 * Use for HTML strings rendered with dangerouslySetInnerHTML.
 */
export function processHtmlBidi(html) {
  if (!html) return html

  const SKIP_RE = /(<(?:pre|code)[^>]*>[\s\S]*?<\/(?:pre|code)>|<span\s+dir="ltr"[^>]*>[\s\S]*?<\/span>)/gi
  const segments = html.split(SKIP_RE)

  return segments.map((seg, i) => {
    if (i % 2 === 1) return seg

    return seg.replace(/>([^<]+)</g, (full, textNode) => {
      const processed = textNode.replace(
        /([\u0590-\u05ff\ufb1d-\ufb4f\u0600-\u06ff]+)|([^\u0590-\u05ff\ufb1d-\ufb4f\u0600-\u06ff]+)/g,
        (m, heb, ltr) => {
          if (heb) return heb
          if (ltr && /[A-Za-z0-9]/.test(ltr)) {
            const inner = ltr.trim()
            const leading = ltr.slice(0, ltr.indexOf(inner[0]))
            const trailing = ltr.slice(ltr.lastIndexOf(inner[inner.length - 1]) + 1)
            // \u200F after closing span anchors following punctuation to RTL
            return `${leading}<span dir="ltr" style="unicode-bidi:embed">${inner}</span>\u200F${trailing}`
          }
          return ltr || ''
        }
      )
      return `>${processed}<`
    })
  }).join('')
}
