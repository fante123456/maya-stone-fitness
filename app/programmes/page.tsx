import Link from "next/link";
import { Container, CtaBand, Mark } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { ProgrammeDetail } from "@/components/ProgrammeCard";
import { programmes } from "@/lib/programmes";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  title: "Programmes and Prices in Manchester",
  description:
    "Compare One to One Coaching, Online Coaching, Strength Training and the Weight Loss Programme: who each is for, session length, sessions per week and prices.",
  path: "/programmes",
});

export default function ProgrammesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Programmes"
        title={
          <>
            Four ways to train with <Mark onLoad>Maya</Mark>
          </>
        }
        intro={
          <p>
            Every programme follows the same coaching standard. Pick the format that fits your goals, budget and week.
            Not sure? The free consultation will help you choose.
          </p>
        }
      >
        <nav aria-label="Jump to a programme" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {programmes.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`#${p.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold text-paper/85 transition-colors hover:border-lime hover:text-lime"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageIntro>

      {/* Quick comparison (tablet and up; on mobile each card carries the same rows) */}
      <section aria-labelledby="compare-title" className="hidden border-b border-line py-16 md:block">
        <Container>
          <h2 id="compare-title" className="display text-4xl">
            At a glance
          </h2>
          <div className="mt-8 overflow-hidden rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Comparison of the four programmes</caption>
              <thead className="bg-panel text-xs tracking-[0.12em] text-mute uppercase">
                <tr>
                  <th scope="col" className="p-4 font-bold">Programme</th>
                  <th scope="col" className="p-4 font-bold">Session length</th>
                  <th scope="col" className="p-4 font-bold">Per week</th>
                  <th scope="col" className="p-4 font-bold">Format</th>
                  <th scope="col" className="p-4 font-bold">From</th>
                </tr>
              </thead>
              <tbody>
                {programmes.map((p) => (
                  <tr key={p.slug} className="border-t border-line">
                    <th scope="row" className="p-4 text-base font-bold">
                      <Link href={`#${p.slug}`} className="hover:text-lime">
                        {p.title}
                      </Link>
                    </th>
                    <td className="p-4 text-paper/85">{p.sessionLength}</td>
                    <td className="p-4 text-paper/85">{p.perWeek}</td>
                    <td className="p-4 text-paper/85">{p.format}</td>
                    <td className="p-4">
                      <span className="display text-2xl text-lime">{p.price}</span>{" "}
                      <span className="text-mute">{p.priceUnit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-mute">Prices are fictional examples for this demo brand.</p>
        </Container>
      </section>

      <section aria-label="Programme details" className="py-16 lg:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          {programmes.map((p, i) => (
            <ProgrammeDetail key={p.slug} programme={p} index={i} />
          ))}
        </Container>
      </section>

      <CtaBand
        title={
          <>
            Not sure which <Mark dark>fits</Mark>?
          </>
        }
        text="Tell Maya about your goals in a free 20-minute consultation and she will recommend the right starting point."
      />
    </>
  );
}
