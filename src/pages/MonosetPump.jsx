import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import {
  Shield, Zap, Settings, Droplets, Wind, Package, Wrench,
  ArrowRight, ChevronDown, Phone, X, BarChart3, Gauge, Waves, Plug, MoveVertical
} from 'lucide-react';

const iconMap = { Wind, Package, Zap, Shield, Droplets, Settings, Wrench };

const PRODUCTS = [
  {
    model: 'CRN-0.5HP', hp: '0.5 HP', head: '25 m', discharge: '800 LPH',
    suction: '6 m', phase: 'Single Phase', outlet: '25mm (1")',
    badge: 'STARTER', badgeColor: '#e8f5e9', badgeText: '#2e7d32',
    popular: false, accentFrom: '#0B4F93', accentTo: '#34d399',
    image: '/images/real-monoset-1.png',
    desc: 'Entry-level pump for small home gardens, lightweight overhead tank filling and basic daily water needs.',
  },
  {
    model: 'CRN-1HP', hp: '1 HP', head: '35 m', discharge: '1,500 LPH',
    suction: '7 m', phase: 'Single Phase', outlet: '25mm (1")',
    badge: 'BEST SELLER', badgeColor: '#fff3e0', badgeText: '#e65100',
    popular: true, accentFrom: '#FF5A00', accentTo: '#f97316',
    image: '/images/real-monoset-2.png',
    desc: 'Most popular home pump — ideal for overhead tanks, garden watering and domestic daily use with single-phase supply.',
  },
  {
    model: 'CRN-1.5HP', hp: '1.5 HP', head: '42 m', discharge: '2,200 LPH',
    suction: '7 m', phase: 'Single Phase', outlet: '32mm (1.25")',
    badge: 'POPULAR', badgeColor: '#e3f2fd', badgeText: '#1565c0',
    popular: false, accentFrom: '#0B4F93', accentTo: '#60a5fa',
    image: '/images/real-monoset-3.png',
    desc: 'Higher head and flow for multi-floor buildings, shops and extended garden irrigation requirements.',
  },
  {
    model: 'CRN-2HP', hp: '2 HP', head: '48 m', discharge: '3,000 LPH',
    suction: '8 m', phase: 'Single Phase', outlet: '32mm (1.25")',
    badge: 'HOME PLUS', badgeColor: '#f3e5f5', badgeText: '#6a1b9a',
    popular: false, accentFrom: '#0B4F93', accentTo: '#a78bfa',
    image: '/images/real-monoset-pump.png',
    desc: 'Strong output for residential complexes, commercial setups and light-duty water transfer applications.',
  },
  {
    model: 'CRN-3HP', hp: '3 HP', head: '58 m', discharge: '4,200 LPH',
    suction: '8 m', phase: 'Three Phase', outlet: '40mm (1.5")',
    badge: 'FARM READY', badgeColor: '#e8f5e9', badgeText: '#1b5e20',
    popular: false, accentFrom: '#0B4F93', accentTo: '#4ade80',
    image: '/images/real-monoset-1.png',
    desc: 'Built for small farm irrigation, shop water supply and higher volume domestic requirements with three-phase motor.',
  },
  {
    model: 'CRN-3HP SP', hp: '3 HP (SP)', head: '55 m', discharge: '4,000 LPH',
    suction: '8 m', phase: 'Single Phase', outlet: '40mm (1.5")',
    badge: 'SINGLE PHASE', badgeColor: '#fffde7', badgeText: '#f57f17',
    popular: false, accentFrom: '#0B4F93', accentTo: '#fbbf24',
    image: '/images/real-monoset-2.png',
    desc: 'Single-phase 3HP variant for areas without three-phase grid. Ideal for homes and rural installations.',
  },
  {
    model: 'CRN-4HP', hp: '4 HP', head: '65 m', discharge: '5,500 LPH',
    suction: '8 m', phase: 'Three Phase', outlet: '50mm (2")',
    badge: 'HEAVY DUTY', badgeColor: '#fce4ec', badgeText: '#b71c1c',
    popular: false, accentFrom: '#0B4F93', accentTo: '#f87171',
    image: '/images/real-monoset-3.png',
    desc: 'High-flow pump for larger farms, commercial buildings and multi-point water distribution networks.',
  },
  {
    model: 'CRN-5HP', hp: '5 HP', head: '75 m', discharge: '7,000 LPH',
    suction: '8 m', phase: 'Three Phase', outlet: '50mm (2")',
    badge: 'PRO MAX', badgeColor: '#eceff1', badgeText: '#37474f',
    popular: false, accentFrom: '#0B4F93', accentTo: '#475569',
    image: '/images/real-monoset-pump.png',
    desc: 'Top-of-range monoset for maximum surface pumping — agriculture, construction water supply and industrial light use.',
  },
];

