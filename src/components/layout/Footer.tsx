import { Link } from 'react-router-dom';
import { Flame, Scroll, Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Universo Cygni', href: '/universo' },
    { label: 'A Biblioteca', href: '/biblioteca' },
    { label: 'A Forja', href: '/forja' },
    { label: 'O Armazém', href: '/armazem' },
    { label: 'Conexões', href: '/conexoes' },
  ];

  return (
    <footer className="relative bg-void border-t border-fiery/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fiery to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <img src="/Simbolo Guida de Cygni Sem fundo.png" alt="Símbolo Cygni" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-cream group-hover:text-fiery transition-colors">
                  Guilda de Cygni
                </h3>
                <p className="text-xs text-cream-muted font-cinzel tracking-wider">CONHECIMENTO PERIGOSO</p>
              </div>
            </Link>
            <p className="text-sm text-cream-muted leading-relaxed max-w-sm">
              Um portal dedicado ao universo de fantasia de Cygni, onde aventuras épicas, 
              conhecimento arcano e arte se encontram.
            </p>
            <div className="flex items-center gap-2 text-xs text-cream-muted">
              <Scroll className="w-3 h-3" />
              <span>"A chama do conhecimento nunca se apaga"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold text-fiery tracking-wider">CAMINHOS DO PORTAL</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-muted hover:text-fiery transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-fiery/50 rounded-full group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold text-fiery tracking-wider">CONEXÕES</h4>
            <div className="space-y-3">
              {['Twitch', 'YouTube', 'Instagram'].map((social) => (
                <a 
                  key={social} 
                  href={`https://${social.toLowerCase()}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm text-cream-muted hover:text-fiery transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-ornament my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-muted">
          <p className="flex items-center gap-1">
            © {currentYear} Guilda de Cygni. Feito com <Heart className="w-3 h-3 text-fiery fill-fiery" /> e chama.
          </p>
          <p className="font-cinzel">"Que seu conhecimento seja lendário"</p>
        </div>
      </div>
    </footer>
  );
}
