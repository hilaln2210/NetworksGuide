import { useState, useMemo, useRef, useEffect } from 'react'
import { troubleshootingContent, storiesContent } from '../data/troubleshooting'
import { useLang } from '../utils/language.jsx'
import './TroubleshootingTab.css'

const QUICK_SEARCHES = [
  { label: 'Connection refused', q: 'connection refused' },
  { label: 'DNS not found', q: 'DNS' },
  { label: '404 / 500', q: '404 500' },
  { label: 'SSL / HTTPS', q: 'SSL HTTPS certificate' },
  { label: 'WiFi slow', q: 'WiFi slow איטי' },
  { label: 'ping fails', q: 'ping' },
  { label: 'CORS error', q: 'CORS' },
  { label: 'Port in use', q: 'port already in use' },
]

const QUICK_SEARCHES_HE = [
  { label: 'חיבור נדחה', q: 'connection refused חיבור נדחה' },
  { label: 'DNS לא עובד', q: 'DNS' },
  { label: 'שגיאות HTTP', q: '404 500 403' },
  { label: 'SSL / HTTPS', q: 'SSL HTTPS certificate אבטחה' },
  { label: 'WiFi איטי', q: 'WiFi איטי חלש' },
  { label: 'ping לא עובד', q: 'ping' },
  { label: 'CORS', q: 'CORS' },
  { label: 'Port תפוס', q: 'port already in use פורט תפוס' },
]

function scoreMatch(item, terms, isEn) {
  let score = 0
  const title = (isEn ? (item.titleEn || item.title) : item.title).toLowerCase()
  const story = (isEn ? (item.storyEn || item.story) : item.story).toLowerCase()
  const causes = (isEn ? (item.causesEn || item.causes) : item.causes).join(' ').toLowerCase()
  const solution = (isEn ? (item.solutionEn || item.solution) : item.solution).toLowerCase()
  const category = (isEn ? (item.categoryEn || item.category) : item.category).toLowerCase()

  for (const term of terms) {
    if (title.includes(term)) score += 10
    if (category.includes(term)) score += 5
    if (causes.includes(term)) score += 3
    if (solution.includes(term)) score += 2
    if (story.includes(term)) score += 1
  }
  return score
}

