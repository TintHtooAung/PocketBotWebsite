import { useState } from 'react'
import SectionHead from './SectionHead'
import { TELEGRAM_URL } from '../lib/constants'

const engines = [
  {
    trade: 'စားသောက်ဆိုင်',
    kind: 'ဆိုင်လည်ပတ်ရေး',
    problem: 'တန်းရှည် · မှာယူမှု ရောထွေး · ပစ္စည်းကုန်မှ သိ',
    fix: 'တန်းစီ · မှာယူမှု လွှဲပြောင်း · ပစ္စည်းကုန် သတိပေး — အလုပ်လမ်း မပြောင်းဘဲ ချောမွေ့',
  },
  {
    trade: 'ကျူရှင် / ကျောင်းရုံး',
    kind: 'ပညာရေးရုံး',
    problem: 'ကျောင်းသားစာရင်း · အတန်း · မိဘဖုန်းခေါ် မနိုင်',
    fix: 'စာရင်း၊ တက်ရောက်မှု၊ ရုံးအလုပ် — Telegram မှာ လည်ပတ်',
  },
  {
    trade: 'ကြေးကောက်ခံမှု',
    kind: 'ငွေကောက်ခံရေး',
    problem: 'ဘယ်သူ ပေးပြီး/မပေး · လိုက်တောင်း မနိုင်',
    fix: 'ရက်ချိန်း · ပြေစာ · အလိုအလျောက် သတိပေး — အလုပ်မရပ်',
  },
  {
    trade: 'အသင်းဝင် / အားကစားရုံ',
    kind: 'အသင်းဝင်',
    problem: 'သက်တမ်းကုန်မှ သိ · ဝင်ရောက်မှတ် ရောထွေး',
    fix: 'ဝင်ရောက်မှတ် · သက်တမ်းတိုး · သတိပေး — စနစ်ကြီး မလို',
  },
  {
    trade: 'အိမ်ငှားခ',
    kind: 'အိမ်ငှား',
    problem: 'ငှားရမ်းသူစာရင်း · နောက်ကျငွေ လိုက်တောင်း',
    fix: 'လစဉ် အချိန်ဇယားနှင့် ယဉ်ကျေးသော သတိပေးချက်',
  },
  {
    trade: 'ဆေးခန်း / အလှပြင်ဆိုင်',
    kind: 'ရက်ချိန်း',
    problem: 'ရက်ချိန်း ထပ် · Facebook စကားရော',
    fix: 'အချိန်ကွက် ချိန်း · သတိပေး · ရှေ့တန်း တန်းစီ',
  },
]

export default function Services() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead
        title="လုပ်ငန်းအမျိုးအစား"
        hint="ဥပမာများ · အခြားအမျိုးအစားလည်း ဖွင့်လှစ်ထားပါသည်"
      />

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {engines.map((ad) => {
          const isOpen = open === ad.trade
          return (
            <article
              key={ad.trade}
              className="panel panel-interactive flex min-h-0 flex-col p-3 sm:p-4"
              aria-expanded={isOpen}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(isOpen ? null : ad.trade)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpen(isOpen ? null : ad.trade)
                }
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] font-bold tracking-wide text-stamp">
                    {ad.kind}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink">
                    {ad.trade}
                  </h3>
                </div>
                <span className="text-xs text-faded" aria-hidden>
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              <div className="my-2 border-t border-dashed border-ink/40" />
              <p className="text-sm leading-snug text-ink">{ad.problem}</p>

              {isOpen ? (
                <div className="mt-3">
                  <p className="text-sm font-medium leading-snug text-ink">
                    {ad.fix}
                  </p>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-btn mt-3 inline-block px-3 py-1.5 text-[11px] font-bold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    ဒီအမျိုးအစား မေးရန်
                  </a>
                </div>
              ) : null}
            </article>
          )
        })}
      </div>

      <p className="mt-3 shrink-0 text-center text-xs text-faded">
        မပါသေးသော လုပ်ငန်းလား။ စိတ်ကြိုက် လုပ်ငန်းစဉ်ဖြင့် တပ်ဆင်ပေးနိုင်ပါသည် —
        “ဘယ်လိုလုပ်” ကဏ္ဍတွင် ဖတ်ရှုနိုင်ပါသည်။
      </p>
    </div>
  )
}
