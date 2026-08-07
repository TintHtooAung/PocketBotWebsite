import { useI18n } from '../lib/i18n'

/** Compact steps used inside the pricing page. */
export default function HowItWorks() {
  const { t } = useI18n()
  const h = t.howItWorks

  return (
    <div className="shrink-0">
      <h3 className="font-display text-lg font-bold text-ink">{h.title}</h3>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {h.steps.map((s) => (
          <div key={s.n} className="panel p-2.5" tabIndex={0}>
            <p className="font-display text-lg font-bold text-stamp">{s.n}</p>
            <p className="mt-0.5 text-sm font-bold text-ink">{s.title}</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-faded">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
