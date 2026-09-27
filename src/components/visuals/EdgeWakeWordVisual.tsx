import { useId } from 'react'

type Props = { className?: string }

const bars = [10, 16, 9, 22, 14, 30, 18, 40, 52, 60, 46, 38, 20, 14, 10, 8, 12, 9, 15, 10]

export default function EdgeWakeWordVisual({ className = '' }: Props) {
  const arrowId = useId()
  const barWidth = 8
  const gap = 6
  const startX = 60
  const centerY = 150
  const triggerStart = 7
  const triggerEnd = 12

  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {bars.map((h, i) => {
        const x = startX + i * (barWidth + gap)
        const isTrigger = i >= triggerStart && i <= triggerEnd
        return (
          <rect
            key={i}
            x={x}
            y={centerY - h}
            width={barWidth}
            height={h * 2}
            rx="1.5"
            fill={isTrigger ? '#2F5D8A' : '#B9BEC5'}
          />
        )
      })}

      {/* device silhouette */}
      <g transform="translate(40 230)">
        <rect x="0" y="0" width="90" height="50" rx="3" fill="none" stroke="#8B92A0" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={`p-${i}`} x={10 + i * 16} y="50" width="4" height="8" fill="#8B92A0" />
        ))}
        <text x="10" y="30" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#6B7280">
          ESP32
        </text>
      </g>

      {/* arrow to cloud */}
      <path d="M400 150 h30" stroke="#2F5D8A" strokeWidth="1.5" markerEnd={`url(#${arrowId})`} />
      <defs>
        <marker id={arrowId} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="#2F5D8A" />
        </marker>
      </defs>

      {/* cloud */}
      <g transform="translate(438 128)">
        <circle cx="10" cy="18" r="12" fill="#F7F4EC" stroke="#2F5D8A" />
        <circle cx="24" cy="12" r="15" fill="#F7F4EC" stroke="#2F5D8A" />
        <circle cx="38" cy="20" r="11" fill="#F7F4EC" stroke="#2F5D8A" />
        <rect x="6" y="18" width="38" height="14" fill="#F7F4EC" stroke="none" />
        <path d="M4 22 h40" stroke="#2F5D8A" fill="none" />
      </g>
      <text x="410" y="185" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#2F5D8A">
        CLOUD ASR
      </text>
    </svg>
  )
}
