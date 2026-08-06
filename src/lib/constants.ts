export const BRAND = 'PocketX'
export const BRAND_MY = 'ပေါ့ကက်အက်စ်'
export const TAGLINE =
  'လုပ်ငန်းလည်ပတ်မှုကို ချောမွေ့စေသော စနစ် — စနစ်ကြီးဝယ်ရန်၊ သင်တန်းပေးရန်၊ အလုပ်လမ်းပြောင်းရန် မလိုအပ်ပါ။'
export const TELEGRAM_URL = 'https://t.me/PocketBotMyanmar'
export const FACEBOOK_URL = 'https://facebook.com/PocketBotMyanmar'
export const CONTACT_EMAIL = 'hello@pocketx.mm'

export const NAV_LINKS = [
  { id: 'page-front', label: 'ရှေ့' },
  { id: 'page-why', label: 'ဘာကြောင့်' },
  { id: 'page-engines', label: 'အမျိုးအစား' },
  { id: 'page-features', label: 'အင်္ဂါရပ်' },
  { id: 'page-operate', label: 'ဘယ်လိုလုပ်' },
  { id: 'page-rates', label: 'ဈေး' },
  { id: 'page-order', label: 'ဆက်သွယ်' },
] as const

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  window.dispatchEvent(new CustomEvent('edition:goto', { detail: { id } }))
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
