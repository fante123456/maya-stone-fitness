import { Ear, Flame, Repeat, Target } from "lucide-react";
import { Container, CtaBand, Eyebrow, Marked, PhotoBox, SectionHeading } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "À propos",
    h1: ["Hassane ", "Yahya", ""] as const,
    lead: "Éducateur sportif diplômé d'État, Hassane propose du coaching sportif personnalisé à Saint-Lô, pour les débutants comme pour les sportifs confirmés.",
    storyEyebrow: "Son approche",
    storyTitle: ["Partir de ", "vous", ""] as const,
    story: [
      "Chaque personne arrive avec son objectif et son niveau. Hassane construit les séances à partir de là, puis les fait évoluer avec vous.",
      "Il motive sans brusquer : l'idée est de sortir de sa zone de confort, sans se dégoûter du sport. Le suivi est régulier, et des conseils nutrition accompagnent l'entraînement.",
      "Le but : des résultats physiques, mais aussi mentaux.",
    ],
    rulesEyebrow: "Sa méthode",
    rulesTitle: ["Trois mots pour ", "résumer", ""] as const,
    rules: [
      { title: "Adapter", text: "Des séances adaptées à votre objectif et à votre niveau, débutant ou confirmé." },
      { title: "Motiver", text: "Vous pousser hors de votre zone de confort, avec bienveillance." },
      { title: "Suivre", text: "Un suivi régulier et des conseils nutrition pour avancer dans la durée." },
    ],
    stepsEyebrow: "Pour commencer",
    stepsTitle: ["Comment ", "démarrer", ""] as const,
    stepsIntro: "Tout commence par un appel.",
    steps: [
      { title: "Vous appelez Hassane", text: `Au ${site.phoneDisplay}, aux horaires indiqués en bas de page.` },
      { title: "Vous faites le point", text: "Votre objectif, votre niveau, vos disponibilités." },
      { title: "Lieu et tarifs", text: "Le lieu des séances et les tarifs sont précisés lors de ce premier échange." },
      { title: "C'est parti", text: "Les séances commencent, avec un suivi régulier." },
    ],
    valuesEyebrow: "D'après ses clients",
    valuesTitle: ["Ce qu'on peut ", "attendre", ""] as const,
    values: [
      { icon: Target, title: "Des séances adaptées", text: "« Les séances sont adaptées à nos objectifs ainsi qu'à notre niveau. » – Page R." },
      { icon: Flame, title: "De la motivation", text: "« Il sait motiver les personnes. » – Cindy H." },
      { icon: Ear, title: "De l'écoute", text: "« Une personne très sympathique et à l'écoute. » – Cindy H." },
      { icon: Repeat, title: "De la confiance", text: "« Cela fait plusieurs années que je fais confiance à Hassane. » – Ismaël L." },
    ],
  },
  en: {
    eyebrow: "About",
    h1: ["Hassane ", "Yahya", ""] as const,
    lead: "A state-qualified sports coach (éducateur sportif diplômé d'État), Hassane offers personal fitness coaching in Saint-Lô, for beginners and experienced athletes alike.",
    storyEyebrow: "His approach",
    storyTitle: ["Starting from ", "you", ""] as const,
    story: [
      "Everyone arrives with their own goal and level. Hassane builds the sessions from there, then adjusts them with you.",
      "He motivates without forcing: the idea is to leave your comfort zone without being put off sport. Follow-up is regular, and nutrition advice supports the training.",
      "The aim: physical results, and mental ones too.",
    ],
    rulesEyebrow: "His method",
    rulesTitle: ["Three words to ", "sum up", ""] as const,
    rules: [
      { title: "Adapt", text: "Sessions adapted to your goal and your level, beginner or experienced." },
      { title: "Motivate", text: "Pushing you out of your comfort zone, in a kind way." },
      { title: "Follow up", text: "Regular follow-up and nutrition advice to keep progressing over time." },
    ],
    stepsEyebrow: "Getting started",
    stepsTitle: ["How to ", "start", ""] as const,
    stepsIntro: "It all starts with a phone call.",
    steps: [
      { title: "Call Hassane", text: `On ${site.phoneDisplay}, during the hours shown at the bottom of the page.` },
      { title: "Talk it through", text: "Your goal, your level, when you are available." },
      { title: "Place and prices", text: "The session location and prices are given during this first conversation." },
      { title: "Let's go", text: "The sessions begin, with regular follow-up." },
    ],
    valuesEyebrow: "According to his clients",
    valuesTitle: ["What you can ", "expect", ""] as const,
    values: [
      { icon: Target, title: "Adapted sessions", text: "“The sessions are adapted to our goals as well as to our level.” – Page R. (translated from French)" },
      { icon: Flame, title: "Motivation", text: "“He knows how to motivate people.” – Cindy H. (translated from French)" },
      { icon: Ear, title: "Listening", text: "“A very friendly person and a good listener.” – Cindy H. (translated from French)" },
      { icon: Repeat, title: "Trust", text: "“I have trusted Hassane for several years.” – Ismaël L. (translated from French)" },
    ],
  },
};

export function AboutPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <>
      <PageIntro
        lang={lang}
        eyebrow={c.eyebrow}
        title={<Marked t={c.h1} onLoad />}
        intro={<p>{c.lead}</p>}
        photo={photos.coachAbout}
        illustration
      />

      {/* Approach */}
      <section aria-labelledby="story-title" className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={c.storyEyebrow}
              title={
                <span id="story-title">
                  <Marked t={c.storyTitle} />
                </span>
              }
            />
          </div>
          <div className="reveal space-y-5 text-lg text-paper/85 lg:col-span-7">
            {c.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Method */}
      <section aria-labelledby="philosophy-title" className="border-y border-line bg-panel/60 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow={c.rulesEyebrow}
            title={
              <span id="philosophy-title">
                <Marked t={c.rulesTitle} />
              </span>
            }
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {c.rules.map((p, i) => (
              <li key={p.title} className="reveal rounded-lg border border-line bg-ink p-7">
                <p className="display text-6xl text-lime" aria-hidden="true">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-mute">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Getting started */}
      <section aria-labelledby="approach-title" className="py-20 lg:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <PhotoBox
            photo={photos.studio}
            lang={lang}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="reveal aspect-[4/3] rounded-lg lg:sticky lg:top-28 lg:col-span-5"
          />
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={c.stepsEyebrow}
              title={
                <span id="approach-title">
                  <Marked t={c.stepsTitle} />
                </span>
              }
              intro={c.stepsIntro}
            />
            <ol className="mt-10 space-y-4">
              {c.steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-5 rounded-lg border border-line bg-panel p-6">
                  <span
                    aria-hidden="true"
                    className="display flex size-12 shrink-0 items-center justify-center rounded-md bg-lime text-2xl text-ink"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-1 text-mute">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* What clients say */}
      <section aria-labelledby="values-title" className="border-t border-line py-20 lg:py-28">
        <Container>
          <Eyebrow>{c.valuesEyebrow}</Eyebrow>
          <h2 id="values-title" className="display mt-4 text-[clamp(2.6rem,7vw,4.5rem)]">
            <Marked t={c.valuesTitle} />
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {c.values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal bg-ink p-7">
                <Icon aria-hidden="true" className="size-7 text-sky" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-mute">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
