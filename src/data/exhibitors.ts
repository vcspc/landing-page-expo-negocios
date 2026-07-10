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
    description: 'Clínica médica voltada à oferta de consultas em diversas especialidades (como cardiologia, pediatria e ortopedia) e exames de diagnóstico por imagem (incluindo raio-x digital e videoendoscopia) com foco em preços acessíveis, agilidade e atendimento humanizado.',
    logoUrl: 'logo_unividamed.svg',
    phone: '+5591991807790',
    links: {
      website: 'https://www.unividamed.com.br',
      instagram: '@univida.med',
      extraAction: 'instagram'
    }
  },
  {
    id: 'eletrocity',
    name: 'Eletrocity',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'Em nossa loja você encontra os melhores produtos nos setores de móveis e eletrodomésticos. Nossas formas de pagamento são facilitadas para você cliente em até 10X sem juros no crediário próprio da loja e até 12X sem juros nos cartões externos. A loja está localizada na Avenida Presidente Vargas, bairro Centro, ao lado do Supermercado Barrigão.',
    logoUrl: 'logo_eletrocity.jpeg',
    phone: '+5591991731262',
    links: {
      // website: '#',
      instagram: 'eletrocityconcordia',
      extraAction: 'instagram'
    }
  },
  {
    id: 'o-rei-da-pizza',
    name: 'O Rei da Pizza',
    category: 'Alimentação',
    categoryKey: 'alimentacao',
    description: 'A primeira pizza individual de Concórdia.',
    logoUrl: 'logo_oreidapizza.png',
    phone: '+5591991019653',
    links: {
      instagram: '@oreidapizza2026',
      extraAction: 'instagram'
    }
  },
  {
    id: 'agrifpa',
    name: 'Associação de Aricultores Familiares Pérolas do Abacaxi',
    category: 'Agricultura Familiar',
    categoryKey: 'agricultura',
    description: 'O abacaxi pérola é um espetáculo natural de qualidade e sabor que a natureza desenhou.',
    logoUrl: 'logo_agrifpa.png',
    phone: '+5591991152713',
    links: {
      website: 'https://www.facebook.com/share/g/1JFmuUuwFP/',
      instagram: '@perolas_do_abacaxi',
      extraAction: 'instagram'
    }
  },
  {
    id: 'centro-de-pesquisa-cravo-canela',
    name: 'Centro de Pesquisa Cravo & Canela - CENPECC',
    category: 'Artesanato e Cultura',
    categoryKey: 'artesanato_cultura',
    description: 'Ponto de Cultura Concordiense: Guardião de Acervos Cultufais.',
    logoUrl: 'logo_cenpecc.jpg',
    phone: '+5591993195245',
    links: {
      // website: 'http://www.studiobeleza.com.br',
      instagram: '@dom_paiva75',
      extraAction: 'instagram'
    },
  },
  {
    id: 'zafira',
    name: 'Zafira',
    category: 'Moda e Confecção',
    categoryKey: 'moda_confeccao',
    description: 'Luxo acessível para mulheres reais.',
    logoUrl: 'logo_zafira.jpg',
    phone: '+5591991541001',
    links: {
      instagram: '@zafirasj',
      extraAction: 'instagram'
    },
  },
  {
    id: 'cantinho-das-marias',
    name: 'Cantinho das Marias',
    category: 'Alimentação',
    categoryKey: 'alimentacao',
    description: 'Bolos de macaxeira e pudim.',
    logoUrl: 'logo_cantinhodasmarias.jpg',
    phone: '+5591988528613',
    links: {
      instagram: '@cantinhodasmaria91',
      extraAction: 'instagram'
    }
  },
  {
    id: 'realme-pay',
    name: 'Realme Pay',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'A Realme Pay é uma operação oficial da marca Realme, levando ao público smartphones que combinam inovação, resistência e preço justo. Com condições de compra acessíveis, nossa missão é democratizar o acesso à tecnologia de qualidade.',
    logoUrl: 'logo_realmepay.png',
    phone: '+5591991953963',
    links: {
      instagram: '@_realmepay',
      extraAction: 'instagram'
    },
  },
  {
    id: 'elly-silva-moda-feminina',
    name: 'Elly Silva',
    category: 'Moda e Confecção',
    categoryKey: 'moda_confeccao',
    description: 'Vestindo mulheres incríveis.',
    logoUrl: 'logo_ellysilva.jpg',
    phone: '+5591993124527',
    links: {
      // site: 'http://www.studiobeleza.com.br',
      instagram: '@ellysilvamodafeminina',
      extraAction: 'instagram'
    },
  },
  {
    id: 'banco-do-brasil',
    name: 'Banco do Brasil',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'O Banco do Brasil atua no mercado financeiro oferecendo diversos serviços, como empréstimos, investimentos, consórcios, cartões e seguros. Além disso, oferece soluções para pessoas físicas, empresas e agronegócio.',
    logoUrl: 'logo_bancodobrasil.jpeg',
    phone: '+5591991128848',
    links: {
      website: 'https://www.bb.com.br/site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAS47QRwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp9z3EWPaFR6Y1nuO8wkBVEIKFBmSFlkyAxccvnYxwAefVgvV466_jBprC1wQ_aem_WBst3VHDBgUrymsDg6thGQ',
    }
  },
  {
    id: 'soldier',
    name: 'Soldier Rastreamento Veicular',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'Serviço de rastreamento veicular com acesso ao Aplicativo no celular do cliente, bloqueio do veículo (em casos de furto ou roubo), verificação de rotas percorridas, controle de velocidade, etc.',
    logoUrl: 'logo_soldier.jpg',
    phone: '+5591991128848',
    links: {
      // website: 'http://www.hotelfazendaparaiso.com.br',
      instagram: '@soldier.rastreamento',
      extraAction: 'instagram'
    },
  },
  {
    id: 'sortidos-concordia',
    name: 'Sortidos Concórdia',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'Comércio Varejista de Artigo de Armarinho e Variedades em Geral.',
    logoUrl: 'logo_sortidoscorcordia.jpeg',
    phone: '#',
    links: {
      instagram: '@sortidosconcordia',
      extraAction: 'instagram'
    }
  },
  {
    id: 'snackpoint',
    name: 'Snack Point',
    category: 'Alimentação',
    categoryKey: 'alimentacao',
    description: 'Experiência gastronômica que vai além do sabor.',
    logoUrl: 'logo_sanckpoint.jpg',
    phone: '+5591992074951',
    links: {
      instagram: '@snackpointconcordia',
      extraAction: 'instagram'
    },
  },
  {
    id: 'clinicayoshioka',
    name: 'Clínica Yoshioka',
    category: 'Saúde e Bem-estar',
    categoryKey: 'saude_bem_estar',
    description: 'Atuando com o compromisso de levar saúde, respeito e responsabilidade a toda a família, a Clínica Yoshioka destaca-se pelo atendimento humanizado e de alta confiabilidade. Contamos com um corpo clínico multidisciplinar que engloba especialidades como Clínica Geral, Ginecologia, Cardiologia, Nutrição e Psicologia. Oferecemos uma infraestrutura completa para a realização de exames laboratoriais de rotina, exames ginecológicos preventivos, avaliações cardiológicas avançadas e ultrassonografias em geral. Unimos tecnologia de ponta, agilidade nos resultados e sigilo absoluto para garantir a melhor experiência em cuidado e bem-estar para você.',
    logoUrl: 'logo_clinicayoshioka.png',
    phone: '+5591993742974',
    links: {
      website: 'http://clinicayoshioka.com.br/',
      instagram: '@clinica_yoshioka',
      extraAction: 'instagram'
    },
  },
  {
    id: 'oticas-taylon',
    name: 'Óticas Taylon',
    category: 'Saúde e Bem-estar',
    categoryKey: 'saude_bem_estar',
    description: 'Nas Óticas Taylon, cuidar da sua visão é a nossa prioridade. Trabalhamos com óculos de grau, óculos de sol e lentes de contato, oferecendo produtos de qualidade, atendimento personalizado e as melhores opções para todos os estilos e necessidades. Nossa missão é proporcionar conforto, confiança e uma visão mais nítida, unindo tecnologia, variedade e preços acessíveis para que cada cliente encontre a solução ideal para enxergar e viver melhor.',
    logoUrl: 'logo_oticastaylon.jpg',
    phone: '+5591992332482',
    links: {
      instagram: '@oticastaylon',
      extraAction: 'instagram'
    },
  },
  {
    id: 'ritmofm',
    name: 'Ritmo FM 90,3',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'Ritmo Fm 90,3 a Rádio que sintoniza você.',
    logoUrl: 'logo_ritmofm.jpeg',
    phone: '+5591991814241',
    links: {
      instagram: '@ritmofm90.3',
      extraAction: 'instagram'
    },
  },
  {
    id: 'podcast-do-lico',
    name: 'Podcast do Lico',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'Podcast do Lico. O Canal de informações e Entretenimento do Vale do Acará.',
    logoUrl: 'logo_podcastdolico.jpeg',
    phone: '+5591991814241',
    links: {
      instagram: '@podcastdolico',
      extraAction: 'instagram'
    },
  },
  {
    id: 'gbsnet',
    name: 'GBSNet',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'GBSNet é uma empresa de tecnologia que oferece serviços de internet e telefonia para empresas e residências.',
    logoUrl: 'logo_gbsnet.jpg',
    phone: '+5591992225556',
    links: {
      instagram: '@gbsnet',
      extraAction: 'instagram'
    },
  },
  {
    id: 'tete-cosmeticos',
    name: 'Têtê Cosméticos',
    category: 'Moda e Confecção',
    categoryKey: 'moda_confeccao',
    description: 'Sua nova loja de Cosméticos preferida!',
    logoUrl: 'logo_tetecosmeticos.jpeg',
    phone: '+5591993154537',
    links: {
      instagram: '@tetecosmeticos.para',
      extraAction: 'instagram'
    },
  },
  {
    id: 'cidade-mais-comercio',
    name: 'Cidade Mais Comercio',
    category: 'Construção, Pneus e Motos',
    categoryKey: 'construcao_pneus_motos',
    description: 'Atuamos na Área de Materiais de Construção.',
    logoUrl: 'logo_cidademais.jpg',
    phone: '+5591992907772',
    links: {
      instagram: '@cidademais_concordia',
      extraAction: 'instagram'
    },
  },
  {
    id: 'casa-suzuki',
    name: 'Casa Suzuki',
    category: 'Agricultura Familiar',
    categoryKey: 'agricultura',
    description: 'Raízes Nipo-amazônicas, Resiliência e Sustentabilidade.',
    logoUrl: 'logo_casasuzuki.png',
    phone: '#',
    links: {
      instagram: '@casa.suzuki_',
      extraAction: 'instagram'
    },
  },
  {
    id: 'farmacia-do-trabalhador',
    name: 'Farmácia do Trabalhador',
    category: 'Saúde e Bem-estar',
    categoryKey: 'saude_bem_estar',
    description: 'A Farmácia do Trabalhador tem como missão promover a saúde e o bem-estar da população, oferecendo atendimento humanizado, produtos de qualidade e serviços farmacêuticos com responsabilidade e dedicação. Trabalhamos com medicamentos de referência, genéricos e similares, além de uma ampla variedade de produtos de higiene, beleza e cuidados pessoais. Nossa equipe está preparada para orientar e acolher cada cliente com atenção, ética e profissionalismo, buscando oferecer confiança, segurança e excelência em todos os atendimentos, contribuindo para uma melhor qualidade de vida da população. Ficamos  localizados na avenida marechal Deodoro da Fonseca, centro.',
    logoUrl: 'logo_farmaciadotrabalhador.jpg',
    phone: '+5591991253926',
    links: {
      instagram: '@farmaciadotrabalhador1049',
      extraAction: 'instagram'
    },
  },
  {
    id: 'gbperfumes',
    name: 'GBM Perfumes',
    category: 'Moda e Confecção',
    categoryKey: 'moda_confeccao',
    description: 'Perfumes importados com preços acessíveis.',
    logoUrl: 'logo_gbmperfumes.jpg',
    phone: '#',
    links: {
      instagram: '@gbmperfumes',
      extraAction: 'instagram'
    },
  },
  {
    id: 'dianasilva',
    name: 'DIANA SILVA ARTIGOS PARA PRESENTES',
    category: 'Moda e Confecção',
    categoryKey: 'moda_confeccao',
    description: 'Temos o presente certo para surpreender quem você ama.',
    logoUrl: 'logo_diana.jpg',
    phone: '+5591993498125',
    links: {
      instagram: '@mdiana.silva',
      extraAction: 'instagram'
    },
  },
  {
    id: 'gazin',
    name: 'Gazin',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'O melhor custo benefício do Brasil em eletrodomésticos, móveis, eletrônicos e muito mais.',
    logoUrl: 'logo_gazin.jpg',
    phone: '#',
    links: {
      website: 'https://www.falecomvendedorgazin.com.br/vendedores?city=Conc%C3%B3rdia+do+Par%C3%A1-PA&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnuWvqzsZON5c2TxOJ9YHsyPo3igcjDOOY-ECArBxVSzXw65q_TJYJCMLArTY_aem_6fX4FJtoEVFAcy8XYfu9eQ&utm_source=ig&utm_medium=social&utm_content=link_in_bio',
      instagram: '@gazinconcordia',
      extraAction: 'instagram'
    },
  },
  {
    id: 'postomed',
    name: 'Posto Medeiros',
    category: 'Serviços e Tecnologia',
    categoryKey: 'servicos_tecnologia',
    description: 'Vai abastecer? Aproveite e tome um café em nossa conveniência Br mania.',
    logoUrl: 'logo_postomedeiros.jpg',
    phone: '#',
    links: {
      instagram: '@postomedeiros',
      extraAction: 'instagram'
    },
  },
  {
    id: 'doce-apimentada',
    name: '𝐷𝑜𝑐𝑒 𝐴𝑝𝑖𝑚𝑒𝑛𝑡𝑎𝑑𝑎',
    category: 'Moda e Confecção',
    categoryKey: 'moda_confeccao',
    description: 'Aqui tem 𝐴𝑀𝑂𝑅 e 𝑁𝑂𝑉𝐼𝐷𝐴𝐷𝐸𝑆. Tudo que você precisɑ em um só lugɑr!.',
    logoUrl: 'logo_doceapimentada.jpg',
    phone: '+5591993076585',
    links: {
      instagram: '@doce_apimentada',
      extraAction: 'instagram'
    },
  },
  {
    id: 'sitio-dantash',
    name: 'Sitio Dantash',
    category: 'Agricultura Familiar',
    categoryKey: 'agricultura',
    description: 'Agricultura Paraense - Concórdia do Pará/ Brasil Açaí - Cacau - Cupuaçu - Pimenta-do-Reino.',
    logoUrl: 'logo_sitiodantash.jpg',
    phone: '#',
    links: {
      instagram: '@sitiodantash',
      extraAction: 'instagram'
    },
  },
  {
    id: 'viviane-correia',
    name: 'Viviane Correia Harmonização Facial',
    category: 'Saúde e Bem-estar',
    categoryKey: 'saude_bem_estar',
    description: 'Estética com propósito.',
    logoUrl: 'logo_viviane.jpg',
    phone: '+5591991834241',
    links: {
      instagram: '@draviviany.correia',
      extraAction: 'instagram'
    },
  },
];
