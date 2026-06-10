import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { snapToId } from './SmoothSnapScroll'

const NAV_ITEMS = [
  { id: 'chapter1', label: 'I. Bao Cấp' },
  { id: 'chapter2', label: 'II. Đổi Mới' },
  { id: 'chapter3', label: 'III. Kỷ Số' },
  { id: 'chapter4', label: 'IV. Kỷ AI' },
  { id: 'conclusion', label: 'Tổng Kết' },
  { id: 'appendix', label: 'Phụ Lục' },
]

export default function NavBar({ accent, activeChapter }) {
  const [scrolled, setScrolled] = useState(false)
  const activeIndex = NAV_ITEMS.findIndex(n => n.id === activeChapter)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        scrolled
          ? 'bg-parch/95 backdrop-blur-sm border-b border-ink/8 shadow-sm'
          : 'bg-[#f5edda]/88 backdrop-blur-[2px]',
      )}
    >
      <div className="max-w-[1480px] mx-auto px-6 py-3.5 flex items-center justify-between">
        <button
          onClick={() => snapToId('hero')}
          className="font-type text-sm tracking-[0.16em] uppercase transition-opacity hover:opacity-65 font-bold"
          style={{ color: accent || '#8b6000' }}
        >
          Mã nguồn — Xã hội
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeChapter === item.id
            return (
              <button
                key={item.id}
                onClick={() => snapToId(item.id)}
                className="font-type text-[12px] lg:text-[13px] tracking-wider uppercase transition-all duration-250 relative pb-0.5 whitespace-nowrap"
                style={{
                  color: isActive ? accent : '#523721',
                  opacity: isActive ? 1 : 0.78,
                  fontWeight: isActive ? 700 : 600,
                }}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: accent }} />
                )}
              </button>
            )
          })}
        </nav>

        <span className="font-hand text-lg opacity-70 hidden md:block min-w-14 text-right" style={{ color: accent }}>
          {activeIndex >= 0 ? activeIndex + 1 : 0} / {NAV_ITEMS.length}
        </span>
      </div>
    </header>
  )
}
