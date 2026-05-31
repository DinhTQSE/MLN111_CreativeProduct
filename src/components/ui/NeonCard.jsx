import clsx from 'clsx'

export default function NeonCard({ children, className = '', accent, hoverable = true }) {
  const borderColor = accent ? `${accent}42` : 'rgba(28,14,6,0.18)'

  return (
    <div
      className={clsx('parchment-card relative', hoverable && 'cursor-default', className)}
      style={{ borderColor }}
    >
      {/* Viền accent màu mỏng ở cạnh trái */}
      {accent && (
        <div
          className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full"
          style={{ background: accent, opacity: 0.68 }}
        />
      )}
      {children}
    </div>
  )
}
