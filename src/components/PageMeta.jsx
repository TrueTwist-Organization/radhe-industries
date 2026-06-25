import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../constants/site';

const ROUTE_META = {
  '/': {
    title: 'Premium Submersible & Monoset Pumps',
    description:
      'Explore reliable submersible pumps from 3 HP to 15 HP and monoset pumps from 0.5 HP to 5 HP for agriculture, domestic and industrial water use.',
  },
  '/about': {
    title: 'About Us',
    description: 'Learn about Radhe Industries — pump manufacturer based in Ahmedabad, Gujarat.',
  },
  '/products': {
    title: 'Products',
    description: 'Browse submersible and monoset pump ranges for agriculture, borewell, and domestic use.',
  },
  '/products/submersible-pump': {
    title: 'Submersible Pump (3–15 HP)',
    description: 'Multi-stage submersible pumps for deep borewells, farm irrigation, and high-head water lifting.',
  },
  '/products/monoset-pump': {
    title: 'Monoset Pump (0.5–5 HP)',
    description: 'Self-priming monoset pumps for domestic supply, open wells, and light irrigation.',
  },
  '/quality': {
    title: 'Why Choose Us',
    description: 'Quality manufacturing, durable components, and expert pump selection support.',
  },
  '/brochure': {
    title: 'Brochure & Catalog',
    description: 'Request pump catalogs, dimension sheets, and performance datasheets.',
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Get pump recommendations, pricing, and dealer support from Radhe Industries.',
  },
  '/applications': {
    title: 'Pump Applications',
    description: 'Find the right pump for agriculture, borewell, domestic, and industrial water use.',
  },
  '/mission': {
    title: 'Our Mission',
    description: 'Radhe Industries mission to deliver reliable water pumping solutions across India.',
  },
  '/vision': {
    title: 'Our Vision',
    description: 'Building a sustainable future through efficient water pumping technology.',
  },
  '/privacy': {
    title: 'Privacy Policy',
    description: 'Privacy policy for radheindustry.com visitors and inquiry submissions.',
  },
  '/terms': {
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using radheindustry.com and submitting inquiries.',
  },
};

function setMetaTag(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] || ROUTE_META['/'];
    document.title = `${meta.title} | ${SITE.name}`;
    setMetaTag('description', meta.description);
  }, [pathname]);

  return null;
}
