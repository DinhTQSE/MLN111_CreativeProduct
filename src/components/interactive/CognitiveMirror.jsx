import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useMirrorStore } from '../../stores/mirrorStore'
import { analyzeViewpoint } from '../../services/openaiService'
import { VIEWPOINTS } from '../../data/viewpoints'

/* ─── Màu accent cho selection interface (trên parchment) ─── */
const SEL_ACCENT       = '#0891b2'   // cyan — nút, viền, stamp
const SEL_ACCENT_DARK  = '#0c4a6e'   // dark cyan — text chính trên parchment

/* ─── Màu dark-terminal cho result area ─── */
const T = {
  bg:      '#05101a',   // wrapper ngoài
  panel:   '#081828',   // header panel
  border:  '#1a5f8a',   // viền chung

  text:     '#dff0fb',  // body text (blue-tinted white — dễ đọc trên nền tối)
  textSub:  '#7ecef5',  // secondary text
  textMuted:'#4a9dbf',  // muted

  /* Cột ủng hộ — xanh lá */
  green:       '#34d399',  // label
  greenBorder: '#065f46',  // viền card
  greenBg:     '#052e1a',  // nền card
  greenText:   '#a7f3d0',  // body trong card

  /* Cột phản bác — đỏ */
  red:        '#f87171',   // label
  redBorder:  '#7f1d1d',   // viền card
  redBg:      '#200808',   // nền card
  redText:    '#fecaca',   // body trong card
}

/* ─── Màu theo hiện tượng cho cột triết học ─── */
const PHEN = {
  THA_HOA: {
    label:    'THA HÓA',
    icon:     '⛓',
    bg:       '#180820',
    border:   '#c026d3',
    glow:     'rgba(192,38,211,0.18)',
    tag:      '#e879f9',
    tagBg:    'rgba(192,38,211,0.15)',
    text:     '#f5d0fe',
    accent:   '#d946ef',
  },
  GIAI_PHONG: {
    label:    'GIẢI PHÓNG',
    icon:     '✊',
    bg:       '#061a0c',
    border:   '#16a34a',
    glow:     'rgba(22,163,74,0.15)',
    tag:      '#4ade80',
    tagBg:    'rgba(22,163,74,0.15)',
    text:     '#bbf7d0',
    accent:   '#22c55e',
  },
  BOTH: {
    label:    'BIỆN CHỨNG HAI CHIỀU',
    icon:     '⟳',
    bg:       '#0d0a1e',
    border:   '#7c3aed',
    glow:     'rgba(124,58,237,0.18)',
    tag:      '#a78bfa',
    tagBg:    'rgba(124,58,237,0.15)',
    text:     '#ede9fe',
    accent:   '#8b5cf6',
  },
}

function getPhen(phenomenon) {
  return PHEN[phenomenon] || PHEN.BOTH
}

/* ─── Context map ─── */
const CONTEXT_MAP = {
  chapter1: 'Thời kỳ bao cấp Việt Nam 1975–1986, kinh tế kế hoạch hóa tập trung',
  chapter2: 'Đổi Mới và mở cửa Việt Nam 1986–2000, chuyển đổi sang kinh tế thị trường',
  chapter3: 'Kỷ nguyên Internet và toàn cầu hóa Việt Nam 2000–2020',
  chapter4: 'Kỷ nguyên AI và tự động hóa nhận thức từ 2020 đến nay',
}

