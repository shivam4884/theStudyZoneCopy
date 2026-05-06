// src/pages/Courses.jsx
import { useState } from 'react'
import { 
  BookOpenIcon, 
  ChevronDownIcon, 
  CheckCircleIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import SectionHeader from '../components/ui/SectionHeader'

export default function Courses() {
  // State to track which Grade accordion is currently open
  const [openGrade, setOpenGrade] = useState('G9: MTH1W')

  // ALL Course Data Extracted from your provided HTML
  const coursesData = [
    {
      id: 'G9: MTH1W',
      title: 'G9: MTH1W',
      subtitle: 'De-streamed Grade 9 Mathematics',
      units: [
        {
          title: 'Unit 1: Number Sense & Operations',
          desc: 'Students will compare, represent, and operate with rational and irrational numbers, using mental math and estimation strategies. They will apply these skills to solve problems involving exponents, roots, and scientific notation.',
          topics: [
            'Rational vs. irrational numbers',
            'Integers, fractions, decimals, and percentages',
            'Order of operations (BEDMAS/PEMDAS)',
            'Mental math and estimation strategies',
            'Scientific notation',
            'Square roots and cube roots',
            'Applications in real-world contexts'
          ]
        },
        {
          title: 'Unit 2: Algebraic Expressions & Equations',
          desc: 'Students will simplify algebraic expressions, solve linear equations/inequalities, and apply the distributive property. They will justify solutions and model real-life scenarios algebraically.',
          topics: [
            'Simplifying expressions (combining like terms, distributive property)',
            'Solving one-step and multi-step linear equations',
            'Solving inequalities and representing solutions on a number line',
            'Rearranging formulas (e.g., for area, speed)',
            'Real-world applications (e.g., word problems involving costs, distances)'
          ]
        },
        {
          title: 'Unit 3: Linear Relations',
          desc: 'Students will analyze linear relationships using tables, graphs, and equations. They will interpret slope as a rate of change and y-intercept as an initial value in real-world contexts.',
          topics: [
            'Graphing linear relations from equations, tables, and descriptions',
            'Calculating slope (rise over run, from graphs and equations)',
            'y-intercept and its meaning in context',
            'Writing equations in slope-intercept form (y = mx + b)',
            'Applications (e.g., distance-time graphs, earnings vs. hours worked)'
          ]
        },
        {
          title: 'Unit 4: Measurement & Geometry',
          desc: 'Students will solve problems involving perimeter, area, surface area, and volume. They will explore geometric properties, transformations, and the Pythagorean theorem.',
          topics: [
            'Perimeter & area of triangles, quadrilaterals, and composite shapes',
            'Surface area & volume of prisms, pyramids, cylinders',
            'Pythagorean theorem (solving for missing sides, real-world applications)',
            'Transformations: translations, rotations, reflections, dilations',
            'Angle relationships (parallel lines, triangles, polygons)'
          ]
        },
        {
          title: 'Unit 5: Data Literacy',
          desc: 'Students will collect, organize, and analyze data using statistical measures and visual representations. They will assess bias and draw evidence-based conclusions.',
          topics: [
            'Types of data (categorical vs. numerical, discrete vs. continuous)',
            'Measures of central tendency (mean, median, mode) and spread (range)',
            'Data visualization (histograms, scatter plots, bar graphs)',
            'Identifying misleading graphs and bias',
            'Drawing conclusions from surveys and experiments'
          ]
        },
        {
          title: 'Unit 6: Financial Literacy',
          desc: 'Students will apply math skills to budgeting, interest calculations, and financial decision-making. They will compare costs, analyze debt, and plan for future expenses.',
          topics: [
            'Creating and analyzing budgets (income vs. expenses)',
            'Simple vs. compound interest (savings, loans, credit cards)',
            'Financial planning (short-term vs. long-term goals)',
            'Comparing financial products (e.g., bank accounts, loans)',
            'Understanding credit scores and debt management'
          ]
        }
      ]
    },
    {
      id: 'G10: MPM2D',
      title: 'G10: MPM2D',
      subtitle: 'Principles of Mathematics',
      units: [
        {
          title: 'Unit 1: Algebraic Skills and Linear Systems',
          desc: 'Students will review and extend their understanding of algebraic expressions and equations. They will solve systems of linear equations using various methods and apply them to real-world problems.',
          topics: [
            'Review of linear equations',
            'Solving systems by graphing, substitution, and elimination',
            'Applications of linear systems',
            'Word problems involving systems'
          ]
        },
        {
          title: 'Unit 2: Analytic Geometry',
          desc: 'Students will explore the relationships between equations and geometric representations of lines. They will investigate properties of lines and line segments in the coordinate plane.',
          topics: [
            'Slope and equations of lines',
            'Midpoint and distance formulas',
            'Parallel and perpendicular lines',
            'Applications in geometry and real-life contexts'
          ]
        },
        {
          title: 'Unit 3: Quadratic Relations (y = ax² + bx + c)',
          desc: 'Students will investigate quadratic relations and their properties. They will graph and analyze parabolas and solve related problems.',
          topics: [
            'Characteristics of quadratic relations',
            'Vertex form and standard form',
            'Graphing parabolas',
            'Axis of symmetry and vertex',
            'Applications of quadratic models'
          ]
        },
        {
          title: 'Unit 4: Quadratic Equations',
          desc: 'Students will solve quadratic equations using a variety of methods and apply these skills to problem-solving situations.',
          topics: [
            'Factoring trinomials and special products',
            'Solving by factoring, completing the square, and quadratic formula',
            'Discriminant and nature of roots',
            'Word problems involving quadratic equations'
          ]
        },
        {
          title: 'Unit 5: Trigonometry',
          desc: 'Students will explore trigonometric ratios and solve problems involving right triangles. They will apply trigonometry to real-world and mathematical problems.',
          topics: [
            'Sine, cosine, and tangent ratios',
            'Solving right triangles',
            'Angle of elevation and depression',
            'Applications in measurement and design'
          ]
        }
      ]
    },
    {
      id: 'G11: MCR3U',
      title: 'G11: MCR3U',
      subtitle: 'Functions (University Math)',
      units: [
        {
          title: 'Unit 1: Introduction to Functions',
          desc: 'Students will explore the concept of a function and distinguish between relations and functions. They will represent functions in various forms and understand domain and range.',
          topics: [
            'Relations vs. functions',
            'Function notation',
            'Domain and range',
            'Evaluating functions',
            'Graphs of functions'
          ]
        },
        {
          title: 'Unit 2: Characteristics of Functions',
          desc: 'Students will investigate key features of functions and their graphs. They will analyze transformations and use function notation to describe changes.',
          topics: [
            'Intercepts, intervals of increase/decrease',
            'Maximum and minimum values',
            'Transformations (translations, reflections, stretches)',
            'Even and odd functions',
            'Piecewise functions'
          ]
        },
        {
          title: 'Unit 3: Quadratic Functions',
          desc: 'Students will deepen their understanding of quadratic functions, including their properties, transformations, and applications.',
          topics: [
            'Vertex form, factored form, and standard form',
            'Completing the square',
            'Solving quadratic equations',
            'Applications of quadratic models',
            'Optimization problems'
          ]
        },
        {
          title: 'Unit 4: Exponential Functions',
          desc: 'Students will explore exponential growth and decay. They will model real-world scenarios using exponential functions and understand their properties.',
          topics: [
            'Exponential growth and decay',
            'Base of exponential functions',
            'Graphing exponential functions',
            'Applications in finance and science',
            'Comparing linear, quadratic, and exponential models'
          ]
        },
        {
          title: 'Unit 5: Discrete Functions',
          desc: 'Students will study sequences and series, focusing on arithmetic and geometric patterns. They will solve problems involving these sequences.',
          topics: [
            'Arithmetic sequences and series',
            'Geometric sequences and series',
            'Recursive formulas',
            'Sigma notation',
            'Applications in real-life contexts'
          ]
        },
        {
          title: 'Unit 6: Trigonometric Functions',
          desc: 'Students will extend their knowledge of trigonometry to include the unit circle and sinusoidal functions. They will model periodic phenomena.',
          topics: [
            'Radian measure',
            'Unit circle and trigonometric ratios',
            'Graphs of sine and cosine functions',
            'Amplitude, period, phase shift',
            'Applications of sinusoidal models'
          ]
        }
      ]
    },
    {
      id: 'G11: MBF3C',
      title: 'G11: MBF3C',
      subtitle: 'Foundations for College Mathematics',
      units: [
        {
          title: 'Unit 1: Probability',
          desc: 'Students will explore the concepts of probability and apply them to real-world contexts. They will calculate probabilities of simple and compound events and interpret the results.',
          topics: [
            'Experimental and theoretical probability',
            'Probability of compound events',
            'Tree diagrams and organized lists',
            'Applications in games and real-life scenarios'
          ]
        },
        {
          title: 'Unit 2: One-Variable Statistics',
          desc: 'Students will collect, organize, and analyze data involving one variable. They will use statistical measures to interpret and communicate findings.',
          topics: [
            'Data collection methods',
            'Measures of central tendency (mean, median, mode)',
            'Measures of spread (range, interquartile range, standard deviation)',
            'Histograms and box plots',
            'Identifying and interpreting trends'
          ]
        },
        {
          title: 'Unit 3: Quadratic Relations',
          desc: 'Students will investigate quadratic relations and their applications. They will model and solve problems using quadratic equations.',
          topics: [
            'Graphing quadratic relations',
            'Vertex and standard forms',
            'Solving quadratics by factoring and using the quadratic formula',
            'Applications in real-world contexts'
          ]
        },
        {
          title: 'Unit 4: Trigonometry',
          desc: 'Students will solve problems involving right and oblique triangles using trigonometric ratios and laws.',
          topics: [
            'Sine, cosine, and tangent ratios',
            'Solving right triangles',
            'Sine Law and Cosine Law',
            'Applications in measurement and design'
          ]
        },
        {
          title: 'Unit 5: Exponents and Exponential Relations',
          desc: 'Students will explore exponential growth and decay. They will model real-world situations using exponential functions.',
          topics: [
            'Laws of exponents',
            'Exponential growth and decay',
            'Graphing exponential functions',
            'Applications in population growth and depreciation'
          ]
        },
        {
          title: 'Unit 6: Compound Interest and Personal Finance',
          desc: 'Students will apply mathematics to financial decision-making. They will explore interest, credit, and budgeting.',
          topics: [
            'Simple vs. compound interest',
            'Credit cards and loans',
            'Budgeting and saving',
            'Comparing financial services'
          ]
        }
      ]
    },
    {
      id: 'G12: MHF4U',
      title: 'G12: MHF4U',
      subtitle: 'Advanced Functions (University Math)',
      units: [
        {
          title: 'Unit 1: Polynomial Functions',
          desc: 'Students will explore the characteristics of polynomial functions, including their graphs, equations, and applications. They will analyze polynomial expressions and solve related equations and inequalities.',
          topics: [
            'Characteristics of polynomial functions',
            'Factoring and solving polynomial equations',
            'Remainder and factor theorems',
            'Graphing polynomial functions',
            'Solving polynomial inequalities'
          ]
        },
        {
          title: 'Unit 2: Rational Functions',
          desc: 'Students will investigate rational expressions and functions. They will analyze their properties and solve equations involving rational expressions.',
          topics: [
            'Simplifying rational expressions',
            'Identifying asymptotes and discontinuities',
            'Graphing rational functions',
            'Solving rational equations',
            'Applications in real-world contexts'
          ]
        },
        {
          title: 'Unit 3: Trigonometric Functions',
          desc: 'Students will extend their understanding of trigonometric functions and apply them to model periodic phenomena.',
          topics: [
            'Radian measure and unit circle',
            'Graphs of sine, cosine, and tangent functions',
            'Amplitude, period, phase shift, and vertical shift',
            'Trigonometric identities and equations',
            'Applications of sinusoidal models'
          ]
        },
        {
          title: 'Unit 4: Exponential and Logarithmic Functions',
          desc: 'Students will explore exponential and logarithmic functions and their applications. They will solve equations and model real-world scenarios.',
          topics: [
            'Laws of exponents and logarithms',
            'Graphing exponential and logarithmic functions',
            'Solving exponential and logarithmic equations',
            'Applications in finance and science',
            'Comparing exponential and logarithmic models'
          ]
        },
        {
          title: 'Unit 5: Combining Functions',
          desc: 'Students will explore the composition of functions, adding, subtracting, multiplying, and dividing functions to model and solve complex mathematical problems.',
          topics: [
            'Sum and difference of functions',
            'Product and quotient of functions',
            'Composition of functions',
            'Solving problems using combined functions',
            'Inequalities of combined functions'
          ]
        }
      ]
    }
  ]

  // Toggle accordion open/close
  const toggleGrade = (id) => {
    setOpenGrade(openGrade === id ? null : id)
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* ── SPACER TO CLEAR FIXED NAVBAR ── */}
      <div className="h-28 md:h-36 w-full"></div>

      {/* ═══════════════════════════════════════
          HERO SECTION (Forced explicit padding)
      ═══════════════════════════════════════ */}
      <section 
        className="relative overflow-hidden"
        style={{ paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-200 mb-8 shadow-lg">
            <AcademicCapIcon className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-sm font-bold text-teal-700 uppercase tracking-widest">
              Ontario Mathematics Curriculum
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight"
            style={{ lineHeight: 1.15, marginBottom: '2rem' }}
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Courses</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto break-words"
            style={{ marginBottom: '1rem' }}
          >
            Explore our detailed, unit-by-unit breakdown of the high school mathematics curriculum. We cover everything from Grade 9 foundations to Advanced Grade 12 University Preparation.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COURSE ACCORDION LIST
      ═══════════════════════════════════════ */}
      <section 
        className="section-py" 
        style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', paddingBottom: '8rem' }}
      >
        <div className="container max-w-6xl mx-auto px-4">
          
          <div className="flex flex-col" style={{ gap: '1.5rem' }}>
            {coursesData.map((course) => {
              const isOpen = openGrade === course.id

              return (
                <div 
                  key={course.id} 
                  className="rounded-3xl border transition-all duration-300 overflow-hidden shadow-lg"
                  style={{ 
                      backgroundColor: isOpen ? 'var(--color-section-alt)' : 'var(--color-card-bg)',
                      borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)'
                    }}
                  >
                    {/* ACCORDION HEADER (Clickable) */}
                    <button 
                      onClick={() => toggleGrade(course.id)}
                      className="w-full flex items-center justify-between text-left transition-colors hover:bg-slate-100"
                      style={{ padding: '2rem' }}
                    >
                      <div className="flex items-center" style={{ gap: '1.5rem' }}>
                        <div className="w-14 h-14 shrink-0 bg-teal-100 border border-teal-200 rounded-2xl flex items-center justify-center">
                          <BookOpenIcon className="w-7 h-7 text-teal-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900" style={{ marginBottom: '0.25rem' }}>
                            {course.title}
                          </h2>
                          <p className="text-slate-600 text-sm md:text-base font-medium">
                            {course.subtitle}
                          </p>
                        </div>
                      </div>
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200 shrink-0 transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <ChevronDownIcon className="w-5 h-5 text-slate-500" />
                        </div>
</button>
                  <div 
                    className="transition-all duration-500 ease-in-out"
                    style={{ 
                      maxHeight: isOpen ? '5000px' : '0px', 
                      opacity: isOpen ? 1 : 0,
                      borderTop: isOpen ? '1px solid var(--color-border)' : 'none'
                    }}
                  >
                    <div style={{ padding: '2.5rem 2rem' }}>
                      
                      {/* Grid of Unit Cards */}
                      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '2rem' }}>
                        {course.units.map((unit, idx) => (
                          <div 
                            key={idx} 
                            className="flex flex-col rounded-2xl border border-slate-200 hover:border-teal-300 transition-colors"
                            style={{ backgroundColor: 'var(--color-card-bg)', padding: '2rem', gap: '1.25rem' }}
                          >
                            <h3 className="text-xl font-bold text-slate-900 leading-snug break-words">
                              {unit.title}
                            </h3>
                            
                            <p className="text-slate-600 text-sm leading-relaxed break-words" style={{ marginBottom: '0.5rem' }}>
                              <strong className="text-slate-700">Expectations: </strong> 
                              {unit.desc}
                            </p>

                            <div>
                              <strong className="text-slate-900 text-sm uppercase tracking-wider block" style={{ marginBottom: '1rem' }}>
                                Topics Covered:
                              </strong>
                              <ul className="flex flex-col" style={{ gap: '0.75rem' }}>
                                {unit.topics.map((topic, tIdx) => (
                                  <li key={tIdx} className="flex items-start text-sm text-slate-700 break-words" style={{ gap: '0.75rem' }}>
                                    <CheckCircleIcon className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                    <span style={{ lineHeight: 1.5 }}>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

    </div>
  )
}