import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import HeroIllustration from '../../ui/illustrations/HeroIllustration'

export default function HeroSection({ accent }) {
  const heroRef  = useRef(null)
  const leftRef  = useRef(null)
  const rightRef = useRef(null)
  const hrRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.15 })
        .from(leftRef.current?.querySelectorAll('.hi'), {
          opacity: 0, y: 36, stagger: 0.15, duration: 0.9, ease: 'power3.out',
        })
        .from(hrRef.current, { scaleX: 0, duration: 0.7, ease: 'power2.inOut', transformOrigin: 'left' }, '-=0.5')
        .from(rightRef.current, { opacity: 0, x: 28, duration: 1.1, ease: 'power2.out' }, '-=0.7')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="chapter-section flex items-center min-h-screen px-6 md:px-14 pt-20"
      style={{ background: 'linear-gradient(135deg, #f9f2e2 0%, #f5edda 60%, #f0e6cc 100%)' }}
    >
      {/* Crosshatch bg */}
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-60" aria-hidden="true"/>

      {/* Đường kẻ trang trang trí */}
      <div className="absolute left-14 top-0 bottom-0 w-px opacity-10" style={{ background: accent }}/>
      <div className="absolute left-16 top-0 bottom-0 w-px opacity-5"  style={{ background: accent }}/>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* ── Cột trái ── */}
        <div ref={leftRef} className="space-y-7">

          <div className="hi">
            <span className="ink-stamp" style={{ color: accent, borderColor: accent }}>
              Triết học Mác – Lênin &nbsp;//&nbsp; Assignment 2025
            </span>
          </div>

          <div className="hi">
            <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-none text-ink tracking-tight">
              Mã nguồn
            </h1>
            <h1
              className="font-display font-black italic text-6xl md:text-7xl lg:text-8xl leading-none"
              style={{ color: accent }}
            >
              Xã hội
            </h1>
          </div>

          {/* Divider */}
          <div ref={hrRef} className="hi flex items-center gap-3">
            <div className="h-0.5 w-12"    style={{ background: accent }}/>
            <div className="h-px w-32 opacity-25" style={{ background: accent }}/>
          </div>

          <p className="hi font-body italic text-xl text-ink-mid leading-relaxed max-w-md">
            Biện chứng giữa{' '}
            <span className="font-semibold not-italic text-ink">Giải phóng</span> và{' '}
            <span className="font-semibold not-italic" style={{ color: accent }}>Tha hóa</span>
            {' '}qua bốn thời kỳ lịch sử Việt Nam.
          </p>

          <div className="hi font-type text-xs text-ink-lite space-y-1 tracking-wide opacity-60">
            <p>1975 — 1986 — 2000 — 2020 — Nay</p>
            <p>Cuộn trang để bắt đầu hành trình</p>
          </div>

          <button
            className="hi font-type text-xs tracking-[0.2em] uppercase px-7 py-3.5 border-2 transition-all duration-250 shadow-ink hover:shadow-ink-lg"
            style={{ borderColor: accent, color: accent, background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#fff8ec' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}
            onClick={() => document.getElementById('chapter1')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Bắt đầu → Chương I
          </button>
        </div>

        {/* ── Cột phải: Illustration ── */}
        <div ref={rightRef} className="relative flex items-center justify-center">
          <div className="absolute rounded-full w-80 h-80 opacity-30"
               style={{ background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)` }}
               aria-hidden="true"/>
          <HeroIllustration accent={accent} className="w-full max-w-lg"/>
          <div
            className="absolute bottom-2 right-2 font-hand text-sm opacity-50"
            style={{ color: accent, transform: 'rotate(2deg)' }}
            aria-hidden="true"
          >
            4 thời kỳ &amp; 4 mâu thuẫn
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-type text-[10px] tracking-[0.3em] uppercase" style={{ color: accent }}>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }}/>
      </div>
    </section>
  )
}
