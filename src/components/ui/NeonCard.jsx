import clsx from 'clsx'

export default function NeonCard({ children, className = '', accent, hoverable = true }) {
  return (
    <div className={clsx('editorial-note text-breathe relative', hoverable && 'cursor-default', className)}>
      {accent && (
        <div
          className="absolute left-0 top-2 bottom-2 w-px"
          style={{ background: accent, opacity: 0.78 }}
        />
      )}
      {children}
    </div>
  )
}
