import { photos, type Photo } from "./photos";
import type { Lang } from "./i18n";

// What Hassane offers, written only from his public bio and Google reviews.
// No prices, durations or packages are public, so none are shown.
export type Service = {
  slug: string;
  image: Photo;
  title: Record<Lang, string>;
  short: Record<Lang, string>;
  description: Record<Lang, string>;
  forWho: Record<Lang, string>;
};

export const services: Service[] = [
  {
    slug: "personnalise",
    image: photos.oneToOne,
    title: { fr: "Coaching personnalisé", en: "Personal coaching" },
    short: {
      fr: "Des séances construites autour de votre objectif et de votre niveau.",
      en: "Sessions built around your goal and your level.",
    },
    description: {
      fr: "Chaque séance est adaptée à votre objectif et à votre niveau. Hassane ajuste le contenu au fil du temps, pour que vous progressiez à votre rythme.",
      en: "Every session is adapted to your goal and your level. Hassane adjusts the content over time, so you progress at your own pace.",
    },
    forWho: {
      fr: "Débutant ou confirmé : vous partez de là où vous en êtes.",
      en: "Beginner or experienced: you start from where you are.",
    },
  },
  {
    slug: "motivation",
    image: photos.strength,
    title: { fr: "Motivation", en: "Motivation" },
    short: {
      fr: "Sortir de sa zone de confort, sans se dégoûter du sport.",
      en: "Leave your comfort zone without being put off sport.",
    },
    description: {
      fr: "Hassane vous pousse à aller un peu plus loin à chaque séance, avec bienveillance. Ses clients le décrivent comme motivant et à l'écoute.",
      en: "Hassane pushes you a little further in each session, in a kind way. His clients describe him as motivating and a good listener.",
    },
    forWho: {
      fr: "Pour celles et ceux qui ont du mal à s'y tenir seuls.",
      en: "For anyone who finds it hard to keep going alone.",
    },
  },
  {
    slug: "suivi",
    image: photos.row,
    title: { fr: "Suivi régulier", en: "Regular follow-up" },
    short: {
      fr: "Un accompagnement dans la durée, pas une séance isolée.",
      en: "Support over time, not a one-off session.",
    },
    description: {
      fr: "Le coaching se construit dans la durée. Le suivi régulier permet de garder le cap et de voir les résultats, physiques comme mentaux.",
      en: "Coaching is built over time. Regular follow-up helps you stay on track and see the results, physical as well as mental.",
    },
    forWho: {
      fr: "Pour progresser de façon régulière, semaine après semaine.",
      en: "For steady progress, week after week.",
    },
  },
  {
    slug: "nutrition",
    image: photos.meal,
    title: { fr: "Conseils nutrition", en: "Nutrition advice" },
    short: {
      fr: "Des conseils simples pour accompagner l'entraînement.",
      en: "Simple advice to support your training.",
    },
    description: {
      fr: "L'alimentation fait partie du résultat. Hassane donne des conseils nutrition pour accompagner vos séances au quotidien.",
      en: "Food is part of the result. Hassane gives nutrition advice to support your training day to day.",
    },
    forWho: {
      fr: "En complément du coaching sportif.",
      en: "Alongside the fitness coaching.",
    },
  },
];

export type Review = {
  name: string;
  fr: string;
  en: string;
};

// Real Google reviews, quoted exactly (one obvious typo fixed: « les coachings sportifs »).
// English versions are translations and are labelled as such on the page.
export const reviews: Review[] = [
  {
    name: "Page R.",
    fr: "Hassane est super, les séances sont adaptées à nos objectifs ainsi qu'à notre niveau. Il nous pousse de notre zone de confort sans pour autant nous dégoûter.",
    en: "Hassane is great, the sessions are adapted to our goals as well as to our level. He pushes us out of our comfort zone without putting us off.",
  },
  {
    name: "Ismaël L.",
    fr: "Cela fait plusieurs années que je fais confiance à Hassane et j'en suis plus que satisfait, les résultats sont au rendez-vous !",
    en: "I have trusted Hassane for several years and I am more than satisfied, the results are there!",
  },
  {
    name: "Cindy H.",
    fr: "Hassane est une personne très sympathique et à l'écoute. Il adapte parfaitement les coachings sportifs au niveau de chacun et sait motiver les personnes.",
    en: "Hassane is a very friendly person and a good listener. He adapts the fitness coaching perfectly to each person's level and knows how to motivate people.",
  },
];
