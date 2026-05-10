// src/pages/Jobs.jsx
import { 
  BriefcaseIcon, 
  CheckCircleIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  HeartIcon,
  AcademicCapIcon, 
  ClockIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
export default function Jobs() {
  const responsibilities = [
    "Provide one-on-one and group tutoring sessions to students in various subjects, including math, science, English, and more.",
    "Assess students' strengths and weaknesses to develop tailored learning plans.",
    "Create engaging and interactive lessons to promote student understanding and engagement.",
    "Monitor student progress and provide regular feedback to students and parents/guardians.",
    "Collaborate with the tutoring center team to develop and implement effective teaching strategies.",
    "Maintain a positive and supportive learning environment for students."
  ]

  const qualifications = [
    "Bachelor's degree in Education, or related field (preferred).",
    "Previous tutoring or teaching experience is an asset.",
    "Strong knowledge and understanding of the subject matter.",
    "Excellent communication and interpersonal skills.",
    "Patient, adaptable, and able to work effectively with students of diverse backgrounds and learning styles.",
    "Legally authorized to work in Canada or USA."
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
        style={{ paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-200 mb-8 shadow-lg text-teal-700 font-bold uppercase tracking-widest text-sm">
            <BriefcaseIcon className="w-5 h-5 shrink-0 text-teal-600" />
            Careers
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ lineHeight: 1.15, marginBottom: '2rem' }}
          >
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">'The Study Zone'</span> Team!
          </h1>
          
          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
          >
            Are you passionate about education and helping students reach their full potential? 'The Study Zone' is seeking dedicated and enthusiastic tutors to join our team. As a leading tutoring center in the area, we strive to provide personalized and effective tutoring services to students of all ages and grade levels.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REQUIREMENTS & QUALIFICATIONS
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)' }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '3rem' }}>
            
            {/* Responsibilities Column */}
            <div className="card shadow-lg border border-slate-200" style={{ backgroundColor: 'var(--color-card-bg)', padding: '3rem' }}>
              <h3 className="text-2xl font-extrabold text-slate-900" style={{ marginBottom: '2rem' }}>
                Responsibilities
              </h3>
              <ul className="flex flex-col" style={{ gap: '1.5rem' }}>
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start text-base text-slate-700 break-words" style={{ gap: '1rem' }}>
                    <CheckCircleIcon className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                    <span style={{ lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications Column */}
            <div className="card shadow-lg border border-slate-200" style={{ backgroundColor: 'var(--color-card-bg)', padding: '3rem' }}>
              <h3 className="text-2xl font-extrabold text-slate-900" style={{ marginBottom: '2rem' }}>
                Qualifications
              </h3>
              <ul className="flex flex-col" style={{ gap: '1.5rem' }}>
                {qualifications.map((item, idx) => (
                  <li key={idx} className="flex items-start text-base text-slate-700 break-words" style={{ gap: '1rem' }}>
                    <CheckCircleIcon className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                    <span style={{ lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY JOIN US / OUTRO
      ═══════════════════════════════════════ */}
      <section 
  className="py-20 relative overflow-hidden bg-slate-50/50" 
  style={{ borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}
>
  {/* Subtle ambient background glows */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
    <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
  </div>

  <div className="container max-w-5xl mx-auto px-4 relative z-10">
    
    {/* ── HEADER ── */}
    <div className="text-center max-w-2xl mx-auto mb-16"
            style={{ margin: '0 auto 3rem auto' }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        <AcademicCapIcon className="w-4 h-4 text-blue-600" />
        Careers at TSZ
      </div>
      <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
        Grow With Us
      </h2>
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
        Join an elite team dedicated to student success. We empower our tutors with premium support, continuous growth, and absolute scheduling flexibility.
      </p>
    </div>

    {/* ── SCANNABLE PERKS GRID ── */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs hover:border-blue-200 hover:shadow-md transition-all"
      style={{padding: '15px'}}>
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600 font-bold">
          <AcademicCapIcon className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2">Ongoing PD</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          Access continuous professional development opportunities to refine your educational methodologies and leadership skills.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs hover:border-teal-200 hover:shadow-md transition-all"style={{padding: '15px'}}>
        <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-600 font-bold">
          <ClockIcon className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2">Flexible Schedules</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          Build a tutoring timetable that fits your life perfectly. Teach online or in-person based on your personal availability.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs hover:border-blue-200 hover:shadow-md transition-all" style={{padding: '15px'}}>
        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 text-indigo-600 font-bold">
          <CurrencyDollarIcon className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2">Premium Pay</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          We attract top-tier talent by offering highly competitive compensation packages that reflect your expertise and dedication.
        </p>
      </div>

    </div>

    {/* ── FOCAL APPLICATION PANEL ── */}
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden"
      style={{ padding: '15px', maxWidth: '800px', margin: '1rem auto 4rem auto' }}>
      
      {/* Strict Policy Banner */}
      <div className="p-6 sm:px-10 bg-amber-50 border-b border-amber-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left"
            style={{ padding: '1rem' }}
      >
        <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
          <InformationCircleIcon className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <span className="font-bold text-xs text-amber-800 tracking-wider uppercase block mb-0.5">
            Application Policy Notice
          </span>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed m-0">
            To maintain our high operational standards, please <strong>DO NOT call</strong> our parent support line. All screening is handled exclusively via digital application.
          </p>
        </div>
      </div>

      {/* Action Area */}
      <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto"
            style={{ margin: '1rem auto 1rem auto' }}
      >
        <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to inspire the next generation?</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto">
          Submit your comprehensive resume and a brief cover letter outlining your academic specialties and passion for mentorship.
        </p>

        <Button 
          href="mailto:info@thestudyzone.ca" 
          variant="primary" 
          className="w-full sm:w-auto text-base font-bold px-10 py-4 justify-center bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all rounded-xl"
        >
          <EnvelopeIcon className="w-5 h-5 shrink-0 mr-2" />
          Submit Resume via Email
        </Button>
      </div>

    </div>

    {/* ── EQUAL OPPORTUNITY FOOTER (Corrected to light theme borders) ── */}
    <div className="mt-12 pt-8 border-t border-slate-200 text-left max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <HeartIcon className="w-4 h-4 text-teal-600 shrink-0" />
        <h4 className="text-slate-900 font-extrabold tracking-wider uppercase text-xs">
          Equal Opportunity Employer
        </h4>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed italic m-0">
        'The Study Zone' celebrates diversity and is committed to creating an inclusive environment for all employees. We welcome applications from qualified candidates of every background. Our hiring decisions are based entirely on qualifications, merit, and business need.
      </p>
    </div>

  </div>
</section>
    </div>
  )
}