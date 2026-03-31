import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Hammer, Package, Share2, Users, Scroll, Flame, Home } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Início', href: '/', icon: <Home className="w-4 h-4" /> },
  { label: 'Universo', href: '/universo', icon: <BookOpen className="w-4 h-4" /> },
  { label: 'Biblioteca', href: '/biblioteca', icon: <Scroll className="w-4 h-4" /> },
  { label: 'A Forja', href: '/forja', icon: <Hammer className="w-4 h-4" /> },
  { label: 'Armazém', href: '/armazem', icon: <Package className="w-4 h-4" /> },
  { label: 'Conexões', href: '/conexoes', icon: <Share2 className="w-4 h-4" /> },
  { label: 'Sobre', href: '/sobre', icon: <Users className="w-4 h-4" /> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className={`nav-tavern ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/cygni/Ssf.png" 
              alt="Símbolo Cygni" 
              className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(246,113,1,0.5)]" />
            <div className="flex flex-col">
              <span className="font-cinzel text-lg md:text-xl font-bold text-cream leading-tight group-hover:text-fiery transition-colors">
                Guilda de Cygni
              </span>
              <span className="text-[10px] md:text-xs text-cream-muted font-cinzel tracking-widest">
                CONHECIMENTO PERIGOSO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'text-fiery' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2 text-cream-muted hover:text-fiery transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-void border-l border-fiery/30 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-fiery/20">
                  <span className="font-cinzel text-fiery font-bold">Menu</span>
                  <button onClick={() => setIsOpen(false)} className="p-2 text-cream-muted hover:text-cream transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex-1 py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-6 py-4 transition-all ${
                        isActive(item.href) 
                          ? 'text-fiery bg-fiery/10' 
                          : 'text-cream-muted hover:text-fiery hover:bg-fiery/5'
                      }`}
                    >
                      <span className={isActive(item.href) ? 'text-fiery' : 'text-fiery/60'}>{item.icon}</span>
                      <span className="font-cinzel">{item.label}</span>
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t border-fiery/20">
                  <p className="text-xs text-cream-muted text-center font-cinzel">
                    "O conhecimento é uma chama"
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fiery/50 to-transparent" />
    </nav>
  );
}
