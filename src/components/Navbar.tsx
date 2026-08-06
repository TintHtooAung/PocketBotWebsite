import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS, TELEGRAM_URL, scrollToSection } from '../lib/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur-[2px]">
      <nav className="flex h-11 w-full items-center justify-between px-3 sm:px-5 lg:px-8">
        <button
          type="button"
          onClick={() => go('page-front')}
          className="font-display text-base font-bold tracking-tight text-ink"
        >
          {BRAND}
        </button>

        <ul className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className="text-xs text-ink underline-offset-4 transition hover:underline"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-btn hidden px-2.5 py-1 text-[11px] font-semibold sm:inline-block"
          >
            စမ်းကြည့်ရန်
          </a>
          <button
            type="button"
            className="p-1.5 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'ပိတ်ရန်' : 'မီနူးဖွင့်ရန်'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/40 bg-paper px-3 py-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="block w-full py-2.5 text-left text-sm text-ink"
            >
              {link.label}
            </button>
          ))}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="ink-btn mt-2 block py-2.5 text-center text-sm font-semibold"
          >
            စမ်းကြည့်ရန်
          </a>
        </div>
      )}
    </header>
  )
}
