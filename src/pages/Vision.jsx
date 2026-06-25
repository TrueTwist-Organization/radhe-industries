import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Vision() {
  return (
    <main className="pt-24 bg-brand-gradient min-h-screen">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 text-white"
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
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-400/10 px-4 py-1.5 rounded-full mb-4">Our Vision</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">Sustainable Technology</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-10 items-start">
            <div className="w-20 h-20 shrink-0 bg-sky-500/10 rounded-2xl flex items-center justify-center">
              <Eye className="text-sky-500" size={40} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold font-heading text-navy mb-6">To be a global leader in sustainable water technology.</h2>
              <p className="text-steel text-lg leading-relaxed mb-6">
                We are continuously innovating to provide eco-friendly and smart irrigation solutions that secure water resources for generations to come. Our vision is a world where every drop of water is utilized efficiently, powered by our advanced pumping systems.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Link to="/products" className="bg-orange hover:bg-orange/90 text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded uppercase flex items-center gap-2 transition-all">
                  Explore Products <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
