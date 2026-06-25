import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-aqua/30">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-pump-blue to-aqua group-hover:from-aqua group-hover:to-pump-blue transition-all duration-500" />

      {/* Image area */}
      <div className="relative bg-gradient-to-br from-navy to-[#0a2238] h-52 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(18,214,197,0.15),transparent_70%)] group-hover:opacity-100 opacity-60 transition-opacity" />
        {category.image ? (
          <img
            src={category.image}
            alt={`${category.hpRange} ${category.title}`}
            className="max-h-40 object-contain drop-shadow-2xl animate-float group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        {/* Fallback SVG pump icon */}
        <div className="flex flex-col items-center gap-2 text-aqua/60" style={{ display: 'none' }}>
          <svg viewBox="0 0 60 120" width="60" height="120">
            <rect x="20" y="5" width="20" height="110" rx="4" fill="#4e657a"/>
            <rect x="18" y="30" width="24" height="5" fill="#C9974A"/>
            <rect x="18" y="80" width="24" height="5" fill="#C9974A"/>
          </svg>
        </div>
        {/* HP Badge */}
        <div className="absolute top-3 right-3 bg-pump-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full border border-aqua/20">
          {category.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading text-graphite mb-1">{category.title}</h3>
        <p className="text-aqua text-xs font-semibold uppercase tracking-wider mb-3">{category.tagline}</p>
        <p className="text-steel text-sm leading-relaxed mb-4">{category.description}</p>

        {/* Best For Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {category.bestFor.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-mist text-graphite/70 font-medium border border-gray-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            to={`/products/${category.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-pump-blue hover:bg-pump-blue/90 text-white font-semibold text-sm py-3 rounded-xl transition-all hover:-translate-y-0.5"
          >
            View Details <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-1.5 border-2 border-pump-blue text-pump-blue hover:bg-pump-blue hover:text-white font-semibold text-sm py-3 rounded-xl transition-all"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
