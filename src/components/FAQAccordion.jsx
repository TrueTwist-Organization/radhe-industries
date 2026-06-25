import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${open === i ? 'border-aqua/40 shadow-card' : 'border-gray-100'}`}>
          <button
            className="w-full flex items-center justify-between gap-4 p-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-graphite text-sm sm:text-base">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-pump-blue transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          <div className={`transition-all duration-300 ease-in-out ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <p className="px-5 pb-5 text-steel text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
