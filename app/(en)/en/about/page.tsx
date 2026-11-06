import { AboutPage } from "@/components/pages/About";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "en",
  title: "Hassane Yahya, fitness coach in Saint-Lô",
  description: "Hassane Yahya, a state-qualified sports coach, offers personal fitness coaching in Saint-Lô: adapted sessions, motivation and regular follow-up.",
  path: "/about",
});

export default function Page() {
  return <AboutPage lang="en" />;
}
