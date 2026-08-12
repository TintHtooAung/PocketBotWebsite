import { useEffect, useMemo, useState, type ComponentType } from 'react'
import { IconShop } from './InkIcons'

export type ModulePickerItem = {
  id: string
  label: string
  kind?: string
  meta?: string
  hot?: boolean
}

type Props = {
  items: ModulePickerItem[]
  active: string
  onSelect: (id: string) => void
  /** Fired only on user chip click (not segment auto-switch). */
  onOpen?: (id: string) => void
  segmentOrder: readonly string[]
  segmentLabels: Record<string, string>
  getSegment: (id: string) => string
  icons?: Record<string, ComponentType<{ className?: string }>>
  hotLabel?: string
  allLabel?: string
  /** Extra classes on the chip grid (e.g. max-height + scroll). */
  chipsClassName?: string
}

export default function ModulePicker({
  items,
  active,
  onSelect,
  onOpen,
  segmentOrder,
  segmentLabels,
  getSegment,
  icons,
  hotLabel,
  allLabel,
  chipsClassName = '',
}: Props) {
  const [segment, setSegment] = useState<string>('all')

  const filtered = useMemo(() => {
    if (segment === 'all') return items
    return items.filter((item) => getSegment(item.id) === segment)
  }, [items, segment, getSegment])

  useEffect(() => {
    if (segment === 'all') return
    if (filtered.some((item) => item.id === active)) return
    if (filtered[0]) onSelect(filtered[0].id)
  }, [segment, filtered, active, onSelect])

  const tabs = useMemo(
    () => [
      { id: 'all', label: allLabel ?? 'All' },
      ...segmentOrder
        .filter((seg) => items.some((item) => getSegment(item.id) === seg))
        .map((seg) => ({ id: seg, label: segmentLabels[seg] ?? seg })),
    ],
    [allLabel, items, segmentLabels, segmentOrder, getSegment],
  )

  return (
    <div className="shrink-0 space-y-2">
      <div
        className="flex flex-nowrap gap-1 overflow-x-auto border-b border-dashed border-ink/30 pb-2"
        role="tablist"
        aria-label="Segment"
      >
        {tabs.map((tab) => {
          const selected = segment === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setSegment(tab.id)}
              className={`shrink-0 px-2.5 py-1 text-[10px] font-bold tracking-wide transition sm:text-[11px] ${
                selected
                  ? 'bg-ink text-paper'
                  : 'border border-ink/30 bg-paper text-ink hover:bg-newsprint/60'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        className={`grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ${chipsClassName}`}
      >
        {filtered.map((item) => {
          const selected = item.id === active
          const Icon = icons?.[item.id] ?? IconShop
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onSelect(item.id)
                onOpen?.(item.id)
              }}
              aria-pressed={selected}
              className={`panel panel-interactive flex min-w-0 flex-col gap-0.5 p-2 text-left ${
                selected ? 'bg-white ring-2 ring-ink' : ''
              }`}
            >
              <div className="flex min-w-0 items-center gap-1.5">
                <Icon className="h-4 w-4 shrink-0 text-ink" />
                <div className="min-w-0 flex-1">
                  {item.kind ? (
                    <p className="truncate text-[8px] font-bold tracking-wide text-stamp">
                      {item.hot ? (hotLabel ?? '★') : item.kind}
                    </p>
                  ) : null}
                  <p className="truncate text-[11px] font-bold leading-tight text-ink">
                    {item.label}
                  </p>
                </div>
              </div>
              {item.meta ? (
                <p className="truncate pl-5 text-[9px] text-faded">{item.meta}</p>
              ) : null}
            </button>
          )
        })}
      </div>
    </div>
  )

}
