import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Settings, HelpCircle, ArrowRight, Star, Globe, Headphones, Sprout, Home as HomeIcon, Factory, Hammer, Building, Droplet, Battery, Target, Eye, BookOpen, Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const TESTIMONIALS = [
  { name: 'Rajesh Patel', role: 'Farmer, Gujarat', text: 'Radhe Industries pumps are reliable, efficient and durable. Perfect performance and excellent service support.' },
  { name: 'Haresh Bhavsar', role: 'Contractor, Rajkot', text: 'We have been using CRN submersible pumps for 3 years. Zero breakdown, great output. Highly recommended.' },
  { name: 'Manish Solanki', role: 'Borewell Owner, Saurashtra', text: 'The CRN 5HP monoset pump delivers excellent pressure even in peak summer. Best value for money.' },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', city: '', message: '' });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', city: '', message: '' });
  };
  return (
    <main className="bg-brand-gradient min-h-screen">
      {/* Hero Section â€” full image, zero crop */}
      <section className="relative text-white overflow-hidden w-full">
        {/* Image â€” defines section height at natural 3:2 aspect ratio, zero crop */}
        <video
          src="/src/assets/Image_animation_bird_water_pump_202606251012.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover"
          style={{ minHeight: '520px', maxHeight: '88vh' }}
        />

        {/* Light overlay â€” just enough for text readability, image shows through */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Text â€” left side */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full pl-8 sm:pl-12 lg:pl-16">
            <div style={{ maxWidth: '420px', paddingTop: '64px' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold font-heading leading-tight tracking-tight uppercase mb-5 drop-shadow-lg">
                Nurture <br />
                <span className="text-orange">The Future</span> <br />
                With Water Pumps
              </h1>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-7" style={{ maxWidth: '340px' }}>
                High performance submersible and monoset pumps engineered for reliability, efficiency and a better tomorrow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="bg-orange hover:bg-orange/90 text-white font-extrabold text-xs tracking-wider px-7 py-3.5 rounded uppercase flex items-center gap-2 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Explore Products <ArrowRight size={13} />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white hover:bg-white hover:text-navy text-white font-extrabold text-xs tracking-wider px-7 py-3.5 rounded uppercase transition-all hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Floating Features Strip */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-0 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {[
              { title: 'High Efficiency', desc: 'Maximum output with minimum power', icon: Zap },
              { title: 'Durable & Reliable', desc: 'Built to last in toughest conditions', icon: Shield },
              { title: 'Energy Saving', desc: 'Advanced technology for low power consumption', icon: Battery },
              { title: 'Wide Range', desc: 'Pumps for every need from 0.5 HP to 15 HP', icon: Settings },
              { title: 'After Sales Support', desc: 'Prompt support and service across India', icon: Headphones },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 px-7 py-6 hover:bg-orange/3 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={18} className="text-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-graphite text-sm">{item.title}</h4>
                  <p className="text-steel text-[11px] mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* OUR PRODUCTS Section */}
      <section className="py-20 bg-brand-gradient max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold font-heading uppercase text-navy flex items-center gap-2">
            Our <span className="text-orange">Products</span>
          </h2>
          <div className="w-12 h-1 bg-orange mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Submersible */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white p-8 sm:p-10 min-h-[300px] flex items-center"
            style={{
              backgroundImage: "url('/images/hero-landscape.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            {/* Navy overlay */}
            <div className="absolute inset-0 bg-[#0B4F93]/75 pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-center max-w-[60%] sm:max-w-[55%]">
              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight uppercase leading-none mb-1">
                Submersible Pump
              </h3>
              <span className="text-white text-base sm:text-lg font-bold block mb-4">3HP TO 15HP</span>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                High performance submersible pumps for borewell, agriculture, industrial &amp; commercial applications.
              </p>
              <div>
                <Link
                  to="/products/submersible-pump"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-extrabold text-xs tracking-wider px-8 py-3 rounded uppercase transition-all"
                >
                  View Range
                </Link>
              </div>
            </div>
            <img
              src="/images/submersible-pump-single.png"
              alt="Submersible pumps"
              className="absolute right-0 bottom-0 h-[90%] w-auto object-contain object-bottom pointer-events-none select-none drop-shadow-2xl"
            />
          </div>

          {/* Card 2: Monoset */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white p-8 sm:p-10 min-h-[300px] flex items-center"
            style={{
              backgroundImage: "url('/images/hero-landscape.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            {/* Orange overlay */}
            <div className="absolute inset-0 bg-[#E15A00]/80 pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-center max-w-[60%] sm:max-w-[55%]">
              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight uppercase leading-none mb-1">
                Monoset Pump
              </h3>
              <span className="text-white text-base sm:text-lg font-bold block mb-4">0.5HP TO 5HP</span>
              <p className="text-white/95 text-xs sm:text-sm leading-relaxed mb-6">
                Compact, powerful &amp; energy efficient monoset pumps for various domestic and commercial uses.
              </p>
              <div>
                <Link
                  to="/products/monoset-pump"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-extrabold text-xs tracking-wider px-8 py-3 rounded uppercase transition-all"
                >
                  View Range
                </Link>
              </div>
            </div>
            <img
              src="/images/monoset-pump-home.png"
              alt="Monoset pump"
              className="absolute right-2 bottom-0 h-[80%] w-auto object-contain object-bottom pointer-events-none select-none drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* APPLICATIONS Section */}
      <section className="py-6 bg-brand-gradient border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center items-center">
            {[
              { title: 'Agriculture Irrigation', icon: Sprout },
              { title: 'Domestic Water Supply', icon: HomeIcon },
              { title: 'Industries', icon: Factory },
              { title: 'Construction Sites', icon: Hammer },
              { title: 'Commercial Buildings', icon: Building },
              { title: 'Water Treatment', icon: Droplet },
            ].map((app, idx) => (
              <div key={idx} className="flex items-center gap-2.5 w-full max-w-[180px] justify-start lg:justify-center">
                <app.icon size={22} className="text-navy shrink-0" />
                <span className="text-[10px] font-bold text-navy uppercase tracking-wider leading-tight">
                  {app.title.split(' ')[0]}<br />{app.title.split(' ').slice(1).join(' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Testimonials Side-by-Side */}
      <section className="py-20 bg-brand-gradient max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* About Column (4/12) */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-extrabold font-heading uppercase text-navy leading-none mb-6">
              About <span className="text-orange">Radhe Industries</span>
            </h2>
            <p className="text-steel text-sm sm:text-base leading-relaxed mb-8">
              Radhe Industries is a trusted name in the field of water pump manufacturing. With a commitment to innovation, quality and customer satisfaction, we deliver pumps that power progress and nurture life.
            </p>
            <div className="grid grid-cols-4 gap-2 pt-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-2 shadow-inner">
                  <Shield size={18} className="text-navy" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-graphite leading-tight">Quality<br />Assurance</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-2 shadow-inner">
                  <Zap size={18} className="text-navy" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-graphite leading-tight">Advanced<br />Technology</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-2 shadow-inner">
                  <Globe size={18} className="text-navy" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-graphite leading-tight">Wide<br />Distribution</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-2 shadow-inner">
                  <Headphones size={18} className="text-navy" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-graphite leading-tight">Trusted<br />Support</span>
              </div>
            </div>
          </div>

          {/* Center Image Column (4/12) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <img
              src="/images/blue-pump-splash.png"
              alt="Blue Radhe Industries pump Splashing"
              className="w-full max-w-[450px] object-contain drop-shadow-xl animate-float"
              onError={(e) => {
                e.currentTarget.onerror = null; // Prevent infinite loop
                e.currentTarget.src = "/images/blue-pump-splash.jpg";
              }}
            />
          </div>

          {/* Testimonial Column (3/12) */}
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-card border border-gray-100 relative min-h-[260px] flex flex-col justify-between">
            <h3 className="text-xs font-black text-navy font-heading uppercase tracking-wider mb-6">
              What Our Clients Say
            </h3>

            <div
              className="relative mb-6 flex-1"
              style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
              <span className="text-orange text-4xl font-serif absolute -top-4 -left-2 select-none">&ldquo;</span>
              <p className="text-steel text-xs sm:text-sm leading-relaxed pl-6 italic">
                {TESTIMONIALS[activeTestimonial].text}
              </p>
            </div>

            <div
              className="pl-6 border-t border-gray-50 pt-4 flex flex-col"
              style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
              <h5 className="font-extrabold text-graphite text-xs">{TESTIMONIALS[activeTestimonial].name}</h5>
              <span className="text-steel text-[10px]">{TESTIMONIALS[activeTestimonial].role}</span>
            </div>

            <div className="flex gap-1.5 justify-center mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setFade(false); setTimeout(() => { setActiveTestimonial(i); setFade(true); }, 300); }}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ background: i === activeTestimonial ? '#FF5A00' : '#d1d5db', transform: i === activeTestimonial ? 'scale(1.25)' : 'scale(1)' }}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Our Mission & Our Vision Section */}
      <section className="py-20 bg-brand-gradient max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {/* Card 1: Our Mission Text */}
          <Link to="/mission" className="bg-[#051A2E] text-white p-8 rounded-2xl flex flex-col justify-between shadow-xl min-h-[300px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer block border border-transparent hover:border-orange/30">
            <div>
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-orange" size={24} />
              </div>
              <h3 className="text-2xl font-extrabold font-heading uppercase mb-3 group-hover:text-orange transition-colors">Our Mission</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                To engineer and manufacture high-performance, energy-efficient pumping solutions that empower agriculture, support industries, and deliver reliable water access globally.
              </p>
            </div>
            <div className="mt-6 flex items-center text-orange font-bold text-xs uppercase tracking-wider gap-2">
              Building the Future <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Mission Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl min-h-[300px] relative group">
            <img
              src="/images/mission-pump-pipes.png"
              alt="Mission Pump Engineering"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-white font-bold text-xs uppercase tracking-wider">Advanced Engineering</span>
            </div>
          </div>

          {/* Card 3: Our Vision Text */}
          <Link to="/vision" className="bg-[#051A2E] text-white p-8 rounded-2xl flex flex-col justify-between shadow-xl min-h-[300px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer block border border-transparent hover:border-sky-400/30">
            <div>
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-sky-400" size={24} />
              </div>
              <h3 className="text-2xl font-extrabold font-heading uppercase mb-3 group-hover:text-sky-400 transition-colors">Our Vision</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                To be a global leader in sustainable water technology, continuously innovating to provide eco-friendly and smart irrigation solutions that secure water resources for generations to come.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sky-400 font-bold text-xs uppercase tracking-wider gap-2">
              Sustainable Technology <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Vision Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl min-h-[300px] relative group">
            <img
              src="/images/vision-solar-irrigation.png"
              alt="Vision Agriculture Irrigation"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-white font-bold text-xs uppercase tracking-wider">Green Technology &amp; Smart Farming</span>
            </div>
          </div>

        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold font-heading uppercase text-navy leading-none">
              Latest <span className="text-orange">Insights</span>
            </h2>
            <div className="h-1 w-20 bg-orange mt-3"></div>
          </div>
          <Link to="/brochure" className="text-navy hover:text-orange font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors">
            View All Blogs <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 flex flex-col justify-between h-full group hover:shadow-lg transition-shadow">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/farm-irrigation-application.jpg"
                  alt="Crop Irrigation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-orange text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  Tips & Guides
                </span>
              </div>
              <div className="p-6">
                <span className="text-steel text-[10px] font-medium block mb-2">20 May, 2025</span>
                <h4 className="text-navy font-bold text-sm sm:text-base leading-snug mb-3 group-hover:text-orange transition-colors">
                  How to Choose the Right Pump for Your Irrigation Needs
                </h4>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <Link to="/brochure" className="text-orange hover:text-navy font-extrabold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors">
                Read More ➔
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 flex flex-col justify-between h-full group hover:shadow-lg transition-shadow">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/blue-pump-splash.jpg"
                  alt="Splashing Water"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-orange text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  Technology
                </span>
              </div>
              <div className="p-6">
                <span className="text-steel text-[10px] font-medium block mb-2">15 May, 2025</span>
                <h4 className="text-navy font-bold text-sm sm:text-base leading-snug mb-3 group-hover:text-orange transition-colors">
                  Benefits of Energy Efficient Water Pumps
                </h4>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <Link to="/brochure" className="text-orange hover:text-navy font-extrabold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors">
                Read More ➔
              </Link>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 flex flex-col justify-between h-full group hover:shadow-lg transition-shadow">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/quality-testing-pump.jpg"
                  alt="Pump Installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-orange text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  Installation
                </span>
              </div>
              <div className="p-6">
                <span className="text-steel text-[10px] font-medium block mb-2">10 May, 2025</span>
                <h4 className="text-navy font-bold text-sm sm:text-base leading-snug mb-3 group-hover:text-orange transition-colors">
                  Installation Tips for Long Lasting Pump Performance
                </h4>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <Link to="/brochure" className="text-orange hover:text-navy font-extrabold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors">
                Read More ➔
              </Link>
            </div>
          </div>

          {/* Card 4: CTA Card */}
          <div className="bg-[#051A2E] text-white p-8 rounded-2xl flex flex-col justify-between shadow-xl min-h-[300px] border border-white/5">
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-orange" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold font-heading uppercase mb-2">View More Articles</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Stay updated with tips, news and expert guides to keep your water system running efficiently.
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/brochure"
                className="bg-orange hover:bg-orange/90 text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded uppercase block text-center transition-all shadow-md"
              >
                VIEW ALL BLOGS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Trusted Partners Section */}
      <section className="py-16 border-t border-gray-100 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold font-heading uppercase text-navy mb-10">
          Our Trusted <span className="text-orange">Partners</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          {/* Logo 1: Kirloskar */}
          <div className="flex flex-col items-center select-none cursor-default font-serif text-[#0B4F93] font-bold text-lg tracking-wider">
            <span className="text-xs uppercase font-sans tracking-[0.2em] font-normal text-gray-400">Kirloskar</span>
            <span className="font-extrabold text-xl font-heading tracking-tight leading-none italic">KIRLOSKAR</span>
          </div>

          {/* Logo 2: Crompton */}
          <div className="flex flex-col items-center select-none cursor-default font-sans text-navy font-extrabold text-xl tracking-tight">
            <span className="text-xs uppercase font-sans tracking-[0.2em] font-normal text-gray-400">Crompton</span>
            <span className="text-gray-900 tracking-tighter">Crompton</span>
          </div>

          {/* Logo 3: Lubi */}
          <div className="flex flex-col items-center select-none cursor-default">
            <div className="bg-[#0B4F93] text-white px-3 py-1.5 font-sans font-black text-lg rounded-sm tracking-[0.1em]">
              Lubi
            </div>
          </div>

          {/* Logo 4: Shakti */}
          <div className="flex flex-col items-center select-none cursor-default font-sans text-orange font-black text-xl italic tracking-wide">
            SHAKTI
          </div>

          {/* Logo 5: Havells */}
          <div className="flex flex-col items-center select-none cursor-default font-sans font-extrabold text-2xl tracking-tighter text-red-600">
            HAVELLS
          </div>

          {/* Logo 6: V-Guard */}
          <div className="flex flex-col items-center select-none cursor-default font-sans font-bold text-xl text-[#051A2E]">
            V-GUARD
            <span className="w-6 h-1 bg-orange block rounded-full mt-0.5"></span>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(11,79,147,0.15) 0%, #f0f4ff 45%, rgba(255,90,0,0.12) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-orange border border-orange/30 bg-orange/5 px-4 py-1.5 rounded-full mb-4">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-navy leading-tight">
              Contact <span className="text-orange">Us</span>
            </h2>
            <div className="h-1 w-16 bg-orange mx-auto mt-3 rounded-full"></div>
            <p className="text-steel text-sm mt-4 max-w-md mx-auto">Have a question or need a custom pump quote? We're here to help.</p>
          </div>

          {/* Main Card Box */}
          <div className="rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT: Dark Info Panel */}
            <div className="bg-[#051A2E] p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold font-heading text-white uppercase mb-2">Contact Information</h3>
                <p className="text-white/50 text-sm mb-10">Fill in the form and we'll get back to you within 24 hours.</p>

                <div className="space-y-7">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-orange/15 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-0.5">Phone</p>
                      <a href="tel:+919876543210" className="text-white font-bold text-base hover:text-orange transition-colors">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-0.5">WhatsApp</p>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-white font-bold text-base hover:text-[#25D366] transition-colors">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/15 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-sky-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-0.5">Email</p>
                      <a href="mailto:info@radheindustries.com" className="text-white font-bold text-sm hover:text-sky-400 transition-colors">info@radheindustries.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-orange/15 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-0.5">Factory &amp; Office</p>
                      <p className="text-white font-semibold text-sm leading-relaxed">562, G.I.D.C. Metoda, Kishan Gate,<br />Road No.3, Lodhika,<br />Rajkot – 360021, Gujarat.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom office hours */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Office Hours</p>
                <p className="text-white font-bold text-sm">Mon – Sat: 9:00 AM to 6:00 PM</p>
                <p className="text-white/40 text-xs mt-1">Closed on Sundays &amp; Public Holidays</p>

                {/* Decorative dots */}
                <div className="flex gap-3 mt-8">
                  <span className="w-10 h-10 rounded-full bg-orange/30 block"></span>
                  <span className="w-10 h-10 rounded-full bg-orange/15 block"></span>
                  <span className="w-10 h-10 rounded-full bg-orange/5 block"></span>
                </div>
              </div>
            </div>

            {/* RIGHT: White Form Panel */}
            <div className="p-10 lg:p-12" style={{ background: "#ffffff" }}>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-xl font-extrabold font-heading text-navy mb-2">Inquiry Submitted!</h4>
                  <p className="text-steel text-sm mb-6 max-w-xs">Our sales engineer will contact you with model recommendations and pricing.</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-xl text-sm hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col justify-center">
                  <div>
                    <h3 className="text-2xl font-extrabold font-heading text-navy uppercase">Send Inquiry</h3>
                    <p className="text-steel text-sm mt-1">We respond within 24 hours</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-navy">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="px-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-navy">Phone Number *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your phone number"
                        className="px-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-navy">City &amp; State *</label>
                      <input
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rajkot, Gujarat"
                        className="px-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-navy">Pump Type</label>
                      <select className="px-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors">
                        <option>Submersible (3HP – 15HP)</option>
                        <option>Monoset (0.5HP – 5HP)</option>
                        <option>Not Sure – Need Help</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-navy">Message / Requirements</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your water requirement, borewell depth, HP needed..."
                      className="px-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm focus:outline-none focus:border-orange/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-orange hover:bg-[#e04d00] text-white font-extrabold py-4 rounded-xl text-sm transition-all uppercase tracking-widest shadow-lg shadow-orange/20 hover:-translate-y-0.5"
                  >
                    <Send size={15} /> Submit Inquiry
                  </button>

                  <p className="text-center text-[10px] text-steel pt-1">
                    Prefer WhatsApp?{' '}
                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-[#25D366] font-extrabold">Chat with us →</a>
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* Strip Banner */}
      <section className="bg-orange py-6 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <HelpCircle size={28} className="text-white shrink-0 animate-pulse" />
            <div>
              <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider text-white">
                Need Help Choosing the Right Pump?
              </h3>
              <p className="text-white/90 text-xs sm:text-sm mt-0.5">
                Our experts are here to help you find the perfect solution for your requirement.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-white hover:bg-white/90 text-orange font-extrabold text-xs tracking-wider px-6 py-3 rounded uppercase transition-all shadow-md shrink-0"
          >
            Get Expert Advice
          </Link>
        </div>
      </section>
    </main>
  );
}

