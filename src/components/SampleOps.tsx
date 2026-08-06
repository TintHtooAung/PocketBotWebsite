import { useState, type ComponentType } from 'react'
import SectionHead from './SectionHead'
import {
  IconBell,
  IconCalendar,
  IconCustomer,
  IconDashboard,
  IconDriver,
  IconQueue,
  IconSheets,
  IconShop,
  IconTruck,
} from './InkIcons'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'

type Sample = {
  id: string
  trade: string
  kind: string
  blurb: string
  flow: string[]
  outputs: string[]
  Icon: ComponentType<{ className?: string }>
}

const samples: Sample[] = [
  {
    id: 'restaurant',
    trade: 'စားသောက်ဆိုင်',
    kind: 'ဆိုင်လည်ပတ်ရေး',
    blurb: 'မှာယူမှုမှ ထုတ်ပေးသည်အထိ — တန်းမရှည်၊ စာရင်းမပျောက်။',
    flow: [
      'ဖောက်သည် Telegram မှ မှာယူ',
      'မီးဖို / ရှေ့တန်းသို့ အလိုအလျောက် လွှဲ',
      'အခြေအနေ ပြန်ကြား · ပစ္စည်းကုန် သတိပေး',
      'နေ့စဉ် ရောင်းအား Google Sheets တွင် ပိုင်ဆိုင်',
    ],
    outputs: [
      'တန်းစီနံပါတ် / မှာယူမှု အခြေအနေ',
      'မီးဖိုသို့ လွှဲပြောင်း သတိပေးချက်',
      'ပစ္စည်းကုန် အလိုအလျောက် အကြောင်းကြား',
      'နေ့စဉ် ရောင်းအား မှတ်တမ်း',
      'ဖောက်သည်သို့ ယူရန် သတိပေး',
    ],
    Icon: IconShop,
  },
  {
    id: 'logistics',
    trade: 'ထောက်ပံ့ပို့ဆောင်ရေး',
    kind: 'ကုန်စည်ပို့ဆောင်',
    blurb: 'မှာယူမှုမှ ပို့ဆောင်ပြီးသည်အထိ တစ်ဆက်တည်း မြင်ရပါသည်။',
    flow: [
      'အော်ဒါ / ကုန်ပစ္စည်း လက်ခံ မှတ်တမ်း',
      'ဂိုဒေါင်မှ ထုတ် · ယာဉ်မောင်းသို့ တာဝန်ခွဲ',
      'လမ်းကြောင်း အခြေအနေ ပြန်ကြား',
      'ဖောက်သည်သို့ ပို့ဆောင်ပြီး သတိပေး',
    ],
    outputs: [
      'ပစ္စည်းလမ်းကြောင်း မှတ်တမ်း',
      'ပို့ဆောင်အခြေအနေ (လက်ခံ / လမ်းတွင် / ရောက်ပြီး)',
      'ယာဉ်မောင်း တာဝန်စာရင်း',
      'ဖောက်သည် အကြောင်းကြားချက်',
      'နေ့စဉ် ပို့ဆောင် အစီရင်ခံ',
    ],
    Icon: IconTruck,
  },
  {
    id: 'driver',
    trade: 'ယာဉ်မောင်း / ပို့ဆောင်သူ',
    kind: 'ပို့ဆောင်အဖွဲ့',
    blurb: 'တာဝန်ခွဲ၊ လမ်းညွှန်၊ ပြီးမြောက်မှု — အဖွဲ့တစ်ခုတည်းတွင်။',
    flow: [
      'နေ့စဉ် တာဝန်စာရင်း လက်ခံ',
      'လမ်းကြောင်း / လိပ်စာ ကြည့်ရှု',
      'ရောက်ရှိ · လက်ခံပြီး မှတ်တမ်း',
      'ပိတ်နေသော အချက်များကို ရုံးသို့ ပြန်ကြား',
    ],
    outputs: [
      'တာဝန်ခွဲဝေ စာရင်း',
      'လမ်းညွှန် / လိပ်စာ အချက်အလက်',
      'ပြီးမြောက်မှု မှတ်တမ်း',
      'ပြဿနာ ပြန်ကြားချက်',
      'နေ့စဉ် စွမ်းဆောင်ရည် အကျဉ်း',
    ],
    Icon: IconDriver,
  },
  {
    id: 'shop-eco',
    trade: 'ဆိုင် ဂေဟစနစ်',
    kind: 'ဆိုင်တစ်ခုလုံး',
    blurb: 'ရှေ့တန်း၊ ဂိုဒေါင်၊ ပို့ဆောင်၊ ငွေ — တစ်ခုတည်းအဖြစ် လည်ပတ်။',
    flow: [
      'ဖောက်သည် မှာယူ / ရက်ချိန်း',
      'ဂိုဒေါင် စတော့ စစ် · ရှေ့တန်း လုပ်ဆောင်',
      'ပို့ဆောင် သို့မဟုတ် ဆိုင်တွင် ထုတ်',
      'ငွေမှတ် · အဖွဲ့အစည်း မျက်နှာပြင်တွင် ကြည့်ရှု',
    ],
    outputs: [
      'ဆိုင်ခွဲ / ဌာနအလိုက် ထိန်းချုပ်ရေး မျက်နှာပြင်',
      'ဖောက်သည် သုံးစွဲသူ မျက်နှာပြင်',
      'စတော့ · ရောင်းအား · ပို့ဆောင် တစ်ဆက်တည်း',
      'ငွေစီး / ပြေစာ မှတ်တမ်း',
      'POS သို့မဟုတ် ရှိပြီးသား စနစ်နှင့် ချိတ်ဆက်မှု',
    ],
    Icon: IconDashboard,
  },
  {
    id: 'billing',
    trade: 'ကြေးကောက်ခံမှု',
    kind: 'ငွေကောက်ခံရေး',
    blurb: 'ဘယ်သူ ပေးပြီး၊ ဘယ်သူ ကျန် — လိုက်မတောင်းရအောင်။',
    flow: [
      'ဖောက်သည် / အသင်းဝင် စာရင်း',
      'ရက်ချိန်းအလိုက် ကြေးထုတ်',
      'သတိပေးချက် အလိုအလျောက် ပို့',
      'ပေးပြီး မှတ် · ကျန်စာရင်း ရှင်း',
    ],
    outputs: [
      'ပေးပြီး / မပေး စာရင်း',
      'ရက်ချိန်း သတိပေးချက်',
      'ပြေစာ / လက်ခံမှု မှတ်တမ်း',
      'နောက်ကျသူ စာရင်း',
      'လစဉ် ကောက်ခံ အစီရင်ခံ',
    ],
    Icon: IconBell,
  },
  {
    id: 'clinic',
    trade: 'ဆေးခန်း / ရက်ချိန်း',
    kind: 'ရက်ချိန်း',
    blurb: 'အချိန်ကွက် မထပ်၊ သတိပေးမှန်၊ ရှေ့တန်း တန်းမရှည်။',
    flow: [
      'ဖောက်သည် အချိန်ကွက် ရွေး · ချိန်း',
      'Calendar နှင့် ချိတ်ဆက်',
      'ရက်မတိုင်မီ သတိပေး',
      'တက်ရောက်မှု / ရွှေ့ဆိုင်း မှတ်တမ်း',
    ],
    outputs: [
      'အချိန်ကွက် ဇယား',
      'Calendar ချိတ်ဆက် ရက်ချိန်း',
      'ရက်မတိုင်မီ သတိပေးချက်',
      'တန်းစီ / ခေါ်ယူ စာရင်း',
      'တက်ရောက်မှု မှတ်တမ်း',
    ],
    Icon: IconCalendar,
  },
  {
    id: 'tuition',
    trade: 'ကျူရှင် / ကျောင်းရုံး',
    kind: 'ပညာရေးရုံး',
    blurb: 'ကျောင်းသားစာရင်း၊ အတန်း၊ မိဘအကြောင်းကြား — ရုံးအလုပ် ချောမွေ့။',
    flow: [
      'ကျောင်းသား / အတန်း စာရင်း',
      'တက်ရောက်မှု မှတ်',
      'မိဘသို့ သတိပေး / အကြောင်းကြား',
      'ကြေး · ရက်ချိန်း ရုံးအလုပ်',
    ],
    outputs: [
      'ကျောင်းသား / အတန်း စာရင်း',
      'တက်ရောက်မှု မှတ်တမ်း',
      'မိဘ သတိပေးချက်',
      'ကြေးကောက်ခံ စာရင်း',
      'ရုံး အစီရင်ခံ အကျဉ်း',
    ],
    Icon: IconSheets,
  },
  {
    id: 'customer',
    trade: 'ဖောက်သည် လမ်းကြောင်း',
    kind: 'ဖောက်သည်',
    blurb: 'မေးခွန်း၊ အော်ဒါအခြေအနေ၊ သတိပေး — လမ်းကြောင်းတစ်ခုတည်း။',
    flow: [
      'ဖောက်သည် Telegram မှ ဆက်သွယ်',
      'မေးလေ့ရှိသော မေးခွန်း အလိုအလျောက် ဖြေ',
      'အော်ဒါ / ရက်ချိန်း အခြေအနေ ကြည့်ရှု',
      'လိုအပ်ပါက ဝန်ထမ်းသို့ လွှဲ',
    ],
    outputs: [
      'စကားပြောလမ်းကြောင်း တစ်ခု',
      'အော်ဒါ / ရက်ချိန်း အခြေအနေ မြင်ကွင်း',
      'အလိုအလျောက် အဖြေ / သတိပေး',
      'ဝန်ထမ်းသို့ လွှဲပြောင်း မှတ်တမ်း',
      'ဖောက်သည် သုံးစွဲသူ မျက်နှာပြင်',
    ],
    Icon: IconCustomer,
  },
]

