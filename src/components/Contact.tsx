import { useState } from 'react'
import type { FormEvent } from 'react'
import SectionHead from './SectionHead'
import {
  BRAND,
  BRAND_MY,
  CONTACT_EMAIL,
  FACEBOOK_URL,
  TAGLINE,
  TELEGRAM_URL,
} from '../lib/constants'

const niches = [
  'စားသောက်ဆိုင်',
  'ကျူရှင် / ပညာရေးရုံး',
  'ကြေးကောက်ခံမှု',
  'အသင်းဝင် / အားကစားရုံ',
  'အိမ်ငှားခ',
  'ဆေးခန်း / အလှပြင်ဆိုင်',
  'စိတ်ကြိုက် လုပ်ငန်းစဉ်',
  'အဖွဲ့အစည်း အထူးအစီအစဉ် / ဈေးနှုန်း တောင်းခံ',
  'ဉာဏ်ရည်တု သို့မဟုတ် အလိုအလျောက် ပေါင်းစပ်မှု',
  'အခြား',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [focusField, setFocusField] = useState<string | null>(null)
  const year = new Date().getFullYear()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const contact = String(data.get('contact') || '').trim()
    const niche = String(data.get('niche') || '').trim()
    const message = String(data.get('message') || '').trim()

    const body = [
      `အမည်: ${name}`,
      `ဖုန်း/Telegram: ${contact}`,
      `လုပ်ငန်း: ${niche}`,
      '',
      message,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `${BRAND} — ${niche}`,
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    form.reset()
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title="ဆက်သွယ်ရန်" hint="အထူးအစီအစဉ် · ဈေးနှုန်း တောင်းခံလည်း ရပါသည်" />

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        <aside className="panel flex flex-col justify-between p-4 lg:col-span-4">
          <div>
            <p className="text-sm leading-relaxed text-ink">{TAGLINE}</p>
            <p className="mt-3 text-sm text-faded">
              လုပ်ငန်းတွင် ပိတ်နေသော အဆင့်၊ လိုအပ်သော စိတ်ကြိုက် စဉ်၊ သို့မဟုတ်
              အထူးအစီအစဉ်အတွက် ဈေးနှုန်း တောင်းခံလိုပါက ရေးသားပေးပါ။
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-btn px-3 py-2 text-center font-semibold"
            >
              Telegram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn px-3 py-2 text-center"
            >
              Facebook
            </a>
          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="panel flex flex-col gap-3 p-4 lg:col-span-8"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-semibold">အမည်</span>
              <input
                name="name"
                required
                onFocus={() => setFocusField('name')}
                onBlur={() => setFocusField(null)}
                className={`mt-1 w-full border bg-newsprint/40 px-3 py-2 text-sm outline-none transition ${
                  focusField === 'name' ? 'border-stamp bg-paper' : 'border-ink'
                }`}
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold">ဖုန်း / Telegram</span>
              <input
                name="contact"
                required
                onFocus={() => setFocusField('contact')}
                onBlur={() => setFocusField(null)}
                className={`mt-1 w-full border bg-newsprint/40 px-3 py-2 text-sm outline-none transition ${
                  focusField === 'contact'
                    ? 'border-stamp bg-paper'
                    : 'border-ink'
                }`}
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="font-semibold">လုပ်ငန်းအမျိုးအစား</span>
            <select
              name="niche"
              required
              defaultValue=""
              onFocus={() => setFocusField('niche')}
              onBlur={() => setFocusField(null)}
              className={`mt-1 w-full border bg-newsprint/40 px-3 py-2 text-sm outline-none transition ${
                focusField === 'niche' ? 'border-stamp bg-paper' : 'border-ink'
              }`}
            >
              <option value="" disabled>
                ရွေးပါ…
              </option>
              {niches.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label className="block flex-1 text-sm">
            <span className="font-semibold">အလုပ်ပိတ်နေသော နေရာ</span>
            <textarea
              name="message"
              required
              onFocus={() => setFocusField('message')}
              onBlur={() => setFocusField(null)}
              className={`mt-1 min-h-[7rem] w-full flex-1 resize-none border bg-newsprint/40 px-3 py-2 text-sm outline-none transition ${
                focusField === 'message'
                  ? 'border-stamp bg-paper'
                  : 'border-ink'
              }`}
              placeholder="ဥပမာ — ကျူရှင်ခ လိုက်မတောင်းနိုင်၊ သို့မဟုတ် စိတ်ကြိုက် လုပ်ငန်းစဉ် / ဈေးနှုန်း တောင်းခံလိုသည်…"
            />
          </label>
          <button type="submit" className="ink-btn py-2.5 text-sm font-bold">
            စာပို့ရန်
          </button>
          {submitted ? (
            <p className="text-sm text-ink" role="status">
              ကျေးဇူးတင်ပါသည်။ Telegram မှလည်း ဆက်သွယ်နိုင်သည်။
            </p>
          ) : null}
        </form>
      </div>

      <footer className="mt-3 shrink-0 border-t border-ink pt-2 text-center text-[11px] text-faded">
        © {year} PocketX / {BRAND_MY}
      </footer>
    </div>
  )
}
