import { SectionTitle } from '@/components/ui-custom/SectionTitle';
import { SocialLink } from '@/components/ui-custom/SocialLink';
import { socialChannels } from '@/data/social';
import { Calendar, Clock, Bell } from 'lucide-react';

const schedule = [
  { day: 'Terça', time: '20:00', activity: 'Stream de RPG - Campanha Ao Vivo' },
  { day: 'Quinta', time: '20:00', activity: 'Mestreando com a Guilda' },
  { day: 'Sábado', time: '15:00', activity: 'Lore e Histórias de Cygni' },
];

export function ConexoesSection() {
  return (
    <section id="conexoes" className="relative py-20 md:py-32 bg-void">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal/20 to-void" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fiery/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="Conexões" subtitle="Siga a Guilda" />
          <p className="mt-6 text-lg text-cream-muted max-w-2xl mx-auto">Conecte-se conosco nas redes sociais.</p>
        </div>
        <div className="space-y-4 mb-16">
          {socialChannels.map((c) => <SocialLink key={c.id} {...c} />)}
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
        <div className="mt-12 text-center"><p className="text-cream-muted font-cinzel italic">"Uma guilda é feita de seus membros. Você faz parte desta história."</p></div>
      </div>
    </section>
  );
}
