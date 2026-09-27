import type { ReactNode } from 'react'
import Container from '../Container/Container'

type CaseStudySectionProps = {
  heading: string
  children: ReactNode
  tone?: 'default' | 'dim'
}

export default function CaseStudySection({ heading, children, tone = 'default' }: CaseStudySectionProps) {
  return (
    <section className={`border-t border-mist-200 py-12 md:py-14 ${tone === 'dim' ? 'bg-paper-dim' : ''}`}>
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-12">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-mist-500">
            {heading}
          </h3>
          <div className="max-w-2xl font-sans text-base leading-relaxed text-ink">
            {children}
          </div>
        </div>
      </Container>
    </section>
  )
}
