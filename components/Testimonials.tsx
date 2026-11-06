import { Quote } from "lucide-react";
import type { Review } from "@/lib/coaching";
import type { Lang } from "@/lib/i18n";

/** Real Google reviews. In English they are translations and say so. */
export function TestimonialGrid({ items, lang }: { items: Review[]; lang: Lang }) {
  const cols = items.length % 3 === 0 ? "lg:grid-cols-3" : "md:grid-cols-2";
  return (
    <ul className={`grid gap-4 ${cols}`}>
      {items.map((r) => (
        <li key={r.name} className="reveal">
          <figure className="flex h-full flex-col rounded-lg border border-line bg-panel p-6">
            <Quote aria-hidden="true" className="size-7 text-lime" />
            <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-paper/95" lang={lang}>
              <p>{lang === "fr" ? `« ${r.fr} »` : `“${r.en}”`}</p>
              {lang === "en" && <p className="mt-3 text-sm text-mute">(translated from French)</p>}
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4 text-sm">
              <span className="font-bold text-paper">{r.name}</span>
              <span className="text-mute">{lang === "fr" ? " · Avis Google" : " · Google review"}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
