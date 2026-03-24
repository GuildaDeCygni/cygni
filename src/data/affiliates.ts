export interface AffiliateLink {
  id: string;
  name: string;
  description: string;
  platform: 'amazon' | 'magalu' | 'mercadolivre' | 'shopee' | 'other';
  url: string;
  rating: number;
  category: string;
}

export const affiliateCategories = ['Todos',  'RPG', 'Livros', 'Tecnologia', 'Mesa de Jogo', 'Arte', 'Equipamentos', 'Esportes', 'Outros'];

export const affiliateLinks: AffiliateLink[] = [
  { id: '1', name: 'Kit de Dados Rpg', description: 'Conjunto de dados de rpg com 7 peças translucidos (D4, D6, D8, D10, D10%, D12, D20)', platform: 'mercadolivre', url: 'https://meli.la/2UBp5iw', rating: 4.8, category: 'RPG' },
  { id: '2', name: 'Suporte Articulado Para Monitor Zinnia Nimbo 110', description: 'Suporte Articulado Para Monitor Zinnia Nimbo 110, 13 Pol. a 32 Pol., Branco, ZNO-ZNNBO110-WH01', platform: 'mercadolivre', url: 'https://meli.la/2ToHuWn', rating: 4.9, category: 'Tecnologia' },
  { id: '3', name: 'Luz De Preenchimento Led Rgb Colorido', description: 'Projetada para atender às demandas de criadores de conteúdo, proporcionando a flexibilidade necessária para diferentes cenários.', platform: 'mercadolivre', url: 'https://meli.la/2MZNmM6', rating: 4.7, category: 'Tecnologia' },
  { id: '4', name: 'Fones De Ouvido Soundpeats Space', description: 'Fone Bluetooth 5.3 sem fio, cor Preto.', platform: 'mercadolivre', url: 'https://meli.la/1PHNbsL', rating: 4.8, category: 'Tecnologia' },
  { id: '5', name: 'Webcam Emeet 4k C960', description: 'Kit Videoconferencia Para Pc 1080p 60fps Preto.', platform: 'mercadolivre', url: 'https://meli.la/2vrgSUR', rating: 4.9, category: 'Tecnologia' },
  { id: '6', name: 'Mouse King Pro 4k Gamer Redragon', description: 'Mouse Gamer Redragon King Pro 4k Preto.', platform: 'mercadolivre', url: 'https://meli.la/28qBXtC', rating: 4.8, category: 'Tecnologia' },
  { id: '7', name: 'Suporte Base Mesa Cooler', description: 'Suporte Base Mesa Cooler Para Macbook, Notebook e Laptop em Alumínio.', platform: 'mercadolivre', url: 'https://meli.la/11KbWHx', rating: 4.7, category: 'Tecnologia' },
  { id: '8', name: 'Relógio De Bolso Antigo Vintage', description: 'Relógio De Bolso Com Corrente Antigo Vintage Prata Liso.', platform: 'mercadolivre', url: 'https://meli.la/2NT6e6H', rating: 4.9, category: 'Equipamentos' },
  { id: '9', name: 'Suspensório 3,5 Cm 6 Pontas', description: 'Suspensório Reforçado Plus com 6 Garras.', platform: 'mercadolivre', url: 'https://meli.la/19JSj9F', rating: 4.8, category: 'Equipamentos' },
  { id: '10', name: 'Gravata Borboleta Azul Marinho', description: 'Gravata com Regulador Adulto E Infantil.', platform: 'mercadolivre', url: 'https://meli.la/19MiopH', rating: 4.7, category: 'Equipamentos' },
  { id: '11', name: 'Kit de Keycaps Redragon Degradê Azul', description: 'Padrão ABNT2 com 106 Teclas em plástico ABS.', platform: 'mercadolivre', url: 'https://meli.la/2PPRnzy', rating: 4.9, category: 'Tecnologia' },
  { id: '12', name: 'Cadeira De Escritório Dr. Office Ergo', description: 'Cadeira Ergonômica Mesh 3D.', platform: 'mercadolivre', url: 'https://meli.la/2JbpwYF', rating: 4.8, category: 'Tecnologia' },
  { id: '13', name: 'Fone Moondrop Space Travel 2', description: 'Fone de ouvido com cancelamento de ruido ativo.', platform: 'mercadolivre', url: 'https://meli.la/1X19TeQ', rating: 5.0, category: 'Tecnologia' }
];
