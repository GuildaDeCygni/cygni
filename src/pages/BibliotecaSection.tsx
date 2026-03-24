import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { BookOpen, Star, Quote, Check, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const bookFeatures = [
  'Guia completo de etiqueta em mundos de fantasia',
  'Dicas de interpretação para jogadores',
  'Como não irritar seu Mestre de RPG',
  'Histórias hilárias de mesa de jogo',
  'Ilustrações exclusivas do universo Cygni',
];

const testimonials = [
  { quote: 'O livro que todo jogador de RPG deveria ler antes de sentar à mesa.', author: 'Mestre Dragão', role: 'Mestre de RPG há 15 anos' },
  { quote: 'Divertido, útil e com aquela pitada de humor que só quem joga RPG vai entender.', author: 'Elara Moonwhisper', role: 'Jogadora e Streamer' },
];

export function BibliotecaSection() {
  return (
    <section id="biblioteca" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal/50 to-void" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fiery/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-fiery/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="A Biblioteca" subtitle="O Livro da Guilda" />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-fiery/20 blur-3xl rounded-full scale-110" />
              <div className="relative w-72 md:w-80 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-2 border-fiery/30">
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=900&fit=crop" alt="Livro" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-2 bg-fiery text-cream font-cinzel border-0">NOVO LANÇAMENTO</Badge>
                  <h3 className="font-cinzel-decorative text-xl text-cream leading-tight">Guia de como não ser um idiota em Cygni</h3>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-fiery rounded-full flex flex-col items-center justify-center shadow-fiery animate-pulse-glow">
                <Star className="w-5 h-5 text-cream fill-cream" />
                <span className="text-xs font-cinzel font-bold text-cream">BEST</span>
                <span className="text-[10px] font-cinzel text-cream">SELLER</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-cinzel-decorative text-3xl md:text-4xl font-bold text-cream mb-4">Guia de como não ser um idiota em Cygni</h3>
              <p className="text-lg text-cream-muted leading-relaxed">O manual definitivo para jogadores de RPG que querem sobreviver às mesas de jogo.</p>
            </div>
            <div className="space-y-3">
              {bookFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-fiery/20 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-fiery" /></div>
                  <span className="text-sm text-cream-muted">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://catarse.me" target="_blank" rel="noopener noreferrer" className="btn-fiery flex items-center justify-center gap-2"><Flame className="w-4 h-4" />Apoiar no Catarse</a>
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="btn-cream flex items-center justify-center gap-2"><BookOpen className="w-4 h-4" />Versão Digital</a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div><span className="text-3xl font-cinzel font-bold text-fiery">R$ 49,90</span><span className="text-sm text-cream-muted ml-2">Físico</span></div>
              <div className="h-8 w-px bg-cream-muted/20" />
              <div><span className="text-xl font-cinzel font-bold text-cream">R$ 19,90</span><span className="text-sm text-cream-muted ml-2">Digital</span></div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="text-center mb-10"><h3 className="font-cinzel text-xl font-bold text-cream">O que dizem os aventureiros</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="scroll-card">
                <Quote className="w-8 h-8 text-fiery/40 mb-4" />
                <p className="scroll-card-text italic mb-4 text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-fiery/20 flex items-center justify-center"><span className="font-cinzel text-fiery font-bold">{t.author[0]}</span></div>
                  <div><p className="font-cinzel text-sm font-semibold text-charcoal">{t.author}</p><p className="text-xs text-charcoal/60">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
