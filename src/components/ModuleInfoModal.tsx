import { useEffect, type ComponentType, type ReactNode } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  title: string
  kind?: string
  hook?: string
  Icon?: ComponentType<{ className?: string }>
  children: ReactNode
  footer?: ReactNode
}

export default function ModuleInfoModal({
  open,
  onClose,
  title,
  kind,
  hook,
  Icon,
  children,
  footer,
}: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-ink/45"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="module-info-title"
        className="panel relative z-10 flex max-h-[min(88svh,40rem)] w-full max-w-2xl flex-col overflow-hidden bg-paper shadow-[0_12px_40px_rgba(28,25,20,0.25)]"
      >
        <header className="flex shrink-0 items-start gap-3 border-b border-dashed border-ink/40 p-3 sm:p-4">
          {Icon ? <Icon className="h-10 w-10 shrink-0 text-stamp" /> : null}
          <div className="min-w-0 flex-1">
            {kind ? (
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                {kind}
              </p>
            ) : null}
            <h3
              id="module-info-title"
              className="font-display text-xl font-bold text-ink sm:text-2xl"
            >
              {title}
            </h3>
            {hook ? (
              <p className="mt-1 text-sm font-medium leading-snug text-ink">
                {hook}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ghost-btn shrink-0 px-2.5 py-1.5 text-xs font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-auto p-3 sm:p-4">{children}</div>

        {footer ? (
          <footer className="shrink-0 border-t border-dashed border-ink/40 p-3 sm:p-4">
            {footer}
          </footer>
        ) : null}
      </div>
    </div>
  )
}
