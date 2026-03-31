import { Link } from 'react-router-dom';
import { BookOpen, Hammer, Package, Scroll, Sparkles } from 'lucide-react';
import { QuickLinkCard } from '@/components/ui-custom/QuickLinkCard';

const quickLinks = [
  { title: 'Universo Cygni', description: 'Explore o cenário de RPG, histórias e aventuras épicas.', icon: BookOpen, href: '/universo' },
  { title: 'A Biblioteca', description: 'Descubra o livro "Guia de como não ser um idiota em Cygni".', icon: Scroll, href: 'biblioteca' },
  { title: 'A Forja', description: 'Produtos físicos feitos com corte a laser.', icon: Hammer, href: '/forja' },
  { title: 'O Armazém', description: 'Links de afiliados com produtos recomendados.', icon: Package, href: '/armazem' },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-mood min-h-[80vh] flex flex-col items-center justify-center px-4 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1920&h=1080&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fiery/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-fiery/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Logo */}
        <div className="mb-0 flex justify-center">
          {/* Usando colchetes para forçar um tamanho bem grande */}
          <div className="relative w-[300px] h-[300px] md:w-[700px] md:h-[700px] flex items-center justify-center">
            
            {/* O círculo de luz laranja que fica pulsando atrás do logo */}
            <div className="absolute inset-16 bg-[#F67101]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            
            {/* O seu símbolo puro */}
            <img 
                src="/cygni/Sem_fundo.png"
                alt="Guilda de Cygni" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_12px_rgba(246,113,1,0.4)]"/>
          </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fiery/10 border border-fiery/30 mb-6">
            <Sparkles className="w-4 h-4 text-fiery" />
            <span className="text-sm font-cinzel text-fiery tracking-wider">BEM-VINDO À GUILDA</span>
            <Sparkles className="w-4 h-4 text-fiery" />
          </div>

          <p className="text-lg md:text-xl text-cream-muted max-w-2xl mx-auto mb-2 font-light">
            Conhecimento Perigoso em um Mundo de Alta Fantasia
          </p>
          <p className="text-sm text-fiery font-cinzel tracking-wider mb-10">
            RPG • LITERATURA • ARTE • COMUNIDADE
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cygni/universo" className="btn-fiery">Explorar o Universo</Link>
            <Link to="/cygni/conexoes" className="btn-cream">Juntar-se à Guilda</Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="relative py-20 md:py-32 bg-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-fiery/60" />
              <span className="text-xs font-cinzel tracking-[0.3em] text-fiery uppercase">Escolha Seu Caminho</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-fiery/60" />
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-cream">Os Caminhos da Guilda</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => <QuickLinkCard key={link.title} {...link} />)}
          </div>

          <div className="mt-20 text-center">
            <blockquote className="relative inline-block">
              <span className="absolute -top-4 -left-6 text-6xl text-fiery/20 font-serif">"</span>
              <p className="text-lg md:text-xl text-cream-muted font-cinzel italic max-w-2xl">
                Em Cygni, cada escolha molda o destino. Cada passo pode ser o início de uma lenda.
              </p>
              <span className="absolute -bottom-8 -right-6 text-6xl text-fiery/20 font-serif">"</span>
            </blockquote>
            <p className="mt-6 text-sm text-fiery font-cinzel">— Antigo Provérbio de Cygni</p>
          </div>
        </div>
      </section>
    </div>
  );
}
