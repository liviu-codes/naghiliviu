import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { GithubStats } from "@/components/GithubStats";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <About githubStats={<GithubStats />} />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
