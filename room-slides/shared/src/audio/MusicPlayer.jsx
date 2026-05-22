import { useState, useEffect, useRef } from 'react'

const INITIAL_VOLUME = 0.7
const DEFAULT_TIMER_S = 300

function fmt(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function snapUp(s) {
  return s % 30 === 0 ? s + 30 : Math.ceil(s / 30) * 30
}

function snapDown(s) {
  return s % 30 === 0 ? Math.max(30, s - 30) : Math.max(30, Math.floor(s / 30) * 30)
}

const iconBtn = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'rgba(255,255,255,0.72)',
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  flexShrink: 0,
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13H5v-2h14v2z" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  )
}

export default function MusicPlayer({ audioRef }) {
  const [open, setOpen] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(INITIAL_VOLUME * 100)
  const [remaining, setRemaining] = useState(DEFAULT_TIMER_S)
  const [timerRunning, setTimerRunning] = useState(false)

  const intervalRef = useRef(null)
  const lastSetRef = useRef(DEFAULT_TIMER_S)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = INITIAL_VOLUME
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        setPlaying(false)
        function resume() {
          audio
            .play()
            .then(() => setPlaying(true))
            .catch(() => {})
          document.removeEventListener('click', resume)
          document.removeEventListener('keydown', resume)
        }
        document.addEventListener('click', resume)
        document.addEventListener('keydown', resume)
      })
  }, [audioRef])

  useEffect(() => {
    if (!timerRunning) {
      clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => Math.max(0, prev - 1))
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [timerRunning])

  useEffect(() => {
    if (remaining === 0 && timerRunning) {
      setTimerRunning(false)
      new Audio('/timer-finished.wav').play().catch(() => {})
    }
  }, [remaining, timerRunning])

  function toggleTimer() {
    if (remaining === 0) {
      setRemaining(lastSetRef.current)
      setTimerRunning(true)
    } else {
      setTimerRunning((r) => !r)
    }
  }

  function handleUp() {
    setRemaining((prev) => {
      const n = snapUp(prev)
      lastSetRef.current = n
      return n
    })
  }

  function handleDown() {
    setRemaining((prev) => {
      const n = snapDown(prev)
      lastSetRef.current = n
      return n
    })
  }

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {})
    }
  }

  function handleVolume(e) {
    const v = parseInt(e.target.value, 10)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v / 100
  }

  const finished = remaining === 0
  const timeColor = finished ? '#ff8080' : timerRunning ? '#7dd3fc' : '#fff'

  const panelBase = {
    background: 'rgba(10,20,50,0.86)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.14)',
    boxShadow: '0 4px 28px rgba(0,0,0,0.42)',
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 18,
        right: 24,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 6,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        title={open ? 'Hide' : 'Show'}
        style={{
          ...panelBase,
          borderRadius: 999,
          padding: '6px 14px 6px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          cursor: 'pointer',
          color: 'rgba(255,255,255,0.72)',
        }}
      >
        {!open && (
          <>
            <span style={{ fontSize: 13, lineHeight: 1 }}>⏱</span>
            <span
              style={{
                fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: timeColor,
                transition: 'color 0.3s ease',
              }}
            >
              {fmt(remaining)}
            </span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', margin: '0 2px' }}>·</span>
            <span style={{ fontSize: 13, lineHeight: 1 }}>🎵</span>
          </>
        )}
        <span style={{ color: 'rgba(255,255,255,0.5)', display: 'flex', marginLeft: open ? 0 : 2 }}>
          {open ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>

      {open && (
        <div
          style={{
            ...panelBase,
            borderRadius: 14,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            minWidth: 214,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', flexShrink: 0 }}>⏱</span>

            <button onClick={handleDown} title="-30s" style={iconBtn}>
              <MinusIcon />
            </button>

            <span
              style={{
                fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: timeColor,
                flex: 1,
                textAlign: 'center',
                transition: 'color 0.3s ease',
              }}
            >
              {fmt(remaining)}
            </span>

            <button onClick={handleUp} title="+30s" style={iconBtn}>
              <PlusIcon />
            </button>

            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.18)', margin: '0 2px' }} />

            <button
              onClick={toggleTimer}
              title={timerRunning ? 'Pause' : finished ? 'Restart' : 'Start'}
              style={{ ...iconBtn, color: '#fff' }}
            >
              {timerRunning ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.12)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', flexShrink: 0 }}>🎵</span>

            <button onClick={togglePlay} title="Play / Pause music" style={{ ...iconBtn, color: '#fff' }}>
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>

            <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.55)" style={{ flexShrink: 0 }}>
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>

            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={handleVolume}
              style={{ flex: 1, accentColor: 'var(--primary, #4f46e5)', cursor: 'pointer' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
