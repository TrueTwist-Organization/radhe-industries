import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-24 bg-brand-gradient">
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
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-aqua bg-aqua/10 px-4 py-1.5 rounded-full mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">Reliable Water Pump Solutions for Every Application</h1>
          <p className="text-white/70 text-lg leading-relaxed">We provide durable pump solutions for agriculture, domestic and industrial requirements â€” with a focus on the right selection for real site conditions.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-graphite mb-6">Who We Are</h2>
              <p className="text-steel text-lg leading-relaxed mb-6">
                We provide reliable water pump solutions for agriculture, domestic and industrial requirements. Our focus is on durable design, efficient water movement and application-based pump selection, so every customer gets a suitable pump range for their actual site condition.
              </p>
              <p className="text-steel leading-relaxed mb-8">
                Whether you need a compact monoset pump for your home water supply or a powerful submersible pump for deep borewell irrigation, we help you choose the right product for the right job â€” clearly, honestly and without overselling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: 'Mission', text: 'Dependable water flow with the right pump selection for every site condition.' },
                  { label: 'Vision', text: 'Become a trusted pump solution brand for farms, homes and industries across India.' },
                  { label: 'Values', text: 'Quality, transparency, service support and engineering discipline in every recommendation.' },
                ].map((v) => (
                  <div key={v.label} className="p-5 bg-mist rounded-xl border border-gray-100">
                    <div className="text-aqua font-bold text-xs uppercase tracking-widest mb-2">{v.label}</div>
                    <p className="text-graphite text-sm leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-96 bg-[#0a2238]">
              <img
                src="/images/product-range-group.jpg"
                alt="Radhe Industries pump product range"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                      <div class="text-white/30 text-sm">Add product range group photo here</div>
                      <div class="text-white/20 text-xs mt-2">Recommended: product-range-group.jpg</div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-graphite">Our Product Approach</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand Your Site', desc: 'We start by understanding your water source, bore depth, delivery height and daily usage pattern.' },
              { step: '02', title: 'Select the Right HP', desc: 'Based on site data we guide you to the right HP range â€” not just a generic model recommendation.' },
              { step: '03', title: 'Match the Category', desc: 'Submersible for deep borewells. Monoset for surface applications. Right pump, right place.' },
              { step: '04', title: 'Support After Delivery', desc: 'Service guidance, spare part support and inquiry response continued after product selection.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card">
                <div className="text-4xl font-bold text-pump-blue/10 font-heading mb-3">{s.step}</div>
                <h3 className="font-bold font-heading text-graphite mb-2">{s.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Image */}
      <section className="py-20 bg-brand-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-graphite mb-4">Workshop & Quality Focus</h2>
          <p className="text-steel mb-10 max-w-2xl mx-auto">Every product in our range is selected for proven field reliability. We focus on application-matched selection and service-accessible design.</p>
          <div className="rounded-2xl overflow-hidden h-72 bg-mist relative">
            <img
              src="/images/quality-testing-pump.jpg"
              alt="Pump workshop and quality inspection"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.parentElement.innerHTML = `<div class='w-full h-full flex items-center justify-center text-steel text-sm'>Add workshop quality testing photo here</div>`;
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-pump-blue py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to Find the Right Pump?</h2>
          <p className="text-white/80 mb-8">Share your water requirement and our team will suggest the right category and HP range.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-pump-blue font-bold px-8 py-4 rounded-full text-sm hover:-translate-y-0.5 transition-all shadow-lg">
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
