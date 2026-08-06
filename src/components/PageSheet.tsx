import { useEffect, useRef, type ReactNode } from 'react'
import { useEdition } from '../lib/edition'

type PageSheetProps = {
  index: number
  id: string
  children: ReactNode
}

/** Quiet full-page sheet — no motion theater, only snap reading. */
export default function PageSheet({ index, id, children }: PageSheetProps) {
  const { setActive } = useEdition()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = document.querySelector('.edition-scroll')
    const node = ref.current
    if (!root || !node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActive(index)
        }
      },
      { root, threshold: [0.5, 0.65] },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [index, setActive])

  return (
    <section
      ref={ref}
      id={id}
      className="edition flex flex-col px-3 py-3 sm:px-5 lg:px-6 lg:py-4 xl:px-10"
      data-page-index={index}
    >
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </section>
  )
}
