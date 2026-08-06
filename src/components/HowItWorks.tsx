/** Compact steps used inside the pricing page. */
const steps = [
  {
    n: '၁',
    title: 'နားထောင်',
    body: 'လုပ်ငန်းစဉ်ကို နားလည်သည်။',
  },
  {
    n: '၂',
    title: 'ပြင်ဆင်',
    body: 'စိတ်ကြိုက် တပ်ဆင်သည်။',
  },
  {
    n: '၃',
    title: 'လည်ပတ်',
    body: 'Telegram တွင် သုံးသည်။',
  },
]

export default function HowItWorks() {
  return (
    <div className="shrink-0">
      <h3 className="font-display text-lg font-bold text-ink">အကျဉ်းချုပ်</h3>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {steps.map((s) => (
          <div key={s.n} className="panel p-2.5" tabIndex={0}>
            <p className="font-display text-lg font-bold text-stamp">{s.n}</p>
            <p className="mt-0.5 text-sm font-bold text-ink">{s.title}</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-faded">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
