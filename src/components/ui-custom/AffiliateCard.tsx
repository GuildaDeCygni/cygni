import { ExternalLink, Star } from 'lucide-react';

interface AffiliateCardProps {
  name: string;
  description: string;
  platform: 'amazon' | 'magalu' | 'mercadolivre' | 'shopee' | 'other';
  url: string;
  rating?: number;
  category: string;
}

const platformColors = {
  amazon: { bg: 'bg-[#FF9900]/10', border: 'border-[#FF9900]/30 hover:border-[#FF9900]/60', text: 'text-[#FF9900]', label: 'Amazon' },
  magalu: { bg: 'bg-[#0086FF]/10', border: 'border-[#0086FF]/30 hover:border-[#0086FF]/60', text: 'text-[#0086FF]', label: 'Magalu' },
  mercadolivre: { bg: 'bg-[#FFF159]', border: 'border-[#FFF159]/50 hover:border-[#FFF159]', text: 'text-[#2D3277]', label: 'Mercado Livre' },
  shopee: { bg: 'bg-[#EE4D2D]/10', border: 'border-[#EE4D2D]/30 hover:border-[#EE4D2D]/60', text: 'text-[#EE4D2D]', label: 'Shopee' },
  other: { bg: 'bg-fiery/10', border: 'border-fiery/30 hover:border-fiery/60', text: 'text-fiery', label: 'Parceiro' },
};

export function AffiliateCard({ name, description, platform, url, rating, category }: AffiliateCardProps) {
  const colors = platformColors[platform];
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`affiliate-card group ${colors.border}`}>
      <div className="flex items-center justify-end mb-3">
        <span className={`text-xs font-medium px-2 py-1 rounded ${colors.bg} ${colors.text}`}>{colors.label}</span>
      </div>
      <h3 className="font-cinzel text-base font-semibold text-charcoal group-hover:text-fiery transition-colors mb-2">{name}</h3>
      <p className="text-sm text-charcoal/70 mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        {rating && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < rating ? 'text-fiery fill-fiery' : 'text-charcoal/20'}`} />
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-charcoal/50 group-hover:text-fiery transition-colors ml-auto">
          <span>Ver oferta</span>
          <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </a>
  );
}
