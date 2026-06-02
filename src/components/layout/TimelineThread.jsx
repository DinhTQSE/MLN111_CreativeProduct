import { CHAPTERS } from '../../data/chapters'
import { snapToId } from './SmoothSnapScroll'

const THREAD = CHAPTERS
  .filter(ch => ['chapter1', 'chapter2', 'chapter3', 'chapter4'].includes(ch.id))
  .map(ch => ({
    id: ch.id,
    index: ch.index,
    label: ch.label,
    accent: ch.accent,
    year: ch.period?.split(' ')[0] || '',
  }))

export default function TimelineThread({ activeChapter }) {
  const activeIndex = THREAD.findIndex(ch => ch.id === activeChapter)
  const progress = activeIndex < 0 ? 0 : (activeIndex / (THREAD.length - 1)) * 100

  return (
    <div className="hidden lg:block fixed left-1/2 top-[3.55rem] -translate-x-1/2 z-40 w-[min(1120px,66vw)] pointer-events-none">
      <div className="relative h-14 px-2">
        <div className="absolute left-2 right-2 top-4 h-[2px] bg-[#1c0e06]/18" />
        <div
          className="absolute left-2 top-4 h-[2px] transition-[width] duration-700 ease-out"
          style={{ width: `calc(${progress}% - ${progress === 0 ? 0 : 4}px)`, background: 'linear-gradient(90deg,#8b1a1a,#6f4600,#0d3d5c,#3d1f6b)' }}
        />

        {THREAD.map((ch, i) => {
          const isPassed = activeIndex >= 0 && i <= activeIndex
          const isCurrent = activeIndex === i
          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => snapToId(ch.id)}
              className="absolute top-4 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group"
              style={{ left: `${(i / (THREAD.length - 1)) * 100}%` }}
              title={ch.label}
            >
              <span
                className="block rounded-full border-2 transition-all duration-500"
                style={{
                  width: isCurrent ? 14 : 11,
                  height: isCurrent ? 14 : 11,
                  background: isPassed ? ch.accent : '#f5edda',
                  borderColor: ch.accent,
                  boxShadow: isPassed ? `0 0 18px ${ch.accent}70` : '0 0 0 4px rgba(245,237,218,0.9)',
                }}
              />
              <span
                className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-type text-[10px] tracking-[0.14em] uppercase transition-opacity"
                style={{ color: isCurrent ? ch.accent : '#6f6048', opacity: isCurrent ? 1 : 0.68 }}
              >
                {ch.year}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
