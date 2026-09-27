import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { SkillDomain } from '../../data/skills'
import type { Project } from '../../data/projects'
import type { Research } from '../../data/research'

type Evidence = { label: string; href: string }

type SkillsTaxonomyProps = {
  domains: SkillDomain[]
  projects: Project[]
  research: Research[]
}

export default function SkillsTaxonomy({ domains, projects, research }: SkillsTaxonomyProps) {
  const [selected, setSelected] = useState<string | null>(null)

  function findEvidence(relatedTo?: string[]): Evidence[] {
    if (!relatedTo || relatedTo.length === 0) return []
    const results: Evidence[] = []
    relatedTo.forEach((slug) => {
      const project = projects.find((p) => p.slug === slug)
      if (project) {
        results.push({ label: project.title, href: `/projects/${project.slug}` })
        return
      }
      const researchItem = research.find((r) => r.slug === slug)
      if (researchItem) {
        results.push({ label: researchItem.title, href: `/research/${researchItem.slug}` })
      }
    })
    return results
  }

  let selectedEvidence: Evidence[] = []
  if (selected) {
    for (const domain of domains) {
      const item = domain.items.find((i) => i.name === selected)
      if (item) {
        selectedEvidence = findEvidence(item.relatedTo)
        break
      }
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
        {domains.map((domain) => (
          <div key={domain.id}>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-mist-500">
              {domain.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {domain.items.map((item) => {
                const hasEvidence = !!item.relatedTo?.length
                const isActive = selected === item.name
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => hasEvidence && setSelected(isActive ? null : item.name)}
                    aria-pressed={isActive}
                    className={`rounded-sm border px-3 py-1.5 font-sans text-sm transition-colors duration-200 ${
                      isActive
                        ? 'border-accent bg-accent-soft text-accent'
                        : hasEvidence
                          ? 'cursor-pointer border-mist-300 text-ink hover:border-accent hover:text-accent'
                          : 'cursor-default border-mist-200 text-mist-500'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div
        aria-live="polite"
        className={`mt-10 overflow-hidden rounded-sm border transition-all duration-300 ${
          selected
            ? 'max-h-40 border-mist-200 bg-paper-dim p-6 opacity-100'
            : 'max-h-0 border-transparent p-0 opacity-0'
        }`}
      >
        {selected && (
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-mist-500">
              {selected} — evidenced in
            </p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
              {selectedEvidence.length > 0 ? (
                selectedEvidence.map((e) => (
                  <Link key={e.href} to={e.href} className="underline-editorial font-serif text-lg text-ink">
                    {e.label} →
                  </Link>
                ))
              ) : (
                <span className="font-sans text-sm text-mist-500">No linked project yet.</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
