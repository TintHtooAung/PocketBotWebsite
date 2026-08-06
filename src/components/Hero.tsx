import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'

const easeOut = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.55, ease: easeOut },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-white to-sky-50 pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-left">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 inline-flex items-center gap-2 rounded-xl bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Ops Engine · Not another heavy ERP
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl font-extrabold leading-snug tracking-tight text-text sm:text-4xl lg:text-[2.75rem]"
          >
            လုပ်ငန်းပိတ်ဆို့မှုကို ဖြေရှင်းပါ။ ERP မလိုအပ်ဘူး။
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 text-lg font-medium leading-relaxed text-text sm:text-xl"
          >
            PocketBot is a lightweight ops engine for restaurants, schools,
            clinics, gyms, and any business bottleneck — tailored to how you
            already work.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 text-base leading-relaxed text-muted"
          >
            Skip months of ERP setup, expensive licenses, and staff training.
            Run fee collection, memberships, queues, inventory alerts, and
            office ops inside Telegram — synced to Google Sheets.
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-2 text-sm leading-relaxed text-muted"
          >
            သင့်လုပ်ငန်းအတွက် စိတ်ကြိုက် ညှိပေးသော vertical engine —
            Telegram ထဲမှာ အလိုအလျောက် စီမံပါ။
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-500"
            >
              Solve My Bottleneck
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('ops-engines')}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-text shadow-sm transition hover:border-primary/30 hover:text-primary"
            >
              See Ops Engines
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.65, ease: easeOut }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 blur-xl" />
          <img
            src="https://placehold.co/600x400/1A56DB/white?text=PocketBot+Ops+Engine"
            alt="PocketBot ops engine — Telegram workflows synced to Google Sheets"
            width={600}
            height={400}
            className="relative w-full rounded-2xl shadow-lg"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  )
}
