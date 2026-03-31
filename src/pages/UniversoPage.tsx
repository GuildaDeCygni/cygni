import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { BookOpen, Map, Users, Sword, Download, FileText, Flame, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { downloadCategories, downloadsData, campanhas } from '@/data/universo';

export function UniversoPage() {
  const [activeCategory, setActiveCategory] = useState('Informações do Universo');
  const filteredDownloads = activeCategory === 'Todos' // <-- VOLTE PARA 'Todos'
    ? downloadsData 
    : downloadsData.filter(d => d.category === activeCategory);
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
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="absolute -top-6 -left-6 text-fiery/10">
            <Quote className="w-24 h-24" />
          </div>
          
          <div className="relative z-10 p-8 md:p-10 rounded-xl bg-charcoal/40 border border-fiery/20 shadow-[0_0_30px_rgba(246,113,1,0.05)]">
            <h3 className="font-cinzel text-xl font-bold text-fiery mb-6 text-center border-b border-fiery/20 pb-4">
              Bem-vindo a Cygni
            </h3>
            
            <div className="space-y-4 text-cream-muted/90 text-lg leading-relaxed font-serif">
              <p>
                Se você está lendo isso, parabéns! Você provavelmente sobreviveu ao nascimento, aprendeu a andar sem cair em um poço e, por algum motivo cósmico, decidiu se aventurar por Cygni — o pedaço mais caótico, contraditório e fascinante do planeta.
              </p>
              
              <p>
                Cygni, também chamado de “O Mundo Conhecido” porque “O Mundo Parcialmente Cartografado e Frequentemente Hostil” não pegou.
              </p>

            <div className="mt-8 text-right border-t border-cream-muted/10 pt-4">
              <p className="font-cinzel text-fiery font-bold text-lg">— Sullivan 'O Vento'</p>
              <p className="text-sm text-cream-muted italic">Claro Mundo Conhecido (e suas incontáveis formas de te matar com burocracia, fogo ou sarcasmo)</p>
            </div>
          </div>
        </div>

        {/* CTA DO LIVRO OFICIAL */}
        <div className="mt-4 mb-20 text-center">
          <p className="text-cream-muted mb-4">Quer aprofundar-se no universo?</p>
          <Link to="/biblioteca" className="btn-cream inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4" />Conheça o Livro Oficial
          </Link>
        </div>

        <div className="mt-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-fiery" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Materiais de Jogo</h3>
              <Flame className="w-5 h-5 text-fiery" />
            </div>
            <p className="text-cream-muted">Downloads gratuitos para sua campanha</p>
          </div>
          {/* Botões de Filtro */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {downloadCategories.map((c) => (
              <button 
                key={c} 
                onClick={() => setActiveCategory(c)} 
                className={`px-4 py-2 rounded-full text-sm font-cinzel transition-all duration-300 ${activeCategory === c ? 'bg-fiery text-cream font-semibold' : 'bg-charcoal/50 text-cream-muted border border-cream-muted/20 hover:border-fiery/50 hover:text-cream'}`}
              >
                {c}
              </button>
            ))}
          </div>


          {/* Visualização Condicional: Grade para Mapas, Lista para o resto */}
          <div className="scroll-card max-w-4xl mx-auto p-6 md:p-8">
            
            {activeCategory === 'Mapas' ? (
              /* --- MODO MINIATURAS (GRADE) --- */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredDownloads.map((download) => (
                  <a href={download.url} target="_blank" rel="noopener noreferrer" key={download.id} className="flex flex-col rounded-xl bg-parchment-aged/50 border border-charcoal/20 hover:border-fiery/30 transition-colors group cursor-pointer overflow-hidden">
                    
                    {/* Imagem de Capa (Parte Superior) */}
                    <div className="w-full aspect-video bg-charcoal/20 relative overflow-hidden">
                      {download.imageUrl ? (
                        <img src={download.imageUrl} alt={download.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center"><Map className="w-8 h-8 text-charcoal/30" /></div>
                      )}
                      <div className="absolute top-2 right-2">
                         <Badge variant="outline" className="text-xs border-charcoal/30 bg-parchment-aged/90 text-charcoal/90">{download.type}</Badge>
                      </div>
                    </div>

                    {/* Informações e Botão (Parte Inferior) */}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h5 className="font-cinzel text-sm font-semibold text-charcoal group-hover:text-fiery transition-colors leading-tight">
                          {download.title}
                        </h5>
                        <Download className="w-4 h-4 text-charcoal/40 group-hover:text-fiery transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-xs text-charcoal/60 line-clamp-2">
                        {download.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (

              /* --- MODO LISTA TRADICIONAL --- */
              <div className="space-y-3">
                {filteredDownloads.map((download) => (
                  <a href={download.url} target="_blank" rel="noopener noreferrer" key={download.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg bg-parchment-aged/50 border border-charcoal/20 hover:border-fiery/30 transition-colors group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-fiery/10 flex items-center justify-center flex-shrink-0 hidden sm:flex">
                      <FileText className="w-5 h-5 text-fiery" />
                    </div>
                    <div className="flex-1 min-w-0 w-full">
                      <h5 className="font-cinzel text-sm font-semibold text-charcoal group-hover:text-fiery transition-colors truncate">{download.title}</h5>
                      <p className="text-xs text-charcoal/60 truncate">{download.description}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0 justify-between sm:justify-end">
                      <Badge variant="outline" className="text-xs border-charcoal/30 text-charcoal/70">{download.type}</Badge>
                      <Download className="w-4 h-4 text-charcoal/40 group-hover:text-fiery transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            )}
            
            {/* Mensagem se não houver downloads */}
            {filteredDownloads.length === 0 && (
              <div className="text-center py-8">
                <p className="text-charcoal/50 font-cinzel">Nenhum arquivo encontrado nesta categoria.</p>
              </div>
            )}
          </div>
          

        {/* Bloco: Campanhas Ativas */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-cinzel text-2xl font-bold text-cream">Campanhas Ativas</h3>
            <p className="text-cream-muted mt-2">As histórias que estão sendo forjadas agora</p>
          </div>

          {campanhas.map((campanha) => (
            <div key={campanha.titulo} className="max-w-5xl mx-auto mb-8 bg-charcoal/40 border border-fiery/20 rounded-xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-cream-muted/10 pb-4 gap-4">
                <div>
                  <h4 className="font-cinzel text-xl font-bold text-fiery">{campanha.titulo}</h4>
                  <p className="text-sm text-cream-muted mt-1">{campanha.descricao}</p>
                </div>
                <Badge variant="outline" className="border-fiery/50 text-fiery bg-fiery/10 whitespace-nowrap">
                  {campanha.status}
                </Badge>
              </div>

              <h5 className="font-cinzel text-lg text-cream mb-4">Aventureiros</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {campanha.jogadores.map((p) => (
                  <div key={p.characterName} className="flex items-center gap-4 p-3 rounded-lg bg-void/50 border border-cream-muted/10">
                    <div className="w-10 h-10 rounded-full border border-fiery/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-cinzel-decorative text-sm font-bold text-fiery/70">
                        {p.characterName.trim()[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-cinzel text-sm font-semibold text-cream">{p.characterName}</p>
                      <p className="text-xs text-cream-muted italic">por {p.playerName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bloco: Call to Action (Contato) */}
        <div className="mt-16 relative rounded-xl overflow-hidden border border-fiery/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-fiery/10 via-charcoal to-fiery/10" />
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h3 className="font-cinzel text-2xl font-bold text-cream mb-3">Você também quer participar?</h3>
            <p className="text-cream-muted max-w-2xl mx-auto mb-6 text-sm">
              As portas da Guilda estão abertas. Se você deseja integrar uma mesa nos envie um pouco sobre você e envie seu personagem.
            </p>
            <div className="flex justify-center">
              <a href="mailto:guildadecygni@gmail.com" className="btn-fiery inline-flex items-center gap-2">
                <Users className="w-5 h-5" />
                Enviar uma Missiva
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}