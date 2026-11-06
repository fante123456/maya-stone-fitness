import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { Service } from "@/lib/coaching";
import { site } from "@/lib/site";
import { localHref, ui, type Lang } from "@/lib/i18n";
import { ButtonLink, PhotoBox } from "./ui";

/** Compact card for the Home page preview grid. */
export function ServicePreview({ service, index, lang }: { service: Service; index: number; lang: Lang }) {
  return (
    <article className="reveal group relative flex flex-col overflow-hidden rounded-lg border border-line bg-panel transition-colors duration-200 hover:border-lime/60">
      <PhotoBox
        photo={service.image}
        lang={lang}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[16/9] sm:aspect-[4/3]"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="display text-lg text-lime">0{index + 1}</p>
        <h3 className="display mt-1 text-[2rem]">{service.title[lang]}</h3>
        <p className="mt-3 text-[0.95rem] text-mute">{service.short[lang]}</p>
        <div className="mt-auto flex justify-end pt-6">
          <Link
            href={localHref(lang, `/programmes#${service.slug}`)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-graphite text-paper transition-colors group-hover:bg-lime group-hover:text-ink after:absolute after:inset-0"
          >
            <ArrowRight aria-hidden="true" className="size-5" />
            <span className="sr-only">
              {service.title[lang]}
              {lang === "fr" ? " : en savoir plus" : ": learn more"}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Full card for the Coaching page. Every card has the same structure. */
export function ServiceDetail({ service, index, lang }: { service: Service; index: number; lang: Lang }) {
  const t = ui[lang];
  return (
    <article
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className="reveal flex scroll-mt-28 flex-col overflow-hidden rounded-lg border border-line bg-panel"
    >
      <PhotoBox
        photo={service.image}
        lang={lang}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-[16/9]"
        eager={index === 0}
      />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id={`${service.slug}-title`} className="display text-[clamp(2.4rem,6vw,3.25rem)]">
            {service.title[lang]}
          </h2>
          <span className="display mt-1 text-2xl text-lime" aria-hidden="true">
            0{index + 1}
          </span>
        </div>
        <p className="mt-4 text-paper/90">{service.description[lang]}</p>

        <div className="mt-6 rounded-md border-l-4 border-lime bg-ink px-5 py-4">
          <h3 className="text-xs font-bold tracking-[0.18em] text-lime uppercase">
            {lang === "fr" ? "Pour qui" : "Who it is for"}
          </h3>
          <p className="mt-2 text-[0.95rem] text-paper/90">{service.forWho[lang]}</p>
        </div>

        <div className="mt-auto flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-mute">{t.prices}</p>
          <ButtonLink href={site.phoneHref} className="shrink-0">
            <Phone aria-hidden="true" className="size-4" />
            {t.call}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
