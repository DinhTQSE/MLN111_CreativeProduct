import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import ChapterTitle from '../../ui/ChapterTitle'
import QuoteBlock from '../../ui/QuoteBlock'
import NeonCard from '../../ui/NeonCard'
import RationGridViz from './RationGridViz'
import PressureBar from './PressureBar'
import IllustrationChapter1 from '../../ui/illustrations/IllustrationChapter1'

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter1')

export default function Chapter1() {
  const sectionRef = useRef(null)
  const pinnedRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: pinnedRef.current,
        start: 'top top',
        end: '+=280%',
        scrub: true,
        onUpdate(self) {
          if (self.progress > 0.88) {
            const shake = (Math.random() - 0.5) * (self.progress - 0.88) * 6
            gsap.set(pinnedRef.current, { x: shake, y: shake * 0.4 })
          } else {
            gsap.set(pinnedRef.current, { x: 0, y: 0 })
          }
        },
      })

      gsap.from(pinnedRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.85, ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current, start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chapter1"
      ref={sectionRef}
      style={{ minHeight: '380vh', background: chapter.bg }}
    >
      {/* Crosshatch mờ */}
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-50" aria-hidden="true"/>

      {/* Đường kẻ ngang trang sách */}
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} className="absolute left-0 right-0 h-px opacity-[0.04]"
             style={{ top: `${(i + 1) * 38}px`, background: chapter.accent }}/>
      ))}

      <div ref={pinnedRef} className="min-h-screen flex items-center px-6 md:px-14 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ── Trái ── */}
          <div className="space-y-8">
            <div className="animate-in">
              <ChapterTitle {...chapter}/>
            </div>

            <div className="animate-in">
              <PressureBar containerRef={sectionRef}/>
            </div>

            <div className="animate-in">
              <QuoteBlock text={chapter.quote.text} author={chapter.quote.author} accent={chapter.accent}/>
            </div>

            <div className="space-y-2 animate-in">
              {chapter.theses.map((t, i) => (
                <NeonCard key={i} accent={chapter.accent} className="px-5 py-3.5 flex gap-3 items-start">
                  <span className="font-type text-xs shrink-0 mt-0.5 opacity-40"
                        style={{ color: chapter.accent }}>
                    [{String(i+1).padStart(2,'0')}]
                  </span>
                  <p className="font-body text-sm leading-relaxed text-ink-mid">{t}</p>
                </NeonCard>
              ))}
            </div>
          </div>

          {/* ── Phải ── */}
          <div className="space-y-8">
            <div className="animate-in">
              <IllustrationChapter1 accent={chapter.accent} className="w-full max-w-sm mx-auto"/>
              <p className="font-hand text-sm text-center mt-2 opacity-50"
                 style={{ color: chapter.accent, transform: 'rotate(-1deg)' }}>
                Hàng người xếp hàng — Hà Nội, 1980
              </p>
            </div>

            <div className="animate-in">
              <RationGridViz accent={chapter.accent}/>
            </div>

            <div className="animate-in">
              <NeonCard accent={chapter.accent} className="p-5 font-type text-xs space-y-2.5">
                <p className="opacity-40 uppercase tracking-widest text-[9px] mb-3 pb-2 border-b"
                   style={{ borderColor: `${chapter.accent}20`, color: chapter.accent }}>
                  // Ghi chép kinh tế 1975–1986 //
                </p>
                {[
                  ['GDP tăng trưởng', '< 2% / năm', false],
                  ['Lạm phát (1986)',  '774,7%',    true],
                  ['Năng suất lao động','↓ 40% so 1975', false],
                  ['Động lực cá nhân', 'CỰC THẤP',  true],
                ].map(([k, v, danger]) => (
                  <div key={k} className="flex justify-between items-center">
                    <span className="text-ink-lite opacity-70">{k}</span>
                    <span style={{ color: danger ? '#c0182a' : chapter.accent }}
                          className="font-semibold">{v}</span>
                  </div>
                ))}
              </NeonCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
