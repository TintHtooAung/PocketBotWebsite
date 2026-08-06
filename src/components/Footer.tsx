import { Bot } from 'lucide-react'
import { TELEGRAM_URL } from '../lib/constants'

const FACEBOOK_URL = 'https://facebook.com/PocketBotMyanmar'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-text text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Bot className="h-5 w-5" aria-hidden />
          </span>
          PocketBot
        </div>

        <p className="max-w-md text-sm leading-relaxed">
          Built in Myanmar for Myanmar businesses — vertical ops engines that
          replace heavy ERP for the bottlenecks that actually matter.
          <br />
          မြန်မာလုပ်ငန်းများအတွက် မြန်မာမှာ တည်ဆောက်ထားသည်။
        </p>

        <div className="flex items-center gap-4">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            aria-label="PocketBot on Telegram"
          >
            Telegram
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            aria-label="PocketBot on Facebook"
          >
            Facebook
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {year} PocketBot. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
