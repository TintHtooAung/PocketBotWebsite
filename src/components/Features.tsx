import SectionHead from './SectionHead'
import {
  IconBell,
  IconBox,
  IconChat,
  IconConsult,
  IconCustomer,
  IconDashboard,
  IconLedger,
  IconReport,
  IconRoute,
  IconSpark,
  IconTelegram,
} from './InkIcons'
import { TELEGRAM_URL, scrollToSection } from '../lib/constants'
import { useI18n } from '../lib/i18n'

const aiIcons = [IconRoute, IconSpark, IconLedger, IconBox, IconBell, IconReport]

export default function Features() {
  const { t } = useI18n()
  const f = t.features

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SectionHead title={f.title} hint={f.hint} />

      <p className="mt-2 max-w-3xl shrink-0 text-sm leading-relaxed text-ink">
        {f.intro}
      </p>

      <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
        <div className="flex min-h-0 flex-col gap-2 lg:col-span-7">
          <div className="flex items-center gap-2">
            <IconSpark className="h-6 w-6 text-stamp" />
            <p className="text-[10px] font-bold tracking-wide text-stamp">
              {f.aiLabel}
            </p>
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-2 sm:grid-cols-3">
            {f.ai.map(({ title, body }, i) => {
              const Icon = aiIcons[i] ?? IconSpark
              return (
                <article key={title} className="panel flex flex-col p-3">
                  <Icon className="h-7 w-7 text-ink" />
                  <h3 className="mt-2 text-sm font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-faded">{body}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-2 lg:col-span-5">
          <article className="panel p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <IconChat className="h-7 w-7 text-stamp" />
              <div>
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  {f.chatLabel}
                </p>
                <h3 className="text-sm font-bold text-ink">{f.chatTitle}</h3>
              </div>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-faded">{f.chatBody}</p>
            <ul className="mt-3 grid grid-cols-2 gap-1.5">
              {f.chatEquip.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 border border-dashed border-ink/30 px-2 py-1 text-[11px] text-ink"
                >
                  <span className="text-stamp" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid grid-cols-2 gap-2">
            <article className="panel p-3">
              <IconDashboard className="h-7 w-7 text-stamp" />
              <p className="mt-2 text-[10px] font-bold tracking-wide text-stamp">
                {f.dashOrg}
              </p>
              <h3 className="mt-1 text-sm font-bold text-ink">{f.dashOrgTitle}</h3>
              <p className="mt-1 text-xs leading-relaxed text-faded">
                {f.dashOrgBody}
              </p>
            </article>
            <article className="panel p-3">
              <IconCustomer className="h-7 w-7 text-stamp" />
              <p className="mt-2 text-[10px] font-bold tracking-wide text-stamp">
                {f.dashCust}
              </p>
              <h3 className="mt-1 text-sm font-bold text-ink">
                {f.dashCustTitle}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-faded">
                {f.dashCustBody}
              </p>
            </article>
          </div>

          <aside className="panel flex flex-1 flex-col justify-between p-3 sm:p-4">
            <div>
              <div className="flex items-center gap-2">
                <IconConsult className="h-6 w-6 text-ink" />
                <p className="text-[10px] font-bold tracking-wide text-stamp">
                  {f.quoteLabel}
                </p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink sm:text-sm">
                {f.quoteBody}
              </p>
            </div>
            <div className="mt-3 flex flex-col gap-1.5 sm:flex-row">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-btn flex-1 px-2 py-2 text-center text-[11px] font-bold"
              >
                {f.quoteCta}
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('page-samples')}
                className="ghost-btn flex-1 px-2 py-2 text-[11px] font-bold"
              >
                {f.samplesCta}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('page-order')}
                className="ghost-btn flex-1 px-2 py-2 text-[11px] font-bold"
              >
                <span className="inline-flex items-center gap-1">
                  <IconTelegram className="h-3.5 w-3.5" />
                  {f.contactCta}
                </span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
