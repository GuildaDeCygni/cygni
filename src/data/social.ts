import { Twitch, Youtube, Instagram, Music, MessageSquare, Mail } from 'lucide-react';

export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: typeof Twitch;
  color: string;
  followers?: string;
  description: string;
}

export const socialChannels: SocialChannel[] = [
  { id: '1', name: 'Twitch', handle: '@guildadecygni', url: 'https://twitch.tv/guildadecygni', icon: Twitch, color: '#9146FF', description: 'Streams de RPG e conteúdo ao vivo' },
  { id: '2', name: 'YouTube', handle: '@GuildaDeCygni', url: 'https://youtube.com/@GuildaDeCygni', icon: Youtube, color: '#FF0000', description: 'Lore, tutoriais e campanhas' },
  { id: '3', name: 'Instagram', handle: '@guilda_de_cygni', url: 'https://www.instagram.com/guilda_de_cygni/', icon: Instagram, color: '#E4405F',  description: 'Arte e conteúdo exclusivo' },
  { id: '4', name: 'TikTok', handle: '@guildadecygni', url: 'https://www.tiktok.com/@guildadecygni', icon: Music, color: '#F67101',  description: 'Vídeos curtos e bastidores da Forja' },
  { id: '5', name: 'Discord', handle: 'Taverna da Guilda', url: 'https://discord.gg/YysPhNYd', icon: MessageSquare, color: '#5865F2', description: 'Nossa comunidade e mesas de RPG' },
  { id: '6', name: 'E-mail', handle: 'guildacygni@gmail.com', url: 'mailto:guildacygni@gmail.com', icon: Mail, color: '#EA4335', description: 'Contato comercial e suporte' },
];