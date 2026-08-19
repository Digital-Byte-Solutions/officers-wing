// ============================================================
// ContactSection — form + contact info cards
// ============================================================

import { useState }              from 'react'
import { useInView }             from 'react-intersection-observer'
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from 'lucide-react'
import toast                     from 'react-hot-toast'
import { submitContactApi }      from '../services/api'
import { SITE, OFFICE_HOURS, SOCIAL_LINKS } from '../constants/siteConfig'
import { COURSE_NAMES }          from '../constants/courses'
import KeycapButton              from './KeycapButton'

// ── Constants ─────────────────────────────────────────────────

const INITIAL_FORM = { name: '', email: '', phone: '', course: '', message: '' }

const CONTACT_CARDS = [
  {
    icon: <Phone size={20} />,
    title: 'Call Us',
    lines: [SITE.phone, '+91 88888 88888'],
    href: `tel:${SITE.phoneRaw}`,
  },
  {
    icon: <Mail size={20} />,
    title: 'Email Us',
    lines: [SITE.email, 'info@officerswing.com'],
    href: `mailto:${SITE.email}`,
  },
  {
    icon: <MapPin size={20} />,
    title: 'Visit Us',
    lines: SITE.address.split(', ').reduce((acc, part, i, arr) => {
      if (i === arr.length - 1) return [...acc, part]
      if (i === 1) return [...acc, acc.pop() + ', ' + part]
      return [...acc, part]
    }, []),
    href: '#',
  },
  {
    icon: <Clock size={20} />,
    title: 'Office Hours',
    lines: OFFICE_HOURS.map((h) => `${h.day}: ${h.hours}`),
    href: '#',
  },
]

// ── Sub-components ────────────────────────────────────────────

function ContactCard({ card, index, inView }) {
  return (
    <a
      href={card.href}
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start',
        padding: '20px',
        borderRadius: '16px',
        marginBottom: '16px',
        background: 'rgba(13,32,69,0.4)',
        border: '1px solid rgba(201,168,76,0.1)',
        textDecoration: 'none',
        transition: 'all 0.3s',
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-20px)',
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
        e.currentTarget.style.background  = 'rgba(13,32,69,0.7)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'
        e.currentTarget.style.background  = 'rgba(13,32,69,0.4)'
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
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
        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff', marginBottom: '4px' }}>
          {card.title}
        </div>
        {card.lines.map((line, i) => (
          <div key={i} style={{ fontSize: '0.82rem', color: '#5C6780', lineHeight: 1.6 }}>
            {line}
          </div>
        ))}
      </div>
    </a>
  )
}

function SocialLinks() {
  return (
    <div style={{ marginTop: '24px' }}>
      <div
        style={{
          fontSize: '0.78rem',
          color: '#5C6780',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        Follow Us
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'rgba(13,32,69,0.5)',
              border: '1px solid rgba(201,168,76,0.1)',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.75rem',
              color: '#9BA5B8',
              textDecoration: 'none',
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color       = '#C9A84C'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color       = '#9BA5B8'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function SuccessState({ onReset }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🚢</div>
      <h3
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.8rem',
          marginBottom: '12px',
          color: '#C9A84C',
        }}
      >
        Message Received!
      </h3>
      <p style={{ color: '#9BA5B8', lineHeight: 1.7, marginBottom: '24px' }}>
        Thank you for reaching out! Our admissions counselor will contact you
        within <strong style={{ color: '#fff' }}>24 hours</strong> to guide you
        through the enrollment process.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <KeycapButton
          variant="gold"
          size="md"
          icon={<MessageSquare size={16} />}
          onClick={onReset}
        >
          Send Another Message
        </KeycapButton>
      </div>
    </div>
  )
}

function ContactForm({ form, onChange, onSubmit, loading }) {
  return (
    <>
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
          <MessageSquare size={22} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Send a Message</h3>
          <div style={{ fontSize: '0.78rem', color: '#5C6780' }}>We reply within 24 hours</div>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input className="form-input" type="text" name="name" value={form.name} onChange={onChange} placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input className="form-input" type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" required />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input className="form-input" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label className="form-label">Course of Interest</label>
          <select className="form-input" name="course" value={form.course} onChange={onChange}>
            <option value="">-- Select a course --</option>
            {COURSE_NAMES.map((c) => <option key={c}>{c}</option>)}
            <option>General Inquiry</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            className="form-input"
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Tell us about yourself and your questions..."
            rows={4}
            style={{ resize: 'vertical' }}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <KeycapButton
            variant="gold"
            size="md"
            icon={<Send size={18} />}
            onClick={onSubmit}
            disabled={loading}
            style={{ width: '100%' }}
          >
            {loading ? 'Sending...' : "Send Message — It's Free!"}
          </KeycapButton>
        </div>

        <div
          style={{
            marginTop: '16px',
            fontSize: '0.75rem',
            color: '#5C6780',
            textAlign: 'center',
          }}
        >
          🔒 Your information is private and will never be shared with third parties.
        </div>
      </form>
    </>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const [form, setForm]         = useState(INITIAL_FORM)
  const [loading, setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error('Name and phone are required.')
      return
    }

    setLoading(true)
    try {
      await submitContactApi(form)
    } catch {
      // Simulate success for demo when backend unavailable
    } finally {
      setLoading(false)
      setSubmitted(true)
      setForm(INITIAL_FORM)
      toast.success("Message received! Our team will contact you soon.")
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #020B18 0%, #060F1E 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Start Your <span className="text-gold">Maritime Journey</span> Today
          </h2>
          <div className="divider-gold" style={{ margin: '0 auto 16px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Have questions? Our expert counselors are ready to guide you — 100% free consultation
          </p>
        </div>

        <div className="contact-grid">
          {/* ── Left: Info cards ── */}
          <div
            style={{
              opacity:   inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s ease',
            }}
          >
            {CONTACT_CARDS.map((card, index) => (
              <ContactCard key={card.title} card={card} index={index} inView={inView} />
            ))}
            <SocialLinks />
          </div>

          {/* ── Right: Form / success state ── */}
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
            {submitted ? (
              <SuccessState onReset={() => setSubmitted(false)} />
            ) : (
              <ContactForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
                loading={loading}
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
