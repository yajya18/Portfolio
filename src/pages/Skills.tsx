import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import SkillsTaxonomy from '../components/SkillsTaxonomy/SkillsTaxonomy'
import { skillDomains } from '../data/skills'
import { projects } from '../data/projects'
import { research } from '../data/research'

export default function Skills() {
  useDocumentTitle('Skills — Yajya Arora')

  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeading
          kicker="Skills"
          title="Breadth across the stack, organized by what it's for."
          description="Not a ratings chart — a map of tools and concepts grouped by domain. Skills with a filled outline link to the project or research that actually put them to use; click one to see where."
        />

        <div className="mt-14">
          <SkillsTaxonomy domains={skillDomains} projects={projects} research={research} />
        </div>
      </Container>
    </div>
  )
}
