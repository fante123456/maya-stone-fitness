import { HomePage } from "@/components/pages/Home";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "fr",
  title: "Accro Temple | Coach sportif à Saint-Lô – Hassane Yahya",
  absoluteTitle: true,
  description: "Coaching sportif personnalisé à Saint-Lô avec Hassane Yahya, éducateur sportif diplômé d'État. Séances adaptées à votre niveau. Noté 5,0/5 sur Google.",
  path: "/",
});

export default function Page() {
  return <HomePage lang="fr" />;
}
