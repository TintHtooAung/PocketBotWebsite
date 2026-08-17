import { motion } from 'framer-motion'

const colors = [
  { name: 'နက်ပြာ', hex: '#0B1F3A', className: 'bg-navy' },
  { name: 'စိမ်းပြာ', hex: '#0D9488', className: 'bg-teal' },
  { name: 'အချက်ပေး', hex: '#F59E0B', className: 'bg-signal' },
  { name: 'နောက်ခံ', hex: '#F4F7FB', className: 'bg-cloud border border-line' },
]

export default function BrandSystem() {
  return (
    <section aria-label="PocketX အမှတ်တံဆိပ်" className="border-y border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-wide text-stamp">
            အမှတ်တံဆိပ် စနစ်
          </p>
          <p className="mt-1 text-sm text-faded">
            လိုဂို · အရောင် · လုပ်ငန်းလည်ပတ်ရေး အသွင်အပြင်
          </p>
        </div>
        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {colors.map((c) => (
            <li key={c.name} className="flex items-center gap-2">
              <span className={`h-8 w-8 rounded-lg ${c.className}`} title={c.hex} />
              <span className="text-xs text-faded">
                <span className="block font-semibold text-ink">{c.name}</span>
                {c.hex}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
