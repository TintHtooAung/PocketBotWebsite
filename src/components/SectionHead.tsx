type SectionHeadProps = {
  title: string
  hint?: string
}

/** Single-line section opener — no page numbers, no brand echo. */
export default function SectionHead({ title, hint }: SectionHeadProps) {
  return (
    <header className="shrink-0 double-rule flex flex-wrap items-end justify-between gap-3 pb-2">
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      {hint ? <p className="text-xs text-faded">{hint}</p> : null}
    </header>
  )
}
