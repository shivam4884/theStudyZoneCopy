// src/components/ui/SectionHeader.jsx
// ─────────────────────────────────────────────
// Reusable section heading with an optional
// eyebrow label above and subtitle below.
//
// USAGE EXAMPLE:
//   <SectionHeader
//     eyebrow="What We Offer"
//     title="Expert Tutoring for Every Student"
//     subtitle="Personalized programs designed to help every learner succeed."
//     centered   ← add this prop to center-align text
//   />
// ─────────────────────────────────────────────

function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
  const alignment = centered ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 mb-14 ${alignment}`}>

      {/* Eyebrow — small uppercase label above title */}
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 w-fit"
          style={{ color: 'var(--color-teal)', padding: '5px', margin: '2px' }}>
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          {eyebrow}
        </span>
      )}

      {/* Main section title */}
      <h2
        className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>

      {/* Optional subtitle/description */}
      {subtitle && (
        <p
          className="text-base md:text-lg max-w-3xl leading-relaxed text-slate-600" style={{ margin: '0 auto' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
