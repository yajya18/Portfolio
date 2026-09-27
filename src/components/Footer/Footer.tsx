import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import { siteConfig } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  const { socials } = siteConfig

  return (
    <footer className="border-t border-mist-200 bg-paper">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-xl text-ink">{siteConfig.name}</p>
          <p className="mt-1 font-sans text-sm text-mist-500">{siteConfig.role}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wide text-mist-500">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
            Email
          </a>
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          )}
          {socials.leetcode && (
            <a href={socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LeetCode
            </a>
          )}
          <Link to="/contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>
      </Container>
      <Container className="border-t border-mist-200 py-6">
        <p className="font-mono text-[11px] text-mist-400">
          © {year} {siteConfig.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
      </Container>
    </footer>
  )
}
