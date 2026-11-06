import { CoachingPage } from "@/components/pages/Coaching";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "en",
  title: "Personal fitness coaching in Saint-Lô",
  description: "Sessions adapted to your goal and level, motivation, regular follow-up and nutrition advice in Saint-Lô. Prices on request by phone.",
  path: "/programmes",
});

export default function Page() {
  return <CoachingPage lang="en" />;
}
