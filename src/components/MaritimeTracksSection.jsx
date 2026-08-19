// ============================================================
// MaritimeTracksSection — Dynamic Angled Ribbon Curriculum Showcase
// Based on the reference academy curriculum cards (Navigation, Safety STCW, Hospitality, Sea Service)
// ============================================================

import { useState } from 'react'
import { Compass, ShieldCheck, Utensils, Anchor, ChevronRight, Check } from 'lucide-react'
import KeycapButton from './KeycapButton'
import { useScrollTo } from '../hooks/useScrollTo'

const TRACKS = [
  {
    id: 'navigation',
    title: 'Marine Navigation & Yacht Master Command',
    subtitleArabic: 'الملاحة البحرية وقيادة اليخوت',
    description:
      'Comprehensive preparation and qualification programs for yacht captains and fast commercial vessel commanders. Accredited professional certifications recognized by international maritime administrations, MCA, and DG Shipping.',
    bullets: [
      'Fast Rescue Boat & SPB/RIB Operator Command',
      'Coastal Yacht Master & Coastal Navigation',
      'Master 200 Tons Limited Commercial Yacht License',
      'Ocean Yacht Master & Deep Sea Navigation (200T Unlimited)',
    ],
    image: '/images/navigation.png',
    badge: 'MCA & DGS Certified',
    accentColor: '#EF4444', // Red Maritime Ribbon
    accentGradient: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
    icon: <Compass size={22} />,
    imageSide: 'right',
  },
  {
    id: 'safety',
    title: 'Maritime Safety & STCW 2010 Certification',
    subtitleArabic: 'السلامة البحرية والإسعافات الأولية',
    description:
      'Mandatory STCW maritime safety, survival at sea, firefighting, and emergency medical response programs. Fully compliant with IMO conventions and global maritime standards.',
    bullets: [
      'STCW 2010 Basic Safety Training (PST, PSSR, EFA, FPFF)',
      'Maritime VHF / GMDSS Radio Communications License',
      'Advanced Firefighting & Fast Rescue Craft Proficiency',
      'Ship Security Officer & Designated Security Duties',
    ],
    image: '/images/safety.png',
    badge: 'Mandatory IMO Standard',
    accentColor: '#DC2626',
    accentGradient: 'linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)',
    icon: <ShieldCheck size={22} />,
    imageSide: 'right',
  },
  {
    id: 'hospitality',
    title: 'Maritime Hospitality & Superyacht Deck Service',
    subtitleArabic: 'الضيافة البحرية وخدمات اليخوت الفاخرة',
    description:
      'Elite professional training programs for luxury superyacht stewardesses, hospitality crew, and maritime voyage management officers on international cruising vessels.',
    bullets: [
      'Professional Maritime Hospitality & Silver Service License',
      'Superyacht Interior Management & Guest Protocol',
      'Crew & Hospitality Services Certification on Mega Yachts',
      'Food Safety, Wine Sommelier & VIP Maritime Operations',
    ],
    image: '/images/hospitality.png',
    badge: 'Superyacht Elite',
    accentColor: '#C9A84C', // Gold Maritime
    accentGradient: 'linear-gradient(135deg, #C9A84C 0%, #856417 100%)',
    icon: <Utensils size={22} />,
    imageSide: 'left',
  },
  {
    id: 'sea-service',
    title: 'Sea Service & Nautical Mile Building',
    subtitleArabic: 'الخدمة البحرية وبناء الأميال',
    description:
      'Log logged sea-time, practical bridge watchkeeping hours, and nautical miles necessary to upgrade maritime licenses, endorsements, and achieve Officer of the Watch status.',
    bullets: [
      'Supervised Sea Time & Commercial Nautical Mile Building',
      'Bridge Watchkeeping Practical Sea Hours Certification',
      'License Endorsement & Rank Progression Support',
      'Direct Placement on International Commercial Routes',
    ],
    image: '/images/sea-service.png',
    badge: '100% Verified Sea Time',
    accentColor: '#DC2626',
    accentGradient: 'linear-gradient(135deg, #991B1B 0%, #450A0A 100%)',
    icon: <Anchor size={22} />,
    imageSide: 'left',
  },
]

