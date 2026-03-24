import { useState } from 'react';
import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { AffiliateCard } from '@/components/ui-custom/AffiliateCard';
import { affiliateLinks, affiliateCategories } from '@/data/affiliates';
import { Package, Info } from 'lucide-react';

export function ArmazemSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filteredLinks = activeCategory === 'Todos' ? affiliateLinks : affiliateLinks.filter(l => l.category === activeCategory);

  return (
    <section id="armazem" className="relative py-20 md:py-32 bg-void">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal/30 to-void" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-fiery/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="O Armazém" subtitle="Links de Afiliados" />
          <p className="mt-6 text-lg text-cream-muted max-w-3xl mx-auto">Produtos recomendados para jogadores e mestres de RPG.</p>
        </div>
        <div className="scroll-card mb-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-fiery/10 flex items-center justify-center flex-shrink-0"><Info className="w-5 h-5 text-fiery" /></div>
            <div>
              <h4 className="font-cinzel text-sm font-semibold text-charcoal mb-1">Links de Afiliados</h4>
              <p className="text-sm text-charcoal/70 scroll-card-text">Ao comprar através desses links, você não paga a mais, mas ajuda a financiar a Guilda.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {affiliateCategories.map((c) => (
            <button key={c} onClick={() => setActiveCategory(c)} className={`px-4 py-2 rounded-full text-sm font-cinzel transition-all duration-300 ${activeCategory === c ? 'bg-fiery text-cream font-semibold' : 'bg-charcoal/50 text-cream-muted border border-cream-muted/20 hover:border-fiery/50 hover:text-cream'}`}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredLinks.map((l) => <AffiliateCard key={l.id} {...l} />)}
        </div>
        {filteredLinks.length === 0 && (
          <div className="text-center py-16"><Package className="w-16 h-16 mx-auto text-cream-muted/20 mb-4" /><p className="text-cream-muted font-cinzel">Nenhum produto encontrado</p></div>
        )}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[{ value: '50+', label: 'Produtos' }, { value: '5', label: 'Parceiros' }, { value: '100%', label: 'Seguro' }, { value: '0', label: 'Custo Extra' }].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-lg bg-charcoal/30 border border-cream-muted/10">
              <p className="font-cinzel text-2xl md:text-3xl font-bold text-fiery mb-1">{s.value}</p>
              <p className="text-xs text-cream-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
