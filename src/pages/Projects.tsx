import { useMemo, useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ProjectGrid from '../components/ProjectGrid/ProjectGrid'
import { projects, type ProjectCategory } from '../data/projects'

const categories: Array<ProjectCategory | 'All'> = [
  'All',
  'Software',
  'ML',
  'Backend',
  'Databases',
  'Systems',
  'IoT',
]

export default function Projects() {
  useDocumentTitle('Projects — Yajya Arora')
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((project) => project.categories.includes(active as ProjectCategory))
  }, [active])

  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeading
          kicker="Projects"
          title="A working record of systems he's designed and built."
          description="Full-stack platforms, spatial databases, embedded pipelines and applied ML — filtered by the kind of engineering each one demonstrates."
        />

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = active === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'border-ink bg-ink text-paper'
                    : 'border-mist-300 text-mist-600 hover:border-ink hover:text-ink'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="mt-10">
          <ProjectGrid projects={filtered} />
        </div>
      </Container>
    </div>
  )
}
