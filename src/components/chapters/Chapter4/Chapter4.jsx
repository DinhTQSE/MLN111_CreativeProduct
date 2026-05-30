import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import ChapterTitle from '../../ui/ChapterTitle'
import QuoteBlock from '../../ui/QuoteBlock'
import NeonCard from '../../ui/NeonCard'
import IllustrationChapter4 from '../../ui/illustrations/IllustrationChapter4'
<<<<<<< HEAD
import ConceptImage from '../../ui/ConceptImage'
=======
import CognitiveMirror from '../../interactive/CognitiveMirror'
import { useHardStop } from '../../../hooks/useHardStop'
>>>>>>> 4f8b24fa4e17024048a5b6109884e88f77ab06e3

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter4')

const AI_TABLE = [
  { human: 'Viết báo cáo',         ai: 'GPT-4 / Claude',        level: 3 },
  { human: 'Phân tích dữ liệu',    ai: 'AutoML / Copilot',      level: 3 },
  { human: 'Thiết kế sáng tạo',    ai: 'Midjourney / DALL-E',   level: 2 },
  { human: 'Lập trình',            ai: 'GitHub Copilot',         level: 2 },
  { human: 'Ra quyết định chiến lược', ai: '???',               level: 1 },
  { human: 'Đồng cảm / Tình cảm',  ai: '???',                   level: 0 },
]

const LEVEL = {
  3: { label: 'Đã thay',   color: '#c0182a' },
  2: { label: 'Đang thay', color: '#8b6000' },
  1: { label: 'Nguy cơ',   color: '#3d1f6b' },
  0: { label: 'Chưa rõ',   color: '#6b5040' },
}

