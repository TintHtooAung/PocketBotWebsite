import { useState } from 'react'
import SectionHead from './SectionHead'
import {
  IconBook,
  IconConsult,
  IconLink,
  IconShop,
  IconTelegram,
} from './InkIcons'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'

const steps = [
  {
    n: '၁',
    title: 'နားထောင်သည်',
    body: 'သင့်လုပ်ငန်းတွင် မည်သည့်အဆင့် ပိတ်နေသည်၊ မည်သို့ လုပ်နေသည်ကို ဦးစွာ နားထောင်ပါသည်။',
  },
  {
    n: '၂',
    title: 'ဂေဟစနစ် တပ်ဆင်သည်',
    body: 'မောင်းစနစ်များကို ချိတ်ဆက်ပြီး သင့်အလုပ်လမ်းအတိုင်း တစ်ခုတည်းအဖြစ် လည်ပတ်စေသည်။',
  },
  {
    n: '၃',
    title: 'စမ်းသုံး စစ်ဆေးသည်',
    body: 'အဖွဲ့နှင့်အတူ စမ်းသုံးပြီး လိုအပ်သည့်နေရာကို ညှိနှိုင်း ပြင်ဆင်ပါသည်။',
  },
  {
    n: '၄',
    title: 'လည်ပတ် သင်ကြားသည်',
    body: 'နေ့စဉ်သုံး ကိရိယာများပေါ်တွင် မောင်းနိုင်ရန် လက်တွေ့ လေ့ကျင့်ပေးပါသည်။',
  },
]

const capabilities = [
  {
    title: 'တစ်ခုတည်းသော ဂေဟစနစ်',
    body: 'ဆိုင်၊ ဖောက်သည်၊ ယာဉ်မောင်း၊ ပို့ဆောင်ရေး — သီးခြား ကိရိယာများ မဟုတ်ဘဲ မောင်းစနစ်များ အချင်းချင်း ချိတ်ဆက်ပြီး လုပ်ငန်းတစ်ခုလုံး လည်ပတ်ပါသည်။',
    Icon: IconShop,
  },
  {
    title: 'ရှိပြီးသား စနစ်နှင့် ချိတ်ဆက်',
    body: 'အသုံးပြုနေသော POS သို့မဟုတ် အခြားစနစ်ကို စွန့်ပစ်ရန် မလိုအပ်ပါ။ လိုအပ်သည့်နေရာတွင် API ဖြင့် ချိတ်ဆက်ပြီး ဒေတာစီးဆင်းမှုကို ဆက်လက် ထိန်းသိမ်းနိုင်ပါသည်။',
    Icon: IconLink,
  },
  {
    title: 'ဒစ်ဂျစ်တယ် စာတတ်မှု အစီအစဉ်',
    body: 'လုပ်ငန်းရှင်နှင့် အဖွဲ့ကိုယ်တိုင် မောင်းနိုင်ရန် Telegram၊ Google Sheets၊ Calendar အစရှိသည်တို့ကို လက်တွေ့ သင်ကြားပေးပါသည်။ နည်းပညာအဖွဲ့ကိုသာ အားမကိုးရပါ။',
    Icon: IconBook,
  },
  {
    title: 'အခမဲ့ တိုင်ပင်ဆွေးနွေး',
    body: 'စိတ်ကြိုက် လုပ်ငန်းစဉ် မတည်ဆောက်မီ လိုအပ်ချက်ကို နားထောင်ပြီး အကြံပြုချက် ပေးပါသည်။ ဝယ်ယူရန် မဆုံးဖြတ်မီ ရှင်းလင်းစွာ နားလည်နိုင်ပါသည်။',
    Icon: IconConsult,
  },
]

export default function Operate() {
  const [open, setOpen] = useState(0)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead
        title="ဘယ်လို လုပ်ဆောင်သလဲ"
        hint="ဂေဟစနစ် · ချိတ်ဆက်မှု · သင်ကြားရေး · တိုင်ပင်ဆွေးနွေး"
      />

      <p className="mt-2 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        PocketX သည် စနစ်ကြီးအစားထိုးရန် မဟုတ်ပါ — သင်သိပြီးသား ဒစ်ဂျစ်တယ်
        ကိရိယာများပေါ်တွင် လုပ်ငန်းစဉ်ကို အလိုအလျောက် ချိတ်ဆက်ပြီး၊ စျေးကြီးသော
        စနစ်၏ အင်္ဂါရပ်များကို ပေါ့ပါးစွာ ရရှိစေပါသည်။
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
            const Icon = cap.Icon
            return (
              <button
                key={cap.title}
                type="button"
                className="panel panel-interactive w-full p-3 text-left sm:p-4"
                aria-expanded={isOpen}
                onClick={() => setOpen(i)}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-7 w-7 shrink-0 text-ink" />
                  <p className="flex-1 text-sm font-bold text-ink sm:text-base">
                    {cap.title}
                  </p>
                  <span className="text-xs text-faded" aria-hidden>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen ? (
                  <p className="mt-2 pl-9 text-sm leading-relaxed text-faded">
                    {cap.body}
                  </p>
                ) : null}
              </button>
            )
          })}
        </div>

        <aside className="panel flex min-h-0 flex-col justify-between p-4 lg:col-span-4">
          <div>
            <div className="flex items-center gap-2">
              <IconTelegram className="h-7 w-7 text-stamp" />
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                စတင်ရန်
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              စိတ်ကြိုက် လုပ်ငန်းစဉ်၊ POS ချိတ်ဆက်မှု၊ ဉာဏ်ရည်တု ပေါင်းစပ်မှု
              သို့မဟုတ် ဆိုင်ခွဲများအတွက် — ဦးစွာ အခမဲ့ တိုင်ပင်ဆွေးနွေးပြီး
              လိုအပ်ပါက ဈေးနှုန်း တောင်းခံပေးပါသည်။
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-btn px-3 py-2.5 text-center text-xs font-bold"
            >
              အခမဲ့ တိုင်ပင်ရန်
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('page-features')}
              className="ghost-btn px-3 py-2.5 text-xs font-bold"
            >
              အင်္ဂါရပ်များ ကြည့်ရန်
            </button>
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
