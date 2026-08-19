// ============================================================
// EligibilityChecker — smart eligibility form with result card
// ============================================================

import { useState }                from 'react'
import { useInView }               from 'react-intersection-observer'
import { CheckCircle, XCircle, AlertCircle,
         ChevronRight, User, BookOpen, Calendar, Scale } from 'lucide-react'
import toast                       from 'react-hot-toast'
import { checkEligibilityApi }     from '../services/api'
import { checkEligibilityLocal }   from '../utils/eligibility'
import { COURSE_NAMES }            from '../constants/courses'
import { useScrollTo }             from '../hooks/useScrollTo'
import KeycapButton                from './KeycapButton'

// ── Constants ─────────────────────────────────────────────────

const INITIAL_FORM = {
  course: '', age: '', education: '', mathsMarks: '',
  physicsMarks: '', vision: '', hasCriminalRecord: '', name: '', phone: '',
}

const EDUCATION_OPTIONS = [
  { value: 'below8th',  label: 'Below 8th' },
  { value: '8th',       label: '8th Pass' },
  { value: '10th',      label: '10th Pass' },
  { value: '12th_pcm',  label: '12th (PCM)' },
  { value: '12th_pcb',  label: '12th (PCB/Other)' },
  { value: 'diploma',   label: 'Diploma' },
  { value: 'graduate',  label: 'Graduate' },
]

const INFO_CARDS = [
  { icon: <Calendar size={18} />, title: 'Age Criteria',           desc: 'Different courses have specific age windows' },
  { icon: <BookOpen size={18} />, title: 'Education Qualification', desc: 'From 10th pass to engineering graduates' },
  { icon: <Scale size={18} />,    title: 'Medical Fitness',         desc: 'Vision, BMI, and general health requirements' },
  { icon: <User size={18} />,     title: 'Personal Eligibility',    desc: 'Background check and character requirements' },
]

// ── Result indicator icons ────────────────────────────────────

function ResultIcon({ eligible }) {
  if (eligible === true)    return <CheckCircle size={40} color="#4ADE80" />
  if (eligible === 'maybe') return <AlertCircle size={40} color="#FACC15" />
  return                           <XCircle     size={40} color="#F87171" />
}

function resultColor(eligible) {
  if (eligible === true)    return '#4ADE80'
  if (eligible === 'maybe') return '#FACC15'
  return                           '#F87171'
}

function resultTitle(eligible) {
  if (eligible === true)    return "Congratulations! You're Eligible!"
  if (eligible === 'maybe') return 'Conditionally Eligible'
  return                           'Currently Not Eligible'
}

// ── Sub-components ────────────────────────────────────────────

function EligibilityResult({ result, scrollTo }) {
  if (!result) return null

  const color = resultColor(result.eligible)

  return (
    <div
      style={{
        background: `rgba(${result.eligible === true ? '34,197,94' : result.eligible === 'maybe' ? '234,179,8' : '239,68,68'},0.08)`,
        border: `1px solid ${color}40`,
        borderRadius: '20px',
        padding: '32px',
        marginTop: '30px',
      }}
    >
      {/* Status header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
        <ResultIcon eligible={result.eligible} />
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color,
              fontFamily: 'Playfair Display, serif',
            }}
          >
            {resultTitle(result.eligible)}
          </div>
          <div style={{ color: '#9BA5B8', fontSize: '0.9rem', marginTop: '4px' }}>
            for <strong style={{ color: '#fff' }}>{result.course}</strong>
          </div>
        </div>
      </div>

      {/* Reasons list */}
      {result.reasons?.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#9BA5B8',
              marginBottom: '10px',
            }}
          >
            Key Points
          </div>
          {result.reasons.map((reason, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '8px',
                fontSize: '0.875rem',
                color: '#9BA5B8',
              }}
            >
              <span style={{ color, marginTop: '2px', flexShrink: 0 }}>
                <ResultIcon eligible={result.eligible} />
              </span>
              {reason}
            </div>
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
        {(result.eligible === true || result.eligible === 'maybe') && (
          <KeycapButton
            variant="gold"
            size="sm"
            icon={<ChevronRight size={16} />}
            onClick={() => scrollTo('#contact')}
          >
            Apply Now
          </KeycapButton>
        )}
        <KeycapButton
          variant="purple"
          size="sm"
          onClick={() => (window.location.href = 'tel:+919999999999')}
        >
          Talk to Counselor
        </KeycapButton>
      </div>
    </div>
  )
}

