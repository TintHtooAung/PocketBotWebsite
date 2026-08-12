export const BRAND = 'PocketX'
export const BRAND_MY = 'ပေါ့ကက်အက်စ်'
export const TELEGRAM_URL = 'https://t.me/PocketBotMyanmar'
export const FACEBOOK_URL = 'https://facebook.com/PocketBotMyanmar'
export const CONTACT_EMAIL = 'hello@pocketx.mm'

/** Short sales path — easy for a busy shop owner to finish */
export const PAGE_IDS = [
  'page-front',
  'page-why',
  'page-engines',
  'page-rates',
  'page-order',
] as const

export type PageId = (typeof PAGE_IDS)[number]

export function scrollToSection(id: string, opts?: { product?: string }) {
  const el = document.getElementById(id)
  if (!el) return
  window.dispatchEvent(new CustomEvent('edition:goto', { detail: { id } }))
  if (opts?.product) {
    window.dispatchEvent(
      new CustomEvent('pricing:select', { detail: { product: opts.product } }),
    )
  }
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
