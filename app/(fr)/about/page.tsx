import { AboutPage } from "@/components/pages/About";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "fr",
  title: "Hassane Yahya, coach sportif à Saint-Lô",
  description: "Hassane Yahya, éducateur sportif diplômé d'État, propose du coaching sportif personnalisé à Saint-Lô : séances adaptées, motivation et suivi régulier.",
  path: "/about",
});

export default function Page() {
  return <AboutPage lang="fr" />;
}
