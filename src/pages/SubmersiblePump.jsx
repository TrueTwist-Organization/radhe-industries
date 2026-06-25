import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import {
  Shield, Zap, Settings, Droplets, Layers, Activity,
  ArrowRight, ChevronDown, Phone, X, Gauge, Waves, Plug, BarChart3
} from 'lucide-react';

const iconMap = { Zap, Shield, Activity, Droplets, Layers, Settings };

const PRODUCTS = [
  {
    model: 'CRN-3HP', hp: '3 HP', stages: '7', head: '90 m', discharge: '2,000 LPH',
    phase: 'Single / Three', bore: '4" Casing',
    badge: 'ENTRY LEVEL', badgeColor: '#e8f5e9', badgeText: '#2e7d32',
    popular: false, accentFrom: '#0B4F93', accentTo: '#1e88e5',
    image: '/images/real-submersible-1.png',
    desc: 'Perfect for small borewells and farmhouse water supply. Compact, reliable, and power-efficient for daily operation.',
  },
  {
    model: 'CRN-5HP', hp: '5 HP', stages: '10', head: '120 m', discharge: '3,000 LPH',
    phase: 'Single / Three', bore: '4" Casing',
    badge: 'BEST SELLER', badgeColor: '#fff3e0', badgeText: '#e65100',
    popular: true, accentFrom: '#FF5A00', accentTo: '#f97316',
    image: '/images/real-submersible-2.png',
    desc: "India's most preferred model for farm irrigation and residential borewell water supply with single/three-phase options.",
  },
  {
    model: 'CRN-7.5HP', hp: '7.5 HP', stages: '12', head: '150 m', discharge: '4,500 LPH',
    phase: 'Three Phase', bore: '6" Casing',
    badge: 'POPULAR', badgeColor: '#e3f2fd', badgeText: '#1565c0',
    popular: false, accentFrom: '#0B4F93', accentTo: '#3b82f6',
    image: '/images/real-submersible-3.png',
    desc: 'High output for medium farms and community water supply. 6" casing for higher bore diameter wells.',
  },
  {
    model: 'CRN-10HP', hp: '10 HP', stages: '14', head: '180 m', discharge: '6,000 LPH',
    phase: 'Three Phase', bore: '6" Casing',
    badge: 'HEAVY DUTY', badgeColor: '#f3e5f5', badgeText: '#6a1b9a',
    popular: false, accentFrom: '#0B4F93', accentTo: '#a78bfa',
    image: '/images/real-submersible-pump.png',
    desc: 'Powerful model for large agricultural fields, townships, and high-head water delivery requirements.',
  },
  {
    model: 'CRN-12.5HP', hp: '12.5 HP', stages: '16', head: '200 m', discharge: '7,500 LPH',
    phase: 'Three Phase', bore: '6" Casing',
    badge: 'INDUSTRIAL', badgeColor: '#fce4ec', badgeText: '#b71c1c',
    popular: false, accentFrom: '#0B4F93', accentTo: '#f87171',
    image: '/images/real-submersible-1.png',
    desc: 'Built for industrial and large community demand. Ultra-deep bore capacity with robust motor construction.',
  },
  {
    model: 'CRN-15HP', hp: '15 HP', stages: '18', head: '220 m', discharge: '9,000 LPH',
    phase: 'Three Phase', bore: '6" Casing',
    badge: 'PRO MAX', badgeColor: '#eceff1', badgeText: '#37474f',
    popular: false, accentFrom: '#0B4F93', accentTo: '#475569',
    image: '/images/real-submersible-2.png',
    desc: 'Top-of-the-range pump for maximum water lifting depth and high-volume output requirement.',
  },
  {
    model: 'CRN-5HP (V6)', hp: '5 HP (V6)', stages: '6', head: '70 m', discharge: '2,500 LPH',
    phase: 'Single Phase', bore: '4" Casing',
    badge: 'V6 SERIES', badgeColor: '#e8f5e9', badgeText: '#1b5e20',
    popular: false, accentFrom: '#0B4F93', accentTo: '#4ade80',
    image: '/images/real-submersible-3.png',
    desc: 'Agriculture-optimized V6 variant with enhanced flow for drip and sprinkler irrigation on farms.',
  },
  {
    model: 'CRN-7.5HP (V6)', hp: '7.5 HP (V6)', stages: '8', head: '90 m', discharge: '3,500 LPH',
    phase: 'Single Phase', bore: '4" Casing',
    badge: 'V6 SERIES', badgeColor: '#e0f2f1', badgeText: '#00695c',
    popular: false, accentFrom: '#0B4F93', accentTo: '#2dd4bf',
    image: '/images/real-submersible-pump.png',
    desc: 'SS body for saline or corrosive water. Ideal for coastal areas with extended corrosion-free service life.',
  },
];

