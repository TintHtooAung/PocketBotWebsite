import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, TELEGRAM_URL, scrollToSection } from '../lib/constants'
import { useI18n } from '../lib/i18n'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang, setLang } = useI18n()
  const c = t.common

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

        <ul className="hidden items-center gap-3 lg:gap-4 xl:gap-5 md:flex">
          {t.nav.map((link) => (
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
          <div
            className="flex items-center border border-ink text-[10px] font-bold"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang('my')}
              className={`px-2 py-1 transition ${
                lang === 'my' ? 'bg-ink text-paper' : 'bg-paper text-ink'
              }`}
              aria-pressed={lang === 'my'}
            >
              မြန်
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-1 transition ${
                lang === 'en' ? 'bg-ink text-paper' : 'bg-paper text-ink'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-btn hidden px-2.5 py-1 text-[11px] font-semibold sm:inline-block"
          >
            {c.tryCta}
          </a>
          <button
            type="button"
            className="p-1.5 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? c.closeMenu : c.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/40 bg-paper px-3 py-2 md:hidden">
          {t.nav.map((link) => (
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
            {c.tryCta}
          </a>
        </div>
      )}
    </header>
  )
}
