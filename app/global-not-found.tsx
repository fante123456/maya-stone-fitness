import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { SiteShell } from "@/components/SiteShell";
import { ButtonLink, Container } from "@/components/ui";
import "./globals.css";

// Unmatched URLs (FR and EN) land here. Exported as 404.html for o2switch.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Page introuvable | Accro Temple",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <SiteShell lang="fr">
      <Container className="py-24 lg:py-32">
        <p className="display text-8xl text-lime">404</p>
        <h1 className="display mt-4 text-[clamp(2.6rem,7vw,4.5rem)]">Page introuvable</h1>
        <p className="mt-4 max-w-xl text-lg text-paper/85">
          Cette page n&apos;existe pas. <span lang="en">This page does not exist.</span>
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Retour à l&apos;accueil
          </ButtonLink>
          <ButtonLink href="/en/" variant="outline">
            <span lang="en">English home page</span>
          </ButtonLink>
        </div>
      </Container>
    </SiteShell>
  );
}
