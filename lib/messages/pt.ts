import type { Messages } from "./en";

// AI-drafted Portuguese translation. Review by a native speaker recommended.
// Legal page bodies stay English (their <title>s here are left in English too).
export const pt: Messages = {
  meta: {
    title: "Greyout: deixe a tela em cinza, acabe com a distração",
    description:
      "Um app de barra de menus para macOS que deixa a tela em escala de cinza para reduzir o apelo da cor e das notificações. Regras por app, agendamentos, uma tecla.",
    privacyTitle: "Privacy — Greyout",
    termsTitle: "Terms — Greyout",
    contactTitle: "Contato · Greyout",
    contactDescription:
      "Fale sobre o Greyout: suporte, licenças Premium, erros e feedback.",
    successTitle: "Obrigado · Greyout Premium",
  },

  nav: {
    seeIt: "Como funciona",
    features: "Recursos",
    faq: "Perguntas",
    changelog: "Novidades",
  },

  hero: {
    title: "Greyout",
    tagline: "Deixe a tela em cinza. Acabe com a distração.",
    body: "A sua tela vive roubando o seu foco. O Greyout tira a cor do seu monitor para que apps chamativos e notificações parem de puxar por você. É um app de barra de menus pequeno e nativo do macOS que muda para escala de cinza automaticamente por app, conforme um agendamento ou com uma única tecla.",
    download: "Baixar para macOS",
    warn: "o macOS pode avisar ao abrir pela primeira vez",
    requirements: "Requer macOS 14+ · Apple silicon · grátis · atualiza sozinho",
    freePre: "Grátis para sempre.",
    freeLink: "Premium opcional",
    freePost: "para apoiar o desenvolvimento.",
  },

  seeIt: {
    title: "Como funciona",
    subtitle: "Veja o que ele faz em dois segundos.",
    demo: "▶ Demonstração em breve: uma tecla ativa a escala de cinza",
  },

  features: {
    items: [
      {
        title: "Regras por app",
        body: "Deixe em cinza os apps que distraem; mantenha a cor onde você precisa.",
      },
      {
        title: "Conforme um agendamento",
        body: "Vá para a escala de cinza ao anoitecer, automaticamente.",
      },
      {
        title: "Uma tecla",
        body: "Alterne pela barra de menus, ou por qualquer ferramenta com o esquema greyout://.",
      },
    ],
    integrations: [
      {
        title: "Raycast",
        body: "Alterne, ative ou desative o Greyout sem sair do Raycast.",
        status: "Em teste",
      },
      {
        title: "Linha de comando",
        body: "Controle pelo terminal: open greyout://toggle.",
        status: "Em teste",
      },
      {
        title: "Atalhos",
        body: "Controle o Greyout pelas suas automações dos Atalhos do macOS.",
        status: "Em breve",
      },
      {
        title: "Alfred",
        body: "Dispare o Greyout a partir de um fluxo do Alfred.",
        status: "Em breve",
      },
    ],
  },

  changelog: {
    title: "Novidades",
    subtitle: "O Greyout se atualiza sozinho. Veja o que mudou.",
    noReleases: "Ainda sem versões.",
    showFewer: "Mostrar menos",
    showEarlierOne: "Mostrar {count} versão anterior",
    showEarlierMany: "Mostrar {count} versões anteriores",
  },

  transparency: {
    intro:
      "O Greyout é grátis e continua grátis. Mas mantê-lo no ar custa dinheiro de verdade do meu próprio bolso, então, no espírito dos relatórios de transparência que algumas redações e grupos de pesquisa publicam, aqui estão os custos de manutenção de 2026 e exatamente para onde vai o dinheiro. (Isso não conta o tempo que dedico a construir, pesquisar e manter o app, que ofereço de graça.)",
    total: "Total de 2026",
    covered: "Coberto pelo Premium opcional",
    coveredAria: "Parcela dos custos de manutenção coberta pelo Premium",
    outro:
      "O Premium é como tento cobrir isso sem colocar o Greyout atrás de um paywall. Tudo acima dos custos de manutenção volta direto para o desenvolvimento. Vou atualizar estes números à medida que o Premium gerar receita.",
  },

  faq: {
    title: "Perguntas",
    free: {
      q: "O Greyout é grátis?",
      a: "Sim. O Greyout é grátis, sem conta e sem anúncios. Há um desbloqueio Premium opcional e de pagamento único (pague quanto quiser, a partir de 3 €) caso você queira apoiar o desenvolvimento. Veja abaixo.",
    },
    whyPay: {
      q: "Se o Greyout é grátis, por que você pede dinheiro?",
    },
    premium: {
      q: "O que o Premium desbloqueia e como funciona?",
      a1: "O Premium adiciona Exportar, Importar e Backup das suas regras e configurações. É uma compra única (pague quanto quiser, a partir de 3 €) através da ",
      polar: "Polar",
      a2: ", que atua como vendedora oficial (merchant of record) e cuida do IVA. A sua chave de licença funciona em até 3 Macs e nunca expira. Todo o resto no Greyout é grátis. Já tem uma chave? Ative-a em Greyout → Ajustes → Premium.",
      cta: "Obter Premium",
    },
    difference: {
      q: "Por que usar o Greyout em vez da escala de cinza integrada do macOS?",
      a1: "O macOS consegue ativar a escala de cinza, mas é um botão estático de tudo-ou-nada na Acessibilidade, escondido nos Ajustes do Sistema. O Greyout usa esse mesmo efeito do sistema, então deixa em cinza todos os apps e telas, mas acrescenta o controle que o torna útil no dia a dia: regras por app, agendamentos, um atalho de teclado global, um botão de alternância na barra de menus com um clique e o esquema de URL ",
      code: "greyout://",
      a2: " para automação. Ele também salva e restaura qualquer configuração de Filtros de cor que você já use.",
    },
    displays: {
      q: "O Greyout deixa em cinza todas as minhas telas, incluindo monitores externos?",
      a: "Sim. O Greyout aplica a escala de cinza a todas as telas conectadas, incluindo monitores externos, não só a tela integrada.",
    },
    performance: {
      q: "O Greyout vai deixar meu Mac lento ou gastar bateria?",
      a: "Não. O Greyout é um app de barra de menus pequeno e nativo que usa o próprio mecanismo de filtros de cor do sistema, então o efeito de escala de cinza praticamente não adiciona custo de CPU ou bateria.",
    },
    perApp: {
      q: "O Greyout pode deixar em cinza só os apps que me distraem e manter o resto colorido?",
      a: "Sim, essa é a ideia central. Defina regras por app para que os apps que distraem (ou quaisquer apps que você escolher) mudem para a escala de cinza automaticamente quando estiverem em primeiro plano, enquanto todo o resto continua colorido.",
    },
    schedule: {
      q: "Posso agendar a escala de cinza?",
      a: "Sim. Você pode fazer o Greyout mudar para a escala de cinza conforme um agendamento, por exemplo toda noite, e voltar para a cor automaticamente.",
    },
    shortcut: {
      q: "Posso alternar a escala de cinza com um atalho de teclado?",
      a: "Sim. Atribua um atalho de teclado global para ligar e desligar a escala de cinza na hora, a partir de qualquer app.",
    },
    automation: {
      q: "Posso controlar o Greyout por scripts ou outros apps?",
      a1: "Sim. O Greyout registra um esquema de URL ",
      code1: "greyout://",
      a2: ", então você pode alterná-lo pelo terminal (",
      code2: "open greyout://toggle",
      a3: "), por scripts de shell ou por ferramentas de automação. Há uma extensão do Raycast em teste, e Atalhos e Alfred estão planejados.",
    },
    transparencyData: {
      q: "Que dados o Greyout coleta?",
      a: "Nenhum. O Greyout não tem análise de uso, nem telemetria, nem rastreamento. As suas regras e configurações ficam no seu Mac. O app só acessa a rede para duas coisas: verificar atualizações e (somente se você comprar o Premium) ativar a sua licença com a Polar. É só isso.",
    },
    licenceRecovery: {
      q: "Como recupero a minha chave de licença Premium se eu perdê-la?",
      a1: "A sua chave está no e-mail de compra da Polar. Você também pode recuperá-la na ",
      polar: "Polar",
      a2: " usando o e-mail com que você comprou. Ainda travado? Escreva para ",
      a3: ".",
    },
    refund: {
      q: "Qual é a política de reembolso do Premium?",
      a1: "O Premium é vendido pela Polar, a nossa vendedora oficial, então os reembolsos seguem a política da Polar. Se algo der errado com a sua compra, fale comigo em ",
      a2: " e eu ajudo a resolver.",
    },
    commercial: {
      q: "Posso usar o Greyout e o Premium no trabalho ou para fins comerciais?",
      a: "Sim. O Greyout é grátis para qualquer uso, inclusive no trabalho. O Premium é apenas uma forma opcional de apoiar o desenvolvimento e desbloquear o backup das suas configurações; nunca é obrigatório, seja para uso comercial ou qualquer outro.",
    },
    permissions: {
      q: "De que permissões o Greyout precisa?",
      a: "Apenas Acessibilidade, que o macOS exige para o Greyout aplicar o efeito de escala de cinza em todos os seus apps. O Greyout não pede mais nada: nenhuma Gravação de tela, nada.",
    },
    requirements: {
      q: "Quais são os requisitos de sistema?",
      a: "macOS 14 (Sonoma) ou mais recente, em um Mac com Apple silicon (série M). O Greyout é feito de forma nativa para Apple silicon; Macs com Intel não são compatíveis.",
    },
    updates: {
      q: "Como funcionam as atualizações?",
      a: "O Greyout se atualiza em segundo plano com o Sparkle. Cada atualização é assinada com EdDSA e verificada antes de instalar, então você sempre recebe uma versão autêntica.",
    },
    menuBarMissing: {
      q: "O ícone da barra de menus sumiu. Como recupero?",
      a: "Quase sempre é um gerenciador da barra de menus (Bartender, Ice, o notch dos MacBooks mais novos e por aí vai) escondendo o ícone, e não o Greyout que foi encerrado. Verifique os itens ocultos do seu gerenciador da barra de menus, ou desative-o por um momento para confirmar que o Greyout ainda está em execução.",
    },
    accessibilityRegrant: {
      q: "A escala de cinza parou de funcionar ou o macOS fica pedindo Acessibilidade. Como resolvo?",
      a: "Isso costuma acontecer quando uma atualização deixa uma permissão de Acessibilidade desatualizada. Abra Ajustes do Sistema → Privacidade e Segurança → Acessibilidade, remova o Greyout da lista, adicione-o de novo e ative-o. Isso concede de novo a permissão de que o Greyout precisa para aplicar a escala de cinza.",
    },
  },

  footer: {
    privacy: "Privacidade",
    terms: "Termos",
    changelog: "Novidades",
    contact: "Contato",
    madeWith: "Feito com",
    author: "caasols",
  },

  contact: {
    heading: "Contato",
    intro:
      "O Greyout é um projeto pequeno e independente, então o e-mail é a melhor forma de falar comigo. Eu leio todas as mensagens.",
    emailHeading: "E-mail",
    emailPre: "Escreva para ",
    emailPost:
      ". Costumo responder em alguns dias úteis. Não há sistema de tickets nem chatbot. Só eu.",
    bugHeading: "Quer relatar um erro ou algo que não funciona?",
    bugIntro: "Alguns detalhes me ajudam a resolver mais rápido. Se possível, inclua:",
    bugItem1Pre: "A sua ",
    bugItem1Strong1: "versão do Greyout",
    bugItem1Mid: " (Ajustes → Sobre) e a sua ",
    bugItem1Strong2: "versão do macOS",
    bugItem1Post: ".",
    bugItem2: "O que você fez, o que esperava e o que aconteceu em vez disso.",
    bugItem3: "Uma captura de tela se for algo visual, ou os passos para reproduzir.",
    premiumHeading: "Premium e licenças",
    premiumPre:
      "A sua chave de licença Premium está no e-mail de compra da Polar, e você pode recuperá-la na ",
    premiumLink: "Polar",
    premiumPost:
      " usando o e-mail com que comprou. A Polar cuida de pagamentos, IVA e reembolsos como vendedora oficial. Se algo der errado, me escreva e eu ajudo a resolver.",
    beforeHeading: "Antes de escrever",
    beforePre:
      "Muitas dúvidas comuns (permissões, regras por app, reembolsos) são respondidas nas ",
    beforeLink: "Perguntas",
    beforePost: ".",
  },

  success: {
    heading: "Obrigado por apoiar o Greyout",
    body: "O seu pagamento foi aprovado e a sua licença Premium está a caminho. A Polar (a nossa vendedora oficial) está enviando a sua chave de licença por e-mail agora. Verifique a sua caixa de entrada, e a pasta de spam se ela não chegar em alguns minutos.",
    activateHeading: "Ative a sua licença",
    step1: "Abra o e-mail de licença da Polar e copie a sua chave.",
    step2Pre: "No Greyout, vá em ",
    step2Strong: "Ajustes → Premium",
    step2Post: ".",
    step3: "Cole a sua chave e ative. Pronto.",
    download: "Baixar para macOS",
    back: "Voltar para greyout.cc",
    troublePre: "Problemas com a chave ou não recebeu o e-mail? Fale comigo em ",
    troublePost: ".",
  },
};
