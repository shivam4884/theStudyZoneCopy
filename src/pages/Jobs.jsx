// src/pages/Jobs.jsx
import { 
  BriefcaseIcon, 
  CheckCircleIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  HeartIcon
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
      <section className="section-py relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Grow With Us</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 break-words">
            At 'The Study Zone', we value our tutors and provide ongoing professional development opportunities to enhance their teaching skills. We offer flexible schedules and competitive compensation. Join our team and make a difference in the lives of students as they achieve academic success and confidence.
          </p>

          {/* Alert / Note Box */}
          <div className="flex flex-col md:flex-row text-left items-start md:items-center p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-10 shadow-sm" style={{ gap: '1.5rem' }}>
            <InformationCircleIcon className="w-8 h-8 text-amber-500 shrink-0 hidden md:block" />
            <p className="text-slate-700 text-sm md:text-base leading-relaxed break-words font-medium">
              <strong className="text-amber-500 tracking-wide uppercase">Strict Policy Note:</strong> We have a strict policy in place to select the best tutors. Please <strong>DO NOT call</strong>. Submit your application using the email below and we will follow up if you meet our selection criteria.
            </p>
          </div>

          <p className="text-lg text-slate-700 font-medium mb-8">
            To apply, please submit your resume and a cover letter outlining your experience and passion for tutoring. We look forward to hearing from you!
          </p>

          <Button href="mailto:info@thestudyzone.ca" variant="primary" className="w-full sm:w-auto text-lg px-12 py-5 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40">
            <EnvelopeIcon className="w-6 h-6 shrink-0" />
            E-mail Resume to Apply
          </Button>

          {/* Equal Opportunity Box */}
          <div className="mt-16 pt-8 border-t border-slate-800 text-left">
            <div className="flex items-center gap-2 mb-3">
              <HeartIcon className="w-5 h-5 text-teal-500 shrink-0" />
              <h4 className="text-slate-900 font-bold tracking-wide uppercase text-sm">Equal Opportunity Employer</h4>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed break-words italic">
              'The Study Zone' celebrates diversity and is committed to creating an inclusive environment for all employees. We welcome applications from qualified candidates of every background. Our hiring decisions are based on qualifications, merit, and business need.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}