/**
 * bidi.js — RTL/LTR mixing utilities
 *
 * Wraps English/digit sequences in <span dir="ltr"> so that they
 * render correctly inside Hebrew (RTL) paragraphs, preventing
 * bidi reordering of mixed text like "HTTP = 80, HTTPS = 443".
 */

// Matches runs of ASCII letters, digits, and common technical chars
// (excluding trailing spaces/punctuation)
const LTR_RE = /[A-Za-z0-9][A-Za-z0-9\-_.:/@#!%+()=,*\\[\]{}|&^~`'?]*[A-Za-z0-9]|[A-Za-z0-9]/g

/**
 * renderBidiText(text) → React children array
 *
 * Use in JSX where text is a plain string (quiz questions, choices, explanations).
 * Wraps English/number tokens in <span dir="ltr"> for correct visual ordering.
 *
 * Usage: <p dir="rtl">{renderBidiText(someText)}</p>
 */
export function renderBidiText(text) {
  if (!text || typeof text !== 'string') return text

  const parts = []
  let last = 0
  let match
  const re = new RegExp(LTR_RE.source, 'g')

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index))
    }
    parts.push(
      <span key={match.index} dir="ltr" style={{ display: 'inline', unicodeBidi: 'isolate' }}>
        {match[0]}
      </span>
    )
    last = match.index + match[0].length
  }

  if (last < text.length) parts.push(text.slice(last))
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

  // We process text nodes between tags, but skip <pre>...</pre> and <code>...</code>
  // Strategy: split on pre/code blocks, process the rest
  const SKIP_RE = /(<(?:pre|code)[^>]*>[\s\S]*?<\/(?:pre|code)>|<span\s+dir="ltr"[^>]*>[\s\S]*?<\/span>)/gi

  const segments = html.split(SKIP_RE)

  return segments.map((seg, i) => {
    // Odd-indexed segments are the matched (skipped) blocks — leave as-is
    if (i % 2 === 1) return seg

    // For text segments: wrap English/number sequences in text nodes
    // Text nodes are content between > and < that doesn't start/end a tag
    return seg.replace(/>([^<]+)</g, (full, textNode) => {
      const processed = textNode.replace(
        /[A-Za-z0-9][A-Za-z0-9\-_.:/@#!%+()=,*[\]{}|&^~`'?]*[A-Za-z0-9]|[A-Za-z0-9]/g,
        (m) => `<span dir="ltr">${m}</span>`
      )
      return `>${processed}<`
    })
  }).join('')
}
