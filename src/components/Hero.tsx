import { useState } from 'react'
import { BRAND_MY, TELEGRAM_URL, scrollToSection } from '../lib/constants'

const wireItems = [
  { q: 'ဘာလဲ', a: 'လုပ်ငန်းစဉ်အတိုင်း ပြင်ဆင်ပေးသော မောင်းစနစ်' },
  { q: 'ဘာကြောင့်', a: 'အလုပ်မပိတ်စေဘဲ လည်ပတ်မှုကို ကူညီသည်' },
  { q: 'ဘယ်လို', a: 'နားထောင် → ပြင်ဆင် → စမ်းသုံး → လည်ပတ်' },
]

export default function Hero() {
  const [openWire, setOpenWire] = useState<string | null>('ဘာလဲ')
  const today = new Date().toLocaleDateString('my-MM', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="shrink-0 triple-rule pb-3">
        <div className="flex flex-wrap items-center justify-end gap-2 text-[10px] text-faded">
          <span>{today}</span>
        </div>

        <div className="mt-2 text-center">
          <h1 className="masthead-flat font-display text-[clamp(3.5rem,12vw,7.5rem)] text-ink">
            PocketX
          </h1>
          <p className="mt-1 text-sm text-faded">
            {BRAND_MY} · လုပ်ငန်းလည်ပတ်ရေး စနစ်
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-y border-ink py-1.5 text-[10px] font-semibold text-ink">
          <span>စနစ်ကြီး မလို</span>
          <span>သင်တန်း မလို</span>
          <span>အလုပ်လမ်း မပြောင်းရ</span>
          <span>Telegram · Google Sheets</span>
        </div>
      </header>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        <article className="panel flex flex-col p-4 lg:col-span-8 lg:p-5">
          <p className="w-fit border border-stamp px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-stamp">
            အဓိက သတင်း
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl lg:text-[2.05rem]">
            လုပ်ငန်းလည်ပတ်မှုကို ချောမွေ့စေသော မောင်းစနစ်။
          </h2>

          <p className="drop-cap mt-4 max-w-3xl text-sm leading-relaxed text-ink sm:text-[15px]">
            ကြေးကောက်ခံခြင်း၊ တန်းစီခြင်း၊ အသင်းဝင် စီမံခြင်း၊ အိမ်ငှားခ
            စောင့်ကြည့်ခြင်း၊ ရက်ချိန်းယူခြင်း အစရှိသည်တို့ကို သင့်အလုပ်လုပ်နည်းအတိုင်း
            ကူညီပေးပါသည်။ စနစ်ကြီးဝယ်ရန် မလို၊ ဝန်ထမ်းကို စနစ်သစ် သင်ပေးရန် မလို၊
            အလုပ်လမ်းကို အတင်းပြောင်းရန် မလိုပါ။
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-faded">
            နေ့စဉ်သုံးနေသော <strong className="text-ink">Telegram</strong> တွင်
            လည်ပတ်ပြီး အချက်အလက်ကို{' '}
            <strong className="text-ink">Google Sheets</strong> တွင်
            ပိုင်ဆိုင်ပါသည်။ လိုအပ်ပါက စိတ်ကြိုက် လုပ်ငန်းစဉ်နှင့် ဉာဏ်ရည်တု
            ပေါင်းစပ်မှုကိုလည်း တပ်ဆင်ပေးနိုင်ပါသည်။
          </p>

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-btn px-4 py-2.5 text-xs font-bold"
            >
              စတင်ဆွေးနွေးရန်
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('page-operate')}
              className="ghost-btn px-4 py-2.5 text-xs font-bold"
            >
              ဘယ်လို လုပ်ဆောင်သလဲ →
            </button>
          </div>
        </article>

        <aside className="flex min-h-0 flex-col gap-2 lg:col-span-4">
          <p className="text-[10px] font-bold tracking-wide text-stamp">
            အကျဉ်းချုပ် · နှိပ်၍ ဖတ်ရန်
          </p>
          {wireItems.map((item) => {
            const open = openWire === item.q
            return (
              <button
                key={item.q}
                type="button"
                className="panel panel-interactive w-full p-3 text-left"
                aria-expanded={open}
                onClick={() => setOpenWire(open ? null : item.q)}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold tracking-wide text-stamp">
                    {item.q}
                  </span>
                  <span className="text-[10px] text-faded" aria-hidden>
                    {open ? '−' : '+'}
                  </span>
                </div>
                {open ? (
                  <p className="mt-2 text-sm font-medium text-ink">{item.a}</p>
                ) : null}
              </button>
            )
          })}

          <div className="panel mt-auto p-3">
            <p className="text-[10px] font-bold tracking-wide text-stamp">
              ကတိကဝတ်
            </p>
            <p className="mt-1 text-sm leading-snug text-ink">
              နည်းပညာသည် လုပ်ငန်းကို ကူညီရမည် — အလုပ်ပိတ်စေသော အရာ မဖြစ်စေရ။
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
