import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Container from '../components/Container/Container'

export default function NotFound() {
  useDocumentTitle('Page Not Found — Yajya Arora')

  return (
    <div className="flex min-h-[60vh] items-center py-24">
      <Container>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">404</span>
        <h1 className="mt-4 max-w-lg font-serif text-4xl leading-[1.15] text-ink md:text-5xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-4 max-w-md text-mist-600">
          The page you&rsquo;re looking for may have moved or never existed.
        </p>
        <Link
          to="/"
          className="underline-editorial mt-8 inline-flex font-sans text-sm font-medium text-ink"
        >
          Back to home <span aria-hidden="true">→</span>
        </Link>
      </Container>
    </div>
  )
}
