import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STREAM_NODES = [
  { label: 'Bạn', icon: '◉', color: '#ffffff' },
  { label: 'Bài đăng', icon: '◈', color: '#00d4ff' },
  { label: 'Lượt thích', icon: '♡', color: '#00d4ff' },
  { label: 'Thuật toán', icon: '⬡', color: '#ff6b6b' },
  { label: 'Dữ liệu', icon: '⬤', color: '#ff6b6b' },
  { label: 'Quảng cáo', icon: '$', color: '#ff6b6b' },
]

export default function DataStreamViz() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = containerRef.current?.querySelectorAll('.stream-node')
      const arrows = containerRef.current?.querySelectorAll('.stream-arrow')

      gsap.from(nodes, {
        opacity: 0,
        scale: 0.5,
        stagger: 0.2,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from(arrows, {
        scaleX: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.4,
        ease: 'power2.out',
        transformOrigin: 'left',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      })

      // Pulse the algorithm node
      gsap.to(
        containerRef.current?.querySelectorAll('.algo-node'),
        {
          boxShadow: '0 0 30px #ff6b6b, 0 0 60px #ff6b6b66',
          scale: 1.05,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="w-full">
      <p className="font-mono text-xs tracking-widest uppercase opacity-50 mb-8 text-center text-[#00d4ff]">
        [ Hành trình dữ liệu của bạn ]
      </p>

      {/* Flow diagram */}
      <div className="flex flex-col gap-3">
        {/* User → Content */}
        <div className="flex items-center justify-center gap-3">
          <div className="stream-node flex flex-col items-center gap-2">
            <div className="w-14 h-14 border-2 border-white/40 flex items-center justify-center text-2xl">
              {STREAM_NODES[0].icon}
            </div>
            <span className="font-mono text-[10px] opacity-60">Bạn</span>
          </div>

          <div className="stream-arrow flex-1 h-px max-w-16 bg-gradient-to-r from-white/30 to-[#00d4ff]" />

          <div className="stream-node flex flex-col items-center gap-2">
            <div className="w-14 h-14 border border-[#00d4ff]/60 flex items-center justify-center text-xl text-[#00d4ff]">
              {STREAM_NODES[1].icon}
            </div>
            <span className="font-mono text-[10px] opacity-60">Nội dung</span>
          </div>

          <div className="stream-arrow flex-1 h-px max-w-16 bg-gradient-to-r from-[#00d4ff] to-[#ff6b6b]" />

          <div className="stream-node algo-node flex flex-col items-center gap-2">
            <div className="w-14 h-14 border-2 border-[#ff6b6b] flex items-center justify-center text-xl text-[#ff6b6b]"
                 style={{ boxShadow: '0 0 15px #ff6b6b44' }}>
              {STREAM_NODES[3].icon}
            </div>
            <span className="font-mono text-[10px] opacity-60 text-[#ff6b6b]">Thuật toán</span>
          </div>
        </div>

        {/* Arrow down */}
        <div className="stream-arrow flex justify-center">
          <div className="w-px h-8 bg-gradient-to-b from-[#ff6b6b] to-[#ff6b6b]/30" />
        </div>

        {/* Data → Ad */}
        <div className="flex items-center justify-center gap-3">
          <div className="stream-node flex flex-col items-center gap-2">
            <div className="w-14 h-14 border border-[#ff6b6b]/60 flex items-center justify-center text-xl text-[#ff6b6b]">
              {STREAM_NODES[4].icon}
            </div>
            <span className="font-mono text-[10px] opacity-60 text-[#ff6b6b]">Data profile</span>
          </div>

          <div className="stream-arrow flex-1 h-px max-w-16 bg-gradient-to-r from-[#ff6b6b] to-[#ff6b6b]" />

          <div className="stream-node flex flex-col items-center gap-2">
            <div className="w-14 h-14 border border-[#ff6b6b]/80 flex items-center justify-center text-xl font-bold text-[#ff6b6b]"
                 style={{ boxShadow: '0 0 10px #ff6b6b44' }}>
              {STREAM_NODES[5].icon}
            </div>
            <span className="font-mono text-[10px] opacity-60 text-[#ff6b6b]">Quảng cáo</span>
          </div>
        </div>
      </div>

      {/* Footer label */}
      <p className="font-mono text-xs opacity-30 text-center mt-6 leading-relaxed">
        Bạn là <span className="text-[#ff6b6b] opacity-80">nguồn dữ liệu</span> —<br/>
        không phải khách hàng
      </p>
    </div>
  )
}
