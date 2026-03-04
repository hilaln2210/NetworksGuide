/**
 * חשיבה מחוץ לקופסא - תוכן יצירתי ומפתיע
 */
import { useState } from 'react'
import './ThinkOutside.css'

export function ThinkOutsideBox({ title, children, icon = '💡' }) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="think-outside" onClick={() => setCollapsed(!collapsed)}>
      <div className="think-header">
        <span className="think-icon">{icon}</span>
        <span className="think-title">{title}</span>
        <span className="think-toggle">{collapsed ? '◀' : '▼'}</span>
      </div>
      {!collapsed && (
        <div className="think-content">
          {children}
        </div>
      )}
    </div>
  )
}
