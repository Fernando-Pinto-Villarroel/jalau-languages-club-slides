import { useState, useRef, useEffect } from 'react'
import DeckStage from './deck/DeckStage'
import MusicPlayer from './audio/MusicPlayer'
import { slides } from './slides/registry'

function indexFromPath() {
  const match = window.location.pathname.match(/\/slide-(\d+)$/)
  if (match) {
    const n = parseInt(match[1], 10) - 1   // URL is 1-indexed, state is 0-indexed
    return Math.max(0, Math.min(n, slides.length - 1))
  }
  return 0
}

function pathFromIndex(index) {
  return `/slide-${index + 1}`
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(indexFromPath)
  const audioRef = useRef(null)

  // Normalise the URL on first load (e.g. bare "/" → "/slide-1")
  useEffect(() => {
    const current = window.location.pathname
    if (!current.match(/\/slide-\d+$/)) {
      window.history.replaceState(null, '', pathFromIndex(currentIndex))
    }
  }, [])   // eslint-disable-line react-hooks/exhaustive-deps

  // Browser back/forward: sync state to the URL
  useEffect(() => {
    function onPopState() {
      setCurrentIndex(indexFromPath())
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function handleNavigate(index) {
    setCurrentIndex(index)
    window.history.pushState(null, '', pathFromIndex(index))
  }

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
        src="/lang-club-music.mp3"
        loop
        preload="auto"
      />
    </>
  )
}
