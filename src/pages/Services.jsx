// src/pages/Services.jsx
import { Link } from 'react-router-dom'
import { 
  AcademicCapIcon, 
  ArrowRightIcon, 
  PhoneIcon,
  CheckCircleIcon,
  StarIcon,
  CalculatorIcon, 
  BeakerIcon, 
  BookOpenIcon,
  ClipboardDocumentCheckIcon, 
  TrophyIcon, 
  CodeBracketIcon,
  HeartIcon, 
  UserGroupIcon
} from '@heroicons/react/24/outline'

import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { services } from '../data/services'

// Icon map for the dynamic services array
const iconMap = {
  'calculator': CalculatorIcon, 
  'beaker': BeakerIcon,
  'book-open': BookOpenIcon, 
  'academic-cap': AcademicCapIcon,
  'clipboard-document-check': ClipboardDocumentCheckIcon,
  'trophy': TrophyIcon, 
  'code-bracket': CodeBracketIcon,
  'heart': HeartIcon, 
  'star': StarIcon,
  'user-group': UserGroupIcon
}

export default function Services() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* ── SPACER TO CLEAR FIXED NAVBAR ── */}
      <div className="h-28 md:h-36 w-full"></div>

      {/* ═══════════════════════════════════════
          PAGE HERO (Forced explicit padding)
      ═══════════════════════════════════════ */}
      <section 
        className="relative overflow-hidden"
        style={{ paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-200 shadow-lg mb-8 text-teal-700 font-bold uppercase tracking-widest text-sm">
            <AcademicCapIcon className="w-5 h-5 shrink-0 text-teal-600" />
            Our Programs
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words" 
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Expert Tutoring & Comprehensive
            </span>
            <br className="hidden md:block" />
            <span className="text-slate-900"> Learning Solutions</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto break-words" style={{ margin: '0 auto' }}
          >
            At The Study Zone, we provide specialized academic support for students in Brampton, Caledon, and the GTA. Flexible scheduling and customized lesson plans ensure your child receives the exact support they need to excel.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ALL SERVICES GRID
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
            {services.map(({ id, icon, title, description, link, badge }) => {
              const Icon = iconMap[icon] || AcademicCapIcon
              return (
                <Link 
                  key={id} 
                  to={link} 
                  className="card relative flex flex-col group hover:-translate-y-1 transition-transform duration-300 shadow-lg"
                  style={{ gap: '1.5rem', padding: '2.5rem' }}
                >
                  {/* Badge */}
                  {badge && (
                    <span 
                      className="absolute text-xs font-bold uppercase tracking-wider rounded-full bg-teal-500/10 text-teal-700 border border-teal-200"
                      style={{ top: '1.5rem', right: '1.5rem', padding: '0.4rem 1rem' }}
                    >
                      {badge}
                    </span>
                  )}
                  
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-teal-200"
                    style={{ backgroundColor: 'rgba(15, 118, 110, 0.1)' }}
                  >
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-1" style={{ gap: '1rem' }}>
                    <h3 className="font-bold text-2xl text-slate-900 break-words" style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
                      {title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600 break-words">
                      {description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DETAILED SUBJECT SECTIONS
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container max-w-7xl mx-auto px-4 flex flex-col" style={{ gap: '6rem' }}>

          {/* ── MATH BLOCK ── */}
          <div id="math" className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: '4rem' }}>
            <div>
              <SectionHeader 
                eyebrow="Mathematics" 
                title="Math Tutoring — Grade 1 to University Prep" 
              />
              <p className="text-lg leading-relaxed text-slate-300 break-words" style={{ marginBottom: '2rem' }}>
                At TSZ, we believe that mastering mathematics should be both enjoyable and rewarding. Our expert math tutors use a friendly, approachable teaching style to demystify complex concepts and build student confidence. By breaking down the Ontario Math Curriculum into simple, manageable steps, we help students build a strong foundation for university and beyond.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1.25rem' }}>
                {[
                  'Pre-Algebra, Geometry & Trigonometry',
                  'Algebra & Functions (MCR3U)',
                  'Advanced Functions (MHF4U)',
                  'Calculus & Vectors (MCV4U)',
                  'Data Management (MDM4U)',
                  'Statistics & Discrete Math',
                  'Financial Math & Pre-Calculus',
                  'Math Assignment Support'
                ].map(item => (
                  <li key={item} className="flex items-start text-base text-slate-300 break-words" style={{ gap: '0.75rem' }}>
                    <CheckCircleIcon className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
                    <span style={{ lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Math Highlight Card */}
            <div className="card shadow-2xl border border-teal-100 w-full" style={{ backgroundColor: 'var(--color-card-bg)', padding: '3rem' }}>
              <h4 className="text-2xl font-extrabold text-slate-900 break-words" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>
                Why Students Succeed with TSZ Math:
              </h4>
              <ul className="flex flex-col" style={{ gap: '1.5rem' }}>
                {[
                  'Simplified Concepts — complex formulas turned into easy-to-follow steps',
                  'Real-World Application — math made relatable and engaging',
                  'Full Curriculum Support — homework to final exam prep'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-base text-slate-700 break-words" style={{ gap: '1rem' }}>
                    <StarIcon className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                    <span style={{ lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── SCIENCE BLOCK ── */}
          <div id='science' className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: '4rem' }}>
            <div>
              <SectionHeader 
                eyebrow="Sciences" 
                title="Elite Science Tutoring — Physics, Chemistry & Biology" 
              />
              <p className="text-lg leading-relaxed text-slate-300 break-words" style={{ marginBottom: '2rem' }}>
                Experience the wonder of Science with our engaging tutoring sessions. Through interactive lessons, hands-on experiments, and real-world examples, we bring the magic of Science right to you. Our experienced tutors break down complex concepts into simple, understandable terms.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1.25rem' }}>
                {[
                  'Physics',
                  'Organic Chemistry',
                  'Inorganic Chemistry',
                  'Physical Chemistry',
                  'Quantum Physics',
                  'Optics',
                  'Mechanical Physics',
                  'Advanced Physics',
                  'Biology',
                  'Logical Thinking',
                  'Presentations & Projects'
                ].map(item => (
                  <li key={item} className="flex items-start text-base text-slate-300 break-words" style={{ gap: '0.75rem' }}>
                    <CheckCircleIcon className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                    <span style={{ lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* English Highlight Card (Placed here structurally based on original layout) */}
            <div id='english' className="card shadow-2xl border border-teal-100 w-full" style={{ backgroundColor: 'var(--color-card-bg)', padding: '3rem' }}>
              <h4 className="text-2xl font-extrabold text-slate-900 break-words" style={{ fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
                English Literacy & Writing
              </h4>
              <p className="text-base text-slate-600 leading-relaxed break-words" style={{ marginBottom: '2rem' }}>
                Comprehensive English programs from JK to Grade 12. From foundational literacy to academic essay writing, our expert tutors provide personalized guidance.
              </p>
              <ul className="flex flex-col" style={{ gap: '1.25rem' }}>
                {[
                  'Reading & Comprehension',
                  'Academic Writing & Grammar',
                  'Core Literacy Skills',
                  'Oral Communication',
                  'OSSLT Preparation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-base text-slate-700 break-words" style={{ gap: '1rem' }}>
                    <BookOpenIcon className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                    <span style={{ lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="section-py text-center" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container max-w-3xl mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight break-words" 
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.2, marginBottom: '1.5rem' }}
          >
            Not Sure Which Program Is Right?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed break-words" style={{ marginBottom: '3rem' }}>
            Call or email us for a free consultation. We'll assess your child's needs and recommend the perfect program.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center" style={{ gap: '1.5rem' }}>
            <Button href="tel:16478494344" variant="outline-dark" className="w-full sm:w-auto text-lg px-10 py-4">
              <PhoneIcon className="w-6 h-6 shrink-0" /> Call (647) 849-4344
            </Button>
            <Button to="/contact" variant="primary" className="w-full sm:w-auto text-lg px-10 py-4">
              Book Free Assessment <ArrowRightIcon className="w-6 h-6 shrink-0" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}