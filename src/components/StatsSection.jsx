// ============================================================
// StatsSection — animated count-up counter cards
// ============================================================

import { useInView }            from 'react-intersection-observer'
import { useAnimatedCounter }   from '../hooks/useAnimatedCounter'
import { COUNTER_STATS }        from '../constants/stats'

// ── Sub-components ────────────────────────────────────────────

function CounterCard({ stat, index, inView }) {
  const counterRef = useAnimatedCounter(stat.value, stat.suffix, inView)

  return (
    <div
      className="glass card-hover"
      style={{
        borderRadius: '20px',
        padding: '32px 20px',
        textAlign: 'center',
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{stat.icon}</div>

      <div
        ref={counterRef}
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '2.5rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg,#C9A84C,#F0D18A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        0{stat.suffix}
      </div>

      <div style={{ fontSize: '0.85rem', color: '#9BA5B8', fontWeight: 500 }}>
        {stat.label}
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      id="stats"
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #060F1E 0%, #0A1628 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(26,58,114,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Our Impact</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Numbers That Speak
          </h2>
          <div className="divider-gold" style={{ margin: '0 auto 16px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Trusted by thousands of maritime professionals across India
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
          }}
        >
          {COUNTER_STATS.map((stat, index) => (
            <CounterCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