export default function Chapter4() {
  const sectionRef = useRef(null)
  const { isLocked, triggerHardStop } = useHardStop()
  const [showHardStopConfirm, setShowHardStopConfirm] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
      gsap.to('#human-wm', {
        opacity: 0.015,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=80%', scrub: 2 },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chapter4"
      ref={sectionRef}
      className="chapter-section relative px-6 md:px-14 py-24"
      style={{ background: chapter.bg, minHeight: '100vh' }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-30" aria-hidden="true"/>

      {/* Watermark HUMAN mờ */}
      <div id="human-wm" className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
           aria-hidden="true" style={{ opacity: 0.05 }}>
        <p className="font-display font-black text-[16vw] leading-none select-none"
           style={{ color: chapter.accent, fontStyle: 'italic' }}>
          HUMAN
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* ── Row 1: Title + table ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-9">
            <div className="animate-in"><ChapterTitle {...chapter}/></div>

            <div className="animate-in">
              <ConceptImage
                src="/images/chapter4_concept.png"
                fallback={<IllustrationChapter4 accent={chapter.accent} className="w-full max-w-sm mx-auto lg:mx-0"/>}
                imgClass="chapter-img chapter4-img mx-auto lg:mx-0"
                alt="Ranh giới người — máy đang tan biến"
              />
              <p className="font-hand text-sm mt-2 opacity-40"
                 style={{ color: chapter.accent, transform: 'rotate(1.5deg)' }}>
                Ranh giới người — máy đang tan biến?
              </p>
            </div>

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

          <div className="space-y-6 animate-in">
            <p className="font-hand text-base opacity-55 text-center"
               style={{ color: chapter.accent, transform: 'rotate(-1deg)' }}>
              Bản đồ thay thế lao động nhận thức
            </p>

            <div className="border rounded-sm overflow-hidden" style={{ borderColor: `${chapter.accent}25` }}>
              <div className="grid grid-cols-[1fr_1fr_72px] gap-0 px-4 py-2.5 border-b"
                   style={{ borderColor: `${chapter.accent}20`, background: `${chapter.accent}08` }}>
                {['Lao động người', 'AI thay thế', 'Mức'].map(h => (
                  <span key={h} className="font-type text-[9px] tracking-widest uppercase opacity-45"
                        style={{ color: chapter.accent }}>{h}</span>
                ))}
              </div>
              {AI_TABLE.map((row, i) => {
                const m = LEVEL[row.level]
                return (
                  <div key={i} className="grid grid-cols-[1fr_1fr_72px] gap-0 px-4 py-3 border-b items-center"
                       style={{ borderColor: `${chapter.accent}10`,
                                background: i%2===0 ? 'transparent' : `${chapter.accent}04` }}>
                    <span className="font-body italic text-sm text-ink-mid">{row.human}</span>
                    <span className="font-type text-xs opacity-60" style={{ color: chapter.accent }}>{row.ai}</span>
                    <span className="font-type text-[8px] tracking-wide uppercase px-1.5 py-0.5 border text-center"
                          style={{ borderColor: m.color, color: m.color }}>{m.label}</span>
                  </div>
                )
              })}
            </div>

            <NeonCard accent={chapter.accent} className="p-6">
              <p className="font-type text-[9px] uppercase tracking-widest opacity-30 mb-3"
                 style={{ color: chapter.accent }}>// Câu hỏi triết học mở //</p>
              <p className="font-body italic text-sm text-ink-mid leading-relaxed">
                Nếu{' '}
                <span className="text-ink not-italic font-semibold">
                  "con người là tổng hòa các mối quan hệ xã hội"
                </span>{' '}
                (Marx, 1845), và AI có thể mô phỏng mọi quan hệ đó —
                thì <em style={{ color: chapter.accent }}>
                  điều gì còn lại để định nghĩa bản chất người?
                </em>
              </p>
            </NeonCard>
          </div>
        </div>

        {/* ── Row 2: Cognitive Mirror (AI Feature) ── */}
        <div className="animate-in">
          <div className="border-t pt-14 mb-4" style={{ borderColor: `${chapter.accent}20` }}>
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="h-px flex-1 max-w-24 opacity-30" style={{ background: chapter.accent }}/>
              <span className="font-type text-[10px] tracking-[0.3em] uppercase opacity-50"
                    style={{ color: chapter.accent }}>
                Tính năng AI — Demo trực tiếp
              </span>
              <div className="h-px flex-1 max-w-24 opacity-30" style={{ background: chapter.accent }}/>
            </div>
          </div>

          <NeonCard accent={chapter.accent} className="p-6 md:p-8">
            {isLocked ? (
              <div className="text-center py-8 space-y-4">
                <p className="font-type text-sm tracking-widest uppercase" style={{ color: chapter.accent, opacity: 0.5 }}>
                  🔒 AI đã hoàn thành vai trò hỗ trợ
                </p>
                <p className="font-body italic text-sm text-ink-mid opacity-70">
                  "Phần nhận thức tiếp theo thuộc về con người."
                </p>
              </div>
            ) : (
              <CognitiveMirror chapter="chapter4" />
            )}
          </NeonCard>
        </div>

        {/* ── Hard Stop Button ── */}
        {!isLocked && (
          <div className="animate-in mt-10 border-t pt-8" style={{ borderColor: `${chapter.accent}15` }}>
            {!showHardStopConfirm ? (
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1 opacity-20" style={{ background: chapter.accent }}/>
                <button
                  onClick={() => setShowHardStopConfirm(true)}
                  className="font-type text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-200 hover:opacity-70"
                  style={{ borderColor: `${chapter.accent}50`, color: chapter.accent }}
                >
                  🔒 Kết thúc phiên AI → Bắt đầu phản biện
                </button>
                <div className="h-px flex-1 opacity-20" style={{ background: chapter.accent }}/>
              </div>
            ) : (
              <div className="text-center space-y-4 p-5 border" style={{ borderColor: `${chapter.accent}35`, background: `${chapter.accent}05` }}>
                <p className="font-type text-xs tracking-wider" style={{ color: chapter.accent }}>
                  Xác nhận kết thúc phiên AI?
                </p>
                <p className="font-body italic text-xs text-ink-mid opacity-60">
                  Sau khi xác nhận, toàn bộ tính năng AI sẽ bị khóa để đảm bảo liêm chính trong 20 phút phản biện.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={triggerHardStop}
                    className="font-type text-xs tracking-widest uppercase px-5 py-2.5 border-2 transition-all duration-200"
                    style={{ borderColor: '#8b1a1a', color: '#fff8ec', background: '#8b1a1a' }}
                  >
                    ✓ Xác nhận khóa AI
                  </button>
                  <button
                    onClick={() => setShowHardStopConfirm(false)}
                    className="font-type text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 hover:opacity-70"
                    style={{ borderColor: `${chapter.accent}40`, color: chapter.accent }}
                  >
                    ← Hủy
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
