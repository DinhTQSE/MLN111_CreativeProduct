import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { snapToId } from './SmoothSnapScroll'

const NAV_ITEMS = [
  { id: 'chapter1', label: 'I. Bao Cấp' },
  { id: 'chapter2', label: 'II. Đổi Mới' },
  { id: 'chapter3', label: 'III. Kỷ Số' },
  { id: 'chapter4', label: 'IV. Kỷ AI' },
  { id: 'conclusion', label: 'Tổng Kết' },
]

export default function NavBar({ accent, activeChapter }) {
  const [scrolled, setScrolled] = useState(false)

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
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => snapToId('hero')}
          className="font-type text-xs tracking-[0.16em] uppercase transition-opacity hover:opacity-65"
          style={{ color: accent || '#8b6000' }}
        >
          Mã nguồn — Xã hội
        </button>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeChapter === item.id
            return (
              <button
                key={item.id}
                onClick={() => snapToId(item.id)}
                className="font-type text-xs tracking-wider uppercase transition-all duration-250 relative pb-0.5"
                style={{
                  color: isActive ? accent : '#523721',
                  opacity: isActive ? 1 : 0.72,
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

        {/* Số trang */}
        <span className="font-hand text-base opacity-60 hidden md:block" style={{ color: accent }}>
          {(NAV_ITEMS.findIndex(n => n.id === activeChapter) + 1) || '—'} / {NAV_ITEMS.length}
        </span>
      </div>
    </header>
  )
}
