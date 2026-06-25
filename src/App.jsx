import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SubmersiblePump from './pages/SubmersiblePump';
import MonosetPump from './pages/MonosetPump';
import Quality from './pages/Quality';
import Brochure from './pages/Brochure';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Mission from './pages/Mission';
import Vision from './pages/Vision';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        
        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/submersible-pump" element={<SubmersiblePump />} />
            <Route path="/products/monoset-pump" element={<MonosetPump />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<Vision />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
