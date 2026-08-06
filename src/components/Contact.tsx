import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { TELEGRAM_URL } from '../lib/constants'

const niches = [
  'Restaurant Ops',
  'Education Office Ops',
  'Fee Management',
  'Membership Management',
  'Property / Rent',
  'Clinic / Salon Booking',
  'Inventory / Stock Alerts',
  'Custom bottleneck (other)',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const contact = String(data.get('contact') || '').trim()
    const niche = String(data.get('niche') || '').trim()
    const message = String(data.get('message') || '').trim()

    const body = [
      `Name: ${name}`,
      `Phone/Telegram: ${contact}`,
      `Niche: ${niche}`,
      '',
      message,
    ].join('\n')

    const mailto = `mailto:hello@pocketbot.mm?subject=${encodeURIComponent(
      `PocketBot inquiry — ${niche || 'General'}`,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSubmitted(true)
    form.reset()
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Tell Us Your Bottleneck
          </h2>
          <p className="mt-3 text-muted">
            Describe the ops pain — we reply with a vertical fit and a trial
            plan. မြန်မာဘာသာဖြင့် ရေးနိုင်ပါသည်။
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-xl space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
              Name / အမည်
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              autoComplete="name"
              className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="contact"
              className="mb-1.5 block text-sm font-medium text-text"
            >
              Phone / Telegram ID
            </label>
            <input
              id="contact"
              name="contact"
              required
              type="text"
              className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="@username or phone"
            />
          </div>

          <div>
            <label
              htmlFor="niche"
              className="mb-1.5 block text-sm font-medium text-text"
            >
              Niche / လုပ်ငန်းအမျိုးအစား
            </label>
            <select
              id="niche"
              name="niche"
              required
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="" disabled>
                Select your niche
              </option>
              {niches.map((niche) => (
                <option key={niche} value={niche}>
                  {niche}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-text"
            >
              Message / မက်ဆေ့ချ်
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full resize-y rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="What’s the bottleneck? e.g. late tuition fees, restaurant queue, membership renewals…"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-500"
          >
            <Send className="h-4 w-4" aria-hidden />
            Send Message
          </button>

          {submitted && (
            <p className="text-center text-sm text-secondary" role="status">
              Thanks! Your email client should open. Or message us on{' '}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Telegram
              </a>
              .
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
