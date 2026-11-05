import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Clock, Users } from "lucide-react";
import type { Programme } from "@/lib/programmes";
import { ButtonLink, PhotoBox } from "./ui";

/** Compact card for the Home page preview grid. */
export function ProgrammePreview({ programme, index }: { programme: Programme; index: number }) {
  return (
    <article className="reveal group relative flex flex-col overflow-hidden rounded-lg border border-line bg-panel transition-colors duration-200 hover:border-lime/60">
      <PhotoBox
        photo={programme.image}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[16/9] sm:aspect-[4/3]"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="display text-lg text-lime">0{index + 1}</p>
        <h3 className="display mt-1 text-[2rem]">{programme.title}</h3>
        <p className="mt-3 text-[0.95rem] text-mute">{programme.short}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p className="text-sm text-mute">
            From <span className="display text-2xl text-paper">{programme.price}</span> {programme.priceUnit}
          </p>
          <Link
            href={`/programmes#${programme.slug}`}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-graphite text-paper transition-colors group-hover:bg-lime group-hover:text-ink after:absolute after:inset-0"
          >
            <ArrowRight aria-hidden="true" className="size-5" />
            <span className="sr-only">{programme.title} details</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Full card for the Programmes page. Every card has the same structure so they are easy to compare. */
export function ProgrammeDetail({ programme, index }: { programme: Programme; index: number }) {
  const specs = [
    { icon: Clock, label: "Session length", value: programme.sessionLength },
    { icon: CalendarDays, label: "Per week", value: programme.perWeek },
    { icon: Users, label: "Format", value: programme.format },
  ];
  return (
    <article
      id={programme.slug}
      aria-labelledby={`${programme.slug}-title`}
      className="reveal flex scroll-mt-28 flex-col overflow-hidden rounded-lg border border-line bg-panel"
    >
      <PhotoBox
        photo={programme.image}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-[16/9]"
        eager={index === 0}
      />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id={`${programme.slug}-title`} className="display text-[clamp(2.4rem,6vw,3.25rem)]">
            {programme.title}
          </h2>
          <span className="display mt-1 text-2xl text-lime" aria-hidden="true">
            0{index + 1}
          </span>
        </div>
        <p className="mt-4 text-paper/90">{programme.description}</p>

        <div className="mt-6 rounded-md border-l-4 border-lime bg-ink px-5 py-4">
          <h3 className="text-xs font-bold tracking-[0.18em] text-lime uppercase">Who it is for</h3>
          <p className="mt-2 text-[0.95rem] text-paper/90">{programme.forWho}</p>
        </div>

        <dl className="mt-6 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
          {specs.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-panel p-4">
              <dt className="flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-mute uppercase">
                <Icon aria-hidden="true" className="size-4 text-sky" />
                {label}
              </dt>
              <dd className="mt-1.5 font-semibold">{value}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-6 text-xs font-bold tracking-[0.18em] text-mute uppercase">Included</h3>
        <ul className="mt-3 space-y-2">
          {programme.includes.map((item) => (
            <li key={item} className="flex gap-3 text-[0.95rem]">
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>

        {programme.note && <p className="mt-5 text-sm text-mute">{programme.note}</p>}

        <div className="mt-auto flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-mute">
            From <span className="display text-4xl text-paper">{programme.price}</span>{" "}
            <span className="text-sm">{programme.priceUnit}</span>
          </p>
          <ButtonLink href="/contact#book" arrow>
            Book a free consultation
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
