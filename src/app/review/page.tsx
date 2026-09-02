import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewPageContent } from "@/components/ReviewPageContent";
import { SkipLink } from "@/components/SkipLink";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.meta.reviewTitle,
  description: en.meta.reviewDescription,
};

export default function ReviewPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        <ReviewPageContent />
      </main>
      <Footer />
    </>
  );
}
