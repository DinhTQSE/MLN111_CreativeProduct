import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GRID = 6

export default function RationGridViz({ accent }) {
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cells = gridRef.current?.querySelectorAll('.ration-cell')
      if (!cells) return
      gsap.fromTo(cells,
        { backgroundColor: 'rgba(139,26,26,0.05)', borderColor: 'rgba(139,26,26,0.15)' },
        {
          backgroundColor: 'rgba(139,26,26,0.18)', borderColor: 'rgba(139,26,26,0.5)',
          stagger: { each: 0.06, from: 'random' },
          scrollTrigger: { trigger: gridRef.current, start: 'top 70%', end: 'bottom 20%', scrub: 1.5 },
        }
      )
    }, gridRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={gridRef} className="w-full max-w-xs mx-auto">
      <p className="font-type text-[9px] tracking-[0.22em] uppercase opacity-45 mb-3 text-center"
         style={{ color: accent }}>Hệ thống phân phối tem phiếu</p>

      <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${GRID}, 1fr)` }}>
        {Array.from({ length: GRID * GRID }, (_, i) => (
          <div key={i} className="ration-cell aspect-square border flex items-center justify-center transition-colors"
               style={{ borderColor: 'rgba(139,26,26,0.15)', backgroundColor: 'rgba(139,26,26,0.05)' }}>
            <span className="font-type text-[5px] select-none opacity-25" style={{ color: accent }}>
              {String(i+1).padStart(2,'0')}
            </span>
          </div>
        ))}
      </div>

      <p className="font-hand text-sm text-center mt-3 opacity-40"
         style={{ color: accent, transform: 'rotate(-0.5deg)' }}>
        {GRID*GRID} ô phân phối — tất cả bị khoá
      </p>
    </div>
  )
}
