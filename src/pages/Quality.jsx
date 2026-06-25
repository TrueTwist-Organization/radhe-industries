import React from 'react';
import { Shield, CheckCircle, Zap, Cpu, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Quality() {
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
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-aqua bg-aqua/10 px-4 py-1.5 rounded-full mb-4">Credibility</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
            Quality &amp; Technology
          </h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Our pumps are engineered for durable construction, stable operation, and high efficiency to ensure reliable, long-lasting performance.
          </p>
        </div>
      </section>

      {/* Quality points */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-pump-blue/10 flex items-center justify-center text-pump-blue mb-5">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-graphite mb-3">Durable Construction</h3>
            <p className="text-steel text-sm leading-relaxed">
              We focus on heavy-grade casings, high-strength shafts, and corrosion-resistant components where applicable to withstand continuous operation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-pump-blue/10 flex items-center justify-center text-pump-blue mb-5">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-graphite mb-3">High Efficiency</h3>
            <p className="text-steel text-sm leading-relaxed">
              Optimized motor electrical design and hydraulic impellers are matched to deliver maximum flow rate for every unit of energy consumed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-pump-blue/10 flex items-center justify-center text-pump-blue mb-5">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-graphite mb-3">Stable Operation</h3>
            <p className="text-steel text-sm leading-relaxed">
              Dynamically balanced rotor assemblies and precise bearing alignments significantly reduce running vibration, extending service life.
            </p>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-brand-gradient border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-pump-blue bg-pump-blue/10 px-3.5 py-1 rounded-full">
                Engineering Discipline
              </span>
              <h2 className="text-3xl font-bold font-heading text-graphite mt-4 mb-6">
                Application-Based Pump Selection
              </h2>
              <p className="text-steel text-sm sm:text-base leading-relaxed mb-6">
                We believe a pump is only as good as its selection match. We check your actual site conditions before suggesting a model:
              </p>
              
              <ul className="space-y-3.5">
                {[
                  'Source Type & Depth (Bore depth, open well depth)',
                  'Total Head / Lifting Height (Vertical height + horizontal friction loss)',
                  'Required Daily Volume & Flow Rate',
                  'Power Supply Conditions (Single-phase vs. Three-phase grid stability)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-graphite font-medium">
                    <CheckCircle size={16} className="text-aqua shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-80 bg-mist">
              <img
                src="/images/quality-testing-pump.jpg"
                alt="Pump testing in laboratory"
                className="w-full h-full object-cover opacity-90"
                onError={(e) => {
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-[#0a2238]">
                      <span class="text-white/40 text-xs">quality-testing-pump.jpg</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* End CTA */}
      <section className="bg-navy py-16 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-4">Need Technical Specifications?</h2>
          <p className="text-white/70 mb-8 text-sm">Tell us your query or request detailed model-wise product details.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all hover:-translate-y-0.5"
          >
            Request Details
          </Link>
        </div>
      </section>
    </main>
  );
}
