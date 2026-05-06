// src/components/Footer.jsx
// ─────────────────────────────────────────────
// Site-wide footer with:
//   - Logo + tagline
//   - Quick navigation links
//   - Contact information
//   - Business hours
//   - Copyright bar
// ─────────────────────────────────────────────

import { Link } from 'react-router-dom'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

// Updated to match the actual pages and sections we built
const footerLinks = {
  'Programs': [
    { label: 'Math Tutoring',      path: '/services#math' },
    { label: 'Science Tutoring',   path: '/services#science' },
    { label: 'English & Literacy', path: '/services#english' },
    { label: 'IB Program (HL/SL)', path: '/ib-program' },
    { label: 'EQAO & OSSLT Prep',  path: '/services#english' },
    { label: 'SAT & ACT Prep',     path: '/services' },
    { label: 'STEM & Coding',      path: '/services#science' },
  ],
  'Company': [
    { label: 'Home',               path: '/' },
    { label: 'About Us',           path: '/about' },
    { label: 'Registration',       path: '/registration' },
    { label: 'Articles & Blog',    path: '/articles' },
    { label: 'Summer Program',     path: '/summer-program' },
    { label: 'Careers / Jobs',     path: '/jobs' },
    { label: 'Affiliate Program',  path: '/become-an-affiliate' },
    { label: 'FAQ',                path: '/faq' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--color-primary-dark)', borderTop: `2px solid var(--color-accent)` }}>

      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="container max-w-7xl mx-auto px-4" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '3rem' }}>

          {/* ════ Column 1 — Logo + Tagline + Contact ════ */}
          <div className="flex flex-col" style={{ gap: '1.5rem' }}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 no-underline group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:scale-105"
                style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-teal))' }}
              >
                T
              </div>
              <span className="font-extrabold text-white text-xl tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                The Study Zone
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm leading-relaxed" style={{ color: '#B0BEC5', wordBreak: 'break-word', paddingRight: '1rem' }}>
              We teach the subjects, the way they are. Empowering students from Brampton, Caledon, and around the world to achieve academic excellence.
            </p>

            {/* Contact Info */}
            <ul className="flex flex-col" style={{ gap: '1rem', marginTop: '0.5rem' }}>
              <li>
                <a href="tel:16478494344" className="flex items-center gap-3 text-sm transition-colors" style={{ color: '#E0E0E0' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-teal-light)'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}>
                  <PhoneIcon className="w-5 h-5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                  1 (647) 849-4344
                </a>
              </li>
              <li>
                <a href="mailto:info@thestudyzone.ca" className="flex items-center gap-3 text-sm transition-colors" style={{ color: '#E0E0E0' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-teal-light)'} onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}>
                  <EnvelopeIcon className="w-5 h-5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                  info@thestudyzone.ca
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: '#E0E0E0', wordBreak: 'break-word' }}>
                <MapPinIcon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span style={{ lineHeight: 1.5 }}>Brampton & Caledon, ON <br/> Online Worldwide</span>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: '#E0E0E0', wordBreak: 'break-word' }}>
                <ClockIcon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span style={{ lineHeight: 1.5 }}>Mon–Fri: 10 AM – 8 PM <br/> Sat-Sun: Closed</span>
              </li>
            </ul>
          </div>

          {/* ════ Columns 2 & 3 — Navigation Links ════ */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col" style={{ gap: '1.5rem' }}>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest pb-3 inline-block w-max" style={{ borderBottom: `2px solid var(--color-accent)`,color: '#E8F4FF' }}>
                {heading}
              </h4>
              <ul className="flex flex-col" style={{ gap: '1rem' }}>
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-sm transition-colors flex items-center gap-2 group"
                      style={{ color: '#B0BEC5' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-teal-light)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#B0BEC5'}
                    >
                      <span className="w-1.5 h-1.5 rounded-full transition-colors shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ════ Column 4 — CTA Card ════ */}
          <div className="flex flex-col h-full">
            <div
              className="rounded-2xl flex flex-col relative overflow-hidden"
              style={{ 
                backgroundColor: 'linear-gradient(135deg, var(--color-accent), var(--color-teal))',
                padding: '2rem',
                gap: '1.25rem',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.2)'
              }}
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <h4 className="font-bold text-white text-lg relative z-10" style={{ fontFamily: 'var(--font-heading)' , color: '#E8F4FF'}}
              >
                Start with a Free Assessment
              </h4>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: '#E8F4FF', wordBreak: 'break-word' }}>
                Book a no-obligation assessment session. Let us build a personalized learning plan for your child today.
              </p>
              
              <a
                href="tel:16478494344"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5 relative z-10"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  padding: '1rem',
                  color: '#E8F4FF',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <PhoneIcon className="w-5 h-5 shrink-0" />
                Call to Book Now
              </a>
              
              <a
                href="mailto:info@thestudyzone.ca"
                className="text-center text-sm transition-colors flex items-center justify-center gap-2 mt-2 relative z-10 group"
                style={{ color: '#E8F4FF' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E8F4FF'}
              >
                Or email us <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT BAR ── */}
      <div style={{ backgroundColor: 'var(--color-primary)', borderTop: `1px solid rgba(37, 99, 235, 0.3)` }}>
        <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between" style={{ padding: '1.5rem 0', gap: '1rem' }}>
          <p className="text-sm font-medium" style={{ color: '#B0BEC5' }}>
            © {currentYear} The Study Zone. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm font-medium" style={{ color: '#B0BEC5' }}>
            <span>Serving Brampton</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
            <span>Caledon</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
            <span>GTA</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
            <span>Online Worldwide</span>
          </div>
        </div>
      </div>

    </footer>
  )
}