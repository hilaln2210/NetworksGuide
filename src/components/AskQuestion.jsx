/**
 * שאל שאלה – חיפוש בתכני המדריך ותשובה מידית
 */
import { useState, useMemo } from 'react'
import { chapters } from '../data/content'
import './AskQuestion.css'

// בניית אינדקס חיפוש מכל התכנים
function buildSearchIndex() {
  const items = []
  chapters.forEach((ch, chIdx) => {
    ch.pages.forEach((p, pgIdx) => {
      const texts = []
      if (p.title) texts.push(p.title)
      if (p.intro) texts.push(stripHtml(p.intro))
      if (p.content) texts.push(stripHtml(p.content))
      if (p.questions) {
        p.questions.forEach((q) => {
          texts.push(q.q)
          texts.push(q.a)
        })
      }
      if (p.blocks) {
        p.blocks.forEach((b) => {
          if (b.title) texts.push(b.title)
          if (b.content) texts.push(stripHtml(b.content))
        })
      }
      const fullText = texts.join(' ')
      if (fullText.trim()) {
        items.push({
          chIdx,
          pgIdx,
          chapterTitle: ch.title,
          pageTitle: p.title || 'עמוד',
          text: fullText,
          words: tokenize(fullText),
          page: p  // לתוכן מלא
        })
      }
    })
  })
  return items
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\u0590-\u05ff\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1)
}

function search(query, index) {
  const qWords = tokenize(query)
  if (qWords.length === 0) return []

  return index
    .map((item) => {
      const matches = qWords.filter((w) => item.words.includes(w)).length
      if (matches === 0) return null
      return { ...item, score: matches / qWords.length }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 1)  // הסבר אחד ברור לכל שאלה
}

// רינדור תוכן מלא של עמוד
function FullPageContent({ page, highlightWords = [] }) {
  if (!page) return null

  const highlight = (html) => {
    if (!highlightWords.length) return html
    let out = html
    highlightWords.forEach((w) => {
      try {
        const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const re = new RegExp(`(${escaped})`, 'gi')
        out = out.replace(re, '<mark>$1</mark>')
      } catch (_) {}
    })
    return out
  }

  return (
    <div className="ask-full-content">
      {page.intro && (
        <div
          className="ask-content-body"
          dangerouslySetInnerHTML={{ __html: highlight(page.intro) }}
        />
      )}
      {page.content && (
        <div
          className="ask-content-body"
          dangerouslySetInnerHTML={{ __html: highlight(page.content) }}
        />
      )}
      {page.questions?.length > 0 && (
        <div className="ask-questions">
          {page.questions.map((q, i) => (
            <div key={i} className="ask-qa-pair">
              <strong>שאלה:</strong> {q.q}
              <p><strong>תשובה:</strong> {q.a}</p>
            </div>
          ))}
        </div>
      )}
      {page.blocks?.map((b, i) => (
        <div key={i} className="ask-think-block">
          <strong>{b.title}</strong>
          <div
            dangerouslySetInnerHTML={{ __html: highlight(b.content || '') }}
          />
        </div>
      ))}
    </div>
  )
}

export function AskQuestion() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [expanded, setExpanded] = useState(false)

  const index = useMemo(buildSearchIndex, [])

  const handleSearch = (qOverride) => {
    const q = (qOverride ?? query).trim()
    if (!q) {
      setResults([])
      return
    }
    const found = search(q, index)
    setResults(found)
    setExpanded(true)
  }

  const qWords = query.trim() ? tokenize(query.trim()) : []

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="ask-question">
      <button
        type="button"
        className="ask-question-toggle"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="ask-icon">❓</span>
        <span>יש לי שאלה – חפשי בתכני המדריך</span>
        <span className="ask-chevron">{expanded ? '▼' : '◀'}</span>
      </button>
      {expanded && (
        <div className="ask-question-panel">
          <div className="ask-input-row">
            <input
              type="text"
              placeholder="הקלידי שאלה או מילת חיפוש (למשל: מה זה TCP? מה תפקיד DNS?)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              dir="rtl"
            />
            <button type="button" className="ask-search-btn" onClick={handleSearch}>
              🔍 חפשי
            </button>
          </div>
          {results.length > 0 && (
            <div className="ask-results">
              <p className="ask-results-label">הסבר:</p>
              {results.map((r, i) => (
                <div key={i} className="ask-result-item">
                  <div className="ask-result-header">
                    <span className="ask-result-chapter">פרק: {r.chapterTitle}</span>
                    <span className="ask-result-title">{r.pageTitle}</span>
                  </div>
                  <FullPageContent page={r.page} highlightWords={qWords} />
                </div>
              ))}
            </div>
          )}
          {query && results.length === 0 && (
            <p className="ask-no-results">
              לא נמצאו תוצאות. נסי מילים אחרות (למשל: IP, DNS, TCP, HTTP, פורט).
            </p>
          )}
          {!query && (
            <div className="ask-suggestions">
              <p className="ask-hint">לחיצה לשאלה מהירה:</p>
              <div className="ask-suggestion-chips">
                {['מה ההבדל בין TCP ל־UDP?', 'מה תפקיד הפורט?', 'מהו DNS?', 'מה זה NAT?', 'מה מבנה כתובת IP?', 'מה Handshake?'].map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    className="ask-chip"
                    onClick={() => { setQuery(q); handleSearch(q) }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
