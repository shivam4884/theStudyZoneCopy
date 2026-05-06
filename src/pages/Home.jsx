// src/pages/Home.jsx
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRightIcon, PhoneIcon, CheckCircleIcon, StarIcon,
  MapPinIcon, GlobeAltIcon, UserGroupIcon, AcademicCapIcon,
  ClockIcon, HeartIcon, CalculatorIcon, BeakerIcon, BookOpenIcon,
  ClipboardDocumentCheckIcon, TrophyIcon, CodeBracketIcon,
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

const iconMap = {
  'calculator': CalculatorIcon, 'beaker': BeakerIcon,
  'book-open': BookOpenIcon, 'academic-cap': AcademicCapIcon,
  'clipboard-document-check': ClipboardDocumentCheckIcon,
  'trophy': TrophyIcon, 'code-bracket': CodeBracketIcon,
  'heart': HeartIcon, 'star': StarIcon, 'user-group': UserGroupIcon
}

const stats = [
  { value: '500+', label: 'Students Helped', icon: UserGroupIcon },
  { value: '10+', label: 'Subjects Covered', icon: AcademicCapIcon },
  { value: 'K–12', label: 'Grade Range', icon: BookOpenIcon },
  { value: '100%', label: 'Free Assessment', icon: CheckCircleIcon },
]

const whyUs = [
  { icon: UserGroupIcon, title: 'Personalized 1-on-1 Attention', description: 'Every student receives a customized learning plan built around their unique strengths, weaknesses, and learning pace.' },
  { icon: AcademicCapIcon, title: 'Ontario-Certified Expert Tutors', description: 'Our educators are highly qualified, subject-matter experts who are passionate about student growth and success.' },
  { icon: GlobeAltIcon, title: 'In-Person & Online Flexibility', description: 'Choose in-person at our Brampton or Caledon centres, or attend seamless live online sessions from anywhere in the world.' },
  { icon: ClockIcon, title: 'Flexible Scheduling', description: 'Sessions available Monday through Friday, 10 AM to 8 PM, designed to fit your family\'s busy lifestyle.' },
]

const processSteps = [
  { step: '01', title: 'Free Assessment', description: 'We evaluate your child\'s strengths and areas of growth.' },
  { step: '02', title: 'Personalized Plan', description: 'A custom curriculum aligned to your school\'s standards.' },
  { step: '03', title: 'Expert Matching', description: 'We match your child with the ideal tutor for their needs.' },
  { step: '04', title: 'Interactive Sessions', description: 'Engaging, curriculum-aligned lessons in-person or online.' },
  { step: '05', title: 'Progress Monitoring', description: 'Regular assessments and transparent parent communication.' },
  { step: '06', title: 'School Collaboration', description: 'We align with classroom teachers for maximum synergy.' },
  { step: '07', title: 'Ongoing Resources', description: 'Study materials and practice exercises beyond sessions.' },
]

