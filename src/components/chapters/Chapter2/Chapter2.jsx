import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import ArchivePhoto from '../../ui/ArchivePhoto'
import NeonCard from '../../ui/NeonCard'
import doiMoiTrain from '../../../../images/doi_moi_1.jpg'

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter2')

const COMMODITY_NODES = [
  'Tiền tệ',
  'Hàng hóa',
  'Giá đất',
  'Xe máy',
  'Thị trường',
  'Lợi nhuận',
  'Tự do làm giàu',
  'Cạnh tranh',
]

const PATCH_STEPS = [
  ['01', 'Cơ chế cũ', 'Kế hoạch hóa tập trung không còn phù hợp với lực lượng sản xuất đang muốn bung ra.'],
  ['02', 'Đại hội VI', 'Điểm nút chính trị: hợp thức hóa đổi mới, mở đường cho thị trường.'],
  ['03', 'Thị trường', 'Năng lực cá nhân được giải phóng, nhưng quan hệ xã hội bắt đầu bị tiền tệ hóa.'],
]

export default function Chapter2() {
  const sectionRef = useRef(null)
  const nodesRef = useRef(null)

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

      gsap.from(nodesRef.current?.querySelectorAll('.commodity-node'), {
        opacity: 0,
        scale: 0.4,
        x: 0,
        y: 0,
        stagger: { each: 0.06, from: 'center' },
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: nodesRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
      gsap.to(nodesRef.current?.querySelectorAll('.commodity-node'), {
        y: i => (i % 2 === 0 ? -20 : 18),
        x: i => (i % 3 === 0 ? 17 : -14),
        rotate: i => (i % 2 === 0 ? 1.25 : -1.25),
        repeat: -1,
        yoyo: true,
        duration: i => 3.4 + i * 0.16,
        ease: 'sine.inOut',
        stagger: 0.08,
      })
      gsap.to(nodesRef.current?.querySelectorAll('.market-line'), {
        x: i => (i % 2 === 0 ? 52 : -44),
        opacity: 0.62,
        repeat: -1,
        yoyo: true,
        duration: 4.7,
        stagger: 0.16,
        ease: 'sine.inOut',
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
      id="chapter2"
      ref={sectionRef}
      className="chapter-section relative px-6 md:px-10 2xl:px-14 py-16 md:py-20"
      style={{ background: chapter.bg, minHeight: '100vh' }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-35" aria-hidden="true" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="animate-in flex justify-center mb-7">
          <div
            className="font-type text-sm tracking-[0.2em] uppercase px-5 py-2.5 border-2 font-bold"
            style={{ borderColor: chapter.accent, color: chapter.accent, background: `${chapter.accent}10` }}
          >
            Bản vá lỗi lớn nhất // Đại hội VI, 1986
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 2xl:gap-14 items-start">
          <div className="space-y-8">
            <div className="animate-in">
              <p className="font-type text-xs tracking-[0.28em] uppercase mb-3 font-bold" style={{ color: chapter.accent }}>
                Đổi Mới // 1986-2000
              </p>
              <h2 className="font-display font-black text-6xl md:text-7xl 2xl:text-[5.8rem] leading-[0.9] text-ink">
                Bước nhảy
                <span className="block italic" style={{ color: chapter.accent }}>
                  tại điểm nút
                </span>
              </h2>
            </div>

            <div className="animate-in">
              <ArchivePhoto
                src={doiMoiTrain}
                caption="Đổi Mới như một đoàn tàu rời khỏi cơ chế cũ"
                subCaption="1986"
                accent={chapter.accent}
              />
            </div>

            <NeonCard accent={chapter.accent} className="animate-in p-6">
              <p className="font-type text-xs tracking-[0.22em] uppercase mb-3 font-bold" style={{ color: chapter.accent }}>
                Speaker beat
              </p>
              <p className="font-display font-bold italic text-2xl 2xl:text-3xl leading-snug text-ink">
                “Bạn có tài, bạn được quyền làm giàu. Nhưng đồng tiền cũng bắt đầu trở thành thước đo vạn vật.”
              </p>
            </NeonCard>
          </div>

          <div className="space-y-5">
            <div ref={nodesRef} className="animate-in relative min-h-[430px] overflow-hidden" style={{ background: `${chapter.accent}06` }}>
              <p className="absolute left-6 top-6 z-10 font-type text-xs tracking-[0.22em] uppercase font-bold" style={{ color: chapter.accent }}>
                Phá cơ chế cũ → thị trường bung ra
              </p>
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className="market-line absolute h-px origin-left"
                    style={{
                      left: `${8 + i * 9}%`,
                      top: `${16 + (i % 5) * 15}%`,
                      width: `${42 + (i % 4) * 10}%`,
                      transform: `rotate(${i % 2 === 0 ? -18 : 16}deg)`,
                      background: `${chapter.accent}26`,
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-display font-black text-6xl md:text-8xl italic" style={{ color: `${chapter.accent}30` }}>
                  ĐỔI MỚI
                </div>
              </div>

              {COMMODITY_NODES.map((node, i) => {
                const positions = [
                  [12, 22], [33, 13], [62, 18], [78, 34],
                  [18, 62], [43, 48], [64, 68], [82, 76],
                ]
                const [left, top] = positions[i]
                return (
                  <div
                    key={node}
                    className="commodity-node absolute px-5 py-3 font-type text-sm tracking-wider uppercase bg-[#fff8ec]/75 font-bold"
                    style={{ left: `${left}%`, top: `${top}%`, color: chapter.accent }}
                  >
                    {node}
                  </div>
                )
              })}
            </div>

            <div className="animate-in grid grid-cols-1 md:grid-cols-3 gap-3">
              {PATCH_STEPS.map(([n, title, body]) => (
                <NeonCard key={n} accent={chapter.accent} className="floating-cluster py-3 pl-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="w-9 h-9 flex items-center justify-center font-type text-xs font-bold shrink-0"
                      style={{ color: chapter.accent }}
                    >
                      {n}
                    </span>
                    <p className="font-display font-bold text-xl leading-none text-ink">{title}</p>
                  </div>
                  <p className="font-body italic text-base leading-snug text-ink-mid">{body}</p>
                </NeonCard>
              ))}
            </div>

            <div className="animate-in grid grid-cols-1 md:grid-cols-2 gap-4">
              <NeonCard accent={chapter.accent} className="floating-cluster py-5 pl-6">
                <p className="font-type text-xs tracking-[0.22em] uppercase mb-3 font-bold text-[#166534]">
                  Giải phóng
                </p>
                <p className="font-body italic text-base 2xl:text-lg leading-relaxed text-ink-mid">
                  Thị trường mở cửa, năng lực cá nhân được bung tỏa, lực lượng sản xuất thoát khỏi cơ chế phân phối cũ.
                </p>
              </NeonCard>
              <NeonCard accent={chapter.accent} className="floating-cluster py-5 pl-6">
                <p className="font-type text-xs tracking-[0.22em] uppercase mb-3 font-bold text-[#8b1a1a]">
                  Tha hóa mới
                </p>
                <p className="font-body italic text-base 2xl:text-lg leading-relaxed text-ink-mid">
                  Sùng bái hàng hóa: quan hệ người-người bị vật hóa thành quan hệ tiền, giá và lợi nhuận.
                </p>
              </NeonCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
