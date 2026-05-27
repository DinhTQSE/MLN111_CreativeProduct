import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { usePoll } from '../../../hooks/usePoll'
import { POLL_QUESTIONS } from '../../../data/pollData'
import NeonCard from '../../ui/NeonCard'
import clsx from 'clsx'

const ACCENT = '#0d3d5c'

function PollOption({ option, selected, onSelect }) {
  const active = selected === option.value
  return (
    <button
      onClick={() => onSelect(option.value)}
      className={clsx(
        'w-full text-left px-4 py-2.5 border font-body text-sm transition-all duration-200',
        active ? '' : 'text-ink-mid border-ink/10 hover:border-[#0d3d5c]/35 hover:bg-[#0d3d5c]/5',
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

export default function InteractivePoll() {
  const { hasVoted, currentAnswers, answerQuestion, submit, getPercentages, totalVoters } = usePoll()
  const allAnswered = POLL_QUESTIONS.every(q => currentAnswers[q.id] !== undefined)

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8 text-center">
        <span className="ink-stamp mb-4 block" style={{ color: ACCENT, borderColor: ACCENT }}>
          Khảo sát tương tác — Trực tiếp
        </span>
        <h3 className="font-display font-bold text-2xl text-ink mb-2">Bạn có đang bị tha hóa?</h3>
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
          <NeonCard accent={ACCENT} className="p-4 text-center">
            <p className="font-hand text-base" style={{ color: ACCENT }}>
              ✓ Cảm ơn — {totalVoters} phản hồi
            </p>
          </NeonCard>
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
                             isUser={opt.value === currentAnswers?.[q.id] ||
                                     String(opt.value) === String(currentAnswers?.[q.id])}/>
                ))}
              </NeonCard>
            )
          })}
        </div>
      )}
    </div>
  )
}
