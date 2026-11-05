import Link from "next/link";
import { ArrowRight, CalendarCheck, ClipboardList, Dumbbell, MessageCircle } from "lucide-react";
import { ButtonLink, Container, CtaBand, Eyebrow, Mark, PhotoBox, SectionHeading } from "@/components/ui";
import { ProgrammePreview } from "@/components/ProgrammeCard";
import { TestimonialGrid } from "@/components/Testimonials";
import { programmes, testimonials } from "@/lib/programmes";
import { photos } from "@/lib/photos";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  title: "Maya Stone Fitness | Personal Trainer in Manchester",
  absoluteTitle: true,
  description:
    "Maya Stone Fitness is a fictional personal training brand in Manchester offering strength coaching, online fitness plans and lifestyle support.",
  path: "/",
});

const facts = [
  { value: "60", unit: "min", label: "Studio sessions" },
  { value: "4", unit: "max", label: "People per strength group" },
  { value: "20", unit: "min", label: "Free first consultation" },
  { value: "6", unit: "days", label: "Open Monday to Saturday" },
];

const reasons = [
  {
    icon: ClipboardList,
    title: "A plan written for you",
    text: "Your goals, history and timetable shape every session. No copy-and-paste programmes.",
  },
  {
    icon: Dumbbell,
    title: "Technique before load",
    text: "You learn to move well first, then add weight steadily. Strong, safe and confident.",
  },
  {
    icon: CalendarCheck,
    title: "Built around real life",
    text: "Early mornings, lunch breaks or evenings. Plans flex when work and family get busy.",
  },
  {
    icon: MessageCircle,
    title: "Support between sessions",
    text: "Quick check-ins, form feedback and honest answers, so you never feel stuck.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <Container className="grid gap-10 pt-10 pb-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pt-16 lg:pb-20">
          <div className="lg:col-span-7 lg:pb-6">
            <Eyebrow>Personal trainer · Manchester</Eyebrow>
            <h1 id="hero-title" className="display mt-5 text-[clamp(3.1rem,13.5vw,6.25rem)] lg:text-[clamp(3rem,7vw,6.25rem)]">
              Stronger body,
              <br />
              clearer mind,
              <br />
              better <Mark onLoad>lifestyle</Mark>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-paper/85 sm:text-xl">
              Coaching from Maya Stone in a calm city centre studio and online. Strength training and simple habits,
              planned around your week, your body and your pace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#book" arrow>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/programmes" variant="outline">
                View programmes
              </ButtonLink>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <PhotoBox
              photo={photos.coachHero}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] rounded-lg sm:aspect-[16/11] lg:aspect-[4/5]"
              preload
            />
            <p className="absolute bottom-4 left-4 rounded-md bg-ink/90 px-3 py-2 text-sm font-semibold">
              <span className="text-lime">Maya Stone</span> · Strength and lifestyle coach
            </p>
          </div>
        </Container>

        {/* Key facts about the service (not results claims) */}
        <div className="border-y border-line bg-panel">
          <Container>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex flex-col-reverse gap-1 py-6 ${i % 2 === 1 ? "pl-5" : ""} ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${i % 2 === 1 ? "border-l border-line lg:border-l" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
                >
                  <dt className="text-sm text-mute">{f.label}</dt>
                  <dd className="display text-5xl text-paper">
                    {f.value}
                    <span className="ml-1 text-2xl text-lime">{f.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* Coach intro */}
      <section aria-labelledby="intro-title" className="py-20 lg:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <PhotoBox
            photo={photos.coachIntro}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="reveal aspect-[4/5] rounded-lg sm:aspect-[3/2] lg:col-span-5 lg:aspect-[4/5]"
          />
          <div className="reveal lg:col-span-7">
            <Eyebrow>Meet your coach</Eyebrow>
            <h2 id="intro-title" className="display mt-4 text-[clamp(2.6rem,7vw,4.5rem)]">
              Hi, I&rsquo;m Maya. Let&rsquo;s get you <Mark>stronger</Mark>
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg text-paper/85">
              <p>
                I coach busy people who want to feel capable in their bodies again. Some have never lifted a weight.
                Others have tried every app and still feel stuck.
              </p>
              <p>
                My job is to make training clear, steady and enjoyable. We start with how you move today, set goals
                that matter to you, and build habits that still work on your busiest weeks.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex min-h-11 items-center gap-2 font-bold text-lime underline-offset-4 hover:underline"
            >
              Read Maya&rsquo;s story <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Programmes */}
      <section aria-labelledby="programmes-title" className="border-t border-line bg-panel/60 py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Programmes"
              title={
                <span id="programmes-title">
                  Four ways to <Mark>train</Mark>
                </span>
              }
              intro="In the studio, in a small group or online. Same coaching standard, different formats."
            />
            <ButtonLink href="/programmes" variant="outline" arrow className="shrink-0 self-start md:self-auto">
              Compare programmes
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((p, i) => (
              <ProgrammePreview key={p.slug} programme={p} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Maya */}
      <section aria-labelledby="why-title" className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why train with Maya"
              title={
                <span id="why-title">
                  Coaching that <Mark>fits</Mark> your life
                </span>
              }
              intro="No shouting, no crash diets, no one-size plan. Just expert coaching and a routine you can keep."
            />
          </div>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {reasons.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal bg-ink p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-lime text-ink">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-mute">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="voices-title" className="border-t border-line py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Client voices"
              title={
                <span id="voices-title">
                  What clients <Mark>say</Mark>
                </span>
              }
              intro="Fictional demo testimonials, written to show how real client feedback would appear."
            />
            <Link
              href="/results"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start font-bold whitespace-nowrap text-lime underline-offset-4 hover:underline md:self-auto"
            >
              How progress is tracked <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-12">
            <TestimonialGrid items={testimonials.slice(0, 3)} />
          </div>
        </Container>
      </section>

      <CtaBand
        title={
          <>
            Start with a <Mark dark>free</Mark> chat
          </>
        }
        text="Twenty minutes, no pressure. Tell Maya what you want to change and leave with a clear next step."
      />
    </>
  );
}
