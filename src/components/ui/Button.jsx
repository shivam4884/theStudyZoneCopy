// src/components/ui/Button.jsx
import { Link } from 'react-router-dom'

function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  // ── 1. BASE STYLES (Applies to all buttons) ──
  // Changed to rounded-full (pill shape) and increased px/py for a premium feel
  const base = `
    inline-flex items-center justify-center gap-2.5
    px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide
    transition-all duration-300 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100
    active:scale-95
  `

  // ── 2. VARIANT STYLES ──
  const variants = {
    // Premium Solid Primary Button with subtle glow
    primary: `
      bg-blue-700 text-white
      border border-blue-500/50
      shadow-[0_0_20px_rgba(37,99,235,0.25)]
      hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:-translate-y-0.5
    `,
    
    // Clean, modern outline button (perfect for secondary actions)
    outline: `
      bg-white/90 text-slate-800
      border border-slate-300
      hover:bg-slate-100 hover:border-blue-200 hover:text-blue-700
      hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:-translate-y-0.5
    `,

    // Subtle colored outline for light backgrounds
    'outline-dark': `
      bg-blue-50 text-blue-700 
      border border-blue-200
      hover:bg-blue-100 hover:border-blue-300 hover:text-blue-900 hover:-translate-y-0.5
    `,
  }

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props} style={{ padding: '7px', margin: '10px' }}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props} style={{ padding: '7px', margin: '10px' }}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button

// // src/components/ui/Button.jsx
// // ─────────────────────────────────────────────
// // A reusable Button component with two variants:
// //   - "primary"  → filled teal background
// //   - "outline"  → transparent with border
// //
// // USAGE EXAMPLE:
// //   <Button to="/contact" variant="primary">Book Free Session</Button>
// //   <Button to="/services" variant="outline">View Services</Button>
// //   <Button href="tel:16478494344" variant="primary">Call Us</Button>
// // ─────────────────────────────────────────────

// import { Link } from 'react-router-dom'

// function Button({ children, to, href, variant = 'primary', className = '', ...props }) {

//   // Base styles shared by all button variants
//   const base = `
//     inline-flex items-center justify-center gap-2
//     px-6 py-3 rounded-lg font-semibold text-sm
//     transition-all duration-300 cursor-pointer
//     focus:outline-none focus:ring-2 focus:ring-offset-2
//     relative overflow-hidden group
//   `

//   // Variant-specific styles
//   const variants = {
//     primary: `
//       bg-gradient-to-r from-indigo-600 to-purple-600 text-white
//       hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:shadow-indigo-500/40
//       transform hover:scale-105
//       focus:ring-indigo-500
//       before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity
//       hover:before:opacity-10
//     `,
//     outline: `
//       bg-transparent text-white border-2 border-white
//       hover:bg-white/10 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20
//       focus:ring-white
//       transform hover:scale-105 duration-300
//     `,
//     'outline-dark': `
//       bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 border border-indigo-500/50
//       hover:from-indigo-600/40 hover:to-purple-600/40 hover:border-indigo-400 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30
//       focus:ring-indigo-500
//       transform hover:scale-105 duration-300
//     `,
//   }

//   const classes = `${base} ${variants[variant] || variants.primary} ${className}`

//   // If "to" prop provided → use React Router Link (internal navigation)
//   if (to) {
//     return (
//       <Link to={to} className={classes} {...props}>
//         {children}
//       </Link>
//     )
//   }

//   // If "href" prop provided → use regular <a> tag (external links, tel:, mailto:)
//   if (href) {
//     return (
//       <a href={href} className={classes} {...props}>
//         {children}
//       </a>
//     )
//   }

//   // Default → render as a <button> element
//   return (
//     <button className={classes} {...props}>
//       {children}
//     </button>
//   )
// }

// export default Button
