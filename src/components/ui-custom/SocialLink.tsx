import type { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  name: string;
  handle: string;
  url: string;
  icon: LucideIcon;
  color: string;
  followers?: string;
}

export function SocialLink({ name, handle, url, icon: Icon, color, followers }: SocialLinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-link-card group">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${color}20`, color }}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-cinzel text-base font-semibold text-cream group-hover:text-fiery transition-colors">{name}</h3>
        <p className="text-sm text-cream-muted">{handle}</p>
      </div>
      {followers && (
        <div className="text-right">
          <p className="text-sm font-medium text-cream">{followers}</p>
          <p className="text-xs text-cream-muted">seguidores</p>
        </div>
      )}
    </a>
  );
}
