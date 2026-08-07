import { useState, type ComponentType } from 'react'
import SectionHead from './SectionHead'
import {
  IconCustomer,
  IconDriver,
  IconShop,
  IconTruck,
} from './InkIcons'
import { TELEGRAM_URL } from '../lib/constants'
import { useI18n } from '../lib/i18n'

const engineIcons: Record<string, ComponentType<{ className?: string }>> = {
  restaurant: IconShop,
  logistics: IconTruck,
  driver: IconDriver,
  customer: IconCustomer,
  'shop-eco': IconShop,
}

export default function Services() {
  const { t } = useI18n()
  const e = t.engines
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title={e.title} hint={e.hint} />

      <p className="mt-2 max-w-3xl shrink-0 text-xs leading-relaxed text-faded sm:text-sm">
        {e.intro}
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {e.items.map((ad) => {
          const isOpen = open === ad.id
          const Icon = engineIcons[ad.id]
          return (
            <article
              key={ad.id}
              className="panel panel-interactive flex min-h-0 flex-col p-3"
              aria-expanded={isOpen}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(isOpen ? null : ad.id)}
              onKeyDown={(ev) => {
                if (ev.key === 'Enter' || ev.key === ' ') {
                  ev.preventDefault()
                  setOpen(isOpen ? null : ad.id)
                }
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-start gap-2">
                  {Icon ? (
                    <Icon className="mt-0.5 h-7 w-7 shrink-0 text-ink" />
                  ) : null}
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-wide text-stamp">
                      {ad.kind}
                    </p>
                    <h3 className="mt-0.5 font-display text-base font-bold leading-snug text-ink sm:text-lg">
                      {ad.trade}
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-faded" aria-hidden>
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              <div className="my-2 border-t border-dashed border-ink/40" />
              <p className="text-xs leading-snug text-ink sm:text-sm">
                {ad.problem}
              </p>

              {isOpen ? (
                <div className="mt-2">
                  <p className="text-xs font-medium leading-snug text-ink sm:text-sm">
                    {ad.fix}
                  </p>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-btn mt-2 inline-block px-2.5 py-1 text-[10px] font-bold"
                    onClick={(ev) => ev.stopPropagation()}
                  >
                    {e.ask}
                  </a>
                </div>
              ) : null}
            </article>
          )
        })}
      </div>

      <p className="mt-2 shrink-0 text-center text-[11px] text-faded sm:text-xs">
        {e.footer}
      </p>
    </div>
  )
}
