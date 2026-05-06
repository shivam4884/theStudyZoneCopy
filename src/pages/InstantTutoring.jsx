// src/pages/InstantTutoring.jsx
import { 
  ClockIcon, 
  VideoCameraIcon, 
  BoltIcon, 
  AcademicCapIcon, 
  CheckCircleIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

export default function InstantTutoring() {
  const features = [
    {
      icon: BoltIcon,
      title: 'On-Demand Expert Tutors',
      desc: 'Specializing in Pre-Algebra, Algebra, Pre-Calculus, Calculus, Trigonometry, and Geometry. Get real-time guidance exactly when you are stuck.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Comprehensive Coverage',
      desc: 'Whether grappling with geometric proofs or complex equations, our tutors break down difficult concepts into easy-to-understand explanations.'
    },
    {
      icon: VideoCameraIcon,
      title: 'Interactive Virtual Sessions',
      desc: 'Connect in real-time via Zoom. Share screens, exchange files, and collaborate seamlessly. It is exactly like having a tutor right by your side.'
    },
    {
      icon: ClockIcon,
      title: 'Flexible Scheduling',
      desc: 'Timing is everything. Find a tutor who matches your availability—day, evening, or late at night. Learning on your exact schedule.'
    }
  ]

  const steps = [
    { step: '01', title: 'Submit Request', desc: 'Send us your specific math question or topic you need help with.' },
    { step: '02', title: 'Fast Response', desc: 'An available expert tutor will respond to your request within 5 minutes.' },
    { step: '03', title: 'Connect Live', desc: 'Get instant help via WhatsApp, email, or a direct live Zoom link.' },
    { step: '04', title: 'Learn & Pay', desc: 'Pay only for the exact time you use after the tutoring session is complete.' }
  ]

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* ── SPACER TO CLEAR FIXED NAVBAR ── */}
      <div className="h-28 md:h-36 w-full"></div>

      {/* ═══════════════════════════════════════
          HERO SECTION (Forced Centering Fix)
      ═══════════════════════════════════════ */}
      <section 
        className="relative overflow-hidden text-center flex flex-col items-center" 
        style={{ paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-200 mb-8 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full animate-pulse bg-teal-500 shrink-0" />
            <span className="text-sm font-bold text-teal-700 uppercase tracking-widest">
              Live Help Available Now
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words" 
            style={{ lineHeight: 1.15, marginBottom: '2rem' }}
          >
            Stuck on Math? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600">
              Get Instant Help.
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl break-words" 
            style={{ margin: '0 auto 3rem auto' }}
          >
            Need immediate help in Pre-Algebra, Calculus, Trigonometry, or Geometry? Look no further. Our on-demand tutoring service is here to rescue you in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button href="https://wa.me/16478494344" variant="primary" className="w-full sm:w-auto text-lg px-10 py-4">
              <ChatBubbleLeftRightIcon className="w-6 h-6 shrink-0" />
              WhatsApp Us Now
            </Button>
            <Button href="tel:16478494344" variant="outline" className="w-full sm:w-auto text-lg px-10 py-4">
              Call (647) 849-4344
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS (Steps)
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader 
            eyebrow="The Process" 
            title="How Instant Tutoring Works" 
            subtitle="Get connected to a math expert in under 5 minutes." 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem', marginTop: '4rem' }}>
            {steps.map((item, idx) => (
              <div 
                key={idx} 
                className="card relative overflow-hidden flex flex-col h-full group items-center text-center shadow-lg"
                style={{ padding: '2.5rem', backgroundColor: 'var(--color-card-bg)', alignItems: 'center' }}
              >
                <div 
                   className="text-7xl lg:text-8xl font-black text-slate-800/10 absolute -top-4 -right-4 pointer-events-none select-none transition-colors group-hover:text-teal-500/10"
                   style={{ zIndex: 0 }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed relative z-10 text-base break-words">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES GRID
      ═══════════════════════════════════════ */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader 
            eyebrow="Why Choose Us" 
            title="Math Rescue, On Your Schedule" 
            subtitle="We empower you with the tools and knowledge to conquer math challenges head-on."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem', marginTop: '4rem' }}>
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="card flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300 shadow-xl" 
                style={{ gap: '1.5rem', padding: '3rem', backgroundColor: 'var(--color-card-bg)', alignItems: 'center' }}
              >
                <div className="w-16 h-16 shrink-0 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-teal-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 break-words">{item.title}</h3>
                  <p className="text-slate-700 text-lg leading-relaxed break-words">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING & TERMS (Glassmorphism Card)
      ═══════════════════════════════════════ */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div 
            className="rounded-3xl shadow-2xl border border-slate-200 flex flex-col lg:flex-row items-center overflow-hidden" 
            style={{ gap: '4rem', backgroundColor: 'var(--color-card-bg)', padding: '4rem' }}
          >
            
            {/* Left: Pricing Focus */}
            <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6 shadow-teal-500/10">
                <CurrencyDollarIcon className="w-8 h-8 text-teal-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Pay Per Minute</h2>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 mb-6">
                $0.99 <span className="text-xl font-semibold text-slate-500">/ minute</span>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed break-words" style={{ marginBottom: '2.5rem' }}>
                You are only charged for the exact time you use. Minimum session length is 15 minutes. Purchase credits in advance or provide a valid credit card prior to starting.
              </p>
              <Button to="/contact" variant="primary" className="w-full sm:w-auto text-lg py-4 px-10 shadow-lg shadow-teal-500/20">
                Request an Instant Session
              </Button>
            </div>

            {/* Right: Terms List */}
            <div className="flex-1 w-full rounded-2xl border border-slate-200 shadow-inner" style={{ backgroundColor: 'var(--color-card-bg)', padding: '2.5rem' }}>
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-4" style={{ marginBottom: '1.5rem' }}>Session Terms</h4>
              <ul className="flex flex-col" style={{ gap: '1.25rem' }}>
                {[
                  'Minimum 15 minutes charged per session.',
                  'Group sessions available for up to 3 students.',
                  'Confirm topic with tutor before starting.',
                  'Video sessions conducted via Zoom.',
                  'No refunds for student-side connectivity issues.'
                ].map((term, idx) => (
                  <li key={idx} className="flex items-start text-base text-slate-700 break-words" style={{ gap: '1rem' }}>
                    <CheckCircleIcon className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                    <span style={{ lineHeight: 1.6 }}>{term}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}