// ============================================================
// useParticleCanvas — animated gold particle field
// ============================================================

import { useEffect, useRef } from 'react'

const PARTICLE_COUNT   = 120
const CONNECTION_RANGE = 100
const GOLD_RGB         = '201,168,76'
const WHITE_RGB        = '255,255,255'

// ── Particle class ────────────────────────────────────────────
class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
  }

  reset() {
    const { width, height } = this.canvas
    this.x       = Math.random() * width
    this.y       = Math.random() * height
    this.size    = Math.random() * 2 + 0.5
    this.speedX  = (Math.random() - 0.5) * 0.4
    this.speedY  = -(Math.random() * 0.6 + 0.2)
    this.opacity = Math.random() * 0.6 + 0.1
    this.isGold  = Math.random() > 0.7
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    if (this.y < -10)                              this.reset()
    if (this.x < 0 || this.x > this.canvas.width) this.reset()
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.isGold
      ? `rgba(${GOLD_RGB},${this.opacity})`
      : `rgba(${WHITE_RGB},${this.opacity * 0.5})`
    ctx.fill()
  }
}

// ── Connection lines between nearby particles ─────────────────
function drawConnections(ctx, particles) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dist = Math.hypot(
        particles[i].x - particles[j].x,
        particles[i].y - particles[j].y,
      )
      if (dist < CONNECTION_RANGE) {
        const alpha = 0.08 * (1 - dist / CONNECTION_RANGE)
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(${GOLD_RGB},${alpha})`
        ctx.lineWidth   = 0.5
        ctx.stroke()
      }
    }
  }
}

// ── Hook ──────────────────────────────────────────────────────
export function useParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animationId

    const handleResize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle(canvas))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawConnections(ctx, particles)
      particles.forEach((p) => {
        p.update()
        p.draw(ctx)
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return canvasRef
}
