import { useState } from 'react'
import SectionHead from './SectionHead'
import { IconSpark } from './InkIcons'
import { TELEGRAM_URL } from '../lib/constants'
import { useI18n } from '../lib/i18n'

export default function Pricing() {
  const { t } = useI18n()
  const p = t.pricing
  const c = t.common
  const [picked, setPicked] = useState('pro')
  const [aiPicked, setAiPicked] = useState('ai-addon')

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title={p.title} hint={p.hint} />

      <p className="mt-2 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        {p.intro}
      </p>

      <div className="mt-3 flex min-h-0 flex-1 flex-col gap-3">
        {/* Core plans — pay → get */}
        <div>
          <p className="text-[10px] font-bold tracking-wide text-stamp">
            {p.coreLabel}
          </p>
          <div className="mt-2 grid gap-2 md:grid-cols-3">
            {p.core.map((plan) => {
              const active = picked === plan.id
              return (
                <article
                  key={plan.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setPicked(plan.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setPicked(plan.id)
                    }
                  }}
                  className={`panel panel-interactive flex flex-col p-3 sm:p-4 ${
                    active ? 'bg-white ring-2 ring-ink' : ''
                  }`}
                  aria-pressed={active}
                >
                  {plan.hot ? (
                    <p className="text-[9px] font-bold tracking-wide text-stamp">
                      {c.recommended}
                    </p>
                  ) : (
                    <p className="text-[9px] font-bold tracking-wide text-faded">
                      &nbsp;
                    </p>
                  )}
                  <h3 className="font-display text-xl font-bold text-ink">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-faded">
                    {plan.forWho}
                  </p>

                  <div className="mt-3 border border-dashed border-ink/35 bg-newsprint/40 px-3 py-2">
                    <p className="text-[10px] font-bold tracking-wide text-stamp">
                      {p.youPay}
                    </p>
                    <p className="font-display text-3xl font-bold text-ink">
                      {plan.price}
                      <span className="text-sm font-normal text-faded">
                        {c.perMonth}
                      </span>
                    </p>
                  </div>

                  <div className="mt-3 flex-1">
                    <p className="text-[10px] font-bold tracking-wide text-stamp">
                      {p.youGet}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {plan.gets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-xs leading-snug text-ink sm:text-sm"
                        >
                          <span className="font-bold text-stamp" aria-hidden>
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 block py-2 text-center text-xs font-bold ${
                      active ? 'ink-btn' : 'ghost-btn'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.startCta}
                  </a>
                </article>
              )
            })}
          </div>
        </div>

        {/* Optional AI */}
        <div>
          <div className="flex items-center gap-2">
            <IconSpark className="h-5 w-5 text-stamp" />
            <p className="text-[10px] font-bold tracking-wide text-stamp">
              {p.aiLabel}
            </p>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-faded">{p.aiIntro}</p>

          <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {p.ai.map((plan) => {
              const active = aiPicked === plan.id
              return (
                <article
                  key={plan.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setAiPicked(plan.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setAiPicked(plan.id)
                    }
                  }}
                  className={`panel panel-interactive flex flex-col p-3 sm:p-4 ${
                    active ? 'bg-white ring-2 ring-ink' : ''
                  }`}
                  aria-pressed={active}
                >
                  <h3 className="font-display text-lg font-bold text-ink">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-faded">{plan.forWho}</p>

                  <div className="mt-3 border border-dashed border-ink/35 bg-newsprint/40 px-3 py-2">
                    <p className="text-[10px] font-bold tracking-wide text-stamp">
                      {p.youPay}
                    </p>
                    <p className="font-display text-2xl font-bold text-ink">
                      {plan.price}
                      <span className="text-sm font-normal text-faded">
                        {c.perMonth}
                      </span>
                    </p>
                  </div>

                  <div className="mt-3 flex-1">
                    <p className="text-[10px] font-bold tracking-wide text-stamp">
                      {p.youGet}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {plan.gets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-xs leading-snug text-ink"
                        >
                          <span className="font-bold text-stamp" aria-hidden>
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 block py-1.5 text-center text-xs font-bold ${
                      active ? 'ink-btn' : 'ghost-btn'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.aiStart}
                  </a>
                </article>
              )
            })}

            <aside className="panel flex flex-col justify-between p-3 sm:p-4">
              <div>
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  {p.quoteLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {p.quoteBody}
                </p>
              </div>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-btn mt-3 block py-2 text-center text-xs font-bold"
              >
                {p.quoteCta}
              </a>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
