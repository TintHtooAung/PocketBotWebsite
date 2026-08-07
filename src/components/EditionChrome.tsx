import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useEdition } from '../lib/edition'
import { useI18n } from '../lib/i18n'

export default function EditionChrome() {
  const { active, goTo, goNext, goPrev, total } = useEdition()
  const { t } = useI18n()
  const c = t.common
  const [hint, setHint] = useState(true)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'ArrowDown' || e.key === 'j' || e.key === 'PageDown') {
        e.preventDefault()
        goNext()
        setHint(false)
      }
      if (e.key === 'ArrowUp' || e.key === 'k' || e.key === 'PageUp') {
        e.preventDefault()
        goPrev()
        setHint(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  useEffect(() => {
    const timer = window.setTimeout(() => setHint(false), 4000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Single hairline — quiet reading mark, not a progress animation */}
      <div
        className="pointer-events-none fixed top-11 right-0 left-0 z-40 h-px bg-ink/25"
        aria-hidden
      />

      <aside
        className="pointer-events-none fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 md:block"
        aria-label={c.pagesAria}
      >
        <div className="pointer-events-auto flex flex-col items-center gap-2 border border-ink bg-paper/95 px-2 py-3">
          <button
            type="button"
            className="p-0.5 text-ink disabled:opacity-30"
            disabled={active === 0}
            onClick={() => {
              goPrev()
              setHint(false)
            }}
            aria-label={c.prevPage}
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          {t.nav.map((link, i) => (
            <button
              key={link.id}
              type="button"
              className="page-dot"
              aria-label={link.label}
              aria-current={active === i ? 'true' : undefined}
              title={link.label}
              onClick={() => {
                goTo(i)
                setHint(false)
              }}
            />
          ))}
          <button
            type="button"
            className="p-0.5 text-ink disabled:opacity-30"
            disabled={active === total - 1}
            onClick={() => {
              goNext()
              setHint(false)
            }}
            aria-label={c.nextPage}
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </aside>

      {hint ? (
        <p className="pointer-events-none fixed bottom-4 left-1/2 z-40 hidden -translate-x-1/2 border border-ink/60 bg-paper px-3 py-1 text-[11px] text-faded md:block">
          {c.pageHint}
        </p>
      ) : null}
    </>
  )
}
