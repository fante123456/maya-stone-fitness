import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { hours, navFor, ui, type Lang } from "@/lib/i18n";
import { photoCredits } from "@/lib/photos";
import { Logo } from "./Logo";
import { Container } from "./ui";

const linkClass = "inline-flex min-h-10 items-center text-paper/85 hover:text-lime";

export function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="display mt-6 max-w-xs text-3xl text-paper">{t.motto}</p>
          <p className="mt-4 max-w-sm text-sm text-mute">{t.footerText}</p>
        </div>

        <nav aria-label={t.pagesTitle} className="lg:col-span-2">
          <h2 className="text-xs font-bold tracking-[0.18em] text-mute uppercase">{t.pagesTitle}</h2>
          <ul className="mt-4 space-y-1">
            {navFor(lang).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold tracking-[0.18em] text-mute uppercase">{t.contactTitle}</h2>
          <div className="mt-4 space-y-3">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" />
              <span className="text-paper/85">{t.location}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone aria-hidden="true" className="size-4 shrink-0 text-lime" />
              <a href={site.phoneHref} className={linkClass}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} underline underline-offset-4`}>
                {t.maps}
                <span className="sr-only">{t.newTab}</span>
              </a>
            </p>
          </div>
          <h2 className="mt-8 text-xs font-bold tracking-[0.18em] text-mute uppercase">{t.followTitle}</h2>
          <ul className="mt-3 flex gap-5">
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram<span className="sr-only">{t.newTab}</span>
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Facebook<span className="sr-only">{t.newTab}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold tracking-[0.18em] text-mute uppercase">{t.hoursTitle}</h2>
          <dl className="mt-4 space-y-2 text-sm">
            {hours[lang].map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-line pb-2">
                <dt className="text-paper/85">{h.days}</dt>
                <dd className="text-right font-semibold whitespace-nowrap">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="space-y-3 py-8 text-xs leading-relaxed text-mute">
          <p className="text-sm font-semibold text-paper/90">{t.demoLine}</p>
          <p>
            {t.photoCredits}{" "}
            {photoCredits.map((c, i) => (
              <span key={c.name}>
                <a href={c.url} className="underline decoration-line underline-offset-2 hover:text-paper">
                  {c.name}
                </a>
                {i < photoCredits.length - 2 ? ", " : i === photoCredits.length - 2 ? t.and : "."}
              </span>
            ))}
          </p>
        </Container>
      </div>
    </footer>
  );
}
