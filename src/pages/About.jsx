// src/pages/About.jsx
import { 
  LightBulbIcon, 
  AcademicCapIcon, 
  GlobeAltIcon, 
  UserGroupIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

export default function About() {
  const principles = [
    {
      icon: LightBulbIcon,
      title: 'Understand, Don\'t Just Memorize',
      desc: 'We noticed too many students relying on memorization with a vague understanding of core concepts. We go beyond the surface to explain the "how" and "why", ensuring students truly grasp the ideas they are learning.'
    },
    {
      icon: AcademicCapIcon,
      title: '18+ Years of Experience',
      desc: 'With nearly two decades of educational expertise, we bring new ideas, detailed lessons, and structured practice to improve every student\'s learning experience.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Reach',
      desc: 'Originating in Brampton and Caledon, our cutting-edge e-Learning platform allows us to provide top-tier tutoring services to students worldwide.'
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* ── SPACER TO CLEAR FIXED NAVBAR ── */}
      <div className="h-28 md:h-36 w-full"></div>

      {/* ═══════════════════════════════════════
          HERO SECTION (Forced explicit padding)
      ═══════════════════════════════════════ */}
      <section 
        className="relative overflow-hidden"
        style={{ paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <span 
            className="text-teal-700 font-bold tracking-widest uppercase text-sm block"
            style={{ marginBottom: '1.5rem' }}
          >
            Our Story
          </span>
          <h1 
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
            style={{ lineHeight: 1.15, marginBottom: '2rem' }}
          >
            More Than Just a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Tutoring Centre
            </span>
          </h1>
          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
          >
            The Study Zone is a whole new idea in education. Our mission is to spread knowledge and awareness, making learning easy, effective, and detailed for students everywhere.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR PHILOSOPHY GRID (Using .section-py and .card)
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader 
            eyebrow="Our Approach" 
            title="Teaching the Subjects, The Way They Are" 
            subtitle="This is a place where slow learners get full attention to catch the pace, and high-achievers get the push they need to hit top grades." 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2.5rem', marginTop: '4rem' }}>
            {principles.map((item, idx) => (
              <div key={idx} className="card flex flex-col h-full group" style={{ gap: '1.5rem' }}>
                <div className="w-16 h-16 shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white" style={{ marginBottom: '1rem' }}>{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-base break-words">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUPER HOST / CAREERS BANNER (Explicit paddings & gaps)
      ═══════════════════════════════════════ */}
      <section className="section-py relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div 
            className="card flex flex-col lg:flex-row items-center shadow-2xl"
            style={{ 
              backgroundColor: 'var(--color-card-bg)',
              padding: '4rem', 
              gap: '3rem' 
            }}
          >
            
            <div className="flex-1 text-center lg:text-left">
              <div 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 text-teal-700 font-semibold text-sm border border-teal-200"
                style={{ marginBottom: '2rem' }}
              >
                <UserGroupIcon className="w-5 h-5 shrink-0 text-teal-600" />
                Join Our Team
              </div>
              
              <h2 
                className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
                style={{ lineHeight: 1.15, marginBottom: '1.5rem' }}
              >
                Become a Study Zone <span className="text-indigo-400">Super Host</span>
              </h2>
              
              <p 
                className="text-slate-300 text-lg leading-relaxed break-words"
                style={{ marginBottom: '2.5rem' }}
              >
                We provide a "field to play" for newly graduated educators to explore their teaching potential. If you have space in your home to tutor students, we will provide the students and handle all the administrative work.
              </p>
              
              <ul className="flex flex-col items-center lg:items-start" style={{ gap: '1rem', marginBottom: '3rem' }}>
                <li className="flex items-start gap-3 text-slate-600 text-base">
                  <CheckBadgeIcon className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" /> 
                  <span>Administrative support handled entirely by us</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-base">
                  <CheckBadgeIcon className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" /> 
                  <span>Consistent and reliable student placements</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-base">
                  <CheckBadgeIcon className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" /> 
                  <span>Focus 100% of your energy on teaching and mentoring</span>
                </li>
              </ul>
              
              <Button to="/contact" variant="primary" className="w-full sm:w-auto text-lg py-4 px-8">
                Apply to be a Super Host
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}