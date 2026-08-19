// ============================================================
// Navbar — sticky glass nav with dropdown + mobile menu
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Anchor, Phone, ChevronDown } from 'lucide-react'
import { useScrollTo }    from '../hooks/useScrollTo'
import { NAV_LINKS }      from '../constants/navigation'
import { SITE }           from '../constants/siteConfig'
import KeycapButton       from './KeycapButton'

// ── Sub-components ────────────────────────────────────────────

function Logo() {
  const scrollTo = useScrollTo()

  return (
    <a
      href="#home"
      onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
      style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
    >
      <div
        style={{
          width: 42, height: 42,
          background: 'linear-gradient(135deg, #C9A84C, #F0D18A)',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(201,168,76,0.4)',
        }}
      >
        <Anchor size={22} color="#020B18" strokeWidth={2.5} />
      </div>
      <div>
        <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.1rem', color: '#fff', lineHeight: 1.1 }}>
          {SITE.name.split("'s")[0]}'s Wing
        </div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', fontWeight: 600 }}>
          Academy
        </div>
      </div>
    </a>
  )
}

function DropdownMenu({ children, isOpen }) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        background: 'rgba(6,15,30,0.98)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '12px',
        padding: '8px',
        minWidth: '180px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        zIndex: 100,
      }}
    >
      {children}
    </div>
  )
}

const navItemStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#9BA5B8',
  fontSize: '0.88rem',
  fontWeight: 500,
  padding: '8px 12px',
  borderRadius: '8px',
  fontFamily: 'Space Grotesk, sans-serif',
  transition: 'color 0.2s',
}

function NavItem({ link, activeDropdown, onDropdownToggle }) {
  const scrollTo = useScrollTo()

  const handleMouseEnter = (e) => { e.currentTarget.style.color = '#C9A84C' }
  const handleMouseLeave = (e) => { e.currentTarget.style.color = '#9BA5B8' }

  if (!link.children) {
    return (
      <button
        style={navItemStyle}
        onClick={() => scrollTo(link.href)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {link.label}
      </button>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        style={{ ...navItemStyle, display: 'flex', alignItems: 'center', gap: '4px' }}
        onClick={() => onDropdownToggle(link.label)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {link.label}
        <ChevronDown
          size={14}
          style={{
            transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        />
      </button>

      <DropdownMenu isOpen={activeDropdown === link.label}>
        {link.children.map((child) => (
          <button
            key={child.label}
            style={{ ...navItemStyle, display: 'block', width: '100%', textAlign: 'left', padding: '10px 14px' }}
            onClick={() => { scrollTo(child.href); onDropdownToggle(null) }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; e.currentTarget.style.background = 'rgba(201,168,76,0.1)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#9BA5B8'; e.currentTarget.style.background = 'none' }}
          >
            {child.label}
          </button>
        ))}
      </DropdownMenu>
    </div>
  )
}

function MobileMenu({ onClose }) {
  const scrollTo = useScrollTo()

  const handleNav = (href) => {
    scrollTo(href)
    onClose()
  }

  return (
    <div
      style={{
        background: 'rgba(2,11,24,0.98)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        padding: '20px 24px 30px',
        backdropFilter: 'blur(20px)',
      }}
    >
      {NAV_LINKS.map((link) => (
        <div key={link.label}>
          <button
            onClick={() => handleNav(link.children ? link.children[0].href : link.href)}
            style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#9BA5B8', fontSize: '1rem', fontWeight: 500,
              padding: '14px 0',
              borderBottom: '1px solid rgba(201,168,76,0.08)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#9BA5B8' }}
          >
            {link.label}
          </button>
          {link.children?.map((child) => (
            <button
              key={child.label}
              onClick={() => handleNav(child.href)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#5C6780', fontSize: '0.9rem',
                padding: '10px 16px',
                borderBottom: '1px solid rgba(201,168,76,0.05)',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              → {child.label}
            </button>
          ))}
        </div>
      ))}

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <KeycapButton
          variant="purple"
          size="sm"
          icon={<Phone size={14} />}
          onClick={() => { window.location.href = `tel:${SITE.phoneRaw}`; onClose() }}
        >
          Call Now
        </KeycapButton>
        <KeycapButton
          variant="gold"
          size="sm"
          onClick={() => handleNav('#contact')}
        >
          Enroll Now
        </KeycapButton>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function Navbar() {
  const scrollTo = useScrollTo()

  const [scrolled, setScrolled]             = useState(false)
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navRef                              = useRef(null)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Click outside → close menus
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false)
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        background: scrolled ? 'rgba(2,11,24,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      {/* Main bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          height: '72px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Logo />

        {/* Desktop navigation */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              activeDropdown={activeDropdown}
              onDropdownToggle={(label) =>
                setActiveDropdown((prev) => (prev === label ? null : label))
              }
            />
          ))}
        </div>

        {/* CTA area with KeycapButtons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <KeycapButton
            variant="purple"
            size="sm"
            icon={<Phone size={13} />}
            onClick={() => (window.location.href = `tel:${SITE.phoneRaw}`)}
          >
            Call Now
          </KeycapButton>
          <KeycapButton
            variant="gold"
            size="sm"
            onClick={() => scrollTo('#contact')}
          >
            Enroll Now
          </KeycapButton>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              color: '#C9A84C',
              display: 'none',
            }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav      { display: none !important; }
          .mobile-menu-btn  { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
