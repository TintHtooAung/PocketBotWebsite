import { useMemo, useState, type ComponentType } from 'react'
import SectionHead from './SectionHead'
import {
  IconBell,
  IconBook,
  IconBuilding,
  IconCalendar,
  IconCustomer,
  IconDriver,
  IconKey,
  IconLink,
  IconQr,
  IconQueue,
  IconSheets,
  IconShop,
  IconTicket,
  IconTruck,
} from './InkIcons'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'
import { useI18n } from '../lib/i18n'

const engineIcons: Record<string, ComponentType<{ className?: string }>> = {
  restaurant: IconShop,
  logistics: IconTruck,
  driver: IconDriver,
  customer: IconCustomer,
  'shop-eco': IconShop,
  billing: IconBell,
  tuition: IconSheets,
  clinic: IconCalendar,
  condo: IconBuilding,
  'book-club': IconBook,
  'gym-studio': IconQr,
  event: IconTicket,
  'coop-order': IconLink,
  rental: IconKey,
}

const stepNums = {
  my: ['၁', '၂', '၃', '၄'],
  en: ['1', '2', '3', '4'],
}

const segmentOrder = ['shop', 'member', 'office'] as const

export default function Services() {
  const { t, lang } = useI18n()
  const e = t.engines
  const [active, setActive] = useState(e.items[0]?.id ?? 'restaurant')
  const item = e.items.find((i) => i.id === active) ?? e.items[0]
  const Icon = engineIcons[item.id] ?? IconShop
  const nums = stepNums[lang]

  const segmentLabels: Record<(typeof segmentOrder)[number], string> = {
    shop: e.segmentShop,
    member: e.segmentMember,
    office: e.segmentOffice,
  }

  const grouped = useMemo(() => {
    return segmentOrder.map((seg) => ({
      id: seg,
      label: segmentLabels[seg],
      items: e.items.filter((i) => i.segment === seg),
    }))
  }, [e.items, segmentLabels])

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title={e.title} hint={e.hint} />

      <p className="mt-2 max-w-3xl shrink-0 text-xs leading-relaxed text-faded sm:text-sm">
        {e.intro}
      </p>

      <aside className="mt-3 shrink-0 border border-dashed border-stamp/50 bg-newsprint/40 p-3">
        <p className="text-[10px] font-bold tracking-wide text-stamp">
          {e.marketLabel}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-ink sm:text-sm">
          {e.marketIntro}
        </p>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {e.marketPoints.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-[11px] leading-snug text-faded"
            >
              <span className="text-stamp" aria-hidden>
                ·
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        {/* Industry rail — grouped by segment */}
        <div className="flex gap-2 overflow-x-auto pb-1 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0">
          {grouped.map((group) =>
            group.items.length ? (
              <div key={group.id} className="shrink-0 lg:shrink">
                <p className="mb-1 hidden text-[9px] font-bold tracking-wide text-stamp lg:block">
                  {group.label}
                </p>
                <div className="flex gap-2 lg:flex-col">
                  {group.items.map((s) => {
                    const selected = s.id === active
                    const RailIcon = engineIcons[s.id] ?? IconShop
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActive(s.id)}
                        className={`panel panel-interactive flex min-w-[10rem] shrink-0 flex-col gap-1 p-2.5 text-left lg:min-w-0 ${
                          selected ? 'bg-white ring-2 ring-ink' : ''
                        }`}
                        aria-pressed={selected}
                      >
                        <div className="flex items-center gap-2">
                          <RailIcon className="h-6 w-6 shrink-0 text-ink" />
                          <div className="min-w-0">
                            <p className="text-[9px] font-bold tracking-wide text-stamp">
                              {s.kind}
                            </p>
                            <p className="truncate text-xs font-bold text-ink sm:text-sm">
                              {s.trade}
                            </p>
                          </div>
                        </div>
                        <p className="line-clamp-2 text-[10px] leading-snug text-faded lg:text-[11px]">
                          {s.problem}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : null,
          )}
        </div>

        {/* Detail — sell + workflow */}
        <article className="panel flex min-h-0 flex-col overflow-auto p-3 sm:p-4 lg:col-span-8">
          <div className="flex items-start gap-3">
            <Icon className="h-10 w-10 shrink-0 text-stamp" />
            <div className="min-w-0">
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                {item.kind}
              </p>
              <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                {item.trade}
              </h3>
              <p className="mt-1 text-sm font-medium leading-snug text-ink">
                {item.hook}
              </p>
            </div>
          </div>

          <div className="my-3 border-t border-dashed border-ink/40" />

          <div className="border border-stamp/40 bg-newsprint/50 px-3 py-2.5">
            <p className="text-[10px] font-bold tracking-wide text-stamp">
              {e.whyLabel}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink">
              {item.whyLight}
            </p>
          </div>

          <div className="mt-3 grid min-h-0 flex-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <IconQueue className="h-5 w-5 text-ink" />
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  {e.flowLabel}
                </p>
              </div>
              <ol className="mt-2 space-y-1.5">
                {item.flow.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-2 border border-dashed border-ink/30 px-2 py-1.5 text-xs leading-snug text-ink sm:text-sm"
                  >
                    <span className="font-display font-bold text-stamp">
                      {nums[i] ?? String(i + 1)}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <IconSheets className="h-5 w-5 text-ink" />
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  {e.getsLabel}
                </p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {item.gets.map((g) => (
                  <li
                    key={g}
                    className="flex gap-2 text-xs leading-snug text-ink sm:text-sm"
                  >
                    <span className="font-bold text-stamp" aria-hidden>
                      ✓
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 border-t border-dashed border-ink/30 pt-2">
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  {e.painLabel}
                </p>
                <p className="mt-1 text-xs leading-snug text-faded">
                  {item.problem}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-dashed border-ink/40 pt-3">
            <div className="mr-auto border border-dashed border-stamp/50 px-2.5 py-1.5">
              <p className="text-[9px] font-bold tracking-wide text-stamp">
                {e.priceFromLabel}
              </p>
              <p className="font-display text-lg font-bold text-ink">
                {item.priceFrom}
                <span className="text-xs font-normal text-faded">
                  {t.common.perMonth}
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                scrollToSection('page-rates', { product: item.id })
              }
              className="ink-btn px-3 py-2 text-xs font-bold"
            >
              {e.priceCta}
            </button>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn px-3 py-2 text-xs font-bold"
            >
              {e.ask}
            </a>
          </div>
        </article>
      </div>

      <p className="mt-2 shrink-0 text-center text-[11px] text-faded sm:text-xs">
        {e.footer}
      </p>
    </div>
  )
}
