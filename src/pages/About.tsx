import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Container from '../components/Container/Container'
import { siteConfig } from '../data/site'

export default function About() {
  useDocumentTitle('About — Yajya Arora')

  const { education, cgpa, leetcodeCount, certifications } = siteConfig

  return (
    <div className="py-16 md:py-24">
      <Container>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">About</span>

        <div className="mt-6 max-w-2xl">
          <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
            I&rsquo;m Yajya Arora, a third-year Computer Science Engineering student interested in
            machine learning, backend systems, databases, and applied engineering research.
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-mist-600">
            My work spans full-stack and real-time applications, statistical learning, spatial
            databases, embedded systems, and ML-driven engineering problems.
          </p>
          <p className="mt-5 font-sans text-lg leading-relaxed text-mist-600">
            The common thread across these projects is understanding how data, software and
            systems interact in real-world applications — whether that&rsquo;s a real-time
            collaboration platform, a spatial database estimating air quality, or a machine
            learning model anticipating heat before it happens.
          </p>
        </div>

        {/* Data block */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-mist-200 pt-14 md:grid-cols-2">
          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-mist-500">
              Education
            </h2>
            <p className="mt-4 font-serif text-xl text-ink">{education.institution}</p>
            <p className="mt-1 text-mist-600">{education.location}</p>
            <div className="mt-4 flex flex-col gap-1 font-sans text-sm text-mist-600">
              <span>{education.degree}</span>
              <span>{education.duration}</span>
            </div>
            <span className="mt-4 inline-block rounded-sm border border-mist-300 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-mist-600">
              {education.year}
            </span>
          </div>

          {/* Academic / technical profile */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-mist-500">
              Academic / Technical Profile
            </h2>
            <dl className="mt-4 flex flex-col gap-4">
              <div className="flex items-baseline justify-between border-b border-mist-100 pb-3">
                <dt className="font-sans text-sm text-mist-600">Year</dt>
                <dd className="font-mono text-sm text-ink">{education.year}</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-mist-100 pb-3">
                <dt className="font-sans text-sm text-mist-600">Program</dt>
                <dd className="font-mono text-sm text-ink">Computer Science Engineering</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-mist-100 pb-3">
                <dt className="font-sans text-sm text-mist-600">CGPA</dt>
                <dd className="font-mono text-sm text-ink">{cgpa}</dd>
              </div>
              <div className="flex items-baseline justify-between pb-3">
                <dt className="font-sans text-sm text-mist-600">LeetCode</dt>
                <dd className="font-mono text-sm text-ink">{leetcodeCount} problems</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 border-t border-mist-200 pt-10">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-mist-500">
            Certifications / Learning
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-mist-100 pb-4"
              >
                <div>
                  <p className="font-serif text-lg text-ink">{cert.name}</p>
                  <p className="text-sm text-mist-500">{cert.provider}</p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wide text-mist-500">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
