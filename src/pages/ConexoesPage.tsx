import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { SocialLink } from '@/components/ui-custom/SocialLink';
import { socialChannels } from '@/data/social';
import { Calendar, Clock, Bell, MonitorPlay, Youtube } from 'lucide-react';

const schedule = [
  { day: 'Segunda', time: '20:00', activity: 'Live de jogos - ao vivo na Twitch e Youtube' },
  { day: 'Quarta', time: '20:00', activity: 'Preparação para sessão da mesa - Despertar de Cygni' },
  { day: 'Sexta', time: '20:00', activity: 'Live de jogos - ao vivo na Twitch e Youtube' },
];

export function ConexoesPage() {
  return (
    <div className="min-h-screen pt-8 pb-20 md:pt-12 md:pb-32 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal/20 to-void" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fiery/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="Conexões" subtitle="Siga a Guilda" />
          <p className="mt-6 text-lg text-cream-muted max-w-2xl mx-auto">Conecte-se conosco nas redes sociais.</p>
        </div>

        <div className="mb-12 max-w-5xl mx-auto">
          <div className="bg-charcoal/50 rounded-xl p-4 md:p-6 border border-fiery/20 shadow-[0_0_30px_rgba(246,113,1,0.05)]">
            
            <div className="flex items-center gap-3 mb-4">
              {/* Esse span cria a bolinha vermelha piscando */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF0000]"></span>
              </span>
              <h3 className="font-cinzel text-xl md:text-2xl font-bold text-cream">Transmissão Principal</h3>
            </div>

            <div className="aspect-video w-full rounded-lg overflow-hidden border border-cream-muted/10 bg-void">
              <iframe
                src="https://player.twitch.tv/?channel=guildadecygni&parent=guildadecygni.github.io"
                frameBorder="0"
                allowFullScreen={true}
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
{/* --- NOVA SEÇÃO DE VÍDEOS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card da Twitch */}
          <div className="bg-charcoal/50 rounded-xl p-4 border border-cream-muted/10">
            <div className="flex items-center gap-2 mb-4">
              <MonitorPlay className="w-5 h-5 text-[#9146FF]" />
              <h3 className="font-cinzel text-lg font-bold text-cream">Ao Vivo na Twitch</h3>
            </div>
            {/* O aspect-video mantém a proporção 16:9 automaticamente */}
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-cream-muted/10 bg-void">
              <iframe
                src="https://player.twitch.tv/?video=ID_DO_SEU_VOD_AQUI&parent=guildadecygni.github.io"
                frameBorder="0"
                allowFullScreen={true}
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Card do YouTube */}
          <div className="bg-charcoal/50 rounded-xl p-4 border border-cream-muted/10">
            <div className="flex items-center gap-2 mb-4">
              <Youtube className="w-5 h-5 text-[#FF0000]" />
              <h3 className="font-cinzel text-lg font-bold text-cream">Destaque no YouTube</h3>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-cream-muted/10 bg-void">
              <iframe
              src="https://www.youtube.com/embed/telNZfxAYgo"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-charcoal/50 rounded-xl p-6 md:p-8 border border-cream-muted/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-fiery/10 flex items-center justify-center"><Calendar className="w-5 h-5 text-fiery" /></div>
            <div><h3 className="font-cinzel text-lg font-semibold text-cream">Agenda da Guilda</h3><p className="text-sm text-cream-muted">Horário de Brasília (GMT-3)</p></div>
          </div>
          <div className="space-y-4">
            {schedule.map((s) => (
              <div key={s.day} className="flex items-center gap-4 p-4 rounded-lg bg-void/50 border border-cream-muted/10 hover:border-fiery/30 transition-colors">
                <div className="w-16 flex-shrink-0"><span className="font-cinzel text-sm font-semibold text-fiery">{s.day}</span></div>
                <div className="w-px h-8 bg-cream-muted/20" />
                <div className="flex items-center gap-2 flex-shrink-0"><Clock className="w-4 h-4 text-cream-muted" /><span className="text-sm text-cream-muted">{s.time}</span></div>
                <div className="w-px h-8 bg-cream-muted/20 hidden sm:block" />
                <p className="text-sm text-cream hidden sm:block">{s.activity}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg bg-fiery/10 border border-fiery/30 flex items-center gap-4">
            <Bell className="w-5 h-5 text-fiery flex-shrink-0" />
            <p className="text-sm text-cream-muted">Ative as notificações para não perder nenhum conteúdo!</p>
          </div>
        </div>
       <div className="max-w-4xl mx-auto mt-16 mb-16">
          <div className="text-center mb-8">
          <h2 className="font-cinzel text-2xl font-bold text-cream">Nossas Conexões</h2>
        </div>
          <div className="space-y-4">
            {socialChannels.map((c) => <SocialLink key={c.id} {...c} />)}
          </div>
        </div>
        <div className="mt-12 text-center"><p className="text-cream-muted font-cinzel italic">"Uma guilda é feita de seus membros. Você faz parte desta história."</p></div>
      </div>
    </div>
  );
}
