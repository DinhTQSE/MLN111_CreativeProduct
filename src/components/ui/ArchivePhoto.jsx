/* Shared archive photo frame — dùng lại ở Chapter 1, 2, 3, 4 */
export default function ArchivePhoto({ src, caption, subCaption, accent = '#8B0000', small = false, className = '' }) {
  return (
    <figure
      className={`group relative overflow-hidden border transition-all duration-400
                  hover:-translate-y-0.5 hover:shadow-lg ${className}`}
      style={{ borderColor: `${accent}35` }}
    >
      {/* Classification bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b"
           style={{ background: `${accent}0f`, borderColor: `${accent}32` }}>
        <span className="font-type text-xs tracking-[0.24em] uppercase font-bold"
              style={{ color: accent }}>
          Tài liệu lưu trữ
        </span>
        {subCaption && (
          <span className="font-type text-[11px] tracking-widest uppercase font-bold"
                style={{ color: accent }}>
            {subCaption}
          </span>
        )}
      </div>

      {/* Photo with vintage filter */}
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={caption}
          className={`w-full object-cover transition-transform duration-700
                      group-hover:scale-[1.03] ${small ? 'max-h-64' : 'max-h-[24rem]'}`}
          style={{ filter: 'sepia(0.4) contrast(1.08) brightness(0.92)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="px-4 py-2.5 border-t"
                    style={{ borderColor: `${accent}28`, background: `${accent}0b` }}>
          <p className="font-type text-xs tracking-wide uppercase font-bold leading-snug"
             style={{ color: '#4a1414' }}>
            {caption}
          </p>
        </figcaption>
      )}
    </figure>
  )
}
