import { useId } from 'react'

type Props = { className?: string }

export default function AntennaVisual({ className = '' }: Props) {
  const patchGradId = useId()

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
        <linearGradient id={patchGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF1F8" />
          <stop offset="100%" stopColor="#CFE0EF" />
        </linearGradient>
      </defs>

      {/* ground plane, element 1 */}
      <rect x="40" y="70" width="200" height="150" fill="#F5F6F7" stroke="#8B92A0" />
      {/* DGS notches */}
      <rect x="55" y="85" width="16" height="10" fill="#F7F4EC" stroke="#B9BEC5" />
      <rect x="55" y="205" width="16" height="10" fill="#F7F4EC" stroke="#B9BEC5" />

      {/* patch */}
      <rect x="90" y="115" width="100" height="70" fill={`url(#${patchGradId})`} stroke="#2F5D8A" strokeWidth="2" />
      {/* feed stub */}
      <rect x="130" y="185" width="20" height="35" fill={`url(#${patchGradId})`} stroke="#2F5D8A" strokeWidth="2" />

      {/* dimension: length (L) */}
      <line x1="90" y1="100" x2="190" y2="100" stroke="#2C2C30" strokeWidth="1" />
      <line x1="90" y1="95" x2="90" y2="105" stroke="#2C2C30" strokeLinecap="butt" />
      <line x1="190" y1="95" x2="190" y2="105" stroke="#2C2C30" strokeLinecap="butt" />
      <text x="134" y="92" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="11" fill="#2C2C30">
        L
      </text>

      {/* dimension: width (W) */}
      <line x1="205" y1="115" x2="205" y2="185" stroke="#2C2C30" strokeWidth="1" />
      <line x1="200" y1="115" x2="210" y2="115" stroke="#2C2C30" strokeLinecap="butt" />
      <line x1="200" y1="185" x2="210" y2="185" stroke="#2C2C30" strokeLinecap="butt" />
      <text x="213" y="154" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="11" fill="#2C2C30">
        W
      </text>

      {/* second MIMO element, faded */}
      <g opacity="0.45">
        <rect x="300" y="70" width="140" height="150" fill="#F5F6F7" stroke="#8B92A0" />
        <rect x="330" y="115" width="70" height="70" fill={`url(#${patchGradId})`} stroke="#2F5D8A" strokeWidth="1.5" />
        <rect x="355" y="185" width="14" height="30" fill={`url(#${patchGradId})`} stroke="#2F5D8A" strokeWidth="1.5" />
      </g>

      {/* isolation spacing arrow */}
      <line x1="240" y1="145" x2="300" y2="145" stroke="#2F5D8A" strokeWidth="1.25" strokeDasharray="1 5" />
      <text x="245" y="137" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="9" fill="#2F5D8A" letterSpacing="0.5">
        ISOLATION
      </text>
    </svg>
  )
}