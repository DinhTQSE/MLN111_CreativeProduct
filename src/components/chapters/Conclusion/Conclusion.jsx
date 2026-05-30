import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DialecticalLoop from '../../visualizations/DialecticalLoop'
import NeonCard from '../../ui/NeonCard'

gsap.registerPlugin(ScrollTrigger)

const ACCENT = '#6b1212'
const BG     = '#f5ece8'

const LAWS = [
  {
    id: 'I',
    law: 'Quy luật Lực lượng SX — Quan hệ SX',
    principle: 'Quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất. Khi mâu thuẫn gay gắt, tất yếu phải có cách mạng hoặc cải cách.',
    vn: 'Bao Cấp (1975–86): QhSX kế hoạch hóa tập trung mâu thuẫn với LLSX → trì trệ, khủng hoảng kinh tế, chuẩn bị điều kiện cho Đổi Mới.',
  },
  {
    id: 'II',
    law: 'Quy luật Lượng — Chất (Điểm nút)',
    principle: 'Những thay đổi về lượng, khi tích lũy đến một giới hạn nhất định (điểm nút), tất yếu dẫn đến sự thay đổi về chất (bước nhảy).',
    vn: 'Đổi Mới 1986: 11 năm áp lực tích lũy → Đại hội VI là điểm nút → bước nhảy từ kinh tế kế hoạch sang kinh tế thị trường định hướng XHCN.',
  },
  {
    id: 'III',
    law: 'Học thuyết Tha hóa (Entfremdung)',
    principle: 'Con người bị tha hóa khi tách rời khỏi: (1) sản phẩm lao động; (2) quá trình lao động; (3) bản chất loài; (4) người khác.',
    vn: 'Kỷ Số: Tha hóa số — người dùng trở thành dữ liệu thô cho thuật toán, mất kiểm soát "bản sao số" và sự chú ý của chính mình.',
  },
  {
    id: 'IV',
    law: 'Phủ định của phủ định',
    principle: 'Cái mới phủ định cái cũ nhưng kế thừa những yếu tố tích cực; quá trình phát triển theo đường xoáy trôn ốc đi lên.',
    vn: 'AI (2020–nay) phủ định lao động số, nhưng đặt ra câu hỏi triết học mới về "bản chất người" — vòng xoáy biện chứng tiếp tục.',
  },
  {
    id: 'V',
    law: 'Nghịch lý Biện chứng: Giải phóng → Tha hóa',
    principle: 'Mỗi bước giải phóng lực lượng sản xuất đều mang trong nó mầm mống của một dạng tha hóa mới ở trình độ cao hơn — đây là quy luật lịch sử.',
    vn: 'Xuyên suốt 4 thời kỳ VN: Đổi Mới giải phóng → tha hóa hàng hóa; Internet giải phóng → tha hóa số; AI → tha hóa nhận thức.',
  },
]

const AI_USAGE = [
  {
    tool: 'OpenAI GPT-4o',
    purpose: 'Tìm kiếm & tóm tắt báo, phân tích triết học',
    prompt: 'Prompt 3 chiều (ủng hộ / phản bác / Mác-Lênin)',
    aiOutput: 'Tóm tắt báo, phân tích sơ bộ theo framework đã thiết kế',
    humanPart: 'Đối chiếu giáo trình, kết luận cuối, câu hỏi phản tư, xác nhận nguồn',
  },
  {
    tool: 'Claude (Anthropic)',
    purpose: 'Hỗ trợ thiết kế kiến trúc nội dung và code web',
    prompt: 'Hướng dẫn từ CLAUDE.md, yêu cầu cụ thể từng component',
    aiOutput: 'Khung code React, cấu trúc component, animation GSAP',
    humanPart: 'Toàn bộ nội dung triết học, data triết học, logic nghiệp vụ',
  },
  {
    tool: 'React + GSAP + Zustand',
    purpose: 'Build giao diện scroll storytelling',
    prompt: '—',
    aiOutput: 'Không dùng AI cho code sản xuất — nhóm tự viết',
    humanPart: 'Toàn bộ code frontend, thiết kế UX, animation',
  },
]