export function TroubleshootingTab() {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const [tab, setTab] = useState('bugs')
  const [openId, setOpenId] = useState(null)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)

  const categories = ['all', ...new Set(troubleshootingContent.map(t => isEn ? (t.categoryEn || t.category) : t.category))]

  const searchResults = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return null
    const terms = q.split(/\s+/).filter(t => t.length > 1)
    if (!terms.length) return null

    const scored = troubleshootingContent
      .map(item => ({ item, score: scoreMatch(item, terms, isEn) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)

    return scored.map(x => x.item)
  }, [search, isEn])

  const isSearching = searchResults !== null
  const displayList = isSearching
    ? searchResults
    : (filter === 'all'
      ? troubleshootingContent
      : troubleshootingContent.filter(t => (isEn ? (t.categoryEn || t.category) : t.category) === filter))

  const handleQuickSearch = (q) => {
    setSearch(q)
    setTab('bugs')
    inputRef.current?.focus()
  }

  const quickSearches = isEn ? QUICK_SEARCHES : QUICK_SEARCHES_HE

  return (
    <div className="trbl-screen" dir={isEn ? 'ltr' : 'rtl'}>
      {/* Search box */}
      <div className="trbl-search-box">
        <div className="trbl-search-input-wrap">
          <span className="trbl-search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="trbl-search-input"
            placeholder={isEn
              ? 'Paste an error message or describe a problem...'
              : 'הדביקי שגיאה, הודעת error, או תארי בעיה...'}
            value={search}
            onChange={e => setSearch(e.target.value)}
            dir="auto"
          />
          {search && (
            <button className="trbl-search-clear" onClick={() => setSearch('')}>✕</button>
          )}
        </div>
        <div className="trbl-quick-searches">
          {quickSearches.map((qs, i) => (
            <button key={i} className="trbl-quick-btn" onClick={() => handleQuickSearch(qs.q)}>
              {qs.label}
            </button>
          ))}
        </div>
      </div>

      <div className="trbl-tabs">
        <button
          className={`trbl-tab ${tab === 'bugs' ? 'active' : ''}`}
          onClick={() => setTab('bugs')}
        >{isEn ? '🔧 FAQ' : '🔧 שאלות נפוצות'}</button>
        <button
          className={`trbl-tab ${tab === 'stories' ? 'active' : ''}`}
          onClick={() => setTab('stories')}
        >{isEn ? '📖 Stories' : '📖 סיפורים'}</button>
      </div>

      {tab === 'bugs' && (
        <div>
          {!isSearching && (
            <div className="trbl-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`trbl-filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === 'all' ? (isEn ? 'All' : 'הכל') : cat}
                </button>
              ))}
            </div>
          )}

          {isSearching && searchResults.length === 0 && (
            <div className="trbl-no-results">
              <span className="trbl-no-results-icon">🤷</span>
              <p>{isEn
                ? `No results for "${search}". Try different keywords.`
                : `לא נמצאו תוצאות עבור "${search}". נסי מילות חיפוש אחרות.`}
              </p>
            </div>
          )}

          {isSearching && searchResults.length > 0 && (
            <div className="trbl-results-count">
              {isEn
                ? `Found ${searchResults.length} result${searchResults.length > 1 ? 's' : ''}`
                : `נמצאו ${searchResults.length} תוצאות`}
            </div>
          )}

          <div className="trbl-list">
            {displayList.map(item => (
              <div
                key={item.id}
                className={`trbl-card ${openId === item.id ? 'open' : ''}`}
              >
                <button
                  className="trbl-card-header"
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                >
                  <span className="trbl-icon">{item.icon}</span>
                  <div className="trbl-title-wrap">
                    <span className="trbl-title">{isEn ? (item.titleEn || item.title) : item.title}</span>
                    <span className="trbl-category">{isEn ? (item.categoryEn || item.category) : item.category}</span>
                  </div>
                  <span className="trbl-chevron">{openId === item.id ? '▼' : (isEn ? '▶' : '◀')}</span>
                </button>

                {openId === item.id && (
                  <div className="trbl-body">
                    <div className="trbl-story" dir={isEn ? 'ltr' : 'rtl'}>
                      <span className="trbl-section-label">{isEn ? '📋 The Story' : '📋 הסיפור'}</span>
                      <p>{isEn ? (item.storyEn || item.story) : item.story}</p>
                    </div>

                    <div className="trbl-causes" dir={isEn ? 'ltr' : 'rtl'}>
                      <span className="trbl-section-label">{isEn ? '❓ Possible Causes' : '❓ סיבות אפשריות'}</span>
                      <ul>
                        {(isEn ? (item.causesEn || item.causes) : item.causes).map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="trbl-solution" dir={isEn ? 'ltr' : 'rtl'}>
                      <span className="trbl-section-label">{isEn ? '✅ Solution' : '✅ פתרון'}</span>
                      <pre dir="ltr" style={{ textAlign: 'left' }}>{isEn ? (item.solutionEn || item.solution) : item.solution}</pre>
                    </div>

                    <div className="trbl-tip" dir={isEn ? 'ltr' : 'rtl'}>
                      {isEn ? (item.tipEn || item.tip) : item.tip}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'stories' && (
        <div className="trbl-stories">
          {storiesContent.map(s => (
            <div key={s.id} className="story-card">
              <div className="story-header">
                <span className="story-icon">{s.icon}</span>
                <div>
                  <h3 className="story-title">{isEn ? (s.titleEn || s.title) : s.title}</h3>
                  <span className="story-category">{isEn ? (s.categoryEn || s.category) : s.category}</span>
                </div>
              </div>
              <p className="story-content" dir={isEn ? 'ltr' : 'rtl'}>{isEn ? (s.contentEn || s.content) : s.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
