import { useEffect } from 'react'

export function useDeckKeyboard({ current, total, goTo, next, prev, reset }) {
  useEffect(() => {
    function onKey(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          next()
          break
        case ' ':
          if (!e.shiftKey) { e.preventDefault(); next() }
          else             { e.preventDefault(); prev() }
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(total - 1)
          break
        case 'r':
        case 'R':
          reset()
          break
        default:
          if (e.key >= '1' && e.key <= '9') {
            goTo(parseInt(e.key, 10) - 1)
          }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, total, goTo, next, prev, reset])
}
