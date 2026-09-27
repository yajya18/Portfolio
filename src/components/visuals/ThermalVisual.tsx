type Props = { className?: string }

export default function ThermalVisual({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* axes */}
      <line x1="50" y1="30" x2="50" y2="260" stroke="#8B92A0" />
      <line x1="50" y1="260" x2="440" y2="260" stroke="#8B92A0" />
      <text x="50" y="20" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#6B7280">
        TEMP
      </text>
      <text x="410" y="278" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#6B7280">
        TIME
      </text>

      {/* throttle threshold */}
      <line x1="50" y1="95" x2="440" y2="95" stroke="#B9BEC5" strokeDasharray="4 4" />
      <text x="356" y="90" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B92A0">
        THRESHOLD
      </text>

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
        strokeWidth="2"
        strokeDasharray="5 4"
      />

      <circle cx="265" cy="92" r="4" fill="#2F5D8A" />
      <text x="240" y="78" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#2F5D8A">
        PREDICTED
      </text>

      <circle cx="300" cy="100" r="3.5" fill="#2C2C30" />
      <text x="304" y="118" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#6B7280">
        ACTUAL PEAK
      </text>
    </svg>
  )
}
