export const BRAND = 'PocketX'
export const BRAND_MY = 'ပေါ့ကက်အက်စ်'
export const TELEGRAM_URL = 'https://t.me/PocketBotMyanmar'
export const FACEBOOK_URL = 'https://facebook.com/PocketBotMyanmar'
export const CONTACT_EMAIL = 'hello@pocketx.mm'

export const PAGE_IDS = [
  'page-front',
  'page-why',
  'page-engines',
  'page-samples',
  'page-features',
  'page-operate',
  'page-rates',
  'page-order',
] as const

export type PageId = (typeof PAGE_IDS)[number]

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  window.dispatchEvent(new CustomEvent('edition:goto', { detail: { id } }))
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
