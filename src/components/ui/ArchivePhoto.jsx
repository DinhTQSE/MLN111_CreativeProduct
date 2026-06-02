export default function ArchivePhoto({ src, caption, subCaption, accent = '#8B0000', small = false, className = '' }) {
  return (
    <figure className={`group editorial-photo parallax-media ambient-drift-slow relative overflow-hidden rounded-2xl ${className}`}>
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={src}
          alt={caption}
          className={`w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.035] ${small ? 'h-[18rem]' : 'h-[32rem]'}`}
          style={{ filter: 'sepia(0.34) contrast(1.08) brightness(0.94)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/45 via-transparent to-transparent opacity-80" />
        {subCaption && (
          <span
            className="absolute right-4 top-4 font-type text-[10px] tracking-[0.18em] uppercase px-3 py-1 bg-[#f5edda]/80"
            style={{ color: accent }}
          >
            {subCaption}
          </span>
        )}
      </div>

      {caption && (
        <figcaption className="mt-3 pl-4 border-l">
          <p className="font-type text-xs tracking-wide uppercase font-bold leading-snug" style={{ color: accent, borderColor: accent }}>
            {caption}
          </p>
        </figcaption>
      )}
    </figure>
  )
}
