// src/pages/Registration.jsx
import { 
  ClipboardDocumentCheckIcon, 
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function Registration() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* ── SPACER TO CLEAR FIXED NAVBAR ── */}
      <div className="h-28 md:h-36 w-full"></div>

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section 
        className="relative overflow-hidden text-center"
        style={{ paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        {/* Background glow effects */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-200 mb-6 shadow-lg">
            <SparklesIcon className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-sm font-bold text-teal-700 uppercase tracking-widest">
              Join The Study Zone
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Registration</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
          >
            Take the first step toward academic success. Fill out the registration form below to secure your child's spot in our expert tutoring programs.
          </p>

          {/* Trust Props */}
          <div className="flex flex-col sm:flex-row justify-center items-center max-w-2xl mx-auto" style={{ gap: '2rem', marginBottom: '2rem' }}>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-6 h-6 text-teal-400" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Quick & Easy</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-6 h-6 text-teal-400" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Secure Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <ClipboardDocumentCheckIcon className="w-6 h-6 text-teal-400" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Guaranteed Match</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EMBEDDED FORM SECTION
      ═══════════════════════════════════════ */}
      <section className="section-py relative z-10" style={{ paddingBottom: '8rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="container max-w-4xl mx-auto">
          
          {/* Card Wrapper for the Iframe */}
          <div 
            className="rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative"
            style={{ 
              backgroundColor: 'var(--color-card-bg)', 
              padding: '2rem 1rem'
            }}
          >
            {/* 
              Exact JotForm Iframe extracted from your HTML 
              (Min-height adjusted to ensure it fits the form contents beautifully)
            */}
            <div className="w-full flex justify-center" style={{ minHeight: '600px' }}>
              <iframe
                id="JotFormIFrame-202315089397258"
                title="TSZ registration form"
                onLoad={() => window.parent.scrollTo(0,0)}
                allowTransparency="true"
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/Sgillz/TSZ-registration-form"
                frameBorder="0"
                style={{ minWidth: '100%', maxWidth: '100%', height: '600px', border: 'none' }}
                scrolling="yes"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}