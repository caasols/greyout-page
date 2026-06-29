import type { Messages } from "./en";

// AI-drafted Italian translation. Review by a native speaker recommended.
// Legal page bodies stay English (their <title>s here are left in English too).
export const it: Messages = {
  meta: {
    title: "Greyout: metti lo schermo in grigio, elimina le distrazioni",
    description:
      "Un'app per la barra dei menu di macOS che mette lo schermo in scala di grigi per ridurre il richiamo del colore e delle notifiche. Regole per app, pianificazioni, un tasto.",
    privacyTitle: "Privacy — Greyout",
    termsTitle: "Terms — Greyout",
    contactTitle: "Contatti · Greyout",
    contactDescription:
      "Contatta Greyout: assistenza, licenze Premium, bug e feedback.",
    successTitle: "Grazie · Greyout Premium",
  },

  nav: {
    seeIt: "Come funziona",
    features: "Funzioni",
    faq: "FAQ",
    changelog: "Novità",
  },

  hero: {
    title: "Greyout",
    tagline: "Metti lo schermo in grigio. Elimina le distrazioni.",
    body: "Il tuo schermo continua a rubarti la concentrazione. Greyout toglie il colore al display così le app vivaci e le notifiche smettono di attirarti. È una piccola app nativa per la barra dei menu di macOS che passa alla scala di grigi automaticamente per app, in base a una pianificazione o con un solo tasto.",
    download: "Scarica per macOS",
    warn: "macOS potrebbe avvisarti alla prima apertura",
    requirements: "Richiede macOS 14+ · Apple silicon · gratis · si aggiorna da solo",
    freePre: "Gratis per sempre.",
    freeLink: "Premium opzionale",
    freePost: "per sostenere lo sviluppo.",
  },

  seeIt: {
    title: "Come funziona",
    subtitle: "Guarda cosa fa in due secondi.",
    demo: "▶ Demo in arrivo: un tasto attiva la scala di grigi",
  },

  features: {
    items: [
      {
        title: "Regole per app",
        body: "Metti in grigio le app che distraggono; tieni il colore dove ti serve.",
      },
      {
        title: "In base a una pianificazione",
        body: "Passa alla scala di grigi verso sera, automaticamente.",
      },
      {
        title: "Un tasto",
        body: "Attivalo dalla barra dei menu, o da qualsiasi strumento con lo schema greyout://.",
      },
    ],
    integrations: [
      {
        title: "Raycast",
        body: "Attiva, accendi o spegni Greyout senza uscire da Raycast.",
        status: "In prova",
      },
      {
        title: "Riga di comando",
        body: "Controllalo dal terminale: open greyout://toggle.",
        status: "In prova",
      },
      {
        title: "Comandi rapidi",
        body: "Controlla Greyout dalle tue automazioni dei Comandi rapidi di macOS.",
        status: "Presto",
      },
      {
        title: "Alfred",
        body: "Avvia Greyout da un workflow di Alfred.",
        status: "Presto",
      },
    ],
  },

  changelog: {
    title: "Novità",
    subtitle: "Greyout si aggiorna da solo. Ecco cosa è cambiato.",
    noReleases: "Ancora nessuna versione.",
    showFewer: "Mostra meno",
    showEarlierOne: "Mostra {count} versione precedente",
    showEarlierMany: "Mostra {count} versioni precedenti",
  },

  transparency: {
    intro:
      "Greyout è gratis e resta gratis. Ma mantenerlo attivo costa comunque denaro vero di tasca mia, quindi, nello spirito dei report di trasparenza che pubblicano alcune redazioni e gruppi di ricerca, ecco i costi di gestione per il 2026 e dove va esattamente il denaro. (Non è conteggiato il tempo che dedico a costruirlo, studiarlo e mantenerlo, che offro gratis.)",
    total: "Totale per il 2026",
    covered: "Coperto dal Premium opzionale",
    coveredAria: "Quota dei costi di gestione coperta da Premium",
    outro:
      "Premium è il modo in cui cerco di coprire tutto questo senza mettere Greyout dietro un paywall. Tutto ciò che supera i costi di gestione torna direttamente nello sviluppo. Aggiornerò questi numeri man mano che Premium genera entrate.",
  },

  faq: {
    title: "Domande",
    free: {
      q: "Greyout è gratis?",
      a: "Sì. Greyout è gratis, senza account e senza pubblicità. C'è uno sblocco Premium opzionale e con pagamento unico (paghi quanto vuoi, da 3 €) se ti va di sostenere lo sviluppo. Vedi sotto.",
    },
    whyPay: {
      q: "Se Greyout è gratis, perché chiedi soldi?",
    },
    premium: {
      q: "Cosa sblocca Premium e come funziona?",
      a1: "Premium aggiunge Esporta, Importa e Backup delle tue regole e impostazioni. È un acquisto unico (paghi quanto vuoi, da 3 €) tramite ",
      polar: "Polar",
      a2: ", che agisce come venditore registrato (merchant of record) e gestisce l'IVA. La tua chiave di licenza funziona su un massimo di 3 Mac e non scade mai. Tutto il resto in Greyout è gratis. Hai già una chiave? Attivala in Greyout → Impostazioni → Premium.",
      cta: "Ottieni Premium",
    },
    difference: {
      q: "Perché usare Greyout invece della scala di grigi integrata in macOS?",
      a1: "macOS può attivare la scala di grigi, ma è un interruttore statico tutto-o-niente in Accessibilità, nascosto in Impostazioni di Sistema. Greyout usa lo stesso effetto di sistema, quindi mette in grigio ogni app e ogni display, ma aggiunge il controllo che lo rende utile ogni giorno: regole per app, pianificazioni, una scorciatoia da tastiera globale, un interruttore nella barra dei menu con un clic e lo schema URL ",
      code: "greyout://",
      a2: " per l'automazione. Inoltre salva e ripristina qualsiasi impostazione dei Filtri colore che già usi.",
    },
    displays: {
      q: "Greyout mette in grigio tutti i miei display, compresi i monitor esterni?",
      a: "Sì. Greyout applica la scala di grigi a ogni display collegato, compresi i monitor esterni, non solo a quello integrato.",
    },
    performance: {
      q: "Greyout rallenta il Mac o consuma batteria?",
      a: "No. Greyout è una piccola app nativa per la barra dei menu che usa il meccanismo dei filtri colore del sistema, quindi l'effetto scala di grigi non aggiunge praticamente alcun costo di CPU o batteria.",
    },
    perApp: {
      q: "Greyout può mettere in grigio solo le app che mi distraggono e lasciare il resto a colori?",
      a: "Sì, è l'idea di base. Imposta regole per app così che le app che distraggono (o quelle che scegli tu) passino automaticamente alla scala di grigi quando sono in primo piano, mentre tutto il resto resta a colori.",
    },
    schedule: {
      q: "Posso pianificare la scala di grigi?",
      a: "Sì. Puoi far passare Greyout alla scala di grigi in base a una pianificazione, per esempio ogni sera, e tornare a colori automaticamente.",
    },
    shortcut: {
      q: "Posso attivare la scala di grigi con una scorciatoia da tastiera?",
      a: "Sì. Assegna una scorciatoia da tastiera globale per attivare e disattivare la scala di grigi all'istante, da qualsiasi app.",
    },
    automation: {
      q: "Posso controllare Greyout da script o altre app?",
      a1: "Sì. Greyout registra uno schema URL ",
      code1: "greyout://",
      a2: ", così puoi attivarlo dal Terminale (",
      code2: "open greyout://toggle",
      a3: "), da script di shell o da strumenti di automazione. Un'estensione per Raycast è in prova, mentre Comandi rapidi e Alfred sono in programma.",
    },
    transparencyData: {
      q: "Quali dati raccoglie Greyout?",
      a: "Nessuno. Greyout non ha analitiche, né telemetria, né tracciamento. Le tue regole e impostazioni restano sul tuo Mac. L'app si collega alla rete solo per due cose: cercare aggiornamenti e (solo se acquisti Premium) attivare la tua licenza con Polar. Tutto qui.",
    },
    licenceRecovery: {
      q: "Come recupero la chiave di licenza Premium se la perdo?",
      a1: "La tua chiave è nell'email di acquisto di Polar. Puoi anche recuperarla su ",
      polar: "Polar",
      a2: " usando l'indirizzo email con cui hai acquistato. Sei ancora bloccato? Scrivi a ",
      a3: ".",
    },
    refund: {
      q: "Qual è la politica di rimborso per Premium?",
      a1: "Premium è venduto tramite Polar, il nostro venditore registrato, quindi i rimborsi seguono la politica di Polar. Se qualcosa non va con il tuo acquisto, contattami a ",
      a2: " e ti aiuto a sistemarlo.",
    },
    commercial: {
      q: "Posso usare Greyout e Premium al lavoro o per scopi commerciali?",
      a: "Sì. Greyout è gratis per qualsiasi uso, compreso il lavoro. Premium è solo un modo opzionale di sostenere lo sviluppo e sbloccare il backup delle tue impostazioni; non è mai obbligatorio, né per uso commerciale né altro.",
    },
    permissions: {
      q: "Quali autorizzazioni richiede Greyout?",
      a: "Solo l'Accessibilità, che macOS richiede affinché Greyout applichi l'effetto scala di grigi a tutte le tue app. Greyout non chiede nient'altro: nessuna Registrazione schermo, niente.",
    },
    requirements: {
      q: "Quali sono i requisiti di sistema?",
      a: "macOS 14 (Sonoma) o successivo, su un Mac con Apple silicon (serie M). Greyout è creato in modo nativo per Apple silicon; i Mac Intel non sono supportati.",
    },
    updates: {
      q: "Come funzionano gli aggiornamenti?",
      a: "Greyout si aggiorna in background con Sparkle. Ogni aggiornamento è firmato con EdDSA e verificato prima dell'installazione, così ottieni sempre una build autentica.",
    },
    menuBarMissing: {
      q: "L'icona nella barra dei menu è sparita. Come la recupero?",
      a: "Quasi sempre è un gestore della barra dei menu (Bartender, Ice, il notch dei MacBook più recenti e così via) che nasconde l'icona, non Greyout che si è chiuso. Controlla gli elementi nascosti del tuo gestore della barra dei menu, o disattivalo per un momento per verificare che Greyout sia ancora in esecuzione.",
    },
    accessibilityRegrant: {
      q: "La scala di grigi ha smesso di funzionare o macOS chiede di continuo l'Accessibilità. Come lo risolvo?",
      a: "Di solito succede quando un aggiornamento lascia un'autorizzazione di Accessibilità obsoleta. Apri Impostazioni di Sistema → Privacy e sicurezza → Accessibilità, rimuovi Greyout dall'elenco, poi riaggiungilo e attivalo. Così viene riconcessa l'autorizzazione che serve a Greyout per applicare la scala di grigi.",
    },
  },

  footer: {
    privacy: "Privacy",
    terms: "Termini",
    changelog: "Novità",
    contact: "Contatti",
    madeWith: "Fatto con",
    author: "caasols",
  },

  contact: {
    heading: "Contatti",
    intro:
      "Greyout è un piccolo progetto indipendente, quindi l'email è il modo migliore per raggiungermi. Leggo ogni messaggio.",
    emailHeading: "Email",
    emailPre: "Scrivi a ",
    emailPost:
      ". Di solito rispondo entro un paio di giorni lavorativi. Non c'è un sistema di ticket né un chatbot. Solo io.",
    bugHeading: "Vuoi segnalare un bug o qualcosa che non funziona?",
    bugIntro: "Qualche dettaglio mi aiuta a sistemare le cose più in fretta. Se puoi, includi:",
    bugItem1Pre: "La tua ",
    bugItem1Strong1: "versione di Greyout",
    bugItem1Mid: " (Impostazioni → Info) e la tua ",
    bugItem1Strong2: "versione di macOS",
    bugItem1Post: ".",
    bugItem2: "Cosa hai fatto, cosa ti aspettavi e cosa è successo invece.",
    bugItem3: "Uno screenshot se è qualcosa di visivo, o i passaggi per riprodurlo.",
    premiumHeading: "Premium e licenze",
    premiumPre:
      "La tua chiave di licenza Premium è nell'email di acquisto di Polar, e puoi recuperarla su ",
    premiumLink: "Polar",
    premiumPost:
      " usando l'email con cui hai acquistato. Polar gestisce pagamenti, IVA e rimborsi come venditore registrato. Se qualcosa va storto, scrivimi e ti aiuto a sistemarlo.",
    beforeHeading: "Prima di scrivere",
    beforePre:
      "Molte domande comuni (autorizzazioni, regole per app, rimborsi) trovano risposta nelle ",
    beforeLink: "Domande",
    beforePost: ".",
  },

  success: {
    heading: "Grazie per sostenere Greyout",
    body: "Il pagamento è andato a buon fine e la tua licenza Premium è in arrivo. Polar (il nostro venditore registrato) ti sta inviando la chiave di licenza per email. Controlla la posta in arrivo, e la cartella spam se non arriva entro pochi minuti.",
    activateHeading: "Attiva la tua licenza",
    step1: "Apri l'email della licenza di Polar e copia la tua chiave.",
    step2Pre: "In Greyout, vai su ",
    step2Strong: "Impostazioni → Premium",
    step2Post: ".",
    step3: "Incolla la tua chiave e attivala. Fatto.",
    download: "Scarica per macOS",
    back: "Torna a greyout.cc",
    troublePre: "Problemi con la chiave o non hai ricevuto l'email? Contattami a ",
    troublePost: ".",
  },
};
