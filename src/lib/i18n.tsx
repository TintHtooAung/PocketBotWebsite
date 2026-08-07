import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Copy, type Lang } from './copy'

const STORAGE_KEY = 'pocketx-lang'

type I18nValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Copy
  isEn: boolean
}

const I18nContext = createContext<I18nValue | null>(null)

function readStoredLang(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'my') return v
  } catch {
    /* ignore */
  }
  return 'my'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    typeof window !== 'undefined' ? readStoredLang() : 'my',
  )

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'my' ? 'en' : 'my')
  }, [lang, setLang])

  useEffect(() => {
    document.documentElement.lang = lang === 'my' ? 'my' : 'en'
    document.title =
      lang === 'my'
        ? 'PocketX Gazette — လုပ်ငန်းလည်ပတ်ရေး သတင်းစာ'
        : 'PocketX Gazette — Business operations edition'
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle,
      t: copy[lang],
      isEn: lang === 'en',
    }),
    [lang, setLang, toggle],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
