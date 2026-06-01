import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Design tokens ─── */
const BG  = '#0b110e'
const TXT = '#f3f4f6'
const DIM = '#6b7280'
const MUT = '#9ca3af'

/* ─── Era data ─── */
const ERAS = [
  {
    id:      'chapter1',
    num:     '01',
    name:    'BAO CẤP',
    nameItalic: false,
    period:  '1975 — 1986',
    accent:  '#ef4444',
    stat:    { value: 774,  decimals: 0, suffix: '%',  label: 'Lạm phát — 1986'         },
    desc:    'Quan hệ sản xuất tập trung quan liêu triệt tiêu động lực cá nhân. Lực lượng sản xuất bị đóng băng dưới cơ chế phân phối bình quân.',
    concept: 'THỤ ĐỘNG HOÁ',
    marxTag: 'Tha hóa lao động',
  },
  {
    id:      'chapter2',
    num:     '02',
    name:    'ĐỔI MỚI',
    nameItalic: true,
    period:  '1986 — 2000',
    accent:  '#f59e0b',
    stat:    { value: 6.8,  decimals: 1, suffix: '%',  label: 'GDP tăng trưởng TB/năm'  },
    desc:    'Đại hội VI giải phóng lực lượng sản xuất. Nhưng thị trường hóa tạo ra hàng hóa sùng bái — tha hóa khoác hình thức mới.',
    concept: 'ĐIỂM NÚT',
    marxTag: 'Commodity Fetishism',
  },
  {
    id:      'chapter3',
    num:     '03',
    name:    'KỶ NGUYÊN SỐ',
    nameItalic: false,
    period:  '2000 — 2020',
    accent:  '#4ade80',
    stat:    { value: 70,   decimals: 0, suffix: 'M',  label: 'Người dùng Internet VN'  },
    desc:    'Internet xóa rào cản địa lý. Nhưng con người biến thành tài nguyên dữ liệu — sự chú ý bị thương mại hóa bởi thuật toán.',
    concept: 'THA HOÁ SỐ',
    marxTag: 'Digital Alienation',
  },
  {
    id:      'chapter4',
    num:     '04',
    name:    'KỶ NGUYÊN AI',
    nameItalic: true,
    period:  '2020 — Nay',
    accent:  '#a78bfa',
    stat:    { value: 100,  decimals: 0, suffix: 'M+', label: 'ChatGPT — 60 ngày đầu'  },
    desc:    'AI thay thế lao động nhận thức. Quyết định bị outsource cho thuật toán. Bản chất người đối mặt khủng hoảng triết học.',
    concept: 'THA HOÁ NHẬN THỨC',
    marxTag: 'Cognitive Alienation',
  },
]

/* ─── Helpers ─── */
function formatStat(val, decimals, suffix) {
  const n = decimals === 0 ? Math.round(val) : parseFloat(val.toFixed(decimals))
  return `${n}${suffix}`
}

