// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Button from './ui/Button'
import logo from "../assets/logo.png";

const navItems = [
  { label: 'Home', path: '/' },
  { 
    label: 'Programs', 
    dropdown: [
      { label: 'All Services', path: '/services', desc: 'Explore all our tutoring programs' },
      { label: 'In-Home Tutoring', path: '/home-tutoring', desc: 'Learn from the comfort of your home' },
      { label: 'Instant Tutoring', path: '/instant-tutoring', desc: 'On-demand math help in under 5 mins' },
      { label: 'Summer Program', path: '/summer-program', desc: 'Enriching academic summer camps' },
      { label: 'IB Program', path: '/ib-program', desc: 'Specialized HL & SL diploma prep' },
      { label: 'Curriculum & Courses', path: '/courses', desc: 'Detailed grade-by-grade breakdown' }
    ]
  },
  { 
    label: 'Resources', 
    dropdown: [
      { label: 'Articles & Blog', path: '/articles', desc: 'Expert advice and study strategies' },
      { label: 'FAQ', path: '/faq', desc: 'Answers to your common questions' }
    ]
  },
  { 
    label: 'Company', 
    dropdown: [
      { label: 'About Us', path: '/about', desc: 'Meet our team and discover our mission' },
      { label: 'Registration', path: '/registration', desc: 'Secure your spot in our programs' },
      { label: 'Careers', path: '/jobs', desc: 'Join our team as an expert tutor' },
      { label: 'Affiliate Program', path: '/become-an-affiliate', desc: 'Partner with us and earn rewards' },
      { label: 'Feedback', path: '/feedback', desc: 'Share your experience with us' },
    ]
  }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false) 
  const [mobileOpen, setMobileOpen] = useState(false) 
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMobileDropdown(null)
  }, [location.pathname])

  const toggleMobileDropdown = (label) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'shadow-lg shadow-slate-200/50 border-b'
          : 'border-b border-transparent shadow-none'
      }`}
      style={{ 
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.75)' 
          : 'linear-gradient(135deg, transparent 0%, rgba(37, 99, 235, 0.05) 100%)',
        borderColor: isScrolled ? 'rgba(226, 232, 240, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none'
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* ── LOGO ── */}
        <Link to="/" className="flex items-center group no-underline relative" style={{ gap: '0.75rem' }}>
          <div className="relative">
            <img
              src={logo}
              alt="The Study Zone logo"
              className="w-14 h-14 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/10 group-hover:to-teal-500/10 rounded-lg transition-all duration-300" />
          </div>
          <span
            className={`font-extrabold text-2xl tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-blue-950' : 'text-slate-900'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Study Zone
          </span>
        </Link>

        {/* ── DESKTOP NAV LINKS ── */}
        <nav className="hidden lg:flex items-center" style={{ gap: '2.5rem' }}>
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                // Dropdown Trigger (Removed inline color override)
                <button 
                  className={`flex items-center text-base font-bold transition-all duration-300 outline-none relative px-3 py-2 rounded-lg group/btn ${
                    isScrolled ? 'text-slate-800 hover:text-blue-600' : 'text-slate-700 hover:text-slate-900'
                  }`}
                  style={{ 
                    gap: '0.375rem', 
                    background: isScrolled ? 'rgba(0,0,0,0.02)' : 'transparent', 
                    padding: isScrolled ? '0.3rem 0.75rem' : '0.3rem 0.75rem' 
                  }}
                >
                  {item.label}
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-180 ${isScrolled ? 'text-blue-600' : 'text-blue-500'}`} />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </button>
              ) : (
                // Standard Link (Removed inline color override & forced clean active blue)
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  style={{ 
                    gap: '0.375rem', 
                    background: isScrolled ? 'rgba(0,0,0,0.02)' : 'transparent', 
                    padding: isScrolled ? '0.3rem 0.75rem' : '0.3rem 0.75rem' 
                  }}
                  className={({ isActive }) => `
                    text-base font-bold transition-all duration-300 no-underline relative rounded-lg group/link block
                    ${isScrolled 
                      ? isActive ? 'text-blue-700 bg-blue-50/80' : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50/50' 
                      : isActive ? 'text-teal-600 bg-teal-100' : 'text-slate-600 hover:text-slate-900 hover:bg-blue-50'
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />}
                    </>
                  )}
                </NavLink>
              )}

              {/* Desktop Dropdown Menu */}
              {item.dropdown && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50" 
                  style={{ top: '100%', width: '22rem', paddingTop: '1.5rem' }}
                >
                  <div 
                    className={`rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${
                      isScrolled
                        ? 'bg-white/95 backdrop-blur-xl border-slate-200'
                        : 'bg-white/95 backdrop-blur-xl border-slate-200'
                    }`}
                    style={{ padding: '1rem', gap: '0.5rem' }}
                  >
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        end={item.path === '/'}
                        className={({ isActive }) => `
                          block rounded-xl transition-all duration-200 group/link no-underline
                          ${isActive 
                            ? 'bg-blue-50 border border-blue-200'
                            : 'hover:bg-slate-50 border border-transparent'
                          }
                        `}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        {({ isActive }) => (
                          <>
                            <div 
                              className={`text-base font-bold transition-colors ${
                                isActive ? 'text-blue-700' : 'text-slate-800 group-hover/link:text-blue-600'
                              }`}
                              style={{ marginBottom: '0.25rem' }}
                            >
                              {subItem.label}
                            </div>
                            <div className="text-sm leading-relaxed text-slate-500 group-hover/link:text-slate-600 transition-colors">
                              {subItem.desc}
                            </div>
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── DESKTOP CTA (Fixed phone number color to stay dark/blue when scrolled) ── */}
        <div className="hidden lg:flex items-center" style={{ gap: '1.5rem' }}>
          <a
            href="tel:16478494344"
            className={`flex items-center text-sm font-bold transition-all duration-300 no-underline px-3 py-2 rounded-lg ${
              isScrolled 
                ? 'text-slate-800 hover:text-blue-600 hover:bg-slate-50' 
                : 'text-slate-700 hover:text-blue-600'
            }`}
            style={{ gap: '0.5rem' }}
          >
            <PhoneIcon className="w-4 h-4 text-blue-600" />
            (647) 849-4344
          </a>
          <Button to="/contact" variant="primary" className="py-2.5 px-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            Book Free Session
          </Button>
        </div>

        {/* ── MOBILE HAMBURGER BUTTON ── */}
        <button
          className={`lg:hidden rounded-lg transition-all duration-300 border ${
            isScrolled
              ? 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
              : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
          }`}
          style={{ padding: '0.5rem' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {/* ── MOBILE MENU FULLSCREEN OVERLAY ── */}
      <div className={`
        lg:hidden fixed inset-x-0 bottom-0 transition-all duration-500 overflow-y-auto border-t
        ${mobileOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-8'}
      `}
      style={{ 
        top: '80px',
        background: 'linear-gradient(135deg, rgba(11, 42, 74, 0.98) 0%, rgba(15, 118, 110, 0.1) 100%)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(37, 99, 235, 0.2)'
      }}
      >
        <div className="container mx-auto px-4 flex flex-col" style={{ paddingTop: '2rem', paddingBottom: '2rem', gap: '0.5rem' }}>
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/10 last:border-0" style={{ paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
              {item.dropdown ? (
                <button 
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="w-full flex items-center justify-between text-xl font-bold text-white outline-none px-3 py-3 rounded-lg transition-all duration-300 hover:bg-white/10"
                  style={{ gap: '1rem' }}
                >
                  {item.label}
                  <ChevronDownIcon className={`w-5 h-5 text-teal-300 transition-transform duration-300 shrink-0 ${activeMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `block text-xl font-bold transition-all duration-300 no-underline px-3 py-3 rounded-lg ${
                    isActive ? 'text-teal-300 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </NavLink>
              )}

              {item.dropdown && (
                <div className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${activeMobileDropdown === item.label ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="flex flex-col border-l-2 border-teal-500/30" style={{ gap: '1rem', marginTop: '1rem', marginBottom: '1.5rem', marginLeft: '0.5rem', paddingLeft: '1.25rem' }}>
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) => `
                          block transition-colors no-underline rounded-lg px-3 py-2
                          ${isActive ? 'text-teal-300 bg-teal-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                        `}
                      >
                        {({ isActive }) => (
                          <>
                            <div className="text-lg font-bold" style={{ marginBottom: '0.25rem' }}>{subItem.label}</div>
                            <div className="text-sm opacity-80 leading-relaxed text-slate-500">{subItem.desc}</div>
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Mobile bottom CTA */}
          <div className="rounded-2xl flex flex-col transition-all duration-300" style={{ 
            padding: '1.5rem', 
            gap: '1rem', 
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(15, 118, 110, 0.2) 100%)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <p className="text-sm text-slate-300 text-center font-bold">Ready to boost your grades?</p>
            <Button to="/contact" variant="primary" className="w-full justify-center py-4 text-lg bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              Book Free Session
            </Button>
            <a
              href="tel:16478494344"
              className="flex items-center justify-center font-bold text-slate-300 hover:text-white transition-colors no-underline px-3 py-3 rounded-lg hover:bg-white/10"
              style={{ gap: '0.5rem' }}
            >
              <PhoneIcon className="w-5 h-5 text-teal-300" />
              Call (647) 849-4344
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}