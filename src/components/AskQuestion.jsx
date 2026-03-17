import { useState, useEffect, useMemo } from 'react'
import { chapters } from '../data/content'
import './AskQuestion.css'

function buildSearchIndex() {
  const items = []
  chapters.forEach((ch, chIdx) => {
    ch.pages.forEach((p, pgIdx) => {
      const texts = []
      if (p.title) texts.push(p.title)
      if (p.intro) texts.push(stripHtml(p.intro))
      if (p.content) texts.push(stripHtml(p.content))
      if (p.questions) p.questions.forEach(q => { texts.push(q.q); texts.push(q.a) })
      if (p.blocks) p.blocks.forEach(b => { if (b.title) texts.push(b.title); if (b.content) texts.push(stripHtml(b.content)) })
      const fullText = texts.join(' ')
      if (fullText.trim()) {
        items.push({
          chIdx, pgIdx,
          chapterTitle: ch.title,
          pageTitle: p.title || 'עמוד',
          text: fullText,
          words: tokenize(fullText),
          page: p
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
  return text.toLowerCase().replace(/[^\w\u0590-\u05ff\s]/g, ' ').split(/\s+/).filter(w => w.length > 1)
}

function doSearch(query, index) {
  const qWords = tokenize(query)
  if (qWords.length === 0) return []
  return index
    .map(item => {
      const matches = qWords.filter(w => item.words.includes(w)).length
      if (matches === 0) return null
      return { ...item, score: matches / qWords.length }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
}

const QUICK_CHIPS = [
  'TCP vs UDP', 'DNS', 'NAT', 'פורט', 'IP כתובת', 'HTTP HTTPS', 'Handshake', 'Firewall'
]

export function AskQuestion() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const index = useMemo(buildSearchIndex, [])
  const qWords = useMemo(() => query.trim() ? tokenize(query.trim()) : [], [query])

  useEffect(() => {
    if (!query.trim() || query.trim().length < 2) {
      setResults([])
      setShowResults(false)
      return
    }
    const t = setTimeout(() => {
      const found = doSearch(query, index)
      setResults(found)
      setShowResults(true)
    }, 280)
    return () => clearTimeout(t)
  }, [query, index])

  const highlight = (html, words) => {
    if (!words.length) return html
    let out = html
    words.forEach(w => {
      try {
        const re = new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
        out = out.replace(re, '<mark>$1</mark>')
      } catch (_) {}
    })
    return out
  }

  const renderResult = (r, i) => {
    const p = r.page
    const snippetHtml = p.content
      ? highlight(p.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 280) + '...', qWords)
      : p.intro
        ? highlight(stripHtml(p.intro).slice(0, 280) + '...', qWords)
        : ''
    return (
      <div key={i} className="qs-result-item">
        <div className="qs-result-meta">
          <span className="qs-result-ch">פרק {chapters[r.chIdx].id}: {r.chapterTitle}</span>
          <span className="qs-result-title">{r.pageTitle}</span>
        </div>
        {snippetHtml && (
          <p className="qs-result-snippet" dangerouslySetInnerHTML={{ __html: snippetHtml }} />
        )}
      </div>
    )
  }

  return (
    <div className="quick-search">
      <div className="qs-header">
        <span className="qs-icon">🔍</span>
        <span className="qs-title">חיפוש מהיר במדריך</span>
      </div>

      <div className="qs-input-wrap">
        <input
          type="text"
          className="qs-input"
          placeholder="הקלד מונח... TCP, DNS, IP, HTTP, פורט, NAT..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Escape' && setQuery('')}
          dir="rtl"
        />
        {query && (
          <button className="qs-clear" onClick={() => setQuery('')} title="נקה">✕</button>
        )}
      </div>

      {!query && (
        <div className="qs-chips">
          {QUICK_CHIPS.map((c, i) => (
            <button key={i} className="qs-chip" onClick={() => setQuery(c)}>{c}</button>
          ))}
        </div>
      )}

      {showResults && results.length > 0 && (
        <div className="qs-results">
          {results.map(renderResult)}
        </div>
      )}

      {showResults && results.length === 0 && query.trim().length > 1 && (
        <p className="qs-no-results">לא נמצאו תוצאות. נסה מונחים אחרים: IP, TCP, DNS, HTTP, NAT</p>
      )}
    </div>
  )
}
