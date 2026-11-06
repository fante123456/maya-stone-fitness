import { ArrowUpRight, Brain, Dumbbell, Ear, Flame } from "lucide-react";
import { ButtonLink, Container, CtaBand, Marked, PhotoBox, SectionHeading } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { TestimonialGrid } from "@/components/Testimonials";
import { reviews } from "@/lib/coaching";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import { ui, type Lang } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Avis",
    h1: ["Des clients ", "satisfaits", ""] as const,
    lead: `Accro Temple est noté ${site.rating.fr}/5 sur Google, avec ${site.rating.count} avis. Voici quelques-uns de ces avis, cités tels quels.`,
    ratingTitle: "Note Google",
    reviewsEyebrow: "Avis Google",
    reviewsTitle: ["Dans leurs ", "mots", ""] as const,
    reviewsIntro: "Avis cités avec le prénom et l'initiale du nom.",
    themesEyebrow: "Ce qui revient",
    themesTitle: ["Les points ", "forts", ""] as const,
    themesIntro: "Ce que les clients mettent en avant dans leurs avis.",
    themes: [
      { icon: Dumbbell, title: "Des séances adaptées", text: "Aux objectifs et au niveau de chacun." },
      { icon: Flame, title: "La motivation", text: "Sortir de sa zone de confort sans se dégoûter." },
      { icon: Ear, title: "L'écoute", text: "Un coach sympathique et à l'écoute." },
      { icon: Brain, title: "Des résultats", text: "« Les résultats sont au rendez-vous », physiques et mentaux." },
    ],
  },
  en: {
    eyebrow: "Reviews",
    h1: ["Happy ", "clients", ""] as const,
    lead: `Accro Temple is rated ${site.rating.en}/5 on Google, with ${site.rating.count} reviews. Here are some of them, translated from French.`,
    ratingTitle: "Google rating",
    reviewsEyebrow: "Google reviews",
    reviewsTitle: ["In their ", "words", ""] as const,
    reviewsIntro: "Reviews quoted with first name and the initial of the family name.",
    themesEyebrow: "What comes up",
    themesTitle: ["The strong ", "points", ""] as const,
    themesIntro: "What clients highlight in their reviews.",
    themes: [
      { icon: Dumbbell, title: "Adapted sessions", text: "To each person's goals and level." },
      { icon: Flame, title: "Motivation", text: "Leaving your comfort zone without being put off." },
      { icon: Ear, title: "Listening", text: "A friendly coach who really listens." },
      { icon: Brain, title: "Results", text: "“The results are there”, physical and mental." },
    ],
  },
};

export function ReviewsPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const t = ui[lang];
  const rating = lang === "fr" ? site.rating.fr : site.rating.en;
  return (
    <>
      <PageIntro
        lang={lang}
        eyebrow={c.eyebrow}
        title={<Marked t={c.h1} onLoad />}
        intro={<p>{c.lead}</p>}
        photo={photos.dumbbell}
      />

      {/* Google rating */}
      <section aria-labelledby="rating-title" className="border-b border-line bg-panel py-12">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="rating-title" className="text-xs font-bold tracking-[0.18em] text-sky uppercase">
              {c.ratingTitle}
            </h2>
            <p className="display mt-2 text-7xl">
              {rating}
              <span className="ml-1 text-3xl text-lime">/5</span>
            </p>
            <p className="mt-1 text-mute">
              {site.rating.count} {lang === "fr" ? "avis Google" : "Google reviews"}
            </p>
          </div>
          <ButtonLink href={site.mapsUrl} external variant="outline" className="shrink-0 self-start md:self-auto">
            {t.allReviews}
            <ArrowUpRight aria-hidden="true" className="size-4" />
            <span className="sr-only">{t.newTab}</span>
          </ButtonLink>
        </Container>
      </section>

      {/* Reviews */}
      <section aria-labelledby="stories-title" className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow={c.reviewsEyebrow}
            title={
              <span id="stories-title">
                <Marked t={c.reviewsTitle} />
              </span>
            }
            intro={c.reviewsIntro}
          />
          <div className="mt-12">
            <TestimonialGrid items={reviews} lang={lang} />
          </div>
        </Container>
      </section>

      {/* Themes from the reviews */}
      <section aria-labelledby="goals-title" className="border-t border-line bg-panel/60 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={c.themesEyebrow}
              title={
                <span id="goals-title">
                  <Marked t={c.themesTitle} />
                </span>
              }
              intro={c.themesIntro}
            />
            <PhotoBox
              photo={photos.conditioning}
              lang={lang}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="reveal mt-10 aspect-[4/3] rounded-lg"
            />
          </div>
          <ul className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-7">
            {c.themes.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal rounded-lg border border-line bg-ink p-6">
                <Icon aria-hidden="true" className="size-7 text-lime" />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
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
