/** Newspaper-ink line icons — stroke matches brand ink */

type IconProps = { className?: string; title?: string }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconTelegram({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect x="4" y="8" width="32" height="24" rx="2" {...base} />
      <path d="M10 16l10 6 10-6" {...base} />
      <path d="M12 28l8-5 8 5" {...base} />
    </svg>
  )
}

export function IconSheets({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect x="8" y="5" width="24" height="30" rx="1" {...base} />
      <path d="M8 14h24M8 22h24M8 30h24M16 5v30M24 5v30" {...base} />
    </svg>
  )
}

export function IconCalendar({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect x="6" y="10" width="28" height="24" rx="1" {...base} />
      <path d="M6 17h28M14 6v8M26 6v8" {...base} />
      <path d="M12 24h4M18 24h4M24 24h4M12 29h4M18 29h4" {...base} />
    </svg>
  )
}

export function IconDashboard({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect x="5" y="6" width="30" height="28" rx="1" {...base} />
      <path d="M5 14h30" {...base} />
      <rect x="9" y="18" width="10" height="12" {...base} />
      <path d="M23 20h8M23 25h8M23 30h5" {...base} />
    </svg>
  )
}

export function IconTruck({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M4 26V12h18v14" {...base} />
      <path d="M22 16h8l6 6v4H22V16z" {...base} />
      <circle cx="11" cy="28" r="3" {...base} />
      <circle cx="29" cy="28" r="3" {...base} />
    </svg>
  )
}

export function IconDriver({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <circle cx="20" cy="12" r="5" {...base} />
      <path d="M10 32c2-7 6-10 10-10s8 3 10 10" {...base} />
      <path d="M8 22h6M26 22h6" {...base} />
    </svg>
  )
}

export function IconCustomer({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <circle cx="14" cy="14" r="4" {...base} />
      <circle cx="26" cy="14" r="4" {...base} />
      <path d="M6 30c1-5 4-7 8-7s7 2 8 7M18 30c1-5 4-7 8-7s7 2 8 7" {...base} />
    </svg>
  )
}

export function IconShop({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M6 16l3-8h22l3 8" {...base} />
      <path d="M6 16h28v16H6V16z" {...base} />
      <path d="M16 32V22h8v10" {...base} />
      <path d="M6 16h7v4a3.5 3.5 0 01-7 0v-4zM13 16h7v4a3.5 3.5 0 01-7 0v-4zM20 16h7v4a3.5 3.5 0 01-7 0v-4zM27 16h7v4a3.5 3.5 0 01-7 0v-4z" {...base} />
    </svg>
  )
}

export function IconLink({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path
        d="M16 24l-2 2a6 6 0 108.5 0L26 22a6 6 0 00-8.5-8.5l-1.5 1.5"
        {...base}
      />
      <path
        d="M24 16l2-2a6 6 0 10-8.5 0L14 18a6 6 0 008.5 8.5l1.5-1.5"
        {...base}
      />
    </svg>
  )
}

export function IconBell({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M12 28h16M20 6v2M14 16a6 6 0 0112 0c0 6 2 8 2 8H12s2-2 2-8z" {...base} />
      <path d="M17 28a3 3 0 006 0" {...base} />
    </svg>
  )
}

export function IconQueue({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M8 10h10v8H8zM16 18h10v8H16zM24 26h10v8H24z" {...base} />
    </svg>
  )
}

export function IconBook({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M8 8h11v24H8a2 2 0 01-2-2V10a2 2 0 012-2z" {...base} />
      <path d="M21 8h11a2 2 0 012 2v20a2 2 0 01-2 2H21V8z" {...base} />
      <path d="M21 8v24" {...base} />
    </svg>
  )
}

export function IconConsult({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M8 10h18v14H14l-6 5V10z" {...base} />
      <path d="M16 18h6M16 22h4" {...base} />
    </svg>
  )
}

export function IconGear({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <circle cx="20" cy="20" r="5" {...base} />
      <path
        d="M20 6v4M20 30v4M6 20h4M30 20h4M10 10l3 3M27 27l3 3M10 30l3-3M27 13l3-3"
        {...base}
      />
    </svg>
  )
}

export function IconSpark({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M20 4l2.5 10.5L33 17l-10.5 2.5L20 30l-2.5-10.5L7 17l10.5-2.5L20 4z" {...base} />
      <path d="M30 26l1 4 4 1-4 1-1 4-1-4-4-1 4-1 1-4z" {...base} />
    </svg>
  )
}

export function IconRoute({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <circle cx="10" cy="10" r="3" {...base} />
      <circle cx="30" cy="30" r="3" {...base} />
      <path d="M13 12c4 0 6 4 10 8s6 8 10 8" {...base} />
      <path d="M26 26l4 4M26 30h4v-4" {...base} />
    </svg>
  )
}

export function IconLedger({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect x="7" y="5" width="26" height="30" rx="1" {...base} />
      <path d="M12 12h16M12 18h16M12 24h10M12 30h14" {...base} />
      <path d="M28 28l2 2 4-4" {...base} />
    </svg>
  )
}

export function IconBox({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M6 14l14-7 14 7v14l-14 7-14-7V14z" {...base} />
      <path d="M6 14l14 7 14-7M20 21v14" {...base} />
    </svg>
  )
}

export function IconCheck({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect x="6" y="6" width="28" height="28" rx="2" {...base} />
      <path d="M12 20l5 5 11-12" {...base} />
    </svg>
  )
}

export function IconChat({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M8 8h24v16H16l-8 7V8z" {...base} />
      <path d="M14 15h12M14 20h8" {...base} />
    </svg>
  )
}

export function IconReport({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect x="8" y="5" width="24" height="30" rx="1" {...base} />
      <path d="M14 28V18M20 28V12M26 28v-8" {...base} />
    </svg>
  )
}
