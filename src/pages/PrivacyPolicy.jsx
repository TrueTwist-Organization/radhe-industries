import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, MapPin, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield size={26} className="text-orange" />
          </div>
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-orange border border-orange/30 bg-orange/10 px-4 py-1.5 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase leading-tight mb-3 drop-shadow-lg">
            Privacy <span className="text-orange">Policy</span>
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Last updated: June 2025 &nbsp;|&nbsp; Radhe Industries, Ahmedabad, Gujarat
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-12 space-y-10" style={{ background: '#ffffff' }}>

          {[
            {
              title: '1. Information We Collect',
              content: `When you fill out the inquiry form, contact us via WhatsApp or email, or browse our website, we may collect the following information:
              
• Full Name and Contact Number
• WhatsApp Number (if provided)
• City and State of residence
• Pump category requirements and project details
• Device and browser information (via analytics)

We do not collect sensitive personal data such as financial information, government ID numbers, or passwords.`,
            },
            {
              title: '2. How We Use Your Information',
              content: `The information you provide is used solely for the following purposes:

• To respond to your product inquiry with accurate pump recommendations
• To provide pricing, availability, and delivery information
• To contact you regarding your submitted request
• To improve our website and services based on usage patterns
• To send occasional updates about new products (only if you opt-in)

We will never use your data for unsolicited marketing or sell it to third parties.`,
            },
            {
              title: '3. Data Sharing & Disclosure',
              content: `Radhe Industries does not sell, trade, or rent your personal information to third parties. We may share limited information only in the following situations:

• With authorized dealers or distributors to fulfil your local service request
• With technology service providers (e.g., hosting, analytics) under strict confidentiality agreements
• When required by law or legal proceedings

All third parties we work with are obligated to keep your information confidential.`,
            },
            {
              title: '4. Cookies & Analytics',
              content: `Our website may use cookies and Google Analytics to understand how visitors interact with our pages. This helps us improve navigation and content.

• Cookies are small text files stored on your browser
• You can disable cookies in your browser settings
• Analytics data is aggregated and does not identify individual users

By using our website, you consent to our use of cookies as described above.`,
            },
            {
              title: '5. Data Security',
              content: `We take reasonable precautions to protect your personal information. Our website uses HTTPS encryption and access to collected data is restricted to authorised personnel only.

However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.`,
            },
            {
              title: '6. Your Rights',
              content: `You have the right to:

• Request a copy of the personal data we hold about you
• Request correction of inaccurate information
• Request deletion of your data at any time
• Opt out of any communications from us

To exercise any of these rights, please contact us at the details below.`,
            },
            {
              title: '7. Third-Party Links',
              content: `Our website may contain links to external websites (e.g., Google Maps, WhatsApp). We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policy of any external site you visit.`,
            },
            {
              title: '8. Changes to This Policy',
              content: `Radhe Industries reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.`,
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
              9. Contact Us About Privacy
            </h2>
            <p className="text-steel text-sm mb-4">If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-steel">
                <MapPin size={14} className="text-orange shrink-0" />
                Ahmedabad, Gujarat, India
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
            <Link to="/terms" className="text-xs font-bold text-navy hover:underline">Terms &amp; Conditions →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
