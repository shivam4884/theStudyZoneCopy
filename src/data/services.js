// src/data/services.js
// ─────────────────────────────────────────────
// All service cards data lives here.
// To add a new service: copy one object, paste it,
// change the fields. The Services page auto-updates.
// ─────────────────────────────────────────────

export const services = [
  {
    id: 1,
    icon: 'calculator',         // Maps to an icon in the Services component
    title: 'Math Tutoring',
    description: 'From foundational arithmetic to Calculus & Vectors (MCV4U). We cover the full Ontario curriculum for Grade 1 through university prep.',
    link: '/services#math',     // UPDATED to scroll to Math section
    badge: 'Most Popular',
  },
  {
    id: 2,
    icon: 'beaker',
    title: 'Science Tutoring',
    description: 'Expert coaching in Physics, Chemistry (Organic, Inorganic, Physical, Quantum), and Biology for all grade levels.',
    link: '/services#science',  // UPDATED to scroll to Science section
    badge: null,
  },
  {
    id: 3,
    icon: 'book-open',
    title: 'English & Literacy',
    description: 'Comprehensive support for Reading, Writing, Grammar, and Oral Communication from JK to Grade 12. OSSLT prep included.',
    link: '/services#english',  // UPDATED to scroll to English section
    badge: null,
  },
  {
    id: 4,
    icon: 'academic-cap',
    title: 'IB Program (HL & SL)',
    description: 'Specialized IB Diploma coaching for Grades 9–12. Expert support for Math AA/AI, Sciences, English, and Internal Assessments.',
    link: '/ib-program',        // Points to its own dedicated page
    badge: 'Specialist',
  },
  {
    id: 5,
    icon: 'clipboard-document-check',
    title: 'EQAO & OSSLT Prep',
    description: 'Targeted test prep for Grade 3, 6, and 9 EQAO assessments and the Grade 10 Ontario Secondary School Literacy Test.',
    link: '/services#english',  // Points to English section (since OSSLT is there)
    badge: null,
  },
  {
    id: 6,
    icon: 'trophy',
    title: 'SAT, ACT & HSPT Prep',
    description: 'Competitive admissions prep for prestigious high schools and universities. Specialized strategies to maximize your scores.',
    link: '/services',          // Stays at top of services page for now
    badge: null,
  },
  {
    id: 7,
    icon: 'code-bracket',
    title: 'STEM & Coding',
    description: 'Future-ready programming and STEM education. Hands-on learning in coding languages and logical thinking for all ages.',
    link: '/services#science',  // Points to Science section for now
    badge: 'New',
  },
  {
    id: 8,
    icon: 'heart',
    title: 'Mental Health & Resilience',
    description: 'Holistic student well-being sessions to manage academic stress and anxiety, building long-term resilience and confidence.',
    link: '/services',          // Stays at top of services page for now
    badge: null,
  },
  {
    id: 9,
    icon: 'star',
    title: 'Kindergarten Readiness',
    description: 'Whole-child school readiness program for young learners in Brampton & Caledon. Building early literacy, numeracy, and social skills.',
    link: '/services',          // Stays at top of services page for now
    badge: null,
  },
]