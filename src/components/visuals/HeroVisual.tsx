type Props = { className?: string }

const nodes = [
  { x: 120, y: 110 },
  { x: 240, y: 70 },
  { x: 340, y: 150 },
  { x: 200, y: 220 },
  { x: 400, y: 260 },
  { x: 90, y: 260 },
  { x: 300, y: 320 },
]

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 4],
  [3, 5],
  [3, 6],
  [2, 6],
]

export default function HeroVisual({ className = '' }: Props) {
  const dotSpacing = 28
  const dots: { x: number; y: number }[] = []
  for (let x = 20; x <= 520; x += dotSpacing) {
    for (let y = 20; y <= 520; y += dotSpacing) {
      dots.push({ x, y })
    }
  }

  return (
    <svg
      viewBox="0 0 560 560"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.35">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="1" fill="#B9BEC5" />
        ))}
      </g>

      <g>
        {edges.map(([a, b], i) => (
          <line
            key={`edge-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#8B92A0"
            strokeWidth="1"
            opacity="0.55"
          />
        ))}
        {nodes.map((n, i) => {
          const isAccent = i === 2 || i === 4
          return (
            <circle
              key={`node-${i}`}
              cx={n.x}
              cy={n.y}
              r={isAccent ? 7 : 5}
              fill={isAccent ? '#2F5D8A' : '#16171B'}
              opacity={isAccent ? 1 : 0.8}
            />
          )
        })}
      </g>

      {/* small waveform fragment, tucked in a corner */}
      <g transform="translate(60 460)" opacity="0.6">
        {[6, 12, 8, 18, 10, 22, 14, 9].map((h, i) => (
          <rect key={i} x={i * 12} y={20 - h / 2} width="5" height={h} rx="1" fill="#2C2C30" />
        ))}
      </g>
    </svg>
  )
}
