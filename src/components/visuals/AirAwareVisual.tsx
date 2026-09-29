import { useId } from 'react'

type Props = { className?: string }

export default function AirAwareVisual({ className = '' }: Props) {
  const clipId = useId()
  const gradId = useId()
  const gridLines = [70, 120, 170, 220, 270, 320, 370]

  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="20" y="20" width="440" height="280" rx="2" />
        </clipPath>
        <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2F5D8A" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2F5D8A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="20" y="20" width="440" height="280" rx="2" fill="#EFEAE0" stroke="#D8DBDF" />

      <g clipPath={`url(#${clipId})`} opacity="0.6">
        {gridLines.map((x) => (
          <line key={`v-${x}`} x1={x} y1="20" x2={x} y2="300" stroke="#E9EBED" strokeLinecap="butt" />
        ))}
        {[70, 120, 170, 220, 270].map((y) => (
          <line key={`h-${y}`} x1="20" y1={y} x2="460" y2={y} stroke="#E9EBED" strokeLinecap="butt" />
        ))}
      </g>

      {/* stations */}
      <circle cx="90" cy="90" r="4.5" fill="#2C2C30" />
      <circle cx="160" cy="200" r="4.5" fill="#2C2C30" />
      <circle cx="260" cy="70" r="4.5" fill="#2C2C30" />
      <circle cx="360" cy="150" r="4.5" fill="#2C2C30" />
      <circle cx="410" cy="250" r="4.5" fill="#2C2C30" />
      <circle cx="140" cy="120" r="4.5" fill="#2C2C30" />

      {/* queried location + interpolation radius */}
      <circle cx="230" cy="175" r="48" fill={`url(#${gradId})`} />
      <circle cx="230" cy="175" r="42" fill="none" stroke="#2F5D8A" strokeWidth="1" opacity="0.35" />
      <circle cx="230" cy="175" r="22" fill="none" stroke="#2F5D8A" strokeWidth="1" opacity="0.5" strokeDasharray="1 4" />

      {/* weighted connections to nearest stations, weight by proximity */}
      <line x1="230" y1="175" x2="160" y2="200" stroke="#2F5D8A" strokeWidth="2" opacity="0.7" />
      <line x1="230" y1="175" x2="140" y2="120" stroke="#2F5D8A" strokeWidth="1.5" opacity="0.45" />
      <line x1="230" y1="175" x2="260" y2="70" stroke="#2F5D8A" strokeWidth="1" opacity="0.25" />

      <circle cx="230" cy="175" r="6" fill="#2F5D8A" />
      <circle cx="230" cy="175" r="6" fill="none" stroke="#F7F4EC" strokeWidth="1.5" />
    </svg>
  )
}