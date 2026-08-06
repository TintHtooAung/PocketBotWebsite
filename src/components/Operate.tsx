import { useState } from 'react'
import SectionHead from './SectionHead'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'

const steps = [
  {
    n: '၁',
    title: 'နားထောင်သည်',
    body: 'သင့်လုပ်ငန်းတွင် မည်သည့်အဆင့် ပိတ်နေသည်၊ မည်သို့ လုပ်နေသည်ကို ဦးစွာ နားထောင်ပါသည်။',
  },
  {
    n: '၂',
    title: 'စိတ်ကြိုက် ပြင်ဆင်သည်',
    body: 'သင့်လုပ်ငန်းစဉ်အတိုင်း မောင်းစနစ်ကို ပြင်ဆင်ပေးသည်။ အလုပ်လမ်းကို အတင်းမပြောင်းပါ။',
  },
  {
    n: '၃',
    title: 'စမ်းသုံး စစ်ဆေးသည်',
    body: 'အဖွဲ့နှင့်အတူ စမ်းသုံးပြီး လိုအပ်သည့်နေရာကို ညှိနှိုင်း ပြင်ဆင်ပါသည်။',
  },
  {
    n: '၄',
    title: 'လည်ပတ် စောင့်ရှောက်သည်',
    body: 'နေ့စဉ် Telegram တွင် သုံးပြီး အချက်အလက်ကို Google Sheets တွင် ပိုင်ဆိုင်ပါသည်။',
  },
]

const capabilities = [
  {
    title: 'စိတ်ကြိုက် လုပ်ငန်းစဉ်',
    body: 'ပုံသေပုံစံသာ မဟုတ်ပါ။ သင့်လုပ်ငန်း၏ အဆင့်များ၊ ခွင့်ပြုချက်များ၊ သတိပေးချက်များကို တပ်ဆင်ပေးနိုင်ပါသည်။',
  },
  {
    title: 'မည်သည့် လုပ်ငန်းမဆို',
    body: 'ဖော်ပြထားသော အမျိုးအစားများအပြင် ကုန်သွယ်ရေး၊ ဝန်ဆောင်မှု၊ ပရဟိတ၊ ရုံးတွင်း လည်ပတ်မှု အစရှိသည်ဖြင့် ဖွင့်လှစ်ထားပါသည်။',
  },
  {
    title: 'ဉာဏ်ရည်တု / အလိုအလျောက်',
    body: 'လိုအပ်ပါက စာသားဖြေကြားခြင်း၊ အလိုအလျောက် စီစဉ်ခြင်း၊ သတိပေးခြင်းတို့ကို ဉာဏ်ရည်တု သို့မဟုတ် အလိုအလျောက် စနစ်နှင့် ပေါင်းစပ်ပေးနိုင်ပါသည်။',
  },
  {
    title: 'အဖွဲ့အစည်း အထူးအစီအစဉ်',
    body: 'ဆိုင်ခွဲများ၊ ဌာနများ၊ အထူးလိုအပ်ချက်များအတွက် သီးခြားအစီအစဉ် ရေးဆွဲပြီး ဈေးနှုန်းကို တောင်းခံနိုင်ပါသည်။',
  },
]

export default function Operate() {
  const [open, setOpen] = useState(0)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead
        title="ဘယ်လို လုပ်ဆောင်သလဲ"
        hint="စိတ်ကြိုက် လုပ်ငန်းစဉ် · တောင်းခံဈေး"
      />

      <p className="mt-3 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        ကျွန်ုပ်တို့သည် သင့်လုပ်ငန်းကို ဦးစွာ နားလည်ပြီး၊ လိုအပ်သော မောင်းစနစ်ကို
        စိတ်ကြိုက် တပ်ဆင်ပေးပါသည်။ ပုံသေ အမျိုးအစားသာ မဟုတ်ဘဲ မည်သည့်
        လည်ပတ်မှုအမျိုးအစားမဆို ဖွင့်လှစ်ထားပါသည်။
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        <div className="grid min-h-0 grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-12 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="panel p-3">
              <p className="font-display text-xl font-bold text-stamp">{s.n}</p>
              <p className="mt-1 text-sm font-bold text-ink">{s.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-faded">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="grid min-h-0 gap-2 lg:col-span-8">
          {capabilities.map((cap, i) => {
            const isOpen = open === i
            return (
              <button
                key={cap.title}
                type="button"
                className="panel panel-interactive w-full p-3 text-left sm:p-4"
                aria-expanded={isOpen}
                onClick={() => setOpen(i)}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-ink sm:text-base">
                    {cap.title}
                  </p>
                  <span className="text-xs text-faded" aria-hidden>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen ? (
                  <p className="mt-2 text-sm leading-relaxed text-faded">
                    {cap.body}
                  </p>
                ) : null}
              </button>
            )
          })}
        </div>

        <aside className="panel flex min-h-0 flex-col justify-between p-4 lg:col-span-4">
          <div>
            <p className="text-[10px] font-bold tracking-wide text-stamp">
              အဖွဲ့အစည်း / အထူးလိုအပ်ချက်
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              စိတ်ကြိုက် လုပ်ငန်းစဉ်၊ ဉာဏ်ရည်တု ပေါင်းစပ်မှု၊ အလိုအလျောက်
              လည်ပတ်မှုတို့ လိုအပ်ပါက သီးခြားအစီအစဉ် ရေးဆွဲပေးပါသည်။ ဈေးနှုန်းကို
              လိုအပ်ချက်အလိုက် တောင်းခံ (quote) ပေးပါသည်။
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-btn px-3 py-2.5 text-center text-xs font-bold"
            >
              ဈေးနှုန်း တောင်းခံရန်
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('page-order')}
              className="ghost-btn px-3 py-2.5 text-xs font-bold"
            >
              ဆက်သွယ်ရေး ပုံစံဖြည့်ရန်
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}
