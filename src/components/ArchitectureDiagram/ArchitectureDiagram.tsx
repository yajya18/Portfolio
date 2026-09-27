type ArchitectureDiagramProps = {
  label?: string
  stages: string[]
  tone?: 'default' | 'inverted'
}

export default function ArchitectureDiagram({ label, stages, tone = 'default' }: ArchitectureDiagramProps) {
  const isInverted = tone === 'inverted'

  return (
    <div>
      {label && (
        <p
          className={`mb-5 font-mono text-xs uppercase tracking-[0.14em] ${
            isInverted ? 'text-paper/60' : 'text-mist-500'
          }`}
        >
          {label}
        </p>
      )}
      <ol className="flex flex-col">
        {stages.map((stage, i) => (
          <li key={stage} className="flex flex-col">
            <div
              className={`w-full max-w-xs rounded-sm border px-4 py-3 font-mono text-sm ${
                isInverted ? 'border-paper/25 text-paper' : 'border-mist-300 text-ink'
              }`}
            >
              {stage}
            </div>
            {i < stages.length - 1 && (
              <div className="ml-6 flex flex-col items-center">
                <span className={`h-5 w-px ${isInverted ? 'bg-paper/30' : 'bg-mist-300'}`} />
                <span className={`text-[10px] leading-none ${isInverted ? 'text-paper/40' : 'text-mist-400'}`}>
                  ▾
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
