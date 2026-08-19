// ============================================================
// Footer — CTA banner + 4-column link grid + bottom bar
// ============================================================

import { Anchor, Phone, Mail, MapPin, Heart } from 'lucide-react'
import { useScrollTo }     from '../hooks/useScrollTo'
import { FOOTER_LINKS }    from '../constants/navigation'
import { SITE }            from '../constants/siteConfig'
import KeycapButton        from './KeycapButton'
import FluidText           from './FluidText'

// ── Sub-components ────────────────────────────────────────────

function FooterLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
      <div
        style={{
          width: '44px', height: '44px',
          background: 'linear-gradient(135deg, #C9A84C, #F0D18A)',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(201,168,76,0.3)',
        }}
      >
        <Anchor size={22} color="#020B18" strokeWidth={2.5} />
      </div>
      <div>
        <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.1rem' }}>
          Officer's Wing
        </div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', fontWeight: 600 }}>
          Academy
        </div>
      </div>
    </div>
  )
}

const QUICK_CONTACTS = [
  { icon: <Phone size={14} />, text: SITE.phone,  href: `tel:${SITE.phoneRaw}` },
  { icon: <Mail  size={14} />, text: SITE.email,  href: `mailto:${SITE.email}` },
  { icon: <MapPin size={14} />, text: SITE.address, href: '#' },
]

function BrandColumn() {
  return (
    <div>
      <FooterLogo />
      <p
        style={{
          color: '#5C6780',
          fontSize: '0.875rem',
          lineHeight: 1.8,
          marginBottom: '24px',
          maxWidth: '280px',
        }}
      >
        India's premier merchant navy training institute.
        Building the maritime leaders of tomorrow since 2010.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {QUICK_CONTACTS.map((item) => (
          <a
            key={item.text}
            href={item.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#5C6780',
              textDecoration: 'none',
              fontSize: '0.82rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#5C6780' }}
          >
            <span style={{ color: '#C9A84C' }}>{item.icon}</span>
            {item.text}
          </a>
        ))}
      </div>
    </div>
  )
}

function LinkColumn({ title, links, onNav }) {
  return (
    <div>
      <h4
        style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}
      >
        {title}
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => onNav(link.href)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#5C6780',
              fontSize: '0.875rem',
              textAlign: 'left',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Space Grotesk, sans-serif',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#5C6780' }}
          >
            <span style={{ fontSize: '0.6rem', color: 'rgba(201,168,76,0.5)' }}>▶</span>
            {link.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function CTABanner({ scrollTo }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(26,58,114,0.3))',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '28px',
        padding: '50px 30px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '80px',
      }}
    >
      {/* Decorative glows */}
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.1), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,58,114,0.2), transparent)', pointerEvents: 'none' }} />

      <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>⚓</div>

      <div style={{ maxWidth: '650px', margin: '0 auto' }}>
        <FluidText
          text="CHART YOUR COURSE"
          font="Playfair Display, serif"
          fontWeight="900"
          height={80}
          size={7}
          force={10}
          swirl={45}
          colorFade={5}
          colors={['#FFFFFF', '#F0D18A', '#C9A84C', '#38BDF8', '#818CF8']}
        />
      </div>

      <p style={{ color: '#9BA5B8', fontSize: '1.05rem', maxWidth: '500px', margin: '12px auto 32px' }}>
        Join 5,000+ successful maritime professionals who started their journey here.
      </p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
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
          icon={<Phone size={16} />}
          onClick={() => (window.location.href = `tel:${SITE.phoneRaw}`)}
        >
          {SITE.phone}
        </KeycapButton>
      </div>
    </div>
  )
}

function BottomBar() {
  const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Sitemap']

  return (
    <div style={{ borderTop: '1px solid rgba(201,168,76,0.08)', padding: '24px 0' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ fontSize: '0.8rem', color: '#5C6780' }}>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved. | DGS Approved Institute
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          {LEGAL_LINKS.map((label) => (
            <button
              key={label}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.78rem',
                color: '#5C6780',
                fontFamily: 'Space Grotesk, sans-serif',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#5C6780' }}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          style={{
            fontSize: '0.78rem',
            color: '#5C6780',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          Made with <Heart size={12} fill="#F87171" color="#F87171" /> in India
        </div>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function Footer() {
  const scrollTo = useScrollTo()

  const handleNav = (href) => {
    if (href.startsWith('#')) {
      scrollTo(href)
    } else {
      window.location.href = href
    }
  }

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #060F1E 0%, #020B18 100%)',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        paddingTop: '80px',
      }}
    >
      <div className="container">
        <CTABanner scrollTo={scrollTo} />

        {/* Main link grid */}
        <div className="footer-grid" style={{ marginBottom: '60px' }}>
          <BrandColumn />
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <LinkColumn key={section} title={section} links={links} onNav={handleNav} />
          ))}
        </div>
      </div>

      <BottomBar />

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
