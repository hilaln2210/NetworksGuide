import { useState, useEffect, useRef, useCallback } from 'react'
import './ChapterNotes.css'

const STORAGE_KEY = 'ng_notes'

const LABELS = {
  he: {
    title: 'הערות אישיות',
    placeholder: 'כתבו כאן הערות לפרק זה...',
    saved: 'נשמר',
    toggle: 'הערות',
    updated: 'עודכן',
  },
  en: {
    title: 'Personal Notes',
    placeholder: 'Write your notes for this chapter...',
    saved: 'Saved',
    toggle: 'Notes',
    updated: 'Updated',
  },
}

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveNoteEntry(key, text) {
  const all = loadNotes()
  if (!text.trim()) {
    delete all[key]
  } else {
    all[key] = { text, updatedAt: new Date().toISOString() }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  return all[key] || null
}

function formatTimestamp(iso, lang) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleString(lang === 'he' ? 'he-IL' : 'en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function ChapterNotes({ trackId, chapterId, lang = 'he' }) {
  const noteKey = trackId + '__' + chapterId
  const labels = LABELS[lang] || LABELS.en

  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [updatedAt, setUpdatedAt] = useState(null)
  const [showSaved, setShowSaved] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)

  const debounceRef = useRef(null)
  const savedTimerRef = useRef(null)
  const fadeTimerRef = useRef(null)

  // Load note when key changes
  useEffect(() => {
    const all = loadNotes()
    const entry = all[noteKey]
    setText(entry?.text || '')
    setUpdatedAt(entry?.updatedAt || null)
    setShowSaved(false)
    setFadingOut(false)
  }, [noteKey])

  const flashSaved = useCallback(() => {
    setShowSaved(true)
    setFadingOut(false)
    if (savedTimerRef.current) clearTimeout(savedTimerRef.current)
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current)
    fadeTimerRef.current = setTimeout(() => setFadingOut(true), 1200)
    savedTimerRef.current = setTimeout(() => {
      setShowSaved(false)
      setFadingOut(false)
    }, 1800)
  }, [])

  const doSave = useCallback((value) => {
    const entry = saveNoteEntry(noteKey, value)
    setUpdatedAt(entry?.updatedAt || null)
    flashSaved()
  }, [noteKey, flashSaved])

  const handleChange = (e) => {
    const val = e.target.value
    setText(val)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => doSave(val), 1000)
  }

  const handleBlur = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    doSave(text)
  }

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      if (savedTimerRef.current) clearTimeout(savedTimerRef.current)
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current)
    }
  }, [])

  const hasNotes = Boolean(text.trim())

  return (
    <>
      <button
        className={`chapter-notes-toggle${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
        title={labels.toggle}
        aria-label={labels.toggle}
      >
        {hasNotes ? '\u{1F4DD}' : '\u{270F}\uFE0F'}
      </button>

      {open && (
        <div className="chapter-notes-panel">
          <div className="chapter-notes-header">
            <h4>{labels.title}</h4>
            <button className="chapter-notes-close" onClick={() => setOpen(false)}>
              \u2715
            </button>
          </div>
          <div className="chapter-notes-body">
            <textarea
              className="chapter-notes-textarea"
              placeholder={labels.placeholder}
              value={text}
              onChange={handleChange}
              onBlur={handleBlur}
              dir={lang === 'he' ? 'rtl' : 'ltr'}
              autoFocus
            />
            <div className="chapter-notes-footer">
              <span>
                {showSaved && (
                  <span className={`chapter-notes-saved${fadingOut ? ' fade-out' : ''}`}>
                    \u2713 {labels.saved}
                  </span>
                )}
              </span>
              <span className="chapter-notes-timestamp">
                {updatedAt ? `${labels.updated}: ${formatTimestamp(updatedAt, lang)}` : ''}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
