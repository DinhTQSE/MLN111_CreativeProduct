import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import ChapterTitle from '../../ui/ChapterTitle'
import QuoteBlock from '../../ui/QuoteBlock'
import NeonCard from '../../ui/NeonCard'
import InteractivePoll from './InteractivePoll'

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter3')

export default function Chapter3() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chapter3"
      ref={sectionRef}
      className="chapter-section px-6 md:px-14 py-24"
      style={{ background: chapter.bg, minHeight: '100vh' }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-30" aria-hidden="true"/>

      <div className="max-w-7xl mx-auto relative">
        {/* ── Row 1: Title + Theses ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
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
          </div>

          {/* DataStream viz bên phải */}
          <div className="animate-in">
            <NeonCard accent={chapter.accent} className="p-6">
              <p className="font-type text-[9px] tracking-widest uppercase opacity-40 mb-4"
                 style={{ color: chapter.accent }}>// Hành trình dữ liệu của bạn //</p>
              <DataStreamVizLight accent={chapter.accent} />
            </NeonCard>
          </div>
        </div>

        {/* ── Row 2: AlienationMeter Poll ── */}
        <div className="animate-in border-t pt-12" style={{ borderColor: `${chapter.accent}20` }}>
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-px flex-1 max-w-24 opacity-30" style={{ background: chapter.accent }}/>
            <span className="font-type text-[10px] tracking-[0.3em] uppercase opacity-50"
                  style={{ color: chapter.accent }}>
              Tương tác trực tiếp — AlienationMeter
            </span>
            <div className="h-px flex-1 max-w-24 opacity-30" style={{ background: chapter.accent }}/>
          </div>
          <InteractivePoll/>
        </div>

        {/* Câu hỏi phản tư */}
        <div className="animate-in mt-12 border-t pt-8" style={{ borderColor: `${chapter.accent}15` }}>
          <blockquote className="text-center max-w-2xl mx-auto">
            <p className="font-type text-[9px] tracking-widest uppercase opacity-35 mb-4" style={{ color: chapter.accent }}>
              Câu hỏi phản tư cuối chương
            </p>
            <p className="font-display font-bold italic text-xl text-ink leading-relaxed">
              "Khi con người được tự do truy cập mọi thông tin —
              <span style={{ color: chapter.accent }}>
                {' '}điều gì trở thành thước đo giá trị của sự thật?
              </span>"
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

/* DataStream được thiết kế lại cho nền sáng của Chương 3 */
function DataStreamVizLight({ accent }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = containerRef.current?.querySelectorAll('.ds-node')
      const arrows = containerRef.current?.querySelectorAll('.ds-arrow')

      gsap.from(nodes, {
        opacity: 0, scale: 0.6, stagger: 0.18, duration: 0.55, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
      gsap.from(arrows, {
        scaleX: 0, opacity: 0, stagger: 0.12, duration: 0.4, ease: 'power2.out',
        transformOrigin: 'left',
        scrollTrigger: { trigger: containerRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      })
      gsap.to(containerRef.current?.querySelectorAll('.algo-node'), {
        boxShadow: `0 0 20px ${accent}66`,
        scale: 1.05,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, containerRef)
    return () => ctx.revert()
  }, [accent])

  const NODE_COLOR = `${accent}`
  const DANGER_COLOR = '#8b1a1a'

  const boxes = [
    { icon: '◉', label: 'Bạn', color: NODE_COLOR, size: 'w-12 h-12' },
    { icon: '◈', label: 'Nội dung', color: NODE_COLOR, size: 'w-12 h-12' },
    { icon: '⬡', label: 'Thuật toán', color: DANGER_COLOR, size: 'w-14 h-14', algo: true },
    { icon: '⬤', label: 'Data Profile', color: DANGER_COLOR, size: 'w-12 h-12' },
    { icon: '$', label: 'Quảng cáo', color: DANGER_COLOR, size: 'w-12 h-12' },
  ]

  return (
    <div ref={containerRef} className="w-full">
      {/* Row 1 */}
      <div className="flex items-center justify-center gap-2 mb-3">
        {[boxes[0], boxes[1], boxes[2]].map((b, i, arr) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`ds-node flex flex-col items-center gap-1.5`}>
              <div className={`${b.size} border-2 flex items-center justify-center text-xl ${b.algo ? 'algo-node' : ''}`}
                   style={{ borderColor: b.color, color: b.color, background: `${b.color}10` }}>
                {b.icon}
              </div>
              <span className="font-type text-[9px] opacity-60 tracking-wide" style={{ color: b.color }}>
                {b.label}
              </span>
            </div>
            {i < arr.length - 1 && (
              <div className="ds-arrow h-px w-8" style={{ background: `linear-gradient(to right, ${boxes[i].color}, ${boxes[i+1].color})` }}/>
            )}
          </div>
        ))}
      </div>

      {/* Arrow down */}
      <div className="ds-arrow flex justify-center mb-3">
        <div className="w-px h-7" style={{ background: `linear-gradient(to bottom, ${DANGER_COLOR}, ${DANGER_COLOR}50)` }}/>
      </div>

      {/* Row 2 */}
      <div className="flex items-center justify-center gap-2">
        {[boxes[3], boxes[4]].map((b, i, arr) => (
          <div key={i} className="flex items-center gap-2">
            <div className="ds-node flex flex-col items-center gap-1.5">
              <div className={`${b.size} border-2 flex items-center justify-center text-xl`}
                   style={{ borderColor: b.color, color: b.color, background: `${b.color}10` }}>
                {b.icon}
              </div>
              <span className="font-type text-[9px] opacity-60 tracking-wide" style={{ color: b.color }}>
                {b.label}
              </span>
            </div>
            {i < arr.length - 1 && (
              <div className="ds-arrow h-px w-8" style={{ background: DANGER_COLOR }}/>
            )}
          </div>
        ))}
      </div>

      <p className="font-body italic text-xs text-center mt-5 leading-relaxed" style={{ color: `${accent}90` }}>
        Bạn là <span style={{ color: DANGER_COLOR }} className="font-semibold not-italic">nguồn dữ liệu</span> —
        không phải khách hàng
      </p>
    </div>
  )
}
