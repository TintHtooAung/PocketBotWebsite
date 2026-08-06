export const TELEGRAM_URL = 'https://t.me/PocketBotMyanmar'

export const NAV_LINKS = [
  { id: 'ops-engines', label: 'Ops Engines' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
] as const

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 80
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
