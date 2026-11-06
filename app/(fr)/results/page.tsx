import { ReviewsPage } from "@/components/pages/Reviews";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "fr",
  title: "Avis clients – coach sportif à Saint-Lô",
  description: "Accro Temple est noté 5,0/5 sur Google (31 avis). Les avis des clients de Hassane Yahya, coach sportif à Saint-Lô.",
  path: "/results",
});

export default function Page() {
  return <ReviewsPage lang="fr" />;
}
