import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container, Mark, PhotoBox } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { ContactForm } from "@/components/ContactForm";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  title: "Contact and Free Consultation",
  description:
    "Book a free 20-minute consultation with Maya Stone Fitness. Studio 4, 72 Bridge Street, Manchester M3 2RJ. Phone, email and studio opening hours.",
  path: "/contact",
});

const nextSteps = [
  "Maya replies within one working day to arrange a time.",
  "You have a relaxed 20-minute chat, in the studio or by video.",
  "You leave with a recommended programme and no obligation.",
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Book a <Mark onLoad>free</Mark> consultation
          </>
        }
        intro={
          <p>
            Twenty minutes, no pressure and no sales script. Tell Maya what you want to change, and she will suggest the
            best way to start.
          </p>
        }
      />

      <section aria-label="Contact details and booking form" className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <div className="space-y-5 lg:col-span-5">
            <h2 className="sr-only">Contact details</h2>
            <PhotoBox photo={photos.studio} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[16/10] rounded-lg" eager />

            <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line">
              <div className="bg-panel p-6">
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <MapPin aria-hidden="true" className="size-5 text-lime" /> Studio location
                </h3>
                <address className="mt-3 text-paper/85 not-italic">
                  {site.address.street}
                  <br />
                  {site.address.city} {site.address.postcode}
                  <br />
                  {site.address.country}
                </address>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center font-bold text-lime underline underline-offset-4"
                >
                  Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>

              <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-1">
                <div className="bg-panel p-6">
                  <h3 className="flex items-center gap-3 text-lg font-bold">
                    <Phone aria-hidden="true" className="size-5 text-lime" /> Phone
                  </h3>
                  <a href={site.phoneHref} className="mt-2 inline-flex min-h-11 items-center text-xl font-semibold hover:text-lime">
                    {site.phoneDisplay}
                  </a>
                </div>
                <div className="bg-panel p-6">
                  <h3 className="flex items-center gap-3 text-lg font-bold">
                    <Mail aria-hidden="true" className="size-5 text-lime" /> Email
                  </h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 inline-flex min-h-11 items-center font-semibold [overflow-wrap:anywhere] hover:text-lime"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="bg-panel p-6">
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <Clock aria-hidden="true" className="size-5 text-lime" /> Working hours
                </h3>
                <dl className="mt-3 space-y-2">
                  {site.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4 border-b border-line pb-2 last:border-0">
                      <dt className="text-paper/85">{h.days}</dt>
                      <dd className="font-semibold">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="book" className="scroll-mt-28 lg:col-span-7">
            <h2 className="display text-[clamp(2.6rem,7vw,4rem)]">
              Tell Maya about your <Mark>goals</Mark>
            </h2>
            <ol className="mt-6 space-y-2">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-paper/85">
                  <span className="display text-xl text-lime" aria-hidden="true">
                    {i + 1}.
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-lg border border-line bg-panel p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
