import clsx from 'clsx'

export default function ChapterTitle({ index, period, label, title, subtitle, accent, className = '' }) {
  return (
    <div className={clsx('space-y-4', className)}>
      {/* Số + nhãn stamp */}
      <div className="flex items-center gap-5">
        {index && (
          <span
            className="font-display font-black text-7xl leading-none select-none"
            style={{ color: accent, opacity: 0.14 }}
          >
            {index}
          </span>
        )}
        <div className="space-y-2">
          {period && (
            <p
              className="font-hand text-base"
              style={{ color: accent, opacity: 0.95, display: 'inline-block', transform: 'rotate(-1deg)' }}
            >
              {period}
            </p>
          )}
          {label && (
            <div>
              <span className="ink-stamp" style={{ color: accent, borderColor: accent }}>
                {label}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Tiêu đề chính — đậm, tối, Playfair */}
      <h2
        className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight"
        style={{ color: '#1c0e06' }}
      >
        {title}
      </h2>

      {/* Phụ đề */}
      {subtitle && (
        <p className="font-body italic text-base md:text-lg leading-relaxed max-w-lg"
           style={{ color: '#523721' }}>
          {subtitle}
        </p>
      )}

      {/* Dòng gạch mực */}
      <div className="flex items-center gap-2 pt-1">
        <div className="h-0.5 w-10" style={{ background: accent }} />
        <div className="h-px w-20 opacity-30" style={{ background: accent }} />
      </div>
    </div>
  )
}
