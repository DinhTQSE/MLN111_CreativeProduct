import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { usePoll } from '../../../hooks/usePoll'
import { POLL_QUESTIONS } from '../../../data/pollData'
import NeonCard from '../../ui/NeonCard'
import clsx from 'clsx'

const ACCENT = '#0d3d5c'

/* Tính chỉ số tha hóa từ câu trả lời */
function calcAlienationScore(answers) {
  let score = 0
  let max = 0

  // q1: thuật toán hiểu mình (1-5)
  if (answers.q1 !== undefined) {
    score += Number(answers.q1)
    max += 5
  }
  // q2: thời gian MXH
  if (answers.q2 !== undefined) {
    const q2map = { a: 1, b: 2, c: 4, d: 5 }
    score += q2map[answers.q2] ?? 0
    max += 5
  }
  // q3: đồng ý bị tha hóa (1-5)
  if (answers.q3 !== undefined) {
    score += Number(answers.q3)
    max += 5
  }

  if (max === 0) return 0
  return Math.round((score / max) * 100)
}

function getAlienationLevel(pct) {
  if (pct >= 80) return { label: 'Tha hóa nặng', color: '#c0182a', desc: 'Thuật toán đang định hình thế giới quan của bạn ở mức đáng lo ngại.' }
  if (pct >= 60) return { label: 'Tha hóa cao', color: '#8b1a1a', desc: 'Bạn đang trong vùng ảnh hưởng sâu của nền kinh tế nền tảng.' }
  if (pct >= 40) return { label: 'Tha hóa vừa', color: '#8b6000', desc: 'Bạn vẫn còn ý thức tự chủ, nhưng thuật toán đang "kéo" từng chút.' }
  return { label: 'Tha hóa thấp', color: '#2a6b2a', desc: 'Bạn vẫn đang kiểm soát được mối quan hệ với công nghệ — hãy duy trì!' }
}

function PollOption({ option, selected, onSelect }) {
  const active = selected === option.value || String(selected) === String(option.value)
  return (
    <button
      onClick={() => onSelect(option.value)}
      className={clsx(
        'w-full text-left px-4 py-2.5 border font-body text-sm transition-all duration-200',
        !active && 'text-ink-mid border-ink/10 hover:border-[#0d3d5c]/35 hover:bg-[#0d3d5c]/5',
      )}
      style={active ? { borderColor: ACCENT, backgroundColor: ACCENT, color: '#fff8ec', fontStyle: 'italic' } : {}}
    >
      {option.label}
    </button>
  )
}

function ResultBar({ label, percentage, isUser }) {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) gsap.from(ref.current, { width: 0, duration: 0.9, ease: 'power2.out' })
  }, [])
  return (
    <div className="mb-3">
      <div className="flex justify-between items-baseline mb-1">
        <span className="font-body italic text-xs text-ink-lite truncate max-w-[68%]">{label}</span>
        <span className="font-type text-xs" style={{ color: ACCENT }}>{percentage}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${ACCENT}15` }}>
        <div ref={ref} className="h-full rounded-full"
             style={{ width: `${percentage}%`, background: isUser ? ACCENT : `${ACCENT}55` }}/>
      </div>
    </div>
  )
}

function AlienationMeterResult({ userAnswers }) {
  const score = calcAlienationScore(userAnswers)
  const level = getAlienationLevel(score)
  const barRef = useRef(null)

  useEffect(() => {
    if (barRef.current) {
      gsap.from(barRef.current, { width: 0, duration: 1.4, ease: 'power3.out', delay: 0.3 })
    }
  }, [])

  return (
    <NeonCard accent={ACCENT} className="p-6 space-y-5">
      <div className="text-center">
        <p className="font-type text-[9px] tracking-widest uppercase opacity-40 mb-2" style={{ color: ACCENT }}>
          Chỉ số Tha hóa Số của bạn
        </p>
        <div className="font-display font-black text-6xl leading-none mb-1" style={{ color: level.color }}>
          {score}
          <span className="text-2xl font-normal opacity-50">%</span>
        </div>
        <div className="font-type text-xs tracking-wider uppercase px-3 py-1 border inline-block mt-2"
             style={{ borderColor: level.color, color: level.color }}>
          {level.label}
        </div>
      </div>

      {/* Meter bar */}
      <div>
        <div className="h-3 rounded-full overflow-hidden relative" style={{ background: `${ACCENT}12` }}>
          {/* Gradient scale */}
          <div className="absolute inset-0 rounded-full" style={{
            background: 'linear-gradient(to right, #2a6b2a, #8b6000, #8b1a1a, #c0182a)',
            opacity: 0.2,
          }}/>
          {/* Actual bar */}
          <div
            ref={barRef}
            className="h-full rounded-full relative z-10"
            style={{
              width: `${score}%`,
              background: `linear-gradient(to right, #2a6b2a, ${level.color})`,
            }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="font-type text-[8px] opacity-30" style={{ color: '#2a6b2a' }}>Thấp</span>
          <span className="font-type text-[8px] opacity-30" style={{ color: '#c0182a' }}>Cao</span>
        </div>
      </div>

      <p className="font-body italic text-sm text-ink-mid leading-relaxed text-center opacity-80">
        {level.desc}
      </p>

      <div className="border-t pt-4" style={{ borderColor: `${ACCENT}15` }}>
        <p className="font-type text-[9px] uppercase tracking-widest opacity-35 mb-2" style={{ color: ACCENT }}>
          Phát hiện triết học
        </p>
        <p className="font-body italic text-xs text-ink-mid leading-relaxed opacity-70">
          "Đây chính xác là cách thuật toán biết bạn hơn bạn tự biết mình."
          <br/>
          Dữ liệu hành vi của bạn đang được dùng để dự đoán và định hình
          quyết định tiếp theo — đây là hình thức <em style={{ color: ACCENT }}>tha hóa ý thức</em> theo Marx.
        </p>
      </div>
    </NeonCard>
  )
}