export default function MonosetPump() {
  const data = categories.find(c => c.slug === 'monoset-pump');
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="bg-brand-gradient min-h-screen pt-24">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          minHeight: 500,
          backgroundImage: "url('/images/hero-monoset-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay — heavier on left for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, rgba(5,26,46,0.88) 0%, rgba(5,26,46,0.75) 45%, rgba(5,26,46,0.10) 75%, transparent 100%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center" style={{ minHeight: 500 }}>

          {/* LEFT: Text */}
          <div className="flex flex-col justify-center py-14 pr-8">
            <p className="text-white/60 text-xs font-bold uppercase tracking-[4px] mb-2">OUR</p>
            <h1 className="font-black font-heading leading-none mb-4" style={{ fontSize: 'clamp(44px,5.5vw,68px)' }}>
              <span style={{ color: '#fef08a' }}>MONOSET</span>{' '}
              <span className="text-white">PUMPS</span>
            </h1>
            <div style={{ width: 64, height: 4, background: '#fef08a', borderRadius: 2, marginBottom: 20 }} />
            <p className="text-white/80 leading-relaxed mb-8 max-w-md" style={{ fontSize: 14 }}>
              Compact, powerful &amp; energy-efficient surface monoblock pumps for domestic, garden and agricultural water needs.
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: Shield, title: 'Self-Priming', sub: 'Starts without manual bleeding' },
                { icon: Zap, title: 'Energy Efficient', sub: 'Low power consumption design' },
                { icon: Settings, title: 'Easy Install', sub: 'Surface mount, no borewell needed' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="shrink-0 mt-0.5 rounded-lg flex items-center justify-center" style={{ width: 34, height: 34, background: 'rgba(255,255,255,0.15)' }}>
                    <f.icon size={15} style={{ color: '#fef08a' }} />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-tight" style={{ fontSize: 11 }}>{f.title}</p>
                    <p className="text-white/55 leading-tight mt-0.5" style={{ fontSize: 10 }}>{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#inquiry"
                className="flex items-center gap-2 font-extrabold uppercase tracking-wider rounded transition-all hover:-translate-y-0.5 shadow-lg"
                style={{ background: '#fff', color: '#E15A00', fontSize: 12, padding: '13px 28px' }}
              >
                Get a Quote <ArrowRight size={14} />
              </a>
              <a
                href="tel:+919274767732"
                className="flex items-center gap-2 font-bold uppercase tracking-wider rounded transition-all hover:-translate-y-0.5"
                style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 12, padding: '13px 28px' }}
              >
                <Phone size={13} /> Call Us
              </a>
            </div>
          </div>

          {/* RIGHT — image in background, empty col */}
          <div className="hidden lg:block" />
        </div>

        {/* Wave divider */}
        <div className="absolute left-0 w-full overflow-hidden leading-none z-10" style={{ bottom: '-2px', transform: 'scaleY(1.05)', transformOrigin: 'bottom' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: 60, display: 'block' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f4f6fb" />
          </svg>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="py-14 relative bg-brand-gradient">
        {/* Seamless blend from the wave */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#f4f6fb] to-transparent pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Header */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy mb-1">
              Monoset Pump <span className="text-orange">Models</span>
            </h2>
            <div className="w-12 h-1 bg-orange mb-3" />
            <p className="text-steel text-sm max-w-2xl">
              Complete lineup from 0.5 HP to 5 HP. Click any model for full specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col border-2 ${p.popular
                  ? 'border-orange shadow-lg shadow-orange/15'
                  : 'border-slate-100 shadow-sm hover:border-orange/50'
                  }`}
                onClick={() => setSelectedProduct(p)}
              >
                {/* BEST SELLER / Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm"
                    style={{ background: p.badgeColor, color: p.badgeText }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* HP Header */}
                <div className="pt-8 pb-2 px-5 flex items-center justify-between z-10">
                  <span className="text-3xl font-black text-navy">{p.hp}</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">{p.model}</span>
                </div>

                {/* Center Image Container - Filling the box nicely */}
                <div
                  className="flex-1 flex items-center justify-center p-6 relative overflow-hidden"
                  style={{
                    minHeight: '220px',
                    background: `linear-gradient(180deg, transparent 40%, ${p.accentFrom}08 100%)`
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle, ${p.accentFrom}35 0%, transparent 60%)`, mixBlendMode: 'multiply' }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-orange/5 to-transparent" />
                  <img
                    src={p.image}
                    alt={p.model}
                    className="h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xl z-10"
                  />
                </div>

                {/* Bottom Get Quote Button */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 group-hover:bg-orange/5 transition-colors">
                  <button
                    onClick={e => { e.stopPropagation(); setSelectedProduct(p); }}
                    className="w-full text-xs font-black uppercase tracking-wider py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      borderColor: '#FF5A00',
                      color: '#fff',
                      background: '#FF5A00',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#0B4F93'; e.currentTarget.style.borderColor = '#0B4F93'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#FF5A00'; e.currentTarget.style.borderColor = '#FF5A00'; }}
                  >
                    GET QUOTE
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom contact note */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-mist border border-gray-200 rounded-2xl px-6 py-3.5 shadow-sm">
              <Phone size={15} className="text-orange shrink-0" />
              <p className="text-steel text-sm">
                Need help selecting the right model?{' '}
                <Link to="/contact" className="text-orange font-bold hover:underline">Contact our pump experts →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 bg-brand-gradient max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy bg-navy/8 px-4 py-1.5 rounded-full mb-3">FAQ</span>
          <h2 className="text-3xl font-extrabold font-heading text-navy">Common <span className="text-orange">Questions</span></h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {data.faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-bold text-graphite text-sm pr-4">{faq.q}</span>
                <ChevronDown size={18} className={`text-orange shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-steel text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* ── PRODUCT DETAIL MODAL ── */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md" onClick={() => setSelectedProduct(null)}>
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full flex flex-col md:flex-row border border-slate-100 animate-scale-up z-10 max-h-[92vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full p-2 transition-all z-30 shadow-sm"
            >
              <X size={18} />
            </button>

            {/* Left: Big image */}
            <div
              className="w-full md:w-[42%] flex flex-col items-center justify-center p-8 relative shrink-0 border-b md:border-b-0 md:border-r border-slate-100"
              style={{ background: `linear-gradient(160deg, ${selectedProduct.accentFrom}15 0%, ${selectedProduct.accentTo}05 100%)`, minHeight: 280 }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle, ${selectedProduct.accentFrom}20 0%, transparent 65%)` }} />
              <span
                className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ background: selectedProduct.badgeColor, color: selectedProduct.badgeText }}
              >{selectedProduct.badge}</span>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.model}
                className="relative z-10 max-h-[240px] md:max-h-[320px] w-auto object-contain drop-shadow-2xl"
              />
              <div className="text-center mt-4 z-10 relative">
                <span className="text-3xl font-black" style={{ color: selectedProduct.accentFrom }}>{selectedProduct.hp}</span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Power Rating</p>
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-6 md:p-8 flex-1 overflow-y-auto flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-orange mb-1 block">Monoset Pump</span>
                <h3 className="text-2xl font-heading font-black text-navy mb-4 leading-none">{selectedProduct.model}</h3>
                <p className="text-steel text-sm leading-relaxed mb-5">{selectedProduct.desc}</p>

                <h4 className="text-xs font-black uppercase tracking-wider text-navy mb-3">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {[
                    { label: 'Max Head', value: selectedProduct.head },
                    { label: 'Discharge', value: selectedProduct.discharge },
                    { label: 'Suction', value: selectedProduct.suction },
                    { label: 'Phase', value: selectedProduct.phase },
                    { label: 'Outlet Size', value: selectedProduct.outlet },
                    { label: 'Mount Type', value: 'Surface / Horizontal' },
                  ].map((spec, si) => (
                    <div key={si} className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{spec.label}</p>
                      <p className="text-xs font-bold text-graphite mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-5 border-t border-slate-100">
                <Link
                  to="/contact"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 text-center bg-orange hover:bg-orange/90 text-white font-extrabold text-xs tracking-wider uppercase py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Inquire For {selectedProduct.model} →
                </Link>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase rounded-xl transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
