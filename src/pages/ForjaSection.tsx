import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { ProductCard } from '@/components/ui-custom/ProductCard';
import { products } from '@/data/products';
import { MessageCircle, Sparkles, Truck, Shield, Clock } from 'lucide-react';

const benefits = [
  { icon: Truck, title: 'Envio para Todo Brasil', description: 'Entrega segura e rastreável' },
  { icon: Shield, title: 'Garantia de Qualidade', description: 'Produtos feitos com precisão laser' },
  { icon: Clock, title: 'Encomendas Personalizadas', description: 'Orçamento em até 24h' },
];

export function ForjaSection() {
  return (
    <section id="forja" className="relative py-20 md:py-32 bg-void">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal/20 to-void" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fiery/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="A Forja" subtitle="Produtos em Corte a Laser" />
          <p className="mt-6 text-lg text-cream-muted max-w-3xl mx-auto">Artefatos físicos criados com a precisão da máquina TTS.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-center gap-4 p-4 rounded-lg bg-charcoal/50 border border-cream-muted/10">
              <div className="w-12 h-12 rounded-lg bg-fiery/10 flex items-center justify-center flex-shrink-0"><b.icon className="w-6 h-6 text-fiery" /></div>
              <div><h4 className="font-cinzel text-sm font-semibold text-cream">{b.title}</h4><p className="text-xs text-cream-muted">{b.description}</p></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => <ProductCard key={p.id} {...p} />)}
        </div>
        <div className="mt-16">
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-fiery/10 via-charcoal to-fiery/10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=400&fit=crop')] opacity-20 bg-cover bg-center" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fiery/10 border border-fiery/30 mb-6">
                <Sparkles className="w-4 h-4 text-fiery" />
                <span className="text-sm font-cinzel text-fiery tracking-wider">ENCOMENDAS</span>
              </div>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-cream mb-4">Tem uma ideia personalizada?</h3>
              <p className="text-cream-muted max-w-xl mx-auto mb-8">Aceitamos encomendas personalizadas! Desde caixas de dados até tabuleiros completos.</p>
              <a href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma encomenda personalizada." target="_blank" rel="noopener noreferrer" className="btn-fiery inline-flex items-center gap-2"><MessageCircle className="w-5 h-5" />Falar no WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="text-center mb-10"><h3 className="font-cinzel text-xl font-bold text-cream">Como Funciona</h3></div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[{ step: '01', title: 'Escolha', desc: 'Selecione ou envie sua ideia' }, { step: '02', title: 'Orçamento', desc: 'Valor em até 24h' }, { step: '03', title: 'Produção', desc: 'Corte a laser TTS' }, { step: '04', title: 'Entrega', desc: 'Envio para todo Brasil' }].map((i) => (
              <div key={i.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fiery/20 flex items-center justify-center border border-fiery/40"><span className="font-cinzel text-xl font-bold text-fiery">{i.step}</span></div>
                <h4 className="font-cinzel text-sm font-semibold text-cream mb-1">{i.title}</h4>
                <p className="text-xs text-cream-muted">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
