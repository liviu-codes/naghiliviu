import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { SkipLink } from "@/components/SkipLink";
import { en } from "@/lib/i18n/en";

export function generateStaticParams() {
  return en.projects.items
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = en.projects.items.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} — ${en.hero.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = en.projects.items.some((item) => item.slug === slug);
  if (!exists) notFound();

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        <ProjectCaseStudy slug={slug} />
      </main>
      <Footer />
    </>
  );
}
