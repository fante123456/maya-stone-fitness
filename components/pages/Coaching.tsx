import Link from "next/link";
import { Phone } from "lucide-react";
import { ButtonLink, Container, CtaBand, Marked } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { ServiceDetail } from "@/components/ServiceCard";
import { services } from "@/lib/coaching";
import { site } from "@/lib/site";
import { ui, type Lang } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Coaching",
    h1: ["Un coaching ", "personnalisé", ""] as const,
    lead: "Des séances adaptées à votre objectif et à votre niveau, débutant ou confirmé, avec de la motivation, un suivi régulier et des conseils nutrition.",
    jump: "Aller à une partie du coaching",
    pricesTitle: "Tarifs : ",
    pricesValue: "sur demande",
    pricesText: "Les tarifs ne sont pas publiés. Ils sont donnés lors du premier échange par téléphone, avec le lieu des séances.",
    details: "Détail du coaching",
  },
  en: {
    eyebrow: "Coaching",
    h1: ["Personal ", "coaching", ""] as const,
    lead: "Sessions adapted to your goal and your level, beginner or experienced, with motivation, regular follow-up and nutrition advice.",
    jump: "Jump to a part of the coaching",
    pricesTitle: "Prices: ",
    pricesValue: "on request",
    pricesText: "Prices are not published. They are given during the first phone conversation, together with the session location.",
    details: "Coaching details",
  },
};

export function CoachingPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const t = ui[lang];
  return (
    <>
      <PageIntro lang={lang} eyebrow={c.eyebrow} title={<Marked t={c.h1} onLoad />} intro={<p>{c.lead}</p>}>
        <nav aria-label={c.jump} className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`#${s.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold text-paper/85 transition-colors hover:border-lime hover:text-lime"
                >
                  {s.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageIntro>

      {/* Prices: not public */}
      <section aria-labelledby="prices-title" className="border-b border-line py-12">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 id="prices-title" className="display text-4xl">
              {c.pricesTitle}
              <span className="text-lime">{c.pricesValue}</span>
            </h2>
            <p className="mt-3 text-mute">{c.pricesText}</p>
          </div>
          <ButtonLink href={site.phoneHref} className="shrink-0 self-start md:self-auto">
            <Phone aria-hidden="true" className="size-4" />
            {t.callCoach} · {site.phoneDisplay}
          </ButtonLink>
        </Container>
      </section>

      <section aria-label={c.details} className="py-16 lg:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <ServiceDetail key={s.slug} service={s} index={i} lang={lang} />
          ))}
        </Container>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
