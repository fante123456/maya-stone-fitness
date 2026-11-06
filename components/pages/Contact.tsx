import { Clock, MapPin, Phone, Share2 } from "lucide-react";
import { ButtonLink, Container, Marked, PhotoBox } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { ContactForm } from "@/components/ContactForm";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import { hours, ui, type Lang } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Contact",
    h1: ["Appelle ", "Hassane", ""] as const,
    lead: "Le plus simple pour commencer : un premier échange par téléphone. Vous parlez de votre objectif et de votre niveau, et Hassane vous indique le lieu des séances et les tarifs.",
    detailsTitle: "Coordonnées",
    sectionLabel: "Coordonnées et formulaire",
    where: "Où",
    phone: "Téléphone",
    social: "Réseaux sociais",
    formTitle: ["Parle-nous de ton ", "objectif", ""] as const,
    steps: [
      `Appelez Hassane au ${site.phoneDisplay}.`,
      "Vous faites le point sur votre objectif et votre niveau.",
      "Le lieu des séances et les tarifs sont précisés lors de ce premier échange.",
    ],
    formNote: "Ce formulaire est une démonstration : il n'envoie rien. Pour joindre Hassane, utilisez le téléphone.",
  },
  en: {
    eyebrow: "Contact",
    h1: ["Call ", "Hassane", ""] as const,
    lead: "The easiest way to start: a first conversation by phone. You talk about your goal and your level, and Hassane tells you where the sessions take place and the prices.",
    detailsTitle: "Contact details",
    sectionLabel: "Contact details and form",
    where: "Where",
    phone: "Phone",
    social: "Social media",
    formTitle: ["Tell us about your ", "goal", ""] as const,
    steps: [
      `Call Hassane on ${site.phoneDisplay}.`,
      "You talk through your goal and your level.",
      "The session location and prices are given during this first conversation.",
    ],
    formNote: "This form is a demo: it sends nothing. To reach Hassane, please use the phone.",
  },
};

const card = "bg-panel p-6";
const cardTitle = "flex items-center gap-3 text-lg font-bold";

export function ContactPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const t = ui[lang];
  return (
    <>
      <PageIntro lang={lang} eyebrow={c.eyebrow} title={<Marked t={c.h1} onLoad />} intro={<p>{c.lead}</p>} />

      <section aria-label={c.sectionLabel} className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <div className="space-y-5 lg:col-span-5">
            <h2 className="sr-only">{c.detailsTitle}</h2>
            <PhotoBox
              photo={photos.studio}
              lang={lang}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[16/10] rounded-lg"
              eager
            />

            <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line">
              <div className={card}>
                <h3 className={cardTitle}>
                  <Phone aria-hidden="true" className="size-5 text-lime" /> {c.phone}
                </h3>
                <a href={site.phoneHref} className="mt-2 inline-flex min-h-11 items-center text-2xl font-semibold hover:text-lime">
                  {site.phoneDisplay}
                </a>
                <p className="mt-1 text-sm text-mute">{t.prices}</p>
              </div>

              <div className={card}>
                <h3 className={cardTitle}>
                  <MapPin aria-hidden="true" className="size-5 text-lime" /> {c.where}
                </h3>
                <p className="mt-3 text-paper/85">{t.location}</p>
                <ButtonLink href={site.mapsUrl} external variant="outline" className="mt-4">
                  {t.maps}
                  <span className="sr-only">{t.newTab}</span>
                </ButtonLink>
              </div>

              <div className={card}>
                <h3 className={cardTitle}>
                  <Clock aria-hidden="true" className="size-5 text-lime" /> {t.hoursTitle}
                </h3>
                <dl className="mt-3 space-y-2">
                  {hours[lang].map((h) => (
                    <div key={h.days} className="flex justify-between gap-4 border-b border-line pb-2 last:border-0">
                      <dt className="text-paper/85">{h.days}</dt>
                      <dd className="text-right font-semibold whitespace-nowrap">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={card}>
                <h3 className={cardTitle}>
                  <Share2 aria-hidden="true" className="size-5 text-lime" /> {c.social}
                </h3>
                <ul className="mt-2 flex gap-6">
                  <li>
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4 hover:text-lime"
                    >
                      Instagram<span className="sr-only">{t.newTab}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4 hover:text-lime"
                    >
                      Facebook<span className="sr-only">{t.newTab}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form (demo only) */}
          <div id="book" className="scroll-mt-28 lg:col-span-7">
            <h2 className="display text-[clamp(2.6rem,7vw,4rem)]">
              <Marked t={c.formTitle} />
            </h2>
            <ol className="mt-6 space-y-2">
              {c.steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-paper/85">
                  <span className="display text-xl text-lime" aria-hidden="true">
                    {i + 1}.
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-md border-l-4 border-sky bg-panel px-4 py-3 text-sm text-paper/90">{c.formNote}</p>
            <div className="mt-6 rounded-lg border border-line bg-panel p-6 sm:p-8">
              <ContactForm lang={lang} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
