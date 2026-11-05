import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/programmes";
import { DemoTag } from "./ui";

export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  // Two columns for an even count so no card is left alone on the last row.
  const cols = items.length % 3 === 0 ? "lg:grid-cols-3" : "md:grid-cols-2";
  return (
    <ul className={`grid gap-4 ${cols}`}>
      {items.map((t) => (
        <li key={t.name} className="reveal">
          <figure className="flex h-full flex-col rounded-lg border border-line bg-panel p-6">
            <div className="flex items-center justify-between gap-3">
              <Quote aria-hidden="true" className="size-7 text-lime" />
              <DemoTag />
            </div>
            <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-paper/95">
              <p>&ldquo;{t.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4 text-sm">
              <span className="font-bold text-paper">{t.name}</span>
              <span className="text-mute"> · {t.programme}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
