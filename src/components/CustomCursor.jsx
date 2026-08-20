import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX - 4 + 'px'
      dot.style.top = mouseY - 4 + 'px'
    }

    const onEnterLink = () => {
      ring.style.width = '50px'
      ring.style.height = '50px'
      ring.style.borderColor = 'rgba(201,168,76,0.8)'
    }
    const onLeaveLink = () => {
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.borderColor = 'rgba(201,168,76,0.5)'
    }

    let raf
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX - 16 + 'px'
      ring.style.top = ringY - 16 + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ display: window.innerWidth < 768 ? 'none' : 'block' }} />
      <div ref={ringRef} className="cursor-ring" style={{ display: window.innerWidth < 768 ? 'none' : 'block' }} />
    </>
  )
}
