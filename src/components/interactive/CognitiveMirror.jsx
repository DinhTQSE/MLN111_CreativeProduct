import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useMirrorStore } from '../../stores/mirrorStore'
import { analyzeViewpoint } from '../../services/openaiService'
import { VIEWPOINTS } from '../../data/viewpoints'

const ACCENT      = '#0891b2'
const ACCENT_TEXT = '#083344'
const CONTEXT_MAP = {
  chapter1: 'Thời kỳ bao cấp Việt Nam 1975–1986, kinh tế kế hoạch hóa tập trung',
  chapter2: 'Đổi Mới và mở cửa Việt Nam 1986–2000, chuyển đổi sang kinh tế thị trường',
  chapter3: 'Kỷ nguyên Internet và toàn cầu hóa Việt Nam 2000–2020',
  chapter4: 'Kỷ nguyên AI và tự động hóa nhận thức từ 2020 đến nay',
}

/*
 * Dark-terminal color palette — dùng cho toàn bộ khu vực kết quả AI
 * Nền tối → chữ sáng, tương phản cao, không bị nhòe trên parchment
 */
const T = {
  bg:           '#020f14',   // nền wrapper chính
  panel:        '#041a24',   // nền panel nội dung
  card:         '#071e2b',   // nền evidence card
  stripe:       '#031620',   // stripe xen kẽ

  border:       '#0891b2',   // viền cyan chủ đạo
  borderFaint:  '#0891b228', // viền mờ

  text:         '#f0f9ff',   // chữ chính (near-white, hơi xanh)
  textSub:      '#bae6fd',   // chữ phụ
  textMuted:    '#7dd3fc',   // chữ nhạt
  textCaption:  '#38bdf8',   // caption

  cyan:         '#67e8f9',   // label cyan sáng
  cyanMid:      '#22d3ee',   // accent cyan
  cyanDim:      '#0891b2',   // border cyan

  green:        '#4ade80',   // ủng hộ — chữ
  greenBorder:  '#22c55e',   // ủng hộ — viền
  greenBg:      '#052e16',   // ủng hộ — nền card

  red:          '#f87171',   // phản bác — chữ
  redBorder:    '#ef4444',   // phản bác — viền
  redBg:        '#1c0505',   // phản bác — nền card
}

