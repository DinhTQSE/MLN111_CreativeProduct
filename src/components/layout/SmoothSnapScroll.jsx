import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SNAP_IDS = [
  'hero',
  'chapter1',
  'chapter2',
  'chapter3',
  'chapter4',
  'ai-feature',
  'conclusion',
  'appendix',
]

const DURATION = 950
const WHEEL_THRESHOLD = 28
const TOUCH_THRESHOLD = 46
const HEADER_OFFSET = 56

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

function easeInOutQuint(t) {
  return t < 0.5
    ? 16 * t * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 5) / 2
}

function isEditableTarget(target) {
  if (!(target instanceof Element)) return false
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"], [data-native-scroll]'))
}

function getSnapPoints() {
  return SNAP_IDS
    .map((id) => {
      const element = document.getElementById(id)
      if (!element) return null
      const offset = id === 'hero' ? 0 : HEADER_OFFSET
      return {
        id,
        top: Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset),
      }
    })
    .filter(Boolean)
}

function getClosestIndex(points) {
  const y = window.scrollY
  let best = 0
  let bestDistance = Infinity

  points.forEach((point, index) => {
    const distance = Math.abs(point.top - y)
    if (distance < bestDistance) {
      best = index
      bestDistance = distance
    }
  })

  return best
}

export function snapToId(id) {
  const element = document.getElementById(id)
  if (!element) return

  const offset = id === 'hero' ? 0 : HEADER_OFFSET
  const targetY = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset)
  const event = new CustomEvent('snap-scroll-to', { detail: { targetY } })
  window.dispatchEvent(event)
}

export default function SmoothSnapScroll() {
  const animatingRef = useRef(false)
  const touchStartRef = useRef(null)
  const currentIndexRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animateTo = (targetY) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      if (reduceMotion) {
        window.scrollTo(0, targetY)
        ScrollTrigger.refresh()
        return
      }

      const startY = window.scrollY
      const distance = targetY - startY
      const startTime = performance.now()

      animatingRef.current = true
      document.documentElement.classList.add('is-snap-scrolling')

      const tick = (now) => {
        const progress = clamp((now - startTime) / DURATION, 0, 1)
        const eased = easeInOutQuint(progress)
        window.scrollTo(0, startY + distance * eased)

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick)
          return
        }

        window.scrollTo(0, targetY)
        animatingRef.current = false
        rafRef.current = null
        document.documentElement.classList.remove('is-snap-scrolling')
        ScrollTrigger.refresh()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const goToIndex = (index) => {
      const points = getSnapPoints()
      if (!points.length) return

      const nextIndex = clamp(index, 0, points.length - 1)
      currentIndexRef.current = nextIndex
      animateTo(points[nextIndex].top)
    }

    const onSnapTo = (event) => {
      const targetY = event.detail?.targetY
      if (typeof targetY !== 'number') return
      animateTo(targetY)
    }

    const moveBy = (direction) => {
      if (animatingRef.current) return
      const points = getSnapPoints()
      if (!points.length) return

      const closest = getClosestIndex(points)
      const next = direction > 0 ? closest + 1 : closest - 1
      goToIndex(next)
    }

    const onWheel = (event) => {
      if (event.ctrlKey || event.metaKey || isEditableTarget(event.target)) return
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return

      event.preventDefault()
      moveBy(event.deltaY > 0 ? 1 : -1)
    }

    const onKeyDown = (event) => {
      if (isEditableTarget(event.target)) return

      const downKeys = ['ArrowDown', 'PageDown', 'Space']
      const upKeys = ['ArrowUp', 'PageUp']
      if (![...downKeys, ...upKeys, 'Home', 'End'].includes(event.code)) return

      event.preventDefault()

      const points = getSnapPoints()
      if (!points.length || animatingRef.current) return

      if (event.code === 'Home') return goToIndex(0)
      if (event.code === 'End') return goToIndex(points.length - 1)
      moveBy(downKeys.includes(event.code) ? 1 : -1)
    }

    const onTouchStart = (event) => {
      if (event.touches.length !== 1 || isEditableTarget(event.target)) return
      touchStartRef.current = event.touches[0].clientY
    }

    const onTouchMove = (event) => {
      if (touchStartRef.current === null || isEditableTarget(event.target)) return
      const delta = touchStartRef.current - event.touches[0].clientY
      if (Math.abs(delta) < TOUCH_THRESHOLD) return

      event.preventDefault()
      touchStartRef.current = null
      moveBy(delta > 0 ? 1 : -1)
    }

    const onTouchEnd = () => {
      touchStartRef.current = null
    }

    const onResize = () => {
      const points = getSnapPoints()
      currentIndexRef.current = getClosestIndex(points)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('resize', onResize)
    window.addEventListener('snap-scroll-to', onSnapTo)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      document.documentElement.classList.remove('is-snap-scrolling')
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('snap-scroll-to', onSnapTo)
    }
  }, [])

  return null
}
