import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NODES = [
  {
    id: 'ch1', label: 'Bao Cấp', period: '1975–86',
    giai: 'Thoát áp bức giai cấp cũ', tha: 'Bình quân chủ nghĩa',
    color: '#8b1a1a', x: 50, y: 15,
  },
  {
    id: 'ch2', label: 'Đổi Mới', period: '1986–00',
    giai: 'Giải phóng lao động cá nhân', tha: 'Sùng bái hàng hóa',
    color: '#8b6000', x: 85, y: 50,
  },
  {
    id: 'ch3', label: 'Kỷ Số', period: '2000–20',
    giai: 'Tự do tiếp cận tri thức', tha: 'Tha hóa số',
    color: '#0d3d5c', x: 50, y: 85,
  },
  {
    id: 'ch4', label: 'Kỷ AI', period: '2020–Nay',
    giai: 'Thoát lao động lặp lại', tha: 'Tha hóa nhận thức',
    color: '#3d1f6b', x: 15, y: 50,
  },
]

const ARCS = [
  { from: 0, to: 1, law: 'Điểm nút Lượng–Chất' },
  { from: 1, to: 2, law: 'Phủ định biện chứng' },
  { from: 2, to: 3, law: 'LLSX–QHSX mâu thuẫn' },
  { from: 3, to: 0, law: 'Vòng xoáy lên cao hơn' },
]

function lerp(a, b, t) { return a + (b - a) * t }

export default function DialecticalLoop() {
  const containerRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = containerRef.current?.querySelectorAll('.loop-node')
      const paths = svgRef.current?.querySelectorAll('.loop-path')
      const labels = containerRef.current?.querySelectorAll('.loop-label')
      const arrows = containerRef.current?.querySelectorAll('.arc-label')

      // Animate paths (draw)
      if (paths) {
        paths.forEach(path => {
          const len = path.getTotalLength?.() || 200
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
        })
        gsap.to(paths, {
          strokeDashoffset: 0,
          duration: 1.2,
          stagger: 0.4,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Animate nodes
      gsap.from(nodes, {
        scale: 0, opacity: 0, stagger: 0.35, duration: 0.6, ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      })

      // Animate labels
      gsap.from(labels, {
        opacity: 0, y: 10, stagger: 0.2, duration: 0.5, ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
        delay: 0.8,
      })

      gsap.from(arrows, {
        opacity: 0, stagger: 0.25, duration: 0.4, ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 55%',
          toggleActions: 'play none none none',
        },
        delay: 1.2,
      })

      // Continuous pulse on nodes
      nodes.forEach((node, i) => {
        gsap.to(node, {
          scale: 1.06,
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.4,
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const W = 400
  const H = 400
  const toXY = (pct_x, pct_y) => ({ x: (pct_x / 100) * W, y: (pct_y / 100) * H })

  return (
    <div ref={containerRef} className="relative w-full" style={{ maxWidth: 480, margin: '0 auto' }}>
      {/* SVG for arcs */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        aria-hidden="true"
      >
        <defs>
          {NODES.map(n => (
            <marker key={n.id} id={`arrow-${n.id}`} markerWidth="6" markerHeight="6"
                    refX="3" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill={n.color} opacity="0.6"/>
            </marker>
          ))}
        </defs>

        {ARCS.map((arc, i) => {
          const from = NODES[arc.from]
          const to   = NODES[arc.to]
          const f    = toXY(from.x, from.y)
          const t2   = toXY(to.x, to.y)
          // Bezier control point (curve toward center)
          const cx   = lerp(f.x, t2.x, 0.5) + (W/2 - lerp(f.x, t2.x, 0.5)) * 0.35
          const cy   = lerp(f.y, t2.y, 0.5) + (H/2 - lerp(f.y, t2.y, 0.5)) * 0.35

          return (
            <path
              key={i}
              className="loop-path"
              d={`M${f.x},${f.y} Q${cx},${cy} ${t2.x},${t2.y}`}
              fill="none"
              stroke={from.color}
              strokeWidth="1.5"
              strokeOpacity="0.45"
              markerEnd={`url(#arrow-${from.id})`}
            />
          )
        })}
      </svg>

      {/* Nodes overlaid */}
      {NODES.map((node, i) => {
        const pos = toXY(node.x, node.y)
        const pct_x = node.x
        const pct_y = node.y
        return (
          <div
            key={node.id}
            className="loop-node absolute flex flex-col items-center"
            style={{
              left: `${pct_x}%`,
              top: `${pct_y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="w-14 h-14 border-2 flex items-center justify-center rounded-full"
              style={{
                borderColor: node.color,
                background: `${node.color}18`,
                boxShadow: `0 0 16px ${node.color}33`,
              }}
            >
              <span className="font-type text-[10px] font-bold tracking-wider" style={{ color: node.color }}>
                {i + 1}
              </span>
            </div>
          </div>
        )
      })}

      {/* Labels as absolute divs */}
      {NODES.map((node) => {
        const label_offsets = {
          ch1: { left: '50%', top: '-2%', transform: 'translate(-50%, 0)', textAlign: 'center' },
          ch2: { right: '-2%', top: '50%', transform: 'translate(0, -50%)', textAlign: 'right' },
          ch3: { left: '50%', bottom: '-2%', transform: 'translate(-50%, 0)', textAlign: 'center' },
          ch4: { left: '-2%', top: '50%', transform: 'translate(0, -50%)', textAlign: 'left' },
        }
        const pos = label_offsets[node.id]
        return (
          <div key={`lbl-${node.id}`} className="loop-label absolute pointer-events-none" style={pos}>
            <p className="font-type text-[9px] tracking-widest uppercase font-bold" style={{ color: node.color }}>
              {node.label}
            </p>
            <p className="font-body italic text-[9px] opacity-50" style={{ color: node.color }}>
              {node.period}
            </p>
          </div>
        )
      })}

      {/* Arc law labels */}
      {ARCS.map((arc, i) => {
        const from = NODES[arc.from]
        const to   = NODES[arc.to]
        // midpoint
        const mx = (from.x + to.x) / 2
        const my = (from.y + to.y) / 2

        // offset toward center
        const cx = mx + (50 - mx) * 0.3
        const cy = my + (50 - my) * 0.3

        return (
          <div
            key={`arc-${i}`}
            className="arc-label absolute pointer-events-none"
            style={{
              left: `${cx}%`,
              top: `${cy}%`,
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <span className="font-type text-[8px] tracking-wider opacity-45" style={{ color: from.color }}>
              {arc.law}
            </span>
          </div>
        )
      })}
    </div>
  )
}
