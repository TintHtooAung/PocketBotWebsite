import SectionHead from './SectionHead'
import {
  IconBell,
  IconBook,
  IconCalendar,
  IconConsult,
  IconCustomer,
  IconDashboard,
  IconGear,
  IconLink,
  IconQueue,
  IconSheets,
  IconTelegram,
} from './InkIcons'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'

const featurePool = [
  {
    title: 'သတိပေးချက်များ',
    body: 'ရက်ချိန်း၊ ငွေ၊ ပစ္စည်းကုန် — အချိန်မှန် သတိပေး',
    Icon: IconBell,
  },
  {
    title: 'တန်းစီ / မှာယူမှု',
    body: 'မှာယူမှု လွှဲပြောင်း၊ တန်းရှည် လျှော့ချ',
    Icon: IconQueue,
  },
  {
    title: 'မှတ်တမ်း ပိုင်ဆိုင်မှု',
    body: 'Google Sheets တွင် ကိုယ်ပိုင် စာရင်း',
    Icon: IconSheets,
  },
  {
    title: 'အချိန်ဇယား',
    body: 'Calendar နှင့် ချိတ်ဆက် · ရက်ချိန်း မထပ်',
    Icon: IconCalendar,
  },
  {
    title: 'ဖောက်သည် လမ်းကြောင်း',
    body: 'Telegram မှ စကားပြော · အခြေအနေ ကြည့်ရှု',
    Icon: IconCustomer,
  },
  {
    title: 'စနစ်ချိတ်ဆက်',
    body: 'ရှိပြီးသား POS / စနစ်နှင့် API ချိတ်ဆက်',
    Icon: IconLink,
  },
]

const tools = [
  { name: 'Telegram', note: 'နေ့စဉ် လည်ပတ်ရေး', Icon: IconTelegram },
  { name: 'Google Sheets', note: 'မှတ်တမ်း · စာရင်း', Icon: IconSheets },
  { name: 'Calendar', note: 'ရက်ချိန်း · အချိန်', Icon: IconCalendar },
  { name: 'API / POS', note: 'ရှိပြီးသား စနစ်', Icon: IconLink },
]

export default function Features() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead
        title="ရရှိနိုင်သော အင်္ဂါရပ်များ"
        hint="အင်္ဂါရပ်စု · ထိန်းချုပ်ရေး · ကိရိယာများ"
      />

      <p className="mt-2 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        စျေးကြီး၊ ထိန်းသိမ်းရခက်သော စနစ်ကြီး မဝယ်ဘဲ — လုပ်ငန်းလိုအပ်သော
        အင်္ဂါရပ်များကို PocketX မောင်းစနစ်နှင့် နေ့စဉ်သုံး ဒစ်ဂျစ်တယ် ကိရိယာများဖြင့်
        စုစည်း တပ်ဆင်နိုင်ပါသည်။
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        <div className="grid min-h-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:col-span-7">
          {featurePool.map(({ title, body, Icon }) => (
            <article key={title} className="panel flex flex-col p-3">
              <Icon className="h-8 w-8 text-ink" />
              <h3 className="mt-2 text-sm font-bold text-ink">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-faded">{body}</p>
            </article>
          ))}
        </div>

        <div className="flex min-h-0 flex-col gap-2 lg:col-span-5">
          <div className="grid grid-cols-2 gap-2">
            <article className="panel p-3">
              <IconDashboard className="h-8 w-8 text-stamp" />
              <p className="mt-2 text-[10px] font-bold tracking-wide text-stamp">
                အဖွဲ့အစည်း
              </p>
              <h3 className="mt-1 text-sm font-bold text-ink">
                ထိန်းချုပ်ရေး မျက်နှာပြင်
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-faded">
                ဆိုင်ခွဲ · ဝန်ထမ်း · ငွေစီး · အစီရင်ခံ — တစ်နေရာတည်းမှ ကြည့်ရှု
                စီမံပါ။
              </p>
            </article>
            <article className="panel p-3">
              <IconCustomer className="h-8 w-8 text-stamp" />
              <p className="mt-2 text-[10px] font-bold tracking-wide text-stamp">
                ဖောက်သည်
              </p>
              <h3 className="mt-1 text-sm font-bold text-ink">
                သုံးစွဲသူ မျက်နှာပြင်
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-faded">
                အော်ဒါ အခြေအနေ · ရက်ချိန်း · သတိပေးချက် — ရှင်းလင်းစွာ မြင်ရပါသည်။
              </p>
            </article>
          </div>

          <aside className="panel flex flex-1 flex-col p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <IconGear className="h-6 w-6 text-ink" />
              <p className="text-[10px] font-bold tracking-wide text-stamp">
                နေ့စဉ် ကိရိယာများ
              </p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink">
              သင်သိပြီးသား ကိရိယာများပေါ်တွင် လုပ်ငန်းစဉ်ကို အလိုအလျောက်
              ချိတ်ဆက်ပါသည်။
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {tools.map(({ name, note, Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 border border-dashed border-ink/35 px-2 py-1.5"
                >
                  <Icon className="h-6 w-6 shrink-0 text-ink" />
                  <div>
                    <p className="text-[11px] font-bold text-ink">{name}</p>
                    <p className="text-[10px] text-faded">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid grid-cols-2 gap-2">
            <article className="panel p-3">
              <IconBook className="h-7 w-7 text-ink" />
              <h3 className="mt-2 text-sm font-bold text-ink">
                ဒစ်ဂျစ်တယ် စာတတ်မှု
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-faded">
                လုပ်ငန်းရှင်ကိုယ်တိုင် မောင်းနိုင်ရန် လက်တွေ့ လေ့ကျင့်ရေး
                အစီအစဉ်။
              </p>
            </article>
            <article className="panel flex flex-col justify-between p-3">
              <div>
                <IconConsult className="h-7 w-7 text-stamp" />
                <h3 className="mt-2 text-sm font-bold text-ink">
                  အခမဲ့ တိုင်ပင်ဆွေးနွေး
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-faded">
                  စိတ်ကြိုက် လုပ်ငန်းစဉ်အတွက် အကြံပြုချက်။
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-1.5">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ink-btn px-2 py-1.5 text-center text-[10px] font-bold"
                >
                  တိုင်ပင်ရန်
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('page-order')}
                  className="ghost-btn px-2 py-1.5 text-[10px] font-bold"
                >
                  ပုံစံဖြည့်ရန်
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
