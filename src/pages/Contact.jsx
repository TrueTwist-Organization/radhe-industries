import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', whatsapp: '', city: '',
    category: 'submersible', hp: 'not-sure',
    application: 'agriculture', source: 'borewell',
    depth: '', message: '', isDealer: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24 min-h-screen">

      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 text-center text-white"
        style={{
          backgroundImage: "url('/images/navigation-hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Transparent gradient overlay to make background image clearly visible */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(5,26,46,0.88) 0%, rgba(5,26,46,0.78) 100%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-orange border border-orange/30 bg-orange/10 px-4 py-1.5 rounded-full mb-5">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading uppercase leading-tight mb-4 drop-shadow-lg">
            Get In <span className="text-orange">Touch</span> With Us
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
            We'll help you choose the right pump category, HP capacity, and provide expert support.
          </p>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <div className="bg-[#051A2E] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Response Time', value: '&lt; 2 Hours' },
            { label: 'Support Days', value: 'Mon - Sat' },
            { label: 'Office Hours', value: '9AM - 6PM' },
            { label: 'WhatsApp', value: 'Available' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-orange font-extrabold text-lg" dangerouslySetInnerHTML={{ __html: s.value }} />
              <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6" style={{ background: 'transparent' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Info Panel */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl font-extrabold font-heading uppercase text-navy mb-6">
              Contact <span className="text-orange">Information</span>
            </h2>

            <div className="p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow" style={{ background: "#ffffff" }}>
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-orange" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-steel mb-1">Call Support (Darshan Patel)</p>
                <a href="tel:+919274767732" className="text-navy font-bold text-sm hover:text-orange transition-colors">+91 92747 67732</a>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow" style={{ background: "#ffffff" }}>
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-steel mb-1">WhatsApp (Darshan Patel)</p>
                <a href="https://wa.me/919274767732" target="_blank" rel="noreferrer" className="text-navy font-bold text-sm hover:text-[#25D366] transition-colors">+91 92747 67732</a>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow" style={{ background: "#ffffff" }}>
              <div className="w-10 h-10 rounded-xl bg-[#0B4F93]/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#0B4F93]" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-steel mb-1">Email Inquiry</p>
                <a href="mailto:info@radheindustries.com" className="text-navy font-bold text-sm hover:text-[#0B4F93] transition-colors">info@radheindustries.com</a>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow" style={{ background: "#ffffff" }}>
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-orange" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-steel mb-1">Factory &amp; Office</p>
                <p className="text-steel text-xs leading-relaxed">562, G.I.D.C. Metoda, Kishan Gate,<br />Road No.3, Lodhika,<br />Rajkot - 360021, Gujarat, India.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow" style={{ background: "#ffffff" }}>
              <div className="w-10 h-10 rounded-xl bg-[#0B4F93]/10 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-[#0B4F93]" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-steel mb-1">Office Hours</p>
                <p className="text-steel text-xs leading-relaxed">Monday to Saturday<br /><span className="font-bold text-navy">9:00 AM - 6:00 PM</span><br />Closed on Sundays</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[#051A2E] rounded-2xl p-5 border border-white/10">
              <p className="text-white/50 text-[10px] uppercase tracking-widest font-extrabold mb-3">Location Map</p>
              <div className="bg-white/5 rounded-xl h-36 flex items-center justify-center border border-white/10">
                <a
                  href="https://maps.google.com/?q=GIDC+Metoda+Rajkot"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-orange text-xs font-bold hover:underline"
                >
                  <MapPin size={14} /> View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right: Full Inquiry Form */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl" style={{ background: "#ffffff" }}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold font-heading text-navy mb-2">Inquiry Submitted!</h3>
                  <p className="text-steel text-sm max-w-sm mx-auto mb-8">
                    Our sales engineer has received your details and will contact you with models and pricing within 2 hours.
                  </p>
                  <a
                    href="https://wa.me/919274767732"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl text-sm hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="flex items-start justify-between border-b border-gray-100 pb-5">
                    <div>
                      <h3 className="text-xl font-extrabold font-heading text-navy uppercase">Send Detailed Inquiry</h3>
                      <p className="text-steel text-xs mt-1">Fill in your site details for accurate model &amp; pricing</p>
                      <div className="h-1 w-12 bg-orange mt-2 rounded-full"></div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="isDealer"
                        checked={form.isDealer}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-orange focus:ring-orange"
                      />
                      <span className="text-[10px] font-extrabold text-navy uppercase tracking-wider">Dealer / Distributor?</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">WhatsApp Number</label>
                      <input name="whatsapp" value={form.whatsapp} onChange={handleChange}
                        placeholder="Same or different number"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">City &amp; State *</label>
                      <input name="city" value={form.city} onChange={handleChange} required
                        placeholder="e.g. Rajkot, Gujarat"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">Pump Category *</label>
                      <select name="category" value={form.category} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors">
                        <option value="submersible">Submersible Pump (3HP - 15HP)</option>
                        <option value="monoset">Monoset Pump (0.5HP - 5HP)</option>
                        <option value="not-sure">Not Sure - Need Assistance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">Required HP Range</label>
                      <select name="hp" value={form.hp} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors">
                        <option value="not-sure">Not Sure (Check Site Conditions)</option>
                        <option value="0.5-1">0.5 HP - 1 HP</option>
                        <option value="1.5-3">1.5 HP - 3 HP</option>
                        <option value="4-5">4 HP - 5 HP</option>
                        <option value="6-10">6 HP - 10 HP</option>
                        <option value="11-15">11 HP - 15 HP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">Water Application *</label>
                      <select name="application" value={form.application} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors">
                        <option value="agriculture">Agriculture / Farm Irrigation</option>
                        <option value="domestic">Domestic Supply / Rooftop Tank</option>
                        <option value="borewell">Deep Borewell Lifting</option>
                        <option value="construction">Construction Site Usage</option>
                        <option value="transfer">General Water Transfer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">Water Source Type</label>
                      <select name="source" value={form.source} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors">
                        <option value="borewell">Borewell (Specify depth below)</option>
                        <option value="openwell">Open Well / Sump</option>
                        <option value="overhead">Overhead / Ground Level Tank</option>
                        <option value="pipeline">Public Water Pipeline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">Borewell Depth / Suction Height (If Applicable)</label>
                    <input name="depth" value={form.depth} onChange={handleChange}
                      placeholder="e.g. 150 feet depth / 5 meters suction"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy mb-1.5">Message / Project Requirements</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      rows={4}
                      placeholder="Mention any custom specifications, discharge needs, or power limits..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors resize-none" />
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-orange hover:bg-[#e04d00] text-white font-extrabold py-4 rounded-xl text-sm transition-all uppercase tracking-widest shadow-lg shadow-orange/20 hover:-translate-y-0.5">
                    <Send size={15} /> Submit Inquiry Request
                  </button>

                  <p className="text-center text-[10px] text-steel">
                    Prefer WhatsApp?{' '}
                    <a href="https://wa.me/919274767732" target="_blank" rel="noreferrer" className="text-[#25D366] font-extrabold">Chat with us directly</a>
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}


