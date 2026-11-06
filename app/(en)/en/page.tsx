import { HomePage } from "@/components/pages/Home";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "en",
  title: "Accro Temple | Fitness coach in Saint-Lô – Hassane Yahya",
  absoluteTitle: true,
  description: "Personal fitness coaching in Saint-Lô with Hassane Yahya, a state-qualified sports coach. Sessions adapted to your level. Rated 5.0/5 on Google.",
  path: "/",
});

export default function Page() {
  return <HomePage lang="en" />;
}
