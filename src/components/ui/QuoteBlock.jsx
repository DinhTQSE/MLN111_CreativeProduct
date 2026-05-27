import clsx from 'clsx'

export default function QuoteBlock({ text, author, accent, className = '' }) {
  return (
    <blockquote
      className={clsx('relative py-5 px-6 rounded-sm', className)}
      style={{
        borderLeft: `3px solid ${accent || 'var(--accent)'}`,
        background: `linear-gradient(to right, ${accent || '#8b6000'}08, transparent)`,
      }}
    >
      {/* Dấu ngoặc thư pháp */}
      <span
        className="absolute -top-4 left-3 font-display text-5xl leading-none select-none"
        style={{ color: accent || 'var(--accent)', opacity: 0.2, fontStyle: 'italic' }}
        aria-hidden="true"
      >
        "
      </span>

      <p
        className="font-body text-base md:text-lg leading-relaxed mb-4"
        style={{ color: '#3a2510', fontStyle: 'italic' }}
      >
        {text}
      </p>

      <div className="flex items-center gap-3">
        <div className="h-px w-6 opacity-40" style={{ background: accent || 'var(--accent)' }} />
        <cite
          className="font-type text-[10px] not-italic tracking-wider uppercase"
          style={{ color: accent || 'var(--accent)', opacity: 0.65 }}
        >
          {author}
        </cite>
      </div>
    </blockquote>
  )
}
