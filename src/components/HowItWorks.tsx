/** Compact steps used inside the pricing page. */
const steps = [
  {
    n: '၁',
    title: 'တိုင်ပင်',
    body: 'လိုအပ်ချက် နားထောင်သည်။',
  },
  {
    n: '၂',
    title: 'ချိတ်ဆက်',
    body: 'ဂေဟစနစ် တပ်ဆင်သည်။',
  },
  {
    n: '၃',
    title: 'မောင်းနှင်',
    body: 'သင်ကိုယ်တိုင် လည်ပတ်သည်။',
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