export default function SubmersiblePump() {
  const data = categories.find(c => c.slug === 'submersible-pump');
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="bg-brand-gradient min-h-screen pt-24">

      {/* ═══════════════════════════════════════
          HERO — full background photo like reference
      ═══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          minHeight: 500,
          backgroundImage: "url('/images/hero-submersible-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay on left so text is readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, rgba(5,26,46,0.88) 0%, rgba(5,26,46,0.75) 45%, rgba(5,26,46,0.10) 75%, transparent 100%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center" style={{ minHeight: 500 }}>

          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center py-14 pr-8">
            <p className="text-white/60 text-xs font-bold uppercase tracking-[4px] mb-2">OUR</p>

            <h1 className="font-black font-heading leading-none mb-4" style={{ fontSize: 'clamp(44px,5.5vw,68px)' }}>
              <span className="text-orange">SUBMERSIBLE</span>{' '}
              <span className="text-white">PUMPS</span>
            </h1>

            <div style={{ width: 64, height: 4, background: '#FF8A00', borderRadius: 2, marginBottom: 20 }} />

            <p className="text-white/80 leading-relaxed mb-8 max-w-md" style={{ fontSize: 14 }}>
              High performance, energy-efficient and durable submersible pumps for every need.
            </p>

            {/* 3 feature chips */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: Shield, title: 'Durable & Reliable', sub: 'Built to last in toughest conditions' },
                { icon: Zap, title: 'Energy Efficient', sub: 'Maximum output with minimum power' },
                { icon: Settings, title: 'Wide Applications', sub: 'Suitable for domestic, agriculture & industrial use' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="shrink-0 mt-0.5 rounded-lg flex items-center justify-center" style={{ width: 34, height: 34, background: 'rgba(255,255,255,0.12)' }}>
                    <f.icon size={15} style={{ color: '#FF8A00' }} />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-tight" style={{ fontSize: 11 }}>{f.title}</p>
                    <p className="text-white/55 leading-tight mt-0.5" style={{ fontSize: 10 }}>{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#inquiry"
                className="flex items-center gap-2 font-extrabold uppercase tracking-wider rounded transition-all hover:-translate-y-0.5 shadow-lg"
                style={{ background: '#FF8A00', color: '#fff', fontSize: 12, padding: '13px 28px' }}
              >
                Get a Quote <ArrowRight size={14} />
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 font-bold uppercase tracking-wider rounded transition-all hover:-translate-y-0.5"
                style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 12, padding: '13px 28px' }}
              >
                <Phone size={13} /> Call Us
              </a>
            </div>
          </div>

          {/* RIGHT — empty: image already in background */}
          <div className="hidden lg:block" />
        </div>

        {/* bottom wave divider */}
        <div className="absolute left-0 w-full overflow-hidden leading-none z-10" style={{ bottom: '-2px', transform: 'scaleY(1.05)', transformOrigin: 'bottom' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: 60, display: 'block' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f4f6fb" />
          </svg>
        </div>
      </section>

      {/* ── PRODUCTS SECTION ── */}
      <section className="py-12 relative bg-brand-gradient">
        {/* Seamless blend from the wave */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#f4f6fb] to-transparent pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

          {/* Section header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy">
              Submersible Pump <span className="text-orange">Models</span>
            </h2>
            <div className="w-12 h-[3px] bg-orange mt-2 mb-2" />
            <p className="text-steel text-sm">
              Complete lineup from 3 HP to 15 HP. Click any model for full specifications.
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

          {/* Bottom note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
              <Phone size={14} className="text-orange shrink-0" />
              <p className="text-steel text-sm">
                Need help selecting?{' '}
                <Link to="/contact" className="text-orange font-bold hover:underline">Contact our pump experts →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 bg-brand-gradient max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy bg-navy/8 px-4 py-1.5 rounded-full mb-3">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">Common <span className="text-orange">Questions</span></h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-2">
          {data.faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-bold text-graphite text-sm pr-4">{faq.q}</span>
                <ChevronDown size={16} className={`text-orange shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-steel text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* ── PRODUCT DETAIL MODAL ── */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md" onClick={() => setSelectedProduct(null)}>
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full flex flex-col md:flex-row border border-slate-100 animate-scale-up max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full p-2 z-30 shadow-sm">
              <X size={18} />
            </button>

            {/* Left panel — big image */}
            <div
              className="w-full md:w-[42%] flex flex-col items-center justify-center p-8 shrink-0 border-b md:border-b-0 md:border-r border-slate-100"
              style={{ background: `linear-gradient(160deg, ${selectedProduct.accentFrom}15 0%, transparent 100%)`, minHeight: 280 }}
            >
              <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: selectedProduct.badgeColor, color: selectedProduct.badgeText }}>{selectedProduct.badge}</span>
              <img src={selectedProduct.image} alt={selectedProduct.model} className="max-h-[280px] w-auto object-contain drop-shadow-2xl" />
              <div className="text-center mt-4">
                <span className="text-3xl font-black" style={{ color: selectedProduct.accentFrom }}>{selectedProduct.hp}</span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Power Rating</p>
              </div>
            </div>

            {/* Right panel — details */}
            <div className="p-6 md:p-8 flex-1 overflow-y-auto flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-orange mb-1 block">Submersible Pump</span>
                <h3 className="text-2xl font-heading font-black text-navy mb-4">{selectedProduct.model}</h3>
                <p className="text-steel text-sm leading-relaxed mb-5">{selectedProduct.desc}</p>
                <h4 className="text-xs font-black uppercase tracking-wider text-navy mb-3">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {[
                    { label: 'Stages', value: selectedProduct.stages },
                    { label: 'Max Head', value: selectedProduct.head },
                    { label: 'Discharge', value: selectedProduct.discharge },
                    { label: 'Phase', value: selectedProduct.phase },
                    { label: 'Bore Casing', value: selectedProduct.bore },
                    { label: 'Cooling', value: 'Water Cooled' },
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
                <button onClick={() => setSelectedProduct(null)} className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase rounded-xl transition-all">
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
