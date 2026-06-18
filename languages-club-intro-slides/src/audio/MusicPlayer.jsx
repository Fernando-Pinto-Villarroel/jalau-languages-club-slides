import { useState, useEffect } from 'react'

const INITIAL_VOLUME = 0.7

export default function MusicPlayer({ audioRef }) {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(INITIAL_VOLUME * 100)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = INITIAL_VOLUME

    // Try autoplay; show player in paused state if browser blocks it
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        setPlaying(false)
        function resumeOnInteraction() {
          audio.play().then(() => setPlaying(true)).catch(() => {})
          document.removeEventListener('click',   resumeOnInteraction)
          document.removeEventListener('keydown', resumeOnInteraction)
        }
        document.addEventListener('click',   resumeOnInteraction)
        document.addEventListener('keydown', resumeOnInteraction)
      })
  }, [audioRef])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  function handleVolume(e) {
    const v = parseInt(e.target.value, 10)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v / 100
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 18,
        right: 24,
        zIndex: 9999,
        background: 'rgba(10, 20, 50, 0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(255, 255, 255, 0.14)',
        borderRadius: 50,
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 4px 28px rgba(0, 0, 0, 0.38)',
      }}
    >
      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        title="Play / Pause"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          padding: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {playing ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Volume */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.65)">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
        </svg>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleVolume}
          style={{ width: 76, accentColor: '#09bef9', cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}
