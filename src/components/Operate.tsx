import { useState } from 'react'
import SectionHead from './SectionHead'
import {
  IconBook,
  IconConsult,
  IconLink,
  IconShop,
  IconSpark,
  IconTelegram,
} from './InkIcons'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'
import { useI18n } from '../lib/i18n'

const capIcons = [IconShop, IconSpark, IconLink, IconBook, IconConsult]

export default function Operate() {
  const { t } = useI18n()
  const o = t.operate
  const [open, setOpen] = useState(0)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title={o.title} hint={o.hint} />

      <p className="mt-2 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        {o.intro}
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        <div className="grid min-h-0 grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-12 lg:grid-cols-4">
          {o.steps.map((s) => (
            <div key={s.n} className="panel p-3">
              <p className="font-display text-xl font-bold text-stamp">{s.n}</p>
              <p className="mt-1 text-sm font-bold text-ink">{s.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-faded">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="grid min-h-0 gap-2 lg:col-span-8">
          {o.caps.map((cap, i) => {
            const isOpen = open === i
            const Icon = capIcons[i] ?? IconShop
            return (
              <button
                key={cap.title}
                type="button"
                className="panel panel-interactive w-full p-3 text-left sm:p-4"
                aria-expanded={isOpen}
                onClick={() => setOpen(i)}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-7 w-7 shrink-0 text-ink" />
                  <p className="flex-1 text-sm font-bold text-ink sm:text-base">
                    {cap.title}
                  </p>
                  <span className="text-xs text-faded" aria-hidden>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen ? (
                  <p className="mt-2 pl-9 text-sm leading-relaxed text-faded">
                    {cap.body}
                  </p>
                ) : null}
              </button>
            )
          })}
        </div>

        <aside className="panel flex min-h-0 flex-col justify-between p-4 lg:col-span-4">
          <div>
            <div className="flex items-center gap-2">
              <IconTelegram className="h-7 w-7 text-stamp" />
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                {o.startLabel}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink">{o.startBody}</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-btn px-3 py-2.5 text-center text-xs font-bold"
            >
              {o.freeConsult}
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('page-samples')}
              className="ghost-btn px-3 py-2.5 text-xs font-bold"
            >
              {o.samplesCta}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('page-order')}
              className="ghost-btn px-3 py-2.5 text-xs font-bold"
            >
              {o.formCta}
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}
