import Link from "next/link";
import { ArrowRight, Dumbbell, Ear, Flame, Salad } from "lucide-react";
import { ButtonLink, Container, CtaBand, Eyebrow, Marked, PhotoBox, SectionHeading } from "@/components/ui";
import { ServicePreview } from "@/components/ServiceCard";
import { TestimonialGrid } from "@/components/Testimonials";
import { reviews, services } from "@/lib/coaching";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import { localHref, ui, type Lang } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Coach sportif · Saint-Lô",
    h1: ["Tu es bien plus ", "capable", " que tu ne le penses."] as const,
    lead: "Coaching sportif personnalisé avec Hassane Yahya, éducateur sportif diplômé d'État. Des séances adaptées à votre objectif et à votre niveau, débutant ou confirmé.",
    facts: [
      { value: site.rating.fr, unit: "/5", label: "Note Google" },
      { value: String(site.rating.count), unit: "avis", label: "Avis Google" },
      { value: "7", unit: "j/7", label: "Du lundi au dimanche" },
      { value: "Tous", unit: "niveaux", label: "Débutant ou confirmé" },
    ],
    introEyebrow: "Ton coach",
    introTitle: ["Hassane, ton ", "coach", ""] as const,
    intro: [
      "Hassane Yahya est éducateur sportif diplômé d'État. Il accompagne à Saint-Lô des personnes de tous niveaux, qu'elles débutent ou qu'elles s'entraînent déjà.",
      "Ses séances partent de votre objectif et de votre niveau. Il vous motive, assure un suivi régulier et vous donne des conseils nutrition, pour des résultats physiques et mentaux.",
    ],
    introLink: "En savoir plus sur Hassane",
    servicesEyebrow: "Coaching",
    servicesTitle: ["Ce que le coaching ", "apporte", ""] as const,
    servicesIntro: "Un accompagnement personnalisé, construit autour de vous.",
    servicesLink: "Voir le coaching",
    whyEyebrow: "Pourquoi Hassane",
    whyTitle: ["Ce que disent ses ", "clients", ""] as const,
    whyIntro: "Quatre points qui reviennent dans les avis Google.",
    reasons: [
      { icon: Dumbbell, title: "Adapté à chacun", text: "Des séances adaptées à l'objectif et au niveau de chacun." },
      { icon: Flame, title: "Motivant", text: "Il pousse à sortir de sa zone de confort, sans dégoûter du sport." },
      { icon: Ear, title: "À l'écoute", text: "Une personne décrite comme très sympathique et à l'écoute." },
      { icon: Salad, title: "Conseils nutrition", text: "Des conseils pour accompagner l'entraînement au quotidien." },
    ],
    reviewsEyebrow: "Avis Google",
    reviewsTitle: ["Ils en ", "parlent", ""] as const,
  },
  en: {
    eyebrow: "Fitness coach · Saint-Lô",
    h1: ["You are far more ", "capable", " than you think."] as const,
    lead: "Personal fitness coaching with Hassane Yahya, a state-qualified sports coach. Sessions adapted to your goal and your level, whether you are a beginner or experienced.",
    facts: [
      { value: site.rating.en, unit: "/5", label: "Google rating" },
      { value: String(site.rating.count), unit: "reviews", label: "Google reviews" },
      { value: "7", unit: "days", label: "Monday to Sunday" },
      { value: "All", unit: "levels", label: "Beginner or experienced" },
    ],
    introEyebrow: "Your coach",
    introTitle: ["Hassane, your ", "coach", ""] as const,
    intro: [
      "Hassane Yahya is a state-qualified sports coach (éducateur sportif diplômé d'État). In Saint-Lô he coaches people of every level, whether they are just starting or already train.",
      "His sessions start from your goal and your level. He motivates you, follows your progress regularly and gives nutrition advice, for physical and mental results.",
    ],
    introLink: "More about Hassane",
    servicesEyebrow: "Coaching",
    servicesTitle: ["What the coaching ", "brings", ""] as const,
    servicesIntro: "Personal support, built around you.",
    servicesLink: "See the coaching",
    whyEyebrow: "Why Hassane",
    whyTitle: ["What his ", "clients", " say"] as const,
    whyIntro: "Four points that come up in the Google reviews.",
    reasons: [
      { icon: Dumbbell, title: "Adapted to everyone", text: "Sessions adapted to each person's goal and level." },
      { icon: Flame, title: "Motivating", text: "He pushes you out of your comfort zone without putting you off sport." },
      { icon: Ear, title: "A good listener", text: "Described as a very friendly person who really listens." },
      { icon: Salad, title: "Nutrition advice", text: "Advice to support your training day to day." },
    ],
    reviewsEyebrow: "Google reviews",
    reviewsTitle: ["In their ", "words", ""] as const,
  },
};

