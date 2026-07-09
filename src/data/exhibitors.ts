export interface Exhibitor {
  id: string;
  name: string;
  category:
  | 'Alimentação'
  | 'Moda e Confecção'
  | 'Saúde e Bem-estar'
  | 'Agricultura Familiar'
  | 'Artesanato e Cultura'
  | 'Serviços e Tecnologia'
  | 'Recreação Infantil'
  | 'Hotelaria e Turismo'
  | 'Construção, Pneus e Motos';
  categoryKey:
  | 'alimentacao'
  | 'moda_confeccao'
  | 'saude_bem_estar'
  | 'agricultura'
  | 'artesanato_cultura'
  | 'servicos_tecnologia'
  | 'recreacao_infantil'
  | 'hotelaria_turismo'
  | 'construcao_pneus_motos';
  description: string;
  logoUrl?: string;
  phone: string;
  links: {
    website?: string;
    instagram?: string;
    facebook?: string;
    email?: string;
    extraAction?: 'share' | 'shopping_bag' | 'rocket_launch' | 'order' | 'info' | 'instagram';
  };
  notes?: string;
}

export const EXHIBITORS: Exhibitor[] = [
  {
    id: 'univida-med',
    name: 'Univida Medicina Diagnósticos Ltda',
    category: 'Saúde e Bem-estar',
    categoryKey: 'saude_bem_estar',
    description: 'Clínica médica voltada à oferta de consultas em diversas especialidades (como cardiologia, pediatria e ortopedia) e exames de diagnóstico por imagem (incluindo raio-x digital e videoendoscopia) com foco em preços acessíveis, agilidade e atendimento humanizado.Gastronomia regional com foco em produtos sustentáveis da biodiversidade paraense. Desfrute do melhor açaí, pato no tucupi e doces artesanais.',
    logoUrl: 'logo_unividamed.svg',
    phone: '+5591991807790',
    links: {
      website: 'https://www.unividamed.com.br',
      instagram: '@univida.med',
      extraAction: 'instagram'
    }
  },
  {
    id: 'estilo-paraense',
    name: 'Estilo Paraense',
    category: 'Moda e Confecção',
    categoryKey: 'moda_confeccao',
    description: 'Moda autoral e acessórios inspirados na cultura local com materiais eco-conscientes e estampas exclusivas inspiradas no Marajó.',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_mVEuQ9y6V1I4W4FMY6PaVUj1h1CPCma10hwZgpIIhfJew16Fl0K0UVvXW9XjjZ1KeNPIwyMAcNkGThuLeOQRYDq7WxMW8EZ_Av57M2TsvtAC6ktbZyDEQuRZF7Xj2T-OtsxPgpCIO7IsKArhnwiEW1feyc7BOqLaqaG46-byJHo81Cvtdr9F1JUvxUgEiFLaWGl0zyuvePr2MU3qYkTzmtMniSNV7kww-38WRWeyp8nj9P0GGbSQ',
    phone: '+559100000001',
    links: {
      website: '#',
      extraAction: 'shopping_bag'
    }
  },
  {
    id: 'norte-digital',
    name: 'Norte Digital',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'Soluções de software, sistemas de gestão e serviços digitais para modernizar o comércio e impulsionar a transformação digital regional.',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPH1b4W4T79vFeI52oGUvGLBKEsZjZ8lGNZwHNPeJeEsm1UKbE9GBLc8x_N-6vxetVGIaqxdo10fi2sb2n3rDI7S9CT2Ma69jXHajgJhkpo8reF9QaP_SXspKoNH4A-BnZT3Yq0dmiua6aIUxXGZHjgdduPH09Wvzn-Ev1-TswYL_zaLirLljS101PIUVcmbSvbJVTIQJRo2uLLVN7al_dbjyIfynlUb3RhKWVg4q7S4wb3p9wvs56',
    phone: '+559100000002',
    links: {
      website: '#',
      extraAction: 'rocket_launch'
    }
  },
  {
    id: 'restaurante-bom-sabor',
    name: 'Restaurante Bom Sabor',
    category: 'Alimentação',
    categoryKey: 'alimentacao',
    description: 'Especialista em culinária regional com pratos autênticos e receitas tradicionais. Oferecemos um ambiente aconchegante e atendimento de qualidade para famílias.',
    logoUrl: '',
    phone: '+5591999990001',
    links: {
      website: 'http://www.restaurantebomsabor.com.br',
      instagram: '@restaurantebomsabor',
      facebook: 'restaurantebomsabor'
    }
  },
  {
    id: 'studio-beleza-premium',
    name: 'Studio Beleza Premium',
    category: 'Saúde e Bem-estar',
    categoryKey: 'saude_bem_estar',
    description: 'Há 10 anos transformando e embelezando clientes com tratamentos inovadores, produtos de alta qualidade e profissionais dedicados a cuidar de você.',
    logoUrl: '',
    phone: '+5591999990002',
    links: {
      website: 'http://www.studiobeleza.com.br',
      instagram: '@studiobelezapremium',
      facebook: 'studiobeleza'
    },
    notes: 'Localização: Centro da cidade'
  },
  {
    id: 'artesanato-da-comunidade',
    name: 'Artesanato da Comunidade',
    category: 'Artesanato e Cultura',
    categoryKey: 'artesanato_cultura',
    description: 'Produtos artesanais únicos confeccionados com criatividade e dedicação: crochê, tecelagem, pintura e muito mais, refletindo nossa cultura local.',
    logoUrl: '',
    phone: '+5591999990003',
    links: {
      instagram: '@artesanatocomunidade',
      facebook: 'artesanato',
      email: 'email@empresa.com.br'
    },
    notes: 'Aceita encomendas'
  },
  {
    id: 'pneus-servicos-automotivos',
    name: 'Pneus & Serviços Automotivos',
    category: 'Construção, Pneus e Motos',
    categoryKey: 'construcao_pneus_motos',
    description: 'Empresa especializada em pneus das melhores marcas e manutenção automotiva completa, balanceamento, alinhamento e reparos rápidos com garantia.',
    logoUrl: '',
    phone: '+5591999990004',
    links: {
      website: 'http://www.pneusservicos.com.br',
      instagram: '@pneusservicos',
      facebook: 'pneusservicos'
    },
    notes: 'Possui estacionamento'
  },
  {
    id: 'sitio-produtor-rural',
    name: 'Sítio Produtor Rural',
    category: 'Agricultura Familiar',
    categoryKey: 'agricultura',
    description: 'Agricultura familiar sustentável trazendo hortifrúti frescos, verduras, frutas, produtos naturais e artesanais direto da roça para sua mesa sem agrotóxicos.',
    logoUrl: '',
    phone: '+5591999990005',
    links: {
      instagram: '@sitio-produtor',
      facebook: 'sitioprodutor'
    },
    notes: 'Produtos orgânicos e certificados'
  },
  {
    id: 'moda-confeccoes-express',
    name: 'Moda & Confecções Express',
    category: 'Moda e Confecção',
    categoryKey: 'moda_confeccao',
    description: 'As tendências mais atuais de roupas e confecções com preços acessíveis. Atendemos moda casual e peças sob encomenda para eventos.',
    logoUrl: '',
    phone: '+5591999990006',
    links: {
      website: 'http://www.modaconfeccoes.com.br',
      instagram: '@modaconfeccoes',
      facebook: 'modaconfeccoes'
    },
    notes: 'Desconto especial no evento'
  },
  {
    id: 'hotel-fazenda-paraiso',
    name: 'Hotel Fazenda Paraíso',
    category: 'Hotelaria e Turismo',
    categoryKey: 'hotelaria_turismo',
    description: 'Hospedagem aconchegante em meio à natureza com culinária típica, passeios a cavalo, trilhas ecológicas e lazer completo para toda a família.',
    logoUrl: '',
    phone: '+5591999990007',
    links: {
      website: 'http://www.hotelfazendaparaiso.com.br',
      instagram: '@hotelfazendaparaiso',
      extraAction: 'info'
    },
    notes: 'Reservas antecipadas com desconto'
  },
  {
    id: 'brink-mais',
    name: 'Brink Mais Recreação',
    category: 'Recreação Infantil',
    categoryKey: 'recreacao_infantil',
    description: 'Espaço de lazer e recreação infantil com brinquedos infláveis, oficinas criativas e monitores treinados para garantir a diversão segura das crianças.',
    logoUrl: '',
    phone: '+5591999990008',
    links: {
      instagram: '@brinkmaisrecreacao',
      extraAction: 'share'
    },
    notes: 'Área coberta com recreadores'
  }
];
