// Single source of truth for user-facing copy (English).
//
// To localize: copy this file to another locale (e.g. `es.ts`) with the SAME
// shape, translate the values, and swap which one the app imports. Keep markup
// out of here — strings only. Where a link or <code> sits mid-sentence, the
// string is split into segments (pre / linkText / post) so the component can
// wrap the markup around them.
//
// Not yet extracted (kept inline, lower localization priority): the legal page
// bodies in app/privacy and app/terms. Their <title>s live under `meta` below.
// The cost rows for the transparency report live in lib/site.ts (RUNNING_COSTS),
// next to their amounts.

export const en = {
  meta: {
    title: "Greyout: grey out your screen, kill the distraction",
    description:
      "A macOS menu-bar app that greys out your screen to reduce the pull of colour and notifications. Per-app rules, schedules, one keypress.",
    privacyTitle: "Privacy — Greyout",
    termsTitle: "Terms — Greyout",
    contactTitle: "Contact · Greyout",
    contactDescription:
      "Get in touch about Greyout: support, Premium licences, bugs, and feedback.",
    successTitle: "Thank you · Greyout Premium",
  },

  nav: {
    seeIt: "How it works",
    features: "Features",
    faq: "FAQ",
    changelog: "Changelog",
  },

  hero: {
    title: "Greyout",
    tagline: "Grey out your screen. Kill the distraction.",
    body: "Your screen keeps stealing your focus. Greyout drains the colour from your display so bright apps and notifications stop pulling at you. It's a tiny, native macOS menu-bar app that switches to greyscale automatically per app, on a schedule, or with one keypress.",
    download: "Download for macOS",
    warn: "macOS may warn on first open",
    requirements: "Requires macOS 14+ · Apple silicon · free · self-updating",
    freePre: "Free forever.",
    freeLink: "Optional Premium",
    freePost: "to support development.",
  },

  seeIt: {
    title: "How it works",
    subtitle: "See what it does in two seconds.",
    demo: "▶ Demo coming soon: one keypress toggles greyscale",
  },

  features: {
    items: [
      {
        title: "Per-app rules",
        body: "Auto-grey distracting apps; keep colour where you need it.",
      },
      {
        title: "On a schedule",
        body: "Wind down into greyscale toward the evening, automatically.",
      },
      {
        title: "One keypress",
        body: "Toggle from the menu bar, or from any tool via the greyout:// scheme.",
      },
    ],
    integrations: [
      {
        title: "Raycast",
        body: "Toggle, activate, or deactivate Greyout without leaving Raycast.",
        status: "In testing",
      },
      {
        title: "Command line",
        body: "Script it from the terminal: open greyout://toggle.",
        status: "In testing",
      },
      {
        title: "Shortcuts",
        body: "Drive Greyout from your macOS Shortcuts automations.",
        status: "Soon",
      },
      {
        title: "Alfred",
        body: "Fire Greyout from an Alfred workflow.",
        status: "Soon",
      },
    ],
  },

  changelog: {
    title: "Changelog",
    subtitle: "Greyout updates itself automatically. Here's what's changed.",
    noReleases: "No releases yet.",
    showFewer: "Show fewer",
    // {count} is replaced at render; singular vs plural chosen by the component.
    showEarlierOne: "Show {count} earlier release",
    showEarlierMany: "Show {count} earlier releases",
  },

  transparency: {
    intro:
      "Greyout is free, and it stays free. But keeping it running still costs real money out of my own pocket, so in the spirit of the transparency reports some newsrooms and research groups publish, here are the running costs for 2026 and exactly where the money goes. (This ignores the time I spend building, researching, and maintaining it, which I give for free.)",
    total: "Total for 2026",
    covered: "Optional Premium has covered",
    coveredAria: "Share of running costs covered by Premium",
    outro:
      "Premium is how I try to cover this without putting Greyout behind a paywall. Anything beyond the running costs goes straight back into building it. I'll update these numbers as Premium comes in.",
  },

  faq: {
    title: "Questions",
    free: {
      q: "Is Greyout free?",
      a: "Yes. Greyout is free, with no account and no ads. There's an optional one-time Premium unlock (pay what you want, from €3) if you'd like to support development. See below.",
    },
    whyPay: {
      q: "If Greyout is free, why ask for money?",
      // Answer is the <Transparency> component (copy under `transparency`).
    },
    premium: {
      q: "What does Premium unlock, and how does it work?",
      a1: "Premium adds Export, Import, and Backup of your rules and settings. It's a one-time, pay-what-you-want purchase (from €3) through ",
      polar: "Polar",
      a2: ", which acts as merchant of record and handles VAT. Your licence key works on up to 3 Macs and never expires. Everything else in Greyout is free. Already have a key? Activate it in Greyout → Preferences → Premium.",
      cta: "Get Premium",
    },
    difference: {
      q: "Why use Greyout instead of the greyscale built into macOS?",
      a1: "macOS can turn on greyscale, but it's a static, all-or-nothing Accessibility toggle buried in System Settings. Greyout drives that same system-level effect, so it greys every app and display, while adding the control that makes it usable day to day: per-app rules, schedules, a global hotkey, a one-click menu-bar toggle, and the ",
      code: "greyout://",
      a2: " URL scheme for automation. It also saves and restores any Color Filters setting you already use.",
    },
    displays: {
      q: "Does Greyout grey out all my displays, including external monitors?",
      a: "Yes. Greyout applies greyscale across every connected display, including external monitors, not just the built-in screen.",
    },
    performance: {
      q: "Will Greyout slow down my Mac or drain the battery?",
      a: "No. Greyout is a tiny, native menu-bar app that uses the system's own colour-filter mechanism, so the greyscale effect adds essentially no CPU or battery cost.",
    },
    perApp: {
      q: "Can Greyout grey only my distracting apps and leave the rest in colour?",
      a: "Yes, that's the core idea. Set per-app rules so distracting apps (or any apps you choose) switch to greyscale automatically when they're in front, while everything else stays in colour.",
    },
    schedule: {
      q: "Can I schedule greyscale?",
      a: "Yes. You can have Greyout switch to greyscale on a schedule, for example every evening, and back to colour automatically.",
    },
    shortcut: {
      q: "Can I toggle greyscale with a keyboard shortcut?",
      a: "Yes. Assign a global hotkey to flip greyscale on and off instantly, from any app.",
    },
    automation: {
      q: "Can I control Greyout from scripts or other apps?",
      a1: "Yes. Greyout registers a ",
      code1: "greyout://",
      a2: " URL scheme, so you can toggle it from the Terminal (",
      code2: "open greyout://toggle",
      a3: "), shell scripts, or automation tools. A Raycast extension is in testing, with Shortcuts and Alfred planned.",
    },
    transparencyData: {
      q: "What data does Greyout collect?",
      a: "None. Greyout has no analytics, no telemetry, and no tracking. Your rules and settings stay on your Mac. The app only reaches the network for two things: to check for updates, and (only if you buy Premium) to activate your licence with Polar. That's it.",
    },
    licenceRecovery: {
      q: "How do I recover my Premium licence key if I lose it?",
      a1: "Your key is in your Polar purchase email. You can also retrieve it from ",
      polar: "Polar",
      a2: " using the email address you bought with. Still stuck? Email ",
      a3: ".",
    },
    refund: {
      q: "What's the refund policy for Premium?",
      a1: "Premium is sold through Polar, our merchant of record, so refunds are handled under Polar's policy. If something's wrong with your purchase, reach out at ",
      a2: " and we'll help sort it out.",
    },
    commercial: {
      // Em-dashes intentionally kept here (per request).
      q: "Can I use Greyout — and Premium — at work or commercially?",
      a: "Yes. Greyout is free for any use, including at work. Premium is purely an optional way to support development and unlock backup of your settings; it's never required, for commercial use or otherwise.",
    },
    permissions: {
      q: "What permissions does Greyout need?",
      a: "Just Accessibility, which macOS requires for Greyout to apply the greyscale effect across all your apps. Greyout asks for nothing else: no Screen Recording, nothing.",
    },
    requirements: {
      q: "What are the system requirements?",
      a: "macOS 14 (Sonoma) or later, on an Apple-silicon Mac (M-series). Greyout is built natively for Apple silicon; Intel Macs aren't supported.",
    },
    updates: {
      q: "How do updates work?",
      a: "Greyout updates itself in the background using Sparkle. Each update is EdDSA-signed and verified before installing, so you always get an authentic build.",
    },
    menuBarMissing: {
      q: "My menu-bar icon disappeared. How do I get it back?",
      a: "It's almost always a menu-bar manager (Bartender, Ice, the notch on newer MacBooks, and so on) hiding the icon rather than Greyout quitting. Check your menu-bar manager's hidden items, or temporarily disable it to confirm Greyout is still running.",
    },
    accessibilityRegrant: {
      q: "Greyscale stopped working or macOS keeps asking for Accessibility. How do I fix it?",
      a: "This usually happens after an update leaves a stale Accessibility permission. Open System Settings → Privacy & Security → Accessibility, remove Greyout from the list, then add it back and toggle it on. That re-grants the permission Greyout needs to apply greyscale.",
    },
  },

  footer: {
    privacy: "Privacy",
    terms: "Terms",
    changelog: "Changelog",
    contact: "Contact",
    madeWith: "Made with",
    author: "caasols",
  },

  contact: {
    heading: "Contact",
    intro:
      "Greyout is a small, independent project, so email is the best way to reach me. I read every message.",
    emailHeading: "Email",
    emailPre: "Write to ",
    emailPost:
      ". I usually reply within a couple of working days. There's no ticket system and no chatbot. Just me.",
    bugHeading: "Reporting a bug or something not working?",
    bugIntro: "A few details help me fix things faster. Where you can, include:",
    bugItem1Pre: "Your ",
    bugItem1Strong1: "Greyout version",
    bugItem1Mid: " (Settings → About) and your ",
    bugItem1Strong2: "macOS version",
    bugItem1Post: ".",
    bugItem2: "What you did, what you expected, and what happened instead.",
    bugItem3: "A screenshot if it's something visual, or the steps to reproduce it.",
    premiumHeading: "Premium & licences",
    premiumPre:
      "Your Premium licence key is in your Polar purchase email, and you can recover it from ",
    premiumLink: "Polar",
    premiumPost:
      " using the email you bought with. Polar handles payments, VAT, and refunds as merchant of record. If anything goes wrong, email me and I'll help sort it out.",
    beforeHeading: "Before you write",
    beforePre:
      "Many common questions (permissions, per-app rules, refunds) are answered in the ",
    beforeLink: "FAQ",
    beforePost: ".",
  },

  success: {
    heading: "Thank you for supporting Greyout",
    body: "Your payment went through and your Premium licence is on its way. Polar (our merchant of record) is emailing your licence key now. Check your inbox, and your spam folder if it doesn't arrive in a few minutes.",
    activateHeading: "Activate your licence",
    step1: "Open the licence email from Polar and copy your key.",
    step2Pre: "In Greyout, go to ",
    step2Strong: "Preferences → Premium",
    step2Post: ".",
    step3: "Paste your key and activate. That's it.",
    download: "Download for macOS",
    back: "Back to greyout.cc",
    troublePre: "Trouble with your key or didn't get the email? Reach out at ",
    troublePost: ".",
  },
} as const;
