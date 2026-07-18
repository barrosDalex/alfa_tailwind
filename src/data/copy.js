/** Copy bilíngue — hub + páginas /studio e /fotos. */
export const contact = {
  phoneDisplay: '+55 15 99656-2261',
  phoneTel: '+5515996562261',
  whatsapp: 'https://wa.me/5515996562261',
  instagrams: [
    {
      handle: 'alfaa_producoes',
      href: 'https://www.instagram.com/alfaa_producoes/',
      label: 'Alfa Produções',
      path: '/',
      tag: 'Hub · Audiovisual & Marketing',
    },
    {
      handle: 'alfaa.studio',
      href: 'https://www.instagram.com/alfaa.studio/',
      label: 'Alfa Studio',
      path: '/studio',
      tag: 'Studio · Branding & Design',
    },
    {
      handle: 'alfaa_fotos',
      href: 'https://www.instagram.com/alfaa_fotos/',
      label: 'Alfa Fotos',
      path: '/fotos',
      tag: 'Fotos · Fotografia',
    },
  ],
}

/** Métricas públicas capturadas do Instagram (atualizáveis via scripts/fetch_instagram.py). */
export const igStats = {
  'alfaa_producoes': { followers: 493, posts: 65 },
  'alfaa.studio': { followers: 115, posts: 8 },
  'alfaa_fotos': { followers: 58, posts: 5 },
}