/* ─── Single era card ─── */
function EraCard({ era }) {
  const cardRef = useRef(null)
  const statRef = useRef(null)

  return (
    <article
      ref={cardRef}
      className="era-card group relative flex-shrink-0 flex flex-col justify-between overflow-hidden"
      data-era={era.id}
      style={{
        width: '100vw',
        height: '100vh',
        borderRight: `1px solid ${era.accent}18`,
        background: BG,
      }}
    >
      {/* ── Background watermark number ── */}
      <span
        className="absolute right-0 bottom-0 font-syne font-black select-none pointer-events-none leading-none"
        style={{
          fontSize: 'clamp(18rem, 32vw, 30rem)',
          color: era.accent,
          opacity: 0.05,
          letterSpacing: '-0.06em',
          lineHeight: 0.82,
          transform: 'translate(8%, 12%)',
        }}
        aria-hidden="true"
      >
        {era.num}
      </span>

      {/* ── Horizontal accent stripe (top) ── */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 origin-left transition-transform duration-700 ease-out"
        style={{ background: `linear-gradient(to right, ${era.accent}, transparent)`, transform: 'scaleX(0.35)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${era.accent}, transparent)`, transform: 'scaleX(1)' }}
      />

      {/* ── Hover border glow ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 80px ${era.accent}09, inset 1px 0 0 ${era.accent}30, inset -1px 0 0 ${era.accent}18` }}
      />

      {/* ── Content (all above the watermark) ── */}
      <div className="relative z-10 flex flex-col justify-between h-full px-12 md:px-20 py-12 md:py-16">

        {/* Top row: num + period */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span
              className="font-inter font-medium text-xs tracking-[0.45em] uppercase"
              style={{ color: era.accent }}
            >
              {era.num}
            </span>
            <div className="h-px w-12" style={{ background: `${era.accent}45` }}/>
          </div>
          <span
            className="font-inter text-xs tracking-[0.32em] uppercase"
            style={{ color: DIM }}
          >
            {era.period}
          </span>
        </div>

        {/* Center: main content */}
        <div className="space-y-8 max-w-2xl">

          {/* Heading — italic variant for even eras */}
          <h2
            className={`font-syne font-black leading-none tracking-tight ${era.nameItalic ? 'italic' : ''}`}
            style={{
              fontSize: 'clamp(3.5rem, 7.5vw, 7rem)',
              color: TXT,
              letterSpacing: '-0.03em',
            }}
          >
            {era.name}
          </h2>

          {/* Description */}
          <p
            className="font-inter leading-relaxed max-w-lg"
            style={{ fontSize: '1.0625rem', color: MUT }}
          >
            {era.desc}
          </p>

          {/* GSAP Counter stat */}
          <div>
            <div
              ref={statRef}
              className="era-stat font-syne font-black tabular-nums leading-none"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                color: era.accent,
                letterSpacing: '-0.03em',
              }}
              data-target={era.stat.value}
              data-decimals={era.stat.decimals}
              data-suffix={era.stat.suffix}
            >
              0{era.stat.suffix}
            </div>
            <p
              className="font-inter text-xs tracking-[0.35em] uppercase mt-2"
              style={{ color: DIM }}
            >
              {era.stat.label}
            </p>
          </div>
        </div>

        {/* Bottom row: marxist tag + CTA */}
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            <span
              className="font-inter text-[9px] tracking-[0.35em] uppercase block"
              style={{ color: `${era.accent}70` }}
            >
              Phạm trù Mác-xít
            </span>
            <span
              className="font-inter text-xs tracking-[0.25em] uppercase px-4 py-1.5 border inline-block"
              style={{ borderColor: `${era.accent}45`, color: era.accent }}
            >
              {era.marxTag}
            </span>
          </div>

          <button
            className="font-inter text-xs tracking-[0.28em] uppercase flex items-center gap-3
                       transition-all duration-300 hover:gap-5"
            style={{ color: DIM }}
            onMouseEnter={e => e.currentTarget.style.color = era.accent}
            onMouseLeave={e => e.currentTarget.style.color = DIM}
            onClick={() => document.getElementById(era.id)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {era.concept} <span style={{ fontSize: '1rem' }}>→</span>
          </button>
        </div>

      </div>
    </article>
  )
}

/* ─── Main horizontal scroll section ─── */
export default function HorizontalScroll() {
  const outerRef    = useRef(null)   /* pinned viewport container   */
  const trackRef    = useRef(null)   /* horizontal strip of cards   */
  const progressRef = useRef(null)   /* top progress bar            */
  const labelRef    = useRef(null)   /* era label counter           */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track    = trackRef.current
      const progress = progressRef.current

      /* ── Primary horizontal scroll animation ── */
      const scrollAnim = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          id:                 'era-horizontal',
          trigger:            outerRef.current,
          pin:                true,
          scrub:              1.2,
          snap: {
            snapTo:   1 / (ERAS.length - 1),
            duration: { min: 0.3, max: 0.6 },
            ease:     'power2.inOut',
          },
          invalidateOnRefresh: true,
          end: () => `+=${track.scrollWidth - window.innerWidth}`,

          /* Update progress bar + label */
          onUpdate(self) {
            if (progress) progress.style.width = `${self.progress * 100}%`
            const idx = Math.round(self.progress * (ERAS.length - 1))
            if (labelRef.current) {
              labelRef.current.textContent = `${String(idx + 1).padStart(2, '0')} / 0${ERAS.length}`
            }
          },
        },
      })

      /* ── GSAP counters — triggered via containerAnimation ── */
      track.querySelectorAll('.era-stat').forEach((el) => {
        const target   = parseFloat(el.dataset.target)
        const decimals = parseInt(el.dataset.decimals)
        const suffix   = el.dataset.suffix
        let   done     = false

        ScrollTrigger.create({
          trigger:            el,
          containerAnimation: scrollAnim,
          start:              'left 70%',
          onEnter() {
            if (done) return
            done = true
            gsap.to({ val: 0 }, {
              val:      target,
              duration: 2.2,
              ease:     'power2.out',
              onUpdate() {
                el.textContent = formatStat(this.targets()[0].val, decimals, suffix)
              },
            })
          },
        })
      })

      /* ── Card entrance — subtle y lift as each slides in ── */
      track.querySelectorAll('.era-card').forEach((card) => {
        const heading = card.querySelector('h2')
        const body    = card.querySelector('p')

        gsap.from([heading, body], {
          opacity:            0,
          y:                  30,
          stagger:            0.12,
          duration:           0.8,
          ease:               'power2.out',
          scrollTrigger: {
            trigger:            card,
            containerAnimation: scrollAnim,
            start:              'left 80%',
            toggleActions:      'play none none reverse',
          },
        })
      })

    }, outerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="era-scroll"
      ref={outerRef}
      className="relative overflow-hidden"
      style={{ height: '100vh', background: BG }}
    >

      {/* ── Top progress bar ── */}
      <div className="absolute top-0 left-0 right-0 h-px z-30" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          ref={progressRef}
          className="h-full transition-none"
          style={{ width: '0%', background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.6)' }}
        />
      </div>

      {/* ── Fixed UI chrome ── */}
      <div className="absolute top-6 left-8 z-20 flex items-center gap-4">
        <span className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: '#4ade8055' }}>
          Dòng thời gian
        </span>
        <div className="h-px w-8" style={{ background: '#4ade8030' }}/>
        <span ref={labelRef} className="font-syne font-bold text-xs" style={{ color: '#4ade8080' }}>
          01 / 04
        </span>
      </div>

      {/* ── Scroll hint (first view only) ── */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <span className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: DIM }}>
          Cuộn để khám phá
        </span>
        <div className="flex gap-1">
          {ERAS.map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full" style={{ background: `#4ade8030` }}/>
          ))}
        </div>
      </div>

      {/* ── Horizontal card track ── */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 flex h-full will-change-transform"
        style={{ width: `${ERAS.length * 100}vw` }}
      >
        {ERAS.map((era) => (
          <EraCard key={era.id} era={era} />
        ))}
      </div>

    </section>
  )
}
