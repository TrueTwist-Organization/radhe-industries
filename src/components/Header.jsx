import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Phone, MessageCircle, X, Menu } from 'lucide-react';
import logo from '../assets/a7a57638-a235-4d2e-bcb4-80cad06d9196.png';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-xs font-bold tracking-wider transition-colors duration-200 uppercase ${isActive ? 'text-orange' : 'text-graphite/80 hover:text-orange'
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Radhe Industries" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-xs font-bold tracking-wider text-graphite/80 hover:text-orange uppercase transition-colors">
                Products <ChevronDown size={12} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-60">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden">
                    <Link
                      to="/products/submersible-pump"
                      className="flex items-center gap-3 px-5 py-3 text-xs font-semibold text-graphite/80 hover:text-orange hover:bg-mist transition-all border-b border-gray-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Submersible Pump (3-15 HP)
                    </Link>
                    <Link
                      to="/products/monoset-pump"
                      className="flex items-center gap-3 px-5 py-3 text-xs font-semibold text-graphite/80 hover:text-orange hover:bg-mist transition-all"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Monoset Pump (0.5-5 HP)
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/quality" className={navLinkClass}>Why Us</NavLink>
            <NavLink to="/brochure" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+919274767732"
              className="flex items-center gap-2 text-graphite font-bold text-xs tracking-wider hover:text-orange transition-colors"
            >
              <Phone size={14} className="text-orange" />
              Darshan Patel: +91 92747 67732
            </a>
            <Link
              to="/contact"
              className="bg-orange hover:bg-orange/90 text-white text-xs font-bold tracking-wider px-5 py-2.5 rounded uppercase transition-all shadow-md"
            >
              Enquire Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-graphite p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 shadow-xl">
            <nav className="flex flex-col gap-4">
              <NavLink to="/" className="text-graphite/85 text-sm font-bold tracking-wider py-2 border-b border-gray-50 uppercase" onClick={() => setMobileOpen(false)}>Home</NavLink>
              <NavLink to="/about" className="text-graphite/85 text-sm font-bold tracking-wider py-2 border-b border-gray-50 uppercase" onClick={() => setMobileOpen(false)}>About Us</NavLink>
              <div className="py-2 border-b border-gray-50">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2 block">Products</span>
                <Link to="/products/submersible-pump" className="block text-graphite/85 py-1.5 pl-3 font-semibold text-xs hover:text-orange" onClick={() => setMobileOpen(false)}>Submersible Pump (3-15 HP)</Link>
                <Link to="/products/monoset-pump" className="block text-graphite/85 py-1.5 pl-3 font-semibold text-xs hover:text-orange" onClick={() => setMobileOpen(false)}>Monoset Pump (0.5-5 HP)</Link>
              </div>
              <NavLink to="/quality" className="text-graphite/85 text-sm font-bold tracking-wider py-2 border-b border-gray-50 uppercase" onClick={() => setMobileOpen(false)}>Why Us</NavLink>
              <NavLink to="/brochure" className="text-graphite/85 text-sm font-bold tracking-wider py-2 border-b border-gray-50 uppercase" onClick={() => setMobileOpen(false)}>Blog</NavLink>
              <NavLink to="/contact" className="text-graphite/85 text-sm font-bold tracking-wider py-2 uppercase" onClick={() => setMobileOpen(false)}>Contact Us</NavLink>
              <div className="flex gap-3 mt-4">
                <a href="tel:+919274767732" className="flex-1 text-center border border-gray-200 text-graphite font-bold py-3 rounded text-xs">Call Darshan Patel</a>
                <a href="https://wa.me/919274767732" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#25D366] text-white font-bold py-3 rounded text-xs">WhatsApp</a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Bar */}

    </>
  );
}
