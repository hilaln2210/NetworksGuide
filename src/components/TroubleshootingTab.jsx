import { useState } from 'react'
import { troubleshootingContent, storiesContent } from '../data/troubleshooting'
import './TroubleshootingTab.css'

export function TroubleshootingTab() {
  const [tab, setTab] = useState('bugs')
  const [openId, setOpenId] = useState(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...new Set(troubleshootingContent.map(t => t.category))]

  const filtered = filter === 'all'
    ? troubleshootingContent
    : troubleshootingContent.filter(t => t.category === filter)

  return (
    <div className="trbl-screen">
      <div className="trbl-tabs">
        <button
          className={`trbl-tab ${tab === 'bugs' ? 'active' : ''}`}
          onClick={() => setTab('bugs')}
        >🔧 תקלות נפוצות</button>
        <button
          className={`trbl-tab ${tab === 'stories' ? 'active' : ''}`}
          onClick={() => setTab('stories')}
        >📖 סיפורים</button>
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
                {cat === 'all' ? 'הכל' : cat}
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
                    <span className="trbl-title">{item.title}</span>
                    <span className="trbl-category">{item.category}</span>
                  </div>
                  <span className="trbl-chevron">{openId === item.id ? '▼' : '◀'}</span>
                </button>

                {openId === item.id && (
                  <div className="trbl-body">
                    <div className="trbl-story">
                      <span className="trbl-section-label">📋 הסיפור</span>
                      <p>{item.story}</p>
                    </div>

                    <div className="trbl-causes">
                      <span className="trbl-section-label">❓ סיבות אפשריות</span>
                      <ul>
                        {item.causes.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="trbl-solution">
                      <span className="trbl-section-label">✅ פתרון</span>
                      <pre>{item.solution}</pre>
                    </div>

                    <div className="trbl-tip">
                      {item.tip}
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
                  <h3 className="story-title">{s.title}</h3>
                  <span className="story-category">{s.category}</span>
                </div>
              </div>
              <p className="story-content">{s.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
