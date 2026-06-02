import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import NeonCard from '../../ui/NeonCard'
import ConceptImage from '../../ui/ConceptImage'
import chapter3Data from '../../../../images/chapter3_img1.png'
import chapter3Barcode from '../../../../images/chapter3_img2.png'

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter3')

function DataCommodityIllustration({ accent }) {
  return (
    <figure className="relative bg-[#fff8ec]/35 p-5 rounded-2xl ambient-drift">
      <div className="flex items-center justify-between gap-4 mb-4">
        <p className="font-type text-[12px] tracking-[0.24em] uppercase font-black" style={{ color: accent }}>
          Minh họa tha hóa số
        </p>
        <p className="font-type text-[10px] tracking-[0.18em] uppercase text-ink-mid">
          Data profile
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[0.86fr_1fr] gap-5 items-center">
        <ConceptImage
          src={chapter3Barcode}
          imgClass="chapter-img chapter3-img parallax-img w-full max-h-[370px] object-contain mx-auto"
          alt="Con người bị mã hóa thành hồ sơ dữ liệu"
        />
        <div className="space-y-4">
          <p className="font-display font-bold italic text-3xl 2xl:text-4xl leading-tight text-ink">
            Chú ý, thói quen và quyền riêng tư bị đóng gói thành dữ liệu.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              ['Dấu vết', 'Like, tìm kiếm, vị trí, thời gian xem'],
              ['Mã hóa', 'Hành vi trở thành hồ sơ quảng cáo'],
              ['Tha hóa', 'Con người bị nhìn như một tập dữ liệu'],
            ].map(([label, body]) => (
              <div key={label} className="border-l-2 bg-white/45 px-4 py-3" style={{ borderColor: accent }}>
                <p className="font-type text-[10px] tracking-[0.18em] uppercase font-black mb-1" style={{ color: accent }}>
                  {label}
                </p>
                <p className="font-body text-base leading-snug text-ink-mid">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-4 font-type text-[11px] tracking-[0.18em] uppercase font-black" style={{ color: accent }}>
        Từ người dùng tự do đến hồ sơ quảng cáo có thể mua bán
      </figcaption>
    </figure>
  )
}

export default function Chapter3() {
  const sectionRef = useRef(null)

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
      id="chapter3"
      ref={sectionRef}
      className="chapter-section px-6 md:px-10 2xl:px-14 py-16 md:py-20"
      style={{ background: chapter.bg, minHeight: '100vh' }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-25" aria-hidden="true" />

      <div className="max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 2xl:gap-14 items-start">
          <div className="space-y-8">
            <div className="animate-in ambient-drift-slow">
              <p className="font-type text-[10px] tracking-[0.34em] uppercase mb-3" style={{ color: chapter.accent }}>
                Kỷ nguyên số // 2000-2020
              </p>
              <h2 className="font-display font-black text-6xl md:text-7xl 2xl:text-[5.8rem] leading-[0.9] text-ink">
                Con người
                <span className="block italic" style={{ color: chapter.accent }}>
                  trở thành dữ liệu
                </span>
              </h2>
            </div>

            <div className="animate-in ambient-drift">
              <ConceptImage
                src={chapter3Data}
                imgClass="chapter-img chapter3-img parallax-img !w-auto mx-auto lg:mx-0 max-w-2xl max-h-[430px] object-contain"
                alt="Người dùng biến thành luồng dữ liệu"
              />
            </div>

            <NeonCard accent={chapter.accent} className="animate-in p-6">
              <p className="font-type text-[9px] tracking-[0.26em] uppercase mb-3" style={{ color: chapter.accent }}>
                Câu hỏi cho hội đồng
              </p>
              <p className="font-display font-bold italic text-2xl 2xl:text-3xl leading-snug text-ink">
                “Ai từng vừa nói chuyện về một món đồ, rồi 5 phút sau thấy quảng cáo về chính món đó?”
              </p>
            </NeonCard>
          </div>

          <div className="space-y-7">
            <div className="animate-in">
              <DataCommodityIllustration accent={chapter.accent} />
            </div>

            <NeonCard accent={chapter.accent} className="animate-in p-7">
              <p className="font-type text-[10px] tracking-[0.28em] uppercase mb-3" style={{ color: chapter.accent }}>
                Digital alienation
              </p>
              <p className="font-display font-bold italic text-3xl 2xl:text-4xl leading-snug text-ink">
                Nếu bạn không trả tiền cho sản phẩm, bạn chính là sản phẩm.
              </p>
              <p className="font-body italic text-base 2xl:text-lg leading-relaxed text-ink-mid mt-4">
                Big Tech không chỉ khai thác hành vi. Nó biến sự chú ý, thói quen và quyền riêng tư thành dữ liệu thô để bán cho hệ thống quảng cáo.
              </p>
            </NeonCard>
          </div>
        </div>
      </div>
    </section>
  )
}
