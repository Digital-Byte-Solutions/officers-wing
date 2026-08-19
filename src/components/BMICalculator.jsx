// ============================================================
// BMICalculator — metric/imperial BMI tool with navy status
// ============================================================

import { useState }              from 'react'
import { useInView }             from 'react-intersection-observer'
import { Scale, Activity, ChevronRight, Info } from 'lucide-react'
import { useScrollTo }           from '../hooks/useScrollTo'
import { calculateBMI, getBMICategory, getIdealWeightRange } from '../utils/bmi'
import { BMI_CATEGORIES, FITNESS_TIPS } from '../constants/bmi'
import KeycapButton              from './KeycapButton'

// ── Sub-components ────────────────────────────────────────────

function UnitToggle({ unit, onChange }) {
  return (
    <div
      style={{
        display: 'flex',
        background: 'rgba(13,32,69,0.5)',
        borderRadius: '10px',
        padding: '4px',
        marginBottom: '24px',
      }}
    >
      {['metric', 'imperial'].map((u) => (
        <button
          key={u}
          onClick={() => onChange(u)}
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            background: unit === u ? 'var(--gradient-gold)' : 'transparent',
            color: unit === u ? '#020B18' : '#9BA5B8',
            fontWeight: unit === u ? 700 : 400,
            fontSize: '0.85rem',
            fontFamily: 'Space Grotesk, sans-serif',
            textTransform: 'capitalize',
            transition: 'all 0.2s',
          }}
        >
          {u} {u === 'metric' ? '(cm / kg)' : '(in / lbs)'}
        </button>
      ))}
    </div>
  )
}

function BMIScaleBar({ bmiPercent, category }) {
  const normalStart = (18.5 / 40) * 100
  const normalEnd   = (25   / 40) * 100
  const overStart   = (25   / 40) * 100
  const overEnd     = (30   / 40) * 100

  return (
    <div style={{ marginBottom: '16px' }}>
      <div
        style={{
          position: 'relative',
          height: '10px',
          borderRadius: '5px',
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.1)',
          marginBottom: '4px',
        }}
      >
        {/* Normal zone */}
        <div
          style={{
            position: 'absolute',
            left: `${normalStart}%`,
            right: `${100 - normalEnd}%`,
            top: 0, bottom: 0,
            background: 'rgba(74,222,128,0.4)',
          }}
        />
        {/* Overweight zone */}
        <div
          style={{
            position: 'absolute',
            left: `${overStart}%`,
            right: `${100 - overEnd}%`,
            top: 0, bottom: 0,
            background: 'rgba(250,204,21,0.4)',
          }}
        />
        {/* Current BMI marker */}
        <div
          style={{
            position: 'absolute',
            left: `calc(${Math.min(bmiPercent, 97)}% - 5px)`,
            top: '-3px',
            width: '10px',
            height: '16px',
            background: category.color,
            borderRadius: '3px',
            boxShadow: `0 0 8px ${category.color}`,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.65rem',
          color: '#5C6780',
        }}
      >
        <span>Underweight &lt;18.5</span>
        <span>Normal 18.5–24.9</span>
        <span>Over 25+</span>
        <span>Obese 30+</span>
      </div>
    </div>
  )
}

