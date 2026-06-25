import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageMeta from './components/PageMeta';
import { WHATSAPP_URL } from './constants/site';

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
import Applications from './pages/Applications';

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
      <PageMeta />
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
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </div>

        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.993 11.453.993c-5.462 0-9.91 4.444-9.914 9.878-.002 2.042.534 4.03 1.554 5.77l-1.019 3.73 3.832-.998zM16.269 13.5c-.26-.13-1.537-.757-1.772-.841-.235-.084-.407-.13-.578.13-.17.26-.66.84-.809 1.012-.149.17-.299.19-.559.06-1.923-.96-3.15-1.95-4.1-3.58-.25-.43.25-.4.715-1.33.075-.15.038-.282-.019-.395-.056-.113-.487-1.17-.667-1.6-.176-.42-.351-.363-.487-.37l-.415-.01c-.149 0-.39.056-.595.28-.205.223-.78.76-.78 1.85s.8 2.15.91 2.3c.11.15 1.575 2.4 3.815 3.37.53.23 1.05.41 1.41.52.54.17 1.03.15 1.42.09.43-.06 1.537-.627 1.752-1.233.215-.606.215-1.127.15-1.233-.06-.106-.23-.17-.49-.3z" />
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-bold tracking-wider pl-0 group-hover:pl-2">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </Router>
  );
}