export function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const t = ui[lang];
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <Container className="grid gap-10 pt-10 pb-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pt-16 lg:pb-20">
          <div className="lg:col-span-7 lg:pb-6">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 id="hero-title" className="display mt-5 text-[clamp(2.9rem,12vw,5.75rem)] lg:text-[clamp(3rem,6.4vw,5.75rem)]">
              <Marked t={c.h1} onLoad />
            </h1>
            <p className="mt-7 max-w-xl text-lg text-paper/85 sm:text-xl">{c.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.phoneHref} arrow>
                {t.callCoach} · {site.phoneDisplay}
              </ButtonLink>
              <ButtonLink href={localHref(lang, "/programmes")} variant="outline">
                {t.seeCoaching}
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-mute">{t.prices}</p>
          </div>
          <div className="relative lg:col-span-5">
            <PhotoBox
              photo={photos.coachHero}
              lang={lang}
              illustration
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] rounded-lg sm:aspect-[16/11] lg:aspect-[4/5]"
              preload
            />
          </div>
        </Container>

        {/* Real facts only: Google rating, review count, days open, levels */}
        <div className="border-y border-line bg-panel">
          <Container>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {c.facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex flex-col-reverse gap-1 py-6 ${i % 2 === 1 ? "pl-5" : ""} ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${i % 2 === 1 ? "border-l border-line lg:border-l" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
                >
                  <dt className="text-sm text-mute">{f.label}</dt>
                  <dd className="display text-5xl text-paper">
                    {f.value}
                    <span className="ml-1 inline-block text-2xl text-lime">{f.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* Coach intro */}
      <section aria-labelledby="intro-title" className="py-20 lg:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <PhotoBox
            photo={photos.coachIntro}
            lang={lang}
            illustration
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="reveal aspect-[4/5] rounded-lg sm:aspect-[3/2] lg:col-span-5 lg:aspect-[4/5]"
          />
          <div className="reveal lg:col-span-7">
            <Eyebrow>{c.introEyebrow}</Eyebrow>
            <h2 id="intro-title" className="display mt-4 text-[clamp(2.6rem,7vw,4.5rem)]">
              <Marked t={c.introTitle} />
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg text-paper/85">
              {c.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link
              href={localHref(lang, "/about")}
              className="mt-8 inline-flex min-h-11 items-center gap-2 font-bold text-lime underline-offset-4 hover:underline"
            >
              {c.introLink} <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Coaching */}
      <section aria-labelledby="programmes-title" className="border-t border-line bg-panel/60 py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={c.servicesEyebrow}
              title={
                <span id="programmes-title">
                  <Marked t={c.servicesTitle} />
                </span>
              }
              intro={c.servicesIntro}
            />
            <ButtonLink href={localHref(lang, "/programmes")} variant="outline" arrow className="shrink-0 self-start md:self-auto">
              {c.servicesLink}
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServicePreview key={s.slug} service={s} index={i} lang={lang} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Hassane */}
      <section aria-labelledby="why-title" className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={c.whyEyebrow}
              title={
                <span id="why-title">
                  <Marked t={c.whyTitle} />
                </span>
              }
              intro={c.whyIntro}
            />
          </div>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {c.reasons.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal bg-ink p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-lime text-ink">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-mute">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Reviews */}
      <section aria-labelledby="voices-title" className="border-t border-line py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={c.reviewsEyebrow}
              title={
                <span id="voices-title">
                  <Marked t={c.reviewsTitle} />
                </span>
              }
              intro={t.ratingLabel}
            />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start font-bold whitespace-nowrap text-lime underline-offset-4 hover:underline md:self-auto"
            >
              {t.allReviews} <ArrowRight aria-hidden="true" className="size-4" />
              <span className="sr-only">{t.newTab}</span>
            </a>
          </div>
          <div className="mt-12">
            <TestimonialGrid items={reviews} lang={lang} />
          </div>
        </Container>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
