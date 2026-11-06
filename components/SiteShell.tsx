import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Big_Shoulders, Manrope } from "next/font/google";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DemoBanner } from "./DemoBanner";
import { SITE_URL, site } from "@/lib/site";
import { ui, type Lang } from "@/lib/i18n";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  // next/font has no metric overrides for this family; use a condensed system fallback instead.
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "Roboto Condensed", "sans-serif"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const fontClasses = `${bigShoulders.variable} ${manrope.variable} antialiased`;

/** Shared root metadata. Practice demo: never indexed by search engines. */
export function rootMetadata(lang: Lang): Metadata {
  const fr = lang === "fr";
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: fr ? "Accro Temple | Coach sportif à Saint-Lô" : "Accro Temple | Fitness coach in Saint-Lô",
      template: "%s | Accro Temple",
    },
    description: fr
      ? "Accro Temple : coaching sportif personnalisé avec Hassane Yahya, éducateur sportif diplômé d'État, à Saint-Lô."
      : "Accro Temple: personal fitness coaching with Hassane Yahya, a state-qualified sports coach, in Saint-Lô.",
    applicationName: site.name,
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: { type: "website", locale: fr ? "fr_FR" : "en_GB", siteName: site.name },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#101010",
  colorScheme: "dark",
};

export function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang === "fr" ? "fr-FR" : "en-GB"} className={fontClasses}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-lime px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {ui[lang].skip}
        </a>
        <DemoBanner lang={lang} />
        <Header lang={lang} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
