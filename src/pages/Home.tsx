import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useReveal } from '../hooks/useReveal'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import StatBlock from '../components/StatBlock/StatBlock'
import ProjectCard from '../components/ProjectCard/ProjectCard'
// import { HeroVisual } from '../components/visuals'
import { siteConfig } from '../data/site'
import { projects, getProjectBySlug } from '../data/projects'
import { research } from '../data/research'

export default function Home() {
  useDocumentTitle('Yajya Arora — Software Engineer | ML · Backend · Databases')

  const heroReveal = useReveal<HTMLDivElement>()
  const workReveal = useReveal<HTMLDivElement>()
  const researchReveal = useReveal<HTMLDivElement>()
  const ctaReveal = useReveal<HTMLDivElement>()

  const airAware = getProjectBySlug('air-aware')!
  const loopin = getProjectBySlug('loopin')!
  const thermal = getProjectBySlug('thermal-management')!
  const activeResearch = research[0]

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="pt-14 md:pt-20">
        <Container>
          <div ref={heroReveal} className="reveal max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">
              Hello, I&rsquo;m
            </span>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 font-serif text-2xl text-mist-600 md:text-3xl">
              {siteConfig.role}
            </p>
            <p className="mt-4 font-mono text-sm text-accent">
              {siteConfig.focusAreas.join(' · ')}
            </p>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-mist-600">
              {siteConfig.heroIntro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/projects"
                className="underline-editorial font-sans text-sm font-medium text-ink"
              >
                View selected work <span aria-hidden="true">→</span>
              </Link>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-editorial font-sans text-sm font-medium text-ink"
              >
                Resume <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* <div className="mt-16 md:ml-16 md:mt-20 lg:ml-28">
            <div className="aspect-[16/10] border border-mist-200 bg-paper-dim p-6 md:p-10">
              <HeroVisual className="h-full w-full" />
            </div>
          </div> */}
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* STATS                                                            */}
      {/* ---------------------------------------------------------------- */}
        <section className="mt-14 border-y border-mist-200 md:mt-20">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-mist-200 py-8">
            <div className="pr-4">
              <StatBlock value={String(projects.length).padStart(2, '0')} label="Projects" />
            </div>
            <div className="px-4">
              <StatBlock value={String(research.length).padStart(2, '0')} label="Research Area" />
            </div>
            <div className="pl-4">
              <StatBlock value={siteConfig.education.year.split(' ')[0]} label="Year · CSE" />
            </div>
          </div>
        </Container>
      </section>

            {/* ---------------------------------------------------------------- */}
      {/* ABOUT TEASER                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="pt-20 md:pt-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-12">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">
              About
            </span>
            <div className="max-w-2xl">
              <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                I&rsquo;m a third-year Computer Science Engineering student at{' '}
                {siteConfig.education.institution}, interested in machine learning, backend
                systems, databases, and applied engineering research.
              </p>
              <Link
                to="/about"
                className="underline-editorial mt-6 inline-flex font-sans text-sm font-medium text-ink"
              >
                More about me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SELECTED WORK                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 md:py-28">
        <Container>
          <div ref={workReveal} className="reveal">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                kicker="Selected Work"
                title="Systems he&rsquo;s designed, built and shipped."
              />
              <Link
                to="/projects"
                className="underline-editorial mb-1 whitespace-nowrap font-sans text-sm font-medium text-ink"
              >
                View all projects <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <ProjectCard project={loopin} size="large" />
              </div>
              <ProjectCard project={thermal} size="medium" />
              <ProjectCard project={airAware} size="medium" />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* RESEARCH PREVIEW                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-navy py-20 md:py-28">
        <Container>
          <div ref={researchReveal} className="reveal">
            <SectionHeading
              kicker="Research"
              title="Applied ML for RF and antenna engineering."
              tone="inverted"
            />

            <div className="mt-10 border border-paper/15 p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-paper/50">{activeResearch.number}</span>
                  <h3 className="mt-3 max-w-xl font-serif text-2xl leading-snug text-paper md:text-3xl">
                    {activeResearch.title}
                  </h3>
                </div>
                <span className="rounded-sm border border-accent/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-accent">
                  {activeResearch.status}
                </span>
              </div>

              <p className="mt-4 font-mono text-sm text-paper/60">
                CST Studio · HFSS · Python · ML
              </p>

              <Link
                to={`/research/${activeResearch.slug}`}
                className="underline-editorial mt-6 inline-flex font-sans text-sm font-medium text-paper"
              >
                View research <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CONTACT CTA                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 md:py-28">
        <Container>
          <div
            ref={ctaReveal}
            className="reveal flex flex-col items-start justify-between gap-8 border-t border-mist-200 pt-14 md:flex-row md:items-end"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">
                Get in touch
              </span>
              <h2 className="mt-3 max-w-lg font-serif text-3xl leading-[1.15] text-ink md:text-4xl">
                Open to internships, research collaboration and technical conversations.
              </h2>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-sm bg-ink px-6 py-3.5 font-sans text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent-deep"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
