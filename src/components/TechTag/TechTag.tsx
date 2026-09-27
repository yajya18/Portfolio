type TechTagProps = {
  label: string
  tone?: 'default' | 'inverted'
  active?: boolean
  onClick?: () => void
}

export default function TechTag({ label, tone = 'default', active, onClick }: TechTagProps) {
  const isInverted = tone === 'inverted'
  const interactive = typeof onClick === 'function'

  const base = 'font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-sm border transition-colors duration-200'
  const palette = isInverted
    ? 'border-paper/25 text-paper/80'
    : active
      ? 'border-accent text-accent bg-accent-soft'
      : 'border-mist-200 text-mist-600'
  const hover = interactive ? (isInverted ? 'hover:border-paper/60 hover:text-paper cursor-pointer' : 'hover:border-accent hover:text-accent cursor-pointer') : ''

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`${base} ${palette} ${hover}`}
      >
        {label}
      </button>
    )
  }

  return <span className={`${base} ${palette}`}>{label}</span>
}
