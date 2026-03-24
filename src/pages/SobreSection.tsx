import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { Users, Target, Heart, Flame, Sword, Scroll } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Paixão', description: 'Fazemos o que amamos. Cada projeto é uma extensão da nossa paixão por fantasia.' },
  { icon: Users, title: 'Comunidade', description: 'Acreditamos no poder das histórias compartilhadas entre jogadores.' },
  { icon: Target, title: 'Qualidade', description: 'Buscamos excelência em cada detalhe, do conteúdo aos produtos físicos.' },
];

const team = [
  { name: 'Mestre Cygni', role: 'Fundador & Mestre de RPG', description: 'Criador do universo de Cygni e mestre há mais de uma década.' },
  { name: 'Elara', role: 'Escritora & Lorekeeper', description: 'Responsável por dar vida às histórias do mundo.' },
  { name: 'Thorin', role: 'Artesão & Designer', description: 'Mestre do corte a laser, transforma ideias em artefatos.' },
];

export function SobreSection() {
  return (
    <section id="sobre" className="relative py-20 md:py-32 bg-void">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal/30 to-void" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fiery/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><SectionTitle title="Sobre a Guilda" subtitle="Nossa História" /></div>
        <div className="max-w-3xl mx-auto mb-20">
          <div className="scroll-card">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Sword className="w-8 h-8 text-fiery" /><Scroll className="w-8 h-8 text-fiery/70" /><Flame className="w-8 h-8 text-fiery" />
            </div>
            <div className="space-y-6 scroll-card-text text-lg">
              <p>A <span className="font-cinzel text-fiery font-semibold">Guilda de Cygni</span> nasceu de uma simples mesa de RPG entre amigos, quando alguém disse: <em className="text-charcoal/80">"E se criássemos nosso próprio mundo?"</em></p>
              <p>O que começou como um cenário caseiro cresceu e evoluiu. Cygni tornou-se um mundo vivo, com histórias que se entrelaçam.</p>
              <p>Hoje, a Guilda é mais do que um grupo de jogadores. Somos criadores de conteúdo, artesãos e uma comunidade apaixonada.</p>
              <p className="text-center font-cinzel text-fiery font-semibold">Nossa missão é simples: criar, compartilhar e inspirar.</p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="text-center mb-10"><h3 className="font-cinzel text-xl font-bold text-cream">Nossos Valores</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-lg bg-charcoal/50 border border-cream-muted/10 hover:border-fiery/30 transition-colors">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-fiery/10 flex items-center justify-center"><v.icon className="w-7 h-7 text-fiery" /></div>
                <h4 className="font-cinzel text-lg font-semibold text-cream mb-2">{v.title}</h4>
                <p className="text-sm text-cream-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-center mb-10"><h3 className="font-cinzel text-xl font-bold text-cream">A Equipe</h3></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="text-center p-6 rounded-lg bg-charcoal/50 border border-cream-muted/10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-fiery to-fiery-dark flex items-center justify-center">
                  <span className="font-cinzel-decorative text-2xl font-bold text-cream">{m.name[0]}</span>
                </div>
                <h4 className="font-cinzel text-lg font-semibold text-cream mb-1">{m.name}</h4>
                <p className="text-sm text-fiery mb-3">{m.role}</p>
                <p className="text-sm text-cream-muted">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <blockquote className="relative inline-block max-w-2xl">
            <span className="absolute -top-6 -left-8 text-6xl text-fiery/20 font-serif">"</span>
            <p className="text-xl text-cream-muted font-cinzel italic">Toda grande aventura começa com um primeiro passo. Obrigado por fazer parte da nossa.</p>
            <span className="absolute -bottom-8 -right-8 text-6xl text-fiery/20 font-serif">"</span>
          </blockquote>
          <p className="mt-8 text-sm text-fiery font-cinzel">— A Guilda de Cygni</p>
        </div>
      </div>
    </section>
  );
}
