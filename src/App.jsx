// src/App.jsx
// ─────────────────────────────────────────────
// This is the ROOT component of your app.
// It sets up React Router so each URL path
// renders a different page component.
//
// HOW TO ADD A NEW PAGE:
//   1. Create a file in src/pages/MyPage.jsx
//   2. Import it here
//   3. Add a <Route path="/my-page" element={<MyPage />} />
// ─────────────────────────────────────────────

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout components (appear on every page)
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'

// Page components (one per route)
import Home           from './pages/Home'
import Services       from './pages/Services'
import About          from './pages/About'
import InstantTutoring from './pages/InstantTutoring'
import Courses from './pages/Courses'
import Articles from './pages/Articles'
import HomeTutoring from './pages/HomeTutoring'
import Jobs from './pages/Jobs'
import IBProgram from './pages/IBProgram'
import SummerProgram from './pages/SummerProgram'
import Registration from './pages/Registration'
import FAQ            from './pages/FAQ'
import Feedback       from './pages/Feedback'
import BecomeAnAffiliate from './pages/BecomeAnAffiliate'
import Contact        from './pages/Contact'

function App() {
  return (
    // BrowserRouter enables URL-based navigation
    <BrowserRouter basename="/theStudyZoneCopy">
      {/* Navbar is outside <Routes> so it appears on ALL pages */}
      <Navbar />
      <ScrollToHash />

      {/* Main content area — grows to fill available space */}
      <main>
        {/*
          paddingTop: 72px pushes content below the fixed navbar.
          Change this value if you change the navbar height.
        */}
        <Routes>
          {/* Each Route maps a URL path to a page component */}
          <Route path="/"                element={<Home />}           />
          <Route path="/services"        element={<Services />}       />
          <Route path="/about"           element={<About />}          />
          <Route path="/instant-tutoring" element={<InstantTutoring />} />
          <Route path="/courses"          element={<Courses />}          />
          <Route path="/articles"         element={<Articles />}         />
          <Route path="/home-tutoring"   element={<HomeTutoring />}     />
          <Route path="/jobs"            element={<Jobs />}             />
          <Route path="/registration"     element={<Registration />}             />
          <Route path="/ib-program"      element={<IBProgram />}             />
          <Route path="/summer-program" element={<SummerProgram />}       />
          <Route path="/faq"             element={<FAQ />}            />
          <Route path="/feedback"             element={<Feedback />}            />
          <Route path="/become-an-affiliate"             element={<BecomeAnAffiliate />}            />
          <Route path="/contact"         element={<Contact />}        />
        </Routes>
      </main>

      {/* Footer is outside <Routes> so it appears on ALL pages */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
