import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { BookOpen, Map, Users, Sword, Download, FileText, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const loreTopics = [
  { title: 'O Mundo de Cygni', description: 'Um continente vasto e misterioso, onde civilizações antigas coexistem com magia primordial.', icon: Map },
  { title: 'As Grandes Guildas', description: 'Organizações que moldam o destino: a Guilda dos Magos, a Ordem dos Paladinos.', icon: Users },
  { title: 'Magia e Arcanum', description: 'O sistema mágico de Cygni, suas escolas e os perigos da magia proibida.', icon: BookOpen },
  { title: 'Criaturas e Monstros', description: 'Do Dragão Ancião ao Goblin comum, conheça as criaturas do mundo.', icon: Sword },
];

const downloads = [
  { title: 'Guia do Jogador', description: 'PDF com regras básicas', size: '2.4 MB', type: 'PDF' },
  { title: 'Mapa de Cygni', description: 'Mapa em alta resolução', size: '8.7 MB', type: 'PNG' },
  { title: 'Ficha de Personagem', description: 'Ficha editável', size: '1.2 MB', type: 'PDF' },
];

export function UniversoSection() {
  return (
    <section id="universo" className="relative py-20 md:py-32 bg-void">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal/30 to-void" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fiery/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="Universo Cygni" subtitle="O Cenário de RPG" />
          <p className="mt-6 text-lg text-cream-muted max-w-3xl mx-auto">
            Bem-vindo a Cygni, um mundo de alta fantasia onde a magia flui pelas veias da terra.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {loreTopics.map((topic) => (
            <div key={topic.title} className="group p-6 rounded-lg bg-charcoal/50 border border-cream-muted/10 hover:border-fiery/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-fiery/10 flex items-center justify-center flex-shrink-0 group-hover:bg-fiery/20 transition-colors">
                  <topic.icon className="w-6 h-6 text-fiery" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xl font-semibold text-cream mb-2 group-hover:text-fiery transition-colors">{topic.title}</h3>
                  <p className="text-sm text-cream-muted leading-relaxed">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="divider-ornament" />
        <div className="mt-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-fiery" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Materiais de Jogo</h3>
              <Flame className="w-5 h-5 text-fiery" />
            </div>
            <p className="text-cream-muted">Downloads gratuitos para sua campanha</p>
          </div>
          <div className="scroll-card max-w-3xl mx-auto">
            <div className="space-y-4">
              {downloads.map((download) => (
                <div key={download.title} className="flex items-center gap-4 p-4 rounded-lg bg-parchment-aged/50 border border-charcoal/20 hover:border-fiery/30 transition-colors group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-fiery/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-fiery" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-cinzel text-sm font-semibold text-charcoal group-hover:text-fiery transition-colors truncate">{download.title}</h4>
                    <p className="text-xs text-charcoal/60 truncate">{download.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge variant="outline" className="text-xs border-charcoal/30 text-charcoal/70">{download.type}</Badge>
                    <span className="text-xs text-charcoal/50">{download.size}</span>
                    <Download className="w-4 h-4 text-charcoal/40 group-hover:text-fiery transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-cream-muted mb-4">Quer aprofundar-se no universo?</p>
          <a href="#biblioteca" className="btn-cream inline-flex items-center gap-2"><BookOpen className="w-4 h-4" />Conheça o Livro Oficial</a>
        </div>
      </div>
    </section>
  );
}
