import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { snapToId } from '../../layout/SmoothSnapScroll'

const TIMELINE = [
  { year: '1975', label: 'Bao cấp' },
  { year: '1986', label: 'Đổi Mới' },
  { year: '2000', label: 'Kỷ nguyên số' },
  { year: '2020', label: 'AI' },
]

const LOOP = [
  ['01', 'Giải phóng công cụ'],
  ['02', 'Mâu thuẫn tích lũy'],
  ['03', 'Tha hóa tinh vi hơn'],
  ['04', 'Kiến trúc mới'],
]

export default function HeroSection({ accent = '#8b6000' }) {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.2 })
        .from(titleRef.current, {
          opacity: 0,
          y: 28,
          scale: 0.96,
          duration: 0.9,
          ease: 'power3.out',
        })
        .from('.hook-line', {
          opacity: 0,
          y: 18,
          stagger: 0.12,
          duration: 0.55,
          ease: 'power2.out',
        }, '-=0.35')
        .from(timelineRef.current?.querySelectorAll('.timeline-item'), {
          opacity: 0,
          x: -28,
          stagger: 0.14,
          duration: 0.55,
          ease: 'power2.out',
        }, '-=0.15')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="chapter-section min-h-screen flex items-center bg-[#050505] px-6 md:px-14 pt-20 text-[#f8ead2]"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(139,96,0,0.18),transparent_42%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(255,255,255,0.16) 5px, rgba(255,255,255,0.16) 6px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full grid grid-cols-1 xl:grid-cols-[1.18fr_0.82fr] gap-10 xl:gap-16 items-center">
        <div>
          <p className="hook-line font-type text-[10px] md:text-xs tracking-[0.36em] uppercase mb-6 text-[#d2a84f]">
            MLN111 // debug lịch sử Việt Nam
          </p>

          <h1
            ref={titleRef}
            className="font-display font-black text-[4.4rem] md:text-[7.4rem] 2xl:text-[8.7rem] leading-none tracking-0"
          >
            <span className="block leading-[0.92]">VÒNG LẶP</span>
            <span className="block italic mt-4 md:mt-6 leading-[0.86]" style={{ color: accent }}>
              XÃ HỘI
            </span>
          </h1>

          <div className="mt-8 md:mt-10 max-w-4xl space-y-4">
            <p className="hook-line font-body italic text-3xl md:text-[2.15rem] leading-snug text-[#f8ead2]/90">
              Mỗi lần công nghệ tiến lên một nấc, con người tưởng mình tự do hơn.
            </p>
            <p className="hook-line font-type text-base md:text-xl leading-relaxed tracking-wide text-[#ffe3a2] drop-shadow-[0_0_10px_rgba(210,168,79,0.18)]">
              Nhưng lực lượng sản xuất càng được giải phóng, hình thái tha hóa càng trở nên tinh vi.
            </p>
          </div>

          <div ref={timelineRef} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
            {TIMELINE.map((item, index) => (
              <div
                key={item.year}
                className="timeline-item border px-5 py-4 bg-white/[0.035]"
                style={{ borderColor: index === 0 ? accent : 'rgba(248,234,210,0.18)' }}
              >
                <p className="font-display font-black text-4xl leading-none" style={{ color: index === 0 ? accent : '#f8ead2' }}>
                  {item.year}
                </p>
                <p className="font-type text-xs tracking-[0.2em] uppercase mt-2 text-[#d8c6a4]/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <button
            className="hook-line mt-10 font-type text-xs tracking-[0.24em] uppercase px-7 py-3.5 border-2 transition-colors"
            style={{ borderColor: accent, color: '#f8ead2' }}
            onMouseEnter={e => { e.currentTarget.style.background = accent }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            onClick={() => snapToId('chapter1')}
          >
            Cuộn xuống để bắt đầu debug
          </button>
        </div>

        <div className="hidden xl:block hook-line">
          <div className="border-2 border-[#8b6000]/45 bg-[#f8ead2]/[0.035] p-7 shadow-[0_0_60px_rgba(139,96,0,0.10)]">
            <p className="font-type text-xs tracking-[0.34em] uppercase mb-8 text-[#d2a84f]">
              Hệ vòng lặp trình bày
            </p>
            <div className="space-y-4">
              {LOOP.map(([n, text], i) => (
                <div key={n} className="flex items-center gap-4">
                  <div className="w-14 h-14 border flex items-center justify-center font-display font-black text-2xl"
                       style={{ borderColor: i === 0 ? accent : 'rgba(248,234,210,0.24)', color: i === 0 ? accent : '#f8ead2' }}>
                    {n}
                  </div>
                  <div className="flex-1 border-b border-[#f8ead2]/10 pb-4">
                    <p className="font-display font-bold italic text-2xl text-[#f8ead2]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
