import { useMemo, useState, type ComponentType } from 'react'
import ModuleInfoModal from './ModuleInfoModal'
import ModulePicker from './ModulePicker'
import SectionHead from './SectionHead'
import {
  IconBell,
  IconBook,
  IconBox,
  IconBuilding,
  IconCalendar,
  IconCustomer,
  IconDriver,
  IconKey,
  IconLedger,
  IconLink,
  IconQr,
  IconQueue,
  IconRoute,
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
  'taxi-town': IconDriver,
  'taxi-highway': IconRoute,
  'ride-dispatch': IconRoute,
  'food-delivery': IconBox,
  pharmacy: IconBox,
  salon: IconCalendar,
  laundry: IconTicket,
  'water-delivery': IconTruck,
  'chit-fund': IconLedger,
}

const stepNums = {
  my: ['၁', '၂', '၃', '၄'],
  en: ['1', '2', '3', '4'],
}

const segmentOrder = ['shop', 'fleet', 'member', 'office'] as const

export default function Services() {
  const { t, lang } = useI18n()
  const e = t.engines
  const c = t.common
  const [active, setActive] = useState(e.items[0]?.id ?? 'restaurant')
  const [modalOpen, setModalOpen] = useState(false)
  const item = e.items.find((i) => i.id === active) ?? e.items[0]
  const Icon = engineIcons[item.id] ?? IconShop
  const nums = stepNums[lang]

  const segmentLabels: Record<(typeof segmentOrder)[number], string> = {
    shop: e.segmentShop,
    fleet: e.segmentFleet,
    member: e.segmentMember,
    office: e.segmentOffice,
  }

  const segmentById = useMemo(
    () => Object.fromEntries(e.items.map((i) => [i.id, i.segment])),
    [e.items],
  )

  const pickerItems = useMemo(
    () =>
      e.items.map((s) => ({
        id: s.id,
        label: s.trade,
        kind: s.kind,
        meta: `${s.priceFrom}${c.perMonth}`,
      })),
    [e.items, c.perMonth],
  )

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
        <p className="mt-2 text-[10px] leading-relaxed text-faded">{e.toolsNote}</p>
      </aside>

      <div className="mt-3 min-h-0 flex-1 overflow-auto">
        <ModulePicker
          items={pickerItems}
          active={active}
          onSelect={setActive}
          onOpen={() => setModalOpen(true)}
          segmentOrder={segmentOrder}
          segmentLabels={segmentLabels}
          getSegment={(id) => segmentById[id] ?? 'shop'}
          icons={engineIcons}
          allLabel={lang === 'my' ? 'အားလုံး' : 'All'}
        />
        <p className="mt-2 text-center text-[11px] text-faded sm:text-xs">
          {lang === 'my'
            ? 'လုပ်ငန်း တစ်ခုကို နှိပ်ပြီး အသေးစိတ် ကြည့်ပါ။'
            : 'Tap a module to open details.'}
        </p>
      </div>

      <p className="mt-2 shrink-0 text-center text-[11px] text-faded sm:text-xs">
        {e.footer}
      </p>

      <ModuleInfoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={item.trade}
        kind={item.kind}
        hook={item.hook}
        Icon={Icon}
        footer={
          <div className="flex flex-wrap items-center gap-2">
            <div className="mr-auto border border-dashed border-stamp/50 px-2.5 py-1.5">
              <p className="text-[9px] font-bold tracking-wide text-stamp">
                {e.priceFromLabel}
              </p>
              <p className="font-display text-lg font-bold text-ink">
                {item.priceFrom}
                <span className="text-xs font-normal text-faded">
                  {c.perMonth}
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setModalOpen(false)
                scrollToSection('page-rates', { product: item.id })
              }}
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
        }
      >
        <div className="border border-stamp/40 bg-newsprint/50 px-3 py-2.5">
          <p className="text-[10px] font-bold tracking-wide text-stamp">
            {e.whyLabel}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink">
            {item.whyLight}
          </p>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
      </ModuleInfoModal>
    </div>
  )
}
