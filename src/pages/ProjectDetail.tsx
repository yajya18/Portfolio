import { Navigate, useParams } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Container from '../components/Container/Container'
import CaseStudySection from '../components/CaseStudySection/CaseStudySection'
import ArchitectureDiagram from '../components/ArchitectureDiagram/ArchitectureDiagram'
import TechTag from '../components/TechTag/TechTag'
import { visualMap } from '../components/visuals'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useDocumentTitle(project ? `${project.title} — Yajya Arora` : 'Project — Yajya Arora')

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const Visual = visualMap[project.visual]

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="border-b border-mist-200 py-14 md:py-20">
        <Container>
          <span className="font-mono text-xs text-mist-400">{project.number}</span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl font-sans text-lg text-mist-600">{project.tagline}</p>

          {(project.github || project.liveDemo) && (
            <div className="mt-6 flex gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-editorial font-sans text-sm font-medium text-ink"
                >
                  GitHub ↗
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-editorial font-sans text-sm font-medium text-ink"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          )}

          {project.role && (
            <p className="mt-6 font-mono text-xs uppercase tracking-wide text-mist-500">
              {project.role}
            </p>
          )}
        </Container>
      </div>

      {/* Visual banner */}
      <div className="border-b border-mist-200 bg-paper-dim">
        <Container>
          <div className="h-[280px] py-10 sm:h-[340px] md:h-[400px]">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} — ${project.tagline}`}
                className="h-full w-full object-cover"
              />
            ) : (
              Visual && <Visual className="h-full w-full" />
            )}
          </div>
        </Container>
      </div>

      <CaseStudySection heading="Overview">
        <p>{project.caseStudy.overview}</p>
      </CaseStudySection>

      <CaseStudySection heading="Problem" tone="dim">
        <p>{project.caseStudy.problem}</p>
      </CaseStudySection>

      <CaseStudySection heading="Approach">
        <p>{project.caseStudy.approach}</p>
      </CaseStudySection>

      <CaseStudySection heading="Architecture" tone="dim">
        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:gap-16">
          {project.architecture.map((flow) => (
            <ArchitectureDiagram key={flow.label} label={flow.label} stages={flow.stages} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Implementation">
        <ul className="flex flex-col gap-3">
          {project.caseStudy.implementation.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection heading="Key Technical Decisions" tone="dim">
        <div className="flex flex-col gap-8">
          {project.caseStudy.keyDecisions.map((decision) => (
            <div key={decision.title}>
              <h4 className="font-serif text-lg text-ink">{decision.title}</h4>
              <p className="mt-1.5 text-mist-600">{decision.detail}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Results / Current State">
        <p>{project.caseStudy.results}</p>
      </CaseStudySection>

      <CaseStudySection heading="Lessons" tone="dim">
        <p>{project.caseStudy.lessons}</p>
      </CaseStudySection>

      <CaseStudySection heading="Technology">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </CaseStudySection>
    </div>
  )
}
