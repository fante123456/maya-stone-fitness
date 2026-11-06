import { nav, site } from "./site";

export type Lang = "fr" | "en";

/** Path for a page in the given language: French at the root, English under /en/. */
export function localHref(lang: Lang, path: string): string {
  if (lang === "fr") return path;
  if (path === "/") return "/en/";
  if (path.startsWith("/#")) return `/en/${path.slice(1)}`;
  return `/en${path}`;
}

/** Same page in the other language (used by the FR | EN switcher). */
export function switchHref(pathname: string, to: Lang): string {
  const clean = pathname.replace(/\/$/, "") || "/";
  const base = clean === "/en" ? "/" : clean.startsWith("/en/") ? clean.slice(3) : clean;
  return localHref(to, base);
}

const navLabels: Record<Lang, Record<string, string>> = {
  fr: Object.fromEntries(nav.map((n) => [n.href, n.label])),
  en: { "/": "Home", "/about": "About", "/programmes": "Coaching", "/results": "Reviews", "/contact": "Contact" },
};

export function navFor(lang: Lang) {
  return nav.map((n) => ({ href: localHref(lang, n.href), label: navLabels[lang][n.href] }));
}

export const hours: Record<Lang, { days: string; time: string }[]> = {
  fr: [
    { days: "Lundi", time: "9h – 21h" },
    { days: "Mardi", time: "7h – 20h30" },
    { days: "Mercredi, jeudi, vendredi", time: "7h30 – 20h30" },
    { days: "Samedi", time: "7h30 – 20h" },
    { days: "Dimanche", time: "9h – 12h" },
  ],
  en: [
    { days: "Monday", time: "9:00 – 21:00" },
    { days: "Tuesday", time: "7:00 – 20:30" },
    { days: "Wednesday to Friday", time: "7:30 – 20:30" },
    { days: "Saturday", time: "7:30 – 20:00" },
    { days: "Sunday", time: "9:00 – 12:00" },
  ],
};

/** Text shared by the header, footer, banner and buttons. */
export const ui = {
  fr: {
    skip: "Aller au contenu",
    banner: "Projet d'entraînement – site non officiel",
    homeLabel: `${site.name}, accueil`,
    mainNav: "Menu principal",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchLabel: "Choisir la langue",
    call: "Appeler",
    callCoach: "Appeler Hassane",
    seeCoaching: "Voir le coaching",
    location: "Saint-Lô (centre) – lieu des séances précisé au premier contact",
    locationShort: "Saint-Lô (centre), 50000",
    maps: "Voir sur Google Maps",
    allReviews: "Voir tous les avis sur Google",
    newTab: " (s'ouvre dans un nouvel onglet)",
    prices: "Tarifs sur demande – premier échange par téléphone",
    ratingLabel: `${site.rating.fr}/5 sur Google · ${site.rating.count} avis`,
    hoursTitle: "Horaires",
    contactTitle: "Contact",
    pagesTitle: "Pages",
    followTitle: "Suivre Accro Temple",
    footerText: "Coaching sportif personnalisé avec Hassane Yahya, éducateur sportif diplômé d'État, à Saint-Lô.",
    motto: "Tu es bien plus capable que tu ne le penses.",
    demoLine:
      "Démo réalisée par Ammar Rajabi à titre d'entraînement. Le propriétaire peut demander sa suppression.",
    photoCredits: "Photos d'illustration Unsplash par",
    and: " et ",
    illustration: "Photo d'illustration",
    ctaTitle: ["Prêt à ", "commencer", " ?"] as const,
    ctaText: "Un premier échange par téléphone pour parler de votre objectif et de votre niveau. Tarifs sur demande.",
  },
  en: {
    skip: "Skip to content",
    banner: "Practice project – unofficial website",
    homeLabel: `${site.name}, home`,
    mainNav: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "Choose language",
    call: "Call",
    callCoach: "Call Hassane",
    seeCoaching: "See the coaching",
    location: "Saint-Lô (town centre) – session location given at first contact",
    locationShort: "Saint-Lô (town centre), 50000",
    maps: "View on Google Maps",
    allReviews: "See all reviews on Google",
    newTab: " (opens in a new tab)",
    prices: "Prices on request – first conversation by phone",
    ratingLabel: `${site.rating.en}/5 on Google · ${site.rating.count} reviews`,
    hoursTitle: "Opening hours",
    contactTitle: "Contact",
    pagesTitle: "Pages",
    followTitle: "Follow Accro Temple",
    footerText: "Personal fitness coaching with Hassane Yahya, a state-qualified sports coach, in Saint-Lô.",
    motto: "You are far more capable than you think.",
    demoLine: "Demo made by Ammar Rajabi as a practice project. The owner can ask for it to be removed.",
    photoCredits: "Illustration photos from Unsplash by",
    and: " and ",
    illustration: "Illustration photo",
    ctaTitle: ["Ready to ", "start", "?"] as const,
    ctaText: "A first conversation by phone to talk about your goal and your level. Prices on request.",
  },
} satisfies Record<Lang, Record<string, unknown>>;
