import { motion } from 'framer-motion'
import { Ban, Gauge, Puzzle, Wallet } from 'lucide-react'

const contrasts = [
  {
    icon: Wallet,
    erp: 'Big ERP: expensive licenses, consultants, 3–6 month go-live',
    pocket:
      'PocketBot: start in days, pay for one bottleneck at a time',
  },
  {
    icon: Ban,
    erp: 'Big ERP: forces your team into rigid modules they never use',
    pocket:
      'PocketBot: only the workflow you need — fees, queues, memberships, stock',
  },
  {
    icon: Puzzle,
    erp: 'Big ERP: one-size-fits-all; customization costs extra',
    pocket:
      'PocketBot: vertical-tailored engine mapped to your real SOPs',
  },
  {
    icon: Gauge,
    erp: 'Big ERP: new apps, training, and change management',
    pocket:
      'PocketBot: Telegram + Sheets — tools your staff already open daily',
  },
]

export default function ReplaceErp() {
  return (
    <section
      id="why-pocketbot"
      className="border-y border-slate-100 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            The pitch
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            The 80% of ops ERP you actually use — without the other 80% of cost
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Most Myanmar SMEs don’t need a full ERP. They need a{' '}
            <span className="font-semibold text-text">
              bottleneck solver
            </span>
            : collect fees on time, seat guests faster, track members, keep
            stock from running out. PocketBot ships that engine — customized
            per vertical, running where work already happens.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            အကြီးစား ERP မဟုတ်ဘဲ — သင့်လုပ်ငန်းရဲ့ ပိတ်ဆို့နေသော အလုပ်တစ်ခုကို
            စိတ်ကြိုက် ဖြေရှင်းပေးသော engine။
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {contrasts.map((row, index) => {
            const Icon = row.icon
            return (
              <motion.div
                key={row.erp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-slate-100 bg-background p-5 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-sm leading-relaxed text-muted line-through decoration-slate-300">
                  {row.erp}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-text">
                  {row.pocket}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
