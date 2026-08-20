import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { EnquiryModal } from './components/layout/EnquiryModal';
import { PageTransition } from './components/layout/PageTransition';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ResultsPage } from './pages/ResultsPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { ToolsPage } from './pages/ToolsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';

// Scroll to top helper on route / tab change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col selection:bg-[#E87500] selection:text-white pb-16 lg:pb-0">
        {/* Global Morphing Header */}
        <Header onOpenEnquire={() => setIsEnquireOpen(true)} />

        {/* Global Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquireOpen}
          onClose={() => setIsEnquireOpen(false)}
        />

        {/* Routes with Page Transition */}
        <main className="flex-1">
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage onOpenEnquire={() => setIsEnquireOpen(true)} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetailPage onOpenEnquire={() => setIsEnquireOpen(true)} />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/admission" element={<AdmissionPage onOpenEnquire={() => setIsEnquireOpen(true)} />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/calculators" element={<ToolsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/student-dashboard" element={<StudentDashboardPage />} />
            </Routes>
          </PageTransition>
        </main>

        {/* App-like Mobile Bottom Navigation Bar */}
        <MobileBottomNav onOpenEnquire={() => setIsEnquireOpen(true)} />
      </div>
    </Router>
  );
}

export default App;