function BMIResult({ bmi, category, idealWeight, unit }) {
  const bmiPercent = (bmi / 40) * 100

  return (
    <div
      style={{
        marginTop: '28px',
        background: category.bg,
        border: `1px solid ${category.border}`,
        borderRadius: '16px',
        padding: '24px',
      }}
    >
      {/* Score row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '0.78rem',
              color: '#9BA5B8',
              marginBottom: '4px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Your BMI
          </div>
          <div
            style={{
              fontSize: '3rem',
              fontWeight: 900,
              color: category.color,
              lineHeight: 1,
              fontFamily: 'Playfair Display, serif',
            }}
          >
            {bmi}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.8rem' }}>{category.icon}</div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: category.color }}>
            {category.label}
          </div>
        </div>
      </div>

      <BMIScaleBar bmiPercent={bmiPercent} category={category} />

      <div
        style={{
          fontSize: '0.85rem',
          color: '#9BA5B8',
          lineHeight: 1.6,
          marginBottom: '12px',
        }}
      >
        <strong style={{ color: category.color }}>Merchant Navy Status:</strong>{' '}
        {category.navyStatus}
      </div>

      {idealWeight && unit === 'metric' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            color: '#5C6780',
          }}
        >
          <Info size={12} />
          Ideal weight for your height:{' '}
          <strong style={{ color: '#C9A84C' }}>
            {idealWeight.min}–{idealWeight.max} kg
          </strong>
        </div>
      )}
    </div>
  )
}

function CategoryTable() {
  return (
    <div className="glass" style={{ borderRadius: '24px', padding: '32px', marginBottom: '24px' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>
        BMI Reference for Merchant Navy
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {BMI_CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              background: `${cat.color}10`,
              border: `1px solid ${cat.color}25`,
              borderRadius: '10px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: cat.color }}>{cat.range}</div>
              <div style={{ fontSize: '0.75rem', color: '#9BA5B8' }}>{cat.label}</div>
            </div>
            <div style={{ fontSize: '0.78rem', color: cat.color, fontWeight: 600 }}>
              {cat.tableStatus}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FitnessTipsPanel({ scrollTo }) {
  return (
    <div className="glass" style={{ borderRadius: '24px', padding: '32px' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
        🏋️ Tips to Improve Fitness
      </h3>
      {FITNESS_TIPS.map((tip, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '12px',
            fontSize: '0.875rem',
            color: '#9BA5B8',
          }}
        >
          <span style={{ color: '#C9A84C', flexShrink: 0 }}>→</span>
          {tip}
        </div>
      ))}
      <div style={{ marginTop: '12px' }}>
        <KeycapButton
          variant="gold"
          size="sm"
          icon={<ChevronRight size={16} />}
          onClick={() => scrollTo('#contact')}
        >
          Get Fitness Guidance
        </KeycapButton>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function BMICalculator() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const scrollTo        = useScrollTo()

  const [unit, setUnit]     = useState('metric')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState(null)

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit)
    setHeight('')
    setWeight('')
    setResult(null)
  }

  const handleCalculate = () => {
    const h = parseFloat(height)
    const w = parseFloat(weight)
    if (!h || !w) return

    const bmi      = calculateBMI(h, w, unit)
    const category = getBMICategory(bmi)
    const ideal    = unit === 'metric' ? getIdealWeightRange(h) : null

    setResult({ bmi, category, ideal })
  }

  return (
    <section
      id="bmi"
      ref={ref}
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #060F1E 0%, #0A1628 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Medical Fitness</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            BMI Calculator for <span className="text-gold">Merchant Navy</span>
          </h2>
          <div className="divider-gold" style={{ margin: '0 auto 16px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Check if your Body Mass Index meets the medical fitness standards
            required for merchant navy service
          </p>
        </div>

        <div className="bmi-grid">
          {/* ── Left: Calculator ── */}
          <div
            className="glass"
            style={{
              borderRadius: '24px',
              padding: '40px',
              opacity:   inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '48px', height: '48px',
                  background: 'rgba(201,168,76,0.1)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#C9A84C',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <Scale size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>BMI Calculator</h3>
            </div>

            <UnitToggle unit={unit} onChange={handleUnitChange} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">
                  Height ({unit === 'metric' ? 'cm' : 'inches'})
                </label>
                <input
                  className="form-input"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={unit === 'metric' ? 'e.g. 170' : 'e.g. 67'}
                />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">
                  Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                </label>
                <input
                  className="form-input"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unit === 'metric' ? 'e.g. 65' : 'e.g. 143'}
                />
              </div>
            </div>

            <div style={{ marginTop: '8px' }}>
              <KeycapButton
                variant="gold"
                size="md"
                icon={<Activity size={18} />}
                onClick={handleCalculate}
                style={{ width: '100%' }}
              >
                Calculate BMI
              </KeycapButton>
            </div>

            {result && (
              <BMIResult
                bmi={result.bmi}
                category={result.category}
                idealWeight={result.ideal}
                unit={unit}
              />
            )}
          </div>

          {/* ── Right: Reference + Tips ── */}
          <div
            style={{
              opacity:   inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            <CategoryTable />
            <FitnessTipsPanel scrollTo={scrollTo} />
          </div>
        </div>
      </div>

      <style>{`
        .bmi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .bmi-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
