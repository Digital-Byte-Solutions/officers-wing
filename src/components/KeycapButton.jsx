// ============================================================
// KeycapButton — 3D Mechanical Keycap Button with Prism Glow & Spring Physics
// Inspired by Originkit Keycap Button (Isometric 3D, Prism Glow, Spring Transition)
// ============================================================

import { useState, useRef } from 'react'

const VARIANTS = {
  purple: {
    baseBg: '#120B24',
    capTop: 'linear-gradient(145deg, #2A174E 0%, #150A2E 100%)',
    border: '#5B21B6',
    text: '#D8B4FE',
    glow: '#A05CFF',
    shadowBase: '#070312',
    highlight: 'rgba(216, 180, 254, 0.4)',
  },
  gold: {
    baseBg: '#1A1408',
    capTop: 'linear-gradient(145deg, #3D2D10 0%, #1F1505 100%)',
    border: '#B45309',
    text: '#FDE68A',
    glow: '#F59E0B',
    shadowBase: '#0D0903',
    highlight: 'rgba(254, 240, 138, 0.4)',
  },
  cyan: {
    baseBg: '#081926',
    capTop: 'linear-gradient(145deg, #0C3654 0%, #051A2B 100%)',
    border: '#0284C7',
    text: '#BAE6FD',
    glow: '#38BDF8',
    shadowBase: '#030C14',
    highlight: 'rgba(186, 230, 253, 0.4)',
  },
  emerald: {
    baseBg: '#061D14',
    capTop: 'linear-gradient(145deg, #0D402B 0%, #062116 100%)',
    border: '#059669',
    text: '#A7F3D0',
    glow: '#10B981',
    shadowBase: '#020F0A',
    highlight: 'rgba(167, 243, 208, 0.4)',
  },
}

export default function KeycapButton({
  children = 'KEY CAP',
  variant = 'gold',
  isometric = false,
  size = 'md', // 'sm' | 'md' | 'lg'
  glowColor,
  icon,
  onClick,
  disabled = false,
  className = '',
  style = {},
}) {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const btnRef = useRef(null)

  const theme = VARIANTS[variant] || VARIANTS.gold
  const activeGlow = glowColor || theme.glow

  const sizeConfigs = {
    sm: { padding: '12px 24px', fontSize: '0.8rem', radius: '16px', depth: 5, iconSize: 14 },
    md: { padding: '16px 36px', fontSize: '0.95rem', radius: '20px', depth: 7, iconSize: 18 },
    lg: { padding: '22px 48px', fontSize: '1.15rem', radius: '24px', depth: 9, iconSize: 22 },
  }

  const cfg = sizeConfigs[size] || sizeConfigs.md
  const currentDepth = isPressed ? 2 : isHovered ? cfg.depth + 2 : cfg.depth

  const handleMouseMove = (e) => {
    if (!btnRef.current || isPressed || isometric) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setTilt({
      x: (y / (rect.height / 2)) * -6,
      y: (x / (rect.width / 2)) * 6,
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPressed(false)
    setTilt({ x: 0, y: 0 })
  }

  // Base transforms
  const transform = isometric
    ? isPressed
      ? 'perspective(1000px) rotateX(49deg) rotateZ(-37deg) translateZ(-4px) scale(0.97)'
      : isHovered
      ? 'perspective(1000px) rotateX(49deg) rotateZ(-37deg) translateZ(8px) scale(1.03)'
      : 'perspective(1000px) rotateX(49deg) rotateZ(-37deg)'
    : isPressed
    ? 'translateY(4px) scale(0.98)'
    : `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? -3 : 0}px)`

  return (
    <button
      ref={btnRef}
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`keycap-button ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: cfg.padding,
        fontSize: cfg.fontSize,
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        fontWeight: 800,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: theme.text,
        background: theme.capTop,
        borderRadius: cfg.radius,
        border: `1.5px solid ${theme.border}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        outline: 'none',
        transform,
        transition: isPressed
          ? 'transform 0.08s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.08s'
          : 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s, border-color 0.2s',
        // 3D Keycap layered extrusion & bottom prism glow
        boxShadow: `
          0 ${currentDepth}px 0 ${theme.shadowBase},
          0 ${currentDepth + 1}px 0 ${theme.border}88,
          0 ${currentDepth + 4}px 12px rgba(0, 0, 0, 0.7),
          0 ${isHovered ? currentDepth + 10 : currentDepth + 4}px ${isHovered ? 30 : 18}px ${activeGlow}${isHovered ? '66' : '33'},
          inset 0 1px 1px ${theme.highlight},
          inset 0 -2px 4px rgba(0, 0, 0, 0.6)
        `,
        ...style,
      }}
    >
      {/* Top bevel subtle edge highlight */}
      <span
        style={{
          position: 'absolute',
          top: '3px',
          left: '8px',
          right: '8px',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${theme.highlight}, transparent)`,
          pointerEvents: 'none',
        }}
      />

      {/* Optional icon */}
      {icon && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: isHovered ? '#fff' : theme.text,
            transition: 'color 0.2s',
          }}
        >
          {icon}
        </span>
      )}

      {/* Button text */}
      <span
        style={{
          position: 'relative',
          zIndex: 2,
          textShadow: isHovered ? `0 0 12px ${activeGlow}` : `0 1px 2px rgba(0,0,0,0.8)`,
          transition: 'text-shadow 0.2s, color 0.2s',
          color: isHovered ? '#FFFFFF' : theme.text,
        }}
      >
        {children}
      </span>
    </button>
  )
}
