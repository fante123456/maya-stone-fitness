import type { ReactNode } from "react";
import { SiteShell, rootMetadata, viewport as shellViewport } from "@/components/SiteShell";
import "../globals.css";

export const metadata = rootMetadata("en");
export const viewport = shellViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
