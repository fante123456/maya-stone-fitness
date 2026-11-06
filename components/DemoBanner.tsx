import { ui, type Lang } from "@/lib/i18n";

/** Thin strip at the very top of every page: this is not the business's official site. */
export function DemoBanner({ lang }: { lang: Lang }) {
  return (
    <p className="bg-sky px-4 py-1.5 text-center text-xs font-bold tracking-wide text-ink sm:text-sm">
      {ui[lang].banner}
    </p>
  );
}
