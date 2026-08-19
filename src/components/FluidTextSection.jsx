// ============================================================
// FluidTextSection — Interactive Fluid Light Text Studio
// Inspired by the Fluid Text variant editor with real-time physics controls
// ============================================================

import { useState } from 'react'
import { Sparkles, Sliders, RefreshCw, Layers, Zap } from 'lucide-react'
import FluidText from './FluidText'

const PRESET_TEXTS = [
  'FLUID TEXT',
  "OFFICER'S WING",
  'MERCHANT NAVY',
  'DECK OFFICER',
]

const COLOR_PALETTES = {
  'Maritime Gold': ['#FFFFFF', '#F0D18A', '#C9A84C', '#38BDF8', '#818CF8'],
  'Ocean Aurora': ['#FFFFFF', '#38BDF8', '#0EA5E9', '#06B6D4', '#6366F1'],
  'Golden Sun': ['#FFFFFF', '#FEF08A', '#F59E0B', '#EF4444', '#EC4899'],
  'Emerald Glow': ['#FFFFFF', '#86EFAC', '#22C55E', '#14B8A6', '#06B6D4'],
  'Crystal White': ['#FFFFFF', '#E2E8F0', '#94A3B8', '#64748B', '#38BDF8'],
}

export default function FluidTextSection() {
  const [text, setText] = useState('FLUID TEXT')
  const [paletteKey, setPaletteKey] = useState('Maritime Gold')
  const [size, setSize] = useState(7)
  const [force, setForce] = useState(10)
  const [swirl, setSwirl] = useState(50)
  const [colorFade, setColorFade] = useState(5)
  const [showControls, setShowControls] = useState(true)

  const handleReset = () => {
    setText('FLUID TEXT')
    setPaletteKey('Maritime Gold')
    setSize(7)
    setForce(10)
    setSwirl(50)
    setColorFade(5)
  }

  return (
    <section
      id="fluid-text"
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #020B18 0%, #060F1E 50%, #020B18 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, rgba(56,189,248,0.04) 50%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '14px', display: 'inline-flex' }}>
            <Sparkles size={13} /> Interactive Fluid Light
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Fluid Text <span className="text-gold">Simulation</span>
          </h2>
          <div className="divider-gold" style={{ margin: '0 auto 16px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '640px' }}>
            Hover or drag your cursor across the text to ignite fluid particle dynamics with swirl forces, glow dispersion, and spring physics.
          </p>
        </div>

        {/* Canvas Display Viewport */}
        <div
          className="glass"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.25)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            background: 'radial-gradient(circle at center, rgba(10, 25, 52, 0.8) 0%, rgba(2, 11, 24, 0.98) 100%)',
            position: 'relative',
          }}
        >
          {/* Top toolbar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(201, 168, 76, 0.12)',
              background: 'rgba(6, 15, 30, 0.6)',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#4ADE80',
                  boxShadow: '0 0 10px #4ADE80',
                }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', letterSpacing: '0.5px' }}>
                Fluid Text <span style={{ color: '#C9A84C', fontWeight: 500 }}>• Variant 1</span>
              </span>
            </div>

            {/* Quick Presets */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {PRESET_TEXTS.map((t) => (
                <button
                  key={t}
                  onClick={() => setText(t)}
                  style={{
                    background: text === t ? 'rgba(201,168,76,0.2)' : 'rgba(13,32,69,0.5)',
                    border: `1px solid ${text === t ? '#C9A84C' : 'rgba(201,168,76,0.15)'}`,
                    color: text === t ? '#F0D18A' : '#9BA5B8',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowControls(!showControls)}
              className="btn-outline"
              style={{
                padding: '6px 14px',
                fontSize: '0.78rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sliders size={13} /> {showControls ? 'Hide Controls' : 'Edit Physics'}
            </button>
          </div>

          {/* Fluid Canvas */}
          <div style={{ padding: '20px 10px' }}>
            <FluidText
              text={text}
              font="Inter, sans-serif"
              fontWeight="900"
              textColor="#FFFFFF"
              colors={COLOR_PALETTES[paletteKey]}
              size={size}
              force={force}
              swirl={swirl}
              colorFade={colorFade}
              height={260}
            />
          </div>

          {/* Hint Overlay */}
          <div
            style={{
              textAlign: 'center',
              padding: '8px 16px 16px',
              fontSize: '0.78rem',
              color: '#5C6780',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <Zap size={13} color="#C9A84C" /> Move your mouse / touch across the letters to swirl & disperse fluid light
          </div>
        </div>

        {/* Real-time Physics Control Panel (Matching Editor Parameters) */}
        {showControls && (
          <div
            className="glass"
            style={{
              marginTop: '24px',
              borderRadius: '20px',
              padding: '28px',
              border: '1px solid rgba(201,168,76,0.15)',
              background: 'rgba(6, 15, 30, 0.85)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                borderBottom: '1px solid rgba(201,168,76,0.1)',
                paddingBottom: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                <Layers size={16} color="#C9A84C" /> Live Fluid Physics Parameters
              </div>
              <button
                onClick={handleReset}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#9BA5B8',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9BA5B8')}
              >
                <RefreshCw size={12} /> Reset All Settings
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
              }}
            >
              {/* Custom Text Input */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Custom Text</label>
                <input
                  type="text"
                  className="form-input"
                  value={text}
                  onChange={(e) => setText(e.target.value.toUpperCase())}
                  placeholder="TYPE ANYTHING..."
                  maxLength={18}
                  style={{ padding: '8px 12px', fontSize: '0.85rem' }}
                />
              </div>

              {/* Color Palette Select */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Fluid Palette</label>
                <select
                  className="form-input"
                  value={paletteKey}
                  onChange={(e) => setPaletteKey(e.target.value)}
                  style={{ padding: '8px 12px', fontSize: '0.85rem' }}
                >
                  {Object.keys(COLOR_PALETTES).map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>

              {/* Particle Size (Density) */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: 0 }}>Size</label>
                  <span style={{ fontSize: '0.75rem', color: '#C9A84C', fontWeight: 700 }}>{size}</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="10"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#C9A84C', cursor: 'pointer' }}
                />
              </div>

              {/* Interaction Force */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: 0 }}>Force</label>
                  <span style={{ fontSize: '0.75rem', color: '#C9A84C', fontWeight: 700 }}>{force}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="20"
                  value={force}
                  onChange={(e) => setForce(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#C9A84C', cursor: 'pointer' }}
                />
              </div>

              {/* Swirl Vortex */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: 0 }}>Swirl</label>
                  <span style={{ fontSize: '0.75rem', color: '#C9A84C', fontWeight: 700 }}>{swirl}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={swirl}
                  onChange={(e) => setSwirl(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#C9A84C', cursor: 'pointer' }}
                />
              </div>

              {/* Color Fade */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: 0 }}>Color Fade</label>
                  <span style={{ fontSize: '0.75rem', color: '#C9A84C', fontWeight: 700 }}>{colorFade}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={colorFade}
                  onChange={(e) => setColorFade(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#C9A84C', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
