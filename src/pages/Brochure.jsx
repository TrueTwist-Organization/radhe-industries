import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Download, FileText, CheckCircle, Loader2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitForm } from '../lib/submitForm';
import { WHATSAPP_URL } from '../constants/site';

export default function Brochure() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError('');
    try {
      await submitForm('Brochure Request', data);
      setSubmitted(true);
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

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
              <p className="text-steel text-sm leading-relaxed mb-6">
                Technical tables, curve graphs, head charts, and model list for 3 HP to 15 HP submersible pump series.
              </p>
            </div>
            <a
              href="#request-form"
              className="inline-flex items-center justify-center gap-2 bg-pump-blue hover:bg-pump-blue/90 text-white font-semibold py-3.5 rounded-xl text-sm transition-all"
            >
              <Download size={16} /> Request Catalog
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pump-blue/10 flex items-center justify-center text-pump-blue mb-5">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading text-graphite mb-2">Monoset Pump Catalog</h3>
              <p className="text-steel text-sm leading-relaxed mb-6">
                Complete self-priming monoset catalog containing performance charts and dimensions for 0.5 HP to 5 HP pumps.
              </p>
            </div>
            <a
              href="#request-form"
              className="inline-flex items-center justify-center gap-2 bg-pump-blue hover:bg-pump-blue/90 text-white font-semibold py-3.5 rounded-xl text-sm transition-all"
            >
              <Download size={16} /> Request Catalog
            </a>
          </div>
        </div>

        {/* Request Form */}
        <div id="request-form" className="bg-white p-8 rounded-3xl border border-gray-100 shadow-card max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle className="w-12 h-12 text-aqua mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold font-heading text-graphite mb-2">Request Received!</h3>
              <p className="text-steel text-sm mb-6">
                Our team will share the catalog PDF with you shortly. For immediate assistance, contact us on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-sm transition-all"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-aqua hover:bg-aqua/90 text-navy font-bold px-6 py-3 rounded-full text-sm transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-center text-graphite mb-2">Enter Details to Download Brochure</h3>
              <p className="text-steel text-center text-xs mb-6">Provide your basic info to request download link and specifications sheet.</p>

              {error && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
              )}
              
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Your Name *</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Phone / Mobile *</label>
                <input
                  {...register('phone', { required: 'Phone is required' })}
                  placeholder="Enter phone"
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Product Range Interest *</label>
                <select
                  {...register('interest', { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-mist focus:outline-none"
                >
                  <option value="both">Both Submersible &amp; Monoset</option>
                  <option value="submersible">Submersible Pump 3-15 HP</option>
                  <option value="monoset">Monoset Pump 0.5-5 HP</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-pump-blue hover:bg-pump-blue/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl text-sm transition-all"
              >
                {submitting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                {submitting ? 'Sending Request...' : 'Request Download Link'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
