import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NeonCard from '../../ui/NeonCard'
import { snapToId } from '../../layout/SmoothSnapScroll'

gsap.registerPlugin(ScrollTrigger)

const ACCENT = '#6b1212'
const BG = '#f5ece8'

const MATRIX = [
  {
    period: '1975-1986',
    stage: 'Bao cấp',
    liberation: 'Giải phóng khỏi bóc lột',
    alienation: 'Kìm hãm động lực cá nhân',
  },
  {
    period: '1986-2000',
    stage: 'Đổi Mới',
    liberation: 'Giải phóng thị trường',
    alienation: 'Sùng bái hàng hóa',
  },
  {
    period: '2000-2020',
    stage: 'Kỷ nguyên số',
    liberation: 'Giải phóng không gian',
    alienation: 'Dữ liệu hóa con người',
  },
  {
    period: '2020-Nay',
    stage: 'Kỷ nguyên AI',
    liberation: 'Khuếch đại năng suất nhận thức',
    alienation: 'Khủng hoảng chủ thể tính',
  },
]

export default function Conclusion() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0,
        y: 28,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="conclusion"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-10 2xl:px-16 py-16 md:py-20"
      style={{ background: BG }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-35" aria-hidden="true" />

      <div className="max-w-[1600px] mx-auto relative">
        <div className="animate-in mb-12 text-center">
          <span className="ink-stamp mb-5" style={{ color: ACCENT, borderColor: ACCENT }}>
            14-15 phút // hard stop
          </span>
          <h2 className="font-display font-black text-6xl md:text-8xl leading-[0.92] text-ink">
            Lời giải
            <span className="block italic" style={{ color: ACCENT }}>
              từ kỹ sư
            </span>
          </h2>
          <p className="font-body italic text-2xl max-w-4xl mx-auto mt-5 text-ink-mid">
            Tha hóa không phải lỗi để sợ hãi. Nó là mâu thuẫn cần được nhìn thẳng để thiết kế kiến trúc thượng tầng mới.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.32fr_0.68fr] gap-9 2xl:gap-12 items-start">
          <div className="animate-in">
            <div className="border-2 overflow-hidden" style={{ borderColor: `${ACCENT}35`, background: 'rgba(255,248,236,0.55)' }}>
              <div className="grid grid-cols-[0.75fr_1fr_1fr_1fr] px-4 py-3 border-b" style={{ borderColor: `${ACCENT}22`, background: `${ACCENT}08` }}>
                {['Thời kỳ', 'Giai đoạn', 'Giải phóng', 'Tha hóa mới'].map(h => (
                  <span key={h} className="font-type text-[9px] tracking-widest uppercase" style={{ color: ACCENT }}>
                    {h}
                  </span>
                ))}
              </div>
              {MATRIX.map((row, i) => (
                <div
                  key={row.stage}
                  className="grid grid-cols-[0.75fr_1fr_1fr_1fr] gap-3 px-4 py-4 border-b last:border-b-0 items-start"
                  style={{ borderColor: `${ACCENT}12`, background: i % 2 === 0 ? 'transparent' : `${ACCENT}04` }}
                >
                  <span className="font-type text-sm" style={{ color: ACCENT }}>{row.period}</span>
                  <span className="font-display font-bold text-xl text-ink">{row.stage}</span>
                  <span className="font-body italic text-lg leading-snug text-ink-mid">{row.liberation}</span>
                  <span className="font-body italic text-lg leading-snug text-[#8b1a1a]">{row.alienation}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-in space-y-5">
            <NeonCard accent={ACCENT} className="p-6">
              <p className="font-type text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>
                No AI Generation
              </p>
              <p className="font-display font-bold italic text-3xl leading-snug text-ink">
                Giao diện đã ngắt khỏi công cụ AI. Phần phản biện dùng tư duy độc lập.
              </p>
            </NeonCard>

            <NeonCard accent={ACCENT} className="p-6">
              <p className="font-type text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>
                Kết luận
              </p>
              <p className="font-display font-bold italic text-3xl leading-snug text-ink">
                Công nghệ quyết định tốc độ, nhưng triết học quyết định hướng đi.
              </p>
            </NeonCard>

            <button
              onClick={() => snapToId('hero')}
              className="w-full font-type text-xs tracking-[0.22em] uppercase px-6 py-3 border-2 transition-opacity hover:opacity-70"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Xem lại từ đầu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
