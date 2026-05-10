// src/pages/BecomeAnAffiliate.jsx
import { 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  BriefcaseIcon, // Changed from HandshakeIcon
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function BecomeAnAffiliate() {
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
              Partnership Program
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight break-words"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            Become an <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Affiliate</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto break-words" 
            style={{ margin: '0 auto 3rem auto' }}
          >
            Join The Study Zone network. Partner with us, refer students to our expert tutoring programs, and grow alongside a premier educational platform.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto" style={{ gap: '1.5rem', marginBottom: '2rem' ,margin: '0 auto 3rem auto' }}
          >
            <div className="flex flex-col items-center" style={{ gap: '0.75rem' }}>
              <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-200 flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Partner With Us</h3>
            </div>
            <div className="flex flex-col items-center" style={{ gap: '0.75rem' }}>
              <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-200 flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Refer Students</h3>
            </div>
            <div className="flex flex-col items-center" style={{ gap: '0.75rem' }}>
              <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-200 flex items-center justify-center">
                <CurrencyDollarIcon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Earn Rewards</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EMBEDDED FORM SECTION
      ═══════════════════════════════════════ */}
      <section className="section-py relative z-10" style={{ paddingBottom: '8rem' }}>
        <div className="container max-w-4xl mx-auto px-4">
          
          {/* Card Wrapper for the Iframe */}
          <div 
            className="rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative"
            style={{ 
              backgroundColor: 'var(--color-card-bg)', 
              padding: '2rem 1rem'
            }}
          >
            {/* 
              Exact Cognito Form Iframe extracted from your HTML 
              (Min-height added to ensure it doesn't get cut off before the internal script runs)
            */}
            <div className="w-full" style={{ minHeight: '600px' }}>
              <iframe 
                src="https://www.cognitoforms.com/f/CGgTXxHVEUaWqjluLyaZdw/2" 
                allow="payment" 
                style={{ border: 0, width: '100%', minHeight: '600px' }} 
                height="582"
                title="Become an Affiliate Form"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}