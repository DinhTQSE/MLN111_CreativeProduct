import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Hiệu ứng "Bước nhảy" — ink-blot explosion phong cách vẽ tay */
export default function BreakthroughBurst({ containerRef }) {
  const canvasRef = useRef(null)
  const played    = useRef(false)

  useEffect(() => {
    if (!containerRef?.current) return
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* Màu từ palette vàng-cam của người dùng */
    const PALETTE = ['#FFD700', '#FFC200', '#FF8C00', '#FF6000', '#e8dcc8', '#c8861a']

    const particles = []

    const burst = () => {
      particles.length = 0
      const cx = canvas.width  * 0.5
      const cy = canvas.height * 0.55

      /* Vòng 1: nổ hướng tâm — hạt lớn */
      for (let i = 0; i < 50; i++) {
        const angle = (Math.PI * 2 * i) / 50 + (Math.random() - 0.5) * 0.25
        const spd   = 120 + Math.random() * 280
        particles.push({
          x: cx, y: cy, vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd,
          life: 1, decay: 0.007 + Math.random() * 0.01,
          size: 3 + Math.random() * 5,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          type: 'dot',
        })
      }

      /* Vòng 2: stroke ngắn — cảm giác vệt bút */
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2
        const spd   = 60 + Math.random() * 180
        particles.push({
          x: cx, y: cy, vx: Math.cos(angle)*spd, vy: Math.sin(angle)*spd,
          life: 1, decay: 0.009 + Math.random() * 0.012,
          size: 1.5 + Math.random() * 2.5,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          type: 'stroke', len: 8 + Math.random() * 16,
        })
      }
    }

    let animId = null
    let prev   = null

    const draw = (time) => {
      if (!prev) prev = time
      const dt = Math.min((time - prev) / 1000, 0.05)
      prev = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let alive = false
      particles.forEach(p => {
        if (p.life <= 0) return

        p.x   += p.vx * dt
        p.y   += p.vy * dt
        p.vx  *= 0.965
        p.vy  *= 0.965
        p.life -= p.decay

        if (p.life <= 0) return  // guard after decrement — prevents negative radius
        alive = true

        const radius = Math.max(0.01, p.size * p.life)

        ctx.save()
        ctx.globalAlpha = p.life * p.life  // quadratic fade

        if (p.type === 'dot') {
          ctx.fillStyle   = p.color
          ctx.shadowColor = p.color
          ctx.shadowBlur  = p.size * 2
          ctx.beginPath()
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.strokeStyle = p.color
          ctx.lineWidth   = Math.max(0.01, p.size * p.life)
          ctx.lineCap     = 'round'
          ctx.shadowColor = p.color
          ctx.shadowBlur  = 4
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x - p.vx * 0.06, p.y - p.vy * 0.06)
          ctx.stroke()
        }

        ctx.restore()
      })

      if (alive) animId = requestAnimationFrame(draw)
    }

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 60%',
      onEnter() {
        if (!played.current) {
          played.current = true
          burst()
          prev = null
          if (animId) cancelAnimationFrame(animId)
          animId = requestAnimationFrame(draw)
        }
      },
    })

    return () => {
      window.removeEventListener('resize', resize)
      if (animId) cancelAnimationFrame(animId)
      st.kill()
    }
  }, [containerRef])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
