/* HARD STATIC STOP — No AI input, no animation, đảm bảo liêm chính học thuật */
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

export default function Conclusion() {
  return (
    <section
      id="conclusion"
      className="relative min-h-screen px-6 md:px-16 py-24"
      style={{ background: BG }}
    >
      {/* Dòng kẻ trang sách */}
      {Array.from({ length: 28 }, (_, i) => (
        <div key={i} className="absolute left-0 right-0 h-px opacity-[0.04]"
             style={{ top: `${(i+1)*40}px`, background: ACCENT }}/>
      ))}

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 pb-10 border-b" style={{ borderColor: `${ACCENT}30` }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${ACCENT}60)` }}/>
            <span className="font-type text-[10px] tracking-[0.3em] uppercase opacity-50"
                  style={{ color: ACCENT }}>
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

        {/* Bảng quy luật */}
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

        {/* Kết luận tổng hợp */}
        <div className="mt-16 p-8 border-2" style={{ borderColor: `${ACCENT}35`, background: `${ACCENT}05` }}>
          <p className="font-type text-[9px] uppercase tracking-widest opacity-40 mb-5"
             style={{ color: ACCENT }}>Kết luận tổng hợp</p>
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

        {/* Footer */}
        <div className="mt-14 pt-8 border-t flex items-center justify-between"
             style={{ borderColor: `${ACCENT}15` }}>
          <div className="font-type text-xs opacity-25 space-y-1" style={{ color: ACCENT }}>
            <p>Triết học Mác – Lênin // Assignment 2025</p>
            <p>Scrollytelling Web Application — React + Vite + GSAP</p>
          </div>
          <div className="font-hand text-lg opacity-35" style={{ color: ACCENT }}>
            Finis.
          </div>
        </div>
      </div>
    </section>
  )
}
