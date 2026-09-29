import { useId } from 'react'

type Props = { className?: string }

export default function LoopinVisual({ className = '' }: Props) {
  const gradId = useId()

  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      strokeLinecap="round"
      strokeLinejoin="round"
      textRendering="optimizeLegibility"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E7EEF5" />
          <stop offset="100%" stopColor="#D3E1EE" />
        </linearGradient>
      </defs>

      {/* presence row */}
      <circle cx="40" cy="32" r="8" fill="#B9BEC5" />
      <circle cx="64" cy="32" r="8" fill="#8B92A0" />
      <circle cx="88" cy="32" r="9" fill="#F7F4EC" stroke="#2F5D8A" strokeWidth="2" />
      <circle cx="88" cy="32" r="2" fill="#2F5D8A" />

      {/* column 1 */}
      <rect x="40" y="64" width="120" height="24" rx="3" fill="none" stroke="#D8DBDF" />
      <rect x="40" y="96" width="96" height="24" rx="3" fill="none" stroke="#D8DBDF" />
      <rect x="40" y="128" width="120" height="24" rx="3" fill="none" stroke="#D8DBDF" />

      {/* column 2 (in progress, one highlighted) */}
      <rect x="184" y="64" width="120" height="24" rx="3" fill="none" stroke="#D8DBDF" />
      <rect x="184" y="96" width="120" height="32" rx="3" fill={`url(#${gradId})`} stroke="#2F5D8A" strokeWidth="2" />

      {/* column 3 (dense / done) */}
      <rect x="328" y="64" width="112" height="16" rx="3" fill="none" stroke="#E9EBED" />
      <rect x="328" y="88" width="112" height="16" rx="3" fill="none" stroke="#E9EBED" />
      <rect x="328" y="112" width="112" height="16" rx="3" fill="none" stroke="#E9EBED" />
      <rect x="328" y="136" width="112" height="16" rx="3" fill="none" stroke="#E9EBED" />

      {/* sync line indicating real-time movement */}
      <path
        d="M136 112 C 156 112, 164 112, 184 112"
        fill="none"
        stroke="#8B92A0"
        strokeWidth="1.25"
        strokeDasharray="1 5"
      />

      {/* column dividers */}
      <line x1="172" y1="56" x2="172" y2="200" stroke="#E9EBED" strokeLinecap="butt" />
      <line x1="316" y1="56" x2="316" y2="200" stroke="#E9EBED" strokeLinecap="butt" />

      {/* desktop client indicator */}
      <g transform="translate(40 232)">
        <rect x="0" y="0" width="160" height="56" rx="3" fill="none" stroke="#D8DBDF" />
        <line x1="0" y1="16" x2="160" y2="16" stroke="#D8DBDF" strokeLinecap="butt" />
        <circle cx="14" cy="8" r="2.5" fill="#B9BEC5" />
        <text
          x="12"
          y="33"
          fontFamily="'IBM Plex Mono', ui-monospace, monospace"
          fontSize="9"
          fill="#6B7280"
          letterSpacing="0.6"
        >
          GIT ACTIVITY
        </text>
        <rect x="12" y="40" width="72" height="6" rx="2" fill="#E9EBED" />
        <rect x="12" y="40" width="44" height="6" rx="2" fill="#2F5D8A" opacity="0.7" />
      </g>
    </svg>
  )
}