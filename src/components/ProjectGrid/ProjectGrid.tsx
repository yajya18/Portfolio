import type { Project } from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'

type ProjectGridProps = {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="font-sans text-sm text-mist-500">
        No projects match this filter yet.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className={project.size === 'large' ? 'md:col-span-2' : ''}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}
