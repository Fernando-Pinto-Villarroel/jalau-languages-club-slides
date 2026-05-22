import { useState, useEffect, useRef, useCallback } from 'react'
import './DeckStage.css'
import { useDeckKeyboard } from './useDeckKeyboard'

const DESIGN_W = 1920
const DESIGN_H = 1080
const OVERLAY_HIDE_MS = 1800

export default function DeckStage({ slides, currentIndex, onNavigate }) {
  const total = slides.length
  const viewportRef = useRef(null)
  const [viewport, setViewport] = useState({ w: window.innerWidth, h: window.innerHeight })
  const [overlayVisible, setOverlayVisible] = useState(false)
  const hideTimerRef = useRef(null)

  const scaleX = viewport.w / DESIGN_W
  const scaleY = viewport.h / DESIGN_H

  useEffect(() => {
    function measure() {
      if (!viewportRef.current) return
      setViewport({ w: viewportRef.current.offsetWidth, h: viewportRef.current.offsetHeight })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (viewportRef.current) ro.observe(viewportRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    function onMouseMove() {
      setOverlayVisible(true)
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = setTimeout(() => setOverlayVisible(false), OVERLAY_HIDE_MS)
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      clearTimeout(hideTimerRef.current)
    }
  }, [])

  const goTo = useCallback((n) => {
    const clamped = Math.max(0, Math.min(n, total - 1))
    onNavigate(clamped)
    setOverlayVisible(true)
    clearTimeout(hideTimerRef.current)
    hideTimerRef.current = setTimeout(() => setOverlayVisible(false), OVERLAY_HIDE_MS)
  }, [total, onNavigate])

  const next  = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])
  const prev  = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])
  const reset = useCallback(() => goTo(0), [goTo])

  useDeckKeyboard({ current: currentIndex, total, goTo, next, prev, reset })

  const pad2 = (n) => String(n + 1).padStart(2, '0')

  return (
    <div ref={viewportRef} className="deck-viewport">
      <div className="deck-stage">
        <div
          className="deck-canvas"
          style={{
            top: 0,
            left: 0,
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scaleX(${scaleX}) scaleY(${scaleY})`,
            transformOrigin: 'top left',
          }}
        >
          {slides.map((SlideComp, i) => (
            <div
              key={i}
              className="deck-slide"
              data-active={i === currentIndex ? '' : undefined}
            >
              <SlideComp />
            </div>
          ))}
        </div>
      </div>

      <div className="deck-overlay" data-visible={overlayVisible ? '' : undefined}>
        <button
          className="deck-overlay-btn"
          onClick={prev}
          title="Previous (←)"
          disabled={currentIndex === 0}
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>

        <span className="deck-overlay-count">
          {pad2(currentIndex)}
          <span className="sep">/</span>
          <span className="total">{pad2(total - 1)}</span>
        </span>

        <button
          className="deck-overlay-btn"
          onClick={next}
          title="Next (→)"
          disabled={currentIndex === total - 1}
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>

        <div className="deck-overlay-divider" />

        <button
          className="deck-overlay-btn deck-overlay-reset"
          onClick={reset}
          title="Reset (R)"
        >
          Reset <span className="kbd">R</span>
        </button>
      </div>
    </div>
  )
}
