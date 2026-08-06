import { useState } from 'react'
import HowItWorks from './HowItWorks'
import SectionHead from './SectionHead'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'

const plans = [
  {
    name: 'အခြေခံ',
    note: 'အလုပ်ပိတ်နေသော အချက်တစ်ခု',
    price: '$10',
    items: ['မောင်းစနစ် ၁ ခု', 'မှတ်တမ်း ၅၀', '၇ ရက် အခမဲ့ စမ်းသုံး'],
    hot: false,
  },
  {
    name: 'အဆင့်မြင့်',
    note: 'လုပ်ငန်း တိုးချဲ့နေသူ',
    price: '$45',
    items: [
      'မောင်းစနစ် ၃ ခု',
      'မှတ်တမ်း ၅၀၀',
      'စိတ်ကြိုက် အချက်အလက်ကွက်',
      'စတင်အသုံးပြု ညှိနှိုင်းမှု',
    ],
    hot: true,
  },
  {
    name: 'အဖွဲ့အစည်း',
    note: 'ဆိုင်ခွဲ / ဌာနများ',
    price: '$100',
    items: [
      'မောင်းစနစ် ကန့်သတ်မရှိ',
      'Google Sheets ပုံစံ သီးသန့်',
      'စနစ်ချိတ်ဆက်ခွင့်',
      'ဦးစားပေး အကူအညီ',
    ],
    hot: false,
  },
]

export default function Pricing() {
  const [picked, setPicked] = useState('အဆင့်မြင့်')

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title="ဈေးနှုန်း" hint="ပုံမှန်အစီအစဉ် · အထူးတောင်းခံ" />

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        <div className="flex min-h-0 flex-col gap-3 lg:col-span-5">
          <HowItWorks />
          <div className="panel flex flex-1 flex-col justify-between p-4">
            <div>
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                အထူးအစီအစဉ် · ဈေးနှုန်း တောင်းခံ
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                စိတ်ကြိုက် လုပ်ငန်းစဉ်၊ ဉာဏ်ရည်တု ပေါင်းစပ်မှု၊ အလိုအလျောက်
                လည်ပတ်မှု သို့မဟုတ် ဆိုင်ခွဲများစွာ လိုအပ်ပါက ပုံသေဈေးနှင့်
                မဟုတ်ဘဲ လိုအပ်ချက်အလိုက် ရေးဆွဲပြီး ဈေးနှုန်း တောင်းခံပေးပါသည်။
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-btn flex-1 px-3 py-2 text-center text-xs font-bold"
              >
                တောင်းခံရန်
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('page-operate')}
                className="ghost-btn flex-1 px-3 py-2 text-xs font-bold"
              >
                ဘယ်လိုလုပ်ဆောင်သလဲ
              </button>
            </div>
          </div>
        </div>

        <div className="grid min-h-0 grid-cols-1 gap-2 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1 lg:grid-rows-3">
          {plans.map((plan) => {
            const active = picked === plan.name
            return (
              <article
                key={plan.name}
                role="button"
                tabIndex={0}
                onClick={() => setPicked(plan.name)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setPicked(plan.name)
                  }
                }}
                className={`panel panel-interactive flex flex-col justify-between p-3 ${
                  active ? 'bg-white ring-2 ring-ink' : ''
                }`}
                aria-pressed={active}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {plan.hot ? (
                      <p className="text-[9px] font-bold tracking-wide text-stamp">
                        ★ အကြံပြု
                      </p>
                    ) : null}
                    <h3 className="font-display text-lg font-bold text-ink">
                      {plan.name}
                    </h3>
                    <p className="text-[10px] text-faded">{plan.note}</p>
                  </div>
                  <p className="font-display text-2xl font-bold text-ink">
                    {plan.price}
                    <span className="text-xs font-normal text-faded">/လ</span>
                  </p>
                </div>
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink">
                  {plan.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 block py-1.5 text-center text-xs font-bold ${
                    active ? 'ink-btn' : 'ghost-btn'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  စတင်ရန်
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
