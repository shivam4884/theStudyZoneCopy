// src/pages/Feedback.jsx
import { 
  ChatBubbleLeftRightIcon, 
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function Feedback() {
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
              Your Opinion Matters
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Feedback</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto break-words" style={{ marginBottom: '3rem' }}>
            We are constantly striving to improve The Study Zone experience. Whether you're a parent or a student, we would love to hear about your journey with us.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto" style={{ marginBottom: '2rem' }}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-200 flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Tell Us How We Did</h3>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-200 flex items-center justify-center">
                <StarIcon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Help Us Improve</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EMBEDDED FORM SECTION
      ═══════════════════════════════════════ */}
      <section className="section-py relative z-10" style={{ paddingBottom: '8rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="container max-w-5xl mx-auto">
          
          {/* Card Wrapper for the Iframe */}
          <div 
            className="rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative"
            style={{ 
              backgroundColor: 'var(--color-card-bg)', 
              padding: '2rem 1rem'
            }}
          >
            {/* 
              Exact Microsoft Form Iframe extracted from your HTML 
              (Min-height added to ensure it doesn't get cut off)
            */}
            <div className="w-full flex justify-center" style={{ minHeight: '650px' }}>
              <iframe 
                width="1450px" 
                height="650px" 
                src="https://forms.office.com/r/hurSWWFqGY?embed=true" 
                frameBorder="0" 
                marginWidth="0" 
                marginHeight="0" 
                style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }} 
                allowFullScreen 
                title="Feedback Form"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}