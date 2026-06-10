import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NeonCard from '../../ui/NeonCard'
import { snapToId } from '../../layout/SmoothSnapScroll'

gsap.registerPlugin(ScrollTrigger)

const ACCENT = '#6b1212'
const BG = '#f5edda'

const TEAM = [
  {
    name: 'Trần Quốc Dinh',
    role: 'Narrative Lead & Triết học ứng dụng',
    scope: 'Thiết kế flow lập luận, liên kết quy luật Mác - Lênin với từng giai đoạn xã hội.',
  },
  {
    name: 'Nguyễn Nhựt An',
    role: 'Research Reviewer & Academic QA',
    scope: 'Đối chiếu nội dung với giáo trình, rà soát thuật ngữ và tính nhất quán học thuật.',
  },
  {
    name: 'Võ Đồng Đức Khải',
    role: 'Frontend Interaction & Visual System',
    scope: 'Dàn dựng scrollytelling, animation, hình ảnh minh họa và phần demo tương tác AI.',
  },
]

const AI_REPORT = [
  {
    category: 'Công cụ sử dụng',
    ai: 'ChatGPT-4, Claude 3.5 Sonnet và Cursor/AI coding assistant được dùng như công cụ hỗ trợ kỹ thuật, kiểm tra diễn đạt và gợi ý cấu trúc giao diện.',
    human: 'Nhóm sinh viên quyết định nội dung cuối cùng, chọn luận điểm, biên tập thông tin và chịu trách nhiệm toàn bộ phần trình bày.',
  },
  {
    category: 'Mục đích & Prompt mẫu',
    ai: 'Prompt mẫu: "Gợi ý bố cục scrollytelling cho chủ đề tha hóa trong kỷ nguyên AI"; "Rà soát lỗi chính tả tiếng Việt"; "Tạo khung JSX/CSS cho section minh bạch AI".',
    human: 'Nhóm tự viết lại bằng ngôn ngữ của mình, bỏ các đoạn không phù hợp và điều chỉnh theo kịch bản thuyết trình MLN111.',
  },
  {
    category: 'Phần AI thực hiện',
    ai: 'Gen mã nguồn frontend thô, đề xuất animation/parallax, tóm tắt ý phụ, kiểm tra lỗi chính tả và gợi ý cách trình bày bảng.',
    human: 'Nhóm kiểm thử UI, sửa layout, chọn hình ảnh, kiểm tra logic flow và quyết định phần nào được đưa vào sản phẩm cuối.',
  },
  {
    category: 'Phần sinh viên biên soạn & chỉnh sửa',
    ai: 'AI không được dùng làm nguồn kết luận triết học độc lập và không thay thế việc đọc tài liệu chính thức.',
    human: 'Sinh viên tự viết luận điểm triết học, tự đối chiếu với Giáo trình Triết học Mác - Lênin 2021, đặc biệt trang 297 và 449, trước khi đưa vào web.',
  },
  {
    category: 'Giới hạn sử dụng',
    ai: 'Không tạo câu trả lời thay cho nhóm trong phần phản biện trực tiếp; không tự động phát sinh lập luận mới khi báo cáo.',
    human: 'Trong phiên hỏi đáp 20 phút, mọi trả lời được xử lý bằng tư duy độc lập và hiểu biết của thành viên nhóm.',
  },
]

const COMMITMENTS = [
  'AI chỉ đóng vai trò trợ lý kỹ thuật và biên tập hình thức, không thay thế tư duy phản biện của nhóm.',
  'Mọi khái niệm triết học do AI gợi ý đều đã được nhóm kiểm chứng lại bằng giáo trình và tài liệu học phần chính thức.',
  'Tại màn hình này, tất cả công cụ AI được ngắt khỏi quy trình trình bày; phần Q&A 20 phút được thực hiện 100% bằng tư duy độc lập của con người.',
]

