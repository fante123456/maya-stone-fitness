import { ReviewsPage } from "@/components/pages/Reviews";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  lang: "en",
  title: "Client reviews – fitness coach in Saint-Lô",
  description: "Accro Temple is rated 5.0/5 on Google (31 reviews). Reviews from clients of Hassane Yahya, fitness coach in Saint-Lô.",
  path: "/results",
});

export default function Page() {
  return <ReviewsPage lang="en" />;
}
