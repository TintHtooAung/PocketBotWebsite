import { motion } from 'framer-motion'
import {
  UtensilsCrossed,
  GraduationCap,
  Wallet,
  Users,
  Building2,
  Stethoscope,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Vertical = {
  icon: LucideIcon
  title: string
  replaces: string
  burmese: string
  english: string
  outcomes: string[]
}

const verticals: Vertical[] = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Ops',
    replaces: 'Replaces: POS add-ons · floor whiteboards · WhatsApp chaos',
    burmese: 'စားသောက်ဆိုင် လုပ်ငန်းလည်ပတ်မှု — တန်းစီ၊ မှာယူမှု၊ စတော့ သတိပေးချက်',
    english:
      'Queue tokens, table/order handoffs, low-stock alerts, and daily close summaries — without buying a full restaurant ERP.',
    outcomes: ['Queue & token', 'Order handoff', 'Stock alerts'],
  },
  {
    icon: GraduationCap,
    title: 'Education Office Ops',
    replaces: 'Replaces: paper registers · Excel sprawl · parent phone calls',
    burmese: 'ပညာရေးရုံး လုပ်ငန်း — ကျောင်းသားစာရင်း၊ အတန်း၊ ဆရာ/ရုံး စာရင်းဇယား',
    english:
      'Student rolls, class lists, attendance check-ins, and office task tracking for tuition centers and schools.',
    outcomes: ['Student rolls', 'Attendance', 'Office tasks'],
  },
  {
    icon: Wallet,
    title: 'Fee Management',
    replaces: 'Replaces: fee ledgers · reminder calls · payment chase',
    burmese: 'ကြေးကောက်ခံမှု — ကျူရှင်ခ၊ အိမ်ငှားခ၊ အရစ်ကျ ငွေပေးချေမှု',
    english:
      'Collect tuition, rent, or installment fees with due dates, receipts, and automatic Telegram reminders.',
    outcomes: ['Due tracking', 'Reminders', 'Payment log'],
  },
  {
    icon: Users,
    title: 'Membership Management',
    replaces: 'Replaces: gym CRM · punch cards · expiry spreadsheets',
    burmese: 'အသင်းဝင်စနစ် — Gym, club, subscription check-in နဲ့ သက်တမ်း',
    english:
      'Member profiles, check-in, renewals, and expiry alerts for gyms, clubs, and subscription businesses.',
    outcomes: ['Check-in', 'Renewals', 'Expiry alerts'],
  },
  {
    icon: Building2,
    title: 'Property & Rent Ops',
    replaces: 'Replaces: landlord notebooks · late-rent chasing',
    burmese: 'အိမ်ငှားခ ခြေရာခံ နဲ့ အလိုအလျောက် သတိပေးချက်',
    english:
      'Tenant records, rent due cycles, and polite automated follow-ups — clear for owners and tenants.',
    outcomes: ['Tenant list', 'Due cycles', 'Auto follow-up'],
  },
  {
    icon: Stethoscope,
    title: 'Clinic & Salon Booking',
    replaces: 'Replaces: appointment books · double-booking · walk-in piles',
    burmese: 'ဆေးခန်း၊ အလှပြင်ဆိုင် ရက်ချိန်း + တန်းစီ စနစ်',
    english:
      'Slot booking, reminders, and queue tokens so front desks stop juggling phones and Facebook chat.',
    outcomes: ['Slots', 'Reminders', 'Front-desk queue'],
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Services() {
  return (
    <section id="ops-engines" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Vertical Ops Engines — Tailored to Your Business
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            One PocketBot core. Infinite vertical configs. We map your
            bottleneck, then ship a Telegram + Sheets workflow that feels like
            it was built only for you.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            စားသောက်ဆိုင်၊ ပညာရေး၊ ကြေးကောက်ခံမှု၊ အသင်းဝင် — မည်သည့် လုပ်ငန်းမဆို
            စိတ်ကြိုက် ညှိပေးနိုင်ပါသည်။
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {verticals.map((vertical) => {
            const Icon = vertical.icon
            return (
              <motion.article
                key={vertical.title}
                variants={item}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-text">
                  {vertical.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text">
                  {vertical.burmese}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {vertical.english}
                </p>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-secondary">
                  {vertical.replaces}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {vertical.outcomes.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted"
        >
          Don’t see your niche? That’s the point — we configure a custom
          vertical for{' '}
          <span className="font-semibold text-text">any ops bottleneck</span>{' '}
          (inventory, HR leave, supplier chase, donation tracking, and more).
        </motion.p>
      </div>
    </section>
  )
}
