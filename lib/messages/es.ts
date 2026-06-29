import type { Messages } from "./en";

// AI-drafted Spanish translation. Review by a native speaker recommended.
// Legal page bodies stay English (their <title>s here are left in English too).
export const es: Messages = {
  meta: {
    title: "Greyout: pon tu pantalla en gris, acaba con la distracción",
    description:
      "Una app de barra de menús para macOS que pone tu pantalla en gris para reducir el tirón del color y las notificaciones. Reglas por app, horarios, una tecla.",
    privacyTitle: "Privacy — Greyout",
    termsTitle: "Terms — Greyout",
    contactTitle: "Contacto · Greyout",
    contactDescription:
      "Ponte en contacto sobre Greyout: soporte, licencias Premium, errores y comentarios.",
    successTitle: "Gracias · Greyout Premium",
  },

  nav: {
    seeIt: "Cómo funciona",
    features: "Funciones",
    faq: "Preguntas",
    changelog: "Cambios",
  },

  hero: {
    title: "Greyout",
    tagline: "Pon tu pantalla en gris. Acaba con la distracción.",
    body: "Tu pantalla no deja de robarte la concentración. Greyout le quita el color a tu pantalla para que las apps llamativas y las notificaciones dejen de tirar de ti. Es una app de barra de menús pequeña y nativa de macOS que cambia a escala de grises automáticamente por app, según un horario o con una sola tecla.",
    download: "Descargar para macOS",
    warn: "macOS puede avisarte al abrirla por primera vez",
    requirements: "Requiere macOS 14+ · Apple silicon · gratis · se actualiza solo",
    freePre: "Gratis para siempre.",
    freeLink: "Premium opcional",
    freePost: "para apoyar el desarrollo.",
  },

  seeIt: {
    title: "Cómo funciona",
    subtitle: "Mira lo que hace en dos segundos.",
    demo: "▶ Demostración pronto: una tecla activa la escala de grises",
  },

  features: {
    items: [
      {
        title: "Reglas por app",
        body: "Pon en gris las apps que distraen; deja el color donde lo necesitas.",
      },
      {
        title: "Según un horario",
        body: "Baja a escala de grises por la noche, automáticamente.",
      },
      {
        title: "Una tecla",
        body: "Cambia desde la barra de menús, o desde cualquier herramienta con el esquema greyout://.",
      },
    ],
    integrations: [
      {
        title: "Raycast",
        body: "Activa, enciende o apaga Greyout sin salir de Raycast.",
        status: "En pruebas",
      },
      {
        title: "Línea de comandos",
        body: "Contrólalo desde la terminal: open greyout://toggle.",
        status: "En pruebas",
      },
      {
        title: "Atajos",
        body: "Controla Greyout desde tus automatizaciones de Atajos de macOS.",
        status: "Pronto",
      },
      {
        title: "Alfred",
        body: "Lanza Greyout desde un flujo de Alfred.",
        status: "Pronto",
      },
    ],
  },

  changelog: {
    title: "Cambios",
    subtitle: "Greyout se actualiza solo. Esto es lo que ha cambiado.",
    noReleases: "Aún no hay versiones.",
    showFewer: "Mostrar menos",
    showEarlierOne: "Mostrar {count} versión anterior",
    showEarlierMany: "Mostrar {count} versiones anteriores",
  },

  transparency: {
    intro:
      "Greyout es gratis y seguirá siéndolo. Pero mantenerlo en marcha cuesta dinero real de mi propio bolsillo, así que, en el espíritu de los informes de transparencia que publican algunas redacciones y grupos de investigación, aquí están los costes de funcionamiento de 2026 y exactamente a dónde va el dinero. (Esto no cuenta el tiempo que dedico a construir, investigar y mantenerlo, que doy gratis.)",
    total: "Total para 2026",
    covered: "Cubierto por el Premium opcional",
    coveredAria: "Parte de los costes de funcionamiento cubierta por Premium",
    outro:
      "Premium es como intento cubrir esto sin poner Greyout tras un muro de pago. Todo lo que supere los costes de funcionamiento vuelve directamente al desarrollo. Actualizaré estas cifras a medida que Premium genere ingresos.",
  },

  faq: {
    title: "Preguntas",
    free: {
      q: "¿Greyout es gratis?",
      a: "Sí. Greyout es gratis, sin cuenta y sin anuncios. Hay una mejora Premium opcional y de pago único (paga lo que quieras, desde 3 €) por si te apetece apoyar el desarrollo. Mira más abajo.",
    },
    whyPay: {
      q: "Si Greyout es gratis, ¿por qué pides dinero?",
    },
    premium: {
      q: "¿Qué desbloquea Premium y cómo funciona?",
      a1: "Premium añade Exportar, Importar y Copia de seguridad de tus reglas y ajustes. Es una compra única (paga lo que quieras, desde 3 €) a través de ",
      polar: "Polar",
      a2: ", que actúa como comerciante registrado (merchant of record) y gestiona el IVA. Tu clave de licencia funciona en hasta 3 Mac y nunca caduca. Todo lo demás en Greyout es gratis. ¿Ya tienes una clave? Actívala en Greyout → Ajustes → Premium.",
      cta: "Obtener Premium",
    },
    difference: {
      q: "¿Por qué usar Greyout en lugar de la escala de grises integrada en macOS?",
      a1: "macOS puede activar la escala de grises, pero es un interruptor estático de todo o nada en Accesibilidad, escondido en Ajustes del Sistema. Greyout usa ese mismo efecto del sistema, así que pone en gris todas las apps y pantallas, pero añade el control que lo hace útil en el día a día: reglas por app, horarios, un atajo de teclado global, un interruptor en la barra de menús con un clic y el esquema de URL ",
      code: "greyout://",
      a2: " para automatizar. Además guarda y restaura cualquier ajuste de Filtros de color que ya uses.",
    },
    displays: {
      q: "¿Greyout pone en gris todas mis pantallas, incluidos los monitores externos?",
      a: "Sí. Greyout aplica la escala de grises a todas las pantallas conectadas, incluidos los monitores externos, no solo a la integrada.",
    },
    performance: {
      q: "¿Greyout ralentizará mi Mac o gastará batería?",
      a: "No. Greyout es una app de barra de menús pequeña y nativa que usa el propio mecanismo de filtros de color del sistema, así que el efecto de escala de grises no añade prácticamente ningún coste de CPU ni de batería.",
    },
    perApp: {
      q: "¿Greyout puede poner en gris solo mis apps que distraen y dejar el resto en color?",
      a: "Sí, esa es la idea principal. Define reglas por app para que las apps que distraen (o las que tú elijas) cambien a escala de grises automáticamente cuando estén en primer plano, mientras todo lo demás sigue en color.",
    },
    schedule: {
      q: "¿Puedo programar la escala de grises?",
      a: "Sí. Puedes hacer que Greyout cambie a escala de grises según un horario, por ejemplo cada noche, y vuelva al color automáticamente.",
    },
    shortcut: {
      q: "¿Puedo activar la escala de grises con un atajo de teclado?",
      a: "Sí. Asigna un atajo de teclado global para activar y desactivar la escala de grises al instante, desde cualquier app.",
    },
    automation: {
      q: "¿Puedo controlar Greyout desde scripts u otras apps?",
      a1: "Sí. Greyout registra un esquema de URL ",
      code1: "greyout://",
      a2: ", así que puedes activarlo desde la terminal (",
      code2: "open greyout://toggle",
      a3: "), desde scripts de shell o desde herramientas de automatización. Hay una extensión de Raycast en pruebas, y Atajos y Alfred están previstos.",
    },
    transparencyData: {
      q: "¿Qué datos recopila Greyout?",
      a: "Ninguno. Greyout no tiene analíticas, ni telemetría, ni seguimiento. Tus reglas y ajustes se quedan en tu Mac. La app solo accede a la red para dos cosas: buscar actualizaciones y (solo si compras Premium) activar tu licencia con Polar. Eso es todo.",
    },
    licenceRecovery: {
      q: "¿Cómo recupero mi clave de licencia Premium si la pierdo?",
      a1: "Tu clave está en el correo de compra de Polar. También puedes recuperarla en ",
      polar: "Polar",
      a2: " con la dirección de correo con la que compraste. ¿Sigues atascado? Escribe a ",
      a3: ".",
    },
    refund: {
      q: "¿Cuál es la política de reembolsos de Premium?",
      a1: "Premium se vende a través de Polar, nuestro comerciante registrado, así que los reembolsos se gestionan según la política de Polar. Si algo va mal con tu compra, escribe a ",
      a2: " y te ayudaré a resolverlo.",
    },
    commercial: {
      q: "¿Puedo usar Greyout y Premium en el trabajo o con fines comerciales?",
      a: "Sí. Greyout es gratis para cualquier uso, incluido el trabajo. Premium es solo una forma opcional de apoyar el desarrollo y desbloquear la copia de seguridad de tus ajustes; nunca es obligatorio, ni para uso comercial ni de ningún otro tipo.",
    },
    permissions: {
      q: "¿Qué permisos necesita Greyout?",
      a: "Solo Accesibilidad, que macOS exige para que Greyout aplique el efecto de escala de grises en todas tus apps. Greyout no pide nada más: ni Grabación de pantalla, ni nada.",
    },
    requirements: {
      q: "¿Cuáles son los requisitos del sistema?",
      a: "macOS 14 (Sonoma) o posterior, en un Mac con Apple silicon (serie M). Greyout está creado de forma nativa para Apple silicon; los Mac con Intel no son compatibles.",
    },
    updates: {
      q: "¿Cómo funcionan las actualizaciones?",
      a: "Greyout se actualiza solo en segundo plano con Sparkle. Cada actualización está firmada con EdDSA y se verifica antes de instalarse, así que siempre obtienes una versión auténtica.",
    },
    menuBarMissing: {
      q: "Mi icono de la barra de menús ha desaparecido. ¿Cómo lo recupero?",
      a: "Casi siempre es un gestor de la barra de menús (Bartender, Ice, la muesca de los MacBook más nuevos, etc.) que oculta el icono, no que Greyout se haya cerrado. Revisa los elementos ocultos de tu gestor de la barra de menús, o desactívalo un momento para confirmar que Greyout sigue funcionando.",
    },
    accessibilityRegrant: {
      q: "La escala de grises dejó de funcionar o macOS pide Accesibilidad una y otra vez. ¿Cómo lo arreglo?",
      a: "Suele pasar cuando una actualización deja un permiso de Accesibilidad obsoleto. Abre Ajustes del Sistema → Privacidad y seguridad → Accesibilidad, quita Greyout de la lista, vuelve a añadirlo y actívalo. Eso vuelve a conceder el permiso que Greyout necesita para aplicar la escala de grises.",
    },
  },

  footer: {
    privacy: "Privacidad",
    terms: "Términos",
    changelog: "Cambios",
    contact: "Contacto",
    madeWith: "Hecho con",
    author: "caasols",
  },

  contact: {
    heading: "Contacto",
    intro:
      "Greyout es un proyecto pequeño e independiente, así que el correo es la mejor forma de llegar a mí. Leo todos los mensajes.",
    emailHeading: "Correo",
    emailPre: "Escribe a ",
    emailPost:
      ". Suelo responder en un par de días laborables. No hay sistema de tickets ni chatbot. Solo yo.",
    bugHeading: "¿Informar de un error o de algo que no funciona?",
    bugIntro: "Unos pocos datos me ayudan a arreglar las cosas más rápido. Si puedes, incluye:",
    bugItem1Pre: "Tu ",
    bugItem1Strong1: "versión de Greyout",
    bugItem1Mid: " (Ajustes → Acerca de) y tu ",
    bugItem1Strong2: "versión de macOS",
    bugItem1Post: ".",
    bugItem2: "Qué hiciste, qué esperabas y qué ocurrió en su lugar.",
    bugItem3: "Una captura de pantalla si es algo visual, o los pasos para reproducirlo.",
    premiumHeading: "Premium y licencias",
    premiumPre:
      "Tu clave de licencia Premium está en el correo de compra de Polar, y puedes recuperarla en ",
    premiumLink: "Polar",
    premiumPost:
      " con el correo con el que compraste. Polar gestiona los pagos, el IVA y los reembolsos como comerciante registrado. Si algo va mal, escríbeme y te ayudo a resolverlo.",
    beforeHeading: "Antes de escribir",
    beforePre:
      "Muchas preguntas habituales (permisos, reglas por app, reembolsos) se responden en las ",
    beforeLink: "Preguntas",
    beforePost: ".",
  },

  success: {
    heading: "Gracias por apoyar Greyout",
    body: "Tu pago se ha completado y tu licencia Premium está en camino. Polar (nuestro comerciante registrado) te está enviando tu clave de licencia por correo. Revisa tu bandeja de entrada, y la carpeta de spam si no llega en unos minutos.",
    activateHeading: "Activa tu licencia",
    step1: "Abre el correo de licencia de Polar y copia tu clave.",
    step2Pre: "En Greyout, ve a ",
    step2Strong: "Ajustes → Premium",
    step2Post: ".",
    step3: "Pega tu clave y actívala. Listo.",
    download: "Descargar para macOS",
    back: "Volver a greyout.cc",
    troublePre: "¿Problemas con tu clave o no te llegó el correo? Escribe a ",
    troublePost: ".",
  },
};
