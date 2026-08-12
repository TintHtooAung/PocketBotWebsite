import { useState } from 'react'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'
import { useI18n } from '../lib/i18n'
import SalePoints from './SalePoints'

export default function Hero() {
  const { t, lang } = useI18n()
  const h = t.hero
  const [openWire, setOpenWire] = useState<number | null>(0)
  const today = new Date().toLocaleDateString(lang === 'my' ? 'my-MM' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="shrink-0 triple-rule pb-3">
        <div className="flex flex-wrap items-center justify-end gap-2 text-[10px] text-faded">
          <span>{today}</span>
        </div>

        <div className="mt-2 text-center">
          <h1 className="masthead-flat font-display text-[clamp(3.5rem,12vw,7.5rem)] text-ink">
            PocketX
          </h1>
          <p className="mt-1 text-sm text-faded">{h.brandSub}</p>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-y border-ink py-1.5 text-[10px] font-semibold text-ink">
          {h.ribbons.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
      </header>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        <article className="panel flex flex-col p-4 lg:col-span-8 lg:p-5">
          <p className="w-fit border border-stamp px-1.5 py-0.5 text-[10px] font-bold text-stamp">
            {h.badge}
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl lg:text-[2.05rem]">
            {h.headline}
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink sm:text-[15px]">
            {h.body1}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-faded">
            {h.body2Before} <strong className="text-ink">Telegram</strong>{' '}
            {h.body2Mid}{' '}
            <strong className="text-ink">Google Sheets</strong> {h.body2After}
          </p>

          <SalePoints variant="strip" className="mt-4" />

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-btn px-4 py-2.5 text-xs font-bold"
            >
              {h.ctaTalk}
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('page-rates')}
              className="ghost-btn px-4 py-2.5 text-xs font-bold"
            >
              {h.ctaHow}
            </button>
          </div>
        </article>

        <aside className="flex min-h-0 flex-col gap-2 lg:col-span-4">
          <p className="text-[10px] font-bold text-stamp">{h.wireLabel}</p>
          {h.wire.map((item, i) => {
            const open = openWire === i
            return (
              <button
                key={i}
                type="button"
                className="panel panel-interactive w-full p-3 text-left"
                aria-expanded={open}
                onClick={() => setOpenWire(open ? null : i)}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-stamp">
                    {item.q}
                  </span>
                  <span className="text-[10px] text-faded" aria-hidden>
                    {open ? '−' : '+'}
                  </span>
                </div>
                {open ? (
                  <p className="mt-2 text-sm font-medium text-ink">{item.a}</p>
                ) : null}
              </button>
            )
          })}

          <div className="panel mt-auto p-3">
            <p className="text-[10px] font-bold text-stamp">{h.pledgeLabel}</p>
            <p className="mt-1 text-sm leading-snug text-ink">{h.pledge}</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
