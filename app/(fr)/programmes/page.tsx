import { CoachingPage } from "@/components/pages/Coaching";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "fr",
  title: "Coaching sportif personnalisé à Saint-Lô",
  description: "Séances adaptées à votre objectif et à votre niveau, motivation, suivi régulier et conseils nutrition à Saint-Lô. Tarifs sur demande par téléphone.",
  path: "/programmes",
});

export default function Page() {
  return <CoachingPage lang="fr" />;
}