export default function InteractivePoll() {
  const { hasVoted, currentAnswers, answerQuestion, submit, getPercentages, totalVoters, userAnswers } = usePoll()
  const allAnswered = POLL_QUESTIONS.every(q => currentAnswers[q.id] !== undefined)

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8 text-center">
        <span className="ink-stamp mb-4 block" style={{ color: ACCENT, borderColor: ACCENT }}>
          AlienationMeter — Khảo sát tương tác
        </span>
        <h3 className="font-display font-bold text-2xl text-ink mb-2">Bạn có đang bị tha hóa số?</h3>
        <p className="font-hand text-sm opacity-50" style={{ color: ACCENT }}>
          {totalVoters} người đã trả lời
        </p>
      </div>

      {!hasVoted ? (
        <div className="space-y-6">
          {POLL_QUESTIONS.map((q, qi) => (
            <NeonCard key={q.id} accent={ACCENT} className="p-5">
              <p className="font-type text-[9px] tracking-widest uppercase opacity-35 mb-1"
                 style={{ color: ACCENT }}>Câu {qi+1} / {POLL_QUESTIONS.length}</p>
              <p className="font-display font-bold italic text-base text-ink mb-1">{q.text}</p>
              {q.subtext && <p className="font-body text-xs italic text-ink-lite mb-4 opacity-70">{q.subtext}</p>}
              <div className="space-y-1.5 mt-3">
                {q.options.map(opt => (
                  <PollOption key={opt.value} option={opt}
                              selected={currentAnswers[q.id]} onSelect={v => answerQuestion(q.id, v)}/>
                ))}
              </div>
            </NeonCard>
          ))}

          <button
            onClick={() => submit(POLL_QUESTIONS.length)}
            disabled={!allAnswered}
            className="w-full py-3.5 font-type text-xs tracking-[0.2em] uppercase border-2 transition-all duration-250 disabled:opacity-25 disabled:cursor-not-allowed shadow-ink"
            style={allAnswered
              ? { borderColor: ACCENT, color: '#fff8ec', background: ACCENT }
              : { borderColor: ACCENT, color: ACCENT, background: 'transparent' }}
          >
            {allAnswered ? 'Xem kết quả →' : `Trả lời đủ ${POLL_QUESTIONS.length} câu`}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* AlienationMeter result */}
          <AlienationMeterResult userAnswers={userAnswers} />

          <NeonCard accent={ACCENT} className="p-4 text-center">
            <p className="font-hand text-base" style={{ color: ACCENT }}>
              ✓ Cảm ơn — {totalVoters} phản hồi
            </p>
          </NeonCard>

          {/* Detailed results per question */}
          {POLL_QUESTIONS.map((q, qi) => {
            const pcts = getPercentages(q.id)
            return (
              <NeonCard key={q.id} accent={ACCENT} className="p-5">
                <p className="font-type text-[9px] uppercase tracking-widest opacity-30 mb-1"
                   style={{ color: ACCENT }}>Câu {qi+1}</p>
                <p className="font-display font-bold italic text-sm text-ink mb-5">{q.text}</p>
                {q.options.map(opt => (
                  <ResultBar key={opt.value} label={opt.label}
                             percentage={pcts[opt.value] ?? 0}
                             isUser={String(opt.value) === String(userAnswers?.[q.id])}/>
                ))}
              </NeonCard>
            )
          })}
        </div>
      )}
    </div>
  )
}
