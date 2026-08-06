import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { TELEGRAM_URL } from '../lib/constants'

const plans = [
  {
    name: 'Basic',
    price: 10,
    description: 'One bottleneck · one vertical',
    features: [
      '1 ops engine (bot)',
      '50 active records',
      'Standard vertical template',
      'Email support',
      '7‑day free trial',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 45,
    description: 'Growing ops · multi-workflow',
    features: [
      '3 ops engines',
      '500 active records',
      'Custom field mapping',
      'Vertical onboarding call',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 100,
    description: 'Multi-branch · ERP-light stack',
    features: [
      'Unlimited ops engines',
      'Dedicated Sheet templates',
      'API access',
      'Advanced reminders',
      'Priority vertical features',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Ops Engine Pricing — Not ERP Pricing
          </h2>
          <p className="mt-3 text-muted">
            Pay for the bottleneck you solve. Start with a 7‑day trial — no
            consultant invoices.
          </p>
          <p className="mt-1 text-sm text-muted">
            ERP လိုင်စင် မဟုတ်ဘဲ — သင့်လုပ်ငန်းအတွက် engine တစ်ခု၏ စျေးနှုန်း။
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-lg transition ${
                plan.popular
                  ? 'border-primary bg-gradient-to-b from-primary/5 to-white ring-2 ring-primary'
                  : 'border-slate-100 bg-background'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-xl bg-accent px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  <Star className="h-3 w-3 fill-current" aria-hidden />
                  Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-text">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>

              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-text">
                  ${plan.price}
                </span>
                <span className="text-sm text-muted">/month</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-amber-500'
                    : 'bg-primary text-white hover:bg-blue-700'
                }`}
              >
                Start Free Trial
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
