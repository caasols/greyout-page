import type { Messages } from "./en";

// AI-drafted German translation. Review by a native speaker recommended.
// Legal page bodies stay English (their <title>s here are left in English too).
export const de: Messages = {
  meta: {
    title: "Greyout: Bildschirm ausgrauen, Ablenkung ausschalten",
    description:
      "Eine macOS-Menüleisten-App, die deinen Bildschirm ausgraut, um den Sog von Farben und Benachrichtigungen zu verringern. Pro-App-Regeln, Zeitpläne, ein Tastendruck.",
    privacyTitle: "Privacy — Greyout",
    termsTitle: "Terms — Greyout",
    contactTitle: "Kontakt · Greyout",
    contactDescription:
      "Kontakt zu Greyout: Support, Premium-Lizenzen, Fehler und Feedback.",
    successTitle: "Danke · Greyout Premium",
  },

  nav: {
    seeIt: "So funktioniert's",
    features: "Funktionen",
    faq: "FAQ",
    changelog: "Changelog",
  },

  hero: {
    title: "Greyout",
    tagline: "Mach deinen Bildschirm grau. Schluss mit Ablenkung.",
    body: "Dein Bildschirm stiehlt dir ständig die Aufmerksamkeit. Greyout entzieht deinem Display die Farbe, damit grelle Apps und Benachrichtigungen nicht mehr an dir ziehen. Es ist eine kleine, native macOS-Menüleisten-App, die automatisch pro App, nach Zeitplan oder mit einem Tastendruck in Graustufen wechselt.",
    download: "Für macOS herunterladen",
    warn: "macOS warnt beim ersten Öffnen möglicherweise",
    requirements: "Erfordert macOS 14+ · Apple Silicon · kostenlos · selbstaktualisierend",
    freePre: "Für immer kostenlos.",
    freeLink: "Optionales Premium",
    freePost: "zur Unterstützung der Entwicklung.",
  },

  seeIt: {
    title: "So funktioniert's",
    subtitle: "Sieh in zwei Sekunden, was es tut.",
    demo: "▶ Demo folgt bald: ein Tastendruck schaltet Graustufen um",
  },

  features: {
    items: [
      {
        title: "Pro-App-Regeln",
        body: "Lenkende Apps automatisch ausgrauen; Farbe behalten, wo du sie brauchst.",
      },
      {
        title: "Nach Zeitplan",
        body: "Abends automatisch in Graustufen herunterfahren.",
      },
      {
        title: "Ein Tastendruck",
        body: "Über die Menüleiste umschalten oder per greyout://-Schema aus jedem Tool.",
      },
    ],
    integrations: [
      {
        title: "Raycast",
        body: "In Raycast umschalten, aktivieren oder deaktivieren, ohne Raycast zu verlassen.",
        status: "Im Test",
      },
      {
        title: "Kommandozeile",
        body: "Per Terminal skripten: open greyout://toggle.",
        status: "Im Test",
      },
      {
        title: "Kurzbefehle",
        body: "Steuere Greyout aus deinen macOS-Kurzbefehlen.",
        status: "Bald",
      },
      {
        title: "Alfred",
        body: "Greyout aus einem Alfred-Workflow auslösen.",
        status: "Bald",
      },
    ],
  },

  changelog: {
    title: "Changelog",
    subtitle: "Greyout aktualisiert sich automatisch. Das hat sich geändert.",
    noReleases: "Noch keine Releases.",
    showFewer: "Weniger anzeigen",
    showEarlierOne: "{count} früheres Release anzeigen",
    showEarlierMany: "{count} frühere Releases anzeigen",
  },

  transparency: {
    intro:
      "Greyout ist kostenlos und bleibt kostenlos. Aber der Betrieb kostet trotzdem echtes Geld aus meiner eigenen Tasche. Im Sinne der Transparenzberichte, die manche Redaktionen und Forschungsgruppen veröffentlichen, hier die laufenden Kosten für 2026 und wohin das Geld genau geht. (Die Zeit, die ich ins Bauen, Recherchieren und Pflegen stecke, ist nicht eingerechnet; die gebe ich kostenlos.)",
    total: "Gesamt für 2026",
    covered: "Durch optionales Premium gedeckt",
    coveredAria: "Anteil der laufenden Kosten, der durch Premium gedeckt ist",
    outro:
      "Mit Premium versuche ich, das zu decken, ohne Greyout hinter eine Bezahlschranke zu stellen. Alles über den laufenden Kosten fließt direkt zurück in die Entwicklung. Ich aktualisiere diese Zahlen, sobald Premium Einnahmen bringt.",
  },

  faq: {
    title: "Fragen",
    free: {
      q: "Ist Greyout kostenlos?",
      a: "Ja. Greyout ist kostenlos, ohne Konto und ohne Werbung. Es gibt ein optionales einmaliges Premium (zahl, was du willst, ab 3 €), falls du die Entwicklung unterstützen möchtest. Siehe unten.",
    },
    whyPay: {
      q: "Wenn Greyout kostenlos ist, warum bittest du um Geld?",
    },
    premium: {
      q: "Was schaltet Premium frei und wie funktioniert es?",
      a1: "Premium fügt Export, Import und Backup deiner Regeln und Einstellungen hinzu. Es ist ein einmaliger Kauf (zahl, was du willst, ab 3 €) über ",
      polar: "Polar",
      a2: ", das als Verkäufer (Merchant of Record) auftritt und die Mehrwertsteuer übernimmt. Dein Lizenzschlüssel funktioniert auf bis zu 3 Macs und läuft nie ab. Alles andere in Greyout ist kostenlos. Hast du schon einen Schlüssel? Aktiviere ihn in Greyout → Einstellungen → Premium.",
      cta: "Premium holen",
    },
    difference: {
      q: "Warum Greyout statt der in macOS integrierten Graustufen nutzen?",
      a1: "macOS kann Graustufen aktivieren, aber das ist ein statischer Alles-oder-nichts-Schalter in den Bedienungshilfen, tief in den Systemeinstellungen. Greyout nutzt denselben System-Effekt, graut also jede App und jedes Display aus, ergänzt ihn aber um die Steuerung, die ihn im Alltag nutzbar macht: Pro-App-Regeln, Zeitpläne, ein globales Tastenkürzel, einen Umschalter in der Menüleiste mit einem Klick und das ",
      code: "greyout://",
      a2: "-URL-Schema für Automatisierung. Außerdem speichert und stellt es alle bereits genutzten Farbfilter-Einstellungen wieder her.",
    },
    displays: {
      q: "Graut Greyout alle meine Displays aus, auch externe Monitore?",
      a: "Ja. Greyout wendet Graustufen auf jedes angeschlossene Display an, auch auf externe Monitore, nicht nur auf den eingebauten Bildschirm.",
    },
    performance: {
      q: "Verlangsamt Greyout meinen Mac oder verbraucht es Akku?",
      a: "Nein. Greyout ist eine kleine, native Menüleisten-App, die den systemeigenen Farbfilter-Mechanismus nutzt. Der Graustufen-Effekt verursacht daher praktisch keine CPU- oder Akkukosten.",
    },
    perApp: {
      q: "Kann Greyout nur meine ablenkenden Apps ausgrauen und den Rest in Farbe lassen?",
      a: "Ja, das ist die Grundidee. Lege Pro-App-Regeln fest, sodass ablenkende Apps (oder beliebige Apps deiner Wahl) automatisch in Graustufen wechseln, wenn sie im Vordergrund sind, während alles andere farbig bleibt.",
    },
    schedule: {
      q: "Kann ich Graustufen planen?",
      a: "Ja. Du kannst Greyout nach einem Zeitplan in Graustufen wechseln lassen, zum Beispiel jeden Abend, und automatisch wieder zu Farbe zurück.",
    },
    shortcut: {
      q: "Kann ich Graustufen per Tastenkürzel umschalten?",
      a: "Ja. Weise ein globales Tastenkürzel zu, um Graustufen sofort aus jeder App ein- und auszuschalten.",
    },
    automation: {
      q: "Kann ich Greyout aus Skripten oder anderen Apps steuern?",
      a1: "Ja. Greyout registriert ein ",
      code1: "greyout://",
      a2: "-URL-Schema, sodass du es aus dem Terminal (",
      code2: "open greyout://toggle",
      a3: "), aus Shell-Skripten oder Automatisierungstools umschalten kannst. Eine Raycast-Erweiterung ist im Test, Kurzbefehle und Alfred sind geplant.",
    },
    transparencyData: {
      q: "Welche Daten erfasst Greyout?",
      a: "Keine. Greyout hat keine Analyse, keine Telemetrie und kein Tracking. Deine Regeln und Einstellungen bleiben auf deinem Mac. Die App greift nur für zwei Dinge auf das Netzwerk zu: um nach Updates zu suchen und (nur wenn du Premium kaufst) um deine Lizenz bei Polar zu aktivieren. Das war's.",
    },
    licenceRecovery: {
      q: "Wie stelle ich meinen Premium-Lizenzschlüssel wieder her, wenn ich ihn verliere?",
      a1: "Dein Schlüssel steht in deiner Kauf-E-Mail von Polar. Du kannst ihn auch bei ",
      polar: "Polar",
      a2: " mit der E-Mail-Adresse abrufen, mit der du gekauft hast. Kommst du nicht weiter? Schreib an ",
      a3: ".",
    },
    refund: {
      q: "Wie ist die Rückerstattungsrichtlinie für Premium?",
      a1: "Premium wird über Polar verkauft, unseren Verkäufer (Merchant of Record); Rückerstattungen erfolgen daher nach den Richtlinien von Polar. Wenn mit deinem Kauf etwas nicht stimmt, melde dich unter ",
      a2: " und wir bringen das in Ordnung.",
    },
    commercial: {
      q: "Kann ich Greyout und Premium bei der Arbeit oder kommerziell nutzen?",
      a: "Ja. Greyout ist für jede Nutzung kostenlos, auch bei der Arbeit. Premium ist rein eine optionale Möglichkeit, die Entwicklung zu unterstützen und das Backup deiner Einstellungen freizuschalten; es ist nie erforderlich, weder kommerziell noch sonst.",
    },
    permissions: {
      q: "Welche Berechtigungen benötigt Greyout?",
      a: "Nur die Bedienungshilfen, die macOS benötigt, damit Greyout den Graustufen-Effekt auf alle deine Apps anwenden kann. Greyout verlangt nichts weiter: keine Bildschirmaufnahme, nichts.",
    },
    requirements: {
      q: "Was sind die Systemanforderungen?",
      a: "macOS 14 (Sonoma) oder neuer, auf einem Mac mit Apple Silicon (M-Serie). Greyout ist nativ für Apple Silicon gebaut; Intel-Macs werden nicht unterstützt.",
    },
    updates: {
      q: "Wie funktionieren Updates?",
      a: "Greyout aktualisiert sich im Hintergrund mit Sparkle. Jedes Update ist EdDSA-signiert und wird vor der Installation überprüft, sodass du immer einen authentischen Build erhältst.",
    },
    menuBarMissing: {
      q: "Mein Menüleisten-Symbol ist verschwunden. Wie hole ich es zurück?",
      a: "Fast immer versteckt ein Menüleisten-Manager (Bartender, Ice, die Notch neuerer MacBooks und so weiter) das Symbol, statt dass Greyout beendet wurde. Sieh in den ausgeblendeten Objekten deines Menüleisten-Managers nach oder deaktiviere ihn vorübergehend, um zu prüfen, ob Greyout noch läuft.",
    },
    accessibilityRegrant: {
      q: "Graustufen funktionieren nicht mehr oder macOS fragt ständig nach den Bedienungshilfen. Wie behebe ich das?",
      a: "Das passiert meist, wenn ein Update eine veraltete Berechtigung für die Bedienungshilfen hinterlässt. Öffne Systemeinstellungen → Datenschutz & Sicherheit → Bedienungshilfen, entferne Greyout aus der Liste, füge es dann wieder hinzu und schalte es ein. Damit wird die Berechtigung neu erteilt, die Greyout zum Anwenden von Graustufen benötigt.",
    },
  },

  footer: {
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    changelog: "Changelog",
    contact: "Kontakt",
    madeWith: "Gemacht mit",
    author: "caasols",
  },

  contact: {
    heading: "Kontakt",
    intro:
      "Greyout ist ein kleines, unabhängiges Projekt, daher erreichst du mich am besten per E-Mail. Ich lese jede Nachricht.",
    emailHeading: "E-Mail",
    emailPre: "Schreib an ",
    emailPost:
      ". Ich antworte normalerweise innerhalb von ein paar Werktagen. Es gibt kein Ticketsystem und keinen Chatbot. Nur mich.",
    bugHeading: "Einen Fehler oder etwas, das nicht funktioniert, melden?",
    bugIntro: "Ein paar Angaben helfen mir, Dinge schneller zu beheben. Gib, wenn möglich, an:",
    bugItem1Pre: "Deine ",
    bugItem1Strong1: "Greyout-Version",
    bugItem1Mid: " (Einstellungen → Über) und deine ",
    bugItem1Strong2: "macOS-Version",
    bugItem1Post: ".",
    bugItem2: "Was du getan hast, was du erwartet hast und was stattdessen passiert ist.",
    bugItem3: "Einen Screenshot, falls es etwas Visuelles ist, oder die Schritte zum Nachstellen.",
    premiumHeading: "Premium & Lizenzen",
    premiumPre:
      "Dein Premium-Lizenzschlüssel steht in deiner Kauf-E-Mail von Polar, und du kannst ihn bei ",
    premiumLink: "Polar",
    premiumPost:
      " mit der E-Mail abrufen, mit der du gekauft hast. Polar wickelt Zahlungen, Mehrwertsteuer und Rückerstattungen als Verkäufer ab. Falls etwas schiefgeht, schreib mir und ich bringe es in Ordnung.",
    beforeHeading: "Bevor du schreibst",
    beforePre:
      "Viele häufige Fragen (Berechtigungen, Pro-App-Regeln, Rückerstattungen) werden in den ",
    beforeLink: "FAQ",
    beforePost: " beantwortet.",
  },

  success: {
    heading: "Danke, dass du Greyout unterstützt",
    body: "Deine Zahlung war erfolgreich und deine Premium-Lizenz ist unterwegs. Polar (unser Verkäufer, Merchant of Record) sendet dir gerade deinen Lizenzschlüssel per E-Mail. Sieh in deinem Posteingang nach, und im Spam-Ordner, falls er nicht in ein paar Minuten ankommt.",
    activateHeading: "Lizenz aktivieren",
    step1: "Öffne die Lizenz-E-Mail von Polar und kopiere deinen Schlüssel.",
    step2Pre: "Geh in Greyout zu ",
    step2Strong: "Einstellungen → Premium",
    step2Post: ".",
    step3: "Füge deinen Schlüssel ein und aktiviere. Fertig.",
    download: "Für macOS herunterladen",
    back: "Zurück zu greyout.cc",
    troublePre: "Probleme mit deinem Schlüssel oder keine E-Mail erhalten? Melde dich unter ",
    troublePost: ".",
  },
};
