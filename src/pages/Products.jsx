import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';

export default function Products() {
  return (
    <main className="pt-24 min-h-screen">

      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 text-center text-white"
        style={{
          backgroundImage: "url('/images/navigation-hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(5,26,46,0.97) 0%, rgba(5,26,46,0.92) 50%, rgba(11,79,147,0.90) 100%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-orange border border-orange/30 bg-orange/10 px-4 py-1.5 rounded-full mb-5">
            Our Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading uppercase leading-tight mb-4 drop-shadow-lg">
            Choose the Right <span className="text-orange">Pump</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            We specialise in two high-performance pump categories — Submersible Pumps for deep water lifting and Monoset Pumps for surface water transfer.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-[#051A2E] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'HP Range', value: '0.5 - 15 HP' },
            { label: 'Categories', value: '2 Types' },
            { label: 'Applications', value: '10+' },
            { label: 'Warranty', value: '1 Year' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-orange font-extrabold text-lg">{s.value}</p>
              <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold font-heading uppercase text-navy">
            Our <span className="text-orange">Product</span> Categories
          </h2>
          <div className="h-1 w-16 bg-orange mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Submersible Pump Card */}
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: '#ffffff' }}>
            <div
              className="relative h-72 flex flex-col justify-end overflow-hidden"
              style={{
                backgroundImage: "url('/images/hero-submersible-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
              }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,26,46,0.90) 0%, rgba(5,26,46,0.50) 60%, rgba(5,26,46,0.15) 100%)' }} />
              <div className="relative z-10 px-8 pb-7">
                <span className="inline-block bg-orange text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">3 HP to 15 HP</span>
                <h3 className="text-2xl font-extrabold font-heading text-white uppercase drop-shadow">Submersible Pump</h3>
                <p className="text-white/75 text-xs mt-1">For deep borewells &amp; high-lift applications</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-steel text-sm leading-relaxed mb-6">
                Our submersible pumps are engineered for deep borewell lifting, agricultural irrigation, and industrial water supply. Built with stainless steel body and high-efficiency motors for continuous operation.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Deep Borewell (3"+)', 'Agricultural Irrigation', '3 HP to 15 HP', 'High Discharge Head', 'Stainless Steel Body', 'Energy Efficient Motor'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-steel">
                    <CheckCircle size={13} className="text-orange shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Agriculture', 'Industry', 'Deep Borewell', 'High Head'].map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-orange/20 text-orange bg-orange/5">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  to="/products/submersible-pump"
                  className="flex-1 flex items-center justify-center gap-2 text-white font-extrabold text-sm py-4 rounded-xl transition-all uppercase tracking-wider"
                  style={{ background: '#051A2E' }}
                >
                  View Details <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 flex items-center justify-center gap-2 font-extrabold text-sm py-4 rounded-xl transition-all uppercase tracking-wider border-2"
                  style={{ borderColor: '#051A2E', color: '#051A2E' }}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Monoset Pump Card */}
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: '#ffffff' }}>
            <div
              className="relative h-72 flex flex-col justify-end overflow-hidden"
              style={{
                backgroundImage: "url('/images/hero-monoset-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
              }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,26,46,0.90) 0%, rgba(5,26,46,0.50) 60%, rgba(5,26,46,0.15) 100%)' }} />
              <div className="relative z-10 px-8 pb-7">
                <span className="inline-block text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3" style={{ background: '#0B4F93' }}>0.5 HP to 5 HP</span>
                <h3 className="text-2xl font-extrabold font-heading text-white uppercase drop-shadow">Monoset Pump</h3>
                <p className="text-white/75 text-xs mt-1">For surface &amp; everyday water transfer</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-steel text-sm leading-relaxed mb-6">
                Our monoset pumps are compact, easy-to-install surface pumps ideal for domestic water supply, garden irrigation, and general water transfer. Lightweight design with low maintenance requirements.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Surface Installation', 'Domestic Supply', '0.5 HP to 5 HP', 'Easy Maintenance', 'Compact Design', 'Low Power Usage'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-steel">
                    <CheckCircle size={13} className="shrink-0" style={{ color: '#0B4F93' }} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Domestic', 'Garden', 'Surface', 'Overhead Tank'].map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border" style={{ borderColor: 'rgba(11,79,147,0.2)', color: '#0B4F93', background: 'rgba(11,79,147,0.05)' }}>{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  to="/products/monoset-pump"
                  className="flex-1 flex items-center justify-center gap-2 text-white font-extrabold text-sm py-4 rounded-xl transition-all uppercase tracking-wider"
                  style={{ background: '#0B4F93' }}
                >
                  View Details <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 flex items-center justify-center gap-2 font-extrabold text-sm py-4 rounded-xl transition-all uppercase tracking-wider border-2"
                  style={{ borderColor: '#0B4F93', color: '#0B4F93' }}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-orange border border-orange/30 bg-orange/5 px-4 py-1.5 rounded-full mb-4">Quick Compare</span>
          <h2 className="text-3xl font-extrabold font-heading uppercase text-navy">
            Category <span className="text-orange">Comparison</span>
          </h2>
          <div className="h-1 w-16 bg-orange mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100" style={{ background: '#ffffff' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: '#051A2E' }} className="text-white text-left">
                <th className="px-6 py-5 font-extrabold font-heading text-[10px] uppercase tracking-widest">Feature</th>
                <th className="px-6 py-5 font-extrabold font-heading text-[10px] uppercase tracking-widest">
                  <span className="text-orange">Submersible</span> Pump
                </th>
                <th className="px-6 py-5 font-extrabold font-heading text-[10px] uppercase tracking-widest">
                  <span className="text-sky-400">Monoset</span> Pump
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['HP Range', '3 HP to 15 HP', '0.5 HP to 5 HP'],
                ['Installation', 'Submerged (inside borewell)', 'Surface (above ground)'],
                ['Water Source', 'Deep borewells, open wells, sumps', 'Overhead tanks, shallow wells, pipelines'],
                ['Best For', 'Deep lifting, high head, farming', 'Domestic, garden, general transfer'],
                ['Maintenance', 'Low — needs pulling from borewell for repair', 'Easy — accessible on ground level'],
              ].map(([feature, sub, mono], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td className="px-6 py-4 font-extrabold text-navy text-xs">{feature}</td>
                  <td className="px-6 py-4 text-steel text-xs">{sub}</td>
                  <td className="px-6 py-4 text-steel text-xs">{mono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: '#051A2E' }}>
          <div className="p-10 sm:p-16">
            <div className="text-center mb-12">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(255,90,0,0.15)' }}>
                <HelpCircle size={26} className="text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-white">
                Which Pump Should <span className="text-orange">You Choose?</span>
              </h2>
              <div className="h-1 w-16 bg-orange mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { num: '01', title: 'What is your water source?', desc: 'Deep borewell (>30 feet) → Submersible Pump. Ground tank, shallow well, pipeline, or overhead transfer → Monoset Pump.' },
                { num: '02', title: 'What is the lifting height?', desc: 'High head from deep underground → Submersible. Moderate head (up to 3 floors) for overhead tanks → Monoset.' },
                { num: '03', title: 'What is your daily usage?', desc: 'Hours of farm irrigation → 3-15 HP Submersible. 30-60 min daily for home tank filling → 0.5-2 HP Monoset.' },
              ].map((item) => (
                <div key={item.num} className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <span className="text-4xl font-black font-heading block mb-3" style={{ color: 'rgba(255,90,0,0.2)' }}>{item.num}</span>
                  <h3 className="font-extrabold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white/60 text-sm mb-6">Still not sure? Tell us your site conditions and we'll suggest the right pump.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-orange text-white font-extrabold px-10 py-4 rounded-xl text-sm transition-all uppercase tracking-widest hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 30px rgba(255,90,0,0.3)' }}
              >
                Send Your Requirement <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
