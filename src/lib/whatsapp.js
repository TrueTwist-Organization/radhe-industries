export function getWhatsAppUrl(phone, message = '') {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedText = message ? encodeURIComponent(message) : '';
  
  // Detect if it's a mobile device (phone or tablet)
  const isMobile = typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const base = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
  return `${base}?phone=${cleanPhone}${encodedText ? `&text=${encodedText}` : ''}`;
}

export function openWhatsApp(phone, message = '') {
  const url = getWhatsAppUrl(phone, message);
  window.open(url, '_blank');
}

export function formatInquiryMessage({
  title = 'NEW PUMP INQUIRY',
  name,
  phone,
  whatsapp,
  city,
  category,
  hp,
  application,
  source,
  depth,
  message,
  isDealer
}) {
  const mapCategory = (val) => {
    if (val === 'submersible') return 'Submersible Pump (3–15 HP)';
    if (val === 'monoset') return 'Monoset Pump (0.5–5 HP)';
    if (val === 'not-sure') return 'Not Sure - Need Assistance';
    return val || 'Not Specified';
  };

  const mapHP = (val) => {
    if (val === 'not-sure') return 'Not Sure (Ask Expert)';
    if (val === '0.5-1') return '0.5 HP – 1 HP';
    if (val === '1.5-3') return '1.5 HP – 3 HP';
    if (val === '3-5' || val === '4-5') return '3 HP – 5 HP';
    if (val === '6-10') return '6 HP – 10 HP';
    if (val === '11-15') return '11 HP – 15 HP';
    return val || 'Not Specified';
  };

  const mapApplication = (val) => {
    if (val === 'agri' || val === 'agriculture') return 'Agriculture Irrigation';
    if (val === 'domestic') return 'Domestic Water Supply';
    if (val === 'borewell') return 'Borewell Lifting';
    if (val === 'construction') return 'Construction Site';
    if (val === 'industrial' || val === 'transfer') return 'Industrial / General Transfer';
    return val || 'Not Specified';
  };

  const mapSource = (val) => {
    if (val === 'borewell') return 'Deep Borewell';
    if (val === 'well' || val === 'openwell') return 'Open Well / Sump';
    if (val === 'tank' || val === 'overhead') return 'Overhead / Ground Tank';
    if (val === 'pipeline') return 'Public Pipeline';
    return val || 'Not Specified';
  };

  const capitalize = (str) => {
    if (!str) return '';
    return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  };

  const parts = [
    `CUSTOMER DETAILS`,
    `────────────────`,
    `• Name: ${capitalize(name)}`,
    `• Phone: ${phone}`,
    whatsapp ? `• WhatsApp: ${whatsapp}` : '',
    `• City: ${capitalize(city)}`,
    isDealer ? `• Dealer Inquiry: Yes` : '',
    ``,
    `PUMP SPECIFICATIONS`,
    `────────────────`,
    `• Category: ${mapCategory(category)}`,
    `• HP Range: ${mapHP(hp)}`,
    `• Application: ${mapApplication(application)}`,
    `• Water Source: ${mapSource(source)}`,
    depth ? `• Bore Depth: ${depth}` : ''
  ];

  if (message) {
    parts.push(
      ``,
      `ADDITIONAL MESSAGE`,
      `────────────────`,
      message
    );
  }

  return parts.filter(line => line !== '').join('\n');
}
