import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  mercadoLivreUrl?: string;
  shopeeUrl?: string;
}

export function ProductCard({ name, description, price, image, category, mercadoLivreUrl, shopeeUrl }: ProductCardProps) {
  return (
    <div className="forge-card group">
      <div className="relative aspect-square overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
        <Badge className="absolute top-3 left-3 bg-charcoal/80 text-cream border-fiery/50">{category}</Badge>
        <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-fiery text-cream font-cinzel font-bold rounded-md">{price}</div>
      </div>
      <div className="relative z-10 p-5 space-y-3">
        <h3 className="font-cinzel text-lg font-semibold text-cream group-hover:text-fiery transition-colors">{name}</h3>
        <p className="text-sm text-cream-muted line-clamp-2">{description}</p>
        <div className="flex gap-2 pt-2">
          {mercadoLivreUrl && (
            <a href={mercadoLivreUrl} target="_blank" rel="noopener noreferrer" className="flex-1 btn-fiery text-xs py-2 text-center">
              <ShoppingCart className="w-3 h-3 inline mr-1" />Mercado Livre
            </a>
          )}
          {shopeeUrl && (
            <a href={shopeeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 btn-fiery text-xs py-2 text-center">
              <ShoppingCart className="w-3 h-3 inline mr-1" />Shopee
            </a>
          )}
        </div>
        <a href={`https://wa.me/5511999999999?text=Olá! Gostaria de encomendar: ${name}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2 text-xs text-cream-muted hover:text-fiery transition-colors border border-dashed border-cream-muted/20 rounded-md hover:border-fiery/50">
          <MessageCircle className="w-3 h-3" />Encomenda personalizada
        </a>
      </div>
    </div>
  );
}
