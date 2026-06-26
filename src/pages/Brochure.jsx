import React from 'react';
import { Download, FileText } from 'lucide-react';
import { generateSubmersiblePDF, generateMonosetPDF } from '../lib/generateCatalogPDF';

export default function Brochure() {

  return (
    <main className="pt-24 bg-brand-gradient">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-16 text-center text-white"
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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-aqua bg-aqua/10 px-4 py-1.5 rounded-full mb-4">Downloads</span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-4">Brochure &amp; Catalog</h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Get instant access to our comprehensive pump catalogs, dimension details, and motor curve datasheets.
          </p>
        </div>
      </section>

      {/* Main download cards */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pump-blue/10 flex items-center justify-center text-pump-blue mb-5">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading text-graphite mb-2">Submersible Pump Catalog</h3>
              <p className="text-steel text-sm leading-relaxed mb-4">
                Technical tables, curve graphs, head charts, and model list for 3 HP to 15 HP submersible pump series.
              </p>
              <ul className="text-xs text-steel space-y-1 mb-6">
                <li>✅ All 8 models with full specs</li>
                <li>✅ Head, discharge & stage data</li>
                <li>✅ Motor & electrical specifications</li>
                <li>✅ Applications & contact details</li>
              </ul>
            </div>
            <button
              onClick={generateSubmersiblePDF}
              className="inline-flex items-center justify-center gap-2 bg-pump-blue hover:bg-pump-blue/90 text-white font-semibold py-3.5 rounded-xl text-sm transition-all w-full"
            >
              <Download size={16} /> Download PDF Catalog
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pump-blue/10 flex items-center justify-center text-pump-blue mb-5">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading text-graphite mb-2">Monoset Pump Catalog</h3>
              <p className="text-steel text-sm leading-relaxed mb-4">
                Complete self-priming monoset catalog containing performance charts and dimensions for 0.5 HP to 5 HP pumps.
              </p>
              <ul className="text-xs text-steel space-y-1 mb-6">
                <li>✅ All 8 models with full specs</li>
                <li>✅ Head, discharge & suction data</li>
                <li>✅ Monoset vs. Submersible guide</li>
                <li>✅ Applications & contact details</li>
              </ul>
            </div>
            <button
              onClick={generateMonosetPDF}
              className="inline-flex items-center justify-center gap-2 bg-pump-blue hover:bg-pump-blue/90 text-white font-semibold py-3.5 rounded-xl text-sm transition-all w-full"
            >
              <Download size={16} /> Download PDF Catalog
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
