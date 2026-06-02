import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import ArchivePhoto from '../../ui/ArchivePhoto'
import NeonCard from '../../ui/NeonCard'
import RationGridViz from './RationGridViz'
import baoCapStreet from '../../../../images/bao_cap_1.jpg'
import baoCapColor from '../../../../images/bao_cap_2.jpg'

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter1')

const DIAGNOSTICS = [
  ['INPUT', 'Kế hoạch hóa tập trung tuyệt đối'],
  ['BUG', 'Bình quân chủ nghĩa triệt tiêu sáng tạo'],
  ['OUTPUT', 'Con người thành bánh răng thụ động'],
]

function InflationCounter({ accent }) {
  const numberRef = useRef(null)

  useEffect(() => {
    const target = { value: 0 }
    const tween = gsap.to(target, {
      value: 774,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: numberRef.current,
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: () => {
        if (numberRef.current) numberRef.current.textContent = Math.round(target.value)
      },
    })

    return () => tween.kill()
  }, [])

  return (
    <div className="floating-cluster py-6 pl-6 border-l-2" style={{ borderColor: accent }}>
      <p className="font-type text-xs tracking-[0.24em] uppercase mb-2 font-bold" style={{ color: accent }}>
        Lạm phát 1986
      </p>
      <div className="flex items-end gap-2">
        <span ref={numberRef} className="font-display font-black text-8xl 2xl:text-[7rem] leading-none" style={{ color: accent }}>
          0
        </span>
        <span className="font-display font-black text-5xl leading-none pb-2" style={{ color: accent }}>%</span>
      </div>
      <p className="font-body italic text-base 2xl:text-lg text-ink-mid mt-3">
        Mâu thuẫn tích lũy đến điểm nút: hệ thống bắt buộc phải reset.
      </p>
    </div>
  )
}

export default function Chapter1() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0,
        y: 34,
        stagger: 0.09,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 68%', toggleActions: 'play none none reverse' },
      })
      gsap.to(sectionRef.current?.querySelectorAll('.parallax-media img, .parallax-img'), {
        yPercent: -14,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chapter1"
      ref={sectionRef}
      className="chapter-section relative px-6 md:px-10 2xl:px-14 py-16 md:py-20"
      style={{ background: chapter.bg, minHeight: '100vh' }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-45" aria-hidden="true" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-10 2xl:gap-14 items-start">
          <div className="space-y-9">
            <div className="animate-in">
              <p className="font-type text-sm tracking-[0.28em] uppercase mb-4 font-bold" style={{ color: chapter.accent }}>
                Bao cấp // 1975-1986
              </p>
              <h2 className="font-display font-black text-6xl md:text-7xl 2xl:text-[5.8rem] leading-[0.9] text-ink">
                Một mã nguồn
                <span className="block italic" style={{ color: chapter.accent }}>
                  khóa mọi động lực
                </span>
              </h2>
            </div>

            <div className="animate-in grid grid-cols-1 md:grid-cols-3 gap-8">
              {DIAGNOSTICS.map(([k, v]) => (
                <NeonCard key={k} accent={chapter.accent} className="floating-cluster min-h-[152px] py-6 pl-7 pr-4 2xl:py-7">
                  <p className="font-type text-sm tracking-[0.2em] uppercase font-bold" style={{ color: chapter.accent }}>
                    {k}
                  </p>
                  <p className="font-body italic text-xl 2xl:text-2xl leading-snug text-ink-mid mt-4">{v}</p>
                </NeonCard>
              ))}
            </div>

            <div className="animate-in grid grid-cols-1 xl:grid-cols-[0.62fr_1.38fr] gap-8 items-start">
              <InflationCounter accent={chapter.accent} />
              <RationGridViz accent={chapter.accent} />
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-in">
              <ArchivePhoto
                src={baoCapStreet}
                caption="Đô thị thời bao cấp: đời sống vận hành trong thiếu hụt và phân phối"
                subCaption="Archive 01"
                accent={chapter.accent}
                className="lg:translate-y-8"
              />
            </div>
            <div className="animate-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              <ArchivePhoto
                src={baoCapColor}
                caption="Không gian phố xá trước giai đoạn mở cửa mạnh"
                subCaption="Archive 02"
                accent={chapter.accent}
                small
                className="lg:ml-16"
              />
              <NeonCard accent={chapter.accent} className="floating-cluster py-5 pl-6">
                <p className="font-type text-xs tracking-[0.22em] uppercase mb-3 font-bold" style={{ color: chapter.accent }}>
                  Speaker beat
                </p>
                <p className="font-display font-bold italic text-xl leading-snug text-ink">
                  “Tha hóa ở đây không đến từ máy móc, mà đến từ sự kìm hãm.”
                </p>
              </NeonCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
