import { useState, type ComponentType } from 'react'
import SectionHead from './SectionHead'
import {
  IconBell,
  IconBox,
  IconCalendar,
  IconChat,
  IconCheck,
  IconCustomer,
  IconDashboard,
  IconDriver,
  IconLedger,
  IconQueue,
  IconReport,
  IconRoute,
  IconSheets,
  IconShop,
  IconSpark,
  IconTruck,
} from './InkIcons'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'
import { useI18n } from '../lib/i18n'

const sampleIcons: Record<string, ComponentType<{ className?: string }>> = {
  restaurant: IconShop,
  logistics: IconTruck,
  driver: IconDriver,
  'shop-eco': IconDashboard,
  billing: IconBell,
  clinic: IconCalendar,
  tuition: IconSheets,
  customer: IconCustomer,
}

const scenarioIcons: Record<string, ComponentType<{ className?: string }>> = {
  'deliver-chain': IconRoute,
  'ledger-stock': IconLedger,
  'fleet-day': IconTruck,
  'clinic-day': IconCalendar,
}

const MY_NUMS = ['၁', '၂', '၃', '၄', '၅'] as const

type Mode = 'samples' | 'scenarios'

export default function SampleOps() {
  const { t, lang } = useI18n()
  const s = t.samples
  const [mode, setMode] = useState<Mode>('samples')
  const [active, setActive] = useState(s.items[0].id)
  const [sceneId, setSceneId] = useState(s.scenarios[0].id)

  const stepNum = (i: number) =>
    lang === 'my' ? MY_NUMS[i] ?? String(i + 1) : String(i + 1)

  const sample = s.items.find((item) => item.id === active) ?? s.items[0]
  const scenario =
    s.scenarios.find((item) => item.id === sceneId) ?? s.scenarios[0]
  const Icon = sampleIcons[sample.id] ?? IconShop
  const SceneIcon = scenarioIcons[scenario.id] ?? IconRoute

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title={s.title} hint={s.hint} />

      <div className="mt-2 flex shrink-0 flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setMode('samples')}
          className={`px-3 py-1.5 text-xs font-bold ${
            mode === 'samples' ? 'ink-btn' : 'ghost-btn'
          }`}
          aria-pressed={mode === 'samples'}
        >
          {s.tabSamples}
        </button>
        <button
          type="button"
          onClick={() => setMode('scenarios')}
          className={`px-3 py-1.5 text-xs font-bold ${
            mode === 'scenarios' ? 'ink-btn' : 'ghost-btn'
          }`}
          aria-pressed={mode === 'scenarios'}
        >
          {s.tabScenarios}
        </button>
        <p className="text-[11px] text-faded sm:text-xs">
          {mode === 'samples' ? s.hintSamples : s.hintScenarios}
        </p>
      </div>

      {mode === 'samples' ? (
        <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:col-span-3 lg:flex-col lg:overflow-visible lg:pb-0">
            {s.items.map((item) => {
              const selected = item.id === active
              const RailIcon = sampleIcons[item.id] ?? IconShop
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`panel panel-interactive flex min-w-[9rem] shrink-0 items-center gap-2 p-2 text-left lg:min-w-0 ${
                    selected ? 'bg-white ring-2 ring-ink' : ''
                  }`}
                  aria-pressed={selected}
                >
                  <RailIcon className="h-5 w-5 shrink-0 text-ink" />
                  <p className="truncate text-[11px] font-bold text-ink sm:text-xs">
                    {item.trade}
                  </p>
                </button>
              )
            })}
          </div>

          <article className="panel flex min-h-0 flex-col p-3 sm:p-4 lg:col-span-9">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex items-start gap-3">
                <Icon className="h-9 w-9 shrink-0 text-stamp" />
                <div>
                  <p className="text-[10px] font-bold tracking-wide text-stamp">
                    {sample.kind}
                  </p>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {sample.trade}
                  </h3>
                  <p className="mt-1 text-sm text-faded">{sample.blurb}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border border-dashed border-stamp/50 px-2 py-1 text-[10px] font-bold text-stamp">
                <IconChat className="h-4 w-4" />
                {s.chatBadge}
              </div>
            </div>

            <div className="my-3 border-t border-dashed border-ink/40" />

            <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2">
                  <IconQueue className="h-5 w-5 text-ink" />
                  <p className="text-[10px] font-bold tracking-wide text-stamp">
                    {s.flowLabel}
                  </p>
                </div>
                <ol className="mt-2 space-y-1.5">
                  {sample.flow.map((step, i) => (
                    <li
                      key={`${sample.id}-flow-${i}`}
                      className="flex gap-2 border border-dashed border-ink/30 px-2 py-1.5 text-xs text-ink"
                    >
                      <span className="font-display font-bold text-stamp">
                        {stepNum(i)}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-faded">
                  <IconChat className="mt-0.5 h-4 w-4 shrink-0 text-stamp" />
                  {sample.chat}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <IconCheck className="h-5 w-5 text-ink" />
                  <p className="text-[10px] font-bold tracking-wide text-stamp">
                    {s.ticksLabel}
                  </p>
                </div>
                <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {sample.ticks.map((tick, i) => (
                    <li
                      key={`${sample.id}-tick-${i}`}
                      className="flex items-start gap-1.5 text-xs leading-snug text-ink"
                    >
                      <span className="mt-0.5 font-bold text-stamp" aria-hidden>
                        ✓
                      </span>
                      <span>{tick}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 border border-ink/25 px-2 py-0.5 text-[10px] text-faded">
                    <IconSpark className="h-3.5 w-3.5" /> {s.tagAi}
                  </span>
                  <span className="inline-flex items-center gap-1 border border-ink/25 px-2 py-0.5 text-[10px] text-faded">
                    <IconBox className="h-3.5 w-3.5" /> {s.tagStock}
                  </span>
                  <span className="inline-flex items-center gap-1 border border-ink/25 px-2 py-0.5 text-[10px] text-faded">
                    <IconReport className="h-3.5 w-3.5" /> {s.tagReport}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 border-t border-dashed border-ink/40 pt-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-btn px-3 py-2 text-xs font-bold"
              >
                {s.askSample}
              </a>
              <button
                type="button"
                onClick={() => setMode('scenarios')}
                className="ghost-btn px-3 py-2 text-xs font-bold"
              >
                {s.seeScenarios}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('page-features')}
                className="ghost-btn px-3 py-2 text-xs font-bold"
              >
                {s.seeAiFeatures}
              </button>
            </div>
          </article>
        </div>
      ) : (
        <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-12 lg:grid-cols-4">
            {s.scenarios.map((item) => {
              const selected = item.id === sceneId
              const SIcon = scenarioIcons[item.id] ?? IconRoute
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSceneId(item.id)}
                  className={`panel panel-interactive p-3 text-left ${
                    selected ? 'bg-white ring-2 ring-ink' : ''
                  }`}
                  aria-pressed={selected}
                >
                  <SIcon className="h-7 w-7 text-ink" />
                  <p className="mt-2 text-sm font-bold text-ink">{item.title}</p>
                  <p className="mt-1 text-[10px] leading-snug text-faded">
                    {item.engines.join(' · ')}
                  </p>
                </button>
              )
            })}
          </div>

          <article className="panel flex min-h-0 flex-col p-4 lg:col-span-12">
            <div className="flex items-start gap-3">
              <SceneIcon className="h-10 w-10 shrink-0 text-stamp" />
              <div>
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  {s.sceneLabel}
                </p>
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  {scenario.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {scenario.engines.map((eng) => (
                    <span
                      key={eng}
                      className="border border-ink/30 px-2 py-0.5 text-[10px] font-bold text-ink"
                    >
                      {eng}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-3 border-t border-dashed border-ink/40" />

            <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {scenario.story.map((beat, i) => (
                <li
                  key={`${scenario.id}-beat-${i}`}
                  className="border border-dashed border-ink/35 p-3 text-xs leading-relaxed text-ink sm:text-sm"
                >
                  <span className="font-display text-lg font-bold text-stamp">
                    {stepNum(i)}
                  </span>
                  <p className="mt-1">{beat}</p>
                </li>
              ))}
            </ol>

            <div className="mt-3 flex flex-col gap-3 border-t border-dashed border-ink/40 pt-3 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-sm font-medium leading-relaxed text-ink">
                {scenario.result}
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ink-btn px-3 py-2 text-xs font-bold"
                >
                  {s.askScene}
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('page-operate')}
                  className="ghost-btn px-3 py-2 text-xs font-bold"
                >
                  {s.customQuote}
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
