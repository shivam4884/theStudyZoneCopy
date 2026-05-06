// src/pages/SummerProgram.jsx
import { 
  SunIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
  HeartIcon,
  SparklesIcon,
  UserIcon,
  CheckCircleIcon,
  MapPinIcon,
  ArrowRightIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

export default function SummerProgram() {
  const summerBenefits = [
    {
      icon: ComputerDesktopIcon,
      title: 'Summer Coding & AI Explorations',
      desc: "Beyond just screen time, your child will dive into the exciting world of technology, developing critical problem-solving skills, logical thinking, and a foundational understanding of AI that's essential for tomorrow's world. It's tech education made fun and future-ready!",
      color: 'blue'
    },
    {
      icon: BookOpenIcon,
      title: 'Numeracy & Literacy Boosters',
      desc: "We don't just review; we strengthen core academic muscles. Through engaging, interactive activities, your child will build genuine confidence and mastery in essential math and reading abilities, ensuring they return to school sharper and more prepared than ever.",
      color: 'teal'
    },
    {
      icon: HeartIcon,
      title: 'Stress Management & Awareness',
      desc: "Equip your child with invaluable life skills! Our sessions help them understand and manage emotions, fostering resilience, self-awareness, and healthy coping strategies crucial for navigating challenges both in and out of the classroom.",
      color: 'rose'
    },
    {
      icon: SparklesIcon,
      title: 'Creative Enrichment Activities',
      desc: "Spark imagination and encourage self-expression! From captivating storytelling to exciting hands-on science experiments, these activities foster innovative thinking, creativity, and a lifelong love for learning.",
      color: 'amber'
    },
    {
      icon: UserIcon,
      title: 'Personalized Learning Paths',
      desc: "This isn't one-size-all. Every child receives tailored support and customized learning plans, ensuring they get exactly what they need to thrive—whether it's catching up, getting ahead, or exploring new passions.",
      color: 'indigo'
    }
  ]

  const programFeatures = [
    'Coding Classes',
    'Grammar Enhancement program',
    'Writing Skills Improvement Activities',
    'Punjabi Classes',
    'Movie Day (on last day of camp)'
  ]

  const subjects = [
    'Basic math skills',
    'Word problem strategies',
    'Mental math strategies',
    'Preparation for next grade',
    'Grammar improvement (punctuation, parts of speech, tenses)',
    'Vocabulary (learning new words every day)',
    'Improving sentence structure',
    'Reading improvement'
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-200 mb-8 shadow-lg text-teal-700 font-bold uppercase tracking-widest text-sm">
            <SunIcon className="w-5 h-5 shrink-0 text-teal-600" />
            Summer Learning
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ lineHeight: 1.15, marginBottom: '2rem' }}
          >
            Summer Tutoring & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Enrichment</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
          >
            Are you looking for summer tutoring or an engaging summer learning program for your child in Brampton or Caledon? Our summer program is thoughtfully designed to keep young minds active, confident, and curious.
          </p>

          <div className="bg-white border border-slate-200 rounded-3xl text-left shadow-2xl" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <div className="flex items-start gap-4">
              <InformationCircleIcon className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">The "Summer Slide" is Real</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  According to national research published in the American Educational Research Journal, <strong className="text-teal-600">"Children lose up to 40% of the gains they have made over the school year while on summer break."</strong> This summer, don't let your children fall behind. Turn potential learning loss into a season of growth and achievement!
                </p>
                <a href="https://www.aera.net/Newsroom/Study-More-than-Half-of-US-Students-Experience-Summer-Learning-Losses-Five-Years-in-a-Row" target="_blank" rel="noreferrer" className="inline-block mt-3 text-teal-600 text-sm hover:text-teal-500 underline">Read the detailed report here</a>
              </div>
            </div>
          </div>

          <Button href="https://forms.gle/qLAw58Q1PzmugiTs8" target="_blank" variant="primary" className="text-lg px-10 py-4 shadow-lg shadow-teal-400/20 bg-gradient-to-r from-teal-600 to-blue-600 text-white border-none">
            Enroll Your Child Today
            <ArrowRightIcon className="w-5 h-5 shrink-0" />
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE OUR SUMMER PROGRAM
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <SectionHeader 
            eyebrow="Program Highlights" 
            title="Why Choose TSZ's Summer Programs?" 
            subtitle="The perfect blend of enriching academic support and joyful discovery!"
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem', marginTop: '4rem' }}>
            {summerBenefits.map((item, idx) => (
              <div 
                key={idx} 
                className="card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300 shadow-lg" 
                style={{ gap: '1.5rem', padding: '2.5rem', backgroundColor: 'var(--color-card-bg)' }}
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center bg-${item.color}-500/10 border border-${item.color}-500/20 transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 break-words" style={{ marginBottom: '1rem', lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base break-words">
                    <span dangerouslySetInnerHTML={{ __html: item.desc.replace(/tech education|critical problem-solving skills, logical thinking, and a foundational understanding of AI|strengthen core academic muscles|confidence and mastery|math tutoring|reading tutoring|resilience, self-awareness, and healthy coping strategies|emotional intelligence|innovative thinking, creativity, and a lifelong love for learning|summer skill-building|creative learning|tailored support and customized learning plans|individualized tutoring/gi, match => `<strong class="text-slate-900">${match}</strong>`) }} />
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Callouts */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
             <div className="bg-gradient-to-br from-teal-500/15 to-blue-500/10 border border-teal-200 rounded-3xl p-8 flex items-center justify-center text-center">
               <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                 This summer we are offering <br/><span className="text-teal-700">FREE PUNJABI CLASSES!</span>
               </h3>
             </div>
             <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-center">
               <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <MapPinIcon className="w-6 h-6 text-teal-500" /> Convenient Locations
               </h4>
               <p className="text-slate-600 mb-2">We're thrilled to announce our summer tutoring programs are available to serve families in the Peel Region at:</p>
               <ul className="text-slate-700 font-semibold flex flex-col gap-2 mt-2">
                 <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-500" /> Brampton, ON</li>
                 <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-500" /> Caledon, ON</li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT WE COVER
      ═══════════════════════════════════════ */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '4rem' }}>
            
            {/* Features List */}
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Program Features</h3>
              <ul className="flex flex-col" style={{ gap: '1.25rem' }}>
                {programFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-slate-700 font-medium bg-white p-4 rounded-2xl border border-slate-200">
                    <SparklesIcon className="w-6 h-6 text-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects List */}
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Language & Math Focus</h3>
              <ul className="flex flex-col" style={{ gap: '1rem' }}>
                {subjects.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-slate-700">
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
          CTA
      ═══════════════════════════════════════ */}
      <section className="section-py text-center" style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Confirm Your Child's Spot Today!</h2>
          <p className="text-lg text-slate-600 mb-8">
            Ready to enroll or have questions about our summer programs? Complete our quick Google Form to confirm your child's spot, or feel free to reach out with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Button href="https://forms.gle/qLAw58Q1PzmugiTs8" target="_blank" variant="primary" className="text-lg px-8 py-4">
               Enroll via Google Form <ArrowRightIcon className="w-5 h-5 shrink-0" />
             </Button>
             <Button href="tel:16478494344" variant="outline" className="text-lg px-8 py-4">
               Call (647) 849-4344
             </Button>
          </div>
        </div>
      </section>

    </div>
  )
}