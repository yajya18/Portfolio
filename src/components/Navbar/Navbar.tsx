import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from '../Container/Container'
import { siteConfig } from '../../data/site'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Research', to: '/research' },
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-mist-200 bg-paper/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="font-mono text-sm font-medium tracking-[0.14em] text-ink"
          aria-label={`${siteConfig.name} — Home`}
        >
          {siteConfig.initials}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.slice(0, -1).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-sans text-sm transition-colors duration-200 ${
                  isActive ? 'text-ink' : 'text-mist-500 hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 font-sans text-sm font-medium text-ink underline-editorial md:inline-flex"
        >
          Get in touch <span aria-hidden="true">→</span>
        </Link>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-paper md:hidden"
        >
          <Container className="flex h-full flex-col justify-between py-10">
            <nav className="flex flex-col gap-1" aria-label="Mobile primary">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `border-b border-mist-200 py-4 font-serif text-3xl ${
                      isActive ? 'text-ink' : 'text-mist-400'
                    }`
                  }
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-mist-400">
              {siteConfig.email}
            </p>
          </Container>
        </div>
      )}
    </header>
  )
}
