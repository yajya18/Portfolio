type Props = { className?: string }

export default function LoopinVisual({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* presence row */}
      <circle cx="40" cy="34" r="8" fill="#B9BEC5" />
      <circle cx="64" cy="34" r="8" fill="#8B92A0" />
      <circle cx="88" cy="34" r="9" fill="#F7F4EC" stroke="#2F5D8A" strokeWidth="2" />
      <circle cx="88" cy="34" r="2" fill="#2F5D8A" />

      {/* column 1 */}
      <rect x="40" y="64" width="120" height="26" rx="3" fill="none" stroke="#D8DBDF" />
      <rect x="40" y="100" width="96" height="26" rx="3" fill="none" stroke="#D8DBDF" />
      <rect x="40" y="136" width="120" height="26" rx="3" fill="none" stroke="#D8DBDF" />

      {/* column 2 (in progress, one highlighted) */}
      <rect x="180" y="64" width="120" height="26" rx="3" fill="none" stroke="#D8DBDF" />
      <rect x="180" y="100" width="120" height="30" rx="3" fill="#E7EEF5" stroke="#2F5D8A" strokeWidth="1.5" />

      {/* column 3 (dense / done) */}
      <rect x="320" y="64" width="120" height="20" rx="3" fill="none" stroke="#E9EBED" />
      <rect x="320" y="96" width="120" height="20" rx="3" fill="none" stroke="#E9EBED" />
      <rect x="320" y="128" width="120" height="20" rx="3" fill="none" stroke="#E9EBED" />
      <rect x="320" y="160" width="120" height="20" rx="3" fill="none" stroke="#E9EBED" />

      {/* sync line indicating real-time movement */}
      <path
        d="M136 113 C 160 113, 160 115, 180 115"
        fill="none"
        stroke="#8B92A0"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      {/* column dividers */}
      <line x1="170" y1="60" x2="170" y2="200" stroke="#E9EBED" />
      <line x1="310" y1="60" x2="310" y2="200" stroke="#E9EBED" />

      {/* desktop client indicator */}
      <g transform="translate(40 230)">
        <rect x="0" y="0" width="160" height="56" rx="3" fill="none" stroke="#D8DBDF" />
        <line x1="0" y1="16" x2="160" y2="16" stroke="#D8DBDF" />
        <circle cx="14" cy="8" r="2.5" fill="#B9BEC5" />
        <text x="12" y="34" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#6B7280" letterSpacing="0.5">
          GIT ACTIVITY
        </text>
        <rect x="12" y="40" width="70" height="6" rx="1" fill="#E9EBED" />
        <rect x="12" y="40" width="42" height="6" rx="1" fill="#2F5D8A" opacity="0.6" />
      </g>
    </svg>
  )
}
