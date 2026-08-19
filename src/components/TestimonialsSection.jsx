// ============================================================
// TestimonialsSection — auto-rotating carousel with thumbnails
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { useInView }                   from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { TESTIMONIALS }                from '../constants/testimonials'

const AUTOPLAY_INTERVAL_MS = 5000

// ── Sub-components ────────────────────────────────────────────

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} fill="#C9A84C" color="#C9A84C" />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, isAnimating }) {
  const t = testimonial

  return (
    <div
      style={{
        background: 'linear-gradient(145deg, rgba(13,32,69,0.7), rgba(6,15,30,0.9))',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '28px',
        padding: 'clamp(30px, 5vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '900px',
        margin: '0 auto 40px',
      }}
    >
      {/* Decorative quote mark */}
      <Quote
        size={80}
        style={{
          position: 'absolute',
          top: '-10px',
          left: '30px',
          color: 'rgba(201,168,76,0.08)',
        }}
      />

      <div
        style={{
          opacity:   isAnimating ? 0 : 1,
          transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
        }}
      >
        <StarRating count={t.rating} />

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.8,
            color: '#E8ECF5',
            marginBottom: '36px',
            fontStyle: 'italic',
            position: 'relative',
            zIndex: 1,
          }}
        >
          "{t.text}"
        </p>

        {/* Author row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.1))',
                border: '2px solid rgba(201,168,76,0.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
              }}
            >
              {t.image}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>{t.name}</div>
              <div style={{ color: '#C9A84C', fontSize: '0.85rem', fontWeight: 600 }}>{t.role}</div>
              <div style={{ color: '#5C6780', fontSize: '0.78rem' }}>
                {t.company} • {t.course}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '1.2rem' }}>{t.salary}</div>
            <div style={{ color: '#5C6780', fontSize: '0.78rem' }}>📍 {t.location}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '44px',
        height: '44px',
        background: 'rgba(201,168,76,0.1)',
        border: '1px solid rgba(201,168,76,0.3)',
        borderRadius: '50%',
        cursor: 'pointer',
        color: '#C9A84C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.2)' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)' }}
    >
      {children}
    </button>
  )
}

function DotNav({ total, current, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            width: i === current ? '28px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: i === current ? '#C9A84C' : 'rgba(201,168,76,0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  )
}

function ThumbnailRow({ testimonials, current, onSelect }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginTop: '32px',
        flexWrap: 'wrap',
      }}
    >
      {testimonials.map((tm, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            background: i === current ? 'rgba(201,168,76,0.15)' : 'rgba(13,32,69,0.5)',
            border: `1px solid ${i === current ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.1)'}`,
            borderRadius: '14px',
            padding: '10px 16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.2s',
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>{tm.image}</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: i === current ? '#C9A84C' : '#9BA5B8' }}>
              {tm.name}
            </div>
            <div style={{ fontSize: '0.68rem', color: '#5C6780' }}>{tm.course}</div>
          </div>
        </button>
      ))}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const [current, setCurrent]       = useState(0)
  const [isAnimating, setAnimating] = useState(false)
  const autoPlayRef                 = useRef(null)

  const goTo = (index) => {
    if (isAnimating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 400)
  }

  const goNext = () => goTo((current + 1) % TESTIMONIALS.length)
  const goPrev = () => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(goNext, AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(autoPlayRef.current)
  }, [current])

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #020B18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Success Stories</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Hear From Our <span className="text-gold">Alumni</span>
          </h2>
          <div className="divider-gold" style={{ margin: '0 auto' }} />
        </div>

        {/* Carousel */}
        <div
          style={{
            opacity:   inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease',
          }}
        >
          <TestimonialCard testimonial={TESTIMONIALS[current]} isAnimating={isAnimating} />

          {/* Navigation controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <NavButton onClick={goPrev}><ChevronLeft size={20} /></NavButton>
            <DotNav total={TESTIMONIALS.length} current={current} onSelect={goTo} />
            <NavButton onClick={goNext}><ChevronRight size={20} /></NavButton>
          </div>

          <ThumbnailRow testimonials={TESTIMONIALS} current={current} onSelect={goTo} />
        </div>
      </div>
    </section>
  )
}
