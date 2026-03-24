import { Sparkles } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const alignClass = { left: 'text-left', center: 'text-center', right: 'text-right' }[align];

  return (
    <div className={`space-y-4 ${alignClass}`}>
      {subtitle && (
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''}`}>
          <Sparkles className="w-4 h-4 text-fiery" />
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-fiery/60" />
          <span className="text-xs font-cinzel tracking-[0.3em] text-fiery uppercase">{subtitle}</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-fiery/60" />
          <Sparkles className="w-4 h-4 text-fiery" />
        </div>
      )}
      <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-cream">{title}</h2>
    </div>
  );
}
