import { photos, type Photo } from "./photos";

export type Programme = {
  slug: string;
  title: string;
  short: string;
  description: string;
  forWho: string;
  sessionLength: string;
  perWeek: string;
  format: string;
  price: string;
  priceUnit: string;
  includes: string[];
  note?: string;
  image: Photo;
};

// Prices are fictional GBP "from" prices for this demo brand.
export const programmes: Programme[] = [
  {
    slug: "one-to-one",
    title: "One to One Coaching",
    short: "Private studio sessions planned around your goals and your week.",
    description:
      "Private sessions at the Bridge Street studio. Maya plans every session around your goals, training history and timetable, and coaches each lift so you understand why you are doing it.",
    forWho:
      "People who want full attention: gym beginners, people returning after a long break, or anyone who wants technique checked rep by rep.",
    sessionLength: "60 minutes",
    perWeek: "1 to 3 sessions",
    format: "In studio, one to one",
    price: "£45",
    priceUnit: "per session",
    includes: [
      "Movement and goal check in your first session",
      "A written plan to follow between sessions",
      "Progress review every four weeks",
    ],
    image: photos.oneToOne,
  },
  {
    slug: "online",
    title: "Online Coaching",
    short: "A plan in your pocket, weekly check-ins and video form feedback.",
    description:
      "Your training plan lives in an app, built for the kit you have at home or in your own gym. Send form videos, check in every week and Maya adjusts the plan when life gets busy.",
    forWho:
      "Self-motivated people who like training on their own schedule but want structure, accountability and expert eyes on their form.",
    sessionLength: "30 to 45 minute workouts",
    perWeek: "3 to 4 workouts, plus 1 call",
    format: "Remote, anywhere in the UK",
    price: "£79",
    priceUnit: "per month",
    includes: [
      "Plan built for your equipment",
      "Weekly 15-minute check-in call",
      "Form feedback on uploaded videos",
    ],
    image: photos.online,
  },
  {
    slug: "strength",
    title: "Strength Training",
    short: "An 8-week small-group block built on the big, basic lifts.",
    description:
      "An 8-week block in a small group of up to four people. You learn to squat, hinge, push and pull with good technique, then add load steadily week by week.",
    forWho:
      "Beginners and improvers who want to lift with confidence and enjoy the energy of a small group without getting lost in a big class.",
    sessionLength: "60 minutes",
    perWeek: "2 sessions",
    format: "Small group, maximum 4",
    price: "£25",
    priceUnit: "per session",
    includes: [
      "Technique coaching on every lift",
      "A simple logbook to track your lifts",
      "Mid-block and end-of-block review",
    ],
    image: photos.strength,
  },
  {
    slug: "weight-loss",
    title: "Weight Loss Programme",
    short: "Twelve weeks of strength, conditioning and simple daily habits.",
    description:
      "Twelve weeks that combine strength work, conditioning and simple habit coaching around sleep, steps and regular meals. No crash diets and no meal plans, just steady changes you can keep.",
    forWho:
      "Adults who want to lose body fat gradually, feel fitter day to day and build routines that still work after the programme ends.",
    sessionLength: "45 minutes",
    perWeek: "2 sessions, plus 1 habit check-in",
    format: "In studio or hybrid",
    price: "£59",
    priceUnit: "per week",
    includes: [
      "Strength and conditioning sessions",
      "Weekly habit check-in",
      "Referral to a registered dietitian if needed",
    ],
    note: "Everyone progresses at a different rate, so no result is guaranteed. We track habits, strength and energy, not just the scales.",
    image: photos.conditioning,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  programme: string;
};

// Fictional clients for this demo site. Always shown with a "demo" label.
export const testimonials: Testimonial[] = [
  {
    quote:
      "I had never touched a barbell. Maya broke every lift into small steps, and now Tuesday evenings are the part of my week I protect.",
    name: "Priya K.",
    programme: "Strength Training",
  },
  {
    quote:
      "The weekly check-in kept me honest. When work got busy, my plan changed with it instead of making me feel guilty.",
    name: "Tom R.",
    programme: "Online Coaching",
  },
  {
    quote:
      "I came for weight loss and stayed for the routine. I sleep better, walk to work and the change has been slow and steady, which suits me.",
    name: "Hannah D.",
    programme: "Weight Loss Programme",
  },
  {
    quote:
      "Clear, patient coaching. Every session had a reason, and I always knew what I was working towards next.",
    name: "Daniel O.",
    programme: "One to One Coaching",
  },
];
