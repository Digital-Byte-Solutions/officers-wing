// ============================================================
// ButtonShowcase — Interactive Originkit Button Studio
// Features Keycap Buttons (Isometric 3D, Spring Press, Glow Variants)
// ============================================================

import { useState } from 'react'
import { Sparkles, Anchor, ArrowRight, ShieldCheck, Zap, Compass, RotateCcw } from 'lucide-react'
import KeycapButton from './KeycapButton'

export default function ButtonShowcase() {
  const [activeTab, setActiveTab] = useState('Keycap Button')
  const [keycapVariant, setKeycapVariant] = useState('purple')
  const [isIsometric, setIsIsometric] = useState(false)
  const [buttonSize, setButtonSize] = useState('md')
  const [customLabel, setCustomLabel] = useState('KEY CAP')

  const BUTTON_TYPES = [
    'Keycap Button',
    'Neon Glow Button',
    'Light Glass Button',
    'Magnetic Hover Button',
    'Orbit Border Button',
    'Liquid Carve Button',
  ]

  return (
    <section
      id="buttons-studio"
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #020B18 0%, #060F1E 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {/* Background ambient prism glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(160,92,255,0.08) 0%, rgba(201,168,76,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '14px', display: 'inline-flex' }}>
            <Sparkles size={13} /> Tactile UI Components
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            3D Keycap & <span className="text-gold">Interactive Buttons</span>
          </h2>
          <div className="divider-gold" style={{ margin: '0 auto 16px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '640px' }}>
            Experience mechanical keyboard tactile spring physics, isometric 3D prism depth, and glowing reactive buttons.
          </p>
        </div>

        {/* Button Studio Box */}
        <div
          className="glass"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.25)',
            boxShadow: '0 25px 70px rgba(0,0,0,0.6)',
            background: 'radial-gradient(ellipse at center, rgba(13,25,48,0.7) 0%, rgba(2,11,24,0.95) 100%)',
          }}
        >
          {/* Studio Top Navigation */}
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid rgba(201,168,76,0.15)',
              background: 'rgba(6,15,30,0.8)',
              overflowX: 'auto',
            }}
          >
            {BUTTON_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                style={{
                  padding: '16px 22px',
                  background: activeTab === type ? 'rgba(201,168,76,0.12)' : 'transparent',
                  border: 'none',
                  borderBottom: activeTab === type ? '2px solid #C9A84C' : '2px solid transparent',
                  color: activeTab === type ? '#F0D18A' : '#9BA5B8',
                  fontWeight: activeTab === type ? 700 : 500,
                  fontSize: '0.85rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Interactive Playground & Stage */}
          <div
            style={{
              padding: '60px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '340px',
              position: 'relative',
            }}
          >
            {/* Display according to active tab */}
            {activeTab === 'Keycap Button' && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '36px',
                }}
              >
                <div style={{ height: isIsometric ? '160px' : 'auto', display: 'flex', alignItems: 'center' }}>
                  <KeycapButton
                    variant={keycapVariant}
                    isometric={isIsometric}
                    size={buttonSize}
                    icon={<Zap size={buttonSize === 'lg' ? 20 : 16} />}
                  >
                    {customLabel || 'KEY CAP'}
                  </KeycapButton>
                </div>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <KeycapButton variant="purple" size="sm">
                    PURPLE PRISM
                  </KeycapButton>
                  <KeycapButton variant="gold" size="sm" icon={<Anchor size={14} />}>
                    MARITIME GOLD
                  </KeycapButton>
                  <KeycapButton variant="cyan" size="sm" icon={<Compass size={14} />}>
                    CYAN VOYAGER
                  </KeycapButton>
                  <KeycapButton variant="emerald" size="sm" icon={<ShieldCheck size={14} />}>
                    DGS APPROVED
                  </KeycapButton>
                </div>
              </div>
            )}

            {activeTab === 'Neon Glow Button' && (
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  className="btn-neon-purple"
                  style={{
                    padding: '16px 36px',
                    borderRadius: '50px',
                    background: 'transparent',
                    border: '2px solid #A05CFF',
                    color: '#D8B4FE',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 0 25px rgba(160,92,255,0.4), inset 0 0 15px rgba(160,92,255,0.2)',
                    transition: 'all 0.3s',
                  }}
                >
                  NEON PURPLE GLOW
                </button>
                <button
                  className="btn-neon-gold"
                  style={{
                    padding: '16px 36px',
                    borderRadius: '50px',
                    background: 'transparent',
                    border: '2px solid #C9A84C',
                    color: '#F0D18A',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 0 25px rgba(201,168,76,0.4), inset 0 0 15px rgba(201,168,76,0.2)',
                    transition: 'all 0.3s',
                  }}
                >
                  MARITIME GOLD GLOW
                </button>
              </div>
            )}

            {activeTab === 'Light Glass Button' && (
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  style={{
                    padding: '16px 36px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Sparkles size={18} color="#F0D18A" /> Frosted Glass Prism
                </button>
              </div>
            )}

            {activeTab === 'Magnetic Hover Button' && (
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  className="btn-primary"
                  style={{
                    padding: '18px 40px',
                    fontSize: '1.05rem',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(201,168,76,0.4)',
                  }}
                >
                  <Compass size={18} /> Magnetic Navigator <ArrowRight size={16} />
                </button>
              </div>
            )}

            {activeTab === 'Orbit Border Button' && (
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button
                  style={{
                    padding: '16px 36px',
                    borderRadius: '14px',
                    background: '#060F1E',
                    border: '1px solid #C9A84C',
                    color: '#F0D18A',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  Orbiting Border Light
                </button>
              </div>
            )}

            {activeTab === 'Liquid Carve Button' && (
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  style={{
                    padding: '16px 40px',
                    borderRadius: '50px',
                    background: 'linear-gradient(90deg, #1E1B4B 0%, #312E81 50%, #1E1B4B 100%)',
                    border: '1px solid #6366F1',
                    color: '#E0E7FF',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 8px 30px rgba(99,102,241,0.3)',
                  }}
                >
                  Liquid Wave Carve
                </button>
              </div>
            )}
          </div>

          {/* Keycap Customizer Panel (when Keycap is selected) */}
          {activeTab === 'Keycap Button' && (
            <div
              style={{
                padding: '24px 32px',
                background: 'rgba(6, 15, 30, 0.9)',
                borderTop: '1px solid rgba(201, 168, 76, 0.15)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                alignItems: 'center',
              }}
            >
              {/* Text Input */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Keycap Label</label>
                <input
                  type="text"
                  className="form-input"
                  value={customLabel}
                  onChange={(e) => setCustomLabel(e.target.value.toUpperCase())}
                  placeholder="KEY CAP"
                  maxLength={14}
                  style={{ padding: '8px 12px', fontSize: '0.85rem' }}
                />
              </div>

              {/* Theme Variant */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Color Prism</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['purple', 'gold', 'cyan', 'emerald'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setKeycapVariant(v)}
                      style={{
                        flex: 1,
                        padding: '8px 0',
                        borderRadius: '8px',
                        border: keycapVariant === v ? '2px solid #fff' : '1px solid rgba(255,255,255,0.1)',
                        background:
                          v === 'purple'
                            ? '#5B21B6'
                            : v === 'gold'
                            ? '#B45309'
                            : v === 'cyan'
                            ? '#0284C7'
                            : '#059669',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        fontSize: '0.72rem',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3D Isometric Tilt Toggle */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Perspective View</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setIsIsometric(false)}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: !isIsometric ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.15)',
                      background: !isIsometric ? 'rgba(201,168,76,0.2)' : 'rgba(13,32,69,0.5)',
                      color: !isIsometric ? '#F0D18A' : '#9BA5B8',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                    }}
                  >
                    Tactile Front
                  </button>
                  <button
                    onClick={() => setIsIsometric(true)}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: isIsometric ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.15)',
                      background: isIsometric ? 'rgba(201,168,76,0.2)' : 'rgba(13,32,69,0.5)',
                      color: isIsometric ? '#F0D18A' : '#9BA5B8',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                    }}
                  >
                    3D Isometric
                  </button>
                </div>
              </div>

              {/* Size */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Size</label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['sm', 'md', 'lg'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setButtonSize(s)}
                      style={{
                        flex: 1,
                        padding: '8px 0',
                        borderRadius: '8px',
                        border: buttonSize === s ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.15)',
                        background: buttonSize === s ? 'rgba(201,168,76,0.2)' : 'rgba(13,32,69,0.5)',
                        color: buttonSize === s ? '#F0D18A' : '#9BA5B8',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
