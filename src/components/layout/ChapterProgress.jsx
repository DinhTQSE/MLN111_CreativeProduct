import { CHAPTERS } from '../../data/chapters'
import { snapToId } from './SmoothSnapScroll'

export default function ChapterProgress({ activeChapter }) {
  return (
    <nav
      className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3.5"
      aria-label="Chapter navigation"
    >
      <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-px bg-ink/10" />

      {CHAPTERS.map((ch) => {
        const isActive = ch.id === activeChapter
        return (
          <button
            key={ch.id}
            onClick={() => snapToId(ch.id)}
            title={ch.label || ch.title}
            className="relative z-10 transition-all duration-300"
            aria-current={isActive ? 'step' : undefined}
          >
            {isActive ? (
              <svg width="11" height="11" viewBox="0 0 11 11">
                <rect x="1.5" y="1.5" width="8" height="8" transform="rotate(45 5.5 5.5)"
                      fill={ch.accent} stroke={ch.accent} strokeWidth="0.5"/>
              </svg>
            ) : (
              <svg width="8" height="8" viewBox="0 0 8 8" style={{ opacity: 0.28 }}>
                <circle cx="4" cy="4" r="2.5" fill="none" stroke={ch.accent} strokeWidth="1.2"/>
              </svg>
            )}
          </button>
        )
      })}
    </nav>
  )
}