export default function Appendix() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.appendix-in'), {
        opacity: 0,
        y: 30,
        stagger: 0.07,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })

      gsap.to(sectionRef.current?.querySelectorAll('.appendix-drift'), {
        y: i => (i % 2 === 0 ? -14 : 12),
        x: i => (i % 2 === 0 ? 8 : -8),
        repeat: -1,
        yoyo: true,
        duration: 5.2,
        stagger: 0.12,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="appendix"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-10 2xl:px-16 py-16 md:py-20"
      style={{ background: BG }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-35" aria-hidden="true" />
      <div className="absolute left-0 right-0 top-24 h-px bg-ink/10" aria-hidden="true" />

      <div className="max-w-[1600px] mx-auto relative">
        <div className="appendix-in mb-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-end">
          <div>
            <span className="ink-stamp mb-5" style={{ color: ACCENT, borderColor: ACCENT }}>
              Phụ lục học thuật // AI transparency
            </span>
            <h2 className="font-display font-black text-5xl md:text-7xl 2xl:text-8xl leading-[0.92] text-ink">
              Phụ lục
              <span className="block italic" style={{ color: ACCENT }}>
                & thông tin nhóm
              </span>
            </h2>
          </div>

          <p className="font-body italic text-xl md:text-2xl leading-relaxed text-ink-mid max-w-3xl">
            Màn cuối này ghi rõ cách nhóm sử dụng AI, phần nào do công cụ hỗ trợ và phần nào do sinh viên tự biên soạn, kiểm chứng, bảo vệ trước hội đồng.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.74fr_1.26fr] gap-8 2xl:gap-10 items-start">
          <div className="space-y-6">
            <div className="appendix-in">
              <p className="font-type text-sm tracking-[0.24em] uppercase mb-4 font-bold" style={{ color: ACCENT }}>
                Team information
              </p>
              <div className="space-y-4">
                {TEAM.map((member, index) => (
                  <NeonCard key={member.name} accent={ACCENT} className="appendix-drift py-5 pl-6 pr-5">
                    <div className="flex items-start gap-5">
                      <span
                        className="font-display font-black text-4xl leading-none min-w-12"
                        style={{ color: ACCENT }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-3xl leading-tight text-ink">{member.name}</h3>
                        <p className="font-type text-xs tracking-[0.18em] uppercase mt-2 font-bold" style={{ color: ACCENT }}>
                          {member.role}
                        </p>
                        <p className="font-body text-lg leading-relaxed text-ink-mid mt-3">{member.scope}</p>
                      </div>
                    </div>
                  </NeonCard>
                ))}
              </div>
            </div>

            <NeonCard accent={ACCENT} className="appendix-in p-6">
              <p className="font-type text-xs tracking-[0.24em] uppercase mb-4 font-bold" style={{ color: ACCENT }}>
                Academic source check
              </p>
              <p className="font-display font-bold italic text-3xl leading-snug text-ink">
                Giáo trình Triết học Mác - Lênin 2021, trang 297 và 449 là điểm đối chiếu bắt buộc cho các luận điểm trọng tâm.
              </p>
            </NeonCard>
          </div>

          <div className="space-y-7">
            <div className="appendix-in">
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="font-type text-sm tracking-[0.24em] uppercase font-bold" style={{ color: ACCENT }}>
                  Báo cáo Minh bạch AI
                </p>
                <span className="font-type text-[10px] tracking-[0.18em] uppercase text-ink-mid">
                  AI output ≠ human argument
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border-2 shadow-[0_22px_60px_rgba(28,14,6,0.08)]" style={{ borderColor: `${ACCENT}38`, background: 'rgba(255,248,236,0.72)' }}>
                <div className="grid grid-cols-[0.72fr_1.08fr_1.2fr] gap-0 border-b" style={{ borderColor: `${ACCENT}22`, background: `${ACCENT}08` }}>
                  {['Hạng mục', 'AI output / hỗ trợ', 'Sinh viên biên soạn & chỉnh sửa'].map(header => (
                    <div key={header} className="px-4 py-3">
                      <p className="font-type text-[10px] tracking-[0.18em] uppercase font-bold" style={{ color: ACCENT }}>
                        {header}
                      </p>
                    </div>
                  ))}
                </div>

                {AI_REPORT.map((row, index) => (
                  <div
                    key={row.category}
                    className="grid grid-cols-[0.72fr_1.08fr_1.2fr] gap-0 border-b last:border-b-0"
                    style={{ borderColor: `${ACCENT}14`, background: index % 2 === 0 ? 'transparent' : `${ACCENT}04` }}
                  >
                    <div className="px-4 py-4 border-r" style={{ borderColor: `${ACCENT}14` }}>
                      <p className="font-display font-bold text-xl leading-snug text-ink">{row.category}</p>
                    </div>
                    <div className="px-4 py-4 border-r" style={{ borderColor: `${ACCENT}14` }}>
                      <p className="font-body text-base 2xl:text-lg leading-relaxed text-ink-mid">{row.ai}</p>
                    </div>
                    <div className="px-4 py-4">
                      <p className="font-body text-base 2xl:text-lg leading-relaxed text-ink font-medium">{row.human}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <NeonCard accent={ACCENT} className="appendix-in p-6 md:p-7">
              <div className="flex items-center justify-between gap-4 mb-5">
                <p className="font-type text-xs tracking-[0.24em] uppercase font-bold" style={{ color: ACCENT }}>
                  Cam kết liêm chính
                </p>
                <span className="ink-stamp !text-[9px] !px-2.5 !py-1" style={{ color: ACCENT, borderColor: ACCENT }}>
                  Hard stop
                </span>
              </div>

              <div className="space-y-4">
                {COMMITMENTS.map((item, index) => (
                  <div key={item} className="grid grid-cols-[3rem_1fr] gap-4 items-start">
                    <span className="font-display font-black text-3xl leading-none" style={{ color: ACCENT }}>
                      {index + 1}
                    </span>
                    <p className="font-body text-xl md:text-2xl leading-snug text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </NeonCard>

            <div className="appendix-in grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => snapToId('chapter4')}
                className="font-type text-xs tracking-[0.22em] uppercase px-6 py-3 border-2 transition-opacity hover:opacity-70"
                style={{ borderColor: `${ACCENT}75`, color: ACCENT }}
              >
                Quay lại demo AI
              </button>
              <button
                onClick={() => snapToId('hero')}
                className="font-type text-xs tracking-[0.22em] uppercase px-6 py-3 border-2 transition-opacity hover:opacity-70"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                Xem lại từ đầu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
