import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import ChapterTitle from '../../ui/ChapterTitle'
import QuoteBlock from '../../ui/QuoteBlock'
import NeonCard from '../../ui/NeonCard'
import BreakthroughBurst from './BreakthroughBurst'
import IllustrationChapter2 from '../../ui/illustrations/IllustrationChapter2'

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter2')

const COMMODITIES = [
  { name: 'Honda Dream',     before: '3 chỉ vàng',  after: '18 triệu đ',  year: '1990' },
  { name: 'Gạo tẻ (1 kg)',  before: '200 đ',        after: '2.000 đ',     year: '1987–90' },
  { name: 'USD (1 đô)',      before: '375 đ',         after: '11.000 đ',    year: '1986–95' },
  { name: 'Nhà Hà Nội',     before: '5 lượng',       after: '40 lượng',    year: '1986–00' },
]

export default function Chapter2() {
  const sectionRef = useRef(null)
  const burstRef   = useRef(null)
  const stampRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stampRef.current, {
        scale: 1.6, opacity: 0, rotate: -10, duration: 0.55, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      })

      gsap.from(sectionRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0, y: 40, stagger: 0.09, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })

      gsap.to(sectionRef.current?.querySelectorAll('.commodity-card'), {
        y: -5, stagger: 0.4, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chapter2"
      ref={sectionRef}
      className="chapter-section relative px-6 md:px-14 py-24"
      style={{ background: chapter.bg, minHeight: '100vh' }}
    >
      {/* Crosshatch */}
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-40" aria-hidden="true"/>

      {/* Burst canvas */}
      <div ref={burstRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10" aria-hidden="true">
        <BreakthroughBurst containerRef={burstRef}/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stamp */}
        <div className="animate-in flex justify-center mb-12">
          <div
            ref={stampRef}
            className="font-type text-xs tracking-[0.28em] uppercase px-5 py-2.5 border-2 inline-flex items-center gap-2 relative"
            style={{ borderColor: chapter.accent, color: chapter.accent, background: `${chapter.accent}08` }}
          >
            <span>⚡</span>
            <span>Điểm Nút Lịch Sử — Đại Hội VI, 1986</span>
            <span className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: chapter.accent }}/>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: chapter.accent }}/>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Trái ── */}
          <div className="space-y-9">
            <div className="animate-in"><ChapterTitle {...chapter}/></div>

            <div className="animate-in">
              <QuoteBlock text={chapter.quote.text} author={chapter.quote.author} accent={chapter.accent}/>
            </div>

            <div className="space-y-2 animate-in">
              {chapter.theses.map((t, i) => (
                <NeonCard key={i} accent={chapter.accent} className="px-5 py-3.5 flex gap-3 items-start">
                  <span className="font-type text-xs shrink-0 mt-0.5 opacity-40"
                        style={{ color: chapter.accent }}>[{String(i+1).padStart(2,'0')}]</span>
                  <p className="font-body text-sm leading-relaxed text-ink-mid">{t}</p>
                </NeonCard>
              ))}
            </div>

            <NeonCard accent={chapter.accent} className="p-5 animate-in">
              <p className="font-type text-[9px] uppercase tracking-widest opacity-35 mb-2"
                 style={{ color: chapter.accent }}>// Phân tích Mác-xít //</p>
              <p className="font-body italic text-sm text-ink-mid leading-relaxed">
                Hàng hóa không đơn thuần là vật dụng — nó trở thành{' '}
                <em style={{ color: chapter.accent }}>quan hệ xã hội được vật chất hóa</em>.
                Người lao động không còn nhìn thấy mình trong sản phẩm mình tạo ra.
              </p>
            </NeonCard>
          </div>

          {/* ── Phải ── */}
          <div className="space-y-8">
            <div className="animate-in">
              <IllustrationChapter2 accent={chapter.accent} className="w-full max-w-md mx-auto"/>
              <p className="font-hand text-sm text-center mt-2 opacity-45"
                 style={{ color: chapter.accent, transform: 'rotate(1deg)' }}>
                Chợ tự do — TP. Hồ Chí Minh, 1988
              </p>
            </div>

            <div className="animate-in">
              <p className="font-hand text-base opacity-55 mb-4"
                 style={{ color: chapter.accent, transform: 'rotate(-1deg)' }}>
                Hàng hóa sùng bái (Commodity Fetishism)
              </p>
              <div className="grid grid-cols-2 gap-3">
                {COMMODITIES.map((item, i) => (
                  <div key={i} className="commodity-card">
                    <NeonCard accent={chapter.accent} className="p-4 h-full">
                      <p className="font-display font-bold text-sm text-ink mb-3 leading-snug">{item.name}</p>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-type text-[8px] uppercase opacity-35">Trước</span>
                          <span className="font-type text-xs line-through opacity-40 text-ink-mid">{item.before}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-type text-[8px] uppercase opacity-35">Sau</span>
                          <span className="font-type text-sm font-bold" style={{ color: chapter.accent }}>{item.after}</span>
                        </div>
                        <p className="font-hand text-xs opacity-35" style={{ color: chapter.accent }}>{item.year}</p>
                      </div>
                    </NeonCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
