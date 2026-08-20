import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import CoursesSection from './components/CoursesSection'
import MaritimeTracksSection from './components/MaritimeTracksSection'
import EligibilityChecker from './components/EligibilityChecker'
import BMICalculator from './components/BMICalculator'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import StudentDashboard from './pages/StudentDashboard'
import CustomCursor from './components/CustomCursor'
import './App.css'

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <MaritimeTracksSection />
      <EligibilityChecker />
      <BMICalculator />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0A1628',
            color: '#fff',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '12px',
          },
          success: { iconTheme: { primary: '#C9A84C', secondary: '#020B18' } },
          error: { iconTheme: { primary: '#F87171', secondary: '#020B18' } },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
