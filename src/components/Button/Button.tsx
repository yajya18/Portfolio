import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  href?: string
  external?: boolean
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'link'
  type?: 'button' | 'submit'
  className?: string
}

const base =
  'inline-flex items-center gap-2 text-sm transition-colors duration-200 focus-visible:outline-offset-4'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'rounded-sm bg-ink px-5 py-3 font-sans font-medium text-paper hover:bg-accent-deep',
  ghost:
    'rounded-sm border border-mist-300 px-5 py-3 font-sans font-medium text-ink hover:border-ink',
  link: 'font-sans font-medium text-ink underline-editorial',
}

export default function Button({
  children,
  href,
  external,
  onClick,
  variant = 'link',
  type = 'button',
  className = '',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
