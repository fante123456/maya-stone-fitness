import type { ReactNode } from "react";
import { SiteShell, rootMetadata, viewport as shellViewport } from "@/components/SiteShell";
import "../globals.css";

export const metadata = rootMetadata("fr");
export const viewport = shellViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return <SiteShell lang="fr">{children}</SiteShell>;
}
