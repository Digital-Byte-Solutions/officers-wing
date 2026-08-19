import { ChevronDown, Play, Award, Anchor, ShieldCheck, Compass, Globe } from 'lucide-react'
import { useParticleCanvas } from '../hooks/useParticleCanvas'
import { useTypingEffect }   from '../hooks/useTypingEffect'
import { useScrollTo }       from '../hooks/useScrollTo'
import { HERO_STATS }        from '../constants/stats'
import KeycapButton          from './KeycapButton'
import FluidText             from './FluidText'

const TYPING_WORDS = ['Stellar Career', 'Life at Sea', 'Global Future', 'Navy Dream']

const ACCREDITATIONS = [
  { label: 'DGS Approved', sub: 'Govt. of India', icon: <ShieldCheck size={16} /> },
  { label: 'MCA Certified', sub: 'UK Maritime', icon: <Award size={16} /> },
  { label: 'STCW 2010', sub: 'IMO Compliant', icon: <Compass size={16} /> },
  { label: 'IYT Worldwide', sub: 'Global Standards', icon: <Globe size={16} /> },
]

// ── Sub-components ────────────────────────────────────────────

function ParticleCanvas() {
  const canvasRef = useParticleCanvas()
  return <canvas ref={canvasRef} id="particles-canvas" />
}

function TypingHeadline() {
  const displayed = useTypingEffect(TYPING_WORDS)

  return (
    <span style={{ color: '#C9A84C', position: 'relative' }}>
      {displayed}
      <span className="typing-cursor">|</span>
    </span>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function HeroSection() {
  const scrollTo = useScrollTo()

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#020B18',
      }}
    >
      {/* High-res Ship Sunset Background Image (matching reference media_1787127432759) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/images/hero-ship.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.55,
          transform: 'scale(1.02)',
          transition: 'transform 10s ease',
        }}
      />

      {/* Atmospheric Multi-layer Gradient Overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(90deg, rgba(2, 11, 24, 0.95) 0%, rgba(2, 11, 24, 0.8) 45%, rgba(2, 11, 24, 0.4) 100%),
            linear-gradient(180deg, rgba(2, 11, 24, 0.7) 0%, transparent 40%, rgba(2, 11, 24, 0.95) 100%),
            radial-gradient(ellipse at 80% 40%, rgba(201, 168, 76, 0.12) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
        }}
      />

      <ParticleCanvas />

      {/* Main content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 24px 80px' }}>
        <div style={{ maxWidth: '760px' }}>

          {/* Top badge */}
          <div style={{ marginBottom: '28px' }}>
            <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
              <Award size={12} />
              India's #1 Merchant Navy Academy
            </span>
          </div>

          {/* Headline with Interactive Fluid Text */}
          <div style={{ marginBottom: '16px' }}>
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#fff',
                marginBottom: '4px',
              }}
            >
              Set Sail for a{' '}
              <span style={{ display: 'block' }}>
                <TypingHeadline />
              </span>
            </h1>

            {/* Interactive Fluid Light Title */}
            <div style={{ maxWidth: '680px', margin: '4px 0 16px -8px' }}>
              <FluidText
                text="MERCHANT NAVY"
                font="Space Grotesk, sans-serif"
                fontWeight="900"
                align="left"
                height={90}
                size={8}
                force={12}
                swirl={55}
                colorFade={5}
                colors={['#FFFFFF', '#F0D18A', '#C9A84C', '#38BDF8', '#818CF8']}
              />
            </div>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#9BA5B8',
              lineHeight: 1.8,
              marginBottom: '40px',
              maxWidth: '600px',
            }}
          >
            Officer's Wing Academy — where maritime dreams become reality.
            Industry-certified courses, expert faculty, and{' '}
            <strong style={{ color: '#C9A84C' }}>95% placement guarantee</strong>{' '}
            across top shipping lines worldwide.
          </p>

          {/* CTA buttons with 3D Keycap tactile response */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '60px', alignItems: 'center' }}>
            <KeycapButton
              variant="gold"
              size="md"
              icon={<Anchor size={18} />}
              onClick={() => scrollTo('#courses')}
            >
              Explore Courses
            </KeycapButton>
            <KeycapButton
              variant="purple"
              size="md"
              icon={<Play size={16} />}
              onClick={() => scrollTo('#eligibility')}
            >
              Check Eligibility
            </KeycapButton>
          </div>

          {/* Quick stats strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '36px' }}>
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#C9A84C', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: '#5C6780',
                    marginTop: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Accreditation Badges Strip (matching reference media_1787127432759) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              paddingTop: '20px',
              borderTop: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <span style={{ fontSize: '0.72rem', color: '#5C6780', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
              Recognized & Accredited by:
            </span>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {ACCREDITATIONS.map((acc) => (
                <div
                  key={acc.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(6, 15, 30, 0.7)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '0.75rem',
                    color: '#E8ECF5',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span style={{ color: '#C9A84C' }}>{acc.icon}</span>
                  <div>
                    <span style={{ fontWeight: 700 }}>{acc.label}</span>
                    <span style={{ color: '#9BA5B8', fontSize: '0.68rem', marginLeft: '4px' }}>({acc.sub})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-down button */}
      <button
        onClick={() => scrollTo('#stats')}
        className="scroll-down-btn"
        aria-label="Scroll to stats"
      >
        <ChevronDown size={20} />
      </button>

      {/* Wave separator */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,80 1440,30 L1440,80 L0,80 Z" fill="#060F1E" />
        </svg>
      </div>

      <style>{`
        .typing-cursor {
          position: absolute;
          right: -4px;
          top: 0;
          color: #C9A84C;
          animation: blink 1s infinite;
        }
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        .scroll-down-btn {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: none;
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A84C;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  )
}
