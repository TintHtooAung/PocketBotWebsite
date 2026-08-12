import { useState } from 'react'
import SectionHead from './SectionHead'
import SalePoints from './SalePoints'
import { useI18n } from '../lib/i18n'

export default function ReplaceErp() {
  const { t } = useI18n()
  const w = t.why
  const [flipped, setFlipped] = useState<number | null>(0)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title={w.title} hint={w.hint} />

      <p className="mt-3 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        {w.intro}
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {w.panels.map((row, i) => {
          const showGood = flipped === i
          return (
            <button
              key={i}
              type="button"
              className="panel panel-interactive grid min-h-0 grid-rows-[auto_1fr] overflow-hidden text-left"
              aria-expanded={showGood}
              onClick={() => setFlipped(showGood ? null : i)}
            >
              <div className="flex items-center justify-between border-b border-ink bg-newsprint/70 px-4 py-2">
                <p className="text-[10px] font-bold tracking-wide text-faded">
                  {showGood ? w.ourWay : w.oldWay}
                </p>
                <span className="text-[10px] text-faded">
                  {showGood ? '←' : '→'}
                </span>
              </div>
              <div className="flex items-center p-4">
                <p
                  className={`text-sm leading-relaxed ${
                    showGood
                      ? 'font-medium text-ink'
                      : 'text-faded line-through decoration-ink/30'
                  }`}
                >
                  {showGood ? row.good : row.bad}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      <SalePoints showPhilosophy className="mt-3 shrink-0" />
    </div>
  )
}
