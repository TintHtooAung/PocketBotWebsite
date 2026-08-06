import { useState } from 'react'
import SectionHead from './SectionHead'
import { BRAND } from '../lib/constants'

const panels = [
  {
    bad: 'လုပ်ငန်းစီမံစနစ်ကြီး ဝယ်ခြင်း — ဈေးကြီး၊ အချိန်ကြာ၊ ဝန်ထမ်း မလိုက်နိုင်',
    good: 'ရက်အနည်းငယ်အတွင်း စတင်နိုင်ပြီး ပိတ်နေသော အလုပ်တစ်ခုကို ချောမွေ့စေသည်',
  },
  {
    bad: 'စနစ်သစ် သင်ပေးရခြင်း — စကားဝှက် မေ့၊ မသုံးဖြစ်',
    good: 'Telegram ကို သိပြီးသားဖြစ်၍ သင်တန်းဝန်ထုပ် နည်းပါးသည်',
  },
  {
    bad: 'အလုပ်လမ်းကို စနစ်အလိုက် ပြောင်းခိုင်းခြင်း',
    good: 'သင့်လုပ်ငန်းစဉ်အတိုင်း ပြင်ဆင်ပေးသည် — လမ်းမဖျက်ပါ',
  },
  {
    bad: 'နည်းပညာကြောင့် အလုပ်ပိတ်၊ ရှုပ်ထွေး၊ စိုးရိမ်ရ',
    good: 'နည်းပညာက ကူညီမြှင့်တင်ပေးသည် — ပိတ်ဆို့မှု မဖြစ်စေပါ',
  },
]

export default function ReplaceErp() {
  const [flipped, setFlipped] = useState<number | null>(0)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title="ဘာကြောင့်လဲ" hint="အကွက်နှိပ်၍ နှိုင်းယှဉ်ရန်" />

      <p className="mt-3 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        စနစ်ကြီးများ၏ သင်တန်း၊ ကုန်ကျစရိတ်နှင့် အလုပ်လမ်းပြောင်းခိုင်းမှုတို့က
        လုပ်ငန်းကို ပိတ်စေတတ်ပါသည်။ {BRAND} သည် လည်ပတ်မှုကို ချောမွေ့စေရန်
        ကူညီပေးပြီး သင့်လုပ်ငန်းစဉ်ကို လေးစားပါသည်။
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-2">
        {panels.map((row, i) => {
          const showGood = flipped === i
          return (
            <button
              key={row.bad}
              type="button"
              className="panel panel-interactive grid min-h-0 grid-rows-[auto_1fr] overflow-hidden text-left"
              aria-expanded={showGood}
              onClick={() => setFlipped(showGood ? null : i)}
            >
              <div className="flex items-center justify-between border-b border-ink bg-newsprint/70 px-4 py-2">
                <p className="text-[10px] font-bold tracking-wide text-faded">
                  {showGood ? 'ကျွန်ုပ်တို့နည်း' : 'အရင်နည်း'}
                </p>
                <span className="text-[10px] text-faded">
                  {showGood ? '←' : '→'}
                </span>
              </div>
              <div className="flex items-center p-4">
                <p
                  className={`text-sm leading-relaxed ${
                    showGood
                      ? 'font-medium text-ink'
                      : 'text-faded line-through decoration-ink/30'
                  }`}
                >
                  {showGood ? row.good : row.bad}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
