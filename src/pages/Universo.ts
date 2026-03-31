// --- INTERFACES ---

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  url: string;
  imageUrl?: string;
}

export interface Jogador {
  playerName: string;
  characterName: string;
}

export interface Campanha {
  id: string;
  titulo: string;
  status: string;
  descricao: string;
  jogadores: Jogador[];
}

// --- CATEGORIAS ---

export const downloadCategories = ['Informações do Universo', 'Campanhas Prontas', 'Mapas','Todos'];

// --- DADOS DOS DOWNLOADS ---

export const downloadsData: DownloadItem[] = [
  { 
    id: '1',
    title: 'One-shoot As Portas da Morte', 
    description: 'Uma campanha curta perfeita cheia de combates e mistérios', 
    type: 'PDF', 
    category: 'Campanhas Prontas',
    url: 'https://drive.google.com/...' // Insira seu link aqui
  },
  { 
    id: '2',
    title: 'One-shoot As Ruínas do Sol', 
    description: 'Uma campanha de exploração e investigação onde a inteligência dos jogadores se...',  
    type: 'PDF', 
    category: 'Campanhas Prontas',
    url: 'https://drive.google.com/...' // Insira seu link aqui
  },
  { 
    id: '3',
    title: 'Mapa de Cygni', 
    description: 'Mapa em alta resolução', 
    type: 'PNG', 
    category: 'Mapas',
    imageUrl: 'LINK_DA_IMAGEM.jpg',
    url: 'https://drive.google.com/...' // Insira seu link aqui
  },
  { 
    id: '4',
    title: 'Ficha de Personagem', 
    description: 'Ficha editável', 
    type: 'PDF', 
    category: 'Informações do Universo',
    url: 'https://drive.google.com/...' // Insira seu link aqui
  }
];

// --- DADOS DAS CAMPANHAS E JOGADORES ---

export const campanhas: Campanha[] = [
  {
    id: '1',
    titulo: 'O Despertar de Cygni',
    status: 'Em andamento',
    descricao: 'O levantar de Poderes antigos que talvez teria sido melhor deixar em paz:',
    jogadores: [
      { playerName: 'Alfinete', characterName: 'Alex Sandro' },
      { playerName: 'Magarian', characterName: 'Alcebiades' },
      { playerName: 'Ybrook', characterName: 'Warryn' }
    ]
  }
];