import { ContactPage } from "@/components/pages/Contact";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "en",
  title: "Contact – fitness coach in Saint-Lô",
  description: "Call Hassane Yahya on 07 86 91 99 39 for a first conversation. Fitness coaching in Saint-Lô (town centre), Monday to Sunday.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage lang="en" />;
}