export const copy = {
  pt: {
    langLabel: 'PT',
    brand: 'Alfa Produções',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Serviços', href: '/#servicos' },
      { label: 'Studio', href: '/studio' },
      { label: 'Fotos', href: '/fotos' },
      { label: 'Contato', href: '/#contato' },
    ],
    cta: 'Fazer Briefing',
    themeToggle: 'Alternar tema claro/escuro',
    hero: {
      words: ['AUDIOVISUAL', 'MARKETING', 'STUDIO', 'FOTOS', 'BRANDING'],
      titleBefore: 'Transformamos ideias em ',
      titleHighlight: 'impacto digital',
      titleAfter: '.',
      subtitle:
        'Alfa Produções é audiovisual e marketing para marcas que querem ser lembradas. Do roteiro à entrega, cuidamos de cada frame — e conectamos Studio e Fotos no mesmo ecossistema.',
      primary: 'Fazer Briefing',
      secondary: 'Ver serviços',
    },
    about: {
      eyebrow: 'Quem somos',
      title: 'Uma casa criativa com três frentes.',
      lead:
        'O hub Alfa Produções concentra audiovisual e marketing. O Studio cuida de identidade e design. A Alfa Fotos registra com olhar fotográfico. Três Instagrams, uma mesma marca.',
      points: [
        { strong: 'Audiovisual & Marketing.', body: 'Vídeos, campanhas e conteúdo que posicionam a marca.' },
        { strong: 'Studio.', body: 'Branding, direção de arte e materiais visuais consistentes.' },
        { strong: 'Fotos.', body: 'Fotografia comercial, produto e cobertura com estética limpa.' },
      ],
    },
    bento: {
      eyebrow: 'Serviços',
      title: 'Tudo que a sua marca precisa, em um só lugar.',
      lead: 'Quatro frentes integradas — do vídeo ao site — com consistência visual e resultado.',
      cards: {
        audiovisual: {
          label: 'Produção Audiovisual',
          strong: 'Histórias que prendem.',
          body: 'Institucionais, campanhas e cobertura de eventos com roteiro estratégico e olhar cinematográfico.',
        },
        branding: {
          label: 'Branding & Design',
          strong: 'Marca coerente em todo canal.',
          body: 'Identidade visual completa no Studio: logo, paleta, tipografia e diretrizes de uso.',
        },
        social: {
          label: 'Social & Tráfego',
          strong: 'Visível desde o dia um.',
          body: 'Planejamento, conteúdo e mídia paga com análise de engajamento e conversão.',
        },
        sites: {
          label: 'Sites & Mentorias',
          strong: 'Do site à equipe treinada.',
          body: 'Sites rápidos e responsivos, e mentorias práticas para conteúdo e posicionamento digital.',
        },
      },
    },
    brands: {
      eyebrow: 'Ecossistema',
      title: 'Três Instagrams. Uma Alfa.',
      lead: 'Escolha a frente certa — ou fale com o hub e a gente orquestra tudo.',
      ctaStudio: 'Abrir Studio',
      ctaFotos: 'Abrir Fotos',
      ctaIg: 'Ver no Instagram',
      followers: 'seguidores',
      posts: 'posts',
    },
    process: {
      eyebrow: 'Método',
      title: 'Do briefing ao frame final.',
      steps: [
        { n: '01', title: 'Briefing', body: 'Entendemos objetivo, público e tom de voz.' },
        { n: '02', title: 'Conceito', body: 'Roteiro, moodboard e direção criativa.' },
        { n: '03', title: 'Produção', body: 'Captação, edição e design no ritmo do projeto.' },
        { n: '04', title: 'Entrega', body: 'Arquivos prontos para redes, site e mídia paga.' },
      ],
    },
    portfolio: {
      eyebrow: 'Portfólio',
      title: 'Marcas que confiam na Alfa.',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos tirar o projeto do papel.',
      lead: 'Mande um WhatsApp com o briefing — respondemos com o próximo passo.',
      primary: 'WhatsApp',
      secondary: 'Ligar agora',
      phoneLabel: 'Telefone',
    },
    studio: {
      eyebrow: 'Alfa Studio',
      titleBefore: 'Identidade com ',
      titleHighlight: 'método',
      titleAfter: '.',
      subtitle:
        'O braço de branding e design da Alfa. Identidade visual, direção de arte e materiais que conversam com o audiovisual e as redes.',
      words: ['BRANDING', 'IDENTIDADE', 'ART DIRECTION', 'MOTION', 'SYSTEM'],
      sections: [
        {
          eyebrow: 'O que fazemos',
          title: 'Design que escala com a marca.',
          body: 'Do logo ao sistema visual completo: tipografia, cores, aplicações e templates para redes e campanhas.',
          items: ['Identidade visual', 'Diretrizes de marca', 'Peças para redes', 'Motion / opens', 'Packaging leve'],
        },
        {
          eyebrow: 'Para quem',
          title: 'Marcas que querem consistência.',
          body: 'Empresas e criadores que precisam de uma cara clara — e de um studio alinhado à produção audiovisual.',
        },
      ],
      igCta: 'Seguir @alfaa.studio',
      back: 'Voltar ao hub',
    },
    fotos: {
      eyebrow: 'Alfa Fotos',
      titleBefore: 'Imagem com ',
      titleHighlight: 'intenção',
      titleAfter: '.',
      subtitle:
        'O braço fotográfico da Alfa. Retrato, produto e cobertura — com a mesma linguagem visual do hub e do Studio.',
      words: ['RETRATO', 'PRODUTO', 'EVENTO', 'STILL', 'EDITORIAL'],
      sections: [
        {
          eyebrow: 'O que fazemos',
          title: 'Fotografia que vende e documenta.',
          body: 'Sessões comerciais e editoriais pensadas para site, redes e campanhas — com entrega organizada.',
          items: ['Produto e still', 'Retrato corporativo', 'Cobertura de eventos', 'Conteúdo para redes', 'Direção de cena'],
        },
        {
          eyebrow: 'Para quem',
          title: 'Quem precisa de imagem forte.',
          body: 'Negócios e projetos que querem fotos alinhadas à marca — não só “fotos bonitas”.',
        },
      ],
      igCta: 'Seguir @alfaa_fotos',
      back: 'Voltar ao hub',
    },
    footer: {
      columns: [
        {
          title: 'Empresa',
          links: [
            { label: 'Home', href: '/' },
            { label: 'Studio', href: '/studio' },
            { label: 'Fotos', href: '/fotos' },
            { label: 'Contato', href: '/#contato' },
          ],
        },
        {
          title: 'Serviços',
          links: [
            { label: 'Audiovisual', href: '/#servicos' },
            { label: 'Branding', href: '/studio' },
            { label: 'Redes Sociais', href: '/#servicos' },
            { label: 'Fotografia', href: '/fotos' },
          ],
        },
        {
          title: 'Instagram',
          links: [
            { label: '@alfaa_producoes', href: 'https://www.instagram.com/alfaa_producoes/' },
            { label: '@alfaa.studio', href: 'https://www.instagram.com/alfaa.studio/' },
            { label: '@alfaa_fotos', href: 'https://www.instagram.com/alfaa_fotos/' },
          ],
        },
        {
          title: 'Contato',
          links: [
            { label: '+55 15 99656-2261', href: 'https://wa.me/5515996562261' },
            { label: 'WhatsApp', href: 'https://wa.me/5515996562261' },
          ],
        },
      ],
      copyright: '© 2026 Alfa Produções. Todos os direitos reservados.',
      badge: 'Audiovisual · Studio · Fotos',
    },
  },
  en: {
    langLabel: 'EN',
    brand: 'Alfa Produções',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#servicos' },
      { label: 'Studio', href: '/studio' },
      { label: 'Photos', href: '/fotos' },
      { label: 'Contact', href: '/#contato' },
    ],
    cta: 'Start a Briefing',
    themeToggle: 'Toggle light/dark theme',
    hero: {
      words: ['VIDEO', 'MARKETING', 'STUDIO', 'PHOTOS', 'BRANDING'],
      titleBefore: 'We turn ideas into ',
      titleHighlight: 'digital impact',
      titleAfter: '.',
      subtitle:
        'Alfa Produções is video and marketing for brands that want to be remembered. From script to delivery — with Studio and Photos in the same ecosystem.',
      primary: 'Start a Briefing',
      secondary: 'View services',
    },
    about: {
      eyebrow: 'About',
      title: 'One creative house. Three fronts.',
      lead:
        'The Alfa hub focuses on video and marketing. Studio owns identity and design. Alfa Fotos captures with a photographic eye. Three Instagrams, one brand.',
      points: [
        { strong: 'Video & Marketing.', body: 'Films, campaigns, and content that position the brand.' },
        { strong: 'Studio.', body: 'Branding, art direction, and consistent visual systems.' },
        { strong: 'Photos.', body: 'Commercial, product, and coverage photography.' },
      ],
    },
    bento: {
      eyebrow: 'Services',
      title: 'Everything your brand needs, in one place.',
      lead: 'Four integrated fronts — from video to website — with visual consistency and results.',
      cards: {
        audiovisual: {
          label: 'Video Production',
          strong: 'Stories that hold attention.',
          body: 'Institutional films, campaigns, and event coverage with strategic scripts and a cinematic eye.',
        },
        branding: {
          label: 'Branding & Design',
          strong: 'A coherent brand on every channel.',
          body: 'Full visual identity via Studio: logo, palette, type, and usage guidelines.',
        },
        social: {
          label: 'Social & Paid Traffic',
          strong: 'Visible from day one.',
          body: 'Planning, content, and paid media with engagement and conversion analysis.',
        },
        sites: {
          label: 'Websites & Mentorships',
          strong: 'From website to trained team.',
          body: 'Fast responsive sites — and hands-on mentorships for content and positioning.',
        },
      },
    },
    brands: {
      eyebrow: 'Ecosystem',
      title: 'Three Instagrams. One Alfa.',
      lead: 'Pick the right front — or talk to the hub and we orchestrate everything.',
      ctaStudio: 'Open Studio',
      ctaFotos: 'Open Photos',
      ctaIg: 'View on Instagram',
      followers: 'followers',
      posts: 'posts',
    },
    process: {
      eyebrow: 'Method',
      title: 'From briefing to final frame.',
      steps: [
        { n: '01', title: 'Briefing', body: 'Goals, audience, and tone of voice.' },
        { n: '02', title: 'Concept', body: 'Script, moodboard, and creative direction.' },
        { n: '03', title: 'Production', body: 'Capture, edit, and design at project pace.' },
        { n: '04', title: 'Delivery', body: 'Assets ready for social, web, and paid media.' },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Brands that trust Alfa.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s get the project moving.',
      lead: 'Send a WhatsApp with your briefing — we’ll reply with the next step.',
      primary: 'WhatsApp',
      secondary: 'Call now',
      phoneLabel: 'Phone',
    },
    studio: {
      eyebrow: 'Alfa Studio',
      titleBefore: 'Identity with ',
      titleHighlight: 'method',
      titleAfter: '.',
      subtitle:
        'Alfa’s branding and design arm. Visual identity, art direction, and assets that match video and social.',
      words: ['BRANDING', 'IDENTITY', 'ART DIRECTION', 'MOTION', 'SYSTEM'],
      sections: [
        {
          eyebrow: 'What we do',
          title: 'Design that scales with the brand.',
          body: 'From logo to full visual system: type, color, applications, and social templates.',
          items: ['Visual identity', 'Brand guidelines', 'Social assets', 'Motion / opens', 'Light packaging'],
        },
        {
          eyebrow: 'Who it’s for',
          title: 'Brands that need consistency.',
          body: 'Companies and creators who want a clear look — aligned with video production.',
        },
      ],
      igCta: 'Follow @alfaa.studio',
      back: 'Back to hub',
    },
    fotos: {
      eyebrow: 'Alfa Fotos',
      titleBefore: 'Image with ',
      titleHighlight: 'intent',
      titleAfter: '.',
      subtitle:
        'Alfa’s photography arm. Portrait, product, and coverage — same visual language as the hub and Studio.',
      words: ['PORTRAIT', 'PRODUCT', 'EVENT', 'STILL', 'EDITORIAL'],
      sections: [
        {
          eyebrow: 'What we do',
          title: 'Photography that sells and documents.',
          body: 'Commercial and editorial sessions for web, social, and campaigns — with organized delivery.',
          items: ['Product & still', 'Corporate portrait', 'Event coverage', 'Social content', 'On-set direction'],
        },
        {
          eyebrow: 'Who it’s for',
          title: 'Anyone who needs strong images.',
          body: 'Businesses and projects that want photos aligned to the brand — not just “nice shots”.',
        },
      ],
      igCta: 'Follow @alfaa_fotos',
      back: 'Back to hub',
    },
    footer: {
      columns: [
        {
          title: 'Company',
          links: [
            { label: 'Home', href: '/' },
            { label: 'Studio', href: '/studio' },
            { label: 'Photos', href: '/fotos' },
            { label: 'Contact', href: '/#contato' },
          ],
        },
        {
          title: 'Services',
          links: [
            { label: 'Video', href: '/#servicos' },
            { label: 'Branding', href: '/studio' },
            { label: 'Social Media', href: '/#servicos' },
            { label: 'Photography', href: '/fotos' },
          ],
        },
        {
          title: 'Instagram',
          links: [
            { label: '@alfaa_producoes', href: 'https://www.instagram.com/alfaa_producoes/' },
            { label: '@alfaa.studio', href: 'https://www.instagram.com/alfaa.studio/' },
            { label: '@alfaa_fotos', href: 'https://www.instagram.com/alfaa_fotos/' },
          ],
        },
        {
          title: 'Contact',
          links: [
            { label: '+55 15 99656-2261', href: 'https://wa.me/5515996562261' },
            { label: 'WhatsApp', href: 'https://wa.me/5515996562261' },
          ],
        },
      ],
      copyright: '© 2026 Alfa Produções. All rights reserved.',
      badge: 'Video · Studio · Photos',
    },
  },
}

export const clientLogos = [
  'NOVA CAFÉ',
  'URBANO FIT',
  'CASA MADRE',
  'VETTA LAW',
  'PRISMA TECH',
  'DOURO IMÓVEIS',
  'LUME BEAUTY',
  'ROTA 77',
]
