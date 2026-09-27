import { Navigate, useParams } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Container from '../components/Container/Container'
import CaseStudySection from '../components/CaseStudySection/CaseStudySection'
import ArchitectureDiagram from '../components/ArchitectureDiagram/ArchitectureDiagram'
import TechTag from '../components/TechTag/TechTag'
import { AntennaVisual } from '../components/visuals'
import { getResearchBySlug } from '../data/research'

function ParamTable({ rows }: { rows: { name: string; description: string }[] }) {
  return (
    <div className="flex flex-col divide-y divide-mist-200 border-y border-mist-200">
      {rows.map((row) => (
        <div key={row.name} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4">
          <span className="font-mono text-xs uppercase tracking-wide text-ink">{row.name}</span>
          <span className="text-sm text-mist-600">{row.description}</span>
        </div>
      ))}
    </div>
  )
}

export default function ResearchDetail() {
  const { slug } = useParams<{ slug: string }>()
  const item = slug ? getResearchBySlug(slug) : undefined

  useDocumentTitle(item ? `${item.title} — Research — Yajya Arora` : 'Research — Yajya Arora')

  if (!item) {
    return <Navigate to="/research" replace />
  }

  return (
    <div className="pb-24">
      <div className="border-b border-mist-200 bg-navy py-14 md:py-20">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-paper/50">{item.number}</span>
            <span className="rounded-sm border border-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent">
              {item.status}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] text-paper md:text-5xl">
            {item.title}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-paper/60">
            {item.timeframe}
          </p>
          <p className="mt-5 max-w-xl text-paper/70">{item.description}</p>
          <p className="mt-4 font-mono text-xs text-paper/50">{item.domain.join(' · ')}</p>
        </Container>
      </div>

      <div className="border-b border-mist-200 bg-paper-dim">
        <Container>
          <div className="aspect-[16/8] py-10">
            <AntennaVisual className="h-full w-full" />
          </div>
        </Container>
      </div>

      <CaseStudySection heading="Research Question">
        <p>{item.content.researchQuestion}</p>
      </CaseStudySection>

      <CaseStudySection heading="Engineering Background" tone="dim">
        <p>{item.content.engineeringBackground}</p>
        <div className="mt-8">
          <ArchitectureDiagram label="Design Progression" stages={item.progression} />
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Simulation Method">
        <p>{item.content.simulationMethod}</p>
        <div className="mt-8 flex flex-col gap-8 md:flex-row">
          <div className="flex-1">
            <p className="mb-3 font-mono text-xs uppercase tracking-wide text-mist-500">
              Single-Element Parameters
            </p>
            <ParamTable rows={item.parameters} />
          </div>
          <div className="flex-1">
            <p className="mb-3 font-mono text-xs uppercase tracking-wide text-mist-500">
              MIMO Metrics
            </p>
            <ParamTable rows={item.mimoMetrics} />
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Dataset Generation" tone="dim">
        <p>{item.content.datasetGeneration}</p>
      </CaseStudySection>

      <CaseStudySection heading="ML Method">
        <p>{item.content.mlMethod}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.mlModels.map((model) => (
            <TechTag key={model} label={model} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Validation" tone="dim">
        <p>{item.content.validation}</p>
        <div className="mt-8">
          <ArchitectureDiagram label="Research Loop" stages={item.researchLoop} />
          <p className="mt-4 max-w-md text-sm text-mist-500">
            This loop repeats as the design is refined — predicted dimensions are only treated as
            validated once a fresh, independent simulation confirms them.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Current Status">
        <p>{item.content.currentStatus}</p>
      </CaseStudySection>

      <CaseStudySection heading="Technology" tone="dim">
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </CaseStudySection>
    </div>
  )
}
