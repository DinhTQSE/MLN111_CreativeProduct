import { useState, useEffect, useCallback } from 'react'
import { CHAPTERS } from '../data/chapters'

const DEFAULT_ACCENT = '#FFD700'
const DEFAULT_GLOW = 'rgba(255, 215, 0, 0.3)'

export function useChapterColor() {
  const [activeChapter, setActiveChapter] = useState('hero')
  const [accent, setAccent] = useState(DEFAULT_ACCENT)
  const [accentGlow, setAccentGlow] = useState(DEFAULT_GLOW)

  const updateChapter = useCallback((chapterId) => {
    const chapter = CHAPTERS.find(c => c.id === chapterId)
    if (!chapter) return

    setActiveChapter(chapterId)
    setAccent(chapter.accent)
    setAccentGlow(chapter.accentGlow)

    // Update CSS custom properties for global usage
    document.documentElement.style.setProperty('--accent', chapter.accent)
    document.documentElement.style.setProperty('--accent-glow', chapter.accentGlow)
  }, [])

  useEffect(() => {
    // Set initial values
    document.documentElement.style.setProperty('--accent', DEFAULT_ACCENT)
    document.documentElement.style.setProperty('--accent-glow', DEFAULT_GLOW)
  }, [])

  return { activeChapter, accent, accentGlow, updateChapter }
}
