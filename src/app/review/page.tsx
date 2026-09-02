import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewPageContent } from "@/components/ReviewPageContent";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.meta.reviewTitle,
  description: en.meta.reviewDescription,
};

export default function ReviewPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ReviewPageContent />
      </main>
      <Footer />
    </>
  );
}
