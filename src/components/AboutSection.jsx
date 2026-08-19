// ============================================================
// AboutSection — features grid + academy timeline
// ============================================================

import { useInView }          from 'react-intersection-observer'
import { Target, Users, CheckCircle, Zap } from 'lucide-react'
import { useScrollTo }        from '../hooks/useScrollTo'
import { ACADEMY_FEATURES, ACADEMY_TIMELINE } from '../constants/about'
import KeycapButton           from './KeycapButton'

// Map icon names to Lucide components
const ICON_MAP = { Target, Users, CheckCircle, Zap }

// ── Sub-components ────────────────────────────────────────────

function FeatureCard({ feature, index, inView }) {
  const Icon = ICON_MAP[feature.iconName]

  return (
    <div
      className="glass"
      style={{
        borderRadius: '14px',
        padding: '20px',
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease ${0.2 + index * 0.1}s`,
      }}
    >
      <div style={{ color: '#C9A84C', marginBottom: '10px' }}>
        <Icon size={22} />
      </div>
      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
        {feature.title}
      </div>
      <div style={{ fontSize: '0.78rem', color: '#5C6780', lineHeight: 1.6 }}>
        {feature.desc}
      </div>
    </div>
  )
}

function TimelineItem({ item, index, inView }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '28px',
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(20px)',
        transition: `all 0.5s ease ${0.4 + index * 0.1}s`,
      }}
    >
      {/* Dot */}
      <div
        style={{
          width: '56px',
          height: '32px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '12px',
            height: '12px',
            background: '#C9A84C',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(201,168,76,0.6)',
          }}
        />
      </div>

      {/* Content */}
      <div>
        <div
          style={{
            color: '#C9A84C',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '4px',
          }}
        >
          {item.year}
        </div>
        <div style={{ color: '#9BA5B8', fontSize: '0.875rem', lineHeight: 1.6 }}>
          {item.event}
        </div>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const scrollTo        = useScrollTo()

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad"
      style={{ background: 'var(--navy-950)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          right: '-200px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="about-grid">

          {/* ── Left: Text content ── */}
          <div
            style={{
              opacity:   inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s ease',
            }}
          >
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Shaping the Future of{' '}
              <span className="text-gold">Indian Seafarers</span>
            </h2>
            <div className="divider-gold" />

            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              For over 15 years, Officer's Wing Academy has been the lighthouse guiding
              thousands of young Indians toward rewarding careers at sea. Our holistic
              approach combines rigorous academics with real-world maritime simulations.
            </p>
            <p style={{ fontSize: '1rem', color: '#5C6780', lineHeight: 1.8, marginBottom: '36px' }}>
              Located in the heart of Mumbai — India's maritime capital — we offer
              comprehensive pre-sea training that transforms aspiring seafarers into
              competent, confident maritime officers ready for global deployment.
            </p>

            {/* Feature cards grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '36px',
              }}
            >
              {ACADEMY_FEATURES.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} inView={inView} />
              ))}
            </div>

            <KeycapButton
              variant="gold"
              size="md"
              onClick={() => scrollTo('#contact')}
            >
              Get in Touch
            </KeycapButton>
          </div>

          {/* ── Right: Timeline ── */}
          <div
            style={{
              opacity:   inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(145deg, rgba(13,32,69,0.5), rgba(10,22,40,0.8))',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '24px',
                padding: '40px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  marginBottom: '32px',
                  color: '#fff',
                }}
              >
                Our Journey
              </h3>

              <div style={{ position: 'relative' }}>
                {/* Vertical timeline line */}
                <div
                  style={{
                    position: 'absolute',
                    left: '28px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.1))',
                  }}
                />

                {ACADEMY_TIMELINE.map((item, index) => (
                  <TimelineItem key={item.year} item={item} index={index} inView={inView} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
