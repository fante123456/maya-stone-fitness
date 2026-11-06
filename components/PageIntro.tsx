import type { ReactNode } from "react";
import type { Photo } from "@/lib/photos";
import type { Lang } from "@/lib/i18n";
import { Container, Eyebrow, PhotoBox } from "./ui";

/** Top section of inner pages: eyebrow, the page's single H1, intro, optional photo. */
export function PageIntro({
  lang,
  eyebrow,
  title,
  intro,
  photo,
  illustration = false,
  children,
}: {
  lang: Lang;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  photo?: Photo;
  illustration?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <Container
        className={`grid gap-10 pt-12 pb-14 lg:pt-20 lg:pb-20 ${photo ? "lg:grid-cols-12 lg:items-end lg:gap-12" : ""}`}
      >
        <div className={photo ? "lg:col-span-7" : "max-w-4xl"}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display mt-5 text-[clamp(3rem,11vw,7rem)] leading-[1.04]">{title}</h1>
          <div className="mt-6 max-w-2xl text-lg text-paper/85 sm:text-xl">{intro}</div>
          {children}
        </div>
        {photo && (
          <PhotoBox
            photo={photo}
            lang={lang}
            illustration={illustration}
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="aspect-[16/10] rounded-lg lg:col-span-5 lg:aspect-[4/5]"
            eager
          />
        )}
      </Container>
    </section>
  );
}
