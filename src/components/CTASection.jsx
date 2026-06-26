import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { SITE } from '../constants/site';
import { getWhatsAppUrl, openWhatsApp } from '../lib/whatsapp';

export default function CTASection({ title, subtitle, primaryBtn, secondaryBtn, dark = true }) {
  return (
    <section className={`${dark ? 'bg-navy' : 'bg-pump-blue'} py-20 relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-aqua/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-pump-blue/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-block bg-orange/10 border border-orange/30 text-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Expert Guidance
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">{title}</h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppUrl(SITE.whatsapp)}
            onClick={(e) => { e.preventDefault(); openWhatsApp(SITE.whatsapp); }}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 shadow-lg text-sm"
          >
            <MessageCircle size={18} />
            {primaryBtn || 'WhatsApp Expert'}
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 shadow-lg text-sm"
          >
            {secondaryBtn || 'Submit Requirement'}
          </Link>
        </div>
      </div>
    </section>
  );
}
