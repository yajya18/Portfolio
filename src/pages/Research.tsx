import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import { research } from '../data/research'

export default function Research() {
  useDocumentTitle('Research — Yajya Arora')

  return (
    <div>
      <section className="bg-navy py-16 md:py-24">
        <Container>
          <SectionHeading
            kicker="Research"
            title="Applied machine learning and computational approaches to real-world engineering problems."
            tone="inverted"
          />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col divide-y divide-mist-200 border-t border-mist-200">
            {research.map((item) => (
              <article key={item.id} className="grid grid-cols-1 gap-6 py-12 md:grid-cols-[80px_1fr_auto] md:items-start md:gap-10">
                <span className="font-mono text-sm text-mist-400">{item.number}</span>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                      {item.title}
                    </h2>
                    <span className="rounded-sm border border-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-mist-600">{item.description}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wide text-mist-500">
                    {item.domain.join(' · ')}
                  </p>
                </div>

                <div className="md:pt-2">
                  <Link
                    to={`/research/${item.slug}`}
                    className="underline-editorial whitespace-nowrap font-sans text-sm font-medium text-ink"
                  >
                    Explore research <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
