import { useI18n } from '../lib/i18n'

type Props = {
  variant?: 'strip' | 'grid'
  showPhilosophy?: boolean
  className?: string
}

export default function SalePoints({
  variant = 'grid',
  showPhilosophy = false,
  className = '',
}: Props) {
  const { t } = useI18n()
  const l = t.landing

  if (variant === 'strip') {
    return (
      <div
        className={`shrink-0 border border-dashed border-stamp/50 bg-newsprint/40 px-3 py-2 ${className}`}
      >
        {showPhilosophy ? (
          <p className="text-xs leading-relaxed text-ink sm:text-sm">
            {l.philosophy}
          </p>
        ) : null}
        <ul
          className={`flex flex-wrap gap-x-3 gap-y-1 ${showPhilosophy ? 'mt-2' : ''}`}
        >
          {l.salePoints.map((point) => (
            <li
              key={point}
              className="flex gap-1.5 text-[10px] font-medium text-ink sm:text-[11px]"
            >
              <span className="text-stamp" aria-hidden>
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <aside
      className={`border border-dashed border-stamp/50 bg-newsprint/40 p-3 ${className}`}
    >
      {showPhilosophy ? (
        <p className="text-[10px] font-bold tracking-wide text-stamp">
          {l.philosophy}
        </p>
      ) : null}
      <ul className={`grid gap-1 sm:grid-cols-2 ${showPhilosophy ? 'mt-2' : ''}`}>
        {l.salePoints.map((point) => (
          <li
            key={point}
            className="flex gap-2 text-[11px] leading-snug text-ink"
          >
            <span className="font-bold text-stamp" aria-hidden>
              ✓
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
