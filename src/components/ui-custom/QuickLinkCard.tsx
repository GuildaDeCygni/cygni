import { ArrowRight, type LucideIcon } from 'lucide-react';

interface QuickLinkCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  onClick?: () => void;
}

export function QuickLinkCard({ title, description, icon: Icon, href, onClick }: QuickLinkCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className="group relative p-6 rounded-lg transition-all duration-300 cursor-pointer bg-charcoal/50 border border-cream-muted/20 hover:border-fiery/60 hover:-translate-y-1 hover:shadow-fiery">
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-fiery/5" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-fiery/10 flex items-center justify-center mb-4 group-hover:bg-fiery/20 transition-colors">
          <Icon className="w-6 h-6 text-fiery" />
        </div>
        <h3 className="font-cinzel text-lg font-semibold text-cream mb-2 group-hover:text-fiery transition-colors">{title}</h3>
        <p className="text-sm text-cream-muted mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 text-sm font-medium text-cream-muted group-hover:text-fiery transition-colors">
          <span>Explorar</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}
