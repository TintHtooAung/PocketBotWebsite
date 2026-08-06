type LogoProps = {
  className?: string
  markClassName?: string
  showWordmark?: boolean
  inverted?: boolean
}

export default function Logo({
  className = '',
  markClassName = 'h-9 w-9',
  showWordmark = true,
  inverted = false,
}: LogoProps) {
  const text = inverted ? 'text-white' : 'text-navy'
  const sub = inverted ? 'text-white/70' : 'text-slate'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        className={markClassName}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="64" height="64" rx="14" fill={inverted ? '#F4F7FB' : '#0B1F3A'} />
        <path
          d="M18 34c0-8.284 6.716-15 15-15h2c6.075 0 11 4.925 11 11v2c0 6.075-4.925 11-11 11h-4l-6 6v-6h-2c-2.761 0-5-2.239-5-5v-4z"
          fill={inverted ? '#0B1F3A' : '#F4F7FB'}
        />
        <circle cx="28" cy="32" r="2.5" fill="#0D9488" />
        <circle cx="35" cy="32" r="2.5" fill="#0D9488" />
        <path
          d="M42 22l6 6-6 6"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark && (
        <span className="leading-tight">
          <span className={`block text-lg font-bold tracking-tight ${text}`}>
            PocketX
          </span>
          <span className={`block text-[10px] font-medium tracking-wide ${sub}`}>
            လုပ်ငန်းမောင်းစနစ်
          </span>
        </span>
      )}
    </span>
  )
}
