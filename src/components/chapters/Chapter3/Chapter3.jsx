import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getChapterById } from '../../../data/chapters'
import ChapterTitle from '../../ui/ChapterTitle'
import QuoteBlock from '../../ui/QuoteBlock'
import NeonCard from '../../ui/NeonCard'
import IllustrationChapter3 from '../../ui/illustrations/IllustrationChapter3'
import InteractivePoll from './InteractivePoll'

gsap.registerPlugin(ScrollTrigger)
const chapter = getChapterById('chapter3')

export default function Chapter3() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.animate-in'), {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chapter3"
      ref={sectionRef}
      className="chapter-section px-6 md:px-14 py-24"
      style={{ background: chapter.bg, minHeight: '100vh' }}
    >
      <div className="absolute inset-0 crosshatch-bg pointer-events-none opacity-30" aria-hidden="true"/>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-9">
            <div className="animate-in"><ChapterTitle {...chapter}/></div>

            <div className="animate-in">
              <IllustrationChapter3 accent={chapter.accent} className="w-full max-w-sm mx-auto lg:mx-0"/>
              <p className="font-hand text-sm mt-2 opacity-45"
                 style={{ color: chapter.accent, transform: 'rotate(-1deg)' }}>
                Người dùng → Dữ liệu → Thuật toán
              </p>
            </div>

            <div className="animate-in">
              <QuoteBlock text={chapter.quote.text} author={chapter.quote.author} accent={chapter.accent}/>
            </div>

            <div className="space-y-2 animate-in">
              {chapter.theses.map((t, i) => (
                <NeonCard key={i} accent={chapter.accent} className="px-5 py-3.5 flex gap-3 items-start">
                  <span className="font-type text-xs shrink-0 mt-0.5 opacity-40"
                        style={{ color: chapter.accent }}>[{String(i+1).padStart(2,'0')}]</span>
                  <p className="font-body text-sm leading-relaxed text-ink-mid">{t}</p>
                </NeonCard>
              ))}
            </div>
          </div>

          <div className="animate-in">
            <InteractivePoll/>
          </div>
        </div>
      </div>
    </section>
  )
}
