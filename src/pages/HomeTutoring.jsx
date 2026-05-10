// src/pages/HomeTutoring.jsx
import { 
  HomeIcon,
  AcademicCapIcon, 
  DocumentCheckIcon, 
  ChartBarSquareIcon,
  CurrencyDollarIcon,
  PuzzlePieceIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

export default function HomeTutoring() {
  const benefits = [
    {
      icon: AcademicCapIcon,
      title: 'Top-Quality Tutors',
      desc: 'We handpick highly qualified tutors who are experts in their respective subjects. They have a deep understanding of the Ontario curriculum and are dedicated to providing personalized attention to each student. All our tutors are Ontario Certified and Experienced.'
    },
    {
      icon: DocumentCheckIcon,
      title: 'Customized Learning Plans',
      desc: 'At \'The Study Zone\', we understand that every student is unique. That\'s why we create tailored learning plans to address their specific needs and learning styles. Whether your child needs help with math, science, English, or any other subject, we\'ve got them covered.'
    },
    {
      icon: HomeIcon,
      title: 'Convenient Home Tutoring',
      desc: 'Say goodbye to stressful commutes and rigid schedules! Our tutors come to your home at a time that suits your family\'s routine. Enjoy the comfort and convenience of learning in a familiar environment, while ensuring the safety and well-being of your child.'
    },
    {
      icon: ChartBarSquareIcon,
      title: 'Proven Results',
      desc: 'We take pride in our track record of success. Our students have consistently shown significant improvement in their grades and overall academic performance. With \'The Study Zone\', you can be confident that your child will reach their full potential.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Affordable Packages',
      desc: 'We believe that quality education should be accessible to all. That\'s why we offer flexible and affordable tutoring packages to fit any budget. Invest in your child\'s future without breaking the bank.'
    },
    {
      icon: PuzzlePieceIcon,
      title: 'Holistic Approach',
      desc: 'Our tutors not only focus on academics but also foster essential skills like critical thinking, problem-solving, and time management. We aim to develop well-rounded individuals who are ready to thrive in the competitive world.'
    }
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
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-teal-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-200 mb-8 shadow-lg text-teal-700 font-bold uppercase tracking-widest text-sm">
            <HomeIcon className="w-5 h-5 shrink-0 text-teal-600" />
            In-Home Excellence
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight"
            style={{ lineHeight: 1.15, marginBottom: '2rem' }}
          >
            Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Home Tutoring</span> Solution
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-700 font-semibold mb-6">
            Serving Brampton and the surrounding area!
          </h2>

          <p 
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
          >
            Are you looking for exceptional academic support for your child? Look no further than 'The Study Zone', Brampton's premier home tutoring service. With our team of expert tutors and personalized approach, we're here to help your child excel in their studies.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BENEFITS GRID
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-section-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader 
            eyebrow="Why Choose The Study Zone?" 
            title="The Advantages of In-Home Tutoring" 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2.5rem', marginTop: '4rem' }}>
            {benefits.map((item, idx) => (
              <div 
                key={idx} 
                className="card flex flex-col h-full group hover:border-teal-500/50 transition-colors shadow-lg" 
                style={{ gap: '1.5rem', backgroundColor: 'var(--color-card-bg)' }}
              >
                <div className="w-16 h-16 shrink-0 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-teal-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 break-words" style={{ marginBottom: '1rem' }}>
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
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="section-py relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ lineHeight: 1.2, marginBottom: '1.5rem' }}
          >
            Empower Them to Succeed
          </h2>
          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
          >
            Boost your child's confidence and unlock their academic potential with The Study Zone's exceptional home tutoring services in Brampton and GTA. Don't let their grades hold them back!
          </p>
          <p 
            className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
          >
            Act now, give us a call or register online and give your child the academic advantage they deserve with 'The Study Zone'. Together, we'll pave the way for a brighter future!
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button to="/registration" variant="primary" className="w-full sm:w-auto text-lg px-10 py-4">
              Register Online Now
              <ArrowRightIcon className="w-5 h-5 shrink-0" />
            </Button>
            <Button href="tel:16478494344" variant="outline" className="w-full sm:w-auto text-lg px-10 py-4">
              Call (647) 849-4344
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}