import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAPTimeline(callback, deps = []) {
  const ctx = useRef(null)

  useEffect(() => {
    ctx.current = gsap.context(() => {
      if (typeof callback === 'function') callback(gsap, ScrollTrigger)
    })

    return () => {
      ctx.current?.revert()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ctx
}
