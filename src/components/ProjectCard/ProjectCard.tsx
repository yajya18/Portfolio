import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { visualMap } from '../visuals'
import TechTag from '../TechTag/TechTag'

type ProjectCardProps = {
  project: Project
  size?: 'large' | 'medium' | 'small'
}

export default function ProjectCard({ project, size }: ProjectCardProps) {
  const effectiveSize = size ?? project.size
  const isLarge = effectiveSize === 'large'
  const Visual = visualMap[project.visual]

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block h-full border border-mist-200 bg-paper transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(22,23,27,0.35)]"
    >
      <div
        className={`relative overflow-hidden border-b border-mist-200 bg-paper-dim ${
          isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} — ${project.tagline}`}
            className="h-full w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.04]"
          />
        ) : (
          Visual && (
            <div className="h-full w-full p-6 transition-transform duration-500 ease-editorial group-hover:scale-[1.03] md:p-8">
              <Visual className="h-full w-full" />
            </div>
          )
        )}
      </div>

      <div className={`p-6 ${isLarge ? 'md:p-8' : ''}`}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-mist-400">{project.number}</span>
          <span className="font-mono text-[11px] uppercase tracking-wide text-mist-400">
            {project.categories[0]}
          </span>
        </div>
        <h3
          className={`underline-editorial mt-3 font-serif text-ink ${
            isLarge ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-mist-600">
          {project.tagline}
        </p>
        {isLarge && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
