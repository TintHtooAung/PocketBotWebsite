import { useState, type ComponentType } from 'react'
import SectionHead from './SectionHead'
import {
  IconCustomer,
  IconDriver,
  IconShop,
  IconTruck,
} from './InkIcons'
import { TELEGRAM_URL } from '../lib/constants'

type Engine = {
  trade: string
  kind: string
  problem: string
  fix: string
  Icon?: ComponentType<{ className?: string }>
}

const engines: Engine[] = [
  {
    trade: 'စားသောက်ဆိုင်',
    kind: 'ဆိုင်လည်ပတ်ရေး',
    problem: 'တန်းရှည် · မှာယူမှု ရောထွေး · ပစ္စည်းကုန်မှ သိ',
    fix: 'တန်းစီ · မှာယူမှု လွှဲပြောင်း · ပစ္စည်းကုန် သတိပေး — အလုပ်လမ်း မပြောင်းဘဲ ချောမွေ့',
    Icon: IconShop,
  },
  {
    trade: 'ထောက်ပံ့ပို့ဆောင်ရေး',
    kind: 'ကုန်စည်ပို့ဆောင်',
    problem: 'ပစ္စည်းလမ်းကြောင်း · ပို့ဆောင်အခြေအနေ · ဖောက်သည် အကြောင်းကြား',
    fix: 'မှာယူမှုမှ ပို့ဆောင်ပြီးသည်အထိ တစ်ဆက်တည်း မှတ်တမ်းနှင့် သတိပေး',
    Icon: IconTruck,
  },
  {
    trade: 'ယာဉ်မောင်း / ပို့ဆောင်သူ',
    kind: 'ပို့ဆောင်အဖွဲ့',
    problem: 'လမ်းညွှန် · တာဝန်ခွဲ · အခြေအနေ ပြန်ကြား မနိုင်',
    fix: 'တာဝန်ခွဲဝေ · လမ်းကြောင်း · ပြီးမြောက်မှု — Telegram မှ စီမံ',
    Icon: IconDriver,
  },
  {
    trade: 'ဖောက်သည် လမ်းကြောင်း',
    kind: 'ဖောက်သည်',
    problem: 'မေးခွန်းများ ရောထွေး · အော်ဒါ အခြေအနေ မသိ',
    fix: 'စကားပြောလမ်းကြောင်း တစ်ခု · အခြေအနေ ကြည့်ရှု · သတိပေးချက်',
    Icon: IconCustomer,
  },
  {
    trade: 'ဆိုင် ဂေဟစနစ်',
    kind: 'ဆိုင်တစ်ခုလုံး',
    problem: 'ရှေ့တန်း · ဂိုဒေါင် · ပို့ဆောင် · ငွေ — သီးခြား သီးခြား',
    fix: 'မောင်းစနစ်များ ချိတ်ဆက်ပြီး ဆိုင်တစ်ခုလုံးကို တစ်ခုတည်းအဖြစ် လည်ပတ်',
    Icon: IconShop,
  },
  {
    trade: 'ကြေးကောက်ခံမှု',
    kind: 'ငွေကောက်ခံရေး',
    problem: 'ဘယ်သူ ပေးပြီး/မပေး · လိုက်တောင်း မနိုင်',
    fix: 'ရက်ချိန်း · ပြေစာ · အလိုအလျောက် သတိပေး — အလုပ်မရပ်',
  },
  {
    trade: 'ကျူရှင် / ကျောင်းရုံး',
    kind: 'ပညာရေးရုံး',
    problem: 'ကျောင်းသားစာရင်း · အတန်း · မိဘဖုန်းခေါ် မနိုင်',
    fix: 'စာရင်း၊ တက်ရောက်မှု၊ ရုံးအလုပ် — Telegram မှာ လည်ပတ်',
  },
  {
    trade: 'ဆေးခန်း / ရက်ချိန်း',
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
        hint="ဒေါင်လိုက်များ · ဂေဟစနစ် အခန်းကဏ္ဍ · အခြားအမျိုးအစားလည်း ဖွင့်လှစ်"
      />

      <p className="mt-2 max-w-3xl shrink-0 text-xs leading-relaxed text-faded sm:text-sm">
        လုပ်ငန်းတစ်ခုချင်းစီသာ မဟုတ်ပါ — ယာဉ်မောင်း၊ ဖောက်သည်၊ ဆိုင်၊
        ပို့ဆောင်ရေးတို့ကို တစ်ခုတည်းသော ဂေဟစနစ်အဖြစ် ချိတ်ဆက်နိုင်ပါသည်။
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {engines.map((ad) => {
          const isOpen = open === ad.trade
          const Icon = ad.Icon
          return (
            <article
              key={ad.trade}
              className="panel panel-interactive flex min-h-0 flex-col p-3"
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
                <div className="flex min-w-0 items-start gap-2">
                  {Icon ? (
                    <Icon className="mt-0.5 h-7 w-7 shrink-0 text-ink" />
                  ) : null}
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-wide text-stamp">
                      {ad.kind}
                    </p>
                    <h3 className="mt-0.5 font-display text-base font-bold leading-snug text-ink sm:text-lg">
                      {ad.trade}
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-faded" aria-hidden>
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              <div className="my-2 border-t border-dashed border-ink/40" />
              <p className="text-xs leading-snug text-ink sm:text-sm">
                {ad.problem}
              </p>

              {isOpen ? (
                <div className="mt-2">
                  <p className="text-xs font-medium leading-snug text-ink sm:text-sm">
                    {ad.fix}
                  </p>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-btn mt-2 inline-block px-2.5 py-1 text-[10px] font-bold"
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

      <p className="mt-2 shrink-0 text-center text-[11px] text-faded sm:text-xs">
        မပါသေးသော လုပ်ငန်းလား။ စိတ်ကြိုက် လုပ်ငန်းစဉ်ဖြင့် တပ်ဆင်ပေးနိုင်ပါသည် —
        “ဘယ်လိုလုပ်” နှင့် “အင်္ဂါရပ်” ကဏ္ဍတွင် ဆက်လက် ဖတ်ရှုနိုင်ပါသည်။
      </p>
    </div>
  )
}