export default function SampleOps() {
  const [active, setActive] = useState(samples[0].id)
  const sample = samples.find((s) => s.id === active) ?? samples[0]
  const Icon = sample.Icon

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead
        title="နမူနာ လည်ပတ်မှု"
        hint="လုပ်ငန်းအလိုက် ရရှိမည့် အထွက်အင်္ဂါရပ်များ"
      />

      <p className="mt-2 max-w-3xl shrink-0 text-xs leading-relaxed text-faded sm:text-sm">
        အောက်ပါတို့သည် ဥပမာများသာ ဖြစ်ပါသည်။ သင့်လုပ်ငန်းစဉ်အတိုင်း
        ပြင်ဆင် တပ်ဆင်နိုင်ပါသည်။
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        {/* Industry rail */}
        <div className="flex gap-2 overflow-x-auto pb-1 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0">
          {samples.map((s) => {
            const selected = s.id === active
            const RailIcon = s.Icon
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={`panel panel-interactive flex min-w-[9.5rem] shrink-0 items-center gap-2 p-2.5 text-left lg:min-w-0 ${
                  selected ? 'bg-white ring-2 ring-ink' : ''
                }`}
                aria-pressed={selected}
              >
                <RailIcon className="h-6 w-6 shrink-0 text-ink" />
                <div className="min-w-0">
                  <p className="text-[9px] font-bold tracking-wide text-stamp">
                    {s.kind}
                  </p>
                  <p className="truncate text-xs font-bold text-ink sm:text-sm">
                    {s.trade}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Detail panel */}
        <article className="panel flex min-h-0 flex-col p-3 sm:p-4 lg:col-span-8">
          <div className="flex items-start gap-3">
            <Icon className="h-10 w-10 shrink-0 text-stamp" />
            <div className="min-w-0">
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                {sample.kind} · နမူနာ
              </p>
              <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                {sample.trade}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-faded">
                {sample.blurb}
              </p>
            </div>
          </div>

          <div className="my-3 border-t border-dashed border-ink/40" />

          <div className="grid min-h-0 flex-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <IconQueue className="h-5 w-5 text-ink" />
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  လည်ပတ်မှု အဆင့်များ
                </p>
              </div>
              <ol className="mt-2 space-y-2">
                {sample.flow.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-2 border border-dashed border-ink/30 px-2 py-1.5 text-xs leading-snug text-ink sm:text-sm"
                  >
                    <span className="font-display font-bold text-stamp">
                      {['၁', '၂', '၃', '၄'][i] ?? String(i + 1)}
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
                  ရရှိမည့် အထွက်အင်္ဂါရပ်များ
                </p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {sample.outputs.map((out) => (
                  <li
                    key={out}
                    className="flex gap-2 text-xs leading-snug text-ink sm:text-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-stamp" aria-hidden />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 border-t border-dashed border-ink/40 pt-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-btn px-3 py-2 text-xs font-bold"
            >
              ဒီနမူနာ မေးရန်
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('page-features')}
              className="ghost-btn px-3 py-2 text-xs font-bold"
            >
              အင်္ဂါရပ်စု ကြည့်ရန်
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('page-operate')}
              className="ghost-btn px-3 py-2 text-xs font-bold"
            >
              စိတ်ကြိုက် တပ်ဆင်ပုံ
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}
