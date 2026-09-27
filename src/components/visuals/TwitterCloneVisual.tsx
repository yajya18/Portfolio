type Props = { className?: string }

function PostRow({ y }: { y: number }) {
  return (
    <g transform={`translate(40 ${y})`}>
      <circle cx="14" cy="14" r="14" fill="#E9EBED" stroke="#D8DBDF" />
      <rect x="40" y="4" width="80" height="7" rx="2" fill="#B9BEC5" />
      <rect x="40" y="18" width="340" height="6" rx="2" fill="#E9EBED" />
      <rect x="40" y="30" width="260" height="6" rx="2" fill="#E9EBED" />
      <circle cx="46" cy="52" r="3" fill="none" stroke="#B9BEC5" />
      <rect x="60" y="49" width="16" height="6" rx="1" fill="#E9EBED" />
      <path d="M96 49 h16 l-4 6 h-8 z" fill="none" stroke="#B9BEC5" />
      <line x1="0" y1="76" x2="400" y2="76" stroke="#E9EBED" />
    </g>
  )
}

export default function TwitterCloneVisual({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <PostRow y={24} />
      <PostRow y={110} />
      <PostRow y={196} />
    </svg>
  )
}
