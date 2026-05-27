import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PressureBar({ containerRef }) {
  const fillRef   = useRef(null)
  const pctRef    = useRef(null)
  const needleRef = useRef(null)

  useEffect(() => {
    if (!containerRef?.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(fillRef.current, { width: '0%' }, {
        width: '100%', ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current, start: 'top top', end: '+=250%', scrub: true,
          onUpdate(self) {
            if (pctRef.current) pctRef.current.textContent = `${Math.round(self.progress*100)}%`
            if (fillRef.current) {
              const r = self.progress
              fillRef.current.style.background = r < 0.5
                ? `linear-gradient(to right, #c0182a88, #c0182a)`
                : `linear-gradient(to right, #c0182a, #8b0000)`
            }
            if (needleRef.current)
              gsap.set(needleRef.current, { rotate: -90 + self.progress * 180 })
          },
        },
      })
    })
    return () => ctx.revert()
  }, [containerRef])

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-type text-[10px] tracking-[0.2em] uppercase opacity-50"
              style={{ color: '#8b1a1a' }}>Áp lực hệ thống tích lũy</span>
        <span ref={pctRef} className="font-hand text-base" style={{ color: '#8b1a1a', opacity: 0.65 }}>0%</span>
      </div>

      {/* Thanh nhiệt kế */}
      <div className="relative">
        <div className="h-3 w-full border-2 overflow-hidden"
             style={{ borderColor: '#8b1a1a44', background: 'rgba(139,26,26,0.06)' }}>
          <div ref={fillRef} className="h-full transition-none"
               style={{ width: '0%', background: 'linear-gradient(to right, #c0182a88, #c0182a)' }}/>
        </div>
        {[25,50,75].map(p => (
          <div key={p} className="absolute top-0 bottom-0 w-px"
               style={{ left: `${p}%`, background: 'rgba(139,26,26,0.25)' }}/>
        ))}
      </div>

      <div className="flex justify-between">
        {['Trì trệ','Căng thẳng','Khủng hoảng','ĐIỂM NÚT ⚡'].map(l => (
          <span key={l} className="font-hand text-xs opacity-50"
                style={{ color: '#8b1a1a', fontSize: l.length > 8 ? '9px' : '10px' }}>{l}</span>
        ))}
      </div>

      {/* Áp kế SVG */}
      <div className="flex justify-center">
        <svg width="88" height="48" viewBox="0 0 88 48" fill="none">
          <path d="M6 48 A38 38 0 0 1 82 48" stroke="#8b1a1a" strokeWidth="1.5" opacity="0.25"/>
          {Array.from({length:9},(_,i)=>{
            const a=-180+i*22.5, r1=32, r2=36
            return <line key={i}
              x1={44+Math.cos(a*Math.PI/180)*r1} y1={48+Math.sin(a*Math.PI/180)*r1}
              x2={44+Math.cos(a*Math.PI/180)*r2} y2={48+Math.sin(a*Math.PI/180)*r2}
              stroke="#8b1a1a" strokeWidth={i%2===0?1.5:0.8} opacity="0.35"/>
          })}
          <line ref={needleRef} x1="44" y1="48" x2="44" y2="18"
                stroke="#c0182a" strokeWidth="1.8" strokeLinecap="round"
                style={{ transformOrigin: '44px 48px' }}/>
          <circle cx="44" cy="48" r="3" fill="#8b1a1a" opacity="0.4"/>
          <text x="8"  y="46" fontSize="6" fontFamily="Special Elite" fill="#8b1a1a" opacity="0.4">Thấp</text>
          <text x="64" y="46" fontSize="6" fontFamily="Special Elite" fill="#8b1a1a" opacity="0.4">Cao</text>
        </svg>
      </div>
    </div>
  )
}
