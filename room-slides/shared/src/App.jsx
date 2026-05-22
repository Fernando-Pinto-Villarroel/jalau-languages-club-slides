import { useState, useEffect, useCallback, useRef } from 'react'
import DeckStage from './deck/DeckStage'
import MusicPlayer from './audio/MusicPlayer'

function indexFromPath(total) {
  const match = window.location.pathname.match(/\/slide-(\d+)$/)
  if (match) {
    const n = parseInt(match[1], 10) - 1
    return Math.max(0, Math.min(n, total - 1))
  }
  return 0
}

function pathFromIndex(index) {
  return `/slide-${index + 1}`
}

export default function App({ slides, musicSrc = '/lang-club-music.mp3' }) {
  const [currentIndex, setCurrentIndex] = useState(() => indexFromPath(slides.length))
  const audioRef = useRef(null)

  useEffect(() => {
    const current = window.location.pathname
    if (!current.match(/\/slide-\d+$/)) {
      window.history.replaceState(null, '', pathFromIndex(currentIndex))
    }
  }, [])

  useEffect(() => {
    function onPopState() {
      setCurrentIndex(indexFromPath(slides.length))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [slides.length])

  const handleNavigate = useCallback((index) => {
    setCurrentIndex(index)
    window.history.pushState(null, '', pathFromIndex(index))
  }, [])

  return (
    <>
      <DeckStage
        slides={slides}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />
      <MusicPlayer audioRef={audioRef} />
      <audio
        ref={audioRef}
        src={musicSrc}
        loop
        preload="auto"
      />
    </>
  )
}
