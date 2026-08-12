import { useEffect, useMemo, useState } from 'react'
import HowItWorks from './HowItWorks'
import ModulePicker from './ModulePicker'
import SalePoints from './SalePoints'
import SectionHead from './SectionHead'
import { TELEGRAM_URL } from '../lib/constants'
import { useI18n } from '../lib/i18n'

type TierId = 'basic' | 'pro' | 'enterprise' | 'custom'

const segmentOrder = ['shop', 'fleet', 'member', 'office'] as const

export default function Pricing() {
  const { t, lang } = useI18n()
  const p = t.pricing
  const c = t.common
  const e = t.engines
  const [picked, setPicked] = useState('restaurant')
  const [tierId, setTierId] = useState<TierId>('basic')

  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<{ product?: string }>).detail?.product
      if (!id) return
      if (p.products.some((x) => x.id === id)) {
        setPicked(id)
        setTierId('basic')
      }
    }
    window.addEventListener('pricing:select', onSelect)
    return () => window.removeEventListener('pricing:select', onSelect)
  }, [p.products])

  useEffect(() => {
    setTierId('basic')
  }, [picked])

  const product = p.products.find((x) => x.id === picked) ?? p.products[0]
  const tier = product.tiers.find((x) => x.id === tierId) ?? product.tiers[0]
  const basic = product.tiers.find((x) => x.id === 'basic')
  const isCustom = tier.id === 'custom'
  const displayPrice = isCustom || !tier.price ? p.customPrice : tier.price

  const telegramHref = `${TELEGRAM_URL}?text=${encodeURIComponent(
    isCustom
      ? `${product.name} · ${p.tierNames.custom}`
      : `${product.name} · ${p.tierNames[tier.id]} — ${tier.price}${c.perMonth}`,
  )}`

  const segmentLabels = {
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
      p.products.map((item) => {
        const from = item.tiers.find((x) => x.id === 'basic')?.price
        return {
          id: item.id,
          label: item.name,
          kind: item.blurb,
          meta: from ? `${from}${c.perMonth}` : undefined,
          hot: item.hot,
        }
      }),
    [p.products, c.perMonth],
  )

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title={p.title} hint={p.hint} />

      <SalePoints variant="strip" showPhilosophy className="mt-2" />

      <p className="mt-2 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        {p.intro}
      </p>
      <p className="mt-2 max-w-3xl shrink-0 border-l-2 border-stamp pl-3 text-xs leading-relaxed text-faded sm:text-sm">
        {p.processNote}
      </p>
      <p className="mt-2 max-w-3xl shrink-0 bg-newsprint/60 px-3 py-2 text-xs leading-relaxed text-ink sm:text-sm">
        {p.chooseGuide}
      </p>

      <div className="mt-3 flex min-h-0 flex-1 flex-col gap-3">
        {/* Product picker */}
        <div>
          <p className="text-[10px] font-bold tracking-wide text-stamp">
            {p.productsLabel}
          </p>
          <div className="mt-1.5">
            <ModulePicker
              items={pickerItems}
              active={picked}
              onSelect={setPicked}
              segmentOrder={segmentOrder}
              segmentLabels={segmentLabels}
              getSegment={(id) => segmentById[id] ?? 'shop'}
              hotLabel={c.recommended}
              allLabel={lang === 'my' ? 'အားလုံး' : 'All'}
            />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">
                {product.name}
              </h3>
              <p className="mt-0.5 text-sm text-faded">{product.blurb}</p>
            </div>
            <p className="text-[11px] text-faded">
              {p.goLive} · {p.minNote}
            </p>
          </div>

          {/* Tier cards */}
          <p className="mt-3 text-[10px] font-bold tracking-wide text-stamp">
            {p.tiersLabel}
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {product.tiers.map((tItem) => {
              const active = tItem.id === tierId
              const price =
                tItem.id === 'custom' || !tItem.price
                  ? p.customPrice
                  : tItem.price
              const showPerMonth = tItem.id !== 'custom' && !!tItem.price
              return (
                <button
                  key={tItem.id}
                  type="button"
                  onClick={() => setTierId(tItem.id)}
                  className={`panel panel-interactive flex flex-col p-3 text-left ${
                    active ? 'bg-white ring-2 ring-ink' : ''
                  }`}
                  aria-pressed={active}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-display text-lg font-bold text-ink">
                        {p.tierNames[tItem.id]}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-ink">
                        {p.tierHints[tItem.id]}
                      </p>
                    </div>
                    {tItem.popular ? (
                      <span className="border border-ink/40 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-stamp">
                        {p.popularLabel}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 font-display text-2xl font-bold text-ink">
                    {price}
                    {showPerMonth ? (
                      <span className="text-xs font-normal text-faded">
                        {c.perMonth}
                      </span>
                    ) : null}
                  </p>

                  <div className="mt-2 grid grid-cols-3 gap-1 border-t border-dashed border-ink/30 pt-2">
                    <div>
                      <p className="text-[8px] font-bold text-faded">
                        {p.seatsLabel}
                      </p>
                      <p className="text-[10px] font-bold leading-snug text-ink">
                        {tItem.seats}
                      </p>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-faded">
                        {p.volumeLabel}
                      </p>
                      <p className="text-[10px] font-bold leading-snug text-ink">
                        {tItem.volume}
                      </p>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-faded">
                        {p.branchesLabel}
                      </p>
                      <p className="text-[10px] font-bold leading-snug text-ink">
                        {tItem.branches}
                      </p>
                    </div>
                  </div>

                  <p className="mt-2 text-[9px] font-bold tracking-wide text-stamp">
                    {p.featuresLabel}
                  </p>
                  <ul className="mt-1 space-y-1">
                    {tItem.features.map((line) => (
                      <li
                        key={line}
                        className="flex gap-1.5 text-[11px] leading-snug text-ink"
                      >
                        <span className="text-stamp" aria-hidden>
                          ✓
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-2 text-[9px] font-bold tracking-wide text-faded">
                    {p.limitsLabel}
                  </p>
                  <ul className="mt-1 space-y-1">
                    {tItem.limits.map((line) => (
                      <li
                        key={line}
                        className="flex gap-1.5 text-[10px] leading-snug text-faded"
                      >
                        <span aria-hidden>—</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              )
            })}
          </div>

          {/* Selected CTA */}
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-dashed border-ink/40 pt-3">
            <div className="border border-dashed border-ink/40 bg-newsprint/50 px-3 py-2">
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                {product.name} · {p.tierNames[tier.id]}
              </p>
              <p className="font-display text-2xl font-bold text-ink">
                {displayPrice}
                {!isCustom && tier.price ? (
                  <span className="text-sm font-normal text-faded">
                    {c.perMonth}
                  </span>
                ) : null}
              </p>
            </div>
            <a
              href={telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-btn px-4 py-2.5 text-xs font-bold"
            >
              {isCustom ? p.customCta : p.buyCta}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn px-4 py-2.5 text-xs font-bold"
            >
              {p.startCta}
            </a>
          </div>
          <p className="mt-2 text-[11px] text-faded">{p.prepaidNote}</p>

          {/* Feature matrix */}
          <div className="mt-3 overflow-x-auto">
            <p className="text-[10px] font-bold tracking-wide text-stamp">
              {p.matrixLabel}
            </p>
            <table className="mt-2 w-full min-w-[32rem] border-collapse text-left text-[11px]">
              <thead>
                <tr className="border-b border-ink/30">
                  <th className="py-1.5 pr-2 font-bold text-faded"> </th>
                  {(
                    ['basic', 'pro', 'enterprise', 'custom'] as TierId[]
                  ).map((id) => (
                    <th
                      key={id}
                      className={`px-1.5 py-1.5 font-bold ${
                        tierId === id ? 'text-ink' : 'text-faded'
                      }`}
                    >
                      {p.tierNames[id]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.matrix.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-dashed border-ink/20"
                  >
                    <td className="py-1.5 pr-2 font-medium text-ink">
                      {row.feature}
                    </td>
                    <td
                      className={`px-1.5 py-1.5 ${
                        tierId === 'basic' ? 'font-bold text-ink' : 'text-faded'
                      }`}
                    >
                      {row.basic}
                    </td>
                    <td
                      className={`px-1.5 py-1.5 ${
                        tierId === 'pro' ? 'font-bold text-ink' : 'text-faded'
                      }`}
                    >
                      {row.pro}
                    </td>
                    <td
                      className={`px-1.5 py-1.5 ${
                        tierId === 'enterprise'
                          ? 'font-bold text-ink'
                          : 'text-faded'
                      }`}
                    >
                      {row.enterprise}
                    </td>
                    <td
                      className={`px-1.5 py-1.5 ${
                        tierId === 'custom'
                          ? 'font-bold text-ink'
                          : 'text-faded'
                      }`}
                    >
                      {row.custom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {basic ? (
              <p className="mt-1 text-[10px] text-faded">
                {p.tierNames.basic}: {basic.price}
                {c.perMonth}
              </p>
            ) : null}
          </div>

          <div className="mt-3 grid gap-2 lg:grid-cols-2">
            <aside className="panel p-3">
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                {p.termsLabel}
              </p>
              <ul className="mt-2 space-y-1">
                {p.terms.map((term) => (
                  <li
                    key={term}
                    className="flex gap-2 text-[11px] leading-snug text-ink"
                  >
                    <span className="text-stamp" aria-hidden>
                      ·
                    </span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="flex flex-col gap-2">
              <aside className="panel flex-1 p-3">
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  {p.quoteLabel}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink sm:text-sm">
                  {p.quoteBody}
                </p>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ink-btn mt-2 inline-block px-3 py-1.5 text-[11px] font-bold"
                >
                  {p.quoteCta}
                </a>
              </aside>
              <HowItWorks />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
