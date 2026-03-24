export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  mercadoLivreUrl?: string;
  shopeeUrl?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Caixa de Dados Élfica',
    description: 'Caixa de madeira gravada a laser com motivos élficos. Capacidade para 7 dados.',
    price: 'R$ 89,90',
    image: 'https://images.unsplash.com/photo-1611996900188-b34f97c9480e?w=600&h=600&fit=crop',
    category: 'Acessórios RPG',
    mercadoLivreUrl: '#',
    shopeeUrl: '#',
  },
  {
    id: '2',
    name: 'Tabuleiro de Xadrez Medieval',
    description: 'Tabuleiro de xadrez com gravura de tema medieval. Madeira de alta qualidade.',
    price: 'R$ 149,90',
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&h=600&fit=crop',
    category: 'Jogos de Tabuleiro',
    mercadoLivreUrl: '#',
    shopeeUrl: '#',
  },
  {
    id: '3',
    name: 'Marcadores de HP - Dragão',
    description: 'Conjunto com 6 marcadores de vida para RPG, com design de dragão.',
    price: 'R$ 39,90',
    image: 'https://images.unsplash.com/photo-1605218427306-022ba6c5547b?w=600&h=600&fit=crop',
    category: 'Acessórios RPG',
    mercadoLivreUrl: '#',
    shopeeUrl: '#',
  },
  {
    id: '4',
    name: 'Placa de Mesa - Mestre',
    description: 'Placa decorativa "O Mestre Sempre Tem Razão". MDF 3mm.',
    price: 'R$ 49,90',
    image: 'https://images.unsplash.com/photo-1533230408706-97347793e5e5?w=600&h=600&fit=crop',
    category: 'Decoração',
    mercadoLivreUrl: '#',
    shopeeUrl: '#',
  },
  {
    id: '5',
    name: 'Torre de Dados - Castelo',
    description: 'Torre para rolagem de dados no formato de castelo medieval.',
    price: 'R$ 69,90',
    image: 'https://images.unsplash.com/photo-1598556851364-384f1ca9345d?w=600&h=600&fit=crop',
    category: 'Acessórios RPG',
    mercadoLivreUrl: '#',
    shopeeUrl: '#',
  },
  {
    id: '6',
    name: 'Mapa de Cygni - Grande',
    description: 'Mapa do mundo de Cygni gravado em madeira 60x40cm.',
    price: 'R$ 199,90',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=600&fit=crop',
    category: 'Decoração',
    mercadoLivreUrl: '#',
    shopeeUrl: '#',
  },
];