/* ═══════════════════════════════════════════════════
   Loading animation — 3 tầng nhận thức
═══════════════════════════════════════════════════ */
function CognitiveLoader({ step }) {
  const stages = [
    { label: 'Tầng 1 — Xác định hiện tượng triết học',  desc: 'Tha hóa hay Giải phóng?' },
    { label: 'Tầng 2 — Phân tích mâu thuẫn LLSX–QHSX', desc: 'Lực lượng & Quan hệ sản xuất' },
    { label: 'Tầng 3 — Thu thập bằng chứng thực tiễn',  desc: 'Báo chí & nghiên cứu VN' },
  ]
  return (
    <div className="py-10 px-6 space-y-7">
      <p
        className="font-type text-[10px] tracking-[0.3em] uppercase text-center"
        style={{ color: SEL_ACCENT, opacity: 0.65 }}
      >
        // AI đang phân tích theo khung Mác-Lênin //
      </p>

      <div className="flex flex-col gap-5 max-w-md mx-auto">
        {stages.map((s, i) => {
          const done    = i < step
          const current = i === step
          const pending = i > step
          return (
            <div key={i} className="flex items-start gap-4">
              {/* Icon box */}
              <div
                className="w-9 h-9 border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500"
                style={{
                  borderColor: pending ? '#c8b8a040' : SEL_ACCENT,
                  background:  done    ? `${SEL_ACCENT}22`
                             : current ? `${SEL_ACCENT}12`
                             : 'transparent',
                }}
              >
                {done && (
                  <span className="font-type text-xs font-bold" style={{ color: SEL_ACCENT }}>✓</span>
                )}
                {current && <PulseDots color={SEL_ACCENT} />}
                {pending && (
                  <span className="font-type text-[9px]" style={{ color: '#c8b8a055' }}>{i + 1}</span>
                )}
              </div>
              {/* Text */}
              <div>
                <p
                  className="font-type text-xs font-bold leading-tight transition-colors duration-300"
                  style={{ color: pending ? '#6b7280' : SEL_ACCENT }}
                >
                  {s.label}
                </p>
                <p
                  className="font-body text-[11px] mt-0.5"
                  style={{ color: pending ? '#b8a898' : '#6b7280' }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <p
        className="font-body italic text-sm text-center"
        style={{ color: T.textMuted, opacity: 0.85 }}
      >
        "Nhận thức đúng phải xuất phát từ thực tiễn khách quan" — V.I. Lênin
      </p>
    </div>
  )
}

function PulseDots({ color }) {
  return (
    <span className="flex gap-0.5">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: color, animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </span>
  )
}

/* ═══════════════════════════════════════════════════
   Evidence card — green / red theme
═══════════════════════════════════════════════════ */
function EvidenceCard({ item, type }) {
  const isSupport  = type === 'support'
  const label      = isSupport ? T.green       : T.red
  const border     = isSupport ? T.greenBorder : T.redBorder
  const bg         = isSupport ? T.greenBg     : T.redBg
  const bodyText   = isSupport ? T.greenText   : T.redText
  const hasLink    = item.url && item.url !== '#'

  return (
    <div
      className="rounded p-4 space-y-3"
      style={{
        background:   bg,
        border:       `1px solid ${border}`,
        borderLeft:   `4px solid ${label}`,
        boxShadow:    `0 2px 10px rgba(0,0,0,0.45)`,
      }}
    >
      <p className="font-body text-sm leading-relaxed" style={{ color: bodyText }}>
        {item.summary}
      </p>
      <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: label }} />
          <span
            className="font-type text-[10px] tracking-widest uppercase font-bold"
            style={{ color: label }}
          >
            {item.source}
          </span>
          <span className="font-type text-[10px] font-semibold" style={{ color: T.textSub }}>
            · {item.year}
          </span>
        </div>
        {hasLink && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-type text-[10px] tracking-wider underline underline-offset-2 transition-opacity hover:opacity-60 flex items-center gap-1"
            style={{ color: label }}
          >
            ↗ đọc bài gốc
          </a>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   Philosophical panel — dynamic purple/green/fuchsia
═══════════════════════════════════════════════════ */
function PhiloPanel({ analysis }) {
  const p = getPhen(analysis.phenomenon)

  const dims = Array.isArray(analysis.alienationDimensions)
    ? analysis.alienationDimensions
    : []

  return (
    <div className="space-y-4">

      {/* ── Phenomenon badge — large & prominent ── */}
      <div
        className="flex items-center gap-3 px-4 py-3.5 rounded"
        style={{
          background:  p.bg,
          border:      `2px solid ${p.border}`,
          boxShadow:   `0 0 20px ${p.glow}`,
        }}
      >
        <span className="text-2xl leading-none">{p.icon}</span>
        <div>
          <p
            className="font-type text-[9px] tracking-widest uppercase mb-0.5"
            style={{ color: p.accent, opacity: 0.75 }}
          >
            Hiện tượng triết học
          </p>
          <p className="font-display font-black text-lg leading-tight" style={{ color: p.tag }}>
            {p.label}
          </p>
        </div>
      </div>

      {/* ── Alienation dimensions — chiều tha hóa ── */}
      {dims.length > 0 && (
        <div className="space-y-2">
          <p
            className="font-type text-[9px] tracking-widest uppercase font-bold"
            style={{ color: p.accent }}
          >
            Chiều tha hóa (Marx)
          </p>
          <div className="flex flex-wrap gap-1.5">
            {dims.map((dim, i) => (
              <span
                key={i}
                className="font-type text-[10px] px-2.5 py-1 rounded-sm font-semibold"
                style={{
                  background: p.tagBg,
                  border:     `1px solid ${p.border}60`,
                  color:      p.tag,
                }}
              >
                {dim}
              </span>
            ))}
          </div>
          {analysis.alienationExplanation && (
            <p
              className="font-body text-[12px] leading-relaxed mt-2"
              style={{ color: T.text }}
            >
              {analysis.alienationExplanation}
            </p>
          )}
        </div>
      )}

      {/* ── LLSX–QHSX conflict ── */}
      {analysis.llsxConflict && (
        <div
          className="px-4 py-3 rounded"
          style={{
            background: `${p.border}12`,
            borderLeft: `4px solid ${p.border}`,
          }}
        >
          <p
            className="font-type text-[9px] tracking-widest uppercase font-bold mb-1.5"
            style={{ color: p.accent }}
          >
            Mâu thuẫn LLSX — QHSX
          </p>
          <p className="font-body text-[12px] leading-relaxed" style={{ color: p.text }}>
            {analysis.llsxConflict}
          </p>
        </div>
      )}

      {/* ── Marxist concept ── */}
      <div className="space-y-0.5">
        <p
          className="font-type text-[9px] tracking-widest uppercase font-bold"
          style={{ color: p.accent, opacity: 0.8 }}
        >
          Khái niệm Mác-Lênin
        </p>
        <p className="font-display font-bold text-sm leading-snug" style={{ color: T.text }}>
          {analysis.marxistConcept}
        </p>
        <p className="font-type text-[10px]" style={{ color: T.textMuted }}>
          {analysis.textbookReference}
        </p>
      </div>

      {/* ── Dialectical law ── */}
      <div className="space-y-0.5">
        <p
          className="font-type text-[9px] tracking-widest uppercase font-bold"
          style={{ color: p.accent, opacity: 0.8 }}
        >
          Quy luật biện chứng
        </p>
        <p className="font-body italic text-sm font-semibold" style={{ color: T.textSub }}>
          {analysis.dialecticalLaw}
        </p>
      </div>

      {/* ── Main analysis ── */}
      <div
        className="px-4 py-4 rounded space-y-2"
        style={{
          borderLeft: `4px solid ${p.border}`,
          background: `${p.border}08`,
        }}
      >
        <p
          className="font-type text-[9px] tracking-widest uppercase font-bold"
          style={{ color: p.accent }}
        >
          Phân tích sâu
        </p>
        <p className="font-body text-[13px] leading-relaxed" style={{ color: T.text }}>
          {analysis.analysis}
        </p>
      </div>

      {/* ── Dialectical conclusion ── */}
      <div
        className="rounded p-4"
        style={{
          background: `${p.border}18`,
          border:     `2px solid ${p.border}`,
        }}
      >
        <p
          className="font-type text-[9px] tracking-widest uppercase font-bold mb-2"
          style={{ color: p.accent }}
        >
          Kết luận biện chứng
        </p>
        <p className="font-body italic text-[13px] leading-relaxed" style={{ color: p.text }}>
          {analysis.conclusion}
        </p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   Full result layout
═══════════════════════════════════════════════════ */
function AnalysisResult({ result, viewpointText, isFallback, onReset }) {
  const resultRef = useRef(null)

  useEffect(() => {
    if (resultRef.current) {
      gsap.from(resultRef.current.querySelectorAll('.reveal-col'), {
        opacity: 0, y: 28, stagger: 0.18, duration: 0.75, ease: 'power2.out',
      })
    }
  }, [])

  if (result.error) {
    return (
      <div className="py-8 px-6 text-center space-y-4">
        <p
          className="font-type text-[10px] tracking-widest uppercase"
          style={{ color: SEL_ACCENT, opacity: 0.5 }}
        >
          // Khoảng trống nhận thức //
        </p>
        <p className="font-body italic text-sm text-ink-mid leading-relaxed max-w-md mx-auto">
          {result.error}
        </p>
        <button
          onClick={onReset}
          className="font-type text-xs tracking-widest uppercase px-4 py-2 border transition-opacity hover:opacity-70"
          style={{ borderColor: SEL_ACCENT, color: SEL_ACCENT }}
        >
          ← Chọn lại
        </button>
      </div>
    )
  }

  const philo = result.philosophicalAnalysis
  const phen  = philo ? getPhen(philo.phenomenon) : PHEN.BOTH

  return (
    <div
      ref={resultRef}
      className="rounded overflow-hidden"
      style={{
        background: T.bg,
        border:     `1px solid ${T.border}50`,
        boxShadow:  `0 0 40px rgba(0,0,0,0.5), 0 0 16px ${T.border}20`,
      }}
    >
      {/* ── Header ── */}
      <div
        className="px-6 py-4 border-b flex items-start justify-between gap-4"
        style={{ borderColor: T.border + '40', background: T.panel }}
      >
        <div className="space-y-1 flex-1 min-w-0">
          <p
            className="font-type text-[9px] tracking-widest uppercase font-bold"
            style={{ color: SEL_ACCENT }}
          >
            Quan điểm đang phân tích
          </p>
          <p
            className="font-display font-bold italic text-base leading-snug"
            style={{ color: T.text }}
          >
            {viewpointText}
          </p>
          {isFallback && (
            <p className="font-type text-[10px] mt-1 font-semibold" style={{ color: '#fbbf24' }}>
              ★ Phân tích từ cơ sở dữ liệu chuẩn bị sẵn — chế độ offline
            </p>
          )}
        </div>
        <button
          onClick={onReset}
          className="shrink-0 font-type text-[10px] tracking-wider uppercase px-3 py-1.5 border-2 transition-opacity hover:opacity-75 whitespace-nowrap rounded-sm"
          style={{
            borderColor: SEL_ACCENT,
            color:       T.text,
            background:  `${SEL_ACCENT}25`,
          }}
        >
          ↺ Chọn lại
        </button>
      </div>

      {/* ── 3 columns ── */}
      <div className="p-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.15fr] gap-5">

          {/* Column 1: Ủng hộ */}
          <div className="reveal-col space-y-3">
            <div
              className="flex items-center gap-2 pb-2.5 mb-1"
              style={{ borderBottom: `3px solid ${T.greenBorder}` }}
            >
              <span
                className="font-type text-[10px] px-2 py-0.5 rounded-sm font-bold"
                style={{ background: `${T.greenBorder}40`, color: T.green }}
              >
                ✅ LUỒNG ỦNG HỘ
              </span>
            </div>
            {result.supportingEvidence?.map((ev, i) => (
              <EvidenceCard key={i} item={ev} type="support" />
            ))}
          </div>

          {/* Column 2: Phản bác */}
          <div className="reveal-col space-y-3">
            <div
              className="flex items-center gap-2 pb-2.5 mb-1"
              style={{ borderBottom: `3px solid ${T.redBorder}` }}
            >
              <span
                className="font-type text-[10px] px-2 py-0.5 rounded-sm font-bold"
                style={{ background: `${T.redBorder}40`, color: T.red }}
              >
                ❌ LUỒNG PHẢN BÁC
              </span>
            </div>
            {result.refutingEvidence?.map((ev, i) => (
              <EvidenceCard key={i} item={ev} type="refute" />
            ))}
          </div>

          {/* Column 3: Triết học — highlighted */}
          <div
            className="reveal-col rounded p-4 space-y-3"
            style={{
              background:  `${phen.border}10`,
              border:      `2px solid ${phen.border}55`,
              boxShadow:   `0 0 28px ${phen.glow}`,
            }}
          >
            <div
              className="flex items-center gap-2 pb-2.5 mb-1"
              style={{ borderBottom: `3px solid ${phen.border}` }}
            >
              <span
                className="font-type text-[10px] px-2 py-0.5 rounded-sm font-bold"
                style={{ background: `${phen.border}30`, color: phen.tag }}
              >
                🔭 GÓC NHÌN TRIẾT HỌC
              </span>
            </div>
            {philo
              ? <PhiloPanel analysis={philo} />
              : (
                <p className="font-body italic text-sm" style={{ color: T.textMuted }}>
                  Không có dữ liệu phân tích triết học.
                </p>
              )
            }
          </div>
        </div>

        {/* ── Reflection question ── */}
        {result.reflectionQuestion && (
          <div
            className="mt-6 rounded p-5"
            style={{
              background:  '#0d0320',
              border:      `2px solid #7c3aed`,
              boxShadow:   '0 0 32px rgba(124,58,237,0.15)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg">❓</span>
              <p
                className="font-type text-[10px] tracking-widest uppercase font-bold"
                style={{ color: '#8b5cf6' }}
              >
                Câu hỏi phản tư — không có câu trả lời đúng/sai
              </p>
            </div>
            <blockquote>
              <p
                className="font-display font-bold italic text-xl leading-relaxed"
                style={{ color: '#ede9fe' }}
              >
                "{result.reflectionQuestion}"
              </p>
            </blockquote>
            <p
              className="font-body italic text-[11px] mt-4"
              style={{ color: '#7c3aed', opacity: 0.8 }}
            >
              Đây là thực hành lý luận nhận thức biện chứng: nhận thức bắt đầu từ sự tự tra vấn bản thân.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   Main CognitiveMirror component
═══════════════════════════════════════════════════ */
export default function CognitiveMirror({ chapter = 'chapter4' }) {
  const {
    selectedViewpoint,
    customViewpoint,
    analysisResult,
    isLoading,
    isLocked,
    isFallback,
    selectViewpoint,
    setCustomViewpoint,
    startAnalysis,
    setResult,
    setError,
    resetAnalysis,
    getActiveText,
  } = useMirrorStore()

  const [loaderStep, setLoaderStep] = useState(0)
  const [customMode, setCustomMode] = useState(false)
  const viewpoints = VIEWPOINTS[chapter] || VIEWPOINTS.chapter4

  const handleAnalyze = async () => {
    const text = getActiveText()
    if (!text) return

    startAnalysis()
    setLoaderStep(0)

    const t1 = setTimeout(() => setLoaderStep(1), 1000)
    const t2 = setTimeout(() => setLoaderStep(2), 2200)

    const viewpointId = selectedViewpoint?.id || null
    const context     = CONTEXT_MAP[chapter] || CONTEXT_MAP.chapter4

    const res = await analyzeViewpoint(text, context, viewpointId)

    clearTimeout(t1)
    clearTimeout(t2)
    setLoaderStep(2)

    if (res.ok) {
      setResult(res.data, res.isFallback || false)
    } else {
      setError(res.error || 'Không thể phân tích. Vui lòng thử lại.')
    }
  }

  const handleReset = () => {
    resetAnalysis()
    setCustomMode(false)
  }

  if (isLocked) {
    return (
      <div className="py-10 text-center space-y-4">
        <p
          className="font-type text-sm tracking-widest uppercase"
          style={{ color: SEL_ACCENT, opacity: 0.5 }}
        >
          🔒 AI đã hoàn thành vai trò hỗ trợ
        </p>
        <p className="font-body italic text-sm text-ink-mid max-w-sm mx-auto opacity-70">
          "Phần nhận thức tiếp theo thuộc về con người."
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* ── Title ── */}
      <div className="text-center space-y-2">
        <span
          className="ink-stamp block mb-4"
          style={{ color: SEL_ACCENT, borderColor: SEL_ACCENT }}
        >
          Gương Nhận Thức — AI Feature
        </span>
        <h3 className="font-display font-bold text-2xl" style={{ color: '#1c0e06' }}>
          Phân tích đa chiều theo lăng kính Mác-Lênin
        </h3>
        <p className="font-body italic text-sm max-w-lg mx-auto" style={{ color: '#5a4030' }}>
          Chọn một quan điểm để AI thu thập bằng chứng thực tiễn và phân tích hiện tượng
          tha hóa / giải phóng theo 4 chiều của Marx
        </p>
      </div>

      {/* ── Selection interface ── */}
      {!analysisResult && !isLoading && (
        <div className="space-y-5">
          <div>
            <p
              className="font-type text-[10px] tracking-widest uppercase font-semibold mb-3"
              style={{ color: SEL_ACCENT_DARK }}
            >
              Chọn quan điểm để phân tích
            </p>
            <div className="grid grid-cols-1 gap-2">
              {viewpoints.map((vp) => {
                const isSelected = selectedViewpoint?.id === vp.id
                return (
                  <button
                    key={vp.id}
                    onClick={() => { selectViewpoint(vp); setCustomMode(false) }}
                    className="w-full text-left px-4 py-3.5 border-2 transition-all duration-200 rounded-sm"
                    style={{
                      borderColor: isSelected ? SEL_ACCENT        : `${SEL_ACCENT}35`,
                      background:  isSelected ? `${SEL_ACCENT}18` : `${SEL_ACCENT}05`,
                      color:       isSelected ? SEL_ACCENT_DARK   : '#2a1a0e',
                    }}
                  >
                    <span className="font-body text-sm italic leading-relaxed">
                      {vp.text}
                    </span>
                    {isSelected && (
                      <span
                        className="font-type text-[10px] block mt-1.5 font-semibold"
                        style={{ color: SEL_ACCENT }}
                      >
                        ✓ Đã chọn — sẵn sàng phân tích
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Custom input */}
          <div>
            <button
              onClick={() => { setCustomMode(!customMode); resetAnalysis() }}
              className="font-type text-xs tracking-wider hover:opacity-75 transition-opacity font-semibold"
              style={{ color: SEL_ACCENT }}
            >
              {customMode ? '↑ Thu lại' : '+ Nhập quan điểm của bạn'}
            </button>
            {customMode && (
              <div className="mt-3 space-y-2">
                <textarea
                  value={customViewpoint}
                  onChange={e => setCustomViewpoint(e.target.value)}
                  placeholder='Ví dụ: "AI sẽ tạo ra bất bình đẳng kinh tế sâu sắc hơn..."'
                  rows={3}
                  className="w-full border-2 px-4 py-3 font-body italic text-sm resize-none outline-none transition-all duration-200 rounded-sm"
                  style={{
                    borderColor: `${SEL_ACCENT}45`,
                    background:  `${SEL_ACCENT}06`,
                    color:       '#2a1a0e',
                  }}
                  maxLength={200}
                />
                <p className="font-type text-[10px]" style={{ color: '#7a5a3a' }}>
                  * Kết quả không đảm bảo nếu chủ đề quá hẹp hoặc không liên quan đến thực tiễn Việt Nam
                </p>
              </div>
            )}
          </div>

          {/* Analyze button */}
          {(selectedViewpoint || customViewpoint.trim().length > 10) && (
            <button
              onClick={handleAnalyze}
              className="w-full py-4 font-type text-sm tracking-[0.2em] uppercase border-2 transition-all duration-200 hover:opacity-90 font-bold rounded-sm"
              style={{
                borderColor: SEL_ACCENT,
                color:       '#fff8ec',
                background:  SEL_ACCENT,
              }}
            >
              🔍 Phân tích theo lăng kính Mác-Lênin →
            </button>
          )}
        </div>
      )}

      {/* Loading */}
      {isLoading && <CognitiveLoader step={loaderStep} />}

      {/* Result */}
      {analysisResult && !isLoading && (
        <AnalysisResult
          result={analysisResult}
          viewpointText={getActiveText()}
          isFallback={isFallback}
          onReset={handleReset}
        />
      )}
    </div>
  )
}
