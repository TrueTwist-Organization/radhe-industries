import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CheckCircle, Send, Loader2 } from 'lucide-react';
import { submitForm } from '../lib/submitForm';
import { WHATSAPP_URL } from '../constants/site';

export default function InquiryForm({ type = 'general' }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError('');
    try {
      await submitForm('Product Inquiry', { inquiry_type: type, ...data });
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-card border border-aqua/20">
        <CheckCircle className="w-16 h-16 text-aqua mx-auto mb-4" />
        <h3 className="text-2xl font-bold font-heading text-graphite mb-2">Inquiry Received!</h3>
        <p className="text-steel">Thank you. Our pump expert will contact you within 24 hours with the right model guidance.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-sm hover:-translate-y-0.5 transition-all"
        >
          Also Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Full Name *</label>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter your name"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Phone Number *</label>
            <input
              {...register('phone', { required: 'Phone is required' })}
              placeholder="Enter mobile number"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {type !== 'submersible' && type !== 'monoset' && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">WhatsApp Number</label>
              <input
                {...register('whatsapp')}
                placeholder="Enter WhatsApp number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">City / Location *</label>
            <input
              {...register('city', { required: 'City is required' })}
              placeholder="Enter city"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all ${errors.city ? 'border-red-400' : 'border-gray-200'}`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Product Category *</label>
            <select
              {...register('category', { required: true })}
              defaultValue={type === 'submersible' ? 'submersible' : type === 'monoset' ? 'monoset' : ''}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all"
            >
              <option value="" disabled>Select Category</option>
              <option value="submersible">Submersible Pump (3–15 HP)</option>
              <option value="monoset">Monoset Pump (0.5–5 HP)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Required HP Range</label>
            <select
              {...register('hp')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all"
            >
              <option value="not-sure">Not Sure (Ask Expert)</option>
              <option value="0.5-1">0.5 HP – 1 HP</option>
              <option value="1.5-3">1.5 HP – 3 HP</option>
              <option value="3-5">3 HP – 5 HP</option>
              <option value="6-10">6 HP – 10 HP</option>
              <option value="11-15">11 HP – 15 HP</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Application *</label>
            <select
              {...register('application', { required: true })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all"
            >
              <option value="agri">Agriculture Irrigation</option>
              <option value="domestic">Domestic Water Supply</option>
              <option value="borewell">Borewell Lifting</option>
              <option value="construction">Construction Site</option>
              <option value="industrial">Industrial Transfer</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Water Source</label>
            <select
              {...register('source')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all"
            >
              <option value="borewell">Deep Borewell</option>
              <option value="well">Open Well</option>
              <option value="tank">Overhead / Ground Tank</option>
              <option value="pipeline">Public Pipeline</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-graphite mb-1.5">Message / Site Details</label>
          <textarea
            {...register('message')}
            rows={3}
            placeholder="Tell us about bore depth, delivery height, daily usage, or pipeline layout..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-mist focus:outline-none focus:ring-2 focus:ring-pump-blue/30 focus:border-pump-blue transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-pump-blue hover:bg-pump-blue/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-blue-glow"
        >
          {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {submitting ? 'Sending...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
}
