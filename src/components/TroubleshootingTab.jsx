import { useState } from 'react'
import { troubleshootingContent, storiesContent } from '../data/troubleshooting'
import { useLang } from '../utils/language.jsx'
import './TroubleshootingTab.css'

export function TroubleshootingTab() {
  const { lang } = useLang()
  const isEn = lang === 'en'
  const [tab, setTab] = useState('bugs')
  const [openId, setOpenId] = useState(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...new Set(troubleshootingContent.map(t => isEn ? (t.categoryEn || t.category) : t.category))]

  const filtered = filter === 'all'
    ? troubleshootingContent
    : troubleshootingContent.filter(t => (isEn ? (t.categoryEn || t.category) : t.category) === filter)

  return (
    <div className="trbl-screen" dir={isEn ? 'ltr' : 'rtl'}>
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

          <div className="trbl-list">
            {filtered.map(item => (
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
