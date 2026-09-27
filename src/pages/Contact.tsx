import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Container from '../components/Container/Container'
import { siteConfig } from '../data/site'

type ContactLink = {
  label: string
  value: string
  href: string
}

export default function Contact() {
  useDocumentTitle('Contact — Yajya Arora')

  const { email, socials, resumeUrl } = siteConfig

  const links: ContactLink[] = [
    { label: 'Email', value: email, href: `mailto:${email}` },
    ...(socials.linkedin ? [{ label: 'LinkedIn', value: 'linkedin.com', href: socials.linkedin }] : []),
    ...(socials.github ? [{ label: 'GitHub', value: 'github.com', href: socials.github }] : []),
    ...(socials.leetcode ? [{ label: 'LeetCode', value: 'leetcode.com', href: socials.leetcode }] : []),
  ]

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">
            Get in touch
          </span>
          <h1 className="mt-5 font-serif text-4xl leading-[1.15] text-ink md:text-5xl">
            Interested in discussing a project, research, collaboration, or opportunity?
          </h1>

          <div className="mt-12 flex flex-col divide-y divide-mist-200 border-y border-mist-200">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="group flex items-baseline justify-between py-4"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-mist-500">
                  {link.label}
                </span>
                <span className="underline-editorial font-serif text-lg text-ink">
                  {link.label === 'Email' ? link.value : `${link.value} →`}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href={`mailto:${email}`}
              className="rounded-sm bg-ink px-6 py-3.5 font-sans text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent-deep"
            >
              Send an email <span aria-hidden="true">→</span>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-editorial inline-flex items-center font-sans text-sm font-medium text-ink"
            >
              Download résumé <span aria-hidden="true" className="ml-1">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
