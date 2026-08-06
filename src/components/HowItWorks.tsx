import { motion } from 'framer-motion'
import { Settings2, MessageCircle, Sheet } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Settings2,
    title: 'We tailor your vertical',
    description:
      'You describe the bottleneck and SOPs. We configure fields, roles, reminders, and Sheet columns to match — like a mini ERP module, without the ERP.',
    burmese:
      'သင့်လုပ်ငန်းစဉ်ကို ပြောပြပါ။ Vertical engine အဖြစ် စိတ်ကြိုက် ညှိပေးပါမည်။',
  },
  {
    number: '2',
    icon: MessageCircle,
    title: 'Your team runs it in Telegram',
    description:
      'Staff and customers add records, pay, book, check in, or pull a queue token in the app they already use. No new login culture war.',
    burmese:
      'ဝန်ထမ်းနှင့် ဖောက်သည်များ Telegram ဖြင့်သာ အလုပ်လုပ်နိုင်ပါသည်။',
  },
  {
    number: '3',
    icon: Sheet,
    title: 'Ops data lands in Google Sheets',
    description:
      'Owners get a live source of truth for reports, audits, and handovers — exportable, shareable, never locked in a vendor silo.',
    burmese:
      'ဒေတာအားလုံး Google Sheets ထဲမှာ — ပိုင်ရှင်က အချိန်မရွေး စစ်ဆေးနိုင်ပါသည်။',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div
        className="absolute inset-0 -skew-y-2 bg-gradient-to-br from-sky-50 via-slate-100 to-teal-50"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            From Bottleneck to Running Ops Engine
          </h2>
          <p className="mt-3 text-muted">
            Configure once for your vertical. Operate every day in Telegram.
            Own the data in Sheets.
          </p>
          <p className="mt-2 text-sm text-muted">
            ERP အစား — သင့်လုပ်ငန်းအတွက် တိကျသော engine တစ်ခု။
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute top-10 right-[16%] left-[16%] hidden h-0.5 bg-slate-200 lg:block"
            aria-hidden
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="mx-auto mb-5 flex h-16 w-16 cursor-default items-center justify-center rounded-2xl bg-white text-2xl font-bold text-primary shadow-lg ring-4 ring-primary/10"
                  >
                    {step.number}
                  </motion.div>
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text">
                    {step.burmese}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
