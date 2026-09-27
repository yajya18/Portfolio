type StatBlockProps = {
  value: string
  label: string
  tone?: 'default' | 'inverted'
}

export default function StatBlock({ value, label, tone = 'default' }: StatBlockProps) {
  const isInverted = tone === 'inverted'
  return (
    <div className="flex flex-col gap-1">
      <span className={`font-mono text-3xl md:text-4xl ${isInverted ? 'text-paper' : 'text-ink'}`}>
        {value}
      </span>
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
          isInverted ? 'text-paper/60' : 'text-mist-500'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
