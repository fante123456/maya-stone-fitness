import { ContactPage } from "@/components/pages/Contact";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "fr",
  title: "Contact – coach sportif à Saint-Lô",
  description: "Appelez Hassane Yahya au 07 86 91 99 39 pour un premier échange. Coaching sportif à Saint-Lô (centre), du lundi au dimanche.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage lang="fr" />;
}
