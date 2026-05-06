// src/pages/Contact.jsx
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function Contact() {
  const contactMethods = [
    { icon: PhoneIcon,    label: 'Call or Text Us',  value: '1 (647) 849-4344',       href: 'tel:16478494344' },
    { icon: EnvelopeIcon, label: 'Email Us',         value: 'info@thestudyzone.ca',   href: 'mailto:info@thestudyzone.ca' },
    { icon: MapPinIcon,   label: 'Locations',        value: 'Brampton & Caledon, ON', href: null },
    { icon: ClockIcon,    label: 'Business Hours',   value: 'Mon–Fri: 10 AM – 8 PM',  href: null },
  ]

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      <div className="h-28 md:h-36 w-full"></div>

      {/* ════ HERO SECTION ════ */}
      <section 
        className="relative overflow-hidden text-center"
        style={{ paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-200 mb-6 shadow-lg">
            <SparklesIcon className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-sm font-bold text-teal-700 uppercase tracking-widest">
              Get In Touch
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            Start Your Academic <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
              Journey Today
            </span>
          </h1>
          
          {/* FORCED MARGIN AUTO TO FIX THE SCREENSHOT ISSUE */}
          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl break-words" 
            style={{ margin: '0 auto 2rem auto' }}
          >
            Book a free assessment, ask a question, or simply say hello. We are here to help your child succeed.
          </p>
        </div>
      </section>

      {/* ════ CONTACT CONTENT ════ */}
      <section className="section-py relative z-10" style={{ paddingBottom: '8rem', borderTop: '1px solid var(--color-border)' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: '4rem' }}>

            <div className="flex flex-col text-center lg:text-left" style={{ gap: '2rem' }}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white break-words" style={{ fontFamily: 'var(--font-heading)' }}>
                Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1" style={{ gap: '1.25rem' }}>
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <div 
                    key={label} 
                    className="card flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300 shadow-md" 
                    style={{ gap: '1rem', padding: '2rem', alignItems: 'center' }}
                  >
                    <div 
                      className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border border-teal-200 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'rgba(15, 118, 110, 0.08)' }}
                    >
                      <Icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <div className="flex flex-col items-center" style={{ gap: '0.25rem' }}>
                      <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-lg font-bold text-slate-900 hover:text-teal-700 transition-colors break-words no-underline">
                          {value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-slate-900 break-words">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card shadow-lg border border-teal-200 flex flex-col items-center text-center" style={{ backgroundColor: 'rgba(15, 118, 110, 0.08)', padding: '2rem', alignItems: 'center' }}>
                <h4 className="text-xl font-bold text-teal-700 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  WhatsApp Available
                </h4>
                <p className="text-base text-slate-700 leading-relaxed break-words">
                  You can also reach us via WhatsApp at <strong className="text-slate-900">(647) 849-4344</strong> for quick queries and immediate assistance.
                </p>
              </div>
            </div>

            <div className="card shadow-2xl border border-slate-200" style={{ backgroundColor: 'var(--color-card-bg)', padding: '3rem 2rem' }}>
              <h2 className="text-3xl font-extrabold text-slate-900 break-words text-center" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>
                Send Us a Message
              </h2>
              
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="flex flex-col text-left"
                style={{ gap: '1.5rem' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1.5rem' }}>
                  <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                    <label className="text-sm font-bold text-slate-700">First Name *</label>
                    <input type="text" name="firstName" required
                      className="px-4 py-3 rounded-xl border text-base outline-none transition-all bg-slate-50 border-slate-300 focus:border-teal-500 focus:bg-white focus:text-slate-900"
                      style={{ color: 'var(--color-text)' }}
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                    <label className="text-sm font-bold text-slate-700">Last Name *</label>
                    <input type="text" name="lastName" required
                      className="px-4 py-3 rounded-xl border text-base outline-none transition-all bg-slate-50 border-slate-300 focus:border-teal-500 focus:bg-white focus:text-slate-900"
                      style={{ color: 'var(--color-text)' }}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                  <label className="text-sm font-bold text-slate-700">Email Address *</label>
                  <input type="email" name="email" required
                    className="px-4 py-3 rounded-xl border text-base outline-none transition-all bg-slate-50 border-slate-300 focus:border-teal-500 focus:bg-white focus:text-slate-900"
                    style={{ color: 'var(--color-text)' }}
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" name="phone"
                    className="px-4 py-3 rounded-xl border text-base outline-none transition-all bg-slate-50 border-slate-300 focus:border-teal-500 focus:bg-white focus:text-slate-900"
                    style={{ color: 'var(--color-text)' }}
                    placeholder="(647) 000-0000"
                  />
                </div>

                <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                  <label className="text-sm font-bold text-slate-700">Subject / Program of Interest</label>
                  <select name="subject"
                    className="px-4 py-3 rounded-xl border text-base outline-none transition-all bg-slate-50 border-slate-300 focus:border-teal-500 focus:bg-white focus:text-slate-900 cursor-pointer"
                  >
                    <option value="" className="bg-white text-slate-900">Select a program...</option>
                    <option className="bg-white text-slate-900">Math Tutoring</option>
                    <option className="bg-white text-slate-900">Science Tutoring</option>
                    <option className="bg-white text-slate-900">English & Literacy</option>
                    <option className="bg-white text-slate-900">IB Program</option>
                    <option className="bg-white text-slate-900">EQAO / OSSLT Prep</option>
                    <option className="bg-white text-slate-900">SAT / ACT Prep</option>
                    <option className="bg-white text-slate-900">STEM & Coding</option>
                    <option className="bg-white text-slate-900">Kindergarten Readiness</option>
                    <option className="bg-white text-slate-900">Online Tutoring</option>
                    <option className="bg-white text-slate-900">Other</option>
                  </select>
                </div>

                <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                  <label className="text-sm font-bold text-slate-700">Message *</label>
                  <textarea name="message" required rows={5}
                    className="px-4 py-3 rounded-xl border text-base outline-none resize-none transition-all bg-slate-50 border-slate-300 focus:border-teal-500 focus:bg-white focus:text-slate-900"
                    style={{ color: 'var(--color-text)' }}
                    placeholder="Tell us about your child's grade level, subjects, and goals..."
                  />
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-extrabold text-white text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-teal-500/25"
                    style={{ background: 'linear-gradient(135deg, #0F766E, #2563EB)' }}
                  >
                    Send Message
                  </button>
                </div>
                
                <p className="text-sm text-center text-slate-600 mt-2">
                  We typically respond within 24 hours. For urgent inquiries, please call directly.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}