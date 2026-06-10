import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useChapterColor } from '../../hooks/useChapterColor'
import NavBar from './NavBar'
import ChapterProgress from './ChapterProgress'
import SmoothSnapScroll from './SmoothSnapScroll'
import TimelineThread from './TimelineThread'

import HeroSection from '../chapters/HeroSection/HeroSection'
import Chapter1 from '../chapters/Chapter1/Chapter1'
import Chapter2 from '../chapters/Chapter2/Chapter2'
import Chapter3 from '../chapters/Chapter3/Chapter3'
import Chapter4 from '../chapters/Chapter4/Chapter4'
import Conclusion from '../chapters/Conclusion/Conclusion'
import Appendix from '../chapters/Appendix/Appendix'

gsap.registerPlugin(ScrollTrigger)

const SECTION_CHAPTERS = [
  { id: 'hero',       chapterId: 'hero' },
  { id: 'chapter1',  chapterId: 'chapter1' },
  { id: 'chapter2',  chapterId: 'chapter2' },
  { id: 'chapter3',  chapterId: 'chapter3' },
  { id: 'chapter4',  chapterId: 'chapter4' },
  { id: 'ai-feature',chapterId: 'chapter4' },
  { id: 'conclusion',chapterId: 'conclusion' },
  { id: 'appendix',  chapterId: 'appendix' },
]

export default function ScrollContainer() {
  const { activeChapter, accent, updateChapter } = useChapterColor()

  useEffect(() => {
    // Refresh ScrollTrigger after fonts are loaded
    document.fonts.ready.then(() => ScrollTrigger.refresh())

    // Register ScrollTriggers to detect active chapter
    const triggers = SECTION_CHAPTERS.map(({ id, chapterId }) =>
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => updateChapter(chapterId),
        onEnterBack: () => updateChapter(chapterId),
      })
    )

    return () => triggers.forEach(t => t.kill())
  }, [updateChapter])

  return (
    <>
      <SmoothSnapScroll />
      <NavBar accent={accent} activeChapter={activeChapter} />
      <TimelineThread activeChapter={activeChapter} />
      <ChapterProgress activeChapter={activeChapter} />

      <main>
        <HeroSection accent={accent} />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Conclusion />
        <Appendix />
      </main>
    </>
  )
}
