import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import NeonCard from '../../ui/NeonCard'
import ConceptImage from '../../ui/ConceptImage'
import CognitiveMirror from '../../interactive/CognitiveMirror'
import { useHardStop } from '../../../hooks/useHardStop'
import aiHands from '../../../../images/chapter4_img1.png'
import aiBody from '../../../../images/chapter4_img2.png'

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter4')

const AI_TABLE = [
  { human: 'Duyệt CV', ai: 'ATS / ranking model', risk: 'Quan hệ lao động' },
  { human: 'Tư vấn tình cảm', ai: 'Chatbot companion', risk: 'Đồng cảm' },
  { human: 'Viết mã nguồn', ai: 'Copilot / GPT', risk: 'Tư duy kỹ thuật' },
  { human: 'Ra quyết định', ai: 'Prediction system', risk: 'Chủ thể tính' },
]

export default function Chapter4() {
  const sectionRef = useRef(null)
  const { isLocked, triggerHardStop } = useHardStop()
  const [showHardStopConfirm, setShowHardStopConfirm] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0,
        y: 34,
        stagger: 0.08,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
      gsap.to('.neural-pulse', {
        boxShadow: `0 0 28px ${chapter.accent}66`,
        scale: 1.04,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chapter4"
      ref={sectionRef}
      className="chapter-section relative px-6 md:px-10 2xl:px-14 py-16 md:py-20"
      style={{ background: chapter.bg, minHeight: '100vh' }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-25" aria-hidden="true" />

      <div className="max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 2xl:gap-14 items-start mb-16">
          <div className="space-y-8">
            <div className="animate-in">
              <p className="font-type text-[10px] tracking-[0.34em] uppercase mb-3" style={{ color: chapter.accent }}>
                Kỷ nguyên AI // 2020-Nay
              </p>
              <h2 className="font-display font-black text-6xl md:text-7xl 2xl:text-[5.8rem] leading-[0.9] text-ink">
                Tự động hóa
                <span className="block italic" style={{ color: chapter.accent }}>
                  nhận thức
                </span>
              </h2>
            </div>

            <div className="animate-in">
              <ConceptImage
                src={aiHands}
                imgClass="chapter-img chapter4-img !w-auto max-w-full max-h-[360px] object-contain mx-auto lg:mx-0"
                alt="Tay người chạm tay máy"
              />
            </div>

            <NeonCard accent={chapter.accent} className="animate-in p-6">
              <p className="font-type text-[9px] tracking-[0.26em] uppercase mb-3" style={{ color: chapter.accent }}>
                Khủng hoảng chủ thể tính
              </p>
              <p className="font-display font-bold italic text-2xl 2xl:text-3xl leading-snug text-ink">
                “Tha hóa là khi ta tự nguyện giao nộp tư duy của mình cho máy móc.”
              </p>
            </NeonCard>
          </div>

          <div className="space-y-7">
            <div className="animate-in neural-pulse border-2 p-6" style={{ borderColor: `${chapter.accent}45`, background: `${chapter.accent}06` }}>
              <ConceptImage
                src={aiBody}
                imgClass="chapter-img chapter4-img !w-auto max-w-full max-h-[540px] object-contain mx-auto"
                alt="Con người và mạng neural hòa lẫn"
              />
              <p className="font-type text-[10px] tracking-[0.32em] uppercase text-center mt-4" style={{ color: chapter.accent }}>
                Human node vs neural network
              </p>
            </div>

            <div className="animate-in border overflow-hidden" style={{ borderColor: `${chapter.accent}30` }}>
              <div className="grid grid-cols-[1fr_1fr_1fr] px-4 py-2.5 border-b" style={{ borderColor: `${chapter.accent}20`, background: `${chapter.accent}08` }}>
                {['AI chen vào', 'Công cụ', 'Rủi ro'].map(h => (
                  <span key={h} className="font-type text-[9px] tracking-widest uppercase opacity-55" style={{ color: chapter.accent }}>
                    {h}
                  </span>
                ))}
              </div>
              {AI_TABLE.map((row, i) => (
                <div
                  key={row.human}
                  className="grid grid-cols-[1fr_1fr_1fr] gap-3 px-4 py-3 border-b last:border-b-0 items-center"
                  style={{ borderColor: `${chapter.accent}12`, background: i % 2 === 0 ? 'transparent' : `${chapter.accent}04` }}
                >
                  <span className="font-body italic text-base text-ink-mid">{row.human}</span>
                  <span className="font-type text-sm opacity-70" style={{ color: chapter.accent }}>{row.ai}</span>
                  <span className="font-type text-[10px] tracking-wide uppercase text-[#8b1a1a]">{row.risk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="ai-feature" className="animate-in scroll-mt-16">
          <div className="border-t pt-14 mb-4" style={{ borderColor: `${chapter.accent}20` }}>
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="h-px flex-1 max-w-24 opacity-30" style={{ background: chapter.accent }} />
              <span className="font-type text-[10px] tracking-[0.3em] uppercase opacity-60" style={{ color: chapter.accent }}>
                Tính năng AI — Demo trực tiếp
              </span>
              <div className="h-px flex-1 max-w-24 opacity-30" style={{ background: chapter.accent }} />
            </div>
          </div>

          <NeonCard accent={chapter.accent} className="p-6 md:p-8">
            {isLocked ? (
              <div className="text-center py-8 space-y-4">
                <p className="font-type text-sm tracking-widest uppercase" style={{ color: chapter.accent, opacity: 0.55 }}>
                  AI đã hoàn thành vai trò hỗ trợ
                </p>
                <p className="font-body italic text-sm text-ink-mid opacity-70">
                  “Phần nhận thức tiếp theo thuộc về con người.”
                </p>
              </div>
            ) : (
              <CognitiveMirror chapter="chapter4" />
            )}
          </NeonCard>
        </div>

        {!isLocked && (
          <div className="animate-in mt-10 border-t pt-8" style={{ borderColor: `${chapter.accent}15` }}>
            {!showHardStopConfirm ? (
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1 opacity-20" style={{ background: chapter.accent }} />
                <button
                  onClick={() => setShowHardStopConfirm(true)}
                  className="font-type text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-opacity hover:opacity-70"
                  style={{ borderColor: `${chapter.accent}50`, color: chapter.accent }}
                >
                  Khóa AI → bắt đầu phản biện
                </button>
                <div className="h-px flex-1 opacity-20" style={{ background: chapter.accent }} />
              </div>
            ) : (
              <div className="text-center space-y-4 p-5 border" style={{ borderColor: `${chapter.accent}35`, background: `${chapter.accent}05` }}>
                <p className="font-type text-xs tracking-wider" style={{ color: chapter.accent }}>
                  Xác nhận kết thúc phiên AI?
                </p>
                <p className="font-body italic text-xs text-ink-mid opacity-65">
                  Sau khi xác nhận, tính năng AI sẽ bị khóa để phần phản biện dùng tư duy độc lập.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <button
                    onClick={triggerHardStop}
                    className="font-type text-xs tracking-widest uppercase px-5 py-2.5 border-2"
                    style={{ borderColor: '#8b1a1a', color: '#fff8ec', background: '#8b1a1a' }}
                  >
                    Xác nhận khóa AI
                  </button>
                  <button
                    onClick={() => setShowHardStopConfirm(false)}
                    className="font-type text-xs tracking-widest uppercase px-5 py-2.5 border transition-opacity hover:opacity-70"
                    style={{ borderColor: `${chapter.accent}40`, color: chapter.accent }}
                  >
                    Hủy
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
