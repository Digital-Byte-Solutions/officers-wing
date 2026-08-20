// ============================================================
// CoursesSection — expandable course cards
// ============================================================

import { useState }           from 'react'
import { useInView }          from 'react-intersection-observer'
import { Clock, Users, IndianRupee, Award, ChevronRight,
         GraduationCap, Anchor, Zap, Ship }  from 'lucide-react'
import { useScrollTo }        from '../hooks/useScrollTo'
import { COURSES }            from '../constants/courses'
import KeycapButton           from './KeycapButton'

// Map icon name strings → Lucide components
const ICON_MAP = { Anchor, GraduationCap, Zap, Ship }

// ── Sub-components ────────────────────────────────────────────

function CourseIcon({ iconName, color, colorLight }) {
  const Icon = ICON_MAP[iconName]
  return (
    <div
      style={{
        width: '56px',
        height: '56px',
        background: colorLight,
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color,
        border: `1px solid ${color}30`,
      }}
    >
      <Icon size={28} />
    </div>
  )
}

function CourseBadge({ badge, badgeColor }) {
  return (
    <span
      className="badge"
      style={{
        background: badgeColor + '20',
        color: badgeColor,
        border: `1px solid ${badgeColor}40`,
        fontSize: '0.7rem',
      }}
    >
      {badge}
    </span>
  )
}

function CourseInfoGrid({ course }) {
  const items = [
    { icon: <Clock size={13} />,        label: course.duration },
    { icon: <Users size={13} />,        label: course.eligibility },
    { icon: <Award size={13} />,        label: course.ageLimit },
    { icon: <IndianRupee size={13} />,  label: course.salary },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(13,32,69,0.5)',
            borderRadius: '8px',
            padding: '8px 10px',
            fontSize: '0.75rem',
            color: '#9BA5B8',
          }}
        >
          <span style={{ color: course.color, flexShrink: 0 }}>{item.icon}</span>
          {item.label}
        </div>
      ))}
    </div>
  )
}

function CourseFeatures({ features, color, expanded }) {
  return (
    <div
      style={{
        maxHeight: expanded ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#9BA5B8',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          What You'll Learn
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {features.map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#9BA5B8' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0 }} />
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CourseCard({ course, index, inView }) {
  const [expanded, setExpanded] = useState(false)
  const scrollTo = useScrollTo()

  return (
    <div
      className="card-hover"
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
      style={{
        background: 'linear-gradient(145deg, rgba(13,32,69,0.6), rgba(6,15,30,0.9))',
        border: `1px solid ${expanded ? course.color + '40' : 'rgba(201,168,76,0.12)'}`,
        borderRadius: '22px',
        overflow: 'hidden',
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, border-color 0.3s, box-shadow 0.3s`,
        boxShadow: expanded ? `0 20px 60px ${course.color}20` : 'none',
        cursor: 'pointer',
      }}
    >
      {/* Top color bar */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${course.color}, transparent)` }} />

      <div style={{ padding: '28px' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <CourseIcon iconName={course.iconName} color={course.color} colorLight={course.colorLight} />
          <CourseBadge badge={course.badge} badgeColor={course.badgeColor} />
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.3 }}>
          {course.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#5C6780', lineHeight: 1.7, marginBottom: '20px' }}>
          {course.description}
        </p>

        <CourseInfoGrid course={course} />
        <CourseFeatures features={course.features} color={course.color} expanded={expanded} />

        {/* Footer row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <KeycapButton
            variant="gold"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              scrollTo('#contact')
            }}
          >
            Apply Now
          </KeycapButton>

          <span
            style={{
              fontSize: '0.78rem',
              color: course.color,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600,
            }}
          >
            {expanded ? 'Show Less' : 'View Details'}
            <ChevronRight
              size={14}
              style={{
                transform: expanded ? 'rotate(90deg)' : 'none',
                transition: 'transform 0.3s',
              }}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

function CoursesCTA({ scrollTo }) {
  return (
    <div
      style={{
        marginTop: '60px',
        background: 'linear-gradient(135deg, rgba(13,32,69,0.6), rgba(26,58,114,0.3))',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '24px',
        padding: '48px 40px',
        textAlign: 'center',
      }}
    >
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '12px' }}>
        Not Sure Which Course is Right for You?
      </h3>
      <p style={{ color: '#9BA5B8', marginBottom: '28px', fontSize: '1rem' }}>
        Talk to our career counselors — 100% free consultation
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
        <KeycapButton
          variant="gold"
          size="md"
          onClick={() => scrollTo('#eligibility')}
        >
          Check My Eligibility
        </KeycapButton>
        <KeycapButton
          variant="purple"
          size="md"
          onClick={() => (window.location.href = 'tel:+919999999999')}
        >
          Call Counselor
        </KeycapButton>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function CoursesSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const scrollTo        = useScrollTo()

  return (
    <section
      id="courses"
      ref={ref}
      className="section-pad"
      style={{ background: 'linear-gradient(180deg, #060F1E 0%, #020B18 100%)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Our Programs</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Choose Your <span className="text-gold">Maritime Path</span>
          </h2>
          <div className="divider-gold" style={{ margin: '0 auto 16px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            DGS-approved courses designed to take you from shore to ship — and beyond
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} inView={inView} />
          ))}
        </div>

        <CoursesCTA scrollTo={scrollTo} />
      </div>
    </section>
  )
}