export default function MaritimeTracksSection() {
  const scrollTo = useScrollTo()

  return (
    <section
      id="maritime-tracks"
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #020B18 0%, #060F1E 50%, #020B18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, rgba(220,38,38,0.03) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '14px', display: 'inline-flex' }}>
            <Compass size={13} /> Maritime Academy Programs
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Specialized <span className="text-gold">Training Tracks</span>
          </h2>
          <div className="divider-gold" style={{ margin: '0 auto 16px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '640px' }}>
            From yacht master navigation and STCW safety to luxury superyacht hospitality and logged sea-mile building.
          </p>
        </div>

        {/* Dynamic Angled Ribbon Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {TRACKS.map((track) => {
            const isImageRight = track.imageSide === 'right'

            return (
              <div
                key={track.id}
                style={{
                  position: 'relative',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(6, 15, 30, 0.95), rgba(2, 11, 24, 0.98))',
                  border: '1px solid rgba(201, 168, 76, 0.2)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* Angled Dynamic Color Stripe (Inspired by the reference designs) */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '35%',
                    background: track.accentGradient,
                    [isImageRight ? 'right' : 'left']: 0,
                    clipPath: isImageRight
                      ? 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
                      : 'polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%)',
                    opacity: 0.85,
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isImageRight ? '1.2fr 0.8fr' : '0.8fr 1.2fr',
                    gap: '40px',
                    padding: '48px 44px',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  className="track-grid"
                >
                  {/* Content Column (When Image is on the Left) */}
                  {!isImageRight && (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CircleImageFrame src={track.image} alt={track.title} accentColor={track.accentColor} />
                    </div>
                  )}

                  {/* Text Information Column */}
                  <div>
                    {/* Badge & Arabic subtitle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
                      <span
                        className="badge"
                        style={{
                          background: `${track.accentColor}20`,
                          border: `1px solid ${track.accentColor}50`,
                          color: track.accentColor === '#C9A84C' ? '#F0D18A' : '#FCA5A5',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                        }}
                      >
                        {track.badge}
                      </span>
                      <span
                        style={{
                          fontSize: '0.9rem',
                          color: '#C9A84C',
                          fontWeight: 700,
                          fontFamily: 'sans-serif',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {track.subtitleArabic}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                        fontWeight: 800,
                        color: '#fff',
                        marginBottom: '14px',
                        lineHeight: 1.2,
                      }}
                    >
                      {track.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: '#9BA5B8',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        marginBottom: '24px',
                      }}
                    >
                      {track.description}
                    </p>

                    {/* Bullets List with Illuminated Markers */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                      {track.bullets.map((bullet, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <span
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              background: `${track.accentColor}25`,
                              border: `1px solid ${track.accentColor}`,
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.65rem',
                              marginTop: '3px',
                              flexShrink: 0,
                            }}
                          >
                            <Check size={11} color={track.accentColor === '#C9A84C' ? '#F0D18A' : '#fff'} />
                          </span>
                          <span style={{ fontSize: '0.88rem', color: '#E2E8F0', fontWeight: 500 }}>
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 3D Keycap Action Button */}
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <KeycapButton
                        variant={track.accentColor === '#C9A84C' ? 'gold' : 'purple'}
                        size="md"
                        icon={<ChevronRight size={16} />}
                        onClick={() => scrollTo('#contact')}
                      >
                        More Information (معلومات إضافية)
                      </KeycapButton>
                    </div>
                  </div>

                  {/* Content Column (When Image is on the Right) */}
                  {isImageRight && (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CircleImageFrame src={track.image} alt={track.title} accentColor={track.accentColor} />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .track-grid {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

// ── Sub-component: Framed Circular Image with Concentric Glow Rings ──────────
function CircleImageFrame({ src, alt, accentColor }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        padding: '10px',
        background: 'rgba(6, 15, 30, 0.6)',
        border: '3px solid #FFFFFF',
        boxShadow: `
          0 0 0 6px ${accentColor},
          0 0 0 10px rgba(255, 255, 255, 0.4),
          0 15px 40px rgba(0, 0, 0, 0.8)
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05) rotate(1deg)'
        e.currentTarget.style.boxShadow = `0 0 0 8px ${accentColor}, 0 0 35px ${accentColor}88, 0 20px 50px rgba(0,0,0,0.9)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
        e.currentTarget.style.boxShadow = `0 0 0 6px ${accentColor}, 0 0 0 10px rgba(255, 255, 255, 0.4), 0 15px 40px rgba(0, 0, 0, 0.8)`
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
          }}
        />
      </div>
    </div>
  )
}
