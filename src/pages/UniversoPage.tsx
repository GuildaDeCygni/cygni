import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { BookOpen, Map, Users, Sword, Download, FileText, Flame, Quote } from 'lucide-react';
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

export function UniversoPage() {
  return (
    <div className="min-h-screen pt-8 pb-20 md:pt-12 md:pb-32 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal/30 to-void" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fiery/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionTitle title="Universo Cygni" subtitle="O Cenário de RPG" />
        </div>

        {/* Bloco de Citação do Sullivan */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          <div className="absolute -top-6 -left-6 text-fiery/10">
            <Quote className="w-24 h-24" />
          </div>
          
          <div className="relative z-10 p-8 md:p-10 rounded-xl bg-charcoal/40 border border-fiery/20 shadow-[0_0_30px_rgba(246,113,1,0.05)]">
            <h3 className="font-cinzel text-xl font-bold text-fiery mb-6 text-center border-b border-fiery/20 pb-4">
              Introdução - Bem-vindo a Cygni
            </h3>
            
            <div className="space-y-4 text-cream-muted/90 text-lg leading-relaxed font-serif">
              <p>
                Se você está lendo isso, parabéns! Você provavelmente sobreviveu ao nascimento, aprendeu a andar sem cair em um poço e, por algum motivo cósmico, decidiu se aventurar por Cygni — o pedaço mais caótico, contraditório e fascinante do planeta.
              </p>
              
              <p>
                Cygni, também chamado de “O Mundo Conhecido” (porque “O Mundo Parcialmente Cartografado e Frequentemente Hostil” não pegou), é formado por três continentes:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 text-cream">
                <li><strong className="text-fiery">Caerbanog:</strong> onde fanáticos religiosos e impérios paranoicos disputam quem tem a verdade mais absoluta;</li>
                <li><strong className="text-fiery">Veryum:</strong> lar de filósofos, acadêmicos e gente que leva muito a sério o ato de sussurrar em bibliotecas;</li>
                <li><strong className="text-fiery">Citra:</strong> o arquipélago onde a democracia e a pirataria andam de mãos dadas, e às vezes trocam tapas.</li>
              </ul>

              <p className="pt-2">
                O que é Cygni? Esse mundo não começou assim. Antes de tudo ser dividido, conquistado, quebrado e reconstruído com pedaços mágicos e má vontade, essa terra era habitada por tribos diversas — anões, goblins, Bachs, orcs, tritões, gente do deserto e outros que não cabem numa lista de introdução. Cada um vivia à sua maneira até que, como sempre, chegaram os humanos. E com os humanos veio a diplomacia, os acordos... e as guerras, muitas guerras.
              </p>
            </div>

            <div className="mt-8 text-right border-t border-cream-muted/10 pt-4">
              <p className="font-cinzel text-fiery font-bold text-lg">— Sullivan 'O Vento'</p>
              <p className="text-sm text-cream-muted italic">Claro Mundo Conhecido (e suas incontáveis formas de te matar com burocracia, fogo ou sarcasmo)</p>
            </div>
          </div>
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
          <Link to="/biblioteca" className="btn-cream inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4" />Conheça o Livro Oficial
          </Link>
        </div>
      </div>
    </div>
  );
}
