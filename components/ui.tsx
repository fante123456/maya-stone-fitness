import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Photo } from "@/lib/photos";
import { site } from "@/lib/site";
import { ui, type Lang } from "@/lib/i18n";

type ButtonVariant = "primary" | "outline" | "dark";

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-[0.95rem] font-bold whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 ease-out active:translate-y-px";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-lime text-ink hover:bg-paper",
  outline: "border border-paper/35 text-paper hover:border-lime hover:text-lime",
  dark: "bg-ink text-paper hover:bg-graphite focus-visible:outline-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  arrow?: boolean;
  /** Opens in a new tab (Google Maps, social links). */
  external?: boolean;
  className?: string;
}) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.5} />}
    </>
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

/** Signature lime stroke under one key word. */
export function Mark({
  children,
  onLoad = false,
  dark = false,
}: {
  children: ReactNode;
  onLoad?: boolean;
  dark?: boolean;
}) {
  return (
    <span className={`mark${onLoad ? " mark-load" : ""}${dark ? " mark-dark" : ""}`}>
      {children}
    </span>
  );
}

/** Renders a title stored as [before, marked word, after]. */
export function Marked({
  t,
  onLoad = false,
  dark = false,
}: {
  t: readonly [string, string, string];
  onLoad?: boolean;
  dark?: boolean;
}) {
  return (
    <>
      {t[0]}
      <Mark onLoad={onLoad} dark={dark}>
        {t[1]}
      </Mark>
      {t[2]}
    </>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-sky uppercase ${className}`}
    >
      <span aria-hidden="true" className="h-px w-6 bg-sky" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="display text-[clamp(2.6rem,7vw,4.5rem)]">{title}</h2>
      {intro && <p className="mt-5 text-lg text-mute">{intro}</p>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 ${className}`}>{children}</div>;
}

/**
 * next/image in a sized box. Lazy by default.
 * preload: Home hero only. eager: the top image of an inner page (loads first, no preload tag).
 */
export function PhotoBox({
  photo,
  lang,
  sizes,
  className = "",
  preload = false,
  eager = false,
  illustration = false,
}: {
  photo: Photo;
  lang: Lang;
  sizes: string;
  className?: string;
  preload?: boolean;
  eager?: boolean;
  /** Small "Illustration photo" tag, for pictures of people that are not Hassane. */
  illustration?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-graphite ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt[lang]}
        fill
        sizes={sizes}
        quality={70}
        preload={preload}
        {...(eager ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
        className="object-cover"
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
      {illustration && (
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-3 rounded-sm bg-ink/85 px-2 py-1 text-[0.7rem] font-bold tracking-[0.12em] text-paper/90 uppercase"
        >
          {ui[lang].illustration}
        </span>
      )}
    </div>
  );
}

/** Lime call-to-action band. The button calls Hassane (the only real booking channel). */
export function CtaBand({ lang, title, text }: { lang: Lang; title?: ReactNode; text?: string }) {
  const t = ui[lang];
  return (
    <section aria-labelledby="cta-title" className="bg-lime text-ink">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="display text-[clamp(2.6rem,7vw,4.75rem)]">
            {title ?? <Marked t={t.ctaTitle} dark />}
          </h2>
          <p className="mt-4 max-w-xl text-lg font-medium text-ink/80">{text ?? t.ctaText}</p>
        </div>
        <ButtonLink href={site.phoneHref} variant="dark" arrow className="shrink-0">
          {t.callCoach} · {site.phoneDisplay}
        </ButtonLink>
      </Container>
    </section>
  );
}
