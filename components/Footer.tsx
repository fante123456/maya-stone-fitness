import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { photoCredits } from "@/lib/photos";
import { Logo } from "./Logo";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="display mt-6 max-w-xs text-3xl text-paper">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-sm text-mute">
            Personal training, small-group strength and online coaching from a Manchester city centre studio.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-xs font-bold tracking-[0.18em] text-mute uppercase">Pages</h2>
          <ul className="mt-4 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-paper/85 hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold tracking-[0.18em] text-mute uppercase">Contact</h2>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" />
              <span>
                {site.address.street}
                <br />
                {site.address.city} {site.address.postcode}
                <br />
                {site.address.country}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone aria-hidden="true" className="size-4 shrink-0 text-lime" />
              <a href={site.phoneHref} className="inline-flex min-h-10 items-center hover:text-lime">
                {site.phoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Mail aria-hidden="true" className="size-4 shrink-0 text-lime" />
              <a href={`mailto:${site.email}`} className="inline-flex min-h-10 items-center break-all hover:text-lime">
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold tracking-[0.18em] text-mute uppercase">Studio hours</h2>
          <dl className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-line pb-2">
                <dt className="text-paper/85">{h.days}</dt>
                <dd className="font-semibold">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="space-y-3 py-8 text-xs leading-relaxed text-mute">
          <p>
            Photos from Unsplash by{" "}
            {photoCredits.map((c, i) => (
              <span key={c.name}>
                <a href={c.url} className="underline decoration-line underline-offset-2 hover:text-paper">
                  {c.name}
                </a>
                {i < photoCredits.length - 2 ? ", " : i === photoCredits.length - 2 ? " and " : "."}
              </span>
            ))}
          </p>
          <p>
            Maya Stone Fitness is a fictional brand created for an MX AI Academy student project. The coach, prices and
            testimonials are illustrative. © 2026 Maya Stone Fitness.
          </p>
        </Container>
      </div>
    </footer>
  );
}