export default function Conclusion() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0, y: 30, stagger: 0.08, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="conclusion"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-16 py-24"
      style={{ background: BG }}
    >
      {/* Dòng kẻ trang sách */}
      {Array.from({ length: 28 }, (_, i) => (
        <div key={i} className="absolute left-0 right-0 h-px opacity-[0.04]"
             style={{ top: `${(i+1)*40}px`, background: ACCENT }}/>
      ))}

      <div className="max-w-5xl mx-auto relative">

        {/* ── SECTION 1: Outro / Dialectical Loop ── */}
        <div className="animate-in mb-20 pb-16 border-b" style={{ borderColor: `${ACCENT}20` }}>
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-px flex-1 max-w-24 opacity-30" style={{ background: ACCENT }}/>
            <span className="font-type text-[10px] tracking-[0.3em] uppercase opacity-50" style={{ color: ACCENT }}>
              Vòng Lặp Tiếp Tục
            </span>
            <div className="h-px flex-1 max-w-24 opacity-30" style={{ background: ACCENT }}/>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display font-black text-4xl text-ink leading-tight">
                Bốn thời kỳ —
                <br/>
                <span style={{ color: ACCENT }}>Một vòng biện chứng</span>
              </h2>
              <p className="font-body italic text-ink-mid leading-relaxed opacity-80">
                Mỗi mũi tên trong vòng lặp là một quy luật biện chứng của Marx. Vòng lặp không đóng lại — nó tiếp tục xoắn lên cao hơn, phức tạp hơn.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#8b1a1a', label: 'Bao Cấp', sub: 'Điểm nút lượng–chất' },
                  { color: '#8b6000', label: 'Đổi Mới', sub: 'Phủ định biện chứng' },
                  { color: '#0d3d5c', label: 'Kỷ Số',   sub: 'LLSX–QHSX mâu thuẫn' },
                  { color: '#3d1f6b', label: 'Kỷ AI',   sub: 'Vòng xoáy lên cao hơn' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-3 h-3 border-2 rounded-full shrink-0"
                         style={{ borderColor: item.color, background: `${item.color}30` }}/>
                    <span className="font-type text-xs" style={{ color: item.color }}>
                      {item.label}
                    </span>
                    <span className="font-body italic text-xs text-ink-lite opacity-60">
                      — {item.sub}
                    </span>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-2 pl-4 py-1" style={{ borderColor: `${ACCENT}50` }}>
                <p className="font-display font-bold italic text-base text-ink leading-relaxed">
                  "Tha hóa tiếp theo của kỷ nguyên AI sẽ là gì?
                  <span style={{ color: ACCENT }}>
                    {' '}Và ai sẽ xây dựng Kiến trúc thượng tầng để kiểm soát nó?
                  </span>"
                </p>
              </blockquote>
            </div>

            <div className="flex flex-col items-center gap-6">
              <DialecticalLoop />
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-type text-xs tracking-[0.2em] uppercase px-6 py-3 border-2 transition-all duration-200 hover:opacity-70"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                ↺ Xem lại từ đầu
              </button>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: Quy luật Mác-xít ── */}
        <div className="animate-in mb-20">
          <div className="mb-12 pb-8 border-b" style={{ borderColor: `${ACCENT}25` }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${ACCENT}60)` }}/>
              <span className="font-type text-[10px] tracking-[0.3em] uppercase opacity-50" style={{ color: ACCENT }}>
                Tổng kết — Hệ thống hóa
              </span>
              <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${ACCENT}60)` }}/>
            </div>

            <h2 className="font-display font-black text-4xl md:text-5xl text-ink leading-tight mb-5">
              Các quy luật Mác-xít
            </h2>

            <p className="font-body italic text-ink-mid max-w-xl leading-relaxed mb-6 opacity-70">
              Phần kết luận này được soạn thảo hoàn toàn bởi tác giả, không có sự trợ giúp
              sinh thành của AI, nhằm đảm bảo liêm chính học thuật trong phần hỏi đáp.
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 border-2 font-type text-xs tracking-wider"
                 style={{ borderColor: ACCENT, color: ACCENT }}>
              <span>■</span>
              <span>No AI Generation — Human Authored Only</span>
            </div>
          </div>

          {LAWS.map((item, i) => (
            <div key={item.id} className="border-b py-10 grid grid-cols-1 md:grid-cols-[56px_1fr_1fr] gap-6"
                 style={{ borderColor: `${ACCENT}12` }}>
              <div>
                <span className="font-display font-black text-5xl leading-none"
                      style={{ color: ACCENT, opacity: 0.15 }}>{item.id}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-ink mb-3 leading-snug">{item.law}</h3>
                <p className="font-body italic text-sm text-ink-mid leading-relaxed opacity-80">{item.principle}</p>
              </div>
              <div className="md:pl-6 md:border-l" style={{ borderColor: `${ACCENT}18` }}>
                <p className="font-type text-[9px] tracking-widest uppercase opacity-40 mb-2"
                   style={{ color: ACCENT }}>Áp dụng — Việt Nam</p>
                <p className="font-body text-sm text-ink-mid leading-relaxed opacity-75">{item.vn}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 3: Kết luận tổng hợp ── */}
        <div className="animate-in mb-20 p-8 border-2" style={{ borderColor: `${ACCENT}35`, background: `${ACCENT}05` }}>
          <p className="font-type text-[9px] uppercase tracking-widest opacity-40 mb-5" style={{ color: ACCENT }}>
            Kết luận tổng hợp
          </p>
          <p className="font-display font-bold italic text-xl md:text-2xl text-ink leading-relaxed mb-6">
            "Mỗi thời kỳ lịch sử Việt Nam đều xác nhận một nghịch lý biện chứng cốt lõi của Marx:
            <span style={{ color: ACCENT }}>
              {' '}lực lượng sản xuất càng được giải phóng,
              hình thức tha hóa càng tinh vi và khó nhận diện hơn.
            </span>"
          </p>
          <p className="font-body italic text-sm text-ink-mid leading-relaxed opacity-70 max-w-3xl">
            Từ tha hóa lao động cụ thể (tem phiếu, kế hoạch hóa) đến tha hóa trừu tượng
            (thuật toán, dữ liệu, mô hình AI), con người Việt Nam đang bước vào giai đoạn mà
            câu hỏi về "bản chất người" không còn là triết học thuần túy, mà là vấn đề
            chính sách, pháp lý và văn hóa cấp bách.
          </p>
        </div>

        {/* ── SECTION 4: Phụ lục AI Usage ── */}
        <div className="animate-in border-t pt-12 mb-16" style={{ borderColor: `${ACCENT}18` }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-16 opacity-30" style={{ background: ACCENT }}/>
            <span className="font-type text-[10px] tracking-[0.3em] uppercase opacity-50" style={{ color: ACCENT }}>
              Phụ lục — AI Usage &amp; Liêm chính học thuật
            </span>
            <div className="h-px flex-1 max-w-16 opacity-30" style={{ background: ACCENT }}/>
          </div>

          <NeonCard accent={ACCENT} className="p-6 mb-6">
            <p className="font-type text-[9px] uppercase tracking-widest opacity-40 mb-4" style={{ color: ACCENT }}>
              Bảng minh bạch sử dụng AI
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${ACCENT}20` }}>
                    {['Công cụ', 'Mục đích', 'Phần AI output', 'Phần sinh viên biên soạn'].map(h => (
                      <th key={h} className="font-type text-[9px] tracking-wider uppercase opacity-40 text-left pb-2 pr-4"
                          style={{ color: ACCENT }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AI_USAGE.map((row, rowIdx) => (
                    <tr key={rowIdx} style={{ borderBottom: `1px solid ${ACCENT}10`, background: rowIdx%2 === 0 ? 'transparent' : `${ACCENT}04` }}>
                      <td className="font-type text-xs py-3 pr-4" style={{ color: ACCENT }}>{row.tool}</td>
                      <td className="font-body italic text-xs py-3 pr-4 text-ink-mid opacity-75">{row.purpose}</td>
                      <td className="font-body text-xs py-3 pr-4 text-ink-mid opacity-65">{row.aiOutput}</td>
                      <td className="font-body text-xs py-3 text-ink-mid opacity-80">{row.humanPart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </NeonCard>

          <div className="space-y-3">
            <p className="font-type text-[9px] uppercase tracking-widest opacity-40" style={{ color: ACCENT }}>
              Cam kết liêm chính học thuật
            </p>
            {[
              'Không để AI làm thay toàn bộ phân tích triết học — mọi luận điểm đã được đối chiếu với Giáo trình.',
              'Nguồn chính: Giáo trình Triết học Mác-Lênin 2021 (Bộ GD&ĐT), tr.234–464.',
              'Nguồn bổ sung: Nghị quyết 52-NQ/TW (2019), Văn kiện Đại hội XIII, số liệu GSO.',
              'Hard Stop đảm bảo không sử dụng AI trong 20 phút phản biện theo rubric.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-type text-[9px] shrink-0 mt-0.5" style={{ color: ACCENT }}>✓</span>
                <p className="font-body italic text-sm text-ink-mid opacity-70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="animate-in pt-8 border-t flex items-center justify-between"
             style={{ borderColor: `${ACCENT}15` }}>
          <div className="font-type text-xs opacity-25 space-y-1" style={{ color: ACCENT }}>
            <p>Triết học Mác – Lênin // MLN111 — Assignment 2025</p>
            <p>Scrollytelling Web App — React + Vite + GSAP + Zustand</p>
          </div>
          <div className="font-hand text-lg opacity-35" style={{ color: ACCENT }}>
            Finis.
          </div>
        </div>
      </div>
    </section>
  )
}
