// src/pages/IBProgram.jsx
import { 
  AcademicCapIcon, 
  CheckCircleIcon,
  CalculatorIcon,
  BeakerIcon,
  BookOpenIcon,
  PencilSquareIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

export default function IBProgram() {
  const ibSubjects = [
    {
      icon: CalculatorIcon,
      title: 'IB Mathematics',
      desc: 'Expert guidance for both Analysis and Approaches (AA) and Applications and Interpretation (AI) at the Higher Level (HL) and Standard Level (SL).',
      color: 'indigo'
    },
    {
      icon: BeakerIcon,
      title: 'IB Sciences',
      desc: 'Rigorous support for IB Physics, IB Chemistry, and IB Biology (HL & SL). We focus on deep conceptual understanding and Paper 1, 2, and 3 exam strategies.',
      color: 'teal'
    },
    {
      icon: BookOpenIcon,
      title: 'IB English & Literature',
      desc: 'Master literary analysis, commentary writing, and comparative essays required for IB Language A: Literature and Language & Literature (HL & SL).',
      color: 'purple'
    },
    {
      icon: PencilSquareIcon,
      title: 'The IB Core: IA, EE & TOK',
      desc: 'Targeted mentoring for Internal Assessments (IAs), the Extended Essay (EE) research process, and Theory of Knowledge (TOK) essays and exhibitions.',
      color: 'emerald'
    }
  ]

  const ibAdvantages = [
    'Tutors who are IB Alumni or specifically trained in the IB grading rubric.',
    'Targeted strategies for Paper 1, Paper 2, and Paper 3 exam formats.',
    'Step-by-step guidance on structuring high-scoring Internal Assessments (IAs).',
    'Focus on critical thinking and real-world application, not just memorization.'
  ]

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* ── SPACER TO CLEAR FIXED NAVBAR ── */}
      <div className="h-28 md:h-36 w-full"></div>

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section 
        className="relative overflow-hidden"
        style={{ paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-200 mb-8 shadow-lg text-teal-700 font-bold uppercase tracking-widest text-sm">
            <AcademicCapIcon className="w-5 h-5 shrink-0 text-teal-600" />
            Specialized IB Support
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ lineHeight: 1.15, marginBottom: '2rem' }}
          >
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">IB Curriculum</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-700 font-semibold mb-6 break-words">
            Expert Tutoring: Grade 9 Pre-IB through Grade 12 (HL & SL)
          </h2>

          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
          >
            The International Baccalaureate (IB) Diploma Programme is one of the most rigorous high school curriculums in the world. Our specialized IB tutors provide the targeted support required to achieve 7s in your HL and SL subjects.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button to="/contact" variant="primary" className="w-full sm:w-auto text-lg px-10 py-4 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
              Get IB Support
            </Button>
            <Button href="tel:16478494344" variant="outline" className="w-full sm:w-auto text-lg px-10 py-4">
              Call (647) 849-4344
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY SPECIALIZED IB SUPPORT?
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '4rem' }}>
            
            {/* Left: Text */}
            <div>
              <SectionHeader 
                eyebrow="Expert Guidance" 
                title="Why You Need Specialized IB Support" 
              />
              <p className="text-lg text-slate-600 leading-relaxed break-words" style={{ marginBottom: '1.5rem' }}>
                Standard high school tutoring doesn't work for the IB program. The curriculum requires deep critical thinking, real-world application, and mastery of very specific assessment criteria.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed break-words" style={{ marginBottom: '2.5rem' }}>
                At The Study Zone, we know exactly what IB examiners are looking for. We help students navigate the overwhelming workload by breaking down the rubric, streamlining their study process, and building the analytical skills required to excel.
              </p>
              <Button to="/services" variant="outline-dark" className="text-lg py-4 px-8">
                Explore All Services <ArrowRightIcon className="w-5 h-5 shrink-0" />
              </Button>
            </div>

            {/* Right: Feature Card */}
            <div className="card shadow-2xl border border-slate-200" style={{ backgroundColor: 'var(--color-card-bg)', padding: '3rem' }}>
              <h3 className="text-2xl font-extrabold text-slate-900 break-words" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>
                The TSZ IB Advantage
              </h3>
              <ul className="flex flex-col" style={{ gap: '1.5rem' }}>
                {ibAdvantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start text-base text-slate-700 break-words" style={{ gap: '1rem' }}>
                    <CheckCircleIcon className="w-6 h-6 shrink-0 text-teal-500 mt-0.5" />
                    <span style={{ lineHeight: 1.6 }}>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUBJECTS GRID
      ═══════════════════════════════════════ */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeader 
            eyebrow="Our IB Offerings" 
            title="Comprehensive HL & SL Coverage" 
            subtitle="From the sciences to the core requirements, we provide end-to-step support for the entire diploma program."
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem', marginTop: '4rem' }}>
            {ibSubjects.map((item, idx) => (
              <div 
                key={idx} 
                className="card flex flex-col sm:flex-row items-start hover:-translate-y-1 transition-transform duration-300 shadow-lg group" 
                style={{ gap: '1.5rem', padding: '2.5rem', backgroundColor: 'var(--color-card-bg)' }}
              >
                <div 
                  className={`w-16 h-16 shrink-0 border rounded-2xl flex items-center justify-center transition-colors duration-300 border-${item.color}-500/20 bg-${item.color}-500/10 group-hover:bg-${item.color}-500/20`}
                >
                  <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 break-words" style={{ marginBottom: '1rem' }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-base break-words">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="section-py text-center" style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-3xl mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight break-words" 
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.2, marginBottom: '1.5rem' }}
          >
            Ready to secure your Level 7?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed break-words" style={{ marginBottom: '3rem' }}>
            Don't wait until exam season. Get ahead of your Internal Assessments and master the syllabus early. Call or email us for a free IB consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center" style={{ gap: '1.5rem' }}>
            <Button href="tel:16478494344" variant="outline-dark" className="w-full sm:w-auto text-lg px-10 py-4 text-slate-900 border-slate-300 hover:border-teal-500 hover:text-teal-700">
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