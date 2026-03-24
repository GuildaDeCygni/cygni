import { useEffect, useRef } from 'react';
import { ChevronDown, BookOpen, Hammer, Package, Scroll, Flame, Sparkles } from 'lucide-react';
import { QuickLinkCard } from '@/components/ui-custom/QuickLinkCard';

const quickLinks = [
  { title: 'Universo Cygni', description: 'Explore o cenário de RPG, histórias e aventuras épicas.', icon: BookOpen, href: '#universo' },
  { title: 'A Biblioteca', description: 'Descubra o livro "Guia de como não ser um idiota em Cygni".', icon: Scroll, href: '#biblioteca' },
  { title: 'A Forja', description: 'Produtos físicos feitos com corte a laser.', icon: Hammer, href: '#forja' },
  { title: 'O Armazém', description: 'Links de afiliados com produtos recomendados.', icon: Package, href: '#armazem' },
];

export function HomeSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 15;
      const y = (clientY / innerHeight - 0.5) * 15;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    document.getElementById('home-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen">
      <div ref={heroRef} className="hero-mood min-h-screen flex flex-col items-center justify-center px-4" style={{ transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))', transition: 'transform 0.3s ease-out' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1920&h=1080&fit=crop" alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fiery/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-fiery/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="logo-container">
              <div className="logo-ring-outer" />
              <div className="logo-ring-inner animate-pulse-glow" />
              <Flame className="logo-icon w-20 h-20" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fiery/10 border border-fiery/30 mb-6">
            <Sparkles className="w-4 h-4 text-fiery" />
            <span className="text-sm font-cinzel text-fiery tracking-wider">BEM-VINDO À GUILDA</span>
            <Sparkles className="w-4 h-4 text-fiery" />
          </div>
          <h1 className="font-cinzel-decorative text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-cream">
            Guilda de<br /><span className="text-fiery">Cygni</span>
          </h1>
          <p className="text-lg md:text-xl text-cream-muted max-w-2xl mx-auto mb-2 font-light">
            Conhecimento Perigoso em um Mundo de Alta Fantasia
          </p>
          <p className="text-sm text-fiery font-cinzel tracking-wider mb-10">RPG • LITERATURA • ARTE • COMUNIDADE</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#universo" className="btn-fiery">Explorar o Universo</a>
            <a href="#conexoes" className="btn-cream">Juntar-se à Guilda</a>
          </div>
        </div>
        <button onClick={scrollToContent} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-muted hover:text-fiery transition-colors cursor-pointer">
          <span className="text-xs font-cinzel tracking-wider">Descer</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
      <div id="home-content" className="relative py-20 md:py-32 bg-void">
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
              <p className="text-lg md:text-xl text-cream-muted font-cinzel italic max-w-2xl">Em Cygni, cada escolha molda o destino. Cada passo pode ser o início de uma lenda.</p>
              <span className="absolute -bottom-8 -right-6 text-6xl text-fiery/20 font-serif">"</span>
            </blockquote>
            <p className="mt-6 text-sm text-fiery font-cinzel">— Antigo Provérbio de Cygni</p>
          </div>
        </div>
      </div>
    </section>
  );
}
