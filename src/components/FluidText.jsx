// ============================================================
// FluidText — Interactive Canvas Fluid Particle Light Text
// Inspired by fluid dynamics text simulation (Force, Swirl, Fluid Light Glow)
// ============================================================

import { useEffect, useRef, useState } from 'react'

const DEFAULT_COLORS = [
  '#FFFFFF', // Pure Light
  '#F0D18A', // Light Gold
  '#C9A84C', // Rich Maritime Gold
  '#38BDF8', // Cyan Wave
  '#818CF8', // Deep Indigo Aura
]

export default function FluidText({
  text = 'FLUID TEXT',
  font = 'Inter, sans-serif',
  fontWeight = '900',
  textColor = '#FFFFFF',
  colors = DEFAULT_COLORS,
  size = 7,
  force = 10,
  swirl = 50,
  colorFade = 5,
  height = 140,
  fontSize: customFontSize = null,
  align = 'center',
  interactive = true,
  className = '',
  style = {},
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999, vx: 0, vy: 0, lastX: 0, lastY: 0, isHovered: false })
  const animFrameId = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    let width = 0
    let heightPx = 0

    // Particle simulation state
    class FluidParticle {
      constructor(ox, oy, colorIndex) {
        this.ox = ox
        this.oy = oy
        this.x = ox + (Math.random() - 0.5) * 8
        this.y = oy + (Math.random() - 0.5) * 8
        this.vx = 0
        this.vy = 0
        this.baseSize = Math.max(1.2, size * 0.35)
        this.size = this.baseSize
        this.colorIndex = colorIndex % colors.length
        this.baseColor = textColor
        this.activeColor = colors[this.colorIndex]
        this.colorBlend = 0
        this.friction = 0.88
        this.spring = 0.06
        this.mass = Math.random() * 0.4 + 0.8
      }

      update(mouse, radius, pushForce, swirlFactor, fadeSpeed) {
        // Distance to cursor
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        const dist = Math.hypot(dx, dy)

        if (mouse.isHovered && dist < radius && dist > 0) {
          const power = (1 - dist / radius) * (pushForce * 0.75)
          const angle = Math.atan2(dy, dx)

          // Radial repulsion
          const pushX = Math.cos(angle) * power * 2.2
          const pushY = Math.sin(angle) * power * 2.2

          // Perpendicular swirl vortex
          const swirlRad = (swirlFactor / 50) * power * 2.6
          const swirlX = -Math.sin(angle) * swirlRad
          const swirlY = Math.cos(angle) * swirlRad

          // Mouse velocity drag influence
          const mouseDragX = mouse.vx * 0.15 * (1 - dist / radius)
          const mouseDragY = mouse.vy * 0.15 * (1 - dist / radius)

          this.vx += (pushX + swirlX + mouseDragX) / this.mass
          this.vy += (pushY + swirlY + mouseDragY) / this.mass

          // Blend into vibrant fluid light color
          this.colorBlend = Math.min(1, this.colorBlend + 0.3)
          this.size = this.baseSize * (1 + (1 - dist / radius) * 1.3)
        } else {
          // Return to rest
          this.colorBlend = Math.max(0, this.colorBlend - 0.02 * (fadeSpeed / 5))
          this.size += (this.baseSize - this.size) * 0.1
        }

        // Spring return to origin
        const homeDx = this.ox - this.x
        const homeDy = this.oy - this.y
        this.vx += homeDx * this.spring
        this.vy += homeDy * this.spring

        // Apply friction
        this.vx *= this.friction
        this.vy *= this.friction

        this.x += this.vx
        this.y += this.vy
      }

      draw(context) {
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)

        if (this.colorBlend > 0.05) {
          context.fillStyle = this.activeColor
          context.globalAlpha = Math.min(1, 0.7 + this.colorBlend * 0.3)
          context.shadowColor = this.activeColor
          context.shadowBlur = this.colorBlend * 8
        } else {
          context.fillStyle = this.baseColor
          context.globalAlpha = 0.85
          context.shadowBlur = 0
        }

        context.fill()
      }
    }

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      heightPx = rect.height || height

      canvas.width = width * dpr
      canvas.height = heightPx * dpr
      ctx.scale(dpr, dpr)

      // Offscreen canvas for text rendering & pixel reading
      const offCanvas = document.createElement('canvas')
      offCanvas.width = width
      offCanvas.height = heightPx
      const offCtx = offCanvas.getContext('2d')
      if (!offCtx) return

      // Responsive font size
      const maxFontSize = customFontSize || Math.min(width * 0.18, heightPx * 0.55, 96)
      const fontSize = Math.max(24, maxFontSize)

      offCtx.fillStyle = '#FFFFFF'
      offCtx.font = `${fontWeight} ${fontSize}px ${font}`
      offCtx.textAlign = align === 'left' ? 'left' : 'center'
      offCtx.textBaseline = 'middle'
      const startX = align === 'left' ? 10 : width / 2
      offCtx.fillText(text, startX, heightPx / 2)

      const imgData = offCtx.getImageData(0, 0, width, heightPx).data
      const particles = []

      // Sample density step based on size setting & resolution
      const step = Math.max(3, Math.round(11 - size * 0.7))

      let colorIdx = 0
      for (let y = 0; y < heightPx; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4
          const alpha = imgData[index + 3]

          if (alpha > 128) {
            particles.push(new FluidParticle(x, y, colorIdx++))
          }
        }
      }

      particlesRef.current = particles
    }

    initParticles()

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, heightPx)

      // Light glow composite operation
      ctx.globalCompositeOperation = 'source-over'

      const mouse = mouseRef.current
      const interactionRadius = Math.max(60, force * 10)

      const particles = particlesRef.current
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse, interactionRadius, force, swirl, colorFade)
        particles[i].draw(ctx)
      }

      // Reset alpha & shadow
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      animFrameId.current = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      initParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [text, font, fontWeight, textColor, colors, size, force, swirl, colorFade, height])

  // Mouse / Pointer handlers
  const handlePointerMove = (e) => {
    if (!interactive || !canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    const currentX = e.clientX - rect.left
    const currentY = e.clientY - rect.top

    const mouse = mouseRef.current
    mouse.vx = currentX - mouse.lastX
    mouse.vy = currentY - mouse.lastY
    mouse.lastX = currentX
    mouse.lastY = currentY
    mouse.x = currentX
    mouse.y = currentY
    mouse.isHovered = true
  }

  const handlePointerLeave = () => {
    const mouse = mouseRef.current
    mouse.isHovered = false
    mouse.x = -9999
    mouse.y = -9999
    mouse.vx = 0
    mouse.vy = 0
  }

  return (
    <div
      ref={containerRef}
      className={`fluid-text-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'crosshair',
        userSelect: 'none',
        ...style,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  )
}
