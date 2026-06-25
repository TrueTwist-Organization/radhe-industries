import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import logo from '../assets/a7a57638-a235-4d2e-bcb4-80cad06d9196.png';


export default function Footer() {
  return (
    <footer className="bg-[#051A2E] text-white/70 text-xs border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Logo & Description */}
          <div className="lg:col-span-3 lg:border-r lg:border-white/10 lg:pr-8">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Radhe Industries" className="h-12 w-auto object-contain bg-white rounded-lg p-1.5" />
            </div>
            <p className="leading-relaxed mb-6 max-w-xs text-white/60">
              Delivering excellence in every pump. Built for today, Ready for tomorrow.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#" className="text-white/50 hover:text-orange transition-colors"><Facebook size={16} /></a>
              <a href="#" className="text-white/50 hover:text-orange transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="text-white/50 hover:text-orange transition-colors"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:pr-8 lg:pl-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-orange transition-colors">Products</Link></li>
              <li><Link to="/quality" className="hover:text-orange transition-colors">Why Us</Link></li>
              <li><Link to="/brochure" className="hover:text-orange transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:pr-8 lg:pl-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/products/submersible-pump" className="hover:text-orange transition-colors">Submersible Pump<br />(3HP to 15HP)</Link></li>
              <li><Link to="/products/monoset-pump" className="hover:text-orange transition-colors">Monoset Pump<br />(0.5HP to 5HP)</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3 lg:border-r lg:border-white/10 lg:pr-8 lg:pl-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 leading-relaxed text-white/75">
                <MapPin size={14} className="text-white/40 mt-0.5 shrink-0" />
                Ahmedabad, Gujarat, India.
              </li>
              <li className="flex items-center gap-2 text-white/75">
                <Phone size={14} className="text-white/40 shrink-0" />
                <a href="tel:+919274767732" className="hover:text-orange whitespace-nowrap">Darshan Patel: +91 92747 67732</a>
              </li>
              <li className="flex items-center gap-2 text-white/75">
                <MessageCircle size={14} className="text-white/40 shrink-0" />
                <a href="https://wa.me/919274767732" target="_blank" rel="noopener noreferrer" className="hover:text-orange whitespace-nowrap">WhatsApp: +91 92747 67732</a>
              </li>
              <li className="flex items-center gap-2 text-white/75">
                <Mail size={14} className="text-white/40 shrink-0" />
                <a href="mailto:info@radheindustries.com" className="hover:text-orange whitespace-nowrap break-all">info@radheindustries.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Newsletter</h3>
            <p className="text-white/60 mb-4">Subscribe to get updates on our products and offers.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-3 bg-white/5 border border-white/10 focus:outline-none focus:border-orange/50 text-white text-xs rounded w-full"
              />
              <button
                onClick={() => alert('Subscribed!')}
                className="bg-orange hover:bg-orange/90 text-white font-bold px-6 py-3 text-xs uppercase tracking-wider rounded w-full transition-all"
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© 2026 Radhe Industries. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Design by</span>
            <a href="https://truetwist.in/" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors font-semibold">True Twist</a>
            <span className="text-white/10 mx-1">|</span>
            <span>Marketing by</span>
            <a href="https://369network.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors font-semibold">369 Network</a>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-orange transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-orange transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
