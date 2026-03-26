import { useState, useMemo, useEffect, useCallback } from 'react'
import { useLang } from '../utils/language.jsx'
import { glossaryTerms } from '../data/glossary.js'
import './Glossary.css'

const CATEGORIES = [
  { key: 'all',        labelEn: 'All',        labelHe: 'הכל' },
  { key: 'networking', labelEn: 'Networking',  labelHe: 'רשתות' },
  { key: 'webapi',     labelEn: 'Web & APIs',  labelHe: 'Web ו-APIs' },
  { key: 'linux',      labelEn: 'Linux',       labelHe: 'לינוקס' },
  { key: 'crypto',     labelEn: 'Crypto',      labelHe: 'קריפטו' },
]

export function Glossary({ isOpen, onClose, lang: langProp }) {
  const { lang: ctxLang } = useLang()
  const lang = langProp || ctxLang || 'he'
  const isEn = lang === 'en'

  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSearch('')
      setActiveCategory('all')
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return glossaryTerms
      .filter(item => {
        if (activeCategory !== 'all' && item.category !== activeCategory) return false
        if (!q) return true
        return (
          item.term.toLowerCase().includes(q) ||
          item.termHe.includes(q) ||
          item.definition.toLowerCase().includes(q) ||
          item.definitionHe.includes(q)
        )
      })
      .sort((a, b) => {
        const aName = isEn ? a.term : a.termHe
        const bName = isEn ? b.term : b.termHe
        return aName.localeCompare(bName, isEn ? 'en' : 'he')
      })
  }, [search, activeCategory, isEn])

  if (!isOpen) return null

  return (
    <div className="glossary-backdrop" onClick={handleBackdropClick}>
      <div className="glossary-modal" dir={isEn ? 'ltr' : 'rtl'}>
        {/* Header */}
        <div className="glossary-header">
          <h3 className="glossary-title">
            {isEn ? 'Glossary' : 'מילון מונחים'}
          </h3>
          <button className="glossary-close-btn" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        {/* Search */}
        <div className="glossary-search-wrap">
          <input
            className="glossary-search"
            type="text"
            placeholder={isEn ? 'Search terms...' : 'חיפוש מונחים...'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            dir={isEn ? 'ltr' : 'rtl'}
          />
        </div>

        {/* Category Filters */}
        <div className="glossary-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`glossary-filter-btn cat-${cat.key}${activeCategory === cat.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {isEn ? cat.labelEn : cat.labelHe}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="glossary-count">
          {filtered.length} {isEn ? 'terms' : 'מונחים'}
        </div>

        {/* Term List */}
        <div className="glossary-list">
          {filtered.length === 0 ? (
            <div className="glossary-empty">
              {isEn ? 'No matching terms found' : 'לא נמצאו מונחים תואמים'}
            </div>
          ) : (
            filtered.map(item => (
              <div className="glossary-item" key={item.term}>
                <div className="glossary-item-header">
                  <span className="glossary-term">
                    {isEn ? item.term : item.termHe}
                  </span>
                  <span className={`glossary-badge badge-${item.category}`}>
                    {CATEGORIES.find(c => c.key === item.category)?.[isEn ? 'labelEn' : 'labelHe']}
                  </span>
                  {!isEn && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      {item.term}
                    </span>
                  )}
                </div>
                <p className="glossary-definition">
                  {isEn ? item.definition : item.definitionHe}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
