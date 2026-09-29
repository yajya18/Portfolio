import { useId } from 'react'

type Props = { className?: string }

export default function ThermalVisual({ className = '' }: Props) {
  const areaGradId = useId()

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
        <linearGradient id={areaGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2C2C30" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2C2C30" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* axes */}
      <line x1="50" y1="30" x2="50" y2="260" stroke="#8B92A0" strokeLinecap="butt" />
      <line x1="50" y1="260" x2="440" y2="260" stroke="#8B92A0" strokeLinecap="butt" />
      <text x="50" y="20" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="10" fill="#6B7280" letterSpacing="0.5">
        TEMP
      </text>
      <text x="406" y="278" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="10" fill="#6B7280" letterSpacing="0.5">
        TIME
      </text>

      {/* throttle threshold */}
      <line x1="50" y1="95" x2="440" y2="95" stroke="#B9BEC5" strokeDasharray="1 5" />
      <text x="352" y="90" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="9" fill="#8B92A0" letterSpacing="0.5">
        THRESHOLD
      </text>

      {/* area fill under actual telemetry curve, for depth */}
      <path
        d="M50 220 C 110 215, 150 205, 190 190 S 260 130, 300 100 S 360 150, 400 170 S 430 190, 440 195 L 440 260 L 50 260 Z"
        fill={`url(#${areaGradId})`}
        stroke="none"
      />

      {/* actual telemetry curve */}
      <path
        d="M50 220 C 110 215, 150 205, 190 190 S 260 130, 300 100 S 360 150, 400 170 S 430 190, 440 195"
        fill="none"
        stroke="#2C2C30"
        strokeWidth="2"
      />

      {/* predicted curve, anticipating the spike earlier */}
      <path
        d="M50 224 C 100 218, 140 195, 175 165 S 230 105, 265 92"
        fill="none"
        stroke="#2F5D8A"
        strokeWidth="2.5"
        strokeDasharray="1 6"
      />

      <circle cx="265" cy="92" r="4.5" fill="#2F5D8A" />
      <text x="240" y="78" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="9" fill="#2F5D8A" letterSpacing="0.5">
        PREDICTED
      </text>

      <circle cx="300" cy="100" r="4" fill="#2C2C30" />
      <text x="304" y="118" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="9" fill="#6B7280" letterSpacing="0.5">
        ACTUAL PEAK
      </text>
    </svg>
  )
}