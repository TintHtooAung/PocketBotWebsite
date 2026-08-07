import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { PAGE_IDS } from './constants'

export { PAGE_IDS }

type EditionContextValue = {
  active: number
  setActive: (index: number) => void
  goTo: (index: number) => void
  goNext: () => void
  goPrev: () => void
  total: number
}

const EditionContext = createContext<EditionContextValue | null>(null)

export function EditionProvider({ children }: { children: ReactNode }) {
  const [active, setActiveState] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const id = PAGE_IDS[index]
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const goTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, PAGE_IDS.length - 1))
      setActiveState(next)
      scrollToIndex(next)
    },
    [scrollToIndex],
  )

  const setActive = useCallback((index: number) => {
    setActiveState(index)
  }, [])

  const goNext = useCallback(() => {
    goTo(active + 1)
  }, [active, goTo])

  const goPrev = useCallback(() => {
    goTo(active - 1)
  }, [active, goTo])

  useEffect(() => {
    const onGoto = (e: Event) => {
      const id = (e as CustomEvent<{ id: string }>).detail?.id
      if (!id) return
      const index = PAGE_IDS.indexOf(id as (typeof PAGE_IDS)[number])
      if (index < 0) return
      setActiveState(index)
    }
    window.addEventListener('edition:goto', onGoto)
    return () => window.removeEventListener('edition:goto', onGoto)
  }, [])

  const value = useMemo(
    () => ({
      active,
      setActive,
      goTo,
      goNext,
      goPrev,
      total: PAGE_IDS.length,
    }),
    [active, setActive, goTo, goNext, goPrev],
  )

  return (
    <EditionContext.Provider value={value}>{children}</EditionContext.Provider>
  )
}

export function useEdition() {
  const ctx = useContext(EditionContext)
  if (!ctx) throw new Error('useEdition must be used within EditionProvider')
  return ctx
}
