import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useHardStop } from '../../hooks/useHardStop'

export default function HardStopOverlay() {
  const { isLocked } = useHardStop()
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!isLocked || !overlayRef.current) return
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    )
  }, [isLocked])

  if (!isLocked) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9990] flex items-center justify-center"
      style={{ background: 'rgba(8,0,15,0.96)', backdropFilter: 'blur(4px)' }}
    >
      {/* CRT scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.04) 4px)',
        }}
        aria-hidden="true"
      />

      <div className="text-center space-y-6 max-w-lg px-8">
        <div className="font-type text-[10px] tracking-[0.4em] uppercase opacity-40 text-purple-300">
          // HARD STOP — SESSION TERMINATED //
        </div>

        <div
          className="w-16 h-16 border-2 border-purple-500/60 flex items-center justify-center mx-auto"
          style={{ boxShadow: '0 0 30px rgba(107,0,204,0.3)' }}
        >
          <span className="text-2xl" style={{ color: '#9b59b6' }}>🔒</span>
        </div>

        <h2
          className="font-display font-black text-3xl leading-tight"
          style={{ color: '#e8d5ff' }}
        >
          AI đã hoàn thành
          <br />
          <span style={{ color: '#6b00cc' }}>vai trò hỗ trợ.</span>
        </h2>

        <p className="font-body italic text-base leading-relaxed" style={{ color: '#c4a8e0', opacity: 0.8 }}>
          "Phần nhận thức tiếp theo thuộc về con người."
        </p>

        <div
          className="border border-purple-500/30 px-6 py-4 font-type text-xs tracking-wider leading-relaxed"
          style={{ color: '#9b59b6', background: 'rgba(107,0,204,0.08)' }}
        >
          Các tính năng AI đã bị khóa để đảm bảo<br />
          liêm chính học thuật trong 20 phút phản biện.
        </div>

        <button
          onClick={() => document.getElementById('conclusion')?.scrollIntoView({ behavior: 'smooth' })}
          className="font-type text-xs tracking-[0.25em] uppercase px-8 py-3.5 border-2 transition-all duration-200 hover:opacity-70"
          style={{ borderColor: '#6b00cc', color: '#e8d5ff', background: 'transparent' }}
        >
          Xem tổng kết →
        </button>
      </div>
    </div>
  )
}
