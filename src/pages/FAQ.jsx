// src/pages/FAQ.jsx
import { useState } from 'react'
import { 
  QuestionMarkCircleIcon, 
  ChevronDownIcon,
  LinkIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Exact questions and answers extracted from your HTML
  const faqs = [
    {
      q: "What subjects do you offer tutoring in?",
      a: "We provide tutoring services in a wide range of subjects, including math, science, English, and foreign languages. Our experienced tutors specialize in various disciplines to cater to the diverse academic needs of our students."
    },
    {
      q: "What grade levels do you cater to?",
      a: "Our tutoring services are available for students from elementary school to high school, as well as college-level students. We have qualified tutors who specialize in different grade levels and subjects to ensure targeted support for every student."
    },
    {
      q: "How are your tutors selected?",
      a: "Our tutors undergo a rigorous selection process. They are highly qualified professionals, including certified teachers, subject matter experts, and experienced tutors. We carefully assess their educational background, teaching experience, subject knowledge, and commitment to helping students succeed."
    },
    {
      q: "Is tutoring available in a group or individual setting?",
      a: "We offer both group and individual tutoring options. Group sessions foster collaborative learning and interaction with peers, while individual sessions provide personalized attention and address specific learning needs. The choice between group or individual tutoring depends on the student's preferences and requirements."
    },
    {
      q: "How are tutoring sessions structured?",
      a: "Our tutoring sessions are tailored to each student's needs. Our tutors assess the student's current understanding, identify areas for improvement, and create personalized learning plans. Sessions typically include concept review, problem-solving practice, thorough explanations, and addressing any questions or concerns."
    },
    {
      q: "What is the duration and frequency of tutoring sessions?",
      a: "The duration and frequency of tutoring sessions can vary based on the student's needs and availability. Typically, sessions range from 60 to 90 minutes, and the frequency can be once or twice a week. We work with students and their families to determine the most suitable schedule that promotes consistent progress."
    },
    {
      q: "How do you track a student's progress?",
      a: "We believe in tracking student progress to ensure their growth and success. Our tutors maintain detailed records of each student's performance, tracking areas of improvement and milestones achieved. Additionally, we provide regular progress reports to parents, keeping them informed about their child's progress and identifying areas that may require additional attention."
    },
    {
      q: "What is the pricing structure for your tutoring services?",
      a: "Our pricing structure is competitive and varies based on factors such as subject, grade level, session type (group or individual), and duration. For detailed pricing information, please contact our center. We offer various packages to accommodate different budgets."
    },
    {
      q: "How can I enroll my child for tutoring sessions?",
      a: "Enrolling your child is simple. You can reach out to our center via phone, email, or visit us in person. Our friendly staff will guide you through the enrollment process, discuss your child's needs, and help you select the appropriate tutoring program. You can also register by using our website after discussing all your needs and schedule options."
    },
    {
      q: "Can I request a specific tutor for my child?",
      a: "While we cannot guarantee specific tutor assignments, we consider requests and strive to accommodate them whenever possible. Factors such as tutor availability, subject expertise, and student compatibility are taken into account to ensure a positive tutoring experience."
    }
  ]

  const usefulLinks = [
    { title: "Trendy Tech Finds (Must have items)", url: "https://trendytechfinds.blogspot.com/" },
    { title: "Informational and motivational articles", url: "https://www.future.thestudyzone.ca/" },
    { title: "Home Inspectors", url: "https://www.inspectfirst.net/" }
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
        style={{ paddingBottom: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-200 mb-6 shadow-lg text-teal-700 font-bold uppercase tracking-widest text-sm">
            <QuestionMarkCircleIcon className="w-5 h-5 shrink-0 text-teal-600" />
            Help Center
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Questions</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">Everything you need to know about our tutoring programs, scheduling, and enrollment.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACCORDION FAQ LIST
      ═══════════════════════════════════════ */}
      <section className="section-py relative z-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col" style={{ gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div 
                  key={index}
                  className="rounded-2xl border transition-all duration-300 overflow-hidden"
                  style={{ 
                    backgroundColor: isOpen ? 'var(--color-section-alt)' : 'var(--color-card-bg)',
                    borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)'
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left p-6 hover:bg-slate-100 transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 pr-4 leading-snug">{faq.q}</h3>
                    <div 
                      className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-slate-500" />
                    </div>
                  </button>
                  
                  <div 
                    className="transition-all duration-300 ease-in-out"
                    style={{ 
                      maxHeight: isOpen ? '500px' : '0px', 
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-slate-200 mt-2">
                      <p className="text-base text-slate-700 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICE AREAS & USEFUL LINKS
      ═══════════════════════════════════════ */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '3rem' }}>
            
            {/* Service Areas */}
            <div className="card shadow-lg border border-slate-200 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <GlobeAltIcon className="w-8 h-8 text-teal-600" />
                <h3 className="text-2xl font-bold text-slate-900">Online Tutoring Areas</h3>
              </div>
              <p className="text-slate-600 mb-4">We provide our Best Tutoring Services in, but not limited to:</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-bold">Canada</span>
                <span className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-bold">United States (USA)</span>
                <span className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-bold">Australia</span>
                <span className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-bold">...and your place next!</span>
              </div>
            </div>

            {/* Useful Links */}
            <div className="card shadow-lg border border-slate-200 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <LinkIcon className="w-8 h-8 text-teal-600" />
                <h3 className="text-2xl font-bold text-slate-900">Some Useful Links</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {usefulLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-teal-700 hover:text-teal-900 hover:underline underline-offset-4 font-medium transition-colors"
                    >
                      {link.title}
                    </a>
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