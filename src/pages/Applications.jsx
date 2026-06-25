import React from 'react';
import { applications } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Applications() {
  return (
    <main className="pt-24 bg-brand-gradient">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-16 text-white"
        style={{
          backgroundImage: "url('/images/navigation-hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(5,26,46,0.90) 0%, rgba(5,26,46,0.80) 100%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-aqua bg-aqua/10 px-4 py-1.5 rounded-full mb-4">Applications</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
            Water Pump Applications
          </h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Find the right pump solution for agriculture, deep borewell extraction, domestic overhead tanks, construction projects, and general water movement.
          </p>
        </div>
      </section>

      {/* Applications list */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative h-48 bg-navy">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover opacity-60"
                    onError={(e) => {
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-8 bg-[#0a2238]">
                          <span class="text-white/30 text-xs">${app.id === 'borewell' ? 'submersible-pump-hero.webp' : app.id === 'domestic' ? 'domestic-water-supply.jpg' : 'farm-irrigation-application.jpg'}</span>
                        </div>
                      `;
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-pump-blue/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {app.suitable}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-graphite mb-2">{app.title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{app.desc}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={app.suitable.toLowerCase().includes('submersible') ? '/products/submersible-pump' : '/products/monoset-pump'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-mist hover:bg-pump-blue hover:text-white text-graphite font-semibold py-3 rounded-xl text-sm transition-all"
                >
                  Find Right Pump <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-navy py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-4">Have an Application-Specific Query?</h2>
          <p className="text-white/70 mb-8 text-sm sm:text-base">Tell us your pipeline distance, height differences, and daily required volume for advice.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all hover:-translate-y-0.5"
          >
            Submit Application Details
          </Link>
        </div>
      </section>
    </main>
  );
}
