import { HeartHandshake, Scale, ShieldCheck, Sprout } from "lucide-react";
import { Container, CtaBand, Eyebrow, Mark, PhotoBox, SectionHeading } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { photos } from "@/lib/photos";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  title: "About Maya, Manchester Personal Trainer",
  description:
    "Meet Maya Stone, a fictional Manchester personal trainer. Her story, training philosophy and personal approach to strength, habits and steady progress.",
  path: "/about",
});

const philosophy = [
  {
    title: "Strength first",
    text: "Getting stronger makes everyday life easier, from carrying shopping to climbing stairs. It is the base for everything else.",
  },
  {
    title: "Consistency over intensity",
    text: "Two good sessions every week beat one heroic week a month. We plan for the long run, not the next seven days.",
  },
  {
    title: "Progress you can measure",
    text: "We track lifts, attendance, sleep and energy, so you can see progress even when the mirror is slow to show it.",
  },
];

const steps = [
  { title: "Free consultation", text: "A relaxed 20-minute chat about your goals, your week and any worries." },
  { title: "Movement check", text: "In your first session we look at how you move today and what feels good." },
  { title: "Your plan", text: "A written plan matched to your goals, your kit and the time you really have." },
  { title: "Review and adjust", text: "Every four weeks we look at what is working and change what is not." },
];

const values = [
  { icon: ShieldCheck, title: "Honest", text: "Realistic timelines and no promises that sound too good to be true." },
  { icon: HeartHandshake, title: "Patient", text: "Every question is a good question, and every starting point is valid." },
  { icon: Sprout, title: "Inclusive", text: "Every age, size and fitness level is welcome in the studio." },
  { icon: Scale, title: "Evidence-led", text: "Methods based on sound training principles, not the latest fad." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Maya"
        title={
          <>
            Coaching for <Mark onLoad>real</Mark> life
          </>
        }
        intro={
          <p>
            Maya Stone is a Manchester personal trainer who helps busy people build strength, energy and routines that
            last. Here is how she got here, and how she coaches.
          </p>
        }
        photo={photos.coachAbout}
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The story"
              title={
                <span id="story-title">
                  From long shifts to <Mark>lifting</Mark>
                </span>
              }
            />
          </div>
          <div className="reveal space-y-5 text-lg text-paper/85 lg:col-span-7">
            <p>
              Maya grew up in Salford and spent most of her twenties working long shifts in hospitality. She joined gyms
              every January and quietly stopped going by March. Nothing stuck, because nothing fitted her life.
            </p>
            <p>
              That changed when a coach taught her to deadlift. For the first time, training had a clear purpose, and
              progress showed up in ways she could measure. She felt stronger, slept better and finally had a routine
              she looked forward to.
            </p>
            <p>
              She qualified as a personal trainer, coached in city centre gyms for several years and then opened her
              own studio on Bridge Street. The aim was simple: a calm, friendly space where people learn to train
              well, without the noise of a big gym.
            </p>
            <p className="text-sm text-mute">
              Maya Stone is a fictional coach created for this student project.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-title" className="border-y border-line bg-panel/60 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Training philosophy"
            title={
              <span id="philosophy-title">
                Three rules for every <Mark>plan</Mark>
              </span>
            }
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <li key={p.title} className="reveal rounded-lg border border-line bg-ink p-7">
                <p className="display text-6xl text-lime" aria-hidden="true">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-mute">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Personal approach */}
      <section aria-labelledby="approach-title" className="py-20 lg:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <PhotoBox
            photo={photos.studio}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="reveal aspect-[4/3] rounded-lg lg:sticky lg:top-28 lg:col-span-5"
          />
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Personal approach"
              title={
                <span id="approach-title">
                  How we <Mark>start</Mark>
                </span>
              }
              intro="Every client follows the same four steps, so you always know what comes next."
            />
            <ol className="mt-10 space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-5 rounded-lg border border-line bg-panel p-6">
                  <span
                    aria-hidden="true"
                    className="display flex size-12 shrink-0 items-center justify-center rounded-md bg-lime text-2xl text-ink"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-1 text-mute">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="border-t border-line py-20 lg:py-28">
        <Container>
          <Eyebrow>Values</Eyebrow>
          <h2 id="values-title" className="display mt-4 text-[clamp(2.6rem,7vw,4.5rem)]">
            What you can <Mark>count</Mark> on
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal bg-ink p-7">
                <Icon aria-hidden="true" className="size-7 text-sky" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-mute">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title={
          <>
            Ready to <Mark dark>start</Mark>?
          </>
        }
        text="Book a free 20-minute consultation and find out which programme suits you best."
      />
    </>
  );
}
