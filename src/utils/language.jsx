import { createContext, useContext, useState, useCallback } from 'react'
import { uiStrings } from '../data/ui-strings'

const LangContext = createContext({ lang: 'he', setLang: () => {}, t: (k) => k })

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('ng_lang') || 'he' } catch { return 'he' }
  })

  const setLang = useCallback((l) => {
    setLangState(l)
    try { localStorage.setItem('ng_lang', l) } catch {}
  }, [])

  const t = useCallback((key) => {
    return uiStrings[key]?.[lang] || uiStrings[key]?.he || key
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