export default function Home() {
  const statsRef = useFadeIn()
  const servicesRef = useFadeIn()
  const whyRef = useFadeIn()
  const processRef = useFadeIn()
  const testimonialsRef = useFadeIn()
  const areasRef = useFadeIn()

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <div className="h-28 md:h-36 w-full"></div>

      {/* ════ HERO ════ */}
      <section className="relative flex flex-col items-center text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F4F7FB 0%, #EAF2F8 100%)', paddingBottom: '8rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(15, 118, 110, 0.15))', animation: 'pulse 8s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.18), rgba(37, 99, 235, 0.15))', animation: 'pulse 10s ease-in-out infinite' }} />

        <div className="container relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="max-w-4xl flex flex-col items-center">

            <div className="inline-flex items-center justify-center rounded-lg font-semibold bg-gradient-to-r from-slate-200 to-slate-100 border border-slate-300" style={{ padding: '0.75rem 1.25rem', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="w-2.5 h-2.5 rounded-full animate-pulse bg-blue-500 shrink-0" />
              <span className="text-sm md:text-base text-slate-700 break-words text-center">
                Now Accepting New Students — Brampton, Caledon & Online
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight break-words text-center" style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.15, marginBottom: '2rem' }}>
              <span className="text-slate-900">Expert Tutoring Where</span><br />
              <span className="bg-gradient-to-r from-blue-700 via-slate-800 to-teal-700 bg-clip-text text-transparent">
                Every Student Thrives
              </span>
            </h1>

            {/* FORCED MARGIN AUTO TO FIX SCREENSHOT ISSUE */}
            <p className="text-lg sm:text-xl max-w-3xl leading-relaxed text-slate-600 break-words text-center" style={{ margin: '0 auto 3rem auto' }}>
              Personalized Math, Science, English, IB, and STEM tutoring for JK to Grade 12 in Brampton, Caledon, and worldwide online.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: '1.5rem', margin: '0 auto 3rem auto' }}>
              <Button href="tel:16478494344" variant="primary" className="text-lg py-4 px-8 w-full sm:w-auto">
                <PhoneIcon className="w-6 h-6 shrink-0" /> Book Free Assessment
              </Button>
              <Button to="/services" variant="outline" className="text-lg py-4 px-8 w-full sm:w-auto">
                Explore Our Programs <ArrowRightIcon className="w-6 h-6 shrink-0" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center" style={{ gap: '1.5rem' }}>
              {['Free first assessment', 'In-person & online', 'JK to Grade 12', 'IB specialists'].map(item => (
                <span key={item} className="flex items-center text-sm md:text-base text-slate-600 font-medium" style={{ gap: '0.5rem' }}>
                  <CheckCircleIcon className="w-6 h-6 text-teal-500 shrink-0" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ STATS BAR ════ */}
      <section ref={statsRef} className="fade-in relative z-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl shadow-2xl backdrop-blur-md border border-slate-200"
            style={{ background: 'linear-gradient(135deg, rgba(244, 247, 251, 0.95) 0%, rgba(232, 239, 247, 0.95) 100%)', marginTop: '-4rem', padding: '2.5rem', gap: '2rem' }}>
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center hover:transform hover:-translate-y-1 transition-transform duration-300" style={{ gap: '1rem', alignItems: 'center' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-blue-200 shrink-0" style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.14), rgba(15, 118, 110, 0.12))' }}>
                  <Icon className="w-8 h-8 text-blue-700" />
                </div>
                <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>{value}</span>
                <span className="text-base font-medium text-slate-600 break-words">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SERVICES GRID ════ */}
      <section ref={servicesRef} className="fade-in" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container max-w-7xl mx-auto">
          <SectionHeader eyebrow="What We Offer" title="Comprehensive Tutoring Programs" subtitle="Expert, curriculum-aligned support for every subject, every grade, and every learning style — in-person and online." centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem', marginTop: '4rem' }}>
            {services.map(({ id, icon, title, description, link, badge }) => {
              const Icon = iconMap[icon] || AcademicCapIcon
              return (
                <Link key={id} to={link} className="card group relative flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300 shadow-lg no-underline" style={{ gap: '1.5rem', padding: '2.5rem', backgroundColor: 'rgba(244, 247, 251, 0.9)', alignItems: 'center' }}>
                  {badge && <span className="absolute top-6 right-6 text-xs font-bold px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 uppercase">{badge}</span>}
                  <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-blue-200" style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(15, 118, 110, 0.12))' }}>
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <div className="flex flex-col items-center" style={{ gap: '1rem' }}>
                    <h3 className="font-bold text-2xl text-slate-900 break-words" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h3>
                    <p className="text-base leading-relaxed text-slate-600 break-words">{description}</p>
                  </div>
                  <span className="flex items-center justify-center gap-2 text-base font-bold mt-auto text-blue-700 group-hover:text-blue-900 transition-colors uppercase pt-4 border-t border-slate-200 w-full">
                    Learn more <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="text-center" style={{ marginTop: '4rem' }}><Button to="/services" variant="primary" className="text-lg py-4 px-10">View All Programs <ArrowRightIcon className="w-6 h-6 shrink-0" /></Button></div>
        </div>
      </section>

      {/* ════ WHY CHOOSE TSZ ════ */}
      <section ref={whyRef} className="fade-in" style={{ backgroundColor: 'var(--color-section-alt)', padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '4rem' }}>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <SectionHeader eyebrow="The TSZ Difference" title="Why Families Choose The Study Zone" subtitle="We don't believe in one-size-fits-all education. Every student at TSZ receives a learning experience built specifically for them." />
              <div className="flex flex-col w-full" style={{ gap: '2rem', marginTop: '3rem' }}>
                {whyUs.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left" style={{ gap: '1.5rem' }}>
                    <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border border-teal-500/20" style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}><Icon className="w-7 h-7 text-teal-400" /></div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 break-words" style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>{title}</h4>
                      <p className="text-base leading-relaxed text-slate-600 break-words">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '3rem' }}><Button to="/about" variant="outline-dark" className="text-lg py-4 px-8">Learn About Our Approach <ArrowRightIcon className="w-5 h-5 shrink-0" /></Button></div>
            </div>

            <div className="relative w-full">
              <div className="rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center sm:items-start sm:text-left" style={{ background: 'linear-gradient(135deg, #EEF4FB 0%, #F4F7FB 100%)', padding: '3rem' }}>
                <h3 className="text-3xl font-extrabold text-slate-900 break-words w-full" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2.5rem' }}>Our Promise to You</h3>
                <ul className="flex flex-col w-full" style={{ gap: '1.5rem' }}>
                  {['Complimentary initial assessment — zero obligation', 'Curriculum-aligned, personalized lesson plans', 'Regular progress reports shared with parents', 'Flexible in-person and online session options', 'Qualified tutors for Ontario, IB & US curricula', 'Small class sizes for maximum attention'].map((item, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-base text-slate-600 break-words w-full" style={{ gap: '1rem' }}>
                      <CheckCircleIcon className="w-6 h-6 shrink-0 text-teal-500" />
                      <span style={{ lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-200 w-full flex justify-center sm:justify-start" style={{ marginTop: '3rem', paddingTop: '2rem' }}>
                  <a href="tel:16478494344" className="flex items-center text-xl text-blue-700 font-bold hover:text-teal-700 transition-colors no-underline" style={{ gap: '1rem' }}>
                    <PhoneIcon className="w-6 h-6 text-teal-500 shrink-0" /> Call (647) 849-4344
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ OUR PROCESS ════ */}
      <section ref={processRef} className="fade-in" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-7xl mx-auto">
          <SectionHeader eyebrow="How It Works" title="Our 7-Step Road to Academic Excellence" subtitle="A structured, proven process that ensures every student gets the support they need, when they need it." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem', marginTop: '4rem' }}>
            {processSteps.map(({ step, title, description }, index) => (
              <div key={step} className="card flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s`, gap: '1.25rem', padding: '2.5rem', backgroundColor: 'rgba(244, 247, 251, 0.95)', alignItems: 'center' }}>
                <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center font-black text-xl text-white border border-blue-200" style={{ background: 'linear-gradient(135deg, #133B66, #0F766E)' }}>{step}</div>
                <h4 className="font-bold text-xl text-slate-900 break-words" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h4>
                <p className="text-base leading-relaxed text-slate-600 break-words">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section ref={testimonialsRef} className="fade-in" style={{ backgroundColor: 'var(--color-section-alt)', padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-7xl mx-auto">
          <SectionHeader eyebrow="Student Stories" title="Real Results, Real Students" subtitle="Hear from the families who have experienced The Study Zone difference firsthand." centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem', marginTop: '4rem' }}>
            {testimonials.map(({ id, name, role, quote, rating, avatar }) => (
              <div key={id} className="card flex flex-col items-center text-center" style={{ gap: '1.5rem', padding: '2.5rem', backgroundColor: 'rgba(244, 247, 251, 0.95)', alignItems: 'center' }}>
                <div className="flex items-center justify-center w-full" style={{ gap: '0.25rem' }}>
                  {Array.from({ length: rating }).map((_, i) => <StarSolid key={i} className="w-6 h-6 text-amber-500 shrink-0" />)}
                </div>
                <blockquote className="text-lg leading-relaxed flex-1 text-slate-700 break-words italic w-full">"{quote}"</blockquote>
                <div className="flex flex-col items-center border-t border-slate-200 w-full" style={{ gap: '1rem', paddingTop: '1.5rem' }}>
                  <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-bold text-white text-base border border-blue-200" style={{ background: 'linear-gradient(135deg, #133B66, #0F766E)' }}>{avatar}</div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-base text-slate-900">{name}</p>
                    <p className="text-sm font-medium text-slate-600">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* (Service Areas & Final CTA remain the same as previous step, but explicitly verify text-center on Final CTA paragraph) */}
      <section
        style={{
          background: 'linear-gradient(135deg, #2563EB 0%, #0F766E 100%)',
          padding: '6rem 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div className="container max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="font-bold uppercase tracking-widest text-sm text-white/70 block" style={{ marginBottom: '1rem' }}>
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight break-words" style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Ready to Transform Your Academic Journey?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl break-words" style={{ margin: '0 auto 3rem auto' }}>
            Book your complimentary assessment session today. No commitment required — just a conversation about your child's goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center" style={{ gap: '1.5rem' }}>
            <Button href="tel:16478494344" variant="primary" className="text-lg px-10 py-5 w-full sm:w-auto shadow-xl" style={{ backgroundColor: 'white', color: '#1E3A8A' }}>
              <PhoneIcon className="w-6 h-6 shrink-0" /> Call (647) 849-4344
            </Button>
            <Button to="/contact" variant="outline" className="text-lg px-10 py-5 w-full sm:w-auto shadow-xl border-white/50 hover:bg-white/10 text-black">
              Book Free Assessment <ArrowRightIcon className="w-6 h-6 shrink-0" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}