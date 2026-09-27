import type { ReactNode } from 'react'

type SectionHeadingProps = {
  kicker?: string
  title: string
  description?: ReactNode
  tone?: 'default' | 'inverted'
  align?: 'left' | 'center'
}

export default function SectionHeading({
  kicker,
  title,
  description,
  tone = 'default',
  align = 'left',
}: SectionHeadingProps) {
  const isInverted = tone === 'inverted'
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${alignClass}`}>
      {kicker && (
        <span
          className={`font-mono text-xs uppercase tracking-[0.18em] ${
            isInverted ? 'text-paper/60' : 'text-mist-500'
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`mt-3 max-w-2xl text-balance font-serif text-3xl leading-[1.15] md:text-4xl ${
          isInverted ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-xl font-sans text-base leading-relaxed ${
            isInverted ? 'text-paper/70' : 'text-mist-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