function InfoCard({ card }) {
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C9A84C',
          flexShrink: 0,
        }}
      >
        {card.icon}
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', marginBottom: '2px' }}>
          {card.title}
        </div>
        <div style={{ fontSize: '0.8rem', color: '#5C6780' }}>{card.desc}</div>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function EligibilityChecker() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const scrollTo        = useScrollTo()

  const [form, setForm]       = useState(INITIAL_FORM)
  const [result, setResult]   = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.course || !form.age || !form.education) {
      toast.error('Please fill all required fields.')
      return
    }

    setLoading(true)
    try {
      const data = await checkEligibilityApi(form)
      setResult(data)
    } catch {
      // Fallback to client-side logic when backend is unavailable
      setResult(checkEligibilityLocal(form))
    } finally {
      setLoading(false)
      if (form.name && form.phone) {
        toast.success("Eligibility checked! Our team will contact you shortly.")
      }
    }
  }

  return (
    <section
      id="eligibility"
      ref={ref}
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #020B18 0%, #060F1E 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          left: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="eligibility-grid">

          {/* ── Left: Info panel ── */}
          <div
            style={{
              opacity:   inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s ease',
            }}
          >
            <span className="section-label">Eligibility Tool</span>
            <h2 className="section-title">
              Am I Eligible for{' '}
              <span className="text-gold">Merchant Navy?</span>
            </h2>
            <div className="divider-gold" />
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Use our smart eligibility checker to instantly find out if you qualify
              for your chosen merchant navy course.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {INFO_CARDS.map((card) => (
                <InfoCard key={card.title} card={card} />
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="glass"
            style={{
              borderRadius: '24px',
              padding: '40px',
              opacity:   inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: '28px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <CheckCircle size={22} color="#C9A84C" /> Eligibility Checker
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Course select */}
              <div className="form-group">
                <label className="form-label">Select Course *</label>
                <select
                  className="form-input"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select a course --</option>
                  {COURSE_NAMES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Age + Education */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Age *</label>
                  <input
                    className="form-input"
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="e.g. 20"
                    min="15"
                    max="35"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Education *</label>
                  <select
                    className="form-input"
                    name="education"
                    value={form.education}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    {EDUCATION_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* DNS-only: PCM marks */}
              {form.course === 'DNS Program' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Maths %</label>
                    <input
                      className="form-input"
                      type="number"
                      name="mathsMarks"
                      value={form.mathsMarks}
                      onChange={handleChange}
                      placeholder="e.g. 65"
                      min="0"
                      max="100"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Physics %</label>
                    <input
                      className="form-input"
                      type="number"
                      name="physicsMarks"
                      value={form.physicsMarks}
                      onChange={handleChange}
                      placeholder="e.g. 60"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              )}

              {/* Vision + Criminal record */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Vision</label>
                  <select className="form-input" name="vision" value={form.vision} onChange={handleChange}>
                    <option value="">-- Select --</option>
                    <option value="normal">Normal (6/6)</option>
                    <option value="glasses_low">Glasses (low power)</option>
                    <option value="glasses_high">Glasses (high power)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Criminal Record?</label>
                  <select className="form-input" name="hasCriminalRecord" value={form.hasCriminalRecord} onChange={handleChange}>
                    <option value="">-- Select --</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </div>

              {/* Optional contact */}
              <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '20px', marginBottom: '4px' }}>
                <div style={{ fontSize: '0.78rem', color: '#5C6780', marginBottom: '16px' }}>
                  Optional — get personalized guidance from our team
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '10px' }}>
                <KeycapButton
                  variant="gold"
                  size="md"
                  icon={<CheckCircle size={18} />}
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{ width: '100%' }}
                >
                  {loading ? 'Checking...' : 'Check My Eligibility'}
                </KeycapButton>
              </div>
            </form>

            <EligibilityResult result={result} scrollTo={scrollTo} />
          </div>
        </div>
      </div>

      <style>{`
        .eligibility-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .eligibility-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
