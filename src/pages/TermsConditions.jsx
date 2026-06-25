import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, MapPin, Phone } from 'lucide-react';

export default function TermsConditions() {
  return (
    <main className="pt-24 min-h-screen">

      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 text-center text-white"
        style={{
          backgroundImage: "url('/images/navigation-hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(5,26,46,0.97) 0%, rgba(5,26,46,0.92) 50%, rgba(11,79,147,0.90) 100%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <div className="w-14 h-14 rounded-2xl bg-orange/15 flex items-center justify-center mx-auto mb-5">
            <FileText size={26} className="text-orange" />
          </div>
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-orange border border-orange/30 bg-orange/10 px-4 py-1.5 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase leading-tight mb-3 drop-shadow-lg">
            Terms &amp; <span className="text-orange">Conditions</span>
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Last updated: June 2025 &nbsp;|&nbsp; Radhe Industries, Rajkot, Gujarat
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-12 space-y-10" style={{ background: '#ffffff' }}>

          <div className="p-4 rounded-xl border border-[#0B4F93]/20" style={{ background: 'rgba(11,79,147,0.05)' }}>
            <p className="text-sm text-steel leading-relaxed">
              Please read these Terms &amp; Conditions carefully before using the Radhe Industries website or placing any product inquiry. By accessing our website or submitting an inquiry, you agree to be bound by these terms.
            </p>
          </div>

          {[
            {
              title: '1. About Radhe Industries',
              content: `Radhe Industries is a manufacturer and supplier of submersible pumps and monoset pumps based in Rajkot, Gujarat, India. Our website (radheindustries.com) provides product information, inquiry submission, and dealer contact services.

Registered Office: 562, G.I.D.C. Metoda, Kishan Gate, Road No.3, Lodhika, Rajkot - 360021, Gujarat, India.`,
            },
            {
              title: '2. Use of Website',
              content: `By using this website, you agree that:

• You are at least 18 years of age or accessing the site with parental consent
• You will not use this website for any unlawful or harmful purpose
• You will not attempt to gain unauthorised access to any part of our system
• You will not copy, reproduce, or distribute any content without written permission
• All information you provide through inquiry forms is accurate and truthful

We reserve the right to restrict access to the website at any time without notice.`,
            },
            {
              title: '3. Product Information & Pricing',
              content: `All product specifications, HP ranges, and technical data displayed on this website are for informational purposes only.

• Actual product specifications may vary slightly based on manufacturing updates
• Prices quoted verbally or via email are indicative and subject to change
• Final pricing is confirmed only through official written quotations
• We reserve the right to modify product specifications without prior notice
• Images shown are representative and may differ from actual products`,
            },
            {
              title: '4. Inquiry & Order Process',
              content: `Submitting an inquiry through our website or contacting us via WhatsApp/email does not constitute a binding purchase order.

• All orders are subject to written confirmation from Radhe Industries
• Delivery timelines shared are estimates and may vary based on production capacity
• Payment terms are agreed upon separately and confirmed in writing
• Order cancellations must be communicated before manufacturing begins
• Custom or made-to-order products may not be cancellable once production starts`,
            },
            {
              title: '5. Warranty & After-Sales Service',
              content: `Radhe Industries provides a manufacturer's warranty on its products as follows:

• Standard warranty period: 1 year from date of purchase
• Warranty covers manufacturing defects in materials and workmanship
• Warranty does not cover damage due to improper installation, misuse, flooding, electrical surges, or unauthorised repairs
• Warranty claims must be supported by original purchase receipt
• Service support is available through our authorised dealer network across Gujarat and India`,
            },
            {
              title: '6. Limitation of Liability',
              content: `Radhe Industries shall not be liable for:

• Any indirect, incidental, or consequential damages arising from use of our products
• Loss of profit, revenue, or data resulting from product failure
• Damages arising from improper installation or use contrary to product guidelines
• Delays in delivery due to force majeure events (natural disasters, strikes, government orders)

Our maximum liability in any case shall not exceed the purchase price of the product in question.`,
            },
            {
              title: '7. Intellectual Property',
              content: `All content on this website including text, images, logos, graphics, and product photography is the intellectual property of Radhe Industries unless otherwise stated.

• You may not reproduce, copy, or distribute any content without written permission
• The Radhe Industries name, logo, and brand identity are registered trademarks
• Unauthorised use of our intellectual property will be subject to legal action`,
            },
            {
              title: '8. Dealer & Distributor Terms',
              content: `Entities wishing to become authorised dealers or distributors of Radhe Industries products must:

• Enter into a formal Dealership Agreement with Radhe Industries
• Meet minimum purchase requirements as specified in the agreement
• Not misrepresent product specifications or pricing to end customers
• Maintain service capabilities in their designated territory

Radhe Industries reserves the right to appoint, modify, or terminate dealership agreements at its discretion.`,
            },
            {
              title: '9. Governing Law & Disputes',
              content: `These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of this website or purchase of our products shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat, India.

In the event of a dispute, both parties agree to first attempt resolution through mutual discussion and mediation before pursuing legal proceedings.`,
            },
            {
              title: '10. Changes to These Terms',
              content: `Radhe Industries reserves the right to update or modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to this page. Continued use of the website after changes constitutes your acceptance of the new terms.

We recommend reviewing these terms periodically.`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-base font-extrabold font-heading uppercase text-navy mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-orange rounded-full inline-block"></span>
                {section.title}
              </h2>
              <p className="text-steel text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}

          {/* Contact Block */}
          <div className="rounded-2xl p-6 border border-orange/20" style={{ background: 'rgba(255,90,0,0.04)' }}>
            <h2 className="text-base font-extrabold font-heading uppercase text-navy mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange rounded-full inline-block"></span>
              11. Contact for Legal Queries
            </h2>
            <p className="text-steel text-sm mb-4">For any questions regarding these Terms &amp; Conditions, reach us at:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-steel">
                <MapPin size={14} className="text-orange shrink-0" />
                562, G.I.D.C. Metoda, Kishan Gate, Road No.3, Lodhika, Rajkot - 360021, Gujarat, India
              </div>
              <div className="flex items-center gap-3 text-sm text-steel">
                <Mail size={14} className="text-orange shrink-0" />
                <a href="mailto:info@radheindustries.com" className="hover:text-orange transition-colors">info@radheindustries.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-steel">
                <Phone size={14} className="text-orange shrink-0" />
                <a href="tel:+919274767732" className="hover:text-orange transition-colors">+91 92747 67732</a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-gray-100">
            <Link to="/" className="text-xs font-bold text-orange hover:underline">← Back to Home</Link>
            <Link to="/privacy" className="text-xs font-bold text-navy hover:underline">Privacy Policy →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
