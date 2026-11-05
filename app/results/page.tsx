import { Activity, BatteryCharging, CalendarCheck, Footprints, Moon, Ruler, Shirt, Target } from "lucide-react";
import { Container, CtaBand, Eyebrow, Mark, PhotoBox, SectionHeading } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { TestimonialGrid } from "@/components/Testimonials";
import { testimonials } from "@/lib/programmes";
import { photos } from "@/lib/photos";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  title: "Client Progress and Results",
  description:
    "How Maya Stone Fitness in Manchester tracks client progress without before-and-after photos: goals, consistency, habits and demo testimonials.",
  path: "/results",
});

const goals = [
  { icon: Target, title: "Lift with confidence", text: "Learn the main lifts properly and feel at home in a gym." },
  { icon: Activity, title: "Move more comfortably", text: "Build strength for stairs, school runs and long days." },
  { icon: Footprints, title: "Train for an event", text: "Prepare steadily for a first 5K, 10K or a walking challenge." },
  { icon: BatteryCharging, title: "Have more energy", text: "Feel less flat in the afternoon and more able to say yes." },
];

const phases = [
  { weeks: "Weeks 1 to 2", title: "Foundations", text: "Learn the movements, find a starting weight and set a routine." },
  { weeks: "Weeks 3 to 6", title: "Build", text: "Add load and volume steadily. Sessions start to feel familiar." },
  { weeks: "Weeks 7 to 10", title: "Progress", text: "Lifts go up, habits settle and you trust the process." },
  { weeks: "Weeks 11 to 12", title: "Review", text: "Look back at your log, celebrate wins and plan the next block." },
];

const habits = [
  { photo: photos.run, title: "Moving more", text: "Walking to work, weekend jogs and a daily step goal that suits you." },
  { photo: photos.meal, title: "Regular meals", text: "Simple, balanced meals prepared ahead, so busy days stay on track." },
  { photo: photos.stretch, title: "Recovery", text: "Stretching, rest days and better sleep are part of the plan, not extras." },
];

const markers = [
  { icon: CalendarCheck, label: "Sessions attended" },
  { icon: Activity, label: "Strength in key lifts" },
  { icon: Moon, label: "Sleep and energy, rated weekly" },
  { icon: Shirt, label: "How clothes fit and feel" },
  { icon: Ruler, label: "Optional measurements, only if you want them" },
];

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Results"
        title={
          <>
            Progress you can <Mark onLoad>feel</Mark>
          </>
        }
        intro={
          <p>
            You won&rsquo;t find before-and-after photos here. Real progress is steadier and more personal: lifting
            more, moving better and having routines that hold up on busy weeks.
          </p>
        }
        photo={photos.row}
      />

      {/* Client goals */}
      <section aria-labelledby="goals-title" className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Client goals"
            title={
              <span id="goals-title">
                What clients <Mark>work</Mark> on
              </span>
            }
            intro="Most people arrive with one of these goals. Your plan is built around yours."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal rounded-lg border border-line bg-panel p-6">
                <Icon aria-hidden="true" className="size-7 text-lime" />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-mute">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Consistency */}
      <section aria-labelledby="consistency-title" className="border-y border-line bg-panel/60 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Consistency"
              title={
                <span id="consistency-title">
                  Steady beats <Mark>extreme</Mark>
                </span>
              }
              intro="A typical 12-week block. The aim is a rhythm you can repeat, not a short burst you cannot keep up."
            />
            <PhotoBox
              photo={photos.dumbbell}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="reveal mt-10 aspect-[4/3] rounded-lg"
            />
          </div>
          <ol className="relative space-y-4 lg:col-span-7">
            {phases.map((p) => (
              <li key={p.title} className="reveal rounded-lg border border-line bg-ink p-6 sm:p-7">
                <p className="text-xs font-bold tracking-[0.18em] text-sky uppercase">{p.weeks}</p>
                <h3 className="display mt-2 text-4xl">{p.title}</h3>
                <p className="mt-2 text-mute">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Lifestyle */}
      <section aria-labelledby="lifestyle-title" className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Lifestyle changes"
            title={
              <span id="lifestyle-title">
                Habits that <Mark>stick</Mark>
              </span>
            }
            intro="Training is a few hours a week. These everyday habits do the rest."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {habits.map((h) => (
              <li key={h.title} className="reveal overflow-hidden rounded-lg border border-line bg-panel">
                <PhotoBox photo={h.photo} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3]" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{h.title}</h3>
                  <p className="mt-2 text-mute">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How progress is tracked */}
      <section aria-labelledby="tracking-title" className="border-t border-line py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Tracking</Eyebrow>
            <h2 id="tracking-title" className="display mt-4 text-[clamp(2.6rem,7vw,4.5rem)]">
              More than the <Mark>scales</Mark>
            </h2>
            <p className="mt-5 text-lg text-mute">
              Every four weeks you review these markers together with Maya. Everyone progresses at their own rate, so
              there are no guaranteed outcomes, only honest feedback and a clear plan.
            </p>
          </div>
          <ul className="grid gap-3 lg:col-span-7">
            {markers.map(({ icon: Icon, label }) => (
              <li key={label} className="reveal flex items-center gap-4 rounded-lg border border-line bg-panel p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-lime text-ink">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-lg font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="stories-title" className="border-t border-line bg-panel/60 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Client voices"
            title={
              <span id="stories-title">
                In their <Mark>words</Mark>
              </span>
            }
            intro="Fictional demo testimonials that show the kind of feedback clients share."
          />
          <div className="mt-12">
            <TestimonialGrid items={testimonials} />
          </div>
        </Container>
      </section>

      <CtaBand
        title={
          <>
            Your progress <Mark dark>starts</Mark> here
          </>
        }
        text="Book a free consultation to talk through your goals and how we would track them together."
      />
    </>
  );
}