/* ─── Loading animation — 3 cognitive filters ─── */
function CognitiveLoader({ step }) {
  const filters = [
    { label: 'Thu thập thực tiễn...', desc: 'Tìm kiếm dẫn chứng báo chí' },
    { label: 'Phân tích đa chiều...',  desc: 'Ủng hộ & phản bác'         },
    { label: 'Đối chiếu lý luận...',   desc: 'Lăng kính Mác-Lênin'       },
  ]
  return (
    <div className="py-12 px-6 text-center space-y-8">
      <p className="font-type text-xs tracking-widest uppercase" style={{ color: ACCENT, opacity: 0.7 }}>
        // Đang phân tích //
      </p>
      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        {filters.map((f, i) => {
          const active  = i <= step
          const current = i === step
          return (
            <div key={i} className="flex items-center gap-4">
              <div
                className="w-8 h-8 border flex items-center justify-center shrink-0 transition-all duration-500"
                style={{
                  borderColor: active ? ACCENT : `${ACCENT}55`,
                  background:  active ? `${ACCENT}20` : 'transparent',
                }}
              >
                {active && !current
                  ? <span className="text-xs font-bold" style={{ color: ACCENT }}>✓</span>
                  : current
                  ? <LoadingDots color={ACCENT} />
                  : <span className="font-type text-[9px]" style={{ color: ACCENT, opacity: 0.45 }}>{i + 1}</span>
                }
              </div>
              <div className="text-left">
                <p className="font-type text-xs font-semibold" style={{ color: active ? ACCENT_TEXT : '#6b5040' }}>
                  {f.label}
                </p>
                <p className="font-body text-[11px]" style={{ color: '#6b5040' }}>{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
      <p className="font-body italic text-sm" style={{ color: '#5a4030', opacity: 0.65 }}>
        "Nhận thức bắt đầu từ thực tiễn" — V.I. Lênin
      </p>
    </div>
  )
}

function LoadingDots({ color }) {
  return (
    <span className="flex gap-0.5">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1 h-1 rounded-full animate-pulse"
          style={{ background: color, animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </span>
  )
}

/* ─── Evidence card — dark terminal ─── */
function EvidenceCard({ item, type }) {
  const isSupport   = type === 'support'
  const borderColor = isSupport ? T.greenBorder : T.redBorder
  const textColor   = isSupport ? T.green        : T.red
  const bgColor     = isSupport ? T.greenBg      : T.redBg
  const hasLink     = item.url && item.url !== '#'

  return (
    <div
      className="rounded-sm p-4 space-y-3"
      style={{
        background:  bgColor,
        border:      `1px solid ${borderColor}30`,
        borderLeft:  `4px solid ${borderColor}`,
        boxShadow:   '0 2px 8px rgba(0,0,0,0.50)',
      }}
    >
      <p className="font-body text-sm leading-relaxed" style={{ color: T.text, fontWeight: 500 }}>
        {item.summary}
      </p>
      <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: borderColor }} />
          <span
            className="font-type text-[10px] tracking-widest uppercase font-bold"
            style={{ color: textColor }}
          >
            {item.source}
          </span>
          <span className="font-type text-[10px] font-semibold" style={{ color: T.textMuted }}>
            · {item.year}
          </span>
        </div>
        {hasLink && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-type text-[10px] tracking-wider underline underline-offset-2 hover:opacity-70 transition-opacity flex items-center gap-1"
            style={{ color: textColor }}
            title="Mở bài báo gốc"
          >
            ↗ đọc bài gốc
          </a>
        )}
      </div>
    </div>
  )
}

/* ─── Philosophical analysis panel — dark terminal ─── */
function PhiloPanel({ analysis }) {
  const phenMap = {
    THA_HOA:    { label: 'THA HÓA',             bg: '#1f0505', border: '#dc2626', text: '#fca5a5' },
    GIAI_PHONG: { label: 'GIẢI PHÓNG',          bg: '#052e16', border: '#16a34a', text: '#86efac' },
    BOTH:       { label: 'BIỆN CHỨNG HAI CHIỀU', bg: '#1f1505', border: '#d97706', text: '#fcd34d' },
  }
  const phen = phenMap[analysis.phenomenon] || phenMap.BOTH

  return (
    <div className="space-y-5">
      {/* Phenomenon badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm"
        style={{
          background:  phen.bg,
          border:      `2px solid ${phen.border}`,
        }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: phen.border }} />
        <span
          className="font-type text-[10px] tracking-widest uppercase font-bold"
          style={{ color: phen.text }}
        >
          {phen.label}
        </span>
      </div>

      {/* Marxist concept */}
      <div className="space-y-1">
        <p
          className="font-type text-[10px] tracking-widest uppercase font-bold"
          style={{ color: T.cyan }}
        >
          Khái niệm Mác-Lênin
        </p>
        <p className="font-display font-bold text-base" style={{ color: T.text }}>
          {analysis.marxistConcept}
        </p>
        <p className="font-type text-[10px] font-semibold" style={{ color: T.textMuted }}>
          {analysis.textbookReference}
        </p>
      </div>

      {/* Dialectical law */}
      <div className="space-y-1">
        <p
          className="font-type text-[10px] tracking-widest uppercase font-bold"
          style={{ color: T.cyan }}
        >
          Quy luật biện chứng
        </p>
        <p className="font-body italic text-sm font-semibold" style={{ color: T.textSub }}>
          {analysis.dialecticalLaw}
        </p>
      </div>

      {/* Main analysis */}
      <div
        className="pl-4 py-3 rounded-sm space-y-1"
        style={{
          borderLeft: `4px solid ${T.cyanDim}`,
          background: T.stripe,
        }}
      >
        <p
          className="font-type text-[9px] tracking-widest uppercase font-bold mb-2"
          style={{ color: T.cyan }}
        >
          Phân tích
        </p>
        <p className="font-body text-sm leading-relaxed" style={{ color: T.text }}>
          {analysis.analysis}
        </p>
      </div>

      {/* Dialectical conclusion */}
      <div
        className="rounded-sm p-3 space-y-1"
        style={{
          background: T.panel,
          border:     `2px solid ${T.cyanDim}`,
        }}
      >
        <p
          className="font-type text-[10px] tracking-widest uppercase font-bold"
          style={{ color: T.cyan }}
        >
          Kết luận biện chứng
        </p>
        <p className="font-body italic text-sm leading-relaxed" style={{ color: T.textSub }}>
          {analysis.conclusion}
        </p>
      </div>
    </div>
  )
}

/* ─── Full result layout ─── */
function AnalysisResult({ result, viewpointText, isFallback, onReset }) {
  const resultRef = useRef(null)

  useEffect(() => {
    if (resultRef.current) {
      gsap.from(resultRef.current.querySelectorAll('.reveal-col'), {
        opacity: 0, y: 24, stagger: 0.15, duration: 0.7, ease: 'power2.out',
      })
    }
  }, [])

  if (result.error) {
    return (
      <div className="py-8 px-6 text-center space-y-4">
        <p className="font-type text-xs tracking-widest uppercase opacity-40" style={{ color: ACCENT }}>
          // Khoảng trống nhận thức //
        </p>
        <p className="font-body italic text-sm text-ink-mid leading-relaxed max-w-md mx-auto">
          {result.error}
        </p>
        <button
          onClick={onReset}
          className="font-type text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 hover:opacity-70"
          style={{ borderColor: ACCENT, color: ACCENT }}
        >
          ← Chọn lại
        </button>
      </div>
    )
  }

  return (
    /*
     * Dark-terminal wrapper — toàn bộ kết quả AI nằm trên nền tối
     * để tránh xung đột màu giữa chữ sáng và parchment
     */
    <div
      ref={resultRef}
      className="rounded-sm overflow-hidden"
      style={{
        background: T.bg,
        border:     `1px solid ${T.border}40`,
        boxShadow:  `0 0 32px ${T.border}18, 0 4px 16px rgba(0,0,0,0.50)`,
      }}
    >
      {/* ── Header ── */}
      <div
        className="px-6 py-4 border-b flex items-start justify-between gap-4"
        style={{ borderColor: T.border + '35', background: T.panel }}
      >
        <div className="space-y-1">
          <p
            className="font-type text-[10px] tracking-widest uppercase font-bold"
            style={{ color: T.cyan }}
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
            <p className="font-type text-[10px] mt-1 font-semibold" style={{ color: '#fcd34d' }}>
              * Phân tích từ cơ sở dữ liệu chuẩn bị sẵn — mode offline
            </p>
          )}
        </div>
        <button
          onClick={onReset}
          title="Phân tích lại"
          className="shrink-0 font-type text-[10px] tracking-wider uppercase px-3 py-1.5 border-2 transition-all duration-200 hover:opacity-80 whitespace-nowrap"
          style={{ borderColor: T.cyanDim, color: T.text, background: T.cyanDim + '30' }}
        >
          ↺ Chọn lại
        </button>
      </div>

      {/* ── 3 columns ── */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Column 1: Ủng hộ */}
          <div className="reveal-col space-y-3">
            <div
              className="flex items-center gap-2 pb-2.5 border-b-4"
              style={{ borderColor: T.greenBorder }}
            >
              <span className="text-sm">✅</span>
              <span
                className="font-type text-[11px] tracking-widest uppercase font-bold"
                style={{ color: T.green }}
              >
                Luồng ủng hộ
              </span>
            </div>
            {result.supportingEvidence?.map((ev, i) => (
              <EvidenceCard key={i} item={ev} type="support" />
            ))}
          </div>

          {/* Column 2: Phản bác */}
          <div className="reveal-col space-y-3">
            <div
              className="flex items-center gap-2 pb-2.5 border-b-4"
              style={{ borderColor: T.redBorder }}
            >
              <span className="text-sm">❌</span>
              <span
                className="font-type text-[11px] tracking-widest uppercase font-bold"
                style={{ color: T.red }}
              >
                Luồng phản bác
              </span>
            </div>
            {result.refutingEvidence?.map((ev, i) => (
              <EvidenceCard key={i} item={ev} type="refute" />
            ))}
          </div>

          {/* Column 3: Triết học */}
          <div className="reveal-col space-y-3">
            <div
              className="flex items-center gap-2 pb-2.5 border-b-4"
              style={{ borderColor: T.cyanDim }}
            >
              <span className="text-sm">🔭</span>
              <span
                className="font-type text-[11px] tracking-widest uppercase font-bold"
                style={{ color: T.cyan }}
              >
                Góc nhìn triết học
              </span>
            </div>
            {result.philosophicalAnalysis && (
              <PhiloPanel analysis={result.philosophicalAnalysis} />
            )}
          </div>
        </div>

        {/* ── Reflection question ── */}
        {result.reflectionQuestion && (
          <div className="border-t mt-6 pt-6" style={{ borderColor: T.border + '30' }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg">❓</span>
              <p
                className="font-type text-[11px] tracking-widest uppercase font-bold"
                style={{ color: T.cyan }}
              >
                Câu hỏi phản tư
              </p>
            </div>
            <blockquote
              className="pl-5 py-4 rounded-sm"
              style={{
                borderLeft: `5px solid ${T.cyanDim}`,
                background: T.panel,
              }}
            >
              <p
                className="font-display font-bold italic text-lg leading-relaxed"
                style={{ color: T.text }}
              >
                "{result.reflectionQuestion}"
              </p>
            </blockquote>
            <p className="font-body italic text-sm mt-4" style={{ color: T.textMuted }}>
              Đây là thực hành lý luận nhận thức biện chứng: không có câu trả lời đúng/sai — chỉ có nhận thức ngày càng sâu sắc hơn.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Main CognitiveMirror Component ── */
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

    const stepTimer1 = setTimeout(() => setLoaderStep(1), 900)
    const stepTimer2 = setTimeout(() => setLoaderStep(2), 1800)

    const viewpointId = selectedViewpoint?.id || null
    const context     = CONTEXT_MAP[chapter] || CONTEXT_MAP.chapter4

    const res = await analyzeViewpoint(text, context, viewpointId)

    clearTimeout(stepTimer1)
    clearTimeout(stepTimer2)
    setLoaderStep(2)

    if (res.ok) {
      setResult(res.data, res.isFallback || false)
    } else {
      setError(res.error || 'Không thể phân tích. Vui lòng thử lại.')
    }
  }

  if (isLocked) {
    return (
      <div className="py-10 text-center space-y-4">
        <p className="font-type text-sm tracking-widest uppercase" style={{ color: ACCENT, opacity: 0.5 }}>
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
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="ink-stamp block mb-4" style={{ color: ACCENT, borderColor: ACCENT }}>
          Gương Nhận Thức — AI Feature
        </span>
        <h3 className="font-display font-bold text-2xl" style={{ color: '#1c0e06' }}>
          Phân tích đa chiều theo Mác-Lênin
        </h3>
        <p className="font-body italic text-sm max-w-lg mx-auto" style={{ color: '#5a4030' }}>
          Chọn một quan điểm để AI thu thập bằng chứng từ thực tiễn và phân tích theo lăng kính triết học
        </p>
      </div>

      {/* Selection interface */}
      {!analysisResult && !isLoading && (
        <div className="space-y-5">
          <div>
            <p
              className="font-type text-[10px] tracking-widest uppercase font-semibold mb-3"
              style={{ color: ACCENT }}
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
                    className="w-full text-left px-4 py-3.5 border-2 transition-all duration-200"
                    style={{
                      borderColor: isSelected ? ACCENT : `${ACCENT}40`,
                      background:  isSelected ? `${ACCENT}15` : `${ACCENT}04`,
                      color:       isSelected ? ACCENT_TEXT : '#2a1a0e',
                    }}
                  >
                    <span className="font-body text-sm italic leading-relaxed">{vp.text}</span>
                    {isSelected && (
                      <span
                        className="font-type text-[10px] block mt-1.5 font-semibold"
                        style={{ color: ACCENT }}
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
              className="font-type text-xs tracking-wider hover:opacity-80 transition-opacity font-semibold"
              style={{ color: ACCENT }}
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
                  className="w-full border-2 px-4 py-3 font-body italic text-sm resize-none outline-none transition-all duration-200"
                  style={{
                    borderColor: `${ACCENT}50`,
                    background:  `${ACCENT}06`,
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
              className="w-full py-4 font-type text-sm tracking-[0.2em] uppercase border-2 transition-all duration-200 hover:opacity-90 font-bold"
              style={{ borderColor: ACCENT, color: '#fff8ec', background: ACCENT }}
            >
              🔍 Phân tích ngay →
            </button>
          )}
        </div>
      )}

      {/* Loading */}
      {isLoading && <CognitiveLoader step={loaderStep} />}

      {/* Result — rendered directly without extra NeonCard wrapper */}
      {analysisResult && !isLoading && (
        <AnalysisResult
          result={analysisResult}
          viewpointText={getActiveText()}
          isFallback={isFallback}
          onReset={resetAnalysis}
        />
      )}
    </div>
  )
}
