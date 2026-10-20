import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    title: "Matheus Medeiros — Frontend Engineer",
    description:
      "Desenvolvedor frontend que cria produtos rápidos e imersivos com React, Next.js e TypeScript.",
  },
  a11y: {
    skip: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    mainNav: "Principal",
    language: "Idioma",
  },
  nav: {
    work: "Trabalhos",
    experience: "Experiência",
    about: "Sobre",
    contact: "Contato",
    resume: "Currículo",
  },
  hero: {
    eyebrow: "Matheus Medeiros · Frontend Engineer",
    title: "Do primeiro clique ao negócio fechado.",
    lead: "Desenvolvo produtos rápidos e imersivos com React, Next.js e TypeScript. Projetos recentes: um condomínio de 764 casas em 360°, sem espera, e propostas que mostram ao corretor o que o comprador viu.",
    primary: "Ver meu trabalho",
    secondary: "Baixar currículo",
    availability: "Disponível para vagas remotas · Brasil (UTC-3)",
    email: "E-mail",
  },
  spin: {
    label: "Arraste para girar",
    frame: "Frame",
    valueText: "Frame {frame} de {total}",
    alt: "Casa em wireframe sobre uma base giratória",
    caption: "Uma versão em wireframe dos giros de 150 frames que desenvolvo para casas reais.",
  },
  sections: {
    work: { label: "01 — Trabalhos", title: "Trabalhos selecionados" },
    experience: { label: "02 — Experiência", title: "Experiência" },
    skills: { label: "03 — Habilidades", title: "Habilidades" },
    about: { label: "04 — Sobre", title: "Sobre" },
    contact: { label: "05 — Contato", title: "Vamos conversar" },
  },
  readCase: "Ler o case",
  cases: [
    {
      slug: "360-homes",
      number: "01",
      client: "Elephant Skin",
      title: "764 casas em 360°, sem espera",
      summary:
        "Uma apresentação interativa de um condomínio com 764 casas. O comprador explora o masterplan, abre o giro 360° de qualquer casa, com 150 frames cada, e compara casas lado a lado.",
      stats: [
        { value: "114.600", label: "imagens em uma única experiência" },
        { value: "até 40%", label: "menos tempo de carregamento" },
        { value: "até 30%", label: "mais engajamento" },
      ],
      tags: ["Web Workers", "SVG", "Performance"],
      intro:
        "Uma apresentação interativa de um condomínio com 764 casas. O comprador explora o masterplan, abre o giro 360° de qualquer casa, com 150 frames cada, e compara casas lado a lado. São 114.600 imagens em uma única experiência.",
      facts: [
        { label: "Cargo", value: "Frontend Engineer" },
        { label: "Empresa", value: "Elephant Skin" },
        { label: "Foco", value: "Performance · SVG · Web Workers" },
      ],
      media: {
        type: "placeholder",
        label: "[Gravação de tela: masterplan → giro → comparação]",
      },
      challenge: [
        "Um único giro pesa entre 55 e 60 MB, mesmo em WebP, o que soma mais de 40 GB de imagens no condomínio inteiro. Comparar duas casas significa carregar dois giros ao mesmo tempo.",
        "Baixar tudo de uma vez estava fora de questão, e carregar cada giro só ao abri-lo deixaria o comprador olhando para um loader. Cada giro precisava parecer instantâneo, e a interface tinha que continuar responsiva enquanto as imagens baixavam.",
      ],
      steps: [
        {
          title: "Masterplan interativo",
          body: "Deixei as 764 casas do masterplan clicáveis com uma camada em SVG. Clicar em uma casa abre o giro 360° dela, e um modo de comparação coloca casas diferentes lado a lado.",
        },
        {
          title: "Carregamento por prioridade",
          body: "Pré-carreguei os primeiros frames do giro no carregamento inicial do site, para que o comprador possa girar enquanto o restante ainda está chegando, sem esperar os 150.",
        },
        {
          title: "Carregamento fora da main thread",
          body: "Passei o download dos frames restantes para um Web Worker, para que ele não concorra com a renderização nem com a interação.",
        },
      ],
      results: {
        metrics: [
          { prefix: "Até", value: "40%", label: "menos tempo de carregamento" },
          { prefix: "Até", value: "30%", label: "mais engajamento dos usuários" },
        ],
        summary:
          "O comprador começa a girar qualquer casa sem esperar o giro completo de 55–60 MB, e a interface continua responsiva enquanto o restante carrega em segundo plano.",
      },
    },
    {
      slug: "proposals",
      number: "02",
      client: "Elephant Skin · BEES",
      title: "Propostas que dão retorno",
      summary:
        "O corretor monta a proposta dentro da apresentação, o comprador abre sem precisar de login, e cada visita vira um histórico fácil de ler para o corretor.",
      stats: [
        { value: "11", label: "clientes na plataforma BEES" },
        { value: "2 GB", label: "de anexos por proposta" },
      ],
      tags: ["Produto", "Rastreamento", "Contratos de API"],
      intro:
        "O BEES é a plataforma da Elephant Skin para incorporadoras, usada por 11 clientes. O comprador explora cada empreendimento numa apresentação interativa (masterplan, giros 360°, plantas, galerias), no site da incorporadora e nas telas touch do stand de vendas, enquanto os corretores gerenciam leads e vendas num CRM à parte.",
      facts: [
        { label: "Cargo", value: "Frontend Engineer" },
        { label: "Empresa", value: "Elephant Skin" },
        { label: "Plataforma", value: "BEES" },
        { label: "Foco", value: "Produto · Rastreamento · Contratos de API" },
      ],
      media: {
        type: "placeholder",
        label: "[Prints: montagem da proposta → visão do comprador → histórico de atividade]",
      },
      challenge: [
        "A venda começa na apresentação, mas a decisão acontece depois, longe do corretor. A proposta precisava virar parte do produto: o corretor monta dentro da apresentação, o comprador abre na mesma experiência, e a proposta devolve ao corretor o que o comprador realmente viu.",
        "Não dava para pedir login ao comprador, e o rastreamento não podia atrapalhar a experiência.",
      ],
      steps: [
        {
          title: "Montagem da proposta dentro da apresentação",
          body: "A partir de qualquer apartamento ou lote, o corretor define o comprador, o preço, um plano de pagamento dividido em etapas com parcelas e descontos, a data de validade e até três abas com imagens, vídeos e PDFs (2 GB por proposta, com progresso de upload).",
        },
        {
          title: "Um link que abre a experiência",
          body: "O comprador chega direto na própria unidade: apartamentos abrem no giro 360°, e lotes, no masterplan. Links abertos na rota errada se redirecionam sozinhos, e propostas vencidas têm uma tela própria.",
        },
        {
          title: "Rastreamento que nunca atrapalha",
          body: "Um único listener de clique na raiz da proposta descreve o que foi clicado, do `data-track` e do `aria-label` até o nome do arquivo da imagem, então botões novos são rastreados sem código extra. Cliques duplos viram um só, recarregar a página em menos de 30 minutos não conta como nova abertura e os eventos saem em ordem, por uma fila. Falhas são engolidas: perder um evento é melhor do que uma proposta que não abre.",
        },
        {
          title: "Um histórico que o corretor consegue ler",
          body: "Os eventos brutos viram visitas, e cada visita é uma árvore de seção → álbum → imagem com contagem de repetições, além de sinais como “pediu para falar no WhatsApp” e as seções mais vistas. O mesmo parser roda na apresentação e no CRM, então os dois contam a mesma história. As edições têm um histórico próprio, agrupado por pessoa e resumido (“+3 arquivos · 1 aba nova · reordenado”).",
        },
        {
          title: "Contratos à prova de falhas",
          body: "Escrevi os contratos de API e fiz parte das mudanças no PHP. Uma edição que não menciona anexos nunca mexe neles, arquivos só são apagados por ID explícito e saem do storage antes das linhas do banco, então nada fica órfão.",
        },
      ],
      results: {
        highlights: [
          "O corretor vê quando cada proposta foi aberta, quantas vezes e o que o comprador olhou, tanto na apresentação quanto no CRM.",
          "Para o comprador, nada muda: sem login, sem espera e sem risco de a proposta não abrir.",
        ],
      },
    },
  ],
  experience: [
    {
      period: "dez 2023 – atual",
      org: "Elephant Skin",
      detail: "Frontend Engineer · Miami, FL (remoto)",
      text: "Lidero o desenvolvimento frontend de plataformas imobiliárias, entre elas o BEES, usado por 11 clientes: apresentações interativas com masterplans e giros 360°, e as ferramentas de proposta e de leads que os corretores usam para vender.",
    },
    {
      period: "out 2021 – nov 2023",
      org: "Luby",
      detail: "Frontend Developer · São Paulo (remoto)",
      text: "Desenvolvi aplicações em React e Next.js para plataformas de vários clientes, reduzi o tempo de carregamento em até 35% e os atrasos em processos internos em até 30%, e orientei desenvolvedores júnior.",
    },
    {
      period: "2020 – 2023",
      org: "Universidade Paulista (UNIP)",
      text: "Bacharelado em Ciência da Computação.",
    },
  ],
  skills: [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML e CSS"] },
    {
      name: "Interfaces",
      items: ["Styled Components", "Tailwind CSS", "Canvas", "SVG", "Google Maps API", "Acessibilidade"],
    },
    {
      name: "Performance",
      items: ["Code splitting", "Lazy loading", "Web Workers", "Pré-carregamento de imagens"],
    },
    { name: "Fluxo de trabalho", items: ["APIs REST", "Jest", "Git e GitHub", "Claude Code", "Cursor"] },
  ],
  about: [
    "Sou desenvolvedor frontend em Guarujá (SP), com mais de 5 anos desenvolvendo para a web e formação em Ciência da Computação. Na Elephant Skin, construo as apresentações interativas e as ferramentas de venda do BEES, uma plataforma do mercado imobiliário. Antes, passei dois anos na Luby entregando aplicações em React e Next.js para diferentes clientes e orientando desenvolvedores júnior.",
    "Gosto de fazer interfaces pesadas e complexas parecerem simples, como um giro 360° que responde no instante em que você toca nele. Trabalho lado a lado com designers, desenvolvedores backend e product managers, e incorporo ferramentas de IA, como o Claude Code, ao meu fluxo de trabalho para ganhar velocidade e produtividade.",
  ],
  contact: {
    label: "Contato",
    text: "Estou aberto a vagas remotas de frontend, em tempo integral ou por contrato. Me mande um e-mail ou uma mensagem no LinkedIn.",
    location: "Guarujá, Brasil · UTC-3",
    resume: "Baixar currículo (PDF)",
  },
  casePage: {
    back: "Todos os trabalhos",
    media: "Mídia do projeto",
    challenge: "O desafio",
    steps: "O que eu fiz",
    results: "Resultados",
    next: "Próximo case",
    previous: "Case anterior",
  },
  footer: { backToTop: "Voltar ao topo" },
  notFound: {
    title: "Página não encontrada",
    text: "Esta página não existe ou mudou de endereço.",
    cta: "Voltar para o início",
  },
};
