// ============================================================
// useAnimatedCounter — eased count-up animation hook
// ============================================================

import { useEffect, useRef } from 'react'

const DURATION_MS = 2000

/**
 * Animates a number from 0 to `end` using cubic ease-out.
 * Starts when `inView` becomes true.
 *
 * @param {number} end     - Target number
 * @param {string} suffix  - Text appended after the number (e.g. '+', '%')
 * @param {boolean} inView - Triggers the animation
 * @returns {React.RefObject} - Attach to the element that should display the count
 */
export function useAnimatedCounter(end, suffix, inView) {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!inView) return

    const startTime = performance.now()

    const tick = (now) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / DURATION_MS, 1)
      const eased    = 1 - Math.pow(1 - progress, 3) // Cubic ease-out
      const count    = Math.round(end * eased)

      if (elementRef.current) {
        elementRef.current.textContent = count.toLocaleString() + suffix
      }

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, end, suffix])

  return elementRef
}
