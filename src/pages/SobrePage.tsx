import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { Users, Target, Heart, Flame, Sword, Scroll } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Paixão', description: 'Fazemos o que amamos. Cada projeto é uma extensão da nossa paixão por fantasia.' },
  { icon: Users, title: 'Comunidade', description: 'Acreditamos no poder das histórias compartilhadas entre jogadores.' },
  { icon: Target, title: 'Qualidade', description: 'Buscamos excelência em cada detalhe, do conteúdo aos produtos físicos.' },
];

const team = [
  { name: 'Vylleon (Mestre)', role: 'Fundador & Criador de Cygni', description: 'Criador do universo de Cygni e mestre há mais de uma década.' },
];

const players = [
  { playerName: 'Alfinete', characterName: 'Alex sandro', description: 'Um pequeno guinomo bardo astro do Xilofone.'},
  { playerName: 'Magarian', characterName: 'Alcebiades', description: 'O monge bebado nivel um com mais de quinze paginas de historia.' },
  { playerName: 'Aiprah', characterName: 'Thatari', description: 'Vinda dos sonhos mais loucos de alguém só não sabemos de quem'},
  { playerName: 'Ybrook', characterName: 'Warryn', description: 'Um ladino metido a charlatão, que só serviu para vender poções falsas para o grupo' },
  { playerName: 'LunaticoFtw', characterName: 'Ronir', description: 'O mesmo mago todas as vezes que ele joga e ainda não sabe quais são suas magias.' },
  { playerName: 'Brunera', characterName: 'Quigreaf Drshez', description: 'Ao assassino ranger com tanta dificuldade de falar quanto de atirar.' },
  { playerName: 'Iphod', characterName: 'Haseid', description: 'Foi capturado e fim da sessão.' },
  { playerName: '_evaldo', characterName: 'Karim Reconta-Conto', description: 'O bardo que escutava tomates.' },
];

export function SobrePage() {
  return (
    <div className="min-h-screen pt-8 pb-20 md:pt-12 md:pb-32 relative">
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
              <p><span className="font-cinzel text-fiery font-semibold">A Forja de um Universo: A História de Cygni</span></p>
              <p>O universo de Cygni nasceu em meio ao silêncio e ao isolamento, durante o período da pandemia.
                Inicialmente, o projeto era um exercício de criação de mundo movido por uma pergunta central: 
                seria possível estruturar uma realidade inteira a partir de um único local? 
                A centelha que acendeu essa história foi uma breve narrativa sobre a queda do então Rei — depois transformado em Imperador — Gregório III. 
                Esse foi o marco zero para as nossas primeiras sessões de RPG, criadas com o propósito de explorar os contornos deste novo cenário.</p>
              <p>No entanto, a magia da narrativa compartilhada tomou as rédeas.
                 O que era apenas um estudo geográfico e político ganhou vida própria.
                 A cada novo aventureiro criado nas mesas de jogo, o mundo de Cygni respirava, evoluía e se transformava.
                 As fronteiras se expandiram muito além do plano original, moldadas pelas escolhas e pela imaginação daqueles que caminharam por suas terras.</p>
              <p>Hoje, essa jornada transcende as fichas de personagens.
                 A Guilda de Cygni se consolidou como um refúgio acolhedor para mentes criativas.
                 Transformamo-nos em um espaço vivo, com transmissões ao vivo e conteúdos dedicados a compartilhar cada passo do desenvolvimento contínuo deste universo. 
                 Além do nosso armazém focado em curadoria de itens de RPG, os horizontes de Cygni continuam a se expandir através da literatura, com o Guia de como não ser um idiota em Cygni atualmente em produção.</p>
              <p>A Guilda é, acima de tudo, um convite de portas abertas.
                 Um experimento contínuo para descobrir até onde a imaginação pode fluir, agregando sempre novas ideias, aventuras e pessoas a esta grande história que continuamos a escrever juntos.</p>
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
              <div className="flex justify-center mb-16">
              {team.map((m) => (
                <div key={m.name} className="text-center p-6 rounded-lg bg-charcoal/50 border border-cream-muted/10 max-w-sm w-full">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-fiery to-fiery-dark flex items-center justify-center">
                  <span className="font-cinzel-decorative text-2xl font-bold text-cream">{m.name[0]}</span>
                </div>
                <h4 className="font-cinzel text-lg font-semibold text-cream mb-1">{m.name}</h4>
                <p className="text-sm text-fiery mb-3">{m.role}</p>
                <p className="text-sm text-cream-muted">{m.description}</p>
              </div>
            ))}
          </div>
        <div className="mb-20">
          <div className="text-center mb-10"><h3 className="font-cinzel text-xl font-bold text-cream">Aventureiros de Cygni</h3></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {players.map((p) => (
              <div key={p.characterName} className="text-center p-6 rounded-lg bg-void/50 border border-fiery/20 hover:border-fiery/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-fiery/30 flex items-center justify-center">
                  <span className="font-cinzel-decorative text-xl font-bold text-fiery/70">{p.characterName[0]}</span>
                </div>
                <h4 className="font-cinzel text-lg font-semibold text-cream mb-1">{p.characterName}</h4>
                <p className="text-xs text-cream-muted mb-3 italic">Jogado por: {p.playerName}</p>
                <p className="text-sm text-cream-muted">{p.description}</p>
              </div>
            ))}
          </div>
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
    </div>
  );
}
