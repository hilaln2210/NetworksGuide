import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import './SearchBar.css'

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function getSnippet(text, query, snippetLen = 80) {
  const lower = text.toLowerCase()
  const qLower = query.toLowerCase()
  const idx = lower.indexOf(qLower)
  if (idx < 0) return text.slice(0, snippetLen * 2)
  const start = Math.max(0, idx - snippetLen)
  const end = Math.min(text.length, idx + query.length + snippetLen)
  let snippet = ''
  if (start > 0) snippet += '...'
  snippet += text.slice(start, end)
  if (end < text.length) snippet += '...'
  return snippet
}

function highlightMatch(text, query) {
  if (!query) return text
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escapedQuery})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part)
      ? <mark key={i} className="search-highlight">{part}</mark>
      : part
  )
}

const MAX_RESULTS = 20

export function SearchBar({ tracks, onGoToResult, lang, t }) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(0)
  const inputRef = useRef(null)
  const dropdownRef = useRef(null)
  const containerRef = useRef(null)
  const isRtl = lang === 'he'

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300)
    return () => clearTimeout(timer)
  }, [query])

  // Build search index
  const searchIndex = useMemo(() => {
    const entries = []
    if (!tracks) return entries
    for (const track of tracks) {
      if (!track.chapters || track.chapters.length === 0) continue
      for (let ci = 0; ci < track.chapters.length; ci++) {
        const ch = track.chapters[ci]
        for (let pi = 0; pi < ch.pages.length; pi++) {
          const pg = ch.pages[pi]
          const plainContent = stripHtml(pg.content)
          entries.push({
            trackId: track.id,
            trackTitle: track.title,
            trackIcon: track.icon,
            chapterIdx: ci,
            chapterTitle: ch.title,
            pageIdx: pi,
            pageTitle: pg.title,
            plainContent,
            searchText: `${ch.title} ${pg.title} ${plainContent}`.toLowerCase(),
          })
        }
      }
    }
    return entries
  }, [tracks])

  // Search results
  const results = useMemo(() => {
    if (!debouncedQuery || debouncedQuery.length < 2) return []
    const q = debouncedQuery.toLowerCase()
    const matched = []
    for (const entry of searchIndex) {
      if (entry.searchText.includes(q)) {
        matched.push(entry)
        if (matched.length >= MAX_RESULTS) break
      }
    }
    return matched
  }, [debouncedQuery, searchIndex])

  // Reset selection on results change
  useEffect(() => {
    setSelectedIdx(0)
  }, [results])

  // Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        setIsOpen(true)
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        setQuery('')
        inputRef.current?.blur()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen])

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen])

  // Scroll selected item into view
  useEffect(() => {
    if (!dropdownRef.current) return
    const item = dropdownRef.current.children[selectedIdx]
    if (item) item.scrollIntoView({ block: 'nearest' })
  }, [selectedIdx])

  const handleSelect = useCallback((entry) => {
    onGoToResult(entry.trackId, entry.chapterIdx, entry.pageIdx)
    setIsOpen(false)
    setQuery('')
    inputRef.current?.blur()
  }, [onGoToResult])

  const handleKeyDown = (e) => {
    if (!isOpen || results.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIdx(i => (i + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIdx(i => (i - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      handleSelect(results[selectedIdx])
    }
  }

  const showDropdown = isOpen && debouncedQuery.length >= 2

  return (
    <div className="search-bar-container" ref={containerRef} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="search-input-wrap">
        <svg className="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <line x1="13" y1="13" x2="18" y2="18" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder={t('search_placeholder')}
          value={query}
          onChange={e => { setQuery(e.target.value); setIsOpen(true) }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <button className="search-clear" onClick={() => { setQuery(''); setDebouncedQuery(''); inputRef.current?.focus() }}>
            &times;
          </button>
        )}
        <kbd className="search-kbd">{navigator.platform?.includes('Mac') ? '\u2318' : 'Ctrl'}+K</kbd>
      </div>

      {showDropdown && (
        <div className="search-dropdown" ref={dropdownRef}>
          {results.length === 0 ? (
            <div className="search-no-results">{t('search_no_results')}</div>
          ) : (
            results.map((entry, i) => {
              const snippet = getSnippet(entry.plainContent, debouncedQuery)
              return (
                <button
                  key={`${entry.trackId}-${entry.chapterIdx}-${entry.pageIdx}`}
                  className={`search-result-item ${i === selectedIdx ? 'selected' : ''}`}
                  onClick={() => handleSelect(entry)}
                  onMouseEnter={() => setSelectedIdx(i)}
                >
                  <div className="search-result-header">
                    <span className="search-result-track">{entry.trackIcon} {entry.trackTitle}</span>
                    <span className="search-result-sep">/</span>
                    <span className="search-result-chapter">{entry.chapterTitle}</span>
                  </div>
                  <div className="search-result-title">
                    {highlightMatch(entry.pageTitle, debouncedQuery)}
                  </div>
                  <div className="search-result-snippet">
                    {highlightMatch(snippet, debouncedQuery)}
                  </div>
                </button>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}
